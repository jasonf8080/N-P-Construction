import { SEO } from '../components/main';
import { GalleryHero, GalleryExplorer } from '../components/Gallery';
import { CTABand } from '../components/Home';

export default function Gallery() {
  return (
    <>
      <SEO
        title="Project Gallery | N&P Home Improvement"
        description="Browse recent kitchen, bath, deck, and patio remodeling projects completed by N&P Home Improvement across the Hudson Valley, NY."
        path="/gallery"
      />
      <GalleryHero />
      <GalleryExplorer />
      <CTABand />
    </>
  );
}
