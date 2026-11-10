"use client";

import { useEffect, useState, type ReactNode } from "react";
import { usePathname } from "next/navigation";

/**
 * Renders the final-CTA band unless the current page opts out with a
 * `<span data-no-final hidden />` marker in its markup. Lets the shell
 * live in the root layout while individual pages (404, styleguide)
 * can still suppress the band.
 */
export default function FinalGate({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  const [off, setOff] = useState(false);
  useEffect(() => {
    setOff(!!document.querySelector("[data-no-final]"));
  }, [pathname]);
  return off ? null : <>{children}</>;
}
