"use client";

import { useEffect, useState } from "react";
import { getConsent, setConsent } from "@/lib/consent";

/**
 * Cookie banner: small flat card, bottom-left on desktop, above the mobile
 * action bar on phones. Essential storage only until the visitor chooses.
 */
export default function CookieBanner() {
  const [show, setShow] = useState(false);
  const [settings, setSettings] = useState(false);
  const [analytics, setAnalytics] = useState(false);

  useEffect(() => {
    if (getConsent() === "unset") {
      const t = setTimeout(() => setShow(true), 1200);
      return () => clearTimeout(t);
    }
  }, []);

  useEffect(() => {
    const reopen = () => {
      setSettings(true);
      setShow(true);
    };
    window.addEventListener("consent:open", reopen);
    return () => window.removeEventListener("consent:open", reopen);
  }, []);

  if (!show) return null;

  const done = (all: boolean) => {
    setConsent(all ? "all" : "essential");
    setShow(false);
  };

  return (
    <div className="ckb" role="dialog" aria-label="Cookie settings" aria-live="polite">
      <b>Cookies on this site</b>
      <p>
        We use essential storage to make the site work. Analytics cookies are
        only set if you accept them.
      </p>
      {settings && (
        <div className="ckb-opts">
          <label>
            <input type="checkbox" checked disabled /> Essential (always on)
          </label>
          <label>
            <input
              type="checkbox"
              checked={analytics}
              onChange={(e) => setAnalytics(e.target.checked)}
            />
            Analytics (anonymous usage statistics)
          </label>
        </div>
      )}
      <div className="ckb-btns">
        {settings ? (
          <button className="btn b-pink" onClick={() => done(analytics)}>
            Save choices
          </button>
        ) : (
          <>
            <button className="btn b-pink" onClick={() => done(true)}>
              Accept all
            </button>
            <button className="btn b-line" onClick={() => done(false)}>
              Essential only
            </button>
            <button className="ckb-set" onClick={() => setSettings(true)}>
              Settings
            </button>
          </>
        )}
      </div>
    </div>
  );
}
