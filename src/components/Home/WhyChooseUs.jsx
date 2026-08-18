import { FaAward, FaCheck, FaHandshake, FaHome, FaStar } from 'react-icons/fa';
import useScrollReveal from '../../hooks/useScrollReveal';
import { whyChooseUs } from '../../data';

const iconMap = { FaAward, FaHome, FaHandshake, FaStar };

const whyImageMap = {
  experience: {
    src: '/images/kitchen-cabinets-hood.jpg',
    alt: 'Custom kitchen remodel with island seating and pendant lights',
  },
  local: {
    src: '/images/asphalt-shingle-roof-replacement.jpg',
    alt: 'New asphalt shingle roofing installation on a home exterior',
  },
  honest: {
    src: '/images/board-and-batten-siding-installation.jpg',
    alt: 'Board and batten siding project in progress',
  },
  craftsmanship: {
    src: '/images/marble-mosaic-shower-pan-black-fixtures.jpg',
    alt: 'Detailed bathroom tile craftsmanship with marble mosaic and black fixtures',
  },
};

export default function WhyChooseUs() {
  const scope = useScrollReveal();

  return (
    <section ref={scope} className="relative overflow-hidden bg-white py-20 md:py-24">
      <div className="pointer-events-none absolute right-0 top-24 hidden h-[460px] w-[460px] opacity-20 lg:block">
        <div className="absolute right-16 top-10 h-56 w-56 border-[10px] border-neutral-200/70 rotate-45" />
        <div className="absolute right-0 top-44 h-56 w-56 border-[10px] border-neutral-200/70 rotate-45" />
      </div>

      <div className="relative mx-auto max-w-6xl px-6">
        <span className="mb-2 inline-block text-xs font-bold uppercase tracking-[4px] text-primary">Why N&P</span>
        <span className="mb-6 block h-1 w-20 bg-primary" />
        <h2 className="mb-5 max-w-3xl text-3xl font-black leading-tight text-secondary-dark md:text-5xl">
          Why Homeowners Choose Us
        </h2>
        <p className="mb-12 max-w-2xl text-sm leading-relaxed text-neutral-600 md:text-xl md:leading-relaxed">
          Two decades in the trade taught us what actually matters to homeowners: showing up,
          communicating clearly, and doing the work right the first time.
        </p>

        <div className="space-y-6 md:space-y-8">
          {whyChooseUs.map((item, index) => {
            const Icon = iconMap[item.icon];
            const image = whyImageMap[item.id];
            const reverse = index % 2 === 1;

            return (
              <article key={item.id} data-reveal className="border-t border-neutral-200 pt-6 md:pt-8">
                <div className="grid items-center gap-5 md:grid-cols-12 md:gap-8">
                  <div className={`md:col-span-7 ${reverse ? 'md:order-2' : 'md:order-1'}`}>
                    <div className="grid grid-cols-[auto_1fr] items-start gap-4 md:gap-6">
                      <div className="flex h-16 w-16 items-center justify-center rounded-full border-2 border-primary text-2xl text-primary md:h-20 md:w-20">
                        <Icon aria-hidden="true" />
                      </div>

                      <div className="border-l border-primary/70 pl-4 md:pl-6">
                        <span className="mb-2 block text-xl font-bold text-primary md:text-2xl">
                          {String(index + 1).padStart(2, '0')}
                        </span>
                        <h3 className="mb-2 text-2xl font-black leading-tight text-secondary-dark md:text-4xl">
                          {item.title}
                        </h3>
                        <p className="max-w-xl text-xs leading-relaxed text-neutral-600 md:text-sm">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className={`md:col-span-5 ${reverse ? 'md:order-1' : 'md:order-2'}`}>
                    <div className={`relative bg-primary p-1.5 ${reverse ? '[clip-path:polygon(0_0,85%_0,100%_50%,85%_100%,0_100%,12%_50%)]' : '[clip-path:polygon(15%_0,100%_0,88%_50%,100%_100%,15%_100%,0_50%)]'}`}>
                      <div className={`overflow-hidden ${reverse ? '[clip-path:polygon(0_0,85%_0,100%_50%,85%_100%,0_100%,12%_50%)]' : '[clip-path:polygon(15%_0,100%_0,88%_50%,100%_100%,15%_100%,0_50%)]'}`}>
                        <img
                          src={image.src}
                          alt={image.alt}
                          width="900"
                          height="620"
                          loading="lazy"
                          className="h-52 w-full object-cover md:h-64"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </article>
            );
          })}
        </div>

        <div className="mt-10 rounded-2xl bg-secondary-dark px-6 py-6 text-white md:px-8">
          <div className="grid items-center gap-6 md:grid-cols-[auto_1fr_1fr]">
            <div className="flex h-16 w-16 items-center justify-center rounded-full border-2 border-primary text-2xl text-white">
              <FaCheck aria-hidden="true" />
            </div>

            <div className="border-l border-primary/70 pl-5">
              <p className="text-2xl font-extrabold leading-tight">Built on Trust.</p>
              <p className="text-2xl font-semibold italic leading-tight text-primary">Focused on Quality.</p>
            </div>

            <p className="text-sm leading-relaxed text-neutral-200 md:text-base">
              We treat your home like it&apos;s our own because your satisfaction is our reputation.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
