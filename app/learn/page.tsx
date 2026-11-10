import type { Metadata } from "next";
import Link from "next/link";
import Icon from "@/components/Icon";
import Confirm from "@/components/Confirm";
import LearnFx from "@/components/LearnFx";
import { site } from "@/lib/site-config";
import "./learn.css";

export const metadata: Metadata = {
  title: "Videos and articles on women's health | Dr. Riddhi D. Shah",
  description:
    "Short videos and plain-language articles by Dr. Riddhi D. Shah on periods, PCOS, pregnancy plans, screening, menopause and surgery.",
};

const d = (n: number) => ({ "--d": n }) as React.CSSProperties;

const REELS = [
  { img: "explain", pos: undefined, ic: "i-play", cat: "Fibroids", t: "Do all fibroids need surgery?" },
  { img: "consult", pos: "30% 50%", ic: "i-play", cat: "PCOS", t: "Three PCOS myths" },
  { col: "var(--pink)", big: "HPV", ic: "i-play", cat: "Screening", t: "Who should get the vaccine?", smallColor: "#fff" },
  { img: "profile", pos: undefined, ic: "i-play", cat: "Periods", t: "When is a late period a worry?" },
  { img: "about-walk", pos: "40% 50%", ic: "i-ig", cat: "Screening", t: "What a Pap smear feels like" },
  { col: "var(--halo)", colColor: "var(--brown)", big: "45+", ic: "i-play", cat: "Menopause", t: "Hot flushes: what helps" },
  { img: "surgery", pos: undefined, ic: "i-play", cat: "Surgery", t: "Keyhole surgery in 60 seconds" },
] as const;

const ARTICLES = [
  { big: true, c: "PCOS", bg: "var(--brown)", col: "var(--blush)", ic: "c-ovary", t: "Five PCOS myths, and what is actually true", p: "No, PCOS does not always mean you cannot get pregnant. Here is what the condition really is, in plain words.", meta: "Dr. Riddhi D. Shah · 6 min read", href: "/learn/pcos-myths/" },
  { c: "Periods", bg: "var(--pink)", col: "#fff", ic: "c-drop", t: "How heavy is too heavy?", p: "Simple signs that your period needs a check.", meta: "4 min read", href: "/learn/heavy-periods/" },
  { c: "Screening", bg: "var(--halo)", col: "var(--brown)", ic: "c-shield", t: "Your first Pap smear, step by step", p: "What happens, how long it takes, and how to prepare.", meta: "5 min read", href: "/learn/first-pap-smear/" },
  { c: "Pregnancy plans", bg: "var(--sand)", col: "var(--pink)", ic: "c-egg", t: "Planning a baby? Start three months early", p: "The checks, vaccines and vitamins to sort out first.", meta: "5 min read", href: "/learn/planning-a-baby/" },
  { c: "Surgery", bg: "var(--brown-deep)", col: "var(--blush)", ic: "c-lap", t: "Recovering after keyhole surgery", p: "What the first two weeks usually look like.", meta: "6 min read", href: "/learn/keyhole-recovery/" },
] as const;

const CATS = ["all", "PCOS", "Periods", "Pregnancy plans", "Screening", "Surgery"] as const;

export default function LearnPage() {
  return (
    <>
      <section className="lh">
        <div className="wrap">
          <nav className="crumbs rv" aria-label="Breadcrumb">
            <Link href="/">Home</Link><i></i><span>Videos and articles</span>
          </nav>
          <div className="g">
            <div>
              <span className="kick rv" style={d(1)}>Learn</span>
              <h1 className="h1i" style={{ marginTop: 20 }}>
                <span className="ln"><span style={d(1)}>Plain answers,</span></span>
                <span className="ln"><span style={d(2)}><em>no jargon</em></span></span>
              </h1>
              <p className="lead rv" style={d(4)}>
                Dr. Riddhi explains one question at a time, in short videos and simple articles. Use
                them to understand your body and prepare for your visit. They do not replace a
                consultation.
              </p>
              <div className="follow rv" style={d(5)}>
                <a className="btn b-brown" href={site.socials.youtube} target="_blank" rel="noopener"><Icon name="i-yt" />YouTube</a>
                <a className="btn b-line" href={site.socials.instagram} target="_blank" rel="noopener"><Icon name="i-ig" />Instagram</a>
              </div>
            </div>
            <a className="feat rv" style={d(3)} href={site.socials.youtube} target="_blank" rel="noopener">
              <img src="/images/videos-wide.webp" alt="Dr. Riddhi explaining a topic to camera" />
              <span className="len">Latest video <Confirm /></span>
              <span className="pl"><span className="c"><Icon name="i-play" width={28} height={28} /></span><span><small>Watch</small><b>Is my period normal?</b></span></span>
            </a>
          </div>
        </div>
      </section>

      <section className="sec reels">
        <div className="wrap rhead">
          <div><span className="kick" style={{ color: "var(--blush)" }}>Short videos</span><h2 className="h2">One minute, <em>one answer</em></h2></div>
          <div className="arrows">
            <button id="rl" aria-label="Previous"><Icon name="i-arrow" style={{ transform: "scaleX(-1)" }} /></button>
            <button id="rr" aria-label="Next"><Icon name="i-arrow" /></button>
          </div>
        </div>
        <div className="rail" id="rail">
          {REELS.map((r, i) =>
            "col" in r && r.col ? (
              <a className="reel col" href={site.socials.instagram} target="_blank" rel="noopener" key={i} style={{ background: r.col, color: (r as { colColor?: string }).colColor }}>
                <span className="ic"><Icon name={r.ic} /></span>
                <span className="big">{r.big}</span>
                <span className="tx" style={{ position: "static", background: "none", padding: 0, color: (r as { colColor?: string }).colColor }}>
                  <small style={(r as { smallColor?: string }).smallColor ? { color: (r as { smallColor?: string }).smallColor } : undefined}>{r.cat}</small>
                  <b>{r.t}</b>
                </span>
              </a>
            ) : (
              <a className="reel" href={site.socials.instagram} target="_blank" rel="noopener" key={i}>
                <img src={`/images/${(r as { img?: string }).img}.webp`} alt="" style={(r as { pos?: string }).pos ? { objectPosition: (r as { pos?: string }).pos } : undefined} />
                <span className="ic"><Icon name={r.ic} /></span>
                <span className="tx"><small>{r.cat}</small><b>{r.t}</b></span>
              </a>
            )
          )}
        </div>
        <div className="wrap"><p style={{ fontSize: 13, color: "rgba(251,247,243,.55)", marginTop: 10 }}>Titles are samples. <Confirm label="confirm the 6 to 8 videos to feature" /></p></div>
      </section>

      <section className="sec arts">
        <div className="wrap">
          <div className="bar2">
            <div><span className="kick">Articles</span><h2 className="h2">Read at your <em>own pace</em></h2></div>
            <div className="chips" id="cats" role="group" aria-label="Filter articles">
              {CATS.map((c, i) => (
                <button className="chip-s" aria-pressed={i === 0} data-c={c} key={c}>{c === "all" ? "All" : c}</button>
              ))}
            </div>
          </div>
          <div className="agrid" id="agrid">
            {ARTICLES.map((a) => (
              <Link className={`ac sr${"big" in a && a.big ? " big" : ""}`} data-c={a.c} href={a.href} key={a.t}>
                <span className="cv" style={{ background: a.bg, color: a.col }}>
                  <span className="cat">{a.c}</span>
                  <svg viewBox="0 0 48 48"><use href={`#${a.ic}`} /></svg>
                </span>
                <span className="bd">
                  <h3>{a.t}</h3>
                  <p>{a.p}</p>
                  <span className="meta"><img src="/images/halo-portrait.webp" alt="" />{"big" in a && a.big ? <>{a.meta} · <Confirm label="date" /></> : a.meta}</span>
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>
      <LearnFx />
    </>
  );
}
