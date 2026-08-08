import { Link } from 'react-router-dom';
import useScrollReveal from '../../hooks/useScrollReveal';
import { services } from '../../data';

export default function ServicesPreview() {
  const scope = useScrollReveal();

  return (
    <section ref={scope} className="py-20 md:py-24">
      <div className="mx-auto max-w-6xl px-6">
        <span className="mb-2 inline-block text-xs font-bold uppercase tracking-[2px] text-primary">What We Do</span>
        <h2 className="mb-4 text-3xl font-extrabold text-secondary-dark md:text-5xl">Our Services</h2>
        <p className="mb-12 max-w-xl text-base text-neutral-600 md:text-lg">
          Full home improvement and remodeling under one roof — one trusted crew from start to finish.
        </p>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {services.slice(0, 6).map((service) => (
            <div
              key={service.slug}
              data-reveal
              className="overflow-hidden rounded-xl border border-neutral-200 transition-transform hover:-translate-y-1 hover:shadow-xl"
            >
              <div className="h-1.5 bg-primary" />
              <div className="p-6">
                <h3 className="mb-2 text-lg font-bold text-secondary-dark">{service.name}</h3>
                <p className="mb-4 text-sm text-neutral-600">{service.description}</p>
                <Link to="/services" className="text-sm font-bold text-primary hover:text-primary-dark">
                  Learn more →
                </Link>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10 text-center">
          <Link
            to="/services"
            className="inline-block rounded border-2 border-secondary px-7 py-3 text-sm font-bold text-secondary hover:bg-secondary hover:text-white"
          >
            View All Services
          </Link>
        </div>
      </div>
    </section>
  );
}
