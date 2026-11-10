"use client";
import { useEffect } from "react";

/** Learn hub — reel rail arrows/drag + article category filter (verbatim port). */
export default function LearnFx() {
  useEffect(() => {
    const $ = <T extends Element = HTMLElement>(s: string) => document.querySelector(s) as T | null;
    const $$ = <T extends Element = HTMLElement>(s: string) => Array.from(document.querySelectorAll(s)) as T[];

    const r = $("#rail");
    const rl = $("#rl"), rr = $("#rr");
    if (rl && r) (rl as HTMLButtonElement).onclick = () => r.scrollBy({ left: -280, behavior: "smooth" });
    if (rr && r) (rr as HTMLButtonElement).onclick = () => r.scrollBy({ left: 280, behavior: "smooth" });
    if (r) {
      let down = false, sx = 0, sl = 0, moved = false;
      const pd = (e: PointerEvent) => {
        if (e.pointerType !== "mouse") return;
        down = true; moved = false; sx = e.clientX; sl = r.scrollLeft; r.classList.add("drag");
      };
      const pm = (e: PointerEvent) => {
        if (!down) return;
        const dx = e.clientX - sx;
        if (Math.abs(dx) > 4) moved = true;
        r.scrollLeft = sl - dx;
      };
      const pu = () => { down = false; r.classList.remove("drag"); };
      const clk = (e: MouseEvent) => { if (moved) { e.preventDefault(); moved = false; } };
      r.addEventListener("pointerdown", pd);
      addEventListener("pointermove", pm);
      addEventListener("pointerup", pu);
      r.addEventListener("click", clk, true);
      var un = () => {
        r.removeEventListener("pointerdown", pd);
        removeEventListener("pointermove", pm);
        removeEventListener("pointerup", pu);
        r.removeEventListener("click", clk, true);
      };
    }

    $$("#cats button").forEach((b) => {
      (b as HTMLButtonElement).onclick = () => {
        $$("#cats button").forEach((x) => x.setAttribute("aria-pressed", String(x === b)));
        const c = (b as HTMLElement).dataset.c;
        $$("#agrid .ac").forEach((a) => {
          const ok = c === "all" || (a as HTMLElement).dataset.c === c;
          a.classList.toggle("hide", !ok);
          if (ok) a.classList.add("in");
        });
      };
    });
    return () => un?.();
  }, []);
  return null;
}
