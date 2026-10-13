import SectionHeading from "./SectionHeading";

export default function About() {
  return (
    <section className="section-wrap section-block" id="about" data-reveal>
      <div className="about-layout">
        <SectionHeading eyebrow="A little about me" title="Curious by nature. Practical by design." />
        <div className="about-copy">
          <p>
            I&apos;m an Information Systems graduate and software developer based in
            Addis Ababa. I enjoy turning ideas into working products and building
            practical applications that solve real-world problems.
          </p>
          <p>
            My interests span full-stack and backend development, from shaping
            thoughtful interfaces to designing reliable application logic. I like
            understanding how the pieces fit together, solving problems along the
            way, and learning new technologies as I build.
          </p>
        </div>
      </div>
      <div className="about-note">
        <span className="note-index">01</span>
        <span>Grounded in Information Systems</span>
        <span className="note-line" />
        <span>Focused on useful, working software</span>
      </div>
    </section>
  );
}
