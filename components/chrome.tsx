import Link from "next/link";
import Image from "next/image";
import { site } from "@/lib/site-config";
import { NAV, BOOK_HREF } from "@/lib/nav";
import { TREATMENTS } from "@/lib/treatments";
import { waLink } from "@/lib/whatsapp";
import Icon from "./Icon";
import NavLinks from "./NavLinks";
import CookieSettingsLink from "./CookieSettingsLink";

export function Logo() {
  return (
    <span className="lg">
      <Image src="/images/logo-mglgc.png" alt="" width={80} height={80} />
    </span>
  );
}

export function BookButton({ href = BOOK_HREF }: { href?: string }) {
  return (
    <Link className="btn b-pink" href={href}>
      Book a consultation
    </Link>
  );
}


/** Utility bar + main header. `dark` renders the .top.dk variant used on dark heroes. */
export function Top({ active, dark = false }: { active?: string; dark?: boolean }) {
  return (
    <div className={`top${dark ? " dk" : ""}`}>
      <div className="util">
        <div className="wrap">
          <span className="hrs">
            <Icon id="i-clock" />
            {site.opd.label}
          </span>
          <span className="hs">
            <Icon id="i-phone" />
            {site.phones[0].label}
          </span>
          <span className="em">{site.emergency}</span>
          <span className="soc hs">
            <a href={site.socials.instagram} target="_blank" rel="noopener" aria-label="Instagram">
              <Icon id="i-ig" />
            </a>
            <a href={site.socials.youtube} target="_blank" rel="noopener" aria-label="YouTube">
              <Icon id="i-yt" />
            </a>
          </span>
        </div>
      </div>
      <div className="wrap">
        <div className="hdr">
          <Link className="brand" href="/">
            <Logo />
            <span>
              <b>{site.doctor}</b>
              <small>{site.tagline}</small>
            </span>
          </Link>
          <nav className="nav" aria-label="Main">
            <NavLinks active={active} dropdown />
          </nav>
          <BookButton />
          <button className="menu-btn" id="menuBtn" aria-label="Open menu">
            <Icon id="i-menu" />
          </button>
        </div>
      </div>
    </div>
  );
}

/** Sticky mini header, appears after scrolling 420px (driven by Effects). */
export function MiniHeader({ active }: { active?: string }) {
  return (
    <div className="mini" id="mini">
      <div className="wrap">
        <div className="bar">
          <Link className="brand" href="/">
            <Logo />
            <span>
              <b>{site.doctor}</b>
            </span>
          </Link>
          <nav className="nav" aria-label="Mini">
            <NavLinks active={active} dropdown />
          </nav>
          <BookButton />
          <button className="menu-btn" aria-label="Open menu">
            <Icon id="i-menu" />
          </button>
        </div>
      </div>
    </div>
  );
}

/** Full-screen mobile menu sheet. */
export function MenuSheet({ active }: { active?: string }) {
  return (
    <div className="sheet" id="sheet" hidden>
      <button className="x" id="sheetX" aria-label="Close menu">
        ✕
      </button>
      <nav aria-label="Menu">
        <Link href="/">Home</Link>
        {NAV.map((n) =>
          n.key === "treat" ? (
            <details key={n.key} className="sheet-sub">
              <summary className={active === "treat" ? "on" : undefined}>
                Treatments
                <svg className="ico" aria-hidden="true">
                  <use href="#i-chev" />
                </svg>
              </summary>
              <div>
                <Link href="/treatments/">All treatments</Link>
                {TREATMENTS.map((t) => (
                  <Link key={t.slug} href={t.href}>
                    {t.name}
                  </Link>
                ))}
              </div>
            </details>
          ) : (
            <Link
              key={n.key}
              href={n.href}
              className={active === n.key ? "on" : undefined}
              aria-current={active === n.key ? "page" : undefined}
            >
              {n.label}
            </Link>
          ),
        )}
        <Link href="/faqs/">Questions</Link>
      </nav>
    </div>
  );
}

/** Final CTA band shown above the footer on most pages. */
export function FinalCTA() {
  return (
    <section className="final">
      <div className="final-grid">
        <div className="final-img">
          <Image src="/images/cta-bg.webp" alt="" fill sizes="(max-width: 900px) 100vw, 50vw" unoptimized />
        </div>
        <div className="final-tx">
          <span className="kick" style={{ color: "var(--blush)" }}>
            Book your visit
          </span>
          <h2 style={{ marginTop: 18 }}>
            Your questions, <em>answered calmly.</em>
          </h2>
          <p>{site.opd.labelShort} · {site.area}</p>
          <div className="cta">
            <Link className="btn b-pink" href={BOOK_HREF}>
              Book a consultation
              <span className="ar">
                <Icon id="i-arrow" style={{ width: 16, height: 16 }} />
              </span>
            </Link>
            <a className="btn b-ghost" href={waLink()} target="_blank" rel="noopener">
              <Icon id="i-wa" />
              WhatsApp
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export function Footer() {
  return (
    <footer>
      <div className="wrap">
        <div className="fgrid">
          <div className="fbrand">
            <b>{site.doctor}</b>
            <p>
              {site.role}. {site.clinic}, {site.addressShort}
            </p>
            <div className="fsoc">
              <a href={site.socials.instagram} target="_blank" rel="noopener">
                <Icon id="i-ig" style={{ width: 16, height: 16 }} />
                Instagram
              </a>
              <a href={site.socials.youtube} target="_blank" rel="noopener">
                <Icon id="i-yt" style={{ width: 16, height: 16 }} />
                YouTube
              </a>
            </div>
          </div>
          <div>
            <h4>Treatments</h4>
            <ul>
              <li><Link href="/treatments/pcos/">PCOS</Link></li>
              <li><Link href="/treatments/period-problems/">Period problems</Link></li>
              <li><Link href="/treatments/fibroids/">Fibroids and cysts</Link></li>
              <li><Link href="/treatments/planning-a-pregnancy/">Pregnancy plans</Link></li>
              <li><Link href="/treatments/menopause/">Menopause</Link></li>
              <li><Link href="/keyhole-surgery/">Keyhole surgery</Link></li>
            </ul>
          </div>
          <div>
            <h4>Patients</h4>
            <ul>
              <li><Link href="/your-first-visit/">Your first visit</Link></li>
              <li><Link href={BOOK_HREF}>Book a consultation</Link></li>
              <li><Link href="/learn/">Videos and articles</Link></li>
              <li><Link href="/faqs/">Questions</Link></li>
              <li><Link href="/about/">About Dr. Riddhi</Link></li>
              <li><Link href="/styleguide/">Style guide</Link></li>
            </ul>
          </div>
          <div>
            <h4>Legal</h4>
            <ul>
              <li><Link href="/legal/privacy-policy/">Privacy policy</Link></li>
              <li><Link href="/legal/terms-of-use/">Terms of use</Link></li>
              <li><Link href="/legal/medical-disclaimer/">Medical disclaimer</Link></li>
              <li><Link href="/legal/editorial-policy/">Editorial policy</Link></li>
              <li><Link href="/legal/patient-rights/">Patient rights</Link></li>
              <li><Link href="/legal/cancellation-refund/">Cancellation and refund</Link></li>
              <li><Link href="/legal/accessibility/">Accessibility</Link></li>
              <li><CookieSettingsLink /></li>
            </ul>
          </div>
        </div>
        <div className="wordmark" aria-hidden="true">
          Riddhi D. Shah
        </div>
        <div className="fine2">
          <span>
            © 2026 {site.doctor} · {site.footerFine}
          </span>
          <span style={{ color: "var(--blush)" }}>Emergency: call 108 or 112</span>
        </div>
      </div>
    </footer>
  );
}

/** Fixed mobile action bar: Book, Call, WhatsApp. */
export function MobileBar({ waTitle }: { waTitle?: string }) {
  return (
    <nav className="mbar" aria-label="Quick actions">
      <a className="p" href={BOOK_HREF}>
        <Icon id="i-cal" />
        Book
      </a>
      <a href={site.phones[0].href}>
        <Icon id="i-phone" />
        Call
      </a>
      <a href={waLink(waTitle)} target="_blank" rel="noopener">
        <Icon id="i-wa" />
        WhatsApp
      </a>
    </nav>
  );
}

/** Yellow "design preview" badge; hidden once the site is marked indexable. */
export function PreviewBadge() {
  if (process.env.SITE_INDEXABLE === "1") return null;
  return <span className="badge-pv">Design preview · AI images pending her approval</span>;
}

/** Breadcrumb trail. Last item is the current page (plain text). */
export function Crumbs({
  items,
  light = false,
}: {
  items: { label: string; href?: string }[];
  light?: boolean;
}) {
  const ld = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((c, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: c.label,
      ...(c.href ? { item: c.href } : {}),
    })),
  };
  return (
    <>
      <nav className={`crumbs${light ? " lt" : ""}`} aria-label="Breadcrumb">
        {items.flatMap((c, i) => [
          ...(i > 0 ? [<i key={`d${i}`} />] : []),
          c.href ? (
            <Link key={i} href={c.href}>
              {c.label}
            </Link>
          ) : (
            <span key={i}>{c.label}</span>
          ),
        ])}
      </nav>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(ld) }}
      />
    </>
  );
}
