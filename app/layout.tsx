import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Chatbot from "@/components/Chatbot";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Awais Nasir | Software Engineer & Full Stack Architect",
  description:
    "Portfolio of Awais Nasir — Software Engineer & Full Stack Architect specializing in AI-integrated systems, LangChain, Next.js, NestJS, Azure, AWS, and cloud-native solutions. Based in Doha, Qatar.",
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
      <body suppressHydrationWarning className="min-h-screen" style={{ background: "var(--background)", color: "var(--foreground)" }}>
        <Navbar />
        {children}
        <Chatbot />
      </body>
    </html>
  );
}
