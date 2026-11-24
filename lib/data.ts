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
  tag: string;
  stack: string[];
  points: string[];
  url?: string;
  note?: string;
};
export const projects: Project[] = [
  {
    name: "E-Commerce",
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
