import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Awais Nasir | Senior Software Engineer",
  description:
    "Portfolio of Awais Nasir — Senior Software Engineer, AI-Native Developer & Automation Engineer specializing in LangChain, Next.js, NestJS, and cloud-native systems.",
  keywords: [
    "Awais Nasir",
    "Software Engineer",
    "AI Developer",
    "Next.js",
    "NestJS",
    "LangChain",
    "React",
    "Full Stack",
    "Qatar",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable}`}>
      <body className="min-h-screen" style={{ background: "var(--background)", color: "var(--foreground)" }}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
