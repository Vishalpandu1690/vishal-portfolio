"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Bebas_Neue, IBM_Plex_Mono, Crimson_Pro } from "next/font/google";
import styles from "./chapter1.module.css";
import ConceptDrawer from "@/components/concept-drawer";
import { DEEP_DIVES, WAR_STORIES, TAKEAWAYS, TUTORIAL_STEPS, DEV_TOOLS } from "./data";

/* ── Fonts ── */
const bebas = Bebas_Neue({ weight: "400", subsets: ["latin"], variable: "--font-bebas" });
const mono  = IBM_Plex_Mono({ weight: ["400", "600"], style: ["normal", "italic"], subsets: ["latin"], variable: "--font-mono-tp" });
const crimson = Crimson_Pro({ weight: ["400", "600"], style: ["normal", "italic"], subsets: ["latin"], variable: "--font-crimson" });

/* ── Data ── */
const SPEED_ROWS = [
  { label: "Homepage HTML",        slow: "2.1s",  fast: "45ms",    barW: "92%", colour: "red"   },
  { label: "User profile query",   slow: "1.8s",  fast: "12ms",    barW: "78%", colour: "red"   },
  { label: "Product listing API",  slow: "3.4s",  fast: "90ms",    barW: "100%", colour: "red"  },
  { label: "Static assets (CSS/JS)", slow: "1.2s", fast: "8ms",    barW: "52%", colour: "red"   },
];

const CONCEPT_CARDS = [
  { 
    id: "client-server",
    icon: "🖥️", 
    title: "Client-Server Model",  
    body: "Every time a user visits your site, their browser (the client) sends a request to your application (the server). The server processes it and sends back a response.",
    drawerContent: (
      <>
        <div className={styles.drawerSubhead}>The Real-World Analogy</div>
        <p className={styles.drawerProse}>
          🍕 <strong>Think of it like ordering pizza:</strong> You (the Client) call the restaurant (the Server). They make your pizza and deliver it back to you (the Response). If they&apos;re slow or understaffed, you sit there waiting, hungry.
        </p>
        <div className={styles.drawerSubhead}>The Reality of the Web</div>
        <p className={styles.drawerProse}>
          In web development, the &ldquo;client&rdquo; is a web browser (Chrome, Safari) or a mobile app running on your phone. It has limited power and doesn&apos;t have access to the main database. 
        </p>
        <p className={styles.drawerProse}>
          The &ldquo;server&rdquo; is just another computer sitting in a massive warehouse (AWS, GCP). It runs a program — maybe written in Node.js or Go — that is in an infinite loop, constantly listening for incoming requests. When it gets one, it does the heavy lifting, formats the result into HTML or JSON, and sends it back across the ocean through fiber optic cables.
        </p>
      </>
    )
  },
  { 
    id: "http-lifecycle",
    icon: "🔄", 
    title: "HTTP Request Lifecycle", 
    body: "HTTP is the language browsers and servers speak. GET requests fetch data. POST requests send data. Every image, API call, and page load is an HTTP request.",
    drawerContent: (
      <>
        <div className={styles.drawerSubhead}>The Real-World Analogy</div>
        <p className={styles.drawerProse}>
          📬 <strong>It&apos;s like the postal service:</strong> GET = &ldquo;Please send me my mail.&rdquo; POST = &ldquo;Here&apos;s a letter to deliver.&rdquo; Each request takes physical time to travel, especially if the post office is far away.
        </p>
        <div className={styles.drawerSubhead}>The Invisible Machine</div>
        <p className={styles.drawerProse}>
          When a user types <code>scaleup.com</code> into their browser and hits Enter, a complex multi-step journey begins.
        </p>
        <ol className={styles.drawerProse} style={{ paddingLeft: "1.5rem" }}>
          <li><strong>DNS Lookup:</strong> Translates &quot;scaleup.com&quot; into an IP address.</li>
          <li><strong>TCP Handshake:</strong> Establishes a secure connection between the computers.</li>
          <li><strong>The Request:</strong> Sending the actual HTTP Request (e.g. <em>&ldquo;GET /home&rdquo;</em>).</li>
          <li><strong>The Response:</strong> Waiting for the Node.js server to query the database, build the HTML, and send it back.</li>
        </ol>
      </>
    )
  },
  { 
    id: "database",
    icon: "🗄️", 
    title: "Database Basics",        
    body: "Your database stores all the data: user accounts, posts, products. When your server needs data, it queries the database. Slow queries = slow responses.",
    drawerContent: (
      <>
        <div className={styles.drawerSubhead}>The Real-World Analogy</div>
        <p className={styles.drawerProse}>
          📚 <strong>The massive library:</strong> The database is a giant library. Every time you need a book, the librarian has to go find it. Without an index (the catalog), they have to search shelf by shelf. Painfully slow.
        </p>
        <div className={styles.drawerSubhead}>The Ultimate Bottleneck</div>
        <p className={styles.drawerProse}>
          A server&apos;s memory (RAM) is ephemeral. If the server restarts, everything in RAM is gone. To persist user accounts, products, and comments, you need a Database like PostgreSQL.
        </p>
        <p className={styles.drawerProse}>
          When a request comes in, the server usually has to wait for the database. Reading from a hard drive (where the database lives) is orders of magnitude slower than reading from RAM. As your startup scales, the database becomes the single heaviest anchor dragging down your speed.
        </p>
      </>
    )
  },
  { 
    id: "caching",
    icon: "⚡", 
    title: "Caching Fundamentals",   
    body: "Instead of computing the same expensive operations over and over, you save (cache) the result. Next time someone asks for it, BAM—instant response.",
    drawerContent: (
      <>
        <div className={styles.drawerSubhead}>The Real-World Analogy</div>
        <p className={styles.drawerProse}>
          ☕ <strong>The coffee shop:</strong> Instead of roasting beans and brewing fresh coffee exactly when a customer orders, they brew a massive pot of drip coffee in advance. The first pot takes 10 minutes to make. Every cup ordered after that? Pouring it takes 5 seconds.
        </p>
        <div className={styles.drawerSubhead}>The Art of Remembering</div>
        <p className={styles.drawerProse}>
          If 10,000 users visit your homepage in an hour, and the homepage shows the same list of &ldquo;Top Categories&rdquo;, why should your server ask the database to calculate the top categories 10,000 separate times?
        </p>
        <p className={styles.drawerProse}>
          The first time a user requests the homepage, the server does the hard work. But before sending it to the user, the server saves a copy into fast, temporary storage (usually RAM). When the second user asks for the homepage 5 milliseconds later, the server instantly serves the cached copy. 2,000ms drops to 20ms.
        </p>
      </>
    )
  },
];

const CHALLENGE_QS = [
  { 
    q: "1. What's the first bottleneck you'll hit when traffic spikes 100x on your single VPS?", 
    options: ["A) Your caching layer will crash", "B) Your single server CPU will max out", "C) Your database connections will be exhausted", "D) Your CDN will fail"]
  },
  { 
    q: "2. Your server crashes at 9:05 AM. What's the fastest initial recovery?", 
    options: ["A) Restart the server and hope for the best", "B) Move the database to a separate machine", "C) Spin up a second server to load balance", "D) Start disabling heavy user features"]
  },
  { 
    q: "3. You check the logs and see: 'Error: Connection pool exhausted'. What does this mean?", 
    options: ["A) Your server ran out of memory", "B) Your database can't accept any more simultaneous connections", "C) The DNS lookup failed", "D) The cache is full and evicting data"]
  },
];

/* ══════════════════════════════════════════════════════ */
export default function Chapter1Page() {
  const [activeConceptId, setActiveConceptId] = useState<string | null>(null);
  const [expandedDeepDive, setExpandedDeepDive] = useState<string | null>(null);

  const activeConcept = CONCEPT_CARDS.find((c) => c.id === activeConceptId);

  /* Scroll-reveal */
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) =>
        entries.forEach((e) => {
          if (e.isIntersecting) e.target.classList.add(styles.visible);
        }),
      { threshold: 0.08 },
    );

    document.querySelectorAll(`.${styles.animSection}`).forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <div className={`${styles.page} ${bebas.variable} ${mono.variable} ${crimson.variable}`}>
      {/* Noise overlay */}
      <div className={styles.noise} aria-hidden="true" />

      {/* ══ HERO ══ */}
      <div className={styles.hero}>
        <div className={styles.chapterTag}>
          Chapter 01 &nbsp;·&nbsp; The Beginning
        </div>

        <h1 className={styles.heroH1}>
          The First{" "}
          <span className={styles.heroAccent}>10 Users.</span>
        </h1>

        <p className={styles.heroSub}>
          Launch day. Your app is live. A single server, a simple database,
          and dreams of changing the world. Then someone says:{" "}
          &ldquo;Why is this so slow?&rdquo;
        </p>

        <div className={styles.scrollHint}>scroll to begin</div>
      </div>

      {/* ══ ACT I — THE SCENE ══ */}
      <section id="s1" className={`${styles.animSection} ${styles.act}`}>
        <div className={styles.sectionLabel}>Act I — The Scene</div>
        <h2 className={styles.h2}>
          It&apos;s Launch Day.<br />
          Everything Works.<br />
          <span className={styles.heroAccent}>Barely.</span>
        </h2>

        <div className={styles.narrativeBox} data-label="Narrative">
          <p>
            You click deploy. The terminal floods with green text. Build successful. Container starting. Health checks passing. <strong>Your app is live.</strong>
          </p>
          <p>
            You post the link on Twitter, Reddit, and a few Discord servers. Then you wait.
          </p>

          <div className={styles.dialogue}>
            <div className={styles.speaker}>SLACK - #general • 9:47 AM</div>
            <p><strong>Sarah (Co-founder):</strong> We got our first user! 🎉</p>
            <p><strong>You:</strong> Wait, really? Who?</p>
            <p><strong>Sarah:</strong> Some guy named Mike from Seattle. He just signed up!</p>
            <p><strong>You:</strong> One down. 999,999 to go.</p>
          </div>

          <p>
            By noon, you have 10 users. Ten people actually using something you built. The thrill is indescribable. You watch the logs like a hawk.
          </p>
          <p>
            Then Sarah pings you again.
          </p>

          <div className={styles.dialogue}>
            <div className={styles.speaker}>SLACK - #general • 2:15 PM</div>
            <p><strong>Sarah:</strong> Hey... the homepage is loading REALLY slow for me.</p>
            <p><strong>You:</strong> How slow?</p>
            <p><strong>Sarah:</strong> Like 10 seconds. Maybe more? Mike just emailed saying the same thing.</p>
            <p><strong>You:</strong> [frantically opens Chrome DevTools]</p>
          </div>
        </div>

        <div className={styles.crisisBox}>
          <p>
            <strong>8.2 seconds to first paint.</strong> Your heart sinks.
          </p>
          <p>
            Eight seconds is an eternity on the web. Users won&apos;t wait that long. They&apos;ll bounce. They&apos;ll never come back.
          </p>
          <p>
            You have 10 users. <em>And they&apos;re already leaving.</em>
          </p>
        </div>
      </section>

      {/* ══ ACT II — UNDERSTANDING THE PROBLEM ══ */}
      <section id="s2" className={`${styles.animSection} ${styles.actDark}`}>
        <div className={styles.sectionLabel}>Act II — Understanding the Problem</div>
        <h2 className={styles.h2}>
          Where Is The<br />
          <span className={styles.heroAccent}>Time Going?</span>
        </h2>

        <p className={styles.prose}>
          Before you fix anything, you need to understand <strong>what&apos;s slow and why</strong>.
          This is the first real engineering instinct: <em>measure before you guess.</em>
        </p>

        <div className={styles.divider}>the architecture right now</div>

        {/* Architecture diagram */}
        <div className={styles.archContainer}>
          <div className={styles.archDiagram}>
            <div className={styles.archBox}>
              <div className={styles.archBoxLabel}>Client</div>
              <div className={styles.archBoxTitle}>Browser</div>
              <div className={styles.archBoxSub}>User&apos;s laptop</div>
            </div>

            <div className={styles.archArrow}>→</div>

            <div className={styles.archBox}>
              <div className={styles.archBoxLabel}>Server</div>
              <div className={styles.archBoxTitle}>Node.js</div>
              <div className={styles.archBoxSub}>$5/mo VPS</div>
            </div>

            <div className={styles.archArrow}>→</div>

            <div className={styles.archBox}>
              <div className={styles.archBoxLabel}>Database</div>
              <div className={styles.archBoxTitle}>PostgreSQL</div>
              <div className={styles.archBoxSub}>same machine</div>
            </div>
          </div>
          <div className={styles.archCaption}>
            Everything runs on one machine — the classic &quot;monolith on a VPS&quot;
          </div>
        </div>

        <p className={styles.prose}>
          Let’s trace exactly what happens when Mike loads your homepage from Seattle:
        </p>

        <div className={styles.codeBlock} data-lang="Trace Log" style={{ background: "#0a0a0a", borderLeft: "2px solid #e8a020" }}>
          <div style={{ fontFamily: "var(--font-mono-tp), monospace", fontSize: "14px", lineHeight: 2, color: "#c8bfb0" }}>
            <div><strong style={{color:"#e8a020"}}>1. Browser → Server:</strong> &quot;Give me the homepage&quot; <span style={{color:"#777"}}>(300ms - Mike is in Seattle, server is in Virginia)</span></div>
            <div><strong style={{color:"#e8a020"}}>2. Server → Database:</strong> &quot;Get all blog posts&quot; <span style={{color:"#777"}}>(2000ms - no indexes, full table scan)</span></div>
            <div><strong style={{color:"#e8a020"}}>3. Database → Server:</strong> Returns 500 rows <span style={{color:"#777"}}>(500ms)</span></div>
            <div><strong style={{color:"#e8a020"}}>4. Server:</strong> Renders HTML, processes assets <span style={{color:"#777"}}>(1500ms)</span></div>
            <div><strong style={{color:"#e8a020"}}>5. Server → Database:</strong> &quot;Get featured products&quot; <span style={{color:"#777"}}>(1200ms - another slow query)</span></div>
            <div><strong style={{color:"#e8a020"}}>6. Database → Server:</strong> Returns data <span style={{color:"#777"}}>(400ms)</span></div>
            <div><strong style={{color:"#e8a020"}}>7. Server → Browser:</strong> Sends back 3MB of unoptimized HTML <span style={{color:"#777"}}>(2300ms)</span></div>
            <div style={{ marginTop: "16px", paddingTop: "16px", borderTop: "1px dashed #333", color: "#c0392b" }}>
              <strong>TOTAL: 8.2 seconds</strong> 😱
            </div>
          </div>
        </div>


      </section>

      {/* ══ ACT III — THE CONCEPTS ══ */}
      <section id="s3" className={`${styles.animSection} ${styles.act}`}>
        <div className={styles.sectionLabel}>Act III — The Concepts</div>
        <h2 className={styles.h2}>
          Four Ideas That<br />
          <span className={styles.heroAccent}>Change Everything.</span>
        </h2>

        <p className={styles.prose}>
          Before you write a single line of code, you need to understand
          <strong> four foundational concepts</strong>. Every fix in this chapter
          comes from one of these.
        </p>

        <div className={styles.conceptGrid}>
          {CONCEPT_CARDS.map((card) => (
            <div key={card.title} className={styles.conceptCard}>
              <h3 className={styles.conceptCardTitle}>
                {card.icon} {card.title}
              </h3>
              <p className={styles.conceptCardBody}>{card.body}</p>
              <button 
                className={styles.deepDiveBtn} 
                onClick={() => setActiveConceptId(card.id)}
              >
                Read Deep Dive →
              </button>
            </div>
          ))}
        </div>

        <div className={styles.insight}>
          <div className={styles.insightIcon}>💡</div>
          <div className={styles.insightText}>
            <strong>The core principle:</strong> At small scale, the most impactful
            optimization is always the same — <em>stop doing unnecessary work</em>.
            Cache what doesn&apos;t change. Serve static files without touching the server.
            Index the queries that run on every page load.
          </div>
        </div>
      </section>

      {/* ══ ACT IV — THE FIX (Before/After Code) ══ */}
      <section id="s4" className={`${styles.animSection} ${styles.actDark}`}>
        <div className={styles.sectionLabel}>Act IV — The Fix</div>
        <h2 className={styles.h2}>
          Before &amp; After.<br />
          <span className={styles.heroAccent}>The Code.</span>
        </h2>

        <p className={styles.prose}>
          Let&apos;s look at your homepage endpoint <em>before</em> and <em>after</em> optimization.
        </p>

        <div className={styles.divider}>before — the naive homepage</div>

        <p className={styles.prose}>
          Visually, this is what happens when Alex requests the homepage:
        </p>

        {/* Before Diagram */}
        <div className={styles.archContainer}>
          <div className={styles.archDiagram} style={{ padding: "24px", background: "#1a0f0f", borderColor: "#3a1515" }}>
            <div className={styles.archBox} style={{ width: "auto", minWidth: 100 }}>
              <div className={styles.archBoxLabel}>User</div>
              <div className={styles.archBoxTitle}>Alex</div>
              <div className={styles.archBoxSub}>waits 8s...</div>
            </div>
            
            <div className={styles.archArrow} style={{ color: "#ef5a48" }}>→</div>
            
            <div className={styles.archBox} style={{ width: "auto", minWidth: 140 }}>
              <div className={styles.archBoxLabel} style={{ color: "#ef5a48" }}>Server</div>
              <div className={styles.archBoxTitle}>Wait...</div>
            </div>
            
            <div className={styles.archArrow} style={{ color: "#ef5a48" }}>→</div>
            
            <div className={styles.archBox} style={{ width: "auto", minWidth: 160, borderColor: "#ef5a48", background: "#3a1515" }}>
              <div className={styles.archBoxLabel} style={{ color: "#ef5a48" }}>Database</div>
              <div className={styles.archBoxSub} style={{ color: "#f5f0e8" }}>1. SELECT categories</div>
              <div className={styles.archBoxSub} style={{ color: "#f5f0e8" }}>2. SELECT stats</div>
              <div className={styles.archBoxSub} style={{ color: "#f5f0e8" }}>3. SELECT products</div>
              <div className={styles.archBoxSub} style={{ color: "#f5f0e8" }}>4. SELECT reviews</div>
            </div>
          </div>
        </div>

        <p className={styles.prose}>
          And here is the code that causes that traffic jam:
        </p>

        <div className={styles.codeBlock} data-lang="Node.js / Express">
          <pre className={styles.pre}>
{`// ❌ BEFORE: Every request hits the database
app.get('/', async (req, res) => {
  `}<span className={styles.bad}>{`const featured = await db.query('SELECT * FROM products ORDER BY created_at DESC LIMIT 12');`}</span>{`
  `}<span className={styles.bad}>{`const categories = await db.query('SELECT * FROM categories');`}</span>{`
  `}<span className={styles.bad}>{`const stats = await db.query('SELECT COUNT(*) as total FROM products');`}</span>{`
  `}<span className={styles.bad}>{`const reviews = await db.query('SELECT * FROM reviews ORDER BY rating DESC LIMIT 5');`}</span>{`

  `}<span className={styles.cm}>{`// 4 DB queries, every single page load`}</span>{`
  `}<span className={styles.cm}>{`// categories and stats barely change — why query every time?`}</span>{`

  const html = renderHomepage(featured, categories, stats, reviews);
  res.send(html);
});`}
          </pre>
        </div>

        <p className={styles.prose}>
          <strong>4 database queries on every page load.</strong> Categories change once a week.
          Stats change once an hour. But the server treats every request like it&apos;s the first one
          ever made. It forgets everything the moment the response is sent.
        </p>

        <div className={styles.divider}>after — with caching</div>

        <p className={styles.prose}>
          By caching data that doesn&apos;t change frequently, we cut the journey in half for most requests. Look at the new flow:
        </p>

        {/* After Diagram */}
        <div className={styles.archContainer}>
          <div className={styles.archDiagram} style={{ padding: "24px", background: "#0e1a12", borderColor: "#1a7a4a" }}>
            <div className={styles.archBox} style={{ width: "auto", minWidth: 100 }}>
              <div className={styles.archBoxLabel}>User</div>
              <div className={styles.archBoxTitle}>Alex</div>
              <div className={styles.archBoxSub}>waits 2s</div>
            </div>
            
            <div className={styles.archArrow} style={{ color: "#6ab87a" }}>→</div>
            
            <div className={styles.archBox} style={{ width: "auto", minWidth: 140, borderColor: "#6ab87a", background: "#1a7a4a22" }}>
              <div className={styles.archBoxLabel} style={{ color: "#6ab87a" }}>Server</div>
              <div className={styles.archBoxSub} style={{ color: "#f5f0e8" }}>1. Get Cat (RAM)</div>
              <div className={styles.archBoxSub} style={{ color: "#f5f0e8" }}>2. Get Stats (RAM)</div>
            </div>
            
            <div className={styles.archArrow} style={{ color: "#6ab87a" }}>→</div>
            
            <div className={styles.archBox} style={{ width: "auto", minWidth: 160 }}>
              <div className={styles.archBoxLabel}>Database</div>
              <div className={styles.archBoxSub}>3. SELECT products</div>
              <div className={styles.archBoxSub}>4. SELECT reviews</div>
            </div>
          </div>
        </div>

        <p className={styles.prose}>
          Notice the difference? The server already holds the categories and stats in memory. It only asks the database for the newest products and reviews.
        </p>

        <div className={styles.codeBlock} data-lang="Node.js / Express">
          <pre className={styles.pre}>
{`// ✅ AFTER: Cache what doesn't change
const cache = new Map();

function cached(key, ttlMs, fetcher) {
  const entry = cache.get(key);
  if (entry && Date.now() - entry.ts < ttlMs) return entry.data;

  const data = fetcher();
  cache.set(key, { data, ts: Date.now() });
  return data;
}

app.get('/', async (req, res) => {
  `}<span className={styles.good}>{`const categories = await cached('cats', 3600_000, () =>`}</span>{`
  `}<span className={styles.good}>{`  db.query('SELECT * FROM categories'));`}</span>{`

  `}<span className={styles.good}>{`const stats = await cached('stats', 600_000, () =>`}</span>{`
  `}<span className={styles.good}>{`  db.query('SELECT COUNT(*) as total FROM products'));`}</span>{`

  `}<span className={styles.cm}>{`// Only these actually need fresh data per request`}</span>{`
  const featured = await db.query(
    'SELECT * FROM products ORDER BY created_at DESC LIMIT 12'
  );
  const reviews = await db.query(
    'SELECT * FROM reviews ORDER BY rating DESC LIMIT 5'
  );

  const html = renderHomepage(featured, categories, stats, reviews);
  res.send(html);
});`}
          </pre>
        </div>

        <div className={styles.insight}>
          <div className={styles.insightIcon}>⚡</div>
          <div className={styles.insightText}>
            <strong>Result:</strong> From 4 DB queries to 2 on most requests.
            Categories are cached for 1 hour. Stats are cached for 10 minutes.
            The homepage drops from <em>8 seconds to ~2 seconds</em> with this
            single change. No infrastructure changes. No new services. Just{" "}
            <em>remembering</em>.
          </div>
        </div>

        <div className={styles.divider}>next fix — database indexing</div>

        <p className={styles.prose}>
          The two remaining queries are still slow because there are no indexes.
          PostgreSQL is scanning every row in the table:
        </p>

        <div className={styles.codeBlock} data-lang="SQL">
          <pre className={styles.pre}>
{`-- ❌ BEFORE: Full table scan (sequential scan on 50,000 rows)
EXPLAIN ANALYZE
SELECT * FROM products ORDER BY created_at DESC LIMIT 12;
`}<span className={styles.bad}>{`-- Seq Scan on products  cost=0.00..4250.00  rows=50000`}</span>{`
`}<span className={styles.bad}>{`-- Planning time: 0.2ms  Execution time: 1,847ms`}</span>{`

-- ✅ AFTER: Add an index
`}<span className={styles.good}>{`CREATE INDEX idx_products_created ON products (created_at DESC);`}</span>{`

EXPLAIN ANALYZE
SELECT * FROM products ORDER BY created_at DESC LIMIT 12;
`}<span className={styles.good}>{`-- Index Scan using idx_products_created  cost=0.00..1.52  rows=12`}</span>{`
`}<span className={styles.good}>{`-- Planning time: 0.1ms  Execution time: 0.4ms`}</span>
          </pre>
        </div>

        <p className={styles.prose}>
          <strong>From 1,847ms to 0.4ms.</strong> The index gives PostgreSQL a sorted shortcut
          — it doesn&apos;t need to read all 50,000 rows just to find the 12 newest ones.
        </p>

        <div className={styles.divider}>final fix — serve static files properly</div>

        <p className={styles.prose}>
          CSS, JavaScript, and images are sent through your Express server — a Node.js
          process reading files from disk and piping them through HTTP. Instead, serve
          them with <em>proper cache headers</em>:
        </p>

        <div className={styles.codeBlock} data-lang="Node.js / Express">
          <pre className={styles.pre}>
{`// ✅ Static files with cache headers
app.use('/static', express.static('public', {
  `}<span className={styles.good}>{`maxAge: '7d',            // Browser caches for 7 days`}</span>{`
  `}<span className={styles.good}>{`immutable: true,         // Won't even check if changed`}</span>{`
  `}<span className={styles.good}>{`etag: true,              // Validation if cache expires`}</span>{`
}));`}
          </pre>
        </div>

        <p className={styles.prose}>
          After the first visit, the browser never re-downloads your CSS or JS.
          <strong> Page loads drop from 8s → 2s → under 800ms.</strong>
        </p>
      </section>

      {/* ══ ACT V — THE RESULT ══ */}
      <section id="s5" className={`${styles.animSection} ${styles.actSpecial}`}>
        <div className={styles.sectionLabel}>Act V — The Result</div>
        <h2 className={styles.h2}>
          The Architecture<br />
          <span className={styles.heroAccent}>After The Fix.</span>
        </h2>

        <p className={styles.prose}>
          After three targeted changes — caching, indexing, static file headers — here&apos;s
          what the system looks like:
        </p>

        {/* The Transformation Table */}
        <div className={styles.tableWrap}>
          <table className={styles.table}>
            <thead>
              <tr>
                <th>Step</th>
                <th>Before</th>
                <th>After</th>
                <th>Improvement</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Network latency</td>
                <td className={styles.timeSlow}>300ms</td>
                <td className={styles.timeFast}>300ms</td>
                <td>-</td>
              </tr>
              <tr>
                <td>Database queries</td>
                <td className={styles.timeSlow}>3200ms</td>
                <td className={styles.timeFast}>1ms</td>
                <td>-99.97%</td>
              </tr>
              <tr>
                <td>Server processing</td>
                <td className={styles.timeSlow}>1500ms</td>
                <td className={styles.timeFast}>50ms</td>
                <td>-96.7%</td>
              </tr>
              <tr>
                <td>Response download</td>
                <td className={styles.timeSlow}>2300ms</td>
                <td className={styles.timeFast}>50ms</td>
                <td>-97.8%</td>
              </tr>
              <tr>
                <td>Static assets (CDN)</td>
                <td className={styles.timeSlow}>900ms</td>
                <td className={styles.timeFast}>0ms</td>
                <td>-100%</td>
              </tr>
              <tr className={styles.tableTotal}>
                <td>TOTAL</td>
                <td className={styles.timeSlow}>8.2s</td>
                <td className={styles.timeFast}>401ms</td>
                <td className={styles.timeFast}>-95.1%</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className={styles.narrativeBox} data-label="Result">
          <p>
            You refresh Sarah&apos;s Slack message. <strong>&ldquo;Homepage loads instantly now. Amazing!&rdquo;</strong>
          </p>
          <p>
            Mike emails: <strong>&ldquo;Wow, did you just fix that? Feels like a different app!&rdquo;</strong>
          </p>
        </div>
      </section>

      {/* ══ ACT VI — TEST YOURSELF ══ */}
      <section id="s6" className={`${styles.animSection} ${styles.act}`}>
        <div className={styles.sectionLabel}>Act VI — Test Yourself</div>
        <h2 className={styles.h2}>
          Can You Solve<br />
          <span className={styles.heroAccent}>These Crises?</span>
        </h2>

        <p className={styles.prose}>
          You&apos;ve fixed the homepage. Your 10 users are happy. But now you&apos;re getting traction on Twitter. A tech influencer with 50K followers is about to tweet about you tomorrow morning at 9 AM EST.
        </p>
        <p className={styles.prose}>
          <strong>Your current setup:</strong> Single server (2 CPU, 4GB RAM), PostgreSQL database, and an in-memory cache running on the same machine. Everything works great... for 10 users.
        </p>

        {CHALLENGE_QS.map((cq, i) => (
          <div key={i} className={styles.challengeBox}>
            <p className={styles.challengeQ} dangerouslySetInnerHTML={{ __html: cq.q }} />
            <div className={styles.options}>
              {cq.options.map((opt, j) => (
                <div key={j} className={styles.option}>{opt}</div>
              ))}
            </div>
          </div>
        ))}
      </section>

      {/* ══ ACT VII — DEEP DIVES ══ */}
      <section className={`${styles.animSection} ${styles.act}`}>
        <div className={styles.sectionLabel}>Act VII — Deep Dives</div>
        <h2 className={styles.h2}>Go Deeper<br /><span className={styles.heroAccent}>(For the Curious)</span></h2>
        
        <div className={styles.deepDiveContainer}>
          {DEEP_DIVES.map(dd => (
            <div key={dd.id} className={styles.deepDiveCard}>
              <div 
                className={styles.deepDiveHeader} 
                onClick={() => setExpandedDeepDive(expandedDeepDive === dd.id ? null : dd.id)}
              >
                <h3>{dd.title}</h3>
                <span className={`${styles.toggleIcon} ${expandedDeepDive === dd.id ? styles.active : ""}`}>+</span>
              </div>
              {expandedDeepDive === dd.id && (
                <div 
                  className={styles.deepDiveContent}
                  dangerouslySetInnerHTML={{ __html: dd.content }}
                />
              )}
            </div>
          ))}
        </div>
      </section>

      {/* ══ ACT VIII — WAR STORIES ══ */}
      <section className={`${styles.animSection} ${styles.actDark}`}>
        <div className={styles.sectionLabel}>Act VIII — War Stories</div>
        <h2 className={styles.h2}>Real Companies,<br /><span className={styles.heroAccent}>Real Failures, Real Lessons</span></h2>
        
        <div className={styles.caseStudies}>
          {WAR_STORIES.map(ws => (
            <div key={ws.id} className={styles.caseStudyCard}>
              <div className={styles.caseStudyHeader}>
                <h3>{ws.title}</h3>
                <div className={styles.caseStudyMeta}>
                  {ws.tags.map(t => <span key={t} className={styles.metaTag}>{t}</span>)}
                </div>
              </div>
              <div className={styles.caseStudyContent}>
                <div className={styles.caseStudyProblem}>
                  <h4>The Problem</h4>
                  <p>{ws.problem}</p>
                </div>
                <div className={styles.caseStudySolution}>
                  <h4>{ws.solutionTitle}</h4>
                  <ul>
                    {ws.solutionList.map(s => <li key={s}>{s}</li>)}
                  </ul>
                </div>
                <div className={styles.caseStudyResult}>
                  <h4>The Result</h4>
                  <p>{ws.result}</p>
                </div>
                <div className={styles.caseStudyLesson}>
                  <strong>💡 Lesson for You:</strong> {ws.lesson}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ══ ACT IX — TAKEAWAYS ══ */}
      <section className={`${styles.animSection} ${styles.act}`}>
        <div className={styles.sectionLabel}>Act IX — What You Learned</div>
        <h2 className={styles.h2}>Key<br /><span className={styles.heroAccent}>Takeaways</span></h2>
        
        <div className={styles.conceptsGrid}>
          {TAKEAWAYS.map((ta, i) => (
            <div key={i} className={styles.conceptCard}>
              <div className={styles.conceptIcon}>{ta.icon}</div>
              <h3 className={styles.conceptTitle}>{ta.title}</h3>
              <p className={styles.conceptBody}>{ta.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ══ ACT X — HANDS-ON TUTORIAL ══ */}
      <section className={`${styles.animSection} ${styles.actDark}`}>
        <div className={styles.sectionLabel}>Act X — Hands-On Tutorial</div>
        <h2 className={styles.h2}>Build It Yourself:<br /><span className={styles.heroAccent}>The Optimized Homepage</span></h2>
        
        <div className={styles.tutorialSteps}>
          {TUTORIAL_STEPS.map((ts) => (
            <div key={ts.number} className={styles.tutorialStep}>
              <div className={styles.stepNumber}>STEP {ts.number}</div>
              <h3 className={styles.stepTitle}>{ts.title}</h3>
              
              <div className={styles.codeBlock}>
                <div className={`${styles.codeHeader} ${styles.codeNeutral}`}>
                  <span>{ts.codeTitle}</span>
                </div>
                <pre><code>{ts.code}</code></pre>
              </div>
              <div className={styles.stepResult}>{ts.result}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ══ ACT XI — DEV TOOLS ══ */}
      <section className={`${styles.animSection} ${styles.act}`}>
        <div className={styles.sectionLabel}>Act XI — Developer Tools</div>
        <h2 className={styles.h2}>The Tools<br /><span className={styles.heroAccent}>Pros Use</span></h2>
        
        <div className={styles.toolsGrid}>
          {DEV_TOOLS.map(dt => (
            <div key={dt.id} className={styles.toolCard}>
              <h3 className={styles.toolTitle}>{dt.icon} {dt.title}</h3>
              <p className={styles.toolDescription}>{dt.description}</p>
              <div className={styles.toolTip}>{dt.tip}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ══ CLIFFHANGER ══ */}
      <div className={`${styles.animSection} ${styles.cliffhanger}`}>
        <div className={styles.cliffBig}>
          But Then,<br />
          <span className={styles.heroAccent}>It Happens.</span>
        </div>

        <p className={styles.cliffProse}>
          A celebrity with 2 million followers just tweeted about your app.
        </p>
        <p className={styles.cliffProse}>
          Traffic spikes from 10 users to <strong>10,000 in 6 hours</strong>.
          Your single server is serving 200 requests per second. The CPU hits 100%.
          The database connection pool is exhausted.
        </p>
        <p className={styles.cliffProse}>
          Your browser shows: <em>502 Bad Gateway.</em>
        </p>
        <p className={styles.cliffProse}>
          Everything you just built — the caching, the indexes, the optimizations —
          they bought you time. But <strong>they can&apos;t save you from this.</strong>
        </p>

        <div className={styles.cliffTeaser}>
          Chapter 02 — The Viral Spike
        </div>

        <p className={styles.cliffProse} style={{ color: "#555", fontSize: "0.95rem" }}>
          Load balancing. Horizontal scaling. Session management. CDN.
          <br />
          <em>Coming soon.</em>
        </p>
      </div>

      {/* ══ FOOTER ══ */}
      <div className={`${styles.animSection} ${styles.footerCta}`}>
        <p className={styles.footerProse}>
          You just survived your first crisis. The fundamentals you learned —
          caching, indexing, static file optimization — are <em>permanent tools</em>.
          They will come back in every chapter ahead.
        </p>
        <div style={{ display: "flex", justifyContent: "center", flexWrap: "wrap", gap: 12 }}>
          <Link href="/study/system-design" className={styles.btn}>
            ← Back to chapters
          </Link>
          <span className={styles.btnDim} style={{ cursor: "not-allowed" }}>
            Chapter 02 — Coming soon
          </span>
        </div>
      </div>

      {/* Drawer */}
      <ConceptDrawer
        isOpen={!!activeConceptId}
        onClose={() => setActiveConceptId(null)}
        title={activeConcept?.title || ""}
      >
        {activeConcept?.drawerContent}
      </ConceptDrawer>
    </div>
  );
}
