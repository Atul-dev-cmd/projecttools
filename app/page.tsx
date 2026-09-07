"use client";

import { useState } from "react";

const tools = [
  {
    icon: "🎬",
    category: "YouTube",
    title: "YouTube Title Generator",
    description:
      "Generate catchy, engaging and SEO-friendly titles for your YouTube videos.",
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
    icon: "✍️",
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
    <main className="min-h-screen overflow-hidden bg-[#f8fafc] text-slate-900">

      {/* Background Glow */}
      <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute left-1/2 top-[-180px] h-[500px] w-[700px] -translate-x-1/2 rounded-full bg-blue-200/40 blur-3xl" />
        <div className="absolute right-[-180px] top-[350px] h-[420px] w-[420px] rounded-full bg-violet-200/30 blur-3xl" />
        <div className="absolute left-[-180px] top-[700px] h-[400px] w-[400px] rounded-full bg-cyan-200/20 blur-3xl" />
      </div>

      {/* Navbar */}
      <nav className="sticky top-0 z-50 border-b border-slate-200/70 bg-white/80 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">

          <a
            href="/"
            className="flex items-center gap-2 text-xl font-extrabold tracking-tight"
          >
            <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-slate-900 text-base text-white shadow-sm">
              🛠️
            </span>

            <span>
              Project<span className="text-blue-600">Tools</span>
            </span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden items-center gap-8 text-sm font-medium text-slate-600 md:flex">

            <a href="/" className="transition hover:text-slate-950">
              Home
            </a>

            <a href="#tools" className="transition hover:text-slate-950">
              Tools
            </a>

            <a href="#about" className="transition hover:text-slate-950">
              About
            </a>

            <a href="#contact" className="transition hover:text-slate-950">
              Contact
            </a>

          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="rounded-xl border border-slate-200 bg-white px-3 py-2 text-xl shadow-sm md:hidden"
            aria-label="Toggle menu"
          >
            ☰
          </button>

          {/* Mobile Menu */}
          {menuOpen && (
            <div className="absolute right-6 top-16 z-50 w-52 rounded-2xl border border-slate-200 bg-white p-2 shadow-xl md:hidden">

              <a
                href="/"
                onClick={() => setMenuOpen(false)}
                className="block rounded-xl px-4 py-3 text-sm font-medium text-slate-600 hover:bg-slate-100 hover:text-slate-950"
              >
                Home
              </a>

              <a
                href="#tools"
                onClick={() => setMenuOpen(false)}
                className="block rounded-xl px-4 py-3 text-sm font-medium text-slate-600 hover:bg-slate-100 hover:text-slate-950"
              >
                Tools
              </a>

              <a
                href="#about"
                onClick={() => setMenuOpen(false)}
                className="block rounded-xl px-4 py-3 text-sm font-medium text-slate-600 hover:bg-slate-100 hover:text-slate-950"
              >
                About
              </a>

              <a
                href="#contact"
                onClick={() => setMenuOpen(false)}
                className="block rounded-xl px-4 py-3 text-sm font-medium text-slate-600 hover:bg-slate-100 hover:text-slate-950"
              >
                Contact
              </a>

            </div>
          )}
        </div>
      </nav>

      {/* Hero */}
      <section className="relative px-6 pb-20 pt-24 md:pb-28 md:pt-32">

        <div className="mx-auto max-w-5xl text-center">

          {/* Badge */}
          <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-blue-200 bg-white/80 px-4 py-2 text-sm font-medium text-blue-700 shadow-sm backdrop-blur">
            ✨ Simple tools for creators
          </div>

          {/* Heading */}
          <h1 className="text-5xl font-extrabold tracking-tight text-slate-950 md:text-7xl">

            Powerful Tools.

            <span className="block bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600 bg-clip-text text-transparent">
              Simple Results.
            </span>

          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-slate-600 md:text-lg">
            Simple, fast and useful online tools designed to help creators,
            bloggers and businesses get more done.
          </p>

          {/* Search */}
          <div className="mx-auto mt-10 max-w-2xl">

            <div className="flex items-center rounded-2xl border border-slate-200 bg-white p-2 shadow-lg shadow-slate-200/50 transition focus-within:border-blue-400 focus-within:ring-4 focus-within:ring-blue-100">

              <span className="px-3 text-xl">
                🔍
              </span>

              <input
                type="text"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search tools..."
                className="w-full bg-transparent px-2 py-3 text-slate-900 outline-none placeholder:text-slate-400"
              />

            </div>

          </div>

        </div>
      </section>

      {/* Categories */}
      <section className="mx-auto max-w-7xl px-6 py-10">

        <div className="mb-10">
          <p className="text-sm font-bold uppercase tracking-widest text-blue-600">
            Categories
          </p>

          <h2 className="mt-2 text-3xl font-extrabold tracking-tight text-slate-950">
            Find the right tool
          </h2>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 md:grid-cols-4">

          <a
            href="#tools"
            className="group rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:border-blue-300 hover:shadow-lg"
          >
            <div className="text-3xl">🎬</div>

            <h3 className="mt-4 font-bold text-slate-950">
              YouTube
            </h3>

            <p className="mt-1 text-sm text-slate-500">
              Creator tools
            </p>
          </a>

          <a
            href="#tools"
            className="group rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:border-blue-300 hover:shadow-lg"
          >
            <div className="text-3xl">✍️</div>

            <h3 className="mt-4 font-bold text-slate-950">
              Content
            </h3>

            <p className="mt-1 text-sm text-slate-500">
              Writing tools
            </p>
          </a>

          <a
            href="#tools"
            className="group rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:border-blue-300 hover:shadow-lg"
          >
            <div className="text-3xl">🚀</div>

            <h3 className="mt-4 font-bold text-slate-950">
              SEO
            </h3>

            <p className="mt-1 text-sm text-slate-500">
              SEO utilities
            </p>
          </a>

          <a
            href="#tools"
            className="group rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:border-blue-300 hover:shadow-lg"
          >
            <div className="text-3xl">📱</div>

            <h3 className="mt-4 font-bold text-slate-950">
              Social Media
            </h3>

            <p className="mt-1 text-sm text-slate-500">
              Social tools
            </p>
          </a>

        </div>
      </section>

      {/* Stats */}
      <section className="mx-auto max-w-7xl px-6 py-16">

        <div className="rounded-3xl border border-slate-200 bg-white/80 p-8 shadow-sm backdrop-blur">

          <div className="grid gap-8 text-center sm:grid-cols-2 md:grid-cols-4">

            <div>
              <div className="text-3xl font-extrabold text-blue-600">
                3+
              </div>

              <p className="mt-2 text-sm text-slate-500">
                Useful Tools
              </p>
            </div>

            <div>
              <div className="text-3xl font-extrabold text-blue-600">
                100%
              </div>

              <p className="mt-2 text-sm text-slate-500">
                Free to Use
              </p>
            </div>

            <div>
              <div className="text-3xl font-extrabold text-blue-600">
                0
              </div>

              <p className="mt-2 text-sm text-slate-500">
                Signup Required
              </p>
            </div>

            <div>
              <div className="text-3xl font-extrabold text-blue-600">
                ⚡
              </div>

              <p className="mt-2 text-sm text-slate-500">
                Fast & Simple
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* Featured Tools */}
      <section className="mx-auto max-w-7xl px-6 pb-10">

        <div className="mb-10">

          <p className="text-sm font-bold uppercase tracking-widest text-blue-600">
            Featured Tools
          </p>

          <h2 className="mt-2 text-3xl font-extrabold tracking-tight text-slate-950">
            Start creating faster
          </h2>

          <p className="mt-3 max-w-2xl text-slate-600">
            Try our most useful creator tools and get results in seconds.
          </p>

        </div>

        <div className="grid gap-6 md:grid-cols-3">

          {/* Title Generator */}
          <div className="rounded-3xl border border-slate-200 bg-white p-7 shadow-sm transition hover:-translate-y-1 hover:shadow-xl">

            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-50 text-3xl">
              🎬
            </div>

            <h3 className="mt-6 text-xl font-bold text-slate-950">
              YouTube Title Generator
            </h3>

            <p className="mt-3 leading-7 text-slate-600">
              Generate catchy, engaging and SEO-friendly titles for your
              YouTube videos.
            </p>

            <a
              href="/youtube-title-generator"
              className="mt-6 inline-block rounded-xl bg-slate-950 px-6 py-3 font-semibold text-white transition hover:bg-blue-600"
            >
              Try Tool →
            </a>

          </div>

          {/* Description Generator */}
          <div className="rounded-3xl border border-slate-200 bg-white p-7 shadow-sm transition hover:-translate-y-1 hover:shadow-xl">

            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-indigo-50 text-3xl">
              📝
            </div>

            <h3 className="mt-6 text-xl font-bold text-slate-950">
              YouTube Description Generator
            </h3>

            <p className="mt-3 leading-7 text-slate-600">
              Create professional and SEO-friendly descriptions for your
              YouTube videos.
            </p>

            <a
              href="/youtube-description-generator"
              className="mt-6 inline-block rounded-xl bg-slate-950 px-6 py-3 font-semibold text-white transition hover:bg-indigo-600"
            >
              Try Tool →
            </a>

          </div>

          {/* Hashtag Generator */}
          <div className="rounded-3xl border border-slate-200 bg-white p-7 shadow-sm transition hover:-translate-y-1 hover:shadow-xl">

            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-violet-50 text-3xl">
              #️⃣
            </div>

            <h3 className="mt-6 text-xl font-bold text-slate-950">
              YouTube Hashtag Generator
            </h3>

            <p className="mt-3 leading-7 text-slate-600">
              Generate relevant hashtags for your YouTube videos quickly
              and easily.
            </p>

            <a
              href="/youtube-hashtag-generator"
              className="mt-6 inline-block rounded-xl bg-slate-950 px-6 py-3 font-semibold text-white transition hover:bg-violet-600"
            >
              Try Tool →
            </a>

          </div>

        </div>
      </section>

      {/* All Tools */}
      <section
        id="tools"
        className="mx-auto max-w-7xl px-6 py-24"
      >

        <div className="mb-10">

          <p className="text-sm font-bold uppercase tracking-widest text-blue-600">
            All Tools
          </p>

          <h2 className="mt-2 text-3xl font-extrabold tracking-tight text-slate-950">
            Explore ProjectTools
          </h2>

        </div>

        {filteredTools.length === 0 ? (
          <div className="rounded-3xl border border-slate-200 bg-white p-12 text-center shadow-sm">

            <div className="text-4xl">
              🔍
            </div>

            <h3 className="mt-4 text-xl font-bold text-slate-950">
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
                className="rounded-3xl border border-slate-200 bg-white p-7 shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
              >

                <div className="flex items-start justify-between">

                  <div className="text-4xl">
                    {tool.icon}
                  </div>

                  <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-500">
                    {tool.category}
                  </span>

                </div>

                <h3 className="mt-6 text-xl font-bold text-slate-950">
                  {tool.title}
                </h3>

                <p className="mt-3 min-h-12 text-sm leading-6 text-slate-600">
                  {tool.description}
                </p>

                {tool.available ? (
                  <a
                    href={tool.href}
                    className="mt-6 inline-block rounded-xl bg-slate-950 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-blue-600"
                  >
                    Try Tool →
                  </a>
                ) : (
                  <button
                    disabled
                    className="mt-6 cursor-not-allowed rounded-xl bg-slate-100 px-5 py-2.5 text-sm font-semibold text-slate-400"
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
        className="border-y border-slate-200 bg-white/60"
      >

        <div className="mx-auto max-w-4xl px-6 py-24 text-center">

          <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-slate-950 text-2xl shadow-lg">
            🛠️
          </div>

          <h2 className="mt-6 text-3xl font-extrabold tracking-tight text-slate-950">
            Why ProjectTools?
          </h2>

          <p className="mx-auto mt-5 max-w-2xl leading-8 text-slate-600">
            Our goal is to create simple and useful online tools that save
            time and make everyday digital work easier for creators,
            bloggers and businesses.
          </p>

        </div>

      </section>

      {/* Contact */}
      <section
        id="contact"
        className="px-6 py-24"
      >

        <div className="mx-auto max-w-4xl rounded-3xl border border-slate-200 bg-white p-10 text-center shadow-sm md:p-14">

          <p className="text-sm font-bold uppercase tracking-widest text-blue-600">
            Contact
          </p>

          <h2 className="mt-3 text-3xl font-extrabold text-slate-950">
            Have an idea for a tool?
          </h2>

          <p className="mx-auto mt-4 max-w-xl text-slate-600">
            ProjectTools is growing. More useful tools are coming soon.
          </p>

          <a
            href="mailto:hello@projecttools.com"
            className="mt-7 inline-block rounded-xl bg-slate-950 px-6 py-3 font-semibold text-white transition hover:bg-blue-600"
          >
            Contact Us →
          </a>

        </div>

      </section>

      {/* Footer */}
      <footer className="border-t border-slate-200 bg-white">

        <div className="mx-auto max-w-7xl px-6 py-14">

          <div className="grid gap-10 md:grid-cols-4">

            {/* Brand */}
            <div>

              <a
                href="/"
                className="flex items-center gap-2 text-xl font-extrabold"
              >

                <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-slate-950 text-base text-white">
                  🛠️
                </span>

                <span>
                  Project<span className="text-blue-600">Tools</span>
                </span>

              </a>

              <p className="mt-4 max-w-sm text-sm leading-6 text-slate-500">
                Simple, fast and useful online tools for creators,
                bloggers and everyday digital work.
              </p>

            </div>

            {/* Quick Links */}
            <div>

              <h3 className="font-bold text-slate-950">
                Quick Links
              </h3>

              <div className="mt-4 flex flex-col gap-3 text-sm text-slate-500">

                <a href="/" className="hover:text-slate-950">
                  Home
                </a>

                <a href="#tools" className="hover:text-slate-950">
                  Tools
                </a>

                <a href="#about" className="hover:text-slate-950">
                  About
                </a>

                <a href="#contact" className="hover:text-slate-950">
                  Contact
                </a>

              </div>

            </div>

            {/* YouTube Tools */}
            <div>

              <h3 className="font-bold text-slate-950">
                YouTube Tools
              </h3>

              <div className="mt-4 flex flex-col gap-3 text-sm text-slate-500">

                <a
                  href="/youtube-title-generator"
                  className="hover:text-slate-950"
                >
                  Title Generator
                </a>

                <a
                  href="/youtube-description-generator"
                  className="hover:text-slate-950"
                >
                  Description Generator
                </a>

                <a
                  href="/youtube-hashtag-generator"
                  className="hover:text-slate-950"
                >
                  Hashtag Generator
                </a>

              </div>

            </div>

            {/* Legal */}
            <div>

              <h3 className="font-bold text-slate-950">
                Legal
              </h3>

              <div className="mt-4 flex flex-col gap-3 text-sm text-slate-500">

                <a
                  href="/privacy"
                  className="hover:text-slate-950"
                >
                  Privacy Policy
                </a>

                <a
                  href="/terms"
                  className="hover:text-slate-950"
                >
                  Terms of Service
                </a>

                <a
                  href="/disclaimer"
                  className="hover:text-slate-950"
                >
                  Disclaimer
                </a>

              </div>

            </div>

          </div>

          <div className="mt-12 border-t border-slate-200 pt-6 text-center text-sm text-slate-400">
            © 2026 ProjectTools. All rights reserved.
          </div>

        </div>

      </footer>

    </main>
  );
}