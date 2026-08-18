import { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { FaBars, FaTimes, FaPhoneAlt } from 'react-icons/fa';
import { business, contact } from '../../data';

const navItems = [
  { label: 'Home', to: '/' },
  { label: 'About', to: '/about' },
  { label: 'Services', to: '/services' },
  { label: 'Gallery', to: '/gallery' },
  { label: 'Contact', to: '/contact' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const linkClass = ({ isActive }) =>
    `text-sm font-semibold transition-colors hover:text-primary ${isActive ? 'text-primary' : 'text-secondary'}`;

  return (
    <header className="sticky top-0 z-50 border-b border-neutral-200 bg-white/95 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link to="/" className="flex items-center gap-3" onClick={() => setIsOpen(false)}>
          <img
            src="/images/n&pLogo.jpg"
            alt="N&P Home Improvement logo"
            className="h-12 w-12 object-contain shrink-0 md:h-16 md:w-16"
          />
          <span className="leading-tight hidden md:block">
            <span className="block text-lg font-extrabold text-secondary-dark">
              N&P <span className="text-primary">Home Improvement</span>
            </span>
            <span className="block text-[10px] font-semibold uppercase tracking-widest text-neutral-500">
              {business.tagline}
            </span>
          </span>
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {navItems.map((item) => (
            <NavLink key={item.to} to={item.to} className={linkClass}>
              {item.label}
            </NavLink>
          ))}
        </nav>

        <div className="hidden items-center gap-5 md:flex">
          <a href={contact.phoneHref} className="flex items-center gap-2 text-sm font-bold text-secondary-dark">
            <FaPhoneAlt className="text-primary" />
            {contact.phone}
          </a>
          <Link
            to="/contact"
            className="rounded bg-primary px-6 py-3 text-sm font-bold text-white transition-colors hover:bg-primary-dark"
          >
            Get a Free Quote
          </Link>
        </div>

        <button
          type="button"
          className="text-2xl text-secondary-dark md:hidden"
          aria-label="Toggle menu"
          onClick={() => setIsOpen((open) => !open)}
        >
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {isOpen && (
        <nav className="flex flex-col gap-5 border-t border-neutral-200 bg-white px-6 py-6 md:hidden">
          {navItems.map((item) => (
            <NavLink key={item.to} to={item.to} className={linkClass} onClick={() => setIsOpen(false)}>
              {item.label}
            </NavLink>
          ))}
          <a href={contact.phoneHref} className="flex items-center gap-2 text-sm font-bold text-secondary-dark">
            <FaPhoneAlt className="text-primary" />
            {contact.phone}
          </a>
          <Link
            to="/contact"
            className="rounded bg-primary px-6 py-3 text-center text-sm font-bold text-white"
            onClick={() => setIsOpen(false)}
          >
            Get a Free Quote
          </Link>
        </nav>
      )}
    </header>
  );
}
