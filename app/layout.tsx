import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import RevealObserver from "@/components/RevealObserver";

export const metadata: Metadata = {
  title: "Dinesh Bamaniya — Full Stack Developer",
  description:
    "Full Stack Developer (Angular, Node.js, Python, AI agents). CV, projects and freelance services. Based in Ahmedabad, India.",
};

const themeScript = `try{var t=localStorage.getItem('theme');document.documentElement.dataset.theme=t||(matchMedia('(prefers-color-scheme: dark)').matches?'dark':'light')}catch(e){}`;

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
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
      </body>
    </html>
  );
}
