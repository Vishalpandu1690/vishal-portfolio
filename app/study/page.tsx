"use client";
import Link from "next/link";
import { studyTracks } from "@/lib/study";

export default function Study() {
  return (
    <main style={{ minHeight: "100vh", color: "var(--foreground)" }}>
      <div
        style={{
          maxWidth: 1200,
          margin: "0 auto",
          padding: "72px 5vw 120px",
          display: "flex",
          flexDirection: "column",
          gap: 64,
        }}
      >
        {/* ── HERO ── */}
        <section>
          <p className="section-label" style={{ marginBottom: 20 }}>
            Study materials
          </p>
          <h1
            className="h-display"
            style={{ fontSize: "clamp(36px,5.5vw,72px)", maxWidth: 640 }}
          >
            Learn the Concept,{" "}
            <span style={{ color: "var(--accent)" }}>Not Just the Answer.</span>
          </h1>
          <p
            className="prose-body"
            style={{ marginTop: 20, maxWidth: 520, fontSize: "1rem" }}
          >
            Structured learning paths with editorial-depth lessons. Each topic
            defines the problem clearly, builds the intuition, and turns it
            into interview-ready reasoning step by step.
          </p>
        </section>

        {/* ── TRACK CARDS ── */}
        <section>
          <p className="section-label" style={{ marginBottom: 24 }}>
            Learning tracks
          </p>
          <div
            style={{
              display: "grid",
              gap: 1,
              gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
              background: "var(--border-subtle)",
            }}
          >
            {studyTracks.map((track) => {
              const isActive = track.slug === "python";
              return (
                <Link
                  key={track.slug}
                  href={isActive ? "/study/python" : "/study"}
                  style={{
                    display: "block",
                    background: "var(--surface)",
                    padding: "32px 24px",
                    textDecoration: "none",
                    transition: "background 0.2s",
                    opacity: isActive ? 1 : 0.55,
                  }}
                  onMouseEnter={(e) => {
                    if (isActive)
                      (e.currentTarget as HTMLElement).style.background =
                        "var(--surface-raised)";
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLElement).style.background =
                      "var(--surface)";
                  }}
                >
                  <p
                    className="mono-label"
                    style={{ fontSize: 9, letterSpacing: "0.28em", color: "var(--accent)", textTransform: "uppercase", marginBottom: 14 }}
                  >
                    {isActive ? "Active track" : "Coming soon"}
                  </p>
                  <h2
                    className="h-display"
                    style={{ fontSize: 26, marginBottom: 10 }}
                  >
                    {track.title}
                  </h2>
                  <p className="prose-body" style={{ fontSize: "0.9rem", marginBottom: 20 }}>
                    {track.description}
                  </p>
                  {isActive && (
                    <p
                      className="mono-label"
                      style={{ fontSize: 10, color: "var(--accent)", letterSpacing: "0.18em", textTransform: "uppercase" }}
                    >
                      Open track →
                    </p>
                  )}
                </Link>
              );
            })}
          </div>
        </section>

        {/* ── PHILOSOPHY BANNER ── */}
        <section
          style={{
            background: "var(--surface)",
            border: "1px solid var(--border)",
            borderLeft: "3px solid var(--accent)",
            padding: "36px 32px",
            maxWidth: 700,
          }}
        >
          <p className="section-label" style={{ marginBottom: 16 }}>
            Study philosophy
          </p>
          <p
            className="h-display"
            style={{ fontSize: "clamp(22px,3vw,34px)", color: "var(--foreground)" }}
          >
            Every lesson starts with a clear problem, builds intuition with an
            example, then turns that intuition into code.
          </p>
        </section>
      </div>
    </main>
  );
}
