import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: "/private/",
    },
    host: "harrys-menu.uz",
    sitemap: "https://the-harrys.uz/sitemap.xml",
  };
}
