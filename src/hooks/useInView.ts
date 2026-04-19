"use client";

import { useEffect, useRef } from "react";

export function useInView(threshold = 0.1) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const targets = entry.target.querySelectorAll("[data-animate]");
            targets.forEach((target) => {
              target.classList.remove("is-hidden");
            });
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold }
    );

    const animatables = el.querySelectorAll("[data-animate]");
    animatables.forEach((target) => {
      target.classList.add("is-hidden");
    });

    observer.observe(el);

    return () => observer.disconnect();
  }, [threshold]);

  return ref;
}