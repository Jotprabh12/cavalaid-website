# Cavalaid Website

Marketing website for **Cavalaid** — an academic intelligence platform for coaching institutes.

## Project Structure

```
website/
├── src/
│   ├── app/                    # Next.js App Router pages & routes
│   │   ├── layout.tsx          # Root layout (header + footer + metadata)
│   │   ├── page.tsx            # Home page
│   │   ├── about/page.tsx      # About / philosophy
│   │   ├── product/page.tsx    # Product overview + mockups
│   │   ├── pilot/page.tsx      # Pilot program details
│   │   ├── contact/page.tsx    # Pilot request form
│   │   ├── api/contact/route.ts  # Contact form API (Resend)
│   │   ├── sitemap.ts          # Dynamic sitemap
│   │   ├── not-found.tsx       # 404 page
│   │   ├── loading.tsx         # Loading state
│   │   └── error.tsx           # Error boundary
│   ├── components/
│   │   ├── layout/             # Header, Footer, Container
│   │   ├── sections/           # Page sections (Hero, Problem, etc.)
│   │   ├── demos/              # CSS-built dashboard mockups
│   │   └── ui/                 # Shared UI components (ScrollReveal)
│   └── lib/
│       └── utils.ts            # Shared utilities (cn, formatDate)
├── public/                     # Static assets
│   ├── robots.txt
│   └── vercel.svg
├── docs/                       # Project documentation
│   └── ARCHITECTURE.md
├── .env.example                # Environment variables template
├── next.config.ts
├── tsconfig.json
├── postcss.config.mjs
├── package.json
└── README.md
```

## Getting started

```bash
npm install
npm run dev
```

## Environment

```bash
cp .env.example .env.local
```

## Pages

- `/` — Home
- `/product` — Product overview with dashboard previews
- `/pilot` — Pilot program details
- `/about` — Vision & philosophy
- `/contact` — Request a pilot form
- `/sitemap.xml` — Dynamic sitemap
- `/404` — Not found page

## Build

```bash
npm run build
```

## Deploy

Deploy to [Vercel](https://vercel.com) and set `RESEND_API_KEY` and `RESEND_TO_EMAIL` as environment variables.
