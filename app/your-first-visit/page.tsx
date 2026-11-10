import type { Metadata } from "next";
import Link from "next/link";
import Icon from "@/components/Icon";
import Confirm from "@/components/Confirm";
import VisitFx from "@/components/VisitFx";
import { site } from "@/lib/site-config";
import "./visit.css";

export const metadata: Metadata = {
  title: "Your first visit | Dr. Riddhi D. Shah, Gynaecologist in Borivali West",
  description:
    "What happens at your first gynaecology visit with Dr. Riddhi D. Shah in Borivali West: booking, what to bring, timings and how to reach the clinic.",
};

const d = (n: number) => ({ "--d": n }) as React.CSSProperties;

const STEPS = [
  { t: "2 minutes", img: "step-book", n: "01", h: "Book", p: "Call, WhatsApp or use the booking form. Mention why you are coming so the clinic can suggest the best day." },
  { t: "Bring reports", img: "step-arrive", n: "02", h: "Arrive and register", p: "Come 10 minutes early. The front desk takes your details and any old reports." },
  { t: "Private room", img: "step-consult", n: "03", h: "Consultation", p: "Dr. Riddhi hears your whole story. If an examination is needed, a female attendant is present and you can ask to stop at any time." },
  { t: "Only if needed", img: "step-tests", n: "04", h: "Tests if needed", p: "A scan or blood test only when it will change your plan. Many can be done the same day." },
  { t: "Explained clearly", img: "step-plan", n: "05", h: "Your plan", p: "Options are explained in plain words, with models or drawings, before anything starts." },
  { t: "Stay in touch", img: "step-follow", n: "06", h: "Follow-up", p: "A date to come back, and WhatsApp for reports and small questions in between." },
];

const BAG = [
  { ic: "i-doc", b: "Old reports and scans", s: "Blood tests, ultrasound and discharge summaries." },
  { ic: "i-cal", b: "Date of your last period", s: "The first day it started. A period app is fine." },
  { ic: "i-bag", b: "Your medicines", s: "Or a photo of the strips and bottles." },
  { ic: "i-id", b: "ID and insurance card", s: "If you plan to claim insurance later." },
  { ic: "i-chat", b: "Your questions", s: "Written down, so nothing is forgotten." },
  { ic: "i-heart", b: "Someone with you", s: "Welcome, if it helps you feel at ease." },
];

function MapArt() {
  return (
    <div className="mapc sr">
      <svg className="map" viewBox="0 0 600 520" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
        <rect width="600" height="520" fill="#FBF7F3" />
        <g fill="#F1E7DF"><rect x="30" y="40" width="160" height="120" rx="18" /><rect x="220" y="40" width="130" height="120" rx="18" /><rect x="390" y="30" width="190" height="140" rx="18" /><rect x="30" y="300" width="150" height="190" rx="18" /><rect x="400" y="300" width="180" height="190" rx="18" /></g>
        <rect x="0" y="200" width="600" height="56" fill="#fff" /><rect x="300" y="0" width="50" height="520" fill="#fff" />
        <path d="M0 228H600" stroke="#E6D8CF" strokeWidth="2" strokeDasharray="10 10" />
        <path d="M40 330C120 300 200 260 300 245" stroke="#B93A69" strokeWidth="4" fill="none" strokeDasharray="2 12" strokeLinecap="round" />
        <text x="60" y="110" fontFamily="Figtree" fontWeight="600" fontSize="14" fill="#6B5A62">Vijay Sales</text>
        <text x="16" y="222" fontFamily="Figtree" fontWeight="700" fontSize="12" letterSpacing="3" fill="#5E2A2C">S.V. ROAD</text>
        <text x="332" y="470" fontFamily="Figtree" fontWeight="700" fontSize="12" letterSpacing="3" fill="#5E2A2C" transform="rotate(-90 332 470)">DATTANI NAGAR</text>
      </svg>
      <div className="pin"><div className="p"><span></span></div><div className="lbl">Swastik Building<small>A-wing, 3rd floor</small></div></div>
      <div className="entr"><img src="/images/clinic-entrance.jpg" alt="Clinic entrance" loading="lazy" /><small>Look for this entrance</small></div>
    </div>
  );
}

export default function FirstVisitPage() {
  return (
    <>
      <section className="fh">
        <div className="wrap">
          <nav className="crumbs rv" aria-label="Breadcrumb">
            <Link href="/">Home</Link><i></i><span>Your first visit</span>
          </nav>
          <div className="g">
            <div>
              <span className="kick rv" style={d(1)}>Plan your visit</span>
              <h1 className="h1i" style={{ marginTop: 20 }}>
                <span className="ln"><span style={d(1)}>Your first visit,</span></span>
                <span className="ln"><span style={d(2)}><em>start to finish</em></span></span>
              </h1>
              <p className="lead rv" style={d(4)}>
                Knowing what happens takes away most of the worry. Here is the whole visit, what to
                bring and how to reach the clinic. If anything is unclear, call or WhatsApp before you come.
              </p>
              <div className="cta rv" style={d(5)}>
                <Link className="btn b-pink" href="/contact/#book">Book a consultation <span className="ar"><Icon name="i-arrow" width={16} height={16} /></span></Link>
                <span className="live"><span className="dot js-dot"></span><span className="js-live">Opens today at 10 am</span></span>
              </div>
              <div className="legend rv" style={d(6)}>
                <span><i style={{ background: "#B93A69" }}></i>Arrive and register</span>
                <span><i style={{ background: "#5E2A2C" }}></i>Consultation</span>
                <span><i style={{ background: "#E9A9BF" }}></i>Tests if needed</span>
                <span><i style={{ background: "#F1E7DF", boxShadow: "inset 0 0 0 1px #E6D8CF" }}></i>Your plan</span>
              </div>
            </div>
            <div className="clock rv" style={d(3)} aria-hidden="true">
              <svg viewBox="0 0 440 440">
                <circle cx="220" cy="220" r="170" fill="none" stroke="#F1E7DF" strokeWidth="26" />
                <g id="segs"></g>
                <circle cx="220" cy="220" r="130" fill="none" stroke="#E6D8CF" strokeDasharray="2 8" />
                <g className="hand"><circle cx="220" cy="38" r="9" fill="#FBF7F3" stroke="#B93A69" strokeWidth="3" /></g>
              </svg>
              <div className="mid"><div><b>~45</b><small>minutes, typical first visit<br /><Confirm /></small></div></div>
            </div>
          </div>
        </div>
      </section>

      <section className="sec sv">
        <div className="wrap">
          <span className="kick" style={{ color: "var(--blush)" }}>Step by step</span>
          <h2 className="h2">Six calm <em>steps</em></h2>
          <div className="g">
            <div className="vw" id="vw">
              {STEPS.map((s, i) => (
                <img key={s.img} className={i === 0 ? "on" : undefined} src={`/images/${s.img}.webp`} alt="" />
              ))}
              <span className="n" id="vn">01</span>
              <span className="tg" id="vt">2 minutes</span>
            </div>
            <ol id="steps">
              {STEPS.map((s, i) => (
                <li key={s.n} className={i === 0 ? "on" : undefined} data-t={s.t}>
                  <img className="mimg" src={`/images/${s.img}.webp`} alt="" loading="lazy" />
                  <small>Step {s.n}</small><h3>{s.h}</h3><p>{s.p}</p>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      <section className="sec bring">
        <div className="wrap g">
          <div>
            <span className="kick">What to bring</span>
            <h2 className="h2">Pack your <em>bag</em></h2>
            <p className="sub">Tap each item as you pack it. This list stays on your phone only.</p>
            <div className="meter"><span id="mtx">0 of 6 packed</span><span className="bar"><i id="mbar"></i></span></div>
          </div>
          <div className="bag" id="bag">
            {BAG.map((b) => (
              <label key={b.b}>
                <input type="checkbox" />
                <span className="bi"><Icon name={b.ic} /></span>
                <b>{b.b}</b><small>{b.s}</small>
                <span className="tk"><Icon name="i-check" width={16} height={16} /></span>
              </label>
            ))}
          </div>
        </div>
      </section>

      <section className="sec reach">
        <div className="wrap gg">
          <MapArt />
          <div className="how3">
            <div className="vcard" style={{ padding: 24 }}>
              <span className="kick">Getting here</span>
              <h2 style={{ fontSize: "clamp(30px,3vw,42px)" }}>Next to <em>Vijay Sales</em>, S.V. Road</h2>
              <p className="addr">A-301/302, Swastik Building, Dattani Nagar, Borivali West, Mumbai 400092</p>
              <div className="week" id="week"></div>
            </div>
            <div className="c sr"><span className="ci"><Icon name="i-train" /></span><div><b>By train</b><p>Borivali station (Western line), then an auto to S.V. Road, Dattani Nagar. <Confirm label="confirm time" /></p></div></div>
            <div className="c sr"><span className="ci"><Icon name="i-car" /></span><div><b>By car</b><p>Search &quot;Mumbai Gastro-Liver and Gynaec Centre&quot; in Google Maps. Parking: <Confirm /></p></div></div>
            <div className="towns sr"><b>Coming from outside Borivali?</b><p>Many patients travel from nearby areas. Call ahead so tests that need fasting are planned for the morning, and reports can be shared on WhatsApp after you go home.</p><div className="chips"><span className="chip-s">Kandivali</span><span className="chip-s">Dahisar</span><span className="chip-s">Mira Road</span><span className="chip-s">Bhayander</span><span className="chip-s">Malad</span><span className="chip-s">Vasai</span><span className="chip-s">Virar</span><Confirm label="confirm list" /></div></div>
          </div>
        </div>
      </section>

      <section className="sec">
        <div className="wrap">
          <div className="shead"><div><span className="kick">Good to know</span><h2 className="h2">Before you <em>arrive</em></h2></div></div>
          <div className="fees" data-stagger>
            <div className="c sr"><span className="lbl">Fees</span><b>Told when you book</b><p>The consultation fee is shared on the phone or WhatsApp. Tests are explained before they are done. <Confirm /></p></div>
            <div className="c sr"><span className="lbl">Payment</span><b>Cash, UPI and cards</b><p>No advance is needed to book a consultation. <Confirm /></p></div>
            <div className="c sr"><span className="lbl">Running late?</span><b>Message the clinic</b><p>Send a WhatsApp and the desk will tell you the next free slot.</p></div>
          </div>
        </div>
      </section>
      <VisitFx />
    </>
  );
}
