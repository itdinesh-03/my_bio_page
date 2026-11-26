export const EMAIL = "bamaniyadinesh204@gmail.com";
export const PHONE = "+91 7096398595";
export const LINKEDIN = "https://www.linkedin.com/in/dinesh-bamaniya-b9b84a204";
export const GITHUB = "https://github.com/itdinesh-03";

export const skills: Record<string, string[]> = {
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

export const work = [
  "Architected 12+ microservices with 100+ REST API endpoints for a multi-vendor e-commerce platform used by thousands of users.",
  "Cut image processing time by 70% with queue-based async jobs using Bull Queue.",
  "Integrated 5+ payment gateways: Stripe, PayPal, Razorpay, Mollie, CCAvenue.",
  "Built COSMA, an aircraft fleet management system with real-time dashboards, work orders and RBAC.",
  "Led Angular (v16–20) apps with PWA and SSR, improving SEO and UX.",
];

export type Project = {
  name: string;
  slug: string;
  tag: string;
  stack: string[];
  points: string[];
  /** Short case-study intro for detail pages. */
  summary: string;
  /** Measurable or qualitative outcome. */
  outcome: string;
  url?: string;
  github?: string;
  note?: string;
};

export const projects: Project[] = [
  {
    name: "E-Commerce",
    slug: "ecommerce",
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
      "Cut image processing time by 70% with Bull Queue",
      "PWA + SSR, real-time notifications, admin/vendor dashboards",
    ],
    summary:
      "A multi-vendor marketplace built as a set of microservices — catalog, orders, payments, media, and notifications — with Angular storefronts and admin dashboards.",
    outcome:
      "Shipped 12+ services and 100+ REST endpoints; async image pipeline cut processing time by ~70%.",
  },
  {
    name: "MindBank AI",
    slug: "mindbank-ai",
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
    summary:
      "An AI digital-twin product: photorealistic avatars, voice/video cloning, and a layered knowledge system for real-time conversations, plus B2B org and Stripe billing.",
    outcome:
      "Live product on Railway with avatar conversations, org management, and paid billing flows.",
    url: "https://my.mindbank.ai/",
    note: "Demo may have limited functionality or require authentication.",
  },
  {
    name: "DocChat AI",
    slug: "docchat-ai",
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
    summary:
      "Upload documents and ask grounded questions. Hybrid retrieval (dense + full-text), section-aware chunking, and LangGraph agents stream answers with citations.",
    outcome:
      "Production-ready RAG stack with citations, streaming, and per-document specialist agents.",
  },
  {
    name: "AskNova AI",
    slug: "asknova-ai",
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
    summary:
      "A tool-calling chat agent with Gemini, RAG, MCP tools, dual memory, file attachments, and human-in-the-loop approvals for sensitive actions.",
    outcome:
      "Safer agent UX: streaming chat plus gated tools for email and long-term memory writes.",
  },
  {
    name: "AI Data Comparison Agent",
    slug: "ai-data-comparison",
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
    summary:
      "Compare document versions and JSON datasets with Gemini analysis, semantic matching, dual diff views, and signed PDF reports.",
    outcome:
      "Faster review cycles for document/dataset changes with exportable comparison reports.",
  },
  {
    name: "COSMA",
    slug: "cosma",
    tag: "Aircraft Fleet Management",
    stack: ["Angular 19", "Node.js", "TypeORM", "MySQL", "JWT", "Kendo UI"],
    points: [
      "Maintenance, component tracking, compliance",
      "Real-time analytics, work orders, RBAC",
      "Excel import/export, PDF generation, multi-language",
    ],
    summary:
      "Aircraft fleet management: maintenance, component tracking, compliance, work orders, RBAC, and real-time analytics on Angular + Node.",
    outcome:
      "Operational dashboards with multi-language support, Excel I/O, and PDF generation for field teams.",
  },
  {
    name: "MissingLink's Middleware",
    slug: "missinglink-middleware",
    tag: "Document Signing Integration",
    stack: ["Node.js", "React.js", "MySQL", "Clio", "Legalesign"],
    points: [
      "Legalesign ↔ Clio secure document flow",
      "Automated retrieval, status updates and uploads",
      "React UI with search and filters",
    ],
    summary:
      "Middleware connecting Legalesign and Clio so signed documents flow securely with automated status updates and a searchable React UI.",
    outcome:
      "Reduced manual legal-ops handoffs between signing and practice-management systems.",
  },
  {
    name: "Movie Tickets Booking",
    slug: "movie-tickets",
    tag: "Booking UX",
    stack: ["Angular", "Bootstrap"],
    points: [
      "Seat selection with real-time availability",
      "Secure payment processing",
    ],
    summary:
      "Cinema booking UX with seat maps, live availability, and secure payment checkout built in Angular.",
    outcome: "Live booking experience with seat selection and payments.",
    url: "https://kinobox.si/",
  },
  {
    name: "Credit Card Management",
    slug: "credit-card-management",
    tag: "FinTech UI",
    stack: ["Angular", "Bootstrap"],
    points: [
      "Secure auth and encryption",
      "Transaction history and spending analysis",
    ],
    summary:
      "FinTech UI for card management: secure auth, encrypted data handling, transaction history and spending insights.",
    outcome:
      "Clear cardholder dashboard for balances, history, and spend analysis.",
  },
];

export function getProject(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}

/** Best CV / PDF picks — together cover Angular, React, Node, Python, AI, and DBs. */
export const cvProjectSlugs = [
  "ecommerce",
  "mindbank-ai",
  "asknova-ai",
] as const;

export function getCvProjects(): Project[] {
  return cvProjectSlugs
    .map((slug) => getProject(slug))
    .filter((p): p is Project => Boolean(p));
}

export const education = [
  [
    "B.E. Computer Engineering",
    "Om Engineering College, Junagadh",
    "2021 · CGPA 8.52",
  ],
  ["HSC", "Samarth International, Junagadh", "2017"],
  ["SSC", "Shree Maruti Vidhyalay, Chorvad", "2015"],
];

export const PHONE_LINK = "tel:7096398595";
export const yearsOfExperience = () =>
  Math.floor(
    (Date.now() - new Date("2021-05-10").getTime()) / (365.25 * 864e5),
  );
