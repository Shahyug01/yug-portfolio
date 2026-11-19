(() => {
  "use strict";

  /* ---------- Theme toggle ---------- */
  const root = document.documentElement;
  const themeToggle = document.getElementById("themeToggle");
  const THEME_KEY = "yug-portfolio-theme";

  const storedTheme = localStorage.getItem(THEME_KEY);
  if (storedTheme === "light" || storedTheme === "dark") {
    root.setAttribute("data-theme", storedTheme);
  }

  themeToggle.addEventListener("click", () => {
    const current = root.getAttribute("data-theme") ||
      (window.matchMedia("(prefers-color-scheme: light)").matches ? "light" : "dark");
    const next = current === "light" ? "dark" : "light";
    root.setAttribute("data-theme", next);
    try { localStorage.setItem(THEME_KEY, next); } catch (e) {}
  });

  /* ---------- Sticky header on scroll ---------- */
  const header = document.getElementById("siteHeader");
  const progressBar = document.getElementById("progressBar");

  function onScroll() {
    header.classList.toggle("scrolled", window.scrollY > 10);

    const scrollTop = window.scrollY;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    const pct = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
    progressBar.style.width = pct + "%";

    backToTop.classList.toggle("visible", scrollTop > 500);
  }

  /* ---------- Back to top ---------- */
  const backToTop = document.getElementById("backToTop");
  backToTop.style.opacity = "0";
  backToTop.style.pointerEvents = "none";
  backToTop.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });

  const style = document.createElement("style");
  style.textContent = ".back-to-top{opacity:0;pointer-events:none;transition:opacity .25s ease}.back-to-top.visible{opacity:1;pointer-events:auto}";
  document.head.appendChild(style);

  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();

  /* ---------- Mobile menu ---------- */
  const hamburger = document.getElementById("hamburger");
  const mobileMenu = document.getElementById("mobileMenu");

  function closeMobileMenu() {
    hamburger.classList.remove("open");
    hamburger.setAttribute("aria-expanded", "false");
    mobileMenu.classList.remove("open");
    document.body.style.overflow = "";
  }

  hamburger.addEventListener("click", () => {
    const isOpen = mobileMenu.classList.toggle("open");
    hamburger.classList.toggle("open", isOpen);
    hamburger.setAttribute("aria-expanded", String(isOpen));
    document.body.style.overflow = isOpen ? "hidden" : "";
  });

  mobileMenu.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", closeMobileMenu);
  });

  /* ---------- Scrollspy ---------- */
  const sections = document.querySelectorAll("main section[id]");
  const navLinks = document.querySelectorAll('a[data-nav]');

  function setActiveLink(id) {
    navLinks.forEach((link) => {
      link.classList.toggle("active", link.getAttribute("href") === `#${id}`);
    });
  }

  const spyObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveLink(entry.target.id);
        }
      });
    },
    { rootMargin: "-45% 0px -50% 0px", threshold: 0 }
  );

  sections.forEach((section) => spyObserver.observe(section));

  /* ---------- Reveal on scroll ---------- */
  const revealEls = document.querySelectorAll(".reveal");

  if (!("IntersectionObserver" in window)) {
    revealEls.forEach((el) => el.classList.add("in-view"));
  } else {
    const revealObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("in-view");
            revealObserver.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15 }
    );

    revealEls.forEach((el) => revealObserver.observe(el));
  }

  /* ---------- Rotating hero text ---------- */
  const rotatingText = document.getElementById("rotatingText");
  const phrases = ["the MERN stack", "React & Node.js", "clean code", "real-world projects"];
  let phraseIndex = 0;

  const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  if (rotatingText && !prefersReducedMotion) {
    setInterval(() => {
      phraseIndex = (phraseIndex + 1) % phrases.length;
      rotatingText.style.opacity = "0";
      setTimeout(() => {
        rotatingText.textContent = phrases[phraseIndex];
        rotatingText.style.opacity = "1";
      }, 250);
    }, 2600);
    rotatingText.style.transition = "opacity .25s ease";
  }

  /* ---------- Footer year ---------- */
  document.getElementById("year").textContent = new Date().getFullYear();
})();
