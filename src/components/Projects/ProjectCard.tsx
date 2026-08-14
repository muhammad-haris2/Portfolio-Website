import { motion } from "framer-motion";
import { ArrowUpRight, ExternalLink } from "lucide-react";
import { GitHubIcon } from "../ui/SocialIcons";
import type { Project } from "../../data/projects";
import { OptimizedImage } from "../ui/OptimizedImage";
import { Badge } from "../ui/Badge";
import { Button } from "../ui/Button";

interface ProjectCardProps {
  project: Project;
  index: number;
  onOpen: (project: Project) => void;
}

export function ProjectCard({ project, index, onOpen }: ProjectCardProps) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group glass cursor-pointer overflow-hidden rounded-2xl transition-all duration-300 hover:border-accent/30 hover:shadow-xl hover:shadow-accent-glow"
      onClick={() => onOpen(project)}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          onOpen(project);
        }
      }}
      tabIndex={0}
      role="button"
      aria-label={`View details for ${project.title}`}
    >
      <div className="overflow-hidden">
        <motion.div
          whileHover={{ scale: 1.03 }}
          transition={{ duration: 0.4 }}
        >
          <OptimizedImage
            src={project.image}
            alt={`Screenshot of ${project.title}`}
            aspectRatio="video"
          />
        </motion.div>
      </div>

      <div className="p-6">
        <div className="mb-3 flex items-start justify-between gap-4">
          <h3 className="text-xl font-semibold text-text-primary transition-colors group-hover:text-accent-light">
            {project.title}
          </h3>
          <ArrowUpRight className="h-5 w-5 shrink-0 text-text-muted transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-accent-light" />
        </div>

        <p className="mb-4 text-sm leading-relaxed text-text-secondary">
          {project.description}
        </p>

        <ul className="mb-4 space-y-1">
          {project.highlights.slice(0, 4).map((highlight) => (
            <li
              key={highlight}
              className="flex items-start gap-2 text-xs text-text-secondary"
            >
              <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-accent" />
              {highlight}
            </li>
          ))}
        </ul>

        <div className="mb-5 flex flex-wrap gap-2">
          {project.technologies.map((tech, i) => (
            <Badge key={tech} index={i}>
              {tech}
            </Badge>
          ))}
        </div>

        <div className="flex flex-wrap gap-2" onClick={(e) => e.stopPropagation()}>
          {project.github && (
            <Button
              variant="outline"
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs px-3 py-1.5"
            >
              <GitHubIcon className="h-3.5 w-3.5" /> GitHub
            </Button>
          )}
          {project.liveDemo && (
            <Button
              variant="ghost"
              href={project.liveDemo}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs px-3 py-1.5"
            >
              <ExternalLink className="h-3.5 w-3.5" /> Live Demo
            </Button>
          )}
        </div>
      </div>
    </motion.article>
  );
}
