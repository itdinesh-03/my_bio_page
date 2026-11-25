import Link from "next/link";
import Section from "@/components/Section";
import ProjectCard from "@/components/ProjectCard";
import { projects } from "@/lib/data";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Projects",
  description:
    "Selected projects by Dinesh Bamaniya — e-commerce, AI agents, RAG, fleet management, and integrations.",
  path: "/projects",
});

export default function ProjectsPage() {
  return (
    <main className="relative">
      <header className="relative">
        <div className="glow" />
        <div className="relative mx-auto max-w-5xl px-4 pb-4 pt-10 sm:px-5 sm:pt-14">
          <p className="text-sm" style={{ color: "var(--muted)" }}>
            <Link href="/" className="underline-offset-2 hover:underline">
              Home
            </Link>
            <span aria-hidden="true"> / </span>
            Projects
          </p>
          <h1 className="mt-2 text-3xl font-extrabold tracking-tight sm:text-5xl">
            Selected <span className="grad">projects</span>
          </h1>
          <p
            className="mt-3 max-w-2xl text-sm sm:text-base"
            style={{ color: "var(--muted)" }}
          >
            Case studies covering full-stack platforms, AI agents, and product
            engineering. Open any card for context, stack, and outcomes.
          </p>
        </div>
      </header>

      <Section title="All projects" sub={`${projects.length} shipped builds`}>
        <div className="grid gap-4 md:grid-cols-2">
          {projects.map((p) => (
            <ProjectCard key={p.slug} p={p} />
          ))}
        </div>
      </Section>
    </main>
  );
}
