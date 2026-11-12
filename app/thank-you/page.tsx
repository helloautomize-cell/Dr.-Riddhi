import type { Metadata } from "next";
import { pageMeta } from "@/lib/meta";
import Link from "next/link";
import "./thank-you.css";

export const metadata: Metadata = pageMeta({
  path: "/thank-you/",
  title: "Request received | Dr. Riddhi D. Shah",
  description: "Your booking request has been received.",
  noindex: true,
});

const NEXT = [
  { n: "01", b: "We call you", p: "Usually within working hours, Monday to Friday." },
  { n: "02", b: "Pack your bag", p: "Old reports, medicines and your last period date." },
  { n: "03", b: "Come 10 minutes early", p: "So registration does not eat into your time." },
];

export default function ThankYouPage() {
  return (
    <section className="ty">
      <div className="wrap">
        <div className="tick rv" aria-hidden="true">
          <svg viewBox="0 0 150 150" fill="none" strokeLinecap="round" strokeLinejoin="round">
            <circle className="c1" cx="75" cy="75" r="68" stroke="#B93A69" strokeWidth="4" />
            <path className="c2" d="M48 77l18 18 38-40" stroke="#5E2A2C" strokeWidth="6" />
          </svg>
          <span className="burst">
            <i style={{ "--x": "-90px", "--y": "-40px" } as React.CSSProperties}></i>
            <i style={{ "--x": "80px", "--y": "-60px", background: "var(--blush)" } as React.CSSProperties}></i>
            <i style={{ "--x": "-70px", "--y": "70px", background: "var(--brown)" } as React.CSSProperties}></i>
            <i style={{ "--x": "95px", "--y": "50px" } as React.CSSProperties}></i>
            <i style={{ "--x": "0px", "--y": "-100px", background: "var(--blush)" } as React.CSSProperties}></i>
          </span>
        </div>
        <h1 className="h1i">
          <span className="ln"><span style={{ "--d": 3 } as React.CSSProperties}>Request <em>received</em></span></span>
        </h1>
        <p className="lead rv" style={{ "--d": 5 } as React.CSSProperties}>
          Thank you. The clinic will call or WhatsApp you to confirm a time. Your appointment is not
          booked until they confirm.
        </p>
        <div className="next" data-stagger>
          {NEXT.map((x, i) => (
            <div className="rv" style={{ "--d": 6 + i } as React.CSSProperties} key={x.n}>
              <span>{x.n}</span><b>{x.b}</b><p>{x.p}</p>
            </div>
          ))}
        </div>
        <div className="cta rv" style={{ "--d": 9, justifyContent: "center" } as React.CSSProperties}>
          <Link className="btn b-brown" href="/your-first-visit/">What to expect</Link>
          <Link className="btn b-line" href="/">Back to home</Link>
        </div>
      </div>
    </section>
  );
}
