"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useSyncExternalStore } from "react";

const links = [
  { href: "/", label: "Home" },
  { href: "/cv", label: "CV" },
  { href: "/freelancer", label: "Freelancer" },
];

function getThemeIsDark() {
  return document.documentElement.dataset.theme !== "light";
}

function subscribeTheme(onStoreChange: () => void) {
  const observer = new MutationObserver(onStoreChange);
  observer.observe(document.documentElement, {
    attributes: true,
    attributeFilter: ["data-theme"],
  });
  return () => observer.disconnect();
}

export default function Navbar() {
  const path = usePathname();
  const dark = useSyncExternalStore(subscribeTheme, getThemeIsDark, () => true);

  const toggle = () => {
    const next = dark ? "light" : "dark";
    document.documentElement.dataset.theme = next;
    try {
      localStorage.setItem("theme", next);
    } catch {}
  };

  return (
    <nav
      className="no-print sticky top-0 z-30 border-b backdrop-blur-sm"
      style={{
        borderColor: "var(--line)",
        background: "color-mix(in srgb, var(--bg) 80%, transparent)",
      }}
    >
      <div className="mx-auto flex max-w-5xl items-center justify-between gap-3 px-5 py-3 text-sm">
        <Link href="/" className="font-bold">
          DB<span className="grad">.</span>
        </Link>

        <div
          className="flex items-center gap-1 rounded-full border p-1"
          style={{ borderColor: "var(--line)" }}
        >
          {links.map((l) => {
            const active =
              l.href === "/" ? path === "/" : path.startsWith(l.href);
            return (
              <Link
                key={l.href}
                href={l.href}
                aria-current={active ? "page" : undefined}
                className="rounded-full px-4 py-1.5 font-medium transition"
                style={
                  active
                    ? { background: "var(--accent)", color: "#fff" }
                    : { color: "var(--muted)" }
                }
              >
                {l.label}
              </Link>
            );
          })}
        </div>

        <div className="flex gap-2">
          <button
            onClick={toggle}
            className="btn btn-ghost !py-1.5"
            aria-label="Toggle theme"
          >
            {dark ? "☀️" : "🌙"}
          </button>
          {path.startsWith("/cv") ? (
            <button
              onClick={() => window.print()}
              className="btn btn-primary !py-1.5"
            >
              PDF
            </button>
          ) : (
            <Link
              href="/freelancer#contact"
              className="btn btn-primary !py-1.5"
            >
              Hire me
            </Link>
          )}
        </div>
      </div>
    </nav>
  );
}
