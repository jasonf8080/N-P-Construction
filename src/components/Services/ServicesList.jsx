import useScrollReveal from '../../hooks/useScrollReveal';
import { services } from '../../data';
import ServiceCard from './ServiceCard';

export default function ServicesList() {
  const scope = useScrollReveal();

  return (
    <section ref={scope} className="py-20 md:py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <ServiceCard key={service.slug} service={service} />
          ))}
        </div>
      </div>
    </section>
  );
}
