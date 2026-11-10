"use client";
import { useEffect } from "react";

/** FAQ page — live search with <mark> highlight + group tabs (verbatim port). */
export default function FaqsFx() {
  useEffect(() => {
    const $ = <T extends Element = HTMLElement>(s: string) => document.querySelector(s) as T | null;
    const $$ = <T extends Element = HTMLElement>(s: string) => Array.from(document.querySelectorAll(s)) as T[];

    /* SSR'd groups get their reveal state */
    const io = new IntersectionObserver(
      (es) => es.forEach((e) => { if (e.isIntersecting) { e.target.classList.add("in"); io.unobserve(e.target); } }),
      { threshold: 0.05 }
    );
    $$("#faqs .sr").forEach((e) => io.observe(e));

    let g = "all";
    const q = $("#fq") as HTMLInputElement | null;
    const esc = (s: string) => s.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
    const run = () => {
      const s = (q?.value ?? "").trim().toLowerCase();
      let n = 0;
      $$(".grp2").forEach((G) => {
        let c = 0;
        G.querySelectorAll("details").forEach((dEl) => {
          const d = dEl as HTMLDetailsElement;
          const sm = d.querySelector("summary") as HTMLElement;
          const p = d.querySelector("p") as HTMLElement;
          const qq = sm.dataset.q ?? "";
          const aa = p.dataset.a ?? "";
          const ok = !s || (qq + " " + aa).toLowerCase().includes(s);
          d.classList.toggle("hide", !ok);
          if (ok) c++;
          const qt = sm.querySelector(".qt") as HTMLElement | null;
          if (qt) qt.innerHTML = s ? qq.replace(new RegExp("(" + esc(s) + ")", "ig"), "<mark>$1</mark>") : qq;
          if (s && ok) d.open = aa.toLowerCase().includes(s);
        });
        const show = (g === "all" || (G as HTMLElement).dataset.g === g) && c > 0;
        G.classList.toggle("hide", !show);
        if (show) { n += c; G.classList.add("in"); }
      });
      const none = $("#none");
      if (none) (none as HTMLElement).hidden = n > 0;
    };
    q?.addEventListener("input", run);
    $$(".qs button").forEach((b) => {
      (b as HTMLButtonElement).onclick = () => { if (q) { q.value = (b as HTMLElement).textContent ?? ""; } run(); };
    });
    $$("#tabs button").forEach((b) => {
      (b as HTMLButtonElement).onclick = () => {
        g = (b as HTMLElement).dataset.g!;
        $$("#tabs button").forEach((x) => x.setAttribute("aria-pressed", String(x === b)));
        run();
      };
    });
    const first = $("#faqs details") as HTMLDetailsElement | null;
    if (first) first.open = true;
    return () => io.disconnect();
  }, []);
  return null;
}
