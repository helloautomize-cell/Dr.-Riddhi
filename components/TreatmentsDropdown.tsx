"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { GROUPS, TREATMENTS } from "@/lib/treatments";

const COLS: [string, string[]][] = [
  ["periods", ["periods", "lumps"]],
  ["preg", ["preg", "screen"]],
  ["later", ["later", "surg"]],
];

/**
 * Treatments mega menu for the desktop nav (site-plan: 13 pages, grouped).
 * Flat design language, no glass. Hover intent 120ms, focus-within opens,
 * Esc closes and returns focus, chevron toggles for click users.
 */
export default function TreatmentsDropdown({ active }: { active?: boolean }) {
  const [open, setOpen] = useState(false);
  const wrap = useRef<HTMLDivElement>(null);
  const timer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const link = useRef<HTMLAnchorElement>(null);
  const pathname = usePathname();

  useEffect(() => setOpen(false), [pathname]);

  useEffect(() => {
    const onDoc = (e: MouseEvent) => {
      if (wrap.current && !wrap.current.contains(e.target as Node))
        setOpen(false);
    };
    document.addEventListener("mousedown", onDoc);
    return () => document.removeEventListener("mousedown", onDoc);
  }, []);

  const soon = (fn: () => void, ms: number) => {
    if (timer.current) clearTimeout(timer.current);
    timer.current = setTimeout(fn, ms);
  };

  return (
    <div
      className={`dd${open ? " on" : ""}`}
      ref={wrap}
      onMouseEnter={() => soon(() => setOpen(true), 120)}
      onMouseLeave={() => soon(() => setOpen(false), 120)}
      onKeyDown={(e) => {
        if (e.key === "Escape" && open) {
          setOpen(false);
          link.current?.focus();
        }
      }}
    >
      <Link
        href="/treatments/"
        ref={link}
        className={active ? "on" : undefined}
        aria-current={active ? "page" : undefined}
        aria-expanded={open}
        aria-haspopup="true"
      >
        Treatments
      </Link>
      <button
        className="dd-btn"
        aria-label="Show treatments menu"
        aria-expanded={open}
        onClick={() => setOpen((o) => !o)}
      >
        <svg className="ico" style={{ width: 14, height: 14 }} aria-hidden="true">
          <use href="#i-chev" />
        </svg>
      </button>
      <div className="dd-panel" role="group" aria-label="All treatments">
        <div>
          <div className="dd-grid">
            {COLS.map(([key, groups]) => (
              <div className="dd-col" key={key}>
                {groups.map((g) => (
                  <div key={g}>
                    <div className="dd-h">{GROUPS[g as keyof typeof GROUPS]}</div>
                    {TREATMENTS.filter((t) => t.group === g).map((t) => (
                      <Link key={t.slug} href={t.href}>
                        <svg aria-hidden="true">
                          <use href={`#${t.icon}`} />
                        </svg>
                        {t.name}
                      </Link>
                    ))}
                  </div>
                ))}
              </div>
            ))}
          </div>
          <Link className="dd-all" href="/treatments/">
            All 13 areas of care
            <svg className="ico" style={{ width: 16, height: 16 }} aria-hidden="true">
              <use href="#i-arrow" />
            </svg>
          </Link>
        </div>
      </div>
    </div>
  );
}
