import Link from "next/link";

const ladder = [
  {
    title: "Reverse String",
    lesson: "Move both pointers every time.",
  },
  {
    title: "Valid Palindrome",
    lesson: "Sometimes skip one pointer.",
  },
  {
    title: "Is Subsequence",
    lesson: "Both pointers move in one direction.",
  },
  {
    title: "Two Sum II",
    lesson: "Sorted order tells us which pointer to move.",
  },
  {
    title: "Container With Most Water",
    lesson: "Greedy pointer choice enters the picture.",
  },
  {
    title: "Trapping Rain Water",
    lesson: "Movement depends on boundary confidence.",
  },
];

const takeaways = [
  "Place sentinels at the boundaries.",
  "Shrink the unknown region without breaking correctness.",
  "Trust completed work and never revisit it.",
  "Let the invariant explain the stopping condition.",
];

export default function TwoPointerBlog() {
  return (
    <main className="px-6 py-16 sm:px-10">
      <article className="mx-auto max-w-4xl">
        <Link
          href="/blog/category/python-coding"
          className="text-sm font-medium text-[var(--accent)] transition hover:text-[var(--accent-strong)]"
        >
          Python Coding
        </Link>

        <header className="mt-6 rounded-[2rem] border border-[var(--border)] bg-[linear-gradient(180deg,rgba(251,252,250,0.95),rgba(232,243,241,0.92))] p-8 shadow-[0_20px_60px_rgba(15,23,32,0.06)]">
          <p className="text-xs uppercase tracking-[0.18em] text-[var(--muted)]">
            Article 1 • Two Pointers
          </p>
          <h1 className="mt-4 text-4xl font-semibold tracking-tight text-[var(--foreground)] sm:text-5xl">
            Two Pointers: The Art of Shrinking a Problem from Both Ends
          </h1>
          <p className="mt-5 max-w-3xl text-lg leading-8 text-[var(--muted)]">
            Not all problems need more power. Some need better positioning.
            This is the first rung in a ladder that turns Two Pointers from a
            memorized trick into a technique you can actually recognize in
            interviews.
          </p>
        </header>

        <section className="mt-10 space-y-6 text-[var(--muted)]">
          <p className="leading-8">
            Imagine you are standing at one end of a long hallway. At the other
            end, your friend is standing and facing you.
          </p>
          <p className="leading-8">
            The hallway is full of objects. Some matter. Some are distractions.
            Your job is to figure something out about the hallway as fast as
            possible.
          </p>
          <p className="leading-8">
            Would you walk the whole hallway alone, or would you coordinate from
            both ends and shrink the unknown space together?
          </p>
          <p className="leading-8">
            That instinct is the soul of Two Pointers. It is not about being
            clever with indices. It is about reducing the problem space without
            losing truth.
          </p>
        </section>

        <section className="mt-10 rounded-[1.75rem] border border-[var(--border)] bg-white/75 p-6 shadow-[0_18px_50px_rgba(15,23,32,0.04)]">
          <p className="text-xs uppercase tracking-[0.18em] text-[var(--muted)]">
            Essence
          </p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-[var(--foreground)]">
            Two Pointers is controlled reduction.
          </h2>
          <p className="mt-5 leading-8 text-[var(--muted)]">
            The technique exists because many problems have structure. And when
            structure exists, we do not need to check everything blindly. We ask
            a better question: can we safely eliminate part of the problem?
          </p>
          <blockquote className="mt-6 rounded-[1.25rem] border-l-4 border-[var(--accent)] bg-[var(--accent-soft)] px-5 py-4 text-lg font-medium leading-8 text-[var(--foreground)]">
            Two Pointers is about shrinking a problem space while preserving
            correctness.
          </blockquote>
        </section>

        <section className="mt-10 grid gap-5 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)]">
          <div className="rounded-[1.75rem] border border-[var(--border)] bg-[var(--surface)] p-6 shadow-[0_18px_50px_rgba(15,23,32,0.04)]">
            <p className="text-xs uppercase tracking-[0.18em] text-[var(--muted)]">
              The invariant
            </p>
            <h2 className="mt-3 text-2xl font-semibold text-[var(--foreground)]">
              Everything outside the pointers is already processed correctly.
            </h2>
            <p className="mt-4 leading-7 text-[var(--muted)]">
              When you move a pointer, you are making a promise: I am done with
              that part. I do not need to revisit it.
            </p>
          </div>

          <div className="rounded-[1.75rem] border border-[var(--border)] bg-[linear-gradient(135deg,#0f1720_0%,#123a3d_52%,#115e59_100%)] p-6 text-white shadow-[0_28px_90px_rgba(10,20,30,0.18)]">
            <p className="text-xs uppercase tracking-[0.18em] text-teal-100/70">
              Mental picture
            </p>
            <pre className="mt-4 overflow-x-auto text-sm leading-7 text-slate-100">
{`h  e  l  l  o
^           ^
left        right

swap the ends

o  e  l  l  h
   ^     ^
 left   right`}
            </pre>
          </div>
        </section>

        <section className="mt-10">
          <h2 className="text-3xl font-semibold tracking-tight text-[var(--foreground)]">
            Problem 1: Reverse String
          </h2>
          <p className="mt-4 leading-8 text-[var(--muted)]">
            This problem is not important because reversing a string is hard. It
            is important because it teaches pointer trust.
          </p>

          <div className="mt-6 overflow-hidden rounded-[1.75rem] border border-[var(--border)] bg-white/75 shadow-[0_18px_50px_rgba(15,23,32,0.04)]">
            <div className="border-b border-[var(--border)] bg-[var(--surface-strong)] px-5 py-4">
              <p className="text-sm font-medium text-[var(--foreground)]">
                Interview-ready Python
              </p>
            </div>
            <pre className="overflow-x-auto p-5 text-sm leading-7 text-[var(--foreground)]">
{`from typing import List


class Solution:
    def reverseString(self, s: List[str]) -> None:
        left, right = 0, len(s) - 1

        while left < right:
            s[left], s[right] = s[right], s[left]
            left += 1
            right -= 1`}
            </pre>
          </div>
        </section>

        <section className="mt-10 rounded-[1.75rem] border border-[var(--border)] bg-white/75 p-6 shadow-[0_18px_50px_rgba(15,23,32,0.04)]">
          <h2 className="text-2xl font-semibold text-[var(--foreground)]">
            What we really learned
          </h2>
          <div className="mt-5 grid gap-3 sm:grid-cols-2">
            {takeaways.map((takeaway) => (
              <div
                key={takeaway}
                className="rounded-[1.25rem] border border-[var(--border)] bg-[var(--surface)] p-4 text-sm leading-6 text-[var(--muted)]"
              >
                {takeaway}
              </div>
            ))}
          </div>
        </section>

        <section className="mt-10 rounded-[1.75rem] border border-[var(--border)] bg-[linear-gradient(180deg,rgba(251,252,250,0.96),rgba(232,243,241,0.78))] p-6 shadow-[0_18px_50px_rgba(15,23,32,0.04)]">
          <p className="text-xs uppercase tracking-[0.18em] text-[var(--muted)]">
            Easy-to-hard ladder
          </p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-[var(--foreground)]">
            One idea, upgraded one constraint at a time.
          </h2>
          <div className="mt-6 grid gap-4 md:grid-cols-2">
            {ladder.map((step, index) => (
              <div
                key={step.title}
                className="rounded-[1.25rem] border border-[var(--border)] bg-white/80 p-4 shadow-[0_12px_30px_rgba(15,23,32,0.04)]"
              >
                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[var(--accent)]">
                  Rung {index + 1}
                </p>
                <h3 className="mt-2 text-lg font-semibold text-[var(--foreground)]">
                  {step.title}
                </h3>
                <p className="mt-2 text-sm leading-6 text-[var(--muted)]">
                  {step.lesson}
                </p>
              </div>
            ))}
          </div>
        </section>

        <section className="mt-10 rounded-[1.75rem] border border-[var(--border)] bg-white/75 p-6 shadow-[0_18px_50px_rgba(15,23,32,0.04)]">
          <h2 className="text-2xl font-semibold text-[var(--foreground)]">
            The mutation that creates the next problem
          </h2>
          <p className="mt-4 leading-8 text-[var(--muted)]">
            Now change one rule: compare from both ends, but ignore spaces,
            punctuation, and casing. Suddenly you cannot move both pointers
            blindly. Sometimes the left pointer skips. Sometimes the right
            pointer skips. Sometimes both characters are valid and must be
            compared.
          </p>
          <p className="mt-4 leading-8 text-[var(--muted)]">
            You just landed on <strong>Valid Palindrome</strong>. Same core
            idea. New constraint. New pointer movement. That is how the ladder
            works.
          </p>
        </section>

        <section className="mt-10 rounded-[1.75rem] border border-[var(--border)] bg-[var(--foreground)] p-6 text-white shadow-[0_28px_90px_rgba(10,20,30,0.18)]">
          <p className="text-xs uppercase tracking-[0.18em] text-teal-100/70">
            Interview talk-track
          </p>
          <blockquote className="mt-4 text-lg leading-8 text-slate-100">
            “We can place pointers at the boundaries and shrink the search space
            while preserving correctness. After each step, the region outside
            the pointers is already resolved, so we never need to revisit it.
            That gives us a linear-time solution.”
          </blockquote>
        </section>

        <section className="mt-10">
          <h2 className="text-2xl font-semibold text-[var(--foreground)]">
            Pause here
          </h2>
          <p className="mt-4 leading-8 text-[var(--muted)]">
            Two Pointers is not just a trick. It is a way of negotiating with a
            problem: what can I safely ignore now?
          </p>
          <p className="mt-4 leading-8 text-[var(--muted)]">
            Next article: <strong>Valid Palindrome — When You Are Allowed To
            Ignore Things.</strong>
          </p>
        </section>
      </article>
    </main>
  );
}
