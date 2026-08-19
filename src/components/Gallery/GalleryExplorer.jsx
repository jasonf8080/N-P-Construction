import { useState } from 'react';
import useScrollReveal from '../../hooks/useScrollReveal';
import { photos, galleryCategories } from '../../data';

export default function GalleryExplorer() {
  const [activeCategory, setActiveCategory] = useState('all');
  const scope = useScrollReveal();

  const visiblePhotos =
    activeCategory === 'all' ? photos.gallery : photos.gallery.filter((photo) => photo.category === activeCategory);

  return (
    <section ref={scope} className="py-20 md:py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-10 flex flex-wrap gap-3">
          {galleryCategories.map((category) => (
            <button
              key={category.id}
              type="button"
              onClick={() => setActiveCategory(category.id)}
              className={`rounded-full border-2 px-5 py-2 text-sm font-bold transition-colors ${
                activeCategory === category.id
                  ? 'border-primary bg-primary text-white'
                  : 'border-neutral-200 bg-white text-secondary hover:border-primary hover:text-primary'
              }`}
            >
              {category.label}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-2 gap-4 md:grid-cols-3">
          {visiblePhotos.map((photo) => (
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
              <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 to-transparent pb-5 pl-5 pr-3 pt-3 text-sm font-bold text-white opacity-0 transition-opacity group-hover:opacity-100 md:pb-6 md:pl-6 md:text-base">
                {photo.caption}
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
