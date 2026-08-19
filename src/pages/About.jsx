import { SEO } from '../components/main';
import { AboutHero, AboutStory } from '../components/About';
import { CTABand } from '../components/Home';

export default function About() {
  return (
    <>
      <SEO
        title="About N&P Home Improvement | Hudson Valley Remodeling Contractor"
        description="Founded in 2010, N&P Home Improvement brings 20+ years of trade experience to kitchens, baths, roofing, siding, and decks across the Hudson Valley, NY."
        path="/about"
      />
      <AboutHero />
      <AboutStory />
      <CTABand />
    </>
  );
}
