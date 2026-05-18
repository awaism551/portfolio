import {
  Cpu, Globe, Server, Database, Cloud, Shield,
  GitBranch, Wrench, Layers, Zap, Smartphone, TestTube,
  CloudCog, FileCode, Terminal, Repeat, Network, Waypoints, Layout, Users,
} from "lucide-react";
import portfolio from "@/data/portfolio.json";

const { skills: skillGroups } = portfolio;

const iconMap: Record<string, React.ElementType> = {
  Cpu, Globe, Server, Database, Cloud, Shield,
  GitBranch, Wrench, Layers, Zap, Smartphone, TestTube,
  CloudCog, FileCode, Terminal, Repeat, Network, Waypoints, Layout, Users,
};

export default function Skills() {
  return (
    <section id="skills" className="py-24 px-6" style={{ background: "var(--surface)" }}>
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <div
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-medium mb-4 border"
            style={{ background: "rgba(6,182,212,0.08)", borderColor: "rgba(6,182,212,0.25)", color: "var(--secondary)" }}
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
          {skillGroups.map(({ category, icon, color, skills }) => {
            const Icon = iconMap[icon] ?? Cpu;
            return (
              <div
                key={category}
                className="p-5 rounded-2xl border card-glow"
                style={{ background: "var(--surface-2)", borderColor: "var(--border)" }}
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 rounded-lg" style={{ background: `${color}18` }}>
                    <Icon className="w-4 h-4" style={{ color }} />
                  </div>
                  <h3 className="font-semibold text-sm" style={{ color: "var(--foreground)" }}>{category}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-2.5 py-1 rounded-md text-xs font-medium border"
                      style={{ background: `${color}10`, borderColor: `${color}25`, color: "var(--foreground)" }}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
