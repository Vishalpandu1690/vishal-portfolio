"use client";

import { useState } from "react";

interface DemoOutput {
  arr: number[];
  target: number;
  ops: number;
  maxOps: number;
  found: number[] | null;
}

interface Props {
  monoClass: string;
}

export default function BruteForceDemo({ monoClass }: Props) {
  const [n, setN] = useState(10);
  const [targetInput, setTargetInput] = useState("");
  const [output, setOutput] = useState<DemoOutput | null>(null);

  function runDemo() {
    const clampedN = Math.min(Math.max(n, 3), 50);
    const arr = Array.from(
      { length: clampedN },
      (_, i) => i * 2 - Math.floor(clampedN / 2),
    );

    const target =
      targetInput !== ""
        ? parseInt(targetInput)
        : arr[Math.floor(clampedN * 0.3)] + arr[Math.floor(clampedN * 0.7)];

    let ops = 0;
    let found: number[] | null = null;

    outer: for (let i = 0; i < clampedN; i++) {
      for (let j = i + 1; j < clampedN; j++) {
        ops++;
        if (arr[i] + arr[j] === target) {
          found = [i, j];
          break outer;
        }
      }
    }

    const maxOps = (clampedN * (clampedN - 1)) / 2;
    setOutput({ arr, target, ops, maxOps, found });
  }

  const baseInput: React.CSSProperties = {
    fontFamily: "inherit",
    fontSize: 13,
    background: "#0a0a0a",
    border: "1px solid #333",
    color: "#e8a020",
    padding: "6px 12px",
    outline: "none",
  };

  return (
    <div
      style={{
        maxWidth: 700,
        margin: "32px 0",
        background: "#1a1a1a",
        border: "1px solid #2a2a2a",
        padding: 24,
      }}
    >
      {/* Controls */}
      <div
        style={{
          display: "flex",
          gap: 12,
          flexWrap: "wrap",
          marginBottom: 20,
          alignItems: "center",
        }}
      >
        <span
          className={monoClass}
          style={{ fontSize: 11, color: "#8a8070", letterSpacing: "0.15em" }}
        >
          TRY IT — Array size (n):
        </span>

        <input
          className={monoClass}
          type="number"
          value={n}
          min={3}
          max={50}
          onChange={(e) => setN(parseInt(e.target.value) || 10)}
          style={{ ...baseInput, width: 80 }}
        />

        <input
          className={monoClass}
          type="number"
          value={targetInput}
          placeholder="target"
          onChange={(e) => setTargetInput(e.target.value)}
          style={{ ...baseInput, width: 100 }}
        />

        <button
          onClick={runDemo}
          className={monoClass}
          style={{
            fontFamily: "inherit",
            fontSize: 11,
            letterSpacing: "0.15em",
            textTransform: "uppercase",
            background: "#111",
            border: "1px solid #333",
            color: "#f5f0e8",
            padding: "6px 16px",
            cursor: "pointer",
            transition: "all 0.2s",
          }}
          onMouseEnter={(e) => {
            (e.target as HTMLButtonElement).style.borderColor = "#e8a020";
            (e.target as HTMLButtonElement).style.color = "#e8a020";
          }}
          onMouseLeave={(e) => {
            (e.target as HTMLButtonElement).style.borderColor = "#333";
            (e.target as HTMLButtonElement).style.color = "#f5f0e8";
          }}
        >
          Run Brute Force
        </button>
      </div>

      {/* Output */}
      <div className={monoClass} style={{ fontSize: 12, lineHeight: 2 }}>
        {output ? (
          <>
            <div style={{ color: "#555" }}>
              Array (n={output.arr.length}):{" "}
              <span style={{ color: "#6ab87a" }}>
                [{output.arr.join(", ")}]
              </span>
            </div>
            <div style={{ color: "#555" }}>
              Target:{" "}
              <span style={{ color: "#e8a020" }}>{output.target}</span>
            </div>
            <div style={{ color: "#2a2a2a", margin: "4px 0" }}>
              ─────────────────────────────────────
            </div>
            <div style={{ color: "#555" }}>
              Pairs checked:{" "}
              <span
                style={{
                  color: output.ops > 20 ? "#c0392b" : "#e8a020",
                  fontSize: 14,
                  fontWeight: 600,
                }}
              >
                {output.ops.toLocaleString()} /{" "}
                {output.maxOps.toLocaleString()} max
              </span>
            </div>
            {output.found ? (
              <div style={{ color: "#6ab87a" }}>
                ✓ Found at indices [{output.found.join(", ")}] →{" "}
                {output.arr[output.found[0]]} + {output.arr[output.found[1]]} ={" "}
                {output.target}
              </div>
            ) : (
              <div style={{ color: "#c0392b" }}>
                ✗ No pair found for target {output.target}
              </div>
            )}
            <div style={{ marginTop: 8, color: "#444" }}>
              Two Pointers would solve this in ≤{" "}
              <span style={{ color: "#6ab87a" }}>{output.arr.length} ops</span>
            </div>
          </>
        ) : (
          <span style={{ color: "#444" }}>
            ↑ Enter n and a target. Watch operations pile up.
          </span>
        )}
      </div>
    </div>
  );
}
