import Link from "next/link";
import { notFound } from "next/navigation";
import { blogCategories, getCategoryBySlug, getPostsByCategory, type BlogCategorySlug } from "@/lib/blog";

type CategoryPageProps = { params: Promise<{ slug: string }>; };

export async function generateStaticParams() {
  return blogCategories.map((c) => ({ slug: c.slug }));
}

export default async function BlogCategoryPage({ params }: CategoryPageProps) {
  const { slug } = await params;
  const category = getCategoryBySlug(slug as BlogCategorySlug);
  if (!category) notFound();

  const posts = getPostsByCategory(category.slug);
  const otherCategories = blogCategories.filter((c) => c.slug !== category.slug);

  return (
    <main style={{ minHeight: "100vh", color: "var(--foreground)" }}>
      <div className="page-wrap section-gap" style={{ maxWidth: 1100 }}>

        {/* ── HEADER ── */}
        <section>
          <Link href="/blog" className="mono-label hover:text-[var(--accent)] transition-colors"
            style={{ fontSize: 10, letterSpacing: "0.2em", color: "var(--muted)", textTransform: "uppercase", textDecoration: "none" }}
          >
            ← All categories
          </Link>
          <p className="section-label" style={{ marginTop: 28, marginBottom: 16 }}>Category</p>
          <h1 className="h-display" style={{ fontSize: "clamp(34px,5vw,70px)", maxWidth: 640 }}>{category.name}</h1>
          <p className="prose-body" style={{ marginTop: 16, maxWidth: 520, fontSize: "1rem" }}>{category.description}</p>
        </section>

        {/* ── POSTS ── */}
        {posts.length > 0 ? (
          <section>
            <div className="stack-list">
              {posts.map((post) => (
                <Link key={post.slug} href={`/blog/${post.slug}`}
                  className="hover:bg-[var(--surface-raised)] transition-colors"
                  style={{ display: "block", background: "var(--surface)", padding: "28px 24px", textDecoration: "none" }}
                >
                  <div className="mono-label" style={{ fontSize: 10, color: "var(--muted)", letterSpacing: "0.18em", textTransform: "uppercase", display: "flex", flexWrap: "wrap", gap: "8px 12px", marginBottom: 12 }}>
                    <span>{post.publishedAt}</span>
                    <span style={{ color: "var(--accent)" }}>·</span>
                    <span>{post.readingTime}</span>
                  </div>
                  <h2 className="h-display" style={{ fontSize: 26, marginBottom: 10 }}>{post.title}</h2>
                  <p className="prose-body" style={{ fontSize: "0.9rem", margin: 0 }}>{post.excerpt}</p>
                </Link>
              ))}
            </div>
          </section>
        ) : (
          <section style={{ background: "var(--surface)", border: "1px dashed var(--border)", padding: "48px 32px", textAlign: "center" }}>
            <p className="section-label" style={{ justifyContent: "center", marginBottom: 14 }}>Coming soon</p>
            <h2 className="h-display" style={{ fontSize: 28, marginBottom: 12 }}>No posts in {category.name} yet.</h2>
            <p className="prose-body" style={{ fontSize: "0.9rem", maxWidth: 440, margin: "0 auto" }}>This category is ready. Writing is in progress and will be published here.</p>
          </section>
        )}

        {/* ── BROWSE OTHER CATEGORIES ── */}
        <section style={{ background: "var(--surface)", border: "1px solid var(--border)", padding: "28px" }}>
          <p className="section-label" style={{ marginBottom: 20 }}>Browse next</p>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
            {otherCategories.map((item) => (
              <Link key={item.slug} href={`/blog/category/${item.slug}`}
                className="mono-label hover:border-[var(--accent)] hover:text-[var(--accent)] transition-colors"
                style={{ fontSize: 10, letterSpacing: "0.15em", textTransform: "uppercase", color: "var(--muted-mid)", border: "1px solid var(--border)", padding: "8px 16px", textDecoration: "none" }}
              >
                {item.name}
              </Link>
            ))}
          </div>
        </section>

      </div>
    </main>
  );
}
