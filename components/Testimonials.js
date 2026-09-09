"use client";

import { useRef } from "react";

// Real Fiverr reviews, pulled from Emmanuel's screenshots.
// Add more objects here as more come in — the carousel just grows.
const testimonials = [
  {
    name: "jamescryptotels",
    source: "Fiverr client",
    rating: 5,
    quote:
      "Communication was brilliant and was exceptional at understanding the vision. Always replies and makes recommendations. Would definitely continue to work together.",
  },
  {
    name: "segment",
    source: "Fiverr client",
    rating: 5,
    quote: "I received a wow website and Dynamo will build an app too. That says enough.",
  },
  {
    name: "godblessmonnan",
    source: "Fiverr client",
    rating: 5,
    quote:
      "It's exceptional to work with this developer. Very professional and punctual in his work. We always want to come back. I promise to always work with him. Thank you for the work.",
  },
  {
    name: "rampl_01",
    source: "Fiverr client",
    rating: 5,
    quote: "Great at his craft, communicated clearly, and executed the task perfectly.",
  },
  {
    name: "meo223",
    source: "Fiverr client",
    rating: 5,
    quote:
      "Dynamo is extremely quick and polite, easy to communicate with. Would recommend him for WordPress projects.",
  },
];

function Stars({ count }) {
  return (
    <div className="flex gap-0.5 text-accent" aria-label={`${count} out of 5 stars`}>
      {Array.from({ length: 5 }).map((_, i) => (
        <span key={i} aria-hidden="true">
          {i < count ? "★" : "☆"}
        </span>
      ))}
    </div>
  );
}

export default function Testimonials() {
  const trackRef = useRef(null);

  const scrollByCard = (direction) => {
    const track = trackRef.current;
    if (!track) return;
    const card = track.querySelector("[data-card]");
    const amount = card ? card.offsetWidth + 16 : 300;
    track.scrollBy({ left: direction * amount, behavior: "smooth" });
  };

  return (
    <section className="container-page py-20 md:py-28 border-t border-line">
      <div className="grid md:grid-cols-[minmax(0,14rem)_1fr] gap-8 md:gap-16">
        <div>
          <h2 className="font-display font-semibold text-2xl text-ink md:sticky md:top-24">
            Testimonials
          </h2>
        </div>

        <div>
          <div className="flex items-center justify-between mb-4">
            <p className="text-sm text-ink-faint">From Fiverr client reviews</p>
            <div className="flex gap-2">
              <button
                type="button"
                onClick={() => scrollByCard(-1)}
                aria-label="Previous testimonial"
                className="h-9 w-9 flex items-center justify-center rounded-sm border border-line text-ink-soft hover:border-accent hover:text-accent-strong transition-colors"
              >
                ‹
              </button>
              <button
                type="button"
                onClick={() => scrollByCard(1)}
                aria-label="Next testimonial"
                className="h-9 w-9 flex items-center justify-center rounded-sm border border-line text-ink-soft hover:border-accent hover:text-accent-strong transition-colors"
              >
                ›
              </button>
            </div>
          </div>

          <div
            ref={trackRef}
            role="region"
            aria-label="Client testimonials, scrollable"
            tabIndex={0}
            className="flex gap-4 overflow-x-auto pb-2 snap-x snap-mandatory [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
          >
            {testimonials.map((t) => (
              <div
                key={t.name}
                data-card
                className="snap-start shrink-0 w-[85%] sm:w-[60%] md:w-[48%] rounded-sm border border-line bg-surface/60 p-6 flex flex-col justify-between"
              >
                <div>
                  <Stars count={t.rating} />
                  <p className="mt-4 text-ink-soft leading-relaxed">
                    &ldquo;{t.quote}&rdquo;
                  </p>
                </div>
                <p className="mt-6 text-sm text-ink-faint">
                  <span className="text-ink font-medium">{t.name}</span> ·{" "}
                  {t.source}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
