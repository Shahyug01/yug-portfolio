import Reveal from "./Reveal.jsx";
import { SKILL_TAGS } from "../data/content.js";

export default function Skills() {
  return (
    <section id="skills" className="section section-alt">
      <div className="container">
        <Reveal as="p" className="section-num">02</Reveal>
        <Reveal as="h2" className="section-title">Skills &amp; Tools</Reveal>
        <Reveal as="p" className="section-sub">
          A snapshot of what I work with and how I like to work.
        </Reveal>

        <Reveal className="skills-top">
          <div className="skill-highlight">
            <div className="skill-highlight-icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="16 18 22 12 16 6" />
                <polyline points="8 6 2 12 8 18" />
              </svg>
            </div>
            <h3>MERN Stack</h3>
            <p>MongoDB, Express.js, React and Node.js — building full-stack JavaScript applications end to end.</p>
          </div>
          <div className="skill-highlight">
            <div className="skill-highlight-icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 20h9" />
                <path d="M16.5 3.5a2.12 2.12 0 0 1 3 3L7 19l-4 1 1-4Z" />
              </svg>
            </div>
            <h3>Software Development</h3>
            <p>Writing clean, functional code and learning the practices of a professional dev environment.</p>
          </div>
          <div className="skill-highlight">
            <div className="skill-highlight-icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <rect x="3" y="3" width="7" height="7" />
                <rect x="14" y="3" width="7" height="7" />
                <rect x="14" y="14" width="7" height="7" />
                <rect x="3" y="14" width="7" height="7" />
              </svg>
            </div>
            <h3>Project Management</h3>
            <p>Planning and organizing work with a focus on timelines, priorities, and clear outcomes.</p>
          </div>
        </Reveal>

        <Reveal className="skill-tags" delay={0.1}>
          {SKILL_TAGS.map((tag) => (
            <span key={tag} className="tag">{tag}</span>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
