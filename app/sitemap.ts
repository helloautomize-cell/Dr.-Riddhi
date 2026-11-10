import type { MetadataRoute } from "next";
import { TREATMENTS } from "@/lib/treatments";
import { LEGAL_PAGES } from "@/lib/legal-content";

const BASE = "https://www.drriddhishah.com";

const STATIC_ROUTES = [
  "/",
  "/about/",
  "/treatments/",
  "/keyhole-surgery/",
  "/your-first-visit/",
  "/contact/",
  "/learn/",
  "/faqs/",
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
    (t) => t.href
  );
  const legalRoutes = LEGAL_PAGES.map((p) => `/legal/${p.slug}/`);
  const all = [...STATIC_ROUTES, ...treatmentRoutes, ...ARTICLES, ...legalRoutes];
  return all.map((path) => ({
    url: `${BASE}${path}`,
    changeFrequency: path === "/" ? "weekly" : "monthly",
    priority: path === "/" ? 1 : path.endsWith("/treatments/") ? 0.9 : 0.7,
  }));
}
