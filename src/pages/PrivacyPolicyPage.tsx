import * as React from "react";
import { Link } from "wouter";
import {
  PlateHeader,
  PlateKicker,
  EtchedCard,
  CopperplateButton,
  HatchDivider,
} from "@/components/ui/copperplate-primitives";
import { Shield, ArrowLeft, Mail, Lock, Building2 } from "lucide-react";

export function PrivacyPolicyPage() {
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
          <PlateKicker>LEGAL &amp; PRIVACY CHARTER</PlateKicker>
          <h1 className="font-serif text-4xl sm:text-5xl text-[var(--ctl-text)] leading-tight">
            Privacy Policy
          </h1>
          <div className="flex flex-wrap items-center gap-4 text-xs font-serif italic text-[var(--ctl-soft)]">
            <span>Last Updated: November 18, 2026</span>
            <span>·</span>
            <span>Entity: Proquoment Private Limited</span>
            <span>·</span>
            <span>Domain: labs.proquoment.in</span>
          </div>
        </div>

        {/* Main Legal Content Card */}
        <EtchedCard className="p-8 sm:p-12 space-y-10 text-[var(--ctl-text)] text-sm sm:text-[15px] leading-relaxed">
          {/* Section 1 */}
          <section className="space-y-3">
            <h2 className="font-serif text-2xl text-[var(--ctl-text)] flex items-baseline gap-3">
              <span className="text-sm font-sans font-semibold text-[var(--ctl-ink)]">01.</span>
              <span>Introduction &amp; Scope</span>
            </h2>
            <p>
              This Privacy Policy describes how <strong>Proquoment Private Limited</strong> (&ldquo;Proquoment&rdquo;,
              &ldquo;Proquoment Labs&rdquo;, &ldquo;we&rdquo;, &ldquo;us&rdquo;, or &ldquo;our&rdquo;) collects, uses,
              processes, and safeguards personal and technical information gathered through our dedicated innovation website
              located at <strong className="text-[var(--ctl-ink)]">labs.proquoment.in</strong> (the &ldquo;Site&rdquo;) and associated
              engineering inquiry channels.
            </p>
            <p className="text-[var(--ctl-soft)] text-xs sm:text-sm">
              We respect your privacy and are committed to protecting it through transparent data practices and compliance
              with applicable data protection regulations, including India&apos;s Information Technology Act, 2000, the Information
              Technology (Reasonable Security Practices and Procedures and Sensitive Personal Data or Information) Rules, 2011,
              and the Digital Personal Data Protection Act, 2023 (DPDP Act).
            </p>
          </section>

          {/* Section 2 */}
          <section className="space-y-3">
            <h2 className="font-serif text-2xl text-[var(--ctl-text)] flex items-baseline gap-3">
              <span className="text-sm font-sans font-semibold text-[var(--ctl-ink)]">02.</span>
              <span>Information We Collect</span>
            </h2>
            <p>We collect information you provide directly to us when initiating communication, as well as limited technical telemetry:</p>
            <ul className="list-disc list-inside space-y-2 text-[var(--ctl-text)] pl-2">
              <li>
                <strong className="text-[var(--ctl-ink)]">Project Inquiries &amp; Contact Details:</strong> When you submit our project enquiry form
                or book an architecture call, we collect your full name, work email address, company name, service requirements,
                estimated budget range, project description, and referral origin.
              </li>
              <li>
                <strong className="text-[var(--ctl-ink)]">Direct Correspondence:</strong> If you reach out to us via email (e.g. contact@proquoment.in),
                we retain the contents of your message, email address, and any attached documentation or RFPs.
              </li>
              <li>
                <strong className="text-[var(--ctl-ink)]">Technical &amp; Usage Telemetry:</strong> When you browse our Site, we automatically collect
                anonymized technical data such as browser type, operating system, referring URL, time spent per page, and general
                geographic location (country/city level). We do not correlate this telemetry with personal identities without explicit consent.
              </li>
            </ul>
          </section>

          {/* Section 3 */}
          <section className="space-y-3">
            <h2 className="font-serif text-2xl text-[var(--ctl-text)] flex items-baseline gap-3">
              <span className="text-sm font-sans font-semibold text-[var(--ctl-ink)]">03.</span>
              <span>How We Use Your Information</span>
            </h2>
            <p>We process collected information strictly for the following operational purposes:</p>
            <ul className="list-disc list-inside space-y-1.5 text-[var(--ctl-text)] pl-2">
              <li>To evaluate project feasibility, prepare architectural proposals, and respond to your inquiries within our 24-hour SLA.</li>
              <li>To schedule technical discovery sessions and consultation calls.</li>
              <li>To deliver contracted AI engineering, software prototyping, and fractional CTO advisory services.</li>
              <li>To monitor, analyze, and enhance the performance, reliability, and security of our web properties.</li>
              <li>To comply with statutory legal and accounting obligations under Indian corporate law.</li>
            </ul>
            <p className="text-[var(--ctl-soft)] text-xs sm:text-sm">
              We never sell, rent, trade, or monetize your contact information or submitted project briefs to third-party advertisers.
            </p>
          </section>

          {/* Section 4 */}
          <section className="space-y-3">
            <h2 className="font-serif text-2xl text-[var(--ctl-text)] flex items-baseline gap-3">
              <span className="text-sm font-sans font-semibold text-[var(--ctl-ink)]">04.</span>
              <span>Data Storage, Infrastructure &amp; Security</span>
            </h2>
            <p>
              Your project inquiries and technical communications are stored in enterprise-grade cloud environments:
            </p>
            <ul className="list-disc list-inside space-y-1.5 text-[var(--ctl-text)] pl-2">
              <li>
                <strong className="text-[var(--ctl-ink)]">Supabase:</strong> Inquiries submitted through our forms are securely stored in Supabase
                PostgreSQL instances with strict Row-Level Security (RLS) policies and encrypted at rest using AES-256.
              </li>
              <li>
                <strong className="text-[var(--ctl-ink)]">PostHog / Analytics:</strong> Anonymized behavioral telemetry is gathered for platform
                performance optimization, with IP addresses masked and privacy-friendly cookie flags applied.
              </li>
              <li>
                <strong className="text-[var(--ctl-ink)]">Encryption in Transit:</strong> All data transmitted between your client browser and our
                servers is encrypted via TLS 1.3 cryptographic protocols.
              </li>
            </ul>
          </section>

          {/* Section 5 */}
          <section className="space-y-3">
            <h2 className="font-serif text-2xl text-[var(--ctl-text)] flex items-baseline gap-3">
              <span className="text-sm font-sans font-semibold text-[var(--ctl-ink)]">05.</span>
              <span>Client Confidentiality &amp; AI Training Boundaries</span>
            </h2>
            <p>
              At Proquoment Labs, we adhere to strict intellectual property and confidentiality safeguards. We strictly ensure that:
            </p>
            <ul className="list-disc list-inside space-y-1.5 text-[var(--ctl-text)] pl-2">
              <li>Your confidential project briefs, codebase repositories, schemas, and proprietary data are never used to train public foundational AI models.</li>
              <li>All API interactions with model providers (such as Anthropic, OpenAI, or Google) utilize commercial enterprise zero-data-retention agreements where applicable.</li>
              <li>We execute mutual Non-Disclosure Agreements (NDAs) prior to deep-dive technical discussions or code transfers.</li>
            </ul>
          </section>

          {/* Section 6 */}
          <section className="space-y-3">
            <h2 className="font-serif text-2xl text-[var(--ctl-text)] flex items-baseline gap-3">
              <span className="text-sm font-sans font-semibold text-[var(--ctl-ink)]">06.</span>
              <span>Your Rights Under DPDP Act &amp; International Standards</span>
            </h2>
            <p>
              In accordance with applicable privacy regulations, you possess the right to:
            </p>
            <ul className="list-disc list-inside space-y-1.5 text-[var(--ctl-text)] pl-2">
              <li>Request confirmation of whether we hold or process your personal data.</li>
              <li>Request access to, correction of, or permanent deletion (erasure) of your stored inquiry records.</li>
              <li>Withdraw consent for future communications at any time.</li>
            </ul>
            <p className="text-[var(--ctl-soft)] text-xs sm:text-sm">
              To exercise any of these statutory rights, please send an email to <strong className="text-[var(--ctl-ink)]">contact@proquoment.in</strong> with
              the subject line &ldquo;Privacy Rights Request&rdquo;. We will respond and process verified requests within 30 days.
            </p>
          </section>

          {/* Section 7 */}
          <section className="space-y-3">
            <h2 className="font-serif text-2xl text-[var(--ctl-text)] flex items-baseline gap-3">
              <span className="text-sm font-sans font-semibold text-[var(--ctl-ink)]">07.</span>
              <span>Cookies &amp; Tracking Technologies</span>
            </h2>
            <p>
              We use minimal cookies strictly necessary for navigation state, security verification, and anonymous site analytics.
              You may configure your browser to decline or delete cookies at any time; however, some interactive features may experience
              degraded functionality.
            </p>
          </section>

          {/* Section 8 */}
          <section className="space-y-3">
            <h2 className="font-serif text-2xl text-[var(--ctl-text)] flex items-baseline gap-3">
              <span className="text-sm font-sans font-semibold text-[var(--ctl-ink)]">08.</span>
              <span>Governing Law &amp; Dispute Resolution</span>
            </h2>
            <p>
              This Privacy Policy and any disputes arising out of the handling of personal data shall be governed by and construed in
              accordance with the laws of the Republic of India. Any legal proceedings related to this policy shall be subject to the
              exclusive jurisdiction of the competent courts located in Gurgaon, Haryana, India.
            </p>
          </section>

          {/* Section 9 */}
          <section className="space-y-3">
            <h2 className="font-serif text-2xl text-[var(--ctl-text)] flex items-baseline gap-3">
              <span className="text-sm font-sans font-semibold text-[var(--ctl-ink)]">09.</span>
              <span>Contact Us &amp; Grievance Redressal</span>
            </h2>
            <p>
              If you have any questions, feedback, or concerns regarding our privacy practices or wish to reach our Data Grievance Officer,
              please contact us:
            </p>
            <div className="p-6 rounded-[2px] border border-[var(--ctl-line)] bg-[var(--ctl-wash)] space-y-2 text-sm">
              <p className="font-serif font-bold text-[var(--ctl-text)] text-base">Proquoment Private Limited (Labs Division)</p>
              <p className="text-xs text-[var(--ctl-soft)]">Attn: Privacy &amp; Legal Compliance</p>
              <p className="text-xs text-[var(--ctl-soft)]">Gurgaon, Haryana, India</p>
              <p className="text-xs text-[var(--ctl-text)] flex items-center gap-1.5 pt-1">
                <Mail className="w-3.5 h-3.5 text-[var(--ctl-ink)]" />
                <span>Email: contact@proquoment.in</span>
              </p>
            </div>
          </section>
        </EtchedCard>

        {/* Bottom Navigation */}
        <div className="pt-4 border-t border-[var(--ctl-line)] flex items-center justify-between gap-4">
          <Link href="/">
            <CopperplateButton variant="paper" className="text-xs">
              &larr; Return to Home
            </CopperplateButton>
          </Link>
          <Link href="/terms-of-service">
            <CopperplateButton variant="paper" className="text-xs">
              Terms of Service &rarr;
            </CopperplateButton>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default PrivacyPolicyPage;
