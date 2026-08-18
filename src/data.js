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
    photoTag: 'kitchen-bath-remodeling',
  },
  {
    slug: 'roofing',
    name: 'Roofing',
    description: 'Roof repair and replacement done right, protecting the home you\'ve invested in.',
    price: null,
    photoTag: 'roofing',
  },
  {
    slug: 'siding',
    name: 'Siding',
    description: 'Siding installation and replacement that boosts curb appeal and protects your home.',
    price: null,
    photoTag: 'siding',
  },
  {
    slug: 'painting',
    name: 'Painting',
    description: 'Interior and exterior painting with clean lines and lasting finishes.',
    price: null,
    photoTag: 'painting',
  },
  {
    slug: 'tiling',
    name: 'Tiling',
    description: 'Custom tile work for showers, floors, and backsplashes — precision that lasts.',
    price: null,
    photoTag: 'tiling',
  },
  {
    slug: 'decks-patios',
    name: 'Decks & Patios',
    description: 'Custom deck design and construction, plus paver patios and outdoor living spaces.',
    price: null,
    photoTag: 'decks-patios',
  },
  {
    slug: 'general-home-improvement',
    name: 'General Home Improvement',
    description: 'Whole-home renovation and improvement projects, managed start to finish.',
    price: null,
    photoTag: 'general-home-improvement',
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
    'kitchen-bath-remodeling': {
      src: '/images/matte-black-multi-function-shower-valve.jpg',
      alt: 'Matte black multi-function shower valve in a bathroom remodel',
    },
    roofing: {
      src: '/images/asphalt-shingle-roof-replacement.jpg',
      alt: 'Asphalt shingle roof replacement on a residential home',
    },
    siding: {
      src: '/images/house-siding-installation-in-progress.jpg',
      alt: 'House siding installation in progress on a residential exterior',
    },
    painting: {
      src: '/images/board-and-batten-siding-installation.jpg',
      alt: 'Exterior home improvement project photo for painting services',
    },
    tiling: {
      src: '/images/marble-mosaic-shower-pan-black-fixtures.jpg',
      alt: 'Marble mosaic shower pan with black fixtures and custom tile',
    },
    'decks-patios': {
      src: '/images/raised-deck-and-stairs-exterior-remodel.jpg',
      alt: 'Raised deck and stairs exterior remodel project',
    },
    'general-home-improvement': {
      src: '/images/bath-shower-fixtures.jpg',
      alt: 'Bathroom shower fixture upgrade as part of a general home improvement project',
    },
  },
  gallery: [
    { src: '/images/bath-shower-glass.jpg', alt: 'Walk-in shower with sliding glass door and gray subway tile', category: 'kitchen-bath-remodeling', caption: 'Custom Tiled Shower' },
    { src: '/images/bath-toilet-tile-1.jpg', alt: 'Toilet nook with gray subway tile wainscoting', category: 'tiling', caption: 'Tile Detail Work' },
    { src: '/images/bath-vanity-sink.jpg', alt: 'Bathroom vanity with granite countertop and oil-rubbed bronze faucet', category: 'kitchen-bath-remodeling', caption: 'Custom Vanity & Countertop' },
    { src: '/images/bath-shower-fixtures.jpg', alt: 'Shower with oil-rubbed bronze body sprays and rain shower head', category: 'kitchen-bath-remodeling', caption: 'Multi-Head Shower System' },
    { src: '/images/bath-toilet-tile-2.jpg', alt: 'Finished bathroom with tile wainscoting and glass shower enclosure', category: 'kitchen-bath-remodeling', caption: 'Full Bath Remodel' },
    { src: '/images/kitchen-cabinets-hood.jpg', alt: 'White kitchen cabinets with arabesque tile backsplash and range hood', category: 'kitchen-bath-remodeling', caption: 'Kitchen Cabinetry & Backsplash' },
    { src: '/images/kitchen-pendant-lights.jpg', alt: 'Kitchen with glass pendant lighting over island', category: 'kitchen-bath-remodeling', caption: 'Kitchen Lighting & Finishes' },
    { src: '/images/bathroom-remodel-arched-doorway.jpg', alt: 'Bathroom remodel with arched doorway and updated finishes', category: 'kitchen-bath-remodeling', caption: 'Bathroom Remodel Upgrade' },
    { src: '/images/black-tile-walk-in-shower.jpg', alt: 'Black tile walk-in shower with modern fixtures', category: 'tiling', caption: 'Modern Tile Shower' },
    { src: '/images/custom-tiled-shower-glass-door-niche.jpg', alt: 'Custom tiled shower with niche and glass door', category: 'tiling', caption: 'Custom Tile Niche Design' },
    { src: '/images/gray-tile-shower-body-sprays.jpg', alt: 'Gray tile shower with body sprays and polished fixtures', category: 'tiling', caption: 'Tile Shower Fixtures' },
    { src: '/images/gray-vertical-tile-shower-remodel.jpg', alt: 'Vertical gray tile shower remodel with glass enclosure', category: 'tiling', caption: 'Vertical Tile Shower Remodel' },
    { src: '/images/marble-mosaic-shower-pan-black-fixtures.jpg', alt: 'Marble mosaic shower pan with black fixtures', category: 'tiling', caption: 'Marble Mosaic Detail' },
    { src: '/images/matte-black-multi-function-shower-valve.jpg', alt: 'Matte black multi-function shower valve in a modern bathroom', category: 'kitchen-bath-remodeling', caption: 'Signature Bathroom Fixtures' },
    { src: '/images/asphalt-shingle-roof-replacement.jpg', alt: 'New asphalt shingle roof replacement on a residential home', category: 'roofing', caption: 'Roof Replacement Project' },
    { src: '/images/board-and-batten-siding-installation.jpg', alt: 'Board and batten siding installation in progress', category: 'siding', caption: 'Board & Batten Siding' },
    { src: '/images/home-exterior-board-and-batten-stone-veneer.jpg', alt: 'Home exterior with board and batten siding and stone veneer', category: 'siding', caption: 'Exterior Siding & Stone Veneer' },
    { src: '/images/house-siding-installation-in-progress.jpg', alt: 'Siding installation on a home exterior in progress', category: 'siding', caption: 'Siding Installation In Progress' },
    { src: '/images/white-board-and-batten-siding-stone-veneer.jpg', alt: 'White board and batten siding paired with stone veneer accents', category: 'siding', caption: 'Fresh Exterior Upgrade' },
    { src: '/images/deck-construction.jpg', alt: 'Newly built composite deck with white and black railing', category: 'decks-patios', caption: 'Custom Composite Deck' },
    { src: '/images/deck-patio-firepit-fall.jpg', alt: 'Deck with paver patio and stone fire pit in autumn', category: 'decks-patios', caption: 'Deck & Paver Patio' },
    { src: '/images/front-porch-composite-deck-railings.jpg', alt: 'Front porch with composite deck railings and updated finishes', category: 'decks-patios', caption: 'Front Porch Upgrade' },
    { src: '/images/patio-firepit-night.jpg', alt: 'Paver patio with fire pit and landscape lighting at night', category: 'decks-patios', caption: 'Outdoor Living & Lighting' },
    { src: '/images/pressure-treated-deck-framing-construction.jpg', alt: 'Pressure-treated deck framing during construction', category: 'decks-patios', caption: 'Deck Framing & Build' },
    { src: '/images/raised-deck-and-stairs-exterior-remodel.jpg', alt: 'Raised deck and stairs exterior remodel project', category: 'decks-patios', caption: 'Raised Deck & Stairs' },
    { src: '/images/excavation-foundation-measurement.jpg', alt: 'Excavation and foundation measurement work at a project site', category: 'general-home-improvement', caption: 'Site Preparation & Foundations' },
  ],
  team: [], // [PLACEHOLDER — confirm with client] no team/staff photos provided
};

export const galleryCategories = [
  { id: 'all', label: 'All Projects' },
  ...services
    .filter((service) => service.slug !== 'painting')
    .map((service) => ({ id: service.slug, label: service.name })),
];

export const seoDefaults = {
  siteUrl: 'https://www.nandphomeimprovement.com', // [PLACEHOLDER — confirm real domain once deployed]
  defaultImage: '/images/patio-firepit-night.jpg',
};
