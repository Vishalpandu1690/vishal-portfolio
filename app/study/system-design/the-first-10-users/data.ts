import React from 'react';

export type Difficulty = 'easy' | 'medium' | 'hard' | 'expert';

export interface Question {
  id: string;
  difficulty: Difficulty;
  category: string;
  number: string;
  question: string;
  tags: string[];
  hint: React.ReactNode;
  answer: React.ReactNode;
  followUp: React.ReactNode;
}

export const interviewQuestions: Question[] = [
  {
    id: 'q1',
    difficulty: 'easy',
    category: 'database',
    number: 'Q1',
    question: 'What is a database index? Why do we need it?',
    tags: ['Database', 'Performance'],
    hint: 'Think about how you find a word in a dictionary vs reading every page sequentially.',
    answer: `
      <p><strong>Short Answer:</strong><br/>
      A database index is a data structure (usually a B-tree) that improves the speed of data retrieval operations. Without an index, the database must scan every row to find matches (table scan). With an index, it can jump directly to the relevant rows.</p>

      <p><strong>Analogy:</strong><br/>
      A book's index at the back. Instead of reading all 500 pages to find "performance," you check the index, which tells you it's on pages 45, 127, and 289.</p>

      <p><strong>When to use:</strong></p>
      <ul>
        <li>Columns frequently used in WHERE clauses</li>
        <li>Columns used in ORDER BY or GROUP BY</li>
        <li>Foreign key columns for joins</li>
      </ul>

      <p><strong>Trade-off:</strong> Indexes speed up reads but slow down writes (INSERT, UPDATE, DELETE) because the index must also be updated.</p>
    `,
    followUp: 'Can you have too many indexes? What happens?'
  },
  {
    id: 'q2',
    difficulty: 'easy',
    category: 'caching',
    number: 'Q2',
    question: 'What is caching? Give a real-world example.',
    tags: ['Caching', 'Concepts'],
    hint: 'Think about keeping frequently used items close by instead of fetching them from far away each time.',
    answer: `
      <p><strong>Definition:</strong><br/>
      Caching is storing frequently accessed data in a fast-access location (memory) to avoid repeatedly fetching it from a slower source (database, API, disk).</p>

      <p><strong>Real-world example:</strong><br/>
      Coffee shop brewing a large pot of coffee in advance instead of making each cup from scratch. First cup takes 5 minutes (cache miss). Every cup after takes 10 seconds (cache hit).</p>

      <p><strong>Tech example:</strong><br/>
      YouTube caches popular videos on CDN edge servers. When you watch a viral video, it's served from a nearby cache (50ms) instead of the origin server (500ms).</p>

      <p><strong>Key concept:</strong> Cache hit (data found in cache) vs Cache miss (must fetch from source).</p>
    `,
    followUp: 'What happens if cached data becomes stale (outdated)?'
  },
  {
    id: 'q3',
    difficulty: 'easy',
    category: 'http',
    number: 'Q3',
    question: 'Explain the difference between GET and POST requests.',
    tags: ['HTTP', 'Web'],
    hint: 'Think about idempotency and sending vs fetching data.',
    answer: `
      <table style="width:100%; border-collapse: collapse; margin-bottom: 1rem;">
        <tr><th style="text-align:left; border-bottom: 1px solid var(--border); padding-bottom: 0.5rem;">Aspect</th><th style="text-align:left; border-bottom: 1px solid var(--border); padding-bottom: 0.5rem;">GET</th><th style="text-align:left; border-bottom: 1px solid var(--border); padding-bottom: 0.5rem;">POST</th></tr>
        <tr><td style="padding: 0.5rem 0; border-bottom: 1px solid var(--border);">Purpose</td><td style="padding: 0.5rem 0; border-bottom: 1px solid var(--border);">Retrieve data</td><td style="padding: 0.5rem 0; border-bottom: 1px solid var(--border);">Send/create data</td></tr>
        <tr><td style="padding: 0.5rem 0; border-bottom: 1px solid var(--border);">Data location</td><td style="padding: 0.5rem 0; border-bottom: 1px solid var(--border);">URL (query params)</td><td style="padding: 0.5rem 0; border-bottom: 1px solid var(--border);">Request body</td></tr>
        <tr><td style="padding: 0.5rem 0; border-bottom: 1px solid var(--border);">Cacheable</td><td style="padding: 0.5rem 0; border-bottom: 1px solid var(--border);">Yes</td><td style="padding: 0.5rem 0; border-bottom: 1px solid var(--border);">No (usually)</td></tr>
        <tr><td style="padding: 0.5rem 0; border-bottom: 1px solid var(--border);">Size limit</td><td style="padding: 0.5rem 0; border-bottom: 1px solid var(--border);">~2048 chars</td><td style="padding: 0.5rem 0; border-bottom: 1px solid var(--border);">No limit</td></tr>
        <tr><td style="padding: 0.5rem 0; border-bottom: 1px solid var(--border);">Example</td><td style="padding: 0.5rem 0; border-bottom: 1px solid var(--border);">Search, load page</td><td style="padding: 0.5rem 0; border-bottom: 1px solid var(--border);">Submit form, upload</td></tr>
      </table>

      <p><strong>Key rule:</strong> GET should be idempotent (safe to repeat). POST can change server state.</p>
    `,
    followUp: ''
  },
  {
    id: 'q4',
    difficulty: 'easy',
    category: 'cdn',
    number: 'Q4',
    question: 'What is a CDN and why would you use it?',
    tags: ['CDN', 'Network'],
    hint: 'Think about global users and edge locations.',
    answer: `
      <p><strong>Definition:</strong><br/>
      CDN (Content Delivery Network) is a network of servers distributed globally that cache and serve static content (images, videos, CSS, JS) from locations close to users.</p>

      <p><strong>Why use it:</strong></p>
      <ul>
        <li><strong>Speed:</strong> Serve from nearby edge server (15ms) vs origin (500ms)</li>
        <li><strong>Reduced load:</strong> Origin server handles fewer requests</li>
        <li><strong>Reliability:</strong> If origin goes down, CDN can serve cached content</li>
        <li><strong>DDoS protection:</strong> Absorbs attack traffic at edge</li>
      </ul>

      <p><strong>Example:</strong><br/>
      Netflix uses CDN to serve movies. When you watch Stranger Things, it's served from a server in your city, not California.</p>
    `,
    followUp: 'What type of content should NOT go on a CDN?'
  },
  {
    id: 'q5',
    difficulty: 'easy',
    category: 'performance',
    number: 'Q5',
    question: 'How would you measure if a webpage is "slow"?',
    tags: ['Performance', 'Metrics'],
    hint: 'Think about web vitals.',
    answer: `
      <p><strong>Key Metrics:</strong></p>
      <ul>
        <li><strong>TTFB (Time To First Byte):</strong> How long until server responds (should be &lt;200ms)</li>
        <li><strong>FCP (First Contentful Paint):</strong> When first content appears (should be &lt;1.8s)</li>
        <li><strong>LCP (Largest Contentful Paint):</strong> When main content loads (should be &lt;2.5s)</li>
        <li><strong>TTI (Time To Interactive):</strong> When page becomes usable (should be &lt;3.8s)</li>
      </ul>

      <p><strong>Tools:</strong></p>
      <ul>
        <li>Chrome DevTools Network tab</li>
        <li>Lighthouse (Google's audit tool)</li>
        <li>WebPageTest.org</li>
      </ul>

      <p><strong>Rule of thumb:</strong> If load time &gt; 3 seconds, users start bouncing. Every 100ms costs you users.</p>
    `,
    followUp: ''
  },
  {
    id: 'q6',
    difficulty: 'medium',
    category: 'database',
    number: 'Q6',
    question: 'You added an index but queries are still slow. What could be wrong?',
    tags: ['Database', 'Debugging'],
    hint: 'Consider: Is the database actually using your index? Are you querying the right column? Is the query too broad?',
    answer: `
      <p><strong>Common Reasons:</strong></p>
      <ol>
        <li><strong>Index not being used:</strong>
          <ul>
            <li>Query uses OR instead of AND</li>
            <li>Using functions on indexed column: <code>WHERE LOWER(email) = 'user@example.com'</code></li>
            <li>Using != or NOT IN operators</li>
          </ul>
        </li>
        <li><strong>Wrong column indexed:</strong> Indexed 'name' but query searches on 'email'</li>
        <li><strong>Query returns too much data:</strong> Index helps find rows, but if you're returning 50% of the table, full scan is faster</li>
        <li><strong>Index not selective enough:</strong> Indexing a boolean column (only 2 values) doesn't help much</li>
        <li><strong>Outdated statistics:</strong> Database doesn't know index exists. Run ANALYZE/VACUUM</li>
      </ol>

      <p><strong>How to debug:</strong><br/>
      <code>EXPLAIN ANALYZE SELECT ...;</code><br/>
      Look for "Seq Scan" (bad) vs "Index Scan" (good).</p>
    `,
    followUp: 'How would you decide which columns to index?'
  },
  {
    id: 'q7',
    difficulty: 'medium',
    category: 'caching',
    number: 'Q7',
    question: 'Your cache hit rate dropped from 90% to 10%. What do you investigate?',
    tags: ['Caching', 'Debugging'],
    hint: 'Think about what would cause the cache to empty out or become invalidated.',
    answer: `
      <p><strong>Investigation Checklist:</strong></p>
      <ol>
        <li><strong>Cache was cleared/restarted:</strong> Redis crashed or was manually flushed</li>
        <li><strong>Traffic pattern changed:</strong> Users requesting new/different data not in cache</li>
        <li><strong>TTL too short:</strong> Cache expiring before it's reused</li>
        <li><strong>Cache keys changed:</strong> Code deploy changed how keys are generated</li>
        <li><strong>Memory eviction:</strong> Cache full, evicting frequently-used items (check maxmemory-policy)</li>
        <li><strong>Hot key problem:</strong> One key getting all traffic, others evicted</li>
      </ol>

      <p><strong>How to diagnose:</strong></p>
      <pre style="background: rgba(0,0,0,0.3); padding: 1rem; border-radius: 8px;"><code># Check Redis stats
redis-cli INFO stats
# Look at: keyspace_hits, keyspace_misses, evicted_keys

# Check memory usage
redis-cli INFO memory

# Monitor live traffic
redis-cli MONITOR</code></pre>
    `,
    followUp: ''
  },
  {
    id: 'q8',
    difficulty: 'medium',
    category: 'design',
    number: 'Q8',
    question: 'Design a caching strategy for a news website\'s homepage.',
    tags: ['System Design', 'Caching'],
    hint: 'Think about: How often does content change? Are all users seeing the same thing? What about breaking news?',
    answer: `
      <p><strong>Layered Caching Strategy:</strong></p>

      <p><strong>Layer 1 - CDN (Edge Cache):</strong></p>
      <ul>
        <li>Cache entire HTML page for 60 seconds</li>
        <li>Serve to anonymous users (not logged in)</li>
        <li>Cache static assets (CSS, JS, images) for 1 year</li>
      </ul>

      <p><strong>Layer 2 - Application Cache (Redis):</strong></p>
      <ul>
        <li>Cache individual articles for 5 minutes</li>
        <li>Cache "trending" list for 2 minutes</li>
        <li>Cache "latest 10 articles" for 1 minute</li>
        <li>User-specific data (for logged-in users) cached separately</li>
      </ul>

      <p><strong>Layer 3 - Database Query Cache:</strong></p>
      <ul>
        <li>PostgreSQL query cache for repetitive queries</li>
        <li>Materialized views for complex aggregations</li>
      </ul>

      <p><strong>Breaking News Handling:</strong></p>
      <ul>
        <li>Implement cache invalidation API</li>
        <li>When editor publishes breaking news, purge relevant caches</li>
        <li>Use cache tags for selective purging</li>
      </ul>
    `,
    followUp: 'How would you handle personalized homepages for logged-in users?'
  },
  {
    id: 'q9',
    difficulty: 'medium',
    category: 'performance',
    number: 'Q9',
    question: 'Users report stale data (seeing old information). What\'s wrong?',
    tags: ['Caching', 'Debugging'],
    hint: 'Think about cache invalidation and distributed caches.',
    answer: `
      <p><strong>Likely Causes:</strong></p>
      <ol>
        <li><strong>Cache not invalidated after update:</strong>
          <ul>
            <li>User updates profile, but cache still has old version</li>
            <li>Fix: Invalidate cache on write</li>
          </ul>
        </li>
        <li><strong>TTL too long:</strong> Cache set to expire in 1 hour, users wait 30 mins to see changes</li>
        <li><strong>Multi-layer caching:</strong> Invalidated Redis but CDN still cached</li>
        <li><strong>Browser caching:</strong> Client browser cached response with aggressive headers</li>
        <li><strong>Write-through cache issue:</strong> Write went to cache but not database (rare but possible)</li>
      </ol>

      <p><strong>Solution Patterns:</strong></p>
      <ul>
        <li><strong>Cache-aside:</strong> Invalidate on write, lazy-load on read</li>
        <li><strong>Write-through:</strong> Update cache AND database together</li>
        <li><strong>Short TTL + ETag:</strong> Cache with validation</li>
      </ul>
    `,
    followUp: ''
  },
  {
    id: 'q10',
    difficulty: 'medium',
    category: 'database',
    number: 'Q10',
    question: 'Explain the difference between read replicas and write replicas.',
    tags: ['Database', 'Scaling'],
    hint: 'Trick question!',
    answer: `
      <p><strong>Actually, there's no such thing as "write replicas" - that's a trick question!</strong></p>

      <p><strong>Read Replicas:</strong></p>
      <ul>
        <li>Copies of the primary database</li>
        <li>Receive changes via replication (async usually)</li>
        <li>Handle READ operations only</li>
        <li>You can have multiple read replicas</li>
        <li>Reduces load on primary database</li>
      </ul>

      <p><strong>Primary/Master Database:</strong></p>
      <ul>
        <li>Handles all WRITE operations (INSERT, UPDATE, DELETE)</li>
        <li>There's typically only ONE primary</li>
        <li>Changes are replicated to read replicas</li>
      </ul>

      <p><strong>Replication Lag:</strong> Replicas might be slightly behind (100ms - 1s). This is called "eventual consistency."</p>
    `,
    followUp: 'What problems can replication lag cause?'
  },
  {
    id: 'q11',
    difficulty: 'hard',
    category: 'design',
    number: 'Q11',
    question: 'Design the caching layer for Instagram\'s feed (1 billion users).',
    tags: ['System Design', 'Scale'],
    hint: 'Consider: Every user\'s feed is unique, feeds change when followed accounts post, can\'t cache 1B feeds entirely...',
    answer: `
      <p><strong>Challenge:</strong> 1B users, each with unique feeds, real-time updates.</p>

      <p><strong>Architecture:</strong></p>
      <ol>
        <li><strong>Pre-computed feeds (Fan-out on write):</strong>
          <ul>
            <li>When someone posts, push to followers' feeds immediately</li>
            <li>Cache top 500 posts per user in Redis sorted set</li>
            <li>Works well for users with &lt;10k followers</li>
          </ul>
        </li>
        <li><strong>On-demand assembly (Fan-out on read):</strong>
          <ul>
            <li>For celebrities with 100M followers, don't fan-out</li>
            <li>Assemble feed on-demand by querying recent posts</li>
            <li>Cache individual posts, not entire feeds</li>
          </ul>
        </li>
        <li><strong>Hybrid approach:</strong>
          <ul>
            <li>Fan-out for normal users</li>
            <li>Fan-out on read for celebrities</li>
            <li>Merge both at read time</li>
          </ul>
        </li>
      </ol>

      <p><strong>Caching Strategy:</strong></p>
      <ul>
        <li>Redis sorted sets for feeds</li>
        <li>Hash tables for post details</li>
        <li>Multi-layer cache (In-memory -&gt; Redis cluster -&gt; Cassandra)</li>
      </ul>

      <p><strong>Scale numbers:</strong><br/>
      1B users × 500 posts × 100 bytes = 50TB in Redis. Shard across 1000 Redis instances using consistent hashing.</p>
    `,
    followUp: 'How do you handle cache invalidation when someone deletes a post?'
  },
  {
    id: 'q12',
    difficulty: 'hard',
    category: 'database',
    number: 'Q12',
    question: 'Your database has 10 billion rows. How do you optimize queries?',
    tags: ['Database', 'Optimization'],
    hint: 'Think about partitioning, archiving, and materialized views.',
    answer: `
      <p><strong>Multi-pronged Strategy:</strong></p>

      <p><strong>1. Partitioning (Sharding):</strong></p>
      <ul>
        <li>Split into smaller databases by user_id, date, or region</li>
        <li>10B rows → 100 databases × 100M rows each</li>
        <li>Queries only touch relevant shards</li>
      </ul>

      <p><strong>2. Time-based Partitioning:</strong></p>
      <ul>
        <li>Partition by month or year (e.g., PostgreSQL table partitions)</li>
      </ul>

      <p><strong>3. Materialized Views:</strong></p>
      <ul>
        <li>Pre-compute expensive aggregations</li>
        <li>Refresh periodically (hourly, daily)</li>
      </ul>

      <p><strong>4. Archiving Old Data:</strong></p>
      <ul>
        <li>Move data older than 2 years to cold storage (S3, Glacier)</li>
        <li>Keep only recent data in hot database</li>
      </ul>

      <p><strong>5. Covering Indexes:</strong></p>
      <ul>
        <li>Include needed columns in index so queries can be satisfied from index alone</li>
      </ul>
    `,
    followUp: ''
  },
  {
    id: 'q13',
    difficulty: 'hard',
    category: 'tradeoffs',
    number: 'Q13',
    question: 'When would caching make performance WORSE?',
    tags: ['Trade-offs', 'Caching'],
    hint: 'Think about overhead vs benefit.',
    answer: `
      <p><strong>Scenarios Where Caching Hurts:</strong></p>

      <ol>
        <li><strong>Low cache hit rate (&lt;30%):</strong>
          <ul>
            <li>Every request: Check cache (5ms) → Miss → Query DB (20ms) = 25ms</li>
            <li>Without cache: Query DB directly = 20ms</li>
            <li>You're adding latency!</li>
          </ul>
        </li>
        <li><strong>Data changes frequently:</strong>
          <ul>
            <li>Stock prices updating every second</li>
            <li>Cache always stale, constant invalidation</li>
            <li>Overhead of cache management &gt; benefit</li>
          </ul>
        </li>
        <li><strong>Small, fast queries:</strong>
          <ul>
            <li>If DB query takes 2ms with indexes</li>
            <li>Redis roundtrip might be 3ms (network + serialization)</li>
            <li>Cache is slower than database!</li>
          </ul>
        </li>
        <li><strong>Memory pressure:</strong>
          <ul>
            <li>Cache evicting entries constantly (Thrashing)</li>
          </ul>
        </li>
        <li><strong>Complex invalidation logic:</strong>
          <ul>
            <li>Bugs in invalidation → serving wrong data</li>
          </ul>
        </li>
      </ol>

      <p><strong>Golden Rule:</strong> Only cache if hit rate &gt;70% AND queries are slow (&gt;50ms) AND data doesn't change too frequently.</p>
    `,
    followUp: ''
  },
  {
    id: 'q14',
    difficulty: 'expert',
    category: 'architecture',
    number: 'Q14',
    question: 'Explain cache stampede and how to prevent it.',
    tags: ['Caching', 'Advanced'],
    hint: 'Think about what happens right after a popular cache entry expires.',
    answer: `
      <p><strong>What is Cache Stampede (Thundering Herd)?</strong><br/>
      When a popular cache entry expires, thousands of requests simultaneously hit the database to regenerate it.</p>

      <p><strong>Solutions:</strong></p>

      <p><strong>1. Probabilistic Early Expiration:</strong><br/>
      Don't wait for exact expiration. Randomly regenerate slightly early based on a probability curve. Spreads regeneration over time.</p>

      <p><strong>2. Lock-based Regeneration:</strong><br/>
      When cache misses, try to acquire a distributed lock. If acquired, query DB and populate cache. If not, wait and retry.</p>

      <p><strong>3. Background Refresh:</strong><br/>
      Refresh cache periodically in the background before it expires. The cache never actually expires from the client's perspective.</p>
    `,
    followUp: 'What are the trade-offs of each solution?'
  },
  {
    id: 'q15',
    difficulty: 'expert',
    category: 'database',
    number: 'Q15',
    question: 'Design a database sharding strategy for a global social network.',
    tags: ['Database', 'Sharding'],
    hint: 'Think about user profiles vs messages vs posts.',
    answer: `
      <p><strong>Challenge:</strong> 2 billion users, global distribution.</p>

      <p><strong>Sharding Strategy:</strong></p>

      <p><strong>1. User Data - Shard by user_id (Consistent Hashing):</strong></p>
      <ul>
        <li>Pros: Even distribution, easy to scale</li>
        <li>Cons: Cross-shard queries for friends</li>
      </ul>

      <p><strong>2. Social Graph - Separate Sharding:</strong></p>
      <ul>
        <li>Store bidirectionally (shard by follower_id and followee_id) or use a graph DB.</li>
      </ul>

      <p><strong>3. Posts - Shard by post_id + Time-based Partitioning:</strong></p>
      <ul>
        <li>Composite key: (year_month, post_id). Old posts archived to cold storage.</li>
      </ul>

      <p><strong>4. Messages - Shard by conversation_id:</strong></p>
      <ul>
        <li>Keep entire conversation on one shard. All messages between two users on the same shard. No cross-shard queries!</li>
      </ul>

      <p><strong>Handling Hot Shards:</strong></p>
      <ul>
        <li>Celebrity accounts create hot shards. Solution: Further partition hot shards or use dedicated high-performance shards for celebrities.</li>
      </ul>
    `,
    followUp: ''
  }
];
