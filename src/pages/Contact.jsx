import { SEO } from '../components/main';
import { ContactHero, ContactInfo, ContactForm } from '../components/Contact';

export default function Contact() {
  return (
    <>
      <SEO
        title="Contact Us | Free Estimate | N&P Home Improvement"
        description="Request a free, no-pressure estimate from N&P Home Improvement. Call 845-891-8022 or send us your project details online."
        path="/contact"
      />
      <ContactHero />
      <section className="py-20 md:py-24">
        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-14 px-6 md:grid-cols-2">
          <ContactInfo />
          <ContactForm />
        </div>
      </section>
    </>
  );
}
