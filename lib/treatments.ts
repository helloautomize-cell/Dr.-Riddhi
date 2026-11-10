/**
 * The 13 treatment pages, grouped as on the approved treatments hub.
 * Copy is the approved one-line description from the hub; urls follow site-plan.md.
 */
export interface Treatment {
  slug: string;
  group: GroupKey;
  name: string;
  desc: string;
  icon: string;
  href: string;
}

export type GroupKey =
  | "periods"
  | "lumps"
  | "preg"
  | "screen"
  | "later"
  | "surg";

export const GROUPS: Record<GroupKey, string> = {
  periods: "Periods and hormones",
  lumps: "Lumps and growths",
  preg: "Pregnancy plans",
  screen: "Screening and everyday",
  later: "Later life",
  surg: "Keyhole surgery",
};

export const TREATMENTS: Treatment[] = [
  { slug: "period-problems", group: "periods", name: "Period problems", desc: "Heavy, irregular or painful periods, and bleeding between periods.", icon: "c-drop", href: "/treatments/period-problems/" },
  { slug: "pcos", group: "periods", name: "PCOS", desc: "Irregular cycles, acne, weight and hair changes, and what they mean.", icon: "c-ovary", href: "/treatments/pcos/" },
  { slug: "endometriosis", group: "periods", name: "Endometriosis", desc: "Period pain that stops daily life, pain with sex, and trouble conceiving.", icon: "c-endo", href: "/treatments/endometriosis/" },
  { slug: "fibroids", group: "lumps", name: "Fibroids", desc: "Growths in the womb. Many only need watching, some need treatment.", icon: "c-fibroid", href: "/treatments/fibroids/" },
  { slug: "ovarian-cysts", group: "lumps", name: "Ovarian cysts", desc: "Cysts found on a scan, what they are and when they need care.", icon: "c-ovary", href: "/treatments/ovarian-cysts/" },
  { slug: "planning-a-pregnancy", group: "preg", name: "Planning a pregnancy", desc: "A check before you try: blood tests, vaccines, folic acid and lifestyle.", icon: "c-egg", href: "/treatments/planning-a-pregnancy/" },
  { slug: "fertility-check", group: "preg", name: "Fertility check for couples", desc: "A clear first look at both partners when pregnancy is taking time.", icon: "c-couple", href: "/treatments/fertility-check/" },
  { slug: "pap-smear-hpv-vaccine", group: "screen", name: "Pap smear and HPV vaccine", desc: "Screening for cervical cancer, and the vaccine that helps prevent it.", icon: "c-shield", href: "/treatments/pap-smear-hpv-vaccine/" },
  { slug: "infections-discharge", group: "screen", name: "Infections and discharge", desc: "White discharge, itching, burning and urinary problems.", icon: "c-germ", href: "/treatments/infections-discharge/" },
  { slug: "menopause", group: "later", name: "Menopause", desc: "Hot flushes, sleep, mood, bone health and the years before and after.", icon: "c-lotus", href: "/treatments/menopause/" },
  { slug: "laparoscopy", group: "surg", name: "Laparoscopy", desc: "Keyhole surgery through small cuts in the tummy.", icon: "c-lap", href: "/keyhole-surgery/" },
  { slug: "hysteroscopy", group: "surg", name: "Hysteroscopy", desc: "A thin camera inside the womb, with no cut.", icon: "c-hys", href: "/keyhole-surgery/" },
  { slug: "hysterectomy", group: "surg", name: "Hysterectomy", desc: "Removing the womb, by keyhole or vaginal route where possible.", icon: "c-uterus", href: "/keyhole-surgery/" },
];

/** Group keys in display order (matches the hub page). */
export const GROUP_ORDER: GroupKey[] = [
  "periods",
  "lumps",
  "preg",
  "screen",
  "later",
  "surg",
];

export function treatmentsIn(group: GroupKey): Treatment[] {
  return TREATMENTS.filter((t) => t.group === group);
}
