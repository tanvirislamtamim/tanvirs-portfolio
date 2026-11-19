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

const SITE_URL = "https://tanvir-islam-tamim-portfolio.netlify.app";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: "Tanvir Islam Tamim | MERN Stack Developer | React, Node.js & Next.js",
  description:
    "Tanvir Islam Tamim is a MERN Stack Developer from Bangladesh specializing in React, Next.js, Node.js, Express.js, MongoDB and modern web application development.",
  keywords: [
    "Tanvir Islam Tamim",
    "Tanvir Islam Tamim Developer",
    "Tanvir Tamim",
    "MERN Stack Developer Bangladesh",
    "MERN Stack Developer",
    "React Developer Bangladesh",
    "Node.js Developer Bangladesh",
    "Next.js Developer Bangladesh",
    "Full Stack Developer Bangladesh",
    "JavaScript Developer",
    "MongoDB Developer",
    "Express.js Developer",
    "Web Developer Bangladesh",
    "Software Developer Bangladesh",
  ],
  robots: {
    index: true,
    follow: true,
    "max-image-preview": "large",
    "max-snippet": -1,
    "max-video-preview": -1,
  },
  alternates: {
    canonical: "/",
  },
  verification: {
    google: "google608e4352614a74ac",
  },
  openGraph: {
    type: "website",
    title: "Tanvir Islam Tamim | MERN Stack Developer",
    description:
      "Portfolio of Tanvir Islam Tamim — MERN Stack Developer specializing in React, Next.js, Node.js, Express.js and MongoDB.",
    url: SITE_URL,
    siteName: "Tanvir Islam Tamim",
    locale: "en_US",
    images: [
      {
        url: `${SITE_URL}/og-image.jpg`,
        width: 1200,
        height: 630,
        alt: "Tanvir Islam Tamim — MERN Stack Developer Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Tanvir Islam Tamim | MERN Stack Developer",
    description:
      "MERN Stack Developer specializing in React, Next.js, Node.js, Express.js and MongoDB.",
    images: [`${SITE_URL}/og-image.jpg`],
  },
};

// JSON-LD Structured Data
const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Tanvir Islam Tamim",
  url: SITE_URL,
  jobTitle: "MERN Stack Developer",
  description:
    "MERN Stack Developer specializing in React, Next.js, Node.js, Express.js and MongoDB.",
  email: "mailto:ti414815@gmail.com",
  telephone: "+8801742582808",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Faridpur",
    addressCountry: "BD",
  },
  knowsAbout: [
    "MERN Stack",
    "React.js",
    "Next.js",
    "Node.js",
    "Express.js",
    "MongoDB",
    "JavaScript",
    "Web Development",
  ],
};

const websiteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "Tanvir Islam Tamim",
  url: SITE_URL,
  description:
    "Official portfolio of Tanvir Islam Tamim, a MERN Stack Developer from Bangladesh.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <head>
        <link rel="icon" type="image/png" href="/favicon.png" />
        <link rel="manifest" href="/manifest.json" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }}
        />
      </head>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
