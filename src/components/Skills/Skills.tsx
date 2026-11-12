import { skillCategories } from "../../data/skills";
import { SectionHeading } from "../ui/SectionHeading";

export function Skills() {
  return (
    <section id="expertise" className="skills-section" aria-labelledby="expertise-heading">
      <div className="page-shell">
        <SectionHeading label="Technical expertise" title="A practical toolkit, organized around the work it enables." description="The strongest proof is in the projects above. These are the technologies I have used to build them." />
        <div className="skills-index">
          {skillCategories.map((category) => (
            <article key={category.title}>
              <span className="skills-number">{category.index}</span>
              <div><h3>{category.title}</h3><p>{category.description}</p></div>
              <ul>{category.skills.map((skill) => <li key={skill}>{skill}</li>)}</ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
