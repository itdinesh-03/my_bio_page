import type { Metadata } from "next";
import { EMAIL, GITHUB, LINKEDIN } from "@/lib/data";

/** Canonical site origin — set NEXT_PUBLIC_SITE_URL (or SITE_URL) in production. */
export function getSiteUrl(): string {
  const fromEnv = (
    process.env.NEXT_PUBLIC_SITE_URL ||
    process.env.SITE_URL ||
    ""
  ).replace(/\/$/, "");
  if (fromEnv) return fromEnv;

  const vercel =
    process.env.VERCEL_PROJECT_PRODUCTION_URL || process.env.VERCEL_URL;
  if (vercel) return `https://${vercel.replace(/^https?:\/\//, "")}`;

  return "https://dinesh-bamaniya.vercel.app";
}

export const SITE_NAME = "Dinesh Bamaniya";
export const SITE_TITLE_DEFAULT = "Dinesh Bamaniya — Full Stack & AI Developer";
export const SITE_DESCRIPTION =
  "Full Stack Developer specializing in Angular, React, Node.js, Python, and AI agents. CV, projects, and freelance services. Based in Ahmedabad, India.";

export const SITE_KEYWORDS = [
  "Dinesh Bamaniya",
  "Full Stack Developer",
  "AI Developer",
  "Angular",
  "React",
  "Node.js",
  "Python",
  "FastAPI",
  "LangGraph",
  "LangChain",
  "Ahmedabad",
  "Freelance Developer",
];

export const OG_IMAGE = "/profile-photo.png";

export function pageMetadata({
  title,
  description,
  path = "/",
  noIndex = false,
}: {
  title: string;
  description: string;
  path?: string;
  noIndex?: boolean;
}): Metadata {
  const url = path === "/" ? "/" : path;

  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: {
      title,
      description,
      url,
      type: "website",
      images: [{ url: OG_IMAGE, alt: SITE_NAME }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [OG_IMAGE],
    },
    ...(noIndex
      ? { robots: { index: false, follow: false } }
      : {}),
  };
}

/** Person + WebSite JSON-LD for rich results. */
export function personJsonLd(siteUrl: string) {
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        "@id": `${siteUrl}/#website`,
        url: siteUrl,
        name: SITE_NAME,
        description: SITE_DESCRIPTION,
        publisher: { "@id": `${siteUrl}/#person` },
        inLanguage: "en",
      },
      {
        "@type": "Person",
        "@id": `${siteUrl}/#person`,
        name: SITE_NAME,
        url: siteUrl,
        image: `${siteUrl}${OG_IMAGE}`,
        email: EMAIL,
        jobTitle: "Full Stack & AI Developer",
        address: {
          "@type": "PostalAddress",
          addressLocality: "Ahmedabad",
          addressCountry: "IN",
        },
        sameAs: [LINKEDIN, GITHUB],
        knowsAbout: [
          "Full-stack web development",
          "Angular",
          "React",
          "Node.js",
          "Python",
          "FastAPI",
          "AI agents",
          "RAG",
          "LangGraph",
          "LangChain",
        ],
      },
    ],
  };
}
