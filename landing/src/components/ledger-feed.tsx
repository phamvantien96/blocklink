"use client";

import { useEffect, useState } from "react";

type Kind = "escrow" | "hire" | "check" | "release" | "rep";

type LedgerEvent = {
  kind: Kind;
  text: string;
  amount?: string;
};

const jobs = [
  { title: "Landing page + presale", budget: 500, hires: ["design", "frontend", "solidity"] },
  { title: "Dashboard redesign", budget: 320, hires: ["design", "frontend"] },
  { title: "Telegram bot", budget: 260, hires: ["backend", "auditor"] },
  { title: "Brand kit + logo", budget: 180, hires: ["design", "illustration"] },
];

const hireFees: Record<string, number> = {
  design: 100,
  frontend: 150,
  solidity: 150,
  backend: 140,
  auditor: 25,
  illustration: 60,
};

const usdc = (n: number) => `${n.toLocaleString("en-US")} USDC`;

// Turns a job into the sequence of ledger events it would emit.
function jobEvents(jobIndex: number): LedgerEvent[] {
  const job = jobs[jobIndex % jobs.length];
  const id = 1042 + jobIndex;
  return [
    { kind: "escrow", text: `#${id} ${job.title}`, amount: usdc(job.budget) },
    ...job.hires.map((role) => ({
      kind: "hire" as const,
      text: `pm.agent → ${role}.agent`,
      amount: usdc(hireFees[role]),
    })),
    { kind: "check", text: `#${id} tests + human QA passed` },
    { kind: "release", text: `#${id} milestone released`, amount: usdc(job.budget * 0.9) },
    { kind: "rep", text: `${job.hires.length + 1} agents gained reputation` },
  ];
}

const sequence = jobs.flatMap((_, i) => jobEvents(i));

const tag: Record<Kind, { label: string; className: string }> = {
  escrow: { label: "ESCROW", className: "text-signal" },
  hire: { label: "HIRE", className: "text-paper" },
  check: { label: "VERIFY", className: "text-muted" },
  release: { label: "RELEASE", className: "text-signal" },
  rep: { label: "REP", className: "text-muted" },
};

const VISIBLE = 7;
const BASE_BLOCK = 21_048_300;

export function LedgerFeed() {
  // `head` is the index of the newest event. The initial value is fixed so the
  // server-rendered markup matches the first client render.
  const [head, setHead] = useState(VISIBLE - 1);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const timer = setInterval(() => setHead((h) => h + 1), 2200);
    return () => clearInterval(timer);
  }, []);

  const rows = Array.from({ length: VISIBLE }, (_, k) => head - k).filter((i) => i >= 0);

  return (
    <figure className="overflow-hidden rounded-2xl border border-line-strong bg-surface/90 shadow-2xl shadow-black/50">
      <div className="flex items-center justify-between border-b border-line px-4 py-3 font-mono text-[11px] tracking-wide text-muted uppercase">
        <span className="flex items-center gap-2">
          <span className="animate-pulse-dot size-1.5 rounded-full bg-signal" aria-hidden="true" />
          blocklink ledger
        </span>
        <span>Base · USDC</span>
      </div>
      <ol
        className="h-[19rem] divide-y divide-line overflow-hidden font-mono text-[12px] sm:h-[18.25rem] sm:text-[13px]"
        aria-live="off"
      >
        {rows.map((i) => {
          const event = sequence[i % sequence.length];
          return (
            <li
              key={i}
              className={`grid grid-cols-[4.75rem_1fr] items-baseline gap-x-3 px-4 py-2.5 sm:grid-cols-[5.5rem_4.75rem_1fr_auto] ${
                i === head && head >= VISIBLE ? "animate-row-in" : ""
              }`}
            >
              <span className="hidden text-faint sm:block">
                {(BASE_BLOCK + i * 3).toLocaleString("en-US")}
              </span>
              <span className={tag[event.kind].className}>{tag[event.kind].label}</span>
              <span className="truncate text-paper/85">{event.text}</span>
              {event.amount && (
                <span className="col-start-2 text-muted sm:col-start-auto sm:text-right">
                  {event.amount}
                </span>
              )}
            </li>
          );
        })}
      </ol>
      <figcaption className="border-t border-line px-4 py-2.5 text-[11px] text-faint">
        Illustrative simulation of the job flow. Not live network data.
      </figcaption>
    </figure>
  );
}
