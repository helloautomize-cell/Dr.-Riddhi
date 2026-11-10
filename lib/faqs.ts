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
