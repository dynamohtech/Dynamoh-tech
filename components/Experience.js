const roles = [
  {
    org: "ARTEE Group",
    role: "Odoo developer · ERP & IT",
    meta: "Lagos, Nigeria · Current",
    points: [
      "Took over Odoo 19 Enterprise customization from a departing developer: Studio workflows, module changes and GitHub-based deployments on Odoo.sh.",
      "Leading the build of an invoice reconciliation platform for a finance team handling 10,000+ supplier invoices a month from 2,000+ vendors, matched against Odoo vendor bills for one subsidiary and Dynamics 365 goods receipts for another.",
      "Moved invoice extraction from an OCR stack (docTR, invoice2data, n8n, PostgreSQL) to vision-LLMs, and built the review front end in React 19 and Vite.",
      "Built a store price checker on AWS, plus a store-local version that reads prices from a local database instead of Dynamics 365 endpoints.",
      "On-site IT support for group locations, including warehouse operations.",
    ],
  },
  {
    org: "Dynamohtech (self-employed)",
    role: "Freelance automation engineer & web developer",
    meta: "Remote · 2022 to present",
    points: [
      "Delivered 60+ projects for international clients: n8n, Make and Zapier automations, Telegram bots, websites and web apps.",
      "Built a UK wellness travel website with an interactive Mapbox map on WordPress, now being rebuilt as a custom Next.js and Supabase platform for the same client.",
      "Built my own tools: an AI lead-qualification system (n8n, Gemini, Groq, NocoDB, Telegram) and a Solana token risk scanner bot (Python, Helius).",
      "Built presale and staking websites for Web3 token projects on BNB Smart Chain and Solana.",
    ],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="container-page py-20 md:py-28 border-t border-line">
      <div className="grid md:grid-cols-[minmax(0,14rem)_1fr] gap-8 md:gap-16">
        <div>
          <h2 className="font-display font-semibold text-2xl text-ink md:sticky md:top-24">
            Experience
          </h2>
        </div>

        <div className="divide-y divide-line border-y border-line">
          {roles.map((item) => (
            <article key={item.org} className="py-8">
              <div className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-1">
                <h3 className="font-display font-medium text-xl text-ink">{item.org}</h3>
                <p className="font-mono text-xs text-ink-faint">{item.meta}</p>
              </div>
              <p className="mt-1 text-sm text-accent-strong">{item.role}</p>
              <ul className="mt-5 space-y-3">
                {item.points.map((point) => (
                  <li key={point} className="measure flex gap-3 text-ink-soft leading-relaxed">
                    <span aria-hidden="true" className="mt-[0.7rem] h-1 w-1 shrink-0 rounded-full bg-ink-faint" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </article>
          ))}

          <article className="py-8">
            <div className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-1">
              <h3 className="font-display font-medium text-xl text-ink">
                Federal University of Technology, Akure (FUTA)
              </h3>
              <p className="font-mono text-xs text-ink-faint">Graduated 2023</p>
            </div>
            <p className="mt-1 text-sm text-accent-strong">
              B.Eng., Mining Engineering · Second Class Upper (2:1)
            </p>
          </article>
        </div>
      </div>
    </section>
  );
}
