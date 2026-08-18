import { Link } from 'react-router-dom';
import { business, photos } from '../../data';

export default function Hero() {
  return (
    <section className="relative flex min-h-[640px] items-center bg-secondary-dark">
      <img
        src="/images/white-board-and-batten-siding-stone-veneer.jpg"
        alt="White board and batten siding paired with stone veneer accents on a home exterior"
        width="1800"
        height="1200"
        loading="eager"
        className="absolute inset-0 h-full w-full object-cover opacity-60"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-secondary-dark/90 via-secondary-dark/70 to-secondary-dark/30" />

      <div className="relative mx-auto max-w-6xl px-6 py-24">
        <div className="max-w-xl">
          <span className="mb-4 inline-block text-xs font-bold uppercase tracking-[3px] text-primary">
            Hudson Valley, NY · Since {business.founded}
          </span>
          <h1 className="mb-5 text-4xl font-black leading-tight text-white md:text-6xl">
            You Dream It, <span className="text-primary">We Build It.</span>
          </h1>
          <p className="mb-8 max-w-lg text-base text-neutral-200 md:text-lg">
            {business.name} brings 20+ years of hands-on craftsmanship to kitchens, baths, roofing,
            siding, decks and more — with honest communication from the first estimate to the final
            walkthrough.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link to="/contact" className="rounded bg-primary px-7 py-3.5 text-sm font-bold text-white hover:bg-primary-dark">
              Get a Free Quote
            </Link>
            <Link
              to="/gallery"
              className="rounded border-2 border-white px-7 py-3.5 text-sm font-bold text-white hover:bg-white hover:text-secondary-dark"
            >
              See Our Work
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
