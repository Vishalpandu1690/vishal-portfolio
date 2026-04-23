export const studyTracks = [
  {
    slug: "python",
    title: "Python",
    description:
      "Python fundamentals, coding patterns, and DSA explained through examples, intuition, and interview-ready reasoning.",
    sections: [
      {
        title: "Python Foundations",
        description:
          "Core syntax, data types, functions, control flow, and the mental models needed to write Python clearly.",
      },
      {
        title: "DSA Patterns in Python",
        description:
          "Problem-solving patterns such as Two Pointers, Sliding Window, Recursion, Binary Search, and Dynamic Programming.",
      },
    ],
  },
  {
    slug: "sql",
    title: "SQL",
    description:
      "Query writing, joins, windows, aggregations, optimization, and analytics-style interview practice.",
    sections: [],
  },
  {
    slug: "system-design",
    title: "System Design",
    description:
      "Scalability, distributed systems, caching, queues, databases, reliability, and tradeoff-based design thinking.",
    sections: [],
  },
  {
    slug: "cloud",
    title: "Cloud",
    description:
      "Cloud primitives, storage, compute, networking, reliability, and service design across modern cloud platforms.",
    sections: [],
  },
  {
    slug: "ai",
    title: "AI",
    description:
      "AI, ML, LLM systems, model workflows, data needs, evaluation, and practical product architecture.",
    sections: [],
  },
] as const;

export const pythonStudyModules = [
  {
    slug: "two-pointers",
    title: "Two Pointers",
    description:
      "Learn how to solve problems by shrinking the search space from both ends while preserving correctness.",
    level: "Start here",
    href: "/study/python/dsa-patterns/two-pointers",
  },
  {
    slug: "sliding-window",
    title: "Sliding Window",
    description:
      "Understand contiguous subarray and substring problems through window expansion, shrinking, and invariants.",
    level: "Coming next",
    href: "/blog/sliding-window-technique",
  },
  {
    slug: "recursion",
    title: "Recursion",
    description:
      "Build the intuition for base cases, recursive trust, call stacks, and problem decomposition.",
    level: "Planned",
    href: "/study/python",
  },
];
