import { Briefcase, Calendar, MapPin, ChevronRight } from "lucide-react";
import portfolio from "@/data/portfolio.json";

const { experience: experiences } = portfolio;

export default function Experience() {
  return (
    <section id="experience" className="py-24 px-6">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <div
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-medium mb-4 border"
            style={{ background: "rgba(99,102,241,0.08)", borderColor: "rgba(99,102,241,0.25)", color: "var(--primary-light)" }}
          >
            <Briefcase className="w-3.5 h-3.5" />
            Professional Experience
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="gradient-text">Work History</span>
          </h2>
          <p className="text-base max-w-xl mx-auto" style={{ color: "var(--text-muted)" }}>
            8+ years of building impactful software across AI, SaaS, real estate, media, and cultural institutions.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          <div className="absolute left-4 md:left-6 top-0 bottom-0 w-px" style={{ background: "var(--border)" }} />

          <div className="space-y-8">
            {experiences.map((exp, i) => (
              <div key={i} className="relative pl-12 md:pl-16">
                {/* Dot */}
                <div
                  className="absolute left-2.5 md:left-4 top-6 w-3 h-3 rounded-full border-2"
                  style={{ background: "var(--primary)", borderColor: "var(--primary-light)", boxShadow: "0 0 10px rgba(99,102,241,0.5)" }}
                />

                {/* Card */}
                <div
                  className="p-6 rounded-2xl border card-glow"
                  style={{ background: "var(--surface-2)", borderColor: "var(--border)" }}
                >
                  <div className="flex flex-wrap items-start justify-between gap-3 mb-3">
                    <div>
                      <h3 className="text-lg font-bold" style={{ color: "var(--foreground)" }}>{exp.role}</h3>
                      <p className="font-semibold text-sm mt-0.5" style={{ color: "var(--primary-light)" }}>{exp.company}</p>
                    </div>
                    <div className="flex flex-col items-end gap-1 text-xs" style={{ color: "var(--text-muted)" }}>
                      <span className="flex items-center gap-1">
                        <Calendar className="w-3 h-3" />{exp.period}
                      </span>
                      <span className="flex items-center gap-1">
                        <MapPin className="w-3 h-3" />{exp.location}
                      </span>
                    </div>
                  </div>

                  {/* Tech tags */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {exp.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-0.5 rounded-md text-xs font-medium"
                        style={{ background: "rgba(99,102,241,0.1)", color: "var(--primary-light)" }}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Highlights */}
                  <ul className="space-y-1.5">
                    {exp.highlights.map((h, j) => (
                      <li key={j} className="flex items-start gap-2 text-sm" style={{ color: "var(--text-muted)" }}>
                        <ChevronRight className="w-4 h-4 mt-0.5 shrink-0" style={{ color: "var(--secondary)" }} />
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
