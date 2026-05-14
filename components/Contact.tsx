import { Mail, Phone, MapPin, GitFork, Link, ExternalLink, Send } from "lucide-react";

const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: "awaism551@gmail.com",
    href: "mailto:awaism551@gmail.com",
    color: "#6366f1",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+974 72249657",
    href: "tel:+97472249657",
    color: "#06b6d4",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Doha, Qatar",
    href: "#",
    color: "#f59e0b",
  },
];

const socials = [
  { icon: GitFork, label: "GitHub", href: "https://github.com/awaism551", color: "#6366f1" },
  { icon: Link, label: "LinkedIn", href: "https://linkedin.com", color: "#06b6d4" },
  { icon: ExternalLink, label: "StackOverflow", href: "https://stackoverflow.com", color: "#f59e0b" },
  { icon: ExternalLink, label: "HackerRank", href: "https://hackerrank.com", color: "#10b981" },
  { icon: ExternalLink, label: "Credly", href: "https://credly.com", color: "#8b5cf6" },
];

export default function Contact() {
  return (
    <section id="contact" className="py-24 px-6" style={{ background: "var(--surface)" }}>
      <div className="max-w-5xl mx-auto">
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
            <Send className="w-3.5 h-3.5" />
            Contact
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="gradient-text">Get In Touch</span>
          </h2>
          <p className="text-base max-w-xl mx-auto" style={{ color: "var(--text-muted)" }}>
            Have a project in mind or want to collaborate? I&apos;d love to hear from you.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-10">
          {/* Left — contact details */}
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-bold mb-2" style={{ color: "var(--foreground)" }}>
                Let&apos;s work together
              </h3>
              <p className="text-sm leading-relaxed" style={{ color: "var(--text-muted)" }}>
                I&apos;m currently open to new opportunities in the Gulf region and globally.
                Whether it&apos;s a full-time role, consulting engagement, or technical advisory — reach out
                and let&apos;s explore what we can build together.
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
                  <div
                    className="w-10 h-10 rounded-lg flex items-center justify-center shrink-0"
                    style={{ background: `${color}18` }}
                  >
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
              <p className="text-xs font-medium mb-3" style={{ color: "var(--text-muted)" }}>
                Find me on
              </p>
              <div className="flex flex-wrap gap-2">
                {socials.map(({ icon: Icon, label, href, color }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-3 py-2 rounded-lg border text-xs font-medium transition-all duration-200 hover:scale-105"
                    style={{
                      background: `${color}10`,
                      borderColor: `${color}25`,
                      color,
                    }}
                  >
                    <Icon className="w-3.5 h-3.5" />
                    {label}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Right — message form */}
          <div
            className="p-6 rounded-2xl border"
            style={{ background: "var(--surface-2)", borderColor: "var(--border)" }}
          >
            <h3 className="text-base font-bold mb-5" style={{ color: "var(--foreground)" }}>
              Send a Message
            </h3>
            <form
              action={`mailto:awaism551@gmail.com`}
              method="POST"
              encType="text/plain"
              className="space-y-4"
            >
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-medium mb-1.5" style={{ color: "var(--text-muted)" }}>
                    Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    required
                    placeholder="John Doe"
                    className="w-full px-3 py-2.5 rounded-lg text-sm outline-none border transition-colors focus:border-indigo-500"
                    style={{
                      background: "var(--surface)",
                      borderColor: "var(--border)",
                      color: "var(--foreground)",
                    }}
                  />
                </div>
                <div>
                  <label className="block text-xs font-medium mb-1.5" style={{ color: "var(--text-muted)" }}>
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    required
                    placeholder="john@company.com"
                    className="w-full px-3 py-2.5 rounded-lg text-sm outline-none border transition-colors focus:border-indigo-500"
                    style={{
                      background: "var(--surface)",
                      borderColor: "var(--border)",
                      color: "var(--foreground)",
                    }}
                  />
                </div>
              </div>
              <div>
                <label className="block text-xs font-medium mb-1.5" style={{ color: "var(--text-muted)" }}>
                  Subject
                </label>
                <input
                  type="text"
                  name="subject"
                  required
                  placeholder="Project Opportunity"
                  className="w-full px-3 py-2.5 rounded-lg text-sm outline-none border transition-colors focus:border-indigo-500"
                  style={{
                    background: "var(--surface)",
                    borderColor: "var(--border)",
                    color: "var(--foreground)",
                  }}
                />
              </div>
              <div>
                <label className="block text-xs font-medium mb-1.5" style={{ color: "var(--text-muted)" }}>
                  Message
                </label>
                <textarea
                  name="body"
                  required
                  rows={5}
                  placeholder="Tell me about your project..."
                  className="w-full px-3 py-2.5 rounded-lg text-sm outline-none border transition-colors focus:border-indigo-500 resize-none"
                  style={{
                    background: "var(--surface)",
                    borderColor: "var(--border)",
                    color: "var(--foreground)",
                  }}
                />
              </div>
              <button
                type="submit"
                className="w-full flex items-center justify-center gap-2 py-3 rounded-xl text-sm font-semibold text-white transition-all duration-200 hover:opacity-90 hover:scale-[1.02]"
                style={{ background: "linear-gradient(135deg, var(--primary), var(--secondary))" }}
              >
                <Send className="w-4 h-4" />
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
