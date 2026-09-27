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
            I teach AI automation to people who've never written a line of
            code. I designed and delivered a paid 7-phase AI automation
            programme for secondary-school students in Ikorodu, Lagos, and
            taught AI automation at a CAC-registered tech institute. Building
            a curriculum is a different kind of rigor than shipping a
            feature: every phase has to hold up for someone seeing the idea
            for the first time.
          </p>

          <div className="mt-8">
            <div className="flex gap-1.5" aria-hidden="true">
              {Array.from({ length: 7 }).map((_, i) => (
                <span key={i} className="h-1.5 flex-1 rounded-full bg-accent" />
              ))}
            </div>
            <p className="mt-3 text-sm text-ink-faint">
              A complete 7-phase curriculum, slides and workbooks included.
            </p>
          </div>

          <p className="mt-8 text-ink-soft leading-relaxed">
            <span className="text-ink">Shipworthy</span>{" "}
            <span className="text-ink-faint">(in development)</span>: an
            online course that teaches non-technical people to build web apps
            with AI tools and no code.
          </p>
        </div>
      </div>
    </section>
  );
}
