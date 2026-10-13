import { skillGroups } from "@/data/skills";
import SectionHeading from "./SectionHeading";

export default function Skills() {
  return (
    <section className="section-wrap section-block" id="skills" data-reveal>
      <SectionHeading
        eyebrow="What I work with"
        title="Tools for turning ideas into software."
        description="The technologies I have worked with across coursework and projects."
      />
      <div className="skills-grid">
        {skillGroups.map((group, index) => (
          <article className="skill-group" key={group.title}>
            <div className="skill-group-head">
              <span className="skill-index">0{index + 1}</span>
              <h3>{group.title}</h3>
            </div>
            <ul>
              {group.skills.map((skill) => <li key={skill}>{skill}</li>)}
            </ul>
          </article>
        ))}
      </div>
    </section>
  );
}
