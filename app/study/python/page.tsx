import Link from "next/link";
import { pythonStudyModules, studyTracks } from "@/lib/study";

const pythonTrack = studyTracks.find((t) => t.slug === "python");

export default function PythonStudyPage() {
  return (
    <main style={{ minHeight: "100vh", color: "var(--foreground)" }}>
      <div className="page-wrap section-gap" style={{ maxWidth: 1100 }}>

        {/* ── HEADER ── */}
        <section>
          <Link href="/study" className="mono-label hover:text-[var(--accent)] transition-colors"
            style={{ fontSize: 10, letterSpacing: "0.2em", color: "var(--muted)", textTransform: "uppercase", textDecoration: "none" }}
          >
            ← All tracks
          </Link>
          <p className="section-label" style={{ marginTop: 28, marginBottom: 16 }}>Python track</p>
          <h1 className="h-display" style={{ fontSize: "clamp(34px,5vw,68px)", maxWidth: 640 }}>
            Python Foundations<br />
            <span style={{ color: "var(--accent)" }}>& DSA Patterns.</span>
          </h1>
          <p className="prose-body" style={{ marginTop: 16, maxWidth: 500, fontSize: "1rem" }}>{pythonTrack?.description}</p>
        </section>

        {/* ── TRACK SECTIONS ── */}
        {pythonTrack?.sections && (
          <section>
            <p className="section-label" style={{ marginBottom: 24 }}>Track overview</p>
            <div className="grid-2col-subtle">
              {pythonTrack.sections.map((section) => (
                <div key={section.title} style={{ background: "var(--surface)", padding: "24px" }}>
                  <h2 className="h-display" style={{ fontSize: 22, marginBottom: 10 }}>{section.title}</h2>
                  <p className="prose-body" style={{ fontSize: "0.88rem", margin: 0 }}>{section.description}</p>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* ── DSA MODULES ── */}
        <section>
          <p className="section-label" style={{ marginBottom: 24 }}>DSA patterns in Python</p>
          <p className="h-display" style={{ fontSize: "clamp(20px,3vw,32px)", maxWidth: 580, marginBottom: 32 }}>
            Start with patterns that teach reusable thinking.
          </p>
          <div className="stack-list">
            {pythonStudyModules.map((module) => (
              <Link key={module.slug} href={module.href}
                className="hover:bg-[var(--surface-raised)] transition-colors"
                style={{ display: "block", background: "var(--surface)", padding: "28px 24px", textDecoration: "none" }}
              >
                <div style={{ display: "flex", gap: 16, alignItems: "center", marginBottom: 12 }}>
                  <p className="mono-label" style={{ fontSize: 9, letterSpacing: "0.25em", color: "var(--accent)", textTransform: "uppercase" }}>{module.level}</p>
                  <span style={{ width: 1, height: 10, background: "var(--border)" }} />
                  <p className="mono-label" style={{ fontSize: 9, letterSpacing: "0.20em", color: "var(--muted)", textTransform: "uppercase" }}>Python DSA</p>
                </div>
                <h3 className="h-display" style={{ fontSize: 26, marginBottom: 8 }}>{module.title}</h3>
                <p className="prose-body" style={{ fontSize: "0.9rem", marginBottom: 16 }}>{module.description}</p>
                <p className="mono-label" style={{ fontSize: 10, color: "var(--accent)", letterSpacing: "0.18em", textTransform: "uppercase" }}>Open lesson →</p>
              </Link>
            ))}
          </div>
        </section>

      </div>
    </main>
  );
}
