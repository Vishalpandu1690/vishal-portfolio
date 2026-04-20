import Link from "next/link";
import { notFound } from "next/navigation";
import {
  blogCategories,
  getCategoryBySlug,
  getPostsByCategory,
  type BlogCategorySlug,
} from "@/lib/blog";

type CategoryPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export async function generateStaticParams() {
  return blogCategories.map((category) => ({
    slug: category.slug,
  }));
}

export default async function BlogCategoryPage({ params }: CategoryPageProps) {
  const { slug } = await params;
  const category = getCategoryBySlug(slug as BlogCategorySlug);

  if (!category) {
    notFound();
  }

  const posts = getPostsByCategory(category.slug);

  return (
    <main className="px-6 py-16 sm:px-10">
      <div className="mx-auto flex w-full max-w-5xl flex-col gap-10">
        <section className="max-w-3xl">
          <Link
            href="/blog"
            className="text-sm font-medium text-[var(--accent)] transition hover:text-[var(--accent-strong)]"
          >
            Back to all categories
          </Link>

          <p className="mt-6 text-sm font-medium uppercase tracking-[0.2em] text-[var(--muted)]">
            Category
          </p>
          <h1 className="mt-4 text-4xl font-semibold tracking-tight text-[var(--foreground)] sm:text-5xl">
            {category.name}
          </h1>
          <p className="mt-5 max-w-2xl text-base leading-7 text-[var(--muted)] sm:text-lg sm:leading-8">
            {category.description}
          </p>
        </section>

        {posts.length > 0 ? (
          <section className="grid gap-4">
            {posts.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="rounded-[1.75rem] border border-[var(--border)] bg-[rgba(251,252,250,0.82)] p-6 shadow-[0_18px_50px_rgba(15,23,32,0.04)] backdrop-blur-sm transition duration-300 hover:-translate-y-1 hover:border-[var(--accent)]"
              >
                <div className="flex flex-wrap items-center gap-3 text-xs uppercase tracking-[0.16em] text-[var(--muted)]">
                  <span>{post.publishedAt}</span>
                  <span className="h-1 w-1 rounded-full bg-[var(--accent)]" />
                  <span>{post.readingTime}</span>
                </div>
                <h2 className="mt-3 text-2xl font-semibold text-[var(--foreground)]">
                  {post.title}
                </h2>
                <p className="mt-3 text-sm leading-6 text-[var(--muted)]">
                  {post.excerpt}
                </p>
              </Link>
            ))}
          </section>
        ) : (
          <section className="rounded-[2rem] border border-dashed border-[var(--border)] bg-white/65 p-8 text-center">
            <p className="text-sm font-medium uppercase tracking-[0.18em] text-[var(--muted)]">
              Coming soon
            </p>
            <h2 className="mt-3 text-2xl font-semibold text-[var(--foreground)]">
              No posts published in {category.name} yet.
            </h2>
            <p className="mt-3 text-sm leading-6 text-[var(--muted)]">
              This category is ready for future writing. For example, an article
              on S3 storage classes would belong under Cloud.
            </p>
          </section>
        )}

        <section className="rounded-[2rem] border border-[var(--border)] bg-[linear-gradient(135deg,#0f1720_0%,#123a3d_52%,#115e59_100%)] px-6 py-8 text-white shadow-[0_28px_90px_rgba(10,20,30,0.18)] sm:px-8">
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-teal-100/70">
            Browse next
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            {blogCategories
              .filter((item) => item.slug !== category.slug)
              .map((item) => (
                <Link
                  key={item.slug}
                  href={`/blog/category/${item.slug}`}
                  className="rounded-full border border-white/15 bg-white/8 px-4 py-2 text-sm font-medium text-white transition duration-300 hover:bg-white/14"
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
