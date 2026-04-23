import Link from "next/link";
import { studyTracks } from "@/lib/study";

export default function Study() {
  return (
    <main style={{ minHeight: "100vh", color: "var(--foreground)" }}>
      <div className="page-wrap section-gap">

        {/* ── HERO ── */}
        <section>
          <p className="section-label" style={{ marginBottom: 20 }}>Study materials</p>
          <h1 className="h-display" style={{ fontSize: "clamp(34px,5.5vw,72px)", maxWidth: 640 }}>
            Learn the Concept,{" "}
            <span style={{ color: "var(--accent)" }}>Not Just the Answer.</span>
          </h1>
          <p className="prose-body" style={{ marginTop: 18, maxWidth: 520, fontSize: "1rem" }}>
            Structured learning paths with editorial-depth lessons. Each topic defines the problem clearly, builds the intuition, and turns it into interview-ready reasoning step by step.
          </p>
        </section>

        {/* ── TRACK CARDS ── */}
        <section>
          <p className="section-label" style={{ marginBottom: 24 }}>Learning tracks</p>
          <div className="grid-auto-subtle">
            {studyTracks.map((track) => {
              const isActive = track.slug === "python";
              return (
                <Link key={track.slug} href={isActive ? "/study/python" : "/study"}
                  className="hover:bg-[var(--surface-raised)] transition-colors"
                  style={{ display: "block", background: "var(--surface)", padding: "32px 24px", textDecoration: "none", opacity: isActive ? 1 : 0.55 }}
                >
                  <p className="mono-label" style={{ fontSize: 9, letterSpacing: "0.28em", color: "var(--accent)", textTransform: "uppercase", marginBottom: 14 }}>
                    {isActive ? "Active track" : "Coming soon"}
                  </p>
                  <h2 className="h-display" style={{ fontSize: 26, marginBottom: 10 }}>{track.title}</h2>
                  <p className="prose-body" style={{ fontSize: "0.9rem", marginBottom: 20 }}>{track.description}</p>
                  {isActive && (
                    <p className="mono-label" style={{ fontSize: 10, color: "var(--accent)", letterSpacing: "0.18em", textTransform: "uppercase" }}>Open track →</p>
                  )}
                </Link>
              );
            })}
          </div>
        </section>

        {/* ── PHILOSOPHY BANNER ── */}
        <section style={{ background: "var(--surface)", border: "1px solid var(--border)", borderLeft: "3px solid var(--accent)", padding: "32px 28px", maxWidth: 680 }}>
          <p className="section-label" style={{ marginBottom: 16 }}>Study philosophy</p>
          <p className="h-display" style={{ fontSize: "clamp(20px,3vw,32px)", color: "var(--foreground)" }}>
            Every lesson starts with a clear problem, builds intuition with an example, then turns that intuition into code.
          </p>
        </section>

      </div>
    </main>
  );
}
