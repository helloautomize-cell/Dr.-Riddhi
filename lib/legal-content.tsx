import type { ReactNode } from "react";
import Link from "next/link";
import Confirm from "@/components/Confirm";
import { site } from "./site-config";

export interface LegalSection {
  id: string;
  title: string;
}
export interface LegalPage {
  slug: string;
  label: string;
  title: [ReactNode, ReactNode];
  lead: string;
  readTime: string;
  toc: LegalSection[];
  body: ReactNode;
}

const addr = "A-301/302, Swastik Building, S.V. Road, Borivali West, Mumbai 400092";

export const LEGAL_PAGES: LegalPage[] = [
  {
    slug: "privacy-policy",
    label: "Privacy",
    title: ["Privacy", <em key="e">policy</em>],
    lead: "How the clinic collects, uses and protects your personal data, in line with the Digital Personal Data Protection Act, 2023.",
    readTime: "6 minutes",
    toc: [
      { id: "p1", title: "Who we are" },
      { id: "p2", title: "What we collect" },
      { id: "p3", title: "Why we use it" },
      { id: "p4", title: "Consent" },
      { id: "p5", title: "Sharing" },
      { id: "p6", title: "How long we keep it" },
      { id: "p7", title: "Your rights" },
      { id: "p8", title: "Contact" },
    ],
    body: (
      <>
        <h2 id="p1">Who we are</h2>
        <p>This website belongs to {site.doctor}, gynaecologist, practising at {site.clinic}, {addr}. In this policy, &quot;we&quot; means {site.doctor} and the clinic team.</p>
        <h2 id="p2">What we collect</h2>
        <p>We collect only what we need to book and look after your visit.</p>
        <table>
          <thead><tr><th>Data</th><th>Where it comes from</th><th>Why</th></tr></thead>
          <tbody>
            <tr><td>Name and mobile number</td><td>Booking form, call or WhatsApp</td><td>To confirm your appointment</td></tr>
            <tr><td>Reason for visit</td><td>Booking form</td><td>To give you the right time slot</td></tr>
            <tr><td>Website usage</td><td>Analytics, only after you agree</td><td>To improve the website</td></tr>
          </tbody>
        </table>
        <p style={{ marginTop: 16 }}>Please do not send detailed medical history through the website form. Medical records are created and kept at the clinic.</p>
        <h2 id="p3">Why we use it</h2>
        <ul><li>To confirm, change or remind you about appointments.</li><li>To answer your questions.</li><li>To meet our legal duties as a medical practice.</li></ul>
        <h2 id="p4">Consent</h2>
        <p>When you send the booking form, you agree that we may contact you about your appointment. You can withdraw consent at any time by writing to us. Withdrawing consent does not affect care already given.</p>
        <h2 id="p5">Sharing</h2>
        <p>We do not sell your data. We share it only with service providers who help us run the website and messaging, under contract, and when the law requires it.</p>
        <h2 id="p6">How long we keep it</h2>
        <p>Booking requests are kept for <Confirm label="confirm period" />. Medical records are kept for as long as Indian medical rules require.</p>
        <h2 id="p7">Your rights</h2>
        <p>Under the DPDP Act you can ask to see, correct or erase your personal data, and to name someone to act for you. You can also complain to the Data Protection Board of India.</p>
        <h2 id="p8">Contact</h2>
        <div className="contactbox"><b>Privacy contact</b><p>{site.doctor} · {site.email} · {site.phones[0].label}. We reply within <Confirm label="confirm days" />.</p></div>
      </>
    ),
  },
  {
    slug: "terms-of-use",
    label: "Terms of use",
    title: ["Terms", <em key="e">of use</em>],
    lead: "The rules for using this website. It is for general information and booking requests, not for medical advice or emergencies.",
    readTime: "4 minutes",
    toc: [
      { id: "t1", title: "What this site is" },
      { id: "t2", title: "What it is not" },
      { id: "t3", title: "Booking requests" },
      { id: "t4", title: "Content ownership" },
      { id: "t5", title: "Links" },
      { id: "t6", title: "Changes" },
      { id: "t7", title: "Contact" },
    ],
    body: (
      <>
        <h2 id="t1">What this site is</h2>
        <p>This website shares general information about gynaecology and about the practice of {site.doctor} at {site.clinic}, {addr}. It also lets you request an appointment.</p>
        <h2 id="t2">What it is not</h2>
        <p>Nothing on this site is medical advice, a diagnosis or a treatment plan. Reading it does not create a doctor–patient relationship. For advice about you, please book a consultation.</p>
        <p><b>Medical emergency? Call 108 or 112.</b> Do not use this website, the booking form or WhatsApp for emergencies.</p>
        <h2 id="t3">Booking requests</h2>
        <p>The booking form sends a request only. Your appointment is confirmed when the clinic calls or messages you back. Submitting the form does not guarantee a slot.</p>
        <h2 id="t4">Content ownership</h2>
        <p>The text, design and illustrations on this site belong to {site.doctor} unless noted. Please do not copy or republish them without written permission.</p>
        <h2 id="t5">Links</h2>
        <p>Links to YouTube, Instagram, WhatsApp and map services take you to sites we do not control. Their own terms and privacy policies apply there.</p>
        <h2 id="t6">Changes</h2>
        <p>We may update these terms. The date at the top of the page shows the latest version.</p>
        <h2 id="t7">Contact</h2>
        <div className="contactbox"><b>Questions about these terms</b><p>{site.doctor} · {site.email} · {site.phones[0].label}.</p></div>
      </>
    ),
  },
  {
    slug: "medical-disclaimer",
    label: "Medical disclaimer",
    title: ["Medical", <em key="e">disclaimer</em>],
    lead: "What the health information on this site can and cannot do for you.",
    readTime: "3 minutes",
    toc: [
      { id: "m1", title: "General information only" },
      { id: "m2", title: "Not a substitute" },
      { id: "m3", title: "Emergencies" },
      { id: "m4", title: "Accuracy" },
      { id: "m5", title: "Contact" },
    ],
    body: (
      <>
        <h2 id="m1">General information only</h2>
        <p>Articles, videos and page content on this site explain common gynaecology topics in plain language. They are written for a general audience and may not apply to your situation.</p>
        <h2 id="m2">Not a substitute</h2>
        <p>This content is not a diagnosis, prescription or treatment plan, and it does not replace a consultation. Symptoms that look similar can have different causes. Please see a qualified doctor for advice about you.</p>
        <h2 id="m3">Emergencies</h2>
        <p><b>Medical emergency? Call 108 or 112.</b> Signs like very heavy bleeding, severe pain, fainting or dizziness with bleeding need urgent care, not a website.</p>
        <h2 id="m4">Accuracy</h2>
        <p>Medical pages on this site are reviewed by {site.doctor} before publication and carry a &quot;last reviewed&quot; date. Medicine changes over time, so older content may not reflect current guidance.</p>
        <h2 id="m5">Contact</h2>
        <div className="contactbox"><b>Questions about this content</b><p>{site.doctor} · {site.email} · {site.phones[0].label}.</p></div>
      </>
    ),
  },
  {
    slug: "editorial-policy",
    label: "Editorial policy",
    title: ["Editorial", <em key="e">policy</em>],
    lead: "How articles and videos on this site are chosen, written, reviewed and updated.",
    readTime: "4 minutes",
    toc: [
      { id: "e1", title: "What we publish" },
      { id: "e2", title: "How content is made" },
      { id: "e3", title: "Medical review" },
      { id: "e4", title: "Sources" },
      { id: "e5", title: "What we do not do" },
      { id: "e6", title: "Corrections" },
    ],
    body: (
      <>
        <h2 id="e1">What we publish</h2>
        <p>We publish plain-language answers to the questions women ask most in clinic: periods, PCOS, fibroids and cysts, pregnancy plans, screening, menopause and keyhole surgery.</p>
        <h2 id="e2">How content is made</h2>
        <p>Each piece starts from a real patient question. It is drafted in plain words, checked for accuracy, and edited to be readable on a phone. Titles describe the question, not a promise of results.</p>
        <h2 id="e3">Medical review</h2>
        <p>Every medical article and treatment page is reviewed by {site.doctor} ({site.qualifications}) before it goes live. The reviewer and the last-reviewed date are shown on the page.</p>
        <h2 id="e4">Sources</h2>
        <p>Articles rely on recognised guidance such as international evidence-based guidelines and FOGSI recommendations. Sources are listed at the end of each article.</p>
        <h2 id="e5">What we do not do</h2>
        <ul>
          <li>No sponsored content or advertising in articles.</li>
          <li>No patient stories, testimonials or before–after claims.</li>
          <li>No claims like &quot;best&quot;, &quot;guaranteed&quot; or &quot;cure&quot;.</li>
          <li>No medicine brand recommendations on the website.</li>
        </ul>
        <h2 id="e6">Corrections</h2>
        <p>If you spot an error, write to {site.email} and it will be reviewed and corrected.</p>
      </>
    ),
  },
  {
    slug: "patient-rights",
    label: "Patient rights",
    title: ["Patient", <em key="e">rights</em>],
    lead: "What you can expect from this practice, and what we ask of you in return.",
    readTime: "3 minutes",
    toc: [
      { id: "r1", title: "Your rights" },
      { id: "r2", title: "During examination" },
      { id: "r3", title: "Your information" },
      { id: "r4", title: "Your responsibilities" },
      { id: "r5", title: "Feedback" },
    ],
    body: (
      <>
        <h2 id="r1">Your rights</h2>
        <ul>
          <li>To be treated with respect, whatever your age, background or reason for the visit.</li>
          <li>To privacy. Your consultation is confidential within the limits of the law.</li>
          <li>To have your condition, options and costs explained in words you understand.</li>
          <li>To ask questions and to take time before deciding.</li>
          <li>To refuse or stop any examination or treatment.</li>
          <li>To a second opinion without it being held against you.</li>
        </ul>
        <h2 id="r2">During examination</h2>
        <p>A female attendant is present for examinations. You can ask to stop at any time. Children and people who need support may bring someone they trust.</p>
        <h2 id="r3">Your information</h2>
        <p>Your records are kept confidential and handled as described in the <Link href="/legal/privacy-policy/">privacy policy</Link>. You can ask to see your records.</p>
        <h2 id="r4">Your responsibilities</h2>
        <ul>
          <li>Share your history and medicines honestly, so the plan is safe for you.</li>
          <li>Tell the clinic if you cannot come, so someone else can use the slot.</li>
          <li>Follow the agreed plan and return for review when asked.</li>
        </ul>
        <h2 id="r5">Feedback</h2>
        <div className="contactbox"><b>Concerns or feedback</b><p>Speak to the clinic first — most issues are solved quickly. {site.doctor} · {site.email} · {site.phones[0].label}.</p></div>
      </>
    ),
  },
  {
    slug: "cancellation-refund",
    label: "Cancellation and refund",
    title: ["Cancellation", <em key="e">and refund</em>],
    lead: "How to change or cancel a booking, and how payments are handled.",
    readTime: "3 minutes",
    toc: [
      { id: "c1", title: "Changing your visit" },
      { id: "c2", title: "Payments" },
      { id: "c3", title: "Refunds" },
      { id: "c4", title: "Contact" },
    ],
    body: (
      <>
        <h2 id="c1">Changing your visit</h2>
        <p>If you cannot come, call or WhatsApp the clinic as soon as you know and the desk will offer the next free slot. Running late on the day? Message the clinic and they will tell you what works.</p>
        <h2 id="c2">Payments</h2>
        <p>No advance payment is taken to book a consultation. The consultation fee and any test charges are shared with you before they happen. <Confirm label="confirm fee policy" /></p>
        <h2 id="c3">Refunds</h2>
        <p>If you pay for a service that is then cancelled by the clinic, it is refunded or adjusted as you prefer. For payment issues, contact the clinic and it will be resolved. <Confirm label="confirm refund process" /></p>
        <h2 id="c4">Contact</h2>
        <div className="contactbox"><b>Booking and payment</b><p>{site.clinic} · {site.email} · {site.phones[0].label}.</p></div>
      </>
    ),
  },
  {
    slug: "accessibility",
    label: "Accessibility",
    title: ["Accessi", <em key="e">bility</em>],
    lead: "How this website is built to be usable by everyone, and what to do if something does not work for you.",
    readTime: "3 minutes",
    toc: [
      { id: "a1", title: "What we do" },
      { id: "a2", title: "Standards" },
      { id: "a3", title: "Known limits" },
      { id: "a4", title: "Tell us" },
    ],
    body: (
      <>
        <h2 id="a1">What we do</h2>
        <ul>
          <li>Text can be resized; the layout works at small and large sizes.</li>
          <li>Pages work with a keyboard alone, and with screen readers.</li>
          <li>Contrast follows WCAG guidance; motion respects the &quot;reduce motion&quot; setting.</li>
          <li>Tap targets are at least 48px on touch devices.</li>
        </ul>
        <h2 id="a2">Standards</h2>
        <p>We aim for WCAG 2.2 level AA across the site and check new pages against it before they go live.</p>
        <h2 id="a3">Known limits</h2>
        <p>Some third-party embeds, like maps and video players, are not fully in our control. If one blocks you, the same information is available by phone.</p>
        <h2 id="a4">Tell us</h2>
        <div className="contactbox"><b>Accessibility feedback</b><p>If something on this site is hard to use, tell us and we will fix it or give you the information another way. {site.email} · {site.phones[0].label}.</p></div>
      </>
    ),
  },
];

export const LEGAL_NAV = LEGAL_PAGES.map(({ slug, label }) => ({ slug, label }));
