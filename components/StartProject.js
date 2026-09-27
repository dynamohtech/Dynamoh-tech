import ProjectForm from "./ProjectForm";

const goodFit = [
  "You process invoices, orders or forms by hand and want them flowing into your system automatically.",
  "You run Odoo and need customizations or integrations that hold up in daily use.",
  "You're an agency that needs a dependable automation partner for client work.",
];

export default function StartProject() {
  return (
    <section
      id="start-a-project"
      className="container-page py-20 md:py-28 border-t border-line"
    >
      <div className="grid md:grid-cols-[minmax(0,14rem)_1fr] gap-8 md:gap-16">
        <div>
          <h2 className="font-display font-semibold text-2xl text-ink md:sticky md:top-24">
            Start a project
          </h2>
        </div>

        <div className="max-w-2xl">
          <p className="text-ink-soft text-lg leading-relaxed">
            Send me a short description of the process you want automated:
            what comes in, what happens to it, and where it should end up.
            I'll reply by email, usually within a day or two, with how I'd
            approach it.
          </p>

          <div className="mt-8 mb-10 rounded-sm border border-line bg-surface/60 px-6 py-5">
            <p className="text-sm text-ink-faint mb-3">A good fit if</p>
            <ul className="space-y-2.5">
              {goodFit.map((item) => (
                <li key={item} className="flex gap-3 text-ink-soft leading-relaxed">
                  <span aria-hidden="true" className="text-accent-strong">✓</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <ProjectForm />
        </div>
      </div>
    </section>
  );
}
