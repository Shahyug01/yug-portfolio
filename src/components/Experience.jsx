import Reveal from "./Reveal.jsx";

export default function Experience() {
  return (
    <section id="experience" className="section">
      <div className="container">
        <Reveal as="p" className="section-num">03</Reveal>
        <Reveal as="h2" className="section-title">Experience</Reveal>

        <div className="timeline">
          <Reveal className="timeline-item">
            <div className="timeline-marker"></div>
            <div className="timeline-content">
              <div className="timeline-head">
                <h3>Intern</h3>
                <span className="timeline-date">Jun 2024 — Jul 2024 · 2 mos</span>
              </div>
              <p className="timeline-org">Static.Int Educare · Mumbai</p>
              <p className="timeline-desc">
                Gained practical industry experience and hands-on exposure to a professional
                software environment — my first real step into software development, application
                deployment, and manual testing.
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
