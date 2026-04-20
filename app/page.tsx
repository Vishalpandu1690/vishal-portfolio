import Link from "next/link";

const featuredSections = [
  {
    title: "Projects",
    description:
      "Case studies from data engineering work, migrations, optimization, and systems thinking.",
    href: "/projects",
  },
  {
    title: "Writing",
    description:
      "Short technical articles that break down concepts like problem-solving patterns and architecture ideas.",
    href: "/blog",
  },
  {
    title: "Study Notes",
    description:
      "A growing knowledge base of concepts I am learning, revising, and turning into practical intuition.",
    href: "/study",
  },
];

const startHereLinks = [
  {
    label: "Featured project",
    title: "Hive to Unity Catalog Migration",
    summary: "A migration story centered on automation, large codebases, and safer platform changes.",
    href: "/projects",
  },
  {
    label: "Featured article",
    title: "Mastering Sliding Window Technique in Python",
    summary: "A clean introduction to one of the most useful interview and problem-solving patterns.",
    href: "/blog/sliding-window-technique",
  },
  {
    label: "Currently exploring",
    title: "System design for data and backend systems",
    summary: "Studying how scalable systems are shaped through tradeoffs, constraints, and architecture decisions.",
    href: "/study",
  },
];

export default function Home() {
  return (
    <main className="min-h-screen px-6 py-16 text-[var(--foreground)] sm:px-10">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-16">
        <section className="grid gap-10 lg:grid-cols-[minmax(0,1.5fr)_minmax(280px,0.9fr)] lg:items-end">
          <div className="max-w-3xl animate-fade-up">
            <p className="mb-4 text-sm font-medium uppercase tracking-[0.2em] text-[var(--muted)]">
              Vishal Cherupally
            </p>

            <h1 className="max-w-4xl text-4xl font-semibold tracking-tight text-[var(--foreground)] sm:text-5xl lg:text-6xl">
              Data engineering, system design, and technical writing shaped by
              learning in public.
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-[var(--muted)]">
              I build and study scalable systems, document what I learn, and
              turn complex backend and data concepts into something practical,
              clear, and worth exploring.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href="/blog"
                className="rounded-full bg-[var(--accent)] px-5 py-3 text-sm font-medium text-white transition duration-300 hover:-translate-y-0.5 hover:bg-[var(--accent-strong)] hover:shadow-[0_16px_40px_rgba(17,94,89,0.22)]"
              >
                Read the blog
              </Link>

              <Link
                href="/projects"
                className="rounded-full border border-[var(--border)] bg-white/70 px-5 py-3 text-sm font-medium text-[var(--foreground)] backdrop-blur-sm transition duration-300 hover:-translate-y-0.5 hover:border-[var(--accent)] hover:bg-[var(--surface)]"
              >
                Explore projects
              </Link>
            </div>
          </div>

          <aside className="animate-fade-up-delay rounded-[2rem] border border-[var(--border)] bg-[linear-gradient(180deg,rgba(251,252,250,0.94),rgba(232,243,241,0.94))] p-6 shadow-[0_20px_60px_rgba(15,23,32,0.06)] backdrop-blur-sm lg:animate-float">
            <p className="text-sm font-medium text-[var(--muted)]">
              What this site is becoming
            </p>
            <ul className="mt-4 space-y-4 text-sm leading-6 text-[var(--foreground)]">
              <li>A portfolio that explains the thinking behind the work.</li>
              <li>A technical blog for Python, data engineering, and systems.</li>
              <li>A personal learning lab built by shipping in public.</li>
            </ul>
          </aside>
        </section>

        <section className="grid gap-6 md:grid-cols-3">
          {featuredSections.map((section) => (
            <Link
              key={section.title}
              href={section.href}
              className="group animate-fade-up-slow rounded-[2rem] border border-[var(--border)] bg-[rgba(251,252,250,0.82)] p-6 shadow-[0_18px_50px_rgba(15,23,32,0.05)] backdrop-blur-sm transition duration-300 hover:-translate-y-1.5 hover:border-[var(--accent)] hover:shadow-[0_24px_70px_rgba(15,118,110,0.12)]"
            >
              <p className="text-sm font-medium text-[var(--muted)]">
                Explore
              </p>
              <h2 className="mt-3 text-2xl font-semibold text-[var(--foreground)]">
                {section.title}
              </h2>
              <p className="mt-3 text-sm leading-6 text-[var(--muted)]">
                {section.description}
              </p>
              <p className="mt-6 text-sm font-medium text-[var(--accent)] transition duration-300 group-hover:translate-x-1">
                Enter section
              </p>
            </Link>
          ))}
        </section>

        <section className="animate-fade-up-slow rounded-[2rem] border border-[rgba(10,68,65,0.22)] bg-[linear-gradient(135deg,#0f1720_0%,#123a3d_52%,#115e59_100%)] px-6 py-8 text-white shadow-[0_28px_90px_rgba(10,20,30,0.22)] sm:px-8 sm:py-10">
          <div className="max-w-2xl">
            <p className="text-sm font-medium uppercase tracking-[0.2em] text-teal-100/70">
              Start here
            </p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight">
              If you are visiting for the first time, these are the best entry
              points.
            </h2>
            <p className="mt-4 text-sm leading-6 text-slate-200">
              The goal is to make the site useful whether you want to read,
              evaluate my work, or follow what I am learning next.
            </p>
          </div>

          <div className="mt-8 grid gap-4 lg:grid-cols-3">
            {startHereLinks.map((item) => (
              <Link
                key={item.title}
                href={item.href}
                className="rounded-[1.75rem] border border-white/12 bg-white/8 p-5 backdrop-blur-sm transition duration-300 hover:-translate-y-1 hover:bg-white/14"
              >
                <p className="text-xs font-medium uppercase tracking-[0.18em] text-teal-100/70">
                  {item.label}
                </p>
                <h3 className="mt-3 text-xl font-semibold">{item.title}</h3>
                <p className="mt-3 text-sm leading-6 text-slate-200">
                  {item.summary}
                </p>
              </Link>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}
