import type { Metadata } from "next";
import Link from "next/link";
import NotFoundArt from "@/components/NotFoundArt";
import { BOOK_HREF } from "@/lib/nav";

export const metadata: Metadata = {
  title: "Page not found",
  description: "This page could not be found.",
  robots: { index: false, follow: false },
};

const LINKS = [
  { href: "/treatments/", icon: "c-cycle", label: "All treatments" },
  { href: "/treatments/pcos/", icon: "c-ovary", label: "PCOS" },
  { href: "/keyhole-surgery/", icon: "c-lap", label: "Keyhole surgery" },
  { href: BOOK_HREF, icon: "c-ask", label: "Book a visit" },
];

export default function NotFound() {
  return (
    <>
      <span data-no-final hidden />
      <section className="nf">
        <div className="wrap g">
          <NotFoundArt />
          <div>
            <span className="kick rv" style={{ ["--d" as string]: 1 }}>
              Page not found
            </span>
            <h1
              className="h1i"
              style={{
                marginTop: 18,
                fontSize: "clamp(42px,5vw,72px)",
              }}
            >
              <span className="ln">
                <span style={{ ["--d" as string]: 1 }}>This page has</span>
              </span>
              <span className="ln">
                <span style={{ ["--d" as string]: 2 }}>
                  <em>moved or gone</em>
                </span>
              </span>
            </h1>
            <p className="lead rv" style={{ ["--d" as string]: 4 }}>
              The link may be old. These pages are the most visited.
            </p>
            <div className="qlinks rv" style={{ ["--d" as string]: 5 }}>
              {LINKS.map((l) => (
                <Link key={l.href} href={l.href}>
                  <svg viewBox="0 0 48 48" aria-hidden="true">
                    <use href={`#${l.icon}`} />
                  </svg>
                  {l.label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
