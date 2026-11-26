"use client";

import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { useEffect, useState } from "react";

/**
 * Load Vercel Analytics / Speed Insights after the page is interactive so they
 * stay off the critical path (auditors flag early third-party scripts).
 */
export default function DeferredVitals() {
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const enable = () => setReady(true);

    // Prefer idle callback when available; avoid `in window` narrowing bugs.
    if (typeof window.requestIdleCallback === "function") {
      const id = window.requestIdleCallback(enable, { timeout: 2500 });
      return () => window.cancelIdleCallback(id);
    }

    const t = setTimeout(enable, 1500);
    return () => clearTimeout(t);
  }, []);

  if (!ready) return null;

  return (
    <>
      <Analytics />
      <SpeedInsights />
    </>
  );
}
