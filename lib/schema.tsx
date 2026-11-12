import { site } from "./site-config";

export const CLINIC_ID = `${site.url}/#clinic`;
export const SITE_ID = `${site.url}/#website`;
export const DOCTOR_ID = `${site.url}/#physician`;

/** Physician + MedicalClinic entity — the practice itself. */
export function physicianClinicLd() {
  return {
    "@context": "https://schema.org",
    "@type": ["Physician", "MedicalClinic"],
    "@id": CLINIC_ID,
    name: `${site.doctor} — ${site.clinic}`,
    description: `${site.role} at ${site.clinic}, ${site.area}, ${site.city}. Periods, PCOS, pregnancy plans, menopause and keyhole surgery.`,
    url: `${site.url}/`,
    image: `${site.url}/opengraph-image`,
    telephone: site.phones[0].label,
    email: site.email,
    priceRange: "₹₹",
    address: {
      "@type": "PostalAddress",
      streetAddress: "A-wing 301/302, Swastik Building, S.V. Road, Dattani Nagar",
      addressLocality: "Borivali West",
      addressRegion: "Maharashtra",
      postalCode: site.pincode,
      addressCountry: "IN",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: site.geo.lat,
      longitude: site.geo.lng,
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "10:00",
        closes: "12:00",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "16:00",
        closes: "18:00",
      },
    ],
    sameAs: [site.socials.instagram, site.socials.youtube],
    medicalSpecialty: ["Gynecologic", "Obstetric"],
    availableService: [
      "Gynaecology consultations",
      "Laparoscopic and hysteroscopic surgery",
      "PCOS and period care",
      "Preconception and fertility evaluation",
      "Cervical cancer screening and HPV vaccination",
      "Menopause care",
    ],
    founder: {
      "@type": "Person",
      "@id": DOCTOR_ID,
      name: site.doctor,
      jobTitle: site.role,
      alumniOf: "MBBS, DNB (OBGY), FMAS, DRM",
    },
  };
}

export function webSiteLd() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": SITE_ID,
    url: `${site.url}/`,
    name: `${site.doctor} — ${site.role}`,
    publisher: { "@id": CLINIC_ID },
    inLanguage: "en-IN",
  };
}

/** BreadcrumbList — items: [{ label, path? }] last item has no path (current page). */
export function breadcrumbLd(items: { label: string; path?: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((c, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: c.label,
      ...(c.path ? { item: `${site.url}${c.path}` } : {}),
    })),
  };
}

/** MedicalWebPage for treatment/health info pages. */
export function medicalWebPageLd({
  path,
  title,
  description,
}: {
  path: string;
  title: string;
  description: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "MedicalWebPage",
    "@id": `${site.url}${path}#page`,
    url: `${site.url}${path}`,
    name: title,
    description,
    inLanguage: "en-IN",
    isPartOf: { "@id": SITE_ID },
    about: { "@id": CLINIC_ID },
    lastReviewed: site.reviewedIso,
    reviewedBy: { "@id": DOCTOR_ID },
    medicalAudience: { "@type": "MedicalAudience", audienceType: "Patient" },
  };
}

/** Article schema for learn posts. */
export function articleLd({
  path,
  title,
  description,
}: {
  path: string;
  title: string;
  description: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    "@id": `${site.url}${path}#article`,
    headline: title,
    description,
    inLanguage: "en-IN",
    url: `${site.url}${path}`,
    image: `${site.url}/opengraph-image`,
    datePublished: site.reviewedIso,
    dateModified: site.reviewedIso,
    isPartOf: { "@id": SITE_ID },
    author: {
      "@type": "Person",
      "@id": DOCTOR_ID,
      name: site.doctor,
      jobTitle: site.role,
    },
    publisher: { "@id": CLINIC_ID },
  };
}

/** FAQPage from { q, a } items. */
export function faqPageLd(items: { q: string; a: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((it) => ({
      "@type": "Question",
      name: it.q,
      acceptedAnswer: { "@type": "Answer", text: it.a },
    })),
  };
}

/** Renders a JSON-LD script tag. Accepts one object or an array merged into @graph. */
export function JsonLd({ data }: { data: object | object[] }) {
  const json = Array.isArray(data)
    ? { "@context": "https://schema.org", "@graph": data.map((d) => stripContext(d)) }
    : data;
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(json) }}
    />
  );
}

function stripContext(obj: object) {
  const { "@context": _drop, ...rest } = obj as Record<string, unknown>;
  return rest;
}
