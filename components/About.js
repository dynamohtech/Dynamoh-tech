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
  Today I build and maintain the systems that keep retail
  operations running — ERP customization, automation pipelines,
  web apps, and the occasional Web3 build — for{" "}
  <span className="text-ink">ARTEE Group</span> and for freelance
  clients who need the same kind of work done properly.
</p>
        </div>
      </div>
    </section>
  );
}
