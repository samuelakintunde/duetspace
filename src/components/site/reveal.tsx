"use client";

import { useEffect, useRef } from "react";

/**
 * Reveals its children as they scroll into view, then stops observing.
 *
 * The element renders *visible*, and is only hidden once this effect has run —
 * so with JS off, an unsupported browser, or a crawler that doesn't execute
 * scripts, the content is simply there. Sections already on screen at mount are
 * left alone, so nothing fades in underneath the visitor.
 */
export function Reveal({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el || typeof IntersectionObserver === "undefined") return;
    if (el.getBoundingClientRect().top < window.innerHeight * 0.9) return;

    // Hide without animating the hide itself.
    el.style.transition = "none";
    el.dataset.visible = "false";
    void el.offsetHeight;
    el.style.transition = "";

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.dataset.visible = "true";
          observer.disconnect();
        }
      },
      { rootMargin: "0px 0px -10% 0px", threshold: 0.05 },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} className={`reveal ${className}`} data-visible="true">
      {children}
    </div>
  );
}
