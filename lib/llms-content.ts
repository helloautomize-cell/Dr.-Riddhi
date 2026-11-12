import { site } from "./site-config";
import { TREATMENTS } from "./treatments";
import { TREATMENT_PAGES, PCOS_LEAD } from "./treatment-pages";
import { LEGAL_PAGES } from "./legal-content";
import {
  ARTICLE_FAQS,
  FAQS,
  HOME_FAQS,
  KEYHOLE_FAQS,
  PCOS_FAQS,
  type FaqItem,
} from "./faqs";

/**
 * llms.txt / llms-full.txt content for LLM crawlers.
 * Everything derives from the same lib sources the pages render, so the
 * text served to models can never drift from what visitors read.
 */

interface LPage {
  path: string;
  title: string;
  desc: string;
}

const url = (p: string) => `${site.url}${p === "/" ? "/" : p}`;

const CORE_PAGES: LPage[] = [
  {
    path: "/",
    title: "Dr. Riddhi D. Shah — gynaecologist and laparoscopic surgeon",
    desc: "Practice home: what she treats, how she works, the six-step visit, keyhole surgery, her training, common questions and how to reach the clinic.",
  },
  {
    path: "/about/",
    title: "About Dr. Riddhi",
    desc: "Qualifications (MBBS, DNB OBGY, FMAS, DRM), training timeline, awards and research, and the areas she treats.",
  },
  {
    path: "/treatments/",
    title: "What she treats",
    desc: "All areas of care, grouped by concern: periods and hormones, lumps and growths, pregnancy plans, screening, later life and keyhole surgery.",
  },
  {
    path: "/keyhole-surgery/",
    title: "Keyhole surgery",
    desc: "Laparoscopy and hysteroscopy explained: which one and why, what she operates on, and what recovery looks like.",
  },
  {
    path: "/your-first-visit/",
    title: "Your first visit",
    desc: "What happens start to finish: booking, what to bring, the consultation, tests, your plan and follow-up.",
  },
  {
    path: "/contact/",
    title: "Book a consultation",
    desc: "Booking form, phone numbers, WhatsApp, clinic address, hours and how to reach the clinic.",
  },
  {
    path: "/learn/",
    title: "Learn — videos and articles",
    desc: "Short videos and plain-language articles on periods, PCOS, pregnancy plans, screening, menopause and surgery.",
  },
  {
    path: "/faqs/",
    title: "Common questions",
    desc: "Answers about visits, periods and PCOS, pregnancy plans, screening and surgery.",
  },
];

const TREATMENT_LINKS: LPage[] = TREATMENTS.filter(
  (t) => t.group !== "surg",
).map((t) => ({ path: t.href, title: t.name, desc: t.desc }));

const ARTICLE_LINKS: LPage[] = [
  {
    path: "/learn/pcos-myths/",
    title: "Five PCOS myths, and what is actually true",
    desc: "PCOS myths about pregnancy, weight, cysts and treatment, corrected in plain words.",
  },
  {
    path: "/learn/heavy-periods/",
    title: "How heavy is too heavy? Periods explained",
    desc: "Pad counts, clots, flooding and tiredness — and when heavy periods need a check.",
  },
  {
    path: "/learn/first-pap-smear/",
    title: "Your first Pap smear, step by step",
    desc: "What happens during the test, how to prepare, what it feels like and when results come.",
  },
  {
    path: "/learn/planning-a-baby/",
    title: "Planning a baby? Start three months early",
    desc: "Folic acid, thyroid, anaemia, rubella and the medicines conversation before trying.",
  },
  {
    path: "/learn/keyhole-recovery/",
    title: "Recovering after keyhole surgery",
    desc: "The first two weeks after laparoscopy: pain, walking, stitches, food, work and warning signs.",
  },
];

const LEGAL_LINKS: LPage[] = LEGAL_PAGES.map((p) => ({
  path: `/legal/${p.slug}/`,
  title: p.label,
  desc: p.lead,
}));

const links = (pages: LPage[]) =>
  pages.map((p) => `- [${p.title}](${url(p.path)}): ${p.desc}`).join("\n");

const faqs = (items: FaqItem[]) =>
  items.map((f) => `- **${f.q}** — ${f.a}`).join("\n");

const H1 = `# ${site.doctor} — ${site.role}, ${site.area}, ${site.city}`;

const SUMMARY = `> Plain-language women's health from ${site.doctor} (${site.qualifications}), practising at ${site.clinic} (${site.clinicShort}) in ${site.area}, ${site.city}. All medical content is written and reviewed by the doctor; it is educational and does not replace a consultation.`;

/** The llms.txt index — concise link map, per the llms.txt convention. */
export function llmsIndex(): string {
  return `${H1}

${SUMMARY}

Practice details: ${site.addressShort}. Open ${site.opd.label} (IST). Call or WhatsApp ${site.phones
    .map((p) => p.label)
    .join(" / ")} to book. Full page content in one file: ${url("/llms-full.txt")}

## Visit and practice

${links(CORE_PAGES)}

## Treatments

${links(TREATMENT_LINKS)}

## Articles

${links(ARTICLE_LINKS)}

## Optional

- [llms-full.txt](${url("/llms-full.txt")}): The complete site content — practice facts, every page's text and all FAQs — in one file.
${links(LEGAL_LINKS)}
`;
}

/** llms-full.txt — the whole site's content in one markdown document. */
export function llmsFull(): string {
  const parts: string[] = [
    `${H1}

${SUMMARY}

## Practice facts

- Doctor: ${site.doctor} — ${site.qualifications} — ${site.role}
- Clinic: ${site.clinic} (${site.clinicShort})
- Address: ${site.address}
- Map: ${site.mapsUrl} (${site.geo.lat}, ${site.geo.lng})
- Hours: ${site.opd.labelShort} (IST)
- Phone: ${site.phones.map((p) => p.label).join(", ")}
- WhatsApp: https://wa.me/${site.whatsappNumber}
- Email: ${site.email}
- Book online: ${url("/contact/")}#book
- Socials: Instagram ${site.socials.instagram} · YouTube ${site.socials.youtube}
- Emergency: ${site.emergency.replace("Emergency? ", "")}
- Content medically reviewed by ${site.doctor}; last reviewed ${site.reviewed}.
- Some images on the site are AI-assisted.
`,
    `## Home — ${url("/")}

The homepage introduces the practice: the 13 areas of care, how the doctor works (listen, examine, explain), the six steps of a first visit (book, arrive, consult, tests, plan, follow-up), keyhole surgery, her training timeline, videos, common questions and directions to the clinic.

Questions answered on the page:

${faqs(HOME_FAQS)}`,
    `## About — ${url("/about/")}

${site.doctor}, ${site.qualifications}. Training: MBBS (Pravara Institute of Medical Sciences, Loni, 2017), DNB Obstetrics and Gynaecology (National Board of Examinations, New Delhi, 2021), FMAS and laparoscopy fellowships (2022), DRM Reproductive Medicine (University of Schleswig-Holstein, Kiel, Germany, 2023). First prize for best paper in High Risk Obstetrics, 48th Annual Conference of MOGS (February 2020), and first-author research in the Indian Journal of Obstetrics and Gynecology. She practises at ${site.clinic}, ${site.area}, Monday to Friday.`,
    `## Treatments — ${url("/treatments/")}

Hub page listing all areas of care, grouped as: periods and hormones; lumps and growths; pregnancy plans; screening and everyday care; later life; keyhole surgery.`,
  ];

  for (const t of TREATMENTS.filter((x) => x.group !== "surg")) {
    const def = TREATMENT_PAGES[t.slug];
    const lead = t.slug === "pcos" ? PCOS_LEAD : def?.lead;
    const items = t.slug === "pcos" ? PCOS_FAQS : def?.faqs;
    parts.push(
      `### ${t.name} — ${url(t.href)}

${lead ?? t.desc}

Questions answered on the page:

${items ? faqs(items) : "—"}`,
    );
  }

  parts.push(
    `## Keyhole surgery — ${url("/keyhole-surgery/")}

Laparoscopy and hysteroscopy by a fellowship-trained (FMAS) surgeon. Covered on the page: which procedure and why, small openings shown to scale, the path from first talk to follow-up, and what she operates on — fibroid and ovarian cyst removal, endometriosis surgery, hysterectomy, diagnostic laparoscopy, and polyp or septum removal by hysteroscopy. Surgery is done at empanelled hospitals in and around Borivali.

Questions answered on the page:

${faqs(KEYHOLE_FAQS)}`,
    `## Your first visit — ${url("/your-first-visit/")}

Six steps: book (call, WhatsApp or online form), arrive 10 minutes early with old reports and your last period date, a private consultation with a female attendant during examination, tests only if they change the plan, a written plan with options and costs, and a follow-up date with WhatsApp for reports in between. The page also lists what to pack and how to reach the clinic.`,
    `## Learn — ${url("/learn/")}

Short videos and plain-language articles by ${site.doctor}.`,
  );

  for (const a of ARTICLE_LINKS) {
    const slug = a.path.split("/").filter(Boolean).pop()!;
    const items = ARTICLE_FAQS[slug];
    parts.push(
      `### ${a.title} — ${url(a.path)}

${a.desc}

${items ? `Questions answered in the article:\n\n${faqs(items)}` : ""}`.trimEnd(),
    );
  }

  parts.push(
    `## Common questions — ${url("/faqs/")}

${FAQS.map(
  (g) =>
    `### ${g.label}\n\n${g.items
      .map((f) => `- **${f.q}** — ${f.a}`)
      .join("\n")}`,
).join("\n\n")}`,
    `## Contact and booking — ${url("/contact/")}

Booking form (name, mobile number, reason for visit, preferred day and time). The clinic calls or WhatsApps back to confirm — nothing is booked until they do. Also on the page: phone numbers, WhatsApp, email, address, a map and the clinic entrance photo.`,
    `## Legal and trust

${LEGAL_LINKS.map((p) => `### ${p.title} — ${url(p.path)}\n\n${p.desc}`).join("\n\n")}`,
  );

  return `${parts.join("\n\n")}\n`;
}
