import type { NextConfig } from "next";
import path from "path";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  outputFileTracingRoot: path.join(__dirname),
  // Allow phone / LAN browsers to load Next.js dev assets
  allowedDevOrigins: [
    "127.0.0.1",
    "localhost",
    "192.168.1.149",
    "192.168.1.145",
  ],
};

export default nextConfig;
