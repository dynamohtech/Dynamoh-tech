const services = [
  {
    name: "Odoo ERP customization & integration",
    description:
      "Module development, Studio customizations, data migrations, and third-party integrations across Odoo Community and Enterprise.",
    stack: "Odoo · Python · PostgreSQL · Odoo.sh",
  },
  {
    name: "Custom web app development",
    description:
      "Full-stack web apps and internal tools — dashboards, admin panels, client portals — built with React and Next.js, wired to whatever backend the problem actually needs.",
    stack: "React · Next.js · Node · PostgreSQL",
  },
  {
    name: "Business process automation",
    description:
      "n8n workflows, AI agents, and document pipelines that remove manual data entry from finance, ops, and sales.",
    stack: "n8n · AI agents · OCR / vision-LLM extraction",
  },
  {
    name: "Systems integration",
    description:
      "Connecting ERPs, pricing APIs, and messaging platforms into one working system instead of five disconnected ones.",
    stack: "REST/API integration · AWS Lambda · WhatsApp Cloud API",
  },
  {
    name: "Web3 app development",
    description:
      "Token launches, staking and referral mechanics, dApp interfaces, and on-chain analysis tooling.",
    stack: "Solana · Smart contracts · Telegram bots",
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
      </div>
    </section>
  );
}
