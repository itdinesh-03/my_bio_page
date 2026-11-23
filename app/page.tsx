"use client";
import { useEffect, useState } from "react";
import Image from "next/image";

const EMAIL = "bamaniyadinesh204@gmail.com";
const PHONE = "+91 7096398595";
const LINKEDIN = "https://www.linkedin.com/in/dinesh-bamaniya-b9b84a204";

const skills: Record<string, string[]> = {
  Languages: ["JavaScript", "TypeScript", "Python"],
  Frontend: [
    "Angular",
    "React.js",
    "HTML",
    "CSS",
    "Bootstrap",
    "Material UI",
    "Tailwind CSS",
    "Kendo UI",
  ],
  Backend: ["Node.js", "Express.js", "FastAPI", "Microservices"],
  "AI / Agents": ["AI Agents", "LangChain", "LangGraph", "MCP"],
  Database: ["MySQL", "PostgreSQL", "MongoDB", "AWS RDS", "Elasticsearch"],
  Tools: ["Docker", "AWS", "GitLab", "GitLab CI/CD", "GitHub"],
};

const work = [
  "Architected 12+ microservices with 100+ REST API endpoints for a multi-vendor e-commerce platform used by thousands of users.",
  "Cut image processing time by 70% with queue-based async jobs using Bull Queue.",
  "Integrated 5+ payment gateways: Stripe, PayPal, Razorpay, Mollie, CCAvenue.",
  "Built COSMA, an aircraft fleet management system with real-time dashboards, work orders and RBAC.",
  "Led Angular (v16–20) apps with PWA and SSR, improving SEO and UX.",
];

type Project = {
  name: string;
  tag: string;
  stack: string[];
  points: string[];
  url?: string;
  note?: string;
};
const projects: Project[] = [
  {
    name: "SHIRTEE",
    tag: "Multi-vendor E-Commerce",
    stack: [
      "Angular",
      "Node.js",
      "MongoDB",
      "MySQL",
      "Redis",
      "Elasticsearch",
      "AWS S3",
    ],
    points: [
      "12+ microservices, 100+ REST APIs",
      "Queue-based image processing, 70% faster",
      "PWA + SSR, real-time notifications, admin/vendor dashboards",
    ],
    url: "https://site.shirtee.cloud/en",
  },
  {
    name: "MindBank AI",
    tag: "AI Digital Twin Platform",
    stack: [
      "Python",
      "FastAPI",
      "PostgreSQL",
      "OpenAI",
      "ElevenLabs",
      "Tavus",
      "Stripe",
    ],
    points: [
      "Photorealistic avatars with voice and video cloning",
      "Real-time conversation with 3-layer knowledge architecture",
      "B2B org management, Stripe billing, deployed on Railway",
    ],
    url: "https://my.mindbank.ai/",
    note: "Demo may have limited functionality or require authentication.",
  },
  {
    name: "DocChat AI",
    tag: "Document Q&A / RAG",
    stack: [
      "Angular",
      "Python",
      "FastAPI",
      "LangGraph",
      "PostgreSQL",
      "pgvector",
      "Gemini",
    ],
    points: [
      "Upload PDF/DOCX/TXT and ask grounded questions with source citations",
      "Hybrid dense + full-text retrieval, section-aware chunking, local BGE embeddings",
      "LangGraph specialist agents per document with SSE-streamed answers",
    ],
  },
  {
    name: "AskNova AI",
    tag: "Tool-Calling Chat Agent",
    stack: [
      "React.js",
      "Node.js",
      "LangChain",
      "LangGraph",
      "MCP",
      "Gemini",
      "MongoDB",
      "RAG",
    ],
    points: [
      "Ask-anything chat with Gemini, RAG retrieval, and MCP tools",
      "Short-term + long-term memory, SSE streaming, file attachments",
      "Human-in-the-loop approvals for sensitive actions like email and memory writes",
    ],
  },
  {
    name: "AI Data Comparison Agent",
    tag: "Document & Dataset Diff",
    stack: [
      "React.js",
      "Python",
      "FastAPI",
      "Gemini",
      "PostgreSQL",
      "sentence-transformers",
    ],
    points: [
      "Compare PDF/DOCX/TXT versions with Gemini analysis and encrypted storage",
      "JSON dataset deep-diff, duplicate detection, and semantic similarity matching",
      "Side-by-side / unified views plus signed PDF comparison reports",
    ],
  },
  {
    name: "COSMA",
    tag: "Aircraft Fleet Management",
    stack: ["Angular 19", "Node.js", "TypeORM", "MySQL", "JWT", "Kendo UI"],
    points: [
      "Maintenance, component tracking, compliance",
      "Real-time analytics, work orders, RBAC",
      "Excel import/export, PDF generation, multi-language",
    ],
  },
  {
    name: "MissingLink's Middleware",
    tag: "Document Signing Integration",
    stack: ["Node.js", "React.js", "MySQL", "Clio", "Legalesign"],
    points: [
      "Legalesign ↔ Clio secure document flow",
      "Automated retrieval, status updates and uploads",
      "React UI with search and filters",
    ],
  },
  {
    name: "Movie Tickets Booking",
    tag: "Booking UX",
    stack: ["Angular", "Bootstrap"],
    points: [
      "Seat selection with real-time availability",
      "Secure payment processing",
    ],
    url: "https://kinobox.si/",
  },
  {
    name: "Credit Card Management",
    tag: "FinTech UI",
    stack: ["Angular", "Bootstrap"],
    points: [
      "Secure auth and encryption",
      "Transaction history and spending analysis",
    ],
  },
];

const education = [
  [
    "B.E. Computer Engineering",
    "Om Engineering College, Junagadh",
    "2021 · CGPA 8.52",
  ],
  ["HSC", "Samarth International, Junagadh", "2017"],
  ["SSC", "Shree Maruti Vidhyalay, Chorvad", "2015"],
];

function Section({
  id,
  title,
  children,
}: {
  id: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section id={id} className="reveal mx-auto max-w-5xl px-5 py-12">
      <h2 className="mb-6 text-2xl font-bold tracking-tight">
        <span className="grad">{title}</span>
      </h2>
      {children}
    </section>
  );
}

export default function Home() {
  const [dark, setDark] = useState(true);
  const years = Math.floor(
    (Date.now() - new Date("2021-05-10").getTime()) / (365.25 * 864e5),
  );

  useEffect(() => {
    const saved = localStorage.getItem("theme");
    setDark(
      saved
        ? saved === "dark"
        : window.matchMedia("(prefers-color-scheme: dark)").matches,
    );
  }, []);
  useEffect(() => {
    document.documentElement.dataset.theme = dark ? "dark" : "light";
    localStorage.setItem("theme", dark ? "dark" : "light");
  }, [dark]);
  useEffect(() => {
    const io = new IntersectionObserver(
      (es) =>
        es.forEach(
          (e) =>
            e.isIntersecting &&
            (e.target.classList.add("in"), io.unobserve(e.target)),
        ),
      { threshold: 0.08 },
    );
    document.querySelectorAll(".reveal").forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  return (
    <main className="relative overflow-x-hidden">
      <nav
        className="no-print sticky top-0 z-20 border-b backdrop-blur"
        style={{
          borderColor: "var(--line)",
          background: "color-mix(in srgb, var(--bg) 80%, transparent)",
        }}
      >
        <div className="mx-auto flex max-w-5xl items-center justify-between px-5 py-3 text-sm">
          <span className="font-bold">
            DB<span className="grad">.</span>
          </span>
          <div
            className="hidden gap-5 sm:flex"
            style={{ color: "var(--muted)" }}
          >
            {["skills", "experience", "projects", "education", "contact"].map(
              (s) => (
                <a
                  key={s}
                  href={`#${s}`}
                  className="capitalize hover:opacity-70"
                >
                  {s}
                </a>
              ),
            )}
          </div>
          <div className="flex gap-2">
            <button
              onClick={() => setDark(!dark)}
              className="btn btn-ghost !py-1.5"
              aria-label="Toggle theme"
            >
              {dark ? "☀️" : "🌙"}
            </button>
            <button
              onClick={() => window.print()}
              className="btn btn-primary !py-1.5"
            >
              Download PDF
            </button>
          </div>
        </div>
      </nav>

      <header className="relative">
        <div className="glow" />
        <div className="relative mx-auto flex max-w-5xl flex-col items-center gap-8 px-5 pb-10 pt-16 text-center sm:flex-row sm:text-left">
          <Image
            src="/profile-photo.png"
            alt="Dinesh Bamaniya"
            width={150}
            height={150}
            priority
            className="h-36 w-36 rounded-full object-cover ring-4"
            style={{ ["--tw-ring-color" as string]: "var(--accent)" }}
          />
          <div>
            <p className="mb-2 text-sm" style={{ color: "var(--muted)" }}>
              👋 Hi, I’m
            </p>
            <h1 className="text-4xl font-extrabold tracking-tight sm:text-6xl">
              Dinesh <span className="grad">Bamaniya</span>
            </h1>
            <p className="mt-2 text-xl font-medium">Full Stack Developer</p>
            <p className="mt-4 max-w-xl" style={{ color: "var(--muted)" }}>
              {years}+ years building scalable web apps with Angular, Node.js,
              Python and microservices. Focused on e-commerce, fleet management
              and AI-powered products.
            </p>
            <div className="mt-6 flex flex-wrap justify-center gap-3 sm:justify-start">
              <a className="btn btn-primary" href={`mailto:${EMAIL}`}>
                ✉️ Email me
              </a>
              <a
                className="btn btn-ghost"
                href={LINKEDIN}
                target="_blank"
                rel="noopener noreferrer"
              >
                LinkedIn ↗
              </a>
              <a className="btn btn-ghost" href="tel:7096398595">
                📞 Call
              </a>
            </div>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl grid-cols-2 gap-3 px-5 sm:grid-cols-4 print:grid-cols-4">
          {[
            [`${years}+`, "Years experience"],
            ["12+", "Microservices"],
            ["100+", "REST APIs"],
            // ["-70%", "Image processing time"],
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

      <Section id="skills" title="Skills">
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

      <Section id="experience" title="Experience">
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
            <article
              key={p.name}
              className="card flex flex-col p-5 transition hover:-translate-y-1"
            >
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
                <p
                  className="no-print mt-1 text-xs"
                  style={{ color: "var(--muted)" }}
                >
                  {p.note}
                </p>
              )}
            </article>
          ))}
        </div>
      </Section>

      <Section id="education" title="Education">
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

      <Section id="contact" title="Let’s work together">
        <div className="card flex flex-col gap-3 p-6 sm:flex-row sm:items-center sm:justify-between">
          <div className="space-y-1 text-sm">
            <p>📍 Ahmedabad, Gujarat, India</p>
            <p>🗣️ English, Hindi, Gujarati</p>
            <p>
              ✉️{" "}
              <a href={`mailto:${EMAIL}`} className="underline">
                {EMAIL}
              </a>
            </p>
            <p>
              📞{" "}
              <a href="tel:7096398595" className="underline">
                {PHONE}
              </a>
            </p>
          </div>
          <a className="btn btn-primary no-print" href={`mailto:${EMAIL}`}>
            Say hello →
          </a>
        </div>
      </Section>

      <footer
        className="py-8 text-center text-xs"
        style={{ color: "var(--muted)" }}
      >
        © {new Date().getFullYear()} Dinesh Bamaniya
      </footer>
    </main>
  );
}
