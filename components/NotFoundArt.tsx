"use client";

import { useEffect, useRef } from "react";

/** The 404 numeral: the pink "0" has an eye that follows the pointer. */
export default function NotFoundArt() {
  const eye = useRef<HTMLElement>(null);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const el = eye.current;
    if (!el || !el.parentElement) return;
    const onMove = (v: PointerEvent) => {
      const r = el.parentElement!.getBoundingClientRect();
      const dx = v.clientX - (r.left + r.width / 2);
      const dy = v.clientY - (r.top + r.height / 2);
      const d = Math.hypot(dx, dy) || 1;
      const m = r.width * 0.22;
      el.style.transform = `translate(${(dx / d) * Math.min(m, d / 6)}px,${(dy / d) * Math.min(m, d / 6)}px)`;
    };
    window.addEventListener("pointermove", onMove);
    return () => window.removeEventListener("pointermove", onMove);
  }, []);

  return (
    <div className="n404 rv" aria-hidden="true">
      4<span className="o"><i ref={eye} /></span>4
    </div>
  );
}
