import type { ComponentType } from "react";
import { motion } from "framer-motion";
import {
  Brain,
  BarChart3,
  TextCursorInput,
  Server,
  Database,
  Code2,
} from "lucide-react";
import { skillCategories } from "../../data/skills";
import { SectionHeading } from "../ui/SectionHeading";
import { Badge } from "../ui/Badge";

const iconMap: Record<string, ComponentType<{ className?: string }>> = {
  brain: Brain,
  chart: BarChart3,
  text: TextCursorInput,
  server: Server,
  database: Database,
  code: Code2,
};

export function Skills() {
  return (
    <section id="skills" className="py-24" aria-labelledby="skills-heading">
      <div className="section-container">
        <SectionHeading
          label="Expertise"
          title="Skills & Technologies"
          description="Technologies and frameworks I use to build intelligent, production-ready AI systems."
        />

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {skillCategories.map((category, catIndex) => {
            const Icon = iconMap[category.icon] ?? Code2;
            return (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: catIndex * 0.08 }}
                whileHover={{ y: -4, borderColor: "rgba(59, 130, 246, 0.3)" }}
                className="glass group rounded-xl p-5 transition-all duration-300 hover:shadow-lg hover:shadow-accent-glow"
              >
                <div className="mb-4 flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-accent-subtle">
                    <Icon className="h-5 w-5 text-accent-light" />
                  </div>
                  <h3 className="text-base font-semibold text-text-primary">
                    {category.title}
                  </h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, i) => (
                    <Badge key={skill} index={i + catIndex}>
                      {skill}
                    </Badge>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
