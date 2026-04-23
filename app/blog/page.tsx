"use client";
import Link from "next/link";
import { blogCategories, blogPosts, getPostsByCategory } from "@/lib/blog";

export default function Blog() {
  const featuredPost = blogPosts.find((p) => p.featured) ?? blogPosts[0];

  return (
    <main style={{ minHeight: "100vh", color: "var(--foreground)" }}>
      <div
        style={{
          maxWidth: 1200,
          margin: "0 auto",
          padding: "72px 5vw 120px",
          display: "flex",
          flexDirection: "column",
          gap: 72,
        }}
      >
        {/* ── HERO ── */}
        <section
          style={{
            display: "grid",
            gap: 40,
            gridTemplateColumns: "minmax(0,1.4fr) minmax(260px,0.8fr)",
            alignItems: "end",
          }}
        >
          <div>
            <p className="section-label" style={{ marginBottom: 20 }}>
              Blog
            </p>
            <h1
              className="h-display"
              style={{ fontSize: "clamp(36px,5.5vw,72px)", maxWidth: 640 }}
            >
              Learn Through Categories,{" "}
              <span style={{ color: "var(--accent)" }}>Not Chronology.</span>
            </h1>
            <p
              className="prose-body"
              style={{ marginTop: 20, maxWidth: 480, fontSize: "1rem" }}
            >
              Writing organised around clear topic lanes — computer science,
              cloud, data, AI/ML, system design, and Python.
            </p>
          </div>

          {/* Featured post */}
          <aside
            style={{
              background: "var(--surface)",
              border: "1px solid var(--border)",
              borderTop: "3px solid var(--accent)",
              padding: "28px 24px",
            }}
          >
            <p
              className="mono-label"
              style={{ fontSize: 9, letterSpacing: "0.28em", color: "var(--accent)", textTransform: "uppercase", marginBottom: 14 }}
            >
              Featured article
            </p>
            <h2
              style={{
                fontFamily: "var(--font-bebas), sans-serif",
                fontSize: 24,
                color: "var(--foreground)",
                marginBottom: 10,
              }}
            >
              {featuredPost.title}
            </h2>
            <p className="prose-body" style={{ fontSize: "0.9rem", marginBottom: 16 }}>
              {featuredPost.excerpt}
            </p>
            <div
              className="mono-label"
              style={{ fontSize: 10, color: "var(--muted)", letterSpacing: "0.18em", display: "flex", gap: 12, marginBottom: 20 }}
            >
              <span>{featuredPost.publishedAt}</span>
              <span style={{ color: "var(--accent)" }}>·</span>
              <span>{featuredPost.readingTime}</span>
            </div>
            <Link
              href={`/blog/${featuredPost.slug}`}
              className="btn-amber"
              style={{ fontSize: 10, padding: "10px 20px" }}
            >
              Read article →
            </Link>
          </aside>
        </section>

        {/* ── CATEGORY CARDS ── */}
        <section>
          <p className="section-label" style={{ marginBottom: 24 }}>
            Browse by category
          </p>
          <div
            style={{
              display: "grid",
              gap: 1,
              gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
              background: "var(--border-subtle)",
            }}
          >
            {blogCategories.map((category) => {
              const posts = getPostsByCategory(category.slug);
              const label =
                posts.length === 1 ? "1 article" : `${posts.length} articles`;
              return (
                <Link
                  key={category.slug}
                  href={`/blog/category/${category.slug}`}
                  style={{
                    display: "block",
                    background: "var(--surface)",
                    padding: "28px 24px",
                    textDecoration: "none",
                    transition: "background 0.2s",
                  }}
                  onMouseEnter={(e) =>
                    ((e.currentTarget as HTMLElement).style.background =
                      "var(--surface-raised)")
                  }
                  onMouseLeave={(e) =>
                    ((e.currentTarget as HTMLElement).style.background =
                      "var(--surface)")
                  }
                >
                  <p
                    className="mono-label"
                    style={{ fontSize: 9, color: "var(--accent)", letterSpacing: "0.25em", textTransform: "uppercase", marginBottom: 12 }}
                  >
                    {label}
                  </p>
                  <h2
                    className="h-display"
                    style={{ fontSize: 22, marginBottom: 10 }}
                  >
                    {category.name}
                  </h2>
                  <p
                    className="prose-body"
                    style={{ fontSize: "0.88rem", margin: "0 0 20px" }}
                  >
                    {category.description}
                  </p>
                  <p
                    className="mono-label"
                    style={{ fontSize: 10, color: "var(--accent)", letterSpacing: "0.18em", textTransform: "uppercase" }}
                  >
                    Explore →
                  </p>
                </Link>
              );
            })}
          </div>
        </section>

        {/* ── LATEST POSTS ── */}
        <section>
          <p className="section-label" style={{ marginBottom: 24 }}>
            Latest writing
          </p>
          <div style={{ display: "flex", flexDirection: "column", gap: 1, background: "var(--border-subtle)" }}>
            {blogPosts.map((post) => {
              const cat = blogCategories.find((c) => c.slug === post.category);
              return (
                <Link
                  key={post.slug}
                  href={`/blog/${post.slug}`}
                  style={{
                    display: "block",
                    background: "var(--surface)",
                    padding: "24px",
                    textDecoration: "none",
                    transition: "background 0.2s",
                  }}
                  onMouseEnter={(e) =>
                    ((e.currentTarget as HTMLElement).style.background =
                      "var(--surface-raised)")
                  }
                  onMouseLeave={(e) =>
                    ((e.currentTarget as HTMLElement).style.background =
                      "var(--surface)")
                  }
                >
                  <div
                    className="mono-label"
                    style={{ fontSize: 10, color: "var(--muted)", letterSpacing: "0.18em", textTransform: "uppercase", display: "flex", gap: 12, marginBottom: 10 }}
                  >
                    <span>{cat?.name}</span>
                    <span style={{ color: "var(--accent)" }}>·</span>
                    <span>{post.publishedAt}</span>
                    <span style={{ color: "var(--accent)" }}>·</span>
                    <span>{post.readingTime}</span>
                  </div>
                  <h3
                    className="h-display"
                    style={{ fontSize: 24, marginBottom: 8 }}
                  >
                    {post.title}
                  </h3>
                  <p className="prose-body" style={{ fontSize: "0.9rem", margin: 0 }}>
                    {post.excerpt}
                  </p>
                </Link>
              );
            })}
          </div>
        </section>
      </div>
    </main>
  );
}
