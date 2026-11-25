import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Section from "@/components/Section";
import { getProject, projects } from "@/lib/data";
import { pageMetadata } from "@/lib/seo";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const p = getProject(slug);
  if (!p) return {};
  return pageMetadata({
    title: `${p.name} — Case study`,
    description: p.summary,
    path: `/projects/${p.slug}`,
  });
}

export default async function ProjectCaseStudy({ params }: Props) {
  const { slug } = await params;
  const p = getProject(slug);
  if (!p) notFound();

  const idx = projects.findIndex((x) => x.slug === p.slug);
  const prev = idx > 0 ? projects[idx - 1] : null;
  const next = idx < projects.length - 1 ? projects[idx + 1] : null;

  return (
    <main className="relative">
      <header className="relative">
        <div className="glow" />
        <div className="relative mx-auto max-w-5xl px-4 pb-6 pt-10 sm:px-5 sm:pt-14">
          <p className="text-sm" style={{ color: "var(--muted)" }}>
            <Link href="/" className="underline-offset-2 hover:underline">
              Home
            </Link>
            <span aria-hidden="true"> / </span>
            <Link
              href="/projects"
              className="underline-offset-2 hover:underline"
            >
              Projects
            </Link>
            <span aria-hidden="true"> / </span>
            {p.name}
          </p>
          <p
            className="mt-4 text-xs font-semibold uppercase tracking-wider"
            style={{ color: "var(--accent)" }}
          >
            {p.tag}
          </p>
          <h1 className="mt-1 text-3xl font-extrabold tracking-tight sm:text-5xl">
            {p.name}
          </h1>
          <p
            className="mt-4 max-w-2xl text-sm sm:text-base"
            style={{ color: "var(--muted)" }}
          >
            {p.summary}
          </p>
          <div className="mt-6 flex flex-wrap gap-2 sm:gap-3">
            {p.url && (
              <a
                className="btn btn-primary"
                href={p.url}
                target="_blank"
                rel="noopener noreferrer"
              >
                Live demo ↗
              </a>
            )}
            {p.github && (
              <a
                className="btn btn-ghost"
                href={p.github}
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub ↗
              </a>
            )}
            <Link className="btn btn-ghost" href="/projects">
              All projects
            </Link>
          </div>
          {p.note && (
            <p className="mt-3 text-xs" style={{ color: "var(--muted)" }}>
              {p.note}
            </p>
          )}
        </div>
      </header>

      <Section title="Highlights">
        <ul
          className="list-disc space-y-2 pl-5 text-sm sm:text-base"
          style={{ color: "var(--muted)" }}
        >
          {p.points.map((x) => (
            <li key={x}>{x}</li>
          ))}
        </ul>
      </Section>

      <Section title="Outcome">
        <p
          className="card p-5 text-sm sm:text-base"
          style={{ color: "var(--muted)" }}
        >
          {p.outcome}
        </p>
      </Section>

      <Section title="Stack">
        <div className="flex flex-wrap gap-2">
          {p.stack.map((s) => (
            <span key={s} className="chip">
              {s}
            </span>
          ))}
        </div>
      </Section>

      <Section title="More projects">
        <div className="flex flex-wrap justify-between gap-3 text-sm font-semibold">
          {prev ? (
            <Link
              href={`/projects/${prev.slug}`}
              style={{ color: "var(--accent)" }}
            >
              ← {prev.name}
            </Link>
          ) : (
            <span />
          )}
          {next ? (
            <Link
              href={`/projects/${next.slug}`}
              style={{ color: "var(--accent)" }}
            >
              {next.name} →
            </Link>
          ) : (
            <span />
          )}
        </div>
      </Section>
    </main>
  );
}
