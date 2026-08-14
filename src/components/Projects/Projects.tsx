import { useState } from "react";
import { projects } from "../../data/projects";
import { SectionHeading } from "../ui/SectionHeading";
import { ProjectCard } from "./ProjectCard";
import { ProjectModal } from "./ProjectModal";
import type { Project } from "../../data/projects";

export function Projects() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <section id="projects" className="py-24" aria-labelledby="projects-heading">
      <div className="section-container">
        <SectionHeading
          label="Portfolio"
          title="Featured Projects"
          description="End-to-end AI systems — from multi-agent orchestration and RAG pipelines to machine learning applications."
        />

        <div className="grid gap-6 lg:grid-cols-2">
          {projects.map((project, index) => (
            <ProjectCard
              key={project.id}
              project={project}
              index={index}
              onOpen={setSelectedProject}
            />
          ))}
        </div>
      </div>

      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
}
