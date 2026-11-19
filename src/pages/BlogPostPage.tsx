import * as React from "react";
import { Link, useRoute } from "wouter";
import {
  PlateHeader,
  PlateKicker,
  EtchedCard,
  CopperplateButton,
  WaxSealBadge,
  HatchDivider,
} from "@/components/ui/copperplate-primitives";
import {
  getBlogPostBySlug,
  getRelatedBlogPosts,
  BLOG_POSTS,
  type BlogPost,
} from "@/data/blogs";
import {
  ArrowLeft,
  ArrowRight,
  Clock,
  Calendar,
  Layers,
  Sparkles,
  Share2,
  CheckCircle2,
  FileText,
  User,
  ShieldAlert,
} from "lucide-react";

export function BlogPostPage() {
  const [, params] = useRoute("/blog/:slug");
  const slug = params?.slug || "";
  const post = getBlogPostBySlug(slug);

  if (!post) {
    return (
      <div className="min-h-[70vh] flex items-center justify-center py-20 px-6 text-[var(--ctl-text)] bg-[var(--ctl-paper)]">
        <div className="max-w-md w-full text-center space-y-6">
          <div className="w-12 h-12 mx-auto rounded-full border border-[var(--ctl-line)] bg-[var(--ctl-wash)] flex items-center justify-center text-[var(--ctl-ink)]">
            <ShieldAlert className="w-6 h-6" />
          </div>
          <h1 className="font-serif text-3xl text-[var(--ctl-text)]">
            Dispatch Not Located
          </h1>
          <p className="text-sm text-[var(--ctl-soft)] leading-relaxed">
            The requested technical dispatch could not be found in our publication ledger. It may have been archived or moved.
          </p>
          <div className="pt-2">
            <Link href="/blog">
              <CopperplateButton variant="deep">
                <ArrowLeft className="w-4 h-4" />
                <span>Return to Dispatches</span>
              </CopperplateButton>
            </Link>
          </div>
        </div>
      </div>
    );
  }

  const related = getRelatedBlogPosts(post.slug, 3);

  return (
    <div className="relative min-h-screen text-[var(--ctl-text)] bg-[var(--ctl-paper)] overflow-hidden">
      {/* ============================================================
          TOP BREADCRUMB & ARTICLE HEADER
          ============================================================ */}
      <article>
        <header className="py-16 border-b border-[var(--ctl-line)] bg-[var(--ctl-paper)]">
          <div className="max-w-4xl mx-auto px-6 space-y-8">
            {/* Back link */}
            <div>
              <Link
                href="/blog"
                className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[var(--ctl-ink)] hover:underline transition-colors"
              >
                <ArrowLeft className="w-3.5 h-3.5" />
                <span>Return to All Industry Dispatches</span>
              </Link>
            </div>

            {/* Kicker & Meta Badges */}
            <div className="space-y-4">
              <div className="flex items-center gap-3 flex-wrap">
                <span className="text-[11px] font-semibold uppercase tracking-wider px-2.5 py-0.5 border border-[var(--ctl-line)] rounded-[2px] text-[var(--ctl-ink)] bg-[var(--ctl-wash)]">
                  {post.industry}
                </span>
                <span className="text-[11px] font-semibold uppercase tracking-wider text-[var(--ctl-soft)]">
                  {post.category}
                </span>
                <span className="text-[var(--ctl-line)]">•</span>
                <span className="text-xs text-[var(--ctl-soft)] flex items-center gap-1 font-sans">
                  <Clock className="w-3.5 h-3.5" />
                  <span>{post.readTime}</span>
                </span>
                <span className="text-[var(--ctl-line)]">•</span>
                <span className="text-xs text-[var(--ctl-soft)] font-serif italic">
                  Published {post.publishedDate}
                </span>
              </div>

              <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[var(--ctl-text)] leading-[1.12]">
                {post.title}
              </h1>

              <p className="text-lg sm:text-xl font-serif italic text-[var(--ctl-ink)] leading-relaxed">
                {post.subtitle}
              </p>
            </div>

            {/* Author Byline */}
            <div className="pt-6 border-t border-[var(--ctl-line)] flex items-center justify-between flex-wrap gap-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full border border-[var(--ctl-line)] bg-[var(--ctl-wash)] flex items-center justify-center text-[var(--ctl-ink)] font-serif font-bold text-sm">
                  {post.author.name.charAt(0)}
                </div>
                <div>
                  <span className="text-xs font-bold text-[var(--ctl-text)] block">
                    {post.author.name}
                  </span>
                  <span className="text-[11px] text-[var(--ctl-soft)] font-sans">
                    {post.author.role} · Proquoment Labs
                  </span>
                </div>
              </div>

              <div className="text-xs text-[var(--ctl-soft)] font-serif italic">
                Published in <strong className="text-[var(--ctl-ink)] font-semibold not-italic">{post.source}</strong>
              </div>
            </div>
          </div>
        </header>

        {/* ============================================================
            EXECUTIVE SUMMARY & KEY METRICS
            ============================================================ */}
        <section className="py-12 border-b border-[var(--ctl-line)] bg-[var(--ctl-wash)]">
          <div className="max-w-4xl mx-auto px-6 space-y-6">
            <EtchedCard className="p-8 space-y-6">
              <div className="flex items-center justify-between border-b border-[var(--ctl-line)] pb-3">
                <span className="text-xs font-semibold uppercase tracking-wider text-[var(--ctl-ink)] flex items-center gap-2">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>Executive Summary &amp; ROI</span>
                </span>
                <span className="text-[11px] font-sans text-[var(--ctl-soft)]">
                  Verified Production Metrics
                </span>
              </div>

              <p className="text-sm sm:text-[15px] text-[var(--ctl-text)] leading-relaxed">
                {post.executiveSummary}
              </p>

              {/* Metrics Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-4 border-t border-[var(--ctl-line)]">
                {post.metrics.map((m, idx) => (
                  <div key={idx} className="space-y-1">
                    <span className="font-serif text-3xl font-bold text-[var(--ctl-ink)] block">
                      {m.value}
                    </span>
                    <span className="text-xs font-semibold uppercase tracking-wider text-[var(--ctl-soft)]">
                      {m.label}
                    </span>
                  </div>
                ))}
              </div>
            </EtchedCard>
          </div>
        </section>

        {/* ============================================================
            MAIN ARTICLE BODY & SECTIONS
            ============================================================ */}
        <section className="py-16 bg-[var(--ctl-paper)]">
          <div className="max-w-3xl mx-auto px-6 space-y-12">
            {post.sections.map((sec, idx) => (
              <div key={idx} className="space-y-6">
                <h2 className="font-serif text-2xl sm:text-3xl text-[var(--ctl-text)] leading-snug">
                  {sec.heading}
                </h2>

                <div className="space-y-4 text-sm sm:text-[16px] text-[var(--ctl-soft)] leading-relaxed font-sans">
                  {sec.body.map((p, pIdx) => (
                    <p key={pIdx}>{p}</p>
                  ))}
                </div>

                {sec.callout && (
                  <EtchedCard className="p-6 my-6 bg-[var(--ctl-wash)] border-l-4 border-l-[var(--ctl-ink)] space-y-2">
                    <span className="text-xs font-semibold uppercase tracking-wider text-[var(--ctl-ink)] block">
                      {sec.callout.title}
                    </span>
                    <p className="text-sm text-[var(--ctl-text)] leading-relaxed">
                      {sec.callout.description}
                    </p>
                  </EtchedCard>
                )}
              </div>
            ))}

            {/* Architecture Stack */}
            <div className="pt-8 border-t border-[var(--ctl-line)] space-y-4">
              <span className="text-xs font-semibold uppercase tracking-wider text-[var(--ctl-ink)] block">
                Production Technology Stack
              </span>
              <div className="flex items-center gap-2 flex-wrap">
                {post.techTags.map((tech) => (
                  <span
                    key={tech}
                    className="text-xs px-3 py-1 border border-[var(--ctl-line)] rounded-[2px] bg-[var(--ctl-wash)] text-[var(--ctl-text)] font-sans"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Author Signature Box */}
            <div className="pt-8 border-t border-[var(--ctl-line)]">
              <EtchedCard className="p-6 flex items-center justify-between flex-wrap gap-4">
                <div>
                  <h3 className="font-serif text-lg text-[var(--ctl-text)]">
                    Authored by {post.author.name}
                  </h3>
                  <p className="text-xs text-[var(--ctl-soft)] mt-1">
                    {post.author.role} at Proquoment Labs. Leading AI architecture and deterministic software deployments.
                  </p>
                </div>
                <Link href="/contact">
                  <CopperplateButton variant="ghost" className="h-9 text-xs px-4">
                    <span>Consult with Team</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </CopperplateButton>
                </Link>
              </EtchedCard>
            </div>
          </div>
        </section>
      </article>

      {/* ============================================================
          RELATED DISPATCHES
          ============================================================ */}
      {related.length > 0 && (
        <section className="py-20 border-t border-b border-[var(--ctl-line)] bg-[var(--ctl-wash)]">
          <div className="max-w-7xl mx-auto px-6 space-y-8">
            <div className="flex items-center justify-between">
              <div>
                <span className="text-[11px] font-semibold uppercase tracking-widest text-[var(--ctl-ink)] block">
                  CONTINUE READING
                </span>
                <h3 className="font-serif text-2xl sm:text-3xl text-[var(--ctl-text)] mt-1">
                  Related Industry Dispatches
                </h3>
              </div>
              <Link
                href="/blog"
                className="text-xs font-semibold uppercase tracking-wider text-[var(--ctl-ink)] hover:underline inline-flex items-center gap-1"
              >
                <span>View All</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {related.map((rel) => (
                <EtchedCard
                  key={rel.id}
                  className="flex flex-col justify-between space-y-4 hover:shadow-md transition-all"
                >
                  <div className="space-y-3">
                    <div className="flex items-center justify-between text-[11px] text-[var(--ctl-soft)] border-b border-[var(--ctl-line)] pb-2">
                      <span className="font-semibold uppercase text-[var(--ctl-ink)]">
                        {rel.industry}
                      </span>
                      <span>{rel.readTime}</span>
                    </div>
                    <h4 className="font-serif text-xl text-[var(--ctl-text)] hover:text-[var(--ctl-ink)] transition-colors">
                      <Link href={`/blog/${rel.slug}`}>{rel.title}</Link>
                    </h4>
                    <p className="text-xs text-[var(--ctl-soft)] line-clamp-2">
                      {rel.excerpt}
                    </p>
                  </div>
                  <div className="pt-2 border-t border-[var(--ctl-line)]">
                    <Link
                      href={`/blog/${rel.slug}`}
                      className="text-xs font-semibold uppercase tracking-wider text-[var(--ctl-ink)] hover:underline inline-flex items-center gap-1"
                    >
                      <span>Read Dispatch</span>
                      <ArrowRight className="w-3 h-3" />
                    </Link>
                  </div>
                </EtchedCard>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ============================================================
          FINAL CTA
          ============================================================ */}
      <section className="py-24 bg-[var(--ctl-paper)] text-center">
        <div className="max-w-4xl mx-auto px-6 space-y-8">
          <PlateKicker className="justify-center">TECHNICAL ENGAGEMENT</PlateKicker>
          <h2 className="font-serif text-4xl sm:text-5xl text-[var(--ctl-text)]">
            Facing a similar challenge?{" "}
            <span className="italic text-[var(--ctl-ink)] block font-normal mt-1">
              Let&apos;s engineer your solution.
            </span>
          </h2>
          <p className="text-[16px] text-[var(--ctl-soft)] max-w-2xl mx-auto leading-relaxed">
            Speak directly with senior builders who design and deploy production-grade artificial intelligence systems under real business constraints.
          </p>
          <div className="pt-4 flex justify-center">
            <Link href="/contact">
              <CopperplateButton variant="deep" className="h-12 px-8 text-sm">
                <span>Start a Project</span>
                <ArrowRight className="w-4 h-4" />
              </CopperplateButton>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default BlogPostPage;
