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
      } catch (sbErr) {\n        console.error(\"Supabase network error:\", sbErr);\n        supabaseErrorOccurred = true;\n        supabaseErrorMessage =\n          sbErr instanceof Error ? sbErr.message : \"Failed to connect to database.\";\n      }\n\n      // 2. Dual-write to Google Sheet webapp URL if configured\n      const googleSheetUrl = import.meta.env.VITE_GOOGLE_SHEET_WEBAPP_URL as\n        | string\n        | undefined;\n\n      if (googleSheetUrl) {\n        try {\n          await fetch(googleSheetUrl, {\n            method: \"POST\",\n            mode: \"no-cors\",\n            headers: {\n              \"Content-Type\": \"application/json\",\n            },\n            body: JSON.stringify({\n              timestamp: new Date().toISOString(),\n              full_name: payload.full_name,\n              fullName: payload.full_name,\n              email: payload.email,\n              company: payload.company || \"\",\n              service_type: payload.service_type,\n              serviceType: payload.service_type,\n              inquiry_type: payload.service_type,\n              description: payload.description,\n              message: payload.description,\n              budget_range: payload.budget_range || \"\",\n              budgetRange: payload.budget_range || \"\",\n              referral: payload.referral || \"\",\n              source: sourceUrl,\n              sourceUrl,\n            }),\n          });\n        } catch (sheetErr) {\n          console.warn(\"Google Sheet dual-write non-blocking err:\", sheetErr);\n        }\n      }\n\n      if (supabaseErrorOccurred && !googleSheetUrl) {\n        setErrorMessage(\n          supabaseErrorMessage || \"Failed to submit enquiry. Please email us directly.\"\n        );\n        setIsSubmitting(false);\n        return;\n      }\n\n      setIsSuccess(true);\n      setIsSubmitting(false);\n    } catch (err) {\n      console.error(\"Unexpected submission error:\", err);\n      setErrorMessage(\"An unexpected error occurred. Please reach out via email.\");\n      setIsSubmitting(false);\n    }\n  };\n\n  return (\n    <div className=\"relative min-h-screen text-[var(--ctl-text)] bg-[var(--ctl-paper)] overflow-hidden\">\n      {/* ============================================================\n          PAGE HEADER\n          ============================================================ */}\n      <section className=\"py-20 border-b border-[var(--ctl-line)] bg-[var(--ctl-paper)]\">\n        <div className=\"max-w-7xl mx-auto px-6\">\n          <PlateHeader\n            kicker=\"DIRECT INQUIRY\"\n            title=\"Let Us Build Something\"\n            italicWord=\"Lasting.\"\n            description=\"Tell us about your product idea, operational challenges or systems to connect. A senior engineering partner reviews and responds within 24 hours.\"\n          />\n        </div>\n      </section>\n\n      {/* ============================================================\n          MAIN 2-COLUMN SECTION\n          ============================================================ */}\n      <section className=\"py-24 max-w-7xl mx-auto px-6\">\n        <div className=\"grid grid-cols-1 lg:grid-cols-12 gap-12 items-start\">\n          {/* ==========================================\n              LEFT COLUMN: LETTERPRESS INQUIRY FORM\n              ========================================== */}\n          <div className=\"lg:col-span-7\">\n            <EtchedCard className=\"p-8 sm:p-10 space-y-8\">\n              <div className=\"border-b border-[var(--ctl-line)] pb-4 flex items-center justify-between\">\n                <div>\n                  <h2 className=\"font-serif text-2xl sm:text-3xl text-[var(--ctl-text)]\">\n                    Project Specification\n                  </h2>\n                  <p className=\"text-xs text-[var(--ctl-soft)] mt-1 font-sans uppercase tracking-wider\">\n                    Engraving Ledger · Vol. I\n                  </p>\n                </div>\n                <span className=\"text-[11px] font-semibold tracking-wider uppercase px-2.5 py-1 border border-[var(--ctl-line)] text-[var(--ctl-ink)] rounded-[2px] bg-[var(--ctl-wash)]\">\n                  Confidential\n                </span>\n              </div>\n\n              {isSuccess ? (\n                <div className=\"py-12 text-center space-y-6\">\n                  <div className=\"w-16 h-16 mx-auto rounded-full bg-[var(--ctl-wash)] border border-[var(--ctl-line)] text-[var(--ctl-ink)] flex items-center justify-center\">\n                    <CheckCircle2 className=\"w-8 h-8\" />\n                  </div>\n                  <h3 className=\"font-serif text-3xl text-[var(--ctl-text)]\">\n                    Enquiry Received!\n                  </h3>\n                  <p className=\"text-[16px] text-[var(--ctl-soft)] max-w-md mx-auto leading-relaxed\">\n                    Your project details have been recorded in our dispatch ledger. A senior\n                    partner will review the technical scope and follow up within 24 hours.\n                  </p>\n                  <div className=\"pt-4 flex justify-center\">\n                    <button\n                      type=\"button\"\n                      onClick={() => {\n                        setIsSuccess(false);\n                        setFormData({\n                          fullName: \"\",\n                          email: \"\",\n                          company: \"\",\n                          serviceType: \"AI SaaS & Digital Product Engineering\",\n                          description: \"\",\n                          budgetRange: \"$5,000 - $10,000 (MVP & Early Stage Development)\",\n                          referral: \"\",\n                        });\n                      }}\n                      className=\"text-xs font-semibold uppercase tracking-wider text-[var(--ctl-ink)] underline\"\n                    >\n                      Submit Another Specification\n                    </button>\n                  </div>\n                </div>\n              ) : (\n                <form onSubmit={handleSubmit} className=\"space-y-6\">\n                  {errorMessage && (\n                    <div className=\"p-4 rounded-[2px] border border-red-300 bg-red-50 text-red-800 text-sm flex items-center gap-2\">\n                      <AlertCircle className=\"w-4 h-4 shrink-0\" />\n                      <span>{errorMessage}</span>\n                    </div>\n                  )}\n\n                  <div className=\"grid grid-cols-1 sm:grid-cols-2 gap-6\">\n                    {/* Full Name */}\n                    <div className=\"space-y-2\">\n                      <label\n                        htmlFor=\"fullName\"\n                        className=\"text-xs font-semibold uppercase tracking-wider text-[var(--ctl-ink)] block\"\n                      >\n                        Full Name *\n                      </label>\n                      <input\n                        type=\"text\"\n                        id=\"fullName\"\n                        name=\"fullName\"\n                        value={formData.fullName}\n                        onChange={handleChange}\n                        placeholder=\"Ada Lovelace\"\n                        className=\"w-full px-3.5 py-2.5 rounded-[2px] border border-[var(--ctl-line)] bg-[var(--ctl-paper)] text-[var(--ctl-text)] text-sm focus:outline-none focus:border-[var(--ctl-ink)]\"\n                      />\n                      {errors.fullName && (\n                        <p className=\"text-xs text-red-600 font-sans\">{errors.fullName}</p>\n                      )}\n                    </div>\n\n                    {/* Email Address */}\n                    <div className=\"space-y-2\">\n                      <label\n                        htmlFor=\"email\"\n                        className=\"text-xs font-semibold uppercase tracking-wider text-[var(--ctl-ink)] block\"\n                      >\n                        Email Address *\n                      </label>\n                      <input\n                        type=\"email\"\n                        id=\"email\"\n                        name=\"email\"\n                        value={formData.email}\n                        onChange={handleChange}\n                        placeholder=\"ada@analytical-engine.com\"\n                        className=\"w-full px-3.5 py-2.5 rounded-[2px] border border-[var(--ctl-line)] bg-[var(--ctl-paper)] text-[var(--ctl-text)] text-sm focus:outline-none focus:border-[var(--ctl-ink)]\"\n                      />\n                      {errors.email && (\n                        <p className=\"text-xs text-red-600 font-sans\">{errors.email}</p>\n                      )}\n                    </div>\n                  </div>\n\n                  <div className=\"grid grid-cols-1 sm:grid-cols-2 gap-6\">\n                    {/* Company */}\n                    <div className=\"space-y-2\">\n                      <label\n                        htmlFor=\"company\"\n                        className=\"text-xs font-semibold uppercase tracking-wider text-[var(--ctl-ink)] block\"\n                      >\n                        Company / Organization\n                      </label>\n                      <input\n                        type=\"text\"\n                        id=\"company\"\n                        name=\"company\"\n                        value={formData.company}\n                        onChange={handleChange}\n                        placeholder=\"Analytical Engine Co.\"\n                        className=\"w-full px-3.5 py-2.5 rounded-[2px] border border-[var(--ctl-line)] bg-[var(--ctl-paper)] text-[var(--ctl-text)] text-sm focus:outline-none focus:border-[var(--ctl-ink)]\"\n                      />\n                    </div>\n\n                    {/* Service Type */}\n                    <div className=\"space-y-2\">\n                      <label\n                        htmlFor=\"serviceType\"\n                        className=\"text-xs font-semibold uppercase tracking-wider text-[var(--ctl-ink)] block\"\n                      >\n                        Engagement Type *\n                      </label>\n                      <select\n                        id=\"serviceType\"\n                        name=\"serviceType\"\n                        value={formData.serviceType}\n                        onChange={handleChange}\n                        className=\"w-full px-3.5 py-2.5 rounded-[2px] border border-[var(--ctl-line)] bg-[var(--ctl-paper)] text-[var(--ctl-text)] text-sm focus:outline-none focus:border-[var(--ctl-ink)]\"\n                      >\n                        {SERVICE_TYPE_OPTIONS.map((opt) => (\n                          <option key={opt} value={opt}>\n                            {opt}\n                          </option>\n                        ))}\n                      </select>\n                      {errors.serviceType && (\n                        <p className=\"text-xs text-red-600 font-sans\">{errors.serviceType}</p>\n                      )}\n                    </div>\n                  </div>\n\n                  {/* Project Description */}\n                  <div className=\"space-y-2\">\n                    <label\n                      htmlFor=\"description\"\n                      className=\"text-xs font-semibold uppercase tracking-wider text-[var(--ctl-ink)] block\"\n                    >\n                      Project Scope &amp; Objectives *\n                    </label>\n                    <textarea\n                      id=\"description\"\n                      name=\"description\"\n                      rows={5}\n                      value={formData.description}\n                      onChange={handleChange}\n                      placeholder=\"Tell us about your product idea or operational problem, your current stage, desired outcome, and timeline...\"\n                      className=\"w-full px-3.5 py-2.5 rounded-[2px] border border-[var(--ctl-line)] bg-[var(--ctl-paper)] text-[var(--ctl-text)] text-sm focus:outline-none focus:border-[var(--ctl-ink)]\"\n                    />\n                    {errors.description && (\n                      <p className=\"text-xs text-red-600 font-sans\">{errors.description}</p>\n                    )}\n                  </div>\n\n                  <div className=\"grid grid-cols-1 sm:grid-cols-2 gap-6\">\n                    {/* Budget Range */}\n                    <div className=\"space-y-2\">\n                      <label\n                        htmlFor=\"budgetRange\"\n                        className=\"text-xs font-semibold uppercase tracking-wider text-[var(--ctl-ink)] block\"\n                      >\n                        Estimated Budget\n                      </label>\n                      <select\n                        id=\"budgetRange\"\n                        name=\"budgetRange\"\n                        value={formData.budgetRange}\n                        onChange={handleChange}\n                        className=\"w-full px-3.5 py-2.5 rounded-[2px] border border-[var(--ctl-line)] bg-[var(--ctl-paper)] text-[var(--ctl-text)] text-sm focus:outline-none focus:border-[var(--ctl-ink)]\"\n                      >\n                        {BUDGET_RANGE_OPTIONS.map((opt) => (\n                          <option key={opt} value={opt}>\n                            {opt}\n                          </option>\n                        ))}\n                      </select>\n                    </div>\n\n                    {/* Referral */}\n                    <div className=\"space-y-2\">\n                      <label\n                        htmlFor=\"referral\"\n                        className=\"text-xs font-semibold uppercase tracking-wider text-[var(--ctl-ink)] block\"\n                      >\n                        How did you hear about us?\n                      </label>\n                      <select\n                        id=\"referral\"\n                        name=\"referral\"\n                        value={formData.referral}\n                        onChange={handleChange}\n                        className=\"w-full px-3.5 py-2.5 rounded-[2px] border border-[var(--ctl-line)] bg-[var(--ctl-paper)] text-[var(--ctl-text)] text-sm focus:outline-none focus:border-[var(--ctl-ink)]\"\n                      >\n                        <option value=\"\">Select source...</option>\n                        {REFERRAL_OPTIONS.map((opt) => (\n                          <option key={opt} value={opt}>\n                            {opt}\n                          </option>\n                        ))}\n                      </select>\n                    </div>\n                  </div>\n\n                  <div className=\"pt-4 border-t border-[var(--ctl-line)]\">\n                    <CopperplateButton\n                      variant=\"deep\"\n                      className=\"w-full h-12 text-sm\"\n                      onClick={() => {}}\n                    >\n                      {isSubmitting ? (\n                        <>\n                          <Loader2 className=\"w-4 h-4 animate-spin\" />\n                          <span>Dispatching to Ledger...</span>\n                        </>\n                      ) : (\n                        <>\n                          <span>Submit Project Specification</span>\n                          <Send className=\"w-4 h-4\" />\n                        </>\n                      )}\n                    </CopperplateButton>\n                  </div>\n                </form>\n              )}\n            </EtchedCard>\n          </div>\n\n          {/* ==========================================\n              RIGHT COLUMN: DISPATCH INFO PANEL\n              ========================================== */}\n          <div className=\"lg:col-span-5 space-y-6\">\n            <EtchedCard className=\"p-8 space-y-6\">\n              <div className=\"border-b border-[var(--ctl-line)] pb-4 flex items-center justify-between\">\n                <span className=\"text-[11px] font-semibold uppercase tracking-widest text-[var(--ctl-ink)]\">\n                  Direct Coordination\n                </span>\n                <span className=\"text-xs font-serif text-[var(--ctl-soft)]\">\n                  &lt;24h Response Time SLA\n                </span>\n              </div>\n\n              {/* Direct Booking on Calendly */}\n              <div className=\"space-y-3\">\n                <h3 className=\"font-serif text-xl text-[var(--ctl-text)]\">\n                  Prefer a Live Discovery Call?\n                </h3>\n                <p className=\"text-sm text-[var(--ctl-soft)] leading-relaxed\">\n                  Book a 30-minute technical architecture call directly on our team calendar.\n                </p>\n                <a\n                  href=\"https://calendly.com/proquoment\"\n                  target=\"_blank\"\n                  rel=\"noopener noreferrer\"\n                  className=\"block w-full\"\n                >\n                  <CopperplateButton variant=\"paper\" className=\"w-full\">\n                    <Calendar className=\"w-4 h-4 text-[var(--ctl-ink)]\" />\n                    <span>Book on Calendly &rarr;</span>\n                  </CopperplateButton>\n                </a>\n              </div>\n\n              <HatchDivider className=\"my-6\" />\n\n              {/* Email & Details */}\n              <div className=\"space-y-4 text-sm text-[var(--ctl-soft)]\">\n                <div>\n                  <span className=\"text-[11px] font-semibold uppercase tracking-wider text-[var(--ctl-ink)] block mb-1\">\n                    Direct Email\n                  </span>\n                  <a\n                    href=\"mailto:contact@proquoment.in\"\n                    className=\"font-serif text-lg text-[var(--ctl-text)] hover:text-[var(--ctl-ink)] transition-colors flex items-center gap-2\"\n                  >\n                    <Mail className=\"w-4 h-4 text-[var(--ctl-ink)]\" />\n                    <span>contact@proquoment.in</span>\n                  </a>\n                </div>\n\n                <div>\n                  <span className=\"text-[11px] font-semibold uppercase tracking-wider text-[var(--ctl-ink)] block mb-1\">\n                    Headquarters\n                  </span>\n                  <p className=\"text-[var(--ctl-text)]\">\n                    Bangalore, Karnataka, India · Serving global enterprise partners\n                  </p>\n                </div>\n\n                <div>\n                  <span className=\"text-[11px] font-semibold uppercase tracking-wider text-[var(--ctl-ink)] block mb-1\">\n                    Enterprise Platform\n                  </span>\n                  <a\n                    href=\"https://proquoment.in\"\n                    target=\"_blank\"\n                    rel=\"noopener noreferrer\"\n                    className=\"text-[var(--ctl-ink)] hover:underline flex items-center gap-1 font-medium\"\n                  >\n                    <span>Visit Proquoment Platform</span>\n                    <ExternalLink className=\"w-3.5 h-3.5\" />\n                  </a>\n                </div>\n              </div>\n\n              {/* Wax Seal Illustration */}\n              <div className=\"pt-4 border-t border-[var(--ctl-line)] flex items-center justify-center\">\n                <WaxSealBadge size={130} />\n              </div>\n            </EtchedCard>\n          </div>\n        </div>\n      </section>\n    </div>\n  );\n}\n\nexport default ContactPage;\n