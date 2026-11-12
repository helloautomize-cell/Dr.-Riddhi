import type { Metadata, Viewport } from "next";
import { Figtree, Instrument_Serif } from "next/font/google";
import "./globals.css";
import Sprite from "@/components/Sprite";
import Effects from "@/components/Effects";
import CookieBanner from "@/components/CookieBanner";
import PageShell from "@/components/PageShell";
import { PreviewBadge } from "@/components/chrome";
import { site } from "@/lib/site-config";

const sans = Figtree({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-sans",
  display: "swap",
});
const serif = Instrument_Serif({
  subsets: ["latin"],
  weight: "400",
  style: ["normal", "italic"],
  variable: "--font-serif",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: `${site.doctor} · ${site.role} in ${site.area}, ${site.city}`,
  description:
    "Women's health, explained calmly. Dr. Riddhi D. Shah, gynaecologist and laparoscopic surgeon at Mumbai Gastro-Liver and Gynaec Centre, Borivali West.",
  applicationName: site.doctor,
  creator: site.doctor,
  publisher: site.clinic,
  category: "health",
  verification: {
    google: process.env.GOOGLE_SITE_VERIFICATION,
  },
  robots: site.indexable
    ? { index: true, follow: true }
    : { index: false, follow: false, nocache: true },
  openGraph: {
    type: "website",
    url: site.url,
    siteName: `${site.doctor} — ${site.role}`,
    locale: "en_IN",
    title: `${site.doctor} · ${site.role} in ${site.area}, ${site.city}`,
    description:
      "Periods, PCOS, pregnancy plans, menopause and keyhole surgery, explained calmly at Mumbai Gastro-Liver and Gynaec Centre.",
  },
  twitter: {
    card: "summary_large_image",
    title: `${site.doctor} · ${site.role}`,
    description:
      "Women's health, understood. Gynaecologist and laparoscopic surgeon in Borivali West, Mumbai.",
  },
};

export const viewport: Viewport = {
  themeColor: "#FBF7F3",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en-IN" data-scroll-behavior="smooth" className={`${sans.variable} ${serif.variable}`}>
      <body>
        <script
          dangerouslySetInnerHTML={{
            __html: "document.body.classList.add('on-load')",
          }}
        />
        <Sprite />
        <PreviewBadge />
        <PageShell>{children}</PageShell>
        <CookieBanner />
        <Effects />
      </body>
    </html>
  );
}
