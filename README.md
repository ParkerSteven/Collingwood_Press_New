# The Collingwood Press — Homepage Revamp

A production-ready Next.js (App Router) homepage for thecollingwoodpress.com, built from the
Website Revamp Design Direction Brief. Light, editorial, premium — navy and warm brick-red on a
soft paper background, Fraunces for display type paired with Public Sans for body text.

## Stack

- **Next.js 14** (App Router) + **TypeScript**
- **Tailwind CSS** for styling (design tokens in `tailwind.config.ts`)
- **Framer Motion** for entrance and scroll-reveal animation
- **lucide-react** for icons

No external image hosting is required — book covers are generated as inline SVG
(`components/ui/BookCover.tsx`) so the project runs immediately with no missing assets. Swap in
real cover photography by replacing that component's usage with `next/image` wherever you like.

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

> **Note:** this project loads Fraunces and Public Sans through `next/font/google`, which fetches
> font files at build time. An internet connection is required for `npm run build` / `npm run dev`
> the first time. If you're building in a network-restricted environment, swap the two
> `next/font/google` imports in `app/layout.tsx` for local font files via `next/font/local`.

## Production build

```bash
npm run build
npm run start
```

## Project structure

```
app/
  layout.tsx        Root layout: fonts, global <head> metadata
  page.tsx           Homepage — assembles every section in the required order
  globals.css         Tailwind entry + a few global rules (focus states, reduced motion)

components/
  ui/                 Small, reusable primitives
    Button.tsx         Solid-color button, 4 variants, no gradients
    Container.tsx       Max-width page container
    Eyebrow.tsx          Small label-plus-rule used above headings
    SectionHeading.tsx    Eyebrow + title + description combo
    BookCover.tsx         Inline-SVG stylized book cover (6 color palettes)

  layout/              Global chrome
    UtilityBar.tsx        Email left, social icons right, above the header
    Header.tsx             Sticky nav + mobile menu
    Footer.tsx              4-column footer

  sections/            One file per homepage section, in build order:
    Hero.tsx
    StatBar.tsx
    PlatformLogos.tsx
    Testimonials.tsx
    TrustBand.tsx
    ServicesGrid.tsx
    CoverSpotlight.tsx
    ProjectManagers.tsx
    Catalog.tsx
    RelatedCarousel.tsx
    MarketingServices.tsx
    ManuscriptCTA.tsx
    FAQ.tsx
    FinalCTA.tsx

lib/
  data.ts              All section copy/content in one place — edit this file to update text
                        without touching component markup.
```

## Design system

| Token | Value | Use |
|---|---|---|
| `navy` | `#16233F` | Primary brand color — header text, stat bar, bands |
| `navy-deep` | `#0C1526` | Darkest navy — utility bar, footer, trust band |
| `brick` | `#B3432B` | Accent — CTAs, links, highlighted phrase in the hero |
| `brick-deep` | `#8F3220` | Primary button hover state |
| `paper` | `#FBF9F5` | Page background |
| `paper-muted` | `#F2EEE6` | Alternating section background |
| `ink` / `ink-soft` | `#191A23` / `#4A4C5C` | Body text / secondary text |
| `gold` | `#C79A4B` | Sparse accent (badge dots, ornament lines) |

Headline font: **Fraunces** (serif, editorial warmth). Body font: **Public Sans** (clean,
highly legible sans). No third typeface is used anywhere, including buttons and labels.

All buttons are solid colors with a simple darker-shade hover state — no gradients anywhere in
the UI, per the brief.

## Homepage section order

The build follows the brief's exact flow and does not introduce, remove, or reorder sections:

1. Utility bar
2. Hero (eyebrow, 3-line headline with a highlighted phrase, 2 CTAs, floating book stack)
3. 4-column stat bar
4. Platform logo row
5. Testimonials (headshot + book cover cards)
6. Trust statement band
7. Formatting & services icon grid (4 cards)
8. Cover Design Spotlight (browser-chrome frame + pull quote)
9. Meet the Project Managers (3 cards)
10. Published catalog / book showcase
11. Related / More Like This carousel
12. Marketing services breakdown (3 cards)
13. Free manuscript review CTA
14. FAQ accordion
15. Final CTA + 4-column footer

## Editing content

Nearly everything — stats, testimonials, project manager bios, catalog titles, FAQ copy — lives
in `lib/data.ts`. Update that file and the corresponding sections re-render automatically; no
component code needs to change for routine copy edits.

## Accessibility notes

- One `<h1>` per page (in the hero), with a clean `h2` → `h3` hierarchy through the rest of the
  sections.
- All interactive elements (menu button, FAQ accordion, carousel arrows) have `aria-label` or
  `aria-expanded` attributes.
- Focus states are visible site-wide (`:focus-visible` in `globals.css`).
- `prefers-reduced-motion` is respected globally.
- Book cover SVGs include descriptive `aria-label`s via `role="img"`.
