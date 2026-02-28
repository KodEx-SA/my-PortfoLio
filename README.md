# 🧑‍💻 Ashley K Motsie — Developer Portfolio

A modern, AI-powered personal portfolio built with **React 19**, **Tailwind CSS v4**, and **Framer Motion**. Features a cyberpunk-inspired green/dark aesthetic, smooth scroll animations, an embedded AI chatbot assistant, and a fully functional contact form.

**Live Site**
- 🌐 [chatdevhub.netlify.app](https://chatdevhub.netlify.app)

---

## 📋 Table of Contents

- [Features](#-features)
- [Tech Stack](#-tech-stack)
- [Project Structure](#-project-structure)
- [Pages & Sections](#-pages--sections)
- [Components](#-components)
- [UI Library](#-ui-library)
- [Getting Started](#-getting-started)
- [Environment Variables](#-environment-variables)
- [Available Scripts](#-available-scripts)
- [Deployment](#-deployment)
- [Known Issues & Fixes](#-known-issues--fixes)
- [Contributing](#-contributing)

---

## ✨ Features

- **AI Chatbot (Smith)** — Floating assistant powered by Groq API + LLaMA 3.3 70B, with quick actions, message timestamps, typing indicator, and clear-chat functionality
- **Animated Hero Section** — Neural network canvas background, data stream effect, matrix-style characters, scan line animations, and a live syntax-highlighted code window
- **Scroll-Stacked Projects** — Sticky scroll cards with Framer Motion scale transforms using Lenis smooth scroll
- **Interactive Skills Globe** — 3D rotating icon cloud displaying all technologies
- **Contact Form** — Validated form submission via Web3Forms API with real-time error feedback
- **Responsive Design** — Mobile-first layout with a floating centered desktop nav and collapsible mobile menu
- **SEO Ready** — Full Open Graph and Twitter Card meta tags in `index.html`
- **Global Animations** — Shared CSS keyframe library in `index.css` for consistent motion across all pages

---

## 🛠 Tech Stack

### Core
| Technology | Version | Purpose |
|---|---|---|
| React | 19.2 | UI framework |
| React DOM | 19.2 | DOM rendering |
| React Router DOM | 7.12 | Client-side routing |
| Vite | 7.3 | Build tool & dev server |

### Styling
| Technology | Version | Purpose |
|---|---|---|
| Tailwind CSS | 4.1 | Utility-first styling |
| @tailwindcss/vite | 4.1 | Vite plugin for Tailwind |
| tailwind-merge | 3.4 | Conditional class merging |
| tailwindcss-animate | 1.0 | Animation utilities |

### Animation & Motion
| Technology | Version | Purpose |
|---|---|---|
| Framer Motion | 12.27 | Page & component animations |
| Lenis | 1.3 | Smooth scroll library |

### UI Components & Icons
| Technology | Version | Purpose |
|---|---|---|
| Lucide React | 0.562 | Icon library (primary) |
| React Icons | 5.5 | Extended icon set (FA, SI brands) |
| react-icon-cloud | 4.1 | 3D interactive icon cloud |
| Radix UI Slot | 1.2 | Headless UI primitives |
| Radix UI Tooltip | 1.2 | Accessible tooltips |
| class-variance-authority | 0.7 | Variant-based component styles |
| clsx | 2.1 | Conditional class utility |

### Developer Experience
| Technology | Version | Purpose |
|---|---|---|
| ESLint | 9.39 | Code linting |
| Prism.js | 1.30 | Syntax highlighting in Hero |
| prop-types | 15.8 | Runtime prop validation |

### External APIs
| Service | Purpose |
|---|---|
| [Groq API](https://groq.com) | Powers Smith AI chatbot (LLaMA 3.3 70B) |
| [Web3Forms](https://web3forms.com) | Contact form email delivery |

---

## 📁 Project Structure

```
my-PortfoLio/
├── public/                         # Static assets served at root
├── src/
│   ├── assets/
│   │   ├── css/
│   │   │   ├── index.css           # Global styles + shared keyframes
│   │   │   ├── Header.css          # Header-specific styles
│   │   │   └── tomorrow.css        # Prism.js syntax theme
│   │   ├── img/                    # Project screenshots & profile photo
│   │   └── images/
│   │       └── logo_images/        # Logo + favicon package
│   │
│   ├── components/
│   │   ├── AIChatbot.jsx           # Smith AI assistant (floating chatbot)
│   │   ├── AnimatedGrid.jsx        # Animated background grid
│   │   ├── DataStream.jsx          # Shared data stream background effect
│   │   ├── enhanced-portfolio-card.jsx  # Reusable project card variant
│   │   ├── globe.jsx               # Icon cloud wrapper
│   │   └── ui/                     # shadcn-style primitive components
│   │       ├── badge.jsx
│   │       ├── button.jsx
│   │       ├── card.jsx
│   │       ├── cool-mode.jsx
│   │       ├── EducationLoader.jsx
│   │       ├── evervault-card.jsx
│   │       ├── flip-words.jsx
│   │       ├── icon-cloud.jsx
│   │       ├── meteors.jsx
│   │       ├── sparkles-text.jsx
│   │       └── tooltip.jsx
│   │
│   ├── lib/
│   │   └── utils.js                # Tailwind class merge helper (cn)
│   │
│   ├── pages/
│   │   ├── Hero/Hero.jsx           # Landing section with code window
│   │   ├── About/About.jsx         # Bio, photo, stats
│   │   ├── Skills/Skills.jsx       # Icon cloud + skill category cards
│   │   ├── Experience/Experience.jsx  # Work history cards
│   │   ├── Education/Education.jsx    # Education timeline
│   │   ├── Projects/Projects.jsx   # Scroll-stacked project cards
│   │   ├── Contact/Contact.jsx     # Contact form + info cards
│   │   ├── Header/Header.jsx       # Fixed nav (desktop + mobile)
│   │   └── Footer/Footer.jsx       # Footer with links + status
│   │
│   ├── App.jsx                     # Root component + route definitions
│   └── main.jsx                    # React entry point + BrowserRouter
│
├── index.html                      # HTML shell + SEO meta tags
├── vite.config.js                  # Vite config with path aliases
├── tailwind.config.js              # Tailwind content paths + safelist
├── eslint.config.js                # ESLint flat config
├── jsconfig.json                   # Path alias support (@/)
├── components.json                 # shadcn/ui configuration
└── package.json
```

---

## 📄 Pages & Sections

### `/` — Hero
The landing section. Features:
- Neural network animated canvas background
- Matrix-style data stream characters
- Horizontal scan line effect
- Sparkles text on "Hello"
- Flip-words role badge cycling through titles
- Terminal-style typing animation on the welcome badge
- Live syntax-highlighted JavaScript code window (Prism.js)
- Three CTAs: **View Projects**, **GitHub**, **Get Resume**
- Floating decorative badges ("Chatbot Crafter", "Clean Code Practitioner", "Innovator")

### `/about` — About
- Profile photo with animated gradient border
- Bio paragraphs
- Blockquote section with logo
- Stats grid: Years Experience · Projects Built · Passion Driven
- Floating Developer / Learner badges

### `/skills` — Skills & Technologies
- Interactive 3D icon cloud (react-icon-cloud)
- Six skill category cards: Frontend, Backend, UI/UX, Cloud & DevOps, Tools, Creative
- Each skill badge has a branded icon with the technology's official color

### `/experience` — Professional Journey
- Three experience cards in a responsive grid
- Animated gradient border on hover
- Circuit line SVG background decoration
- Floating particle elements
- "Open to new opportunities" CTA badge

### `/education` — Education
- Education timeline cards
- Hover states with skill tags
- Achievement lists per qualification

### `/projects` — Featured Projects
- Scroll-stacked sticky cards using Framer Motion `useScroll` + `useTransform`
- Lenis smooth scroll wrapping the entire section
- Each card: project image, title, description, tech tags, GitHub link, Live link
- Fallback placeholder with animated particles for projects without screenshots

**Projects listed:**
1. Generative AI Chatbot
2. Ubizo iMarket
3. Temperature Converter
4. Isong Cafe
5. Gauteng Rentals Directory
6. TMA Modelling Agency
7. Sasbo AI Symposium

### `/contact` — Get in Touch
- Email and location info cards
- "Quick Response" status card with pulsing online indicator
- Validated contact form (name, email, subject, message)
- Submissions handled by Web3Forms
- Field-level error messages with focus indicators
- Success/failure status feedback

---

## 🧩 Components

### `AIChatbot.jsx`
The flagship interactive feature. A floating chatbot powered by Groq's LLaMA 3.3 70B model.

**Features:**
- Floating launcher button with online indicator
- Full open / minimized / closed states — all transitions animated
- Smith avatar on every assistant message bubble
- Three-dot bouncing typing indicator
- Message timestamps (HH:MM)
- Quick action buttons (Projects, Skills, Experience, Contact)
- Clear chat with confirmation dialog
- Character counter on input (300 char limit)
- Resume download shortcut
- Contact navigation via React Router (no full-page reload)
- `onKeyDown` for Enter-to-send (replaces deprecated `onKeyPress`)
- Mobile backdrop overlay when open

**State:**
```
isOpen         — whether the widget is visible
isMinimized    — whether the widget is collapsed to a bar
messages       — conversation history array
input          — current input field value
isLoading      — API call in progress
showClearConfirm — confirmation dialog visibility
```

### `DataStream.jsx`
Shared reusable background decoration component. Renders falling (or rising) streams of binary + Japanese characters for the cyberpunk aesthetic.

```jsx
import DataStream from "@/components/DataStream";

<DataStream count={5} opacity="opacity-5" direction="down" />
```

| Prop | Type | Default | Description |
|---|---|---|---|
| `count` | number | 5 | Number of streams |
| `opacity` | string | `"opacity-5"` | Tailwind opacity class |
| `direction` | `"down"` \| `"up"` | `"down"` | Stream travel direction |
| `fixed` | boolean | false | Use `fixed` vs `absolute` positioning |

### `Header.jsx`
Fixed navigation bar with two layouts:
- **Desktop:** Floating centered pill nav with active state indicators and glitch hover effects
- **Mobile:** Full-width bar with hamburger menu and animated dropdown

Active route detection uses `useLocation()` from React Router.

### `Footer.jsx`
Four-column layout: About blurb · Quick links · Social links · Get in Touch CTA. Includes animated circuit path SVGs, a divider scan line, and an "END_OF_TRANSMISSION" status indicator.

---

## 🎨 UI Library

Located in `src/components/ui/`, these are shadcn-style primitive components configured via `components.json`.

| Component | Description |
|---|---|
| `badge.jsx` | Pill-style label with variant support |
| `button.jsx` | Button with CVA variants |
| `card.jsx` | Card container + CardContent |
| `tooltip.jsx` | Radix UI tooltip wrapper |
| `flip-words.jsx` | Animated word cycling component |
| `sparkles-text.jsx` | Text with sparkle particle overlay |
| `meteors.jsx` | Animated meteor shower effect |
| `icon-cloud.jsx` | 3D rotating icon cloud wrapper |
| `evervault-card.jsx` | Hover-reveal card effect |
| `cool-mode.jsx` | Particle burst on click |
| `EducationLoader.jsx` | Loading state for Education section |

---

## 🚀 Getting Started

### Prerequisites
- Node.js **18+**
- npm or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/KodEx-SA/my-PortfoLio.git
cd my-PortfoLio

# Install dependencies
npm install
```

### Development

```bash
npm run dev
```

The dev server starts at `http://localhost:5173` with hot module replacement.

### Build

```bash
npm run build
```

Output goes to `dist/`. Preview the production build with:

```bash
npm run preview
```

---

## 🔐 Environment Variables

Create a `.env` file in the project root. **Never commit this file.**

```env
# Groq API key — powers the Smith AI chatbot
# Get yours at: https://console.groq.com
VITE_GROQ_API_KEY=your_groq_api_key_here

# Web3Forms access key — handles contact form submissions
# Get yours at: https://web3forms.com
VITE_WEB3FORMS_KEY=your_web3forms_key_here
```

> **Note:** All Vite environment variables must be prefixed with `VITE_` to be exposed to the client bundle.

### Getting API Keys

**Groq API**
1. Sign up at [console.groq.com](https://console.groq.com)
2. Go to API Keys → Create API Key
3. Copy the key into `VITE_GROQ_API_KEY`

**Web3Forms**
1. Sign up at [web3forms.com](https://web3forms.com)
2. Create an Access Key for your email address
3. Copy the key into `VITE_WEB3FORMS_KEY`

---

## 📜 Available Scripts

| Script | Command | Description |
|---|---|---|
| Dev server | `npm run dev` | Start local dev server with HMR |
| Build | `npm run build` | Production build to `dist/` |
| Preview | `npm run preview` | Serve the production build locally |
| Lint | `npm run lint` | Run ESLint across all source files |

---

## 🌍 Deployment

### Netlify

1. Connect your GitHub repo in the Netlify dashboard
2. Set build settings:
   - **Build command:** `npm run build`
   - **Publish directory:** `dist`
3. Add environment variables under **Site Settings → Environment Variables**
4. Enable automatic deploys from the `main` branch

> **SPA Routing:** Add a `_redirects` file to your `public/` folder so React Router works on Netlify:
> ```
> /*  /index.html  200
> ```

### Vercel

1. Import the GitHub repo in the Vercel dashboard
2. Framework preset will auto-detect **Vite**
3. Add environment variables under **Project Settings → Environment Variables**
4. Deploy — Vercel handles SPA routing automatically

---

## 🐛 Known Issues & Fixes

A log of bugs that were found and resolved during development.

### Contact Button → 404 (Fixed)
**Problem:** The Contact button inside the AI chatbot used `window.location.href = '/contact'`, causing a full browser navigation. On Netlify SPA deployments this resulted in a 404.
**Fix:** Replaced with `useNavigate('/contact')` from React Router for client-side navigation.

### Minimize/Maximize Not Restoring (Fixed)
**Problem:** The minimize button was hidden on mobile (`hidden sm:block`), making the chat impossible to restore on small screens. The Framer Motion animation also conflicted with CSS sizing on restore.
**Fix:** Removed the `hidden sm:block` restriction. Added `layout` prop to the motion container and cleaned up the sizing logic.

### CSS Arrow Functions in `@keyframes` (Fixed)
**Problem:** The `@keyframes particle` animation in `Contact.jsx` used `${() => Math.random()}` inside a CSS template literal. JavaScript functions serialise as the string `"() => ..."`, so the animation values were invalid.
**Fix:** Replaced with fixed pixel values.

### Hero CTA Linking Off-Site (Fixed)
**Problem:** The primary "Learn More" CTA linked to `https://github.com/KodEx-SA` instead of an internal route, breaking expected navigation flow.
**Fix:** Changed to `/projects` (internal). GitHub is now a dedicated second CTA button.

### Resume URL With Spaces (Fixed)
**Problem:** The resume `href` contained spaces (`/Ashley Motsie's Resume_...`), which break URL parsing in some browsers.
**Fix:** Updated to the correct encoded path `/Ashley's_resume.pdf`.

### Deprecated `onKeyPress` (Fixed)
**Problem:** React 17+ deprecates `onKeyPress`. Some browsers began showing console warnings.
**Fix:** Replaced with `onKeyDown` throughout the chatbot input.

### Wrong Experience Dates in Chatbot Context (Fixed)
**Problem:** `PORTFOLIO_CONTEXT` in `AIChatbot.jsx` listed experience start dates as 2025 instead of the correct 2024.
**Fix:** Updated to match the dates in `Experience.jsx`.

### Duplicate Favicon Tag (Fixed)
**Problem:** `index.html` had two `<link>` tags pointing to favicons — one correct, one pointing to a non-existent path.
**Fix:** Removed the duplicate.

### `package.json` Name (Fixed)
**Problem:** Project name was `"react"`, which can cause subtle conflicts with npm's module resolution.
**Fix:** Renamed to `"ashley-motsie-portfolio"`.

---

## 🤝 Contributing

This is a personal portfolio project and is not open for general contributions. However, if you spot a bug or have a suggestion, feel free to open an issue on the [GitHub repository](https://github.com/KodEx-SA/my-PortfoLio).

---

## 📄 License

This project is **not open source**. All design, code, and content are the intellectual property of Ashley K Motsie. You may not copy, redistribute, or use this project as a template without explicit permission.

---

<div align="center">
  <p>Built with ☕ and <code>console.log</code> debugging by Ashley K Motsie</p>
  <p>
    <a href="https://github.com/KodEx-SA">GitHub</a> ·
    <a href="https://www.linkedin.com/in/ashley-k-motsie-718686263/">LinkedIn</a> ·
    <a href="https://chatdevhub.netlify.app">Portfolio</a>
  </p>
</div>