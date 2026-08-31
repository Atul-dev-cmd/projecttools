"use client";

import { useState } from "react";

export default function YouTubeHashtagGenerator() {
  const [topic, setTopic] = useState("");
  const [hashtags, setHashtags] = useState<string[]>([]);

  const generateHashtags = () => {
    if (!topic.trim()) {
      alert("Please enter a video topic.");
      return;
    }

    const words = topic
      .trim()
      .split(/\s+/)
      .filter(Boolean);

    const cleanTopic = words.join("");

    const firstWord = words[0] || "YouTube";

    const newHashtags = [
      `#${cleanTopic}`,
      `#${firstWord}Video`,
      `#${firstWord}Content`,
      "#YouTube",
      "#YouTubeCreator",
      "#ContentCreator",
      "#Trending",
      "#ViralVideo",
      "#Shorts",
      "#YouTubeShorts",
    ];

    setHashtags(newHashtags);
  };

  const copyAll = async () => {
    if (hashtags.length === 0) return;

    await navigator.clipboard.writeText(hashtags.join(" "));

    alert("Hashtags copied!");
  };

  return (
    <main className="min-h-screen bg-slate-950 px-6 py-12 text-white">
      <div className="mx-auto max-w-4xl">

        <a
          href="/"
          className="text-sm text-blue-400 hover:text-blue-300"
        >
          ← Back to ProjectTools
        </a>

        <div className="mt-10 text-center">

          <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-500/10 text-3xl">
            #
          </div>

          <h1 className="mt-6 text-4xl font-extrabold md:text-5xl">
            YouTube Hashtag Generator
          </h1>

          <p className="mx-auto mt-4 max-w-2xl text-slate-400">
            Generate relevant hashtags for your YouTube videos
            in seconds.
          </p>

        </div>

        {/* Input */}
        <div className="mt-12 rounded-2xl border border-white/10 bg-white/5 p-6 md:p-8">

          <label className="mb-3 block text-sm font-semibold">
            Enter your video topic
          </label>

          <textarea
            value={topic}
            onChange={(e) => setTopic(e.target.value)}
            placeholder="Example: Village Cooking in Monsoon"
            rows={4}
            className="w-full resize-none rounded-xl border border-white/10 bg-slate-900 px-4 py-4 text-white outline-none placeholder:text-slate-600 focus:border-blue-500"
          />

          <button
            onClick={generateHashtags}
            className="mt-5 w-full rounded-xl bg-blue-500 px-6 py-3 font-semibold text-white transition hover:bg-blue-600"
          >
            Generate Hashtags
          </button>

        </div>

        {/* Results */}
        {hashtags.length > 0 && (
          <div className="mt-8 rounded-2xl border border-white/10 bg-white/5 p-6 md:p-8">

            <div className="flex items-center justify-between gap-4">

              <h2 className="text-xl font-bold">
                Generated Hashtags
              </h2>

              <button
                onClick={copyAll}
                className="rounded-lg border border-white/10 px-4 py-2 text-sm font-medium text-slate-300 transition hover:bg-white/10 hover:text-white"
              >
                Copy All
              </button>

            </div>

            <div className="mt-6 flex flex-wrap gap-3">

              {hashtags.map((hashtag, index) => (
                <span
                  key={index}
                  className="rounded-full bg-blue-500/10 px-4 py-2 text-sm text-blue-300"
                >
                  {hashtag}
                </span>
              ))}

            </div>

          </div>
        )}

      </div>
    </main>
  );
}