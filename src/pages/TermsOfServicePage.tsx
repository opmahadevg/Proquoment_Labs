import * as React from "react";
import { Link } from "wouter";
import {
  PlateHeader,
  PlateKicker,
  EtchedCard,
  CopperplateButton,
} from "@/components/ui/copperplate-primitives";
import { FileText, Shield, CheckCircle2, ArrowLeft } from "lucide-react";

export function TermsOfServicePage() {
  return (
    <div className="relative min-h-screen text-[var(--ctl-text)] bg-[var(--ctl-paper)] overflow-hidden">
      {/* Page Header */}
      <div className="max-w-4xl mx-auto px-6 pt-16 pb-8 space-y-6">
        <div className="flex items-center justify-between gap-4">
          <Link href="/">
            <CopperplateButton variant="paper" className="text-xs">
              <ArrowLeft className="w-3.5 h-3.5 mr-1" />
              <span>Back to Home</span>
            </CopperplateButton>
          </Link>
          <span className="text-xs font-mono uppercase tracking-wider text-[var(--ctl-soft)]">
            Legal Document · TOS-2026-V1
          </span>
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
              <span>Scope of Engineering Services</span>
            </h2>
            <p>
              Proquoment Labs (&ldquo;we&rdquo;, &ldquo;us&rdquo;, or &ldquo;our&rdquo;), a dedicated division of Proquoment Private Limited,
              provides bespoke software engineering, AI systems development, and digital transformation services.
              Services are delivered exclusively pursuant to mutually executed Statements of Work (&ldquo;SOW&rdquo;)
              or Milestone Specifications signed by authorized representatives of both parties.
            </p>
            <p className="text-[var(--ctl-soft)] text-xs sm:text-sm">
              Any general website inquiries, exploratory calls, or preliminary scoping sessions do not constitute a binding
              commitment to deliver code until a formal agreement is entered into.
            </p>
          </section>

          {/* Section 2 */}
          <section className="space-y-3">
            <h2 className="font-serif text-2xl text-[var(--ctl-text)] flex items-baseline gap-3">
              <span className="text-sm font-sans font-semibold text-[var(--ctl-ink)]">02.</span>
              <span>Commercial Engagement Models</span>
            </h2>
            <p>
              We operate under two distinct commercial structures, as defined in each SOW:
            </p>
            <div className="space-y-4 pt-2">
              <div className="p-4 rounded-[2px] border border-[var(--ctl-line)] bg-[var(--ctl-wash)]">
                <h3 className="font-serif font-bold text-base text-[var(--ctl-text)]">
                  A. Milestone-Based Fixed Scope Sprints
                </h3>
                <p className="text-xs text-[var(--ctl-soft)] mt-1">
                  Defines specific deliverables, acceptance criteria, and fixed payment tranches tied to verified project milestones.
                  Scope adjustments require a written Change Request approved by both parties.
                </p>
              </div>

              <div className="p-4 rounded-[2px] border border-[var(--ctl-line)] bg-[var(--ctl-wash)]">
                <h3 className="font-serif font-bold text-base text-[var(--ctl-text)]">
                  B. Dedicated Engineering Retainer
                </h3>
                <p className="text-xs text-[var(--ctl-soft)] mt-1">
                  Provides a dedicated multidisciplinary engineering pod on a monthly or quarterly cycle with bi-weekly sprint planning.
                  Sprint velocity and prioritization are directed by the client in collaboration with our lead technical partner.
                </p>
              </div>
            </div>
          </section>

          {/* Section 3 */}
          <section className="space-y-3">
            <h2 className="font-serif text-2xl text-[var(--ctl-text)] flex items-baseline gap-3">
              <span className="text-sm font-sans font-semibold text-[var(--ctl-ink)]">03.</span>
              <span>Intellectual Property &amp; Codebase Ownership</span>
            </h2>
            <div className="p-4 rounded-[2px] border border-[var(--ctl-ink)] bg-[var(--ctl-wash)] space-y-2">
              <div className="flex items-center gap-2 text-[var(--ctl-ink)] font-semibold text-xs uppercase tracking-wider">
                <Shield className="w-4 h-4" />
                <span>100% Client Codebase Ownership</span>
              </div>
              <p className="text-xs text-[var(--ctl-text)] leading-relaxed">
                Upon receipt of full payment for the relevant milestone or engagement period, Proquoment irrevocably transfers and assigns
                to the Client all right, title, and intellectual property interest in and to the custom software, algorithms, frontend code,
                and system documentation created specifically for the Client under the applicable SOW.
              </p>
            </div>
            <p className="text-[var(--ctl-soft)] text-xs sm:text-sm">
              We retain ownership of our pre-existing proprietary developer tooling, generalized helper libraries, and architectural primitives
              used across projects, for which we grant the Client a perpetual, royalty-free, non-exclusive license to use and modify
              within their product.
            </p>
          </section>

          {/* Section 4 */}
          <section className="space-y-3">
            <h2 className="font-serif text-2xl text-[var(--ctl-text)] flex items-baseline gap-3">
              <span className="text-sm font-sans font-semibold text-[var(--ctl-ink)]">04.</span>
              <span>Client Responsibilities &amp; Materials</span>
            </h2>
            <p>
              To ensure on-schedule delivery, the Client agrees to provide timely access to necessary API credentials, third-party accounts,
              design assets, and domain specifications. Delays caused by withheld inputs or third-party vendor downtime shall proportionally
              extend project timelines without penalty to Proquoment.
            </p>
          </section>

          {/* Section 5 */}
          <section className="space-y-3">
            <h2 className="font-serif text-2xl text-[var(--ctl-text)] flex items-baseline gap-3">
              <span className="text-sm font-sans font-semibold text-[var(--ctl-ink)]">05.</span>
              <span>Confidentiality &amp; Mutual Non-Disclosure</span>
            </h2>
            <p>
              Both parties agree to treat all business plans, product specifications, source code, and customer data as strictly confidential.
              Neither party shall disclose confidential information to any third party without prior written consent, except to employees
              and contractors bound by equivalent confidentiality obligations.
            </p>
          </section>

          {/* Section 6 */}
          <section className="space-y-3">
            <h2 className="font-serif text-2xl text-[var(--ctl-text)] flex items-baseline gap-3">
              <span className="text-sm font-sans font-semibold text-[var(--ctl-ink)]">06.</span>
              <span>Warranties &amp; Probabilistic Systems</span>
            </h2>
            <p>
              We warrant that all software developed by Proquoment Labs is engineered according to modern industry standards, free from malicious
              code, and fully functional in accordance with the specifications in the SOW upon client acceptance.
            </p>
            <p className="text-[var(--ctl-soft)] text-xs sm:text-sm">
              Because machine learning and large language models are inherently probabilistic, we do not warrant that external AI models
              will produce error-free outputs 100% of the time. We mitigate model hallucination through deterministic fallback architectures,
              schema validations, and automated observability guards.
            </p>
          </section>

          {/* Section 7 */}
          <section className="space-y-3">
            <h2 className="font-serif text-2xl text-[var(--ctl-text)] flex items-baseline gap-3">
              <span className="text-sm font-sans font-semibold text-[var(--ctl-ink)]">07.</span>
              <span>Limitation of Liability</span>
            </h2>
            <p>
              In no event shall either party be liable for any indirect, incidental, consequential, special, or punitive damages.
              Except in cases of gross negligence, willful misconduct, or breach of confidentiality, each party&apos;s total aggregate liability shall not exceed the amounts
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
