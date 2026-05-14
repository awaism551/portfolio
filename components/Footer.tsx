import { Code2, Heart } from "lucide-react";

export default function Footer() {
  return (
    <footer
      className="border-t py-8 px-6"
      style={{ background: "var(--surface)", borderColor: "var(--border)" }}
    >
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2">
          <Code2 className="w-4 h-4" style={{ color: "var(--primary)" }} />
          <span className="font-semibold text-sm gradient-text">Awais Nasir</span>
        </div>
        {/* <p className="text-xs flex items-center gap-1" style={{ color: "var(--text-muted)" }}>
          Built with <Heart className="w-3 h-3 text-red-400" /> using Next.js 15 & Tailwind CSS
        </p> */}
        <p className="text-xs" style={{ color: "var(--text-muted)" }}>
          © {new Date().getFullYear()} Awais Nasir. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
