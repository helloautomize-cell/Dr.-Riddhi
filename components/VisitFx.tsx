"use client";
import { useEffect } from "react";

/** First-visit page — clock segments, sticky step viewer, bag meter (verbatim port). */
export default function VisitFx() {
  useEffect(() => {
    const $ = <T extends Element = HTMLElement>(s: string) => document.querySelector(s) as T | null;
    const $$ = <T extends Element = HTMLElement>(s: string) => Array.from(document.querySelectorAll(s)) as T[];

    /* clock segments: arrive 10, consult 20, tests 10, plan 5 (of 45) */
    const C = 2 * Math.PI * 170;
    const S: [string, number][] = [["#B93A69", 10], ["#5E2A2C", 20], ["#E9A9BF", 10], ["#F1E7DF", 5]];
    let a = 0, h = "";
    S.forEach((s, i) => {
      const L = (C * s[1]) / 45 - 6;
      h += `<circle class="seg" cx="220" cy="220" r="170" stroke="${s[0]}" style="--l:${L.toFixed(1)};--dl:${0.3 + i * 0.35}s" transform="rotate(${-90 + (a / 45) * 360} 220 220)"/>`;
      a += s[1];
    });
    const segs = $("#segs");
    if (segs) segs.innerHTML = h;

    /* sticky viewer */
    const lis = $$("#steps li"), ims = $$("#vw img"), vn = $("#vn"), vt = $("#vt");
    const so = new IntersectionObserver(
      (es) =>
        es.forEach((e) => {
          if (e.isIntersecting) {
            const i = lis.indexOf(e.target as HTMLElement);
            lis.forEach((l, j) => l.classList.toggle("on", j === i));
            ims.forEach((m, j) => m.classList.toggle("on", j === i));
            if (vn) vn.textContent = String(i + 1).padStart(2, "0");
            if (vt) vt.textContent = (e.target as HTMLElement).dataset.t ?? "";
          }
        }),
      { rootMargin: "-45% 0px -45% 0px" }
    );
    lis.forEach((l) => so.observe(l));

    /* bag meter */
    const cb = $$("#bag input") as HTMLInputElement[];
    const mtx = $("#mtx"), mbar = $("#mbar");
    const up = () => {
      const n = cb.filter((c) => c.checked).length;
      if (mtx) mtx.textContent = `${n} of 6 packed`;
      if (mbar) mbar.style.width = (n / 6) * 100 + "%";
    };
    cb.forEach((c) => (c.onchange = up));
    return () => so.disconnect();
  }, []);
  return null;
}
