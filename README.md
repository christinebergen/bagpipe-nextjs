# Celtic Coast Music — Next.js

Converted from Create React App to Next.js 14 (App Router).

## Setup Instructions

### 1. Copy your assets
Copy your entire `src/assets/` folder from the old CRA project into `src/assets/` in this project.

### 2. Install dependencies
```bash
npm install
```

### 3. Run the dev server
```bash
npm run dev
```
Open http://localhost:3000

### 4. Build for production
```bash
npm run build
npm run start
```

---

## What changed in the conversion

| CRA | Next.js |
|-----|---------|
| `react-router-dom` routing | Next.js file-based routing (`app/` directory) |
| `<BrowserRouter>`, `<Routes>`, `<Route>` | Folder-based `page.jsx` files |
| `import { Link } from 'react-router-dom'` | `import Link from 'next/link'` + `href=` |
| `useLocation().pathname` | `usePathname()` from `next/navigation` |
| `<img>` tags | `<Image>` from `next/image` |
| `src/index.js` + `src/App.js` | `src/app/layout.jsx` (root layout) |
| `ScrollToTop` using `useLocation` | `ScrollToTop` using `usePathname` |
| Components work anywhere | Interactive components need `"use client"` at top |
| `tailwind.config.js` content: `./src/**` | Updated to `./src/app/**` + `./src/components/**` |

## Project Structure

```
src/
  app/
    layout.jsx        ← replaces App.js (Header + Footer wrapper)
    globals.css       ← Tailwind imports
    page.jsx          ← / (Home)
    about/page.jsx    ← /about
    lessons/page.jsx  ← /lessons
    hire/page.jsx     ← /hire
    contact/page.jsx  ← /contact
  components/
    Header.jsx
    Footer.jsx
    Home.jsx
    About.jsx
    Lessons.jsx
    Hire.jsx
    Contact.jsx
    Discography.jsx
    Slideshow.jsx
    ScrollToTop.jsx
    Divider.jsx
  assets/             ← copy from your old project
```

## Deploying to Vercel
This is a drop-in replacement for Vercel. Just connect your new repo and it will detect Next.js automatically — no extra configuration needed.
