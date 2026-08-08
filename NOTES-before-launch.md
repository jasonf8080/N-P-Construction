# Before This Site Goes Live — Confirm With Client

1. **About text & "Why Choose Us" copy** (`src/data.js`) — drafted from the intake notes, not direct client quotes. Have Noé review and adjust tone/facts.
2. **Business email** — no email exists yet, so `contact.email` is `null` in `data.js` and no email link renders. Add it once it's set up, plus a real backend for the contact form (see #7).
3. **Brand logo** — the site uses the updated company logo and favicon set in `public/` with matching branding across the navbar, footer, and browser icons.
4. **Brand colors** (`tailwind.config.js` → `theme.extend.colors`) — orange `#F47920` / charcoal `#3D3D3D`, sampled from the description. Confirm exact hex codes against the real logo; this is the one place brand color lives, so it updates everywhere at once.
5. **HQ / city, state** — not provided, only the 5 service counties. Site is built as a service-area business with no listed address (`contact.address` is `null`); add one if there's a home base, both in `data.js` and the LocalBusiness JSON-LD.
6. **Reviews** — none supplied, so `reviews` in `data.js` is an empty array and no testimonials section exists yet. Add a Reviews component once real reviews come in.
7. **Contact form** — front-end only right now (`ContactForm.jsx` just shows an alert on submit). Needs a real backend (email service, form API, or CRM) before launch.
8. **Social links** — Instagram, Facebook, Google Business not provided; footer icons only render if a link is set in `data.js`.
9. **Domain** — `src/data.js` (`seoDefaults.siteUrl`) and `public/robots.txt` / `sitemap.xml` all use a placeholder domain (`nandphomeimprovement.com`). Update to the real domain once one is registered/deployed.
10. **Not build-verified** — dependencies couldn't be installed in the sandbox this was built in (no registry access there), so this hasn't gone through an actual `npm run build`. Run `npm install && npm run dev` locally as your first step — flag anything that doesn't compile cleanly.

## What's included

- Full Vite + React 18 + Tailwind + GSAP/ScrollTrigger + react-router-dom + react-helmet-async site
- 5 routes: `/`, `/about`, `/services`, `/gallery`, `/contact`
- Feature-folder structure, single `data.js` content source, per-page SEO tags, LocalBusiness JSON-LD, full favicon set, `robots.txt` + `sitemap.xml`
- 10 project photos in `public/images/`, optimized and tagged by section/category

See `README.md` for how to run it.
