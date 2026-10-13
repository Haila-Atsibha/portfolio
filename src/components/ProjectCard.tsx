import type { Project } from "@/data/projects";
import { ArrowUpRight } from "./Icons";

type ProjectCardProps = {
  project: Project;
  index: number;
};

export default function ProjectCard({ project, index }: ProjectCardProps) {
  return (
    <article className={`project-card${project.featured ? " project-featured" : ""}`}>
      <div className="project-topline">
        <span className="project-number">0{index + 1}</span>
        {project.status && <span className="project-status">{project.status}</span>}
        {project.featured && <span className="project-status project-status-featured">Final-year project</span>}
      </div>
      <div className="project-body">
        <div>
          <h3>{project.name}</h3>
          <p className="project-description">{project.description}</p>
          <ul className="project-features">
            {project.features.map((feature) => <li key={feature}>{feature}</li>)}
          </ul>
        </div>
        <div className="project-aside">
          <p className="project-aside-label">{project.featured ? "Featured project" : "Selected project"}</p>
          <span className="project-glyph" aria-hidden="true">
            {project.name === "QuickServe" ? "Q/" : project.name === "Exit Prep" ? "E." : "L."}
          </span>
          {project.href && (
            <a className="project-link" href={project.href} target="_blank" rel="noreferrer">
              Visit live project <ArrowUpRight />
            </a>
          )}
        </div>
      </div>
      <ul className="tag-list" aria-label={`${project.name} technologies`}>
        {project.technologies.map((technology) => <li key={technology}>{technology}</li>)}
      </ul>
    </article>
  );
}
