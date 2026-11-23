import type { Project } from "@/lib/data";

export default function ProjectCard({ p }: { p: Project }) {
  return (
    <article className="card flex flex-col p-5 transition hover:-translate-y-1">
      <p
        className="text-xs font-semibold uppercase tracking-wider"
        style={{ color: "var(--accent)" }}
      >
        {p.tag}
      </p>
      <h3 className="mt-1 text-lg font-bold">{p.name}</h3>
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
      {p.url && (
        <a
          href={p.url}
          target="_blank"
          rel="noopener noreferrer"
          className="no-print mt-4 text-sm font-semibold"
          style={{ color: "var(--accent)" }}
        >
          Live demo ↗
        </a>
      )}
      {p.note && (
        <p className="no-print mt-1 text-xs" style={{ color: "var(--muted)" }}>
          {p.note}
        </p>
      )}
    </article>
  );
}
