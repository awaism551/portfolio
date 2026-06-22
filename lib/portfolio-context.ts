import portfolio from "@/data/portfolio.json";

export function buildPortfolioContext(): string {
  const { personal, about, skills, experience, projects, certifications, contact } =
    portfolio;

  const skillLines = skills
    .map((g) => `- ${g.category}: ${g.skills.join(", ")}`)
    .join("\n");

  const experienceLines = experience
    .map((job) => {
      const highlights = job.highlights.map((h) => `    • ${h}`).join("\n");
      return `- ${job.role} @ ${job.company} (${job.period}, ${job.location})
  Tags: ${job.tags.join(", ")}
${highlights}`;
    })
    .join("\n\n");

  const projectLines = projects
    .map((p) => {
      const highlights = p.highlights.map((h) => `    • ${h}`).join("\n");
      const urls = [
        p.url ? `Live: ${p.url}` : null,
        "links" in p && Array.isArray(p.links)
          ? p.links.map((l: { label: string; href: string }) => `${l.label}: ${l.href}`).join(" | ")
          : null,
      ]
        .filter(Boolean)
        .join(" | ");
      const urlLine = urls ? ` Links: ${urls}` : "";
      return `- ${p.title} [${p.type}]${urlLine}
  ${p.description}
  Tags: ${p.tags.join(", ")}
${highlights}`;
    })
    .join("\n\n");

  const certLines = certifications
    .map((c) => {
      const link = c.link ? ` — ${c.link}` : "";
      const status = "status" in c && c.status ? ` (${c.status})` : "";
      return `- ${c.title} (${c.issuer}, ${c.category})${status}${link}`;
    })
    .join("\n");

  return `
# Personal
Name: ${personal.name}
Email: ${personal.email}
Phone: ${personal.phone}
Location: ${personal.location}
Availability: ${personal.availabilityLabel}
Summary: ${personal.description}
Roles: ${personal.roles.join(", ")}
Social: ${personal.socials.map((s) => `${s.label}: ${s.href}`).join(" | ")}

# About
${about.subtitle}
Principles:
${about.principles.map((p) => `- ${p}`).join("\n")}
Stats: ${about.stats.map((s) => `${s.label}: ${s.value}`).join(", ")}
Education:
${about.education.map((e) => `- ${e.degree}, ${e.institution} (${e.period}, ${e.grade})`).join("\n")}

# Skills
${skillLines}

# Work Experience
${experienceLines}

# Projects
${projectLines}

# Certifications
${certLines}

# Contact
${contact.pitch}
`.trim();
}
