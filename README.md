# Emmanuel Adegbaju — Portfolio

Next.js 16 (App Router, Turbopack) + Tailwind CSS v4. Single-page portfolio:
Hero → About → Services → Featured Work → Experience → Skills → Teaching →
Testimonials → Start a Project (form) → Contact.

Content follows the Upwork profile rebuild (Sep 2026): n8n AI automation
and AI agents first, then invoice/document extraction and Odoo.

Live at https://dynamotech.vercel.app (Vercel project `dynamotech`, which
deploys every push to `main` of this repo).

## Run locally

```bash
npm install
cp .env.local.example .env.local   # then add your real Resend key
npm run dev
```

Open http://localhost:3000.

## Contact form (Resend)

The "Start a project" form emails submissions to
**dynamohtech24@gmail.com** through [Resend](https://resend.com).

| Variable | Required | What it does |
| --- | --- | --- |
| `RESEND_API_KEY` | Yes | Your key from resend.com/api-keys |
| `CONTACT_TO_EMAIL` | No | Where submissions go. Default `dynamohtech24@gmail.com` |
| `CONTACT_FROM_EMAIL` | No | Sender. Default `Portfolio site <onboarding@resend.dev>` |

**The one rule that trips everyone up:** while the form sends from
`onboarding@resend.dev` (the default), Resend will only deliver to the
email address that owns your Resend account. Every other recipient is
rejected with a 403. So either:

- sign in to Resend with (or change the account email to)
  `dynamohtech24@gmail.com`, or
- set `CONTACT_TO_EMAIL` to the email your Resend account uses, or
- verify a domain in Resend (Domains → Add domain, add the DNS records),
  then set `CONTACT_FROM_EMAIL` to an address on it, e.g.
  `Portfolio site <hello@yourdomain.com>`. This also makes the emails less
  likely to land in spam.

### Test it in one command

```bash
npm run test:email
```

This sends one email with the same settings as the form and prints
exactly what Resend replies, including the reason if it's rejected.

### If submissions still don't arrive

1. Submit the form on the live site. If you now see "Something went wrong
   sending this", Resend rejected it: open Vercel → your project → Logs and
   look for lines starting with `[contact form]`; they include Resend's
   error and the fix.
2. If the form says "Sent" but nothing arrives, check the spam folder and
   the Emails page in the Resend dashboard (it shows delivered, bounced or
   complained for every send).
3. After adding or changing a variable on Vercel, redeploy. Variables only
   apply to deployments made after you save them.

The form includes a hidden honeypot field to filter basic bot spam and
validates required fields server-side before sending anything.

## Deploy

The Vercel project `dynamotech` is connected to this repo: every push to
`main` deploys to https://dynamotech.vercel.app. Environment variables
live in that project under Settings → Environment Variables; redeploy after
changing them.

## Before you make it public: checklist

- [ ] **RESEND_API_KEY** on Vercel, then run the form once yourself (see
      "Contact form" above).
- [ ] **Site URL**: `app/layout.js` uses `https://dynamotech.vercel.app`.
      Update it if you move to a custom domain.
- [ ] **"10,000+ invoices a month" and "2,000+ vendors"**: in
      `components/TerminalCard.js`, `components/FeaturedWork.js` and
      `components/Experience.js`, marked as in development. Update the
      tense once the pipeline is live.
- [ ] **Confirm with ARTEE** what you may reference publicly about the
      invoice-reconciliation platform and the price checker.
- [ ] **Travel website case study**: written without the client's name or
      a link. Add the live link in `components/FeaturedWork.js` once the
      client is happy to be shown.
- [ ] **Teaching**: add the tech institute's name and dates in
      `components/Teaching.js` if you want them shown.

## Design notes

Palette and type are chosen to match the actual subject matter —
reconciliation and ledgers — rather than a generic SaaS template:
- **Colors**: warm paper background, deep navy ink, a single emerald
  accent standing in for "reconciled / balanced." Defined as CSS variables
  in `app/globals.css` (`@theme` block) — change them there and they
  propagate everywhere.
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

## Notes on the case studies

The invoice-reconciliation and price-checker write-ups credit ARTEE Group
("Built for ARTEE Group") without calling it a client engagement: it's
your employer, not a contractor relationship. The lead-qualification
agent and the Solana scanner are labeled "Own build".
