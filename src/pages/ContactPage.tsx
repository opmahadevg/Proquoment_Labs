import * as React from "react";
import { useState } from "react";
import { Link } from "wouter";
import { supabase } from "@/lib/supabase";
import type { LabsEnquiry } from "@/lib/supabase";
import {
  PlateHeader,
  PlateKicker,
  EtchedCard,
  CopperplateButton,
  WaxSealBadge,
  HatchDivider,
} from "@/components/ui/copperplate-primitives";
import {
  Mail,
  Calendar,
  Clock,
  ExternalLink,
  ShieldCheck,
  CheckCircle2,
  AlertCircle,
  Loader2,
  ArrowRight,
  Send,
  Building2,
  Lock,
} from "lucide-react";

export interface ContactFormData {
  fullName: string;
  email: string;
  company: string;
  serviceType: string;
  description: string;
  budgetRange: string;
  referral: string;
}

export const SERVICE_TYPE_OPTIONS = [
  "AI SaaS & Digital Product Engineering",
  "Business Process Automation & Integrations",
  "Web Applications & Digital Experiences",
  "Custom AI Agents & Specialist AI Systems",
  "Other Custom Software Requirements",
];

export const BUDGET_RANGE_OPTIONS = [
  "$3,000 - $5,000 (Scoping & Prototyping)",
  "$5,000 - $10,000 (MVP & Early Stage Development)",
  "$10,000 - $25,000 (Full Product & System Engineering)",
  "$25,000 - $50,000+ (Scale & Advanced Engineering)",
  "Flexible / To Be Discussed",
];

export const REFERRAL_OPTIONS = [
  "Google Search",
  "LinkedIn",
  "Referral / Word of Mouth",
  "Twitter / X",
  "GitHub",
  "Proquoment Platform",
  "Other",
];

export function ContactPage() {
  const [formData, setFormData] = useState<ContactFormData>({
    fullName: "",
    email: "",
    company: "",
    serviceType: "AI SaaS & Digital Product Engineering",
    description: "",
    budgetRange: "$5,000 - $10,000 (MVP & Early Stage Development)",
    referral: "",
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const validate = (): boolean => {
    const newErrors: Record<string, string> = {};

    if (!formData.fullName.trim()) {
      newErrors.fullName = "Full name is required.";
    } else if (formData.fullName.trim().length < 2) {
      newErrors.fullName = "Please enter your full name.";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email address is required.";
    } else if (
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(formData.email.trim())
    ) {
      newErrors.email = "Please enter a valid email address.";
    }

    if (!formData.serviceType) {
      newErrors.serviceType = "Please select a service type.";
    }

    if (!formData.description.trim()) {
      newErrors.description = "Project description is required.";
    } else if (formData.description.trim().length < 10) {
      newErrors.description =
        "Please provide at least 10 characters describing your project or goals.";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
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
    setErrorMessage(null);

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
        source_url: sourceUrl,
      };

      let supabaseErrorOccurred = false;
      let supabaseErrorMessage = "";

      // 1. Submit to Supabase table `labs_enquiries`
      try {
        const { error: supabaseError } = await supabase.from("labs_enquiries").insert([
          {
            full_name: payload.full_name,
            email: payload.email,
            company: payload.company || null,
            service_type: payload.service_type,
            description: payload.description,
            budget_range: payload.budget_range || null,
            referral: payload.referral || null,
            source_url: payload.source_url,
          },
        ]);

        if (supabaseError) {
          console.error("Supabase submission error:", supabaseError);
          supabaseErrorOccurred = true;
          supabaseErrorMessage = supabaseError.message || "Failed to submit project enquiry.";
        }
      } catch (sbErr) {
        console.error("Supabase network error:", sbErr);
        supabaseErrorOccurred = true;
        supabaseErrorMessage =
          sbErr instanceof Error ? sbErr.message : "Failed to connect to database.";
      }

      // 2. Dual-write to Google Sheet webapp URL if configured
      const googleSheetUrl = import.meta.env.VITE_GOOGLE_SHEET_WEBAPP_URL as
        | string
        | undefined;

      if (googleSheetUrl) {
        try {
          await fetch(googleSheetUrl, {
            method: "POST",
            mode: "no-cors",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              timestamp: new Date().toISOString(),
              full_name: payload.full_name,
              fullName: payload.full_name,
              email: payload.email,
              company: payload.company || "",
              service_type: payload.service_type,
              serviceType: payload.service_type,
              inquiry_type: payload.service_type,
              description: payload.description,
              message: payload.description,
              budget_range: payload.budget_range || "",
              budgetRange: payload.budget_range || "",
              referral: payload.referral || "",
              source: sourceUrl,
              sourceUrl,
            }),
          });
        } catch (sheetErr) {
          console.warn("Google Sheet dual-write non-blocking err:", sheetErr);
        }
      }

      if (supabaseErrorOccurred && !googleSheetUrl) {
        setErrorMessage(
          supabaseErrorMessage || "Failed to submit enquiry. Please email us directly."
        );
        setIsSubmitting(false);
        return;
      }

      setIsSuccess(true);
      setIsSubmitting(false);
    } catch (err) {
      console.error("Unexpected submission error:", err);
      setErrorMessage("An unexpected error occurred. Please reach out via email.");
      setIsSubmitting(false);
    }
  };

  return (
    <div className="relative min-h-screen text-[var(--ctl-text)] bg-[var(--ctl-paper)] overflow-hidden">
      {/* ============================================================
          PAGE HEADER
          ============================================================ */}
      <section className="py-20 border-b border-[var(--ctl-line)] bg-[var(--ctl-paper)]">
        <div className="max-w-7xl mx-auto px-6">
          <PlateHeader
            kicker="DIRECT INQUIRY"
            title="Let Us Build Something"
            italicWord="Lasting."
            description="Tell us about your product idea, operational challenges or systems to connect. A senior engineering partner reviews and responds within 24 hours."
          />
        </div>
      </section>

      {/* ============================================================
          MAIN 2-COLUMN SECTION
          ============================================================ */}
      <section className="py-24 max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* ==========================================
              LEFT COLUMN: LETTERPRESS INQUIRY FORM
              ========================================== */}
          <div className="lg:col-span-7">
            <EtchedCard className="p-8 sm:p-10 space-y-8">
              <div className="border-b border-[var(--ctl-line)] pb-4 flex items-center justify-between">
                <div>
                  <h2 className="font-serif text-2xl sm:text-3xl text-[var(--ctl-text)]">
                    Project Specification
                  </h2>
                  <p className="text-xs text-[var(--ctl-soft)] mt-1 font-sans uppercase tracking-wider">
                    Engraving Ledger · Vol. I
                  </p>
                </div>
                <span className="text-[11px] font-semibold tracking-wider uppercase px-2.5 py-1 border border-[var(--ctl-line)] text-[var(--ctl-ink)] rounded-[2px] bg-[var(--ctl-wash)]">
                  Confidential
                </span>
              </div>

              {isSuccess ? (
                <div className="py-12 text-center space-y-6">
                  <div className="w-16 h-16 mx-auto rounded-full bg-[var(--ctl-wash)] border border-[var(--ctl-line)] text-[var(--ctl-ink)] flex items-center justify-center">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="font-serif text-3xl text-[var(--ctl-text)]">
                    Enquiry Received!
                  </h3>
                  <p className="text-[16px] text-[var(--ctl-soft)] max-w-md mx-auto leading-relaxed">
                    Your project details have been recorded in our dispatch ledger. A senior
                    partner will review the technical scope and follow up within 24 hours.
                  </p>
                  <div className="pt-4 flex justify-center">
                    <button
                      type="button"
                      onClick={() => {
                        setIsSuccess(false);
                        setFormData({
                          fullName: "",
                          email: "",
                          company: "",
                          serviceType: "AI SaaS & Digital Product Engineering",
                          description: "",
                          budgetRange: "$5,000 - $10,000 (MVP & Early Stage Development)",
                          referral: "",
                        });
                      }}
                      className="text-xs font-semibold uppercase tracking-wider text-[var(--ctl-ink)] underline"
                    >
                      Submit Another Specification
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  {errorMessage && (
                    <div className="p-4 rounded-[2px] border border-red-300 bg-red-50 text-red-800 text-sm flex items-center gap-2">
                      <AlertCircle className="w-4 h-4 shrink-0" />
                      <span>{errorMessage}</span>
                    </div>
                  )}

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    {/* Full Name */}
                    <div className="space-y-2">
                      <label
                        htmlFor="fullName"
                        className="text-xs font-semibold uppercase tracking-wider text-[var(--ctl-ink)] block"
                      >
                        Full Name *
                      </label>
                      <input
                        type="text"
                        id="fullName"
                        name="fullName"
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
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="ada@analytical-engine.com"
                        className="w-full px-3.5 py-2.5 rounded-[2px] border border-[var(--ctl-line)] bg-[var(--ctl-paper)] text-[var(--ctl-text)] text-sm focus:outline-none focus:border-[var(--ctl-ink)]"
                      />
                      {errors.email && (
                        <p className="text-xs text-red-600 font-sans">{errors.email}</p>
                      )}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    {/* Company */}
                    <div className="space-y-2">
                      <label
                        htmlFor="company"
                        className="text-xs font-semibold uppercase tracking-wider text-[var(--ctl-ink)] block"
                      >
                        Company / Organization
                      </label>
                      <input
                        type="text"
                        id="company"
                        name="company"
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
                        Estimated Budget
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

                    {/* Referral */}
                    <div className="space-y-2">
                      <label
                        htmlFor="referral"
                        className="text-xs font-semibold uppercase tracking-wider text-[var(--ctl-ink)] block"
                      >
                        How did you hear about us?
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
