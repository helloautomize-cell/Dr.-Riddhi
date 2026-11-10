import type { ReactNode } from "react";
import {
  Top,
  MiniHeader,
  MenuSheet,
  FinalCTA,
  Footer,
  MobileBar,
} from "./chrome";
import FinalGate from "./FinalGate";

/**
 * Shared page chrome matching the approved design's wrapper:
 * mini header, menu sheet, util bar + header, main (+ final CTA), footer, mobile bar.
 */
export default function PageShell({
  active,
  dark = false,
  final = true,
  waTitle,
  children,
}: {
  active?: string;
  dark?: boolean;
  final?: boolean;
  waTitle?: string;
  children: ReactNode;
}) {
  return (
    <>
      <MiniHeader active={active} />
      <MenuSheet active={active} />
      <Top active={active} dark={dark} />
      <main>
        {children}
        {final && (
          <FinalGate>
            <FinalCTA />
          </FinalGate>
        )}
      </main>
      <Footer />
      <MobileBar waTitle={waTitle} />
    </>
  );
}
