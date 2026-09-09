"use client";

import { useState } from "react";

const statusColor = {
  "In development": "bg-ink-faint",
  Live: "bg-accent",
  "Concept build": "bg-ink-faint",
  "Available as a service": "bg-accent",
};

function StatusTag({ status }) {
  return (
    <span className="inline-flex items-center gap-2 text-sm text-ink-soft">
      <span className={`h-1.5 w-1.5 rounded-full ${statusColor[status]}`} />
      {status}
    </span>
  );
}

export default function CaseStudy({ title, org, status, body, stack, children }) {
  const [expanded, setExpanded] = useState(false);

  return (
    <article className="py-10 border-b border-line last:border-b-0">
      <div className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-2 mb-1">
        <h3 className="font-display font-medium text-xl text-ink">{title}</h3>
        <StatusTag status={status} />
      </div>

      {org && <p className="text-sm text-ink-faint mb-3">Built for {org}</p>}

      <p
        className={`measure text-ink-soft leading-relaxed ${org ? "" : "mt-3"} ${
          expanded ? "" : "line-clamp-3"
        }`}
      >
        {body}
      </p>

      <button
        type="button"
        onClick={() => setExpanded((prev) => !prev)}
        className="mt-2 text-sm text-accent-strong hover:text-accent transition-colors"
      >
        {expanded ? "Show less" : "Read more"}
      </button>

      <p className="mt-4 font-mono text-xs text-ink-faint">{stack}</p>

      {expanded && children}
    </article>
  );
}
