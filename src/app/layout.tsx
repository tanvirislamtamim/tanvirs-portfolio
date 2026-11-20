import type { Metadata, Viewport } from "next";
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

export const viewport: Viewport = {
  themeColor: "#09090b",
};

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: "Tanvir Islam Tamim | MERN Stack Developer | React, Node.js & Next.js",
  applicationName: "Tanvir Islam Tamim",
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
  icons: {
    icon: [
      { url: "/favicon-48x48.png", sizes: "48x48", type: "image/png" },
      { url: "/favicon-96x96.png", sizes: "96x96", type: "image/png" },
      { url: "/favicon.png", sizes: "192x192", type: "image/png" },
      { url: "/favicon.ico", sizes: "48x48", type: "image/x-icon" },
    ],
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
    shortcut: ["/favicon.ico"],
  },
  verification: {
    google: "google608e4352614a74ac",
  },
  openGraph: {
    type: "website",
    title: "Tanvir Islam Tamim | MERN Stack Developer",
    siteName: "Tanvir Islam Tamim",
    description:
      "Portfolio of Tanvir Islam Tamim — MERN Stack Developer specializing in React, Next.js, Node.js, Express.js and MongoDB.",
    url: SITE_URL,
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
  url: `${SITE_URL}/`,
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
  alternateName: [
    "Tanvir Tamim",
    "Tanvir Islam Tamim Portfolio",
    "Tanvir Islam Tamim Developer",
  ],
  url: `${SITE_URL}/`,
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
        <link rel="icon" type="image/png" sizes="48x48" href="/favicon-48x48.png" />
        <link rel="icon" type="image/png" sizes="96x96" href="/favicon-96x96.png" />
        <link rel="icon" type="image/png" sizes="192x192" href="/favicon.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="shortcut icon" href="/favicon.ico" />
        <meta name="application-name" content="Tanvir Islam Tamim" />
        <meta name="apple-mobile-web-app-title" content="Tanvir Islam Tamim" />
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
