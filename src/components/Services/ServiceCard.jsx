import { Link } from 'react-router-dom';
import { photos } from '../../data';

export default function ServiceCard({ service }) {
  const photo = service.photoTag ? photos.service[service.photoTag] : null;

  return (
    <div data-reveal className="group relative overflow-hidden rounded-xl bg-secondary-dark text-white shadow-2xl">
      {photo ? (
        <div className="relative h-72 overflow-hidden bg-[#0f1115] md:h-[23rem] lg:h-[21rem]">
          <img
            src={photo.src}
            alt={photo.alt}
            width="1400"
            height="900"
            loading="lazy"
            className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
          />
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#2A2A2A]/85 via-[#2A2A2A]/20 to-transparent" />
        </div>
      ) : (
        <div className="h-2 bg-primary" />
      )}

      <div className="pointer-events-none absolute inset-x-0 bottom-0 z-10 bg-gradient-to-t from-[#2A2A2A]/90 via-[#2A2A2A]/65 to-transparent px-4 pb-6 pt-20 md:px-6 md:pb-7 md:pt-24">
        <div className="pointer-events-auto flex flex-col">
          <h3 className="mb-2 text-[1.1rem] font-black leading-tight md:mb-3 md:text-[1.28rem]">
            {service.name}
          </h3>

          <p className="mb-3 text-xs leading-relaxed text-neutral-200 md:mb-4 md:text-sm">{service.description}</p>
          {service.price && <p className="mb-4 text-sm font-bold text-primary">{service.price}</p>}

          <Link
            to="/contact"
            className="inline-flex w-fit items-center gap-1 rounded-md bg-transparent px-0 py-1 text-[12px] font-extrabold uppercase tracking-wide text-primary transition-colors hover:text-primary/80 md:text-[13px]"
          >
            Learn More
            <span aria-hidden="true" className="text-base leading-none">›</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
