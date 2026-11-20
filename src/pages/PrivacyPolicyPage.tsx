import * as React from "react";
import { Link } from "wouter";
import {
  PlateHeader,
  PlateKicker,
  EtchedCard,
  CopperplateButton,
} from "@/components/ui/copperplate-primitives";
import { Shield, Lock, FileCheck, Mail, ArrowLeft } from "lucide-react";

export function PrivacyPolicyPage() {
  return (
    <div className="relative min-h-screen text-[var(--ctl-text)] bg-[var(--ctl-paper)] overflow-hidden">
      {/* Page Header */}
      <section className="py-20 border-b border-[var(--ctl-line)] bg-[var(--ctl-paper)]">
        <div className="max-w-4xl mx-auto px-6 space-y-4">
          <PlateKicker>STATUTORY GOVERNANCE &amp; DATA PRIVACY</PlateKicker>
          <h1 className="font-serif text-4xl sm:text-5xl text-[var(--ctl-text)] leading-tight">
            Privacy Policy
          </h1>
          <div className="flex flex-wrap items-center gap-4 text-xs font-serif italic text-[var(--ctl-soft)]">
            <span>Effective Date: November 18, 2026</span>
            <span>•</span>
            <span>Version: 1.0 (Digital Personal Data Protection Compliance)</span>
          </div>
        </div>
      </section>

      {/* Main Legal Content */}
      <div className="max-w-4xl mx-auto px-6 py-16 space-y-12">
        <EtchedCard className="p-8 sm:p-12 space-y-10 text-[var(--ctl-text)] text-sm sm:text-[15px] leading-relaxed">
          {/* Introduction */}
          <div className="space-y-4 border-b border-[var(--ctl-line)] pb-8">
            <p className="font-serif text-base text-[var(--ctl-ink)] italic">
              Proquoment Labs operates as an AI-native Product &amp; Engineering Studio, a division of Proquoment Private Limited.
            </p>
            <p>
              We are committed to maintaining the highest standards of confidentiality, transparency, and data privacy for all
              prospective clients, business partners, and platform visitors. This Privacy Policy details how we collect, process,
              safeguard, and govern personal information when you access our website (<strong className="text-[var(--ctl-ink)]">labs.proquoment.in</strong>)
              or submit project inquiries to our engineering team.
            </p>
          </div>

          {/* Section 1 */}
          <section className="space-y-3">
            <h2 className="font-serif text-2xl text-[var(--ctl-text)] flex items-baseline gap-3">
              <span className="text-sm font-sans font-semibold text-[var(--ctl-ink)]">01.</span>
              <span>Information We Collect</span>
            </h2>
            <p>
              We collect information solely for legitimate commercial, engineering scoping, and client coordination purposes:
            </p>
            <ul className="list-disc list-inside space-y-2 text-[var(--ctl-soft)] pl-2">
              <li>
                <strong className="text-[var(--ctl-text)]">Direct Inquiries:</strong> When you submit a project brief or contact us, we collect your full name,
                business email, company or venture name, project scope, and budget tier.
              </li>
              <li>
                <strong className="text-[var(--ctl-text)]">Technical Diagnostics:</strong> Telemetry regarding HTTP routing, user-agent details, browser viewport,
                and network timestamps to ensure site reliability and prevent malicious intrusion.
              </li>
              <li>
                <strong className="text-[var(--ctl-text)]">Calendar Integrations:</strong> If you book a discovery call via our team calendar (Calendly), your contact
                details and submitted agenda notes are securely transmitted under mutual confidentiality.
              </li>
            </ul>
          </section>

          {/* Section 2 */}
          <section className="space-y-3">
            <h2 className="font-serif text-2xl text-[var(--ctl-text)] flex items-baseline gap-3">
              <span className="text-sm font-sans font-semibold text-[var(--ctl-ink)]">02.</span>
              <span>How We Process Your Information</span>
            </h2>
            <p>
              Your data is utilized strictly for the following purposes:
            </p>
            <ol className="list-decimal list-inside space-y-1.5 text-[var(--ctl-soft)] pl-2">
              <li>Reviewing technical requirements and preparing customized architectural proposals.</li>
              <li>Executing formal Non-Disclosure Agreements (NDAs) and engineering Statements of Work (SOW).</li>
              <li>Coordinating milestone delivery, sprint planning, and secure codebase transfers.</li>
              <li>Monitoring platform stability and preventing security vulnerabilities.</li>
            </ol>
            <p className="font-serif italic text-xs text-[var(--ctl-ink)] pt-1">
              We never sell, rent, monetize, or publicly disclose user information or submitted project briefs.
            </p>
          </section>

          {/* Section 3 */}
          <section className="space-y-3">
            <h2 className="font-serif text-2xl text-[var(--ctl-text)] flex items-baseline gap-3">
              <span className="text-sm font-sans font-semibold text-[var(--ctl-ink)]">03.</span>
              <span>Infrastructure &amp; Third-Party Processors</span>
            </h2>
            <p>
              We partner with industry-standard, ISO/IEC 27001 and SOC 2 Type II certified cloud infrastructure providers:
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="p-4 rounded-[2px] border border-[var(--ctl-line)] bg-[var(--ctl-wash)]">
                <span className="font-semibold text-xs uppercase tracking-wider text-[var(--ctl-ink)] block">Supabase Inc.</span>
                <p className="text-xs text-[var(--ctl-soft)] mt-1">
                  PostgreSQL database hosting with enterprise row-level security (RLS) and end-to-end encryption at rest (AES-256).
                </p>
              </div>
              <div className="p-4 rounded-[2px] border border-[var(--ctl-line)] bg-[var(--ctl-wash)]">
                <span className="font-semibold text-xs uppercase tracking-wider text-[var(--ctl-ink)] block">PostHog Inc.</span>
                <p className="text-xs text-[var(--ctl-soft)] mt-1">
                  Privacy-first product analytics with IP anonymization, cookie-less options, and zero behavioral ad tracking.
                </p>
              </div>
              <div className="p-4 rounded-[2px] border border-[var(--ctl-line)] bg-[var(--ctl-wash)]">
                <span className="font-semibold text-xs uppercase tracking-wider text-[var(--ctl-ink)] block">Vercel Inc.</span>
                <p className="text-xs text-[var(--ctl-soft)] mt-1">
                  Global edge hosting, DDoS mitigation, and SSL/TLS certificate termination.
                </p>
              </div>
              <div className="p-4 rounded-[2px] border border-[var(--ctl-line)] bg-[var(--ctl-wash)]">
                <span className="font-semibold text-xs uppercase tracking-wider text-[var(--ctl-ink)] block">Calendly LLC</span>
                <p className="text-xs text-[var(--ctl-soft)] mt-1">
                  Encrypted calendar coordination for initial discovery and technical scoping sessions.
                </p>
              </div>
            </div>
          </section>

          {/* Section 4 */}
          <section className="space-y-3">
            <h2 className="font-serif text-2xl text-[var(--ctl-text)] flex items-baseline gap-3">
              <span className="text-sm font-sans font-semibold text-[var(--ctl-ink)]">04.</span>
              <span>Cookies &amp; Local Storage</span>
            </h2>
            <p>
              Our website uses minimal local storage to remember your aesthetic palette selection (Cobalt, Indigo, Delft, Oxblood)
              and dark/light mode preference across sessions. We do not use third-party advertising cookies or cross-site tracking pixels.
            </p>
            <ul className="list-disc list-inside space-y-1 text-xs text-[var(--ctl-soft)] pl-2">
              <li>
                <strong className="text-[var(--ctl-ink)]">First-Party Telemetry:</strong> Anonymized session telemetry is gathered via PostHog for site
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
              Under India's Digital Personal Data Protection Act, 2023 (DPDP Act) and international data protection regulations:
            </p>
            <ul className="list-disc list-inside space-y-1 text-[var(--ctl-soft)] pl-2">
              <li><strong className="text-[var(--ctl-text)]">Right to Access:</strong> You may request a copy of any personal contact data we hold concerning your inquiries.</li>
              <li><strong className="text-[var(--ctl-text)]">Right to Correction:</strong> You may ask us to correct incomplete or outdated personal information.</li>
              <li><strong className="text-[var(--ctl-text)]">Right to Erasure:</strong> You may request complete deletion of your records from our systems, subject to legal recordkeeping duties.</li>
              <li><strong className="text-[var(--ctl-text)]">Right to Withdraw Consent:</strong> You may revoke consent for future communications at any time.</li>
            </ul>
          </section>

          {/* Section 7 */}
          <section className="space-y-3">
            <h2 className="font-serif text-2xl text-[var(--ctl-text)] flex items-baseline gap-3">
              <span className="text-sm font-sans font-semibold text-[var(--ctl-ink)]">07.</span>
              <span>Data Retention Policy</span>
            </h2>
            <p>
              Inquiries that do not materialize into an active commercial engagement are automatically scrubbed from active lead registries
              after twelve (12) months. Engaged client records and contracts are retained in accordance with Indian commercial taxation and statutory requirements.
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
