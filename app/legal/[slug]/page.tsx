import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import Icon from "@/components/Icon";
import Confirm from "@/components/Confirm";
import { LEGAL_NAV, LEGAL_PAGES } from "@/lib/legal-content";
import LegalFx from "@/components/LegalFx";
import "../legal.css";

export function generateStaticParams() {
  return LEGAL_PAGES.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const p = LEGAL_PAGES.find((x) => x.slug === slug);
  if (!p) return {};
  return { title: `${p.label} | Dr. Riddhi D. Shah`, description: p.lead };
}

export default async function LegalPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const p = LEGAL_PAGES.find((x) => x.slug === slug);
  if (!p) notFound();
  return (
    <>
      <section className="lgh">
        <div className="wrap">
          <nav className="crumbs rv" aria-label="Breadcrumb">
            <Link href="/">Home</Link><i></i><span>Legal</span><i></i><span>{p.label}</span>
          </nav>
          <div className="g">
            <div>
              <span className="kick rv" style={{ "--d": 1 } as React.CSSProperties}>Legal and trust</span>
              <h1 className="h1i" style={{ marginTop: 16 }}>
                <span className="ln"><span style={{ "--d": 1 } as React.CSSProperties}>{p.title[0]} {p.title[1]}</span></span>
              </h1>
              <p className="lead rv" style={{ "--d": 3 } as React.CSSProperties}>{p.lead}</p>
            </div>
            <div className="upd rv" style={{ "--d": 4 } as React.CSSProperties}>
              <span>Last updated</span>
              <b><Confirm label="launch date" /></b>
              <span>Reading time: {p.readTime}</span>
              <PrintBtn />
            </div>
            <LegalFx />
          </div>
          <nav className="pols rv" style={{ "--d": 5 } as React.CSSProperties} aria-label="Legal pages">
            {LEGAL_NAV.map((l) => (
              <Link className={l.slug === p.slug ? "on" : undefined} href={`/legal/${l.slug}/`} key={l.slug}>
                {l.label}
              </Link>
            ))}
          </nav>
        </div>
      </section>
      <div className="wrap lgw">
        <aside>
          <nav className="toc">
            {p.toc.map((s) => (
              <a href={`#${s.id}`} key={s.id}>{s.title}</a>
            ))}
          </nav>
        </aside>
        <article className="prose">{p.body}</article>
      </div>
    </>
  );
}

function PrintBtn() {
  return (
    <button type="button" id="printbtn">
      <Icon name="i-doc" width={16} height={16} />
      Print or save as PDF
    </button>
  );
}
