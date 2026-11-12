import { useState } from "react";
import { ArrowUpRight, ExternalLink } from "lucide-react";
import { projects, type Project } from "../../data/projects";
import { SectionHeading } from "../ui/SectionHeading";
import { GitHubIcon } from "../ui/SocialIcons";
import { ProjectCard } from "./ProjectCard";
import { ProjectModal } from "./ProjectModal";

export function Projects() {
  const [selected, setSelected] = useState<Project | null>(null);
  const featured = projects.filter((project) => project.featured);
  const additional = projects.filter((project) => !project.featured);

  return (
    <section id="work" className="work-section" aria-labelledby="work-heading">
      <div className="page-shell">
        <SectionHeading label="Selected work / 2025–2026" title="Engineering work, shown through the decisions behind it." description="Three focused studies spanning retrieval, multi-agent workflows, and applied machine learning." />
        <div className="featured-list">{featured.map((project, index) => <ProjectCard key={project.id} project={project} index={index} onOpen={setSelected} />)}</div>
      </div>

      <div className="additional-work">
        <div className="page-shell">
          <div className="additional-heading"><p className="kicker">Additional projects</p><h2>Software beyond the featured studies.</h2></div>
          <div className="project-ledger">
            {additional.map((project) => (
              <article key={project.id}>
                <button onClick={() => setSelected(project)} aria-label={`Open ${project.title} case study`}>
                  <span className="ledger-number">{project.number}</span>
                  <span className="ledger-main"><strong>{project.title}</strong><small>{project.shortTitle}</small></span>
                  <span className="ledger-tech">{project.technologies.slice(0, 3).join(" · ")}</span>
                  <ArrowUpRight aria-hidden="true" />
                </button>
                <div className="ledger-links">
                  {project.github && <a href={project.github} target="_blank" rel="noopener noreferrer" aria-label={`${project.title} GitHub repository`}><GitHubIcon /></a>}
                  {project.liveDemo && <a href={project.liveDemo} target="_blank" rel="noopener noreferrer" aria-label={`${project.title} live demo`}><ExternalLink /></a>}
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
      <ProjectModal project={selected} onClose={() => setSelected(null)} />
    </section>
  );
}
