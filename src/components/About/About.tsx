import { motion } from "framer-motion";
import { Brain, Code2, Database, Layers, Cpu } from "lucide-react";
import { personal } from "../../data/personal";
import { SectionHeading } from "../ui/SectionHeading";

const icons = [Brain, Code2, Database, Layers];

export function About() {
  return (
    <section id="about" className="py-24" aria-labelledby="about-heading">
      <div className="section-container">
        <SectionHeading label="About" title="About Me" />

        <div className="grid items-center gap-12 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="hidden lg:block"
            aria-hidden="true"
          >
            <div className="glass relative flex aspect-[4/5] max-h-[420px] items-center justify-center overflow-hidden rounded-2xl border border-border">
              <div className="absolute inset-0 bg-gradient-to-br from-accent/10 via-transparent to-indigo-500/10" />
              <div className="relative grid grid-cols-2 gap-4 p-8">
                {[Brain, Cpu, Code2, Database].map((Icon, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="flex h-20 w-20 items-center justify-center rounded-xl border border-border bg-white/[0.03]"
                  >
                    <Icon className="h-8 w-8 text-accent-light" />
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-lg leading-relaxed text-text-secondary">
              {personal.about.intro}
            </p>
            <p className="mt-4 text-lg leading-relaxed text-text-secondary">
              {personal.about.focus}
            </p>

            <h3 id="about-heading" className="sr-only">
              Current focus areas
            </h3>
            <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-3">
              {personal.about.areas.map((area, i) => {
                const Icon = icons[i % icons.length];
                return (
                  <motion.div
                    key={area}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.05 }}
                    className="glass flex items-center gap-2 rounded-lg px-3 py-2.5"
                  >
                    <Icon className="h-4 w-4 shrink-0 text-accent" />
                    <span className="text-sm text-text-primary">{area}</span>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
