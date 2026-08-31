"use client";

import { useState } from "react";

export default function YouTubeDescriptionGenerator() {
  const [topic, setTopic] = useState("");
  const [keywords, setKeywords] = useState("");
  const [style, setStyle] = useState("Professional");
  const [description, setDescription] = useState("");
  const [copied, setCopied] = useState(false);

  const generateDescription = () => {
    if (!topic.trim()) {
      setDescription("");
      return;
    }

    const keywordList = keywords
      .split(",")
      .map((keyword) => keyword.trim())
      .filter(Boolean);

    const keywordText =
      keywordList.length > 0
        ? keywordList.join(", ")
        : topic.trim();

    let result = "";

    if (style === "Professional") {
      result = `Welcome to our video about ${topic.trim()}!

In this video, we explore ${topic.trim()} and share useful information, tips, and insights that you can easily understand and apply.

Topics covered:
• ${keywordText}

If you found this video helpful, don't forget to LIKE 👍 the video, SHARE it with your friends, and SUBSCRIBE to the channel for more useful content.

Thanks for watching!

#${topic.trim().replace(/\s+/g, "")} #YouTube #Tips`;
    }

    if (style === "Friendly") {
      result = `Hey everyone! 👋

Welcome back to the channel!

Today we're talking about ${topic.trim()}.

In this video, you'll discover helpful tips and interesting information about ${topic.trim()}.

We will cover:
• ${keywordText}

If you enjoy the video, make sure to LIKE 👍, COMMENT 💬, and SUBSCRIBE 🔔 for more!

Thanks for watching and see you in the next video! ❤️

#${topic.trim().replace(/\s+/g, "")} #YouTube #Creator`;
    }

    if (style === "SEO Friendly") {
      result = `${topic.trim()} - Complete Guide

In this video, we explain ${topic.trim()} in a simple and easy-to-understand way.

You'll learn about:
• ${keywordText}

This video is useful for anyone looking to learn more about ${topic.trim()} and improve their knowledge.

Don't forget to LIKE, COMMENT, and SUBSCRIBE for more videos.

Keywords:
${keywordText}

#${topic.trim().replace(/\s+/g, "")} #Guide #Tutorial #Tips`;
    }

    setDescription(result);
    setCopied(false);
  };

  const copyDescription = async () => {
    if (!description) return;

    await navigator.clipboard.writeText(description);
    setCopied(true);

    setTimeout(() => {
      setCopied(false);
    }, 2000);
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
            YouTube Description Generator
          </h1>

          <p className="mx-auto mt-4 max-w-2xl text-slate-400">
            Create professional, friendly and SEO-friendly descriptions
            for your YouTube videos.
          </p>

        </div>

        {/* Generator */}
        <div className="rounded-2xl border border-white/10 bg-white/5 p-6 md:p-8">

          {/* Topic */}
          <label className="mb-3 block text-sm font-semibold">
            1. Video Topic
          </label>

          <input
            type="text"
            value={topic}
            onChange={(e) => setTopic(e.target.value)}
            placeholder="Example: Village cooking in monsoon"
            className="w-full rounded-xl border border-white/10 bg-slate-900 px-4 py-4 text-white outline-none placeholder:text-slate-500 focus:border-blue-400"
          />

          {/* Keywords */}
          <label className="mb-3 mt-6 block text-sm font-semibold">
            2. Keywords
          </label>

          <input
            type="text"
            value={keywords}
            onChange={(e) => setKeywords(e.target.value)}
            placeholder="Example: village cooking, monsoon, traditional food"
            className="w-full rounded-xl border border-white/10 bg-slate-900 px-4 py-4 text-white outline-none placeholder:text-slate-500 focus:border-blue-400"
          />

          {/* Style */}
          <label className="mb-3 mt-6 block text-sm font-semibold">
            3. Description Style
          </label>

          <select
            value={style}
            onChange={(e) => setStyle(e.target.value)}
            className="w-full rounded-xl border border-white/10 bg-slate-900 px-4 py-4 text-white outline-none focus:border-blue-400"
          >
            <option>Professional</option>
            <option>Friendly</option>
            <option>SEO Friendly</option>
          </select>

          {/* Generate */}
          <button
            onClick={generateDescription}
            className="mt-7 w-full rounded-xl bg-blue-500 px-6 py-4 font-semibold transition hover:bg-blue-400"
          >
            Generate Description ✨
          </button>

        </div>

        {/* Result */}
        {description && (
          <div className="mt-10">

            <div className="mb-4 flex items-center justify-between">
              <h2 className="text-2xl font-bold">
                Generated Description
              </h2>

              <button
                onClick={copyDescription}
                className="rounded-lg bg-white/10 px-4 py-2 text-sm font-semibold hover:bg-white/20"
              >
                {copied ? "Copied ✓" : "Copy"}
              </button>
            </div>

            <div className="whitespace-pre-wrap rounded-2xl border border-white/10 bg-white/5 p-6 leading-7 text-slate-300">
              {description}
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