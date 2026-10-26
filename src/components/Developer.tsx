import { siteConfig } from "@/data/site";
import { ArrowUpRight, GithubIcon } from "./Icons";

export default function Developer() {
  return (
    <section className="section-wrap github-section" id="github" data-reveal>
      <div className="github-card glass-card">
        <div className="github-copy">
          <div className="github-title-row">
            <span className="github-icon-wrap"><GithubIcon /></span>
            <div>
              <p className="eyebrow">Developer profile</p>
              <h2>More of what I&apos;m building.</h2>
            </div>
          </div>
          <p>
            Explore my GitHub for project code, experiments, and the work behind
            the products featured here.
          </p>
        </div>
        <a className="button button-outline github-button" href={siteConfig.githubUrl} target="_blank" rel="noreferrer">
          Visit GitHub <ArrowUpRight />
        </a>
      </div>
    </section>
  );
}
