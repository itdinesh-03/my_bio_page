import Image from "next/image";
import Section from "@/components/Section";
import ProjectCard from "@/components/ProjectCard";
import {
  EMAIL,
  LINKEDIN,
  PHONE,
  education,
  projects,
  skills,
  work,
  yearsOfExperience,
} from "@/lib/data";

export const metadata = { title: "CV — Dinesh Bamaniya" };

export default function CV() {
  const years = yearsOfExperience();
  return (
    <main className="relative overflow-x-hidden">
      <header className="relative">
        <div className="glow" />
        <div className="relative mx-auto flex max-w-5xl flex-col items-center gap-6 px-5 pb-6 pt-12 text-center sm:flex-row sm:text-left print:flex-row print:text-left">
          <Image
            src="/profile-photo.png"
            alt="Dinesh Bamaniya"
            width={112}
            height={112}
            priority
            className="h-28 w-28 rounded-full object-cover ring-4"
            style={{ ["--tw-ring-color" as string]: "var(--accent)" }}
          />
          <div>
            <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl">
              Dinesh <span className="grad">Bamaniya</span>
            </h1>
            <p className="mt-1 text-lg font-medium">Full Stack Developer</p>
            <p className="mt-2 text-sm" style={{ color: "var(--muted)" }}>
              📍 Ahmedabad, India · ✉️ {EMAIL} · 📞 {PHONE}
            </p>
            <p className="mt-1 text-sm" style={{ color: "var(--muted)" }}>
              🔗 {LINKEDIN.replace("https://www.", "")}
            </p>
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
          className="card p-6"
          style={{ borderLeft: "4px solid var(--accent)" }}
        >
          <div className="flex flex-wrap items-baseline justify-between gap-2">
            <div>
              <h3 className="text-lg font-bold">Full Stack Developer</h3>
              <p style={{ color: "var(--muted)" }}>
                iFlair Web Technologies Pvt. Ltd
              </p>
            </div>
            <span className="chip">May 2021 – Present</span>
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
            <ProjectCard key={p.name} p={p} />
          ))}
        </div>
      </Section>

      <Section title="Education">
        <div className="grid gap-4 sm:grid-cols-3 print:grid-cols-3">
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
