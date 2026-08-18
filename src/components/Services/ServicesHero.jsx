export default function ServicesHero() {
  return (
    <section className="relative flex min-h-[520px] items-center text-center text-white">
      <img
        src="/images/board-and-batten-siding-installation.jpg"
        alt="Board and batten siding installation in progress on a residential home"
        width="1800"
        height="1200"
        loading="eager"
        className="absolute inset-0 h-full w-full object-cover opacity-55"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-secondary-dark/90 via-secondary-dark/70 to-secondary-dark/40" />

      <div className="relative mx-auto max-w-3xl px-6 py-20 md:py-24">
        <span className="mb-3 inline-block text-xs font-bold uppercase tracking-[2px] text-primary">What We Do</span>
        <h1 className="mb-4 text-3xl font-black md:text-5xl">Our Services</h1>
        <p className="text-neutral-300">
          Full home improvement and remodeling under one roof — one trusted crew from start to finish.
        </p>
      </div>
    </section>
  );
}
