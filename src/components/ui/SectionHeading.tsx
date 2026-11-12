import { motion } from "framer-motion";
import { cn } from "../../lib/utils";

interface SectionHeadingProps {
  label: string;
  title: string;
  description?: string;
  className?: string;
  theme?: "light" | "dark";
}

export function SectionHeading({ label, title, description, className, theme = "light" }: SectionHeadingProps) {
  return (
    <motion.header
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.45 }}
      className={cn("section-heading", theme === "dark" && "section-heading--dark", className)}
    >
      <p className="kicker">{label}</p>
      <h2>{title}</h2>
      {description && <p className="section-intro">{description}</p>}
    </motion.header>
  );
}
