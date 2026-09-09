import TerminalCard from "./TerminalCard";

export default function Hero() {
  return (
    <section id="top" className="container-page pt-16 pb-20 md:pt-24 md:pb-28">
      <div className="grid gap-12 md:grid-cols-[1.3fr_0.9fr] md:gap-16 items-start">
        <div>
          <p className="text-accent-strong font-medium mb-5">
            Odoo ERP · Web Apps · AI Automation · Web3
          </p>

          <h1 className="font-display font-semibold text-ink text-[2.25rem] leading-[1.15] sm:text-5xl sm:leading-[1.12] md:text-[3.25rem] md:leading-[1.1] max-w-2xl">
            I build the{" "}
            <span className="bg-gradient-to-r from-accent to-[#7dd3fc] bg-clip-text text-transparent">
              ERP, web, and automation systems
            </span>{" "}
            that keep retail operations reconciled.
          </h1>

          <p className="measure mt-6 text-ink-soft text-lg leading-relaxed">
            Odoo customization, custom web apps, invoice-reconciliation
            pipelines, and Web3 builds — built by the engineer running these
            systems in production, not just architecting them on a
            whiteboard.
          </p>

          <div className="mt-9 flex flex-wrap items-center gap-4">
            <a
              href="mailto:dynamohtech24@gmail.com"
              className="inline-flex items-center rounded-sm bg-ink px-5 py-3 text-[0.95rem] font-medium text-paper hover:bg-accent-strong transition-colors"
            >
              Email me
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
            *Invoice-reconciliation pipeline is currently in development.
          </p>
        </div>
      </div>
    </section>
  );
}
