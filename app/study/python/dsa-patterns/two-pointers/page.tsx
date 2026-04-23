import Link from "next/link";
import ReverseStringPlayground from "@/components/reverse-string-playground";

const takeaways = [
  "A pointer is just a position you control.",
  "Two pointers are useful when the problem has two useful boundaries.",
  "The solved area grows as the unknown area shrinks.",
  "The stopping condition comes from the moment the unknown area disappears.",
];

export default function TwoPointersStudyPage() {
  return (
    <main className="px-6 py-16 sm:px-10">
      <article className="mx-auto max-w-4xl">
        <Link
          href="/study/python"
          className="text-sm font-medium text-[var(--accent)] transition hover:text-[var(--accent-strong)]"
        >
          Back to Python track
        </Link>

        <header className="mt-6 rounded-[2rem] border border-[var(--border)] bg-[linear-gradient(180deg,rgba(251,252,250,0.95),rgba(232,243,241,0.92))] p-8 shadow-[0_20px_60px_rgba(15,23,32,0.06)]">
          <p className="text-xs uppercase tracking-[0.18em] text-[var(--muted)]">
            Python DSA • Pattern 1
          </p>
          <h1 className="mt-4 text-4xl font-semibold tracking-tight text-[var(--foreground)] sm:text-5xl">
            Two Pointers: learning to shrink the problem
          </h1>
          <p className="mt-5 max-w-3xl text-lg leading-8 text-[var(--muted)]">
            We will start with a very small problem, define it properly, solve
            it slowly, and extract the idea that shows up again in harder
            interview problems.
          </p>
        </header>

        <section className="mt-10 rounded-[1.75rem] border border-[var(--border)] bg-white/75 p-6 shadow-[0_18px_50px_rgba(15,23,32,0.04)]">
          <p className="text-xs uppercase tracking-[0.18em] text-[var(--muted)]">
            Problem definition
          </p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-[var(--foreground)]">
            Reverse a list of characters in-place.
          </h2>
          <div className="mt-5 space-y-4 leading-8 text-[var(--muted)]">
            <p>
              You are given a list of characters. You must reverse the list so
              the first character becomes the last, the second becomes the
              second last, and so on.
            </p>
            <p>
              The important constraint is <strong>in-place</strong>. That means
              you should modify the same list instead of creating a brand-new
              reversed list.
            </p>
          </div>
        </section>

        <section className="mt-10 grid gap-5 lg:grid-cols-[minmax(0,0.95fr)_minmax(0,1.05fr)]">
          <div className="rounded-[1.75rem] border border-[var(--border)] bg-[var(--surface)] p-6 shadow-[0_18px_50px_rgba(15,23,32,0.04)]">
            <p className="text-xs uppercase tracking-[0.18em] text-[var(--muted)]">
              Example
            </p>
            <h2 className="mt-3 text-2xl font-semibold text-[var(--foreground)]">
              Input: <code>[&quot;h&quot;, &quot;e&quot;, &quot;l&quot;, &quot;l&quot;, &quot;o&quot;]</code>
            </h2>
            <p className="mt-4 leading-7 text-[var(--muted)]">
              Expected output:
            </p>
            <pre className="mt-4 overflow-x-auto rounded-[1.25rem] bg-[#0b1220] p-4 font-mono text-sm text-emerald-200">
{`["o", "l", "l", "e", "h"]`}
            </pre>
          </div>

          <div className="rounded-[1.75rem] border border-[var(--border)] bg-white/80 p-4 shadow-[0_18px_50px_rgba(15,23,32,0.04)]">
            <p className="text-xs uppercase tracking-[0.18em] text-[var(--muted)]">
              Analogy
            </p>
            <img
              src="/two-pointer-hallway.svg"
              alt="Two friends walking from opposite ends of a hallway to explain left and right pointers."
              className="mt-4 w-full rounded-[1.25rem]"
            />
          </div>
        </section>

        <section className="mt-10 space-y-6 text-[var(--muted)]">
          <h2 className="text-3xl font-semibold tracking-tight text-[var(--foreground)]">
            Why this is a Two Pointer problem
          </h2>
          <p className="leading-8">
            Reversing has two natural boundaries: the beginning and the end.
            That means we do not need to think from only one side.
          </p>
          <p className="leading-8">
            Put one pointer at the first unresolved character and another at
            the last unresolved character. Swap those two characters, then move
            both pointers closer.
          </p>
          <blockquote className="rounded-[1.25rem] border-l-4 border-[var(--accent)] bg-[var(--accent-soft)] px-5 py-4 text-lg font-medium leading-8 text-[var(--foreground)]">
            The core idea: solve the outside first, then shrink the unknown
            space.
          </blockquote>
        </section>

        <section className="mt-10 rounded-[1.75rem] border border-[var(--border)] bg-white/75 p-6 shadow-[0_18px_50px_rgba(15,23,32,0.04)]">
          <p className="text-xs uppercase tracking-[0.18em] text-[var(--muted)]">
            The invariant
          </p>
          <h2 className="mt-3 text-2xl font-semibold text-[var(--foreground)]">
            Everything outside `left` and `right` is already in the correct
            final position.
          </h2>
          <p className="mt-4 leading-7 text-[var(--muted)]">
            This is the sentence that makes the algorithm trustworthy. After
            every swap, the solved area grows and the unknown area becomes
            smaller.
          </p>
        </section>

        <section className="mt-10">
          <h2 className="text-3xl font-semibold tracking-tight text-[var(--foreground)]">
            Try it yourself
          </h2>
          <p className="mt-4 leading-8 text-[var(--muted)]">
            Change the input and watch how `left` and `right` move. The point is
            not just to see the reversed string. The point is to see the problem
            shrink.
          </p>

          <ReverseStringPlayground />
        </section>

        <section className="mt-10 rounded-[1.75rem] border border-[var(--border)] bg-white/75 p-6 shadow-[0_18px_50px_rgba(15,23,32,0.04)]">
          <h2 className="text-2xl font-semibold text-[var(--foreground)]">
            What you should take away
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

        <section className="mt-10 rounded-[1.75rem] border border-[var(--border)] bg-[var(--foreground)] p-6 text-white shadow-[0_28px_90px_rgba(10,20,30,0.18)]">
          <p className="text-xs uppercase tracking-[0.18em] text-teal-100/70">
            How this becomes the next problem
          </p>
          <h2 className="mt-3 text-2xl font-semibold">
            What if some characters should be ignored?
          </h2>
          <p className="mt-4 leading-8 text-slate-200">
            If we compare from both ends but ignore spaces, punctuation, and
            casing, we arrive at Valid Palindrome. Same two boundaries, but now
            pointer movement becomes selective.
          </p>
        </section>
      </article>
    </main>
  );
}
