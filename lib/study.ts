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
    slug: "system-design",
    title: "System Design",
    description:
      "Scalability, distributed systems, caching, queues, databases, reliability, and tradeoff-based design thinking.",
    sections: [],
  },
  {
    slug: "sql",
    title: "SQL",
    description:
      "Query writing, joins, windows, aggregations, optimization, and analytics-style interview practice.",
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

// ── System Design Chapters ──────────────────────────────────────────────────
export type Difficulty = "Beginner" | "Intermediate" | "Advanced";

export interface SystemDesignChapter {
  number: string;
  slug: string;
  title: string;
  description: string;
  crisis: string;
  topics: string[];
  scale: string;
  difficulty: Difficulty;
  available: boolean;
}

export const systemDesignChapters: SystemDesignChapter[] = [
  {
    number: "01",
    slug: "the-first-10-users",
    title: "The First 10 Users",
    description:
      "Launch day. Your app is live. A single server, a simple database, and dreams of changing the world.",
    crisis:
      "The homepage is loading in 8 seconds. Users are bouncing. What do you do?",
    topics: ["Client-Server Model", "HTTP Basics", "Database 101", "Caching Intro"],
    scale: "10 users",
    difficulty: "Beginner",
    available: true,
  },
  {
    number: "02",
    slug: "the-viral-spike",
    title: "The Viral Spike",
    description:
      "A celebrity tweeted about you. Traffic 100x overnight. Your single server is on fire. Literally.",
    crisis:
      "502 Bad Gateway. Everything's down. Angry users flooding Twitter. Fix it NOW.",
    topics: ["Load Balancing", "Horizontal Scaling", "Session Management", "CDN"],
    scale: "10K users",
    difficulty: "Beginner",
    available: false,
  },
  {
    number: "03",
    slug: "the-database-nightmare",
    title: "The Database Nightmare",
    description:
      "Your PostgreSQL server is maxed out. Queries taking 10+ seconds. The database is the new bottleneck.",
    crisis:
      "Users can't load their profiles. Checkout is timing out. Revenue is bleeding.",
    topics: ["DB Indexing", "Read Replicas", "Connection Pooling", "Query Optimization"],
    scale: "100K users",
    difficulty: "Intermediate",
    available: false,
  },
  {
    number: "04",
    slug: "the-consistency-paradox",
    title: "The Consistency Paradox",
    description:
      "Users in Tokyo see different data than users in New York. Your global expansion broke everything.",
    crisis:
      "A user just bought the same item twice. Inventory says 0, but sales went through.",
    topics: ["CAP Theorem", "Eventual Consistency", "Distributed Caching", "Multi-Region"],
    scale: "500K users",
    difficulty: "Intermediate",
    available: false,
  },
  {
    number: "05",
    slug: "the-monolith-breaks",
    title: "The Monolith Breaks",
    description:
      "Your codebase is a tangled mess. One bug crashes everything. Deployments take hours. It's time to split.",
    crisis:
      "Payment service is down, taking the entire app with it. Users can't even browse.",
    topics: ["Microservices", "Service Boundaries", "API Gateway", "Service Discovery"],
    scale: "1M users",
    difficulty: "Intermediate",
    available: false,
  },
  {
    number: "06",
    slug: "the-async-awakening",
    title: "The Async Awakening",
    description:
      "Email sends are blocking checkouts. Image processing crashes servers. Synchronous is killing you.",
    crisis:
      "Black Friday. Order confirmations delayed 2 hours. Customers think they weren't charged.",
    topics: ["Message Queues", "Event-Driven", "Kafka / RabbitMQ", "Worker Pools"],
    scale: "2M users",
    difficulty: "Advanced",
    available: false,
  },
  {
    number: "07",
    slug: "when-everything-fails",
    title: "When Everything Fails",
    description:
      "AWS had an outage. Your primary database corrupted. A developer pushed bad code to production. Chaos.",
    crisis:
      "The app is down. Customers are furious. Investors are calling. What's your disaster plan?",
    topics: ["Disaster Recovery", "Backups", "Failover", "Circuit Breakers"],
    scale: "3M users",
    difficulty: "Advanced",
    available: false,
  },
  {
    number: "08",
    slug: "the-search-labyrinth",
    title: "The Search Labyrinth",
    description:
      "Users want instant search. Autocomplete. Typo tolerance. Fuzzy matching. SQL can't handle this.",
    crisis:
      "Search is the #1 feature request. Competitors have it. You don't. Build it or lose users.",
    topics: ["Elasticsearch", "Inverted Index", "Search Ranking", "Real-time Indexing"],
    scale: "5M users",
    difficulty: "Advanced",
    available: false,
  },
  {
    number: "09",
    slug: "real-time-or-die",
    title: "Real-Time or Die",
    description:
      "Your app needs live chat, notifications, collaborative editing. WebSockets? Long polling? What scales?",
    crisis:
      "Users demand real-time updates. Slack does it. Why can't you? Build it or they leave.",
    topics: ["WebSockets", "Server-Sent Events", "Pub/Sub", "Redis Streams"],
    scale: "7M users",
    difficulty: "Advanced",
    available: false,
  },
  {
    number: "10",
    slug: "the-security-breach",
    title: "The Security Breach",
    description:
      "A hacker found an SQL injection. User data leaked. Regulatory fines incoming. Security isn't optional.",
    crisis:
      "TechCrunch just reported your data breach. Stock plummets. Trust shattered. Fix everything.",
    topics: ["Authentication", "Encryption", "Rate Limiting", "Security Best Practices"],
    scale: "8M users",
    difficulty: "Advanced",
    available: false,
  },
  {
    number: "11",
    slug: "the-data-goldmine",
    title: "The Data Goldmine",
    description:
      "You're sitting on petabytes of data. Analytics is slow. ML models need training. Build a data pipeline.",
    crisis:
      "Investors want metrics. Marketing wants insights. ML team is blocked. Build it yesterday.",
    topics: ["Data Warehousing", "ETL Pipelines", "Spark / Hadoop", "Real-time Analytics"],
    scale: "9M users",
    difficulty: "Advanced",
    available: false,
  },
  {
    number: "12",
    slug: "the-10-million-milestone",
    title: "The 10 Million Milestone",
    description:
      "You've scaled to 10M users. Congratulations. Now prepare for 100M. The final boss: infinite scale.",
    crisis:
      "Design the architecture for 100M users. Every decision matters. This is your masterpiece.",
    topics: ["Global Architecture", "Edge Computing", "Auto-Scaling", "Cost Optimization"],
    scale: "10M users",
    difficulty: "Advanced",
    available: false,
  },
];

