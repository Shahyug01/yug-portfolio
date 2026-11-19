import { useEffect, useState } from "react";

const THEME_KEY = "yug-portfolio-theme";

function getStoredTheme() {
  try {
    const stored = localStorage.getItem(THEME_KEY);
    return stored === "light" || stored === "dark" ? stored : null;
  } catch {
    return null;
  }
}

export default function useTheme() {
  const [theme, setTheme] = useState(getStoredTheme);

  useEffect(() => {
    if (theme) {
      document.documentElement.setAttribute("data-theme", theme);
    } else {
      document.documentElement.removeAttribute("data-theme");
    }
  }, [theme]);

  function toggleTheme() {
    setTheme((prev) => {
      const current =
        prev ||
        (window.matchMedia("(prefers-color-scheme: light)").matches
          ? "light"
          : "dark");
      const next = current === "light" ? "dark" : "light";
      try {
        localStorage.setItem(THEME_KEY, next);
      } catch {
        /* ignore */
      }
      return next;
    });
  }

  return [theme, toggleTheme];
}
