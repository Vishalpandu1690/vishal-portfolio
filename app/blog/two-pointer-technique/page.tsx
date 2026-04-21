import Link from "next/link";
import ReverseStringPlayground from "@/components/reverse-string-playground";

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

          <div className="overflow-hidden rounded-[1.75rem] border border-[var(--border)] bg-white/80 p-4 shadow-[0_18px_50px_rgba(15,23,32,0.04)]">
            <p className="text-xs uppercase tracking-[0.18em] text-[var(--muted)]">
              Hallway picture
            </p>
            <img
              src="/two-pointer-hallway.svg"
              alt="Two friends walking from opposite ends of a hallway to explain left and right pointers."
              className="mt-4 w-full rounded-[1.25rem]"
            />
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

          <ReverseStringPlayground />

          <div className="mt-6 grid gap-4 md:grid-cols-3">
            <div className="rounded-[1.25rem] border border-[var(--border)] bg-white/75 p-4">
              <p className="text-sm font-semibold text-[var(--foreground)]">
                `left`
              </p>
              <p className="mt-2 text-sm leading-6 text-[var(--muted)]">
                You start from the beginning and move forward.
              </p>
            </div>
            <div className="rounded-[1.25rem] border border-[var(--border)] bg-white/75 p-4">
              <p className="text-sm font-semibold text-[var(--foreground)]">
                `right`
              </p>
              <p className="mt-2 text-sm leading-6 text-[var(--muted)]">
                Your friend starts from the end and moves backward.
              </p>
            </div>
            <div className="rounded-[1.25rem] border border-[var(--border)] bg-white/75 p-4">
              <p className="text-sm font-semibold text-[var(--foreground)]">
                `while left &lt; right`
              </p>
              <p className="mt-2 text-sm leading-6 text-[var(--muted)]">
                Keep walking until the unsolved hallway disappears.
              </p>
            </div>
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
