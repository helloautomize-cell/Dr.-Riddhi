import type { ReactNode } from "react";
import Icon from "@/components/Icon";
import Confirm from "@/components/Confirm";
import type { RelItem, StripItem, TocItem } from "@/components/TreatmentPage";

/**
 * Full copy for the nine non-surgical treatment pages (PCOS lives
 * inline in the route file as the approved sample). Every page renders
 * through the same approved template sections:
 * what → signs → visit → prep → after → urgent → faqs → reviewer box.
 * Facts that need clinic sign-off are marked with <Confirm>.
 */

export interface SignItem {
  icon: string;
  t: string;
  s: string;
}
export interface StepItem {
  b: string;
  s: string;
}
export interface FaqItem {
  q: string;
  a: string;
}

export interface TreatmentDef {
  meta: { title: string; description: string };
  h1: [ReactNode, ReactNode];
  lead: string;
  ctaLabel: string;
  artLabel: string;
  strip: StripItem[];
  toc: TocItem[];
  what: { h: string; short: string; paras: string[] };
  signs: { h: string; intro: string; items: SignItem[] };
  visit: { steps: StepItem[]; after: string };
  prep: { intro: string; items: string[] };
  after: string;
  urgent: { h: string; items: string[]; note?: ReactNode };
  faqs: FaqItem[];
  related: RelItem[];
}

const REV = (
  <>
    <div className="revbox">
      <img src="/images/halo-portrait.webp" alt="" />
      <div>
        <b>Medically reviewed by Dr. Riddhi D. Shah</b>
        MBBS, DNB (OBGY), FMAS, DRM · Last reviewed <Confirm label="confirm date" />. This page is for
        general information and does not replace a consultation.
      </div>
    </div>
  </>
);

/** PCOS page lead — the page lives inline in app/treatments/[slug]/page.tsx
 *  (approved sample), so its lead is shared from here for llms-full.txt. */
export const PCOS_LEAD =
  "PCOS (polycystic ovary syndrome) is a common hormone condition that can cause irregular periods, acne, extra hair growth and trouble getting pregnant. At your visit Dr. Riddhi listens to your symptoms, examines you, and chooses only the tests you need. Then she explains a plan that fits your life and your plans for pregnancy.";

export const REVIEWED_BYLINE = (
  <>
    Medically reviewed by <b>Dr. Riddhi D. Shah</b> · Last reviewed <Confirm label="confirm date" />
  </>
);

/** Renders one treatment page body from typed section data. */
export function TreatmentBody({ d }: { d: TreatmentDef }) {
  return (
    <>
      <h2 id="what">{d.what.h}</h2>
      <div className="answer sr">
        <span className="lbl">In short</span>
        <p>{d.what.short}</p>
      </div>
      {d.what.paras.map((p, i) => (
        <p key={i} style={i === 0 ? { marginTop: 22 } : undefined}>{p}</p>
      ))}

      <h2 id="signs">{d.signs.h}</h2>
      <p>{d.signs.intro}</p>
      <div className="signs" data-stagger>
        {d.signs.items.map((s, i) => (
          <div className="s sr" key={i}>
            <svg viewBox="0 0 48 48"><use href={`#${s.icon}`} /></svg>
            <b>{s.t}</b>
            <small>{s.s}</small>
          </div>
        ))}
      </div>

      <h2 id="visit">What happens at the clinic</h2>
      <ol className="stp sr">
        {d.visit.steps.map((s, i) => (
          <li key={i}>
            <span className="bar"><i style={{ transitionDelay: `${i * 0.25}s` }}></i></span>
            <b>{s.b}</b>
            <span>{s.s}</span>
          </li>
        ))}
      </ol>
      <p style={{ marginTop: 22 }}>{d.visit.after}</p>

      <h2 id="prep">How to prepare</h2>
      <p>{d.prep.intro}</p>
      <ul className="check" style={{ padding: 0 }}>
        {d.prep.items.map((p, i) => (
          <li key={i}><label><input type="checkbox" /><span>{p}</span></label></li>
        ))}
      </ul>

      <h2 id="after">After your visit</h2>
      <p>{d.after}</p>

      <div className="urgent sr" id="urgent">
        <span className="ui"><Icon name="i-alert" /></span>
        <div>
          <h3>{d.urgent.h}</h3>
          <ul>
            {d.urgent.items.map((u, i) => <li key={i}>{u}</li>)}
          </ul>
          <p>{d.urgent.note ?? <>Medical emergency? Call 108 or 112.</>}</p>
        </div>
      </div>

      <h2 id="faq">Questions</h2>
      <div className="qa">
        {d.faqs.map((f, i) => (
          <details key={i} open={i === 0}>
            <summary>{f.q}<i><Icon name="i-plus" width={18} height={18} /></i></summary>
            <p>{f.a}</p>
          </details>
        ))}
      </div>
      {REV}
    </>
  );
}

const TOC = [
  { id: "what", label: "What it is" },
  { id: "signs", label: "Signs to look for" },
  { id: "visit", label: "At the clinic" },
  { id: "prep", label: "How to prepare" },
  { id: "after", label: "After your visit" },
  { id: "urgent", label: "When to get help fast" },
  { id: "faq", label: "Questions" },
];

const EMERG = (items: string[]) => ({
  h: "When to get help fast",
  items,
  note: undefined as ReactNode,
});

export const TREATMENT_PAGES: Record<string, TreatmentDef> = {
  "period-problems": {
    meta: {
      title: "Period problems: heavy, irregular, painful | Dr. Riddhi D. Shah",
      description: "Care for heavy, irregular or painful periods by Dr. Riddhi D. Shah, gynaecologist in Borivali West. What is normal, what is not, and what happens at your visit.",
    },
    h1: ["Period problems,", <em key="e">taken seriously</em>],
    lead: "Heavy bleeding, cycles that come and go, pain that stops your day. Period problems are common and usually treatable once the cause is found. At your visit Dr. Riddhi listens to your history, examines you, and explains what your periods are telling you.",
    ctaLabel: "Book a consultation",
    artLabel: "Period problems",
    strip: [
      { icon: "i-clock", small: "First visit", big: <>About 20 to 30 minutes <Confirm /></> },
      { icon: "i-doc", small: "Tests", big: "Blood tests and ultrasound, only if needed" },
      { icon: "i-cal", small: "Best day to come", big: "Any day; track your cycle dates if you can" },
      { icon: "i-wa", small: "Follow-up", big: "In person, or by WhatsApp for reports" },
    ],
    toc: TOC,
    what: {
      h: "What counts as a period problem",
      short: "A normal cycle is roughly 21 to 35 days, with bleeding that settles in under a week and does not stop your life. Anything far outside that, or new for you, is worth a check.",
      paras: [
        "Periods that are very heavy, very painful, irregular or absent can have many causes: hormones, PCOS, thyroid changes, fibroids, adenomyosis or endometriosis. Some are simple to treat, some need watching, and a few need surgery.",
        "The pattern matters more than any single period. That is why the first thing Dr. Riddhi asks about is your cycle history, not just your last period.",
      ],
    },
    signs: {
      h: "Signs to look for",
      intro: "One of these alone may not mean a problem. Several together, or a sudden change, deserve a check.",
      items: [
        { icon: "c-drop", t: "Heavy bleeding", s: "Soaking a pad in under two hours, or clots often." },
        { icon: "i-cal", t: "Irregular cycles", s: "Shorter than 21 days, longer than 35, or skipping months." },
        { icon: "i-alert", t: "Pain that limits you", s: "Pain that stops work, school or sleep despite painkillers." },
        { icon: "c-cycle", t: "Bleeding between periods", s: "Spotting mid-cycle or after sex, more than once." },
        { icon: "i-clock", t: "Bleeding for over a week", s: "Periods that run past seven days regularly." },
        { icon: "c-ask", t: "A change in your pattern", s: "Periods that used to be regular and are not any more." },
      ],
    },
    visit: {
      steps: [
        { b: "Your story", s: "Cycle dates, flow, pain, medicines and other symptoms." },
        { b: "Examination", s: "Done gently, with a female attendant present." },
        { b: "Tests if needed", s: "Blood tests, thyroid check or an ultrasound, as indicated." },
        { b: "Your plan", s: "What is causing it, the options, and when to review." },
      ],
      after: "Treatment ranges from simple medicines taken during your period, to hormone options, to procedures for fibroids or polyps when that is the cause. Dr. Riddhi explains each option before you choose.",
    },
    prep: {
      intro: "Tick these off before you come. Nothing is saved; it is just for you.",
      items: [
        "Dates of your last three periods, or a period app",
        "How many pads you use on the heaviest days",
        "Old blood reports and ultrasound reports",
        "A list of medicines and supplements you take",
      ],
    },
    after: "Most period problems are reviewed after a few cycles, so you will be told when to return and what change to expect. If bleeding is heavy and ongoing, iron levels and anaemia are checked too.",
    urgent: EMERG([
      "Soaking a pad every hour for several hours",
      "Bleeding with dizziness, weakness or fainting",
      "Severe lower tummy pain that is new",
    ]),
    faqs: [
      { q: "Is a heavy period always a problem?", a: "Not always, but bleeding that soaks protection quickly, passes large clots or leaves you tired and breathless should be checked. Anaemia from heavy periods is common and treatable." },
      { q: "Can painful periods be normal?", a: "Mild cramping is common. Pain that keeps you in bed, needs strong painkillers every month, or gets worse over the years can point to endometriosis or another cause worth looking for." },
      { q: "Will I need an ultrasound?", a: "Often yes, because it is the quickest way to see fibroids, cysts and the womb lining. It is advised only when the findings would change your plan." },
      { q: "Do I need to come during my period?", a: "No. You can come on any day. Some blood tests are timed to the cycle, and the clinic will tell you the right day when you book." },
    ],
    related: [
      { href: "/treatments/pcos/", icon: "c-ovary", title: "PCOS", sub: "A common cause of irregular periods." },
      { href: "/treatments/fibroids/", icon: "c-fibroid", title: "Fibroids", sub: "A common cause of heavy periods." },
      { href: "/learn/heavy-periods/", icon: "c-drop", title: "Article: How heavy is too heavy?", sub: "Simple signs your period needs a check." },
    ],
  },

  endometriosis: {
    meta: {
      title: "Endometriosis care in Borivali | Dr. Riddhi D. Shah",
      description: "Endometriosis care by Dr. Riddhi D. Shah, gynaecologist in Borivali West. Painful periods, pain with sex and fertility concerns — what it is and how it is treated.",
    },
    h1: ["Endometriosis,", <em key="e">heard and treated</em>],
    lead: "Endometriosis is a condition where tissue like the womb lining grows outside the womb. It can cause severe period pain, pain with sex, bowel or bladder pain and trouble conceiving. It often takes years to be taken seriously. Here, it is taken seriously from the first visit.",
    ctaLabel: "Book a consultation",
    artLabel: "Endometriosis",
    strip: [
      { icon: "i-clock", small: "First visit", big: <>About 20 to 30 minutes <Confirm /></> },
      { icon: "i-doc", small: "Tests", big: "Ultrasound; laparoscopy if surgery is being considered" },
      { icon: "i-cal", small: "Best day to come", big: "Any day; a pain diary helps" },
      { icon: "i-wa", small: "Follow-up", big: "In person, or by WhatsApp for reports" },
    ],
    toc: TOC,
    what: {
      h: "What endometriosis is",
      short: "Endometriosis means tissue similar to the womb lining grows where it should not, on the ovaries, tubes or pelvic lining. Each period, this tissue bleeds too, causing pain and scarring.",
      paras: [
        "It is a real, physical condition, not a low pain threshold and not in your head. It affects about one in ten women, and it can show up as painful periods, pain with sex, painful bowel movements or difficulty getting pregnant.",
        "It cannot be fully seen on a scan in every case. Some endometriosis, like chocolate cysts on the ovaries, shows on ultrasound. The only certain way to confirm it is laparoscopy, which is also how it can be treated.",
      ],
    },
    signs: {
      h: "Signs to look for",
      intro: "Endometriosis looks different in different women. These are the patterns most often linked to it.",
      items: [
        { icon: "i-alert", t: "Severe period pain", s: "Pain that painkillers barely touch, month after month." },
        { icon: "i-heart", t: "Pain with sex", s: "Deep pain during or after intercourse." },
        { icon: "c-cycle", t: "Pain outside periods", s: "Pelvic pain on ordinary days, not just during bleeding." },
        { icon: "c-endo", t: "Bowel or bladder pain", s: "Painful motions or urination around your period." },
        { icon: "c-egg", t: "Trouble conceiving", s: "Endometriosis is found in many women being checked for fertility." },
        { icon: "i-doc", t: "A cyst on a scan", s: "A chocolate cyst (endometrioma) seen on ultrasound." },
      ],
    },
    visit: {
      steps: [
        { b: "Your story", s: "Pain pattern, periods, sex, bowel habits and fertility plans." },
        { b: "Examination", s: "Done gently, with a female attendant present; you can pause anytime." },
        { b: "Tests if needed", s: "An ultrasound to look for cysts and other signs." },
        { b: "Your plan", s: "Pain control, hormone options or keyhole surgery, explained in order." },
      ],
      after: "Treatment depends on your symptoms and whether you want to conceive. Options include pain relief, hormonal treatment to quiet the lesions, and laparoscopic surgery to remove them. Each is explained with its benefits and limits.",
    },
    prep: {
      intro: "Tick these off before you come. Nothing is saved; it is just for you.",
      items: [
        "A short pain diary: when it hurts, how bad, what helps",
        "Dates of your last few periods",
        "Old scans, reports or previous prescriptions",
        "Whether you are trying to conceive, now or later",
      ],
    },
    after: "Endometriosis is followed over time. If medicine is chosen, the plan is reviewed within a few months. If surgery is needed, Dr. Riddhi explains what laparoscopy involves, what it can and cannot do, and what recovery looks like.",
    urgent: EMERG([
      "Sudden, severe tummy pain (a cyst can twist or rupture)",
      "Pain with vomiting or fainting",
      "Heavy bleeding with severe pain",
    ]),
    faqs: [
      { q: "Can endometriosis be cured?", a: "There is no permanent cure, but symptoms can be controlled well with medicines, surgery, or both. Many women get long, comfortable stretches with the right plan." },
      { q: "Will I be able to get pregnant?", a: "Many women with endometriosis conceive, some naturally and some after treatment. Tell Dr. Riddhi about your plans early, because it changes which options are chosen." },
      { q: "Is surgery always needed?", a: "No. Surgery is considered when pain stays despite medicines, when a cyst is large or growing, or when it may help fertility. It is never the automatic first step." },
      { q: "Why did it take so long to be found?", a: "Because its signs overlap with ordinary period pain and it does not always show on a scan. A careful history is often the biggest clue, which is why the first visit focuses on your story." },
    ],
    related: [
      { href: "/treatments/period-problems/", icon: "c-drop", title: "Period problems", sub: "Painful periods have many causes." },
      { href: "/treatments/fertility-check/", icon: "c-couple", title: "Fertility check for couples", sub: "When pregnancy is taking time." },
      { href: "/keyhole-surgery/", icon: "c-lap", title: "Keyhole surgery", sub: "How laparoscopy finds and treats endometriosis." },
    ],
  },

  fibroids: {
    meta: {
      title: "Fibroid treatment in Borivali | Dr. Riddhi D. Shah",
      description: "Fibroid care by Dr. Riddhi D. Shah, gynaecologist and laparoscopic surgeon in Borivali West. Watch, medicines or surgery — every option explained first.",
    },
    h1: ["Fibroids,", <em key="e">options first</em>],
    lead: "Fibroids are non-cancerous growths in the muscle of the womb. Many women have them and never know. When they cause heavy periods, pain or pressure, or sit in the way of a pregnancy, they deserve a proper look. Not every fibroid needs surgery.",
    ctaLabel: "Book a consultation",
    artLabel: "Fibroids",
    strip: [
      { icon: "i-clock", small: "First visit", big: <>About 20 to 30 minutes <Confirm /></> },
      { icon: "i-doc", small: "Tests", big: "Ultrasound; blood tests for anaemia if bleeding is heavy" },
      { icon: "i-cal", small: "Best day to come", big: "Any day; bring old scan reports" },
      { icon: "i-wa", small: "Follow-up", big: "In person, or by WhatsApp for reports" },
    ],
    toc: TOC,
    what: {
      h: "What fibroids are",
      short: "Fibroids are common, non-cancerous muscle growths in the womb. Size and position decide whether they cause trouble, not just whether they exist.",
      paras: [
        "Fibroids sitting under the womb lining often cause heavy bleeding. Fibroids inside the muscle wall or on the outer surface may cause pressure, a heavy feeling, or nothing at all. Some grow slowly for years; others stay small.",
        "Because they are hormone-sensitive, fibroids usually shrink after menopause. The real question at your visit is not whether you have fibroids, but whether they are the cause of what you are feeling, and which option fits your plans.",
      ],
    },
    signs: {
      h: "Signs to look for",
      intro: "Many fibroids are silent and found on a routine scan. These are the symptoms they can cause.",
      items: [
        { icon: "c-drop", t: "Heavy periods", s: "Long or flooding periods, sometimes with clots." },
        { icon: "i-alert", t: "Period pain", s: "Cramping that is new or getting worse." },
        { icon: "c-fibroid", t: "A heavy feeling", s: "Pressure or fullness in the lower tummy." },
        { icon: "i-clock", t: "Frequent urination", s: "When a fibroid presses on the bladder." },
        { icon: "c-egg", t: "Pregnancy concerns", s: "Some positions can affect conceiving or a pregnancy." },
        { icon: "i-doc", t: "Found on a scan", s: "A fibroid reported on an ultrasound done for another reason." },
      ],
    },
    visit: {
      steps: [
        { b: "Your story", s: "Bleeding, pain, pressure symptoms and pregnancy plans." },
        { b: "Examination", s: "The womb can sometimes be felt on examination." },
        { b: "Tests if needed", s: "An ultrasound maps size and position; blood tests check for anaemia." },
        { b: "Your plan", s: "Watch, medicines, or surgery, explained with reasons." },
      ],
      after: "Small, symptom-free fibroids usually just get watched with a repeat scan. For symptoms, options include medicines to control bleeding or shrink fibroids, and keyhole surgery (myomectomy to remove fibroids, or hysterectomy in chosen cases). What suits you depends on size, position and your plans for pregnancy.",
    },
    prep: {
      intro: "Tick these off before you come. Nothing is saved; it is just for you.",
      items: [
        "Old ultrasound or MRI reports, if any",
        "Dates of your last few periods and how heavy they are",
        "Whether you plan a pregnancy in future",
        "A list of medicines and supplements you take",
      ],
    },
    after: "If fibroids are watched, you will be told when to repeat the scan. If treatment is chosen, follow-up checks your symptoms and blood counts. After surgery, recovery milestones are explained before you go home.",
    urgent: EMERG([
      "Soaking a pad every hour for several hours",
      "Severe tummy pain, especially with fever",
      "Bleeding with dizziness or fainting",
    ]),
    faqs: [
      { q: "Do all fibroids need surgery?", a: "No. Many only need watching. Surgery is considered when they cause heavy bleeding that does not respond to medicines, grow quickly, or sit in the way of a pregnancy." },
      { q: "Can fibroids turn into cancer?", a: "Fibroids are not cancer and do not turn into it. A rare different growth exists, but symptoms and scan patterns help doctors tell them apart." },
      { q: "Will fibroids affect my pregnancy?", a: "Most pregnancies with fibroids go well. Position matters: fibroids near the womb cavity may need attention before or during pregnancy planning, which is worth discussing early." },
      { q: "Can medicines remove fibroids?", a: "Medicines can control bleeding and sometimes shrink fibroids for a while, but they do not remove them permanently. They can still be the right choice for your situation." },
    ],
    related: [
      { href: "/treatments/ovarian-cysts/", icon: "c-ovary", title: "Ovarian cysts", sub: "Another common finding on a scan." },
      { href: "/keyhole-surgery/", icon: "c-lap", title: "Keyhole surgery", sub: "Laparoscopic myomectomy and hysterectomy." },
      { href: "/treatments/planning-a-pregnancy/", icon: "c-egg", title: "Planning a pregnancy", sub: "Checks before you start trying." },
    ],
  },

  "ovarian-cysts": {
    meta: {
      title: "Ovarian cyst care in Borivali | Dr. Riddhi D. Shah",
      description: "Ovarian cyst care by Dr. Riddhi D. Shah, gynaecologist in Borivali West. What a cyst on your scan means, when to watch it and when it needs treatment.",
    },
    h1: ["Ovarian cysts,", <em key="e">explained calmly</em>],
    lead: "A cyst on an ultrasound report sounds worrying, but most ovarian cysts are harmless and many go away on their own. What matters is the type, the size and your symptoms. At your visit, the report is explained in plain words and a plan is made together.",
    ctaLabel: "Book a consultation",
    artLabel: "Ovarian cysts",
    strip: [
      { icon: "i-clock", small: "First visit", big: <>About 20 to 30 minutes <Confirm /></> },
      { icon: "i-doc", small: "Tests", big: "Ultrasound; a blood test in some cases" },
      { icon: "i-cal", small: "Best day to come", big: "Any day; bring the scan report that found it" },
      { icon: "i-wa", small: "Follow-up", big: "In person, or by WhatsApp for reports" },
    ],
    toc: TOC,
    what: {
      h: "What an ovarian cyst is",
      short: "An ovarian cyst is a fluid-filled sac on or in the ovary. Most are functional, part of the normal cycle, and disappear within a few months.",
      paras: [
        "Functional cysts form as part of ovulation and usually resolve by themselves. Other kinds include dermoid cysts, endometriomas (linked to endometriosis) and cystadenomas. The scan description, size and contents help tell them apart.",
        "The word cyst on a report is not a diagnosis by itself. Two women with the same cyst size can need very different plans, which is why the type, your age and your symptoms are all weighed together.",
      ],
    },
    signs: {
      h: "Signs to look for",
      intro: "Many cysts cause no symptoms and are found by chance. These are the ones that can announce themselves.",
      items: [
        { icon: "i-alert", t: "One-sided tummy pain", s: "A dull ache or sharp pain low on one side." },
        { icon: "c-cycle", t: "Bloating", s: "A feeling of fullness or a swollen tummy." },
        { icon: "c-drop", t: "Period changes", s: "Irregular bleeding or pain that is new." },
        { icon: "i-heart", t: "Pain with sex", s: "Deep pain on one side." },
        { icon: "i-clock", t: "Sudden severe pain", s: "A cyst can twist or burst — this needs urgent care." },
        { icon: "i-doc", t: "Found on a scan", s: "Reported during an ultrasound done for another reason." },
      ],
    },
    visit: {
      steps: [
        { b: "Your story", s: "Symptoms, periods and what the report says." },
        { b: "Examination", s: "Done gently, with a female attendant present." },
        { b: "Tests if needed", s: "A repeat or detailed ultrasound; a tumour-marker blood test when indicated." },
        { b: "Your plan", s: "Watch and repeat scan, medicines for pain, or surgery if the cyst needs it." },
      ],
      after: "Small simple cysts are usually watched with a repeat ultrasound after a few weeks or months. Cysts that are large, persistent, complex or painful may need keyhole surgery to remove them while saving healthy ovary.",
    },
    prep: {
      intro: "Tick these off before you come. Nothing is saved; it is just for you.",
      items: [
        "The ultrasound report that found the cyst, and any older scans",
        "Where the pain is, and whether it comes and goes",
        "Dates of your last few periods",
        "Whether you plan a pregnancy in future",
      ],
    },
    after: "If the plan is to watch, you will be told exactly when to repeat the scan and what would mean coming in sooner. If surgery is advised, the keyhole approach, recovery and effect on the ovary are explained first.",
    urgent: EMERG([
      "Sudden, severe lower tummy pain, especially with vomiting",
      "Pain with fever or feeling very unwell",
      "Pain with dizziness or fainting",
    ]),
    faqs: [
      { q: "Are ovarian cysts cancer?", a: "The great majority are not. The scan appearance, size and sometimes a blood test help doctors assess the small risk and decide whether watching is safe." },
      { q: "Do cysts mean PCOS?", a: "No. The small follicles seen in PCOS are different from a true cyst and need no surgery. They are often confused on reports, which the visit can clear up." },
      { q: "Will the cyst go away by itself?", a: "Functional cysts often do, usually over one to three cycles. That is why repeat scans are timed the way they are." },
      { q: "Will surgery affect my fertility?", a: "The aim of cyst surgery is to remove the cyst while preserving as much healthy ovary as possible. This is discussed before any decision is made." },
    ],
    related: [
      { href: "/treatments/fibroids/", icon: "c-fibroid", title: "Fibroids", sub: "Another common finding on a scan." },
      { href: "/treatments/endometriosis/", icon: "c-endo", title: "Endometriosis", sub: "The cause of chocolate cysts." },
      { href: "/keyhole-surgery/", icon: "c-lap", title: "Keyhole surgery", sub: "How cysts are removed through small cuts." },
    ],
  },

  "planning-a-pregnancy": {
    meta: {
      title: "Planning a pregnancy: preconception check | Dr. Riddhi D. Shah",
      description: "Preconception check by Dr. Riddhi D. Shah, gynaecologist in Borivali West. Blood tests, vaccines, folic acid and lifestyle before you start trying.",
    },
    h1: ["Planning a pregnancy?", <em key="e">start here</em>],
    lead: "The best time to prepare for a pregnancy is before you conceive. A preconception visit checks the things that matter most, blood health, thyroid, vaccines, medicines you already take, and gives you a simple list to work through over the next few months.",
    ctaLabel: "Book a preconception check",
    artLabel: "Preconception care",
    strip: [
      { icon: "i-clock", small: "First visit", big: <>About 20 to 30 minutes <Confirm /></> },
      { icon: "i-doc", small: "Tests", big: "Blood tests tailored to you; ultrasound if needed" },
      { icon: "i-cal", small: "Best time", big: "Ideally three months before you start trying" },
      { icon: "i-wa", small: "Follow-up", big: "In person, or by WhatsApp for reports" },
    ],
    toc: TOC,
    what: {
      h: "What a preconception check is",
      short: "A preconception check finds and fixes the things that are easiest to improve before pregnancy: anaemia, thyroid, sugar, vaccine gaps and medicines that may need adjusting.",
      paras: [
        "Some changes need time. Folic acid works best when started about three months before conceiving. Vaccines for rubella and hepatitis B are given ahead of pregnancy, not during it. Blood sugar and thyroid control matter most in the earliest weeks, often before a pregnancy is even confirmed.",
        "The visit also covers cycle timing, when to stop contraception, and which medicines and supplements are safe to continue. You leave with a clear list, not a vague suggestion to stay healthy.",
      ],
    },
    signs: {
      h: "What the check looks at",
      intro: "These are the areas a preconception visit reviews, one by one.",
      items: [
        { icon: "i-doc", t: "Blood health", s: "Anaemia and haemoglobin, common and easily corrected." },
        { icon: "c-cycle", t: "Thyroid and sugar", s: "Both affect early pregnancy and respond well to treatment." },
        { icon: "c-shield", t: "Vaccines", s: "Rubella and hepatitis B, checked and given before pregnancy." },
        { icon: "i-doc", t: "Current medicines", s: "Reviewed for safety, and adjusted if needed." },
        { icon: "c-egg", t: "Folic acid", s: "Started about three months before trying." },
        { icon: "i-heart", t: "Lifestyle", s: "Weight, sleep, smoking and alcohol, in practical terms." },
      ],
    },
    visit: {
      steps: [
        { b: "Your history", s: "Periods, past pregnancies, medical conditions and family history." },
        { b: "Examination", s: "General health check; pelvic exam or scan only if needed." },
        { b: "Tests if needed", s: "Blood tests picked for your history, not a blanket panel." },
        { b: "Your plan", s: "Folic acid, vaccines, medicine changes and a timeline." },
      ],
      after: "If a condition like thyroid or diabetes needs optimising, the plan sets a target and a review date. Once the list is done, you are simply told you are good to try.",
    },
    prep: {
      intro: "Tick these off before you come. Nothing is saved; it is just for you.",
      items: [
        "A list of medicines and supplements you take now",
        "Your period dates and cycle pattern",
        "Any medical conditions and past reports",
        "Your vaccine history, if you know it",
      ],
    },
    after: "Most couples need one check and a short follow-up for reports. If a test flags something, it is treated first, then trying begins. If you have been trying for a while already, the visit can shift into a fertility check instead.",
    urgent: EMERG([
      "A positive pregnancy test with severe tummy pain or bleeding",
      "Fainting or shoulder-tip pain with a missed period",
      "These can point to an ectopic pregnancy and need urgent care",
    ]),
    faqs: [
      { q: "How early should we come?", a: "About three months before you plan to try is ideal, so folic acid and vaccines have time to work. Coming earlier or later is still useful." },
      { q: "Does my partner need any checks?", a: "A general health review and lifestyle discussion help; formal tests for him usually become relevant only if conception is taking time." },
      { q: "I have a medical condition. Can I still plan?", a: "Usually yes, with the condition controlled first. Thyroid disorders, diabetes and blood pressure are all managed before conception to give the pregnancy the best start." },
      { q: "Is the check different after 35?", a: "The same basics apply, with more attention to blood pressure, sugar and realistic timelines. Age is discussed honestly, without alarm." },
    ],
    related: [
      { href: "/treatments/fertility-check/", icon: "c-couple", title: "Fertility check for couples", sub: "When pregnancy is taking time." },
      { href: "/learn/planning-a-baby/", icon: "c-egg", title: "Article: Start three months early", sub: "The checks, vaccines and vitamins to sort out first." },
      { href: "/treatments/pcos/", icon: "c-ovary", title: "PCOS", sub: "A common reason periods need settling first." },
    ],
  },

  "fertility-check": {
    meta: {
      title: "Fertility check for couples in Borivali | Dr. Riddhi D. Shah",
      description: "Fertility evaluation for couples by Dr. Riddhi D. Shah, gynaecologist in Borivali West. Both partners checked together, with a clear plan of next steps.",
    },
    h1: ["Fertility check,", <em key="e">for both of you</em>],
    lead: "When pregnancy is taking time, the answer is almost never in one partner alone. A fertility check looks at both of you together: ovulation, tubes, the womb and the semen report, then lays out what to do next.",
    ctaLabel: "Book a fertility check",
    artLabel: "Fertility check",
    strip: [
      { icon: "i-clock", small: "First visit", big: <>About 30 minutes for the couple <Confirm /></> },
      { icon: "i-doc", small: "Tests", big: "Blood tests, ultrasound and a semen analysis" },
      { icon: "i-cal", small: "When to come", big: "After 12 months of trying, or 6 months if she is over 35" },
      { icon: "i-wa", small: "Follow-up", big: "In person, or by WhatsApp for reports" },
    ],
    toc: TOC,
    what: {
      h: "What a fertility check is",
      short: "A fertility check is a structured first look at both partners: whether eggs are released, whether the tubes are open, whether the womb is ready, and what the semen shows.",
      paras: [
        "About a third of fertility problems sit with the woman, a third with the man, and the rest are shared or unexplained. That is why both partners are seen together from the start, rather than testing one person for months first.",
        "The check is stepwise: history and a scan first, then blood tests for ovulation hormones, a semen analysis, and a tube test only if needed. Each step is explained before it is done, and nothing is done because it is on a list.",
      ],
    },
    signs: {
      h: "When to get checked",
      intro: "You do not have to wait a fixed time if something already looks off. These are the usual guideposts.",
      items: [
        { icon: "i-clock", t: "12 months of trying", s: "The standard point for a first evaluation." },
        { icon: "i-cal", t: "6 months if over 35", s: "Worth coming earlier, not waiting the full year." },
        { icon: "c-cycle", t: "Irregular or absent periods", s: "Ovulation may not be happening monthly." },
        { icon: "c-endo", t: "Known conditions", s: "Endometriosis, fibroids or pelvic infections in the past." },
        { icon: "i-doc", t: "Previous surgery", s: "On the ovaries, tubes or abdomen." },
        { icon: "c-couple", t: "His side too", s: "Past testicular issues, surgery or a low semen report." },
      ],
    },
    visit: {
      steps: [
        { b: "Both your histories", s: "Periods, past pregnancies, conditions and how long you have tried." },
        { b: "Examination and scan", s: "An ultrasound for the womb and ovaries." },
        { b: "Tests for both", s: "Hormone blood tests for her, semen analysis for him; tube test if indicated." },
        { b: "Your plan", s: "What was found, the options in order, and a timeline." },
      ],
      after: "Options range from timing advice and simple medicines to help ovulation, to treating a finding like a fibroid or endometriosis, to referral for assisted techniques when that is the right step. The ladder is climbed in order, with your say at each rung.",
    },
    prep: {
      intro: "Tick these off before you come. Nothing is saved; it is just for you.",
      items: [
        "Both partners come together if possible",
        "Her period dates for the last few months",
        "Old reports, scans or semen analyses",
        "Any past treatments, medicines or surgeries for either of you",
      ],
    },
    after: "Results are explained together, in plain words, with the next step clear. Some couples need only a nudge in timing; others move to treatment. You will always know which rung you are on and why.",
    urgent: EMERG([
      "A positive pregnancy test with severe one-sided pain",
      "Bleeding with dizziness or shoulder-tip pain",
      "These can point to an ectopic pregnancy and need urgent care",
    ]),
    faqs: [
      { q: "We have only tried for a few months. Is it too early?", a: "If cycles are regular and both of you are healthy, trying for up to a year is normal. Come sooner if periods are irregular, there is a known condition, or either of you is anxious to be checked." },
      { q: "Does my husband really need to come?", a: "Yes. A semen analysis is simple, quick and answers a third of the question in one step. Skipping it can waste months." },
      { q: "Will you push us towards IVF?", a: "No. Most couples do not need IVF. The plan starts with the simplest reasonable step and escalates only when evidence supports it." },
      { q: "What if nothing is found?", a: "Unexplained infertility is a real and common category. It does not mean nothing is wrong; it means the standard tests are normal. Options still exist and are discussed." },
    ],
    related: [
      { href: "/treatments/planning-a-pregnancy/", icon: "c-egg", title: "Planning a pregnancy", sub: "The checks to do before you try." },
      { href: "/treatments/pcos/", icon: "c-ovary", title: "PCOS", sub: "A common, treatable cause." },
      { href: "/treatments/endometriosis/", icon: "c-endo", title: "Endometriosis", sub: "A cause worth looking for." },
    ],
  },

  "pap-smear-hpv-vaccine": {
    meta: {
      title: "Pap smear and HPV vaccine in Borivali | Dr. Riddhi D. Shah",
      description: "Cervical cancer screening and HPV vaccination by Dr. Riddhi D. Shah, gynaecologist in Borivali West. What the test involves, when it is due and who the vaccine helps.",
    },
    h1: ["Pap smear and HPV vaccine,", <em key="e">prevention that works</em>],
    lead: "Cervical cancer is one of the few cancers that screening can actually prevent. A Pap smear takes a few minutes and catches cell changes years before they become a problem. The HPV vaccine lowers the risk further. Both are routine, quick and far easier than they sound.",
    ctaLabel: "Book a screening visit",
    artLabel: "Screening and prevention",
    strip: [
      { icon: "i-clock", small: "The test", big: "A few minutes during the visit" },
      { icon: "i-doc", small: "How often", big: <>Usually every 3 to 5 years <Confirm /></> },
      { icon: "i-cal", small: "Best day", big: "A day you are not on your period" },
      { icon: "i-wa", small: "Follow-up", big: "Report explained; reminder for the next one" },
    ],
    toc: TOC,
    what: {
      h: "What the test and the vaccine do",
      short: "A Pap smear looks for early cell changes on the cervix, long before they can turn into cancer. The HPV vaccine protects against the virus that causes most of those changes.",
      paras: [
        "Most cervical cancer is caused by long-standing infection with certain HPV types. HPV is extremely common and usually clears on its own; screening exists to catch the cases where it does not.",
        "Screening is generally advised from the age of 21 or within a few years of becoming sexually active, and repeated every three to five years depending on the test used and your history. The vaccine works best when given young, but adults can benefit too. Both are discussed at the visit.",
      ],
    },
    signs: {
      h: "Who should come",
      intro: "Screening is for women who feel well; that is the point. These are the usual reasons to book.",
      items: [
        { icon: "i-cal", t: "It has been 3+ years", s: "Or you have never had a Pap smear." },
        { icon: "i-doc", t: "Age 21 and above", s: "Once sexually active, screening becomes routine." },
        { icon: "c-shield", t: "Vaccine questions", s: "For you, or for a daughter in the right age group." },
        { icon: "c-drop", t: "Bleeding after sex", s: "Not a screening matter — a reason to be examined soon." },
        { icon: "i-alert", t: "Unusual discharge", s: "Persistent, watery or blood-stained discharge needs a check." },
        { icon: "c-couple", t: "Before a pregnancy", s: "Screening can be updated while you plan." },
      ],
    },
    visit: {
      steps: [
        { b: "Your history", s: "Cycle, past smears, vaccines and any symptoms." },
        { b: "The smear", s: "A speculum exam and a soft brush on the cervix; a few minutes." },
        { b: "The vaccine", s: "Discussed and given if you choose it." },
        { b: "Your plan", s: "When the report comes and when you are next due." },
      ],
      after: "The smear may feel uncomfortable for a moment but is not usually painful, and you can ask to pause or stop at any time. A female attendant is always present.",
    },
    prep: {
      intro: "Tick these off before you come. Nothing is saved; it is just for you.",
      items: [
        "Come on a day you are not on your period, if possible",
        "Avoid intercourse and vaginal products for 24 to 48 hours before",
        "Bring old Pap smear or HPV reports, if any",
        "Your vaccine history, if you know it",
      ],
    },
    after: "Results usually take a few days. Most come back normal and the next smear is simply scheduled. If a report shows changes, the next step, a repeat test or a closer look called colposcopy, is explained before anything is done.",
    urgent: {
      h: "Do not wait for screening if you have",
      items: [
        "Bleeding after sex, more than once",
        "Bleeding between periods or after menopause",
        "Persistent watery or blood-stained discharge",
      ],
      note: <>These need an examination soon, not just a routine smear. Medical emergency? Call 108 or 112.</>,
    },
    faqs: [
      { q: "Does the Pap smear hurt?", a: "It is uncomfortable for a moment rather than painful. The speculum part is the unfamiliar bit; the brush itself takes seconds. You can ask to pause or stop anytime." },
      { q: "I am not married. Do I need screening?", a: "Screening is recommended once a woman is sexually active, regardless of marital status. If you have never been sexually active, the visit can focus on the vaccine instead." },
      { q: "Is the HPV vaccine useful for adults?", a: "It works best before exposure, but adults can still benefit. The right age and number of doses for you are discussed at the visit." },
      { q: "Does a normal smear mean I am safe forever?", a: "No, which is why smears are repeated every few years. But a normal result is genuinely reassuring until the next one is due." },
    ],
    related: [
      { href: "/learn/first-pap-smear/", icon: "c-shield", title: "Article: Your first Pap smear", sub: "What happens, step by step." },
      { href: "/treatments/infections-discharge/", icon: "c-germ", title: "Infections and discharge", sub: "A common reason for a first visit." },
      { href: "/treatments/menopause/", icon: "c-lotus", title: "Menopause", sub: "Screening continues after menopause." },
    ],
  },

  "infections-discharge": {
    meta: {
      title: "Vaginal infections and discharge in Borivali | Dr. Riddhi D. Shah",
      description: "Care for white discharge, itching, burning and urinary symptoms by Dr. Riddhi D. Shah, gynaecologist in Borivali West. Private, unhurried and judgment-free.",
    },
    h1: ["Infections and discharge,", <em key="e">nothing to be shy about</em>],
    lead: "White discharge, itching, burning or a urinary infection are among the most common reasons women see a gynaecologist, and among the most common they feel awkward about. They are treated every day, quickly and without judgment.",
    ctaLabel: "Book a consultation",
    artLabel: "Everyday gynaecology",
    strip: [
      { icon: "i-clock", small: "First visit", big: <>About 20 to 30 minutes <Confirm /></> },
      { icon: "i-doc", small: "Tests", big: "A swab or urine test, only if the exam calls for it" },
      { icon: "i-cal", small: "When to come", big: "Sooner is easier; do not wait it out for weeks" },
      { icon: "i-wa", small: "Follow-up", big: "In person, or by WhatsApp for reports" },
    ],
    toc: TOC,
    what: {
      h: "What is normal and what is not",
      short: "Some discharge is normal and changes through the cycle. Itching, a strong smell, a colour change or burning while passing urine are not.",
      paras: [
        "Normal discharge is clear or white, mild-smelling and does not itch. Discharge that becomes thick, yellow or green, smells unpleasant, or comes with itching, soreness or burning usually means an infection, most often a fungal or bacterial imbalance that is simple to treat.",
        "Urinary symptoms, burning, frequency, urgency, point to a urine infection rather than a vaginal one. They are treated differently, which is why an examination matters before reaching for a random medicine.",
      ],
    },
    signs: {
      h: "Signs to look for",
      intro: "These symptoms are common and treatable. They do not need weeks of waiting, and they do not need embarrassment.",
      items: [
        { icon: "c-germ", t: "Itching or soreness", s: "Around the vagina or vulva, especially at night." },
        { icon: "c-drop", t: "Changed discharge", s: "Thicker, yellow, green or with a new smell." },
        { icon: "i-alert", t: "Burning while passing urine", s: "The classic sign of a urine infection." },
        { icon: "i-clock", t: "Frequent urination", s: "Going often, in small amounts, with urgency." },
        { icon: "i-heart", t: "Pain with sex", s: "Soreness or burning during or after intercourse." },
        { icon: "i-doc", t: "It keeps coming back", s: "Recurrent infections deserve a proper look, not another guess." },
      ],
    },
    visit: {
      steps: [
        { b: "Your story", s: "Symptoms, how long, what you have tried, and your cycle." },
        { b: "Examination", s: "Done gently, with a female attendant present." },
        { b: "Tests if needed", s: "A swab or a urine test to name the exact infection." },
        { b: "Your plan", s: "The right medicine for that infection, plus simple prevention." },
      ],
      after: "Self-treating with leftover or over-the-counter medicines often treats the wrong organism, which is why the same complaint keeps returning. A swab takes seconds and makes the treatment match the cause.",
    },
    prep: {
      intro: "Tick these off before you come. Nothing is saved; it is just for you.",
      items: [
        "How long you have had the symptoms",
        "Any medicines, creams or washes you have already used",
        "Whether symptoms link to your period, sex or antibiotics",
        "A fresh urine sample is not needed; come as you are",
      ],
    },
    after: "Most infections settle within a week of the right treatment. If symptoms return, the follow-up looks at why, including blood sugar, partner treatment when relevant, and habits that keep the balance off.",
    urgent: EMERG([
      "High fever with lower tummy pain",
      "Severe tummy pain with discharge",
      "Back pain, vomiting or rigors with urinary symptoms",
    ]),
    faqs: [
      { q: "Is white discharge always an infection?", a: "No. A normal amount of clear or white discharge is healthy. It becomes a question when it changes colour, smells, itches or comes with soreness." },
      { q: "Can I just use a vaginal wash?", a: "Washes and douching often make things worse by disturbing the normal balance. Plain water outside is enough; treatment works from inside." },
      { q: "Do I have to tell you about my sexual history?", a: "Sharing it helps choose the right tests and treatment, and it stays confidential. Nothing you say is unusual or judged." },
      { q: "Why does my infection keep coming back?", a: "Common reasons: the first medicine targeted the wrong organism, diabetes or antibiotics disrupting balance, or a partner who also needs treatment. A proper work-up finds the reason." },
    ],
    related: [
      { href: "/treatments/pap-smear-hpv-vaccine/", icon: "c-shield", title: "Pap smear and HPV vaccine", sub: "Routine screening that prevents cancer." },
      { href: "/treatments/period-problems/", icon: "c-drop", title: "Period problems", sub: "Discharge changes can link to cycles." },
      { href: "/your-first-visit/", icon: "c-ask", title: "Your first visit", sub: "What happens, start to finish." },
    ],
  },

  menopause: {
    meta: {
      title: "Menopause care in Borivali | Dr. Riddhi D. Shah",
      description: "Perimenopause and menopause care by Dr. Riddhi D. Shah, gynaecologist in Borivali West. Hot flushes, sleep, mood, bone health and the options that help.",
    },
    h1: ["Menopause,", <em key="e">supported properly</em>],
    lead: "Menopause is a transition, not an illness, but that does not mean you should simply endure it. Hot flushes, broken sleep, mood changes and irregular periods in the years before it can be helped, and bone and heart health afterwards deserve a plan.",
    ctaLabel: "Book a consultation",
    artLabel: "Menopause",
    strip: [
      { icon: "i-clock", small: "First visit", big: <>About 20 to 30 minutes <Confirm /></> },
      { icon: "i-doc", small: "Tests", big: "Blood tests and a bone-health review when needed" },
      { icon: "i-cal", small: "When to come", big: "When symptoms start bothering you, not after" },
      { icon: "i-wa", small: "Follow-up", big: "In person, or by WhatsApp for reports" },
    ],
    toc: TOC,
    what: {
      h: "What menopause and perimenopause are",
      short: "Menopause is the point one year after the last period, usually around the late forties or early fifties. The years leading up to it, when hormones swing and periods turn irregular, are perimenopause.",
      paras: [
        "Perimenopause can last several years, and it is when most symptoms appear: periods that bunch up or space out, hot flushes, night sweats, poor sleep, low mood and brain fog. Because it creeps up gradually, many women do not connect the symptoms.",
        "After menopause, oestrogen loss speeds up bone thinning and changes heart health, so screening for bones, blood pressure and sugar becomes part of routine care. Screening like mammograms and Pap smears continues too.",
      ],
    },
    signs: {
      h: "Signs to look for",
      intro: "Symptoms vary widely. A few of these together in your forties is worth a conversation.",
      items: [
        { icon: "c-cycle", t: "Changing periods", s: "Cycles getting longer, shorter, heavier or unpredictable." },
        { icon: "i-alert", t: "Hot flushes", s: "Sudden waves of heat, often with sweating." },
        { icon: "i-clock", t: "Poor sleep", s: "Waking at night, sometimes drenched." },
        { icon: "i-heart", t: "Mood changes", s: "Irritability, low mood or anxiety that is new." },
        { icon: "c-drop", t: "Dryness", s: "Vaginal dryness or discomfort with sex." },
        { icon: "c-lotus", t: "Joint aches and brain fog", s: "Stiffness, and feeling less sharp than usual." },
      ],
    },
    visit: {
      steps: [
        { b: "Your story", s: "Periods, symptoms, sleep, mood and family history." },
        { b: "Examination", s: "General check, blood pressure and weight; pelvic exam if needed." },
        { b: "Tests if needed", s: "Thyroid and other blood tests to rule out lookalikes; bone health review." },
        { b: "Your plan", s: "Lifestyle steps, non-hormonal or hormonal options, and a follow-up date." },
      ],
      after: "Menopause symptoms do not have to be waited out. Options range from practical lifestyle changes to non-hormonal medicines to hormone therapy for the right woman, each discussed with its benefits and risks in your context.",
    },
    prep: {
      intro: "Tick these off before you come. Nothing is saved; it is just for you.",
      items: [
        "Your period dates over the last six months",
        "A short list of symptoms and how long you have had them",
        "Family history of osteoporosis, heart disease or breast cancer",
        "A list of medicines and supplements you take",
      ],
    },
    after: "If treatment is started, it is reviewed within a few months to check it is working and suiting you. Bone health, blood pressure and screening tests are followed year on year, not just once.",
    urgent: {
      h: "Bleeding that is not normal needs a check soon",
      items: [
        "Any bleeding a year or more after your last period",
        "Very heavy bleeding or bleeding that will not stop",
        "Bleeding after sex",
      ],
      note: <>Bleeding after menopause always deserves an examination soon. Medical emergency? Call 108 or 112.</>,
    },
    faqs: [
      { q: "Is hormone therapy safe?", a: "For many women in the right age window it is both safe and effective, but it is not for everyone. Your history and family history decide, and it is discussed honestly, not pushed." },
      { q: "Are these symptoms really menopause?", a: "Maybe, but thyroid problems, low iron and other conditions mimic it. That is why tests to rule out lookalikes come before labelling it." },
      { q: "How long do symptoms last?", a: "It varies from a couple of years to longer. The good news is that they are treatable at every stage; you do not have to wait for them to pass." },
      { q: "Do I still need Pap smears?", a: "Yes. Screening continues as scheduled after menopause, and any new bleeding needs a check regardless of when your last smear was." },
    ],
    related: [
      { href: "/treatments/period-problems/", icon: "c-drop", title: "Period problems", sub: "Irregular bleeding in the forties needs a look." },
      { href: "/treatments/pap-smear-hpv-vaccine/", icon: "c-shield", title: "Pap smear and HPV vaccine", sub: "Screening that continues after menopause." },
      { href: "/treatments/fibroids/", icon: "c-fibroid", title: "Fibroids", sub: "Often settle after menopause." },
    ],
  },
};
