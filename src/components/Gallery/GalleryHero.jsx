export default function GalleryHero() {
  return (
    <section className="relative flex min-h-[520px] items-center text-center text-white">
      <img
        src="/images/pressure-treated-deck-framing-construction.jpg"
        alt="Deck framing construction in progress for an exterior remodel project"
        width="1800"
        height="1200"
        loading="eager"
        className="absolute inset-0 h-full w-full object-cover opacity-55"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-secondary-dark/90 via-secondary-dark/70 to-secondary-dark/40" />

      <div className="relative mx-auto max-w-3xl px-6 py-20 md:py-24">
        <span className="mb-3 inline-block text-xs font-bold uppercase tracking-[2px] text-primary">Our Work</span>
        <h1 className="mb-4 text-3xl font-black md:text-5xl">Recent Projects</h1>
        <p className="text-neutral-300">
          A look at real N&amp;P projects across the Hudson Valley — kitchens, baths, decks, and outdoor
          living spaces.
        </p>
      </div>
    </section>
  );
}
