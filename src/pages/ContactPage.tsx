import * as React from "react";
import { useState } from "react";
import { Link } from "wouter";
import {
  PlateHeader,
  PlateKicker,
  EtchedCard,
  CopperplateButton,
  HatchDivider,
  WaxSealBadge,
} from "@/components/ui/copperplate-primitives";
import {
  Mail,
  Calendar,
  Send,
  Loader2,
  CheckCircle2,
  ArrowRight,
  ShieldCheck,
  Building2,
  Compass,
  AlertCircle,
  ExternalLink,
} from "lucide-react";
import { supabase } from "@/lib/supabase";

export const SERVICE_TYPE_OPTIONS = [
  "AI SaaS & Digital Product Engineering",
  "Business Process Automation & Integrations",
  "Web Applications & Digital Experiences",
  "AI Opportunity Discovery & Roadmap",
  "Other / Custom Engineering Scope",
] as const;

export const BUDGET_RANGE_OPTIONS = [
  "$3,000 - $5,000 (Scoping & Prototyping)",
  "$5,000 - $10,000 (4-6 Week MVP Sprint)",
  "$10,000 - $25,000 (Full Product & System Engineering)",
  "$25,000+ (Ongoing Enterprise Partnership)",
  "Not sure / Let's scope together",
] as const;

export const REFERRAL_OPTIONS = [
  "Founder Referral",
  "Direct Outreach / Word of Mouth",
  "Technical Blog / Case Study",
  "Twitter / X / LinkedIn",
  "Search / Online Publication",
  "Other",
] as const;

export interface LabsEnquiry {
  full_name: string;
  email: string;
  company?: string;
  service_type: string;
  description: string;
  budget_range?: string;
  referral?: string;
  status?: string;
}

export function ContactPage() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    company: "",
    serviceType: SERVICE_TYPE_OPTIONS[0] as string,
    description: "",
    budgetRange: BUDGET_RANGE_OPTIONS[1] as string,
    referral: "",
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  const validate = () => {
    const errs: Record<string, string> = {};

    if (!formData.fullName.trim()) {
      errs.fullName = "Please provide your full name or title.";
    }

    if (!formData.email.trim()) {
      errs.email = "Please provide an email address.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
      errs.email = "Please provide a valid email format (e.g., founder@company.com).";
    }

    if (!formData.description.trim()) {
      errs.description = "Please describe your project objectives or operational challenge.";
    } else if (formData.description.trim().length < 20) {
      errs.description = "Please provide at least a brief 20-character summary of your requirements.";
    }

    if (!formData.serviceType) {
      errs.serviceType = "Please select a service pillar.";
    }

    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => {
        const next = { ...prev };
        delete next[name];
        return next;
      });
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitError(null);

    if (!validate()) {
      return;
    }

    setIsSubmitting(true);

    try {
      const sourceUrl =
        typeof window !== "undefined"
          ? window.location.href
          : "https://labs.proquoment.in/contact";

      const payload: LabsEnquiry = {
        full_name: formData.fullName.trim(),
        email: formData.email.trim(),
        company: formData.company.trim() || undefined,
        service_type: formData.serviceType,
        description: formData.description.trim(),
        budget_range: formData.budgetRange || undefined,
        referral: formData.referral || undefined,
        status: "new",
      };

      // 1. Primary write to Supabase table `labs_enquiries`
      const { error: supabaseError } = await supabase
        .from("labs_enquiries")
        .insert([payload]);

      if (supabaseError) {
        console.warn("Supabase enquiry dispatch error:", supabaseError.message);
      }

      // 2. Dual-write to Google Sheets Apps Script WebApp endpoint if present
      const sheetEndpoint = import.meta.env.VITE_GOOGLE_SHEET_WEBAPP_URL;
      if (sheetEndpoint) {
        try {
          await fetch(sheetEndpoint, {
            method: "POST",
            mode: "no-cors",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              timestamp: new Date().toISOString(),
              fullName: payload.full_name,
              email: payload.email,
              company: payload.company || "",
              serviceType: payload.service_type,
              description: payload.description,
              budgetRange: payload.budget_range || "",
              referral: payload.referral || "",
              source: sourceUrl,
            }),
          });
        } catch (sheetErr) {
          console.warn("Secondary Google Sheet webhook dispatch skipped:", sheetErr);
        }
      }

      setIsSubmitted(true);
    } catch (err: unknown) {
      console.error("Submission error:", err);
      setSubmitError(
        "An unexpected error occurred while dispatching your project brief. Please email contact@proquoment.in directly."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="relative min-h-screen text-[var(--ctl-text)] bg-[var(--ctl-paper)] overflow-hidden">
      {/* ============================================================
          PAGE HEADER (Plate Title)
          ============================================================ */}
      <section className="py-20 border-b border-[var(--ctl-line)] bg-[var(--ctl-paper)]">
        <div className="max-w-7xl mx-auto px-6">
          <PlateHeader
            kicker="DISPATCH &amp; SCOPING"
            title="Start a Project"
            italicWord="&amp; Technical Scoping"
            description="Tell us about what you're building or what operations you need to automate. We review specifications within 24 hours and provide an initial architectural proposal."
          />
        </div>
      </section>

      {/* ============================================================
          MAIN FORM & DETAILS SECTION
          ============================================================ */}
      <section className="py-24 border-b border-[var(--ctl-line)] bg-[var(--ctl-wash)]">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* ==========================================
              LEFT COLUMN: SPECIFICATION FORM
              ========================================== */}
          <div className="lg:col-span-7">
            <EtchedCard className="p-8 sm:p-12 space-y-8">
              <div className="border-b border-[var(--ctl-line)] pb-4 flex items-center justify-between">
                <span className="text-[11px] font-semibold uppercase tracking-widest text-[var(--ctl-ink)]">
                  Project Brief · Form 01
                </span>
                <span className="text-xs font-serif text-[var(--ctl-soft)]">
                  Confidential &amp; Secure
                </span>
              </div>

              {isSubmitted ? (
                <div className="py-12 text-center space-y-6">
                  <div className="w-16 h-16 rounded-full bg-[var(--ctl-wash)] border border-[var(--ctl-ink)] flex items-center justify-center mx-auto text-[var(--ctl-ink)]">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <div className="space-y-2">
                    <h3 className="font-serif text-3xl text-[var(--ctl-text)]">
                      Enquiry Received!
                    </h3>
                    <p className="text-[15px] text-[var(--ctl-soft)] max-w-md mx-auto leading-relaxed">
                      Thank you for submitting your specifications. Our engineering partners will review your project requirements and respond within 24 hours.
                    </p>
                  </div>
                  <div className="p-4 rounded-[2px] border border-[var(--ctl-line)] bg-[var(--ctl-paper)] max-w-sm mx-auto text-xs text-[var(--ctl-soft)]">
                    Direct confirmation has been queued for <strong className="text-[var(--ctl-text)]">{formData.email}</strong>.
                  </div>
                  <div className="pt-4 flex justify-center gap-4">
                    <button
                      type="button"
                      onClick={() => {
                        setIsSubmitted(false);
                        setFormData({
                          fullName: "",
                          email: "",
                          company: "",
                          serviceType: SERVICE_TYPE_OPTIONS[0],
                          description: "",
                          budgetRange: BUDGET_RANGE_OPTIONS[1],
                          referral: "",
                        });
                      }}
                      className="text-xs uppercase tracking-wider text-[var(--ctl-ink)] underline font-semibold"
                    >
                      Submit Another Specification
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  {submitError && (
                    <div className="p-4 rounded-[2px] border border-red-500/40 bg-red-500/5 text-red-700 dark:text-red-300 text-xs flex items-center gap-2">
                      <AlertCircle className="w-4 h-4 shrink-0" />
                      <span>{submitError}</span>
                    </div>
                  )}

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    {/* Full Name */}
                    <div className="space-y-2">
                      <label
                        htmlFor="fullName"
                        className="text-xs font-semibold uppercase tracking-wider text-[var(--ctl-ink)] block"
                      >
                        Full Name / Title *
                      </label>
                      <input
                        id="fullName"
                        name="fullName"
                        type="text"
                        required
                        value={formData.fullName}
                        onChange={handleChange}
                        placeholder="Ada Lovelace"
                        className="w-full px-3.5 py-2.5 rounded-[2px] border border-[var(--ctl-line)] bg-[var(--ctl-paper)] text-[var(--ctl-text)] text-sm focus:outline-none focus:border-[var(--ctl-ink)]"
                      />
                      {errors.fullName && (
                        <p className="text-xs text-red-600 font-sans">{errors.fullName}</p>
                      )}
                    </div>

                    {/* Email Address */}
                    <div className="space-y-2">
                      <label
                        htmlFor="email"
                        className="text-xs font-semibold uppercase tracking-wider text-[var(--ctl-ink)] block"
                      >
                        Corporate Email *
                      </label>
                      <input
                        id="email"
                        name="email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="founder@company.com"
                        className="w-full px-3.5 py-2.5 rounded-[2px] border border-[var(--ctl-line)] bg-[var(--ctl-paper)] text-[var(--ctl-text)] text-sm focus:outline-none focus:border-[var(--ctl-ink)]"
                      />
                      {errors.email && (
                        <p className="text-xs text-red-600 font-sans">{errors.email}</p>
                      )}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    {/* Company / Entity */}
                    <div className="space-y-2">
                      <label
                        htmlFor="company"
                        className="text-xs font-semibold uppercase tracking-wider text-[var(--ctl-ink)] block"
                      >
                        Company / Project Name
                      </label>
                      <input
                        id="company"
                        name="company"
                        type="text"
                        value={formData.company}
                        onChange={handleChange}
                        placeholder="Analytical Engine Co."
                        className="w-full px-3.5 py-2.5 rounded-[2px] border border-[var(--ctl-line)] bg-[var(--ctl-paper)] text-[var(--ctl-text)] text-sm focus:outline-none focus:border-[var(--ctl-ink)]"
                      />
                    </div>

                    {/* Service Type */}
                    <div className="space-y-2">
                      <label
                        htmlFor="serviceType"
                        className="text-xs font-semibold uppercase tracking-wider text-[var(--ctl-ink)] block"
                      >
                        Engagement Type *
                      </label>
                      <select
                        id="serviceType"
                        name="serviceType"
                        value={formData.serviceType}
                        onChange={handleChange}
                        className="w-full px-3.5 py-2.5 rounded-[2px] border border-[var(--ctl-line)] bg-[var(--ctl-paper)] text-[var(--ctl-text)] text-sm focus:outline-none focus:border-[var(--ctl-ink)]"
                      >
                        {SERVICE_TYPE_OPTIONS.map((opt) => (
                          <option key={opt} value={opt}>
                            {opt}
                          </option>
                        ))}
                      </select>
                      {errors.serviceType && (
                        <p className="text-xs text-red-600 font-sans">{errors.serviceType}</p>
                      )}
                    </div>
                  </div>

                  {/* Project Description */}
                  <div className="space-y-2">
                    <label
                      htmlFor="description"
                      className="text-xs font-semibold uppercase tracking-wider text-[var(--ctl-ink)] block"
                    >
                      Project Scope &amp; Objectives *
                    </label>
                    <textarea
                      id="description"
                      name="description"
                      rows={5}
                      value={formData.description}
                      onChange={handleChange}
                      placeholder="Tell us about your product idea or operational problem, your current stage, desired outcome, and timeline..."
                      className="w-full px-3.5 py-2.5 rounded-[2px] border border-[var(--ctl-line)] bg-[var(--ctl-paper)] text-[var(--ctl-text)] text-sm focus:outline-none focus:border-[var(--ctl-ink)]"
                    />
                    {errors.description && (
                      <p className="text-xs text-red-600 font-sans">{errors.description}</p>
                    )}
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    {/* Budget Range */}
                    <div className="space-y-2">
                      <label
                        htmlFor="budgetRange"
                        className="text-xs font-semibold uppercase tracking-wider text-[var(--ctl-ink)] block"
                      >
                        Allocated Budget Band
                      </label>
                      <select
                        id="budgetRange"
                        name="budgetRange"
                        value={formData.budgetRange}
                        onChange={handleChange}
                        className="w-full px-3.5 py-2.5 rounded-[2px] border border-[var(--ctl-line)] bg-[var(--ctl-paper)] text-[var(--ctl-text)] text-sm focus:outline-none focus:border-[var(--ctl-ink)]"
                      >
                        {BUDGET_RANGE_OPTIONS.map((opt) => (
                          <option key={opt} value={opt}>
                            {opt}
                          </option>
                        ))}
                      </select>
                    </div>

                    {/* Referral Source */}
                    <div className="space-y-2">
                      <label
                        htmlFor="referral"
                        className="text-xs font-semibold uppercase tracking-wider text-[var(--ctl-ink)] block"
                      >
                        How Did You Find Us?
                      </label>
                      <select
                        id="referral"
                        name="referral"
                        value={formData.referral}
                        onChange={handleChange}
                        className="w-full px-3.5 py-2.5 rounded-[2px] border border-[var(--ctl-line)] bg-[var(--ctl-paper)] text-[var(--ctl-text)] text-sm focus:outline-none focus:border-[var(--ctl-ink)]"
                      >
                        <option value="">Select source...</option>
                        {REFERRAL_OPTIONS.map((opt) => (
                          <option key={opt} value={opt}>
                            {opt}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div className="pt-4 border-t border-[var(--ctl-line)]">
                    <CopperplateButton
                      variant="deep"
                      className="w-full h-12 text-sm"
                      onClick={() => {}}
                    >
                      {isSubmitting ? (
                        <>
                          <Loader2 className="w-4 h-4 animate-spin" />
                          <span>Dispatching to Ledger...</span>
                        </>
                      ) : (
                        <>
                          <span>Submit Project Specification</span>
                          <Send className="w-4 h-4" />
                        </>
                      )}
                    </CopperplateButton>
                  </div>
                </form>
              )}
            </EtchedCard>
          </div>

          {/* ==========================================
              RIGHT COLUMN: DISPATCH INFO PANEL
              ========================================== */}
          <div className="lg:col-span-5 space-y-6">
            <EtchedCard className="p-8 space-y-6">
              <div className="border-b border-[var(--ctl-line)] pb-4 flex items-center justify-between">
                <span className="text-[11px] font-semibold uppercase tracking-widest text-[var(--ctl-ink)]">
                  Direct Coordination
                </span>
                <span className="text-xs font-serif text-[var(--ctl-soft)]">
                  &lt;24h Response Time SLA
                </span>
              </div>

              {/* Direct Booking on Calendly */}
              <div className="space-y-3">
                <h3 className="font-serif text-xl text-[var(--ctl-text)]">
                  Prefer a Live Discovery Call?
                </h3>
                <p className="text-sm text-[var(--ctl-soft)] leading-relaxed">
                  Book a 30-minute technical architecture call directly on our team calendar.
                </p>
                <a
                  href="https://calendly.com/proquoment"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full"
                >
                  <CopperplateButton variant="paper" className="w-full">
                    <Calendar className="w-4 h-4 text-[var(--ctl-ink)]" />
                    <span>Book on Calendly &rarr;</span>
                  </CopperplateButton>
                </a>
              </div>

              <HatchDivider className="my-6" />

              {/* Email & Details */}
              <div className="space-y-4 text-sm text-[var(--ctl-soft)]">
                <div>
                  <span className="text-[11px] font-semibold uppercase tracking-wider text-[var(--ctl-ink)] block mb-1">
                    Direct Email
                  </span>
                  <a
                    href="mailto:contact@proquoment.in"
                    className="font-serif text-lg text-[var(--ctl-text)] hover:text-[var(--ctl-ink)] transition-colors flex items-center gap-2"
                  >
                    <Mail className="w-4 h-4 text-[var(--ctl-ink)]" />
                    <span>contact@proquoment.in</span>
                  </a>
                </div>

                <div>
                  <span className="text-[11px] font-semibold uppercase tracking-wider text-[var(--ctl-ink)] block mb-1">
                    Headquarters
                  </span>
                  <p className="text-[var(--ctl-text)]">
                    Gurgaon, Haryana, India · Serving global enterprise partners
                  </p>
                </div>
              </div>

              {/* Wax Seal Illustration */}
              <div className="pt-4 border-t border-[var(--ctl-line)] flex items-center justify-center">
                <WaxSealBadge size={130} />
              </div>
            </EtchedCard>
          </div>
        </div>
      </section>
    </div>
  );
}

export default ContactPage;
