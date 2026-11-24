import Link from "next/link";
import Section from "@/components/Section";
import ProjectCard from "@/components/ProjectCard";
import {
  EMAIL,
  LINKEDIN,
  PHONE_LINK,
  projects,
  yearsOfExperience,
} from "@/lib/data";

export const metadata = { title: "Freelance — Dinesh Bamaniya" };

const mail = (subject: string) =>
  `mailto:${EMAIL}?subject=${encodeURIComponent(subject)}`;

const services = [
  [
    "🧩",
    "Full-stack web apps",
    "Dashboards, SaaS and portals with Angular or React, Node.js or FastAPI, and MySQL / PostgreSQL / MongoDB.",
    ["Angular", "React", "Node.js", "FastAPI"],
  ],
  [
    "🤖",
    "AI agents & RAG",
    "Document Q&A with citations, tool-calling agents, streaming chat and human-in-the-loop approvals.",
    ["LangGraph", "LangChain", "MCP", "pgvector"],
  ],
  [
    "🛒",
    "E-commerce & payments",
    "Multi-vendor marketplaces, Stripe, PayPal, Razorpay, Mollie and CCAvenue, queues and search.",
    ["Stripe", "Redis", "Elasticsearch", "Bull"],
  ],
  [
    "🔌",
    "APIs, microservices & integrations",
    "REST API design, service splitting, third-party integrations, Docker and CI/CD on AWS.",
    ["Microservices", "Docker", "AWS", "GitLab CI"],
  ],
] as const;

const process = [
  [
    "1",
    "Discover",
    "We talk through goals, users and scope. You get clear questions, not jargon.",
  ],
  [
    "2",
    "Plan",
    "A short written scope with milestones, tech choices and a timeline.",
  ],
  [
    "3",
    "Build",
    "Regular working demos so you see progress and can steer early.",
  ],
  ["4", "Launch & support", "Deployment, handover docs and follow-up support."],
];

const models = [
  [
    "Fixed-scope project",
    "Best when requirements are clear. Agreed deliverables, milestones and timeline.",
  ],
  [
    "Hourly / monthly retainer",
    "Best for ongoing work, evolving scope or extending your team.",
  ],
  [
    "MVP sprint",
    "A focused build to get a first working version in front of users fast.",
  ],
];

const faq = [
  [
    "Which timezone do you work in?",
    "India Standard Time (IST), with overlap available for Europe and the Middle East.",
  ],
  [
    "How do I get a quote?",
    "Send a short description of your project by email. I reply with questions and an estimate.",
  ],
  ["Do you sign NDAs?", "Yes, happy to sign one before we discuss details."],
  [
    "Do you handle deployment?",
    "Yes: Docker, AWS and GitLab CI/CD setup are part of how I deliver.",
  ],
];

export default function Freelancer() {
  const years = yearsOfExperience();
  return (
    <main className="relative">
      <header className="relative">
        <div className="glow" />
        <div className="relative mx-auto max-w-5xl px-4 pb-8 pt-10 text-center sm:px-5 sm:pt-16">
          <span className="chip">🟢 Open to freelance projects</span>
          <h1 className="mt-4 text-3xl font-extrabold tracking-tight sm:text-6xl">
            Hire a <span className="grad">full stack &amp; AI</span> developer
          </h1>
          <p
            className="mx-auto mt-4 max-w-2xl text-sm sm:text-base"
            style={{ color: "var(--muted)" }}
          >
            {years}+ years shipping production web apps, from multi-vendor
            e-commerce to AI agents. I turn your idea into a reliable,
            maintainable product.
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-2 sm:gap-3">
            <a className="btn btn-primary" href={mail("Project enquiry")}>
              ✉️ Start a project
            </a>
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
          </div>
        </div>
      </header>

      <Section title="Services">
        <div className="grid gap-4 sm:grid-cols-2">
          {services.map(([i, t, d, tags]) => (
            <div key={t} className="card flex flex-col p-5">
              <div className="text-2xl">{i}</div>
              <h3 className="mt-2 font-bold">{t}</h3>
              <p className="mt-1 text-sm" style={{ color: "var(--muted)" }}>
                {d}
              </p>
              <div className="mt-3 flex flex-wrap gap-2">
                {tags.map((x) => (
                  <span key={x} className="chip">
                    {x}
                  </span>
                ))}
              </div>
              <a
                className="mt-4 text-sm font-semibold"
                style={{ color: "var(--accent)" }}
                href={mail(`Enquiry: ${t}`)}
              >
                Ask about this →
              </a>
            </div>
          ))}
        </div>
      </Section>

      <Section title="How we work">
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {process.map(([n, t, d]) => (
            <div key={n} className="card p-5">
              <div className="grad text-3xl font-extrabold">{n}</div>
              <h3 className="mt-1 font-bold">{t}</h3>
              <p className="mt-1 text-sm" style={{ color: "var(--muted)" }}>
                {d}
              </p>
            </div>
          ))}
        </div>
      </Section>

      <Section
        title="Ways to engage"
        sub="Pricing depends on scope. Send details for a tailored quote."
      >
        <div className="grid gap-4 md:grid-cols-3">
          {models.map(([t, d]) => (
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
        title="Recent work"
        sub="Selected projects. More on the CV page."
      >
        <div className="grid gap-4 md:grid-cols-2">
          {[projects[0], projects[2], projects[3], projects[4]].map((p) => (
            <ProjectCard key={p.name} p={p} />
          ))}
        </div>
      </Section>

      <Section title="FAQ">
        <div className="space-y-3">
          {faq.map(([q, a]) => (
            <details key={q} className="card p-4">
              <summary className="cursor-pointer font-semibold">{q}</summary>
              <p className="mt-2 text-sm" style={{ color: "var(--muted)" }}>
                {a}
              </p>
            </details>
          ))}
        </div>
      </Section>

      <Section id="contact" title="Let’s talk">
        <div className="card flex flex-col gap-4 p-4 sm:flex-row sm:items-center sm:justify-between sm:p-6">
          <div className="min-w-0 space-y-1 text-sm">
            <p className="break-all">
              ✉️{" "}
              <a className="underline" href={mail("Project enquiry")}>
                {EMAIL}
              </a>
            </p>
            <p>
              📞{" "}
              <a className="underline" href={PHONE_LINK}>
                +91 7096398595
              </a>
            </p>
            <p>💬 Usually replies within a day</p>
          </div>
          <a
            className="btn btn-primary w-full justify-center sm:w-auto"
            href={mail("Project enquiry")}
          >
            Send enquiry →
          </a>
        </div>
      </Section>
    </main>
  );
}
