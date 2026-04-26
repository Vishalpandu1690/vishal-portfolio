export const DEEP_DIVES = [
  {
    id: "dd1",
    title: "🌲 How Database Indexes Actually Work",
    content: `
      <p>
        When you hear "index," think of a book's index at the back. You want to find all mentions 
        of "performance"? You don't read the entire book—you check the index, which tells you 
        exactly which pages to flip to.
      </p>
      
      <h4>B-Tree Indexes (Most Common)</h4>
      <p>
        PostgreSQL, MySQL, and most relational databases use <strong>B-trees</strong> (Balanced trees) 
        for indexes. Here's how they work:
      </p>

<pre>
    B-Tree Index on blog_posts.created_at
    
                [2024-01-15]
               /            \\
        [2024-01-10]      [2024-01-20]
        /        \\         /        \\
[Jan 5-9]  [Jan 10-14]  [Jan 15-19]  [Jan 20-31]
     |          |           |            |
  [rows]    [rows]      [rows]       [rows]
  
Without Index: Scan ALL 500 rows
With Index: Jump directly to the right "leaf" node

Speed: O(n) → O(log n)
For 1M rows: 1,000,000 scans → ~20 lookups!
</pre>

      <h4>Hash Indexes</h4>
      <p>
        Used for exact matches only (\`WHERE id = 123\`). Extremely fast O(1), but can't handle 
        range queries (\`WHERE created_at > '2024-01-01'\`).
      </p>

      <h4>The Trade-Off</h4>
<pre>
// Every INSERT/UPDATE/DELETE must update the index too
// More indexes = slower writes, faster reads

// Bad: Too many indexes
CREATE INDEX idx1 ON posts(created_at);
CREATE INDEX idx2 ON posts(author_id);
CREATE INDEX idx3 ON posts(title);
CREATE INDEX idx4 ON posts(status);
CREATE INDEX idx5 ON posts(category);
// Inserts now 5x slower!

// Good: Index only what you query frequently
CREATE INDEX idx_posts_recent 
ON posts(created_at DESC) 
WHERE status = 'published';
// Partial index: smaller, faster, smarter
</pre>

      <p style="margin-top: 1.5rem; font-style: italic; color: #8a8070;">
        📚 <strong>Library analogy:</strong> A library with 100 indexes (by author, title, genre, 
        publication year, color of cover, number of pages...) would be amazing for finding books, 
        but adding a new book would take forever—you'd have to update every single index!
      </p>
    `
  },
  {
    id: "dd2",
    title: "⚡ Redis vs Memcached: When to Use Which",
    content: `
      <p>
        Both are in-memory caches. Both are blazingly fast. So which one should you use?
      </p>

<table style="width: 100%; text-align: left; margin: 2rem 0; border-collapse: collapse;">
  <thead>
    <tr style="border-bottom: 1px solid #444;">
      <th style="padding: 8px;">Feature</th>
      <th style="padding: 8px;">Redis</th>
      <th style="padding: 8px;">Memcached</th>
    </tr>
  </thead>
  <tbody>
    <tr style="border-bottom: 1px solid #222;">
      <td style="padding: 8px;">Data Structures</td>
      <td style="padding: 8px;">✅ Strings, Lists, Sets, Hashes</td>
      <td style="padding: 8px;">❌ Only strings</td>
    </tr>
    <tr style="border-bottom: 1px solid #222;">
      <td style="padding: 8px;">Persistence</td>
      <td style="padding: 8px;">✅ Can save to disk</td>
      <td style="padding: 8px;">❌ RAM only</td>
    </tr>
    <tr style="border-bottom: 1px solid #222;">
      <td style="padding: 8px;">Multi-threading</td>
      <td style="padding: 8px;">❌ Single-threaded</td>
      <td style="padding: 8px;">✅ Multi-threaded</td>
    </tr>
    <tr>
      <td style="padding: 8px;">Best For</td>
      <td style="padding: 8px;">Complex data, sessions, queues</td>
      <td style="padding: 8px;">Simple caching at massive scale</td>
    </tr>
  </tbody>
</table>

      <h4>✅ Use Redis When...</h4>
<pre>
// You need complex data structures
redis.lpush('user:123:notifications', notification);
redis.zadd('leaderboard', score, userId);
redis.hset('user:123:profile', 'name', 'Alice');
</pre>

      <h4>✅ Use Memcached When...</h4>
<pre>
// Simple key-value caching at extreme scale
memcached.set('page:homepage', html, 3600);
memcached.set('user:123:profile', json, 600);
</pre>

      <p style="margin-top: 1.5rem;">
        <strong>For ScaleUp (our startup):</strong> Start with Redis. It's more versatile. Switch to 
        Memcached only if you're Facebook-scale and purely need key-value caching.
      </p>
    `
  },
  {
    id: "dd3",
    title: "🌐 HTTP Caching Headers Explained",
    content: `
      <p>
        You can cache in three places: the browser, the CDN, and your server. HTTP headers 
        control all three. Master these and you'll save millions of unnecessary requests.
      </p>

      <h4>Cache-Control (The Boss)</h4>
<pre>
// Never cache (for sensitive data)
Cache-Control: no-store

// Cache for 1 hour
Cache-Control: max-age=3600

// Cache for 1 year (static assets)
Cache-Control: max-age=31536000, immutable

// Cache in browser, not in CDN
Cache-Control: private, max-age=300

// Cache everywhere
Cache-Control: public, max-age=86400
</pre>

      <h4>ETag (Smart Validation)</h4>
      <p>
        An ETag is like a fingerprint for your response. If the content hasn't changed, 
        the ETag stays the same. The browser can ask: "I have version abc123, is it still fresh?"
      </p>

<pre>
// First request
Response:
  ETag: "abc123"
  [Full content - 500KB]

// Second request (user refreshes)
Request:
  If-None-Match: "abc123"

Response (if unchanged):
  304 Not Modified
  [No body - 0KB!]
</pre>

      <p style="margin-top: 1.5rem; font-style: italic; color: #8a8070;">
        📰 <strong>Newspaper analogy:</strong> Cache-Control is like subscription rules. 
        "Deliver once a day" (max-age=86400). ETag is checking if today's paper is different 
        from yesterday's. If it's the same, the delivery person doesn't leave a copy.
      </p>
    `
  },
  {
    id: "dd4",
    title: "🌍 How CDN Edge Locations Actually Work",
    content: `
      <p>
        A CDN (Content Delivery Network) is a network of servers scattered across the globe. 
        When Mike in Seattle requests your logo, he gets it from Seattle, not Virginia.
      </p>

      <h4>The Geography of Speed</h4>
<pre>
Your Origin Server (Virginia)
        |
        | First request from Seattle
        | (downloads and caches)
        ↓
Seattle Edge Server
        |
        | All future Seattle requests
        | (served from cache)
        ↓
Mike's Browser (15ms away!)

Distance matters:
Virginia → Seattle: ~3000 miles, ~80ms latency
Seattle Edge → Seattle: ~15 miles, ~5ms latency
</pre>

      <h4>Major CDN Providers</h4>
      <p><strong>Cloudflare</strong>: 330+ edge locations. Best for free tier, DDoS protection.<br/>
      <strong>AWS CloudFront</strong>: 450+ edge locations. Best if you are deep in AWS ecosystem.<br/>
      <strong>Akamai</strong>: 4000+ edge locations. Best for enterprise streaming and massive scale.</p>

      <p style="margin-top: 1.5rem;">
        <strong>For ScaleUp:</strong> Start with Cloudflare's free tier. It's ridiculously good 
        for a startup.
      </p>
    `
  }
];

export const WAR_STORIES = [
  {
    id: "ws1",
    title: "🐦 Twitter's Fail Whale (2008-2010)",
    tags: ["Database", "Scaling Crisis"],
    problem: "Twitter was down more than it was up in 2008. Users saw the \"Fail Whale\" error page constantly. The culprit? A single MySQL database that couldn't handle the write load.",
    solutionTitle: "The Solution",
    solutionList: [
      "✅ Database Sharding: Split users across multiple MySQL databases",
      "✅ Read Replicas: Separate read and write operations",
      "✅ Caching Layer: Redis for timelines, reducing DB reads by 90%",
      "✅ Async Workers: Queue non-critical tasks"
    ],
    result: "By 2010, uptime went from 92% → 99.9%. The Fail Whale became a rarity.",
    lesson: "One database won't scale forever. Plan for sharding early, even if you don't implement it yet. Know WHERE you'll shard (user_id? geographic region?)"
  },
  {
    id: "ws2",
    title: "📸 Instagram's $0 Caching Strategy (2010)",
    tags: ["Caching", "Efficiency"],
    problem: "Instagram launched with 2 engineers and minimal funding. They went from 0 → 1 million users in 2 months. They couldn't afford massive infrastructure.",
    solutionTitle: "The Strategy",
    solutionList: [
      "✅ Aggressive Caching: Memcached everywhere (users, feeds, metadata)",
      "✅ PostgreSQL: Better at handling concurrent connections than MySQL at the time",
      "✅ AWS S3 for images: Offload storage to Amazon's infrastructure",
      "✅ CloudFront CDN: Images served from edge locations"
    ],
    result: "Instagram scaled to 30 million users before hiring their 4th engineer. Facebook acquired them for $1 billion when they had just 13 employees.",
    lesson: "You don't need a huge team or massive infrastructure. Smart caching + cloud services (S3, CDN) + async processing = you can compete with giants."
  },
  {
    id: "ws3",
    title: "📌 Pinterest's Sharding Disaster (2011)",
    tags: ["Database", "Architecture"],
    problem: "Pinterest was growing 10x month over month. Their MySQL database was melting. They needed to shard, but they'd never done it before. And they made mistakes.",
    solutionTitle: "The Fix",
    solutionList: [
      "❌ Attempt 1: Shard by user_id → Hot shards (celebrities killed specific shards)",
      "❌ Attempt 2: Shard by board_id → Cross-shard queries everywhere (slow)",
      "✅ Final solution: Hybrid sharding (Pins sharded by pin_id, User data by user_id)"
    ],
    result: "After 6 months of painful migration, Pinterest scaled from 1M → 100M users without major database issues.",
    lesson: "Sharding is HARD. Test your sharding strategy before you commit. Simulate load. Find your hot spots. Budget time for migration hell."
  }
];

export const TAKEAWAYS = [
  {
    icon: "📊",
    title: "Measure First",
    text: "Before optimizing anything, identify your bottlenecks. Use DevTools, database query logs, and monitoring tools. You can't fix what you don't measure."
  },
  {
    icon: "🎯",
    title: "Low-Hanging Fruit",
    text: "Database indexes and caching are the easiest wins. You got a 95% speedup without changing your architecture at all. Always start here."
  },
  {
    icon: "🔄",
    title: "Every Layer Matters",
    text: "Network, database, server, client—optimize at every layer. A slow database query ruins your fast server. A huge response size ruins your fast database."
  },
  {
    icon: "⚡",
    title: "Speed = Retention",
    text: "Every 100ms of latency costs you users. Amazon found that 100ms of extra load time cost them 1% in sales. Your 8-second load time? Users never came back."
  }
];

export const TUTORIAL_STEPS = [
  {
    number: "01",
    title: "Set Up Your Basic Server",
    codeTitle: "server.js (Node.js + Express)",
    code: \`const express = require('express');
const { Pool } = require('pg');
const app = express();

const pool = new Pool({
  host: 'localhost',
  database: 'scaleup',
  port: 5432,
  max: 20
});

// Basic homepage route (SLOW version)
app.get('/', async (req, res) => {
  const start = Date.now();
  
  // Query all blog posts (BAD!)
  const posts = await pool.query('SELECT * FROM blog_posts ORDER BY created_at DESC');
  
  const duration = Date.now() - start;
  res.send(\`
    <h1>ScaleUp Homepage</h1>
    <p>Loaded \${posts.rows.length} posts in \${duration}ms</p>
  \`);
});
app.listen(3000);`,
    result: "⏱️ Test this: Load http://localhost:3000 and check the load time. With 500 posts, expect 2000+ ms."
  },
  {
    number: "02",
    title: "Add Database Indexes",
    codeTitle: "migrations/001_add_indexes.sql",
    code: \`-- Create index on created_at for fast sorting
CREATE INDEX idx_posts_created_at ON blog_posts(created_at DESC);

-- Analyze the improvement
EXPLAIN ANALYZE 
SELECT * FROM blog_posts 
WHERE status = 'published' 
ORDER BY created_at DESC 
LIMIT 10;\`,
    result: "✅ Expected improvement: Query time drops from ~2000ms → ~12ms"
  },
  {
    number: "03",
    title: "Add Redis Caching",
    codeTitle: "server.js (Add caching)",
    code: \`const redis = require('redis');
const client = redis.createClient();
await client.connect();

// Optimized homepage route
app.get('/', async (req, res) => {
  const cacheKey = 'homepage:posts';
  let posts = await client.get(cacheKey);
  
  if (posts) {
    posts = JSON.parse(posts);
  } else {
    const result = await pool.query(
      "SELECT id, title, excerpt FROM blog_posts ORDER BY created_at DESC LIMIT 10"
    );
    posts = result.rows;
    await client.setEx(cacheKey, 300, JSON.stringify(posts)); // cache 5 min
  }
  
  res.send(\`<p>Loaded \${posts.length} posts</p>\`);
});`,
    result: "✅ Result: First request: ~12ms (DB with index). Next requests: ~1ms (cache)"
  },
  {
    number: "04",
    title: "Enable GZIP Compression",
    codeTitle: "server.js (Add compression)",
    code: \`const compression = require('compression');

// Enable GZIP compression for all responses
app.use(compression({
  level: 6, // balanced
  threshold: 1024 // only compress if > 1KB
}));

// 100KB HTML → ~10KB over the wire\`,
    result: "✅ Result: Response size reduced by 90%. Users on slow connections rejoice."
  }
];

export const DEV_TOOLS = [
  {
    id: "t1",
    icon: "🔧",
    title: "Chrome DevTools Network Tab",
    description: "Your first stop for diagnosing slow pages. Shows every request, how long it took, and why it's slow.",
    tip: "Pro tip: Click \"Disable cache\" and throttle to \"Fast 3G\" to simulate real-world conditions."
  },
  {
    id: "t2",
    icon: "🗄️",
    title: "Database EXPLAIN Plans",
    description: "See exactly how your database executes queries. Spot missing indexes immediately.",
    tip: "Look for \"Seq Scan\" (bad = full table scan), \"Index Scan\" (good), and execution time. Anything >100ms needs attention."
  },
  {
    id: "t3",
    icon: "⚡",
    title: "Redis CLI Commands",
    description: "Inspect your cache in real-time. See what's stored, what's expiring, and cache stats.",
    tip: "Warning: Never run KEYS * or FLUSHALL in production! They'll freeze your entire cache. Use SCAN instead of KEYS for safety."
  },
  {
    id: "t4",
    icon: "📊",
    title: "Production Monitoring",
    description: "In production, you need real-time alerts and dashboards (Datadog, New Relic, Grafana, Sentry).",
    tip: "Start simple: Begin with free tiers. Set up alerts for >1s response times and >10% error rates. Scale up as you grow."
  }
];
