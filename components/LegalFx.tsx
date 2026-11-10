"use client";
import { useEffect } from "react";

/** Legal pages — print button. */
export default function LegalFx() {
  useEffect(() => {
    const b = document.getElementById("printbtn") as HTMLButtonElement | null;
    if (!b) return;
    const p = () => window.print();
    b.addEventListener("click", p);
    return () => b.removeEventListener("click", p);
  }, []);
  return null;
}
