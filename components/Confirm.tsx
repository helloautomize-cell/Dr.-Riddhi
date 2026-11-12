import { site } from "@/lib/site-config";

/**
 * Yellow CONFIRM chip marking a fact still needed from the clinic.
 * Renders only in dark/staging builds (SITE_INDEXABLE=0); production
 * must never show it — every call site uses a safe fallback instead.
 */
export default function Confirm({ label = "confirm" }: { label?: string }) {
  if (site.indexable) return null;
  return <span className="confirm">{label}</span>;
}

/**
 * Wraps content that exists only while facts are unconfirmed (dev notes,
 * placeholder blocks). Hidden in indexable builds.
 */
export function DevOnly({ children }: { children: React.ReactNode }) {
  if (site.indexable) return null;
  return <>{children}</>;
}
