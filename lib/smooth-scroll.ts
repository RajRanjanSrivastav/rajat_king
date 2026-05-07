"use client";

import { useEffect } from "react";
import Lenis from "lenis";

export default function SmoothScroll() {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.1,
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 1.5,
    });

    // RAF loop
    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    // ✅ Fix anchor links (#id scrolling)
    const handleAnchorClick = (e: Event) => {
      const target = e.currentTarget as HTMLAnchorElement;
      const href = target.getAttribute("href");

      if (href && href.startsWith("#")) {
        e.preventDefault();
        lenis.scrollTo(href);
      }
    };

    const links = document.querySelectorAll('a[href^="#"]');
    links.forEach((link) => link.addEventListener("click", handleAnchorClick));

    return () => {
      lenis.destroy();
      links.forEach((link) =>
        link.removeEventListener("click", handleAnchorClick),
      );
    };
  }, []);

  return null;
}
