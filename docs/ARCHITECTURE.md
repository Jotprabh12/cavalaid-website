# Cavalaid Website — Architecture

## Overview

Marketing website for the Cavalaid academic intelligence platform. B2B, aimed at coaching institute founders and academic heads.

## Tech stack

| Layer | Technology |
|---|---|
| Framework | Next.js (App Router) |
| Runtime | Node.js |
| Styling | Tailwind CSS v4 |
| Fonts | Inter (next/font) |
| Email | Resend (contact form) |
| Class utilities | clsx + tailwind-merge |
| Deployment | Vercel |

## Folder structure

```
website/
├── src/
│   ├── app/                  # Next.js App Router
│   │   ├── layout.tsx        # Root layout + metadata
│   │   ├── page.tsx          # Home
│   │   ├── not-found.tsx     # 404 page
│   │   ├── loading.tsx       # Loading state
│   │   ├── error.tsx         # Error boundary
│   │   ├── sitemap.ts        # Dynamic sitemap
│   │   ├── about/
│   │   │   └── page.tsx
│   │   ├── product/
│   │   │   └── page.tsx
│   │   ├── pilot/
│   │   │   └── page.tsx
│   │   ├── contact/
│   │   │   └── page.tsx
│   │   └── api/
│   │       └── contact/
│   │           └── route.ts  # Resend API
│   ├── components/
│   │   ├── layout/
│   │   │   ├── header.tsx    # Sticky nav, mobile menu
│   │   │   ├── footer.tsx    # Site footer
│   │   │   └── container.tsx # Centered content wrapper
│   │   ├── sections/         # Page sections
│   │   │   ├── hero.tsx
│   │   │   ├── problem.tsx
│   │   │   ├── how-it-works.tsx
│   │   │   ├── features.tsx
│   │   │   ├── mockups.tsx   # Browser-framed dashboard previews
│   │   │   ├── cta.tsx
│   │   │   └── faq.tsx
│   │   ├── demos/            # CSS-built dashboard mockups
│   │   │   ├── dashboard-teacher.tsx
│   │   │   ├── dashboard-student.tsx
│   │   │   └── dashboard-mentor.tsx
│   │   └── ui/
│   │       └── scroll-reveal.tsx  # IntersectionObserver wrapper
│   └── lib/
│       └── utils.ts          # cn(), formatDate()
├── public/                   # Static assets (robots.txt, vercel.svg)
├── docs/                     # Project docs
├── .env.example              # Environment variables
├── next.config.ts
├── tsconfig.json
├── postcss.config.mjs
└── package.json
```

## Design tokens

Defined in `src/app/globals.css` via `@theme inline`:

- `navy` (#1e3a8a) — primary brand, navigation, buttons
- `navy-dark` (#172554) — hover state
- `navy-light` (#3b82f6) — accent
- `status-green` (#22c55e) — completed/positive
- `status-orange` (#f97316) — attention
- `status-red` (#ef4444) — critical
- `status-blue` (#3b82f6) — info

## App Router conventions

- **`layout.tsx`** — Root layout with `<html>`, `<body>`, `<Header />`, `<Footer />`
- **`page.tsx`** — Each page is a default export
- **`not-found.tsx`** — 404 page (automatic route)
- **`loading.tsx`** — Loading UI (automatic route)
- **`error.tsx`** — Error boundary (automatic route)
- **`sitemap.ts`** — Dynamic sitemap export
- **`api/`** — Route handlers (server-side)

## Contact form

The `/api/contact` route uses the `resend` package. Requires:
- `RESEND_API_KEY` — your Resend API key
- `RESEND_TO_EMAIL` — where pilot requests are delivered

If env vars are missing, the API returns a 500 error.

## Scroll-reveal pattern

All sections use the `ScrollReveal` component from `src/components/ui/scroll-reveal.tsx`. It wraps content in a `<div>` and adds a `.visible` class via IntersectionObserver when the element enters the viewport.

## Deployment

- Deploy to Vercel (connect GitHub repo or import folder)
- Set `RESEND_API_KEY` and `RESEND_TO_EMAIL` in Vercel environment variables
- Custom domain can be added later via a CNAME
- `robots.txt` and `sitemap.xml` are auto-generated

## Content sourcing

Copy and messaging are drawn from the project docs:
- `docs/Cavalaid_Context_Transfer.md`
- `docs/1.Vision & Philosophy.docx`
- `docs/9.GTM (Go-To-Market) & Sales Strategy.docx`
