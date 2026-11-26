import Image from "next/image";
import Link from "next/link";
import dynamic from "next/dynamic";
import Section from "@/components/Section";
import ProjectCard from "@/components/ProjectCard";
import {
  EMAIL,
  GITHUB,
  LINKEDIN,
  PHONE_LINK,
  projects,
  skills,
  work,
  yearsOfExperience,
} from "@/lib/data";
import type { Metadata } from "next";
import {
  pageMetadata,
  PROFILE_IMAGE,
  SITE_DESCRIPTION,
  SITE_TITLE_DEFAULT,
} from "@/lib/seo";

// Below-fold client form — keep out of initial JS for better TBT / unused JS
const ContactForm = dynamic(() => import("@/components/ContactForm"), {
  loading: () => (
    <p className="text-sm" style={{ color: "var(--muted)" }}>
      Loading contact form…
    </p>
  ),
});

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
    "Full-stack web apps",
    "Angular / React frontends with Node.js and FastAPI backends, built to scale.",
  ],
  [
    "AI agents & RAG",
    "LangGraph, LangChain and MCP: document Q&A, tool-calling agents, streaming chat.",
  ],
  [
    "E-commerce & payments",
    "Multi-vendor platforms, 5+ payment gateways, queues and search at scale.",
  ],
];

export default function Home() {
  const years = yearsOfExperience();
  return (
    <main className="relative">
      <header className="relative">
        <div className="glow" aria-hidden="true" />
        <div className="relative mx-auto flex max-w-5xl flex-col items-center gap-6 px-4 pb-8 pt-10 text-center sm:gap-8 sm:px-5 sm:pb-10 sm:pt-16 sm:flex-row sm:text-left">
          <Image
            src={PROFILE_IMAGE}
            loading="lazy"
            alt="Dinesh Bamaniya, Full Stack and AI Developer"
            width={288}
            height={288}
            sizes="(max-width: 640px) 112px, 144px"
            // Already a tiny WebP at display size — skip optimizer cold-start latency (LCP)
            unoptimized
            preload
            fetchPriority="high"
            className="h-28 w-28 shrink-0 rounded-full object-cover ring-4 sm:h-36 sm:w-36"
            style={{ ["--tw-ring-color" as string]: "var(--accent)" }}
          />
          <div className="min-w-0 w-full">
            <p className="mb-2 text-sm" style={{ color: "var(--muted)" }}>
              Hi, I&apos;m
            </p>
            <h1 className="text-3xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl">
              Dinesh <span className="grad">Bamaniya</span>
              <span
                className="mt-2 block text-lg font-semibold tracking-normal sm:text-xl lg:text-2xl"
                style={{ color: "var(--fg)" }}
              >
                Full Stack &amp; AI Developer
              </span>
            </h1>
            <p
              className="mt-4 max-w-xl text-sm sm:text-base"
              style={{ color: "var(--muted)" }}
            >
              {years}+ years building scalable web apps with Angular, React,
              Node.js, Python and microservices — now shipping AI agents, RAG,
              and LangGraph products from Ahmedabad, India.
            </p>
            <div className="mt-6 flex flex-wrap justify-center gap-2 sm:gap-3 sm:justify-start">
              <Link className="btn btn-primary" href="/#contact">
                Start a project
              </Link>
              <Link className="btn btn-ghost" href="/cv">
                View full résumé
              </Link>
              <a
                className="btn btn-ghost"
                href={LINKEDIN}
                target="_blank"
                rel="noopener noreferrer"
              >
                LinkedIn profile ↗
              </a>
              <a
                className="btn btn-ghost"
                href={GITHUB}
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub profile ↗
              </a>
            </div>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl grid-cols-2 gap-2 px-4 sm:gap-3 sm:px-5 sm:grid-cols-4">
          {[
            [`${years}+`, "Years experience"],
            ["12+", "Microservices"],
            ["100+", "REST APIs"],
            ["10+", "Projects"],
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

      <Section
        title="About Dinesh Bamaniya"
        sub="Full Stack & AI Developer focused on reliable product delivery and modern AI tooling."
      >
        <div
          className="space-y-4 text-sm sm:text-base"
          style={{ color: "var(--muted)" }}
        >
          <p>
            I am Dinesh Bamaniya, a Full Stack &amp; AI Developer based in
            Ahmedabad, India. I design and ship production web applications with
            Angular and React on the frontend, and Node.js, Express, FastAPI, and
            microservices on the backend. Teams work with me when they need
            someone who can own features end-to-end — from API contracts and data
            models to polished UI, deployments, and observability.
          </p>
          <p>
            Day-to-day work spans multi-vendor e-commerce platforms, payment
            gateway integrations, queue-based image pipelines, and AI products
            built with LangChain, LangGraph, RAG retrieval, and MCP tool-calling
            agents. I care about clear architecture, measurable outcomes, and
            code that other engineers can maintain after handover.
          </p>
          <p>
            Before leaning into AI agents, I spent years hardening large Angular
            and Node.js systems: Progressive Web Apps, server-side rendering for
            SEO, real-time notifications, admin and vendor dashboards, and
            role-based access control. That product-engineering foundation is
            what I bring to AI work — grounding models in real constraints
            instead of demos that fall apart in production.
          </p>
          <p>
            Browse the{" "}
            <Link
              href="/cv"
              className="font-semibold underline"
              style={{ color: "var(--accent)" }}
            >
              detailed curriculum vitae
            </Link>{" "}
            or the{" "}
            <Link
              href="/projects"
              className="font-semibold underline"
              style={{ color: "var(--accent)" }}
            >
              project case studies archive
            </Link>{" "}
            for stack choices, context, and outcomes on each engagement.
          </p>
        </div>
      </Section>

      <Section
        title="What I do"
        sub="Three focus areas where Dinesh Bamaniya delivers the most value as a Full Stack & AI Developer."
      >
        <div className="grid gap-4 sm:grid-cols-3">
          {focus.map(([t, d]) => (
            <div key={t} className="card p-5">
              <h3 className="font-bold">{t}</h3>
              <p className="mt-1 text-sm" style={{ color: "var(--muted)" }}>
                {d}
              </p>
            </div>
          ))}
        </div>
      </Section>

      <Section
        title="How I work"
        sub="A practical process for shipping Full Stack & AI Developer work without drama."
      >
        <div
          className="space-y-4 text-sm sm:text-base"
          style={{ color: "var(--muted)" }}
        >
          <p>
            Every engagement with Dinesh Bamaniya starts with scope clarity:
            users, success metrics, constraints, and the thinnest vertical slice
            that proves value. I document assumptions, propose a stack that fits
            the team (not just my preferences), and keep communication short —
            status, blockers, and next decisions.
          </p>
          <p>
            For product engineering I prefer incremental delivery: working APIs
            and UI early, automated checks where they pay off, and performance
            budgets for search, media, and chat latency. On AI agent and RAG
            builds I insist on evaluation loops — retrieval quality, citation
            honesty, tool-approval gates, and fallbacks when the model is wrong
            — so the Full Stack &amp; AI Developer output is trustworthy in
            production, not only in a notebook.
          </p>
          <p>
            I collaborate well with designers, PMs, and backend or DevOps
            peers. Whether you need a freelance Full Stack &amp; AI Developer
            for a fixed milestone or longer staff-augmentation, I adapt to your
            Git workflow, CI, and review culture.
          </p>
        </div>
      </Section>

      <Section
        title="Experience highlights"
        sub="Selected outcomes from production systems Dinesh Bamaniya has shipped."
      >
        <ul
          className="list-disc space-y-2 pl-5 text-sm sm:text-base"
          style={{ color: "var(--muted)" }}
        >
          {work.map((w) => (
            <li key={w}>{w}</li>
          ))}
        </ul>
        <p className="mt-4 text-sm" style={{ color: "var(--muted)" }}>
          Full employment history, education, and skill chips live on the{" "}
          <Link
            href="/cv"
            className="font-semibold underline"
            style={{ color: "var(--accent)" }}
          >
            online CV of Dinesh Bamaniya
          </Link>
          .
        </p>
      </Section>

      <Section
        title="Stack & tools"
        sub="Technologies I use daily as a Full Stack & AI Developer."
      >
        <div className="grid gap-4 sm:grid-cols-2">
          {Object.entries(skills).map(([k, v]) => (
            <div key={k}>
              <h3
                className="mb-2 text-sm font-semibold uppercase tracking-wider"
                style={{ color: "var(--muted)" }}
              >
                {k}
              </h3>
              <p className="text-sm sm:text-base" style={{ color: "var(--fg)" }}>
                {v.join(" · ")}
              </p>
            </div>
          ))}
        </div>
      </Section>

      <Section
        title="Featured projects"
        sub="A few highlights from work by Dinesh Bamaniya. Open a case study for stack, context, and outcomes."
      >
        <div className="grid gap-4 md:grid-cols-2">
          {[projects[0], projects[1], projects[2], projects[3]].map((p) => (
            <ProjectCard key={p.slug} p={p} />
          ))}
        </div>
        <Link
          href="/projects"
          className="mt-5 inline-block text-sm font-semibold"
          style={{ color: "var(--accent)" }}
        >
          Browse all {projects.length} portfolio projects →
        </Link>
      </Section>

      <Section
        title="Who I help"
        sub="Typical clients and teams that work with Dinesh Bamaniya."
      >
        <div
          className="space-y-4 text-sm sm:text-base"
          style={{ color: "var(--muted)" }}
        >
          <p>
            Startups and product teams hire me as a Full Stack &amp; AI
            Developer to accelerate roadmaps: new storefronts, admin tooling,
            payment flows, or an internal AI assistant that actually reads their
            documents. Agencies bring Dinesh Bamaniya in when a client needs
            stronger Node.js or Angular ownership, or when an AI proof-of-concept
            must harden into a maintainable service.
          </p>
          <p>
            I am comfortable joining mid-flight codebases, writing migration
            plans, and mentoring juniors on TypeScript, Python, and agent
            patterns. If you are searching for a Full Stack &amp; AI Developer in
            Ahmedabad — or remote across Indian and overlapping EU/US time
            zones — the contact form below is the fastest path to a conversation.
          </p>
        </div>
      </Section>

      <Section
        title="Engagement options"
        sub="Flexible ways to work with a Full Stack & AI Developer without a heavy process."
      >
        <div
          className="space-y-4 text-sm sm:text-base"
          style={{ color: "var(--muted)" }}
        >
          <p>
            Short build sprints suit well-defined features: a payment
            integration, a RAG upload-and-chat flow, a vendor dashboard, or a
            performance fix on search and media pipelines. Longer retainers work
            when Dinesh Bamaniya owns a product area — architecture reviews,
            backlog grooming with engineering leads, and steady weekly delivery.
          </p>
          <p>
            Discovery usually starts with a brief call, a look at your repo or
            specs, and a written plan with milestones. You keep the IP; I
            document decisions so your team can continue after the engagement.
            Prefer email or LinkedIn first? Use the links in the contact panel —
            or send the form and I will reply with availability and a suggested
            next step.
          </p>
        </div>
      </Section>

      <Section
        id="contact"
        title="Let’s build something"
        sub="Send a short note about your project. I usually reply within a day."
      >
        <div className="grid gap-6 lg:grid-cols-2">
          <div className="card p-4 sm:p-6">
            <ContactForm />
          </div>
          <div className="card space-y-3 p-4 text-sm sm:p-6">
            <p className="font-semibold">Or reach Dinesh Bamaniya directly</p>
            <p className="break-all">
              <a className="underline" href={`mailto:${EMAIL}`}>
                {EMAIL}
              </a>
            </p>
            <p>
              <a className="underline" href={PHONE_LINK}>
                +91 7096398595
              </a>
            </p>
            <p className="break-all">
              <a
                className="underline"
                href={GITHUB}
                target="_blank"
                rel="noopener noreferrer"
              >
                github.com/itdinesh-03
              </a>
            </p>
            <p className="break-all">
              <a
                className="underline"
                href={LINKEDIN}
                target="_blank"
                rel="noopener noreferrer"
              >
                linkedin.com/in/dinesh-bamaniya
              </a>
            </p>
          </div>
        </div>
      </Section>
    </main>
  );
}
