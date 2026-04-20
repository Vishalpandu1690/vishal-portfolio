export const blogCategories = [
  {
    slug: "general-cs",
    name: "General CS",
    description:
      "Foundational computer science ideas like operating systems, networking, databases, and computation.",
  },
  {
    slug: "data",
    name: "Data",
    description:
      "Data engineering, analytics, warehousing, pipelines, and applied data systems.",
  },
  {
    slug: "cloud",
    name: "Cloud",
    description:
      "Cloud infrastructure, storage, compute, deployment models, and reliability concepts.",
  },
  {
    slug: "ai-ml",
    name: "AI / ML",
    description:
      "Machine learning, practical AI, model workflows, and applied reasoning around intelligent systems.",
  },
  {
    slug: "system-design",
    name: "System Design",
    description:
      "Scalability, tradeoffs, architecture patterns, distributed systems, and design thinking.",
  },
  {
    slug: "python-concepts",
    name: "Python Concepts",
    description:
      "Python language concepts, internals, syntax, and mental models for writing better code.",
  },
  {
    slug: "python-coding",
    name: "Python Coding",
    description:
      "Coding patterns, problem-solving, and interview-oriented Python implementations.",
  },
] as const;

export type BlogCategorySlug = (typeof blogCategories)[number]["slug"];

export type BlogPost = {
  slug: string;
  title: string;
  excerpt: string;
  category: BlogCategorySlug;
  publishedAt: string;
  readingTime: string;
  featured?: boolean;
};

export const blogPosts: BlogPost[] = [
  {
    slug: "two-pointer-technique",
    title: "Mastering Two Pointer Technique in Python",
    excerpt:
      "Learn how two pointers reduce brute-force work and turn sorted-array problems into clean O(n) solutions.",
    category: "python-coding",
    publishedAt: "Apr 2026",
    readingTime: "5 min read",
  },
  {
    slug: "sliding-window-technique",
    title: "Mastering Sliding Window Technique in Python",
    excerpt:
      "A practical introduction to one of the most useful patterns for subarray and substring optimization problems.",
    category: "python-coding",
    publishedAt: "Apr 2026",
    readingTime: "6 min read",
    featured: true,
  },
];

export function getCategoryBySlug(slug: BlogCategorySlug) {
  return blogCategories.find((category) => category.slug === slug);
}

export function getPostsByCategory(category: BlogCategorySlug) {
  return blogPosts.filter((post) => post.category === category);
}
