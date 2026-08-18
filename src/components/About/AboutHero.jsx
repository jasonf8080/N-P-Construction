export default function AboutHero() {
  return (
    <section className="relative flex min-h-[520px] items-center text-center text-white">
      <img
        src="/images/excavation-foundation-measurement.jpg"
        alt="Excavation and foundation measurement for a residential improvement project"
        width="1800"
        height="1200"
        loading="eager"
        className="absolute inset-0 h-full w-full object-cover opacity-55"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-secondary-dark/90 via-secondary-dark/70 to-secondary-dark/40" />

      <div className="relative mx-auto max-w-3xl px-6 py-20 md:py-24">
        <span className="mb-3 inline-block text-xs font-bold uppercase tracking-[2px] text-primary">About Us</span>
        <h1 className="text-3xl font-black md:text-5xl">Built on Craftsmanship &amp; Honesty</h1>
      </div>
    </section>
  );
}
