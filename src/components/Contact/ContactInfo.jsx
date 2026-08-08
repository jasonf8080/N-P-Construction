import { FaPhoneAlt, FaClock, FaTools } from 'react-icons/fa';
import useScrollReveal from '../../hooks/useScrollReveal';
import { contact, serviceAreas } from '../../data';

const items = [
  { icon: FaPhoneAlt, title: 'Phone', body: <a href={contact.phoneHref}>{contact.phone}</a> },
  {
    icon: FaClock,
    title: 'Hours',
    body: contact.hours.map((h) => (
      <span key={h.dayRange}>
        {h.dayRange}, {h.timeRange}
      </span>
    )),
  },
  { icon: FaTools, title: 'Service Area', body: <span>{serviceAreas.join(', ')}</span> },
];

export default function ContactInfo() {
  const scope = useScrollReveal();

  return (
    <div ref={scope}>
      <span className="mb-2 inline-block text-xs font-bold uppercase tracking-[2px] text-primary">Contact</span>
      <h2 className="mb-8 text-2xl font-extrabold text-secondary-dark md:text-4xl">Let's Talk About Your Project</h2>

      {items.map(({ icon: Icon, title, body }) => (
        <div key={title} data-reveal className="mb-6 flex gap-4">
          <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-lg bg-accent text-lg text-primary">
            <Icon />
          </div>
          <div>
            <h4 className="mb-1 text-sm font-bold text-secondary-dark">{title}</h4>
            <p className="text-sm text-neutral-600">{body}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
