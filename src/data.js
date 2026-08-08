// Single source of truth for all site copy and repeatable content.
// Components map over this data — nothing below is hardcoded directly in JSX.
// Items still needing client confirmation are flagged inline; see NOTES-before-launch.md.

export const business = {
  name: 'N&P Home Improvement',
  tagline: 'You Dream It, We Build It',
  industry: 'Home Improvement & General Contracting',
  // [PLACEHOLDER — confirm with client] no HQ city/state provided, only the 5 service counties below
  citySlug: 'Hudson Valley, NY',
  founded: '2010',
  about: [
    // [PLACEHOLDER — confirm with client] drafted from intake notes, not a direct client quote
    'Noé founded N&P Home Improvement in 2010 after nearly a decade in the trade, having started his career in 2001 with Estate Builders Inc. in Fishkill, NY. What began as a commitment to doing quality work has grown into a full-service remodeling company trusted by homeowners throughout the Hudson Valley.',
    'N&P specializes in complete home improvement and remodeling — from kitchens and baths to roofing, siding, and decks — all built on one core principle: transparency and honesty with every customer, on every job, every time.',
  ],
  founderQuote:
    '"We treat every home like it\'s our own — clear communication, fair pricing, and craftsmanship that lasts." — Noé, Founder',
};

export const services = [
  {
    slug: 'kitchen-bath-remodeling',
    name: 'Kitchen & Bath Remodeling',
    description: 'Full kitchen and bathroom renovations, from tile and fixtures to custom cabinetry.',
    price: null,
    photoTag: 'kitchen-cabinets-hood',
  },
  {
    slug: 'roofing',
    name: 'Roofing',
    description: 'Roof repair and replacement done right, protecting the home you\'ve invested in.',
    price: null,
    photoTag: null,
  },
  {
    slug: 'siding',
    name: 'Siding',
    description: 'Siding installation and replacement that boosts curb appeal and protects your home.',
    price: null,
    photoTag: null,
  },
  {
    slug: 'painting',
    name: 'Painting',
    description: 'Interior and exterior painting with clean lines and lasting finishes.',
    price: null,
    photoTag: null,
  },
  {
    slug: 'tiling',
    name: 'Tiling',
    description: 'Custom tile work for showers, floors, and backsplashes — precision that lasts.',
    price: null,
    photoTag: 'bath-shower-glass',
  },
  {
    slug: 'decks-patios',
    name: 'Decks & Patios',
    description: 'Custom deck design and construction, plus paver patios and outdoor living spaces.',
    price: null,
    photoTag: 'deck-patio-firepit-fall',
  },
  {
    slug: 'general-home-improvement',
    name: 'General Home Improvement',
    description: 'Whole-home renovation and improvement projects, managed start to finish.',
    price: null,
    photoTag: null,
  },
];

export const whyChooseUs = [
  {
    id: 'experience',
    icon: 'FaAward',
    title: 'Two Decades of Experience',
    description: 'Hands-on trade experience since 2001, running our own crews since 2010.',
  },
  {
    id: 'local',
    icon: 'FaHome',
    title: 'Locally Owned',
    description: 'A local, owner-operated business serving the Hudson Valley community since 2010.',
  },
  {
    id: 'honest',
    icon: 'FaHandshake',
    title: 'Honest Communication',
    description: 'Clear timelines and pricing, no surprises — we tell it to you straight.',
  },
  {
    id: 'craftsmanship',
    icon: 'FaStar',
    title: 'Craftsmanship That Shows',
    description: 'From custom tile showers to full kitchen remodels, the details are where we shine.',
  },
];

export const serviceAreas = [
  'Dutchess County, NY',
  'Orange County, NY',
  'Putnam County, NY',
  'Westchester County, NY',
  'Ulster County, NY',
];

// [PLACEHOLDER — confirm with client] no reviews were supplied — keep this array empty until
// real reviews come in. Components using this data render nothing when it's empty rather than
// showing fake/placeholder testimonials.
export const reviews = [];

export const contact = {
  phone: '845-891-8022',
  phoneHref: 'tel:8458918022',
  // [PLACEHOLDER — confirm with client] no business email exists yet
  email: null,
  address: null, // [PLACEHOLDER — confirm with client] service-area business, no storefront/HQ given
  hours: [{ dayRange: 'Monday – Friday', timeRange: '8:00 AM – 5:00 PM' }],
};

export const socialLinks = {
  // [PLACEHOLDER — confirm with client] none provided
  instagram: null,
  facebook: null,
  googleBusiness: null,
};

export const branding = {
  // [PLACEHOLDER — confirm with client] sampled from logo description, verify exact hex values
  primaryColor: '#F47920',
  secondaryColor: '#3D3D3D',
  accentColor: '#FAF7F3',
  fontPreference: null,
};

// Photos tagged by section. If a tag has no photo, the component omits that
// section gracefully instead of showing a broken image or empty box.
export const photos = {
  hero: { src: '/images/patio-firepit-night.jpg', alt: 'Paver patio with stone fire pit and landscape lighting at night' },
  about: [
    { src: '/images/bath-shower-glass.jpg', alt: 'Custom tiled walk-in shower with sliding glass door' },
    { src: '/images/kitchen-cabinets-hood.jpg', alt: 'Custom white kitchen cabinetry with range hood and arabesque tile backsplash' },
    { src: '/images/deck-patio-firepit-fall.jpg', alt: 'Composite deck with paver patio and stone fire pit in autumn' },
  ],
  service: {
    'kitchen-cabinets-hood': { src: '/images/kitchen-cabinets-hood.jpg', alt: 'White kitchen cabinets with arabesque tile backsplash and stainless range hood' },
    'bath-shower-glass': { src: '/images/bath-shower-glass.jpg', alt: 'Walk-in shower with sliding glass door and gray subway tile' },
    'deck-patio-firepit-fall': { src: '/images/deck-patio-firepit-fall.jpg', alt: 'Composite deck with paver patio and stone fire pit in autumn' },
  },
  gallery: [
    { src: '/images/bath-shower-glass.jpg', alt: 'Walk-in shower with sliding glass door and gray subway tile', category: 'bath', caption: 'Custom Tiled Shower' },
    { src: '/images/bath-toilet-tile-1.jpg', alt: 'Toilet nook with gray subway tile wainscoting', category: 'bath', caption: 'Bath Remodel — Tile Detail' },
    { src: '/images/bath-vanity-sink.jpg', alt: 'Bathroom vanity with granite countertop and oil-rubbed bronze faucet', category: 'bath', caption: 'Custom Vanity & Countertop' },
    { src: '/images/bath-shower-fixtures.jpg', alt: 'Shower with oil-rubbed bronze body sprays and rain shower head', category: 'bath', caption: 'Multi-Head Shower System' },
    { src: '/images/bath-toilet-tile-2.jpg', alt: 'Finished bathroom with tile wainscoting and glass shower enclosure', category: 'bath', caption: 'Full Bath Remodel' },
    { src: '/images/kitchen-cabinets-hood.jpg', alt: 'White kitchen cabinets with arabesque tile backsplash and range hood', category: 'kitchen', caption: 'Kitchen Cabinetry & Backsplash' },
    { src: '/images/kitchen-pendant-lights.jpg', alt: 'Kitchen with glass pendant lighting over island', category: 'kitchen', caption: 'Kitchen Lighting & Finishes' },
    { src: '/images/deck-construction.jpg', alt: 'Newly built composite deck with white and black railing', category: 'outdoor', caption: 'Custom Composite Deck' },
    { src: '/images/deck-patio-firepit-fall.jpg', alt: 'Deck with paver patio and stone fire pit in autumn', category: 'outdoor', caption: 'Deck & Paver Patio' },
    { src: '/images/patio-firepit-night.jpg', alt: 'Paver patio with fire pit and landscape lighting at night', category: 'outdoor', caption: 'Outdoor Living & Lighting' },
  ],
  team: [], // [PLACEHOLDER — confirm with client] no team/staff photos provided
};

export const galleryCategories = [
  { id: 'all', label: 'All Projects' },
  { id: 'kitchen', label: 'Kitchen' },
  { id: 'bath', label: 'Bath' },
  { id: 'outdoor', label: 'Decks & Patios' },
];

export const seoDefaults = {
  siteUrl: 'https://www.nandphomeimprovement.com', // [PLACEHOLDER — confirm real domain once deployed]
  defaultImage: '/images/patio-firepit-night.jpg',
};
