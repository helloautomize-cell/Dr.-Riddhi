"use client";
import { useEffect } from "react";

/**
 * Treatments hub behaviors — ported verbatim from _source/pages/treatments.html JS.
 * Filter chips, live search, cursor-follow icon preview, symptom finder.
 * Data is injected as JSON to stay in sync with lib/treatments.
 */
const SYMPTOMS: [string, number][] = [
  ["Heavy or long periods", 0],
  ["Periods are irregular", 1],
  ["Very painful periods", 2],
  ["A cyst on my scan", 4],
  ["Fibroid on my scan", 3],
  ["Want to plan a pregnancy", 5],
  ["Trying for a while", 6],
  ["Due for a Pap smear", 7],
  ["Discharge or itching", 8],
  ["Hot flushes, poor sleep", 9],
  ["Told I need surgery", 10],
];

export default function TreatmentsFx() {
  useEffect(() => {
    const $ = <T extends Element = HTMLElement>(s: string) => document.querySelector(s) as T | null;
    const $$ = <T extends Element = HTMLElement>(s: string) => Array.from(document.querySelectorAll(s)) as T[];

    /* index rows were SSR'd; collect them into the same T array the design used */
    const rows = $$("#ixw li").map((li) => ({
      g: (li as HTMLElement).dataset.g!,
      el: li as HTMLElement,
      a: li.querySelector("a")!,
      name: li.querySelector(".nm")!.textContent!,
      desc: li.querySelector(".ds")!.textContent!,
      ic: (li.querySelector("a") as HTMLElement).dataset.ic!,
      href: (li.querySelector("a") as HTMLAnchorElement).getAttribute("href")!,
    }));

    /* filter + search */
    let g = "all";
    const q = $("#q") as HTMLInputElement | null;
    const apply = () => {
      const s = (q?.value ?? "").trim().toLowerCase();
      let c = 0;
      rows.forEach((r) => {
        const ok = (g === "all" || r.g === g) && (!s || (r.el as HTMLElement).dataset.k!.includes(s));
        r.el.classList.toggle("hide", !ok);
        if (ok) { c++; r.el.classList.add("in"); }
      });
      $$(".ghead").forEach((h) => {
        const gh = (h as HTMLElement).dataset.gh;
        h.classList.toggle("hide", !$$(`#ixw li[data-g="${gh}"]:not(.hide)`).length);
      });
      const cnt = $("#cnt"); if (cnt) cnt.textContent = String(c);
      const empty = $("#empty"); if (empty) (empty as HTMLElement).hidden = c > 0;
    };
    q?.addEventListener("input", apply);
    $$("#filt button").forEach((b) => {
      (b as HTMLButtonElement).onclick = () => {
        g = (b as HTMLElement).dataset.g!;
        $$("#filt button").forEach((x) => x.setAttribute("aria-pressed", String(x === b)));
        apply();
      };
    });

    /* cursor preview */
    const BG: Record<string, [string, string]> = {
      periods: ["#5E2A2C", "#FBF7F3"],
      lumps: ["#EDBCCD", "#5E2A2C"],
      preg: ["#F1E7DF", "#B93A69"],
      screen: ["#B93A69", "#FBF7F3"],
      later: ["#3B1B1D", "#E9A9BF"],
      surg: ["#F8E6ED", "#5E2A2C"],
    };
    let cleanup: (() => void) | undefined;
    const fp = $("#fp"), fu = $("#fpu");
    if (fp && fu) {
      let tx = 0, ty = 0, x = 0, y = 0, raf = 0;
      rows.forEach((r) => {
        r.a.addEventListener("mouseenter", () => {
          const bg = BG[r.g];
          fp.style.background = bg[0];
          fp.style.color = bg[1];
          fu.setAttribute("href", "#" + r.ic);
          fu.style.animation = "none";
          void (fu as unknown as HTMLElement).getBoundingClientRect();
          fu.style.animation = "";
          fp.classList.add("on");
        });
        r.a.addEventListener("mouseleave", () => fp.classList.remove("on"));
      });
      const mv = (e: PointerEvent) => { tx = e.clientX + 150; ty = e.clientY; };
      addEventListener("pointermove", mv);
      const loop = () => {
        x += (tx - x) * 0.14;
        y += (ty - y) * 0.14;
        fp.style.left = x + "px";
        fp.style.top = y + "px";
        raf = requestAnimationFrame(loop);
      };
      raf = requestAnimationFrame(loop);
      cleanup = () => { removeEventListener("pointermove", mv); cancelAnimationFrame(raf); };
    }

    /* symptom finder */
    const sym = $("#sym"), ans = $("#ans");
    if (sym && ans) {
      sym.innerHTML = SYMPTOMS.map(
        (s, i) => `<button aria-pressed="${i === 0}" data-i="${i}">${s[0]}</button>`
      ).join("");
      const show = (i: number) => {
        const r = rows[SYMPTOMS[i][1]];
        if (!r) return;
        ans.classList.remove("flip");
        void ans.offsetWidth;
        ans.classList.add("flip");
        ans.innerHTML = `<span class="ai"><svg viewBox="0 0 48 48"><use href="#${r.ic}"/></svg></span><div><small class="lbl">Read first</small><b>${r.name}</b><p>${r.desc}</p><a href="${r.href}">Open the page <svg class="ico" style="width:16px;height:16px"><use href="#i-arrow"/></svg></a></div>`;
      };
      $$("#sym button").forEach((b) => {
        (b as HTMLButtonElement).onclick = () => {
          $$("#sym button").forEach((x) => x.setAttribute("aria-pressed", String(x === b)));
          show(Number((b as HTMLElement).dataset.i));
        };
      });
      show(0);
    }
    return () => { cleanup?.(); };
  }, []);
  return null;
}
