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
  title: {
    default: "ProjectTools - Simple & Useful Online Tools",
    template: "%s | ProjectTools",
  },

  description:
    "ProjectTools provides simple, fast and useful online tools for creators, bloggers and everyday digital work.",

  applicationName: "ProjectTools",

  keywords: [
    "online tools",
    "free online tools",
    "YouTube tools",
    "YouTube title generator",
    "YouTube description generator",
    "YouTube hashtag generator",
    "creator tools",
    "blogger tools",
  ],

  openGraph: {
    title: "ProjectTools - Simple & Useful Online Tools",
    description:
      "Simple, fast and useful online tools for creators, bloggers and everyday digital work.",
    type: "website",
    siteName: "ProjectTools",
    images: [
      {
        url: "/opengraph-image.png",
        width: 1200,
        height: 630,
        alt: "ProjectTools - Simple & Useful Online Tools",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "ProjectTools - Simple & Useful Online Tools",
    description:
      "Simple, fast and useful online tools for creators, bloggers and everyday digital work.",
    images: ["/opengraph-image.png"],
  },
};
export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
