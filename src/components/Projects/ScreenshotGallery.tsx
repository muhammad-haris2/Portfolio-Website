import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import type { ProjectScreenshot } from "../../data/projects";
import { OptimizedImage } from "../ui/OptimizedImage";
import { cn } from "../../lib/utils";
import { useReducedMotion } from "../../hooks/useReducedMotion";

interface ScreenshotGalleryProps {
  screenshots: ProjectScreenshot[];
  projectTitle: string;
}

export function ScreenshotGallery({ screenshots, projectTitle }: ScreenshotGalleryProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const reducedMotion = useReducedMotion();
  const active = screenshots[activeIndex];

  if (screenshots.length === 0) return null;

  return (
    <div className="space-y-3">
      <AnimatePresence mode="wait">
        <motion.div
          key={active.src}
          initial={reducedMotion ? false : { opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={reducedMotion ? undefined : { opacity: 0 }}
          transition={{ duration: reducedMotion ? 0 : 0.25 }}
        >
          <OptimizedImage
            src={active.src}
            alt={active.alt}
            aspectRatio="video"
            containerClassName="rounded-lg border border-border"
          />
          {active.caption && (
            <p className="mt-2 text-center text-xs text-text-muted">{active.caption}</p>
          )}
        </motion.div>
      </AnimatePresence>

      <div
        className="flex gap-2 overflow-x-auto pb-1"
        role="tablist"
        aria-label={`${projectTitle} screenshots`}
      >
        {screenshots.map((shot, index) => (
          <button
            key={shot.src}
            type="button"
            role="tab"
            aria-selected={index === activeIndex}
            aria-label={shot.caption ?? shot.alt}
            onClick={() => setActiveIndex(index)}
            className={cn(
              "shrink-0 overflow-hidden rounded-md border transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent",
              index === activeIndex
                ? "border-accent/50 ring-1 ring-accent/30"
                : "border-border opacity-70 hover:opacity-100",
            )}
          >
            <OptimizedImage
              src={shot.src}
              alt={shot.alt}
              aspectRatio="video"
              containerClassName="h-14 w-24 sm:h-16 sm:w-28"
            />
          </button>
        ))}
      </div>
    </div>
  );
}
