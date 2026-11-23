import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Dinesh Bamaniya — Full Stack Developer",
  description:
    "Full Stack Developer with 4+ years of experience in Angular, Node.js, Python and microservices. Based in Ahmedabad, India.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>{children}</body>
    </html>
  );
}
