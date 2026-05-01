# IARSA Website Redesign — Design Spec

**Goal:** Port the existing `index-classic.html` IARSA skating academy site into a modern Next.js app with dark theme, rich animations, and data-driven components — deployed to GitHub Pages.

---

## Architecture

- **Framework:** Next.js (App Router) with static export (`output: "export"`)
- **Styling:** Tailwind CSS v4
- **Animation:** framer-motion v12 (scroll-triggered, stagger, CountUp)
- **Icons:** lucide-react
- **Deployment:** GitHub Pages at `/iarsa-new` via GitHub Actions

## Page Structure (Hybrid)

| Route | Content |
|---|---|
| `/` | Landing page — 9 sections (see below) |
| `/programs` | Programs grid + Gallery |
| `/contact` | Contact form + map |

## Color Palette

| Token | Value | Usage |
|---|---|---|
| `--iarsa-blue` | `#006fe6` | Primary CTAs, badges |
| `--iarsa-teal` | `#00b4a6` | Accents, icons, highlights |
| `--iarsa-gold` | `#d4a017` | Founder quote, role labels |
| `--iarsa-bg` | `#030303` | Page background |
| `--iarsa-surface` | `#0d0d0d` | Card / nav surface |
| `--iarsa-surface-2` | `#141414` | Elevated card |
| `--iarsa-border` | `rgba(255,255,255,0.08)` | Borders |

## Landing Page Sections (in order)

1. **Hero** — ElegantShapes, staggered fade-up, badge, h1, 2 CTAs, 3-stat strip
2. **CredibilityStrip** — CSS marquee (no JS), credential badges
3. **About** — Founder story, split layout, gold quote card
4. **Values** — 3 cards: Safety / Excellence / Community
5. **Team** — 3 coaches with role badges
6. **Stats** — 4 animated CountUp counters
7. **Testimonials** — 3 quote cards with 5-star rating
8. **FAQ** — Accordion with AnimatePresence height animation
9. **EnrolmentCta** — WhatsApp pre-fill CTA

## Data Architecture

All content lives in `src/data/` TypeScript files — zero hardcoding in components:

- `site.ts` — Academy constants (SITE object)
- `programs.ts` — 5 programs with typed interface
- `team.ts` — 3 TeamMember objects
- `testimonials.ts` — 3 Testimonial objects
- `faq.ts` — 6 FaqItem objects
- `stats.ts` — 4 Stat objects

## Animation System

- **`AnimatedSection`** — scroll-triggered wrapper, `useInView({once:true, amount:0.15})`, direction prop (up/left/right)
- **`RevealText`** — word-by-word stagger, 0.08s per word
- **`CountUp`** — cubic ease-out number counter, `useInView` trigger
- **ElegantShapes** — floating blobs with `animate:{y:[0,15,0]}` 12s loop
- **CSS marquee** — `@keyframes scrollL`, `.marquee-track` (28s linear infinite), pause on hover
- **Nav underline** — `motion.span layoutId="nav-underline"` shared layout
- **FAQ accordion** — `AnimatePresence initial={false}`, `motion.div` height 0→auto

## Contact Strategy

No backend. Contact form builds a `wa.me/${SITE.whatsapp}?text=...` URL from form fields and opens it in a new tab. No server-side code required.

## GitHub Pages Deployment

- `next.config.ts`: `output:"export"`, `basePath:"/iarsa-new"`, `assetPrefix:"/iarsa-new"` (prod only)
- `public/.nojekyll` — prevents Jekyll from blocking `_next/` assets
- `.github/workflows/deploy.yml` — triggers on push to `main`, builds and deploys `./out`

## File Structure

```
src/
  app/
    layout.tsx          — AnnouncementBar + Nav + Footer wrapper
    page.tsx            — Landing: all 9 sections
    globals.css         — CSS tokens + marquee keyframes
    programs/page.tsx   — Programs + Gallery
    contact/page.tsx    — Contact section
  components/
    layout/
      AnnouncementBar.tsx
      Nav.tsx
      Footer.tsx
    sections/
      Hero.tsx
      CredibilityStrip.tsx
      About.tsx
      Values.tsx
      Team.tsx
      Stats.tsx
      Testimonials.tsx
      Faq.tsx
      EnrolmentCta.tsx
      Programs.tsx
      Gallery.tsx
      Contact.tsx
    ui/
      AnimatedSection.tsx
      RevealText.tsx
      CountUp.tsx
      shape-landing-hero.tsx   — ElegantShape only
  data/
    site.ts
    programs.ts
    team.ts
    testimonials.ts
    faq.ts
    stats.ts
public/
  .nojekyll
.github/workflows/deploy.yml
next.config.ts
```
