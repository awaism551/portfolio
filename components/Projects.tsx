import { Rocket, ExternalLink, Tag } from "lucide-react";

const projects = [
  {
    title: "Agentic Job Ingestion Tool",
    type: "Personal Project",
    description:
      "Built a robust AI operator to solve the 'fragmented job market' problem in the Global South. Implements intelligent data schemas to align scraped LLM outputs with structured business requirements, resolving complex schema mismatches. Includes automated scheduling for hands-off operation.",
    tags: ["LangChain", "Python", "Tavily", "Google Sheets API", "AI Agents"],
    color: "#f59e0b",
    highlights: [
      "Automated job scraping and ingestion using LangChain agents",
      "Schema alignment between LLM outputs and structured business data",
      "Fully automated scheduling for zero-touch operation",
    ],
  },
  {
    title: "QC+ Memberships Platform",
    type: "Enterprise",
    description:
      "Centralized Memberships Platform for QC+ and Qatar Museums, migrating 100K+ members from legacy systems. Fully digitized corporate, individual, and event-based memberships with QNB payment integrations.",
    tags: ["Next.js", "NestJS", "Hasura GraphQL", "Azure PostgreSQL", "QNB Payments"],
    color: "#6366f1",
    highlights: [
      "100K+ member migration from legacy systems",
      "RBAC-driven admin workflows and membership approvals",
      "Integrated QNB payment gateway",
      "Core system for Qatar Museums cultural event monetization",
    ],
  },
  {
    title: "Afiniti Performance Reporting + AI Chatbot",
    type: "Enterprise",
    description:
      "Reporting platform providing senior management insights into product performance across client environments. Features an AI-powered chatbot enabling stakeholders to query performance data conversationally using OpenAI + LangChain + pgvector.",
    tags: ["Next.js", "Node.js", "OpenAI", "LangChain", "pgvector", "PostgreSQL"],
    color: "#06b6d4",
    highlights: [
      "AI chatbot with semantic search over performance data",
      "OpenAI APIs + LangChain + PostgreSQL pgvector integration",
      "Deployed to portal.afiniti.com for global stakeholders",
      "Real-time dashboard with visual analytics",
    ],
  },
  {
    title: "Visenya — AI Data Pipeline Platform",
    type: "Enterprise",
    description:
      "Platform to automate data pipelines for AI and data integration teams at Afiniti. Built a wrapper around Apache Airflow to simplify task automation and improve workflow management, integrating with AI teams daily.",
    tags: ["Node.js", "Next.js", "Python", "Apache Airflow", "PostgreSQL", "Apache Cassandra"],
    color: "#8b5cf6",
    highlights: [
      "Airflow wrapper for simplified task automation",
      "Daily collaboration with AI research teams",
      "Automated data pipeline orchestration",
    ],
  },
  {
    title: "Daleel Aqar — Real Estate Platform",
    type: "Enterprise",
    description:
      "Large-scale real estate platform enabling property buying, selling, and rentals. Led end-to-end technical consulting across planning, architecture, and deployment. WCAG-compliant and certified by levelaccess.",
    tags: ["Angular", "NestJS", "GraphQL", "PostgreSQL", "AWS", "Nx.dev", "WCAG"],
    color: "#10b981",
    highlights: [
      "WCAG certified by levelaccess",
      "Nx.dev monorepo architecture",
      "AWS DevOps: Docker, Bitbucket Pipelines, IAM, monitoring",
      "Full property lifecycle: listings, search, and transactions",
    ],
  },
  {
    title: "WFM SaaS — Workforce Management",
    type: "Enterprise",
    description:
      "Scalable, tenant-based SaaS for contact center workforce management. Supports agent scheduling, time-off requests, forecasting, and real-time reporting with Keycloak RBAC and multi-timezone support.",
    tags: ["Node.js", "NestJS", "Keycloak", "PostgreSQL", "RBAC", "Multi-tenant"],
    color: "#ef4444",
    highlights: [
      "Multi-tenant SaaS architecture",
      "Keycloak RBAC with timezone-aware scheduling",
      "Statistical forecasting for agent workforce planning",
      "Live and historical reports for strategic insights",
    ],
  },
  {
    title: "Omni Central — Omnichannel Communication",
    type: "Product",
    description:
      "All-in-one platform for multi-channel customer communication including SMS, WhatsApp, email, and live chat. Incorporates CRM, inbox management, directories, and spreadsheet features.",
    tags: ["Angular 2+", "Node.js", "NestJS", "GraphQL", "WebSocket"],
    color: "#f59e0b",
    highlights: [
      "Multi-channel: SMS, WhatsApp, Email, Live Chat",
      "CRM and inbox management modules",
      "Real-time communication with WebSocket",
    ],
  },
  {
    title: "Aduro — IoT Hardware Controller App",
    type: "Mobile App",
    description:
      "Hybrid mobile app using Ionic to interface with hardware controllers, enabling remote management of DHW systems, hoppers, and boilers. Upgraded from Ionic 1 to Ionic 4 for improved performance.",
    tags: ["Ionic", "Capacitor", "TypeScript", "IoT", "Mobile"],
    color: "#06b6d4",
    highlights: [
      "Remote management of heating hardware devices",
      "Upgraded from Ionic 1 to Ionic 4",
      "Published on iOS App Store and Google Play",
    ],
    links: {
      appStore: "#",
      playStore: "#",
    },
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-24 px-6" style={{ background: "var(--surface)" }}>
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <div
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-medium mb-4 border"
            style={{
              background: "rgba(245,158,11,0.08)",
              borderColor: "rgba(245,158,11,0.25)",
              color: "var(--accent)",
            }}
          >
            <Rocket className="w-3.5 h-3.5" />
            Projects
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="gradient-text">Featured Work</span>
          </h2>
          <p className="text-base max-w-xl mx-auto" style={{ color: "var(--text-muted)" }}>
            From AI-powered tools to enterprise SaaS platforms — a selection of impactful projects.
          </p>
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 gap-5">
          {projects.map((project) => (
            <div
              key={project.title}
              className="p-6 rounded-2xl border card-glow flex flex-col"
              style={{ background: "var(--surface-2)", borderColor: "var(--border)" }}
            >
              {/* Top */}
              <div className="flex items-start justify-between gap-3 mb-3">
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <span
                      className="text-xs px-2 py-0.5 rounded-full font-medium"
                      style={{ background: `${project.color}18`, color: project.color }}
                    >
                      {project.type}
                    </span>
                  </div>
                  <h3 className="text-base font-bold" style={{ color: "var(--foreground)" }}>
                    {project.title}
                  </h3>
                </div>
                <div
                  className="p-2 rounded-lg shrink-0"
                  style={{ background: `${project.color}15` }}
                >
                  <Rocket className="w-4 h-4" style={{ color: project.color }} />
                </div>
              </div>

              {/* Description */}
              <p className="text-sm leading-relaxed mb-4" style={{ color: "var(--text-muted)" }}>
                {project.description}
              </p>

              {/* Highlights */}
              <ul className="space-y-1 mb-4">
                {project.highlights.map((h) => (
                  <li key={h} className="flex items-center gap-2 text-xs" style={{ color: "var(--text-muted)" }}>
                    <span className="w-1.5 h-1.5 rounded-full shrink-0" style={{ background: project.color }} />
                    {h}
                  </li>
                ))}
              </ul>

              {/* Tags */}
              <div className="flex flex-wrap gap-1.5 mt-auto">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="flex items-center gap-1 px-2 py-0.5 rounded-md text-xs border"
                    style={{
                      background: "rgba(255,255,255,0.04)",
                      borderColor: "var(--border)",
                      color: "var(--text-muted)",
                    }}
                  >
                    <Tag className="w-2.5 h-2.5" />
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
