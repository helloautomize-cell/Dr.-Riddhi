/**
 * FAQ content from the approved faqs.html design. `confirm` marks a phrase
 * rendered as a yellow CONFIRM chip until the clinic signs off.
 */
export interface FaqItem {
  q: string;
  a: string;
  confirm?: string;
}
export interface FaqGroup {
  key: string;
  label: string;
  icon: string;
  items: FaqItem[];
}

export const FAQS: FaqGroup[] = [
  {
    key: "visit",
    label: "Your visit",
    icon: "c-ask",
    items: [
      { q: "Can I talk about something embarrassing?", a: "Yes. Nothing you bring up is unusual for a gynaecologist. The consultation room is private, and you can ask for a female attendant during any examination." },
      { q: "Do I need an appointment?", a: "Booking is best so you are seen on time. Walk-ins are seen when there is a free slot. Call or WhatsApp to check." },
      { q: "What should I bring?", a: "Old reports and scans, a list of medicines you take, and the date your last period started." },
      { q: "What is the consultation fee?", a: "The fee is shared when you book. Any test is explained before it is done.", confirm: "confirm fee policy" },
      { q: "Can my partner or mother come in with me?", a: "Yes, if you would like them to. You can also speak to the doctor alone for part of the visit." },
    ],
  },
  {
    key: "periods",
    label: "Periods and PCOS",
    icon: "c-drop",
    items: [
      { q: "Do I need to come on a certain day of my cycle?", a: "For most visits, no. For some scans or tests a specific day helps. When you book, mention why you are coming and the clinic will tell you the best day." },
      { q: "Can I be examined during my period?", a: "Usually yes. For a Pap smear it is better to come when you are not bleeding. Ask when you book." },
      { q: "Is it normal for periods to be irregular?", a: "Some variation is normal, especially in the first years and before menopause. Cycles that are often longer than 35 days, or very heavy, are worth a check." },
    ],
  },
  {
    key: "preg",
    label: "Pregnancy plans",
    icon: "c-egg",
    items: [
      { q: "When should we see a doctor if we are trying to get pregnant?", a: "After a year of trying if you are under 35, or after six months if you are 35 or older. Come sooner if periods are irregular or you have a known condition." },
      { q: "Should my husband also get tested?", a: "Yes. A first fertility check looks at both partners, since either can be the reason pregnancy is taking time." },
    ],
  },
  {
    key: "screen",
    label: "Screening",
    icon: "c-shield",
    items: [
      { q: "Is the HPV vaccine only for teenagers?", a: "It works best at a younger age, but adults can also benefit. Ask at your visit whether it suits you." },
      { q: "Does a Pap smear hurt?", a: "Most women feel mild pressure for a minute. Telling the doctor if you feel uncomfortable helps her go slower." },
    ],
  },
  {
    key: "surg",
    label: "Surgery",
    icon: "c-lap",
    items: [
      { q: "Does every fibroid or cyst need surgery?", a: "No. Many only need watching. Whether treatment is needed depends on size, symptoms and your plans, which she will explain after examining you." },
      { q: "Where is surgery done?", a: "At an empanelled hospital with an operating theatre and anaesthesia team. The clinic helps with the admission steps." },
      { q: "Will I be awake during hysteroscopy?", a: "It depends on the procedure. Some short checks are done with mild pain relief, others under anaesthesia. You will know beforehand." },
    ],
  },
];

export const FAQ_TOTAL = FAQS.reduce((a, g) => a + g.items.length, 0);

/**
 * Short Q&A blocks rendered on pages outside the /faqs/ hub.
 * Single source for the accordion markup, FAQPage schema and llms-full.txt.
 */
export const HOME_FAQS: FaqItem[] = [
  { q: "Can I talk about something embarrassing?", a: "Yes. Nothing you bring up is unusual for a gynaecologist. The consultation room is private, and you can ask for a female attendant during any examination." },
  { q: "Do I need to come on a certain day of my cycle?", a: "For most visits, no. For some scans or tests a specific day helps. When you book, mention why you are coming and the clinic will tell you the best day." },
  { q: "What should I bring?", a: "Old reports and scans, a list of medicines you take, and the date your last period started." },
  { q: "Does every fibroid or cyst need surgery?", a: "No. Many only need watching. Whether treatment is needed depends on size, symptoms and your plans, which she will explain after examining you." },
  { q: "Is the HPV vaccine only for teenagers?", a: "It works best at a younger age, but adults can also benefit. Ask at your visit whether it suits you." },
];

export const KEYHOLE_FAQS: FaqItem[] = [
  { q: "Is keyhole surgery always possible?", a: "Not always. It depends on the size of a fibroid or cyst, earlier surgeries and your health. If open surgery is safer for you, she will explain why before you decide." },
  { q: "Will there be scars?", a: "There are small marks where the cuts were made. They usually fade over months. Hysteroscopy leaves no scar because there is no cut." },
  { q: "Where is the surgery done?", a: "At an empanelled hospital with an operating theatre and anaesthesia team. The clinic will tell you which hospital and help with the admission steps." },
  { q: "Is it covered by insurance?", a: "Most health policies cover planned gynae surgery. The hospital desk can check your policy and the paperwork before the date is fixed." },
];

export const PCOS_FAQS: FaqItem[] = [
  { q: "Can PCOS be cured?", a: "PCOS is a long-term condition, so it is managed rather than cured. With the right plan, most women keep their periods regular and their symptoms under control. The plan changes as your life and goals change." },
  { q: "Can I get pregnant if I have PCOS?", a: "Many women with PCOS get pregnant, some naturally and some with help to release an egg. Tell Dr. Riddhi if you are planning a pregnancy, so the tests and treatment are chosen with that in mind." },
  { q: "Do I have to lose weight?", a: "Not everyone with PCOS is overweight. If you are, even a small loss of weight can make periods more regular. You will get practical advice that fits your routine, not a strict diet." },
  { q: "Is an ultrasound always needed?", a: "Not always. PCOS can often be identified from your periods and blood tests. An ultrasound is advised only if it will change your plan." },
];

/** FAQ accordions inside each /learn/ article, keyed by article slug. */
export const ARTICLE_FAQS: Record<string, FaqItem[]> = {
  "pcos-myths": [
    { q: "Does PCOS go away after marriage or pregnancy?", a: "No. Marriage does not change PCOS. Symptoms may change over the years, so check-ups continue to matter." },
    { q: "Can teenagers have PCOS?", a: "Yes, but irregular periods are common in the first years after periods start. A doctor usually waits and watches before calling it PCOS." },
  ],
  "heavy-periods": [
    { q: "Is it heavy if it has always been like this?", a: "Yes. Long-standing does not mean normal. Many women bleed heavily from their first periods and assume everyone does." },
    { q: "When is heavy bleeding an emergency?", a: "Soaking a pad every hour for several hours, bleeding with dizziness or fainting, or bleeding with severe tummy pain needs urgent care. Medical emergency? Call 108 or 112." },
    { q: "Will I need surgery for heavy periods?", a: "Usually not. Most heavy periods are controlled with medicines. Surgery is reserved for causes like fibroids that do not respond, and it is always a discussion, not a default." },
  ],
  "first-pap-smear": [
    { q: "Who needs a Pap smear?", a: "Screening is generally advised from age 21 or within a few years of becoming sexually active, then repeated every three to five years depending on the test used." },
    { q: "Does it hurt?", a: "The speculum feels like pressure and the brush takes seconds. Most women rate it as uncomfortable rather than painful, and it is over quickly." },
    { q: "Can I have a smear during my period?", a: "Better to avoid it; blood can hide the cells the test needs. Book for a dry day if you can, or ask the clinic when you call." },
  ],
  "planning-a-baby": [
    { q: "We already started trying. Is it too late?", a: "Not at all. Start folic acid today and book the check anyway; everything on the list still helps." },
    { q: "Does my husband need to do anything?", a: "Mostly lifestyle: no smoking, limited alcohol, and a general health review. Formal testing for him becomes relevant if conception takes longer than expected." },
    { q: "How long after stopping contraception can I conceive?", a: "Fertility usually returns quickly after stopping pills, though cycles may take a month or two to settle. You can start folic acid while still on contraception." },
  ],
  "keyhole-recovery": [
    { q: "How long does full recovery take?", a: "The outside heals in about two weeks; inside takes a few weeks longer depending on what was done. Most women feel themselves again within two to four weeks for standard procedures." },
    { q: "Is shoulder-tip pain normal?", a: "Yes, it is the residual gas irritating the diaphragm. Walking and time clear it, usually within two days." },
    { q: "When can I drive?", a: "Usually after about a week, once you can move freely and brake without pain, and you are off sedating painkillers." },
  ],
};
