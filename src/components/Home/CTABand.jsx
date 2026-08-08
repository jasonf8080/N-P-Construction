import { contact } from '../../data';

export default function CTABand() {
  return (
    <div className="bg-gradient-to-r from-primary to-primary-dark px-6 py-16 text-center text-white">
      <h2 className="mb-3 text-2xl font-extrabold md:text-4xl">Ready to Start Your Project?</h2>
      <p className="mb-7 text-orange-50">Free, no-pressure estimates. Call, text, or send us a message.</p>
      <a
        href={contact.phoneHref}
        className="inline-block rounded border-2 border-white px-7 py-3.5 text-sm font-bold text-white hover:bg-white hover:text-secondary-dark"
      >
        Call {contact.phone}
      </a>
    </div>
  );
}
