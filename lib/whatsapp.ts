import { site } from "./site-config";

/** WhatsApp deep link with a pre-filled message built from the page title. */
export function waLink(pageTitle?: string): string {
  const msg = pageTitle
    ? `Hello, I would like to book a consultation. I was reading about ${pageTitle} on your website.`
    : "Hello, I would like to book a consultation with Dr. Riddhi D. Shah.";
  return `https://wa.me/${site.whatsappNumber}?text=${encodeURIComponent(msg)}`;
}
