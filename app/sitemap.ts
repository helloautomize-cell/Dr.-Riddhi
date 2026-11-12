import type { MetadataRoute } from "next";
import { TREATMENTS } from "@/lib/treatments";
import { LEGAL_PAGES } from "@/lib/legal-content";
import { site } from "@/lib/site-config";

const LAST_MODIFIED = new Date(site.reviewedIso);

const STATIC_ROUTES: { path: string; priority: number; freq: "weekly" | "monthly" | "yearly" }[] = [
  { path: "/", priority: 1, freq: "weekly" },
  { path: "/treatments/", priority: 0.9, freq: "monthly" },
  { path: "/keyhole-surgery/", priority: 0.9, freq: "monthly" },
  { path: "/about/", priority: 0.8, freq: "monthly" },
  { path: "/your-first-visit/", priority: 0.8, freq: "monthly" },
  { path: "/contact/", priority: 0.8, freq: "monthly" },
  { path: "/learn/", priority: 0.7, freq: "monthly" },
  { path: "/faqs/", priority: 0.7, freq: "monthly" },
];

const ARTICLES = [
  "/learn/pcos-myths/",
  "/learn/heavy-periods/",
  "/learn/first-pap-smear/",
  "/learn/planning-a-baby/",
  "/learn/keyhole-recovery/",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const treatmentRoutes = TREATMENTS.filter((t) => t.group !== "surg").map(
    (t) => t.href,
  );
  const legalRoutes = LEGAL_PAGES.map((p) => `/legal/${p.slug}/`);

  const entries: MetadataRoute.Sitemap = [
    ...STATIC_ROUTES.map((r) => ({
      url: `${site.url}${r.path}`,
      lastModified: LAST_MODIFIED,
      changeFrequency: r.freq,
      priority: r.priority,
    })),
    ...treatmentRoutes.map((path) => ({
      url: `${site.url}${path}`,
      lastModified: LAST_MODIFIED,
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),
    ...ARTICLES.map((path) => ({
      url: `${site.url}${path}`,
      lastModified: LAST_MODIFIED,
      changeFrequency: "monthly" as const,
      priority: 0.6,
    })),
    ...legalRoutes.map((path) => ({
      url: `${site.url}${path}`,
      lastModified: LAST_MODIFIED,
      changeFrequency: "yearly" as const,
      priority: 0.3,
    })),
  ];
  return entries;
}
