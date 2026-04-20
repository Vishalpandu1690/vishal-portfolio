import Link from "next/link";

const primarySections = [
  {
    title: "Blog Library",
    description:
      "Articles that explain core computer science, cloud, data, AI/ML, system design, and Python in a practical way.",
    href: "/blog",
  },
  {
    title: "Study Materials",
    description:
      "Structured notes, revision guides, and concept breakdowns for interview prep and deeper understanding.",
    href: "/study",
  },
  {
    title: "Projects",
    description:
      "Proof of execution through hands-on work, case studies, and things I have built while learning in public.",
    href: "/projects",
  },
];

const topicLanes = [
  {
    title: "General Computer Science",
    summary:
      "The science behind computation, software, operating systems, networking, and how machines actually work.",
  },
  {
    title: "System Design",
    summary:
      "Scalability, tradeoffs, architecture patterns, distributed systems, and designing systems with clear reasoning.",
  },
  {
    title: "Cloud",
    summary:
      "Infrastructure thinking, deployment models, managed services, storage, compute, and reliability concepts.",
  },
  {
    title: "Data and AI",
    summary:
      "Data engineering, data science, machine learning, and AI ideas explained from fundamentals to real use cases.",
  },
  {
    title: "Python Concepts",
    summary:
      "Language features, problem-solving patterns, core syntax, and how to think clearly in Python.",
  },
  {
    title: "Python Coding",
    summary:
      "Hands-on coding practice, clean implementations, and interview-oriented problem-solving walkthroughs.",
  },
];

const audienceCards = [
  {
    title: "Learners building foundations",
    summary:
      "For people who want computer science to feel understandable instead of abstract and overwhelming.",
  },
  {
    title: "Engineers exploring data and AI",
    summary:
      "For readers moving across data engineering, machine learning, and practical software systems.",
  },
  {
    title: "Interview-focused builders",
    summary:
      "For people aiming at strong product companies and looking for content that sharpens both depth and execution.",
  },
];

const startHereLinks = [
  {
    label: "Start with foundations",
    title: "General CS, Python, and core problem-solving",
    summary:
      "Use the blog and study sections to build strong intuition before going deeper into systems and data.",
    href: "/study",
  },
  {
    label: "Go deeper",
    title: "System design, cloud, and architecture thinking",
    summary:
      "Learn how software scales, why tradeoffs matter, and how strong systems are reasoned about.",
    href: "/blog",
  },
  {
    label: "See execution",
    title: "Projects and applied engineering work",
    summary:
      "Read case studies and real builds to connect theory with implementation and engineering judgment.",
    href: "/projects",
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
              Computer science, systems, Python, and data explained with
              clarity for builders who want depth.
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-[var(--muted)]">
              This is a learning-first technical publication for people curious
              about software, system design, cloud, data, AI/ML, and coding for
              strong engineering roles. The goal is simple: make serious topics
              useful, practical, and worth returning to.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href="/blog"
                className="rounded-full bg-[var(--accent)] px-5 py-3 text-sm font-medium text-white transition duration-300 hover:-translate-y-0.5 hover:bg-[var(--accent-strong)] hover:shadow-[0_16px_40px_rgba(17,94,89,0.22)]"
              >
                Read the blog
              </Link>

              <Link
                href="/study"
                className="rounded-full border border-[var(--border)] bg-white/70 px-5 py-3 text-sm font-medium text-[var(--foreground)] backdrop-blur-sm transition duration-300 hover:-translate-y-0.5 hover:border-[var(--accent)] hover:bg-[var(--surface)]"
              >
                Open study materials
              </Link>
            </div>
          </div>

          <aside className="animate-fade-up-delay rounded-[2rem] border border-[var(--border)] bg-[linear-gradient(180deg,rgba(251,252,250,0.94),rgba(232,243,241,0.94))] p-6 shadow-[0_20px_60px_rgba(15,23,32,0.06)] backdrop-blur-sm lg:animate-float">
            <p className="text-sm font-medium text-[var(--muted)]">
              What this site is becoming
            </p>
            <ul className="mt-4 space-y-4 text-sm leading-6 text-[var(--foreground)]">
              <li>A technical publication around computer science and software.</li>
              <li>A useful resource for data, AI/ML, cloud, and system design.</li>
              <li>A learning platform for interview prep and long-term depth.</li>
            </ul>
          </aside>
        </section>

        <section className="grid gap-6 md:grid-cols-3">
          {primarySections.map((section) => (
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

        <section className="grid gap-4 md:grid-cols-3">
          {audienceCards.map((item) => (
            <article
              key={item.title}
              className="animate-fade-up-slow rounded-[1.75rem] border border-[var(--border)] bg-white/65 p-5 shadow-[0_12px_30px_rgba(15,23,32,0.04)] backdrop-blur-sm"
            >
              <p className="text-sm font-semibold text-[var(--foreground)]">
                {item.title}
              </p>
              <p className="mt-3 text-sm leading-6 text-[var(--muted)]">
                {item.summary}
              </p>
            </article>
          ))}
        </section>

        <section className="animate-fade-up-slow">
          <div className="max-w-3xl">
            <p className="text-sm font-medium uppercase tracking-[0.2em] text-[var(--muted)]">
              Topic map
            </p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-[var(--foreground)]">
              The homepage should signal breadth, but the content should still
              feel organized.
            </h2>
            <p className="mt-4 text-sm leading-6 text-[var(--muted)]">
              These are the core lanes the site will grow into over time. They
              set expectations for the kind of writing and study material
              readers will find here.
            </p>
          </div>

          <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {topicLanes.map((lane) => (
              <article
                key={lane.title}
                className="rounded-[1.75rem] border border-[var(--border)] bg-[rgba(251,252,250,0.82)] p-5 shadow-[0_18px_40px_rgba(15,23,32,0.04)] backdrop-blur-sm transition duration-300 hover:-translate-y-1 hover:border-[var(--accent)]"
              >
                <h3 className="text-xl font-semibold text-[var(--foreground)]">
                  {lane.title}
                </h3>
                <p className="mt-3 text-sm leading-6 text-[var(--muted)]">
                  {lane.summary}
                </p>
              </article>
            ))}
          </div>
        </section>

        <section className="animate-fade-up-slow rounded-[2rem] border border-[rgba(10,68,65,0.22)] bg-[linear-gradient(135deg,#0f1720_0%,#123a3d_52%,#115e59_100%)] px-6 py-8 text-white shadow-[0_28px_90px_rgba(10,20,30,0.22)] sm:px-8 sm:py-10">
          <div className="max-w-2xl">
            <p className="text-sm font-medium uppercase tracking-[0.2em] text-teal-100/70">
              Start here
            </p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight">
              If the site grows into a useful learning hub, these are the paths
              people should take first.
            </h2>
            <p className="mt-4 text-sm leading-6 text-slate-200">
              The homepage now aims to speak to learners, engineers, and
              interview-focused readers without boxing the site into one niche.
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
