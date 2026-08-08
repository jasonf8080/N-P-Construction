import { SEO } from '../components/main';
import { ServicesHero, ServicesList } from '../components/Services';
import { CTABand } from '../components/Home';

export default function Services() {
  return (
    <>
      <SEO
        title="Services | Kitchen, Bath, Roofing, Siding & Deck Remodeling | N&P Home Improvement"
        description="Kitchen & bath remodeling, roofing, siding, painting, tiling, decks & patios, and general home improvement — serving the Hudson Valley, NY."
        path="/services"
      />
      <ServicesHero />
      <ServicesList />
      <CTABand />
    </>
  );
}
