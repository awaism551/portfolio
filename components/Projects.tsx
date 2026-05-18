import { Rocket, ExternalLink, Tag } from "lucide-react";
import portfolio from "@/data/portfolio.json";

const { projects } = portfolio;

export default function Projects() {
  return (
    <section id="projects" className="py-24 px-6" style={{ background: "var(--surface)" }}>
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <div
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-medium mb-4 border"
            style={{ background: "rgba(245,158,11,0.08)", borderColor: "rgba(245,158,11,0.25)", color: "var(--accent)" }}
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
                  <h3 className="text-base font-bold" style={{ color: "var(--foreground)" }}>{project.title}</h3>
                </div>
                <div className="flex items-center gap-2 shrink-0">
                  {project.url && (
                    <a
                      href={project.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium border transition-all duration-200 hover:scale-105"
                      style={{ background: `${project.color}12`, borderColor: `${project.color}30`, color: project.color }}
                    >
                      <ExternalLink className="w-3 h-3" />
                      Visit
                    </a>
                  )}
                  <div className="p-2 rounded-lg" style={{ background: `${project.color}15` }}>
                    <Rocket className="w-4 h-4" style={{ color: project.color }} />
                  </div>
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
                    style={{ background: "rgba(255,255,255,0.04)", borderColor: "var(--border)", color: "var(--text-muted)" }}
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
