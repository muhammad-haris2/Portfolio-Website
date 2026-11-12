import { experience, education } from "../../data/journey";
import { SectionHeading } from "../ui/SectionHeading";

export function Experience() {
  return (
    <section id="experience" className="experience-section" aria-labelledby="experience-heading">
      <div className="page-shell">
        <SectionHeading theme="dark" label="Experience & education" title="Research-minded, with a software builder’s instinct." />
        <div className="timeline">
          <article className="timeline-item timeline-item--primary">
            <div className="timeline-date"><span>01</span><p>{experience.period}</p></div>
            <div className="timeline-content">
              <p className="kicker">{experience.organization} · {experience.location}</p>
              <h3>{experience.role}</h3>
              <p>{experience.description}</p>
              <ul>{experience.areas.map((area) => <li key={area}>{area}</li>)}</ul>
            </div>
          </article>
          <article className="timeline-item">
            <div className="timeline-date"><span>02</span><p>{education.period}</p></div>
            <div className="timeline-content">
              <p className="kicker">{education.institution}</p>
              <h3>{education.degree}</h3>
              <p>{education.campus}</p>
            </div>
          </article>
        </div>
        <p className="experience-note">Currently open to AI/ML, Python backend, and software engineering opportunities.</p>
      </div>
    </section>
  );
}
