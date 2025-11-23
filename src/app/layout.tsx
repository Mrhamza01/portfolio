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
  title: {
    default: "Muhammad Hamza Ghafoor | Senior Software Engineer",
    template: "%s | Muhammad Hamza Ghafoor"
  },
  description: "Portfolio of Muhammad Hamza Ghafoor, a Senior Software Engineer and Team Lead specializing in Kubernetes, DevOps, and Cloud-Native solutions. Expert in React, Node.js, and scaling SaaS platforms.",
  keywords: [
    "Muhammad Hamza Ghafoor",
    "Hamza Ghafoor",
    "Muhammad Hamza",
    "Hamza",
    "Software Engineer",
    "Full Stack Developer",
    "Kubernetes Expert",
    "DevOps Engineer",
    "React Developer",
    "Node.js Developer",
    "Team Lead"
  ],
  authors: [{ name: "Muhammad Hamza Ghafoor", url: "https://hamzaghafoor.vercel.app" }],
  creator: "Muhammad Hamza Ghafoor",
  publisher: "Muhammad Hamza Ghafoor",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://hamzaghafoor.vercel.app",
    title: "Muhammad Hamza Ghafoor | Senior Software Engineer",
    description: "Senior Software Engineer specializing in Kubernetes, DevOps, and Cloud-Native solutions. View my portfolio, projects, and technical articles.",
    siteName: "Muhammad Hamza Ghafoor",
    images: [
      {
        url: "/og-image.jpg", // Assuming we might have one, or I should create one later
        width: 1200,
        height: 630,
        alt: "Muhammad Hamza Ghafoor Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Muhammad Hamza Ghafoor | Senior Software Engineer",
    description: "Senior Software Engineer specializing in Kubernetes, DevOps, and Cloud-Native solutions.",
    creator: "@hamzaghafoor", // Placeholder, ideally should be real handle
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: "google-site-verification-code", // Placeholder
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
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              "name": "Muhammad Hamza Ghafoor",
              "alternateName": ["Hamza Ghafoor", "Muhammad Hamza", "Hamza"],
              "url": "https://hamzaghafoor.vercel.app",
              "image": "https://hamzaghafoor.vercel.app/images/hero.png",
              "sameAs": [
                "https://github.com/Mrhamza01",
                "https://linkedin.com/in/muhammad-hamza-ghafoor-8a6b32213",
                "https://www.instagram.com/hamzaghafoor_/"
              ],
              "jobTitle": "Senior Software Engineer",
              "description": "Senior Software Engineer specializing in Kubernetes, DevOps, and Cloud-Native solutions."
            })
          }}
        />
        <ClientInit />
        {children}
      </body>
    </html>
  );
}
