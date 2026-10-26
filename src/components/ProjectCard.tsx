import type { Project } from "@/data/projects";
import { ArrowUpRight, GithubIcon } from "./Icons";

type ProjectCardProps = {
  project: Project;
  index: number;
};

export default function ProjectCard({ project, index }: ProjectCardProps) {
  return (
    <article className={`project-card${project.featured ? " project-featured" : ""}`}>
      <div className={`project-visual preview-${project.preview}`} aria-hidden="true">
        <div className="preview-window">
          <div className="preview-chrome">
            <div className="preview-dots"><i /><i /><i /></div>
            <span>{project.name}</span>
            <span>•••</span>
          </div>
          <div className="preview-content">
            <div className="preview-sidebar"><i /><i /><i /><i /></div>
            <div className="preview-main">
              <span>{project.preview === "quickserve" ? "YOUR NEXT SERVICE, SORTED" : project.preview === "exitprep" ? "YOUR LEARNING SPACE" : "A LITTLE SOMETHING FOR YOU"}</span>
              <strong>{project.preview === "quickserve" ? "Find help, made simple." : project.preview === "exitprep" ? "Make progress today." : "Discover something new."}</strong>
              <div className="preview-cards"><i /><i /><i /></div>
            </div>
          </div>
        </div>
        <span className="preview-label">Interface concept</span>
      </div>
      <div className="project-information">
        <div className="project-topline">
          <span className="project-number">0{index + 1}</span>
          {project.status && <span className="project-status">{project.status}</span>}
          {project.featured && <span className="project-status project-status-featured">Final-year project</span>}
        </div>
        <div>
          <h3>{project.name}</h3>
          <p className="project-description">{project.description}</p>
          <ul className="project-features">
            {project.features.map((feature) => <li key={feature}>{feature}</li>)}
          </ul>
        </div>
        <ul className="tag-list" aria-label={`${project.name} technologies`}>
          {project.technologies.map((technology) => <li key={technology}>{technology}</li>)}
        </ul>
        <div className="project-actions">
          {project.href && (
            <a className="button button-small button-primary" href={project.href} target="_blank" rel="noreferrer">
              Live Demo <ArrowUpRight />
            </a>
          )}
          {project.githubHref && (
            <a className="button button-small button-quiet" href={project.githubHref} target="_blank" rel="noreferrer">
              <GithubIcon /> GitHub profile
            </a>
          )}
        </div>
      </div>
    </article>
  );
}
