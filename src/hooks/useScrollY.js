import { useEffect, useState } from "react";

export default function useScrollY() {
  const [scrollY, setScrollY] = useState(
    typeof window !== "undefined" ? window.scrollY : 0
  );

  useEffect(() => {
    let ticking = false;

    function onScroll() {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(() => {
        setScrollY(window.scrollY);
        ticking = false;
      });
    }

    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return scrollY;
}
