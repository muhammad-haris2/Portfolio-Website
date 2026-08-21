import { motion } from "framer-motion";
import { cn } from "../../lib/utils";
import { useReducedMotion } from "../../hooks/useReducedMotion";

interface ArchitectureStackProps {
  layers: string[];
  className?: string;
}

export function ArchitectureStack({ layers, className }: ArchitectureStackProps) {
  const reducedMotion = useReducedMotion();

  return (
    <div
      className={cn(
        "rounded-xl border border-border bg-white/[0.02] p-4 sm:p-6",
        className,
      )}
      aria-label="Architecture layers"
    >
      <div className="flex flex-col items-center">
        {layers.map((layer, i) => (
          <div key={layer} className="flex flex-col items-center">
            <motion.div
              initial={reducedMotion ? false : { opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: reducedMotion ? 0 : i * 0.06, duration: 0.3 }}
              className={cn(
                "rounded-lg border px-4 py-2.5 text-center text-sm font-medium sm:min-w-[220px]",
                i === 0 || i === layers.length - 1
                  ? "border-accent/40 bg-accent-subtle text-accent-light"
                  : "border-border bg-white/[0.03] text-text-primary",
              )}
            >
              {layer}
            </motion.div>
            {i < layers.length - 1 && (
              <div className="my-1 flex flex-col items-center" aria-hidden="true">
                <div className="h-5 w-px bg-gradient-to-b from-accent/50 to-accent/20" />
                <div className="h-0 w-0 border-x-[4px] border-t-[5px] border-x-transparent border-t-accent/40" />
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
