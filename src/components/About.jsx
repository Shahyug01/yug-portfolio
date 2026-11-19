import Reveal from "./Reveal.jsx";

export default function About() {
  return (
    <section id="about" className="section">
      <div className="container">
        <Reveal as="p" className="section-num">01</Reveal>
        <Reveal as="h2" className="section-title">About Me</Reveal>

        <div className="about-grid">
          <Reveal className="about-copy">
            <p>
              I'm a Computer Engineering diploma graduate from Thakur Polytechnic, currently
              pursuing my <strong>Bachelor of Engineering in Information Technology</strong> at
              K.C. College of Engineering and Management Studies, Thane East.
            </p>
            <p>
              During my diploma, I completed an internship at <strong>Static.Int Educare</strong>,
              where I got hands-on exposure to a professional software environment. That
              experience shaped my interest in software development, application deployment,
              and manual testing.
            </p>
            <p>
              I'm passionate about learning new technologies, strengthening my technical skills,
              and growing as a software professional while contributing to meaningful projects —
              currently focused on the MERN stack.
            </p>
          </Reveal>

          <Reveal className="about-facts" delay={0.1}>
            <div className="fact-card">
              <span className="fact-label">Location</span>
              <span className="fact-value">Mumbai, Maharashtra, India</span>
            </div>
            <div className="fact-card">
              <span className="fact-label">Currently studying</span>
              <span className="fact-value">B.E. Information Technology</span>
            </div>
            <div className="fact-card">
              <span className="fact-label">Focus areas</span>
              <span className="fact-value">MERN Stack · App Deployment · Manual Testing</span>
            </div>
            <div className="fact-card">
              <span className="fact-label">Email</span>
              <span className="fact-value">
                <a href="mailto:yugshahworks@gmail.com">yugshahworks@gmail.com</a>
              </span>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
