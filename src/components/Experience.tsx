import SectionHeading from "./SectionHeading";

export default function Experience() {
  return (
    <section className="section-wrap section-block" id="experience" data-reveal>
      <div className="experience-layout">
        <SectionHeading eyebrow="Experience" title="Where I have started." />
        <article className="experience-entry">
          <div className="timeline-mark"><span /></div>
          <div className="experience-content">
            <p className="experience-type">Internship</p>
            <h3>Software Development Intern</h3>
            <p className="experience-company">Efuyegela Software Company</p>
          </div>
        </article>
      </div>
    </section>
  );
}
