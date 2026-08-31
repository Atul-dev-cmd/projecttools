import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "YouTube Description Generator - ProjectTools",
  description:
    "Create professional, engaging and SEO-friendly YouTube descriptions with ProjectTools.",
};

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}