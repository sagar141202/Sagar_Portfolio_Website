# Workflow Explanation

## App Startup
1. `npm run dev` starts Next.js server
2. Loads `next.config.mjs` for config
3. Entry: `src/app/layout.js` (global styles/layout)
4. Loads `src/app/page.js` (main page)
5. Renders components: Hero, About, Projects, etc.
6. Routing handled by Next.js app router
7. Assets loaded from `public/`
8. Data from `constants/index.js`
9. Animations via `utils/motion.js`
10. Contact form via EmailJS

## Data & State Flow
- Static data from constants
- Props to components
- Animations via utils
- Contact form uses EmailJS

## Integrations
- EmailJS for contact
- No WebSocket detected
