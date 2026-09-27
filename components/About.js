export default function About() {
  return (
    <section id="about" className="container-page py-20 md:py-28 border-t border-line">
      <div className="grid md:grid-cols-[minmax(0,14rem)_1fr] gap-8 md:gap-16">
        <div>
          <h2 className="font-display font-semibold text-2xl text-ink md:sticky md:top-24">
            About
          </h2>
        </div>

        <div className="measure space-y-6 text-ink-soft text-lg leading-relaxed">
          <p>
            I'm an automation engineer and Odoo developer based in Lagos.
            Most of my work starts with the same problem: a team doing by
            hand what a system should do for them. Typing invoices into an
            ERP. Copying leads from one app to another. Chasing updates
            across spreadsheets.
          </p>
          <p>
            Day to day, I lead Odoo ERP customization and IT at{" "}
            <span className="text-ink">ARTEE Group</span>, the multi-brand
            retail group behind SPAR supermarkets in Nigeria, where I'm also
            building an invoice reconciliation platform for the finance
            team. Since 2022 I've freelanced as{" "}
            <span className="text-ink">Dynamohtech</span>, delivering 60+
            projects for international clients.
          </p>
          <p>
            I trained as an engineer (B.Eng., FUTA) and work like one: I map
            your current process, agree with you what "done" looks like,
            test against real edge cases, and hand over a system your team
            can keep running.
          </p>
        </div>
      </div>
    </section>
  );
}
