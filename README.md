# Bamaniya Dinesh — Full Stack Developer CV

Personal CV website for **Bamaniya Dinesh**, a Full Stack Developer based in Ahmedabad, Gujarat, with 4+ years of experience building scalable web apps using Angular, Node.js, and microservices.

## About

Full-stack developer specializing in enterprise e-commerce platforms and fleet management systems. Currently working at **iFlair Web Technologies Pvt. Ltd** (since May 2021).

**Highlights**

- Architected 12+ microservices with 100+ REST APIs for multi-vendor e-commerce
- Reduced image processing time by 70% with Bull Queue
- Integrated payment gateways: Stripe, PayPal, Razorpay, Mollie, CCAvenue
- Built COSMA — aircraft fleet management with real-time dashboards and RBAC
- Led Angular (v16–20) apps with PWA and SSR

## Tech Stack (Site)

| Layer     | Tools                            |
| --------- | -------------------------------- |
| Framework | Next.js 15, React 18, TypeScript |
| Styling   | Tailwind CSS                     |
| PDF       | Browser print from `/cv`         |

## Pages

- `/` — Home (intro + featured projects)
- `/cv` — Full CV (print to PDF)
- `/freelancer` — Services, process, FAQ, contact
- Shared content in `lib/data.ts`

## Features

- Responsive dark/light theme
- Print-ready CV page
- Shared project cards across Home, CV and Freelancer
- Scroll reveal animations
- Live demo links where available

## Featured Projects

| Project                                      | Stack                                                          | Focus                       |
| -------------------------------------------- | -------------------------------------------------------------- | --------------------------- |
| E-Commerce                                   | Angular, Node.js, MongoDB, MySQL, Redis, Elasticsearch, AWS S3 | Multi-vendor e-commerce     |
| [MindBank AI](https://my.mindbank.ai/)       | Python, FastAPI, PostgreSQL, OpenAI, ElevenLabs, Tavus, Stripe | AI digital twin platform    |
| DocChat AI                                   | Angular, FastAPI, LangGraph, PostgreSQL, pgvector, Gemini      | Document Q&A / RAG          |
| AskNova AI                                   | React, Node.js, LangChain, LangGraph, MCP, Gemini, MongoDB     | Tool-calling chat agent     |
| AI Data Comparison Agent                     | React, FastAPI, Gemini, PostgreSQL, sentence-transformers      | Document & dataset diff     |
| COSMA                                        | Angular 19, Node.js, TypeORM, MySQL, Kendo UI                  | Aircraft fleet management   |
| MissingLink's Middleware                     | Node.js, React, MySQL, Clio, Legalesign                        | Document signing middleware |
| [Movie Tickets Booking](https://kinobox.si/) | Angular, Bootstrap                                             | Ticket booking UX           |
| Credit Card Management                       | Angular, Bootstrap                                             | Secure card management      |

## Skills

- **Languages:** JavaScript, TypeScript, Python
- **Frontend:** Angular, React.js, HTML, CSS, Bootstrap, Material UI, Tailwind CSS, Kendo UI
- **Backend:** Node.js, Express.js, Python, FastAPI, Microservices
- **AI / Agents:** AI Agents, LangChain, LangGraph, MCP
- **Database:** MySQL, PostgreSQL, MongoDB, AWS RDS, Elasticsearch
- **Tools:** Docker, AWS, GitLab, GitLab CI/CD, GitHub

## Education

- **B.E. Computer Engineering** — Om Engineering College, Junagadh (CGPA 8.52, 2021)

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

### Scripts

| Command          | Description              |
| ---------------- | ------------------------ |
| `npm run dev`    | Start development server |
| `npm run build`  | Production build         |
| `npm start`      | Run production server    |
| `npm run lint`   | ESLint                   |
| `npm run format` | Prettier format          |

## Project Structure

```
app/
  page.tsx              # Home
  cv/page.tsx           # Full CV
  freelancer/page.tsx   # Freelance services
  layout.tsx            # Root layout, navbar, footer
  globals.css           # Theme + print styles
components/             # Navbar, Section, ProjectCard, RevealObserver
lib/data.ts             # Skills, work, projects, education, contact
public/                 # Static assets (e.g. profile photo)
```

Edit `lib/data.ts` to update CV content.

## Deploy (CI/CD → Vercel)

Push to `main` deploys **production** via GitHub Actions. Other branches / PRs get a **preview** deploy.

### One-time setup

1. Create / link the Vercel project:
   ```bash
   npx vercel login
   npx vercel link
   ```
2. Copy IDs from `.vercel/project.json` (`orgId`, `projectId`).
3. Create a [Vercel token](https://vercel.com/account/tokens).
4. Add GitHub repo secrets (`Settings → Secrets and variables → Actions`):
   | Secret | Value |
   | ------ | ----- |
   | `VERCEL_TOKEN` | token from step 3 |
   | `VERCEL_ORG_ID` | `orgId` from `.vercel/project.json` |
   | `VERCEL_PROJECT_ID` | `projectId` from `.vercel/project.json` |

`vercel.json` disables Vercel’s built-in Git deploys so only Actions deploy (no double builds).

### Workflows

| File | Trigger | Target |
| ---- | ------- | ------ |
| `.github/workflows/deploy-production.yml` | push to `main` | production |
| `.github/workflows/deploy-preview.yml` | other branches / PRs | preview |

## Contact

- **Email:** [bamaniyadinesh204@gmail.com](mailto:bamaniyadinesh204@gmail.com)
- **Phone:** [+91 7096398595](tel:7096398595)
- **LinkedIn:** [dinesh-bamaniya-b9b84a204](https://www.linkedin.com/in/dinesh-bamaniya-b9b84a204)
- **Location:** Ahmedabad, Gujarat, India
