import * as React from "react";
import { Link } from "wouter";
import {
  PlateHeader,
  PlateKicker,
  EtchedCard,
  CopperplateButton,
  WaxSealBadge,
  HatchDivider,
} from "@/components/ui/copperplate-primitives";
import {
  Building2,
  Rocket,
  Code2,
  Zap,
  Target,
  Compass,
  ArrowRight,
  ExternalLink,
  ShieldCheck,
  CheckCircle2,
  Cpu,
  Layers,
  Sparkles,
  Users,
} from "lucide-react";

export function AboutPage() {
  return (
    <div className="relative min-h-screen text-[var(--ctl-text)] bg-[var(--ctl-paper)] overflow-hidden">
      {/* ============================================================
          PAGE HERO
          ============================================================ */}
      <section className="py-20 border-b border-[var(--ctl-line)] bg-[var(--ctl-paper)]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-8 space-y-6">
              <PlateKicker>AI-NATIVE PRODUCT &amp; ENGINEERING STUDIO</PlateKicker>
              <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-[var(--ctl-text)] leading-[1.08]">
                Build for the Future.{" "}
                <span className="italic text-[var(--ctl-ink)] font-normal block mt-1">
                  Become AI-Ready Today.
                </span>
              </h1>
              <p className="text-[16px] sm:text-lg text-[var(--ctl-soft)] leading-relaxed max-w-2xl">
                We help ambitious startups build AI-powered products and help businesses prepare for an
                AI-powered future through intelligent software, automation and modern engineering.
              </p>
              <div className="flex flex-wrap items-center gap-4 pt-2">
                <Link href="/contact">
                  <CopperplateButton variant="deep">
                    <span>Work With Us</span>
                    <ArrowRight className="w-4 h-4" />
                  </CopperplateButton>
                </Link>
                <Link href="/work">
                  <CopperplateButton variant="paper">
                    <span>Explore Our Work</span>
                  </CopperplateButton>
                </Link>
              </div>
            </div>
            <div className="lg:col-span-4 flex justify-center">
              <WaxSealBadge size={170} />
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================
          SECTION 1: ORIGIN STORY
          ============================================================ */}
      <section className="py-24 border-b border-[var(--ctl-line)] bg-[var(--ctl-wash)]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6 space-y-6">
              <div className="flex items-center gap-2">
                <span className="text-[11px] font-semibold uppercase tracking-wider px-2.5 py-0.5 border border-[var(--ctl-line)] rounded-[2px] text-[var(--ctl-ink)] bg-[var(--ctl-paper)]">
                  Our Origin
                </span>
                <span className="text-xs text-[var(--ctl-soft)]">
                  Division of Proquoment Private Limited
                </span>
              </div>

              <h2 className="font-serif text-3xl sm:text-4xl text-[var(--ctl-text)] leading-snug">
                Born from the Reality of Enterprise Operations
              </h2>

              <p className="text-[16px] text-[var(--ctl-soft)] leading-relaxed">
                Proquoment began by tackling operational friction in enterprise workflows and business
                systems. In doing so, we encountered a universal reality: early-stage founders struggled
                to turn ambitious product ideas into production software, while existing businesses were
                drowning in manual coordination, disconnected tools, and fragmented systems.
              </p>

              <p className="text-[16px] text-[var(--ctl-soft)] leading-relaxed">
                When artificial intelligence advanced, the market flooded with theoretical consulting
                and superficial chatbot demos. We recognized that founders and business operators did
                not need more strategy decks: they needed an engineering studio that combines practical
                product thinking, applied artificial intelligence, and hands-on software engineering.
              </p>

              <p className="text-[16px] text-[var(--ctl-soft)] leading-relaxed">
                That was the genesis of <strong className="text-[var(--ctl-ink)]">Proquoment Labs</strong>:
                an AI-native product and engineering studio operating as a distinct client-services brand
                within the Proquoment ecosystem, dedicated to building production digital platforms and
                making businesses AI-ready.
              </p>
            </div>

            <div className="lg:col-span-6">
              <EtchedCard className="space-y-6 p-8">
                <span className="text-[11px] font-semibold uppercase tracking-widest text-[var(--ctl-ink)] block border-b border-[var(--ctl-line)] pb-3">
                  At a Glance · Operational Benchmarks
                </span>

                <div className="grid grid-cols-2 gap-8">
                  <div className="space-y-1">
                    <span className="font-serif text-3xl sm:text-4xl font-bold text-[var(--ctl-ink)] block">
                      4-6 Wks
                    </span>
                    <span className="text-xs uppercase tracking-wider text-[var(--ctl-soft)]">
                      Average MVP Sprint timeline
                    </span>
                  </div>
                  <div className="space-y-1">
                    <span className="font-serif text-3xl sm:text-4xl font-bold text-[var(--ctl-ink)] block">
                      100%
                    </span>
                    <span className="text-xs uppercase tracking-wider text-[var(--ctl-soft)]">
                      Codebase ownership transferred
                    </span>
                  </div>
                  <div className="space-y-1">
                    <span className="font-serif text-3xl sm:text-4xl font-bold text-[var(--ctl-ink)] block">
                      &lt; 1.2s
                    </span>
                    <span className="text-xs uppercase tracking-wider text-[var(--ctl-soft)]">
                      p95 latency in agent workflows
                    </span>
                  </div>
                  <div className="space-y-1">
                    <span className="font-serif text-3xl sm:text-4xl font-bold text-[var(--ctl-ink)] block">
                      24 Hours
                    </span>
                    <span className="text-xs uppercase tracking-wider text-[var(--ctl-soft)]">
                      Inquiry response SLA
                    </span>
                  </div>
                </div>

                <div className="pt-4 border-t border-[var(--ctl-line)] text-xs text-[var(--ctl-soft)] flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-[var(--ctl-ink)] shrink-0" />
                  <span>Headquartered in Bangalore, India with global client delivery.</span>
                </div>
              </EtchedCard>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================
          SECTION 2: OUR MISSION
          ============================================================ */}
      <section className="py-24 border-b border-[var(--ctl-line)]">
        <div className="max-w-7xl mx-auto px-6 space-y-12">
          <PlateHeader
            kicker="THE MISSION"
            title="Empowering Businesses to Become AI-Native"
            description="We define 'AI-Native' not as using AI as a novelty feature, but as fundamentally re-architecting how digital products are built and how operations execute."
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <EtchedCard className="space-y-4">
              <span className="font-serif text-2xl font-bold text-[var(--ctl-ink)]">I.</span>
              <h3 className="font-serif text-xl sm:text-2xl text-[var(--ctl-text)]">
                Build for the AI-Powered Future
              </h3>
              <p className="text-sm text-[var(--ctl-soft)] leading-relaxed">
                We help ambitious founders turn ideas and wireframes into working, monetizable AI-powered
                SaaS applications and digital products in rapid 4 to 6 week sprints.
              </p>
            </EtchedCard>

            <EtchedCard className="space-y-4">
              <span className="font-serif text-2xl font-bold text-[var(--ctl-ink)]">II.</span>
              <h3 className="font-serif text-xl sm:text-2xl text-[var(--ctl-text)]">
                Become AI-Ready Today
              </h3>
              <p className="text-sm text-[var(--ctl-soft)] leading-relaxed">
                We help growing and established businesses automate repetitive manual workflows, connect
                fragmented systems, and modernize software infrastructure to unlock practical AI value.
              </p>
            </EtchedCard>

            <EtchedCard className="space-y-4">
              <span className="font-serif text-2xl font-bold text-[var(--ctl-ink)]">III.</span>
              <h3 className="font-serif text-xl sm:text-2xl text-[var(--ctl-text)]">
                Full Code Ownership &amp; Data Security
              </h3>
              <p className="text-sm text-[var(--ctl-soft)] leading-relaxed">
                100% intellectual property ownership transferred upon project payment. We engineer systems
                with strict role-based controls, zero-leakage boundaries, and statutory compliance.
              </p>
            </EtchedCard>
          </div>
        </div>
      </section>

      {/* ============================================================
          SECTION 3: CORE PRINCIPLES
          ============================================================ */}
      <section className="py-24 border-b border-[var(--ctl-line)] bg-[var(--ctl-wash)]">
        <div className="max-w-7xl mx-auto px-6 space-y-12">
          <PlateHeader
            kicker="GUIDING ETHOS"
            title="Our Three Core Principles"
            description="The engineering beliefs that shape every architecture we design and line of code we ship."
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Principle 1 */}
            <EtchedCard className="space-y-4 flex flex-col justify-between">
              <div className="space-y-3">
                <span className="text-[11px] font-semibold uppercase tracking-widest text-[var(--ctl-ink)] block">
                  Principle 01
                </span>
                <h3 className="font-serif text-2xl text-[var(--ctl-text)]">
                  &ldquo;AI should be operational&rdquo;
                </h3>
                <p className="text-sm text-[var(--ctl-soft)] leading-relaxed">
                  If an artificial intelligence model does not interact with live databases, execute concrete
                  actions, or directly reduce operational friction, it is merely an expensive novelty.
                  We measure success strictly in hours saved, latency shaved, and business revenue generated.
                </p>
              </div>
              <div className="pt-4 border-t border-[var(--ctl-line)] text-xs uppercase tracking-wider text-[var(--ctl-ink)] font-semibold">
                Action &gt; Hype
              </div>
            </EtchedCard>

            {/* Principle 2 */}
            <EtchedCard className="space-y-4 flex flex-col justify-between">
              <div className="space-y-3">
                <span className="text-[11px] font-semibold uppercase tracking-widest text-[var(--ctl-ink)] block">
                  Principle 02
                </span>
                <h3 className="font-serif text-2xl text-[var(--ctl-text)]">
                  &ldquo;Businesses need builders&rdquo;
                </h3>
                <p className="text-sm text-[var(--ctl-soft)] leading-relaxed">
                  Consulting decks and theoretical roadmaps do not deploy themselves. We are hands-on software
                  engineers who write production TypeScript and Python, configure containerized cloud infrastructure,
                  and remain accountable for end-to-end delivery.
                </p>
              </div>
              <div className="pt-4 border-t border-[var(--ctl-line)] text-xs uppercase tracking-wider text-[var(--ctl-ink)] font-semibold">
                Code &gt; Presentations
              </div>
            </EtchedCard>

            {/* Principle 3 */}
            <EtchedCard className="space-y-4 flex flex-col justify-between">
              <div className="space-y-3">
                <span className="text-[11px] font-semibold uppercase tracking-widest text-[var(--ctl-ink)] block">
                  Principle 03
                </span>
                <h3 className="font-serif text-2xl text-[var(--ctl-text)]">
                  &ldquo;Speed is the differentiator&rdquo;
                </h3>
                <p className="text-sm text-[var(--ctl-soft)] leading-relaxed">
                  In a technological frontier that shifts every few weeks, agility is the ultimate competitive moat.
                  We work in tight, disciplined weekly sprints, allowing our partners to ship, test, and iterate
                  faster than incumbent competitors.
                </p>
              </div>
              <div className="pt-4 border-t border-[var(--ctl-line)] text-xs uppercase tracking-wider text-[var(--ctl-ink)] font-semibold">
                Velocity &gt; Bureaucracy
              </div>
            </EtchedCard>
          </div>
        </div>
      </section>

      {/* ============================================================
          SECTION 4: PROQUOMENT PLATFORM CROSS-LINK
          ============================================================ */}
      <section className="py-24 border-b border-[var(--ctl-line)]">
        <div className="max-w-7xl mx-auto px-6">
          <EtchedCard className="p-8 sm:p-12 bg-[var(--ctl-paper)] border border-[var(--ctl-ink)]">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-8 space-y-4">
                <div className="flex items-center gap-2">
                  <span className="text-[11px] font-semibold uppercase tracking-wider px-2.5 py-0.5 border border-[var(--ctl-line)] rounded-[2px] text-[var(--ctl-ink)]">
                    The Ecosystem
                  </span>
                  <span className="text-xs text-[var(--ctl-soft)]">
                    Proquoment Private Limited
                  </span>
                </div>

                <h3 className="font-serif text-2xl sm:text-3xl text-[var(--ctl-text)]">
                  Looking for the Proquoment Enterprise Platform?
                </h3>

                <p className="text-[16px] text-[var(--ctl-soft)] leading-relaxed">
                  Proquoment Labs is the dedicated AI product and engineering studio of
                  Proquoment Private Limited, operating as a distinct client-services brand. Our sister
                  venture operates the specialized procurement SaaS platform at <strong className="text-[var(--ctl-ink)]">proquoment.in</strong>.
                </p>

                <p className="text-sm text-[var(--ctl-soft)] leading-relaxed">
                  Whether you are seeking custom product engineering and AI automation through Labs or
                  enterprise procurement intelligence via the SaaS platform, each venture focuses on its dedicated domain.
                </p>
              </div>

              <div className="lg:col-span-4 flex flex-col gap-3">
                <a
                  href="https://proquoment.in"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full"
                >
                  <CopperplateButton variant="deep" className="w-full">
                    <Building2 className="w-4 h-4" />
                    <span>Visit proquoment.in</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </CopperplateButton>
                </a>
                <Link href="/contact" className="w-full">
                  <CopperplateButton variant="paper" className="w-full">
                    <span>Contact Labs Team</span>
                    <ArrowRight className="w-4 h-4" />
                  </CopperplateButton>
                </Link>
              </div>
            </div>
          </EtchedCard>
        </div>
      </section>

      {/* ============================================================
          CLOSING CALL TO ACTION
          ============================================================ */}
      <section className="py-24 bg-[var(--ctl-paper)] text-center">
        <div className="max-w-4xl mx-auto px-6 space-y-8">
          <PlateKicker className="justify-center">CONNECT WITH SENIOR PARTNERS</PlateKicker>
          <h2 className="font-serif text-4xl sm:text-5xl text-[var(--ctl-text)]">
            Ready to Build Your AI-Native Future?
          </h2>
          <p className="text-[16px] text-[var(--ctl-soft)] max-w-2xl mx-auto leading-relaxed">
            Reach out to our engineering team today. We review all technical requirements and respond within 24 hours.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
            <Link href="/contact">
              <CopperplateButton variant="deep" className="h-12 px-8 text-sm">
                <span>Start a Project</span>
                <ArrowRight className="w-4 h-4" />
              </CopperplateButton>
            </Link>
            <a
              href="https://calendly.com/proquoment"
              target="_blank"
              rel="noopener noreferrer"
            >
              <CopperplateButton variant="paper" className="h-12 px-8 text-sm">
                <span>Book Architecture Call</span>
              </CopperplateButton>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

export default AboutPage;
