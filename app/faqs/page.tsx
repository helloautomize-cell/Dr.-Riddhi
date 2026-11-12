import type { Metadata } from "next";
import { pageMeta } from "@/lib/meta";
import { JsonLd, faqPageLd, breadcrumbLd } from "@/lib/schema";
import Link from "next/link";
import Icon from "@/components/Icon";
import { site } from "@/lib/site-config";
import FaqsFx from "@/components/FaqsFx";
import { FAQS, FAQ_TOTAL } from "@/lib/faqs";
import "./faqs.css";

export const metadata: Metadata = pageMeta({
  path: "/faqs/",
  title: "Questions about your gynaecology visit | Dr. Riddhi D. Shah",
  description:
    "Answers to common questions about visits, periods, PCOS, pregnancy plans, screening and keyhole surgery with Dr. Riddhi D. Shah in Borivali West.",
});

export default function FaqsPage() {
  return (
    <>
      <JsonLd
        data={[
          faqPageLd(FAQS.flatMap((g) => g.items)),
          breadcrumbLd([{ label: "Home", path: "/" }, { label: "Questions" }]),
        ]}
      />
      <section className="qh">
        <div className="wrap">
          <nav className="crumbs rv" aria-label="Breadcrumb">
            <Link href="/">Home</Link><i></i><span>Questions</span>
          </nav>
          <span className="kick rv" style={{ "--d": 1, marginTop: 30, display: "flex" } as React.CSSProperties}>Common questions</span>
          <h1 className="h1i">
            <span className="ln"><span style={{ "--d": 1 } as React.CSSProperties}>Ask <em>anything</em></span></span>
          </h1>
          <p className="lead rv" style={{ "--d": 3, marginInline: "auto" } as React.CSSProperties}>
            General answers to help you prepare. For advice about you, book a visit.
          </p>
          <label className="bigs rv" style={{ "--d": 4, display: "block" } as React.CSSProperties}>
            <Icon name="i-search" />
            <input id="fq" type="search" placeholder="Type a word, e.g. Pap smear" aria-label="Search questions" />
          </label>
          <div className="qs rv" style={{ "--d": 5 } as React.CSSProperties}>
            <span style={{ fontSize: 14, color: "var(--ink-2)", padding: "10px 0" }}>Try:</span>
            <button>periods</button><button>pregnant</button><button>surgery</button><button>fee</button>
          </div>
        </div>
      </section>
      <div className="wrap fg">
        <div className="tabs2" id="tabs">
          <button aria-pressed="true" data-g="all">All questions <span>{FAQ_TOTAL}</span></button>
          {FAQS.map((g) => (
            <button aria-pressed="false" data-g={g.key} key={g.key}>{g.label} <span>{g.items.length}</span></button>
          ))}
        </div>
        <div>
          <div id="faqs">
            {FAQS.map((g) => (
              <div className="grp2 sr" data-g={g.key} key={g.key}>
                <h2>
                  <span className="ri"><svg viewBox="0 0 48 48"><use href={`#${g.icon}`} /></svg></span>
                  {g.label}
                </h2>
                <div className="qa">
                  {g.items.map((it) => (
                    <details key={it.q}>
                      <summary data-q={it.q}>
                        <span className="qt">{it.q}</span>
                        <i><Icon name="i-plus" width={18} height={18} /></i>
                      </summary>
                      <p data-a={it.a}>{it.a}</p>
                    </details>
                  ))}
                </div>
              </div>
            ))}
          </div>
          <p className="none" id="none" hidden>
            No answer matches that yet. <Link href="/contact/#book" style={{ color: "var(--pink)" }}>Ask the clinic</Link> and they will help.
          </p>
          <div className="still sr">
            <b>Still have a question?</b>
            <Link className="btn b-cream" href="/contact/#book">Ask the clinic</Link>
          </div>
          <div className="revbox" style={{ marginTop: 14 }}>
            <img src="/images/halo-portrait-192.webp" alt="" />
            <div><b>Medically reviewed by Dr. Riddhi D. Shah</b>Last reviewed {site.reviewed}</div>
          </div>
        </div>
      </div>
      <FaqsFx />
    </>
  );
}
