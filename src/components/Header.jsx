import { useEffect, useState } from "react";
import useScrollY from "../hooks/useScrollY.js";
import useActiveSection from "../hooks/useActiveSection.js";
import useTheme from "../hooks/useTheme.js";
import { NAV_ITEMS } from "../data/content.js";

const SECTION_IDS = NAV_ITEMS.map((item) => item.id);

export default function Header() {
  const scrollY = useScrollY();
  const activeId = useActiveSection(SECTION_IDS);
  const [, toggleTheme] = useTheme();
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  function closeMenu() {
    setMenuOpen(false);
  }

  return (
    <>
      <header className={`site-header${scrollY > 10 ? " scrolled" : ""}`}>
        <div className="container header-inner">
          <a href="#home" className="logo">
            Yug<span className="accent-dot">.</span>
          </a>

          <nav className="nav-links">
            {NAV_ITEMS.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                className={activeId === item.id ? "active" : ""}
              >
                {item.label}
              </a>
            ))}
          </nav>

          <div className="header-actions">
            <button
              className="icon-btn"
              onClick={toggleTheme}
              aria-label="Toggle color theme"
            >
              <svg
                className="icon icon-sun"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <circle cx="12" cy="12" r="4" />
                <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41" />
              </svg>
              <svg
                className="icon icon-moon"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
              </svg>
            </button>
            <a href="#contact" className="btn btn-primary btn-small header-cta">
              Get in touch
            </a>
            <button
              className={`hamburger${menuOpen ? " open" : ""}`}
              aria-label="Toggle menu"
              aria-expanded={menuOpen}
              onClick={() => setMenuOpen((open) => !open)}
            >
              <span></span>
              <span></span>
              <span></span>
            </button>
          </div>
        </div>
      </header>

      <div className={`mobile-menu${menuOpen ? " open" : ""}`}>
        <nav>
          {NAV_ITEMS.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              className={activeId === item.id ? "active" : ""}
              onClick={closeMenu}
            >
              {item.label}
            </a>
          ))}
        </nav>
        <div className="mobile-menu-footer">
          <a href="mailto:yugshahworks@gmail.com" className="btn btn-primary" onClick={closeMenu}>
            Say hello
          </a>
        </div>
      </div>
    </>
  );
}
