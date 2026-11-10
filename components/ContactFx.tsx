"use client";
import { useEffect } from "react";
import { useRouter } from "next/navigation";

/** Contact page — weekday day-picks + form validation → /thank-you/ (verbatim port). */
export default function ContactFx() {
  const router = useRouter();
  useEffect(() => {
    const $ = <T extends Element = HTMLElement>(s: string) => document.querySelector(s) as T | null;

    /* next 8 weekdays as day picks */
    const now = new Date(new Date().toLocaleString("en-US", { timeZone: "Asia/Kolkata" }));
    const out: Date[] = [];
    const dt = new Date(now);
    while (out.length < 8) {
      const w = dt.getDay();
      if (w >= 1 && w <= 5) out.push(new Date(dt));
      dt.setDate(dt.getDate() + 1);
    }
    const W = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    const M = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    const days = $("#days");
    if (days) {
      days.innerHTML = out
        .map(
          (x, i) =>
            `<label><input type="radio" name="day" value="${x.toDateString()}" ${i === 0 ? "checked" : ""}><span style="flex-direction:column;padding:8px 14px">${
              i === 0 && x.getDate() === now.getDate() ? "Today" : W[x.getDay()]
            }<small>${x.getDate()} ${M[x.getMonth()]}</small></span></label>`
        )
        .join("");
    }

    /* simple validation, then go to thank-you */
    const bf = $("#bf") as HTMLFormElement | null;
    if (!bf) return;
    const onSubmit = (e: Event) => {
      e.preventDefault();
      let ok = true;
      ["#fn", "#fp"].forEach((sel) => {
        const i = $(sel) as HTMLInputElement | null;
        if (!i) return;
        const bad = !i.value.trim();
        i.style.boxShadow = bad ? "inset 0 0 0 2px #C8452F" : "";
        if (bad) ok = false;
      });
      const c = bf.querySelector(".consent input") as HTMLInputElement | null;
      if (c) {
        c.style.boxShadow = c.checked ? "" : "inset 0 0 0 2px #C8452F";
        if (!c.checked) ok = false;
      }
      if (ok) router.push("/thank-you/");
    };
    bf.addEventListener("submit", onSubmit);
    return () => bf.removeEventListener("submit", onSubmit);
  }, [router]);
  return null;
}
