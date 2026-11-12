import type { Metadata } from "next";
import { pageMeta } from "@/lib/meta";
import { notFound } from "next/navigation";
import Link from "next/link";
import Icon from "@/components/Icon";
import TreatmentPage from "@/components/TreatmentPage";
import { GROUPS, TREATMENTS } from "@/lib/treatments";
import { TREATMENT_PAGES, TreatmentBody, REVIEWED_BYLINE, PCOS_LEAD } from "@/lib/treatment-pages";
import { PCOS_FAQS } from "@/lib/faqs";
import { site } from "@/lib/site-config";
import "../treatment.css";

const PAGES = TREATMENTS.filter((t) => t.group !== "surg");

export function generateStaticParams() {
  return PAGES.map((t) => ({ slug: t.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const t = PAGES.find((x) => x.slug === slug);
  if (!t) return {};
  const path = `/treatments/${slug}/`;
  if (t.slug === "pcos")
    return pageMeta({
      path,
      title: "PCOS treatment in Borivali | Dr. Riddhi D. Shah",
      description:
        "PCOS care by Dr. Riddhi D. Shah, gynaecologist in Borivali West. What PCOS is, signs to look for, what happens at your visit and how to prepare.",
    });
  const def = TREATMENT_PAGES[t.slug];
  if (def) return pageMeta({ path, title: def.meta.title, description: def.meta.description });
  return pageMeta({ path, title: `${t.name} | Dr. Riddhi D. Shah`, description: t.desc });
}

/* ---- PCOS badge art (approved animated ovary illustration) ---- */
const PcosArt = (
  <>
    <span className="rg"><i></i></span>
    <span className="rg rg2"><i></i></span>
    <svg className="ov" viewBox="0 0 200 140" fill="none" strokeLinecap="round">
      <ellipse cx="100" cy="72" rx="82" ry="58" fill="#EDBCCD" stroke="none" />
      <ellipse cx="100" cy="72" rx="82" ry="58" stroke="#FBF7F3" strokeWidth="2" />
      <circle className="fol" cx="62" cy="56" r="13" style={{ animationDelay: "0s" }} />
      <circle className="fol" cx="100" cy="40" r="11" style={{ animationDelay: ".4s" }} />
      <circle className="fol" cx="138" cy="56" r="13" style={{ animationDelay: ".8s" }} />
      <circle className="fol" cx="150" cy="92" r="11" style={{ animationDelay: "1.2s" }} />
      <circle className="fol" cx="112" cy="104" r="12" style={{ animationDelay: "1.6s" }} />
      <circle className="fol" cx="72" cy="100" r="11" style={{ animationDelay: "2s" }} />
      <circle className="fol" cx="48" cy="86" r="9" style={{ animationDelay: "2.4s" }} />
      <circle cx="102" cy="72" r="16" fill="#FBF7F3" stroke="none" />
    </svg>
    <span className="lbl2"><small>PCOS</small>Small follicles, not true cysts</span>
  </>
);

const REVIEWED = (
  <>
    Medically reviewed by <b>Dr. Riddhi D. Shah</b> · Last reviewed {site.reviewed}
  </>
);

function PcosBody() {
  return (
    <>
      <h2 id="what">What PCOS is</h2>
      <div className="answer sr">
        <span className="lbl">In short</span>
        <p>PCOS is a long-term hormone pattern, not a disease you caught. It cannot be switched off, but most symptoms can be controlled well, and many women with PCOS get pregnant.</p>
      </div>
      <p style={{ marginTop: 22 }}>In PCOS the ovaries make more male-type hormone than usual, and eggs may not be released every month. This is why periods become irregular. On a scan the ovaries can show many small follicles. These are often called cysts, but they are not the kind of cyst that needs surgery.</p>
      <p>PCOS is also linked to how the body handles insulin. That is why weight, sleep and activity make a real difference to symptoms.</p>

      <h2 id="signs">Signs to look for</h2>
      <p>You may have one or several of these. Having them does not mean you have PCOS. Only an examination and tests can tell.</p>
      <div className="signs" data-stagger>
        <div className="s sr"><svg viewBox="0 0 48 48"><circle cx="24" cy="24" r="16" /><path d="M24 8a16 16 0 0 1 16 16" strokeDasharray="3 4" /><path d="M24 24V14" /></svg><b>Irregular periods</b><small>Cycles longer than 35 days, or fewer than 8 a year.</small></div>
        <div className="s sr"><svg viewBox="0 0 48 48"><circle cx="24" cy="22" r="13" /><circle cx="19" cy="20" r="1.6" /><circle cx="28" cy="25" r="1.6" /><circle cx="22" cy="28" r="1.2" /><path d="M18 40c2-2 4-3 6-3s4 1 6 3" /></svg><b>Acne</b><small>Especially along the jaw and chin.</small></div>
        <div className="s sr"><svg viewBox="0 0 48 48"><path d="M14 30c3-4 7-6 10-6s7 2 10 6" /><path d="M18 24v-5M24 22v-6M30 24v-5" /></svg><b>Extra hair growth</b><small>On the face, chest or tummy.</small></div>
        <div className="s sr"><svg viewBox="0 0 48 48"><circle cx="24" cy="28" r="11" /><path d="M15 19l-2-4M20 16l-1-5M28 16l1-5M33 19l2-4" strokeDasharray="2 3" /></svg><b>Thinning hair</b><small>On the top of the head.</small></div>
        <div className="s sr"><svg viewBox="0 0 48 48"><path d="M10 34h28" /><path d="M14 34V20M24 34V14M34 34V24" /></svg><b>Weight changes</b><small>Weight gain, or finding it hard to lose weight.</small></div>
        <div className="s sr"><svg viewBox="0 0 48 48"><ellipse cx="24" cy="26" rx="11" ry="13" /><circle cx="24" cy="26" r="4" /><path d="M36 10l1 2.6 2.6 1-2.6 1L36 17l-1-2.4-2.6-1 2.6-1z" /></svg><b>Trouble conceiving</b><small>When eggs are not released regularly.</small></div>
      </div>

      <h2 id="visit">What happens at the clinic</h2>
      <ol className="stp sr">
        <li><span className="bar"><i></i></span><b>Your story</b><span>Periods, skin, weight, and plans for pregnancy.</span></li>
        <li><span className="bar"><i style={{ transitionDelay: ".25s" }}></i></span><b>Examination</b><span>Done gently, with a female attendant present.</span></li>
        <li><span className="bar"><i style={{ transitionDelay: ".5s" }}></i></span><b>Tests if needed</b><span>Blood tests for hormones and sugar, and an ultrasound.</span></li>
        <li><span className="bar"><i style={{ transitionDelay: ".75s" }}></i></span><b>Your plan</b><span>Lifestyle steps, medicines if needed, and when to come back.</span></li>
      </ol>
      <p style={{ marginTop: 22 }}>Dr. Riddhi decides the right tests and treatment for you after examining you. If you want to get pregnant soon, the plan is built around that.</p>

      <h2 id="prep">How to prepare</h2>
      <p>Tick these off before you come. Nothing is saved; it is just for you.</p>
      <ul className="check" style={{ padding: 0 }}>
        <li><label><input type="checkbox" /><span>Dates of your last three periods, or a period app</span></label></li>
        <li><label><input type="checkbox" /><span>Old blood reports and ultrasound reports</span></label></li>
        <li><label><input type="checkbox" /><span>A list of medicines and supplements you take</span></label></li>
        <li><label><input type="checkbox" /><span>Your questions, written down</span></label></li>
      </ul>

      <h2 id="after">After your visit</h2>
      <p>Most reports are explained at a short follow-up visit. PCOS is checked over months, not days, so you will be told when to return and what to watch for. You can send reports on WhatsApp to ask whether you need to come in sooner.</p>

      <div className="urgent sr" id="urgent">
        <span className="ui"><Icon name="i-alert" /></span>
        <div>
          <h3>When to get help fast</h3>
          <ul>
            <li>Very heavy bleeding, soaking a pad every hour</li>
            <li>Sudden, severe pain in the lower tummy</li>
            <li>Fainting or feeling dizzy with bleeding</li>
          </ul>
          <p>Medical emergency? Call 108 or 112.</p>
        </div>
      </div>

      <h2 id="faq">Questions about PCOS</h2>
      <div className="qa">
        {PCOS_FAQS.map((f, i) => (
          <details key={f.q} open={i === 0}>
            <summary>{f.q}<i><Icon name="i-plus" width={18} height={18} /></i></summary>
            <p>{f.a}</p>
          </details>
        ))}
      </div>

      <div className="revbox">
        <img src="/images/halo-portrait.webp" alt="" />
        <div>
          <b>Medically reviewed by Dr. Riddhi D. Shah</b>
          MBBS, DNB (OBGY), FMAS, DRM · Last reviewed {site.reviewed}. This page is for general information and does not replace a consultation.
        </div>
      </div>
    </>
  );
}

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const t = PAGES.find((x) => x.slug === slug);
  if (!t) notFound();
  const groupLabel = GROUPS[t.group];

  if (t.slug === "pcos") {
    return (
      <TreatmentPage
        groupLabel={groupLabel}
        name="PCOS"
        h1={["PCOS, explained", <em key="e">and managed</em>]}
        lead={PCOS_LEAD}
        ctaLabel="Book a PCOS consultation"
        byline={REVIEWED}
        art={PcosArt}
        strip={[
          { icon: "i-clock", small: "First visit", big: "About 20 to 30 minutes" },
          { icon: "i-doc", small: "Tests", big: "Chosen after the exam: blood tests, ultrasound" },
          { icon: "i-cal", small: "Best day to come", big: "Day 2 to 5 of your period, if possible" },
          { icon: "i-wa", small: "Follow-up", big: "In person, or by WhatsApp for reports" },
        ]}
        toc={[
          { id: "what", label: "What PCOS is" },
          { id: "signs", label: "Signs to look for" },
          { id: "visit", label: "At the clinic" },
          { id: "prep", label: "How to prepare" },
          { id: "after", label: "After your visit" },
          { id: "urgent", label: "When to get help fast" },
          { id: "faq", label: "Questions" },
        ]}
        related={[
          { href: "/treatments/period-problems/", icon: "c-drop", title: "Period problems", sub: "Heavy, irregular or painful periods." },
          { href: "/treatments/planning-a-pregnancy/", icon: "c-egg", title: "Planning a pregnancy", sub: "A check before you start trying." },
          { href: "/learn/pcos-myths/", icon: "c-ask", title: "Article: PCOS myths", sub: "Five things women are often told about PCOS." },
        ]}
        path="/treatments/pcos/"
        meta={{
          title: "PCOS treatment in Borivali | Dr. Riddhi D. Shah",
          description:
            "PCOS care by Dr. Riddhi D. Shah, gynaecologist in Borivali West. What PCOS is, signs to look for, what happens at your visit and how to prepare.",
        }}
        faqs={PCOS_FAQS}
      >
        <PcosBody />
      </TreatmentPage>
    );
  }

  const def = TREATMENT_PAGES[t.slug];
  if (!def) notFound();

  return (
    <TreatmentPage
      groupLabel={groupLabel}
      name={t.name}
      h1={def.h1}
      lead={def.lead}
      ctaLabel={def.ctaLabel}
      byline={REVIEWED_BYLINE}
      art={
        <>
          <span className="rg"><i></i></span>
          <span className="rg rg2"><i></i></span>
          <svg className="ov" viewBox="0 0 48 48" style={{ width: "46%", color: "var(--blush)", fill: "none", stroke: "currentColor", strokeWidth: 1.2, strokeLinecap: "round", strokeLinejoin: "round" }}>
            <use href={`#${t.icon}`} />
          </svg>
          <span className="lbl2"><small>{groupLabel}</small>{def.artLabel}</span>
        </>
      }
      strip={def.strip}
      toc={def.toc}
      related={def.related}
      path={`/treatments/${slug}/`}
      meta={def.meta}
      faqs={def.faqs}
    >
      <TreatmentBody d={def} />
    </TreatmentPage>
  );
}
