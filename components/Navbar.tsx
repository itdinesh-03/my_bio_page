"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useSyncExternalStore } from "react";

const links = [
  { href: "/", label: "Home" },
  { href: "/cv", label: "CV" },
  // { href: "/freelancer", label: "Freelancer" },
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
      <div className="mx-auto flex max-w-5xl items-center gap-2 px-3 py-2.5 text-sm sm:gap-3 sm:px-5 sm:py-3">
        <Link href="/" className="shrink-0 font-bold">
          DB<span className="grad">.</span>
        </Link>

        <div
          className="mx-auto flex min-w-0 max-w-full items-center gap-0.5 overflow-x-auto rounded-full border p-0.5 sm:gap-1 sm:p-1 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
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
                className="shrink-0 rounded-full px-2.5 py-1.5 text-xs font-medium transition sm:px-4 sm:text-sm"
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

        <div className="flex shrink-0 items-center gap-1.5 sm:gap-2">
          <button
            onClick={toggle}
            className="btn btn-ghost !px-2 !py-1.5 sm:!px-3"
            aria-label="Toggle theme"
          >
            {dark ? "☀️" : "🌙"}
          </button>
          {path.startsWith("/cv") ? (
            <button
              onClick={() => window.print()}
              className="btn btn-primary !px-2.5 !py-1.5 text-xs sm:!px-3 sm:text-sm"
            >
              PDF
            </button>
          ) : (
            <Link
              href="/freelancer#contact"
              className="btn btn-primary !hidden !px-2.5 !py-1.5 text-xs sm:!inline-flex sm:!px-3 sm:text-sm"
            >
              Hire me
            </Link>
          )}
        </div>
      </div>
    </nav>
  );
}
