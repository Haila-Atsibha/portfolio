import { projects } from "@/data/projects";
import SectionHeading from "./SectionHeading";
import ProjectCard from "./ProjectCard";

export default function Projects() {
  return (
    <section className="section-wrap section-block projects-section" id="projects" data-reveal>
      <SectionHeading
        eyebrow="Selected work"
        title="A few things I have been building."
        description="Projects shaped by real product needs, coursework, and a curiosity to make useful things."
      />
      <div className="projects-list">
        {projects.map((project, index) => (
          <ProjectCard key={project.name} project={project} index={index} />
        ))}
      </div>
    </section>
  );
}
