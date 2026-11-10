"use client";
import { useEffect } from "react";

/** Article template — reading progress bar + myth flip cards (verbatim port). */
export default function ArticleFx() {
  useEffect(() => {
    const rp = document.getElementById("rp");
    const ar = document.querySelector(".prose") as HTMLElement | null;
    if (rp && ar) {
      const u = () => {
        const r = ar.getBoundingClientRect();
        const p = Math.min(1, Math.max(0, -r.top / (r.height - innerHeight * 0.6)));
        rp.style.transform = `scaleX(${p})`;
      };
      addEventListener("scroll", u, { passive: true });
      u();
      var un = () => removeEventListener("scroll", u);
    }
    document.querySelectorAll<HTMLElement>(".myth").forEach((m) => {
      const t = () => {
        m.classList.toggle("on");
        m.setAttribute("aria-pressed", String(m.classList.contains("on")));
      };
      m.onclick = t;
      m.onkeydown = (e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          t();
        }
      };
    });
    return () => un?.();
  }, []);
  return null;
}
