import { motion } from "framer-motion";
import { cn } from "../../lib/utils";

interface BadgeProps {
  children: React.ReactNode;
  className?: string;
  index?: number;
}

export function Badge({ children, className, index = 0 }: BadgeProps) {
  return (
    <motion.span
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.3, delay: index * 0.03 }}
      whileHover={{ scale: 1.05, borderColor: "rgba(59, 130, 246, 0.4)" }}
      className={cn(
        "inline-block rounded-md border border-border bg-white/[0.03] px-2.5 py-1 text-xs font-medium text-text-secondary transition-colors duration-200",
        className,
      )}
    >
      {children}
    </motion.span>
  );
}
