import type { Metadata, Viewport } from "next";
import type { ReactNode } from "react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import RevealObserver from "@/components/RevealObserver";

export const metadata: Metadata = {
  title: "Dinesh Bamaniya — Full Stack Developer",
  description:
    "Full Stack Developer (Angular, Node.js, Python, AI agents). CV, projects and freelance services. Based in Ahmedabad, India.",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

const themeScript = `try{var t=localStorage.getItem('theme');document.documentElement.dataset.theme=t||(matchMedia('(prefers-color-scheme: dark)').matches?'dark':'light')}catch(e){}`;

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body>
        <Navbar />
        <RevealObserver />
        {children}
        <footer
          className="py-8 text-center text-xs"
          style={{ color: "var(--muted)" }}
        >
          © {new Date().getFullYear()} Dinesh Bamaniya · Ahmedabad, India
        </footer>
        <SpeedInsights />
      </body>
    </html>
  );
}
