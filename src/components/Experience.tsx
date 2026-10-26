import SectionHeading from "./SectionHeading";

export default function Experience() {
  return (
    <section className="section-wrap section-block" id="experience" data-reveal>
      <div className="experience-layout">
        <SectionHeading
          eyebrow="Experience"
          title="Learning by building, growing through practice."
          description="A foundation of hands-on software development, real project work, and continuous learning."
        />
        <div className="experience-timeline">
          <article className="experience-entry">
            <div className="timeline-mark"><span /></div>
            <div className="experience-content">
              <p className="experience-type">Internship</p>
              <h3>Software Development Intern</h3>
              <p className="experience-company">Efuyegela Software Company</p>
              <p className="experience-description">
                Worked on software development and gained practical, hands-on
                experience building software in a professional environment.
              </p>
            </div>
          </article>
          <article className="experience-entry">
            <div className="timeline-mark"><span /></div>
            <div className="experience-content">
              <p className="experience-type">Final-year project</p>
              <h3>QuickServe · Service booking platform</h3>
              <p className="experience-company">Bahir Dar Institute of Technology</p>
              <p className="experience-description">
                Designed and built a full-stack service booking platform connecting
                customers with local providers, including identity verification.
              </p>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
