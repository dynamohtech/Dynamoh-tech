"use client";

import { useEffect, useRef, useState } from "react";

export default function PipelineDiagram() {
  const wrapperRef = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = wrapperRef.current;
    if (!el) return;

    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (reduceMotion) {
      setVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <figure
      ref={wrapperRef}
      className={`mt-8 transition-all duration-700 ease-out ${
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
      }`}
    >
      <svg
        viewBox="0 0 900 260"
        role="img"
        aria-label="Diagram: Odoo and Dynamics 365 feed a vision-LLM extraction stage, then validation, then a reconciliation engine that writes to PostgreSQL."
        className="w-full h-auto"
      >
        <defs>
          <marker
            id="arrowhead"
            markerWidth="8"
            markerHeight="8"
            refX="6"
            refY="4"
            orient="auto"
          >
            <path d="M0,0 L8,4 L0,8 Z" className="fill-accent" />
          </marker>
        </defs>

        {/* connecting lines */}
        <g className="stroke-accent" strokeWidth="1.5" fill="none">
          <line x1="190" y1="68" x2="248" y2="128" markerEnd="url(#arrowhead)" />
          <line x1="190" y1="192" x2="248" y2="132" markerEnd="url(#arrowhead)" />
          <line x1="420" y1="130" x2="478" y2="130" markerEnd="url(#arrowhead)" />
          <line x1="650" y1="130" x2="708" y2="130" markerEnd="url(#arrowhead)" />
        </g>

        {/* source boxes */}
        <g>
          <rect x="20" y="40" width="170" height="56" rx="3" className="fill-paper stroke-line" strokeWidth="1.5" />
          <text x="105" y="63" textAnchor="middle" className="fill-ink font-body text-[13px]">Odoo</text>
          <text x="105" y="80" textAnchor="middle" className="fill-ink-soft font-body text-[13px]">(Butchery)</text>
        </g>
        <g>
          <rect x="20" y="164" width="170" height="56" rx="3" className="fill-paper stroke-line" strokeWidth="1.5" />
          <text x="105" y="187" textAnchor="middle" className="fill-ink font-body text-[13px]">Dynamics 365</text>
          <text x="105" y="204" textAnchor="middle" className="fill-ink-soft font-body text-[13px]">(SPAR Nigeria)</text>
        </g>

        {/* extraction box */}
        <g>
          <rect x="250" y="100" width="170" height="60" rx="3" className="fill-surface stroke-line" strokeWidth="1.5" />
          <text x="335" y="125" textAnchor="middle" className="fill-ink font-body text-[13px]">Vision-LLM</text>
          <text x="335" y="142" textAnchor="middle" className="fill-ink-soft font-body text-[13px]">extraction</text>
        </g>

        {/* validation box */}
        <g>
          <rect x="480" y="100" width="170" height="60" rx="3" className="fill-surface stroke-line" strokeWidth="1.5" />
          <text x="565" y="125" textAnchor="middle" className="fill-ink font-body text-[13px]">Row rebuild +</text>
          <text x="565" y="142" textAnchor="middle" className="fill-ink-soft font-body text-[13px]">blur check</text>
        </g>

        {/* reconciliation box */}
        <g>
          <rect x="710" y="100" width="170" height="60" rx="3" className="fill-ink" />
          <text x="795" y="125" textAnchor="middle" className="fill-paper font-body text-[13px]">Reconciliation</text>
          <text x="795" y="142" textAnchor="middle" className="fill-paper/80 font-body text-[13px]">→ PostgreSQL</text>
        </g>
      </svg>
      <figcaption className="mt-3 text-xs text-ink-faint">
        Simplified, redacted for public view. Scans flagged by the blur
        check trigger an automatic resend request rather than entering the
        pipeline.
      </figcaption>
    </figure>
  );
}
