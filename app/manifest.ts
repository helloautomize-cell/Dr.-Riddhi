import type { MetadataRoute } from "next";
import { site } from "@/lib/site-config";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: `${site.doctor} — ${site.role}`,
    short_name: site.shortName,
    description: `Women's health, explained calmly. ${site.role} at ${site.clinic}, ${site.area}.`,
    start_url: "/",
    display: "browser",
    background_color: "#FBF7F3",
    theme_color: "#FBF7F3",
    icons: [{ src: "/icon.png", sizes: "512x512", type: "image/png" }],
  };
}
