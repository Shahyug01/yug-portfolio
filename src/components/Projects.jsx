import Reveal from "./Reveal.jsx";

export default function Projects() {
  return (
    <section id="projects" className="section">
      <div className="container">
        <Reveal as="p" className="section-num">05</Reveal>
        <Reveal as="h2" className="section-title">Projects</Reveal>
        <Reveal as="p" className="section-sub">
          Currently building out my project portfolio — here's what's in progress.
        </Reveal>

        <Reveal className="projects-grid" delay={0.1}>
          <div className="project-card project-card-cta">
            <div className="project-card-icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
              </svg>
            </div>
            <h3>New projects in the making</h3>
            <p>
              I'm actively building full-stack projects with the MERN stack. This space will
              showcase them soon — in the meantime, let's connect.
            </p>
            <a href="#contact" className="btn btn-outline btn-small">Get in touch</a>
          </div>
          <div className="project-card project-card-ghost">
            <span className="ghost-tag">Coming soon</span>
            <div className="ghost-line ghost-line-title"></div>
            <div className="ghost-line"></div>
            <div className="ghost-line ghost-line-short"></div>
          </div>
          <div className="project-card project-card-ghost">
            <span className="ghost-tag">Coming soon</span>
            <div className="ghost-line ghost-line-title"></div>
            <div className="ghost-line"></div>
            <div className="ghost-line ghost-line-short"></div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
