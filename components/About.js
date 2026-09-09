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
            I have a B.Eng in Mining Engineering from FUTA. I never worked a
            day in a mine — I found ERP systems and automation more
            interesting than ore deposits, and pivoted before graduation
            caught up with me.
          </p>
          <p>
            Today I lead Odoo ERP customization and IT operations at{" "}
            <span className="text-ink">ARTEE Group</span>, the company behind
            SPAR supermarkets in Nigeria. I inherited the ERP from a
            departing developer and now own it end-to-end — Odoo 19
            Enterprise, running on Odoo.sh, supporting a multi-brand retail
            business.
          </p>
          <p>
            Alongside that, I take on freelance work as an automation
            engineer, systems integrator, and Web3 developer. I've also
            designed and taught a 7-phase AI automation curriculum, because
            I'd rather explain how something works than sell it as a black
            box.
          </p>
          <p>
            If manual data entry, disconnected systems, or a stalled ERP
            rollout is costing your team time, that's the kind of problem I
            like taking apart.
          </p>
        </div>
      </div>
    </section>
  );
}
