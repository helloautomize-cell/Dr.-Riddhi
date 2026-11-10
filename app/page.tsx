import type { Metadata } from "next";
import Link from "next/link";
import Icon from "@/components/Icon";
import Confirm from "@/components/Confirm";
import HomeFx from "@/components/HomeFx";
import { site } from "@/lib/site-config";
import "./home.css";

export const metadata: Metadata = {
  title: "Dr. Riddhi D. Shah | Gynaecologist and laparoscopic surgeon, Borivali West",
  description:
    "Periods, PCOS, pregnancy plans, menopause and keyhole surgery at Mumbai Gastro-Liver and Gynaec Centre, Borivali West. Every concern heard, every option explained.",
};

const d = (n: number) => ({ "--d": n }) as React.CSSProperties;

const STEPS = [
  { img: "step-book", n: "01", tag: "2 minutes", h: "Book", p: "Call, WhatsApp or book online. You get a confirmed time." },
  { img: "step-arrive", n: "02", tag: "Bring reports", h: "Arrive and register", p: "Come 10 minutes early with old reports and the date of your last period." },
  { img: "step-consult", n: "03", tag: "Private room", h: "Consultation", p: "She listens to your whole story, examines you if needed and explains what she finds." },
  { img: "step-tests", n: "04", tag: "Only if needed", h: "Tests if needed", p: "A scan or blood test only when it will change your plan." },
  { img: "step-plan", n: "05", tag: "In writing", h: "Your plan", p: "A clear plan with options, costs and next steps before you leave." },
  { img: "step-follow", n: "06", tag: "Stay in touch", h: "Follow-up", p: "Reports reviewed and a follow-up date, so nothing is left hanging." },
];

const wa = `https://wa.me/${site.whatsappNumber}?text=${encodeURIComponent("Hello, I'd like to book a consultation with Dr. Riddhi.")}`;

const PHYSICIAN_LD = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": ["Physician", "MedicalClinic"],
      "@id": "https://www.drriddhishah.com/#clinic",
      name: `${site.doctor} — ${site.clinic}`,
      description: `${site.role} at ${site.clinic}, ${site.area}, ${site.city}. Periods, PCOS, pregnancy plans, menopause and keyhole surgery.`,
      url: "https://www.drriddhishah.com/",
      telephone: site.phones[0].label,
      email: site.email,
      address: {
        "@type": "PostalAddress",
        streetAddress: "A-wing 301/302, Swastik Building, S.V. Road, Dattani Nagar",
        addressLocality: "Borivali West",
        addressRegion: "Maharashtra",
        postalCode: site.pincode,
        addressCountry: "IN",
      },
      geo: { "@type": "GeoCoordinates", latitude: site.geo.lat, longitude: site.geo.lng },
      openingHoursSpecification: [
        {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
          opens: "10:00",
          closes: "12:00",
        },
        {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
          opens: "16:00",
          closes: "18:00",
        },
      ],
      sameAs: [site.socials.instagram, site.socials.youtube],
      medicalSpecialty: ["Gynecologic", "Obstetric"],
      availableService: [
        "Gynaecology consultations",
        "Laparoscopic and hysteroscopic surgery",
        "PCOS and period care",
        "Preconception and fertility evaluation",
        "Cervical cancer screening and HPV vaccination",
        "Menopause care",
      ],
    },
    {
      "@type": "WebSite",
      "@id": "https://www.drriddhishah.com/#site",
      url: "https://www.drriddhishah.com/",
      name: site.doctor,
      publisher: { "@id": "https://www.drriddhishah.com/#clinic" },
      inLanguage: "en-IN",
    },
  ],
};

export default function HomePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(PHYSICIAN_LD) }} />
      <header className="hero">
        <div className="hero-pin" id="heroPin">
          <div className="wrap">
            <div className="stage">
              <div className="lcol" id="lcol">
                <span className="kick rv" style={d(0)}>Gynaecologist · Laparoscopic surgeon</span>
                <h1 className="h1">
                  <span className="ln"><span style={d(1)}>Women&apos;s health,</span></span>
                  <span className="ln"><span style={d(2)}><em>understood.</em></span></span>
                </h1>
                <p className="lead rv" style={d(4)}>
                  Periods, PCOS, pregnancy plans, menopause and keyhole surgery. Every concern is heard
                  in full, and every option is explained before anything begins.
                </p>
                <div className="cta rv" style={d(5)}>
                  <Link className="btn b-pink" href="/contact/#book">Book a consultation <span className="ar"><Icon name="i-arrow" width={16} height={16} /></span></Link>
                  <a className="btn b-line" href={site.phones[0].href}><Icon name="i-phone" />Call the clinic</a>
                </div>
                <div className="trust rv" style={d(6)}>
                  <span><Icon name="i-shield" />Private consultation room</span>
                  <span><Icon name="i-chat" />Options explained first</span>
                </div>
              </div>

              <div className="pstage" id="pstage">
                <div className="pwrap" id="pwrap">
                  <div className="ring r0"></div>
                  <div className="halo" id="halo"></div>
                  <div className="bloom" id="bloom"></div>
                  <img className="pimg" id="pimg" src="/images/halo-portrait.webp" alt="Dr. Riddhi D. Shah, gynaecologist and laparoscopic surgeon in Borivali West, Mumbai" />
                  <span className="star" style={{ right: "-2%", top: "22%", width: 34 }}><svg viewBox="0 0 40 40"><path d="M20 2l3.5 13L36 20l-12.5 5L20 38l-3.5-13L4 20l12.5-5z" fill="currentColor" /></svg></span>
                  <span className="star" style={{ left: "4%", top: "34%", width: 18, color: "var(--blush)" }}><svg viewBox="0 0 40 40" style={{ animationDelay: "-1.4s" }}><path d="M20 2l3.5 13L36 20l-12.5 5L20 38l-3.5-13L4 20l12.5-5z" fill="currentColor" /></svg></span>
                  <svg className="sprig" style={{ left: "-16%", bottom: "6%", width: 90 }} viewBox="0 0 110 160" aria-hidden="true" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round">
                    <path className="draw" style={{ "--len": 180, "--dl": "1.2s" } as React.CSSProperties} d="M70 155C60 110 58 70 80 20" />
                    <path className="draw" style={{ "--len": 80, "--dl": "1.6s" } as React.CSSProperties} d="M64 110c-22-4-36-18-40-36 18 2 34 14 40 36z" />
                    <path className="draw" style={{ "--len": 80, "--dl": "1.9s" } as React.CSSProperties} d="M66 78c-18-8-26-24-24-40 14 6 24 20 24 40z" />
                    <path className="draw" style={{ "--len": 70, "--dl": "2.1s" } as React.CSSProperties} d="M74 52c8-16 22-24 36-24-4 14-16 24-36 24z" />
                  </svg>
                </div>
              </div>

              <div className="rcol" id="rcol">
                <span className="kick rv" style={d(2)}>Your doctor</span>
                <p className="docname rv" style={d(3)}>Dr. Riddhi <em>D. Shah</em></p>
                <p className="docrole rv" style={d(3)}>MBBS · DNB (OBGY) · FMAS · DRM</p>
                <div className="notes">
                  <div className="note rv" style={d(4)}><i className="leader" style={{ "--w": "90px", "--dl": "1.5s" } as React.CSSProperties}></i><span className="yr">DNB · 2021</span><b>Obstetrics &amp; gynaecology</b><span>National Board, New Delhi</span></div>
                  <div className="note rv" style={d(5)}><i className="leader" style={{ "--w": "60px", "--dl": "1.7s" } as React.CSSProperties}></i><span className="yr">FMAS · Fellowship</span><b>Keyhole surgery</b><span>Laparoscopy and hysteroscopy</span></div>
                  <div className="note rv" style={d(6)}><i className="leader" style={{ "--w": "90px", "--dl": "1.9s" } as React.CSSProperties}></i><span className="yr">DRM · Kiel, Germany</span><b>Reproductive medicine</b><span>Diploma, 2023</span></div>
                </div>
                <span className="live rv" style={d(7)}><i className="dot js-dot"></i><span className="js-live">OPD status</span></span>
              </div>
            </div>
          </div>
          <nav className="rail" aria-label="Care areas"><div className="wrap">
            <a href="#care"><span className="ri"><Icon name="c-cycle" /></span><span>Periods &amp; PCOS<small>Cycles, pain, hormones</small></span></a>
            <a href="#care"><span className="ri"><Icon name="c-egg" /></span><span>Pregnancy plans<small>Preconception, fertility</small></span></a>
            <a href="#care"><span className="ri"><Icon name="c-shield" /></span><span>Screening<small>Pap smear, HPV vaccine</small></span></a>
            <a href="#surgery"><span className="ri"><Icon name="c-scope" /></span><span>Keyhole surgery<small>Fibroids, cysts, endometriosis</small></span></a>
            <a href="#care"><span className="ri"><Icon name="c-lotus" /></span><span>Menopause<small>Perimenopause and after</small></span></a>
          </div></nav>
        </div>
      </header>

      <section className="sec statement" id="statement">
        <div className="wrap">
          <div className="st-side"><span className="kick">A note from the doctor</span><div className="chips"><span>Periods</span><span>PCOS</span><span>Cysts</span><span>Pap smear</span><span>Menopause</span></div></div>
          <div>
            <p className="st-text" id="stText">{"Heavy periods, PCOS, a cyst on a scan, a missed cycle. Most gynae problems are".split(" ").map((w, i) => <span className="w" key={i}>{w} </span>)}<span className="w"><em>common</em>, </span>{"treatable and nothing to feel shy about. You deserve a doctor who listens first, explains everything clearly and never rushes you.".split(" ").map((w, i) => <span className="w" key={i}>{w} </span>)}</p>
            <div className="sig"><img src="/images/halo-portrait.webp" alt="" /><span><b>Dr. Riddhi D. Shah</b><small>Gynaecologist and laparoscopic surgeon</small></span></div>
          </div>
        </div>
      </section>

      <section className="sec" id="care">
        <div className="wrap">
          <div className="care-head">
            <div><span className="kick">What she treats</span><h2 className="h2">Care for <em>every</em> stage</h2></div>
            <p className="sub">Dr. Riddhi decides the right tests and treatment for you after she examines you. These are the areas she looks after.</p>
          </div>
          <div className="bento">
            <Link className="bt t1" href="/treatments/pcos/">
              <span className="go"><Icon name="i-arrow" /></span>
              <div className="ill">
                <div className="cyc">
                  <svg viewBox="0 0 200 200" fill="none" strokeLinecap="round">
                    <circle cx="100" cy="100" r="88" stroke="rgba(251,247,243,.14)" strokeWidth="10" />
                    <path className="ln2" style={{ "--l": 100, "--dl": ".3s" } as React.CSSProperties} d="M100 12A88 88 0 0 1 179.4 62" stroke="#B93A69" strokeWidth="10" />
                    <path className="ln2" style={{ "--l": 162, "--dl": ".7s" } as React.CSSProperties} d="M181.4 66.6A88 88 0 0 1 112.5 187.1" stroke="#E9A9BF" strokeWidth="10" />
                    <path className="ln2" style={{ "--l": 252, "--dl": "1.1s" } as React.CSSProperties} d="M86.6 187A88 88 0 0 1 87 13" stroke="#F1E7DF" strokeWidth="10" />
                    <circle cx="100" cy="100" r="66" stroke="rgba(251,247,243,.12)" strokeDasharray="2 6" />
                  </svg>
                  <div className="orb"><i></i></div>
                  <div className="mid"><div><b id="cday">Day 1</b><small id="cphase">Period</small></div></div>
                </div>
              </div>
              <h3>Periods &amp; PCOS</h3>
              <p>Irregular, heavy or painful periods, PCOS and hormone concerns. Know what is normal for you.</p>
              <div className="legend"><span><i style={{ background: "#B93A69" }}></i>Period</span><span><i style={{ background: "#E9A9BF" }}></i>Follicular</span><span><i style={{ background: "#F1E7DF" }}></i>Luteal</span></div>
            </Link>

            <Link className="bt t2" href="/treatments/planning-a-pregnancy/">
              <span className="go"><Icon name="i-arrow" /></span>
              <div className="ill"><svg className="egg" viewBox="0 0 200 160" fill="none" stroke="#5E2A2C" strokeWidth="1.6">
                <circle className="ring3" cx="100" cy="80" r="66" strokeDasharray="3 7" opacity=".5" />
                <g className="ring2"><circle cx="100" cy="80" r="50" opacity=".35" /><circle cx="150" cy="80" r="5" fill="#B93A69" stroke="none" /><circle cx="58" cy="52" r="3.5" fill="#5E2A2C" stroke="none" /></g>
                <g className="core"><ellipse cx="100" cy="80" rx="28" ry="32" fill="#FBF7F3" /><circle cx="100" cy="80" r="11" fill="#B93A69" stroke="none" /></g>
              </svg></div>
              <h3>Pregnancy plans</h3>
              <p>A preconception check and a clear fertility evaluation for couples.</p>
            </Link>

            <Link className="bt t3" href="/treatments/pap-smear-hpv-vaccine/">
              <span className="go"><Icon name="i-arrow" /></span>
              <div className="ill"><svg className="sh" viewBox="0 0 160 150" fill="none" stroke="#5E2A2C" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path className="ln2" style={{ "--l": 300 } as React.CSSProperties} d="M80 12 128 30v38c0 30-20 52-48 62-28-10-48-32-48-62V30z" fill="#F8E6ED" />
                <path className="chk" d="m60 72 14 14 28-28" stroke="#B93A69" strokeWidth="5" />
                <path className="spk" d="M140 20l2 5 5 2-5 2-2 5-2-5-5-2 5-2z" fill="#B93A69" stroke="none" />
                <path className="spk" style={{ animationDelay: "-1.5s" }} d="M18 104l1.6 4 4 1.6-4 1.6-1.6 4-1.6-4-4-1.6 4-1.6z" fill="#E9A9BF" stroke="none" />
              </svg></div>
              <h3>Screening</h3>
              <p>Pap smear and HPV vaccination, with a reminder when it is due.</p>
            </Link>

            <Link className="bt t4" href="/treatments/infections-discharge/">
              <span className="go"><Icon name="i-arrow" /></span>
              <div className="ill"><svg viewBox="0 0 200 150" fill="none" stroke="#5E2A2C" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                <path className="ln2" style={{ "--l": 420 } as React.CSSProperties} d="M46 40c-14 0-22 8-20 18M154 40c14 0 22 8 20 18M46 40c20 0 24 8 29 22 6 17 5 38 15 52v24h20v-24c10-14 9-35 15-52 5-14 9-22 29-22" />
                <circle className="ln2" style={{ "--l": 40, "--dl": "1.2s" } as React.CSSProperties} cx="26" cy="62" r="6" /><circle className="ln2" style={{ "--l": 40, "--dl": "1.3s" } as React.CSSProperties} cx="174" cy="62" r="6" />
                <path d="M100 22l2.4 6 6 2.4-6 2.4-2.4 6-2.4-6-6-2.4 6-2.4z" fill="#B93A69" stroke="none" />
              </svg></div>
              <h3>Everyday gynaecology</h3>
              <p>Infections, discharge, cysts and urinary problems.</p>
            </Link>

            <Link className="bt t5" href="/treatments/menopause/">
              <span className="go"><Icon name="i-arrow" /></span>
              <div className="ill"><svg className="lotus" viewBox="0 0 200 150">
                <g fill="none" stroke="#fff" strokeWidth="2" strokeLinejoin="round">
                  <path className="pt" style={{ "--r": "-50deg" } as React.CSSProperties} d="M100 120c-10-18-10-40 0-62 10 22 10 44 0 62z" fill="rgba(255,255,255,.12)" />
                  <path className="pt" style={{ "--r": "-25deg" } as React.CSSProperties} d="M100 120c-10-18-10-40 0-62 10 22 10 44 0 62z" fill="rgba(255,255,255,.12)" />
                  <path className="pt" d="M100 120c-12-20-12-46 0-72 12 26 12 52 0 72z" fill="#fff" />
                  <path className="pt" style={{ "--r": "25deg" } as React.CSSProperties} d="M100 120c-10-18-10-40 0-62 10 22 10 44 0 62z" fill="rgba(255,255,255,.12)" />
                  <path className="pt" style={{ "--r": "50deg" } as React.CSSProperties} d="M100 120c-10-18-10-40 0-62 10 22 10 44 0 62z" fill="rgba(255,255,255,.12)" />
                </g>
                <path d="M50 132h100" stroke="rgba(255,255,255,.5)" strokeWidth="2" strokeLinecap="round" />
                <circle className="bub" cx="64" cy="110" r="3" fill="#fff" /><circle className="bub" cx="140" cy="104" r="2.4" fill="#fff" /><circle className="bub" cx="120" cy="116" r="2" fill="#fff" />
              </svg></div>
              <h3>Menopause</h3>
              <p>Perimenopause and after: sleep, mood, hot flushes and bone health.</p>
            </Link>

            <Link className="bt t6" href="/keyhole-surgery/">
              <div className="ph6"><img src="/images/surgery.webp" alt="" loading="lazy" /></div>
              <div className="tx6">
                <span className="go" style={{ color: "var(--cream)" }}><Icon name="i-arrow" /></span>
                <span className="k">Fellowship-trained · FMAS</span>
                <h3>Keyhole surgery</h3>
                <p>Laparoscopy and hysteroscopy for fibroids, cysts, endometriosis and hysterectomy.</p>
                <div className="tg"><span>Laparoscopy</span><span>Hysteroscopy</span></div>
              </div>
            </Link>

            <div className="bt t7">
              <span className="ask-ic"><Icon name="c-ask" /></span>
              <h3 style={{ marginTop: 22 }}>Not sure where you fit?</h3>
              <p>Tell the clinic what is bothering you. You will be booked with the right time for it.</p>
              <div className="row"><Link className="btn b-pink" href="/contact/#book">Book a consultation</Link><a className="btn b-line" href={wa} target="_blank" rel="noopener"><Icon name="i-wa" />WhatsApp</a></div>
            </div>
          </div>
        </div>
      </section>

      <section className="sec explain" id="explain" style={{ paddingTop: 0 }}>
        <div className="wrap">
          <div className="ex-media">
            <div className="ex-frame" id="exFrame"><img src="/images/explain.webp" alt="Dr. Riddhi explaining a uterus model to a patient" /></div>
            <div className="ex-chip"><b>Shown, not just told</b><span>Models and simple diagrams make every option easy to follow.</span></div>
            <div className="ex-stamp" aria-hidden="true"><svg className="r" viewBox="0 0 120 120"><defs><path id="exp" d="M60 60m-46 0a46 46 0 1 1 92 0a46 46 0 1 1-92 0" /></defs><text><textPath href="#exp">LISTEN · EXAMINE · EXPLAIN · </textPath></text></svg><Icon name="i-chat" width={30} height={30} /></div>
          </div>
          <div>
            <span className="kick">How she works</span>
            <h2 className="h2">She explains <em>before</em> she treats</h2>
            <ol className="pr">
              <li className="sr"><span className="n">01</span><div><b>Your whole story, first</b><p>Time to talk through symptoms, history and worries without being rushed.</p></div></li>
              <li className="sr"><span className="n">02</span><div><b>What is happening, made clear</b><p>Findings and options explained in plain words, with models and diagrams.</p></div></li>
              <li className="sr"><span className="n">03</span><div><b>A plan you agree with</b><p>Tests only when needed, and treatment that fits your life and plans.</p></div></li>
            </ol>
          </div>
        </div>
      </section>

      <section className="sec steps" id="visit-steps">
        <div className="wrap steps-head">
          <div><span className="kick" style={{ color: "var(--blush)" }}>Your first visit</span><h2 className="h2">Six calm <em>steps</em></h2></div>
          <p className="sub">From booking to follow-up, you always know what happens next.</p>
        </div>
        <div className="pinbox" id="pinbox">
          <div className="track" id="track">
            {STEPS.map((s) => (
              <article className="sc" key={s.n}>
                <div className="im"><img src={`/images/${s.img}.webp`} alt="" loading="lazy" /><span className="num">{s.n}</span><span className="tag">{s.tag}</span></div>
                <div className="tx"><h3>{s.h}</h3><p>{s.p}</p></div>
              </article>
            ))}
          </div>
          <div className="wrap"><div className="prog"><i id="prog"></i></div></div>
        </div>
      </section>

      <section className="sec sx" id="surgery">
        <div className="wrap">
          <div className="sx-head">
            <div><span className="kick" style={{ color: "var(--blush)" }}>Keyhole surgery</span><h2 className="h2">Smaller cuts. <em>Same</em> care.</h2></div>
            <div>
              <p className="sub">With laparoscopy, many gynae operations are done through a few tiny cuts instead of one long one. Hysteroscopy needs no cut at all. Dr. Riddhi is fellowship-trained in both, and explains every option before you decide.</p>
              <div className="cta"><Link className="btn b-pink" href="/keyhole-surgery/">Ask about surgery <span className="ar"><Icon name="i-arrow" width={16} height={16} /></span></Link></div>
            </div>
          </div>

          <div className="sx-main">
            <div className="sx-photo sr"><img src="/images/surgery.webp" alt="Dr. Riddhi in surgical scrubs in an operating theatre" loading="lazy" />
              <div className="chip"><span><b>FMAS, fellowship-trained</b><small>Minimal access surgery · laparoscopy and hysteroscopy</small></span><span className="ic"><Icon name="c-scope" /></span></div>
            </div>
            <div className="cmpx sr" id="cmpx" data-m="key">
              <div className="seg" role="group" aria-label="Compare surgery types"><button aria-pressed="false" data-m="open">Open surgery</button><button aria-pressed="true" data-m="key">Keyhole surgery</button></div>
              <div className="vis">
                <svg className="body" viewBox="0 0 120 120" fill="none" strokeLinecap="round">
                  <rect x="20" y="14" width="80" height="96" rx="30" fill="rgba(251,247,243,.08)" stroke="rgba(251,247,243,.5)" strokeWidth="1.5" /><path d="M34 100c8-6 17-9 26-9s18 3 26 9" stroke="rgba(251,247,243,.22)" strokeWidth="1.2" />
                  <path className="cut2" d="M60 52v56" stroke="#E9A9BF" strokeWidth="4" />
                  <circle className="prt" cx="60" cy="62" r="4.2" fill="#E9A9BF" /><circle className="prt" cx="44" cy="84" r="3.4" fill="#E9A9BF" /><circle className="prt" cx="76" cy="84" r="3.4" fill="#E9A9BF" />
                  <path className="cam" d="M60 62 60 22" stroke="#FBF7F3" strokeWidth="1.5" strokeDasharray="70" />
                </svg>
                <div className="facts">
                  <div><small>Cut</small><b data-open="One longer cut" data-key="Three or four tiny cuts">Three or four tiny cuts</b></div>
                  <div><small>How she sees</small><b data-open="Directly, through the opening" data-key="A camera on a screen">A camera on a screen</b></div>
                  <div><small>Recovery</small><b data-open="Often a longer stay" data-key="Often a shorter stay">Often a shorter stay</b></div>
                </div>
              </div>
              <p className="note2">Every case is different. Whether surgery is needed, and which type suits you, is decided after she examines you.</p>
            </div>
          </div>

          <div className="tech">
            <div className="tc l sr">
              <svg viewBox="0 0 150 130" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle className="ln2" style={{ "--l": 302 } as React.CSSProperties} cx="75" cy="76" r="48" />
                <circle cx="75" cy="72" r="4" fill="#fff" /><circle cx="54" cy="94" r="3" fill="#fff" /><circle cx="96" cy="94" r="3" fill="#fff" />
                <path className="ln2" style={{ "--l": 70, "--dl": ".9s" } as React.CSSProperties} d="M75 72 75 4" />
                <path className="ln2" style={{ "--l": 70, "--dl": "1.2s" } as React.CSSProperties} d="M54 94 28 68M96 94 122 68" />
              </svg>
              <div><h3>Laparoscopy</h3><p>A thin camera and fine instruments go in through small cuts in the tummy. Used for cysts, fibroids, endometriosis and hysterectomy.</p></div>
            </div>
            <div className="tc h sr">
              <svg viewBox="0 0 150 130" fill="none" stroke="#5E2A2C" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path className="ln2" style={{ "--l": 420 } as React.CSSProperties} d="M38 22c-12 0-18 7-16 15M112 22c12 0 18 7 16 15M38 22c18 0 21 7 25 19 5 14 4 31 12 43v14h0M112 22c-18 0-21 7-25 19-5 14-4 31-12 43" />
                <g className="scope"><path d="M75 128V70" stroke="#B93A69" strokeWidth="3" /><circle cx="75" cy="68" r="4" fill="#B93A69" stroke="none" /></g>
              </svg>
              <div><h3>Hysteroscopy</h3><p>A thin camera looks inside the womb through the natural opening, with no cut. Used for polyps, fibroids inside the womb and bleeding checks.</p></div>
            </div>
          </div>

          <div className="procs2">
            <div className="pc sr"><span className="n">01</span><b>Fibroid and ovarian cyst surgery</b><span>Removing fibroids or cysts, saving healthy tissue where possible.</span></div>
            <div className="pc sr"><span className="n">02</span><b>Endometriosis surgery</b><span>Finding and treating endometriosis to ease pain.</span></div>
            <div className="pc sr"><span className="n">03</span><b>Hysterectomy</b><span>Laparoscopic or vaginal, when it is truly the right option.</span></div>
            <div className="pc sr"><span className="n">04</span><b>Diagnostic and operative hysteroscopy</b><span>Looking inside the womb and treating what is found.</span></div>
          </div>
          <p className="fine">Surgery, when needed, is done at an empanelled hospital. She explains the plan, the stay and the recovery before you decide.</p>
        </div>
      </section>

      <section className="sec about" id="about">
        <div className="wrap">
          <div className="ab-media">
            <div className="ab-frame sr"><img src="/images/about-walk.webp" alt="Dr. Riddhi D. Shah at the clinic" loading="lazy" /></div>
            <div className="ab-name"><b>Dr. Riddhi D. Shah</b><small>Registration <Confirm label="confirm MMC no." /></small></div>
          </div>
          <div>
            <span className="kick">Meet your doctor</span>
            <h2 className="h2">Trained in Mumbai, <em>Germany</em> and the operating theatre</h2>
            <p className="sub">Dr. Riddhi is a gynaecologist and laparoscopic surgeon at Mumbai Gastro-Liver and Gynaec Centre, Borivali West. Online, she answers the questions women often feel too shy to ask.</p>
            <ul className="tl">
              <li className="sr"><span className="y">2017</span><div><b>MBBS</b><span>Pravara Institute of Medical Sciences, Loni</span></div></li>
              <li className="sr"><span className="y">2021</span><div><b>DNB, Obstetrics and Gynaecology</b><span>National Board of Examinations, New Delhi</span></div></li>
              <li className="sr"><span className="y">2022</span><div><b>FMAS and laparoscopy fellowships</b><span>Minimal access surgery training</span></div></li>
              <li className="sr"><span className="y">2023</span><div><b>DRM, Reproductive Medicine</b><span>University of Schleswig-Holstein, Kiel, Germany</span></div></li>
            </ul>
            <div className="awards">
              <div className="aw sr"><img src="/images/mogs-2020-award.jpg" alt="Receiving the paper award at MOGS 2020" loading="lazy" /><div><b>First prize, best paper in High Risk Obstetrics</b><small>48th Annual Conference, MOGS, Feb 2020</small></div></div>
              <div className="aw sr"><img src="/images/mogs-2020-presentation.jpg" alt="Presenting research at a conference" loading="lazy" /><div><b>Published research, first author</b><small>Indian Journal of Obstetrics and Gynecology</small></div></div>
            </div>
          </div>
        </div>
      </section>

      <section className="sec videos" id="videos">
        <div className="wrap">
          <div>
            <span className="kick" style={{ color: "var(--blush)" }}>Watch and learn</span>
            <h2 className="h2">Short answers to <em>real</em> questions</h2>
            <p className="sub">Dr. Riddhi explains one topic at a time on Instagram and YouTube, in plain words.</p>
            <div className="vtopics"><span>Fibroids</span><span>PCOS</span><span>Cancer screening</span><span>Irregular periods</span><span>HPV vaccine</span></div>
            <div className="vbtns">
              <a className="btn b-cream" href={site.socials.youtube} target="_blank" rel="noopener"><Icon name="i-yt" />Watch on YouTube</a>
              <a className="btn b-ghost" href={site.socials.instagram} target="_blank" rel="noopener"><Icon name="i-ig" />Follow on Instagram</a>
            </div>
          </div>
          <a className="vcover sr" href={site.socials.youtube} target="_blank" rel="noopener" aria-label="Watch Dr. Riddhi's videos on YouTube"><img src="/images/videos.webp" alt="" loading="lazy" /><span className="vplay"><Icon name="i-play" /></span></a>
        </div>
      </section>

      <section className="sec faq" id="faq">
        <div className="wrap">
          <div>
            <span className="kick">Common questions</span>
            <h2 className="h2">Ask <em>anything</em></h2>
            <p className="sub">General answers to help you prepare. For advice about you, book a visit.</p>
            <div className="reviewed"><img src="/images/halo-portrait.webp" alt="" /><span>Medically reviewed by <b style={{ color: "var(--brown)" }}>Dr. Riddhi D. Shah</b><br />Last reviewed <Confirm label="confirm date" /></span></div>
          </div>
          <div className="qa">
            <details open><summary>Can I talk about something embarrassing?<i><Icon name="i-plus" width={18} height={18} /></i></summary><p>Yes. Nothing you bring up is unusual for a gynaecologist. The consultation room is private, and you can ask for a female attendant during any examination.</p></details>
            <details><summary>Do I need to come on a certain day of my cycle?<i><Icon name="i-plus" width={18} height={18} /></i></summary><p>For most visits, no. For some scans or tests a specific day helps. When you book, mention why you are coming and the clinic will tell you the best day.</p></details>
            <details><summary>What should I bring?<i><Icon name="i-plus" width={18} height={18} /></i></summary><p>Old reports and scans, a list of medicines you take, and the date your last period started.</p></details>
            <details><summary>Does every fibroid or cyst need surgery?<i><Icon name="i-plus" width={18} height={18} /></i></summary><p>No. Many only need watching. Whether treatment is needed depends on size, symptoms and your plans, which she will explain after examining you.</p></details>
            <details><summary>Is the HPV vaccine only for teenagers?<i><Icon name="i-plus" width={18} height={18} /></i></summary><p>It works best at a younger age, but adults can also benefit. Ask at your visit whether it suits you.</p></details>
          </div>
        </div>
      </section>

      <section className="sec visit" id="visit">
        <div className="wrap">
          <div className="mapc sr">
            <iframe
              className="map"
              title="Map — Mumbai Gastro-Liver and Gynaec Centre, Borivali West"
              src={`https://maps.google.com/maps?q=${site.geo.lat},${site.geo.lng}&z=17&hl=en&output=embed`}
              loading="lazy"
              allowFullScreen
              referrerPolicy="no-referrer-when-downgrade"
            />
            <div className="entr"><img src="/images/clinic-entrance.jpg" alt="Clinic entrance" loading="lazy" /><small>Look for this entrance</small></div>
          </div>
          <div className="vcard sr">
            <span className="kick">Plan your visit</span>
            <h2>Mumbai Gastro-Liver and <em>Gynaec</em> Centre</h2>
            <p className="addr">A-301/302, Swastik Building, S.V. Road, next to Vijay Sales, Dattani Nagar, Borivali West, Mumbai 400092</p>
            <div className="week" id="week"></div>
            <div className="ct">
              <a href={site.phones[0].href}><span className="ci"><Icon name="i-phone" /></span><span>{site.phones[0].label} · {site.phones[1].label}<small>Call or WhatsApp <Confirm label="confirm WhatsApp no." /></small></span></a>
              <a href={`mailto:${site.email}`}><span className="ci"><Icon name="i-mail" /></span><span>{site.email}<small>Appointments and reports</small></span></a>
            </div>
            <div className="emerg"><Icon name="i-alert" />Medical emergency? Call 108 or 112.</div>
            <div className="vbtn"><a className="btn b-pink" href={site.mapsUrl} target="_blank" rel="noopener">Get directions <span className="ar"><Icon name="i-arrow" width={16} height={16} /></span></a><a className="btn b-line" href={site.mapsUrl} target="_blank" rel="noopener"><Icon name="i-star" />Reviews on Google</a></div>
          </div>
        </div>
      </section>
      <HomeFx />
    </>
  );
}
