"use client";

import UtilityBar from "@/components/layout/UtilityBar";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import Eyebrow from "@/components/ui/Eyebrow";
import SectionHeading from "@/components/ui/SectionHeading";
import { 
  Megaphone, 
  Compass, 
  Trophy, 
  Globe, 
  Calendar, 
  Award, 
  CheckCircle2, 
  ArrowRight,
  TrendingUp,
  Bookmark
} from "lucide-react";

const marketingPillars = [
  {
    title: "Advance Reader Copy (ARC) Outreach",
    desc: "Coordinated distribution of digital and physical bound galleys to verified Amazon Top Reviewers, Goodreads community leaders, and genre-specific book bloggers to build authentic launch-week momentum.",
    badge: "Social Proof",
  },
  {
    title: "Amazon A+ Content & Keyword Architecture",
    desc: "Bespoke graphical modules, rich editorial reviews, and deep algorithm optimization designed to convert browsing booklovers into passionate buyers on retail product pages.",
    badge: "Conversion Optimization",
  },
  {
    title: "Bookstore Buyer & Library Pitch Kits",
    desc: "Professional sell-sheets, BISAC categorization summaries, and wholesale Ingram catalog listings pitched directly to acquisition librarians and independent bookstore buyers nationwide.",
    badge: "Trade Distribution",
  },
  {
    title: "Targeted Paid Reader Advertising",
    desc: "Data-driven advertising campaigns across Amazon Ads, BookBub featured newsletters, and Meta targeting readers of comparable bestselling authors in your exact literary space.",
    badge: "Paid Acquisition",
  },
];

const bookFairs = [
  {
    name: "Frankfurt Book Fair (Frankfurter Buchmesse)",
    location: "Frankfurt, Germany",
    focus: "The world's largest gathering for international publishing rights, translation licenses, and foreign distribution agreements.",
  },
  {
    name: "London Book Fair",
    location: "London, United Kingdom",
    focus: "The global marketplace for rights negotiation, European bookstore placement, and Commonwealth distribution channels.",
  },
  {
    name: "American Library Association (ALA) Annual",
    location: "United States (Rotational)",
    focus: "Direct exposure to over 15,000 public and university acquisition librarians responsible for nationwide catalog purchasing.",
  },
  {
    name: "Beijing & Tokyo International Book Fairs",
    location: "Asia-Pacific Region",
    focus: "Expanding author footprint into rapidly growing East Asian translation rights markets and academic collections.",
  },
];

export default function MarketingPage() {
  return (
    <>
      <UtilityBar />
      <Header />
      <main className="bg-paper text-ink">
        {/* Hero */}
        <section className="relative overflow-hidden bg-paper pt-12 pb-16 lg:pt-20 lg:pb-24 border-b border-line">
          <div className="absolute inset-0 pointer-events-none opacity-[0.02] mix-blend-multiply bg-[radial-gradient(#181A1F_1px,transparent_1px)] [background-size:24px_24px]" />
          <Container>
            <div className="max-w-3xl mx-auto text-center flex flex-col items-center">
              <Eyebrow tone="gold">
                Commercial Discovery &bull; Global Book Publicity
              </Eyebrow>

              <h1 className="mt-6 font-serif text-[2.6rem] sm:text-[3.4rem] lg:text-[3.8rem] font-bold leading-[1.08] text-ink tracking-tight text-balance">
                Your book is in print.{" "}
                <span className="text-[#B8964E] block sm:inline">Now we place it in readers&rsquo; hands.</span>
              </h1>

              <p className="mt-5 text-[1.06rem] sm:text-[1.14rem] leading-relaxed text-ink-soft font-sans max-w-2xl">
                Publication day is not the finish line—it is day one of your book&rsquo;s public life. Our marketing strategists craft bespoke campaigns built around the commercial realities of your genre.
              </p>

              <div className="mt-8 flex flex-col sm:flex-row items-center gap-4">
                <Button href="/contact-us#manuscript-review" variant="primary" size="lg">
                  <span>Develop Your Custom Launch Campaign</span>
                  <ArrowRight size={15} />
                </Button>
                <Button href="#book-fairs" variant="outline" size="lg">
                  <span>International Book Fair Representation</span>
                </Button>
              </div>
            </div>
          </Container>
        </section>

        {/* Marketing Pillars */}
        <section className="py-20 lg:py-24 bg-paper-warm border-b border-line">
          <Container className="flex flex-col gap-12">
            <SectionHeading
              eyebrow="Targeted Campaign Cadence"
              title={
                <>
                  Strategic publicity designed for{" "}
                  <span className="italic text-[#9E7C35]">lasting literary momentum</span>
                </>
              }
              description="We avoid one-size-fits-all promotional spam. Every marketing package is engineered to create compounding credibility with readers, reviewers, and booksellers."
            />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {marketingPillars.map((p) => (
                <div
                  key={p.title}
                  className="p-8 sm:p-10 rounded-xs border border-line bg-paper-card shadow-card flex flex-col justify-between hover:border-[#C5A059]/40 hover:shadow-cardHover transition-all"
                >
                  <div>
                    <span className="font-sans text-[10px] uppercase tracking-[0.14em] font-bold text-[#9E7C35] bg-paper-warm px-2.5 py-1 rounded-xs border border-line inline-block mb-4">
                      {p.badge}
                    </span>
                    <h3 className="font-serif text-[1.3rem] font-bold text-ink">
                      {p.title}
                    </h3>
                    <p className="mt-3 text-sm text-ink-soft leading-relaxed">
                      {p.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </Container>
        </section>

        {/* Book Fairs Anchor Section */}
        <section id="book-fairs" className="py-20 lg:py-28 bg-[#0D1527] text-white border-b border-[#1E293B]">
          <Container className="flex flex-col gap-14">
            <div className="text-center max-w-2xl mx-auto">
              <span className="font-sans text-xs uppercase tracking-[0.16em] font-semibold text-[#E8C98B]">
                Global Rights &amp; Exhibition
              </span>
              <h2 className="mt-3 font-serif text-[2.2rem] sm:text-[2.6rem] font-bold text-white leading-tight">
                International Book Fair Representation
              </h2>
              <p className="mt-3 text-sm sm:text-base text-slate-300 leading-relaxed">
                Collingwood Press represents author titles at the world&rsquo;s most prestigious trade exhibitions, presenting physical display copies to international publishers, film scouts, and rights buyers.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto w-full">
              {bookFairs.map((fair) => (
                <div
                  key={fair.name}
                  className="p-6 rounded-xs border border-[#C5A059]/30 bg-[#111C30] shadow-sm flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center gap-2 mb-2 text-xs font-sans text-[#E8C98B]">
                      <Globe size={14} />
                      <span>{fair.location}</span>
                    </div>
                    <h3 className="font-serif text-[1.2rem] font-bold text-white">
                      {fair.name}
                    </h3>
                    <p className="mt-2.5 text-xs text-slate-300 leading-relaxed">
                      {fair.focus}
                    </p>
                  </div>
                  <div className="mt-4 pt-3 border-t border-white/10 flex items-center gap-2 text-[11px] text-[#C5A059]">
                    <CheckCircle2 size={13} />
                    <span>Physical Catalog &amp; Stand Placement Included</span>
                  </div>
                </div>
              ))}
            </div>

            <div className="text-center">
              <Button href="/contact-us#manuscript-review" variant="primary" size="lg">
                <span>Inquire About Book Fair Inclusion</span>
                <ArrowRight size={15} />
              </Button>
            </div>
          </Container>
        </section>
      </main>
      <Footer />
    </>
  );
}
