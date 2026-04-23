"use client";
import Link from "next/link";

export default function SlidingWindowBlog() {
  return (
    <main style={{ minHeight: "100vh", color: "var(--foreground)" }}>
      <article
        style={{
          maxWidth: 760,
          margin: "0 auto",
          padding: "72px 5vw 120px",
        }}
      >
        {/* ── BACK ── */}
        <Link
          href="/blog/category/python-coding"
          className="mono-label"
          style={{ fontSize: 10, letterSpacing: "0.2em", color: "var(--muted)", textTransform: "uppercase", textDecoration: "none", transition: "color 0.15s" }}
          onMouseEnter={(e) => ((e.target as HTMLAnchorElement).style.color = "var(--accent)")}
          onMouseLeave={(e) => ((e.target as HTMLAnchorElement).style.color = "var(--muted)")}
        >
          ← Python Coding
        </Link>

        {/* ── HEADER ── */}
        <div style={{ marginTop: 36, marginBottom: 48 }}>
          <p className="section-label" style={{ marginBottom: 20 }}>
            Technique · Python DSA
          </p>
          <h1
            className="h-display"
            style={{ fontSize: "clamp(36px,5vw,64px)", lineHeight: 1, marginBottom: 24 }}
          >
            Mastering
            <br />
            <span style={{ color: "var(--accent)" }}>Sliding Window</span>
            <br />
            in Python
          </h1>
          <p
            className="prose-body"
            style={{ fontSize: "1.1rem", fontStyle: "italic" }}
          >
            A powerful pattern to optimise problems involving subarrays and
            substrings — without nested loops.
          </p>
        </div>

        <div style={{ borderTop: "1px solid var(--border-subtle)", paddingTop: 48, display: "flex", flexDirection: "column", gap: 40 }}>

          {/* ── WHAT IS IT ── */}
          <section>
            <p className="section-label" style={{ marginBottom: 16 }}>
              What is Sliding Window?
            </p>
            <p className="prose-body" style={{ fontSize: "1.05rem", margin: 0 }}>
              Sliding window is a technique where we maintain a{" "}
              <strong style={{ color: "var(--foreground)" }}>window</strong> (a
              contiguous subarray) and move it step-by-step instead of
              recomputing values from scratch on every iteration. The key
              observation: when you slide the window one position, you only need
              to account for one element entering and one leaving.
            </p>
          </section>

          {/* ── FIXED WINDOW ── */}
          <section>
            <p className="section-label" style={{ marginBottom: 16 }}>
              Fixed window — max sum of k elements
            </p>
            <p className="prose-body" style={{ marginBottom: 20 }}>
              The window size stays constant. Compute the first window sum, then
              slide by adding the incoming element and subtracting the outgoing
              one.
            </p>
            <div
              style={{
                background: "var(--surface-raised)",
                border: "1px solid var(--border)",
                padding: "24px 28px",
                overflowX: "auto",
              }}
            >
              <pre
                className="mono-label"
                style={{ fontSize: 13, lineHeight: 1.8, color: "#e8e0d0", whiteSpace: "pre", margin: 0 }}
              >{`def max_sum_subarray(arr, k):
    window_sum = sum(arr[:k])   # first window
    max_sum = window_sum

    for i in range(k, len(arr)):
        window_sum += arr[i]        # add incoming
        window_sum -= arr[i - k]    # remove outgoing
        max_sum = max(max_sum, window_sum)

    return max_sum`}</pre>
            </div>
            <p className="prose-body" style={{ marginTop: 14, fontSize: "0.9rem" }}>
              <strong style={{ color: "var(--foreground)" }}>Complexity:</strong>{" "}
              O(n) time, O(1) space. The naive approach (recompute each window
              from scratch) is O(n·k).
            </p>
          </section>

          {/* ── VARIABLE WINDOW ── */}
          <section>
            <p className="section-label" style={{ marginBottom: 16 }}>
              Variable window — longest unique-character substring
            </p>
            <p className="prose-body" style={{ marginBottom: 20 }}>
              Here the window expands with the{" "}
              <span style={{ fontFamily: "var(--font-ibm-mono)", color: "var(--accent)", fontSize: 13 }}>right</span>{" "}
              pointer, and contracts from the{" "}
              <span style={{ fontFamily: "var(--font-ibm-mono)", color: "var(--green)", fontSize: 13 }}>left</span>{" "}
              when a constraint is violated.
            </p>
            <div
              style={{
                background: "var(--surface-raised)",
                border: "1px solid var(--border)",
                padding: "24px 28px",
                overflowX: "auto",
              }}
            >
              <pre
                className="mono-label"
                style={{ fontSize: 13, lineHeight: 1.8, color: "#e8e0d0", whiteSpace: "pre", margin: 0 }}
              >{`def longest_substring(s):
    seen  = set()
    left  = 0
    max_len = 0

    for right in range(len(s)):
        while s[right] in seen:   # constraint violated
            seen.remove(s[left])
            left += 1             # shrink from left

        seen.add(s[right])
        max_len = max(max_len, right - left + 1)

    return max_len`}</pre>
            </div>
          </section>

          {/* ── PATTERNS ── */}
          <section>
            <p className="section-label" style={{ marginBottom: 20 }}>
              Common patterns
            </p>
            <div
              style={{
                display: "grid",
                gap: 1,
                gridTemplateColumns: "1fr 1fr",
                background: "var(--border-subtle)",
              }}
            >
              {[
                ["Fixed window (k)", "Window size is constant. Typical in max/min sum of k elements."],
                ["Variable window", "Window expands until a constraint breaks, then contracts."],
                ["Substring problems", "Use a frequency map inside the window to track character counts."],
                ["Min / max window", "Deque-based windows give O(n) for maximum-in-sliding-window."],
              ].map(([title, body]) => (
                <div
                  key={title}
                  style={{ background: "var(--surface)", padding: "20px 18px" }}
                >
                  <p
                    className="mono-label"
                    style={{ fontSize: 11, color: "var(--accent)", letterSpacing: "0.1em", marginBottom: 8 }}
                  >
                    {title}
                  </p>
                  <p className="prose-body" style={{ fontSize: "0.88rem", margin: 0 }}>
                    {body}
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* ── WHEN TO USE ── */}
          <section
            style={{
              background: "var(--surface)",
              border: "1px solid var(--border)",
              borderLeft: "3px solid var(--accent)",
              padding: "24px 28px",
            }}
          >
            <p className="section-label" style={{ marginBottom: 16 }}>
              When to use it
            </p>
            <ul style={{ margin: 0, padding: 0, listStyle: "none", display: "flex", flexDirection: "column", gap: 10 }}>
              {[
                "Data is a contiguous subarray or substring",
                "You need to optimise a nested loop over adjacent elements",
                "The problem mentions 'maximum / minimum of exactly k elements'",
                "Constraints on a subarray can be maintained incrementally",
              ].map((item) => (
                <li
                  key={item}
                  className="prose-body"
                  style={{ fontSize: "0.95rem", paddingLeft: 16, borderLeft: "1px solid var(--border-subtle)" }}
                >
                  {item}
                </li>
              ))}
            </ul>
          </section>
        </div>
      </article>
    </main>
  );
}
