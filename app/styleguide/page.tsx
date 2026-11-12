import type { Metadata } from "next";
import { pageMeta } from "@/lib/meta";
import Image from "next/image";
import { Crumbs } from "@/components/chrome";
import Icon from "@/components/Icon";
import { SPRITE_IDS } from "@/components/Sprite";
import { site } from "@/lib/site-config";

export const metadata: Metadata = pageMeta({
  path: "/styleguide/",
  title: "Style guide",
  description:
    "Colours, type, buttons and components for the Dr. Riddhi D. Shah website.",
  noindex: true,
});

const SWATCHES: [string, string, string][] = [
  ["Brown", "--brown", "#5E2A2C"],
  ["Brown deep", "--brown-deep", "#3B1B1D"],
  ["Brown ink", "--brown-ink", "#2E1416"],
  ["Pink", "--pink", "#B93A69"],
  ["Pink ink", "--pink-ink", "#9C2D57"],
  ["Blush", "--blush", "#E9A9BF"],
  ["Halo", "--halo", "#EDBCCD"],
  ["Pink 100", "--pink-100", "#F8E6ED"],
  ["Cream", "--cream", "#FBF7F3"],
  ["Sand", "--sand", "#F1E7DF"],
  ["Ink", "--ink", "#2B1E24"],
  ["Ink 2", "--ink-2", "#6B5A62"],
  ["Line", "--line", "#E6D8CF"],
];

export default function Styleguide() {
  return (
    <>
      <span data-no-final hidden />
      <div className="wrap sg">
        <Crumbs
          items={[{ label: "Home", href: "/" }, { label: "Style guide" }]}
        />
        <span className="kick" style={{ marginTop: 30 }}>
          Design system
        </span>
        <h1 className="h1i" style={{ marginTop: 16 }}>
          Style <em>guide</em>
        </h1>
        <p className="lead">
          Every colour, font and component used on the site. Flat colours only,
          no gradients, no arch or window shapes.
        </p>

        <section>
          <h2 className="t">Colours</h2>
          <p className="note">
            Pink is for actions (buttons, links, highlights). Brown is the brand
            colour from the logo, used for headings and dark sections. Cream is
            the page background.
          </p>
          <div className="sw">
            {SWATCHES.map(([name, token, hex]) => (
              <div key={token}>
                <i style={{ background: hex }} />
                <b>{name}</b>
                <code>
                  {hex} · var({token})
                </code>
              </div>
            ))}
          </div>
        </section>

        <section>
          <h2 className="t">Type</h2>
          <p className="note">
            Figtree for headings and text. Instrument Serif italic for the
            accent word in each heading and for card titles.
          </p>
          <div className="ty2">
            <div>
              <small>
                Hero H1 · Figtree 500 · clamp(46px, 6.6vw, 104px) · −0.05em
              </small>
              <span className="h1i" style={{ fontSize: 72 }}>
                Care for every <em>stage</em>
              </span>
            </div>
            <div>
              <small>Section H2 · Figtree 500 · clamp(38px, 4.6vw, 68px)</small>
              <span className="h2" style={{ margin: 0 }}>
                Your questions, <em>answered</em>
              </span>
            </div>
            <div>
              <small>Card title · Instrument Serif 400 · 26 to 34px</small>
              <span
                style={{
                  font: "400 30px/1.1 var(--serif)",
                  color: "var(--brown)",
                }}
              >
                Periods and PCOS
              </span>
            </div>
            <div>
              <small>Kicker · Figtree 600 · 11.5px · 0.24em caps</small>
              <span className="kick">What she treats</span>
            </div>
            <div>
              <small>Body · Figtree 400 · 17px / 1.65</small>
              <span>
                Dr. Riddhi decides the right tests and treatment for you after
                she examines you.
              </span>
            </div>
            <div>
              <small>Small · Figtree 400 · 13.5 to 15px</small>
              <span style={{ fontSize: 14, color: "var(--ink-2)" }}>
                Monday to Friday · 10 am to 12 pm and 4 pm to 6 pm
              </span>
            </div>
          </div>
        </section>

        <section>
          <h2 className="t">Buttons and chips</h2>
          <p className="note">
            Pill buttons, 52px tall (48px minimum tap size). The arrow turns on
            hover.
          </p>
          <div className="row">
            <a className="btn b-pink" href="#">
              Book a consultation
              <span className="ar">
                <Icon id="i-arrow" style={{ width: 16, height: 16 }} />
              </span>
            </a>
            <a className="btn b-brown" href="#">
              Secondary
            </a>
            <a className="btn b-line" href="#">
              <Icon id="i-phone" />
              Call
            </a>
            <span className="chip-s">Chip</span>
            <button className="chip-s" aria-pressed="true">
              Active filter
            </button>
            <span className="live">
              <span className="dot js-dot" />
              <span className="js-live">Open now</span>
            </span>
          </div>
          <div className="row dark" style={{ marginTop: 14 }}>
            <a className="btn b-cream" href="#">
              On dark
            </a>
            <a className="btn b-ghost" href="#">
              <Icon id="i-wa" />
              WhatsApp
            </a>
          </div>
        </section>

        <section>
          <h2 className="t">Components</h2>
          <p className="note">Shared blocks every medical page uses.</p>
          <div style={{ display: "grid", gap: 14, maxWidth: 760 }}>
            <div className="revbox">
              <Image
                src="/images/halo-portrait-192.webp"
                alt="Dr. Riddhi D. Shah"
                width={56}
                height={56}
              />
              <div>
                <b>Medically reviewed by {site.doctor}</b>
                {site.qualifications} · Last reviewed {site.reviewed}
              </div>
            </div>
            <div className="urgent">
              <span className="ui">
                <Icon id="i-alert" />
              </span>
              <div>
                <h3>When to get help fast</h3>
                <ul>
                  <li>Very heavy bleeding</li>
                  <li>Sudden, severe pain</li>
                </ul>
                <p>Medical emergency? Call 108 or 112.</p>
              </div>
            </div>
            <div className="qa">
              <details open>
                <summary>
                  FAQ accordion
                  <i>
                    <Icon id="i-plus" style={{ width: 18, height: 18 }} />
                  </i>
                </summary>
                <p>Answers of 40 to 80 words, in plain words.</p>
              </details>
            </div>
            <div className="fld">
              <label htmlFor="x">Form field</label>
              <input id="x" placeholder="Your name" />
            </div>
          </div>
        </section>

        <section>
          <h2 className="t">Icons</h2>
          <p className="note">
            Line icons on a 24 grid (UI) and 48 grid (care illustrations), 1.6
            to 1.7 stroke, round caps. All live in one SVG sprite.
          </p>
          <div className="icons">
            {SPRITE_IDS.map((id) => (
              <div key={id}>
                <svg className={id.startsWith("c-") ? "l" : undefined}>
                  <use href={`#${id}`} />
                </svg>
                {id}
              </div>
            ))}
          </div>
        </section>

        <section>
          <h2 className="t">Motion</h2>
          <p className="note">
            Easing cubic-bezier(.2,.8,.2,1). Headings rise line by line on load;
            sections fade up on scroll; illustrations draw their strokes; tiles
            wipe up with clip-path. Everything is switched off for users who ask
            for reduced motion.
          </p>
        </section>

        <section>
          <h2 className="t">Rules</h2>
          <div className="rules">
            <div className="y">
              <b>Do</b>
              Flat colour blocks · rounded rectangles (24 to 40px corners) and
              circles · real photos or approved AI images · emergency line on
              every page · reviewer box on medical pages · CONFIRM tags for
              unverified facts
            </div>
            <div className="n">
              <b>Don&apos;t</b>
              Gradients · arch or window shapes · testimonials or review quotes
              · ratings or patient counters · prices or offers · &quot;best&quot;
              claims · stock-looking text on images
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
