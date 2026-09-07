import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://projecttools-rosy.vercel.app",
      lastModified: new Date(),
    },
  ];
}