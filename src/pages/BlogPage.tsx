import * as React from "react";
import { useState, useMemo } from "react";
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
  BLOG_POSTS,
  BLOG_CATEGORIES,
  BLOG_INDUSTRIES,
  getFeaturedBlogPost,
  type BlogPost,
} from "@/data/blogs";
import {
  Search,
  ArrowRight,
  Clock,
  Calendar,
  Sparkles,
  Layers,
  ChevronRight,
  TrendingUp,
  Cpu,
  ShieldCheck,
  CheckCircle2,
} from "lucide-react";

export function BlogPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedIndustry, setSelectedIndustry] = useState<string>("All");
  const [selectedCategory, setSelectedCategory] = useState<string>("All");

  const featured = useMemo(() => getFeaturedBlogPost(), []);

  const filteredPosts = useMemo(() => {
    return BLOG_POSTS.filter((post) => {
      const matchesSearch =
        searchQuery.trim() === "" ||
        post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.subtitle.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.techTags.some((tag) => tag.toLowerCase().includes(searchQuery.toLowerCase()));

      const matchesIndustry = selectedIndustry === "All" || post.industry === selectedIndustry;
      const matchesCategory = selectedCategory === "All" || post.category === selectedCategory;

      return matchesSearch && matchesIndustry && matchesCategory;
    });
  }, [searchQuery, selectedIndustry, selectedCategory]);

  return (
    <div className="relative min-h-screen text-[var(--ctl-text)] bg-[var(--ctl-paper)] overflow-hidden">
      {/* ============================================================
          PAGE HEADER (Plate Title)
          ============================================================ */}
      <section className="py-20 border-b border-[var(--ctl-line)] bg-[var(--ctl-paper)]">
        <div className="max-w-7xl mx-auto px-6">
          <PlateHeader
            kicker="INDUSTRY DISPATCHES &amp; AI BLUEPRINTS"
            title="How AI Transforms"
            italicWord="Industries &amp; Enterprises"
            description="Proven architectural playbooks, multi-agent engineering patterns, and verifiable business ROI from deploying production AI across supply chain, fintech, healthcare, and SaaS."
          />
        </div>
      </section>

      {/* ============================================================
          FEATURED ARTICLE SPOTLIGHT
          ============================================================ */}
      <section className="py-16 border-b border-[var(--ctl-line)] bg-[var(--ctl-wash)]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center justify-between mb-8">
            <span className="text-xs font-semibold uppercase tracking-widest text-[var(--ctl-ink)] flex items-center gap-2">
              <Sparkles className="w-3.5 h-3.5 text-[var(--ctl-ink)]" />
              <span>Featured Engineering Dispatch</span>
            </span>
            <span className="text-xs font-serif italic text-[var(--ctl-soft)]">
              Volume I · Issue 04
            </span>
          </div>

          <EtchedCard className="p-8 sm:p-12 hover:shadow-xl transition-all duration-300">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-8 space-y-6">
                <div className="flex items-center gap-3 flex-wrap">
                  <span className="text-[11px] font-semibold uppercase tracking-wider px-2.5 py-0.5 border border-[var(--ctl-line)] rounded-[2px] text-[var(--ctl-ink)] bg-[var(--ctl-paper)]">
                    {featured.industry}
                  </span>
                  <span className="text-[11px] font-semibold uppercase tracking-wider text-[var(--ctl-soft)]">
                    {featured.category}
                  </span>
                  <span className="text-[var(--ctl-line)]">•</span>
                  <span className="text-xs text-[var(--ctl-soft)] flex items-center gap-1 font-sans">
                    <Clock className="w-3.5 h-3.5" />
                    <span>{featured.readTime}</span>
                  </span>
                  <span className="text-[var(--ctl-line)]">•</span>
                  <span className="text-xs text-[var(--ctl-soft)] font-serif italic">
                    {featured.publishedDate}
                  </span>
                </div>

                <h2 className="font-serif text-3xl sm:text-4xl text-[var(--ctl-text)] leading-tight hover:text-[var(--ctl-ink)] transition-colors">
                  <Link href={`/blog/${featured.slug}`}>
                    {featured.title}
                  </Link>
                </h2>

                <p className="text-sm sm:text-[15px] font-serif italic text-[var(--ctl-ink)]">
                  {featured.subtitle}
                </p>

                <p className="text-sm sm:text-[15px] text-[var(--ctl-soft)] leading-relaxed max-w-3xl">
                  {featured.excerpt}
                </p>

                {/* Key Metrics Row */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4 border-t border-[var(--ctl-line)]">
                  {featured.metrics.map((m, idx) => (
                    <div key={idx} className="space-y-1">
                      <span className="font-serif text-2xl font-bold text-[var(--ctl-ink)] block">
                        {m.value}
                      </span>
                      <span className="text-[11px] font-semibold uppercase tracking-wider text-[var(--ctl-soft)]">
                        {m.label}
                      </span>
                    </div>
                  ))}
                </div>

                <div className="pt-2 flex items-center justify-between flex-wrap gap-4">
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-sans text-[var(--ctl-soft)]">
                      By <strong className="text-[var(--ctl-text)]">{featured.author.name}</strong>, {featured.author.role}
                    </span>
                  </div>
                  <Link href={`/blog/${featured.slug}`}>
                    <CopperplateButton variant="deep" className="h-9 px-5 text-xs">
                      <span>Read Full Dispatch</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </CopperplateButton>
                  </Link>
                </div>
              </div>

              <div className="lg:col-span-4 flex justify-center border-t lg:border-t-0 lg:border-l border-[var(--ctl-line)] pt-8 lg:pt-0 lg:pl-8">
                <WaxSealBadge size={150} />
              </div>
            </div>
          </EtchedCard>
        </div>
      </section>

      {/* ============================================================
          INTERACTIVE SEARCH & FILTER CONTROLS
          ============================================================ */}
      <section className="py-12 border-b border-[var(--ctl-line)] bg-[var(--ctl-paper)] sticky top-16 z-20 backdrop-blur-md bg-[var(--ctl-paper)]/95">
        <div className="max-w-7xl mx-auto px-6 space-y-6">
          <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4">
            {/* Search Input */}
            <div className="relative flex-1 max-w-md">
              <Search className="w-4 h-4 text-[var(--ctl-soft)] absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search by industry, model, architecture, or tech stack..."
                className="w-full pl-10 pr-4 py-2 text-xs font-sans border border-[var(--ctl-line)] rounded-[2px] bg-[var(--ctl-paper)] text-[var(--ctl-text)] placeholder:text-[var(--ctl-soft)] focus:outline-none focus:border-[var(--ctl-ink)] transition-colors"
              />
            </div>

            {/* Results Counter */}
            <div className="text-xs font-sans text-[var(--ctl-soft)] uppercase tracking-wider flex items-center gap-2">
              <span>Showing</span>
              <strong className="text-[var(--ctl-ink)] font-semibold">{filteredPosts.length}</strong>
              <span>of {BLOG_POSTS.length} Dispatches</span>
            </div>
          </div>

          {/* Industry Filter Chips */}
          <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
            <span className="text-[11px] font-semibold uppercase tracking-wider text-[var(--ctl-soft)] mr-2 shrink-0">
              Industry:
            </span>
            {BLOG_INDUSTRIES.map((ind) => {
              const active = selectedIndustry === ind;
              return (
                <button
                  key={ind}
                  type="button"
                  onClick={() => setSelectedIndustry(ind)}
                  className={`text-xs px-3 py-1 rounded-[2px] font-sans font-medium transition-all whitespace-nowrap border ${
                    active
                      ? "bg-[var(--ctl-ink)] text-[var(--ctl-paper)] border-[var(--ctl-ink)] shadow-sm"
                      : "bg-[var(--ctl-wash)] text-[var(--ctl-soft)] border-[var(--ctl-line)] hover:text-[var(--ctl-ink)]"
                  }`}
                >
                  {ind}
                  {ind !== "All" && (
                    <span className="ml-1.5 opacity-70 text-[10px]">
                      {BLOG_POSTS.filter((p) => p.industry === ind).length}
                    </span>
                  )}
                </button>
              );
            })}
          </div>

          {/* Category Filter Chips */}
          <div className="flex items-center gap-2 overflow-x-auto pb-1 scrollbar-none">
            <span className="text-[11px] font-semibold uppercase tracking-wider text-[var(--ctl-soft)] mr-2 shrink-0">
              Type:
            </span>
            {BLOG_CATEGORIES.map((cat) => {
              const active = selectedCategory === cat;
              return (
                <button
                  key={cat}
                  type="button"
                  onClick={() => setSelectedCategory(cat)}
                  className={`text-xs px-2.5 py-0.5 rounded-[2px] font-sans transition-all whitespace-nowrap border ${
                    active
                      ? "border-[var(--ctl-ink)] text-[var(--ctl-ink)] font-semibold bg-[var(--ctl-wash)]"
                      : "border-transparent text-[var(--ctl-soft)] hover:text-[var(--ctl-ink)]"
                  }`}
                >
                  {cat}
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* ============================================================
          ARTICLES GRID
          ============================================================ */}
      <section className="py-20 max-w-7xl mx-auto px-6">
        {filteredPosts.length === 0 ? (
          <div className="py-24 text-center space-y-4 max-w-md mx-auto">
            <div className="w-12 h-12 mx-auto rounded-full border border-[var(--ctl-line)] bg-[var(--ctl-wash)] flex items-center justify-center text-[var(--ctl-soft)]">
              <Search className="w-6 h-6" />
            </div>
            <h3 className="font-serif text-2xl text-[var(--ctl-text)]">
              No matching dispatches found
            </h3>
            <p className="text-sm text-[var(--ctl-soft)] leading-relaxed">
              We could not locate articles matching your criteria. Try adjusting your query or resetting filters.
            </p>
            <div className="pt-2">
              <button
                type="button"
                onClick={() => {
                  setSearchQuery("");
                  setSelectedIndustry("All");
                  setSelectedCategory("All");
                }}
                className="text-xs font-semibold uppercase tracking-wider text-[var(--ctl-ink)] underline"
              >
                Reset All Filters
              </button>
            </div>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.map((post) => (
              <EtchedCard
                key={post.id}
                className="flex flex-col justify-between space-y-6 hover:shadow-lg transition-all duration-300"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between border-b border-[var(--ctl-line)] pb-3">
                    <span className="text-[11px] font-semibold tracking-wider uppercase text-[var(--ctl-ink)]">
                      {post.industry}
                    </span>
                    <span className="text-xs font-serif italic text-[var(--ctl-soft)] flex items-center gap-1">
                      <Clock className="w-3 h-3" />
                      <span>{post.readTime}</span>
                    </span>
                  </div>

                  <h3 className="font-serif text-2xl text-[var(--ctl-text)] leading-snug hover:text-[var(--ctl-ink)] transition-colors">
                    <Link href={`/blog/${post.slug}`}>
                      {post.title}
                    </Link>
                  </h3>

                  <p className="text-xs font-serif italic text-[var(--ctl-ink)]">
                    {post.subtitle}
                  </p>

                  <p className="text-sm text-[var(--ctl-soft)] leading-relaxed line-clamp-3">
                    {post.excerpt}
                  </p>

                  {/* Primary Metric Pill */}
                  {post.metrics.length > 0 && (
                    <div className="p-3 bg-[var(--ctl-wash)] rounded-[2px] border border-[var(--ctl-line)] flex items-baseline justify-between">
                      <span className="font-serif text-xl font-bold text-[var(--ctl-ink)]">
                        {post.metrics[0].value}
                      </span>
                      <span className="text-[10px] font-semibold uppercase tracking-wider text-[var(--ctl-soft)]">
                        {post.metrics[0].label}
                      </span>
                    </div>
                  )}

                  {/* Tech Tags */}
                  <div className="flex items-center gap-1.5 flex-wrap pt-1">
                    {post.techTags.slice(0, 4).map((tech) => (
                      <span
                        key={tech}
                        className="text-[10px] px-2 py-0.5 border border-[var(--ctl-line)] rounded-[2px] text-[var(--ctl-text)] font-sans"
                      >
                        {tech}
                      </span>
                    ))}
                    {post.techTags.length > 4 && (
                      <span className="text-[10px] text-[var(--ctl-soft)] font-sans">
                        +{post.techTags.length - 4} more
                      </span>
                    )}
                  </div>
                </div>

                <div className="pt-4 border-t border-[var(--ctl-line)] flex items-center justify-between">
                  <span className="text-xs text-[var(--ctl-soft)] font-serif italic">
                    {post.publishedDate}
                  </span>
                  <Link
                    href={`/blog/${post.slug}`}
                    className="inline-flex items-center gap-1 text-xs font-semibold uppercase tracking-wider text-[var(--ctl-ink)] hover:underline"
                  >
                    <span>Read Article</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </EtchedCard>
            ))}
          </div>
        )}
      </section>

      {/* ============================================================
          BOTTOM CALL TO ACTION
          ============================================================ */}
      <section className="py-24 border-t border-[var(--ctl-line)] bg-[var(--ctl-wash)]">
        <div className="max-w-4xl mx-auto px-6 text-center space-y-8">
          <PlateKicker className="justify-center">TECHNICAL COLLABORATION</PlateKicker>
          <h2 className="font-serif text-4xl sm:text-5xl text-[var(--ctl-text)] leading-tight">
            Ready to engineer an AI system for your industry?{" "}
            <span className="italic text-[var(--ctl-ink)] block font-normal mt-1">
              Let&apos;s build together.
            </span>
          </h2>
          <p className="text-[16px] text-[var(--ctl-soft)] max-w-2xl mx-auto leading-relaxed">
            Whether you need autonomous reconciliation swarms, real-time underwriting copilots, or a rapid 4-week SaaS MVP sprint, our senior engineering squad is ready.
          </p>
          <div className="pt-4 flex justify-center">
            <Link href="/contact">
              <CopperplateButton variant="deep" className="h-12 px-8 text-sm">
                <span>Scope Your Project</span>
                <ArrowRight className="w-4 h-4" />
              </CopperplateButton>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default BlogPage;
