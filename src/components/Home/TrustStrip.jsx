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
      <div className="mx-auto grid max-w-6xl grid-cols-2 gap-4 px-6 text-center md:grid-cols-4">
        {stats.map((stat) => (
          <div key={stat.label} className="flex flex-col items-center justify-center text-sm font-semibold text-neutral-200">
            <b className="block text-xl font-extrabold text-primary md:text-2xl">{stat.value}</b>
            {stat.label}
          </div>
        ))}
      </div>
    </div>
  );
}
