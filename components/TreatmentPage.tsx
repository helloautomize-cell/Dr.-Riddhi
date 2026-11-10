import Link from "next/link";
import type { ReactNode } from "react";
import Icon from "./Icon";
import { BOOK_HREF } from "@/lib/nav";
import { site } from "@/lib/site-config";

export interface StripItem {
  icon: string;
  small: string;
  big: ReactNode;
}

export interface TocItem {
  id: string;
  label: string;
}

export interface RelItem {
  href: string;
  icon: string;
  title: string;
  sub: string;
}

/**
 * Shared treatment detail template — the approved treatment-pcos.html
 * skeleton. Each page supplies hero copy, badge art, fact strip, TOC,
 * the prose article body and related links.
 */
export default function TreatmentPage({
  groupLabel,
  name,
  h1,
  lead,
  ctaLabel,
  byline,
  art,
  strip,
  toc,
  children,
  related,
}: {
  groupLabel: string;
  name: string;
  h1: [ReactNode, ReactNode];
  lead: ReactNode;
  ctaLabel: string;
  byline: ReactNode;
  art: ReactNode;
  strip: StripItem[];
  toc: TocItem[];
  children: ReactNode;
  related: RelItem[];
}) {
  return (
    <>
      <section className="sh">
        <div className="wrap">
          <nav className="crumbs rv" aria-label="Breadcrumb">
            <Link href="/">Home</Link>
            <i></i>
            <Link href="/treatments/">Treatments</Link>
            <i></i>
            <span>{name}</span>
          </nav>
          <div className="g">
            <div>
              <span className="kick rv" style={{ "--d": 1 } as React.CSSProperties}>
                {groupLabel}
              </span>
              <h1 className="h1i" style={{ marginTop: 20 }}>
                <span className="ln">
                  <span style={{ "--d": 1 } as React.CSSProperties}>{h1[0]}</span>
                </span>
                <span className="ln">
                  <span style={{ "--d": 2 } as React.CSSProperties}>{h1[1]}</span>
                </span>
              </h1>
              <p className="lead rv" style={{ "--d": 4 } as React.CSSProperties}>
                {lead}
              </p>
              <div className="cta rv" style={{ "--d": 5 } as React.CSSProperties}>
                <Link className="btn b-pink" href={BOOK_HREF}>
                  {ctaLabel}{" "}
                  <span className="ar">
                    <Icon name="i-arrow" width={16} height={16} />
                  </span>
                </Link>
                <a className="btn b-line" href={site.phones[0].href}>
                  <Icon name="i-phone" />
                  Call
                </a>
              </div>
              <div className="byline rv" style={{ "--d": 6 } as React.CSSProperties}>
                <img src="/images/halo-portrait.webp" alt="" />
                <span>{byline}</span>
              </div>
            </div>
            <div className="art rv" style={{ "--d": 3 } as React.CSSProperties} aria-hidden="true">
              {art}
            </div>
          </div>
        </div>
      </section>

      <div className="wrap">
        <div className="strip sr">
          {strip.map((s, i) => (
            <div key={i}>
              <span className="si">
                <Icon name={s.icon} />
              </span>
              <div>
                <small>{s.small}</small>
                <b>{s.big}</b>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="wrap bodyg">
        <aside className="side">
          <div className="in2">
            <span className="lbl">On this page</span>
            <nav className="toc" style={{ position: "static", marginTop: 12 }}>
              {toc.map((t) => (
                <a key={t.id} href={`#${t.id}`}>
                  {t.label}
                </a>
              ))}
            </nav>
            <div className="bookc">
              <span className="live">
                <span className="dot js-dot"></span>
                <span className="js-live">Opens today at 10 am</span>
              </span>
              <b>Book a visit</b>
              <p>{site.opd.label}</p>
              <Link className="btn b-pink" href={BOOK_HREF}>
                Book now
              </Link>
            </div>
          </div>
        </aside>

        <article className="prose">{children}</article>
      </div>

      <section className="sec" style={{ paddingTop: 0 }}>
        <div className="wrap">
          <div className="shead">
            <div>
              <span className="kick">Related</span>
              <h2 className="h2">
                You may also <em>read</em>
              </h2>
            </div>
          </div>
          <div className="rel" data-stagger>
            {related.map((r) => (
              <Link className="sr" href={r.href} key={r.href + r.title}>
                <span className="ri">
                  <svg viewBox="0 0 48 48">
                    <use href={`#${r.icon}`} />
                  </svg>
                </span>
                <b>{r.title}</b>
                <small>{r.sub}</small>
                <span className="more">
                  Read <Icon name="i-arrow" width={16} height={16} />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
