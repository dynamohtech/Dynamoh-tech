# Emmanuel Adegbaju — Portfolio

Next.js 16 (App Router, Turbopack) + Tailwind CSS v4. Single-page portfolio:
Hero → About → Services → Featured Work → Skills → Teaching → Testimonials →
Start a Project (form) → Contact.

## Run locally

```bash
npm install
cp .env.local.example .env.local   # then add your real Resend key
npm run dev
```

Open http://localhost:3000.

## Set up the contact form (Resend)

The "Start a project" form emails submissions straight to
**dynamohtech24@gmail.com** using [Resend](https://resend.com) — a
transactional email API with a permanent free tier (3,000 emails/month,
100/day), plenty for a portfolio site.

1. Sign up at resend.com (free, no card required) — use the same Gmail
   address submissions should land in.
2. Create an API key at resend.com/api-keys.
3. Locally: copy `.env.local.example` to `.env.local` and paste the key in.
4. On Vercel: Project → Settings → Environment Variables → add
   `RESEND_API_KEY` with the same value → redeploy.

No domain verification needed — the form sends from Resend's shared test
domain (`onboarding@resend.dev`), which works fine because every
submission is delivered to your own inbox. You can switch to a
`you@yourdomain.com` sender later once you have a verified domain; it's a
cosmetic change (`app/actions.js`), not a functional one.

The form includes a hidden honeypot field to filter out basic bot spam
and validates required fields server-side before sending anything.

## Deploy to Vercel

**Easiest — Vercel CLI:**
```bash
npm install -g vercel
vercel
```
Follow the prompts, then add `RESEND_API_KEY` in the Vercel dashboard
(Settings → Environment Variables) and redeploy — env vars set after the
first deploy need a redeploy to take effect.

**Or — GitHub + Vercel dashboard:**
1. Push this folder to a new GitHub repo.
2. Go to vercel.com → New Project → Import the repo.
3. Add the `RESEND_API_KEY` environment variable during import (or after,
   in Settings) → Deploy.

## Before you make it public — checklist

- [ ] **RESEND_API_KEY** — the form silently shows an error until this is
      set (see above). Test it once live by submitting the form yourself.
- [ ] **LinkedIn URL** — `components/Contact.js` has a placeholder
      (`REPLACE-WITH-YOUR-HANDLE`) where your real profile link goes.
- [ ] **Site URL** — `app/layout.js` has `siteUrl` set to a placeholder
      `.vercel.app` address. Update it once you know your real URL.
- [ ] **OG image** — add a 1200×630 `public/og-image.png` (see
      `public/README.txt`). Without it, LinkedIn/Twitter link previews will
      show a broken image instead of a banner.
- [ ] **"10,000+ invoices/month"** — appears in `components/Hero.js` (the
      ledger card) and `components/FeaturedWork.js` (first case study),
      both marked as in-development. Update the tense once that pipeline
      is actually live.
- [ ] **Confirm with ARTEE** what you're allowed to reference publicly
      about the invoice-reconciliation platform and the price-checker —
      not a code change, but worth doing before this goes out widely. The
      copy is written at a "problem + architecture" level with no
      proprietary specifics, but that sign-off is yours to get.
- [ ] **More testimonials (optional)** — `components/Testimonials.js` is
      now a real carousel with 5 actual Fiverr reviews. Send more
      screenshots any time and I'll add them to the array.
- [ ] **Profile photo (optional)** — the site currently uses an "EA"
      initials mark instead of a photo (a deliberate, clean look). Send a
      headshot if you'd rather I wire in a real photo.

## Design notes

Palette and type are chosen to match the actual subject matter —
reconciliation and ledgers — rendered in a dark, technical key rather
than a generic light SaaS template:
- **Colors**: deep navy-black background with a soft green radial glow
  behind the hero, a vivid emerald accent standing in for "reconciled /
  balanced," and a two-tone emerald-to-cyan gradient on the hero's key
  phrase and behind the terminal card for depth. Defined as CSS variables
  in `app/globals.css` (`@theme` block) — change them there and they
  propagate everywhere. The Contact and Footer sections intentionally
  flip to a light background as the page's one bright closing moment.
- **Type**: Space Grotesk for headings, IBM Plex Sans for body text, IBM
  Plex Mono for the numeric "ledger" callouts. Loaded via `next/font/google`
  in `app/layout.js` — this needs internet access to Google Fonts at build
  time, which Vercel has by default.
- **The pipeline diagram** in the invoice-reconciliation case study
  (`components/PipelineDiagram.js`) is a redacted, simplified architecture
  view — intentionally generic enough to not expose anything proprietary.
- **The project form** (`components/ProjectForm.js` + `app/actions.js`)
  uses a Next.js Server Action rather than a client-side fetch call — it
  works even before JavaScript finishes loading, and the email-sending
  code never ships to the browser.

## Notes on the ARTEE-affiliated case studies

The invoice-reconciliation and price-checker write-ups credit ARTEE Group
by name ("Built for ARTEE Group") without calling it a client engagement —
it's your employer, not a contractor relationship, and that's the framing
that stays consistent with your LinkedIn experience section. Dynamo Token
and Sol-deep Search are labeled as personal projects.
