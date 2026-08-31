"use client";

import { useState } from "react";

const tools = [
  {
    icon: "🎬",
    category: "YouTube",
    title: "YouTube Title Generator",
    description:
      "Generate catchy and engaging titles for your YouTube videos.",
    href: "/youtube-title-generator",
    available: true,
  },
  {
  icon: "📝",
  category: "YouTube",
  title: "YouTube Description Generator",
  
  description:
    "Create professional and SEO-friendly descriptions for your YouTube videos.",
  href: "/youtube-description-generator",
  available: true,
},
{
  icon: "#️⃣",
  category: "YouTube",
  title: "YouTube Hashtag Generator",
  description:
    "Generate relevant hashtags for your YouTube videos quickly and easily.",
  href: "/youtube-hashtag-generator",
  available: true,
},
  {
    icon: "🚀",
    category: "SEO",
    title: "SEO Tools",
    description:
      "Useful SEO utilities to help improve your website and content.",
    href: "#",
    available: false,
  },
  {
    icon: "📱",
    category: "Social Media",
    title: "Instagram Caption Generator",
    description:
      "Create engaging captions and ideas for your Instagram posts.",
    href: "#",
    available: false,
  },
  {
    icon: "📝",
    category: "Blogging",
    title: "Blog Title Generator",
    description:
      "Generate interesting and clickable titles for your blog posts.",
    href: "#",
    available: false,
  },
  {
    icon: "💡",
    category: "Ideas",
    title: "Content Idea Generator",
    description:
      "Get fresh content ideas whenever you need inspiration.",
    href: "#",
    available: false,
  },
];

export default function Home() {
  const [search, setSearch] = useState("");
  const [menuOpen, setMenuOpen] = useState(false);
  const filteredTools = tools.filter(
    (tool) =>
      tool.title.toLowerCase().includes(search.toLowerCase()) ||
      tool.category.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <main className="min-h-screen bg-slate-950 text-white">

      {/* Navbar */}
      <nav className="sticky top-0 z-50 border-b border-white/10 bg-slate-950/95 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">

          <a href="/" className="text-2xl font-bold tracking-tight">
            Project<span className="text-blue-400">Tools</span>
          </a>

          <div className="hidden items-center gap-8 text-sm text-slate-300 md:flex">

            <a href="/" className="transition hover:text-white">
              Home
            </a>

            <a href="#tools" className="transition hover:text-white">
              Tools
            </a>

            <a href="#about" className="transition hover:text-white">
              About
            </a>
            <a href="#contact" className="transition hover:text-white">
            Contact
            </a>
          </div>
           <button
           
  onClick={() => setMenuOpen(!menuOpen)}
  className="rounded-lg bg-white/10 px-3 py-2 text-xl md:hidden"
  aria-label="Toggle menu"
  
>
  ☰
</button>

{menuOpen && (
  <div className="absolute right-6 top-20 z-50 w-48 rounded-xl border border-white/10 bg-slate-900 p-2 shadow-xl md:hidden">
    <a
      href="/"
      onClick={() => setMenuOpen(false)}
      className="block rounded-lg px-4 py-3 text-sm text-slate-300 hover:bg-white/10 hover:text-white"
    >
      Home
    </a>

    <a
      href="#tools"
      onClick={() => setMenuOpen(false)}
      className="block rounded-lg px-4 py-3 text-sm text-slate-300 hover:bg-white/10 hover:text-white"
    >
      Tools
    </a>

    <a
      href="#about"
      onClick={() => setMenuOpen(false)}
      className="block rounded-lg px-4 py-3 text-sm text-slate-300 hover:bg-white/10 hover:text-white"
    >
      About
    </a>

    <a
      href="#contact"
      onClick={() => setMenuOpen(false)}
      className="block rounded-lg px-4 py-3 text-sm text-slate-300 hover:bg-white/10 hover:text-white"
    >
      Contact
    </a>
  </div>
)}
        </div>
      </nav>

      {/* Hero */}
      <section className="relative overflow-hidden px-6 py-24 md:py-32">

        <div className="mx-auto max-w-5xl text-center">

          <div className="mb-6 inline-flex rounded-full border border-blue-400/20 bg-blue-400/10 px-4 py-2 text-sm text-blue-300">
            ✨ Simple tools for creators
          </div>

          <h1 className="text-5xl font-extrabold tracking-tight md:text-7xl">
            Powerful Tools.
            <span className="block text-blue-400">
              Simple Results.
            </span>
          </h1>

          <a
  href="/"
  className="flex items-center gap-2 text-2xl font-bold tracking-tight"
>
  <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-blue-500 text-lg">
    🛠️
  </span>

  <span>
    Project<span className="text-blue-400">Tools</span>
  </span>
</a>

          {/* Search */}
          <div className="mx-auto mt-10 max-w-2xl">
            <div className="flex items-center rounded-2xl border border-white/10 bg-white/5 p-2 focus-within:border-blue-400/50">

              <span className="px-3 text-xl">
                🔍
              </span>

              <input
                type="text"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search tools..."
                className="w-full bg-transparent px-2 py-3 text-white outline-none placeholder:text-slate-500"
              />

            </div>
          </div>

        </div>
      </section>

      {/* Categories */}
      <section className="mx-auto max-w-7xl px-6">

        <div className="mb-10">
          <p className="text-sm font-semibold uppercase tracking-widest text-blue-400">
            Categories
          </p>

          <h2 className="mt-2 text-3xl font-bold">
            Find the right tool
          </h2>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-4">

          <a
            href="#tools"
            className="rounded-xl border border-white/10 bg-white/5 p-5 transition hover:border-blue-400/40 hover:bg-white/10"
          >
            <div className="text-3xl">🎬</div>
            <h3 className="mt-3 font-bold">YouTube</h3>
            <p className="mt-1 text-sm text-slate-500">
              Creator tools
            </p>
          </a>

          <a
            href="#tools"
            className="rounded-xl border border-white/10 bg-white/5 p-5 transition hover:border-blue-400/40 hover:bg-white/10"
          >
            <div className="text-3xl">✍️</div>
            <h3 className="mt-3 font-bold">Content</h3>
            <p className="mt-1 text-sm text-slate-500">
              Writing tools
            </p>
          </a>

          <a
            href="#tools"
            className="rounded-xl border border-white/10 bg-white/5 p-5 transition hover:border-blue-400/40 hover:bg-white/10"
          >
            <div className="text-3xl">🚀</div>
            <h3 className="mt-3 font-bold">SEO</h3>
            <p className="mt-1 text-sm text-slate-500">
              SEO utilities
            </p>
          </a>

          <a
            href="#tools"
            className="rounded-xl border border-white/10 bg-white/5 p-5 transition hover:border-blue-400/40 hover:bg-white/10"
          >
            <div className="text-3xl">📱</div>
            <h3 className="mt-3 font-bold">Social Media</h3>
            <p className="mt-1 text-sm text-slate-500">
              Social tools
            </p>
          </a>

        </div>
      </section>
{/* Trust Stats */}
<section className="mx-auto max-w-7xl px-6 py-16">

  <div className="rounded-2xl border border-white/10 bg-white/5 p-8">

    <div className="grid gap-8 text-center sm:grid-cols-2 md:grid-cols-4">

      {/* Stat 1 */}
      <div>
        <div className="text-3xl font-extrabold text-blue-400">
          3+
        </div>

        <p className="mt-2 text-sm text-slate-400">
          Useful Tools
        </p>
      </div>

      {/* Stat 2 */}
      <div>
        <div className="text-3xl font-extrabold text-blue-400">
          100%
        </div>

        <p className="mt-2 text-sm text-slate-400">
          Free to Use
        </p>
      </div>

      {/* Stat 3 */}
      <div>
        <div className="text-3xl font-extrabold text-blue-400">
          0
        </div>

        <p className="mt-2 text-sm text-slate-400">
          Signup Required
        </p>
      </div>

      {/* Stat 4 */}
      <div>
        <div className="text-3xl font-extrabold text-blue-400">
          ⚡
        </div>

        <p className="mt-2 text-sm text-slate-400">
          Fast & Simple
        </p>
      </div>

    </div>

  </div>

</section>
      {/* Tools */}
      <section id="tools" className="mx-auto max-w-7xl px-6 py-24">

        <div className="mb-10">

          <p className="text-sm font-semibold uppercase tracking-widest text-blue-400">
         
          {/* Featured Tools */}
<section className="mx-auto max-w-7xl px-6 pb-10">

  <div className="mb-10">

    <p className="text-sm font-semibold uppercase tracking-widest text-blue-400">
      Featured Tools
    </p>

    <h2 className="mt-2 text-3xl font-bold">
      Start creating faster
    </h2>

    <p className="mt-3 max-w-2xl text-slate-400">
      Try our most useful creator tools and get results in seconds.
    </p>

  </div>

  <div className="grid gap-6 md:grid-cols-3">

    {/* Title Generator */}
    <div className="rounded-2xl border border-white/10 bg-white/5 p-7 transition hover:-translate-y-1 hover:border-blue-400/40 hover:bg-white/10">

      <div className="text-4xl">
        🎬
      </div>

      <h3 className="mt-5 text-2xl font-bold">
        YouTube Title Generator
      </h3>

      <p className="mt-3 leading-7 text-slate-400">
        Generate catchy, engaging and SEO-friendly titles for your
        YouTube videos.
      </p>

      <a
        href="/youtube-title-generator"
        className="mt-6 inline-block rounded-xl bg-blue-500 px-6 py-3 font-semibold transition hover:bg-blue-400"
      >
        Try Tool →
      </a>

    </div>

    {/* Description Generator */}
    <div className="rounded-2xl border border-white/10 bg-white/5 p-7 transition hover:-translate-y-1 hover:border-blue-400/40 hover:bg-white/10">

      <div className="text-4xl">
        📝
      </div>

      <h3 className="mt-5 text-2xl font-bold">
        YouTube Description Generator
      </h3>

      <p className="mt-3 leading-7 text-slate-400">
        Create professional, friendly and SEO-friendly descriptions
        for your YouTube videos.
      </p>

      <a
        href="/youtube-description-generator"
        className="mt-6 inline-block rounded-xl bg-blue-500 px-6 py-3 font-semibold transition hover:bg-blue-400"
      >
        Try Tool →
      </a>

    </div>
{/* Hashtag Generator */}
<div className="rounded-2xl border border-white/10 bg-white/5 p-7 transition hover:-translate-y-1 hover:border-blue-400/40 hover:bg-white/10">

  <div className="text-4xl">
    #️⃣
  </div>

  <h3 className="mt-5 text-2xl font-bold">
    YouTube Hashtag Generator
  </h3>

  <p className="mt-3 leading-7 text-slate-400">
    Generate relevant hashtags for your YouTube videos quickly
    and easily.
  </p>

  <a
    href="/youtube-hashtag-generator"
    className="mt-6 inline-block rounded-xl bg-blue-500 px-6 py-3 font-semibold transition hover:bg-blue-400"
  >
    Try Tool →
  </a>

</div>
  </div>

</section>
            All Tools
          </p>

          <h2 className="mt-2 text-3xl font-bold">
            Explore ProjectTools
          </h2>

        </div>

        {filteredTools.length === 0 ? (
          <div className="rounded-2xl border border-white/10 bg-white/5 p-10 text-center">
            <div className="text-4xl">🔍</div>

            <h3 className="mt-4 text-xl font-bold">
              No tools found
            </h3>

            <p className="mt-2 text-slate-500">
              Try searching for another tool.
            </p>
          </div>
        ) : (
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">

            {filteredTools.map((tool) => (
              <div
                key={tool.title}
                className="group rounded-2xl border border-white/10 bg-white/5 p-7 transition hover:-translate-y-1 hover:border-blue-400/40 hover:bg-white/10"
              >

                <div className="flex items-start justify-between">

                  <div className="text-4xl">
                    {tool.icon}
                  </div>

                  <span className="rounded-full bg-white/5 px-3 py-1 text-xs text-slate-400">
                    {tool.category}
                  </span>

                </div>

                <h3 className="mt-6 text-xl font-bold">
                  {tool.title}
                </h3>

                <p className="mt-3 min-h-12 text-sm leading-6 text-slate-400">
                  {tool.description}
                </p>

                {tool.available ? (
                  <a
                    href={tool.href}
                    className="mt-6 inline-block rounded-lg bg-blue-500 px-5 py-2.5 text-sm font-semibold transition hover:bg-blue-400"
                  >
                    Try Tool →
                  </a>
                ) : (
                  <button
                    disabled
                    className="mt-6 cursor-not-allowed rounded-lg bg-white/5 px-5 py-2.5 text-sm font-semibold text-slate-500"
                  >
                    Coming Soon
                  </button>
                )}

              </div>
            ))}

          </div>
        )}

      </section>

      {/* About */}
      <section
        id="about"
        className="border-t border-white/10 bg-white/[0.02]"
      >

        <div className="mx-auto max-w-4xl px-6 py-24 text-center">

          <div className="mb-5 text-4xl">
            🛠️
          </div>

          <h2 className="text-3xl font-bold">
            Why ProjectTools?
          </h2>

          <p className="mx-auto mt-5 max-w-2xl leading-8 text-slate-400">
            Our goal is to create simple and useful online tools that
            save time and make everyday digital work easier for creators,
            bloggers and businesses.
          </p>

        </div>

      </section>
{/* Contact */}
<section
  id="contact"
  className="border-t border-white/10"
>
  <div className="mx-auto max-w-4xl px-6 py-20 text-center">
    <p className="text-sm font-semibold uppercase tracking-widest text-blue-400">
      Contact
    </p>

    <h2 className="mt-3 text-3xl font-bold">
      Have an idea for a tool?
    </h2>

    <p className="mx-auto mt-4 max-w-xl text-slate-400">
      ProjectTools is growing. More useful tools are coming soon.
    </p>

    <a
      href="mailto:hello@projecttools.com"
      className="mt-7 inline-block rounded-xl bg-blue-500 px-6 py-3 font-semibold hover:bg-blue-400"
    >
      Contact Us →
    </a>
  </div>
</section>
      {/* Footer */}
      {/* Footer */}
<footer className="border-t border-white/10 bg-slate-950">

  <div className="mx-auto max-w-7xl px-6 py-14">

    <div className="grid gap-10 md:grid-cols-4">

      {/* Brand */}
      <div>

        <a
          href="/"
          className="flex items-center gap-2 text-2xl font-bold"
        >
          <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-blue-500 text-lg">
            🛠️
          </span>

          <span>
            Project<span className="text-blue-400">Tools</span>
          </span>
        </a>

        <p className="mt-4 max-w-sm text-sm leading-6 text-slate-500">
          Simple, fast and useful online tools for creators,
          bloggers and everyday digital work.
        </p>

      </div>

      {/* Quick Links */}
      <div>

        <h3 className="font-semibold">
          Quick Links
        </h3>

        <div className="mt-4 flex flex-col gap-3 text-sm text-slate-500">

          <a
            href="/"
            className="hover:text-white"
          >
            Home
          </a>

          <a
            href="#tools"
            className="hover:text-white"
          >
            Tools
          </a>

          <a
            href="#about"
            className="hover:text-white"
          >
            About
          </a>

          <a
            href="#contact"
            className="hover:text-white"
          >
            Contact
          </a>

        </div>

      </div>
{/* YouTube Tools */}
<div>

  <h3 className="font-semibold">
    YouTube Tools
  </h3>

  <div className="mt-4 flex flex-col gap-3 text-sm text-slate-500">

    <a
      href="/youtube-title-generator"
      className="hover:text-white"
    >
      Title Generator
    </a>

    <a
      href="/youtube-description-generator"
      className="hover:text-white"
    >
      Description Generator
    </a>

    <a
      href="/youtube-hashtag-generator"
      className="hover:text-white"
    >
      Hashtag Generator
    </a>

  </div>

</div>
      {/* Legal */}
      <div>

        <h3 className="font-semibold">
          Legal
        </h3>

        <div className="mt-4 flex flex-col gap-3 text-sm text-slate-500">

          <a
            href="/privacy"
            className="hover:text-white"
          >
            Privacy Policy
          </a>

          <a
            href="/terms"
            className="hover:text-white"
          >
            Terms of Service
          </a>

          <a
            href="/disclaimer"
            className="hover:text-white"
          >
            Disclaimer
          </a>

        </div>

      </div>

    </div>

    {/* Bottom */}
    <div className="mt-12 border-t border-white/10 pt-6 text-center text-sm text-slate-600">
      © 2026 ProjectTools. All rights reserved.
    </div>

  </div>

</footer>

    </main>
  );
}