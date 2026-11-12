import type { Project } from "../../data/projects";

export function ProjectVisual({ project, compact = false }: { project: Project; compact?: boolean }) {
  if (project.image) {
    return (
      <div className={`project-image ${compact ? "project-image--compact" : ""}`}>
        <img src={project.image} alt={project.imageAlt ?? ""} loading="lazy" decoding="async" />
        <span>Interface capture / project artifact</span>
      </div>
    );
  }

  return (
    <div className={`project-diagram project-diagram--${project.visual}`} role="img" aria-label={`${project.title} architecture illustration`}>
      <p>System illustration</p>
      <div className="diagram-flow">
        {project.architecture.map((step, index) => (
          <div key={step} className="diagram-step">
            <span>0{index + 1}</span>
            <strong>{step}</strong>
          </div>
        ))}
      </div>
    </div>
  );
}
