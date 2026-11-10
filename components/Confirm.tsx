/**
 * Yellow CONFIRM chip marking a fact still needed from the clinic.
 * Renders in every non-indexable build; disappears from markup once
 * SITE_INDEXABLE=1 (launch-check also fails if any remain — Phase 3).
 */
export default function Confirm({ label = "confirm" }: { label?: string }) {
  if (process.env.SITE_INDEXABLE === "1") return null;
  return <span className="confirm">{label}</span>;
}

/**
 * Wraps content that exists only while facts are unconfirmed (dev notes,
 * placeholder blocks). Hidden entirely once SITE_INDEXABLE=1.
 */
export function DevOnly({ children }: { children: React.ReactNode }) {
  if (process.env.SITE_INDEXABLE === "1") return null;
  return <>{children}</>;
}
