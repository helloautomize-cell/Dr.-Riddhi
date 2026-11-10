/**
 * Single source of truth for practice facts.
 * Items still needing the clinic's sign-off are listed in TODO_CONFIRM and
 * rendered as yellow CONFIRM chips in non-production builds.
 */

export const site = {
  doctor: "Dr. Riddhi D. Shah",
  shortName: "Dr. Riddhi",
  role: "Gynaecologist and laparoscopic surgeon",
  clinic: "Mumbai Gastro-Liver and Gynaec Centre",
  clinicShort: "MGLGC",
  tagline: "Gynaecology · Borivali West",
  brandTag: "The Chill Gynae",

  address:
    "A-wing 301/302, Swastik Building, Swami Vivekanand Road (S.V. Road), next to Vijay Sales, opp. Bharat Petroleum, Dattani Nagar, Borivali West, Mumbai 400092",
  addressShort:
    "A-wing 301/302, Swastik Building, S.V. Road, Borivali West, Mumbai 400092",
  area: "Borivali West",
  city: "Mumbai",
  pincode: "400092",
  geo: { lat: 19.21765, lng: 72.85177 },
  mapsUrl: "https://maps.google.com/?q=19.21765,72.85177",

  phones: [
    { label: "+91 91521 26119", href: "tel:+919152126119" },
    { label: "+91 98339 93119", href: "tel:+919833993119" },
  ],
  whatsappNumber: "919152126119", // CONFIRM: which number is on WhatsApp
  email: "mglgc1111@gmail.com",

  // OPD hours used by the live open/closed pill (IST, minutes from midnight)
  opd: {
    days: [1, 2, 3, 4, 5], // Mon to Fri
    sessions: [
      [600, 720], // 10:00 to 12:00
      [960, 1080], // 16:00 to 18:00
    ],
    label: "Mon to Fri · 10 am to 12 pm · 4 pm to 6 pm",
    labelShort: "Monday to Friday · 10 am to 12 pm and 4 pm to 6 pm",
  },

  socials: {
    instagram: "https://www.instagram.com/thechillgynae",
    youtube: "https://youtube.com/@thechillgynae",
  },

  emergency: "Emergency? Call 108 or 112",
  footerFine:
    "Information on this site is for education and does not replace a consultation. Some images are AI-assisted.",

  qualifications: "MBBS, DNB (OBGY), FMAS, DRM",
  registration: null as string | null, // CONFIRM: MMC registration number
  languages: null as string[] | null, // CONFIRM: languages spoken
} as const;

export const TODO_CONFIRM = [
  "MMC registration number",
  "WhatsApp number",
  "Landline still in use (022 4745 4296)?",
  "Languages spoken",
  "Fees and payment methods",
  "Empanelled hospital names (never printed, wording only)",
  "Follower counts",
  "Videos to feature",
  "Visit length",
  "Review dates",
  "Pregnancy (antenatal) care offered?",
] as const;
