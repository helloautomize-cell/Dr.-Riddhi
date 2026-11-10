"use client";

import { useEffect } from "react";

/* Home page behaviours — port of the inline script in the approved index.html.
   Shared chrome behaviours (sheet, mini, live pill, week chart, .sr reveal) live in Effects.tsx. */
export default function HomeFx() {
  useEffect(() => {
    const RM = matchMedia("(prefers-reduced-motion: reduce)").matches;
    const $ = (s: string) => document.querySelector(s);
    const $$ = (s: string) => [...document.querySelectorAll(s)] as HTMLElement[];
    const cleanups: (() => void)[] = [];

    /* hero intro animations: clear once finished so GSAP can take over */
    const done = (e: Event) => { const el = e.target as HTMLElement; el.style.animation = "none"; el.style.opacity = "1"; };
    $$("#pimg,#halo,.ring").forEach((el) => el.addEventListener("animationend", done));
    cleanups.push(() => $$("#pimg,#halo,.ring").forEach((el) => el.removeEventListener("animationend", done)));

    /* statement words are pre-wrapped in JSX (.w spans) — nothing to do here */

    /* care: cycle counter */
    const cd = $("#cday"), cp = $("#cphase");
    if (cd && cp) {
      let day = 1;
      const ph = (n: number) => (n <= 5 ? "Period" : n < 14 ? "Follicular" : n === 14 ? "Ovulation" : "Luteal");
      const tick = () => { cd.textContent = "Day " + day; cp.textContent = ph(day); day = (day % 28) + 1; };
      tick();
      if (!RM) { const iv = setInterval(tick, 14000 / 28); cleanups.push(() => clearInterval(iv)); }
    }

    /* surgery compare toggle */
    const c = $("#cmpx") as HTMLElement | null;
    if (c) {
      const bs = [...c.querySelectorAll<HTMLButtonElement>(".seg button")];
      let timer: ReturnType<typeof setInterval> | undefined;
      const set = (m: string) => {
        c.dataset.m = m;
        bs.forEach((b) => b.setAttribute("aria-pressed", String(b.dataset.m === m)));
        c.querySelectorAll<HTMLElement>(".facts b").forEach((b) => {
          b.style.opacity = "0";
          setTimeout(() => { b.textContent = b.dataset[m as "open" | "key"] ?? ""; b.style.opacity = "1"; }, 180);
        });
      };
      const onClick = (b: HTMLButtonElement) => () => { set(b.dataset.m!); if (timer) clearInterval(timer); };
      const offs = bs.map((b) => { const f = onClick(b); b.addEventListener("click", f); return () => b.removeEventListener("click", f); });
      if (!RM) { let m = "key"; timer = setInterval(() => { m = m === "key" ? "open" : "key"; set(m); }, 4200); }
      cleanups.push(() => { offs.forEach((o) => o()); if (timer) clearInterval(timer); });
    }

    /* clip-path hides .bt/.tc tiles from IO — watch parents instead */
    const io2 = new IntersectionObserver((es) => es.forEach((e) => {
      if (e.isIntersecting) { e.target.querySelectorAll(":scope>.bt,:scope>.tc").forEach((t) => t.classList.add("in")); io2.unobserve(e.target); }
    }), { rootMargin: "0px 0px -12% 0px" });
    const parents = new Set($$(".bt,.tc").map((el) => el.parentElement!));
    parents.forEach((p) => { [...p.children].forEach((el, i) => ((el as HTMLElement).style.transitionDelay = (i % 4) * 110 + "ms")); io2.observe(p); });
    cleanups.push(() => io2.disconnect());

    let dead = false;
    if (!RM) {
      (async () => {
        const [{ default: gsap }, { ScrollTrigger }] = await Promise.all([import("gsap"), import("gsap/ScrollTrigger")]);
        if (dead) return;
        gsap.registerPlugin(ScrollTrigger);
        const mm = gsap.matchMedia();

        /* HALO BLOOM: pin hero, grow the halo into the next section's colour */
        mm.add("(min-width:1101px)", () => {
          const pw = $("#pwrap") as HTMLElement;
          const tl = gsap.timeline({ scrollTrigger: { trigger: "#heroPin", start: "top top", end: "+=110%", scrub: 0.6, pin: true, anticipatePin: 1 } });
          tl.to("#lcol", { x: -120, opacity: 0, ease: "power2.in", duration: 0.45 }, 0)
            .to("#rcol", { x: 120, opacity: 0, ease: "power2.in", duration: 0.45 }, 0)
            .to(".rail", { y: 80, opacity: 0, duration: 0.3 }, 0)
            .to([".ring", ".star", ".sprig"], { opacity: 0, duration: 0.25 }, 0)
            .fromTo("#pimg", { y: 60, scale: 1, opacity: 1 }, { y: -40, scale: 0.92, opacity: 0, ease: "power2.in", duration: 0.5, immediateRender: false }, 0.15)
            .set("#bloom", { opacity: 1 }, 0.2)
            .fromTo("#bloom", { scale: 1 }, { scale: () => { const r = pw.querySelector(".halo")!.getBoundingClientRect(); return (Math.hypot(innerWidth, innerHeight) / r.width) * 2.4; }, ease: "power2.in", duration: 0.8 }, 0.2);
          const xs = gsap.quickTo("#pimg", "x", { duration: 0.8, ease: "power3" });
          const xh = gsap.quickTo("#halo", "x", { duration: 1.2, ease: "power3" });
          const mv = (e: PointerEvent) => { const k = e.clientX / innerWidth - 0.5; xs(k * -14); xh(k * 10); };
          addEventListener("pointermove", mv);
          return () => removeEventListener("pointermove", mv);
        });

        /* statement word reveal */
        const ws = $$(".st-text .w");
        const created: ScrollTrigger[] = [];
        created.push(ScrollTrigger.create({ trigger: "#statement", start: "top 75%", end: "bottom 60%", scrub: true, onUpdate: (s) => { const n = Math.round(s.progress * ws.length); ws.forEach((w, i) => w.classList.toggle("on", i < n)); } }));
        const stOf = (t: unknown) => (t as { scrollTrigger?: ScrollTrigger }).scrollTrigger;

        /* explain frame open */
        gsap.to("#exFrame", { clipPath: "inset(0% 0% 0% 0% round 32px)", ease: "none", scrollTrigger: { trigger: "#exFrame", start: "top 85%", end: "top 30%", scrub: true } });
        gsap.to("#exFrame img", { scale: 1, ease: "none", scrollTrigger: { trigger: "#exFrame", start: "top 85%", end: "bottom top", scrub: true } });
        created.push(...gsap.getTweensOf(["#exFrame", "#exFrame img"]).map(stOf).filter(Boolean) as ScrollTrigger[]);

        /* steps horizontal pin */
        mm.add("(min-width:1024px)", () => {
          const tr = $("#track") as HTMLElement;
          const dist = () => tr.scrollWidth - innerWidth + 80;
          gsap.to(tr, { x: () => -dist(), ease: "none", scrollTrigger: { trigger: "#pinbox", start: "center center", end: () => "+=" + dist(), scrub: 0.6, pin: "#visit-steps", invalidateOnRefresh: true, onUpdate: (s) => { ($("#prog") as HTMLElement).style.width = s.progress * 100 + "%"; } } });
        });

        /* parallax images */
        $$(".sx-photo img,.ab-frame img,.final-img img").forEach((im) => gsap.fromTo(im, { yPercent: -6, scale: 1.12 }, { yPercent: 6, scale: 1.12, ease: "none", scrollTrigger: { trigger: im.parentElement!, start: "top bottom", end: "bottom top", scrub: true } }));
        created.push(...gsap.getTweensOf(".sx-photo img,.ab-frame img,.final-img img").map(stOf).filter(Boolean) as ScrollTrigger[]);

        /* wordmark slide */
        gsap.fromTo(".wordmark", { xPercent: 8 }, { xPercent: -8, ease: "none", scrollTrigger: { trigger: "footer", start: "top bottom", end: "bottom bottom", scrub: true } });
        created.push(...gsap.getTweensOf(".wordmark").map(stOf).filter(Boolean) as ScrollTrigger[]);

        cleanups.push(() => { mm.revert(); created.forEach((t) => t.kill()); });
      })();
    } else {
      $$(".st-text .w").forEach((w) => w.classList.add("on"));
    }

    return () => { dead = true; cleanups.forEach((f) => f()); };
  }, []);

  return null;
}
