const groups = [
  {
    label: "Automation & AI",
    items: [
      "n8n (cloud & self-hosted)",
      "Make",
      "Zapier",
      "OpenAI",
      "Gemini",
      "Groq",
      "Vision-LLMs",
      "docTR / OCR",
    ],
  },
  {
    label: "ERP & data",
    items: [
      "Odoo 19 Enterprise",
      "Odoo.sh",
      "Microsoft Dynamics 365",
      "PostgreSQL",
      "Supabase",
      "NocoDB",
      "Airtable",
      "Google Sheets",
    ],
  },
  {
    label: "Development",
    items: [
      "Python",
      "TypeScript",
      "React",
      "Next.js",
      "REST APIs & webhooks",
      "Docker",
      "AWS (Lambda, SAM, DynamoDB)",
      "Vercel",
      "GitHub",
      "Claude Code",
    ],
  },
  {
    label: "Also",
    items: [
      "Telegram Bot API",
      "WordPress",
      "Bubble",
      "Mapbox",
      "Solana & BNB Smart Chain",
    ],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="container-page py-20 md:py-28 border-t border-line">
      <div className="grid md:grid-cols-[minmax(0,14rem)_1fr] gap-8 md:gap-16">
        <div>
          <h2 className="font-display font-semibold text-2xl text-ink md:sticky md:top-24">
            Skills &amp; stack
          </h2>
        </div>

        <div className="space-y-8">
          {groups.map((group) => (
            <div key={group.label}>
              <h3 className="text-sm text-ink-faint mb-3">{group.label}</h3>
              <div className="flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <span
                    key={item}
                    className="rounded-sm border border-line px-3 py-1.5 text-sm text-ink-soft hover:border-accent hover:text-ink hover:-translate-y-0.5 transition-all cursor-default"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
