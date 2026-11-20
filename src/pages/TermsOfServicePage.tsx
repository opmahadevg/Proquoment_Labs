import * as React from "react";
import { Link } from "wouter";
import {
  PlateHeader,
  PlateKicker,
  EtchedCard,
  CopperplateButton,
  HatchDivider,
} from "@/components/ui/copperplate-primitives";
import { FileText, ArrowLeft, Mail, ShieldAlert, CheckCircle2 } from "lucide-react";

export function TermsOfServicePage() {
  return (
    <div className="relative min-h-screen text-[var(--ctl-text)] bg-[var(--ctl-paper)] overflow-hidden">
      <div className="max-w-4xl mx-auto px-6 py-16 space-y-12">
        {/* Back Link */}
        <div>
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[var(--ctl-ink)] hover:underline transition-colors"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Return to Top</span>
          </Link>
        </div>

        {/* Page Header */}
        <div className="space-y-4 border-b border-[var(--ctl-line)] pb-8">
          <PlateKicker>COMMERCIAL CHARTER &amp; ENGAGEMENT TERMS</PlateKicker>
          <h1 className="font-serif text-4xl sm:text-5xl text-[var(--ctl-text)] leading-tight">
            Terms of Service
          </h1>
          <div className="flex flex-wrap items-center gap-4 text-xs font-serif italic text-[var(--ctl-soft)]">
            <span>Last Updated: November 18, 2026</span>
            <span>·</span>
            <span>Entity: Proquoment Private Limited</span>
            <span>·</span>
            <span>Jurisdiction: Gurgaon, Haryana, India</span>
          </div>
        </div>

        {/* Main Legal Content Card */}
        <EtchedCard className="p-8 sm:p-12 space-y-10 text-[var(--ctl-text)] text-sm sm:text-[15px] leading-relaxed">
          {/* Section 1 */}
          <section className="space-y-3">
            <h2 className="font-serif text-2xl text-[var(--ctl-text)] flex items-baseline gap-3">
              <span className="text-sm font-sans font-semibold text-[var(--ctl-ink)]">01.</span>
              <span>Agreement to Terms</span>
            </h2>
            <p>
              These Terms of Service (&ldquo;Terms&rdquo;) constitute a legally binding agreement between you
              (whether personally or on behalf of an entity, &ldquo;Client&rdquo;, &ldquo;you&rdquo;) and
              <strong> Proquoment Private Limited</strong> (&ldquo;Proquoment&rdquo;, &ldquo;Proquoment Labs&rdquo;,
              &ldquo;we&rdquo;, &ldquo;us&rdquo;, or &ldquo;our&rdquo;), governing your access to and use of our website
              at <strong className="text-[var(--ctl-ink)]">labs.proquoment.in</strong> and any professional engineering services,
              software development, consultation, or technical deliverables provided by us.
            </p>
            <p className="text-[var(--ctl-soft)] text-xs sm:text-sm">
              By accessing our Site, booking an architecture call, or executing a Statement of Work (SOW), you agree
              to be bound by these Terms. If you do not agree, you must discontinue use immediately.
            </p>
          </section>

          {/* Section 2 */}
          <section className="space-y-3">
            <h2 className="font-serif text-2xl text-[var(--ctl-text)] flex items-baseline gap-3">
              <span className="text-sm font-sans font-semibold text-[var(--ctl-ink)]">02.</span>
              <span>Scope of Engineering Services</span>
            </h2>
            <p>
              Proquoment Labs provides specialized digital engineering, artificial intelligence integration, and
              transformation services across three core pillars:
            </p>
            <ul className="list-disc list-inside space-y-1.5 text-[var(--ctl-text)] pl-2">
              <li><strong className="text-[var(--ctl-ink)]">AI SaaS &amp; Digital Product Engineering:</strong> Full-stack web and SaaS application engineering, MVP sprint acceleration, API architectures, and scalable digital platforms.</li>
              <li><strong className="text-[var(--ctl-ink)]">Business Process Automation &amp; Integrations:</strong> Autonomous workflow orchestration, custom AI agents, document processing, and enterprise CRM/ERP synchronizations.</li>
              <li><strong className="text-[var(--ctl-ink)]">Web Applications &amp; Digital Experiences:</strong> High-performance business websites, customer portals, interactive dashboards, design systems, and practical AI readiness.</li>
            </ul>
            <p className="text-[var(--ctl-soft)] text-xs sm:text-sm">
              Specific project timelines, milestones, acceptance criteria, and fee structures are governed by individual
              Statements of Work (SOW) or Retainer Agreements agreed upon in writing between the parties.
            </p>
          </section>

          {/* Section 3 */}
          <section className="space-y-3">
            <h2 className="font-serif text-2xl text-[var(--ctl-text)] flex items-baseline gap-3">
              <span className="text-sm font-sans font-semibold text-[var(--ctl-ink)]">03.</span>
              <span>Engagement Models &amp; Payment Terms</span>
            </h2>
            <p>
              Engagements with Proquoment Labs operate under one of three models:
            </p>
            <ul className="list-disc list-inside space-y-2 text-[var(--ctl-text)] pl-2">
              <li>
                <strong className="text-[var(--ctl-ink)]">Project-Based:</strong> Invoiced based on predefined milestones (e.g., 50% deposit, 25% prototype acceptance, 25% production deployment). Work commences upon receipt of the initial deposit.
              </li>
              <li>
                <strong className="text-[var(--ctl-ink)]">Dedicated Engineering Retainer:</strong> Billed in advance on a monthly or quarterly basis for dedicated engineering capacity and fractional CTO leadership.
              </li>
              <li>
                <strong className="text-[var(--ctl-ink)]">4-Week MVP Sprint:</strong> Fixed-fee rapid innovation sprint with clear milestone deliverables over 28 calendar days.
              </li>
            </ul>
            <p className="text-[var(--ctl-soft)] text-xs sm:text-sm">
              All invoices are payable within 14 calendar days of issuance unless otherwise stipulated. Late payments
              may result in immediate suspension of engineering services and delayed code handoffs.
            </p>
          </section>

          {/* Section 4 */}
          <section className="space-y-3">
            <h2 className="font-serif text-2xl text-[var(--ctl-text)] flex items-baseline gap-3">
              <span className="text-sm font-sans font-semibold text-[var(--ctl-ink)]">04.</span>
              <span>Intellectual Property Ownership</span>
            </h2>
            <div className="p-6 rounded-[2px] border border-[var(--ctl-ink)] bg-[var(--ctl-wash)] text-[var(--ctl-text)] text-sm space-y-2">
              <div className="flex items-center gap-2 text-[var(--ctl-ink)] font-semibold uppercase tracking-wider text-xs">
                <CheckCircle2 className="w-4 h-4 text-[var(--ctl-ink)]" />
                <span>100% Client Codebase Ownership</span>
              </div>
              <p className="text-sm text-[var(--ctl-text)] leading-relaxed">
                Upon full payment of all contracted fees, Proquoment Private Limited irrevocably transfers and assigns to
                the Client all rights, title, and intellectual property interest in the bespoke software, custom models,
                prompts, and deliverables created specifically for the Client under the applicable SOW.
              </p>
            </div>
            <p className="text-[var(--ctl-soft)] text-xs sm:text-sm">
              Proquoment retains ownership of its pre-existing core libraries, scaffolding utilities, open-source tooling,
              and generic developer workflows. To the extent any pre-existing materials are embedded in the deliverables,
              Proquoment grants the Client a perpetual, worldwide, royalty-free, non-exclusive license to use and modify them.
            </p>
          </section>

          {/* Section 5 */}
          <section className="space-y-3">
            <h2 className="font-serif text-2xl text-[var(--ctl-text)] flex items-baseline gap-3">
              <span className="text-sm font-sans font-semibold text-[var(--ctl-ink)]">05.</span>
              <span>Confidentiality &amp; Mutual Non-Disclosure</span>
            </h2>
            <p>
              Both parties agree to hold all confidential information, business strategies, technical architectures,
              trade secrets, and proprietary source code in strict confidence. Neither party shall disclose confidential
              information to any third party without prior written consent, except to employees, contractors, or legal
              advisors bound by equivalent confidentiality obligations.
            </p>
          </section>

          {/* Section 6 */}
          <section className="space-y-3">
            <h2 className="font-serif text-2xl text-[var(--ctl-text)] flex items-baseline gap-3">
              <span className="text-sm font-sans font-semibold text-[var(--ctl-ink)]">06.</span>
              <span>AI Deliverables, Disclaimers &amp; Probabilistic Systems</span>
            </h2>
            <p>
              Client acknowledges that artificial intelligence models, Large Language Models (LLMs), and autonomous agent
              systems are probabilistic by nature. While Proquoment Labs employs rigorous evaluation harnesses, guardrails,
              and schema validations, Proquoment cannot warrant that generative AI outputs will be 100% error-free or free
              from occasional hallucinations.
            </p>
            <p className="text-[var(--ctl-soft)] text-xs sm:text-sm">
              The Client remains responsible for verifying and validating outputs before executing high-risk financial,
              legal, medical, or life-critical operational actions.
            </p>
          </section>

          {/* Section 7 */}
          <section className="space-y-3">
            <h2 className="font-serif text-2xl text-[var(--ctl-text)] flex items-baseline gap-3">
              <span className="text-sm font-sans font-semibold text-[var(--ctl-ink)]">07.</span>
              <span>Limitation of Liability</span>
            </h2>
            <p>
              To the maximum extent permitted by applicable Indian law, in no event shall either party be liable to the other
              for indirect, incidental, consequential, special, punitive, or exemplary damages, including lost profits, data loss,
              or business interruption, arising out of or related to these Terms.
            </p>
            <p className="text-[var(--ctl-soft)] text-xs sm:text-sm">
              Proquoment’s total aggregate liability arising out of or related to an engagement shall not exceed the total fees
              actually paid by the Client to Proquoment under the specific SOW giving rise to liability during the three (3) months
              preceding the claim.
            </p>
          </section>

          {/* Section 8 */}
          <section className="space-y-3">
            <h2 className="font-serif text-2xl text-[var(--ctl-text)] flex items-baseline gap-3">
              <span className="text-sm font-sans font-semibold text-[var(--ctl-ink)]">08.</span>
              <span>Governing Law &amp; Dispute Resolution</span>
            </h2>
            <p>
              These Terms, and all claims or causes of action that may be based upon, arise out of, or relate to this agreement,
              shall be governed by and construed in accordance with the laws of the Republic of India, without regard to conflict
              of law principles.
            </p>
            <p className="text-[var(--ctl-soft)] text-xs sm:text-sm">
              Any dispute, controversy, or claim arising out of or relating to these Terms shall be subject to the
              exclusive jurisdiction of the competent courts located in Gurgaon, Haryana, India.
            </p>
            <p className="text-xs text-[var(--ctl-soft)] pt-2">
              For any commercial inquiries or legal notices, contact us at <strong className="text-[var(--ctl-ink)]">contact@proquoment.in</strong>.
            </p>
          </section>
        </EtchedCard>

        {/* Bottom Navigation */}
        <div className="pt-4 border-t border-[var(--ctl-line)] flex items-center justify-between gap-4">
          <Link href="/">
            <CopperplateButton variant="paper" className="text-xs">
              &larr; Return to Home
            </CopperplateButton>
          </Link>
          <Link href="/privacy-policy">
            <CopperplateButton variant="paper" className="text-xs">
              Privacy Policy &rarr;
            </CopperplateButton>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default TermsOfServicePage;
