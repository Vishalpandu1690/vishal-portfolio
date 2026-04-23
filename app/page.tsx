"use client";
import Link from "next/link";

const primarySections = [
  { tag: "01", title: "Blog Library", description: "Articles that explain core computer science, cloud, data, AI/ML, system design, and Python in a practical way.", href: "/blog" },
  { tag: "02", title: "Study Materials", description: "Structured learning paths, pattern-driven lessons, and editorial-depth guides for interview prep and long-term depth.", href: "/study" },
  { tag: "03", title: "Projects", description: "Proof of execution through hands-on work, case studies, and things built while learning in public.", href: "/projects" },
];

const audienceCards = [
  { title: "Learners building foundations", summary: "For people who want computer science to feel understandable instead of abstract and overwhelming." },
  { title: "Engineers exploring data and AI", summary: "For readers moving across data engineering, machine learning, and practical software systems." },
  { title: "Interview-focused builders", summary: "For people aiming at strong product companies and looking for content that sharpens both depth and execution." },
];

const startHereLinks = [
  { label: "Start with foundations", title: "CS, Python, and core problem-solving", summary: "Build strong intuition before going deeper into systems and data.", href: "/study" },
  { label: "Go deeper", title: "System design, cloud, and architecture", summary: "Learn how software scales, why tradeoffs matter, and how strong systems are built.", href: "/blog" },
  { label: "See execution", title: "Projects and applied engineering", summary: "Connect theory with implementation through real case studies.", href: "/projects" },
];

export default function Home() {
  return (
    <main style={{ minHeight: "100vh", color: "var(--foreground)", position: "relative", overflowX: "hidden" }}>
      {/* Subtle amber glow */}
      <div aria-hidden="true" style={{ position: "fixed", top: 0, left: 0, width: 560, height: 560, borderRadius: "50%", background: "radial-gradient(circle, rgba(232,160,32,0.07) 0%, transparent 70%)", pointerEvents: "none", zIndex: 0 }} />

      <div className="page-wrap section-gap" style={{ position: "relative", zIndex: 1 }}>

        {/* ── HERO ── */}
        <section className="grid-hero animate-fade-up">
          <div>
            <p className="mono-label" style={{ fontSize: 10, letterSpacing: "0.28em", color: "var(--accent)", textTransform: "uppercase", marginBottom: 24 }}>
              Vishal Cherupally
            </p>
            <h1 className="h-display" style={{ fontSize: "clamp(40px,6vw,86px)", maxWidth: 700 }}>
              The Science Behind Computers, Software,{" "}
              <span style={{ color: "var(--accent)" }}>Data & Python.</span>
            </h1>
            <p className="prose-body" style={{ marginTop: 24, maxWidth: 520, fontSize: "1.05rem" }}>
              A learning-first technical publication for people curious about software, system design, cloud, data, AI/ML, and coding for strong engineering roles.
            </p>
            <div style={{ marginTop: 32, display: "flex", gap: 16, flexWrap: "wrap" }}>
              <Link href="/blog" className="btn-amber">Read the blog</Link>
              <Link href="/study" className="mono-label" style={{ display: "inline-flex", alignItems: "center", fontSize: 11, letterSpacing: "0.2em", textTransform: "uppercase", padding: "12px 28px", border: "1px solid var(--border)", color: "var(--muted-mid)", textDecoration: "none", transition: "border-color 0.18s, color 0.18s" }}
                onMouseEnter={(e) => { (e.currentTarget as HTMLAnchorElement).style.borderColor = "var(--accent)"; (e.currentTarget as HTMLAnchorElement).style.color = "var(--foreground)"; }}
                onMouseLeave={(e) => { (e.currentTarget as HTMLAnchorElement).style.borderColor = "var(--border)"; (e.currentTarget as HTMLAnchorElement).style.color = "var(--muted-mid)"; }}
              >
                Open study materials
              </Link>
            </div>
          </div>

          {/* "This site is" card */}
          <aside className="animate-fade-up-delay animate-float" style={{ background: "var(--surface)", border: "1px solid var(--border)", borderLeft: "3px solid var(--accent)", padding: "28px" }}>
            <p className="mono-label" style={{ fontSize: 9, letterSpacing: "0.3em", color: "var(--accent)", textTransform: "uppercase", marginBottom: 16 }}>This site is</p>
            <ul style={{ listStyle: "none", margin: 0, padding: 0, display: "flex", flexDirection: "column", gap: 14 }}>
              {["A technical publication around CS and software.", "A useful resource for data, AI/ML, cloud, and systems.", "A learning platform for interview prep and long-term depth."].map((item) => (
                <li key={item} className="prose-body" style={{ fontSize: "0.95rem", paddingLeft: 16, borderLeft: "1px solid var(--border-subtle)" }}>{item}</li>
              ))}
            </ul>
          </aside>
        </section>

        {/* ── PRIMARY SECTION CARDS ── */}
        <section className="animate-fade-up-slow">
          <div className="grid-3col">
            {primarySections.map((section) => (
              <Link key={section.title} href={section.href} style={{ display: "block", background: "var(--surface)", padding: "32px 28px", textDecoration: "none", transition: "background 0.2s" }}
                onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.background = "var(--surface-raised)")}
                onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.background = "var(--surface)")}
              >
                <p className="mono-label" style={{ fontSize: 10, color: "var(--accent)", letterSpacing: "0.3em", marginBottom: 16 }}>{section.tag}</p>
                <h2 className="h-display" style={{ fontSize: 28, color: "var(--foreground)", marginBottom: 12 }}>{section.title}</h2>
                <p className="prose-body" style={{ fontSize: "0.9rem", margin: "0 0 20px" }}>{section.description}</p>
                <p className="mono-label" style={{ fontSize: 10, letterSpacing: "0.2em", textTransform: "uppercase", color: "var(--accent)" }}>Enter →</p>
              </Link>
            ))}
          </div>
        </section>

        {/* ── WHO THIS IS FOR ── */}
        <section className="animate-fade-up-slow">
          <p className="section-label" style={{ marginBottom: 24 }}>Who this is for</p>
          <div className="grid-3col-subtle">
            {audienceCards.map((item) => (
              <article key={item.title} style={{ background: "var(--background)", padding: "28px 24px" }}>
                <h3 className="mono-label" style={{ fontSize: 12, letterSpacing: "0.12em", color: "var(--foreground)", marginBottom: 12, lineHeight: 1.4, textTransform: "uppercase" }}>{item.title}</h3>
                <p className="prose-body" style={{ fontSize: "0.9rem", margin: 0 }}>{item.summary}</p>
              </article>
            ))}
          </div>
        </section>

        {/* ── START HERE ── */}
        <section className="animate-fade-up-slow" style={{ background: "var(--surface)", border: "1px solid var(--border)", padding: "40px 32px" }}>
          <p className="section-label" style={{ marginBottom: 20 }}>Start here</p>
          <h2 className="h-display" style={{ fontSize: "clamp(24px,4vw,44px)", maxWidth: 620, marginBottom: 36 }}>
            Three paths into the content — pick the one that matches where you are.
          </h2>
          <div className="grid-3col" style={{ background: "var(--border)" }}>
            {startHereLinks.map((item) => (
              <Link key={item.title} href={item.href} style={{ display: "block", background: "var(--surface-raised)", padding: "24px 20px", textDecoration: "none", transition: "background 0.2s" }}
                onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.background = "#202020")}
                onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.background = "var(--surface-raised)")}
              >
                <p className="mono-label" style={{ fontSize: 9, letterSpacing: "0.25em", color: "var(--accent)", textTransform: "uppercase", marginBottom: 12 }}>{item.label}</p>
                <h3 className="h-display" style={{ fontSize: 22, color: "var(--foreground)", marginBottom: 10 }}>{item.title}</h3>
                <p className="prose-body" style={{ fontSize: "0.88rem", margin: 0 }}>{item.summary}</p>
              </Link>
            ))}
          </div>
        </section>

      </div>
    </main>
  );
}
