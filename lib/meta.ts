import type { Metadata } from "next";
import { site } from "./site-config";

interface PageMetaInput {
  /** Route path with trailing slash, e.g. "/about/". */
  path: string;
  /** Self-contained page title (already includes the doctor's name). */
  title: string;
  description: string;
  /** Override OG type; defaults to "website" ("article" for learn pages). */
  type?: "website" | "article";
  /** Per-page robots override (e.g. noindex utility pages). */
  noindex?: boolean;
}

/**
 * Per-page metadata: absolute title, canonical URL, Open Graph and Twitter
 * cards pointing at the shared OG image, all keyed off site.url so the
 * Vercel domain and a future custom domain share one switch (SITE_URL).
 */
export function pageMeta({
  path,
  title,
  description,
  type = "website",
  noindex = false,
}: PageMetaInput): Metadata {
  const url = `${site.url}${path}`;
  return {
    title: { absolute: title },
    description,
    alternates: { canonical: url },
    robots: noindex || !site.indexable
      ? { index: false, follow: false }
      : { index: true, follow: true },
    openGraph: {
      type,
      url,
      siteName: `${site.doctor} — ${site.role}`,
      locale: "en_IN",
      title,
      description,
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
    },
  };
}
