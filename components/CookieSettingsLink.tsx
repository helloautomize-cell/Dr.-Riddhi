"use client";

import { openCookieSettings } from "@/lib/consent";

/** Footer link that re-opens the cookie banner. */
export default function CookieSettingsLink() {
  return (
    <a
      href="#"
      onClick={(e) => {
        e.preventDefault();
        openCookieSettings();
      }}
    >
      Cookie settings
    </a>
  );
}
