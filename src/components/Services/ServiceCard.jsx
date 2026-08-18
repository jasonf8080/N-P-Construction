import { Link } from 'react-router-dom';
import { FaBath, FaHome, FaPaintRoller, FaThLarge, FaTree, FaTools } from 'react-icons/fa';
import { photos } from '../../data';

const serviceIcons = {
  'kitchen-bath-remodeling': FaBath,
  roofing: FaHome,
  siding: FaHome,
  painting: FaPaintRoller,
  tiling: FaThLarge,
  'decks-patios': FaTree,
  'general-home-improvement': FaTools,
};

export default function ServiceCard({ service }) {
  const photo = service.photoTag ? photos.service[service.photoTag] : null;
  const Icon = serviceIcons[service.slug] || FaTools;

  return (
    <div
      data-reveal
      className="group relative overflow-hidden rounded-xl bg-secondary-dark text-white shadow-2xl"
    >
      {photo ? (
        <div className="relative h-60 overflow-hidden bg-[#0f1115] md:h-80 lg:h-72">
          <img
            src={photo.src}
            alt={photo.alt}
            width="1400"
            height="900"
            loading="lazy"
            className="h-full w-full object-cover"
          />
          <div className="pointer-events-none absolute inset-x-0 bottom-0 h-28 bg-gradient-to-b from-transparent via-secondary-dark/60 to-secondary-dark md:h-32" />
        </div>
      ) : (
        <div className="h-2 bg-primary" />
      )}

      <div className="relative -mt-8 bg-secondary-dark px-4 pb-6 pt-6 md:-mt-10 md:px-6 md:pb-8 md:pt-8">
        <div className="absolute -top-3 left-4 h-3 w-10 bg-secondary-dark [clip-path:polygon(0_100%,100%_0,100%_100%)] md:-top-4 md:left-6 md:h-4 md:w-12" />

        <div className="flex flex-col">
          <h3 className="mb-3 inline-flex items-center gap-2.5 text-base font-black leading-tight md:mb-4 md:gap-3 md:text-lg">
            <span className="inline-flex h-6 w-6 items-center justify-center rounded-md border border-primary/90 text-primary md:h-7 md:w-7">
              <Icon aria-hidden="true" />
            </span>
            <span>{service.name}</span>
          </h3>

          <p className="mb-3 text-xs leading-relaxed text-neutral-200 md:mb-4 md:text-sm">{service.description}</p>
          {service.price && <p className="mb-4 text-sm font-bold text-primary">{service.price}</p>}

          <Link
            to="/contact"
            className="inline-flex w-fit items-center gap-1 rounded-md bg-primary px-3 py-1.5 text-[10px] font-extrabold uppercase tracking-wide text-white transition-colors hover:bg-primary-dark md:px-3.5 md:text-[11px]"
          >
            Learn More
            <span aria-hidden="true">→</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
