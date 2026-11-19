import useScrollY from "../hooks/useScrollY.js";

export default function Footer() {
  const scrollY = useScrollY();
  const visible = scrollY > 500;

  return (
    <footer className="site-footer">
      <div className="container footer-inner">
        <p>&copy; {new Date().getFullYear()} Yug Shah. Built with React, HTML &amp; CSS.</p>
        <button
          className="back-to-top"
          aria-label="Back to top"
          style={{ opacity: visible ? 1 : 0, pointerEvents: visible ? "auto" : "none" }}
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        >
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="12" y1="19" x2="12" y2="5" />
            <polyline points="5 12 12 5 19 12" />
          </svg>
        </button>
      </div>
    </footer>
  );
}
