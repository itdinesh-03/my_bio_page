import type { MetadataRoute } from "next";
import { projects } from "@/lib/data";
import { getSiteUrl } from "@/lib/seo";

export default function sitemap(): MetadataRoute.Sitemap {
  const siteUrl = getSiteUrl();
  const lastModified = new Date();

  const projectEntries: MetadataRoute.Sitemap = projects.map((p) => ({
    url: `${siteUrl}/projects/${p.slug}`,
    lastModified,
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  return [
    {
      url: siteUrl,
      lastModified,
      changeFrequency: "monthly",
      priority: 1,
    },
    {
      url: `${siteUrl}/cv`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${siteUrl}/projects`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.85,
    },
    ...projectEntries,
    // /freelancer intentionally omitted — page kept inactive / noindex
  ];
}
