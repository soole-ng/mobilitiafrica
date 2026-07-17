# Mobiliti Africa

The marketing website for **Mobiliti Africa**, the parent company behind [Soole](https://soole.ng) — an intercity mobility platform connecting passengers, drivers, and transport organizations across Nigeria.

Built with [Next.js](https://nextjs.org/) (App Router), React, TypeScript, Tailwind CSS, and Framer Motion.

## Getting Started

Install dependencies and run the dev server:

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view it.

## Scripts

| Command | Description |
| :--- | :--- |
| `npm run dev` | Start the local development server |
| `npm run build` | Create a production build |
| `npm run start` | Serve the production build |
| `npm run lint` | Run ESLint |

## Project Structure

```
app/
├── page.tsx              # Homepage: hero, sectors, product suite, ecosystem, partnership CTA
├── layout.tsx             # Root layout, fonts, metadata, theme init script
├── globals.css            # Design tokens (dark/light theme, colors, glass panel)
├── favicon.ico
├── contact/
│   └── page.tsx           # Contact page with lead form
└── components/
    ├── SiteHeader.tsx      # Shared nav header with theme toggle
    ├── SiteFooter.tsx      # Shared footer
    └── SooleLogo.tsx       # Animated route logo (theme-aware light/dark variants)
public/
└── images/                 # Hero video and logo artwork
```

## Features

- **Responsive single-page marketing site** covering Mobiliti Africa's operational verticals and the Soole product suite (Passenger, Driver, and Organization dashboard apps).
- **Dark/light theme toggle** persisted via `localStorage`, with a matching favicon and logo variant for each theme.
- **Contact page** with a lead-capture form (name, email, subject, message) that composes a `mailto:` submission.

## Notes

This repository contains the website only. Mobiliti Africa's broader roadmap (hardware telemetry, additional mobility verticals, etc.) is referenced in the site copy as forward-looking plans and is not part of this codebase.
