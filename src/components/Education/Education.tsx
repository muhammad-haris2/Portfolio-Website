import { motion } from "framer-motion";
import { GraduationCap, MapPin, Calendar } from "lucide-react";
import { personal } from "../../data/personal";
import { SectionHeading } from "../ui/SectionHeading";

export function Education() {
  return (
    <section id="education" className="py-24" aria-labelledby="education-heading">
      <div className="section-container">
        <SectionHeading label="Education" title="Academic Background" align="center" />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="glass mx-auto max-w-xl rounded-2xl p-8 text-center"
        >
          <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-accent-subtle">
            <GraduationCap className="h-7 w-7 text-accent-light" />
          </div>
          <h3 className="text-xl font-semibold text-text-primary">
            {personal.university}
          </h3>
          <p className="mt-2 text-text-secondary">{personal.degree}</p>
          <div className="mt-4 flex flex-wrap items-center justify-center gap-4 text-sm text-text-muted">
            <span className="flex items-center gap-1.5">
              <MapPin className="h-4 w-4" /> {personal.location}
            </span>
            <span className="flex items-center gap-1.5">
              <Calendar className="h-4 w-4" /> Expected {personal.graduationYear}
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
