"use client";
import Link from "next/link";
import { blogCategories, blogPosts, getPostsByCategory } from "@/lib/blog";

export default function Blog() {
  const featuredPost = blogPosts.find((p) => p.featured) ?? blogPosts[0];

  return (
    <main style={{ minHeight: "100vh", color: "var(--foreground)" }}>
      <div className="page-wrap section-gap" style={{ maxWidth: 1200 }}>

        {/* ── HERO ── */}
        <section className="grid-hero-blog">
          <div>
            <p className="section-label" style={{ marginBottom: 20 }}>Blog</p>
            <h1 className="h-display" style={{ fontSize: "clamp(34px,5.5vw,72px)", maxWidth: 640 }}>
              Learn Through Categories,{" "}
              <span style={{ color: "var(--accent)" }}>Not Chronology.</span>
            </h1>
            <p className="prose-body" style={{ marginTop: 18, maxWidth: 480, fontSize: "1rem" }}>
              Writing organised around clear topic lanes — computer science, cloud, data, AI/ML, system design, and Python.
            </p>
          </div>

          {/* Featured post */}
          <aside style={{ background: "var(--surface)", border: "1px solid var(--border)", borderTop: "3px solid var(--accent)", padding: "24px" }}>
            <p className="mono-label" style={{ fontSize: 9, letterSpacing: "0.28em", color: "var(--accent)", textTransform: "uppercase", marginBottom: 14 }}>Featured article</p>
            <h2 className="h-display" style={{ fontSize: 22, color: "var(--foreground)", marginBottom: 10 }}>{featuredPost.title}</h2>
            <p className="prose-body" style={{ fontSize: "0.9rem", marginBottom: 16 }}>{featuredPost.excerpt}</p>
            <div className="mono-label" style={{ fontSize: 10, color: "var(--muted)", letterSpacing: "0.18em", display: "flex", gap: 12, marginBottom: 20 }}>
              <span>{featuredPost.publishedAt}</span>
              <span style={{ color: "var(--accent)" }}>·</span>
              <span>{featuredPost.readingTime}</span>
            </div>
            <Link href={`/blog/${featuredPost.slug}`} className="btn-amber" style={{ fontSize: 10, padding: "10px 20px" }}>
              Read article →
            </Link>
          </aside>
        </section>

        {/* ── CATEGORY CARDS ── */}
        <section>
          <p className="section-label" style={{ marginBottom: 24 }}>Browse by category</p>
          <div className="grid-auto-subtle">
            {blogCategories.map((category) => {
              const posts = getPostsByCategory(category.slug);
              const label = posts.length === 1 ? "1 article" : `${posts.length} articles`;
              return (
                <Link key={category.slug} href={`/blog/category/${category.slug}`}
                  className="hover:bg-[var(--surface-raised)] transition-colors"
                  style={{ display: "block", background: "var(--surface)", padding: "28px 24px", textDecoration: "none" }}
                >
                  <p className="mono-label" style={{ fontSize: 9, color: "var(--accent)", letterSpacing: "0.25em", textTransform: "uppercase", marginBottom: 12 }}>{label}</p>
                  <h2 className="h-display" style={{ fontSize: 22, marginBottom: 10 }}>{category.name}</h2>
                  <p className="prose-body" style={{ fontSize: "0.88rem", margin: "0 0 20px" }}>{category.description}</p>
                  <p className="mono-label" style={{ fontSize: 10, color: "var(--accent)", letterSpacing: "0.18em", textTransform: "uppercase" }}>Explore →</p>
                </Link>
              );
            })}
          </div>
        </section>

        {/* ── LATEST POSTS ── */}
        <section>
          <p className="section-label" style={{ marginBottom: 24 }}>Latest writing</p>
          <div className="stack-list">
            {blogPosts.map((post) => {
              const cat = blogCategories.find((c) => c.slug === post.category);
              return (
                <Link key={post.slug} href={`/blog/${post.slug}`}
                  className="hover:bg-[var(--surface-raised)] transition-colors"
                  style={{ display: "block", background: "var(--surface)", padding: "24px", textDecoration: "none" }}
                >
                  <div className="mono-label" style={{ fontSize: 10, color: "var(--muted)", letterSpacing: "0.18em", textTransform: "uppercase", display: "flex", flexWrap: "wrap", gap: "8px 12px", marginBottom: 10 }}>
                    <span>{cat?.name}</span>
                    <span style={{ color: "var(--accent)" }}>·</span>
                    <span>{post.publishedAt}</span>
                    <span style={{ color: "var(--accent)" }}>·</span>
                    <span>{post.readingTime}</span>
                  </div>
                  <h3 className="h-display" style={{ fontSize: 24, marginBottom: 8 }}>{post.title}</h3>
                  <p className="prose-body" style={{ fontSize: "0.9rem", margin: 0 }}>{post.excerpt}</p>
                </Link>
              );
            })}
          </div>
        </section>

      </div>
    </main>
  );
}
