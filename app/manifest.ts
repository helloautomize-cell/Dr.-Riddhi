import type { MetadataRoute } from "next";
import { site } from "@/lib/site-config";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: `${site.doctor} — ${site.role}`,
    short_name: site.shortName,
    description: `Women's health, explained calmly. ${site.role} at ${site.clinic}, ${site.area}.`,
    start_url: "/",
    scope: "/",
    display: "standalone",
    background_color: "#FBF7F3",
    theme_color: "#FBF7F3",
    lang: "en-IN",
    categories: ["health", "medical"],
    icons: [
      { src: "/icon.png", sizes: "256x256", type: "image/png" },
      { src: "/images/icon-192.png", sizes: "192x192", type: "image/png" },
      { src: "/images/icon-512.png", sizes: "512x512", type: "image/png", purpose: "any" },
      { src: "/images/icon-512.png", sizes: "512x512", type: "image/png", purpose: "maskable" },
    ],
  };
}
