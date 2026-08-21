import { useEffect, useRef, type ReactNode } from "react";
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

function ModalSection({
  title,
  children,
}: {
  title: string;
  children: ReactNode;
}) {
  return (
    <div>
      <h3 className="mb-1 text-sm font-semibold uppercase tracking-wider text-accent">
        {title}
      </h3>
      {children}
    </div>
  );
}

export function ProjectModal({ project, onClose }: ProjectModalProps) {
  const overlayRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };

    if (project) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleEscape);
      overlayRef.current?.scrollTo(0, 0);
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
          ref={overlayRef}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[100] flex items-start justify-center overflow-y-auto bg-black/70 p-4 pt-6 backdrop-blur-sm sm:p-6 sm:pt-8"
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
              {project.category && (
                <p className="mb-1 text-xs font-medium uppercase tracking-wide text-text-muted">
                  {project.category}
                </p>
              )}
              <h2 id="modal-title" className="text-2xl font-bold text-text-primary">
                {project.title}
              </h2>
              <p className="mt-2 text-text-secondary">{project.description}</p>

              {(project.role || project.team || project.projectType) && (
                <dl className="mt-4 space-y-1 text-sm text-text-secondary">
                  {project.role && (
                    <div>
                      <dt className="inline text-text-muted">Role: </dt>
                      <dd className="inline">{project.role}</dd>
                    </div>
                  )}
                  {project.team && (
                    <div>
                      <dt className="inline text-text-muted">Team: </dt>
                      <dd className="inline">{project.team}</dd>
                    </div>
                  )}
                  {project.projectType && (
                    <div>
                      <dt className="inline text-text-muted">Project: </dt>
                      <dd className="inline">{project.projectType}</dd>
                    </div>
                  )}
                </dl>
              )}

              <div className="mt-4 flex flex-wrap gap-2">
                {project.technologies.map((tech, i) => (
                  <Badge key={tech} index={i}>
                    {tech}
                  </Badge>
                ))}
              </div>

              <div className="mt-6 space-y-4">
                <ModalSection title="Overview">
                  <p className="text-sm text-text-secondary">{project.modal.problem}</p>
                </ModalSection>

                <ModalSection title="Solution">
                  <p className="text-sm text-text-secondary">{project.modal.solution}</p>
                </ModalSection>

                <ModalSection title="Architecture">
                  <p className="text-sm font-mono text-text-secondary">
                    {project.modal.architecture}
                  </p>
                </ModalSection>

                {project.modal.features && project.modal.features.length > 0 && (
                  <ModalSection title="Key Features">
                    <ul className="grid gap-1 sm:grid-cols-2">
                      {project.modal.features.map((feature) => (
                        <li
                          key={feature}
                          className="flex items-start gap-2 text-sm text-text-secondary"
                        >
                          <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-accent" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </ModalSection>
                )}

                <ModalSection title="Challenges">
                  <ul className="space-y-1">
                    {project.modal.challenges.map((c) => (
                      <li key={c} className="flex items-start gap-2 text-sm text-text-secondary">
                        <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-accent" />
                        {c}
                      </li>
                    ))}
                  </ul>
                </ModalSection>

                <ModalSection title="Results">
                  <ul className="space-y-1">
                    {project.modal.results.map((r) => (
                      <li key={r} className="flex items-start gap-2 text-sm text-text-secondary">
                        <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-accent" />
                        {r}
                      </li>
                    ))}
                  </ul>
                </ModalSection>
              </div>

              <div className="mt-6 flex flex-wrap gap-3">
                {project.github && (
                  <Button href={project.github} target="_blank" rel="noopener noreferrer">
                    <GitHubIcon className="h-4 w-4" /> View on GitHub
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
