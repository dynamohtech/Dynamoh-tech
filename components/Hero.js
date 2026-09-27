import TerminalCard from "./TerminalCard";

export default function Hero() {
  return (
    <section id="top" className="container-page pt-16 pb-20 md:pt-24 md:pb-28">
      <div className="grid gap-12 md:grid-cols-[1.3fr_0.9fr] md:gap-16 items-start">
        <div>
          <p className="text-accent-strong font-medium mb-5">
            n8n AI Automation · AI Agents · Odoo ERP · Invoice Processing
          </p>

          <h1 className="font-display font-semibold text-ink text-[2.25rem] leading-[1.15] sm:text-5xl sm:leading-[1.12] md:text-[3.25rem] md:leading-[1.1] max-w-2xl">
            I build{" "}
            <span className="bg-gradient-to-r from-accent to-[#7dd3fc] bg-clip-text text-transparent">
              AI agents and workflows
            </span>{" "}
            that take manual work off your team.
          </h1>

          <p className="measure mt-6 text-ink-soft text-lg leading-relaxed">
            n8n automations and AI agents that connect to Odoo, Dynamics 365,
            your CRM or Google Sheets, from invoice processing and document
            extraction to lead qualification. If your team spends hours
            keying in invoices, moving data between systems or chasing leads
            by hand, that's the work I automate.
          </p>

          <div className="mt-9 flex flex-wrap items-center gap-4">
            <a
              href="#start-a-project"
              className="inline-flex items-center rounded-sm bg-ink px-5 py-3 text-[0.95rem] font-medium text-paper hover:bg-accent-strong transition-colors"
            >
              Start a project
            </a>
            <a
              href="https://wa.me/2349012230263"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center rounded-sm border border-ink px-5 py-3 text-[0.95rem] font-medium text-ink hover:border-accent hover:text-accent-strong transition-colors"
            >
              Message on WhatsApp
            </a>
            <a
              href="#work"
              className="inline-flex items-center px-2 py-3 text-[0.95rem] font-medium text-ink-soft hover:text-ink transition-colors"
            >
              See the work
            </a>
          </div>
        </div>

        <div className="md:pt-2">
          <div className="relative overflow-hidden">
            <div
              aria-hidden="true"
              className="absolute -inset-8 bg-gradient-to-br from-accent/25 via-[#7dd3fc]/10 to-transparent blur-3xl -z-10"
            />
            <TerminalCard />
          </div>
          <p className="mt-3 text-xs text-ink-faint">
            *Invoice reconciliation platform in development at ARTEE Group.
          </p>
        </div>
      </div>
    </section>
  );
}
