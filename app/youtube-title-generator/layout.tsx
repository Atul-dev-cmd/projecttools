import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "YouTube Title Generator - ProjectTools",
  description:
    "Generate catchy, engaging and SEO-friendly YouTube titles with ProjectTools.",
};

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}