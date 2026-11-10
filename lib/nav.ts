export interface NavItem {
  href: string;
  label: string;
  key: string;
}

export const NAV: NavItem[] = [
  { href: "/your-first-visit/", label: "Your first visit", key: "visit" },
  { href: "/treatments/", label: "Treatments", key: "treat" },
  { href: "/keyhole-surgery/", label: "Keyhole surgery", key: "surg" },
  { href: "/about/", label: "About", key: "about" },
  { href: "/learn/", label: "Learn", key: "learn" },
  { href: "/contact/", label: "Contact", key: "contact" },
];

export const BOOK_HREF = "/contact/#book";
