import useScrollReveal from '../../hooks/useScrollReveal';
import { services } from '../../data';
import ServiceCard from './ServiceCard';

export default function ServicesList() {
  const scope = useScrollReveal();

  return (
    <section ref={scope} className="bg-[#f4f1ed] py-12 md:py-20">
      <div className="mx-auto max-w-[1200px] px-5 md:px-8">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
          {services.map((service, index) => (
            <ServiceCard key={service.slug} service={service} index={index + 1} />
          ))}
        </div>
      </div>
    </section>
  );
}
