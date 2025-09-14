1. Folder Structure & Architecture
Tree View
Sagar_Portfolio/
├── .gitignore
├── eslint.config.mjs
├── jsconfig.json
├── next.config.mjs
├── package.json
├── postcss.config.mjs
├── README.md
├── public/
│   ├── [images, logos, assets...]
│   └── assets/
│       ├── [tech stack icons...]
├── src/
│   ├── app/
│   │   ├── favicon.ico
│   │   ├── globals.css
│   │   ├── layout.js
│   │   └── page.js
│   ├── assets/
│   ├── components/
│   │   ├── About.js
│   │   ├── Contact.js
│   │   ├── CustomCursor.js
│   │   ├── Experience.js
│   │   ├── Hero.js
│   │   ├── Loader.jsx
│   │   ├── Navigation.js
│   │   ├── Projects.js
│   │   ├── Skills.js
│   │   ├── Tech.jsx
│   │   └── canvas/
│   │       ├── Ball.jsx
│   │       └── BallGrid.jsx
│   ├── constants/
│   │   └── index.js
│   ├── scripts/
│   │   └── setup-emailjs.js
│   ├── styles/
│   │   └── globals.css
│   └── utils/
│       └── motion.js

Folder Purposes
public/: Static assets (images, logos, icons) served directly by Next.js.
public/assets/: Tech stack icons and images for use in UI.
src/app/: Next.js 13+ app directory. Contains global styles, layout, and main page entry.
src/assets/: Custom assets for the app (not public).
src/components/: All React components (UI sections, pages, widgets).
canvas/: 3D/animated components (e.g., Ball, BallGrid).
src/constants/: Centralized constants (data, config, etc.).
src/scripts/: Utility scripts (e.g., email setup).
src/styles/: CSS files (global styles).
src/utils/: Utility functions (e.g., animation helpers).

Entry Points
next.config.mjs: Next.js configuration.
src/app/layout.js: Global layout for all pages.
src/app/page.js: Main landing page.
package.json: Project metadata and scripts.
2. Component & File Documentation
Example Documentation (for all components)

Hero.js
Purpose: Displays the main hero section with intro and profile.
Props: None (or receives data via context/constants).
Returns: JSX for hero section, profile image, intro text.
Workflow: Loaded on the main page, sets the first impression.

About.js
Purpose: Shows personal background and bio.
Props: None.
Returns: JSX with bio, education, and experience summary.
Workflow: Part of main page, after Hero.

Projects.js
Purpose: Lists portfolio projects.
Props: None (or project data from constants).
Returns: JSX grid of project cards.
Workflow: Loaded on main page, uses images from public/.

Tech.jsx
Purpose: Displays tech stack icons.
Props: None (or tech list from constants).
Returns: JSX grid of tech icons.
Workflow: Used in Skills/About sections.

CustomCursor.js
Purpose: Implements a custom animated cursor.
Props: None.
Returns: JSX for cursor overlay.
Workflow: Global, overlays all pages.

Loader.jsx
Purpose: Shows loading animation.
Props: None.
Returns: JSX for loader.
Workflow: Shown during page/data load.

canvas/Ball.jsx
Purpose: Renders a 3D/animated ball (likely with Three.js).
Props: Ball data (color, position, etc.).
Returns: JSX/Canvas element.
Workflow: Used in BallGrid or animated sections.

constants/index.js
Purpose: Exports static data (projects, tech stack, etc.).
Props: N/A.
Returns: JS objects/arrays.
Workflow: Imported by components for data.

utils/motion.js
Purpose: Animation helpers (Framer Motion, GSAP).
Props: N/A.
Returns: Functions/objects for animation variants.
Workflow: Used by animated components.

3. Workflow Explanation
App Startup (npm run dev)
Next.js starts: Loads next.config.mjs, builds app.
Entry point: src/app/layout.js sets up global layout and styles.
Main page: src/app/page.js loads, imports main components (Hero, About, Projects, etc.).
Routing: Next.js app router handles navigation (no explicit App.js in app directory).
Component loading: Each section (Hero, About, Projects, etc.) is rendered in order.
Assets: Images/icons loaded from public/.
State/data flow: Static data from constants/index.js, animations from utils/motion.js.
Integrations: If present, WebSocket/API handled in components or hooks (not explicitly found in structure).

4. Technologies Used
Major Dependencies (from package.json)
next: React framework for SSR, routing, and deployment.
react: UI library for building components.
react-dom: React DOM rendering.
tailwindcss: Utility-first CSS framework for styling.
gsap: Animation library for advanced UI effects.
framer-motion: Animation library for React.
postcss: CSS processing.
eslint: Linting and code quality.
Other: (Check package.json for more, e.g., three.js, emailjs, etc.)
Why Used
Next.js: Routing, SSR, deployment (Vercel).
React: Component-based UI.
Tailwind: Fast, responsive styling.
GSAP/Framer Motion: Smooth, interactive animations.
Three.js: 3D graphics (if present).
EmailJS: Contact form integration (if present).

5. Code Flow
Main Logic Functions
Data fetch: Likely static, from constants/index.js.
Animations: Defined in utils/motion.js, used in components.
WebSocket/API: If present, handled in custom hooks or components (e.g., setup-emailjs.js for email).
Custom hooks: Not explicitly listed, but if present, would be in src/hooks/.

7. Deployment & Configuration
.env.local: Stores secrets (API keys, endpoints). Required for EmailJS, APIs, etc.
Local run:
npm install
npm run dev
Deployment:
Vercel (default for Next.js)
Push to GitHub, connect to Vercel, auto-deploy.
