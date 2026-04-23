import Link from "next/link";
import { studyTracks } from "@/lib/study";

export default function Study() {
  return (
    <main className="px-6 py-16 sm:px-10">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-12">
        <section className="max-w-3xl">
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-[var(--muted)]">
            Study materials
          </p>
          <h1 className="mt-4 text-4xl font-semibold tracking-tight text-[var(--foreground)] sm:text-5xl">
            Learn the concept, not just the answer.
          </h1>
          <p className="mt-5 text-lg leading-8 text-[var(--muted)]">
            This section is for structured learning paths. Each topic should
            define the problem clearly, explain the intuition, connect it to
            examples, and help you build interview-ready reasoning step by step.
          </p>
        </section>

        <section className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {studyTracks.map((track) => (
            <Link
              key={track.slug}
              href={track.slug === "python" ? "/study/python" : "/study"}
              className="group rounded-[1.75rem] border border-[var(--border)] bg-[rgba(251,252,250,0.82)] p-6 shadow-[0_16px_40px_rgba(15,23,32,0.04)] backdrop-blur-sm transition duration-300 hover:-translate-y-1 hover:border-[var(--accent)] hover:shadow-[0_24px_60px_rgba(15,118,110,0.1)]"
            >
              <p className="text-xs font-medium uppercase tracking-[0.18em] text-[var(--muted)]">
                Learning track
              </p>
              <h2 className="mt-3 text-2xl font-semibold text-[var(--foreground)]">
                {track.title}
              </h2>
              <p className="mt-3 text-sm leading-6 text-[var(--muted)]">
                {track.description}
              </p>
              <p className="mt-6 text-sm font-medium text-[var(--accent)] transition duration-300 group-hover:translate-x-1">
                {track.slug === "python" ? "Open track" : "Coming soon"}
              </p>
            </Link>
          ))}
        </section>

        <section className="rounded-[2rem] border border-[var(--border)] bg-[linear-gradient(135deg,#0f1720_0%,#123a3d_52%,#115e59_100%)] px-6 py-8 text-white shadow-[0_28px_90px_rgba(10,20,30,0.18)] sm:px-8">
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-teal-100/70">
            Study philosophy
          </p>
          <h2 className="mt-3 max-w-3xl text-3xl font-semibold tracking-tight">
            Every lesson should start with a clear problem, build intuition with
            an example, then turn that intuition into code.
          </h2>
        </section>
      </div>
    </main>
  );
}
