import { Link } from 'react-router-dom';
import { FaFacebookF, FaInstagram, FaGoogle } from 'react-icons/fa';
import { business, contact, serviceAreas, services, socialLinks } from '../../data';

const socialIcons = {
  facebook: { Icon: FaFacebookF, href: socialLinks.facebook },
  instagram: { Icon: FaInstagram, href: socialLinks.instagram },
  googleBusiness: { Icon: FaGoogle, href: socialLinks.googleBusiness },
};

export default function Footer() {
  const activeSocials = Object.values(socialIcons).filter((s) => s.href);

  return (
    <footer className="bg-secondary-dark text-neutral-300">
      <div className="mx-auto max-w-6xl px-6 py-14">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-4">
          <div>
            <div className="mb-4 flex items-center gap-3 text-lg font-extrabold text-white">
              <img
                src="/images/n&pLogo.jpg"
                alt="N&P Home Improvement logo"
                className="h-12 w-12 object-contain shrink-0 md:h-14 md:w-14"
              />
              {business.name}
            </div>
            <p className="text-sm text-neutral-400">
              {business.tagline}. Full-service home remodeling across the Hudson Valley since {business.founded}.
            </p>
            <a href={contact.phoneHref} className="mt-4 inline-block text-sm font-bold text-white">
              {contact.phone}
            </a>
            {activeSocials.length > 0 && (
              <div className="mt-5 flex gap-3">
                {activeSocials.map(({ Icon, href }) => (
                  <a
                    key={href}
                    href={href}
                    target="_blank"
                    rel="noreferrer"
                    className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-primary"
                  >
                    <Icon size={14} />
                  </a>
                ))}
              </div>
            )}
          </div>

          <div>
            <h4 className="mb-4 text-xs font-bold uppercase tracking-widest text-white">Services</h4>
            <ul className="space-y-2.5 text-sm">
              {services.slice(0, 5).map((service) => (
                <li key={service.slug}>
                  <Link to="/services" className="hover:text-primary">
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="mb-4 text-xs font-bold uppercase tracking-widest text-white">Company</h4>
            <ul className="space-y-2.5 text-sm">
              <li><Link to="/about" className="hover:text-primary">About Us</Link></li>
              <li><Link to="/gallery" className="hover:text-primary">Our Work</Link></li>
              <li><Link to="/services" className="hover:text-primary">Services</Link></li>
              <li><Link to="/contact" className="hover:text-primary">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="mb-4 text-xs font-bold uppercase tracking-widest text-white">Service Areas</h4>
            <ul className="space-y-2.5 text-sm">
              {serviceAreas.map((area) => (
                <li key={area}>{area}</li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-2 border-t border-white/10 pt-6 text-xs text-neutral-500 md:flex-row md:justify-between">
          <span>© {new Date().getFullYear()} {business.name}. All rights reserved.</span>
          <span>Licensed & Insured Home Improvement Contractor — Hudson Valley, NY</span>
        </div>
      </div>
    </footer>
  );
}
