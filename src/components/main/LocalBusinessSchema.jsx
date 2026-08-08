import { Helmet } from 'react-helmet-async';
import { business, contact, serviceAreas, seoDefaults } from '../../data';

/**
 * schema.org LocalBusiness JSON-LD, populated from data.js. Rendered once in
 * App.jsx so it's present on every route.
 */
export default function LocalBusinessSchema() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'HomeAndConstructionBusiness',
    name: business.name,
    description: business.about[0],
    telephone: contact.phone,
    url: seoDefaults.siteUrl,
    image: `${seoDefaults.siteUrl}${seoDefaults.defaultImage}`,
    areaServed: serviceAreas.map((area) => ({ '@type': 'AdministrativeArea', name: area })),
    openingHoursSpecification: contact.hours.map((h) => ({
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: h.dayRange,
      opens: h.timeRange.split('–')[0]?.trim(),
      closes: h.timeRange.split('–')[1]?.trim(),
    })),
  };

  return (
    <Helmet>
      <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
    </Helmet>
  );
}
