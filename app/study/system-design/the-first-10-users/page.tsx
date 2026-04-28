"use client";

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { interviewQuestions, Difficulty, Question } from './data';
import styles from './chapter-1.module.css';

// Dashboard Metric Calculation
function calculateMetrics(state: any) {
  let queryTime = state.baseQueryTime;
  if (state.hasIndex) queryTime *= 0.1;

  let totalQueryTime = state.queries * queryTime;

  let cacheHitRate = 0;
  if (state.hasCache && state.queriesExecuted > 0) {
    cacheHitRate = (state.cachedQueries / state.queriesExecuted) * 100;
    totalQueryTime *= (1 - (cacheHitRate / 100) * 0.95);
  }

  let networkTime = state.networkLatency;
  if (state.hasCDN) networkTime *= 0.2;

  let transferTime = state.responseSize / 100;
  if (state.hasCompression) transferTime *= 0.1;

  let totalTime = totalQueryTime + networkTime + transferTime;
  let score = Math.max(0, Math.min(100, 100 - (totalTime / 100)));

  return {
    loadTime: totalTime,
    cacheHitRate: cacheHitRate,
    score: Math.round(score)
  };
}

export default function First10UsersChapter() {
  // Scroll Animation Observer
  const sectionRefs = useRef<(HTMLElement | null)[]>([]);
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add(styles.visible);
        }
      });
    }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });

    sectionRefs.current.forEach(ref => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, []);

  const addToRefs = (el: HTMLElement | null) => {
    if (el && !sectionRefs.current.includes(el)) {
      sectionRefs.current.push(el);
    }
  };

  // --- Quiz State ---
  const [selectedOption, setSelectedOption] = useState<number | null>(null);

  // --- Dashboard State ---
  const [dbState, setDbState] = useState({
    queries: 10,
    queriesExecuted: 0,
    cachedQueries: 0,
    hasIndex: false,
    hasCache: false,
    hasCDN: false,
    hasCompression: false,
    baseQueryTime: 200,
    networkLatency: 300,
    responseSize: 3000
  });

  const [dbLog, setDbLog] = useState<{message: string, type: string}[]>([
    { message: '⚠️ System initialized with poor performance...', type: 'log-warning' },
    { message: '💡 Tip: Add some queries first, then optimize!', type: '' }
  ]);

  const metrics = calculateMetrics(dbState);

  const addLog = (msg: string, type: string = '') => {
    setDbLog(prev => [{message: `[${new Date().toLocaleTimeString()}] ${msg}`, type}, ...prev].slice(0, 10));
  };

  const addQuery = () => {
    setDbState(s => ({
      ...s,
      queries: s.queries + 5,
      queriesExecuted: s.queriesExecuted + 5
    }));
    addLog('➕ Added 5 database queries', 'log-error');
    addLog('⏱️ Load time increased!', 'log-warning');
  };

  const addIndex = () => {
    setDbState(s => ({ ...s, hasIndex: true }));
    addLog('✅ Database index created!', 'log-success');
    addLog('⚡ Query time reduced by 90%!', 'log-success');
  };

  const enableCache = () => {
    setDbState(s => ({
      ...s,
      hasCache: true,
      cachedQueries: Math.floor(s.queriesExecuted * 0.9)
    }));
    addLog('✅ Redis cache enabled!', 'log-success');
    addLog('📈 Cache hit rate: 90%', 'log-success');
  };

  const toggleCDN = () => {
    setDbState(s => {
      const next = !s.hasCDN;
      if (next) addLog('✅ CDN enabled - serving from edge locations', 'log-success');
      else addLog('❌ CDN disabled', 'log-warning');
      return { ...s, hasCDN: next };
    });
  };

  const toggleCompression = () => {
    setDbState(s => {
      const next = !s.hasCompression;
      if (next) addLog('✅ GZIP compression enabled - 90% size reduction', 'log-success');
      else addLog('❌ Compression disabled', 'log-warning');
      return { ...s, hasCompression: next };
    });
  };

  const resetDb = () => {
    setDbState({
      queries: 10,
      queriesExecuted: 0,
      cachedQueries: 0,
      hasIndex: false,
      hasCache: false,
      hasCDN: false,
      hasCompression: false,
      baseQueryTime: 200,
      networkLatency: 300,
      responseSize: 3000
    });
    setDbLog([
      { message: '⚠️ System reset to initial state...', type: 'log-warning' },
      { message: '💡 Tip: Add some queries first, then optimize!', type: '' }
    ]);
  };

  // --- Interview State ---
  const [activeFilter, setActiveFilter] = useState<'all' | Difficulty>('all');
  const [openQuestions, setOpenQuestions] = useState<Set<string>>(new Set());
  const [openHints, setOpenHints] = useState<Set<string>>(new Set());
  const [openAnswers, setOpenAnswers] = useState<Set<string>>(new Set());

  const toggleQuestion = (id: string) => {
    setOpenQuestions(prev => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
  };

  const toggleHint = (id: string) => {
    setOpenHints(prev => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
  };

  const toggleAnswer = (id: string) => {
    setOpenAnswers(prev => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
  };

  const filteredQuestions = interviewQuestions.filter(q => activeFilter === 'all' || q.difficulty === activeFilter);

  // --- Deep Dives State ---
  const [openDeepDives, setOpenDeepDives] = useState<Set<string>>(new Set());
  const toggleDeepDive = (id: string) => {
    setOpenDeepDives(prev => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
  };

  return (
    <main className={styles.page}>
      {/* Hero Section */}
      <section className={styles.hero}>
        <span className={styles.chapterBadge}>Chapter 1</span>
        <h1 className={styles.chapterTitle}>The First 10 Users</h1>
        <p className={styles.chapterSubtitle}>
          From a side project on a single server to handling your first spike in traffic.
          Learn the fundamentals of web performance, database optimization, and why "it works on my machine"
          isn't good enough for production.
        </p>

        <div className={styles.chapterMeta}>
          <div className={styles.metaItem}>
            <span className={styles.metaIcon}>⏱️</span>
            <span>45 MIN READ</span>
          </div>
          <div className={styles.metaItem}>
            <span className={styles.metaIcon}>📊</span>
            <span>DIFFICULTY: BEGINNER</span>
          </div>
          <div className={styles.metaItem}>
            <span className={styles.metaIcon}>🛠️</span>
            <span>INTERACTIVE SIMULATOR</span>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className={`${styles.section} ${styles.animSection}`} ref={addToRefs}>
        <div className={styles.storyIntro}>
          You just launched. It's Friday night. You posted your app to HackerNews and went to sleep.
          Big mistake.
        </div>

        <p className={styles.narrative}>
          You wake up at 3:00 AM to a phone buzzing off the table. It's an automated alert from your hosting provider.
          Your CPU is at 100%. Your database connections are maxed out.
        </p>

        <div className={styles.dialogue}>
          <div className={styles.speaker}>Server Logs</div>
          <p>ERROR: <strong>Connection timeout</strong> to database (user-db-prod)</p>
          <p>WARNING: Response time exceeding <strong>5000ms</strong></p>
          <p>FATAL: <strong>Out of memory</strong> (OOM Killer invoked)</p>
        </div>

        <p className={styles.narrative}>
          You scramble to open your laptop. The site takes 12 seconds to load. You only have 10 users online,
          but your single $5/month DigitalOcean droplet is acting like it's handling the Super Bowl halftime show.
        </p>
        <p className={styles.narrative}>
          Welcome to production. Your code works, but your architecture doesn't. Let's fix it.
        </p>
      </section>

      {/* Diagnosis */}
      <section className={`${styles.section} ${styles.animSection}`} ref={addToRefs}>
        <div className={styles.sectionHeader}>
          <div className={styles.sectionTag}>The Diagnosis</div>
          <h2 className={styles.sectionTitle}>Why Are 10 Users Crashing The App?</h2>
          <p className={styles.sectionDescription}>
            Before we scale to multiple servers, we need to optimize our single server. Throwing more hardware at bad code is a rookie mistake.
          </p>
        </div>

        <div className={styles.diagramContainer}>
          <div className={styles.diagramTitle}>The Single-Server Anti-Pattern</div>
          <div className={styles.architecture}>
            <div className={styles.archComponent}>
              <div className={styles.componentIcon}>📱</div>
              <div className={styles.componentLabel}>User 1</div>
              <div className={styles.componentDescription}>Waits 5s</div>
            </div>
            <div className={styles.arrow}>→</div>
            <div className={styles.archComponent} style={{ border: '2px dashed var(--red)', padding: '1rem', borderRadius: '8px' }}>
              <div className={styles.componentIcon}>💻</div>
              <div className={styles.componentLabel}>Web Server</div>
              <div className={styles.componentDescription}>CPU 100%</div>
            </div>
            <div className={styles.arrow}>→</div>
            <div className={styles.archComponent}>
              <div className={styles.componentIcon}>🗄️</div>
              <div className={styles.componentLabel}>Database</div>
              <div className={styles.componentDescription}>Full Table Scan</div>
            </div>
          </div>
        </div>

        <div className={styles.conceptsGrid}>
          <div className={styles.conceptCard}>
            <div className={styles.conceptIcon}>🔍</div>
            <h3 className={styles.conceptTitle}>The Database Bottleneck</h3>
            <p className={styles.conceptText}>
              Every time a user loads the homepage, your app searches through 100,000 rows in the database to find the latest 10 posts. Without an index, this is a "Full Table Scan."
            </p>
            <div className={styles.analogy}>
              Like looking for a word in a dictionary by reading every single page from A to Z.
            </div>
          </div>

          <div className={styles.conceptCard}>
            <div className={styles.conceptIcon}>🐌</div>
            <h3 className={styles.conceptTitle}>Redundant Work</h3>
            <p className={styles.conceptText}>
              All 10 users are seeing the exact same homepage, but your server is recalculating and regenerating that page from scratch 10 separate times.
            </p>
            <div className={styles.analogy}>
              Like a chef cooking 10 separate pots of soup when 10 people order the exact same item.
            </div>
          </div>
        </div>
      </section>

      {/* The Fix */}
      <section className={`${styles.section} ${styles.animSection}`} ref={addToRefs}>
        <div className={styles.sectionHeader}>
          <div className={styles.sectionTag}>The Fix</div>
          <h2 className={styles.sectionTitle}>Indexes & Caching</h2>
        </div>

        <p className={styles.narrative}>
          To fix this, we apply the two most powerful spells in web development: <strong>Indexes</strong> for the database, and <strong>Caching</strong> for the application.
        </p>

        <div className={styles.codeComparison}>
          <div className={styles.codeBlock}>
            <div className={`${styles.codeHeader} ${styles.codeHeaderBad}`}>
              <span>bad_query.sql</span>
              <span className={`${styles.codeBadge} ${styles.badgeBad}`}>2,100ms</span>
            </div>
            <div className={styles.codeContent}>
<pre>-- Scanning 100,000 rows
SELECT * FROM posts 
ORDER BY created_at DESC 
LIMIT 10;</pre>
            </div>
          </div>

          <div className={styles.codeBlock}>
            <div className={`${styles.codeHeader} ${styles.codeHeaderGood}`}>
              <span>good_query.sql</span>
              <span className={`${styles.codeBadge} ${styles.badgeGood}`}>5ms</span>
            </div>
            <div className={styles.codeContent}>
<pre>-- Creates a B-Tree structure
CREATE INDEX idx_created_at 
ON posts(created_at);

-- Now jumps straight to the top 10
SELECT * FROM posts 
ORDER BY created_at DESC 
LIMIT 10;</pre>
            </div>
          </div>
        </div>

        <div className={styles.codeComparison}>
          <div className={styles.codeBlock}>
            <div className={`${styles.codeHeader} ${styles.codeHeaderBad}`}>
              <span>server.js (Before Cache)</span>
              <span className={`${styles.codeBadge} ${styles.badgeBad}`}>CPU 100%</span>
            </div>
            <div className={styles.codeContent}>
<pre>app.get('/', async (req, res) =&gt; {'{'}
  // DB query runs on EVERY request
  const posts = await db.query(
    'SELECT * FROM posts...'
  );
  
  res.json(posts);
{'}'});</pre>
            </div>
          </div>

          <div className={styles.codeBlock}>
            <div className={`${styles.codeHeader} ${styles.codeHeaderGood}`}>
              <span>server.js (With Redis Cache)</span>
              <span className={`${styles.codeBadge} ${styles.badgeGood}`}>CPU 5%</span>
            </div>
            <div className={styles.codeContent}>
<pre>app.get('/', async (req, res) =&gt; {'{'}
  // 1. Check Redis memory first (1ms)
  let posts = await redis.get('homepage');
  
  if (!posts) {'{'}
    // 2. Only query DB if cache misses
    posts = await db.query('...');
    // 3. Save to cache for 60 seconds
    await redis.setex('homepage', 60, posts);
  {'}'}
  
  res.json(posts);
{'}'});</pre>
            </div>
          </div>
        </div>
      </section>

      {/* Transformation Table */}
      <section className={`${styles.section} ${styles.animSection}`} ref={addToRefs}>
        <h3 className={styles.sectionTitle} style={{fontSize: '2rem'}}>The Result</h3>
        <table className={styles.dataTable}>
          <thead>
            <tr>
              <th>Metric</th>
              <th>Before</th>
              <th>After</th>
              <th>Improvement</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Database Query Time</td>
              <td className={styles.valBad}>2,100ms</td>
              <td className={styles.valGood}>5ms</td>
              <td className={styles.valAccent}>420x Faster</td>
            </tr>
            <tr>
              <td>Homepage Load Time</td>
              <td className={styles.valBad}>2,500ms</td>
              <td className={styles.valGood}>12ms (Cache Hit)</td>
              <td className={styles.valAccent}>208x Faster</td>
            </tr>
            <tr>
              <td>Max Concurrent Users</td>
              <td className={styles.valBad}>~15 users</td>
              <td className={styles.valGood}>~2,000 users</td>
              <td className={styles.valAccent}>133x More</td>
            </tr>
          </tbody>
        </table>
      </section>

      {/* Challenge */}
      <section className={`${styles.section} ${styles.animSection}`} ref={addToRefs}>
        <div className={styles.challengeBox}>
          <h2 className={styles.challengeTitle}>Test Your Knowledge</h2>
          <p className={styles.challengeScenario}>
            You run an e-commerce site. Your database is struggling under load. You notice that 90% of your traffic goes to the <strong>Product Details page</strong>, but product descriptions and prices only change once a day at midnight.
          </p>

          <div className={styles.question}>
            <div className={styles.questionText}>Which caching strategy provides the best balance of performance and data accuracy for the Product Details page?</div>
            
            <div className={styles.options}>
              <div 
                className={`${styles.option} ${selectedOption === 0 ? styles.optionWrong : ''}`}
                onClick={() => setSelectedOption(0)}
              >
                <span>A) No cache. Always read from database to ensure price accuracy.</span>
                {selectedOption === 0 && <span>❌</span>}
              </div>
              <div 
                className={`${styles.option} ${selectedOption === 1 ? styles.optionWrong : ''}`}
                onClick={() => setSelectedOption(1)}
              >
                <span>B) Cache the page forever, requiring a server restart to update prices.</span>
                {selectedOption === 1 && <span>❌</span>}
              </div>
              <div 
                className={`${styles.option} ${selectedOption === 2 ? styles.optionCorrect : ''}`}
                onClick={() => setSelectedOption(2)}
              >
                <span>C) Cache the page in Redis with a TTL (Time To Live) of 1 hour, or invalidate the cache immediately when a price is updated in the admin panel.</span>
                {selectedOption === 2 && <span>✅</span>}
              </div>
            </div>

            {selectedOption === 2 && (
              <div className={styles.explanation}>
                <strong>Correct!</strong> This is called the "Cache-Aside" pattern with explicit invalidation. It guarantees users see fast responses (served from memory), but prevents them from seeing stale data because the cache is cleared exactly when the data changes.
              </div>
            )}
            {(selectedOption === 0 || selectedOption === 1) && (
              <div className={styles.explanation} style={{ borderColor: 'var(--red)', background: 'rgba(192, 57, 43, 0.1)' }}>
                <strong>Not quite.</strong> Option A will crash your server under high load. Option B will lead to angry customers buying items at the wrong price. Try again!
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Hands-On Project Simulator */}
      <section className={`${styles.section} ${styles.animSection}`} ref={addToRefs}>
        <div className={styles.sectionHeader}>
          <div className={styles.sectionTag}>Hands-On Simulator</div>
          <h2 className={styles.sectionTitle}>Optimize The Dashboard</h2>
          <p className={styles.sectionDescription}>
            Experience how these optimizations work in real-time. Try to get the performance score to EXCELLENT.
          </p>
        </div>

        <div className={styles.interactiveBlock}>
          <div className={styles.metricsGrid}>
            <div className={styles.metric}>
              <div className={styles.metricValue}>
                {metrics.loadTime >= 1000 ? `${(metrics.loadTime/1000).toFixed(1)}s` : `${Math.round(metrics.loadTime)}ms`}
              </div>
              <div className={styles.metricLabel}>Load Time</div>
            </div>
            <div className={styles.metric}>
              <div className={styles.metricValue}>{dbState.queries}</div>
              <div className={styles.metricLabel}>Queries/Page</div>
            </div>
            <div className={styles.metric}>
              <div className={styles.metricValue}>{Math.round(metrics.cacheHitRate)}%</div>
              <div className={styles.metricLabel}>Cache Hit Rate</div>
            </div>
            <div className={styles.metric}>
              <div className={styles.metricValue} style={{ color: metrics.score >= 85 ? 'var(--green)' : metrics.score >= 60 ? 'var(--accent)' : 'var(--red)' }}>
                {metrics.score}
              </div>
              <div className={styles.metricLabel}>Score</div>
            </div>
          </div>

          <div className={styles.simulatorControls}>
            <button className={styles.simBtn} onClick={addQuery}>
              + Add Queries (Simulate Load)
            </button>
            <button className={`${styles.simBtn} ${dbState.hasIndex ? styles.active : ''}`} onClick={addIndex} disabled={dbState.hasIndex || dbState.queries === 0}>
              Add Database Index
            </button>
            <button className={`${styles.simBtn} ${dbState.hasCache ? styles.active : ''}`} onClick={enableCache} disabled={dbState.hasCache || dbState.queries === 0}>
              Enable Redis Cache
            </button>
            <button className={`${styles.simBtn} ${dbState.hasCDN ? styles.active : ''}`} onClick={toggleCDN}>
              Toggle CDN
            </button>
            <button className={`${styles.simBtn} ${dbState.hasCompression ? styles.active : ''}`} onClick={toggleCompression}>
              Toggle Compression
            </button>
          </div>

          <div style={{ background: '#000', padding: '1.5rem', borderRadius: '8px', marginTop: '2rem', height: '150px', overflowY: 'auto' }}>
            {dbLog.map((log, i) => (
              <div key={i} style={{ 
                fontFamily: 'monospace', 
                fontSize: '0.85rem',
                color: log.type === 'log-error' ? '#f87171' : log.type === 'log-warning' ? '#fbbf24' : log.type === 'log-success' ? '#4ade80' : '#9ca3af',
                marginBottom: '0.5rem'
              }}>
                {log.message}
              </div>
            ))}
          </div>

          <div style={{ marginTop: '1rem', textAlign: 'right' }}>
            <button onClick={resetDb} style={{ background: 'transparent', border: '1px solid var(--muted)', color: 'var(--muted)', padding: '0.5rem 1rem', cursor: 'pointer', fontSize: '0.8rem' }}>
              🔄 Reset Simulator
            </button>
          </div>
        </div>
      </section>

      {/* Deep Dives */}
      <section className={`${styles.section} ${styles.animSection}`} ref={addToRefs}>
        <div className={styles.sectionHeader}>
          <div className={styles.sectionTag}>Deep Dives</div>
          <h2 className={styles.sectionTitle}>For The Curious</h2>
        </div>

        <div className={styles.deepDiveCard}>
          <div className={styles.deepDiveHeader} onClick={() => toggleDeepDive('dd1')}>
            <h3>How do B-Tree Indexes actually work?</h3>
            <span className={`${styles.toggleIcon} ${openDeepDives.has('dd1') ? styles.active : ''}`}>+</span>
          </div>
          {openDeepDives.has('dd1') && (
            <div className={styles.deepDiveContent}>
              <p>A B-Tree (Balanced Tree) is a self-balancing tree data structure that maintains sorted data and allows searches, sequential access, insertions, and deletions in logarithmic time.</p>
              <h4>The O(log N) Magic</h4>
              <p>Without an index, finding a specific record in 1 million rows takes O(N) time (scanning all 1,000,000 rows). With a B-Tree index, the database only needs to make about 20 comparisons to find the exact record (log2(1,000,000) ≈ 20). It halves the search space at every step.</p>
              <p><strong>Downside:</strong> Every time you INSERT, UPDATE, or DELETE a record, the database must also update the B-Tree to keep it balanced. This slows down write operations.</p>
            </div>
          )}
        </div>

        <div className={styles.deepDiveCard}>
          <div className={styles.deepDiveHeader} onClick={() => toggleDeepDive('dd2')}>
            <h3>Redis vs Memcached</h3>
            <span className={`${styles.toggleIcon} ${openDeepDives.has('dd2') ? styles.active : ''}`}>+</span>
          </div>
          {openDeepDives.has('dd2') && (
            <div className={styles.deepDiveContent}>
              <p>Both are in-memory key-value stores used for caching, but Redis has become the industry standard for several reasons.</p>
              <h4>Why Redis Wins:</h4>
              <ul>
                <li><strong>Data Structures:</strong> Memcached only supports simple strings. Redis supports Strings, Lists, Sets, Hashes, and Sorted Sets.</li>
                <li><strong>Persistence:</strong> Memcached is purely in-memory. If it crashes, data is gone. Redis can take snapshots to disk.</li>
                <li><strong>Replication:</strong> Redis supports master-slave replication for high availability.</li>
              </ul>
            </div>
          )}
        </div>
      </section>

      {/* Interview Prep */}
      <section className={`${styles.section} ${styles.animSection}`} ref={addToRefs}>
        <div className={styles.sectionHeader}>
          <div className={styles.sectionTag} style={{color: '#fbbf24'}}>Interview Preparation</div>
          <h2 className={styles.sectionTitle}>Real Interview Questions</h2>
          <p className={styles.sectionDescription}>
            From Easy fundamentals to Expert-level system design. These are actual questions asked at FAANG companies.
          </p>
        </div>

        <div className={styles.filterContainer}>
          <button className={`${styles.filterBtn} ${activeFilter === 'all' ? styles.active : ''}`} onClick={() => setActiveFilter('all')}>All Questions</button>
          <button className={`${styles.filterBtn} ${activeFilter === 'easy' ? styles.active : ''}`} onClick={() => setActiveFilter('easy')}>🟢 Easy</button>
          <button className={`${styles.filterBtn} ${activeFilter === 'medium' ? styles.active : ''}`} onClick={() => setActiveFilter('medium')}>🟡 Medium</button>
          <button className={`${styles.filterBtn} ${activeFilter === 'hard' ? styles.active : ''}`} onClick={() => setActiveFilter('hard')}>🔴 Hard</button>
          <button className={`${styles.filterBtn} ${activeFilter === 'expert' ? styles.active : ''}`} onClick={() => setActiveFilter('expert')}>⚫ Expert</button>
        </div>

        {['easy', 'medium', 'hard', 'expert'].map(diff => {
          const qs = filteredQuestions.filter(q => q.difficulty === diff);
          if (qs.length === 0) return null;
          
          return (
            <div key={diff} className={styles.questionCategory}>
              {diff === 'easy' && '🟢 Easy - Fundamentals'}
              {diff === 'medium' && '🟡 Medium - Situational & Design'}
              {diff === 'hard' && '🔴 Hard - System Design & Trade-offs'}
              {diff === 'expert' && '⚫ Expert - Deep Technical & Architecture'}
              
              <div style={{ marginTop: '2rem' }}>
                {qs.map(q => (
                  <div key={q.id} className={styles.interviewQuestion}>
                    <div className={styles.qHeader} onClick={() => toggleQuestion(q.id)}>
                      <div style={{ display: 'flex', alignItems: 'center' }}>
                        <span className={styles.qNumber}>{q.number}</span>
                        <span className={styles.qText}>{q.question}</span>
                      </div>
                      <div className={styles.qTags}>
                        {q.tags.map(t => <span key={t} className={styles.qTag}>{t}</span>)}
                      </div>
                    </div>
                    
                    {openQuestions.has(q.id) && (
                      <div className={styles.qContent}>
                        {q.hint && (
                          <div>
                            <button className={styles.btnHint} onClick={() => toggleHint(q.id)}>
                              💡 {openHints.has(q.id) ? 'Hide Hint' : 'Show Hint'}
                            </button>
                            {openHints.has(q.id) && (
                              <div className={`${styles.contentBox} ${styles.hint}`}>{q.hint}</div>
                            )}
                          </div>
                        )}
                        
                        <div>
                          <button className={styles.btnAnswer} onClick={() => toggleAnswer(q.id)}>
                            ✅ {openAnswers.has(q.id) ? 'Hide Answer' : 'Show Answer'}
                          </button>
                          {openAnswers.has(q.id) && (
                            <div className={`${styles.contentBox} ${styles.answer}`} dangerouslySetInnerHTML={{ __html: q.answer as string }} />
                          )}
                        </div>

                        {q.followUp && (
                          <div className={styles.qFollowUp}>
                            <strong>Follow-up:</strong> {q.followUp}
                          </div>
                        )}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          );
        })}
      </section>

      {/* Cliffhanger */}
      <section className={styles.cliffhanger}>
        <p className={styles.cliffhangerText}>
          "You fixed the speed. Your 10 users are ecstatic. But tomorrow, 
          that tweet goes live. 1,000 users will hit your site in the first hour. 
          Your single server won't survive. What's your plan?"
        </p>
        <Link href="#" className={styles.cliffhangerCta}>
          Chapter 2: The Viral Spike →
        </Link>
      </section>

    </main>
  );
}
