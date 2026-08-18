import { FaAward, FaCheck, FaHandshake, FaHome, FaStar } from 'react-icons/fa';
import useScrollReveal from '../../hooks/useScrollReveal';
import { whyChooseUs } from '../../data';

const iconMap = { FaAward, FaHome, FaHandshake, FaStar };

export default function WhyChooseUs() {
  const scope = useScrollReveal();

  return (
    <section ref={scope} className="bg-[#f5f3ef] py-16 md:py-20">
      <div className="mx-auto max-w-[1180px] px-5 md:px-8">
        <div className="mb-4">
          <span className="mb-3 inline-block text-[0.7rem] font-black uppercase tracking-[0.28rem] text-primary">
            Why N&P
          </span>
          <div className="h-1 w-20 bg-primary" />
        </div>

        <h2 className="max-w-[660px] text-[2.2rem] font-black leading-[0.95] tracking-[-0.05em] text-[#2f2f2f] md:text-[3.5rem]">
          Why Homeowners
          <span className="block">Choose Us</span>
        </h2>

        <p className="mt-6 max-w-[680px] text-[0.96rem] leading-relaxed text-[#4d4d4d] md:text-[1.35rem] md:leading-[1.35]">
          Two decades in the trade taught us what actually matters to homeowners: showing up,
          communicating clearly, and doing the work right the first time.
        </p>

        <div className="mt-10 grid gap-8 md:grid-cols-2 md:gap-y-10 md:gap-x-8">
          {whyChooseUs.map((item, index) => {
            const Icon = iconMap[item.icon];

            return (
              <article key={item.id} data-reveal className="border-t border-[#d7d0c6] pt-7 md:min-h-[260px] md:pt-8">
                <div className="flex items-start gap-5 md:gap-7">
                  <div className="flex w-[94px] shrink-0 justify-center pt-2 md:w-[120px]">
                    <div className="flex h-20 w-20 items-center justify-center rounded-full border-[3px] border-primary bg-transparent text-primary md:h-24 md:w-24">
                      <Icon aria-hidden="true" className="text-[1.7rem] md:text-[2rem]" />
                    </div>
                  </div>

                  <div className="flex-1 border-l border-[#d7d0c6] pl-5 md:pl-7">
                    <span className="mb-2 block text-lg font-black text-primary md:text-[1.45rem]">
                      {String(index + 1).padStart(2, '0')}
                    </span>
                    <div className="mb-3 h-px w-16 bg-primary" />
                    <h3 className="text-[1.6rem] font-black leading-[1.1] tracking-[-0.04em] text-[#2f2f2f] md:text-[2rem]">
                      {item.title}
                    </h3>
                    <p className="mt-3 max-w-[32rem] text-sm leading-relaxed text-[#4d4d4d] md:text-[1rem]">
                      {item.description}
                    </p>
                  </div>
                </div>
              </article>
            );
          })}
        </div>

        <div className="mt-10 rounded-[22px] border border-[#f0c59d] bg-[#f1eee9] px-5 py-5 md:px-8 md:py-7">
          <div className="grid items-center gap-5 md:grid-cols-[120px_1fr_1.2fr]">
            <div className="flex items-center justify-center">
              <div className="flex h-20 w-20 items-center justify-center rounded-full border-[3px] border-primary text-[2rem] text-primary">
                <FaCheck aria-hidden="true" />
              </div>
            </div>

            <div className="md:border-l md:border-[#d7d0c6] md:pl-6">
              <p className="text-[1.5rem] font-black leading-[1.1] tracking-[-0.05em] text-[#2f2f2f] md:text-[1.8rem]">
                Built on Trust.
              </p>
              <p className="text-[1.35rem] font-semibold italic leading-[1.1] tracking-[-0.04em] text-primary md:text-[1.55rem]">
                Focused on Quality.
              </p>
            </div>

            <p className="text-sm leading-relaxed text-[#4d4d4d] md:text-[0.96rem]">
              We treat your home like it&apos;s our own — because your satisfaction is our reputation.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
