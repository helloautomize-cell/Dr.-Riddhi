import type { Metadata } from "next";
import Link from "next/link";
import Icon from "@/components/Icon";
import Confirm from "@/components/Confirm";
import KeyholeFx from "@/components/KeyholeFx";
import { site } from "@/lib/site-config";
import { KEYHOLE_FAQS } from "@/lib/faqs";
import "./keyhole.css";

export const metadata: Metadata = {
  title: "Keyhole surgery (laparoscopy and hysteroscopy) in Borivali | Dr. Riddhi D. Shah",
  description:
    "Laparoscopy and hysteroscopy by Dr. Riddhi D. Shah, fellowship-trained gynaecologist in Borivali West. How it works, what to expect and recovery.",
};

const d = (n: number) => ({ "--d": n }) as React.CSSProperties;

export default function KeyholePage() {
  return (
    <>
      <section className="kh">
        <div className="wrap">
          <nav className="crumbs lt rv" aria-label="Breadcrumb">
            <Link href="/">Home</Link><i></i><span>Keyhole surgery</span>
          </nav>
          <div className="g">
            <div>
              <span className="kick rv" style={{ ...d(1), color: "var(--blush)" }}>Laparoscopy · Hysteroscopy</span>
              <h1 className="h1i" style={{ marginTop: 20 }}>
                <span className="ln"><span style={d(1)}>Keyhole surgery,</span></span>
                <span className="ln"><span style={d(2)}><em>explained first</em></span></span>
              </h1>
              <p className="lead rv" style={d(4)}>
                Many gynae operations can be done through a few small cuts, or with no cut at all.
                Dr. Riddhi is fellowship-trained in both laparoscopy and hysteroscopy. Whether you
                need surgery, and which kind, is decided only after she examines you, and every step
                is explained before you agree.
              </p>
              <div className="cta rv" style={d(5)}>
                <Link className="btn b-pink" href="/contact/#book">Ask about surgery <span className="ar"><Icon name="i-arrow" width={16} height={16} /></span></Link>
                <a className="btn b-ghost" href="#procedures">See procedures</a>
              </div>
              <div className="pts rv" style={d(6)}>
                <div><b>5 to 10</b><small>mm, the usual size of each cut</small></div>
                <div><b>0</b><small>cuts for hysteroscopy</small></div>
                <div><b>FMAS</b><small>fellowship-trained</small></div>
              </div>
            </div>
            <div className="scopebox rv" style={d(3)} id="scope">
              <img src="/images/surgery-wide.webp" alt="Dr. Riddhi in surgical scrubs with a laparoscopy monitor behind her" />
              <span className="lens" id="lens"></span>
              <span className="hint"><i></i>Move to look closer</span>
            </div>
          </div>
        </div>
      </section>

      <section className="sec">
        <div className="wrap">
          <div className="shead">
            <div><span className="kick">Two ways in</span><h2 className="h2">Which one, and <em>why</em></h2></div>
            <p className="sub" style={{ margin: 0 }}>Both use a thin camera that shows the inside on a screen, so she can see clearly without a large opening.</p>
          </div>
          <div className="ways">
            <a className="way l sr" href="#procedures">
              <div className="ill">
                <svg viewBox="0 0 260 200" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round">
                  <circle cx="130" cy="120" r="74" strokeOpacity=".5" />
                  <circle cx="130" cy="120" r="50" strokeDasharray="3 6" strokeOpacity=".5" />
                  <g className="cam2"><path d="M130 112V10" strokeWidth="3" /><circle cx="130" cy="112" r="6" fill="#fff" /></g>
                  <path className="inst" d="M30 70 98 138" /><path className="inst" d="M230 70 162 138" style={{ animationDelay: ".3s" }} />
                  <circle className="port" cx="130" cy="58" r="5" /><circle className="port" cx="78" cy="118" r="4" style={{ animationDelay: ".4s" }} /><circle className="port" cx="182" cy="118" r="4" style={{ animationDelay: ".8s" }} />
                </svg>
              </div>
              <h3>Laparoscopy</h3>
              <p>A camera and fine instruments go in through small cuts in the tummy, usually one at the navel and one or two lower down.</p>
              <div className="row"><div className="tg"><span>Cysts</span><span>Fibroids</span><span>Endometriosis</span><span>Hysterectomy</span></div><span className="go"><Icon name="i-arrow" /></span></div>
            </a>
            <a className="way h sr" href="#procedures">
              <div className="ill">
                <svg viewBox="0 0 260 200" fill="none" stroke="#5E2A2C" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M66 40c-22 0-32 12-28 26M194 40c22 0 32 12 28 26M66 40c30 0 36 12 42 32 7 24 6 50 20 70M194 40c-30 0-36 12-42 32-7 24-6 50-20 70" />
                  <circle cx="36" cy="70" r="6" /><circle cx="224" cy="70" r="6" />
                  <g className="cam2"><path d="M130 200v-82" stroke="#B93A69" strokeWidth="4" /><circle cx="130" cy="116" r="6" fill="#B93A69" stroke="none" /></g>
                  <circle cx="130" cy="86" r="22" stroke="#B93A69" strokeDasharray="3 5" />
                </svg>
              </div>
              <h3>Hysteroscopy</h3>
              <p>A thin camera passes into the womb through the natural opening. There is no cut, and many procedures take a short time.</p>
              <div className="row"><div className="tg"><span>Polyps</span><span>Fibroids inside the womb</span><span>Bleeding checks</span></div><span className="go"><Icon name="i-arrow" /></span></div>
            </a>
          </div>
        </div>
      </section>

      <section className="sec size">
        <div className="wrap g">
          <div>
            <span className="kick">Size of the cut</span>
            <h2 className="h2">Small openings, <em>shown to scale</em></h2>
            <p className="sub">A smaller cut often means less pain after surgery and a quicker return to daily life. She will tell you what to expect for your own operation.</p>
          </div>
          <div className="ruler io" id="ruler">
            <div className="r"><div className="lb"><span>Open surgery</span><small>one cut, often 10 to 15 cm</small></div><div className="track"><span className="cut" style={{ "--w": "84%" } as React.CSSProperties}></span></div></div>
            <div className="r"><div className="lb"><span>Laparoscopy</span><small>2 to 4 cuts, about 0.5 to 1 cm each</small></div><div className="track"><span className="cut k" style={{ "--w": "6%", "--dl": ".4s" } as React.CSSProperties}></span></div><div className="dots"><i style={{ transitionDelay: ".9s" }}></i><i style={{ transitionDelay: "1.05s" }}></i><i style={{ transitionDelay: "1.2s" }}></i></div></div>
            <div className="r"><div className="lb"><span>Hysteroscopy</span><small>no cut</small></div><div className="track"></div></div>
            <p className="ft">Typical sizes for illustration. Your cuts depend on the operation planned for you.</p>
          </div>
        </div>
      </section>

      <section className="sec">
        <div className="wrap">
          <span className="kick">Your surgery, step by step</span>
          <h2 className="h2">From first talk to <em>follow-up</em></h2>
          <div className="jr io">
            <span className="pg"></span>
            <div><span className="ph2">Before</span><h3>Decide together</h3><ul><li><Icon name="i-check" />Scan and tests reviewed</li><li><Icon name="i-check" />Options, including no surgery</li><li><Icon name="i-check" />Written consent</li></ul></div>
            <div><span className="ph2">Getting ready</span><h3>Fitness check</h3><ul><li><Icon name="i-check" />Blood tests and anaesthesia check</li><li><Icon name="i-check" />Fasting and medicine advice</li><li><Icon name="i-check" />Hospital and date fixed</li></ul></div>
            <div><span className="ph2">Surgery day</span><h3>At the hospital</h3><ul><li><Icon name="i-check" />Done by Dr. Riddhi herself</li><li><Icon name="i-check" />Family updated after</li><li><Icon name="i-check" />Many go home in a day or two <Confirm /></li></ul></div>
            <div><span className="ph2">After</span><h3>Recovery</h3><ul><li><Icon name="i-check" />Clear advice on rest and work</li><li><Icon name="i-check" />Follow-up visit for stitches and reports</li><li><Icon name="i-check" />WhatsApp for worries in between</li></ul></div>
          </div>
        </div>
      </section>

      <section className="sec" id="procedures" style={{ paddingTop: 0 }}>
        <div className="wrap">
          <div className="shead"><div><span className="kick">Procedures</span><h2 className="h2">What she <em>operates</em> on</h2></div></div>
          <div className="pgrid" data-stagger>
            {[
              { ic: "c-ovary", how: "Laparoscopy", b: "Ovarian cyst removal", p: "Removing the cyst while saving healthy ovary where possible." },
              { ic: "c-fibroid", how: "Laparoscopy", b: "Fibroid removal", p: "Myomectomy, keeping the womb in place." },
              { ic: "c-endo", how: "Laparoscopy", b: "Endometriosis surgery", p: "Finding and treating patches to ease pain." },
              { ic: "c-uterus", how: "Keyhole or vaginal", b: "Hysterectomy", p: "Removing the womb, only when it is truly the right option." },
              { ic: "c-lap", how: "Laparoscopy", b: "Diagnostic laparoscopy", p: "A look inside to find the cause of pain or trouble conceiving." },
              { ic: "c-hys", how: "Hysteroscopy", b: "Polyp and septum removal", p: "Treating growths or a wall inside the womb, with no cut." },
            ].map((x) => (
              <div className="pcd sr" key={x.b}>
                <div className="tp"><span className="ri"><svg viewBox="0 0 48 48"><use href={`#${x.ic}`} /></svg></span><span className="how2">{x.how}</span></div>
                <b>{x.b}</b><p>{x.p}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="sec" style={{ paddingTop: 0 }}>
        <div className="wrap askg">
          <div className="askc sr">
            <span className="kick" style={{ color: "var(--blush)" }}>Before any operation</span>
            <h3 style={{ marginTop: 14 }}>Questions worth asking</h3>
            <ol>
              <li>Why do I need this, and what happens if I wait?</li>
              <li>Can it be done by keyhole?</li>
              <li>How long will I stay in hospital?</li>
              <li>When can I go back to work?</li>
              <li>Will it affect a future pregnancy?</li>
            </ol>
            <Link className="btn b-cream" href="/contact/#book">Bring these to your visit</Link>
          </div>
          <div>
            <span className="kick">Common questions</span>
            <h2 className="h2" style={{ marginBottom: 24 }}>About keyhole <em>surgery</em></h2>
            <div className="qa">
              {KEYHOLE_FAQS.map((f, i) => (
                <details key={f.q} open={i === 0}>
                  <summary>{f.q}<i><Icon name="i-plus" width={18} height={18} /></i></summary>
                  <p>{f.a}</p>
                </details>
              ))}
            </div>
            <div className="hosp">Surgery is done at empanelled hospitals in and around Borivali. <Confirm label="confirm hospital names" /></div>
            <div className="revbox" style={{ marginTop: 16 }}>
              <img src="/images/halo-portrait.webp" alt="" />
              <div><b>Medically reviewed by Dr. Riddhi D. Shah</b>FMAS, fellowship-trained in laparoscopy and hysteroscopy · Last reviewed <Confirm label="confirm date" /></div>
            </div>
          </div>
        </div>
      </section>
      <KeyholeFx />
    </>
  );
}
