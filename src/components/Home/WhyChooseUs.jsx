import { FaAward, FaHome, FaHandshake, FaStar } from 'react-icons/fa';
import useScrollReveal from '../../hooks/useScrollReveal';
import { whyChooseUs } from '../../data';

const iconMap = { FaAward, FaHome, FaHandshake, FaStar };

export default function WhyChooseUs() {
  const scope = useScrollReveal();

  return (
    <section ref={scope} className="bg-accent py-20 md:py-24">
      <div className="mx-auto max-w-6xl px-6">
        <span className="mb-2 inline-block text-xs font-bold uppercase tracking-[2px] text-primary">Why N&P</span>
        <h2 className="mb-4 text-3xl font-extrabold text-secondary-dark md:text-5xl">
          Why Homeowners Choose Us
        </h2>
        <p className="mb-12 max-w-xl text-base text-neutral-600 md:text-lg">
          Two decades in the trade taught us what actually matters to homeowners: showing up,
          communicating clearly, and doing the work right the first time.
        </p>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
          {whyChooseUs.map((item) => {
            const Icon = iconMap[item.icon];
            return (
              <div
                key={item.id}
                data-reveal
                className="rounded-xl border border-neutral-200 bg-white p-7 transition-transform hover:-translate-y-1 hover:shadow-xl"
              >
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary text-xl text-white">
                  <Icon />
                </div>
                <h3 className="mb-2 text-lg font-bold text-secondary-dark">{item.title}</h3>
                <p className="text-sm text-neutral-600">{item.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
