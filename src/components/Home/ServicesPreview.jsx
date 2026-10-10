import { Link } from 'react-router-dom';
import useScrollReveal from '../../hooks/useScrollReveal';
import { services } from '../../data';
import ServiceCard from '../Services/ServiceCard';

const featuredServiceSlugs = ['kitchen-bath-remodeling', 'general-home-improvement', 'decks-patios'];

export default function ServicesPreview() {
  const scope = useScrollReveal();
  const featuredServices = featuredServiceSlugs
    .map((slug) => services.find((service) => service.slug === slug))
    .filter(Boolean);

  return (
    <section ref={scope} className="bg-accent py-20 md:py-24">
      <div className="mx-auto max-w-6xl px-6">
        <span className="mb-2 inline-block text-xs font-bold uppercase tracking-[2px] text-primary">What We Do</span>
        <h2 className="mb-4 text-3xl font-extrabold text-secondary-dark md:text-5xl">Our Services</h2>
        <p className="mb-12 max-w-xl text-base text-neutral-600 md:text-lg">
          Full home improvement and remodeling under one roof — one trusted crew from start to finish.
        </p>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
          {featuredServices.map((service, index) => (
            <ServiceCard key={service.slug} service={service} index={index + 1} />
          ))}
        </div>

        <div className="mt-10 text-center">
          <Link
            to="/services"
            className="inline-block rounded bg-primary px-7 py-3 text-sm font-bold text-white hover:bg-primary-dark"
          >
            View All Services
          </Link>
        </div>
      </div>
    </section>
  );
}
