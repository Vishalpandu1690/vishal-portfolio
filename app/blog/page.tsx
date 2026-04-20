import Link from "next/link";
import { blogCategories, blogPosts, getPostsByCategory } from "@/lib/blog";

export default function Blog() {
  const featuredPost =
    blogPosts.find((post) => post.featured) ?? blogPosts[0];

  return (
    <main className="px-6 py-16 sm:px-10">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-12">
        <section className="grid gap-8 lg:grid-cols-[minmax(0,1.35fr)_minmax(260px,0.8fr)] lg:items-end">
          <div className="max-w-3xl">
            <p className="text-sm font-medium uppercase tracking-[0.2em] text-[var(--muted)]">
              Blog
            </p>
            <h1 className="mt-4 text-4xl font-semibold tracking-tight text-[var(--foreground)] sm:text-5xl">
              Learn through categories, not just chronology.
            </h1>
            <p className="mt-5 max-w-2xl text-base leading-7 text-[var(--muted)] sm:text-lg sm:leading-8">
              The writing is organized around clear topic lanes so readers can
              move from foundations to depth across computer science, cloud,
              data, AI/ML, system design, and Python.
            </p>
          </div>

          <aside className="rounded-[2rem] border border-[var(--border)] bg-[rgba(251,252,250,0.88)] p-6 shadow-[0_18px_50px_rgba(15,23,32,0.05)] backdrop-blur-sm">
            <p className="text-sm font-medium text-[var(--muted)]">
              Featured article
            </p>
            <h2 className="mt-3 text-2xl font-semibold text-[var(--foreground)]">
              {featuredPost.title}
            </h2>
            <p className="mt-3 text-sm leading-6 text-[var(--muted)]">
              {featuredPost.excerpt}
            </p>
            <div className="mt-5 flex items-center gap-3 text-xs uppercase tracking-[0.16em] text-[var(--muted)]">
              <span>{featuredPost.publishedAt}</span>
              <span className="h-1 w-1 rounded-full bg-[var(--accent)]" />
              <span>{featuredPost.readingTime}</span>
            </div>
            <Link
              href={`/blog/${featuredPost.slug}`}
              className="mt-6 inline-flex rounded-full bg-[var(--accent)] px-4 py-2 text-sm font-medium text-white transition duration-300 hover:-translate-y-0.5 hover:bg-[var(--accent-strong)]"
            >
              Read featured post
            </Link>
          </aside>
        </section>

        <section className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {blogCategories.map((category) => {
            const posts = getPostsByCategory(category.slug);
            const postCountLabel =
              posts.length === 1 ? "1 article" : `${posts.length} articles`;

            return (
              <Link
                key={category.slug}
                href={`/blog/category/${category.slug}`}
                className="group rounded-[1.75rem] border border-[var(--border)] bg-[rgba(251,252,250,0.82)] p-6 shadow-[0_16px_40px_rgba(15,23,32,0.04)] backdrop-blur-sm transition duration-300 hover:-translate-y-1 hover:border-[var(--accent)] hover:shadow-[0_24px_60px_rgba(15,118,110,0.1)]"
              >
                <p className="text-xs font-medium uppercase tracking-[0.18em] text-[var(--muted)]">
                  {postCountLabel}
                </p>
                <h2 className="mt-3 text-2xl font-semibold text-[var(--foreground)]">
                  {category.name}
                </h2>
                <p className="mt-3 text-sm leading-6 text-[var(--muted)]">
                  {category.description}
                </p>
                <p className="mt-6 text-sm font-medium text-[var(--accent)] transition duration-300 group-hover:translate-x-1">
                  Explore category
                </p>
              </Link>
            );
          })}
        </section>

        <section className="rounded-[2rem] border border-[var(--border)] bg-white/70 p-6 shadow-[0_18px_50px_rgba(15,23,32,0.04)] backdrop-blur-sm sm:p-8">
          <div className="max-w-2xl">
            <p className="text-sm font-medium uppercase tracking-[0.2em] text-[var(--muted)]">
              Latest writing
            </p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-[var(--foreground)]">
              Start with the posts already live, then grow outward by category.
            </h2>
          </div>

          <div className="mt-8 grid gap-4">
            {blogPosts.map((post) => {
              const category = blogCategories.find(
                (item) => item.slug === post.category,
              );

              return (
                <Link
                  key={post.slug}
                  href={`/blog/${post.slug}`}
                  className="rounded-[1.5rem] border border-[var(--border)] bg-[var(--surface)] px-5 py-5 transition duration-300 hover:-translate-y-0.5 hover:border-[var(--accent)]"
                >
                  <div className="flex flex-wrap items-center gap-3 text-xs uppercase tracking-[0.16em] text-[var(--muted)]">
                    <span>{category?.name}</span>
                    <span className="h-1 w-1 rounded-full bg-[var(--accent)]" />
                    <span>{post.publishedAt}</span>
                    <span className="h-1 w-1 rounded-full bg-[var(--accent)]" />
                    <span>{post.readingTime}</span>
                  </div>
                  <h3 className="mt-3 text-2xl font-semibold text-[var(--foreground)]">
                    {post.title}
                  </h3>
                  <p className="mt-3 max-w-3xl text-sm leading-6 text-[var(--muted)]">
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
