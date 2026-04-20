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
    <main className="min-h-screen bg-white px-6 py-16 text-slate-900 sm:px-10">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-16">
        <section className="grid gap-10 lg:grid-cols-[minmax(0,1.5fr)_minmax(280px,0.9fr)] lg:items-end">
          <div className="max-w-3xl">
            <p className="mb-4 text-sm font-medium uppercase tracking-[0.2em] text-slate-500">
              Vishal Cherupally
            </p>

            <h1 className="max-w-4xl text-4xl font-semibold tracking-tight text-slate-950 sm:text-5xl lg:text-6xl">
              Data engineering, system design, and technical writing shaped by
              learning in public.
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600">
              I build and study scalable systems, document what I learn, and
              turn complex backend and data concepts into something practical,
              clear, and worth exploring.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href="/blog"
                className="rounded-full bg-slate-950 px-5 py-3 text-sm font-medium text-white transition hover:bg-slate-800"
              >
                Read the blog
              </Link>

              <Link
                href="/projects"
                className="rounded-full border border-slate-300 px-5 py-3 text-sm font-medium text-slate-700 transition hover:border-slate-400 hover:bg-slate-50"
              >
                Explore projects
              </Link>
            </div>
          </div>

          <aside className="rounded-3xl border border-slate-200 bg-slate-50 p-6">
            <p className="text-sm font-medium text-slate-500">What this site is becoming</p>
            <ul className="mt-4 space-y-4 text-sm leading-6 text-slate-700">
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
              className="group rounded-3xl border border-slate-200 bg-white p-6 transition hover:-translate-y-1 hover:border-slate-300 hover:shadow-sm"
            >
              <p className="text-sm font-medium text-slate-500">
                Explore
              </p>
              <h2 className="mt-3 text-2xl font-semibold text-slate-950">
                {section.title}
              </h2>
              <p className="mt-3 text-sm leading-6 text-slate-600">
                {section.description}
              </p>
              <p className="mt-6 text-sm font-medium text-slate-950">
                Enter section
              </p>
            </Link>
          ))}
        </section>

        <section className="rounded-[2rem] bg-slate-950 px-6 py-8 text-white sm:px-8 sm:py-10">
          <div className="max-w-2xl">
            <p className="text-sm font-medium uppercase tracking-[0.2em] text-slate-400">
              Start here
            </p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight">
              If you are visiting for the first time, these are the best entry
              points.
            </h2>
            <p className="mt-4 text-sm leading-6 text-slate-300">
              The goal is to make the site useful whether you want to read,
              evaluate my work, or follow what I am learning next.
            </p>
          </div>

          <div className="mt-8 grid gap-4 lg:grid-cols-3">
            {startHereLinks.map((item) => (
              <Link
                key={item.title}
                href={item.href}
                className="rounded-3xl border border-white/10 bg-white/5 p-5 transition hover:bg-white/10"
              >
                <p className="text-xs font-medium uppercase tracking-[0.18em] text-slate-400">
                  {item.label}
                </p>
                <h3 className="mt-3 text-xl font-semibold">{item.title}</h3>
                <p className="mt-3 text-sm leading-6 text-slate-300">
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
