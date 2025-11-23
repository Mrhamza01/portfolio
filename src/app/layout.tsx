import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ClientInit } from "@/components/ClientInit";
import { GoogleAnalytics } from "@/components/GoogleAnalytics";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Muhammad Hamza Ghafoor | Senior Software Engineer & Team Lead",
  description: "Full Stack Developer specializing in Kubernetes, DevOps, and Cloud-Native solutions. Architecting scalable SaaS & ERP platforms with expertise in React, Node.js, and modern web technologies.",
  keywords: ["Full Stack Developer", "Kubernetes", "DevOps", "Cloud Native", "React", "Node.js", "Next.js", "Software Engineer", "ERP", "SaaS"],
  authors: [{ name: "Muhammad Hamza Ghafoor" }],
  creator: "Muhammad Hamza Ghafoor",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://hamzaghafoor.vercel.app",
    title: "Muhammad Hamza Ghafoor | Senior Software Engineer",
    description: "Full Stack Developer specializing in Kubernetes, DevOps, and Cloud-Native solutions",
    siteName: "Hamza Ghafoor Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Muhammad Hamza Ghafoor | Senior Software Engineer",
    description: "Full Stack Developer specializing in Kubernetes, DevOps, and Cloud-Native solutions",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <GoogleAnalytics />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ClientInit />
        {children}
      </body>
    </html>
  );
}
