import { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ExternalLink } from "lucide-react";
import { GitHubIcon } from "../ui/SocialIcons";
import type { Project } from "../../data/projects";
import { OptimizedImage } from "../ui/OptimizedImage";
import { Badge } from "../ui/Badge";
import { Button } from "../ui/Button";

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export function ProjectModal({ project, onClose }: ProjectModalProps) {
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };

    if (project) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleEscape);
    }

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleEscape);
    };
  }, [project, onClose]);

  return (
    <AnimatePresence>
      {project && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[100] flex items-start justify-center overflow-y-auto bg-black/70 p-4 backdrop-blur-sm sm:items-center sm:p-6"
          onClick={onClose}
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-title"
        >
          <motion.div
            initial={{ opacity: 0, y: 40, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 40, scale: 0.95 }}
            transition={{ duration: 0.3 }}
            className="glass my-8 w-full max-w-3xl overflow-hidden rounded-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative">
              <OptimizedImage
                src={project.image}
                alt={`Screenshot of ${project.title}`}
                aspectRatio="video"
              />
              <button
                onClick={onClose}
                className="absolute right-4 top-4 rounded-full bg-black/60 p-2 text-white transition-colors hover:bg-black/80"
                aria-label="Close project details"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            <div className="p-6 sm:p-8">
              <h2 id="modal-title" className="text-2xl font-bold text-text-primary">
                {project.title}
              </h2>
              <p className="mt-2 text-text-secondary">{project.description}</p>

              <div className="mt-4 flex flex-wrap gap-2">
                {project.technologies.map((tech, i) => (
                  <Badge key={tech} index={i}>
                    {tech}
                  </Badge>
                ))}
              </div>

              <div className="mt-6 space-y-4">
                <div>
                  <h3 className="mb-1 text-sm font-semibold uppercase tracking-wider text-accent">
                    Problem
                  </h3>
                  <p className="text-sm text-text-secondary">{project.modal.problem}</p>
                </div>
                <div>
                  <h3 className="mb-1 text-sm font-semibold uppercase tracking-wider text-accent">
                    Solution
                  </h3>
                  <p className="text-sm text-text-secondary">{project.modal.solution}</p>
                </div>
                <div>
                  <h3 className="mb-1 text-sm font-semibold uppercase tracking-wider text-accent">
                    Architecture
                  </h3>
                  <p className="text-sm font-mono text-text-secondary">
                    {project.modal.architecture}
                  </p>
                </div>
                <div>
                  <h3 className="mb-1 text-sm font-semibold uppercase tracking-wider text-accent">
                    Challenges
                  </h3>
                  <ul className="space-y-1">
                    {project.modal.challenges.map((c) => (
                      <li key={c} className="flex items-start gap-2 text-sm text-text-secondary">
                        <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-accent" />
                        {c}
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h3 className="mb-1 text-sm font-semibold uppercase tracking-wider text-accent">
                    Results
                  </h3>
                  <ul className="space-y-1">
                    {project.modal.results.map((r) => (
                      <li key={r} className="flex items-start gap-2 text-sm text-text-secondary">
                        <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-accent" />
                        {r}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="mt-6 flex flex-wrap gap-3">
                {project.github && (
                  <Button href={project.github} target="_blank" rel="noopener noreferrer">
                    <GitHubIcon className="h-4 w-4" /> GitHub
                  </Button>
                )}
                {project.liveDemo && (
                  <Button
                    variant="secondary"
                    href={project.liveDemo}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <ExternalLink className="h-4 w-4" /> Live Demo
                  </Button>
                )}
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
