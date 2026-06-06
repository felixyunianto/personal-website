import SmoothScroll from "@/components/SmoothScroll";
import "./globals.css";

import type { Metadata } from "next";

export const metadata: Metadata = {
  metadataBase: new URL("https://felixyunianto.vercel.app"),

  title: {
    default: "Felix Yunianto | Frontend Developer",
    template: "%s | Felix Yunianto",
  },

  description:
    "Frontend Developer specializing in Next.js, Tailwind CSS, Framer Motion and Laravel.",

  keywords: [
    "Felix Yunianto",
    "Frontend Developer",
    "Next.js Developer",
    "React Developer",
    "Tailwind CSS",
    "Framer Motion",
    "Laravel Developer",
    "Web Developer Indonesia",
  ],

  authors: [{ name: "Felix Yunianto" }],
  creator: "Felix Yunianto",

  openGraph: {
    title: "Felix Yunianto | Frontend Developer",
    description:
      "Building modern websites with Next.js, Tailwind CSS, Framer Motion and Laravel.",
    url: "https://felixyunianto.vercel.app",
    siteName: "Felix Yunianto",
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "Felix Yunianto Portfolio",
      },
    ],
    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Felix Yunianto | Frontend Developer",
    description:
      "Building modern websites with Next.js, Tailwind CSS, Framer Motion and Laravel.",
    images: ["/opengraph-image"],
  },

  icons: {
    icon: "/icon.png",
    shortcut: "/favicon.ico",
    apple: "/apple-icon.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <SmoothScroll />
        {children}
      </body>
    </html>
  );
}
