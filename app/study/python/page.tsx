import Link from "next/link";
import { pythonStudyModules, studyTracks } from "@/lib/study";

const pythonTrack = studyTracks.find((track) => track.slug === "python");

export default function PythonStudyPage() {
  return (
    <main className="px-6 py-16 sm:px-10">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-12">
        <section className="max-w-3xl">
          <Link
            href="/study"
            className="text-sm font-medium text-[var(--accent)] transition hover:text-[var(--accent-strong)]"
          >
            Back to study materials
          </Link>

          <p className="mt-6 text-sm font-medium uppercase tracking-[0.2em] text-[var(--muted)]">
            Python track
          </p>
          <h1 className="mt-4 text-4xl font-semibold tracking-tight text-[var(--foreground)] sm:text-5xl">
            Python Foundations and DSA Patterns
          </h1>
          <p className="mt-5 text-lg leading-8 text-[var(--muted)]">
            {pythonTrack?.description}
          </p>
        </section>

        <section className="grid gap-5 md:grid-cols-2">
          {pythonTrack?.sections.map((section) => (
            <article
              key={section.title}
              className="rounded-[1.75rem] border border-[var(--border)] bg-white/75 p-6 shadow-[0_16px_40px_rgba(15,23,32,0.04)]"
            >
              <h2 className="text-2xl font-semibold text-[var(--foreground)]">
                {section.title}
              </h2>
              <p className="mt-3 text-sm leading-6 text-[var(--muted)]">
                {section.description}
              </p>
            </article>
          ))}
        </section>

        <section className="rounded-[2rem] border border-[var(--border)] bg-[rgba(251,252,250,0.82)] p-6 shadow-[0_18px_50px_rgba(15,23,32,0.04)] sm:p-8">
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-[var(--muted)]">
            DSA Patterns in Python
          </p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-[var(--foreground)]">
            Start with patterns that teach reusable thinking.
          </h2>

          <div className="mt-8 grid gap-4">
            {pythonStudyModules.map((module) => (
              <Link
                key={module.slug}
                href={module.href}
                className="group rounded-[1.5rem] border border-[var(--border)] bg-[var(--surface)] p-5 transition duration-300 hover:-translate-y-0.5 hover:border-[var(--accent)]"
              >
                <div className="flex flex-wrap items-center gap-3">
                  <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[var(--accent)]">
                    {module.level}
                  </p>
                  <span className="h-1 w-1 rounded-full bg-[var(--accent)]" />
                  <p className="text-xs uppercase tracking-[0.16em] text-[var(--muted)]">
                    Python DSA
                  </p>
                </div>
                <h3 className="mt-3 text-2xl font-semibold text-[var(--foreground)]">
                  {module.title}
                </h3>
                <p className="mt-3 max-w-3xl text-sm leading-6 text-[var(--muted)]">
                  {module.description}
                </p>
                <p className="mt-5 text-sm font-medium text-[var(--accent)] transition duration-300 group-hover:translate-x-1">
                  Open lesson
                </p>
              </Link>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}
