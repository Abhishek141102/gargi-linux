import React, { useEffect, useRef } from "react";

interface ScrollRevealProps {
  children: React.ReactNode;
}

export const ScrollReveal: React.FC<ScrollRevealProps> = ({ children }) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // Animate each section so the same scroll reveal behavior covers every route.
    const targets = Array.from(
      container.querySelectorAll<HTMLElement>("section"),
    );

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    if (!("IntersectionObserver" in window)) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const target = entry.target as HTMLElement;

          if (entry.isIntersecting) {
            target.classList.add("scroll-reveal");
            requestAnimationFrame(() =>
              target.classList.add("scroll-reveal-visible"),
            );
            observer.unobserve(target);
          } else {
            target.classList.add("scroll-reveal");
          }
        });
      },
      { threshold: 0, rootMargin: "0px 0px -20px 0px" },
    );

    targets.forEach((target, index) => {
      target.style.setProperty(
        "--scroll-reveal-delay",
        `${(index % 4) * 65}ms`,
      );
      observer.observe(target);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div ref={containerRef} className="contents">
      {children}
    </div>
  );
};
