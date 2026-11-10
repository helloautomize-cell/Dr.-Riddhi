import type { Metadata } from "next";
import Link from "next/link";
import Icon from "@/components/Icon";
import Confirm from "@/components/Confirm";
import ContactFx from "@/components/ContactFx";
import { site } from "@/lib/site-config";
import "./contact.css";

export const metadata: Metadata = {
  title: "Book a consultation | Dr. Riddhi D. Shah, Borivali West",
  description:
    "Book a gynaecology consultation with Dr. Riddhi D. Shah in Borivali West, Mumbai. Call, WhatsApp or send the booking form. Mon to Fri.",
};

export default function ContactPage() {
  return (
    <>
      <section className="ch">
        <div className="wrap">
          <nav className="crumbs rv" aria-label="Breadcrumb">
            <Link href="/">Home</Link><i></i><span>Contact and book</span>
          </nav>
          <div className="g">
            <div className="formc rv" style={{ "--d": 1 } as React.CSSProperties} id="book">
              <span className="kick">Book a consultation</span>
              <h1 className="h1i" style={{ marginTop: 16 }}>
                <span className="ln"><span style={{ "--d": 1 } as React.CSSProperties}>Tell us when</span></span>
                <span className="ln"><span style={{ "--d": 2 } as React.CSSProperties}><em>suits you</em></span></span>
              </h1>
              <p className="lead" style={{ fontSize: 16 }}>
                Send this form and the clinic will call or WhatsApp you to confirm a time. Nothing is
                booked until they confirm.
              </p>
              <form id="bf" noValidate>
                <div className="fld"><label htmlFor="fn">Your name</label><input id="fn" name="name" autoComplete="name" required /></div>
                <div className="fld"><label htmlFor="fp">Mobile number</label><input id="fp" name="phone" type="tel" inputMode="tel" autoComplete="tel" placeholder="+91" required /></div>
                <div className="fld full">
                  <label htmlFor="fr">Reason for visit</label>
                  <select id="fr" name="reason" defaultValue="Not sure, I'd like to talk">
                    <option>Not sure, I&apos;d like to talk</option>
                    <option>Period problems</option>
                    <option>PCOS</option>
                    <option>Fibroids or ovarian cysts</option>
                    <option>Planning a pregnancy</option>
                    <option>Pap smear or HPV vaccine</option>
                    <option>Menopause</option>
                    <option>Keyhole surgery opinion</option>
                    <option>Other</option>
                  </select>
                </div>
                <div className="fld full"><label>Preferred day</label><div className="pick" id="days"></div></div>
                <div className="fld full">
                  <label>Preferred time</label>
                  <div className="pick two">
                    <label><input type="radio" name="slot" value="am" defaultChecked /><span>Morning<small>10 am to 12 pm</small></span></label>
                    <label><input type="radio" name="slot" value="pm" /><span>Evening<small>4 pm to 6 pm</small></span></label>
                  </div>
                </div>
                <div className="fld full">
                  <label htmlFor="fm">Anything you want her to know <span style={{ fontWeight: 500, color: "var(--ink-2)" }}>(optional)</span></label>
                  <textarea id="fm" name="msg" placeholder="Please do not share detailed medical history here. You can tell her at the visit."></textarea>
                </div>
                <label className="consent full"><input type="checkbox" required /><span>I agree that the clinic may contact me on this number about my appointment, as described in the <Link href="/legal/privacy-policy/">privacy policy</Link>.</span></label>
                <div className="sendrow full">
                  <button className="btn b-pink send" type="submit">Send booking request <span className="ar"><Icon name="i-arrow" className="fly" width={16} height={16} /></span></button>
                  <small>Usually confirmed within working hours. <Confirm /></small>
                </div>
              </form>
            </div>
            <div className="side2">
              <div className="sc2 rv" style={{ "--d": 3 } as React.CSSProperties}>
                <span className="live"><span className="dot js-dot"></span><span className="js-live">Opens today at 10 am</span></span>
                <h2>Prefer to call?</h2>
                <div className="rows">
                  {site.phones.map((p) => (
                    <a href={p.href} key={p.href}>
                      <span className="ci"><Icon name="i-phone" /></span>
                      <span>{p.label}<small>Mobile</small></span>
                    </a>
                  ))}
                  <a href="tel:+912247454296">
                    <span className="ci"><Icon name="i-phone" /></span>
                    <span>022 4745 4296<small>Landline <Confirm /></small></span>
                  </a>
                  <a href={`mailto:${site.email}`}>
                    <span className="ci"><Icon name="i-mail" /></span>
                    <span>{site.email}<small>Reports and general questions</small></span>
                  </a>
                  <div>
                    <span className="ci"><Icon name="i-clock" /></span>
                    <span>Mon to Fri · 10 am to 12 pm · 4 pm to 6 pm<small>Saturday and Sunday closed</small></span>
                  </div>
                </div>
              </div>
              <a className="wa rv" style={{ "--d": 4 } as React.CSSProperties} href={`https://wa.me/${site.whatsappNumber}?text=Hello%2C%20I%27d%20like%20to%20book%20a%20consultation%20with%20Dr.%20Riddhi.`} target="_blank" rel="noopener">
                <span className="wi"><Icon name="i-wa" width={28} height={28} /></span>
                <span><b>WhatsApp the clinic</b><small>A message is ready to send <Confirm label="confirm no." /></small></span>
                <span className="ar2"><Icon name="i-arrow" /></span>
              </a>
              <div className="emc rv" style={{ "--d": 5 } as React.CSSProperties}>
                <Icon name="i-alert" />
                <div><b>Medical emergency? Call 108 or 112.</b><small>Do not use this form or WhatsApp for emergencies.</small></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="sec visit" id="visit">
        <div className="wrap">
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
          <div className="vcard sr">
            <span className="kick">Find the clinic</span>
            <h2>Mumbai Gastro-Liver and <em>Gynaec</em> Centre</h2>
            <p className="addr">{site.address}</p>
            <div className="week" id="week"></div>
            <div className="vbtn">
              <a className="btn b-pink" href={site.mapsUrl} target="_blank" rel="noopener">Get directions <span className="ar"><Icon name="i-arrow" width={16} height={16} /></span></a>
              <Link className="btn b-line" href="/your-first-visit/">Your first visit</Link>
            </div>
          </div>
        </div>
      </section>
      <ContactFx />
    </>
  );
}
