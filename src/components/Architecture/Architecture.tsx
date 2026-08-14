import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { architectureFlows } from "../../data/journey";
import { SectionHeading } from "../ui/SectionHeading";
import { cn } from "../../lib/utils";

export function Architecture() {
  const [activeFlow, setActiveFlow] = useState(architectureFlows[0].id);
  const currentFlow = architectureFlows.find((f) => f.id === activeFlow)!;

  return (
    <section id="architecture" className="py-24" aria-labelledby="architecture-heading">
      <div className="section-container">
        <SectionHeading
          label="Engineering"
          title="How I Build AI Systems"
          description="Structured approaches to designing reliable, production-ready AI workflows."
          align="center"
        />

        <div className="mb-8 flex flex-wrap justify-center gap-2">
          {architectureFlows.map((flow) => (
            <button
              key={flow.id}
              onClick={() => setActiveFlow(flow.id)}
              className={cn(
                "rounded-lg px-4 py-2 text-sm font-medium transition-all duration-300",
                activeFlow === flow.id
                  ? "accent-gradient text-white shadow-lg shadow-accent-glow"
                  : "glass text-text-secondary hover:text-text-primary",
              )}
              aria-pressed={activeFlow === flow.id}
            >
              {flow.title}
            </button>
          ))}
        </div>

        <div className="glass mx-auto max-w-3xl rounded-2xl p-6 sm:p-10">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeFlow}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
              className="flex flex-col items-center"
            >
              {currentFlow.steps.map((step, i) => (
                <div key={`${activeFlow}-${step}`} className="flex flex-col items-center">
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: i * 0.08 }}
                    className="relative"
                  >
                    <div
                      className={cn(
                        "rounded-xl border px-5 py-3 text-sm font-medium transition-all duration-300",
                        i === 0 || i === currentFlow.steps.length - 1
                          ? "border-accent/40 bg-accent-subtle text-accent-light"
                          : "border-border bg-white/[0.03] text-text-primary",
                      )}
                    >
                      {step}
                    </div>
                    {i < currentFlow.steps.length - 1 && (
                      <motion.div
                        initial={{ scaleY: 0 }}
                        animate={{ scaleY: 1 }}
                        transition={{ delay: i * 0.08 + 0.05, duration: 0.3 }}
                        className="mx-auto my-1 flex flex-col items-center"
                        aria-hidden="true"
                      >
                        <div className="h-6 w-px bg-gradient-to-b from-accent/50 to-accent/20" />
                        <div className="h-0 w-0 border-x-[5px] border-t-[6px] border-x-transparent border-t-accent/40" />
                      </motion.div>
                    )}
                  </motion.div>
                </div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
