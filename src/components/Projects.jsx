
import Reveal from "./Reveal.jsx";

const projects = [
  {
    title: "MeditateMate",
    category: "Web Application",
    description:
      "A meditation and mindfulness platform designed to help users build healthy habits and improve their mental well-being.",
    technologies: ["React", "JavaScript", "Web Development"],
    link: "https://meditatemate-1kyn.vercel.app/",
  },
  {
    title: "Thakorji Enterprise",
    category: "Business Website",
    description:
      "A business website built to establish an online presence and showcase the enterprise and its services.",
    technologies: ["React", "JavaScript", "Web Development"],
    link: "https://thakorji-enterprise.vercel.app/",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="section">
      <div className="container">
        <Reveal as="p" className="section-num">
          05
        </Reveal>

        <Reveal as="h2" className="section-title">
          My Projects
        </Reveal>

        <Reveal as="p" className="section-sub">
          Here are some projects I've designed and developed.
        </Reveal>

        <Reveal className="projects-grid" delay={0.1}>
          {projects.map((project, index) => (
            <div className="project-card project-card-cta" key={index}>
              <div className="project-card-icon">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.6"
                >
                  <rect x="3" y="4" width="18" height="16" rx="2" />
                  <path d="M3 9h18M9 20V9" />
                </svg>
              </div>

              <span className="ghost-tag">
                {project.category}
              </span>

              <h3>{project.title}</h3>

              <p>{project.description}</p>

              <div className="project-tech">
                {project.technologies.map((tech) => (
                  <span key={tech}>{tech}</span>
                ))}
              </div>

              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-outline btn-small"
              >
                View Live Project ↗
              </a>
            </div>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
