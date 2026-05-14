import { GraduationCap, User, Calendar, Award } from "lucide-react";

const stats = [
  { label: "Years Experience", value: "8+" },
  { label: "Companies", value: "7" },
  { label: "Projects Shipped", value: "20+" },
  { label: "Certifications", value: "8" },
];

const education = [
  {
    degree: "BS Software Engineering",
    institution: "PUCIT, Lahore, Pakistan",
    period: "2013 – 2017",
    grade: "3.0 / 4.0 CGPA",
  },
  {
    degree: "FSc Pre-Engineering",
    institution: "Chenab College, Jhang, Pakistan",
    period: "2011 – 2013",
    grade: "92% Marks",
  },
];

export default function About() {
  return (
    <section id="about" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-16">
          <div
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-medium mb-4 border"
            style={{
              background: "rgba(99,102,241,0.08)",
              borderColor: "rgba(99,102,241,0.25)",
              color: "var(--primary-light)",
            }}
          >
            <User className="w-3.5 h-3.5" />
            About Me
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="gradient-text">Who I Am</span>
          </h2>
          <p className="text-base max-w-xl mx-auto" style={{ color: "var(--text-muted)" }}>
            A passionate engineer who loves solving hard problems with elegant code.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          {/* Bio */}
          <div>
            <div
              className="p-6 rounded-2xl border space-y-4 card-glow"
              style={{ background: "var(--surface-2)", borderColor: "var(--border)" }}
            >
              <p className="text-base leading-relaxed" style={{ color: "var(--text-muted)" }}>
                I&apos;m a <span style={{ color: "var(--foreground)", fontWeight: 600 }}>Senior Software Engineer</span>,
                {" "}AI-Native Developer, and Automation Engineer based in <span style={{ color: "var(--secondary)" }}>Doha, Qatar</span>.
                With over 8 years of experience, I specialize in building scalable, production-ready systems
                that blend modern web technologies with cutting-edge AI capabilities.
              </p>
              <p className="text-base leading-relaxed" style={{ color: "var(--text-muted)" }}>
                My recent focus is on <span style={{ color: "var(--primary-light)" }}>agentic workflows</span> using
                LangChain and OpenAI — building tools that automate operational bottlenecks and deliver
                real business value. I&apos;ve led architectural decisions on platforms serving 100K+ users,
                integrating complex payment systems, RBAC flows, and multi-cloud infrastructure.
              </p>
              <p className="text-base leading-relaxed" style={{ color: "var(--text-muted)" }}>
                I thrive in cross-functional teams, mentoring junior developers, and translating
                business requirements into clean, maintainable architectures.
              </p>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 gap-4">
            {stats.map(({ label, value }) => (
              <div
                key={label}
                className="p-6 rounded-2xl border text-center card-glow"
                style={{ background: "var(--surface-2)", borderColor: "var(--border)" }}
              >
                <div
                  className="text-3xl font-bold mb-1 gradient-text"
                >
                  {value}
                </div>
                <div className="text-sm" style={{ color: "var(--text-muted)" }}>
                  {label}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Education */}
        <div>
          <div className="flex items-center gap-2 mb-6">
            <GraduationCap className="w-5 h-5" style={{ color: "var(--primary)" }} />
            <h3 className="text-xl font-bold" style={{ color: "var(--foreground)" }}>
              Education
            </h3>
          </div>
          <div className="grid md:grid-cols-2 gap-4">
            {education.map((edu) => (
              <div
                key={edu.degree}
                className="p-6 rounded-2xl border card-glow"
                style={{ background: "var(--surface-2)", borderColor: "var(--border)" }}
              >
                <div className="flex items-start justify-between gap-4 mb-3">
                  <div>
                    <h4 className="font-semibold text-base" style={{ color: "var(--foreground)" }}>
                      {edu.degree}
                    </h4>
                    <p className="text-sm mt-0.5" style={{ color: "var(--text-muted)" }}>
                      {edu.institution}
                    </p>
                  </div>
                  <div
                    className="flex items-center gap-1 text-xs px-2 py-1 rounded-lg whitespace-nowrap"
                    style={{ background: "rgba(99,102,241,0.1)", color: "var(--primary-light)" }}
                  >
                    <Calendar className="w-3 h-3" />
                    {edu.period}
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <Award className="w-4 h-4" style={{ color: "var(--accent)" }} />
                  <span className="text-sm font-medium" style={{ color: "var(--accent)" }}>
                    {edu.grade}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
