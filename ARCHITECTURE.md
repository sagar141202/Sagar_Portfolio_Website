# Architecture Deep Dive

## Overview
- **Next.js App Directory**: Uses `src/app/` for routing/layout
- **Component-based UI**: All sections modularized in `src/components/`
- **Static Assets**: Served from `public/`
- **Animations**: GSAP, Framer Motion, Three.js (if present)
- **Data**: Centralized in `src/constants/index.js`

## Entry Points
- `next.config.mjs`: Next.js config
- `src/app/layout.js`: Global layout
- `src/app/page.js`: Main page

## Data Flow
- Static data imported from constants
- Props passed to components
- Animations via utils
- Contact form via EmailJS

## Routing
- Next.js app router (no explicit App.js)
- Pages/components loaded via `src/app/page.js`

## Deployment
- Vercel recommended
- `.env.local` for secrets
