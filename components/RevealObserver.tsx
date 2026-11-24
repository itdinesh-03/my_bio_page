"use client";
import { useEffect } from "react";
import { usePathname } from "next/navigation";

export default function RevealObserver() {
  const path = usePathname();

  useEffect(() => {
    if ("scrollRestoration" in history) {
      history.scrollRestoration = "manual";
    }
  }, []);

  useEffect(() => {
    if (!window.location.hash) {
      window.scrollTo(0, 0);
    }

    const nodes = Array.from(document.querySelectorAll<HTMLElement>(".reveal"));

    // Mark anything already on screen so it never flashes hidden
    nodes.forEach((el) => {
      const top = el.getBoundingClientRect().top;
      if (top < window.innerHeight * 0.95) {
        el.classList.add("in");
      }
    });

    document.documentElement.dataset.reveal = "ready";

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("in");
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.08, rootMargin: "0px 0px -8% 0px" },
    );

    nodes.forEach((el) => {
      if (!el.classList.contains("in")) io.observe(el);
    });

    // Failsafe: never leave content invisible
    const failsafe = window.setTimeout(() => {
      document.querySelectorAll(".reveal:not(.in)").forEach((el) => {
        el.classList.add("in");
      });
    }, 1200);

    return () => {
      io.disconnect();
      window.clearTimeout(failsafe);
      delete document.documentElement.dataset.reveal;
    };
  }, [path]);

  return null;
}
