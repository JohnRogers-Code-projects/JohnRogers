import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "John Rogers | Backend & Systems Engineer",
  description: "Backend and systems engineer focused on AI safety, correctness over confidence, and building systems that fail gracefully. Explore my flagship projects: ForgeBreaker, MLForge, and MCP-Demo.",
  keywords: ["backend engineer", "systems engineer", "AI safety", "machine learning", "software architecture", "Ireland", "remote"],
  authors: [{ name: "John Rogers" }],
  openGraph: {
    title: "John Rogers | Backend & Systems Engineer",
    description: "Backend and systems engineer focused on AI safety, correctness over confidence, and building systems that fail gracefully.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-background text-foreground`}
      >
        {children}
      </body>
    </html>
  );
}
