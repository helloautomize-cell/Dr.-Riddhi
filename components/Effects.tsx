"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

/**
 * Shared page behaviours — a faithful port of 04-website-design/site.js.
 * Re-initialises on every route change so server-rendered pages behave
 * identically to the approved static design.
 */
export default function Effects() {
  const pathname = usePathname();

  useEffect(() => {
    const $ = <T extends Element = Element>(s: string) =>
      document.querySelector<T>(s);
    const $$ = <T extends Element = Element>(s: string) => [
      ...document.querySelectorAll<T>(s),
    ];
    (window as any).$ = $;
    (window as any).$$ = $$;

    const raf = requestAnimationFrame(() =>
      requestAnimationFrame(() => document.body.classList.add("on-load")),
    );

    /* menu */
    const mbs = $$(".menu-btn");
    const sheet = $("#sheet");
    const onOpen = () => {
      if (sheet) (sheet as HTMLElement).hidden = false;
    };
    const onClose = () => {
      if (sheet) (sheet as HTMLElement).hidden = true;
    };
    mbs.forEach((b) => b.addEventListener("click", onOpen));
    $("#sheetX")?.addEventListener("click", onClose);
    const sheetLinks = $$("#sheet a");
    sheetLinks.forEach((a) => a.addEventListener("click", onClose));

    /* sticky mini header */
    const mini = $("#mini");
    const onS = () => mini?.classList.toggle("on", window.scrollY > 420);
    window.addEventListener("scroll", onS, { passive: true });
    onS();

    /* live OPD status (IST) */
    const now = new Date(
      new Date().toLocaleString("en-US", { timeZone: "Asia/Kolkata" }),
    );
    const d = now.getDay();
    const mi = now.getHours() * 60 + now.getMinutes();
    const wk = d >= 1 && d <= 5;
    const open = wk && ((mi >= 600 && mi < 720) || (mi >= 960 && mi < 1080));
    let t: string;
    if (open) t = "Open now · walk in or call";
    else if (wk && mi < 600) t = "Opens today at 10 am";
    else if (wk && mi >= 720 && mi < 960) t = "Opens again at 4 pm";
    else
      t =
        d === 5 || d === 6
          ? "Closed today · opens Monday 10 am"
          : "Closed now · opens tomorrow 10 am";
    $$(".js-live").forEach((e) => (e.textContent = t));
    $$(".js-dot").forEach((e) => e.classList.toggle("open", open));

    /* week chart */
    const wk2 = $("#week");
    if (wk2) {
      const D = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
      const ti = (d + 6) % 7;
      const pct = (m: number) => (((m - 480) / 720) * 100).toFixed(2) + "%";
      wk2.innerHTML =
        D.map(
          (n, i) =>
            `<div class="r ${i === ti ? "today" : ""}"><span>${n}</span><div class="bar">${
              i < 5
                ? `<i style="left:${pct(600)};width:calc(${pct(720)} - ${pct(600)})"></i><i style="left:${pct(960)};width:calc(${pct(1080)} - ${pct(960)})"></i>`
                : "<em>Closed</em>"
            }</div></div>`,
        ).join("") +
        '<div class="ax"><span>8 am</span><span>12 pm</span><span>4 pm</span><span>8 pm</span></div>';
      wk2.classList.add("io");
    }

    /* reveal: anything with .sr or .io gets .in once visible */
    const io = new IntersectionObserver(
      (es) =>
        es.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("in");
            io.unobserve(e.target);
          }
        }),
      { threshold: 0.12, rootMargin: "0px 0px -6% 0px" },
    );
    $$(".sr,.io").forEach((el) => io.observe(el));

    /* stagger children of [data-stagger] */
    $$("[data-stagger]").forEach((p) =>
      [...p.children].forEach(
        (c, i) => ((c as HTMLElement).style.transitionDelay = i * 80 + "ms"),
      ),
    );

    /* table of contents highlight */
    const toc = $$<HTMLAnchorElement>(".toc a");
    let so: IntersectionObserver | null = null;
    if (toc.length) {
      const secs = toc
        .map((a) => $(a.getAttribute("href") || ""))
        .filter(Boolean) as Element[];
      so = new IntersectionObserver(
        (es) =>
          es.forEach((e) => {
            if (e.isIntersecting)
              toc.forEach((a) =>
                a.classList.toggle(
                  "on",
                  a.getAttribute("href") === "#" + e.target.id,
                ),
              );
          }),
        { rootMargin: "-30% 0px -60% 0px" },
      );
      secs.forEach((s) => so!.observe(s));
    }

    return () => {
      cancelAnimationFrame(raf);
      mbs.forEach((b) => b.removeEventListener("click", onOpen));
      $("#sheetX")?.removeEventListener("click", onClose);
      sheetLinks.forEach((a) => a.removeEventListener("click", onClose));
      window.removeEventListener("scroll", onS);
      io.disconnect();
      so?.disconnect();
      document.body.classList.remove("on-load");
    };
  }, [pathname]);

  return null;
}
