"use client";
import Link from "next/link";
import { systemDesignChapters, type Difficulty } from "@/lib/study";

const difficultyColour: Record<Difficulty, { border: string; text: string; bg: string }> = {
  Beginner:     { border: "#6ab87a", text: "#6ab87a", bg: "rgba(106,184,122,0.1)" },
  Intermediate: { border: "#e8a020", text: "#e8a020", bg: "rgba(232,160,32,0.1)"  },
  Advanced:     { border: "#c0392b", text: "#ef5a48", bg: "rgba(192,57,43,0.1)"   },
};

export default function SystemDesignPage() {
  return (
    <main style={{ minHeight: "100vh", color: "var(--foreground)" }}>
      <div className="page-wrap section-gap" style={{ maxWidth: 1300 }}>

        {/* ── BACK ── */}
        <div>
          <Link
            href="/study"
            className="mono-label hover:text-[var(--accent)] transition-colors"
            style={{ fontSize: 10, letterSpacing: "0.2em", color: "var(--muted)", textTransform: "uppercase", textDecoration: "none" }}
          >
            ← All tracks
          </Link>
        </div>

        {/* ── HERO ── */}
        <section className="animate-fade-up">
          <p className="section-label" style={{ marginBottom: 20 }}>
            System Design track
          </p>

          <h1 className="h-display" style={{ fontSize: "clamp(40px,6.5vw,96px)", maxWidth: 900, lineHeight: 0.95 }}>
            From 10 Users
            <br />
            <span style={{ color: "var(--accent)" }}>to 10 Million.</span>
          </h1>

          <p className="prose-body" style={{ marginTop: 28, maxWidth: 580, fontSize: "1.1rem" }}>
            You are the founding engineer at a startup on the brink of explosive growth.
            Every chapter is a crisis. Every solution is a lesson. Every decision shapes
            your architecture. This is not just learning — it is{" "}
            <em>surviving</em> the scale.
          </p>

          {/* Scale stats */}
          <div style={{ marginTop: 40, display: "flex", flexWrap: "wrap", gap: 1, background: "var(--border-subtle)" }}>
            {[
              { value: "12", label: "Chapters" },
              { value: "0→∞", label: "Scale journey" },
              { value: "100%", label: "Narrative driven" },
              { value: "3", label: "Difficulty levels" },
            ].map((stat) => (
              <div
                key={stat.label}
                style={{ background: "var(--surface)", padding: "20px 32px", flex: "1 1 140px" }}
              >
                <p
                  className="h-display"
                  style={{ fontSize: "clamp(28px,4vw,44px)", color: "var(--accent)", marginBottom: 4 }}
                >
                  {stat.value}
                </p>
                <p className="mono-label" style={{ fontSize: 10, color: "var(--muted)", letterSpacing: "0.2em", textTransform: "uppercase" }}>
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* ── DIFFICULTY LEGEND ── */}
        <div style={{ display: "flex", gap: 20, flexWrap: "wrap", alignItems: "center" }}>
          <p className="mono-label" style={{ fontSize: 10, color: "var(--muted)", letterSpacing: "0.18em", textTransform: "uppercase" }}>
            Difficulty:
          </p>
          {(["Beginner", "Intermediate", "Advanced"] as Difficulty[]).map((d) => (
            <span
              key={d}
              className="mono-label"
              style={{
                fontSize: 10,
                letterSpacing: "0.14em",
                textTransform: "uppercase",
                color: difficultyColour[d].text,
                background: difficultyColour[d].bg,
                border: `1px solid ${difficultyColour[d].border}`,
                padding: "4px 12px",
              }}
            >
              {d}
            </span>
          ))}
        </div>

        {/* ── CHAPTER CARDS ── */}
        <section>
          <p className="section-label" style={{ marginBottom: 28 }}>
            The Scaling Saga — 12 Chapters
          </p>

          <div className="grid-auto-subtle" style={{ background: "var(--border-subtle)" }}>
            {systemDesignChapters.map((chapter) => {
              const diff = difficultyColour[chapter.difficulty];
              return (
                <article
                  key={chapter.slug}
                  style={{
                    background: "var(--surface)",
                    padding: "28px 24px",
                    display: "flex",
                    flexDirection: "column",
                    gap: 0,
                    position: "relative",
                    cursor: chapter.available ? "pointer" : "default",
                    transition: "background 0.2s",
                  }}
                  onMouseEnter={(e) => {
                    if (chapter.available)
                      (e.currentTarget as HTMLElement).style.background = "var(--surface-raised)";
                  }}
                  onMouseLeave={(e) =>
                    ((e.currentTarget as HTMLElement).style.background = "var(--surface)")
                  }
                >
                  {/* Top stripe on hover (amber for available, muted for locked) */}
                  <div
                    style={{
                      position: "absolute",
                      top: 0,
                      left: 0,
                      right: 0,
                      height: 2,
                      background: chapter.available ? "var(--accent)" : "var(--border)",
                    }}
                  />

                  {/* Chapter number + difficulty */}
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 16 }}>
                    <p
                      className="mono-label"
                      style={{ fontSize: 9, letterSpacing: "0.3em", color: "var(--accent)", textTransform: "uppercase" }}
                    >
                      Chapter {chapter.number}
                    </p>
                    <span
                      className="mono-label"
                      style={{
                        fontSize: 9,
                        letterSpacing: "0.12em",
                        textTransform: "uppercase",
                        color: diff.text,
                        background: diff.bg,
                        border: `1px solid ${diff.border}`,
                        padding: "3px 10px",
                      }}
                    >
                      {chapter.difficulty}
                    </span>
                  </div>

                  {/* Title */}
                  <h2 className="h-display" style={{ fontSize: "clamp(20px,2vw,26px)", marginBottom: 12 }}>
                    {chapter.title}
                  </h2>

                  {/* Description */}
                  <p className="prose-body" style={{ fontSize: "0.88rem", marginBottom: 16, flex: 1 }}>
                    {chapter.description}
                  </p>

                  {/* Crisis callout */}
                  <div
                    style={{
                      background: "rgba(232,160,32,0.05)",
                      borderLeft: "2px solid var(--accent)",
                      padding: "10px 14px",
                      marginBottom: 16,
                    }}
                  >
                    <p className="mono-label" style={{ fontSize: 10, color: "var(--muted)", letterSpacing: "0.08em", marginBottom: 4 }}>
                      CRISIS
                    </p>
                    <p
                      className="prose-body"
                      style={{ fontSize: "0.85rem", fontStyle: "italic", color: "var(--muted-mid)", margin: 0 }}
                    >
                      &ldquo;{chapter.crisis}&rdquo;
                    </p>
                  </div>

                  {/* Topic tags */}
                  <div style={{ display: "flex", flexWrap: "wrap", gap: 6, marginBottom: 20 }}>
                    {chapter.topics.map((topic) => (
                      <span
                        key={topic}
                        className="mono-label"
                        style={{
                          fontSize: 9,
                          letterSpacing: "0.1em",
                          textTransform: "uppercase",
                          color: "var(--muted)",
                          border: "1px solid var(--border)",
                          padding: "4px 10px",
                        }}
                      >
                        {topic}
                      </span>
                    ))}
                  </div>

                  {/* Footer */}
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                      paddingTop: 16,
                      borderTop: "1px solid var(--border-subtle)",
                    }}
                  >
                    <p className="mono-label" style={{ fontSize: 10, color: "var(--muted)", letterSpacing: "0.1em" }}>
                      👥 {chapter.scale}
                    </p>

                    {chapter.available ? (
                      <Link
                        href={`/study/system-design/${chapter.slug}`}
                        className="mono-label"
                        style={{
                          fontSize: 10,
                          letterSpacing: "0.18em",
                          textTransform: "uppercase",
                          color: "var(--accent)",
                          textDecoration: "none",
                          transition: "letter-spacing 0.2s",
                        }}
                      >
                        Start chapter →
                      </Link>
                    ) : (
                      <span
                        className="mono-label"
                        style={{
                          fontSize: 9,
                          letterSpacing: "0.18em",
                          textTransform: "uppercase",
                          color: "var(--border)",
                          border: "1px solid var(--border-subtle)",
                          padding: "3px 10px",
                        }}
                      >
                        Coming soon
                      </span>
                    )}
                  </div>
                </article>
              );
            })}
          </div>
        </section>

        {/* ── BOTTOM CTA ── */}
        <section
          style={{
            background: "var(--surface)",
            border: "1px solid var(--border)",
            borderLeft: "3px solid var(--accent)",
            padding: "36px 32px",
          }}
        >
          <p className="section-label" style={{ marginBottom: 16 }}>How chapters work</p>
          <p className="h-display" style={{ fontSize: "clamp(20px,3vw,34px)", maxWidth: 640, marginBottom: 20 }}>
            Each chapter starts with a crisis. You read the situation, then learn the
            concepts that solve it.
          </p>
          <p className="prose-body" style={{ maxWidth: 560 }}>
            Chapters will be published one by one. When a chapter is ready, the
            &ldquo;Coming soon&rdquo; badge becomes a clickable &ldquo;Start chapter&rdquo; link.
            The content order follows the scale arc — start from Chapter 01 and work forward.
          </p>
        </section>

      </div>
    </main>
  );
}
