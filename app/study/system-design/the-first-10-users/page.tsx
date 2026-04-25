"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Bebas_Neue, IBM_Plex_Mono, Crimson_Pro } from "next/font/google";
import styles from "./chapter1.module.css";
import ConceptDrawer from "@/components/concept-drawer";

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
    body: "The user's browser (client) sends an HTTP request → your server processes it → sends back a response. Every web interaction is this loop. The 'server' isn't magic — it's a program on a computer listening on port 80 or 443.",
    drawerContent: (
      <>
        <p className={styles.drawerProse}>
          Imagine going to a restaurant. You are the <strong>Client</strong>. You look at the menu and tell the waiter what you want. You don&apos;t cook the food yourself.
        </p>
        <p className={styles.drawerProse}>
          The kitchen is the <strong>Server</strong>. They receive your order (the <em>Request</em>), they gather the ingredients, they cook the meal, and they hand it back to the waiter to bring to your table (the <em>Response</em>).
        </p>
        <div className={styles.drawerSubhead}>The Reality of the Web</div>
        <p className={styles.drawerProse}>
          In web development, the &ldquo;client&rdquo; is a web browser (Chrome, Safari) or a mobile app running on your phone. It has limited power and doesn&apos;t have access to the main database. 
        </p>
        <p className={styles.drawerProse}>
          The &ldquo;server&rdquo; is just another computer sitting in a massive warehouse (AWS, GCP). It runs a program — maybe written in Node.js, Python, or Go — that is in an infinite loop, constantly listening for incoming requests. When it gets one, it does the heavy lifting, talks to the database, formats the result into HTML or JSON, and sends it back across the ocean through fiber optic cables.
        </p>
      </>
    )
  },
  { 
    id: "http-lifecycle",
    icon: "🔄", 
    title: "HTTP Request Lifecycle", 
    body: "DNS lookup → TCP handshake → HTTP request → Server processing → Response → Browser render. Each step costs time. The goal: eliminate unnecessary steps and speed up the rest.",
    drawerContent: (
      <>
        <p className={styles.drawerProse}>
          When a user types <code>scaleup.com</code> into their browser and hits Enter, a massive invisible machine hums to life. It feels instantaneous, but it is actually a complex multi-step journey.
        </p>
        <div className={styles.drawerSubhead}>Step 1: DNS Lookup</div>
        <p className={styles.drawerProse}>
          Browsers don&apos;t know what &ldquo;scaleup.com&rdquo; is. They only understand IP addresses (like <code>192.168.1.1</code>). The browser asks a Domain Name System (DNS) server to translate the name into an IP address. Think of this as looking up a name in a phonebook.
        </p>
        <div className={styles.drawerSubhead}>Step 2: TCP Handshake</div>
        <p className={styles.drawerProse}>
          Before data can be sent, the client and server must establish a secure connection. They send invisible packets back and forth effectively saying: &ldquo;Hello, are you there?&rdquo; — &ldquo;Yes, I am here.&rdquo; — &ldquo;Great, I am about to send data.&rdquo;
        </p>
        <div className={styles.drawerSubhead}>Step 3: The Request &amp; Response</div>
        <p className={styles.drawerProse}>
          The browser finally sends the actual HTTP Request: <em>&ldquo;GET /home&rdquo;</em>. Your Node.js server receives this, queries the database, builds the HTML, and sends it back as the Response. If any of these steps block, the user sees a blank white screen. 
        </p>
      </>
    )
  },
  { 
    id: "database",
    icon: "🗄️", 
    title: "Database Basics",        
    body: "Your app stores data in a relational database (PostgreSQL). Every page load queries the database. Slow queries = slow pages. The database is almost always the first bottleneck.",
    drawerContent: (
      <>
        <p className={styles.drawerProse}>
          A server&apos;s memory (RAM) is ephemeral. If the server restarts, everything in RAM is gone. To persist user accounts, products, and comments, you need a Database.
        </p>
        <p className={styles.drawerProse}>
          In our case, we are using <strong>PostgreSQL</strong>, a relational database. It stores data in highly structured tables with rows and columns, much like a giant Excel spreadsheet.
        </p>
        <div className={styles.drawerSubhead}>The Bottleneck</div>
        <p className={styles.drawerProse}>
          When a request comes in, the server usually has to wait for the database. If you ask the database to &ldquo;Find the 10 newest products,&rdquo; and there are 50,000 products, the database has to scan through them. 
        </p>
        <p className={styles.drawerProse}>
          Reading from a hard drive (where the database lives) is orders of magnitude slower than reading from RAM. As your startup scales, the database becomes the single heaviest anchor dragging down your speed. This is why we add <strong>Indexes</strong> — which act like the index at the back of a thick book, telling the database exactly where to look without scanning every page.
        </p>
      </>
    )
  },
  { 
    id: "caching",
    icon: "⚡", 
    title: "Caching Fundamentals",   
    body: "Don't compute the same thing twice. Store the result of expensive operations (DB queries, API calls, rendered HTML) in fast memory (RAM). Serve the cached copy instead of re-computing.",
    drawerContent: (
      <>
        <p className={styles.drawerProse}>
          If 10,000 users visit your homepage in an hour, and the homepage shows the same list of &ldquo;Top Categories&rdquo;, why should your server ask the database to calculate the top categories 10,000 separate times?
        </p>
        <p className={styles.drawerProse}>
          <strong>Caching</strong> is the art of remembering.
        </p>
        <div className={styles.drawerSubhead}>How It Works</div>
        <p className={styles.drawerProse}>
          The first time a user requests the homepage, the server does the hard work. It queries the database, gets the categories, and builds the HTML. 
        </p>
        <p className={styles.drawerProse}>
          But before sending it to the user, the server saves a copy of that HTML string into a fast, temporary storage (usually RAM, or a dedicated cache like Redis). 
        </p>
        <p className={styles.drawerProse}>
          When the second user asks for the homepage 5 milliseconds later, the server intercepts the request. It says, <em>&ldquo;I already know the answer to this!&rdquo;</em> It skips the database entirely and instantly serves the copy from the cache. The page load drops from 2,000ms to 20ms.
        </p>
      </>
    )
  },
];

const CHALLENGE_QS = [
  { q: "Your homepage makes 6 database queries on every page load. 4 of them return the same data for every user. What do you do?", hint: "Think: which results change per-user vs. which are global?" },
  { q: "A user uploads a 5MB profile image. Your server stores it in the database as a BLOB. Page loads spike to 4 seconds. Why? What's the fix?", hint: "Think: should large binary data live in the same place as rows and queries?" },
  { q: "You add gzip compression to your server responses. CSS/JS files drop from 1.2s to 180ms. But the homepage still takes 3s. Where's the bottleneck now?", hint: "Think: what wasn't affected by compression?" },
];

/* ══════════════════════════════════════════════════════ */
export default function Chapter1Page() {
  const [activeConceptId, setActiveConceptId] = useState<string | null>(null);

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
            It&apos;s 9 AM on a Tuesday. You&apos;ve been awake for 36 hours. The app —
            <strong> ScaleUp</strong> — is live. Your co-founder posts the link on Twitter.
          </p>
          <p>
            The first user signs up at 9:07 AM. Then another. Then three more. By 10 AM,
            you have <em>10 registered users</em>. You refresh the analytics dashboard
            and feel a rush of adrenaline.
          </p>
          <p>
            Then user #4 sends a message: <strong>&ldquo;Hey, your homepage took
            8 seconds to load. Is this normal?&rdquo;</strong>
          </p>
          <p>
            You check. It is, in fact, normal. Your entire application —
            frontend, backend, database — runs on a single $5/month server.
            You wrote the code in a weekend. There is no caching. No CDN.
            No optimization of any kind.
          </p>
          <p>
            <em>It works. But it&apos;s about to stop working.</em>
          </p>
        </div>

        <div className={styles.crisisBox}>
          <p>
            <strong>The homepage loads in 8 seconds.</strong>
          </p>
          <p>
            Users are bouncing before the page finishes rendering. Your bounce rate
            is 73%. Google says anything over 3 seconds is a death sentence for retention.
          </p>
          <p>
            You have 10 users. <em>You&apos;re already losing them.</em>
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
          Let’s use an example. User <strong>Alex</strong> types <code>scaleup.com</code> and hits Enter. Every page load triggers this exact sequence:
        </p>
        <ol className={styles.prose} style={{ paddingLeft: "1.5rem", listStyle: "decimal" }}>
          <li style={{ marginBottom: 12 }}><strong>The browser asks the server:</strong> <code>GET /</code> (Give me the homepage).</li>
          <li style={{ marginBottom: 12 }}><strong>The server queries the database:</strong> It connects to PostgreSQL and runs 4 separate SQL queries sequentially (e.g., <code>SELECT * FROM categories</code>, <code>SELECT * FROM products</code>...).</li>
          <li style={{ marginBottom: 12 }}><strong>The database works:</strong> It scans tens of thousands of rows on the hard drive to find the matching data, taking full seconds.</li>
          <li style={{ marginBottom: 12 }}><strong>The server builds the HTML:</strong> It takes the database row results and loops through them to build an HTML string: <code>&lt;ul&gt;&lt;li&gt;Product 1...&lt;/li&gt;&lt;/ul&gt;</code></li>
          <li style={{ marginBottom: 12 }}><strong>The server sends it back:</strong> It sends this raw HTML string back to Alex&apos;s browser, along with large uncompressed CSS and JS files.</li>
        </ol>
        <p className={styles.prose}>
          <strong>Nothing is cached. Nothing is pre-built. Nothing is served from the edge.</strong>
        </p>

        <div className={styles.insight}>
          <div className={styles.insightIcon}>🔍</div>
          <div className={styles.insightText}>
            <strong>The real-world analogy:</strong> Imagine a restaurant where
            the chef grows the vegetables, butchers the meat, mills the flour,
            and bakes the bread <em>from scratch for every single order</em>.
            That&apos;s your server right now.
          </div>
        </div>

        <p className={styles.prose}>
          Here&apos;s what the browser&apos;s network tab looks like:
        </p>

        {/* Speed comparison */}
        <div className={styles.speedComparison}>
          <div className={styles.speedRow}>
            <span className={styles.speedLabel} style={{ color: "#444", fontSize: 10, letterSpacing: "0.2em" }}>Resource</span>
            <span className={styles.speedSlow} style={{ color: "#444", fontSize: 10, letterSpacing: "0.2em" }}>Current</span>
            <span className={styles.speedFast} style={{ color: "#444", fontSize: 10, letterSpacing: "0.2em" }}>Goal</span>
            <div className={styles.speedBarWrap} />
          </div>
          {SPEED_ROWS.map((row) => (
            <div key={row.label} className={styles.speedRow}>
              <span className={styles.speedLabel}>{row.label}</span>
              <span className={styles.speedSlow}>{row.slow}</span>
              <span className={styles.speedFast}>{row.fast}</span>
              <div className={styles.speedBarWrap}>
                <div className={`${styles.speedBar} ${styles.speedBarRed}`} style={{ width: row.barW }} />
              </div>
            </div>
          ))}
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

        {/* Updated architecture */}
        <div className={styles.archContainer}>
          <div className={styles.archDiagram}>
            <div className={styles.archBox}>
              <div className={styles.archBoxLabel}>Client</div>
              <div className={styles.archBoxTitle}>Browser</div>
              <div className={styles.archBoxSub}>cached assets</div>
            </div>

            <div className={styles.archArrow}>→</div>

            <div className={styles.archBox} style={{ borderColor: "#6ab87a" }}>
              <div className={styles.archBoxLabel} style={{ color: "#6ab87a" }}>Server</div>
              <div className={styles.archBoxTitle}>Node.js</div>
              <div className={styles.archBoxSub}>+in-memory cache</div>
            </div>

            <div className={styles.archArrow}>→</div>

            <div className={styles.archBox} style={{ borderColor: "#6ab87a" }}>
              <div className={styles.archBoxLabel} style={{ color: "#6ab87a" }}>Database</div>
              <div className={styles.archBoxTitle}>PostgreSQL</div>
              <div className={styles.archBoxSub}>+indexed queries</div>
            </div>
          </div>
          <div className={styles.archCaption}>
            Same machine. Same $5/mo. But 10× faster.
          </div>
        </div>

        <div className={styles.stepTracker}>
          <div className={`${styles.stepItem} ${styles.stepActive}`}>
            <div className={styles.stepNum}>01</div>
            <div className={styles.stepBody}>
              <strong>In-memory cache</strong> — categories & stats served from RAM.
              2 fewer DB queries per page load.
            </div>
          </div>
          <div className={`${styles.stepItem} ${styles.stepActive}`}>
            <div className={styles.stepNum}>02</div>
            <div className={styles.stepBody}>
              <strong>Database indexes</strong> — product listing drops from 1,847ms → 0.4ms.
              The DB reads 12 rows instead of scanning 50,000.
            </div>
          </div>
          <div className={`${styles.stepItem} ${styles.stepActive}`}>
            <div className={styles.stepNum}>03</div>
            <div className={styles.stepBody}>
              <strong>Static file caching</strong> — CSS/JS/images cached in the browser for 7 days.
              After the first visit, assets load in ~0ms.
            </div>
          </div>
        </div>

        <p className={styles.prose}>
          <strong>Total cost of these changes: $0.</strong> No new servers.
          No new services. No paid tools. Just understanding how the system
          spends its time and eliminating waste.
        </p>
      </section>

      {/* ══ ACT VI — TEST YOURSELF ══ */}
      <section id="s6" className={`${styles.animSection} ${styles.act}`}>
        <div className={styles.sectionLabel}>Act VI — Test Yourself</div>
        <h2 className={styles.h2}>
          Can You Solve<br />
          <span className={styles.heroAccent}>These Crises?</span>
        </h2>

        <p className={styles.prose}>
          Before moving on, see if you can reason through these scenarios.
          No trick questions — just real problems that come from the same
          fundamentals you just learned.
        </p>

        {CHALLENGE_QS.map((cq, i) => (
          <div key={i} className={styles.challengeBox}>
            <div className={styles.challengeNum}>Challenge {String(i + 1).padStart(2, "0")}</div>
            <p className={styles.challengeQ} dangerouslySetInnerHTML={{ __html: cq.q }} />
            <div className={styles.challengeHint}>💡 Hint: {cq.hint}</div>
          </div>
        ))}
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
