import useScrollReveal from '../../hooks/useScrollReveal';
import { business, photos } from '../../data';

export default function AboutStory() {
  const scope = useScrollReveal();

  return (
    <section ref={scope} className="py-20 md:py-24">
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-14 px-6 md:grid-cols-2 md:items-center">
        <div data-reveal className="grid grid-cols-2 gap-4">
          <img
            src={photos.about[0].src}
            alt={photos.about[0].alt}
            width="700"
            height="900"
            loading="lazy"
            className="row-span-2 h-full rounded-lg object-cover shadow-xl"
          />
          <img
            src={photos.about[1].src}
            alt={photos.about[1].alt}
            width="700"
            height="450"
            loading="lazy"
            className="rounded-lg object-cover shadow-xl"
          />
          <img
            src={photos.about[2].src}
            alt={photos.about[2].alt}
            width="700"
            height="450"
            loading="lazy"
            className="rounded-lg object-cover shadow-xl"
          />
        </div>

        <div data-reveal>
          {business.about.map((paragraph) => (
            <p key={paragraph.slice(0, 24)} className="mb-4 text-base text-neutral-600 md:text-lg">
              {paragraph}
            </p>
          ))}
          <blockquote className="mt-6 rounded-r border-l-4 border-primary bg-accent p-5 text-sm italic text-secondary-dark md:text-base">
            {business.founderQuote}
          </blockquote>
        </div>
      </div>
    </section>
  );
}
