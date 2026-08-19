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
    { src: '/images/remodeled-kitchen-cabinets.jpg', alt: 'Remodeled kitchen with white custom cabinets, patterned backsplash, and range hood', category: 'kitchen-bath-remodeling', caption: 'Custom Kitchen Cabinet Remodel' },
    { src: '/images/kitchen-lighting-fixtures.jpg', alt: 'Kitchen remodel with pendant lighting above new cabinetry and backsplash', category: 'kitchen-bath-remodeling', caption: 'Kitchen Lighting and Finishes' },
    { src: '/images/bathroom-remodel-arched-doorway.jpg', alt: 'Bathroom remodel with arched doorway and updated tile shower area', category: 'kitchen-bath-remodeling', caption: 'Arched Bathroom Remodel' },
    { src: '/images/sink-countertop.jpg', alt: 'Bathroom vanity with stone countertop and updated faucet beside tiled shower', category: 'kitchen-bath-remodeling', caption: 'Vanity and Countertop Upgrade' },
    { src: '/images/matte-black-multi-function-shower-valve.jpg', alt: 'Matte black multi-function shower valve in a remodeled bathroom', category: 'kitchen-bath-remodeling', caption: 'Modern Shower Fixture Upgrade' },

    { src: '/images/bathroom-tiling.jpg', alt: 'Bathroom with tiled shower surround, glass door, and dark fixture set', category: 'tiling', caption: 'Bathroom Tile and Glass Shower' },
    { src: '/images/shower-tiling.jpg', alt: 'Gray shower tile installation with matching mosaic shower floor', category: 'tiling', caption: 'Shower Tile Installation Detail' },
    { src: '/images/black-tile-walk-in-shower.jpg', alt: 'Black tile walk-in shower with modern hardware', category: 'tiling', caption: 'Black Tile Walk-In Shower' },
    { src: '/images/custom-tiled-shower-glass-door-niche.jpg', alt: 'Custom tiled shower with inset niche and sliding glass door', category: 'tiling', caption: 'Custom Shower Niche and Glass Door' },
    { src: '/images/gray-tile-shower-body-sprays.jpg', alt: 'Gray tiled shower with body sprays and handheld fixture', category: 'tiling', caption: 'Body Sprays and Tile Shower Detail' },
    { src: '/images/marble-mosaic-shower-pan-black-fixtures.jpg', alt: 'Marble mosaic shower pan with black shower fixtures', category: 'tiling', caption: 'Marble Mosaic Shower Pan' },

    { src: '/images/asphalt-shingle-roof-replacement.jpg', alt: 'Asphalt shingle roof replacement on a residential home', category: 'roofing', caption: 'Asphalt Roof Replacement' },

    { src: '/images/board-and-batten-siding-installation.jpg', alt: 'Board and batten siding installation in progress on a home exterior', category: 'siding', caption: 'Board and Batten Siding Installation' },
    { src: '/images/house-siding-installation-in-progress.jpg', alt: 'Crew installing horizontal siding on a residential exterior wall', category: 'siding', caption: 'Siding Installation In Progress' },
    { src: '/images/house-siding.jpg', alt: 'Completed white board and batten siding with stone veneer base', category: 'siding', caption: 'Board and Batten with Stone Veneer' },
    { src: '/images/home-exterior-board-and-batten-stone-veneer.jpg', alt: 'Renovated home exterior with board and batten siding and stone accents', category: 'siding', caption: 'Exterior Siding and Stone Renovation' },
    { src: '/images/white-board-and-batten-siding-stone-veneer.jpg', alt: 'White board and batten siding with stone veneer wrapping the home', category: 'siding', caption: 'White Board and Batten Exterior' },

    { src: '/images/renovated-deck.jpg', alt: 'Renovated composite deck with black and white railing', category: 'decks-patios', caption: 'Renovated Composite Deck' },
    { src: '/images/renovated-stone-patio.jpg', alt: 'Stone patio and fire pit area illuminated with landscape lighting at night', category: 'decks-patios', caption: 'Renovated Stone Patio with Lighting' },
    { src: '/images/stone-patio.jpg', alt: 'Stone patio and fire pit connected to deck railing and retaining wall', category: 'decks-patios', caption: 'Stone Patio and Fire Pit Area' },
    { src: '/images/front-porch-composite-deck-railings.jpg', alt: 'Front porch composite decking with black metal railings', category: 'decks-patios', caption: 'Front Porch Composite Deck Railings' },
    { src: '/images/pressure-treated-deck-framing-construction.jpg', alt: 'Pressure-treated deck framing construction before finish boards', category: 'decks-patios', caption: 'Pressure-Treated Deck Framing' },
    { src: '/images/raised-deck-and-stairs-exterior-remodel.jpg', alt: 'Raised deck with stairs as part of an exterior remodel', category: 'decks-patios', caption: 'Raised Deck and Stair Remodel' },

    { src: '/images/excavation-foundation-measurement.jpg', alt: 'Excavation and foundation measurement for site preparation work', category: 'general-home-improvement', caption: 'Excavation and Foundation Prep' },
  ],
  team: [], // [PLACEHOLDER — confirm with client] no team/staff photos provided
};

export const galleryCategories = [
  { id: 'all', label: 'All Projects' },
  ...services
    .filter((service) => !['painting', 'general-home-improvement'].includes(service.slug))
    .map((service) => ({ id: service.slug, label: service.name })),
];

export const seoDefaults = {
  siteUrl: 'https://www.nandphomeimprovement.com', // [PLACEHOLDER — confirm real domain once deployed]
  defaultImage: '/images/patio-firepit-night.jpg',
};
