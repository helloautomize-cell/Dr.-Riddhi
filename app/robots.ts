import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  if (process.env.SITE_INDEXABLE === "1") {
    return {
      rules: [
        {
          userAgent: "*",
          allow: "/",
        },
      ],
      sitemap: "https://www.drriddhishah.com/sitemap.xml",
    };
  }
  return { rules: [{ userAgent: "*", disallow: "/" }] };
}
