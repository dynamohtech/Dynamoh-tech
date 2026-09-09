export default function Teaching() {
  return (
    <section id="teaching" className="container-page py-20 md:py-28 border-t border-line">
      <div className="grid md:grid-cols-[minmax(0,14rem)_1fr] gap-8 md:gap-16">
        <div>
          <h2 className="font-display font-semibold text-2xl text-ink md:sticky md:top-24">
            Teaching
          </h2>
        </div>

        <div className="max-w-2xl">
          <p className="text-ink-soft text-lg leading-relaxed">
            I designed and taught AI automation to students who'd never
            written a line of code — first through a paid training
            programme I launched for secondary school students in Ikorodu,
            and separately through a CAC-registered tech institute. Building
            a curriculum is a different kind of rigor than shipping a
            feature: every phase has to hold up for someone seeing the
            concept for the first time.
          </p>

          <div className="mt-8">
            <div className="flex gap-1.5" aria-hidden="true">
              {Array.from({ length: 7 }).map((_, i) => (
                <span key={i} className="h-1.5 flex-1 rounded-full bg-accent" />
              ))}
            </div>
            <p className="mt-3 text-sm text-ink-faint">
              A complete 7-phase curriculum — slides and workbooks included.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
