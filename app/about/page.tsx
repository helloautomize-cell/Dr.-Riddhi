import type { Metadata } from "next";
import Link from "next/link";
import Icon from "@/components/Icon";
import Confirm, { DevOnly } from "@/components/Confirm";
import AboutFx from "@/components/AboutFx";
import { site } from "@/lib/site-config";
import "./about.css";

export const metadata: Metadata = {
  title: "About Dr. Riddhi D. Shah | Gynaecologist in Borivali West",
  description:
    "Dr. Riddhi D. Shah, MBBS, DNB (OBGY), FMAS, DRM — gynaecologist and laparoscopic surgeon at Mumbai Gastro-Liver and Gynaec Centre, Borivali West.",
};

const d = (n: number) => ({ "--d": n }) as React.CSSProperties;

export default function AboutPage() {
  return (
    <>
      <section className="ah">
        <div className="wrap">
          <nav className="crumbs rv" aria-label="Breadcrumb">
            <Link href="/">Home</Link><i></i><span>About Dr. Riddhi</span>
          </nav>
          <div className="g">
            <div>
              <span className="kick rv" style={d(1)}>Gynaecologist · Laparoscopic surgeon</span>
              <h1 className="h1i" style={{ marginTop: 20 }}>
                <span className="ln"><span style={d(1)}><span className="sm">Dr.</span></span></span>
                <span className="ln"><span style={d(2)}>Riddhi D.</span></span>
                <span className="ln"><span style={d(3)}><em>Shah</em></span></span>
              </h1>
              <p className="lead rv" style={d(5)}>
                She looks after women at every stage, from a first period problem to planning a
                pregnancy, menopause and keyhole surgery. She practises at {site.clinic} in Borivali
                West, and is known online for explaining women&apos;s health in plain words.
              </p>
              <div className="facts rv" style={d(6)}>
                <div><span className="fi"><Icon name="i-cap" /></span><div><small>Qualifications</small><b>MBBS, DNB (OBGY), FMAS, DRM</b></div></div>
                <div><span className="fi"><Icon name="i-id" /></span><div><small>Registration</small><b>MMC <Confirm label="confirm no." /></b></div></div>
                <div><span className="fi"><Icon name="i-lang" /></span><div><small>Languages</small><b>English, Hindi, Gujarati, Marathi <Confirm /></b></div></div>
                <div><span className="fi"><Icon name="i-pin" /></span><div><small>Clinic</small><b>MGLGC, Borivali West</b></div></div>
              </div>
              <div className="cta rv" style={d(7)}>
                <Link className="btn b-pink" href="/contact/#book">Book a consultation <span className="ar"><Icon name="i-arrow" width={16} height={16} /></span></Link>
                <a className="btn b-line" href="#path">Her training</a>
              </div>
            </div>
            <div className="stack" id="stack">
              <span className="blk"></span><span className="blk blk2"></span>
              <div className="ph"><img src="/images/profile.webp" alt="Dr. Riddhi D. Shah in a white coat with a stethoscope" /></div>
              <div className="tag"><b>Fellowship-trained</b><small>Laparoscopy · Hysteroscopy</small></div>
              <div className="seal" aria-hidden="true">
                <svg className="t" viewBox="0 0 200 200">
                  <defs><path id="sp" d="M100 100m-78 0a78 78 0 1 1 156 0a78 78 0 1 1-156 0" /></defs>
                  <text fontFamily="Figtree" fontSize="15" fontWeight="600" letterSpacing="5.2" fill="currentColor">
                    <textPath href="#sp">MBBS · DNB · FMAS · DRM GERMANY · </textPath>
                  </text>
                </svg>
                <span className="c"><Icon name="i-heart" /></span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="mq" aria-hidden="true">
        <div className="tr">
          {["Periods","PCOS","Fibroids","Ovarian cysts","Endometriosis","Pregnancy plans","Pap smear","HPV vaccine","Menopause","Laparoscopy","Hysteroscopy","Periods","PCOS","Fibroids","Ovarian cysts","Endometriosis","Pregnancy plans","Pap smear","HPV vaccine","Menopause","Laparoscopy","Hysteroscopy"].map((w, i) => <span key={i}>{w}</span>)}
        </div>
      </div>

      <section className="sec path" id="path">
        <div className="wrap g">
          <div className="media">
            <div className="fr" id="pfr">
              <img src="/images/about-walk.webp" alt="Dr. Riddhi walking through the clinic corridor" loading="lazy" />
              <img className="alt" src="/images/mogs-2020-award.jpg" alt="" loading="lazy" />
              <span className="yr" id="pyr">2017</span>
            </div>
          </div>
          <div>
            <span className="kick">Her path</span>
            <h2 className="h2">Trained in Mumbai, <em>Germany</em> and the operating theatre</h2>
            <ol className="tl2" id="tl2">
              <span className="fill" id="tlfill"></span>
              <li data-y="2017"><span className="y">2017</span><h3>MBBS</h3><p>Pravara Institute of Medical Sciences, Loni.</p></li>
              <li data-y="2020" data-alt="1"><span className="y">2020</span><h3>First prize, best paper</h3><p>High Risk Obstetrics, 48th Annual Conference of MOGS, Mumbai.</p></li>
              <li data-y="2021"><span className="y">2021</span><h3>DNB, Obstetrics and Gynaecology</h3><p>National Board of Examinations, New Delhi.</p></li>
              <li data-y="2022"><span className="y">2022</span><h3>FMAS and laparoscopy fellowships</h3><p>Training in minimal access (keyhole) surgery.</p></li>
              <li data-y="2023"><span className="y">2023</span><h3>DRM, Reproductive Medicine</h3><p>University of Schleswig-Holstein, Kiel, Germany.</p></li>
              <li data-y="Now"><span className="y">Today</span><h3>Borivali West, Mumbai</h3><p>Gynaecologist and laparoscopic surgeon at Mumbai Gastro-Liver and Gynaec Centre, Monday to Friday.</p></li>
            </ol>
          </div>
        </div>
      </section>

      <section className="sec how">
        <div className="wrap">
          <span className="kick" style={{ color: "var(--blush)" }}>How she works</span>
          <h2 className="h2">Four things you can <em>expect</em></h2>
          <p className="sub">These are the habits patients notice first. They hold for a routine check-up and for surgery alike.</p>
          <div className="pr" data-stagger>
            <div className="c sr"><span className="n">01</span><h3>She hears it all</h3><p>Your whole story first, without rushing to a prescription.</p><svg className="il" viewBox="0 0 64 64"><path d="M14 14h36v24H28l-10 9v-9h-4z" /><path d="M22 24h20M22 30h12" /></svg></div>
            <div className="c sr"><span className="n">02</span><h3>She shows, not just tells</h3><p>Models and simple drawings, so the plan makes sense to you.</p><svg className="il" viewBox="0 0 64 64"><path d="M14 18c5 0 8 2.5 9 7.5 1.4 5.4 1.2 11.6 4.4 16v10h9.2v-10c3.2-4.4 3-10.6 4.4-16 1-5 4-7.5 9-7.5" /><circle cx="12" cy="20" r="3" /><circle cx="52" cy="20" r="3" /></svg></div>
            <div className="c sr"><span className="n">03</span><h3>Tests only when needed</h3><p>Every test is chosen after she examines you, so nothing is repeated or wasted.</p><svg className="il" viewBox="0 0 64 64"><rect x="16" y="10" width="32" height="44" rx="6" /><path d="M24 22h16M24 30h16M24 38h9" /><path d="m36 42 4 4 8-9" /></svg></div>
            <div className="c sr"><span className="n">04</span><h3>The smallest cut that works</h3><p>When surgery is needed, keyhole options are discussed first.</p><svg className="il" viewBox="0 0 64 64"><circle cx="32" cy="34" r="20" /><circle cx="32" cy="31" r="2.6" /><circle cx="23" cy="42" r="2" /><circle cx="41" cy="42" r="2" /><path d="M32 28V6" /></svg></div>
          </div>
        </div>
      </section>

      <section className="sec rec">
        <div className="wrap">
          <div className="shead">
            <div><span className="kick">Recognition and research</span><h2 className="h2">Work that <em>others</em> have noted</h2></div>
            <p className="sub" style={{ margin: 0 }}>Awards and papers are listed as they were given. Titles are shown in full.</p>
          </div>
          <div className="g">
            <div className="card c1 sr"><div className="im"><img src="/images/mogs-2020-award.jpg" alt="Receiving the paper award at MOGS 2020" loading="lazy" /></div><div className="tx"><b>First prize, best paper in High Risk Obstetrics</b><small>48th Annual Conference, MOGS, February 2020</small></div></div>
            <div className="card c2 sr"><div className="im"><img src="/images/mogs-2020-presentation.jpg" alt="Presenting research at a conference" loading="lazy" /></div><div className="tx"><b>Published research, first author</b><small>Indian Journal of Obstetrics and Gynecology</small></div></div>
            <div className="card c3 sr"><span className="big">4</span><div><b>Degrees and fellowships</b><small style={{ color: "rgba(255,255,255,.85)" }}>MBBS, DNB, FMAS and DRM, earned between 2017 and 2023.</small></div></div>
          </div>
        </div>
      </section>

      <section className="sec tr2" style={{ paddingTop: 0 }}>
        <div className="wrap">
          <div className="shead">
            <div><span className="kick">What she treats</span><h2 className="h2">Areas of <em>care</em></h2></div>
            <Link className="btn b-line" href="/treatments/">All treatments <span className="ar" style={{ background: "var(--pink-100)" }}><Icon name="i-arrow" width={16} height={16} /></span></Link>
          </div>
          <div className="grp sr"><h3><small>Periods and hormones</small>Cycle care</h3><div className="chips" data-stagger><span className="chip-s">Heavy periods</span><span className="chip-s">Irregular periods</span><span className="chip-s">Painful periods</span><span className="chip-s">PCOS</span><span className="chip-s">Endometriosis</span><span className="chip-s">Hormone problems</span></div></div>
          <div className="grp sr"><h3><small>Lumps and growths</small>Scans and checks</h3><div className="chips" data-stagger><span className="chip-s">Fibroids</span><span className="chip-s">Ovarian cysts</span><span className="chip-s">Polyps</span><span className="chip-s">Abnormal bleeding</span></div></div>
          <div className="grp sr"><h3><small>Pregnancy plans</small>Before you try</h3><div className="chips" data-stagger><span className="chip-s">Preconception check</span><span className="chip-s">Fertility check for couples</span><span className="chip-s">Repeated miscarriage review</span></div></div>
          <div className="grp sr"><h3><small>Screening and everyday care</small>Stay ahead</h3><div className="chips" data-stagger><span className="chip-s">Pap smear</span><span className="chip-s">HPV vaccine</span><span className="chip-s">Breast check</span><span className="chip-s">Infections</span><span className="chip-s">White discharge</span><span className="chip-s">Urinary problems</span></div></div>
          <div className="grp sr"><h3><small>Surgery and later life</small>When more is needed</h3><div className="chips" data-stagger><span className="chip-s">Laparoscopy</span><span className="chip-s">Hysteroscopy</span><span className="chip-s">Hysterectomy</span><span className="chip-s">Menopause care</span></div></div>
        </div>
      </section>

      <section className="sec online" style={{ paddingTop: 0 }}>
        <div className="wrap">
          <div className="box sr">
            <a className="vid" href={site.socials.youtube} target="_blank" rel="noopener" aria-label="Watch Dr. Riddhi on YouTube">
              <img src="/images/videos-wide.webp" alt="" loading="lazy" />
              <span className="pl"><Icon name="i-play" width={30} height={30} /></span>
            </a>
            <div className="tx">
              <span className="kick">Online</span>
              <h2 className="h2">The questions women feel <em>shy</em> to ask</h2>
              <p className="sub">On YouTube and Instagram she answers one question at a time, in plain words.</p>
              <DevOnly>
                <div className="stats">
                  <div><b><Confirm /></b><small>YouTube subscribers</small></div>
                  <div><b><Confirm /></b><small>Instagram followers</small></div>
                </div>
              </DevOnly>
              <div className="cta">
                <Link className="btn b-brown" href="/learn/">Videos and articles</Link>
                <a className="btn b-line" href={site.socials.instagram} target="_blank" rel="noopener"><Icon name="i-ig" />Instagram</a>
              </div>
            </div>
          </div>
        </div>
      </section>
      <AboutFx />
    </>
  );
}
