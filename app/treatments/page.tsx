import type { Metadata } from "next";
import Link from "next/link";
import Icon from "@/components/Icon";
import TreatmentsFx from "@/components/TreatmentsFx";
import { GROUPS, GROUP_ORDER, treatmentsIn } from "@/lib/treatments";
import "./treatments.css";

export const metadata: Metadata = {
  title: "What she treats | Dr. Riddhi D. Shah, Borivali West",
  description:
    "The 13 areas of women's health Dr. Riddhi D. Shah treats in Borivali West: periods, PCOS, fibroids, pregnancy plans, screening, menopause and keyhole surgery.",
};

export default function TreatmentsHub() {
  let n = 0;
  return (
    <>
      <section className="th">
        <div className="wrap">
          <nav className="crumbs rv" aria-label="Breadcrumb">
            <Link href="/">Home</Link>
            <i></i>
            <span>Treatments</span>
          </nav>
          <div className="g">
            <div>
              <span className="kick rv" style={{ "--d": 1 } as React.CSSProperties}>What she treats</span>
              <h1 className="h1i" style={{ marginTop: 20 }}>
                <span className="ln"><span style={{ "--d": 1 } as React.CSSProperties}>Care for every</span></span>
                <span className="ln"><span style={{ "--d": 2 } as React.CSSProperties}><em>stage of life</em></span></span>
              </h1>
              <p className="lead rv" style={{ "--d": 4 } as React.CSSProperties}>
                Dr. Riddhi decides the right tests and treatment for you after she examines you. Find your
                concern below, or tell the clinic what is bothering you and you will be booked with the
                right time for it.
              </p>
            </div>
            <div className="count rv" style={{ "--d": 5 } as React.CSSProperties}>
              <b id="cnt">13</b>
              <span>areas of care, from first periods to menopause</span>
            </div>
          </div>
        </div>
      </section>

      <div className="tools">
        <div className="wrap">
          <label className="srch">
            <Icon name="i-search" />
            <input id="q" type="search" placeholder="Search, e.g. cyst, bleeding" aria-label="Search treatments" />
          </label>
          <div className="chips" id="filt" role="group" aria-label="Filter by group">
            <button className="chip-s" aria-pressed="true" data-g="all">All</button>
            {GROUP_ORDER.map((g) => (
              <button className="chip-s" aria-pressed="false" data-g={g} key={g}>
                {g === "screen" ? "Screening and everyday" : g === "later" ? "Menopause" : GROUPS[g]}
              </button>
            ))}
          </div>
        </div>
      </div>

      <section className="sec" style={{ paddingTop: 10 }}>
        <div className="wrap" id="ixw">
          {GROUP_ORDER.map((g) => (
            <div key={g}>
              <div className="ghead" data-gh={g}>{GROUPS[g]}</div>
              <ul className="ix">
                {treatmentsIn(g).map((t) => {
                  n++;
                  return (
                    <li className="sr" data-g={g} data-k={(t.name + " " + t.desc).toLowerCase()} key={t.slug}>
                      <Link href={t.href} data-ic={t.icon}>
                        <span className="no">{String(n).padStart(2, "0")}</span>
                        <span className="mi">
                          <svg viewBox="0 0 48 48"><use href={`#${t.icon}`} /></svg>
                        </span>
                        <span className="nm">{t.name}</span>
                        <span className="ds">{t.desc}</span>
                        <span className="gp">{GROUPS[g]}</span>
                        <span className="go"><Icon name="i-arrow" /></span>
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </div>
          ))}
        </div>
        <div className="wrap">
          <p className="empty" id="empty" hidden>
            Nothing matches that. Try another word, or{" "}
            <Link href="/contact/#book" style={{ color: "var(--pink)" }}>ask the clinic</Link>.
          </p>
        </div>
      </section>
      <div className="fp" id="fp" aria-hidden="true">
        <svg viewBox="0 0 48 48"><use id="fpu" href="#c-cycle" /></svg>
      </div>

      <section className="sec find">
        <div className="wrap g">
          <div>
            <span className="kick" style={{ color: "var(--blush)" }}>Not sure where you fit?</span>
            <h2 className="h2">Start with what you <em>feel</em></h2>
            <p className="sub">Tap what is closest to your concern. This points you to a page to read. It is not a diagnosis.</p>
            <p className="note">If you have heavy bleeding with dizziness, severe pain, or fainting, call 108 or 112 now.</p>
          </div>
          <div>
            <div className="sym" id="sym"></div>
            <div className="ans" id="ans" aria-live="polite"></div>
          </div>
        </div>
      </section>
      <TreatmentsFx />
    </>
  );
}
