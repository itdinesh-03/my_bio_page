import Image from "next/image";
import Link from "next/link";
import Section from "@/components/Section";
import ProjectCard from "@/components/ProjectCard";
import {
  EMAIL,
  GITHUB,
  LINKEDIN,
  PHONE,
  education,
  projects,
  skills,
  work,
  yearsOfExperience,
} from "@/lib/data";
import { pageMetadata, PROFILE_IMAGE } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "CV & Experience",
  description:
    "Curriculum vitae of Dinesh Bamaniya — Full Stack Developer. Skills, work experience, education, and projects (Angular, Node.js, Python, AI).",
  path: "/cv",
});

export default function CV() {
  const years = yearsOfExperience();
  return (
    <main className="relative">
      <header className="relative">
        <div className="glow" aria-hidden="true" />
        <div className="relative mx-auto flex max-w-5xl flex-col items-center gap-6 px-4 pb-6 pt-10 text-center sm:px-5 sm:pt-12 sm:flex-row sm:text-left print:flex-row print:text-left">
          <Image
            src={PROFILE_IMAGE}
            alt="Dinesh Bamaniya, Full Stack Developer"
            width={224}
            height={224}
            sizes="(max-width: 640px) 96px, 112px"
            unoptimized
            preload
            fetchPriority="high"
            className="h-24 w-24 shrink-0 rounded-full object-cover ring-4 sm:h-28 sm:w-28"
            style={{ ["--tw-ring-color" as string]: "var(--accent)" }}
          />
          <div className="min-w-0 w-full">
            <h1 className="text-3xl font-extrabold tracking-tight sm:text-5xl">
              Dinesh <span className="grad">Bamaniya</span>
            </h1>
            <p className="mt-1 text-base font-medium sm:text-lg">
              Full Stack Developer
            </p>
            <div
              className="mt-3 flex flex-col items-center gap-1 text-sm sm:items-start"
              style={{ color: "var(--muted)" }}
            >
              <p>📍 Ahmedabad, India</p>
              <p className="break-all">✉️ {EMAIL}</p>
              <p>📞 {PHONE}</p>
              <p className="break-all">
                🔗{" "}
                <a
                  className="underline"
                  href={LINKEDIN}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {LINKEDIN.replace("https://www.", "")}
                </a>
              </p>
              <p className="break-all">
                🐙{" "}
                <a
                  className="underline"
                  href={GITHUB}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  github.com/itdinesh-03
                </a>
              </p>
            </div>
          </div>
        </div>
      </header>

      <Section title="Summary">
        <p style={{ color: "var(--muted)" }}>
          Full-stack developer with {years}+ years of experience building
          scalable web applications using Angular, Node.js and microservices.
          Specialised in enterprise e-commerce and fleet management systems,
          with growing depth in AI agents, RAG and LLM-powered products.
          Experienced with multiple databases, cloud services and modern
          frontend technologies.
        </p>
      </Section>

      <Section title="Skills">
        <div className="grid gap-4 sm:grid-cols-2 print:grid-cols-2">
          {Object.entries(skills).map(([k, v]) => (
            <div key={k} className="card p-5">
              <h3
                className="mb-3 text-sm font-semibold uppercase tracking-wider"
                style={{ color: "var(--muted)" }}
              >
                {k}
              </h3>
              <div className="flex flex-wrap gap-2">
                {v.map((s) => (
                  <span key={s} className="chip">
                    {s}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </Section>

      <Section title="Experience">
        <div
          className="card p-4 sm:p-6"
          style={{ borderLeft: "4px solid var(--accent)" }}
        >
          <div className="flex flex-col gap-2 sm:flex-row sm:flex-wrap sm:items-baseline sm:justify-between">
            <div className="min-w-0">
              <h3 className="text-lg font-bold">Full Stack Developer</h3>
              <p style={{ color: "var(--muted)" }}>
                iFlair Web Technologies Pvt. Ltd
              </p>
            </div>
            <span className="chip w-fit">May 2021 – Present</span>
          </div>
          <ul className="mt-4 list-disc space-y-2 pl-5">
            {work.map((w) => (
              <li key={w}>{w}</li>
            ))}
          </ul>
        </div>
      </Section>

      <Section id="projects" title="Projects">
        <div className="grid gap-4 md:grid-cols-2 print:grid-cols-2">
          {projects.map((p) => (
            <ProjectCard key={p.slug} p={p} />
          ))}
        </div>
        <Link
          href="/projects"
          className="no-print mt-5 inline-block text-sm font-semibold"
          style={{ color: "var(--accent)" }}
        >
          Browse project case studies →
        </Link>
      </Section>

      <Section title="Education">
        <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 print:grid-cols-3">
          {education.map(([d, s, y]) => (
            <div key={d} className="card p-5">
              <h3 className="font-bold">{d}</h3>
              <p className="text-sm" style={{ color: "var(--muted)" }}>
                {s}
              </p>
              <p
                className="mt-2 text-sm font-semibold"
                style={{ color: "var(--accent)" }}
              >
                {y}
              </p>
            </div>
          ))}
        </div>
      </Section>
    </main>
  );
}
