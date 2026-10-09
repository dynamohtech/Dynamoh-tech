import PipelineDiagram from "./PipelineDiagram";
import CaseStudy from "./CaseStudy";

const alsoBuilt = [
  {
    name: "Telegram community bot",
    note: "in progress",
    body: "Members submit listings, an admin approves them inside Telegram, and approved posts publish to the channel automatically.",
  },
  {
    name: "E-commerce lead-sourcing pipeline",
    body: "Finds US and UK online stores with n8n and Serper, and stores the leads in Google Sheets and Supabase.",
  },
  {
    name: "Web3 presale and staking sites",
    body: "Presale and staking websites for token projects on BNB Smart Chain and Solana, including the ShibaZK presale.",
  },
];

export default function FeaturedWork() {
  return (
    <section id="work" className="container-page py-20 md:py-28 border-t border-line">
      <div className="grid md:grid-cols-[minmax(0,14rem)_1fr] gap-8 md:gap-16">
        <div>
          <h2 className="font-display font-semibold text-2xl text-ink md:sticky md:top-24">
            Featured work
          </h2>
        </div>

        <div className="min-w-0">
          <CaseStudy
            title="cra-kit: EU Cyber Resilience Act compliance toolkit"
            status="Open source · v0.1.0"
            stack="Python 3.11+ · zero dependencies · CycloneDX 1.6 · OSV.dev · CISA KEV · GitHub Actions"
            link="https://github.com/dynamohtech/cra-kit"
            body={
              <>
                The EU Cyber Resilience Act puts vulnerability reporting duties
                on anyone selling connected hardware or software in the EU from
                11 September 2026, with full obligations from 11 December 2027
                and fines up to €15M or 2.5% of global turnover. cra-kit is an
                open-source command-line tool that gets a product team started:
                it builds a CycloneDX SBOM from npm, Python, Rust and Go
                lockfiles, checks every component against OSV.dev and CISA's
                Known Exploited Vulnerabilities list (and can fail a CI build on
                them), works out whether the CRA applies and which conformity
                route the product needs, scores readiness against the 22 Annex I
                requirements, and drafts the 24-hour, 72-hour and final reports
                Article 14 requires. Tested on Linux, Windows and macOS, with a
                weekly check against live vulnerability data.
              </>
            }
          />

          <CaseStudy
            title="pqc-kit: post-quantum cryptography inventory scanner"
            status="Open source · v0.1.0"
            stack="Python 3.11+ · zero dependencies · CycloneDX 1.6 CBOM · X.509 / PEM / DER parsing"
            link="https://github.com/dynamohtech/pqc-kit"
            body={
              <>
                Governments have set dates for moving off cryptography that
                quantum computers will break: NIST's draft plan deprecates RSA-2048 after 2030,
                NSA's CNSA 2.0 applies to new national-security acquisitions from
                2027, and the US, UK and EU all target 2035. The first step is
                knowing where cryptography is used. pqc-kit scans source code
                (Python, Java, Kotlin, Go, JavaScript and TypeScript),
                certificates, keys and keystores, exports a cryptography bill of
                materials, and maps every finding to the NIST, US federal, CNSA
                2.0, UK NCSC and EU deadlines. One pip install with nothing else
                to set up, 205 offline tests, and a weekly check that parses 705
                real post-quantum certificates from the IETF Hackathon.
              </>
            }
          />

          <CaseStudy
            title="Budget and Shop Book: offline-first money apps"
            status="Private beta"
            stack="React 19 · TypeScript · Vite · Dexie (IndexedDB) · Capacitor · Supabase · Tailwind"
            body={
              <>
                A budgeting app for salary earners and small business owners,
                and Shop Book, its companion app for shops, both built to work
                fully offline as a web app first and then on Android and iPhone
                from the same code. On the personal side: monthly plans, bills
                and subscriptions with reminders, goals and savings, debts,
                IOUs and ajo, reports, a salary and tax helper for the 2026
                rules, and a daily money thought. On the business side: today's
                sales and expenses, a daily cash-up, customers and suppliers on
                credit, invoices and receipts to send on WhatsApp, stock bought
                by the carton and sold by the piece, checks that transfer and
                POS money really arrived, and profit-and-loss and VAT reports.
                Sync and logging by WhatsApp or Telegram chat are optional.
              </>
            }
          />

          <CaseStudy
            title="AI invoice reconciliation across Odoo and Dynamics 365"
            org="ARTEE Group"
            status="In development"
            stack="Vision-LLMs · docTR · n8n · PostgreSQL · React 19 · Vite"
            body={
              <>
                The finance team handles 10,000+ supplier invoices a month
                from 2,000+ vendors, many of them blurry scans, across two
                ERPs: Odoo for the Butchery subsidiary and Dynamics 365 for
                SPAR Nigeria. I'm building the pipeline that extracts each
                invoice and matches it to the right record: the Odoo vendor
                bill, or the D365 goods receipt, even when the uploader only
                has a PO number and that PO maps to more than one GRN.
                Extraction started on an OCR stack (docTR, invoice2data, n8n,
                PostgreSQL) and moved to vision-LLMs once real invoices proved
                messier than expected. A blur check catches bad scans and
                asks for a resend, every match carries a confidence score,
                and uncertain ones go to a review screen built in React 19
                and Vite.
              </>
            }
          >
            <PipelineDiagram />
          </CaseStudy>

          <CaseStudy
            title="n8n AI agent for lead qualification"
            status="Own build"
            stack="n8n · Gemini · Groq · NocoDB · PostgreSQL · Telegram Bot API"
            body={
              <>
                My own lead system: n8n pulls leads in, Gemini and Groq score
                and qualify them, NocoDB and Postgres keep the history, and
                qualified leads land in Telegram for follow-up. It was built
                to replace manual lead review, and it's the same pattern I use
                for clients who need leads scored and routed before a person
                touches them.
              </>
            }
          />

          <CaseStudy
            title="Wellness travel website with an interactive Mapbox map"
            org="a UK wellness travel company"
            status="Live · rebuild in progress"
            stack="WordPress · Mapbox → Next.js · Tailwind · Supabase"
            body={
              <>
                Destination pages, curated trip listings, a contact flow and
                an interactive Mapbox map of wellness locations, delivered on
                WordPress. The client came back for a custom rebuild in
                Next.js, Tailwind and Supabase, with an admin dashboard so
                non-technical staff can edit the site's content. I'm building
                it now.
              </>
            }
          />

          <CaseStudy
            title="In-store price checker on AWS"
            org="ARTEE Group"
            status="Live"
            stack="React · Vite · AWS Lambda · AWS SAM · DynamoDB"
            body={
              <>
                SPAR store staff and customers needed a fast way to check
                current prices by barcode, pulled from a Dynamics 365 pricing
                backend. During UAT, I traced a cold-start delay in the
                pricing API that sometimes exceeded API Gateway's hard
                29-second timeout, the kind of bug that looks fine in a demo
                and fails in a real store. I re-architected around it with
                DynamoDB caching rather than retrying harder, then built a
                second version that runs locally in each store and reads
                prices from a local database instead of calling Dynamics 365
                endpoints at all.
              </>
            }
          />

          <CaseStudy
            title="Solana token risk scanner (Telegram bot)"
            status="Own build"
            stack="Python · Helius · Telegram Bot API · Google Sheets · PythonAnywhere"
            body={
              <>
                A Python Telegram bot that scans new Solana tokens through
                Helius, filters out low-liquidity and airdrop tokens, and gives
                each one a risk score so users can spot likely scams before
                buying. It runs on PythonAnywhere and logs every scan to
                Google Sheets.
              </>
            }
          />

          <div className="pt-10">
            <h3 className="font-display font-medium text-lg text-ink mb-5">
              Also built
            </h3>
            <ul className="space-y-4">
              {alsoBuilt.map((item) => (
                <li key={item.name} className="measure text-ink-soft leading-relaxed">
                  <span className="text-ink">{item.name}</span>
                  {item.note ? <span className="text-ink-faint"> ({item.note})</span> : null}
                  {": "}
                  {item.body}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
