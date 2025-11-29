# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Build & Development Commands

```bash
npm run dev      # Start dev server on http://localhost:3000
npm run build    # Production build
npm run preview  # Preview production build
```

### Local Development with Netlify Functions

```bash
npm install -g netlify-cli
netlify dev      # Runs frontend + serverless functions locally
```

No lint or test commands are currently configured.

## Netlify Deployment

This app is configured for Netlify deployment with serverless functions.

### Deploy Steps
1. Push repo to GitHub
2. Connect to Netlify (New site from Git)
3. Build settings are auto-detected from `netlify.toml`:
   - Build command: `npm run build`
   - Publish directory: `dist`
4. Add environment variable in Netlify dashboard:
   - **Key**: `GEMINI_API_KEY`
   - **Value**: Your Google AI Studio API key
5. Deploy

### Project Structure for Netlify
```
netlify/
└── functions/
    └── chat.js       # Gemini API proxy (keeps API key secure)
netlify.toml          # Netlify build configuration
```

## Architecture Overview

**Fit2Recover** is a React 19 SPA for a nonprofit recovery community organization. It uses Vite, TypeScript, and Tailwind CSS (via CDN).

### Routing & Entry Points
- Entry: `index.html` → `index.tsx` → `App.tsx`
- Uses HashRouter (React Router v7) for client-side routing
- All page components in `pages/` directory
- Layout wrapper (`components/Layout.tsx`) provides header, navigation, and footer

### Key Architecture Decisions
- **Serverless backend** - Gemini API calls proxied through `netlify/functions/chat.js`
- **No global state** - components use local useState and localStorage
- **CDN imports** - React, React Router, Lucide, and Tailwind loaded from CDN (see `index.html`)
- **Path alias**: `@/*` maps to project root

### Core Components
- `components/Layout.tsx` - App shell with responsive header/footer
- `components/ChatWidget.tsx` - Floating AI assistant using Gemini via Netlify function
- `components/HeroCanvas.tsx` - Animated particle network background (Canvas 2D)
- `components/ui/Button.tsx` - Reusable button with variants (primary, secondary, outline, ghost)

### Data Layer
- `constants.ts` - All static data (navigation, programs, locations, schedules, testimonials, team)
- `types.ts` - TypeScript interfaces
- `services/geminiService.ts` - Frontend service that calls `/.netlify/functions/chat`

### Styling System
Tailwind CSS with custom theme defined inline in `index.html`:
- Colors: `brand-red` (#E4002B), `brand-green` (#48B553), `brand-gold` (#D4A853), `brand-dark` (#0F0F0F)
- Fonts: Clash Display (display), Inter (sans), Playfair Display (serif)

## Current Limitations
- Contact and donation forms are UI-only (no backend submission)
- Shop and membership pages are placeholders
- No form validation beyond HTML5 required attributes
- Sobriety counter uses localStorage only (no sync/backup)
