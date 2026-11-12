import Link from "next/link";
import type { CSSProperties, ReactNode } from "react";
import Icon from "./Icon";
import ArticleFx from "./ArticleFx";
import { site } from "@/lib/site-config";
import { JsonLd, articleLd, breadcrumbLd, faqPageLd } from "@/lib/schema";
import type { FaqItem } from "@/lib/faqs";
import "../app/learn/article.css";

export interface ArticleRel {
  href: string;
  icon: string;
  title: string;
  sub: string;
}

const d = (n: number) => ({ "--d": n }) as CSSProperties;

/**
 * Shared learn-article shell — the approved learn-article.html skeleton:
 * reading-progress bar, article hero + cover art, share rail, prose body,
 * reviewer box, sources and related cards. Each article supplies its copy.
 */
export default function ArticlePage({
  crumbs,
  kick,
  h1,
  share,
  cover,
  children,
  sources,
  related,
  path,
  title,
  description,
  faqs,
}: {
  crumbs: string;
  kick: string;
  h1: [ReactNode, ReactNode];
  share: string;
  cover: { icon: string; bg?: string; iconColor?: string };
  children: ReactNode;
  sources: ReactNode[];
  related: ArticleRel[];
  path: string;
  title: string;
  description: string;
  faqs?: FaqItem[];
}) {
  return (
    <>
      <JsonLd
        data={[
          articleLd({ path, title, description }),
          breadcrumbLd([
            { label: "Home", path: "/" },
            { label: "Learn", path: "/learn/" },
            { label: crumbs },
          ]),
          ...(faqs?.length ? [faqPageLd(faqs)] : []),
        ]}
      />
      <div className="rp" id="rp"></div>
      <section className="ah2">
        <div className="wrap">
          <nav className="crumbs rv" aria-label="Breadcrumb">
            <Link href="/">Home</Link><i></i><Link href="/learn/">Learn</Link><i></i><span>{crumbs}</span>
          </nav>
          <div className="in3">
            <span className="kick rv" style={d(1)}>{kick}</span>
            <h1 className="h1i" style={{ marginTop: 18 }}>
              <span className="ln"><span style={d(1)}>{h1[0]}</span></span>
              <span className="ln"><span style={d(2)}><em>{h1[1]}</em></span></span>
            </h1>
            <div className="auth rv" style={d(4)}>
              <img src="/images/halo-portrait.webp" alt="" />
              <span><b>Dr. Riddhi D. Shah</b>Published and updated {site.reviewed}</span>
            </div>
          </div>
          <div className="cover rv" style={{ ...d(5), background: cover.bg }} aria-hidden="true">
            <span className="orb2" style={{ width: "60%", aspectRatio: "1" }}></span>
            <span className="orb2" style={{ width: "40%", aspectRatio: "1" }}></span>
            <span className="fl" style={{ left: "22%", top: "30%" }}></span>
            <span className="fl" style={{ right: "24%", top: "60%", animationDelay: "1.5s", background: "var(--blush)" }}></span>
            <span className="fl" style={{ left: "36%", bottom: "16%", animationDelay: "3s", width: 12, height: 12 }}></span>
            <svg className="big" viewBox="0 0 48 48" style={{ color: cover.iconColor }}><use href={`#${cover.icon}`} /></svg>
          </div>
        </div>
      </section>

      <div className="wrap art2">
        <aside className="share" aria-label="Share">
          <a href={`https://wa.me/?text=${encodeURIComponent(share)}`} aria-label="Share on WhatsApp" target="_blank" rel="noopener"><Icon name="i-wa" /></a>
          <a href="#top" aria-label="Copy link"><Icon name="i-doc" /></a>
        </aside>
        <article className="prose">
          {children}
          <div className="revbox" style={{ marginTop: 36 }}>
            <img src="/images/halo-portrait.webp" alt="" />
            <div><b>Written and reviewed by Dr. Riddhi D. Shah</b>MBBS, DNB (OBGY), FMAS, DRM · Last reviewed {site.reviewed}</div>
          </div>
          <div className="sources">
            <b>Sources</b>
            <ol>{sources.map((s, i) => <li key={i}>{s}</li>)}</ol>
          </div>
        </article>
      </div>

      <section className="sec" style={{ paddingTop: 0 }}>
        <div className="wrap">
          <div className="shead"><div><span className="kick">Keep reading</span><h2 className="h2">Related <em>care</em></h2></div></div>
          <div className="rel" data-stagger>
            {related.map((r) => (
              <Link className="sr" href={r.href} key={r.href + r.title}>
                <span className="ri"><svg viewBox="0 0 48 48"><use href={`#${r.icon}`} /></svg></span>
                <b>{r.title}</b><small>{r.sub}</small>
                <span className="more">Read <Icon name="i-arrow" width={16} height={16} /></span>
              </Link>
            ))}
          </div>
        </div>
      </section>
      <ArticleFx />
    </>
  );
}
