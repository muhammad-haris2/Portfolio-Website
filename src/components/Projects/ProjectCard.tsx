import { motion } from "framer-motion";
import { ArrowRight, ArrowUpRight, ExternalLink } from "lucide-react";
import type { Project } from "../../data/projects";
import { Button } from "../ui/Button";
import { GitHubIcon } from "../ui/SocialIcons";
import { ProjectVisual } from "./ProjectVisual";

export function ProjectCard({ project, index, onOpen }: { project: Project; index: number; onOpen: (project: Project) => void }) {
  return (
    <motion.article
      className={`case-study case-study--${index % 2 ? "reverse" : "forward"}`}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.5 }}
    >
      <div className="case-visual"><ProjectVisual project={project} /></div>
      <div className="case-copy">
        <div className="case-index"><span>Case study / {project.number}</span><span>{project.context}</span></div>
        <h3>{project.title}</h3>
        <p className="case-deck">{project.shortTitle}</p>
        <p className="case-description">{project.description}</p>
        <div className="case-highlights">
          {project.highlights.map((highlight) => <span key={highlight}>{highlight}</span>)}
        </div>
        <div className="case-actions">
          <Button variant="dark" onClick={() => onOpen(project)}>Read case study <ArrowRight size={16} aria-hidden="true" /></Button>
          <a href={project.github} target="_blank" rel="noopener noreferrer"><GitHubIcon /> Code <ArrowUpRight size={13} aria-hidden="true" /></a>
          {project.liveDemo && <a href={project.liveDemo} target="_blank" rel="noopener noreferrer"><ExternalLink size={15} aria-hidden="true" /> Live</a>}
        </div>
      </div>
    </motion.article>
  );
}
