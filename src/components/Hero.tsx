import { siteConfig } from "@/data/site";
import { ArrowRight, ArrowUpRight, CodeIcon, GithubIcon } from "./Icons";

export default function Hero() {
  return (
    <section className="hero section-wrap" id="home" aria-labelledby="hero-title">
      <div className="hero-copy">
        <p className="availability"><span /> Open to software opportunities <span aria-hidden="true">·</span> {siteConfig.location}</p>
        <h1 id="hero-title">
          Hi, I&apos;m
          <span>{siteConfig.name}</span>
        </h1>
        <p className="hero-role">Information Systems Graduate &amp; Software Developer</p>
        <p className="hero-lede">
          Information Systems graduate focused on building modern web applications,
          backend systems, and practical digital solutions.
        </p>
        <div className="hero-actions">
          <a className="button button-primary" href="#projects">
            View My Projects <ArrowRight />
          </a>
          <a className="button button-outline" href="#contact">
            Contact Me <ArrowUpRight />
          </a>
        </div>
        <div className="hero-socials" aria-label="Social profiles">
          {siteConfig.githubUrl && (
            <a href={siteConfig.githubUrl} target="_blank" rel="noreferrer" aria-label="GitHub profile">
              <GithubIcon /> <span>GitHub</span> <ArrowUpRight />
            </a>
          )}
        </div>
      </div>
      <div className="hero-art" aria-label="Developer profile visual">
        <div className="hero-glow" aria-hidden="true" />
        <div className="orbit orbit-one" />
        <div className="orbit orbit-two" />
        <div className="profile-card">
          <div className="editor-top">
            <div className="window-dots"><i /><i /><i /></div>
            <span>haileiyesus.ts</span>
            <CodeIcon />
          </div>
          <div className="editor-code" aria-hidden="true">
            <div><span className="line-no">01</span><span className="syntax-muted">const</span> developer = {"{"}</div>
            <div><span className="line-no">02</span>  name: <span className="syntax-green">&quot;HaileIyesus&quot;</span>,</div>
            <div><span className="line-no">03</span>  focus: <span className="syntax-green">&quot;useful software&quot;</span>,</div>
            <div><span className="line-no">04</span>  learning: <span className="syntax-blue">true</span>,</div>
            <div><span className="line-no">05</span>  build: <span className="syntax-blue">()</span> <span className="syntax-muted">=&gt;</span> <span className="syntax-green">&quot;what&apos;s next&quot;</span></div>
            <div><span className="line-no">06</span>{"};"}</div>
            <div className="editor-cursor"><span className="line-no">07</span><span /></div>
          </div>
          <div className="profile-card-footer">
            <div className="profile-identity">
              <strong>{siteConfig.name}</strong>
              <span>{siteConfig.role}</span>
            </div>
            <span className="profile-availability"><span /> Building</span>
          </div>
        </div>
        <div className="art-label"><span /> Thoughtful code. Useful products.</div>
      </div>
      <a className="scroll-cue" href="#about"><span /> Scroll to explore</a>
    </section>
  );
}
