"use client";

import { useState } from "react";

type MindMapCluster = {
  id: string;
  title: string;
  tone: "blue" | "teal" | "green" | "amber";
  summary: string;
  details: string[];
};

const clusters: MindMapCluster[] = [
  {
    id: "temperatures",
    title: "Data Temperatures",
    tone: "blue",
    summary: "Hot, warm, cold, and frozen data",
    details: [
      "Hot: frequent access",
      "Warm: occasional access",
      "Cold: rare access",
      "Frozen: compliance or regret",
    ],
  },
  {
    id: "active",
    title: "Active Storage",
    tone: "green",
    summary: "S3 Standard for frequently used data",
    details: [
      "Immediate access",
      "No retrieval fee",
      "Best for active app data and assets",
    ],
  },
  {
    id: "adaptive",
    title: "Adaptive Storage",
    tone: "teal",
    summary: "Intelligent-Tiering for unpredictable usage",
    details: [
      "Automatic optimization",
      "Useful for changing access patterns",
      "Small monitoring cost",
    ],
  },
  {
    id: "warm",
    title: "Warm Storage",
    tone: "amber",
    summary: "IA classes for fast but less frequent access",
    details: [
      "Standard-IA",
      "One Zone-IA",
      "Lower storage cost with tradeoffs",
    ],
  },
  {
    id: "archive",
    title: "Archive Storage",
    tone: "blue",
    summary: "Glacier classes for retention-focused data",
    details: [
      "Instant Retrieval",
      "Flexible Retrieval",
      "Deep Archive",
    ],
  },
  {
    id: "automation",
    title: "Automation",
    tone: "teal",
    summary: "Lifecycle rules age data automatically",
    details: [
      "Move data over time",
      "Reduce cost without manual effort",
      "Turn storage into architecture",
    ],
  },
];

const initiallyOpen = new Set(["archive"]);

export default function S3MindMap() {
  const [openIds, setOpenIds] = useState(initiallyOpen);

  function toggleCluster(id: string) {
    setOpenIds((current) => {
      const next = new Set(current);

      if (next.has(id)) {
        next.delete(id);
      } else {
        next.add(id);
      }

      return next;
    });
  }

  return (
    <div className="rounded-[1.5rem] border border-[var(--border)] bg-white/55 p-4 sm:p-5">
      <div className="mx-auto flex max-w-5xl flex-col items-center">
        <div className="rounded-[1.25rem] border border-indigo-200 bg-indigo-100/90 px-5 py-4 text-center shadow-[0_14px_35px_rgba(15,23,32,0.06)]">
          <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-indigo-700">
            Core idea
          </p>
          <h3 className="mt-2 text-lg font-semibold text-indigo-950 sm:text-xl">
            Amazon S3 Storage Classes
          </h3>
          <p className="mt-2 max-w-xs text-sm leading-6 text-indigo-900/80">
            Match data access patterns, durability needs, retrieval speed, and
            cost to the right storage class.
          </p>
        </div>

        <div className="mt-4 h-8 w-px bg-[rgba(79,70,229,0.2)]" />

        <div className="grid w-full gap-4 md:grid-cols-2 xl:grid-cols-3">
          {clusters.map((cluster) => {
            const isOpen = openIds.has(cluster.id);

            return (
              <button
                key={cluster.id}
                type="button"
                onClick={() => toggleCluster(cluster.id)}
                className={`group rounded-[1.25rem] border p-4 text-left shadow-[0_12px_30px_rgba(15,23,32,0.04)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_18px_40px_rgba(15,23,32,0.07)] ${getClusterTone(
                  cluster.tone,
                )}`}
              >
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <p className="text-sm font-semibold">{cluster.title}</p>
                    <p className="mt-2 text-sm leading-6 opacity-85">
                      {cluster.summary}
                    </p>
                  </div>
                  <span className="inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-white/70 text-xs font-semibold text-slate-700">
                    {isOpen ? "−" : "+"}
                  </span>
                </div>

                <div
                  className={`mindmap-cluster-details ${isOpen ? "mindmap-cluster-open" : "mindmap-cluster-closed"}`}
                >
                  <ul className="mt-4 space-y-2 border-t border-black/8 pt-4 text-sm leading-6">
                    {cluster.details.map((detail) => (
                      <li key={detail} className="flex gap-2">
                        <span className="mt-2 h-1.5 w-1.5 rounded-full bg-current opacity-65" />
                        <span>{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}

function getClusterTone(tone: MindMapCluster["tone"]) {
  switch (tone) {
    case "blue":
      return "border-sky-200 bg-sky-100/85 text-sky-950";
    case "teal":
      return "border-teal-200 bg-teal-100/85 text-teal-950";
    case "green":
      return "border-emerald-200 bg-emerald-100/85 text-emerald-950";
    case "amber":
      return "border-amber-200 bg-amber-100/90 text-amber-950";
    default:
      return "border-slate-200 bg-slate-100/90 text-slate-950";
  }
}
