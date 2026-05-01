# IARSA Website Redesign — Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Port and redesign the IARSA skating academy site into Next.js with dark theme, framer-motion animations, data-driven components, and GitHub Pages deployment.

**Architecture:** App Router static export, Tailwind CSS v4, framer-motion v12, data in `src/data/`, all content typed.

**Tech Stack:** Next.js 16, React 19, TypeScript, Tailwind CSS v4, framer-motion v12, lucide-react

---

### Task 1: Project Setup & Global Styles

**Files:**
- Modify: `src/app/globals.css`
- Modify: `next.config.ts`
- Create: `public/.nojekyll`
- Create: `.github/workflows/deploy.yml`

**Status: COMPLETE** — All done. Static export configured, GitHub Actions deploying to Pages at `/iarsa-new`.

---

### Task 2: Data Layer

**Files:**
- Create: `src/data/site.ts`
- Create: `src/data/programs.ts`
- Create: `src/data/team.ts`
- Create: `src/data/testimonials.ts`
- Create: `src/data/faq.ts`
- Create: `src/data/stats.ts`

**Status: COMPLETE** — All data files created with typed interfaces.

---

### Task 3: Animation Primitives

**Files:**
- Create: `src/components/ui/AnimatedSection.tsx`
- Create: `src/components/ui/RevealText.tsx`
- Create: `src/components/ui/CountUp.tsx`
- Modify: `src/components/ui/shape-landing-hero.tsx`

**Status: COMPLETE** — All animation primitives implemented. ElegantShape updated with blue/teal gradients.

---

### Task 4: Layout Components

**Files:**
- Create: `src/components/layout/AnnouncementBar.tsx`
- Create: `src/components/layout/Nav.tsx`
- Create: `src/components/layout/Footer.tsx`
- Modify: `src/app/layout.tsx`

**Status: COMPLETE** — Nav with scroll shadow, active underline shared layout, mobile drawer. Footer with WhatsApp link.

---

### Task 5: Hero & CredibilityStrip

**Files:**
- Create: `src/components/sections/Hero.tsx`
- Create: `src/components/sections/CredibilityStrip.tsx`

**Status: COMPLETE** — Hero with 5 ElegantShapes, staggered content, 3-stat strip. CredibilityStrip uses CSS marquee (no JS).

---

### Task 6: About & Stats

**Files:**
- Create: `src/components/sections/About.tsx`
- Create: `src/components/sections/Stats.tsx`

**Status: COMPLETE** — About with gold quote card, founder avatar. Stats with CountUp counters.

---

### Task 7: Values & Team

**Files:**
- Create: `src/components/sections/Values.tsx`
- Create: `src/components/sections/Team.tsx`

**Status: COMPLETE** — Values with 3 icon cards and glow hover. Team with initials avatars and role badges.

---

### Task 8: Testimonials & FAQ

**Files:**
- Create: `src/components/sections/Testimonials.tsx`
- Create: `src/components/sections/Faq.tsx`

**Status: COMPLETE** — Testimonials with 5-star gold SVGs, equal-height cards. FAQ accordion with AnimatePresence height animation.

---

### Task 9: EnrolmentCta & Landing Page Assembly

**Files:**
- Create: `src/components/sections/EnrolmentCta.tsx`
- Modify: `src/app/page.tsx`

**Status: COMPLETE** — EnrolmentCta with WhatsApp pre-fill URL. Landing page assembles all 9 sections.

---

### Task 10: Programs, Gallery, Contact Pages

**Files:**
- Create: `src/components/sections/Programs.tsx`
- Create: `src/components/sections/Gallery.tsx`
- Create: `src/components/sections/Contact.tsx`
- Create: `src/app/programs/page.tsx`
- Create: `src/app/contact/page.tsx`

**Status: COMPLETE** — Programs with accent gradient bars, level badges, Check icons. Gallery with placeholder grid. Contact with WhatsApp form + map iframe.

---

## Deployment

**GitHub Pages:** `https://<username>.github.io/iarsa-new`

Push to `main` → GitHub Actions builds `npm run build` → uploads `./out` → deploys to Pages.

Steps completed:
- [x] `next.config.ts` static export configured
- [x] `public/.nojekyll` created
- [x] `.github/workflows/deploy.yml` created
- [x] Repo `iarsa-new` created on GitHub
- [x] GitHub Actions Pages permissions enabled
- [x] Code pushed to `main`
