import type { MetadataRoute } from "next";
import { projects } from "@/lib/data";
import { getSiteUrl, OG_IMAGE, PROFILE_IMAGE } from "@/lib/seo";

export default function sitemap(): MetadataRoute.Sitemap {
  const siteUrl = getSiteUrl();
  const lastModified = new Date();
  const profile = `${siteUrl}${PROFILE_IMAGE}`;
  const og = `${siteUrl}${OG_IMAGE}`;
  const navIcon = `${siteUrl}/nav-icon.webp`;

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
      images: [profile, og, navIcon],
    },
    {
      url: `${siteUrl}/cv`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.9,
      images: [profile],
    },
    {
      url: `${siteUrl}/projects`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.85,
      images: [og],
    },
    ...projectEntries,
    // /freelancer intentionally omitted — page kept inactive / noindex
  ];
}
