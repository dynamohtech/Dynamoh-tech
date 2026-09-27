const services = [
  {
    name: "n8n workflows & AI agents",
    description:
      "Workflows and AI agents that pull data in, make decisions with an LLM, and push the results into the tools your team already uses. Built on n8n Cloud or self-hosted n8n (Docker on a VPS), or in Make and Zapier when that's what your team runs.",
    stack: "n8n · Make · Zapier · OpenAI · Gemini · Groq",
  },
  {
    name: "Invoice & document data extraction",
    description:
      "Pipelines that read invoices, receipts and forms (PDFs, scans or photos) with OCR and vision AI, check the fields, and write them into Odoo, your CRM, Airtable or Google Sheets. Low-confidence results go to a person for review instead of going in silently.",
    stack: "Vision-LLMs · docTR · OCR · confidence scores · review queues",
  },
  {
    name: "Odoo customization & integration",
    description:
      "Studio workflows, fields, views and automated actions; module changes and bug fixes; reports and exports from the PostgreSQL database; and integrations with other systems through APIs, n8n or webhooks, including WhatsApp messaging for Odoo Community.",
    stack: "Odoo 19 · Odoo.sh · Python · PostgreSQL",
  },
  {
    name: "Lead qualification & Telegram bots",
    description:
      "Systems that score incoming leads and alert your team on Telegram, Slack or email, plus Telegram bots for communities and internal teams, with admin approval flows.",
    stack: "n8n · Gemini · Groq · NocoDB · Telegram Bot API",
  },
  {
    name: "Web apps & dashboards",
    description:
      "Front ends for when a workflow needs its own screen: review queues, admin dashboards, client portals and internal tools. WordPress or Bubble when a CMS or no-code setup is the better fit.",
    stack: "Next.js · React · TypeScript · Supabase · Vercel",
  },
];

const principles = [
  {
    title: "Process first",
    body: "Before building, I map how the work happens today and where the time goes.",
  },
  {
    title: "A clear definition of done",
    body: "We agree what the finished system must do before I start, so there are no surprises.",
  },
  {
    title: "Tested on real data",
    body: "Every build is tested against your real records and edge cases, not just a clean demo.",
  },
  {
    title: "Handed over properly",
    body: "You get handover notes and a walkthrough video, and the build is modular so it's easy to extend.",
  },
];

export default function Services() {
  return (
    <section id="services" className="container-page py-20 md:py-28 border-t border-line">
      <div className="grid md:grid-cols-[minmax(0,14rem)_1fr] gap-8 md:gap-16">
        <div>
          <h2 className="font-display font-semibold text-2xl text-ink md:sticky md:top-24">
            Services
          </h2>
        </div>

        <div className="min-w-0">
          <div className="divide-y divide-line border-y border-line">
            {services.map((service) => (
              <div
                key={service.name}
                className="py-7 grid sm:grid-cols-[minmax(0,15rem)_1fr] gap-2 sm:gap-8 -mx-4 px-4 rounded-sm hover:bg-surface/50 transition-colors"
              >
                <h3 className="font-display font-medium text-ink text-lg">
                  {service.name}
                </h3>
                <div>
                  <p className="measure text-ink-soft leading-relaxed">
                    {service.description}
                  </p>
                  <p className="mt-3 font-mono text-xs text-ink-faint">
                    {service.stack}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-14">
            <h3 className="font-display font-medium text-lg text-ink mb-6">
              How I work
            </h3>
            <ol className="grid sm:grid-cols-2 gap-x-10 gap-y-7">
              {principles.map((item, index) => (
                <li key={item.title} className="flex gap-4">
                  <span className="font-mono text-sm text-accent-strong pt-0.5">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <div>
                    <p className="font-medium text-ink">{item.title}</p>
                    <p className="mt-1 text-ink-soft leading-relaxed">{item.body}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </div>
    </section>
  );
}
