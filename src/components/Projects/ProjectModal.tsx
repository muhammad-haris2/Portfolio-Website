import { useEffect, useRef } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight, ExternalLink, X } from "lucide-react";
import type { Project } from "../../data/projects";
import { Button } from "../ui/Button";
import { GitHubIcon } from "../ui/SocialIcons";
import { ProjectVisual } from "./ProjectVisual";

const focusable = 'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])';

export function ProjectModal({ project, onClose }: { project: Project | null; onClose: () => void }) {
  const dialogRef = useRef<HTMLDivElement>(null);
  const closeRef = useRef<HTMLButtonElement>(null);
  const returnFocusRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    if (!project) return;
    returnFocusRef.current = document.activeElement as HTMLElement;
    document.body.classList.add("dialog-open");
    closeRef.current?.focus();

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
      if (event.key !== "Tab" || !dialogRef.current) return;
      const elements = Array.from(dialogRef.current.querySelectorAll<HTMLElement>(focusable));
      if (!elements.length) return;
      const first = elements[0];
      const last = elements[elements.length - 1];
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    };
    window.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.classList.remove("dialog-open");
      window.removeEventListener("keydown", onKeyDown);
      returnFocusRef.current?.focus();
    };
  }, [project, onClose]);

  return (
    <AnimatePresence>
      {project && (
        <motion.div className="dialog-backdrop" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onMouseDown={(event) => event.target === event.currentTarget && onClose()}>
          <motion.div
            ref={dialogRef}
            className="project-dialog"
            role="dialog"
            aria-modal="true"
            aria-labelledby="dialog-title"
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
          >
            <header className="dialog-header">
              <div><span>Case study / {project.number}</span><span>{project.context}</span></div>
              <button ref={closeRef} onClick={onClose} aria-label="Close case study"><X aria-hidden="true" /></button>
            </header>
            <div className="dialog-body">
              <div className="dialog-title-row">
                <div><p className="kicker">{project.role}</p><h2 id="dialog-title">{project.title}</h2><p>{project.shortTitle}</p></div>
                <div className="dialog-links">
                  {project.github && <Button variant="dark" href={project.github} target="_blank" rel="noopener noreferrer"><GitHubIcon /> GitHub <ArrowUpRight size={14} aria-hidden="true" /></Button>}
                  {project.liveDemo && <Button variant="outline" href={project.liveDemo} target="_blank" rel="noopener noreferrer"><ExternalLink size={15} aria-hidden="true" /> Live demo</Button>}
                </div>
              </div>
              <ProjectVisual project={project} compact />
              <div className="case-details">
                <section><p className="kicker">01 / Problem</p><p>{project.problem}</p></section>
                <section><p className="kicker">02 / My contribution</p><p>{project.contribution}</p></section>
                <section className="detail-wide"><p className="kicker">03 / System path</p><ol className="architecture-list">{project.architecture.map((step, index) => <li key={step}><span>0{index + 1}</span>{step}</li>)}</ol></section>
                <section><p className="kicker">04 / Engineering challenges</p><ul>{project.challenges.map((item) => <li key={item}>{item}</li>)}</ul></section>
                <section><p className="kicker">05 / Outcomes</p><ul>{project.outcomes.map((item) => <li key={item}>{item}</li>)}</ul></section>
              </div>
              <div className="dialog-tech">{project.technologies.map((tech) => <span key={tech}>{tech}</span>)}</div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
