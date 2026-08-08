import { Helmet } from 'react-helmet-async';
import { seoDefaults } from '../../data';

/**
 * Per-page <head> manager. Every page passes its own title/description so
 * search results and social shares are specific to that route, not a single
 * generic tag reused everywhere.
 */
export default function SEO({ title, description, path = '/', image }) {
  const url = `${seoDefaults.siteUrl}${path}`;
  const ogImage = `${seoDefaults.siteUrl}${image ?? seoDefaults.defaultImage}`;

  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={url} />

      <meta property="og:type" content="website" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:url" content={url} />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />
    </Helmet>
  );
}
