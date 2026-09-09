const groups = [
  {
    label: "ERP & backend",
    items: ["Odoo", "Odoo.sh", "Python", "PostgreSQL"],
  },
  {
    label: "Automation & AI",
    items: ["n8n", "AI agents", "Vision-LLM extraction", "OCR pipelines"],
  },
  {
    label: "Cloud & integration",
    items: [
      "AWS Lambda",
      "AWS SAM",
      "DynamoDB",
      "Dynamics 365 API",
      "WhatsApp Cloud API",
      "Telegram Bot API",
    ],
  },
  {
    label: "Web3",
    items: ["Solana", "React / Vite"],
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
