import { Mail, Phone, MapPin, GitFork, Link, ExternalLink, Send, PlayCircle } from "lucide-react";
import portfolio from "@/data/portfolio.json";

const { personal, contact } = portfolio;

const iconMap: Record<string, React.ElementType> = {
  GitFork, Link, ExternalLink, PlayCircle,
};

const contactInfo = [
  { icon: Mail,    label: "Email",    value: personal.email,    href: `mailto:${personal.email}`,   color: "#6366f1" },
  { icon: Phone,   label: "Phone",    value: personal.phone,    href: `tel:${personal.phone.replace(/\s/g, "")}`, color: "#06b6d4" },
  { icon: MapPin,  label: "Location", value: personal.location, href: "#",                          color: "#f59e0b" },
];

export default function Contact() {
  return (
    <section id="contact" className="py-24 px-6" style={{ background: "var(--surface)" }}>
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <div
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-medium mb-4 border"
            style={{ background: "rgba(6,182,212,0.08)", borderColor: "rgba(6,182,212,0.25)", color: "var(--secondary)" }}
          >
            <Send className="w-3.5 h-3.5" />
            {contact.sectionLabel}
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="gradient-text">{contact.heading}</span>
          </h2>
          <p className="text-base max-w-xl mx-auto" style={{ color: "var(--text-muted)" }}>
            {contact.subtitle}
          </p>
        </div>

        <div className="grid md:grid-cols-1 gap-10 max-w-xl mx-auto w-full">
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-bold mb-2" style={{ color: "var(--foreground)" }}>
                Let&apos;s work together
              </h3>
              <p className="text-sm leading-relaxed" style={{ color: "var(--text-muted)" }}>
                {contact.pitch}
              </p>
            </div>

            {/* Contact info cards */}
            <div className="space-y-3">
              {contactInfo.map(({ icon: Icon, label, value, href, color }) => (
                <a
                  key={label}
                  href={href}
                  className="flex items-center gap-4 p-4 rounded-xl border transition-all duration-200 card-glow"
                  style={{ background: "var(--surface-2)", borderColor: "var(--border)" }}
                >
                  <div className="w-10 h-10 rounded-lg flex items-center justify-center shrink-0" style={{ background: `${color}18` }}>
                    <Icon className="w-5 h-5" style={{ color }} />
                  </div>
                  <div>
                    <p className="text-xs" style={{ color: "var(--text-muted)" }}>{label}</p>
                    <p className="text-sm font-medium" style={{ color: "var(--foreground)" }}>{value}</p>
                  </div>
                </a>
              ))}
            </div>

            {/* Socials */}
            <div>
              <p className="text-xs font-medium mb-3" style={{ color: "var(--text-muted)" }}>Find me on</p>
              <div className="flex flex-wrap gap-2">
                {contact.socials.map(({ icon, label, href, color }) => {
                  const Icon = iconMap[icon] ?? ExternalLink;
                  return (
                    <a
                      key={label}
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-3 py-2 rounded-lg border text-xs font-medium transition-all duration-200 hover:scale-105"
                      style={{ background: `${color}10`, borderColor: `${color}25`, color }}
                    >
                      <Icon className="w-3.5 h-3.5" />
                      {label}
                    </a>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Contact form — commented out until Twilio/SendGrid API is configured
          <div className="p-6 rounded-2xl border" style={{ background: "var(--surface-2)", borderColor: "var(--border)" }}>
            ...form fields...
          </div>
          */}
        </div>
      </div>
    </section>
  );
}
