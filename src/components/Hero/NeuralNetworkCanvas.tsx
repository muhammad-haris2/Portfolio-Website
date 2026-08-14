import { Suspense, lazy } from "react";
import { useIsLowPerformance } from "../../hooks/useMediaQuery";
import { NeuralNetworkFallback } from "./NeuralNetworkFallback";

const NeuralNetworkScene = lazy(() =>
  import("./NeuralNetwork").then((mod) => ({ default: mod.NeuralNetwork })),
);

interface NeuralNetworkCanvasProps {
  className?: string;
}

export function NeuralNetworkCanvas({ className }: NeuralNetworkCanvasProps) {
  const isLowPerformance = useIsLowPerformance();

  if (isLowPerformance) {
    return <NeuralNetworkFallback className={className} />;
  }

  return (
    <Suspense fallback={<NeuralNetworkFallback className={className} />}>
      <NeuralNetworkScene className={className} />
    </Suspense>
  );
}
