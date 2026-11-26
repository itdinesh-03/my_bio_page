import type { Metadata, Viewport } from "next";
import type { ReactNode } from "react";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import RevealObserver from "@/components/RevealObserver";
import JsonLd from "@/components/JsonLd";
import { GITHUB, LINKEDIN } from "@/lib/data";
import {
  getSiteUrl,
  OG_IMAGE,
  personJsonLd,
  PROFILE_IMAGE,
  SITE_DESCRIPTION,
  SITE_KEYWORDS,
  SITE_NAME,
  SITE_TITLE_DEFAULT,
} from "@/lib/seo";
import Link from "next/link";

const sans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
  // Only weights used on the site — smaller font payload
  weight: ["400", "500", "600", "700", "800"],
  preload: true,
});

const siteUrl = getSiteUrl();

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: SITE_TITLE_DEFAULT,
    template: `%s · ${SITE_NAME}`,
  },
  description: SITE_DESCRIPTION,
  applicationName: SITE_NAME,
  authors: [{ name: SITE_NAME, url: siteUrl }],
  creator: SITE_NAME,
  publisher: SITE_NAME,
  keywords: SITE_KEYWORDS,
  category: "technology",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "/",
    siteName: SITE_NAME,
    title: SITE_TITLE_DEFAULT,
    description: SITE_DESCRIPTION,
    images: [
      {
        url: OG_IMAGE,
        width: 1200,
        height: 630,
        alt: SITE_NAME,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: SITE_TITLE_DEFAULT,
    description: SITE_DESCRIPTION,
    images: [OG_IMAGE],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/favicon-32.png", type: "image/png", sizes: "32x32" },
      { url: "/icon-192.png", type: "image/png", sizes: "192x192" },
    ],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180" }],
  },
  other: {
    "og:image:type": "image/png",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#fafaf9" },
    { media: "(prefers-color-scheme: dark)", color: "#0b0b10" },
  ],
  colorScheme: "light dark",
};

const themeScript = `try{var t=localStorage.getItem('theme');document.documentElement.dataset.theme=t||(matchMedia('(prefers-color-scheme: dark)').matches?'dark':'light')}catch(e){}`;

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className={sans.variable} suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
        <JsonLd data={personJsonLd(siteUrl)} />
        {/* Preload the optimized WebP avatar used as LCP on home/CV */}
        <link
          rel="preload"
          as="image"
          href={PROFILE_IMAGE}
          type="image/webp"
          fetchPriority="high"
        />
      </head>
      <body>
        <a href="#main" className="skip-link">
          Skip to content
        </a>
        <Navbar />
        <RevealObserver />
        <div id="main">{children}</div>
        <footer
          className="border-t px-4 py-8 text-center text-xs sm:px-5"
          style={{ color: "var(--muted)", borderColor: "var(--line)" }}
        >
          <p>
            © {new Date().getFullYear()} Dinesh Bamaniya · Full Stack &amp; AI
            Developer · Ahmedabad, India
          </p>
          <nav
            aria-label="Social profiles"
            className="mt-3 flex flex-wrap items-center justify-center gap-4 text-sm font-semibold"
          >
            <a
              href={LINKEDIN}
              target="_blank"
              rel="noopener noreferrer me"
              style={{ color: "var(--accent)" }}
            >
              LinkedIn
            </a>
            <a
              href={GITHUB}
              target="_blank"
              rel="noopener noreferrer me"
              style={{ color: "var(--accent)" }}
            >
              GitHub
            </a>
            <Link href="/cv" style={{ color: "var(--accent)" }}>
              Curriculum vitae
            </Link>
            <Link href="/projects" style={{ color: "var(--accent)" }}>
              Portfolio projects
            </Link>
          </nav>
        </footer>
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
