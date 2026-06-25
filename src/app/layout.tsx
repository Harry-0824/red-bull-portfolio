import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import {
  authorName,
  canonicalUrl,
  ogImageUrl,
  profileJsonLd,
  siteDescription,
  siteMetadata,
  siteName,
  siteUrl,
} from "@/lib/site-seo";

const geistSans = Geist({
  display: "swap",
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  display: "swap",
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: siteMetadata.title,
  description: siteMetadata.description,
  alternates: {
    canonical: canonicalUrl,
  },
  authors: [
    {
      name: authorName,
      url: canonicalUrl,
    },
  ],
  creator: authorName,
  publisher: siteName,
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  openGraph: {
    title: siteMetadata.title,
    description: siteDescription,
    url: canonicalUrl,
    siteName,
    locale: "zh_TW",
    type: "website",
    images: [
      {
        url: ogImageUrl,
        width: 1200,
        height: 630,
        alt: siteMetadata.title,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteMetadata.title,
    description: siteDescription,
    images: [ogImageUrl],
  },
  icons: {
    icon: [{ url: "/favicon.ico" }],
    apple: [{ url: "/brand/apex-flow-logo.svg" }],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-TW">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(profileJsonLd),
          }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
