"use client";
import { useEffect } from "react";

/** Keyhole page — scope-lens zoom on the surgery image (verbatim port). */
export default function KeyholeFx() {
  useEffect(() => {
    const box = document.getElementById("scope");
    const lens = document.getElementById("lens");
    const img = box?.querySelector("img");
    const RM = matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (!box || !lens || !img || RM || !matchMedia("(pointer:fine)").matches) return;
    const Z = 2.4;
    const onEnter = () => lens.classList.add("on");
    const onLeave = () => lens.classList.remove("on");
    const onMove = (e: PointerEvent) => {
      const r = box.getBoundingClientRect();
      const x = e.clientX - r.left;
      const y = e.clientY - r.top;
      lens.style.left = x + "px";
      lens.style.top = y + "px";
      lens.style.backgroundImage = `url(${img.currentSrc || img.src})`;
      const iw = img.naturalWidth, ih = img.naturalHeight;
      const s = Math.max(r.width / iw, r.height / ih);
      const dw = iw * s, dh = ih * s;
      const ox = (r.width - dw) / 2, oy = (r.height - dh) * 0.3;
      lens.style.backgroundSize = `${dw * Z}px ${dh * Z}px`;
      lens.style.backgroundPosition = `${-((x - ox) * Z - 95)}px ${-((y - oy) * Z - 95)}px`;
    };
    box.addEventListener("pointerenter", onEnter);
    box.addEventListener("pointerleave", onLeave);
    box.addEventListener("pointermove", onMove);
    return () => {
      box.removeEventListener("pointerenter", onEnter);
      box.removeEventListener("pointerleave", onLeave);
      box.removeEventListener("pointermove", onMove);
    };
  }, []);
  return null;
}
