import { business, serviceAreas, services } from '../../data';

const stats = [
  { label: 'Founded', value: business.founded },
  { label: 'Trade Experience', value: '20+ yrs' },
  { label: 'Counties Served', value: String(serviceAreas.length) },
  { label: 'Core Services', value: `${services.length}+` },
];

export default function TrustStrip() {
  return (
    <div className="bg-secondary-dark py-4">
      <div className="mx-auto flex max-w-6xl flex-wrap justify-around gap-4 px-6 text-center">
        {stats.map((stat) => (
          <div key={stat.label} className="text-sm font-semibold text-neutral-200">
            <b className="block text-xl font-extrabold text-primary md:text-2xl">{stat.value}</b>
            {stat.label}
          </div>
        ))}
      </div>
    </div>
  );
}
