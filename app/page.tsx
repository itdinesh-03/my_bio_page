import Image from "next/image";
import Link from "next/link";
import Section from "@/components/Section";
import ProjectCard from "@/components/ProjectCard";
import {
  EMAIL,
  GITHUB,
  LINKEDIN,
  PHONE_LINK,
  projects,
  yearsOfExperience,
} from "@/lib/data";
import type { Metadata } from "next";
import { pageMetadata, SITE_DESCRIPTION, SITE_TITLE_DEFAULT } from "@/lib/seo";

export const metadata: Metadata = {
  ...pageMetadata({
    title: SITE_TITLE_DEFAULT,
    description: SITE_DESCRIPTION,
    path: "/",
  }),
  // Bypass root title template so the home title is not duplicated.
  title: { absolute: SITE_TITLE_DEFAULT },
};

const focus = [
  [
    "🧩",
    "Full-stack web apps",
    "Angular / React frontends with Node.js and FastAPI backends, built to scale.",
  ],
  [
    "🤖",
    "AI agents & RAG",
    "LangGraph, LangChain and MCP: document Q&A, tool-calling agents, streaming chat.",
  ],
  [
    "🛒",
    "E-commerce & payments",
    "Multi-vendor platforms, 5+ payment gateways, queues and search at scale.",
  ],
];

export default function Home() {
  const years = yearsOfExperience();
  return (
    <main className="relative">
      <header className="relative">
        <div className="glow" />
        <div className="relative mx-auto flex max-w-5xl flex-col items-center gap-6 px-4 pb-8 pt-10 text-center sm:gap-8 sm:px-5 sm:pb-10 sm:pt-16 sm:flex-row sm:text-left">
          <Image
            src="/profile-photo.png"
            alt="Dinesh Bamaniya"
            width={150}
            height={150}
            priority
            className="h-28 w-28 shrink-0 rounded-full object-cover ring-4 sm:h-36 sm:w-36"
            style={{ ["--tw-ring-color" as string]: "var(--accent)" }}
          />
          <div className="min-w-0 w-full">
            <p className="mb-2 text-sm" style={{ color: "var(--muted)" }}>
              👋 Hi, I’m
            </p>
            <h1 className="text-3xl font-extrabold tracking-tight sm:text-6xl">
              Dinesh <span className="grad">Bamaniya</span>
            </h1>
            <p className="mt-2 text-lg font-medium sm:text-xl">
              Full Stack &amp; AI Developer
            </p>
            <p
              className="mt-4 max-w-xl text-sm sm:text-base"
              style={{ color: "var(--muted)" }}
            >
              {years}+ years building scalable web apps with Angular, Node.js,
              Python and microservices, now shipping AI agents and RAG products
              too.
            </p>
            <div className="mt-6 flex flex-wrap justify-center gap-2 sm:gap-3 sm:justify-start">
              <Link className="btn btn-primary" href="/freelancer#contact">
                Hire me
              </Link>
              <Link className="btn btn-ghost" href="/cv">
                View CV
              </Link>
              <a
                className="btn btn-ghost"
                href={LINKEDIN}
                target="_blank"
                rel="noopener noreferrer"
              >
                LinkedIn ↗
              </a>
              <a
                className="btn btn-ghost"
                href={GITHUB}
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub ↗
              </a>
            </div>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl grid-cols-2 gap-2 px-4 sm:gap-3 sm:px-5 sm:grid-cols-4">
          {[
            [`${years}+`, "Years experience"],
            ["12+", "Microservices"],
            ["100+", "REST APIs"],
            [`${projects.length}`, "Projects"],
          ].map(([n, l]) => (
            <div key={l} className="card p-4 text-center">
              <div className="grad text-2xl font-extrabold">{n}</div>
              <div className="text-xs" style={{ color: "var(--muted)" }}>
                {l}
              </div>
            </div>
          ))}
        </div>
      </header>

      <Section title="What I do">
        <div className="grid gap-4 sm:grid-cols-3">
          {focus.map(([i, t, d]) => (
            <div key={t} className="card p-5">
              <div className="text-2xl">{i}</div>
              <h3 className="mt-2 font-bold">{t}</h3>
              <p className="mt-1 text-sm" style={{ color: "var(--muted)" }}>
                {d}
              </p>
            </div>
          ))}
        </div>
      </Section>

      <Section
        title="Featured projects"
        sub="A few highlights. The full list is on my CV."
      >
        <div className="grid gap-4 md:grid-cols-2">
          {[projects[0], projects[1], projects[2], projects[3]].map((p) => (
            <ProjectCard key={p.name} p={p} />
          ))}
        </div>
        <Link
          href="/cv#projects"
          className="mt-5 inline-block text-sm font-semibold"
          style={{ color: "var(--accent)" }}
        >
          See all {projects.length} projects →
        </Link>
      </Section>

      <Section title="Let’s build something">
        <div className="card grid gap-4 p-4 sm:grid-cols-2 sm:p-6">
          {/* <div>
            <h3 className="font-bold">Need a developer for your project?</h3>
            <p className="mt-1 text-sm" style={{ color: "var(--muted)" }}>
              See the services I offer and how we can work together.
            </p>
             <Link href="/freelancer" className="btn btn-primary mt-4">
              Freelance services →
            </Link>
          </div> */}
          <div className="space-y-1 text-sm sm:text-right">
            <p className="break-all">
              ✉️{" "}
              <a className="underline" href={`mailto:${EMAIL}`}>
                {EMAIL}
              </a>
            </p>
            <p>
              📞{" "}
              <a className="underline" href={PHONE_LINK}>
                +91 7096398595
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
      </Section>
    </main>
  );
}
