"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { NAV } from "@/lib/nav";
import TreatmentsDropdown from "./TreatmentsDropdown";

/** Maps the current route to a nav key for the current-page state. */
function activeKey(pathname: string | null): string | undefined {
  if (!pathname) return undefined;
  if (pathname.startsWith("/your-first-visit")) return "visit";
  if (pathname.startsWith("/treatments")) return "treat";
  if (pathname.startsWith("/keyhole-surgery")) return "surg";
  if (pathname.startsWith("/about")) return "about";
  if (pathname.startsWith("/learn")) return "learn";
  if (pathname.startsWith("/contact") || pathname.startsWith("/thank-you")) return "contact";
  return undefined;
}

export default function NavLinks({
  active,
  dropdown = false,
}: {
  active?: string;
  dropdown?: boolean;
}) {
  const pathname = usePathname();
  const current = active ?? activeKey(pathname);
  return (
    <>
      {NAV.map((n) =>
        dropdown && n.key === "treat" ? (
          <TreatmentsDropdown key={n.key} active={current === "treat"} />
        ) : n.key === current ? (
          <Link key={n.key} href={n.href} className="on" aria-current="page">
            {n.label}
          </Link>
        ) : (
          <Link key={n.key} href={n.href}>
            {n.label}
          </Link>
        ),
      )}
    </>
  );
}
