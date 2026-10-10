import { Link } from 'react-router-dom';
import { photos } from '../../data';

export default function ServiceCard({ service, index = 1 }) {
  const photo = service.photoTag ? photos.service[service.photoTag] : null;
  const number = String(index).padStart(2, '0');

  return (
    <Link
      to="/contact"
      state={{ serviceName: service.name, serviceSlug: service.slug }}
      data-reveal
      className="group relative block overflow-hidden rounded-[24px] bg-secondary-dark text-white shadow-[0_18px_45px_rgba(26,26,26,0.12)] transition-transform duration-200 hover:-translate-y-1"
    >
      {photo ? (
        <div className="relative h-[360px] overflow-hidden bg-[#0f1115] md:h-[420px]">
          <img
            src={photo.src}
            alt={photo.alt}
            width="1400"
            height="900"
            loading="lazy"
            className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#1c1c1d]/90 via-[#1c1c1d]/35 to-transparent" />
        </div>
      ) : (
        <div className="h-2 bg-primary" />
      )}

      <div className="absolute left-5 top-5 z-10 flex h-11 w-11 items-center justify-center rounded-full border border-white/20 bg-[#f3f1ee]/90 text-sm font-extrabold text-primary shadow-sm md:h-12 md:w-12">
        {number}
      </div>

      <div className="absolute inset-x-0 bottom-0 z-10 px-5 pb-5 pt-24 md:px-6 md:pb-6 md:pt-28">
        <div className="flex flex-col gap-3">
          <h3 className="text-[1.5rem] font-extrabold leading-[1.02] tracking-[-0.04em] text-white md:text-[1.9rem]">
            {service.name}
          </h3>

          <p className="max-w-[28ch] text-sm leading-relaxed text-neutral-200 md:text-base">{service.description}</p>

          <div className="mt-2 flex items-center justify-between gap-3">
            <span className="inline-flex items-center gap-2 text-base font-extrabold text-white transition-colors group-hover:text-primary">
              Learn More
            </span>
            <span className="flex h-10 w-10 items-center justify-center rounded-full border border-white/30 bg-white/10 text-lg text-primary transition-colors group-hover:bg-primary group-hover:text-white">
              →
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
}
