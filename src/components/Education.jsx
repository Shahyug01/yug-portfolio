import Reveal from "./Reveal.jsx";
import { EDUCATION } from "../data/content.js";

export default function Education() {
  return (
    <section id="education" className="section section-alt">
      <div className="container">
        <Reveal as="p" className="section-num">04</Reveal>
        <Reveal as="h2" className="section-title">Education</Reveal>

        <div className="timeline">
          {EDUCATION.map((item, i) => (
            <Reveal key={item.title} className="timeline-item" delay={i * 0.08}>
              <div className="timeline-marker"></div>
              <div className="timeline-content">
                <div className="timeline-head">
                  <h3>{item.title}</h3>
                  <span className="timeline-date">{item.date}</span>
                </div>
                <p className="timeline-org">{item.org}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
