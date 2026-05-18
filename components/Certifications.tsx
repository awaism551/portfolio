import { Award, ExternalLink } from "lucide-react";
import portfolio from "@/data/portfolio.json";

const { certifications } = portfolio;

export default function Certifications() {
  const categories = [...new Set(certifications.map((c) => c.category))];
  const categoryColors = Object.fromEntries(
    certifications.map((c) => [c.category, c.color])
  );

  return (
    <section id="certifications" className="py-24 px-6">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <div
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-medium mb-4 border"
            style={{ background: "rgba(139,92,246,0.08)", borderColor: "rgba(139,92,246,0.25)", color: "#a78bfa" }}
          >
            <Award className="w-3.5 h-3.5" />
            Certifications
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="gradient-text">Credentials</span>
          </h2>
          <p className="text-base max-w-xl mx-auto" style={{ color: "var(--text-muted)" }}>
            Industry-recognized certifications spanning cloud architecture, development, and accessibility.
          </p>
        </div>

        {/* Category pills */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {categories.map((cat) => (
            <span
              key={cat}
              className="px-3 py-1 rounded-full text-xs font-medium border"
              style={{
                background: `${categoryColors[cat]}12`,
                borderColor: `${categoryColors[cat]}30`,
                color: categoryColors[cat],
              }}
            >
              {cat}
            </span>
          ))}
        </div>

        {/* Cert grid */}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {certifications.map((cert) => (
            <div
              key={cert.title}
              className="relative p-5 rounded-2xl border card-glow flex flex-col gap-3 group"
              style={{ background: "var(--surface-2)", borderColor: "var(--border)" }}
            >
              <div className="w-10 h-10 rounded-xl flex items-center justify-center" style={{ background: `${cert.color}18` }}>
                <Award className="w-5 h-5" style={{ color: cert.color }} />
              </div>

              <span
                className="absolute top-4 right-4 text-xs px-2 py-0.5 rounded-full font-medium"
                style={{ background: `${cert.color}18`, color: cert.color }}
              >
                {cert.category}
              </span>

              <div>
                <h3 className="text-sm font-semibold leading-snug mb-1" style={{ color: "var(--foreground)" }}>
                  {cert.title}
                </h3>
                <p className="text-xs" style={{ color: "var(--text-muted)" }}>{cert.issuer}</p>
              </div>

              {cert.link && (
                <a
                  href={cert.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-auto flex items-center gap-1 text-xs font-medium transition-colors opacity-0 group-hover:opacity-100"
                  style={{ color: cert.color }}
                >
                  View Certificate
                  <ExternalLink className="w-3 h-3" />
                </a>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
