import { motion } from "framer-motion";
import { journeyEntries } from "../../data/journey";
import { SectionHeading } from "../ui/SectionHeading";

export function Journey() {
  return (
    <section id="journey" className="py-24" aria-labelledby="journey-heading">
      <div className="section-container">
        <SectionHeading
          label="Growth"
          title="Learning & Building"
          description="My journey from full-stack development to building intelligent AI systems."
        />

        <div className="relative mx-auto max-w-2xl">
          <div
            className="absolute left-4 top-0 h-full w-px bg-gradient-to-b from-accent/50 via-border to-transparent sm:left-1/2 sm:-translate-x-px"
            aria-hidden="true"
          />

          {journeyEntries.map((entry, index) => (
            <motion.div
              key={entry.year}
              initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative mb-10 pl-12 sm:pl-0 sm:even:pl-[calc(50%+2rem)] sm:odd:pr-[calc(50%+2rem)] sm:odd:text-right"
            >
              <div
                className="absolute left-2.5 top-1 h-3 w-3 rounded-full border-2 border-accent bg-bg-primary sm:left-1/2 sm:-translate-x-1/2"
                aria-hidden="true"
              />

              <span className="mb-1 inline-block text-sm font-bold text-accent">
                {entry.year}
              </span>
              <h3 className="text-lg font-semibold text-text-primary">{entry.title}</h3>
              <ul className="mt-2 space-y-1">
                {entry.items.map((item) => (
                  <li key={item} className="text-sm text-text-secondary">
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
