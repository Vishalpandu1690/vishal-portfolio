"use client";

import { useState } from "react";

type MindMapNode = {
  id: string;
  label: string;
  tone?: "root" | "blue" | "green" | "teal";
  children?: MindMapNode[];
};

const tree: MindMapNode = {
  id: "root",
  label: "Amazon S3 Storage Classes",
  tone: "root",
  children: [
    {
      id: "temperatures",
      label: "Data Temperatures",
      tone: "blue",
      children: [
        { id: "hot", label: "Hot: Frequent access", tone: "green" },
        { id: "warm", label: "Warm: Occasional access", tone: "green" },
        { id: "cold", label: "Cold: Rare access", tone: "green" },
        {
          id: "frozen",
          label: "Frozen: Compliance or regret",
          tone: "green",
        },
      ],
    },
    {
      id: "classes",
      label: "Storage Class Options",
      tone: "blue",
      children: [
        {
          id: "standard",
          label: "S3 Standard",
          tone: "teal",
          children: [
            { id: "standard-fast", label: "Immediate access", tone: "green" },
            { id: "standard-no-fee", label: "No retrieval fee", tone: "green" },
            { id: "standard-frequent", label: "Frequent usage", tone: "green" },
          ],
        },
        {
          id: "intelligent-tiering",
          label: "S3 Intelligent-Tiering",
          tone: "teal",
          children: [
            {
              id: "it-auto",
              label: "Automatic optimization",
              tone: "green",
            },
            {
              id: "it-patterns",
              label: "Unpredictable patterns",
              tone: "green",
            },
            {
              id: "it-monitoring",
              label: "Small monitoring cost",
              tone: "green",
            },
          ],
        },
        {
          id: "standard-ia",
          label: "S3 Standard-IA",
          tone: "teal",
          children: [
            { id: "ia-infrequent", label: "Infrequent access", tone: "green" },
            { id: "ia-lower", label: "Lower storage cost", tone: "green" },
            { id: "ia-fees", label: "Retrieval fees", tone: "green" },
          ],
        },
        {
          id: "one-zone-ia",
          label: "S3 One Zone-IA",
          tone: "teal",
          children: [
            { id: "one-zone", label: "Single AZ", tone: "green" },
            { id: "one-rebuild", label: "Re-creatable data", tone: "green" },
            { id: "one-risk", label: "Reduced resilience", tone: "green" },
          ],
        },
        {
          id: "glacier",
          label: "S3 Glacier Family",
          tone: "teal",
          children: [
            {
              id: "glacier-instant",
              label: "Instant Retrieval: Rare but urgent",
              tone: "green",
            },
            {
              id: "glacier-flexible",
              label: "Flexible Retrieval: Minutes to hours",
              tone: "green",
            },
            {
              id: "glacier-deep",
              label: "Deep Archive: 12-48 hours",
              tone: "green",
            },
          ],
        },
      ],
    },
    {
      id: "optimization",
      label: "Management and Optimization",
      tone: "blue",
      children: [
        { id: "lifecycle", label: "Lifecycle policies", tone: "green" },
        { id: "age-data", label: "Let data age automatically", tone: "green" },
        { id: "cost-control", label: "Lower cost over time", tone: "green" },
      ],
    },
    {
      id: "mistakes",
      label: "Common Mistakes",
      tone: "blue",
      children: [
        { id: "mistake-standard", label: "Everything in Standard", tone: "green" },
        {
          id: "mistake-glacier",
          label: "Archiving too aggressively",
          tone: "green",
        },
        {
          id: "mistake-one-zone",
          label: "Using One Zone-IA for critical data",
          tone: "green",
        },
      ],
    },
  ],
};

const initiallyOpen = new Set([
  "root",
  "temperatures",
  "classes",
  "standard",
  "intelligent-tiering",
  "standard-ia",
  "one-zone-ia",
  "glacier",
]);

export default function S3MindMap() {
  const [openIds, setOpenIds] = useState(initiallyOpen);

  function toggleNode(id: string, hasChildren: boolean) {
    if (!hasChildren) {
      return;
    }

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
    <div className="overflow-x-auto pb-3">
      <div className="inline-flex min-w-max rounded-[1.5rem] border border-[var(--border)] bg-white/45 p-4">
        <MindMapBranch
          node={tree}
          openIds={openIds}
          onToggle={toggleNode}
        />
      </div>
    </div>
  );
}

type MindMapBranchProps = {
  node: MindMapNode;
  openIds: Set<string>;
  onToggle: (id: string, hasChildren: boolean) => void;
};

function MindMapBranch({ node, openIds, onToggle }: MindMapBranchProps) {
  const hasChildren = Boolean(node.children?.length);
  const isOpen = openIds.has(node.id);

  return (
    <div className="flex items-center gap-6 py-3">
      <button
        type="button"
        onClick={() => onToggle(node.id, hasChildren)}
        className={`relative shrink-0 rounded-xl border px-4 py-3 text-left shadow-sm transition duration-300 hover:-translate-y-0.5 hover:shadow-md ${getNodeTone(
          node.tone,
        )} ${hasChildren ? "cursor-pointer" : "cursor-default"}`}
      >
        <div className="flex items-center gap-3">
          <span className="text-sm font-medium leading-5">{node.label}</span>
          {hasChildren ? (
            <span className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-white/70 text-xs font-semibold text-slate-700">
              {isOpen ? "−" : "+"}
            </span>
          ) : null}
        </div>
      </button>

      {hasChildren ? (
        <div
          className={`mindmap-branch overflow-hidden ${isOpen ? "mindmap-branch-open" : "mindmap-branch-closed"}`}
        >
          <div className="relative flex flex-col gap-3 pl-8">
            <div className="absolute bottom-3 left-2 top-3 w-px bg-[rgba(14,116,144,0.22)]" />

            {node.children?.map((child) => (
              <div key={child.id} className="relative flex items-center">
                <div className="absolute left-2 top-1/2 h-px w-6 -translate-y-1/2 bg-[rgba(14,116,144,0.22)]" />
                <MindMapBranch
                  node={child}
                  openIds={openIds}
                  onToggle={onToggle}
                />
              </div>
            ))}
          </div>
        </div>
      ) : null}
    </div>
  );
}

function getNodeTone(tone: MindMapNode["tone"]) {
  switch (tone) {
    case "root":
      return "border-indigo-200 bg-indigo-100/90 text-indigo-950";
    case "blue":
      return "border-sky-200 bg-sky-100/90 text-sky-950";
    case "teal":
      return "border-teal-200 bg-teal-100/90 text-teal-950";
    case "green":
      return "border-emerald-200 bg-emerald-100/90 text-emerald-950";
    default:
      return "border-slate-200 bg-slate-100/90 text-slate-950";
  }
}
