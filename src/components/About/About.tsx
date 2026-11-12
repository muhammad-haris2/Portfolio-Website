import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { personal } from "../../data/personal";
import { SectionHeading } from "../ui/SectionHeading";

const principles = [
  { number: "01", title: "Start with the evidence", text: "Understand the data, constraints, and failure cases before choosing a model or framework." },
  { number: "02", title: "Design the whole system", text: "Treat retrieval, orchestration, APIs, validation, and the interface as one connected product." },
  { number: "03", title: "Make uncertainty visible", text: "Useful software should know when the available context is not strong enough to support an answer." },
];

export function About() {
  return (
    <section id="about" className="about-section" aria-labelledby="about-heading">
      <div className="page-shell">
        <SectionHeading label="About / Approach" title="AI experiments become valuable when the engineering around them is sound." />
        <div className="about-grid">
          <motion.div className="about-copy" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            {personal.about.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
            <a href={personal.links.github} target="_blank" rel="noopener noreferrer">See how I build on GitHub <ArrowUpRight size={16} aria-hidden="true" /></a>
          </motion.div>
          <div className="principles">
            {principles.map((principle) => (
              <article key={principle.number}>
                <span>{principle.number}</span>
                <div><h3>{principle.title}</h3><p>{principle.text}</p></div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
