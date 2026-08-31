"use client";

import { useState } from "react";

type Style = "Viral" | "Professional" | "Curiosity" | "SEO Friendly";

export default function YouTubeTitleGenerator() {
  const [topic, setTopic] = useState("");
  const [style, setStyle] = useState<Style>("Viral");
  const [titleCount, setTitleCount] = useState(10);
  const [titles, setTitles] = useState<string[]>([]);
  const [copied, setCopied] = useState("");

  const generateTitles = () => {
    if (!topic.trim()) {
      setTitles([]);
      return;
    }

    const cleanTopic = topic.trim();

    const titleSets: Record<Style, string[]> = {
      Viral: [
        `You Won't Believe This ${cleanTopic}!`,
        `${cleanTopic} That Everyone Is Talking About`,
        `I Tried ${cleanTopic} — You NEED to See This!`,
        `This ${cleanTopic} Changed Everything!`,
        `The CRAZIEST ${cleanTopic} You Will Ever See`,
        `Why Everyone Is Trying ${cleanTopic}`,
        `I Can't Believe This Worked! ${cleanTopic}`,
        `The Secret Behind ${cleanTopic}`,
        `${cleanTopic} — This Is INSANE!`,
        `Don't Try ${cleanTopic} Before Watching This`,
        `This Is Why ${cleanTopic} Is Going Viral`,
        `The Truth About ${cleanTopic}`,
        `${cleanTopic}: What Nobody Tells You`,
        `You Need to Know This About ${cleanTopic}`,
        `I Tested ${cleanTopic} So You Don't Have To`,
      ],

      Professional: [
        `${cleanTopic}: A Complete Guide`,
        `Understanding ${cleanTopic}`,
        `The Complete Guide to ${cleanTopic}`,
        `${cleanTopic}: Everything You Need to Know`,
        `How ${cleanTopic} Works`,
        `${cleanTopic}: Best Practices and Tips`,
        `A Beginner's Guide to ${cleanTopic}`,
        `${cleanTopic}: Step-by-Step Guide`,
        `How to Get Better Results With ${cleanTopic}`,
        `${cleanTopic}: Expert Tips and Strategies`,
        `The Right Way to Approach ${cleanTopic}`,
        `${cleanTopic}: Common Mistakes to Avoid`,
        `How to Master ${cleanTopic}`,
        `${cleanTopic}: Practical Tips for Beginners`,
        `Everything About ${cleanTopic} Explained`,
      ],

      Curiosity: [
        `What Nobody Tells You About ${cleanTopic}`,
        `The Hidden Secret of ${cleanTopic}`,
        `What Really Happens With ${cleanTopic}?`,
        `I Discovered Something About ${cleanTopic}`,
        `The One Thing You Should Know About ${cleanTopic}`,
        `Why Does ${cleanTopic} Work This Way?`,
        `The Truth Behind ${cleanTopic}`,
        `You Probably Don't Know This About ${cleanTopic}`,
        `What Happens If You Try ${cleanTopic}?`,
        `There's More to ${cleanTopic} Than You Think`,
        `The Biggest Mistake People Make With ${cleanTopic}`,
        `This Changes How You See ${cleanTopic}`,
        `Why Is Everyone Talking About ${cleanTopic}?`,
        `I Finally Found the Answer About ${cleanTopic}`,
        `Before You Try ${cleanTopic}, Watch This`,
      ],

      "SEO Friendly": [
        `${cleanTopic} - Complete Guide for Beginners`,
        `How to ${cleanTopic} - Step-by-Step Guide`,
        `${cleanTopic} Tips and Tricks`,
        `Best ${cleanTopic} Guide for Beginners`,
        `How to Get Started With ${cleanTopic}`,
        `${cleanTopic}: Complete Tutorial`,
        `${cleanTopic} Explained Step by Step`,
        `Best Ways to Improve ${cleanTopic}`,
        `${cleanTopic} Tutorial - Everything You Need to Know`,
        `How Does ${cleanTopic} Work?`,
        `${cleanTopic} Guide: Tips, Tricks and Best Practices`,
        `Learn ${cleanTopic} From Beginner to Advanced`,
        `${cleanTopic}: Easy Guide and Tutorial`,
        `How to Master ${cleanTopic}`,
        `${cleanTopic} for Beginners - Complete Tutorial`,
      ],
    };

    setTitles(titleSets[style].slice(0, titleCount));
    setCopied("");
  };

  const copyTitle = async (title: string) => {
    await navigator.clipboard.writeText(title);
    setCopied(title);
  };

  const copyAll = async () => {
    await navigator.clipboard.writeText(titles.join("\n"));
    setCopied("ALL");
  };

  return (
    <main className="min-h-screen bg-slate-950 px-6 py-12 text-white">
      <div className="mx-auto max-w-5xl">

        {/* Header */}
        <div className="mb-12 text-center">
          <a
            href="/"
            className="text-sm text-blue-400 hover:text-blue-300"
          >
            ← Back to ProjectTools
          </a>

          <h1 className="mt-8 text-4xl font-extrabold md:text-5xl">
            YouTube Title Generator
          </h1>

          <p className="mx-auto mt-4 max-w-2xl text-slate-400">
            Generate catchy, professional and SEO-friendly YouTube titles
            for your videos.
          </p>
        </div>

        {/* Generator */}
        <div className="rounded-2xl border border-white/10 bg-white/5 p-6 md:p-8">

          {/* Topic */}
          <label className="mb-3 block text-sm font-semibold">
            1. Enter your video topic
          </label>

          <input
            type="text"
            value={topic}
            onChange={(e) => setTopic(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                generateTitles();
              }
            }}
            placeholder="Example: Village cooking in monsoon"
            className="w-full rounded-xl border border-white/10 bg-slate-900 px-4 py-4 text-white outline-none placeholder:text-slate-500 focus:border-blue-400"
          />

          {/* Options */}
          <div className="mt-6 grid gap-6 md:grid-cols-2">

            {/* Style */}
            <div>
              <label className="mb-3 block text-sm font-semibold">
                2. Choose title style
              </label>

              <select
                value={style}
                onChange={(e) => setStyle(e.target.value as Style)}
                className="w-full rounded-xl border border-white/10 bg-slate-900 px-4 py-4 text-white outline-none focus:border-blue-400"
              >
                <option>Viral</option>
                <option>Professional</option>
                <option>Curiosity</option>
                <option>SEO Friendly</option>
              </select>
            </div>

            {/* Number */}
            <div>
              <label className="mb-3 block text-sm font-semibold">
                3. Number of titles
              </label>

              <select
                value={titleCount}
                onChange={(e) => setTitleCount(Number(e.target.value))}
                className="w-full rounded-xl border border-white/10 bg-slate-900 px-4 py-4 text-white outline-none focus:border-blue-400"
              >
                <option value={5}>5 Titles</option>
                <option value={10}>10 Titles</option>
                <option value={15}>15 Titles</option>
              </select>
            </div>
          </div>

          {/* Generate */}
          <button
            onClick={generateTitles}
            className="mt-7 w-full rounded-xl bg-blue-500 px-6 py-4 font-semibold transition hover:bg-blue-400"
          >
            Generate Titles ✨
          </button>
        </div>

        {/* Results */}
        {titles.length > 0 && (
          <div className="mt-10">

            <div className="mb-5 flex items-center justify-between gap-4">
              <h2 className="text-2xl font-bold">
                Generated Titles
              </h2>

              <button
                onClick={copyAll}
                className="rounded-lg bg-white/10 px-4 py-2 text-sm font-semibold hover:bg-white/20"
              >
                {copied === "ALL" ? "Copied ✓" : "Copy All"}
              </button>
            </div>

            <div className="space-y-4">
              {titles.map((title, index) => (
                <div
                  key={index}
                  className="flex items-center justify-between gap-4 rounded-xl border border-white/10 bg-white/5 p-5"
                >
                  <div className="flex items-start gap-4">
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-blue-500/20 text-sm font-bold text-blue-400">
                      {index + 1}
                    </span>

                    <p className="pt-1 text-slate-200">
                      {title}
                    </p>
                  </div>

                  <button
                    onClick={() => copyTitle(title)}
                    className="shrink-0 rounded-lg bg-white/10 px-3 py-2 text-xs font-semibold hover:bg-white/20"
                  >
                    {copied === title ? "Copied ✓" : "Copy"}
                  </button>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Footer */}
        <p className="mt-16 text-center text-sm text-slate-600">
          ProjectTools • Tools for creators
        </p>

      </div>
    </main>
  );
}