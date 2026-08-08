import { Link } from 'react-router-dom';
import { photos } from '../../data';

export default function ServiceCard({ service }) {
  const photo = service.photoTag ? photos.service[service.photoTag] : null;

  return (
    <div
      data-reveal
      className="overflow-hidden rounded-xl border border-neutral-200 bg-white transition-transform hover:-translate-y-1 hover:shadow-xl"
    >
      {photo ? (
        <img
          src={photo.src}
          alt={photo.alt}
          width="700"
          height="450"
          loading="lazy"
          className="h-48 w-full object-cover"
        />
      ) : (
        <div className="h-1.5 bg-primary" />
      )}
      <div className="p-6">
        <h3 className="mb-2 text-lg font-bold text-secondary-dark">{service.name}</h3>
        <p className="mb-4 text-sm text-neutral-600">{service.description}</p>
        {service.price && <p className="mb-3 text-sm font-bold text-primary">{service.price}</p>}
        <Link to="/contact" className="text-sm font-bold text-primary hover:text-primary-dark">
          Get a quote →
        </Link>
      </div>
    </div>
  );
}
