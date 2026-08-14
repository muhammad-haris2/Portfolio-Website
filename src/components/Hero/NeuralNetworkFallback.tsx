import { cn } from "../../lib/utils";

interface NeuralNetworkFallbackProps {
  className?: string;
}

export function NeuralNetworkFallback({ className }: NeuralNetworkFallbackProps) {
  const nodes = [
    { x: 50, y: 20 },
    { x: 25, y: 45 },
    { x: 75, y: 45 },
    { x: 15, y: 70 },
    { x: 50, y: 65 },
    { x: 85, y: 70 },
    { x: 35, y: 90 },
    { x: 65, y: 90 },
  ];

  const connections = [
    [0, 1], [0, 2], [1, 3], [1, 4], [2, 4], [2, 5],
    [3, 6], [4, 6], [4, 7], [5, 7],
  ];

  return (
    <div
      className={cn(
        "relative flex h-full w-full items-center justify-center",
        className,
      )}
      aria-hidden="true"
    >
      <svg
        viewBox="0 0 100 100"
        className="h-full w-full max-h-[400px] max-w-[400px] opacity-60"
      >
        <defs>
          <radialGradient id="nodeGlow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#60a5fa" stopOpacity="0.8" />
            <stop offset="100%" stopColor="#3b82f6" stopOpacity="0.2" />
          </radialGradient>
        </defs>
        {connections.map(([from, to], i) => (
          <line
            key={i}
            x1={nodes[from].x}
            y1={nodes[from].y}
            x2={nodes[to].x}
            y2={nodes[to].y}
            stroke="rgba(59, 130, 246, 0.25)"
            strokeWidth="0.3"
          />
        ))}
        {nodes.map((node, i) => (
          <circle
            key={i}
            cx={node.x}
            cy={node.y}
            r="2"
            fill="url(#nodeGlow)"
            className="animate-pulse"
            style={{ animationDelay: `${i * 0.2}s` }}
          />
        ))}
      </svg>
    </div>
  );
}
