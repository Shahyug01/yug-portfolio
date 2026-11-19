import { useEffect, useState } from "react";
import { ROTATING_PHRASES } from "../data/content.js";

export default function Hero() {
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (prefersReducedMotion) return;

    const interval = setInterval(() => {
      setVisible(false);
      setTimeout(() => {
        setPhraseIndex((i) => (i + 1) % ROTATING_PHRASES.length);
        setVisible(true);
      }, 250);
    }, 2600);

    return () => clearInterval(interval);
  }, []);

  return (
    <section id="home" className="hero">
      <div className="hero-bg" aria-hidden="true">
        <span className="blob blob-1"></span>
        <span className="blob blob-2"></span>
        <span className="grid-overlay"></span>
      </div>

      <div className="container hero-inner">
        <div className="hero-text hero-enter">
          <div className="status-badge">
            <span className="status-dot"></span>
            Open to internship &amp; entry-level opportunities
          </div>

          <p className="eyebrow">Hi, my name is</p>
          <h1 className="hero-name">Yug Shah.</h1>
          <h2 className="hero-role">
            I build things with{" "}
            <span
              className="rotating-text"
              style={{
                opacity: visible ? 1 : 0,
                transition: "opacity .25s ease",
              }}
            >
              {ROTATING_PHRASES[phraseIndex]}
            </span>
          </h2>
          <p className="hero-desc">
            Computer Engineering student based in Mumbai, India — currently pursuing my
            B.E. in Information Technology and sharpening my skills as a full-stack developer,
            one project at a time.
          </p>

          <div className="hero-actions">
            <a href="#contact" className="btn btn-primary">
              Get in touch
            </a>
            <a href="#experience" className="btn btn-outline">
              My journey
            </a>
          </div>

          <div className="hero-socials">
            <a
              href="mailto:yugshahworks@gmail.com"
              aria-label="Email Yug Shah"
              className="social-link"
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="4" width="20" height="16" rx="2" />
                <path d="m22 6-10 7L2 6" />
              </svg>
            </a>
            <a
              href="https://www.linkedin.com/in/yug-shah0109"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Yug Shah on LinkedIn"
              className="social-link"
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                <rect x="2" y="9" width="4" height="12" />
                <circle cx="4" cy="4" r="2" />
              </svg>
            </a>
          </div>
        </div>

        <div className="hero-visual hero-enter" style={{ "--delay": ".15s" }}>
          <div className="code-card">
            <div className="code-card-header">
              <span className="dot dot-red"></span>
              <span className="dot dot-yellow"></span>
              <span className="dot dot-green"></span>
              <span className="code-card-title">developer.js</span>
            </div>
            <pre className="code-card-body">
              <code>
                <span className="c-kw">const</span>{" "}
                <span className="c-var">developer</span> = {"{"}
                {"\n"}  <span className="c-key">name</span>:{" "}
                <span className="c-str">'Yug Shah'</span>,
                {"\n"}  <span className="c-key">role</span>:{" "}
                <span className="c-str">'Software Developer'</span>,
                {"\n"}  <span className="c-key">location</span>:{" "}
                <span className="c-str">'Mumbai, India'</span>,
                {"\n"}  <span className="c-key">stack</span>: [
                {"\n"}    <span className="c-str">'React'</span>,{" "}
                <span className="c-str">'Node.js'</span>,
                {"\n"}    <span className="c-str">'Express'</span>,{" "}
                <span className="c-str">'MongoDB'</span>
                {"\n"}  ],
                {"\n"}  <span className="c-key">currentlyLearning</span>:{" "}
                <span className="c-bool">true</span>,
                {"\n"}  <span className="c-key">openToWork</span>:{" "}
                <span className="c-bool">true</span>,
                {"\n"}
                {"}"};
              </code>
            </pre>
          </div>
        </div>
      </div>

      <a href="#about" className="scroll-cue" aria-label="Scroll to about section">
        <span></span>
      </a>
    </section>
  );
}
