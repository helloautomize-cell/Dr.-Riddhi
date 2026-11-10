/**
 * Cookie consent store. Essential storage only until the visitor accepts;
 * analytics may load only when getConsent() === "all" (wired up in Phase 6).
 */
export type Consent = "unset" | "essential" | "all";

const KEY = "mglgc-consent";

export function getConsent(): Consent {
  if (typeof window === "undefined") return "unset";
  const v = window.localStorage.getItem(KEY);
  return v === "essential" || v === "all" ? v : "unset";
}

export function setConsent(c: Exclude<Consent, "unset">) {
  window.localStorage.setItem(KEY, c);
  window.dispatchEvent(new CustomEvent<Consent>("consent", { detail: c }));
}

/** Re-open the banner (footer "Cookie settings" link). */
export function openCookieSettings() {
  window.dispatchEvent(new Event("consent:open"));
}

export function analyticsAllowed(): boolean {
  return getConsent() === "all";
}
