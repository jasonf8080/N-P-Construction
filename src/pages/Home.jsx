import { SEO } from '../components/main';
import { Hero, TrustStrip, WhyChooseUs, ServicesPreview, GalleryPreview, CTABand } from '../components/Home';

export default function Home() {
  return (
    <>
      <SEO
        title="N&P Home Improvement | Hudson Valley Remodeling Contractor"
        description="Locally owned remodeling contractor serving Dutchess, Orange, Putnam, Westchester & Ulster Counties, NY. Kitchens, baths, roofing, siding, decks, tile & painting."
        path="/"
      />
      <Hero />
      <TrustStrip />
      <WhyChooseUs />
      <ServicesPreview />
      <GalleryPreview />
      <CTABand />
    </>
  );
}
