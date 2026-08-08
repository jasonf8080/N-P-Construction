import { Link } from 'react-router-dom';
import useScrollReveal from '../../hooks/useScrollReveal';
import { photos } from '../../data';

export default function GalleryPreview() {
  const scope = useScrollReveal();
  const featured = photos.gallery.slice(0, 4);

  return (
    <section ref={scope} className="bg-accent py-20 md:py-24">
      <div className="mx-auto max-w-6xl px-6">
        <span className="mb-2 inline-block text-xs font-bold uppercase tracking-[2px] text-primary">Our Work</span>
        <h2 className="mb-4 text-3xl font-extrabold text-secondary-dark md:text-5xl">Recent Projects</h2>
        <p className="mb-12 max-w-xl text-base text-neutral-600 md:text-lg">
          A look at real N&P projects across the Hudson Valley.
        </p>

        <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
          {featured.map((photo) => (
            <figure
              key={photo.src + photo.caption}
              data-reveal
              className="group relative aspect-square overflow-hidden rounded-lg"
            >
              <img
                src={photo.src}
                alt={photo.alt}
                width="600"
                height="600"
                loading="lazy"
                className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 to-transparent p-3 text-xs font-bold text-white opacity-0 transition-opacity group-hover:opacity-100">
                {photo.caption}
              </figcaption>
            </figure>
          ))}
        </div>

        <div className="mt-10 text-center">
          <Link
            to="/gallery"
            className="inline-block rounded bg-primary px-7 py-3 text-sm font-bold text-white hover:bg-primary-dark"
          >
            View Full Gallery
          </Link>
        </div>
      </div>
    </section>
  );
}
