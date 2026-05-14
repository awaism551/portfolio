import { Cpu, Globe, Server, Database, Cloud, Shield, GitBranch, Wrench, Layers, Zap } from "lucide-react";

const skillGroups = [
  {
    category: "AI & Machine Learning",
    icon: Cpu,
    color: "#f59e0b",
    skills: ["LangChain", "OpenAI APIs", "pgvector", "Semantic Search", "AI Chatbots", "Agentic Workflows", "Apache Airflow"],
  },
  {
    category: "Frontend",
    icon: Globe,
    color: "#06b6d4",
    skills: ["Next.js", "React.js", "Angular 2+", "AngularJS", "TypeScript", "JavaScript ES6", "HTML5", "Apollo Angular", "Backbone.js", "jQuery"],
  },
  {
    category: "Backend",
    icon: Server,
    color: "#6366f1",
    skills: ["Node.js", "NestJS", "Express.js", "Python", "Flask", "Django", "C#", ".NET", "Firebase"],
  },
  {
    category: "Databases",
    icon: Database,
    color: "#8b5cf6",
    skills: ["PostgreSQL", "MySQL", "MongoDB", "MariaDB", "Firebase Firestore", "AWS DynamoDB", "AWS RDS", "Greenplum", "Apache Cassandra", "Redis"],
  },
  {
    category: "Cloud & DevOps",
    icon: Cloud,
    color: "#06b6d4",
    skills: ["AWS", "Microsoft Azure", "Docker", "Jenkins", "Azure Pipelines", "Bitbucket Pipelines", "Prometheus", "Grafana", "Nginx", "Kong"],
  },
  {
    category: "Security & Auth",
    icon: Shield,
    color: "#ef4444",
    skills: ["Keycloak", "OAuth 2.0", "OIDC", "SAML", "NextAuth.js", "Firebase Auth", "AWS IAM", "RBAC", "ABAC", "MFA / 2FA", "WCAG"],
  },
  {
    category: "State & APIs",
    icon: Zap,
    color: "#f59e0b",
    skills: ["GraphQL", "REST", "Swagger", "Redux", "React-Redux", "RxJS", "Hasura", "WebSocket"],
  },
  {
    category: "UI & Styling",
    icon: Layers,
    color: "#ec4899",
    skills: ["Tailwind CSS", "Material UI", "Angular Material", "Bootstrap", "SCSS", "SASS", "CSS3"],
  },
  {
    category: "Mobile & Desktop",
    icon: Globe,
    color: "#10b981",
    skills: ["Ionic", "Capacitor", "Cordova", "PhoneGap", "NativeScript", "Electron"],
  },
  {
    category: "ORM & DB Tools",
    icon: Database,
    color: "#6366f1",
    skills: ["TypeORM", "Knex.js", "Mongoose", "Sequelize", "Prisma"],
  },
  {
    category: "Testing & QA",
    icon: Wrench,
    color: "#06b6d4",
    skills: ["Jest", "Cypress", "Playwright", "Unit Testing", "E2E Testing"],
  },
  {
    category: "Headless CMS & Tools",
    icon: GitBranch,
    color: "#8b5cf6",
    skills: ["Strapi", "Directus", "KeystoneJS", "Git", "GitHub", "Bitbucket", "Jira", "Nx.dev", "Webpack", "Babel"],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="py-24 px-6" style={{ background: "var(--surface)" }}>
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <div
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-medium mb-4 border"
            style={{
              background: "rgba(6,182,212,0.08)",
              borderColor: "rgba(6,182,212,0.25)",
              color: "var(--secondary)",
            }}
          >
            <Cpu className="w-3.5 h-3.5" />
            Technical Skills
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="gradient-text">Tech Stack</span>
          </h2>
          <p className="text-base max-w-xl mx-auto" style={{ color: "var(--text-muted)" }}>
            A comprehensive toolkit built over 8+ years across startups, enterprises, and AI-driven products.
          </p>
        </div>

        {/* Skill cards grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {skillGroups.map(({ category, icon: Icon, color, skills }) => (
            <div
              key={category}
              className="p-5 rounded-2xl border card-glow"
              style={{ background: "var(--surface-2)", borderColor: "var(--border)" }}
            >
              <div className="flex items-center gap-3 mb-4">
                <div
                  className="p-2 rounded-lg"
                  style={{ background: `${color}18` }}
                >
                  <Icon className="w-4 h-4" style={{ color }} />
                </div>
                <h3 className="font-semibold text-sm" style={{ color: "var(--foreground)" }}>
                  {category}
                </h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-2.5 py-1 rounded-md text-xs font-medium border"
                    style={{
                      background: `${color}10`,
                      borderColor: `${color}25`,
                      color: "var(--foreground)",
                    }}
                  >
                    {skill}
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
