import type React from "react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Aimen Taoussi - Full-Stack Developer & Designer",
  description:
    "Portfolio of Aimen Taoussi, 1337-42 School student specializing in full-stack development and UI/UX design",
  keywords: [
    "Full-Stack Developer",
    "UI/UX Designer",
    "React",
    "Next.js",
    "Node.js",
    "1337 School",
    "42 School",
  ],
  authors: [{ name: "Aimen Taoussi" }],
  openGraph: {
    title: "Aimen Taoussi - Full-Stack Developer & Designer",
    description:
      "Portfolio showcasing full-stack development and design projects",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
