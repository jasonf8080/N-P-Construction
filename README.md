# N&P Home Improvement — React Site

Vite + React 18 + Tailwind + GSAP/ScrollTrigger + react-router-dom + react-helmet-async, built to match the reusable master prompt template.

## Run it

```bash
npm install
npm run dev
```

Then open the local URL Vite prints (usually http://localhost:5173).

To build for production: `npm run build` (outputs to `dist/`).

> This project's dependencies could not be installed or build-verified in the
> sandbox this was generated in (no registry access there) — the code was
> written and statically checked (import resolution, bracket/JSON/XML
> validity, image references) but not compiled. Run `npm install` locally to
> pull in React/Vite/Tailwind/GSAP and confirm it builds; flag anything odd
> and I'll fix it.

## Structure

- `src/data.js` — every piece of site copy (services, why-choose-us, service areas, contact, branding, tagged photos) as plain objects. Components map over this; nothing is hardcoded in JSX.
- `src/components/main/` — Navbar, Footer, SEO (react-helmet-async wrapper), LocalBusinessSchema (JSON-LD)
- `src/components/{Home,About,Services,Gallery,Contact}/` — feature folders, each with a barrel `index.js`
- `src/pages/` — one page per route, composed from feature components
- `src/hooks/useScrollReveal.js` — shared GSAP ScrollTrigger fade-in, one context per component, reverted on unmount
- `public/` — favicons, `robots.txt`, `sitemap.xml`, `site.webmanifest`, project photos
