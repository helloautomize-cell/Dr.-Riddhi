"use client";
import { useEffect } from "react";

/** About page behaviors — portrait tilt + timeline fill/year swap (verbatim port). */
export default function AboutFx() {
  useEffect(() => {
    const $ = <T extends Element = HTMLElement>(s: string) => document.querySelector(s) as T | null;
    const $$ = <T extends Element = HTMLElement>(s: string) => Array.from(document.querySelectorAll(s)) as T[];
    const RM = matchMedia("(prefers-reduced-motion: reduce)").matches;

    /* portrait tilt */
    const st = $("#stack");
    if (st && !RM && matchMedia("(pointer:fine)").matches) {
      st.addEventListener("pointermove", (e) => {
        const r = st.getBoundingClientRect();
        const x = (e.clientX - r.left) / r.width - 0.5;
        const y = (e.clientY - r.top) / r.height - 0.5;
        st.style.transform = `perspective(900px) rotateY(${x * 6}deg) rotateX(${-y * 6}deg)`;
      });
      st.addEventListener("pointerleave", () => (st.style.transform = ""));
    }

    /* timeline fill + year swap */
    const lis = $$("#tl2 li"), yr = $("#pyr"), fr = $("#pfr"), fill = $("#tlfill"), ol = $("#tl2");
    if (lis.length && yr && fr && fill && ol) {
      const upd = () => {
        const mid = innerHeight * 0.55;
        let last: HTMLElement | null = null;
        lis.forEach((li) => {
          const on = li.getBoundingClientRect().top < mid;
          li.classList.toggle("lit", on);
          if (on) last = li;
        });
        const b = ol.getBoundingClientRect();
        const p = Math.min(1, Math.max(0, (mid - b.top) / b.height));
        fill.style.transform = `scaleY(${p})`;
        if (last) {
          yr.textContent = (last as HTMLElement).dataset.y ?? "";
          fr.classList.toggle("sw", !!(last as HTMLElement).dataset.alt);
        }
      };
      addEventListener("scroll", upd, { passive: true });
      upd();
      return () => removeEventListener("scroll", upd);
    }
  }, []);
  return null;
}
