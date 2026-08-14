import { motion } from "framer-motion";
import { cn } from "../../lib/utils";

interface SectionHeadingProps {
  label?: string;
  title: string;
  description?: string;
  className?: string;
  align?: "left" | "center";
}

export function SectionHeading({
  label,
  title,
  description,
  className,
  align = "left",
}: SectionHeadingProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5 }}
      className={cn(
        "mb-12",
        align === "center" && "text-center",
        className,
      )}
    >
      {label && (
        <span className="mb-3 inline-block text-xs font-semibold uppercase tracking-widest text-accent">
          {label}
        </span>
      )}
      <h2 className="text-3xl font-bold tracking-tight text-text-primary sm:text-4xl">
        {title}
      </h2>
      {description && (
        <p className="mt-4 max-w-2xl text-base text-text-secondary sm:text-lg">
          {description}
        </p>
      )}
    </motion.div>
  );
}
