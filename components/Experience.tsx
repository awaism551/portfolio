import { Briefcase, Calendar, MapPin, ChevronRight } from "lucide-react";

const experiences = [
  {
    company: "QC+ | Qatar Museums",
    role: "Senior Web Developer",
    location: "Doha, Qatar",
    period: "Sep 2025 – Mar 2026",
    tags: ["Next.js", "NestJS", "Hasura GraphQL", "Azure PostgreSQL", "RBAC"],
    highlights: [
      "Led architecture and delivery of a centralized Memberships Platform migrating 100K+ members from legacy systems.",
      "Unified RBAC-driven admin workflows, membership approvals, ticketing, and QNB payment integrations.",
      "Fully digitized corporate, individual, and event-based memberships for Qatar Museums.",
      "Led end-to-end system design with infrastructure, security, and operations teams.",
    ],
  },
  {
    company: "Port Software | Daleel Aqar",
    role: "Software Engineer",
    location: "Doha, Qatar",
    period: "Feb 2025 – Aug 2025",
    tags: ["Angular", "NestJS", "GraphQL", "PostgreSQL", "AWS", "Nx.dev", "WCAG"],
    highlights: [
      "Led end-to-end technical consulting for a large-scale real estate platform (buying, selling, rentals).",
      "Architected app fully compliant with WCAG guidelines, achieving official levelaccess certification.",
      "Structured within an Nx.dev monorepo for scalability, maintainability, and rapid team onboarding.",
      "Established AWS DevOps practices: Dockerized services, Bitbucket Pipelines, monitoring, IAM.",
    ],
  },
  {
    company: "Authentic Influencers",
    role: "Software Engineer",
    location: "Lahore, Pakistan",
    period: "Jan 2025 – Feb 2025",
    tags: ["React", "Directus CMS", "AWS", "GraphQL", "Microservices"],
    highlights: [
      "Designed architecture for a platform connecting Instagram & TikTok influencers with brands.",
      "Implemented React frontend integrated with Directus headless CMS for flexible editorial workflows.",
      "Architected AWS-based microservices for authentication, content delivery, and notifications.",
      "Mentored the development team on engineering best practices and cloud deployment strategies.",
    ],
  },
  {
    company: "Afiniti",
    role: "Software Engineer 2 → Sr Software Engineer",
    location: "Lahore, Pakistan",
    period: "Dec 2020 – Dec 2024",
    tags: ["Node.js", "Next.js", "Python", "OpenAI", "LangChain", "pgvector", "Keycloak", "PostgreSQL"],
    highlights: [
      "Performance Reporting: Engineered a reporting platform with AI-powered chatbot using OpenAI + LangChain + pgvector for semantic search.",
      "WFM Historical Connectors: Architected ETL pipeline to sync historical data across client environments with large-scale SQL migrations.",
      "WFM (SaaS): Built scalable tenant-based microservices architecture with Keycloak RBAC, time-zone handling, and workforce scheduling.",
      "Db Utility: Built internal tool for database schema deployment on production/staging servers with backup and log tracking.",
      "Visenya: Built platform to automate AI/data pipelines using Node.js, Next.js, Python, Airflow, and Apache Cassandra.",
    ],
  },
  {
    company: "Phaedra Solutions",
    role: "Software Engineer → Team Lead",
    location: "Lahore, Pakistan",
    period: "Sep 2018 – Nov 2020",
    tags: ["AngularJS", "Angular 2+", "Ionic", "NestJS", "GraphQL", "Sequelize"],
    highlights: [
      "Omni Central: Built all-in-one communication platform with SMS, WhatsApp, email, and live chat channels.",
      "Aduro: Developed hybrid mobile app (Ionic) for hardware controller management; upgraded from Ionic 1 to Ionic 4.",
      "Led sprint planning, client interactions, and cross-functional collaboration.",
      "Built and published iOS apps to App Store and TestFlight.",
    ],
  },
  {
    company: "DynaSoft Cloud",
    role: "Software Engineer",
    location: "Lahore, Pakistan",
    period: "Jan 2018 – Sep 2018",
    tags: ["AngularJS", "Angular 2+", "jQuery", "NetSuite"],
    highlights: [
      "Enhanced and integrated new features on the NetSuite platform.",
      "Integrated NetSuite with various technologies, streamlining data flow across multiple systems.",
    ],
  },
  {
    company: "SW3 Solutions",
    role: "Software Engineer",
    location: "Lahore, Pakistan",
    period: "Sep 2017 – Dec 2017",
    tags: ["PHP", "Laravel", "LAMP Stack"],
    highlights: [
      "Full stack development on various PHP products using Laravel and core PHP.",
    ],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="py-24 px-6">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <div
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-medium mb-4 border"
            style={{
              background: "rgba(99,102,241,0.08)",
              borderColor: "rgba(99,102,241,0.25)",
              color: "var(--primary-light)",
            }}
          >
            <Briefcase className="w-3.5 h-3.5" />
            Professional Experience
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="gradient-text">Work History</span>
          </h2>
          <p className="text-base max-w-xl mx-auto" style={{ color: "var(--text-muted)" }}>
            8+ years of building impactful software across AI, SaaS, real estate, healthcare, and telecom.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div
            className="absolute left-4 md:left-6 top-0 bottom-0 w-px"
            style={{ background: "var(--border)" }}
          />

          <div className="space-y-8">
            {experiences.map((exp, i) => (
              <div key={i} className="relative pl-12 md:pl-16">
                {/* Dot */}
                <div
                  className="absolute left-2.5 md:left-4 top-6 w-3 h-3 rounded-full border-2"
                  style={{
                    background: "var(--primary)",
                    borderColor: "var(--primary-light)",
                    boxShadow: "0 0 10px rgba(99,102,241,0.5)",
                  }}
                />

                {/* Card */}
                <div
                  className="p-6 rounded-2xl border card-glow"
                  style={{ background: "var(--surface-2)", borderColor: "var(--border)" }}
                >
                  <div className="flex flex-wrap items-start justify-between gap-3 mb-3">
                    <div>
                      <h3 className="text-lg font-bold" style={{ color: "var(--foreground)" }}>
                        {exp.role}
                      </h3>
                      <p className="font-semibold text-sm mt-0.5" style={{ color: "var(--primary-light)" }}>
                        {exp.company}
                      </p>
                    </div>
                    <div className="flex flex-col items-end gap-1 text-xs" style={{ color: "var(--text-muted)" }}>
                      <span className="flex items-center gap-1">
                        <Calendar className="w-3 h-3" />
                        {exp.period}
                      </span>
                      <span className="flex items-center gap-1">
                        <MapPin className="w-3 h-3" />
                        {exp.location}
                      </span>
                    </div>
                  </div>

                  {/* Tech tags */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {exp.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-0.5 rounded-md text-xs font-medium"
                        style={{
                          background: "rgba(99,102,241,0.1)",
                          color: "var(--primary-light)",
                        }}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Highlights */}
                  <ul className="space-y-1.5">
                    {exp.highlights.map((h, j) => (
                      <li key={j} className="flex items-start gap-2 text-sm" style={{ color: "var(--text-muted)" }}>
                        <ChevronRight
                          className="w-4 h-4 mt-0.5 shrink-0"
                          style={{ color: "var(--secondary)" }}
                        />
                        {h}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
