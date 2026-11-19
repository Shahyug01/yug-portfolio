import Reveal from "./Reveal.jsx";

export default function Contact() {
  return (
    <section id="contact" className="section section-alt">
      <div className="container contact-inner">
        <Reveal as="p" className="section-num">06</Reveal>
        <Reveal as="h2" className="section-title">Let's Connect</Reveal>
        <Reveal as="p" className="section-sub">
          I'm always open to internship opportunities, collaborations, or just a friendly hello.
          Reach out — I'd love to hear from you.
        </Reveal>

        <Reveal className="contact-cards" delay={0.1}>
          <a href="mailto:yugshahworks@gmail.com" className="contact-card">
            <div className="contact-card-icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="4" width="20" height="16" rx="2" />
                <path d="m22 6-10 7L2 6" />
              </svg>
            </div>
            <div>
              <span className="contact-card-label">Email</span>
              <span className="contact-card-value">yugshahworks@gmail.com</span>
            </div>
          </a>

          <a
            href="https://www.linkedin.com/in/yug-shah0109"
            target="_blank"
            rel="noopener noreferrer"
            className="contact-card"
          >
            <div className="contact-card-icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                <rect x="2" y="9" width="4" height="12" />
                <circle cx="4" cy="4" r="2" />
              </svg>
            </div>
            <div>
              <span className="contact-card-label">LinkedIn</span>
              <span className="contact-card-value">linkedin.com/in/yug-shah0109</span>
            </div>
          </a>

          <div className="contact-card contact-card-static">
            <div className="contact-card-icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                <circle cx="12" cy="10" r="3" />
              </svg>
            </div>
            <div>
              <span className="contact-card-label">Location</span>
              <span className="contact-card-value">Mumbai, Maharashtra, India</span>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
