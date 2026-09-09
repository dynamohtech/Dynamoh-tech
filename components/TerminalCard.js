"use client";

import { useEffect, useState } from "react";

const COMMAND = "whoami";
const IDENTITY = "Emmanuel Adegbaju — Odoo, automation & Web3 engineer";

const STATS = [
  { label: "invoices/mo target (in dev)", value: "10,000+" },
  { label: "ERPs integrated", value: "2" },
  { label: "curriculum phases designed", value: "7" },
  { label: "Web3 projects shipped", value: "2" },
];

export default function TerminalCard() {
  const [typed, setTyped] = useState("");
  const [showOutput, setShowOutput] = useState(false);
  const [showStats, setShowStats] = useState(false);

  useEffect(() => {
    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (reduceMotion) {
      setTyped(COMMAND);
      setShowOutput(true);
      setShowStats(true);
      return;
    }

    let i = 0;
    const typeTimer = setInterval(() => {
      i += 1;
      setTyped(COMMAND.slice(0, i));
      if (i >= COMMAND.length) {
        clearInterval(typeTimer);
        setTimeout(() => setShowOutput(true), 300);
        setTimeout(() => setShowStats(true), 900);
      }
    }, 100);

    return () => clearInterval(typeTimer);
  }, []);

  return (
    <div className="rounded-sm overflow-hidden border border-ink/15 bg-[#10151f] font-mono text-sm shadow-sm">
      <div className="flex items-center gap-1.5 px-4 py-3 bg-[#1b2231]">
        <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f56]" />
        <span className="h-2.5 w-2.5 rounded-full bg-[#ffbd2e]" />
        <span className="h-2.5 w-2.5 rounded-full bg-[#27c93f]" />
        <span className="ml-3 text-xs text-white/40">emmanuel@dynamo:~</span>
      </div>

      <div className="p-5 space-y-3 text-[#d7dce5] min-h-[210px]">
        <div>
          <span className="text-accent">$</span> {typed}
          <span
            aria-hidden="true"
            className="inline-block w-2 h-4 align-middle bg-accent/70 ml-0.5 animate-pulse"
          />
        </div>

        {showOutput && (
          <p className="text-white/70 leading-relaxed">{IDENTITY}</p>
        )}

        {showStats && (
          <div className="pt-2 border-t border-white/10 space-y-1.5">
            {STATS.map((stat) => (
              <div
                key={stat.label}
                className="flex justify-between gap-4 text-xs text-white/55"
              >
                <span>{stat.label}</span>
                <span className="text-white">{stat.value}</span>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
