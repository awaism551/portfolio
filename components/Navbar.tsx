"use client";

import { useState, useEffect } from "react";
import { Menu, X, Code2 } from "lucide-react";

const links = [
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#experience", label: "Experience" },
  { href: "#projects", label: "Projects" },
  { href: "#certifications", label: "Certifications" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(`#${entry.target.id}`);
        });
      },
      { rootMargin: "-40% 0px -55% 0px" }
    );
    links.forEach(({ href }) => {
      const el = document.querySelector(href);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "border-b backdrop-blur-md"
          : ""
      }`}
      style={{
        background: scrolled ? "rgba(10,10,15,0.85)" : "transparent",
        borderColor: scrolled ? "var(--border)" : "transparent",
      }}
    >
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <a href="#hero" className="flex items-center gap-2 font-bold text-lg">
          <Code2 className="w-5 h-5" style={{ color: "var(--primary)" }} />
          <span className="gradient-text">Awais Nasir</span>
        </a>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-1">
          {links.map(({ href, label }) => (
            <a
              key={href}
              href={href}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                active === href
                  ? "text-white"
                  : "hover:text-white"
              }`}
              style={{
                color: active === href ? "var(--primary-light)" : "var(--text-muted)",
                background: active === href ? "rgba(99,102,241,0.1)" : "transparent",
              }}
            >
              {label}
            </a>
          ))}
          <a
            href="mailto:awaism551@gmail.com"
            className="ml-4 px-4 py-2 rounded-lg text-sm font-semibold text-white transition-all duration-200 hover:opacity-90"
            style={{ background: "var(--primary)" }}
          >
            Hire Me
          </a>
        </nav>

        {/* Mobile toggle */}
        <button
          className="md:hidden p-2 rounded-lg"
          style={{ color: "var(--text-muted)" }}
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div
          className="md:hidden border-t px-6 py-4 flex flex-col gap-1"
          style={{ background: "var(--surface)", borderColor: "var(--border)" }}
        >
          {links.map(({ href, label }) => (
            <a
              key={href}
              href={href}
              onClick={() => setOpen(false)}
              className="px-4 py-2 rounded-lg text-sm font-medium"
              style={{ color: "var(--text-muted)" }}
            >
              {label}
            </a>
          ))}
          <a
            href="mailto:awaism551@gmail.com"
            className="mt-2 px-4 py-2 rounded-lg text-sm font-semibold text-white text-center"
            style={{ background: "var(--primary)" }}
          >
            Hire Me
          </a>
        </div>
      )}
    </header>
  );
}
