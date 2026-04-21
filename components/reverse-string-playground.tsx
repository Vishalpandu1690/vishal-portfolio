"use client";

import { useState } from "react";

type Step = {
  left: number;
  right: number;
  before: string[];
  after: string[];
};

function reverseWithSteps(input: string) {
  const chars = Array.from(input);
  const steps: Step[] = [];
  let left = 0;
  let right = chars.length - 1;

  while (left < right) {
    const before = [...chars];
    [chars[left], chars[right]] = [chars[right], chars[left]];
    steps.push({
      left,
      right,
      before,
      after: [...chars],
    });
    left += 1;
    right -= 1;
  }

  return {
    result: chars.join(""),
    steps,
  };
}

export default function ReverseStringPlayground() {
  const [input, setInput] = useState("hello");
  const { result, steps } = reverseWithSteps(input);

  return (
    <section className="mt-6 overflow-hidden rounded-[1.75rem] border border-slate-800 bg-[#0b1220] shadow-[0_24px_70px_rgba(15,23,32,0.18)]">
      <div className="flex flex-wrap items-center justify-between gap-4 border-b border-white/10 bg-[#111827] px-5 py-4">
        <div>
          <p className="text-sm font-medium text-white">
            reverse_string.py
          </p>
          <p className="mt-1 text-xs text-slate-400">
            Change the input and watch the two pointers work.
          </p>
        </div>
        <div className="hidden gap-2 sm:flex">
          <span className="h-3 w-3 rounded-full bg-red-400" />
          <span className="h-3 w-3 rounded-full bg-amber-400" />
          <span className="h-3 w-3 rounded-full bg-emerald-400" />
        </div>
      </div>

      <div className="grid gap-0 lg:grid-cols-[minmax(0,1.1fr)_minmax(280px,0.9fr)]">
        <div className="border-b border-white/10 p-5 lg:border-b-0 lg:border-r">
          <pre className="overflow-x-auto font-mono text-sm leading-7 text-slate-100">
<code>
<span className="text-purple-300">from</span> <span className="text-sky-300">typing</span> <span className="text-purple-300">import</span> <span className="text-emerald-300">List</span>{`

`}
<span className="text-purple-300">class</span> <span className="text-amber-200">Solution</span>:{`
    `}
<span className="text-purple-300">def</span> <span className="text-sky-300">reverseString</span>(<span className="text-orange-200">self</span>, s: <span className="text-emerald-300">List</span>[<span className="text-sky-200">str</span>]) -&gt; <span className="text-purple-300">None</span>:{`
        `}
<span className="text-slate-400"># You start at the left end. Your friend starts at the right end.</span>{`
        left, right = `}<span className="text-cyan-200">0</span>{`, `}<span className="text-sky-300">len</span>(s) - <span className="text-cyan-200">1</span>{`

        `}
<span className="text-purple-300">while</span>{` left < right:
            `}
<span className="text-slate-400"># Swap the objects both of you are standing on.</span>{`
            s[left], s[right] = s[right], s[left]

            `}
<span className="text-slate-400"># Both move closer. Everything outside is now solved.</span>{`
            left += `}<span className="text-cyan-200">1</span>{`
            right -= `}<span className="text-cyan-200">1</span>
</code>
          </pre>
        </div>

        <div className="bg-[#0f172a] p-5">
          <label
            htmlFor="reverse-input"
            className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-400"
          >
            Input string
          </label>
          <input
            id="reverse-input"
            value={input}
            onChange={(event) => setInput(event.target.value)}
            className="mt-3 w-full rounded-xl border border-white/10 bg-white/8 px-4 py-3 font-mono text-sm text-white outline-none transition focus:border-teal-300"
            placeholder="Type a word..."
          />

          <div className="mt-5 rounded-xl border border-white/10 bg-white/8 p-4">
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-400">
              Output
            </p>
            <p className="mt-2 break-all font-mono text-2xl font-semibold text-emerald-200">
              {result || "Empty string"}
            </p>
          </div>

          <div className="mt-5">
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-400">
              Pointer walk
            </p>
            <div className="mt-3 max-h-72 space-y-3 overflow-y-auto pr-1">
              {steps.length > 0 ? (
                steps.map((step, index) => (
                  <div
                    key={`${step.left}-${step.right}-${index}`}
                    className="rounded-xl border border-white/10 bg-white/8 p-3"
                  >
                    <p className="text-xs font-medium text-slate-400">
                      Step {index + 1}: you at {step.left}, friend at{" "}
                      {step.right}
                    </p>
                    <div className="mt-2 flex flex-wrap gap-1 font-mono text-sm">
                      {step.before.map((char, charIndex) => (
                        <span
                          key={`${char}-${charIndex}-before`}
                          className={`inline-flex h-8 min-w-8 items-center justify-center rounded-lg border px-2 ${
                            charIndex === step.left
                              ? "border-emerald-300 bg-emerald-300/20 text-emerald-100"
                              : charIndex === step.right
                                ? "border-sky-300 bg-sky-300/20 text-sky-100"
                                : "border-white/10 bg-white/5 text-slate-200"
                          }`}
                        >
                          {char}
                        </span>
                      ))}
                    </div>
                    <p className="mt-2 text-xs text-slate-400">
                      After swap:{" "}
                      <span className="font-mono text-slate-200">
                        {step.after.join("")}
                      </span>
                    </p>
                  </div>
                ))
              ) : (
                <p className="rounded-xl border border-white/10 bg-white/8 p-3 text-sm leading-6 text-slate-300">
                  No swap needed. The pointers have already met or crossed.
                </p>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
