import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "YouTube Hashtag Generator - ProjectTools",
  description:
    "Generate relevant and engaging YouTube hashtags quickly with ProjectTools.",
};

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}