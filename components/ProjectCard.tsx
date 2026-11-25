import Link from "next/link";
import type { Project } from "@/lib/data";

export default function ProjectCard({ p }: { p: Project }) {
  return (
    <article className="card flex min-w-0 flex-col p-4 transition hover:-translate-y-1 sm:p-5">
      <p
        className="text-xs font-semibold uppercase tracking-wider"
        style={{ color: "var(--accent)" }}
      >
        {p.tag}
      </p>
      <h3 className="mt-1 break-words text-base font-bold sm:text-lg">
        <Link
          href={`/projects/${p.slug}`}
          className="hover:underline focus-visible:underline"
        >
          {p.name}
        </Link>
      </h3>
      <ul
        className="mt-3 list-disc space-y-1 pl-5 text-sm"
        style={{ color: "var(--muted)" }}
      >
        {p.points.map((x) => (
          <li key={x}>{x}</li>
        ))}
      </ul>
      <div className="mt-4 flex flex-wrap gap-2">
        {p.stack.map((s) => (
          <span key={s} className="chip">
            {s}
          </span>
        ))}
      </div>
      <div className="no-print mt-4 flex flex-wrap items-center gap-3 text-sm font-semibold">
        <Link href={`/projects/${p.slug}`} style={{ color: "var(--accent)" }}>
          Case study →
        </Link>
        {p.url && (
          <a
            href={p.url}
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: "var(--accent)" }}
          >
            Live demo ↗
          </a>
        )}
      </div>
      {p.note && (
        <p className="no-print mt-1 text-xs" style={{ color: "var(--muted)" }}>
          {p.note}
        </p>
      )}
    </article>
  );
}
