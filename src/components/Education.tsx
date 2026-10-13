import SectionHeading from "./SectionHeading";

export default function Education() {
  return (
    <section className="section-wrap section-block education-section" id="education" data-reveal>
      <SectionHeading eyebrow="Education" title="A foundation in information systems." />
      <article className="education-card">
        <div className="education-monogram" aria-hidden="true">BDU</div>
        <div className="education-details">
          <p className="education-type">Bachelor&apos;s degree</p>
          <h3>Information Systems</h3>
          <p>Bahir Dar University <span>·</span> Bahir Dar Institute of Technology</p>
        </div>
        <div className="education-results">
          <div><span>Graduated</span><strong>2026</strong></div>
          <div><span>CGPA</span><strong>3.39</strong></div>
        </div>
      </article>
    </section>
  );
}
