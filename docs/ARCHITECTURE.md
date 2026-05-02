# IARSA Website — Architecture Overview

## Quick Start

```bash
npm run dev        # local dev at http://localhost:3000
npm run build      # static export → ./out/
```

No database. No backend. No environment variables needed.

---

## What This Is

A static marketing site for IARSA (Indian Amateur Roller Skating Academy, Visakhapatnam). Built with Next.js and exported as plain HTML/CSS/JS files that live on GitHub Pages.

**Not a web app** — no auth, no API routes, no server. Just fast static pages with animations.

---

## Tech Stack

| What | Why |
|---|---|
| **Next.js 16 (App Router)** | File-based routing, metadata API, static export |
| **React 19 + TypeScript** | Component model, type safety |
| **Tailwind CSS v4** | Utility classes, `@import "tailwindcss"` syntax (no `tailwind.config.js`) |
| **framer-motion v12** | Scroll animations, shared layout, accordion height |
| **lucide-react** | Icon set (Shield, Trophy, Star, MapPin, Phone, Mail…) |
| **GitHub Actions → Pages** | CI/CD deploy on push to `main` |

---

## Pages

```
/              → Landing page (9 sections, one long scroll)
/programs      → Program cards + photo gallery
/contact       → Enquiry form + map
```

No dynamic routes. All pages are statically generated at build time.

---

## How Data Flows

```
src/data/*.ts  →  section components  →  page.tsx  →  rendered HTML
```

Every piece of content (text, fees, phone numbers, names) lives in one place:

| File | Contains |
|---|---|
| `src/data/site.ts` | Academy name, address, phone, WhatsApp, email |
| `src/data/programs.ts` | 5 programs (title, fee, age, highlights) |
| `src/data/team.ts` | 3 coaches (name, role, bio) |
| `src/data/stats.ts` | 4 counters (500+ students, 20+ years…) |
| `src/data/testimonials.ts` | 3 parent quotes |
| `src/data/faq.ts` | 6 questions + answers |

To update content → edit the data file. The component picks it up automatically. No component code changes needed.

---

## Component Tree

```
layout.tsx
├── AnnouncementBar       ← blue strip, "Enquire →" link
├── Nav                   ← sticky, scroll shadow, mobile drawer
├── <page content>
│   ├── page.tsx (/)
│   │   ├── Hero              ← floating shapes, headline, CTAs, stat strip
│   │   ├── CredibilityStrip  ← CSS marquee of credentials (no JS)
│   │   ├── About             ← founder story, gold quote card
│   │   ├── Values            ← Safety / Excellence / Community cards
│   │   ├── Team              ← 3 coaches
│   │   ├── Stats             ← animated CountUp numbers
│   │   ├── Testimonials      ← parent quotes, 5-star rating
│   │   ├── Faq               ← accordion
│   │   └── EnrolmentCta      ← WhatsApp CTA
│   ├── programs/page.tsx
│   │   ├── Programs          ← program cards with fees
│   │   └── Gallery           ← photo grid
│   └── contact/page.tsx
│       └── Contact           ← form → WhatsApp, map iframe
└── Footer
```

---

## Animation System

All animations are in `src/components/ui/`:

**`AnimatedSection`** — wraps any content, triggers on scroll
```tsx
<AnimatedSection direction="left" delay={0.2}>
  <SomeContent />
</AnimatedSection>
```
Uses `useInView({ once: true, amount: 0.15 })` — fires once when 15% of element enters viewport.

**`RevealText`** — splits text into words, staggers them in
```tsx
<RevealText text="Train with India's Best" as="h2" />
```

**`CountUp`** — animates a number from 0 to target when scrolled into view
```tsx
<CountUp to={500} suffix="+" />
```

**`ElegantShape`** — decorative floating oval blob (used in Hero background)

**CSS Marquee** (CredibilityStrip) — no JS, pure CSS `@keyframes scrollL` defined in `globals.css`. Pauses on hover.

---

## Contact / Forms

No backend. The contact form builds a WhatsApp message URL:

```
https://wa.me/919876543210?text=Hi%2C%20I%27m%20interested...
```

When submitted, opens WhatsApp in a new tab with the enquiry pre-filled. The academy responds via WhatsApp. Works on desktop and mobile.

---

## Styling Conventions

**Colors** are defined as CSS custom properties in `globals.css`:
```css
:root {
  --iarsa-blue: #006fe6;   /* primary CTAs */
  --iarsa-teal: #00b4a6;   /* accents, icons */
  --iarsa-gold: #d4a017;   /* founder elements */
  --iarsa-bg:   #030303;   /* page background */
}
```

In components, use Tailwind arbitrary values: `bg-[#006fe6]` or `text-[var(--iarsa-teal)]`.

**Dark surfaces:**
- `#030303` — page background
- `#0d0d0d` — nav, cards
- `#141414` — elevated cards, inputs

---

## GitHub Pages Deployment

```
push to main
  → GitHub Actions (.github/workflows/deploy.yml)
  → npm ci && npm run build
  → uploads ./out/
  → live at https://<username>.github.io/iarsa-new
```

**Why the basePath logic:**
```ts
const isProd = process.env.NODE_ENV === "production";
basePath: isProd ? "/iarsa-new" : ""
```
GitHub Pages serves the site at `/iarsa-new` (a subpath), but local dev runs at `/`. The `isProd` flag switches between the two so both work without config changes.

**`.nojekyll`** — empty file in `public/`. Prevents GitHub Pages from running Jekyll, which would block the `_next/` asset directory.

---

## Adding New Content

**New program:** add an object to `src/data/programs.ts` — appears on `/programs` automatically.

**New team member:** add to `src/data/team.ts` — appears in Team section.

**New FAQ:** add to `src/data/faq.ts` — appears in accordion.

**Change phone/address/WhatsApp:** edit `src/data/site.ts` → updates everywhere (nav, footer, contact page, WhatsApp URLs).

---

## Key Files Reference

| File | Role |
|---|---|
| `src/data/site.ts` | Single source of truth for academy info |
| `src/app/globals.css` | CSS tokens, marquee keyframes, base styles |
| `src/app/layout.tsx` | Root layout with Nav/Footer |
| `src/app/page.tsx` | Landing page composition |
| `next.config.ts` | Static export + GitHub Pages basePath |
| `.github/workflows/deploy.yml` | CI/CD pipeline |
| `public/.nojekyll` | Prevents Jekyll on GitHub Pages |
