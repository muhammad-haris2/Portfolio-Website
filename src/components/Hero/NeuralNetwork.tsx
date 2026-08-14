import { useRef, useMemo, Suspense } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Line } from "@react-three/drei";
import * as THREE from "three";
import { cn } from "../../lib/utils";
import { useReducedMotion } from "../../hooks/useReducedMotion";
import { NeuralNetworkFallback } from "./NeuralNetworkFallback";

interface NeuralNetworkProps {
  className?: string;
}

function NetworkNodes({ nodeCount = 40 }: { nodeCount?: number }) {
  const groupRef = useRef<THREE.Group>(null);
  const mouseRef = useRef({ x: 0, y: 0 });
  const reducedMotion = useReducedMotion();

  const { nodes, connections } = useMemo(() => {
    const nodeList: THREE.Vector3[] = [];
    for (let i = 0; i < nodeCount; i++) {
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(2 * Math.random() - 1);
      const r = 2 + Math.random() * 1.5;
      nodeList.push(
        new THREE.Vector3(
          r * Math.sin(phi) * Math.cos(theta),
          r * Math.sin(phi) * Math.sin(theta),
          r * Math.cos(phi),
        ),
      );
    }

    const connectionList: [THREE.Vector3, THREE.Vector3][] = [];
    for (let i = 0; i < nodeList.length; i++) {
      const distances = nodeList
        .map((node, j) => ({ j, dist: nodeList[i].distanceTo(node) }))
        .filter((d) => d.j !== i)
        .sort((a, b) => a.dist - b.dist);

      for (let k = 0; k < Math.min(2, distances.length); k++) {
        connectionList.push([nodeList[i], nodeList[distances[k].j]]);
      }
    }

    return { nodes: nodeList, connections: connectionList };
  }, [nodeCount]);

  useFrame((state) => {
    if (!groupRef.current || reducedMotion) return;

    groupRef.current.rotation.y += 0.001;
    groupRef.current.rotation.x = mouseRef.current.y * 0.15;
    groupRef.current.rotation.y += mouseRef.current.x * 0.001;

    groupRef.current.position.y = Math.sin(state.clock.elapsedTime * 0.3) * 0.1;
  });

  return (
    <group
      ref={groupRef}
      onPointerMove={(e) => {
        mouseRef.current.x = (e.clientX / window.innerWidth) * 2 - 1;
        mouseRef.current.y = -(e.clientY / window.innerHeight) * 2 + 1;
      }}
    >
      {connections.map(([start, end], i) => (
        <Line
          key={i}
          points={[start, end]}
          color="#3b82f6"
          opacity={0.15}
          transparent
          lineWidth={0.5}
        />
      ))}
      {nodes.map((node, i) => (
        <mesh key={i} position={node}>
          <sphereGeometry args={[0.04, 8, 8]} />
          <meshBasicMaterial color="#60a5fa" transparent opacity={0.8} />
        </mesh>
      ))}
    </group>
  );
}

export function NeuralNetwork({ className }: NeuralNetworkProps) {
  const reducedMotion = useReducedMotion();

  if (reducedMotion) {
    return <NeuralNetworkFallback className={className} />;
  }

  return (
    <div className={cn("h-full w-full", className)}>
      <Canvas
        camera={{ position: [0, 0, 6], fov: 50 }}
        dpr={[1, 1.5]}
        gl={{ antialias: false, alpha: true }}
        style={{ background: "transparent" }}
      >
        <Suspense fallback={null}>
          <ambientLight intensity={0.5} />
          <NetworkNodes nodeCount={35} />
        </Suspense>
      </Canvas>
    </div>
  );
}
