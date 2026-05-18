"use client";

import { useEffect, useState } from "react";
import { MapPin, Mail, Phone, GitFork, Link, ExternalLink, ChevronDown } from "lucide-react";
import portfolio from "@/data/portfolio.json";

const { personal } = portfolio;

const iconMap: Record<string, React.ElementType> = {
  GitFork,
  Link,
  ExternalLink,
};

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = personal.roles[roleIndex];
    let timeout: ReturnType<typeof setTimeout>;

    if (!deleting && displayed.length < current.length) {
      timeout = setTimeout(() => setDisplayed(current.slice(0, displayed.length + 1)), 60);
    } else if (!deleting && displayed.length === current.length) {
      timeout = setTimeout(() => setDeleting(true), 2200);
    } else if (deleting && displayed.length > 0) {
      timeout = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 35);
    } else if (deleting && displayed.length === 0) {
      setDeleting(false);
      setRoleIndex((i) => (i + 1) % personal.roles.length);
    }

    return () => clearTimeout(timeout);
  }, [displayed, deleting, roleIndex]);

  return (
    <section
      id="hero"
      className="min-h-screen flex flex-col items-center justify-center relative overflow-hidden px-6"
    >
      {/* Background grid */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(var(--primary) 1px, transparent 1px), linear-gradient(90deg, var(--primary) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      {/* Glow orbs */}
      <div className="absolute top-1/4 left-1/4 w-72 h-72 rounded-full blur-3xl opacity-10 float" style={{ background: "var(--primary)" }} />
      <div className="absolute bottom-1/4 right-1/4 w-64 h-64 rounded-full blur-3xl opacity-10" style={{ background: "var(--secondary)" }} />

      <div className="relative z-10 max-w-4xl mx-auto text-center">
        {/* Badge */}
        {personal.availableForWork && (
          <div
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-medium mb-8 border"
            style={{ background: "rgba(99,102,241,0.1)", borderColor: "rgba(99,102,241,0.3)", color: "var(--primary-light)" }}
          >
            <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
            {personal.availabilityLabel}
          </div>
        )}

        {/* Name */}
        <h1 className="text-5xl md:text-7xl font-bold mb-4 tracking-tight">
          <span style={{ color: "var(--foreground)" }}>Hi, I&apos;m </span>
          <span className="gradient-text">{personal.name}</span>
        </h1>

        {/* Typewriter */}
        <div className="h-12 md:h-16 flex items-center justify-center mb-6">
          <h2 className="text-xl md:text-3xl font-semibold" style={{ color: "var(--primary-light)" }}>
            {displayed}
            <span className="blink" style={{ color: "var(--secondary)" }}>|</span>
          </h2>
        </div>

        {/* Summary */}
        <p className="text-base md:text-lg max-w-2xl mx-auto mb-8 leading-relaxed" style={{ color: "var(--text-muted)" }}>
          {personal.description}
        </p>

        {/* Meta */}
        <div className="flex flex-wrap items-center justify-center gap-4 mb-10 text-sm" style={{ color: "var(--text-muted)" }}>
          <span className="flex items-center gap-1">
            <MapPin className="w-4 h-4" style={{ color: "var(--accent)" }} />
            {personal.location}
          </span>
          <span className="flex items-center gap-1">
            <Phone className="w-4 h-4" style={{ color: "var(--accent)" }} />
            {personal.phone}
          </span>
          <span className="flex items-center gap-1">
            <Mail className="w-4 h-4" style={{ color: "var(--accent)" }} />
            {personal.email}
          </span>
        </div>

        {/* CTAs */}
        <div className="flex flex-wrap items-center justify-center gap-4 mb-12">
          <a
            href="#experience"
            className="px-6 py-3 rounded-xl font-semibold text-white transition-all duration-200 hover:opacity-90 hover:scale-105"
            style={{ background: "linear-gradient(135deg, var(--primary), var(--secondary))" }}
          >
            View My Work
          </a>
          <a
            href="#contact"
            className="px-6 py-3 rounded-xl font-semibold border transition-all duration-200 hover:scale-105"
            style={{ borderColor: "var(--border)", color: "var(--foreground)", background: "var(--surface)" }}
          >
            Get In Touch
          </a>
        </div>

        {/* Social links */}
        <div className="flex items-center justify-center gap-4">
          {personal.socials.map(({ href, label, icon }) => {
            const Icon = iconMap[icon] ?? ExternalLink;
            return (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="p-3 rounded-xl border transition-all duration-200 hover:scale-110"
                style={{ borderColor: "var(--border)", background: "var(--surface)", color: "var(--text-muted)" }}
              >
                <Icon className="w-5 h-5" />
              </a>
            );
          })}
        </div>
      </div>

      {/* Scroll indicator */}
      <a
        href="#about"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-xs"
        style={{ color: "var(--text-muted)" }}
      >
        <span>Scroll</span>
        <ChevronDown className="w-4 h-4 animate-bounce" />
      </a>
    </section>
  );
}
