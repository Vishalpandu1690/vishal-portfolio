import Link from "next/link";
import S3MindMap from "@/components/s3-mind-map";

const quickModel = [
  {
    name: "S3 Standard",
    analogy: "Desk",
    access: "Frequent",
    speed: "Immediate",
    cost: "Higher storage cost, no retrieval fee",
  },
  {
    name: "S3 Intelligent-Tiering",
    analogy: "Smart assistant",
    access: "Unpredictable",
    speed: "Immediate for active data",
    cost: "Small monitoring cost, automatic optimization",
  },
  {
    name: "S3 Standard-IA",
    analogy: "Cupboard",
    access: "Rare, but still needs quick access",
    speed: "Immediate",
    cost: "Lower storage cost, retrieval fee",
  },
  {
    name: "S3 One Zone-IA",
    analogy: "Single cupboard",
    access: "Rare and re-creatable",
    speed: "Immediate",
    cost: "Cheaper, less resilient",
  },
  {
    name: "Glacier Instant Retrieval",
    analogy: "Archive drawer",
    access: "Rare, but urgent when needed",
    speed: "Immediate",
    cost: "Archive pricing with fast access",
  },
  {
    name: "Glacier Flexible Retrieval",
    analogy: "Storeroom",
    access: "Rare and not urgent",
    speed: "Minutes to hours",
    cost: "Very low storage cost",
  },
  {
    name: "Glacier Deep Archive",
    analogy: "Warehouse",
    access: "Almost never",
    speed: "12-48 hours",
    cost: "Cheapest storage",
  },
];

const decisionQuestions = [
  "How often is this data accessed?",
  "When it is accessed, how fast must it come back?",
  "Can this data be recreated if lost?",
  "Will retrieval fees hurt if this gets pulled often?",
  "Is this really an access problem or a retention problem?",
];

const beginnerMistakes = [
  "Keeping everything in Standard forever.",
  "Archiving data too aggressively and then needing it all the time.",
  "Using One Zone-IA for data that is actually business-critical.",
  "Choosing a class once and never revisiting it.",
  "Ignoring lifecycle policies until the bill becomes motivational content.",
];

export default function S3StorageClassesBlog() {
  return (
    <main className="px-6 py-16 sm:px-10">
      <article className="mx-auto max-w-4xl">
        <Link
          href="/blog/category/cloud"
          className="text-sm font-medium text-[var(--accent)] transition hover:text-[var(--accent-strong)]"
        >
          Cloud
        </Link>

        <header className="mt-6 rounded-[2rem] border border-[var(--border)] bg-[linear-gradient(180deg,rgba(251,252,250,0.95),rgba(232,243,241,0.92))] p-8 shadow-[0_20px_60px_rgba(15,23,32,0.06)]">
          <p className="text-xs uppercase tracking-[0.18em] text-[var(--muted)]">
            Apr 2026 • 12 min read
          </p>
          <h1 className="mt-4 text-4xl font-semibold tracking-tight text-[var(--foreground)] sm:text-5xl">
            Amazon S3 Storage Classes Explained
          </h1>
          <p className="mt-5 max-w-3xl text-lg leading-8 text-[var(--muted)]">
            The surprisingly human logic behind where your cloud data lives,
            why AWS has so many storage classes, and how to stop paying premium
            rent for files you barely touch.
          </p>
        </header>

        <section className="mt-10 space-y-6 text-[var(--muted)]">
          <p className="leading-8">
            When people first hear &quot;store it in S3,&quot; they often imagine one
            magical bucket in the sky where every file sits happily forever.
          </p>
          <p className="leading-8">
            That is not how S3 works. And honestly, it should not.
          </p>
          <p className="leading-8">
            Because not all data deserves the same lifestyle. Some data is busy,
            spoiled, and demanding. It wants attention every few milliseconds.
            Some data is quiet and well-behaved. It mostly sits there until
            someone remembers it exists. Some data is basically in retirement.
          </p>
          <p className="leading-8">
            S3 storage classes exist because data has a life cycle, and AWS
            would very much like you to stop paying premium rent for files you
            have not touched since the dinosaurs were doing compliance reviews.
          </p>
        </section>

        <section className="mt-10 rounded-[1.75rem] border border-[var(--border)] bg-white/70 p-6 shadow-[0_18px_50px_rgba(15,23,32,0.04)]">
          <h2 className="text-2xl font-semibold text-[var(--foreground)]">
            First, the big idea: data has temperature
          </h2>
          <ul className="mt-5 list-disc space-y-2 pl-6 leading-7 text-[var(--muted)]">
            <li>Hot data is accessed often.</li>
            <li>Warm data is accessed occasionally.</li>
            <li>Cold data is rarely accessed.</li>
            <li>
              Frozen data exists mostly because law, finance, compliance, or
              future regret said so.
            </li>
          </ul>
          <p className="mt-5 leading-8 text-[var(--muted)]">
            S3 storage classes are AWS turning that truth into pricing. You are
            not just choosing where data lives. You are choosing a balance
            between storage cost, retrieval speed, retrieval cost, resilience,
            and convenience.
          </p>
        </section>

        <section className="mt-10">
          <h2 className="text-2xl font-semibold text-[var(--foreground)]">
            Think of S3 like your house
          </h2>
          <div className="mt-5 grid gap-4 md:grid-cols-2">
            <div className="rounded-[1.5rem] border border-[var(--border)] bg-[var(--surface)] p-5">
              <p className="text-sm font-medium uppercase tracking-[0.16em] text-[var(--muted)]">
                Things you keep close
              </p>
              <ul className="mt-4 list-disc space-y-2 pl-6 leading-7 text-[var(--muted)]">
                <li>Your phone is in your hand.</li>
                <li>Your laptop is on your desk.</li>
                <li>Important documents are in a drawer.</li>
              </ul>
            </div>
            <div className="rounded-[1.5rem] border border-[var(--border)] bg-[var(--surface)] p-5">
              <p className="text-sm font-medium uppercase tracking-[0.16em] text-[var(--muted)]">
                Things you store away
              </p>
              <ul className="mt-4 list-disc space-y-2 pl-6 leading-7 text-[var(--muted)]">
                <li>Old tax papers live in a box.</li>
                <li>Rarely used files go into a cupboard.</li>
                <li>
                  Mysterious cables from 2016 stay because &quot;they might be
                  useful.&quot;
                </li>
              </ul>
            </div>
          </div>
          <p className="mt-5 leading-8 text-[var(--muted)]">
            S3 works the same way. The classes are not random AWS complexity.
            They are organized versions of normal human behavior.
          </p>
        </section>

        <section className="mt-10 overflow-hidden rounded-[1.75rem] border border-[var(--border)] bg-white/75 shadow-[0_18px_50px_rgba(15,23,32,0.04)]">
          <div className="border-b border-[var(--border)] px-6 py-5">
            <h2 className="text-2xl font-semibold text-[var(--foreground)]">
              The quick mental model
            </h2>
            <p className="mt-2 text-sm leading-6 text-[var(--muted)]">
              Storage classes are really about matching data value and access
              behavior to the right cost model.
            </p>
          </div>
          <div className="overflow-x-auto">
            <table className="min-w-full text-left text-sm">
              <thead className="bg-[var(--surface-strong)] text-[var(--foreground)]">
                <tr>
                  <th className="px-6 py-4 font-semibold">Storage class</th>
                  <th className="px-6 py-4 font-semibold">Home analogy</th>
                  <th className="px-6 py-4 font-semibold">Access pattern</th>
                  <th className="px-6 py-4 font-semibold">Speed</th>
                  <th className="px-6 py-4 font-semibold">Cost shape</th>
                </tr>
              </thead>
              <tbody>
                {quickModel.map((item) => (
                  <tr
                    key={item.name}
                    className="border-t border-[var(--border)] text-[var(--muted)]"
                  >
                    <td className="px-6 py-4 font-medium text-[var(--foreground)]">
                      {item.name}
                    </td>
                    <td className="px-6 py-4">{item.analogy}</td>
                    <td className="px-6 py-4">{item.access}</td>
                    <td className="px-6 py-4">{item.speed}</td>
                    <td className="px-6 py-4">{item.cost}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section className="mt-10 rounded-[1.75rem] border border-[var(--border)] bg-[linear-gradient(180deg,rgba(251,252,250,0.96),rgba(232,243,241,0.78))] p-6 shadow-[0_18px_50px_rgba(15,23,32,0.04)] sm:p-8">
          <div className="max-w-2xl">
            <p className="text-xs uppercase tracking-[0.18em] text-[var(--muted)]">
              Mind map view
            </p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-[var(--foreground)]">
              Click the boxes to expand the topic the way a real mind map does.
            </h2>
            <p className="mt-4 leading-7 text-[var(--muted)]">
              This version is interactive, so readers can open or collapse
              branches as they explore the topic. It gives the same “show me
              the structure first” feeling as a NotebookLM-style mind map, but
              inside your article itself.
            </p>
          </div>

          <div className="mt-8">
            <S3MindMap />
          </div>
        </section>

        <section className="mt-10 space-y-8">
          <StorageSection
            title="1. S3 Standard: the desk"
            body="S3 Standard is where you keep data that is actively used and needs to be available immediately. It is fast, reliable, and convenient. It is also where many teams accidentally leave everything forever, which is how cloud bills start developing villain origin stories."
            bullets={[
              "Millisecond access",
              "Multi-AZ durability",
              "No retrieval fee",
              "Great for website assets, active app data, and current logs",
            ]}
          />

          <StorageSection
            title="2. S3 Intelligent-Tiering: the smart assistant"
            body='Imagine hiring someone whose entire job is to watch your access patterns and quietly move files to cheaper places when you stop using them. That is Intelligent-Tiering. It exists because humans are terrible at predicting future access patterns.'
            bullets={[
              "Automatic movement across access tiers",
              "Immediate access for active data",
              "Excellent for data lakes and unpredictable datasets",
              'Useful when "we are not really sure what gets used often anymore"',
            ]}
          />

          <StorageSection
            title="3. S3 Standard-IA: the cupboard"
            body="Some things are important, but not important enough to live on the desk. Standard-IA is for data you rarely access, but still need immediately when you do."
            bullets={[
              "Lower storage cost than Standard",
              "Millisecond retrieval",
              "Retrieval fee applies",
              "Good for backups, prior-month reports, and recovery files",
            ]}
          />

          <StorageSection
            title="4. S3 One Zone-IA: the single cupboard"
            body='This is where the engineering question gets serious: if the data disappears, can you recreate it? If the answer is yes, One Zone-IA might be enough. Durability should match business value, not anxiety.'
            bullets={[
              "Cheaper than Standard-IA",
              "Stored in one Availability Zone",
              "Best for recomputable outputs and temporary data",
              "Not for business-critical data you cannot lose",
            ]}
          />

          <StorageSection
            title="5. Glacier Instant Retrieval: the archive drawer"
            body='People hear "Glacier" and assume everything becomes painfully slow. Not here. This is for archived data that is rarely accessed but still needs to come back immediately when requested.'
            bullets={[
              "Archive pricing with immediate retrieval",
              "Good for compliance docs and historical records",
              "Useful when rare access still needs low latency",
            ]}
          />

          <StorageSection
            title="6. Glacier Flexible Retrieval: the storeroom"
            body="This is preserve-it-more-than-use-it data. You are not running regular analytics here. You are keeping history around because it still matters, just not urgently."
            bullets={[
              "Very low storage cost",
              "Retrieval in minutes to hours",
              "Good for audit logs, old backups, and historical raw data",
            ]}
          />

          <StorageSection
            title="7. Glacier Deep Archive: the warehouse"
            body="This is for data that exists because business, legal, or regulation says it must continue existing. The cheapest storage, and also the slowest retrieval."
            bullets={[
              "Best for long-term retention and compliance",
              "Retrieval can take 12-48 hours",
              "For records you almost never expect to touch",
            ]}
          />
        </section>

        <section className="mt-10 rounded-[1.75rem] border border-[var(--border)] bg-[linear-gradient(135deg,#0f1720_0%,#123a3d_52%,#115e59_100%)] p-8 text-white shadow-[0_28px_90px_rgba(10,20,30,0.18)]">
          <p className="text-xs uppercase tracking-[0.18em] text-teal-100/70">
            Quiet hero
          </p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight">
            Lifecycle policies are where S3 stops being storage and becomes
            architecture.
          </h2>
          <p className="mt-5 max-w-3xl leading-8 text-slate-200">
            You do not want to manually move millions of objects between
            classes. Lifecycle policies let you tell S3 a story: be fast for 30
            days, get cheaper after that, then go quiet, then sleep. That is
            how data ages gracefully instead of just sitting in Standard until
            finance starts asking adventurous questions.
          </p>
        </section>

        <section className="mt-10 grid gap-6 lg:grid-cols-[minmax(0,1.1fr)_minmax(280px,0.9fr)]">
          <div className="rounded-[1.75rem] border border-[var(--border)] bg-white/75 p-6 shadow-[0_18px_50px_rgba(15,23,32,0.04)]">
            <h2 className="text-2xl font-semibold text-[var(--foreground)]">
              How to choose the right class
            </h2>
            <ol className="mt-5 space-y-3 text-[var(--muted)]">
              {decisionQuestions.map((question, index) => (
                <li key={question} className="flex gap-4 leading-7">
                  <span className="mt-0.5 inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[var(--accent-soft)] text-sm font-semibold text-[var(--accent-strong)]">
                    {index + 1}
                  </span>
                  <span>{question}</span>
                </li>
              ))}
            </ol>
          </div>

          <div className="rounded-[1.75rem] border border-[var(--border)] bg-[var(--surface)] p-6 shadow-[0_18px_50px_rgba(15,23,32,0.04)]">
            <h2 className="text-2xl font-semibold text-[var(--foreground)]">
              Common mistakes
            </h2>
            <ul className="mt-5 list-disc space-y-3 pl-6 leading-7 text-[var(--muted)]">
              {beginnerMistakes.map((mistake) => (
                <li key={mistake}>{mistake}</li>
              ))}
            </ul>
          </div>
        </section>

        <section className="mt-10 rounded-[1.75rem] border border-[var(--border)] bg-white/75 p-8 shadow-[0_18px_50px_rgba(15,23,32,0.04)]">
          <h2 className="text-2xl font-semibold text-[var(--foreground)]">
            Final thought
          </h2>
          <p className="mt-5 leading-8 text-[var(--muted)]">
            Beginners often see S3 as buckets, objects, and folders. Experienced
            engineers eventually see something else: S3 is a system for managing
            time, access, value, and cost.
          </p>
          <p className="mt-5 leading-8 text-[var(--muted)]">
            Data is born hot. Then it cools down. Then it becomes history. Good
            S3 design is not about dumping files into the cloud. It is about
            letting data live in the right place at the right stage of its life.
          </p>
        </section>
      </article>
    </main>
  );
}

type StorageSectionProps = {
  title: string;
  body: string;
  bullets: string[];
};

function StorageSection({ title, body, bullets }: StorageSectionProps) {
  return (
    <section className="rounded-[1.75rem] border border-[var(--border)] bg-white/75 p-6 shadow-[0_18px_50px_rgba(15,23,32,0.04)]">
      <h2 className="text-2xl font-semibold text-[var(--foreground)]">
        {title}
      </h2>
      <p className="mt-4 leading-8 text-[var(--muted)]">{body}</p>
      <ul className="mt-5 list-disc space-y-2 pl-6 leading-7 text-[var(--muted)]">
        {bullets.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </section>
  );
}
