"use client";

import UtilityBar from "@/components/layout/UtilityBar";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import Eyebrow from "@/components/ui/Eyebrow";
import SectionHeading from "@/components/ui/SectionHeading";
import { 
  FileCheck2, 
  Sparkles, 
  BookOpen, 
  CheckCircle2, 
  Search, 
  Layers, 
  ArrowRight,
  ShieldCheck,
  Check,
  MessageSquareQuote
} from "lucide-react";

const editorialTiers = [
  {
    tier: "Tier 01",
    name: "Developmental & Structural Editing",
    tagline: "The Big-Picture Architecture",
    description: "Our senior trade editors analyze narrative pacing, structural symmetry, thematic depth, character motivation, and genre conventions to ensure your book holds reader attention effortlessly.",
    focus: [
      "Narrative pacing and tension curves",
      "Plot hole detection & thematic resolution",
      "Character arc consistency and dialogue authenticity",
      "Chapter transitions & hook effectiveness",
    ],
  },
  {
    tier: "Tier 02",
    name: "Line & Stylistic Editing",
    tagline: "The Poetry and Rhythm of Your Prose",
    description: "Working at the paragraph and sentence level, we polish cadence, elevate vocabulary, eliminate repetition, and sharpen imagery while protecting your signature authorial voice.",
    focus: [
      "Sentence cadence, rhythm, and lyrical flow",
      "Word choice refinement & passive voice reduction",
      "Dialogue naturalness and emotional resonance",
      "Tonal consistency across all chapters",
    ],
  },
  {
    tier: "Tier 03",
    name: "Comprehensive Copyediting",
    tagline: "Trade-Grade Grammatical Rigor",
    description: "Strict adherence to the Chicago Manual of Style (17th Edition) and Merriam-Webster's Collegiate Dictionary. We scrutinize spelling, hyphenation, continuity, and factual references.",
    focus: [
      "Full Chicago Manual of Style (CMOS 17) compliance",
      "Grammar, punctuation, and syntax precision",
      "Timeline, character detail & fact-checking",
      "Comprehensive custom project style sheet",
    ],
  },
  {
    tier: "Tier 04",
    name: "Cold Galley Proofreading",
    tagline: "The Final Defense Before Print",
    description: "Performed on typeset galley proofs by fresh eyes who have never read the manuscript. We eliminate typographical slips, hyphen ladders, bad page breaks, and orphan lines.",
    focus: [
      "Fresh-eyes pass on typeset PDF proofs",
      "Widows, orphans, and awkward hyphenation ladders",
      "Running headers, pagination, and TOC verification",
      "Zero-tolerance error sweep before print run",
    ],
  },
];

export default function EditingPage() {
  return (
    <>
      <UtilityBar />
      <Header />
      <main className="bg-paper text-ink">
        {/* Hero Section */}
        <section className="relative overflow-hidden bg-paper pt-12 pb-16 lg:pt-20 lg:pb-24 border-b border-line">
          <div className="absolute inset-0 pointer-events-none opacity-[0.02] mix-blend-multiply bg-[radial-gradient(#181A1F_1px,transparent_1px)] [background-size:24px_24px]" />
          
          <Container>
            <div className="max-w-3xl mx-auto text-center flex flex-col items-center">
              <Eyebrow tone="gold">
                Trade Publishing Standards &bull; Chicago Manual of Style
              </Eyebrow>

              <h1 className="mt-6 font-serif text-[2.6rem] sm:text-[3.4rem] lg:text-[3.8rem] font-bold leading-[1.08] text-ink tracking-tight text-balance">
                Every line sharpened.{" "}
                <span className="text-[#B8964E] block sm:inline">Every voice preserved.</span>
              </h1>

              <p className="mt-5 text-[1.06rem] sm:text-[1.14rem] leading-relaxed text-ink-soft font-sans max-w-2xl">
                Real trade publishing requires more than automated spelling checks. Our senior editors read your prose with literary sensitivity, challenging your manuscript where it needs discipline and honoring it where it shines.
              </p>

              <div className="mt-8 flex flex-col sm:flex-row items-center gap-4">
                <Button href="/contact-us#manuscript-review" variant="primary" size="lg">
                  <span>Claim a Free 1,000-Word Sample Edit</span>
                  <ArrowRight size={15} />
                </Button>
                <Button href="#tiers" variant="outline" size="lg">
                  <span>View Editorial Tiers</span>
                </Button>
              </div>

              <div className="mt-10 pt-6 border-t border-line flex flex-wrap items-center justify-center gap-6 text-xs text-ink-muted">
                <div className="flex items-center gap-2">
                  <CheckCircle2 size={14} className="text-[#C5A059]" />
                  <span>Experienced Trade Press Editors</span>
                </div>
                <div className="flex items-center gap-2">
                  <ShieldCheck size={14} className="text-[#C5A059]" />
                  <span>Chicago Manual of Style 17th Edition</span>
                </div>
                <div className="flex items-center gap-2">
                  <FileCheck2 size={14} className="text-[#C5A059]" />
                  <span>Track Changes &amp; Direct Phone Calls</span>
                </div>
              </div>
            </div>
          </Container>
        </section>

        {/* The 4 Editorial Tiers */}
        <section id="tiers" className="py-20 lg:py-28 bg-paper-warm border-b border-line">
          <Container className="flex flex-col gap-14">
            <SectionHeading
              eyebrow="Comprehensive Editorial Rigor"
              title={
                <>
                  Four distinct levels of{" "}
                  <span className="italic text-[#9E7C35]">editorial craftsmanship</span>
                </>
              }
              description="From high-level architectural surgery to final word-by-word proofing, each tier fulfills a vital role in taking your manuscript from raw draft to trade-grade volume."
            />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {editorialTiers.map((item) => (
                <div
                  key={item.name}
                  className="p-8 sm:p-10 rounded-xs border border-line bg-paper-card shadow-card flex flex-col justify-between hover:border-[#C5A059]/40 hover:shadow-cardHover transition-all"
                >
                  <div>
                    <div className="flex items-center justify-between pb-4 mb-4 border-b border-line">
                      <span className="font-sans text-xs uppercase tracking-[0.16em] font-bold text-[#9E7C35]">
                        {item.tier}
                      </span>
                      <span className="font-sans text-[11px] text-ink-muted bg-paper-warm px-2.5 py-1 rounded-xs border border-line">
                        {item.tagline}
                      </span>
                    </div>

                    <h3 className="font-serif text-[1.38rem] font-bold text-ink">
                      {item.name}
                    </h3>

                    <p className="mt-3 text-sm text-ink-soft leading-relaxed">
                      {item.description}
                    </p>

                    <div className="mt-6 pt-5 border-t border-line/70">
                      <span className="text-[11px] font-bold uppercase tracking-wider text-[#9E7C35] block mb-3">
                        Included Focus Areas
                      </span>
                      <ul className="flex flex-col gap-2.5 text-xs text-ink-soft">
                        {item.focus.map((pt) => (
                          <li key={pt} className="flex items-start gap-2">
                            <span className="flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-[#C5A059]/15 text-[#9E7C35] text-[10px] mt-0.5 font-bold">
                              ✓
                            </span>
                            <span>{pt}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </Container>
        </section>

        {/* Sample Edit Callout */}
        <section className="py-20 bg-[#0D1527] text-white border-b border-[#1E293B]">
          <Container>
            <div className="max-w-3xl mx-auto text-center flex flex-col items-center">
              <span className="font-sans text-xs uppercase tracking-[0.16em] font-semibold text-[#E8C98B]">
                Risk-Free Sample Evaluation
              </span>
              <h2 className="mt-3 font-serif text-[2.2rem] sm:text-[2.6rem] font-bold text-white leading-tight">
                Experience our editorial hand before committing
              </h2>
              <p className="mt-4 text-sm sm:text-base text-slate-300 leading-relaxed max-w-xl">
                Send us your first 1,000 words. Within 48 hours, a senior trade editor returns your pages marked with inline tracked changes, constructive marginalia, and a diagnostic summary.
              </p>
              <div className="mt-8">
                <Button href="/contact-us#manuscript-review" variant="primary" size="lg">
                  <span>Submit Sample for Free Edit</span>
                  <ArrowRight size={15} />
                </Button>
              </div>
            </div>
          </Container>
        </section>
      </main>
      <Footer />
    </>
  );
}
