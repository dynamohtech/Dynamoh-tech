import PipelineDiagram from "./PipelineDiagram";
import CaseStudy from "./CaseStudy";

export default function FeaturedWork() {
  return (
    <section id="work" className="container-page py-20 md:py-28 border-t border-line">
      <div className="grid md:grid-cols-[minmax(0,14rem)_1fr] gap-8 md:gap-16">
        <div>
          <h2 className="font-display font-semibold text-2xl text-ink md:sticky md:top-24">
            Featured work
          </h2>
        </div>

        <div>
          <CaseStudy
            title="Invoice reconciliation across two ERPs"
            org="ARTEE Group"
            status="In development"
            stack="React 19 · Vite · n8n · PostgreSQL · vision-LLM extraction"
            body={
              <>
                ARTEE's finance team reconciles vendor invoices against two
                separate ERPs — Odoo for the Butchery subsidiary, Dynamics
                365 for SPAR Nigeria — at a target volume of 10,000+ invoices
                a month. I'm building the pipeline that automates it:
                extracting line items with a vision-LLM (moved on from a
                pure OCR approach once real invoices turned out messier than
                expected), reconstructing rows where table structure gets
                scrambled in scanning, and cross-referencing Goods Receipt
                Notes from D365 even when the uploader only has a PO number
                — including POs that map to more than one GRN. A
                blur-detection pre-filter catches bad scans and
                automatically requests a resend instead of feeding garbage
                data downstream.
              </>
            }
          >
            <PipelineDiagram />
          </CaseStudy>

          <CaseStudy
            title="In-store barcode price checker"
            org="ARTEE Group"
            status="Live"
            stack="React · Vite · AWS Lambda · AWS SAM · DynamoDB"
            body={
              <>
                SPAR store staff and customers needed a fast way to check
                current prices by barcode, pulled live from a Dynamics 365
                pricing backend. During UAT, I traced a cold-start delay in
                the pricing API that occasionally exceeded API Gateway's
                hard 29-second timeout — the kind of bug that looks fine in
                a demo and fails in a real store. I re-architected around it
                with DynamoDB caching rather than just retrying harder.
              </>
            }
          />

          <CaseStudy
            title="AI lead-qualification pipeline"
            status="Concept build"
            stack="n8n · PostgreSQL · Gemini 2.5 Flash · Groq · Telegram Bot API"
            body={
              <>
                A self-directed build exploring how far AI can take lead
                qualification before a human needs to step in: a
                multi-stage pipeline that scores inbound leads and routes
                the qualified ones, built around a fictional agency brief.
                It's a demo, not a paid engagement — but the scoring stages
                and routing logic are real, working systems.
              </>
            }
          />

          <CaseStudy
            title="Odoo + WhatsApp Cloud API integration"
            status="Available as a service"
            stack="Odoo Community Edition · WhatsApp Cloud API"
            body={
              <>
                Packaged for businesses running Odoo Community Edition who
                want WhatsApp-based customer messaging without paying for
                an Enterprise upgrade — order updates, support threads, and
                notifications sent and received without leaving Odoo.
              </>
            }
          />

          <div className="pt-10">
            <h3 className="font-display font-medium text-lg text-ink mb-1">
              Web3 / Solana
            </h3>
            <p className="text-sm text-ink-faint mb-4">Personal projects</p>
            <ul className="space-y-4">
              <li className="measure text-ink-soft leading-relaxed">
                <span className="text-ink">Dynamo Token</span> — a Solana
                presale token (5B supply) with staking and a referral system
                built in.
              </li>
              <li className="measure text-ink-soft leading-relaxed">
                <span className="text-ink">Sol-deep Search</span> — a
                Telegram bot that screens Solana tokens for scam patterns.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
