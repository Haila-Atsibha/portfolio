import { siteConfig } from "@/data/site";
import { ArrowRight, ArrowUpRight, CodeIcon, GithubIcon, TelegramIcon } from "./Icons";

export default function Hero() {
  return (
    <section className="hero section-wrap" id="home" aria-labelledby="hero-title">
      <div className="hero-copy">
        <p className="availability"><span /> Information Systems Graduate <span className="availability-divider">·</span> {siteConfig.location}</p>
        <h1 id="hero-title">
          Hi, I&apos;m <span>HaileIyesus.</span>
          <br />
          I build for the web.
        </h1>
        <p className="hero-lede">
          I build practical web applications with modern technologies, focusing on
          clean user experiences, reliable backend systems, and real-world solutions.
        </p>
        <div className="hero-actions">
          <a className="button button-primary" href="#projects">
            View my work <ArrowRight />
          </a>
          <a className="button button-text" href="#contact">
            Get in touch <ArrowUpRight />
          </a>
        </div>
        <div className="hero-socials" aria-label="Social profiles">
          {siteConfig.githubUrl && (
            <a href={siteConfig.githubUrl} target="_blank" rel="noreferrer" aria-label="GitHub profile">
              <GithubIcon /> <span>GitHub</span> <ArrowUpRight />
            </a>
          )}
          {siteConfig.telegramUrl && (
            <a href={siteConfig.telegramUrl} target="_blank" rel="noreferrer" aria-label="Telegram profile">
              <TelegramIcon /> <span>Telegram</span> <ArrowUpRight />
            </a>
          )}
        </div>
      </div>
      <div className="hero-art" aria-label="Decorative code editor illustration" role="img">
        <div className="orbit orbit-one" />
        <div className="orbit orbit-two" />
        <div className="editor-window">
          <div className="editor-top">
            <div className="window-dots"><i /><i /><i /></div>
            <span>hello-world.ts</span>
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
        </div>
        <div className="art-label"><span /> Always learning, always building</div>
        <div className="art-mark" aria-hidden="true">&lt;/&gt;</div>
      </div>
      <a className="scroll-cue" href="#about"><span /> Scroll to explore</a>
    </section>
  );
}
