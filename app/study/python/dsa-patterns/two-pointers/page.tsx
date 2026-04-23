"use client";

import { useEffect } from "react";
import Link from "next/link";
import { Bebas_Neue, IBM_Plex_Mono, Crimson_Pro } from "next/font/google";
import BruteForceDemo from "@/components/brute-force-demo";
import styles from "./two-pointers.module.css";

/* ── Fonts loaded at module level (Next.js build-time optimisation) ── */
const bebas = Bebas_Neue({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-bebas",
});

const mono = IBM_Plex_Mono({
  weight: ["400", "600"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  variable: "--font-mono-tp",
});

const crimson = Crimson_Pro({
  weight: ["400", "600"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  variable: "--font-crimson",
});

/* ── Data ── */
const NUMS = [
  { val: "-4", idx: 0, type: "lo" as const, ptr: "L", side: "L" as const },
  { val: "-1", idx: 1 },
  { val: "1",  idx: 2 },
  { val: "3",  idx: 3 },
  { val: "5",  idx: 4 },
  { val: "8",  idx: 5 },
  { val: "11", idx: 6, type: "hi" as const, ptr: "R", side: "R" as const },
];

const NUMS_WITH_IDX = [
  { val: "-4", idx: 0, type: "lo" as const, ptr: "L=0", side: "L" as const },
  { val: "-1", idx: 1 },
  { val: "1",  idx: 2 },
  { val: "3",  idx: 3 },
  { val: "5",  idx: 4 },
  { val: "8",  idx: 5 },
  { val: "11", idx: 6, type: "hi" as const, ptr: "R=6", side: "R" as const },
];

const COST_ROWS = [
  { n: "100",     bf: "4,950",      tp: "100",     w: "1%"   },
  { n: "1,000",   bf: "499,500",    tp: "1,000",   w: "10%"  },
  { n: "10,000",  bf: "~50 Million",tp: "10,000",  w: "50%"  },
  { n: "100,000", bf: "~5 Billion", tp: "100,000", w: "100%", bad: true },
];

const EXEC_STEPS = [
  { n: "1", label: "L=0, R=6", sum: "-4 + 11 = 7",  note: "Too small. Move L right." },
  { n: "2", label: "L=1, R=6", sum: "-1 + 11 = 10", note: "Too big. Move R left." },
  { n: "3", label: "L=1, R=5", sum: "-1 + 8 = 7",   note: "Too small. Move L right." },
  { n: "4", label: "L=2, R=5", sum: "1 + 8 = 9",    note: "✓ Target found! Return [2, 5].", found: true },
];

const PATTERN_CARDS = [
  {
    icon: "🎯",
    title: "When It Works",
    body: "Sorted arrays, or data with a monotonic property — if you can reason \"moving this pointer increases/decreases the value,\" you can use two pointers.",
  },
  {
    icon: "⚙️",
    title: "The Invariant",
    body: "At every step, the answer (if it exists) is always between L and R. Neither pointer ever skips past it. This is the proof of correctness.",
  },
  {
    icon: "📉",
    title: "Why O(n)",
    body: "L and R together make at most n moves total. Every iteration moves at least one pointer. The loop terminates in ≤ n steps.",
  },
  {
    icon: "🧬",
    title: "The Variants",
    body: "Same-direction (fast/slow), opposite-direction (squeeze), multiple arrays, sliding window — all cousins of the same core idea.",
  },
];

/* ── Array cell helper ── */
function ArrayCell({
  val,
  idx,
  type,
  ptr,
  side,
}: {
  val: string;
  idx: number;
  type?: "hi" | "lo";
  ptr?: string;
  side?: "L" | "R";
}) {
  return (
    <div
      className={`${styles.cell} ${type === "hi" ? styles.cellHi : ""} ${type === "lo" ? styles.cellLo : ""}`}
    >
      {ptr && (
        <span
          className={`${styles.pointerLabel} ${side === "L" ? styles.pointerL : styles.pointerR}`}
        >
          {ptr}
        </span>
      )}
      {val}
      <div className={styles.cellIdx}>{idx}</div>
    </div>
  );
}

/* ══════════════════════════════════════════════════════ */
export default function TwoPointersPage() {
  /* Scroll-reveal via IntersectionObserver */
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) =>
        entries.forEach((e) => {
          if (e.isIntersecting) e.target.classList.add(styles.visible);
        }),
      { threshold: 0.08 },
    );

    document
      .querySelectorAll(`.${styles.animSection}`)
      .forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <div
      className={`${styles.page} ${bebas.variable} ${mono.variable} ${crimson.variable}`}
    >
      {/* Fixed noise overlay */}
      <div className={styles.noise} aria-hidden="true" />

      {/* ══ HERO ══ */}
      <div className={styles.hero}>
        <div className={styles.chapterTag}>
          Chapter 01 &nbsp;·&nbsp; Arrays &amp; Searching
        </div>

        <h1 className={styles.heroH1}>
          Before{" "}
          <span className={styles.heroAccent}>Two Pointers</span>
          ,{" "}There Was A{" "}
          <span className={styles.heroAccent}>Problem.</span>
        </h1>

        <p className={styles.heroSub}>
          Every elegant technique was born out of frustration with something
          slow, ugly, and broken. Let&apos;s feel that frustration first.
        </p>

        <div className={styles.scrollHint}>scroll to begin</div>
      </div>

      {/* ══ ACT I — THE SETUP ══ */}
      <section
        id="s1"
        className={`${styles.animSection} ${styles.act}`}
      >
        <div className={styles.sectionLabel}>Act I — The Setup</div>
        <h2 className={styles.h2}>
          A Simple Question.
          <br />
          An Obvious Answer.
        </h2>

        <p className={styles.prose}>
          You are handed a <strong>sorted array of integers</strong>. A number{" "}
          <em>target</em> is given to you. Your job:
        </p>

        <div className={styles.scenarioBox}>
          <p>
            📋 <strong>Problem — Two Sum (Sorted Input)</strong>
          </p>
          <p>
            Given a sorted array{" "}
            <code className={styles.inlineCode}>nums</code> and an integer{" "}
            <code className={styles.inlineCode}>target</code>, return the{" "}
            <strong>indices</strong> of the two numbers that add up to{" "}
            <em>target</em>.
          </p>
          <p className={styles.ioBlock}>
            Input:&nbsp; nums = [-4, -1, 1, 3, 5, 8, 11], target = 9<br />
            Output: indices [2, 5]&nbsp;&nbsp;→&nbsp;&nbsp;nums[2] + nums[5] = 1
            + 8 = 9&nbsp;&nbsp;✓
          </p>
        </div>

        <p className={styles.prose}>
          Stop reading for one second.{" "}
          <em>What&apos;s the first solution that comes to your mind?</em>
        </p>
      </section>

      {/* ══ ACT II — THE BRUTE FORCE TRAP ══ */}
      <section
        id="s2"
        className={`${styles.animSection} ${styles.act}`}
      >
        <div className={styles.sectionLabel}>Act II — The Brute Force Trap</div>
        <h2 className={styles.h2}>
          The Instinct.
          <br />
          Check Everything.
        </h2>

        <p className={styles.prose}>
          Most people, including experienced developers on a first pass, reach
          for this:
        </p>

        <div className={styles.codeBlock} data-lang="Python">
          <pre className={styles.pre}>
            <span className={styles.kw}>def</span>{" "}
            <span className={styles.fn}>two_sum_brute</span>
            {"(nums, target):\n"}
            {"    "}n = <span className={styles.fn}>len</span>{"(nums)\n"}
            <span className={styles.bad}>
              {"    "}
              <span className={styles.kw}>for</span> i{" "}
              <span className={styles.kw}>in</span>{" "}
              <span className={styles.fn}>range</span>
              {"(n):             "}
              <span className={styles.cm}># fix first number</span>
            </span>
            {"\n"}
            <span className={styles.bad}>
              {"        "}
              <span className={styles.kw}>for</span> j{" "}
              <span className={styles.kw}>in</span>{" "}
              <span className={styles.fn}>range</span>
              {"(i + "}
              <span className={styles.nm}>1</span>
              {", n):   "}
              <span className={styles.cm}># try every other number</span>
            </span>
            {"\n"}
            <span className={styles.bad}>
              {"            "}
              <span className={styles.kw}>if</span>
              {" nums[i] + nums[j] == target:"}
            </span>
            {"\n"}
            <span className={styles.bad}>
              {"                "}
              <span className={styles.kw}>return</span>
              {" [i, j]"}
            </span>
            {"\n"}
            {"    "}
            <span className={styles.kw}>return</span>
            {" []"}
          </pre>
        </div>

        <p className={styles.prose}>
          This is <strong>correct.</strong> It passes every test case. It will
          be accepted on LeetCode for small inputs.
        </p>
        <p className={styles.prose}>
          It is also, fundamentally, <em>thoughtless</em>.
        </p>

        <div className={styles.insight}>
          <div className={styles.insightIcon}>🔍</div>
          <div className={styles.insightText}>
            Brute force says:{" "}
            <strong>
              &ldquo;I don&apos;t trust the structure of this data. So I&apos;ll
              check every possibility.&rdquo;
            </strong>
            <br />
            <br />
            But the array is <em>sorted</em>. Sorted data has a shape, a
            gradient, a direction. Ignoring that is like navigating a one-way
            street going both ways at once.
          </div>
        </div>
      </section>

      {/* ══ ACT III — THE REAL COST ══ */}
      <section
        id="s3"
        className={`${styles.animSection} ${styles.act}`}
      >
        <div className={styles.sectionLabel}>Act III — The Real Cost</div>
        <h2 className={styles.h2}>
          Let&apos;s Count
          <br />
          The Operations.
        </h2>

        <p className={styles.prose}>
          For an array of size <strong>n</strong>, the nested loop runs{" "}
          <code className={styles.inlineCodeOrange}>n × (n-1) / 2</code> times.
          That&apos;s <strong>O(n²)</strong>.
        </p>

        {/* Cost rows */}
        <div className={styles.costDemo}>
          <div className={styles.costRow}>
            <span className={`${styles.costN} ${styles.costHeadText}`}>
              n (size)
            </span>
            <span className={`${styles.costBf} ${styles.costHeadText}`}>
              Brute ops
            </span>
            <span className={`${styles.costTp} ${styles.costHeadText}`}>
              2-ptr ops
            </span>
            <div className={styles.costBarWrap} />
          </div>

          {COST_ROWS.map((row) => (
            <div key={row.n} className={styles.costRow}>
              <span className={styles.costN}>{row.n}</span>
              <span
                className={`${styles.costBf} ${row.bad ? styles.costBad : ""}`}
              >
                {row.bf}
              </span>
              <span className={styles.costTp}>{row.tp}</span>
              <div className={styles.costBarWrap}>
                <div className={styles.costBar} style={{ width: row.w }} />
              </div>
            </div>
          ))}
        </div>

        {/* Complexity table */}
        <div className={styles.complexityTable}>
          <div className={`${styles.cxCell} ${styles.cxHead}`}>Approach</div>
          <div className={`${styles.cxCell} ${styles.cxHead}`}>Time</div>
          <div className={`${styles.cxCell} ${styles.cxHead}`}>Space</div>

          <div className={styles.cxCell}>Brute Force</div>
          <div className={`${styles.cxCell} ${styles.cxBad}`}>O(n²)</div>
          <div className={styles.cxCell}>O(1)</div>

          <div className={styles.cxCell}>Two Pointers</div>
          <div className={`${styles.cxCell} ${styles.cxGood}`}>O(n)</div>
          <div className={`${styles.cxCell} ${styles.cxGood}`}>O(1)</div>
        </div>

        <p className={styles.prose}>
          A real dataset — say, a list of 100,000 stock prices where you want a
          pair summing to a target profit — the brute force would compute{" "}
          <em>5 billion comparisons</em>. At 10⁹ operations/second, that&apos;s{" "}
          <strong>5 seconds of waiting</strong>. In a live system, that&apos;s a
          timeout. That&apos;s a failure.
        </p>

        <BruteForceDemo monoClass={mono.className} />
      </section>

      {/* ══ ACT IV — THE INSIGHT ══ */}
      <section
        id="s4"
        className={`${styles.animSection} ${styles.act}`}
      >
        <div className={styles.sectionLabel}>Act IV — The Insight</div>
        <h2 className={styles.h2}>
          The Array Is
          <br />
          Trying To Tell You Something.
        </h2>

        <p className={styles.prose}>
          Look at the sorted array again. Stare at it.
        </p>

        {/* Array visualisation */}
        <div className={styles.arrayVis}>
          {NUMS.map((cell) => (
            <ArrayCell key={cell.idx} {...cell} />
          ))}
        </div>

        <p className={styles.prose}>
          There are three outcomes when you pick any two numbers from a sorted
          array and sum them:
        </p>

        <div className={styles.stepTracker}>
          <div className={`${styles.stepItem} ${styles.stepActive}`}>
            <div className={styles.stepNum}>01</div>
            <div className={styles.stepBody}>
              <strong>Sum is too big.</strong> The right number is too large.
              Move the right pointer{" "}
              <code className={styles.stepCode}>←</code> left. Every pair to the
              right is already too big.
            </div>
          </div>
          <div className={`${styles.stepItem} ${styles.stepActive}`}>
            <div className={styles.stepNum}>02</div>
            <div className={styles.stepBody}>
              <strong>Sum is too small.</strong> The left number is too small.
              Move the left pointer{" "}
              <code className={styles.stepCode}>→</code> right. Every pair to
              the left is already too small.
            </div>
          </div>
          <div className={`${styles.stepItem} ${styles.stepActive}`}>
            <div className={styles.stepNum}>03</div>
            <div className={styles.stepBody}>
              <strong>Sum equals target.</strong> You&apos;re done. Return the
              indices.
            </div>
          </div>
        </div>

        <p className={styles.prose}>
          Each comparison <em>eliminates an entire direction</em>. You&apos;re
          not checking all possibilities — you&apos;re{" "}
          <strong>reasoning</strong> your way to the answer.
        </p>

        <div className={styles.insight}>
          <div className={styles.insightIcon}>💡</div>
          <div className={styles.insightText}>
            <strong>The core idea:</strong> When data has a monotonic structure
            (sorted, distance-based, frequency-ordered), you can replace a
            nested search with a single pass using two indices that{" "}
            <em>squeeze inward</em> — each step guaranteed to make progress.
          </div>
        </div>
      </section>

      {/* ══ ACT V — THE REVEAL ══ */}
      <section
        id="s5"
        className={`${styles.animSection} ${styles.actDark}`}
      >
        <div className={styles.sectionLabel}>Act V — The Reveal</div>
        <h2 className={styles.h2}>
          Enter:
          <br />
          Two Pointers.
        </h2>

        <p className={styles.prose}>
          We place one pointer at the <em>far left</em>, one at the{" "}
          <em>far right</em>. They march toward each other, each step informed
          by what we see.
        </p>

        {/* Array with index labels */}
        <div className={styles.arrayVis}>
          {NUMS_WITH_IDX.map((cell) => (
            <ArrayCell key={cell.idx} {...cell} />
          ))}
        </div>

        {/* Two pointers solution */}
        <div className={styles.codeBlock} data-lang="Python">
          <pre className={styles.pre}>
            <span className={styles.kw}>def</span>{" "}
            <span className={styles.fn}>two_sum_sorted</span>
            {"(nums, target):\n"}
            {"    "}L, R ={" "}
            <span className={styles.nm}>0</span>
            {", "}
            <span className={styles.fn}>len</span>
            {"(nums) - "}
            <span className={styles.nm}>1</span>
            {"   "}
            <span className={styles.cm}># start at opposite ends</span>
            {"\n\n"}
            <span className={styles.good}>
              {"    "}
              <span className={styles.kw}>while</span>
              {" L < R:                 "}
              <span className={styles.cm}># until pointers meet</span>
            </span>
            {"\n"}
            {"        "}current = nums[L] + nums[R]
            {"\n\n"}
            {"        "}
            <span className={styles.kw}>if</span>
            {" current == target:\n"}
            {"            "}
            <span className={styles.kw}>return</span>
            {" [L, R]          "}
            <span className={styles.cm}># found it</span>
            {"\n"}
            {"        "}
            <span className={styles.kw}>elif</span>
            {" current < target:\n"}
            <span className={styles.good}>
              {"            "}L +={" "}
              <span className={styles.nm}>1</span>
              {"                  "}
              <span className={styles.cm}># sum too small → move left up</span>
            </span>
            {"\n"}
            {"        "}
            <span className={styles.kw}>else</span>
            {":\n"}
            <span className={styles.good}>
              {"            "}R -{" "}
              {"= "}
              <span className={styles.nm}>1</span>
              {"                  "}
              <span className={styles.cm}>
                # sum too large → move right down
              </span>
            </span>
            {"\n\n"}
            {"    "}
            <span className={styles.kw}>return</span>
            {" []                    "}
            <span className={styles.cm}># no pair found</span>
          </pre>
        </div>

        <p className={styles.prose}>
          Watch it execute on{" "}
          <code className={styles.inlineCode}>
            nums = [-4, -1, 1, 3, 5, 8, 11], target = 9
          </code>
          :
        </p>

        <div className={styles.stepTracker}>
          {EXEC_STEPS.map((step) => (
            <div
              key={step.n}
              className={`${styles.stepItem} ${styles.stepActive}`}
            >
              <div className={styles.stepNum}>{step.n}</div>
              <div className={styles.stepBody}>
                <code className={styles.stepCode}>{step.label}</code> →{" "}
                <strong>{step.sum}</strong>.{" "}
                <span style={{ color: step.found ? "#6ab87a" : undefined }}>
                  {step.note}
                </span>
              </div>
            </div>
          ))}
        </div>

        <p className={styles.prose}>
          <strong>4 comparisons</strong> instead of 21. The array had 7 elements
          — brute force would check C(7,2) = 21 pairs. Two pointers found the
          answer in 4.
        </p>

        <div className={styles.divider}>the anatomy of the pattern</div>

        {/* Pattern anatomy cards */}
        <div className={styles.patternGrid}>
          {PATTERN_CARDS.map((card) => (
            <div key={card.title} className={styles.patternCard}>
              <h3 className={styles.patternCardTitle}>
                {card.icon} {card.title}
              </h3>
              <p className={styles.patternCardBody}>{card.body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ══ FOOTER CTA ══ */}
      <div className={`${styles.animSection} ${styles.footerCta}`}>
        <div className={styles.footerBig}>
          You Now
          <br />
          Know <span className={styles.heroAccent}>Why</span>.
        </div>
        <p className={styles.footerProse}>
          The problem wasn&apos;t invented to have a clever trick. The trick
          exists because brute force is genuinely painful at scale. Now every
          problem we solve will make sense — not just <em>what</em> to do, but{" "}
          <em>why this and not that.</em>
        </p>
        <Link href="/study/python" className={styles.btn}>
          ← Back to Python track
        </Link>
      </div>
    </div>
  );
}
