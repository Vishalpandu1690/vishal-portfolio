"use client";
const projects = [
  {
    tag: "Data Engineering",
    title: "Hive to Unity Catalog Migration",
    description:
      "Automated migration of a large Databricks codebase from Hive metastore to Unity Catalog using Python and LibCST for AST-level code transformations.",
    highlights: [
      "Parsed thousands of Python notebook files with LibCST",
      "Automatically rewrote catalog references and table paths",
      "Reduced manual migration effort from weeks to hours",
    ],
    status: "Completed",
  },
  {
    tag: "Cloud / AWS",
    title: "S3 Access Log Optimization",
    description:
      "Redesigned PySpark jobs processing S3 access logs to reduce runtime and cloud spend through partition pruning, broadcast joins, and schema evolution handling.",
    highlights: [
      "Reduced job runtime by ~60% through partition-aware reads",
      "Avoided full-scan anti-patterns with predicate pushdown",
      "Added incremental processing to eliminate reprocessing costs",
    ],
    status: "Completed",
  },
];

export default function Projects() {
  return (
    <main style={{ minHeight: "100vh", color: "var(--foreground)" }}>
      <div
        style={{
          maxWidth: 1100,
          margin: "0 auto",
          padding: "72px 5vw 120px",
          display: "flex",
          flexDirection: "column",
          gap: 64,
        }}
      >
        {/* ── HEADER ── */}
        <section>
          <p className="section-label" style={{ marginBottom: 20 }}>
            Projects
          </p>
          <h1
            className="h-display"
            style={{ fontSize: "clamp(36px,5.5vw,72px)", maxWidth: 640 }}
          >
            Built While{" "}
            <span style={{ color: "var(--accent)" }}>Learning in Public.</span>
          </h1>
          <p
            className="prose-body"
            style={{ marginTop: 20, maxWidth: 500, fontSize: "1rem" }}
          >
            Hands-on work that connects theory with implementation. Each project
            started with a real engineering problem and ended with something that
            taught me more than the problem itself.
          </p>
        </section>

        {/* ── PROJECT CARDS ── */}
        <section style={{ display: "flex", flexDirection: "column", gap: 1, background: "var(--border-subtle)" }}>
          {projects.map((project) => (
            <article
              key={project.title}
              style={{
                background: "var(--surface)",
                padding: "36px 32px",
              }}
            >
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 20, flexWrap: "wrap", gap: 12 }}>
                <p
                  className="mono-label"
                  style={{ fontSize: 9, letterSpacing: "0.28em", color: "var(--accent)", textTransform: "uppercase" }}
                >
                  {project.tag}
                </p>
                <span
                  className="mono-label"
                  style={{ fontSize: 9, letterSpacing: "0.2em", color: "var(--green)", textTransform: "uppercase", border: "1px solid var(--green)", padding: "3px 10px" }}
                >
                  {project.status}
                </span>
              </div>

              <h2 className="h-display" style={{ fontSize: 32, marginBottom: 16 }}>
                {project.title}
              </h2>

              <p className="prose-body" style={{ fontSize: "1rem", maxWidth: 640, marginBottom: 24 }}>
                {project.description}
              </p>

              <div
                style={{
                  borderLeft: "2px solid var(--border)",
                  paddingLeft: 20,
                  display: "flex",
                  flexDirection: "column",
                  gap: 10,
                }}
              >
                {project.highlights.map((h) => (
                  <p
                    key={h}
                    className="mono-label"
                    style={{ fontSize: 12, color: "var(--muted-mid)", letterSpacing: "0.04em" }}
                  >
                    <span style={{ color: "var(--accent)", marginRight: 8 }}>→</span>
                    {h}
                  </p>
                ))}
              </div>
            </article>
          ))}
        </section>

        {/* ── MORE COMING ── */}
        <section
          style={{
            background: "var(--surface)",
            border: "1px dashed var(--border)",
            padding: "36px 32px",
            textAlign: "center",
          }}
        >
          <p className="section-label" style={{ justifyContent: "center", marginBottom: 14 }}>
            More in progress
          </p>
          <p
            className="h-display"
            style={{ fontSize: 26, color: "var(--muted)" }}
          >
            More projects will be published here as they are completed.
          </p>
        </section>
      </div>
    </main>
  );
}