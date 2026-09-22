"use client";

import UtilityBar from "@/components/layout/UtilityBar";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import Eyebrow from "@/components/ui/Eyebrow";
import SectionHeading from "@/components/ui/SectionHeading";
import { 
  PenTool, 
  ShieldCheck, 
  Lock, 
  FileText, 
  Sparkles, 
  BookOpen, 
  CheckCircle2, 
  Clock, 
  MessageSquareQuote,
  ArrowRight
} from "lucide-react";
import { motion } from "framer-motion";

const ghostwritingSteps = [
  {
    step: "Phase 01",
    title: "Deep Voice Discovery & Intake",
    description: "Through recorded conversations and personal archives, your dedicated ghostwriter immerses themselves in your tone, cadence, vocabulary, and worldview to ensure your genuine voice anchors every page.",
    deliverable: "Custom Voice Profile & Story Archetype",
  },
  {
    step: "Phase 02",
    title: "The Master Narrative Blueprint",
    description: "We construct a comprehensive chapter-by-chapter outline, structural tension arc, and thematic beats. You review, challenge, and approve the roadmap before a single sentence is drafted.",
    deliverable: "Full Outline & Synopsis Document",
  },
  {
    step: "Phase 03",
    title: "Iterative Chapter Delivery Cycles",
    description: "Chapters are drafted in predictable batches. You receive fresh pages every two weeks for candid review and refinement calls, keeping you in complete artistic control from inception to completion.",
    deliverable: "Rolling Batches with Annotation Reviews",
  },
  {
    step: "Phase 04",
    title: "Editorial Polish & Tone Harmonization",
    description: "Our senior developmental editors review the complete manuscript alongside your ghostwriter to eliminate pacing lags, polish transitions, and certify commercial readability.",
    deliverable: "Clean, Fully Polished Complete Draft",
  },
  {
    step: "Phase 05",
    title: "Seamless Transition to Production",
    description: "Once your final approval is sealed, your manuscript seamlessly transitions into interior InDesign typesetting, custom cover design, and international distribution.",
    deliverable: "Typeset-Ready Trade Manuscript",
  },
];

const specialties = [
  {
    title: "Memoirs & Autobiography",
    desc: "Transform your life lessons, triumphs, and trials into narrative literature that moves readers and endures for generations.",
    icon: BookOpen,
  },
  {
    title: "Executive & Thought Leadership",
    desc: "Position your proprietary business frameworks, industry insights, and leadership philosophy as standard-setting literature.",
    icon: Sparkles,
  },
  {
    title: "Narrative & Investigative Nonfiction",
    desc: "Rigorous research, human interest storytelling, and historical context woven into compelling page-turning prose.",
    icon: FileText,
  },
  {
    title: "Commercial & Literary Fiction",
    desc: "Bring your high-concept premise, vivid worlds, and unforgettable characters to life with seasoned novelists.",
    icon: PenTool,
  },
];

export default function GhostwritingPage() {
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
                Bespoke Trade Collaboration &bull; Strict Non-Disclosure
              </Eyebrow>

              <h1 className="mt-6 font-serif text-[2.6rem] sm:text-[3.4rem] lg:text-[3.8rem] font-bold leading-[1.08] text-ink tracking-tight text-balance">
                You have the story.{" "}
                <span className="text-[#B8964E] block sm:inline">We provide the pen.</span>
              </h1>

              <p className="mt-5 text-[1.06rem] sm:text-[1.14rem] leading-relaxed text-ink-soft font-sans max-w-2xl">
                Partner with seasoned trade ghostwriters who capture your authentic voice, shepherd your ideas into compelling prose, and craft a book that commands respect in the marketplace.
              </p>

              <div className="mt-8 flex flex-col sm:flex-row items-center gap-4">
                <Button href="/contact-us#manuscript-review" variant="primary" size="lg">
                  <span>Schedule a Confidential Consultation</span>
                  <ArrowRight size={15} />
                </Button>
                <Button href="#process" variant="outline" size="lg">
                  <span>Explore Collaboration Process</span>
                </Button>
              </div>

              {/* Guarantees */}
              <div className="mt-10 pt-6 border-t border-line flex flex-wrap items-center justify-center gap-6 text-xs text-ink-muted">
                <div className="flex items-center gap-2">
                  <Lock size={14} className="text-[#C5A059]" />
                  <span>100% Strict NDA Protection</span>
                </div>
                <div className="flex items-center gap-2">
                  <ShieldCheck size={14} className="text-[#C5A059]" />
                  <span>100% Author Copyright &amp; Royalties</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 size={14} className="text-[#C5A059]" />
                  <span>Matched with Vetted Trade Authors</span>
                </div>
              </div>
            </div>
          </Container>
        </section>

        {/* Specialized Genres */}
        <section className="py-20 lg:py-24 bg-paper-warm border-b border-line">
          <Container className="flex flex-col gap-12">
            <SectionHeading
              eyebrow="Specialized Literary Domains"
              title={
                <>
                  Ghostwriting crafted for{" "}
                  <span className="italic text-[#9E7C35]">high-impact genres</span>
                </>
              }
              description="Our guild of ghostwriters includes published novelists, former major press editors, and award-winning journalists selected specifically for your genre."
            />

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {specialties.map((item) => {
                const Icon = item.icon;
                return (
                  <div
                    key={item.title}
                    className="p-7 rounded-xs border border-line bg-paper-card shadow-card flex flex-col justify-between hover:border-[#C5A059]/40 hover:shadow-cardHover transition-all"
                  >
                    <div>
                      <span className="flex h-11 w-11 items-center justify-center rounded-xs bg-[#C5A059]/15 text-[#9E7C35] border border-[#C5A059]/30 mb-5">
                        <Icon size={20} />
                      </span>
                      <h3 className="font-serif text-[1.2rem] font-bold text-ink">
                        {item.title}
                      </h3>
                      <p className="mt-2.5 text-sm text-ink-soft leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </Container>
        </section>

        {/* Step-by-Step Collaborative Process */}
        <section id="process" className="py-20 lg:py-28 bg-paper border-b border-line">
          <Container className="flex flex-col gap-14">
            <SectionHeading
              eyebrow="The Ghostwriting Methodology"
              title={
                <>
                  How we shepherd your vision{" "}
                  <span className="italic text-[#9E7C35]">from notes to finished manuscript</span>
                </>
              }
              description="A structured, collaborative framework designed to respect your time while guaranteeing uncompromising literary depth."
            />

            <div className="flex flex-col gap-6 max-w-4xl mx-auto w-full">
              {ghostwritingSteps.map((s, idx) => (
                <div
                  key={s.step}
                  className="p-7 sm:p-8 rounded-xs border border-line bg-paper-card shadow-card flex flex-col md:flex-row md:items-center justify-between gap-6 hover:border-[#C5A059]/40 transition-all"
                >
                  <div className="flex flex-col gap-2 max-w-xl">
                    <span className="font-sans text-xs uppercase tracking-[0.16em] font-bold text-[#9E7C35]">
                      {s.step}
                    </span>
                    <h3 className="font-serif text-[1.3rem] font-bold text-ink">
                      {s.title}
                    </h3>
                    <p className="text-sm text-ink-soft leading-relaxed mt-1">
                      {s.description}
                    </p>
                  </div>

                  <div className="shrink-0 p-3.5 rounded-xs bg-paper-warm border border-line text-xs font-sans">
                    <span className="text-[10px] uppercase tracking-wider text-ink-muted block">
                      Milestone Deliverable
                    </span>
                    <span className="font-medium text-ink mt-0.5 block">
                      {s.deliverable}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </Container>
        </section>

        {/* Testimonial Feature Card */}
        <section className="py-20 bg-[#0D1527] text-white border-b border-[#1E293B]">
          <Container>
            <div className="max-w-3xl mx-auto text-center flex flex-col items-center">
              <span className="flex h-12 w-12 items-center justify-center rounded-full bg-[#C5A059]/20 text-[#C5A059] mb-6 border border-[#C5A059]/40">
                <MessageSquareQuote size={24} />
              </span>
              <blockquote className="font-serif italic text-[1.3rem] sm:text-[1.6rem] leading-snug text-slate-100 text-balance">
                &ldquo;Working with Collingwood&rsquo;s ghostwriting director felt like having an artistic mirror that knew what I wanted to say before I could articulate it. They captured my humor, my voice, and my vision with astonishing precision.&rdquo;
              </blockquote>
              <div className="mt-6 flex flex-col items-center">
                <span className="font-serif text-[1.1rem] font-bold text-white">
                  Julian Vance
                </span>
                <span className="text-xs text-[#E8C98B] font-sans tracking-wide mt-0.5">
                  Author of <span className="italic">Beyond the Horizon</span> &bull; 40,000+ copies sold
                </span>
              </div>
            </div>
          </Container>
        </section>

        {/* Final CTA Banner */}
        <section className="py-20 bg-paper">
          <Container>
            <div className="p-8 sm:p-12 rounded-xs border-2 border-[#C5A059]/30 bg-paper-warm text-center max-w-3xl mx-auto flex flex-col items-center shadow-card">
              <span className="text-xs uppercase tracking-[0.16em] font-semibold text-[#9E7C35]">
                Confidential Project Inquiries
              </span>
              <h2 className="mt-3 font-serif text-[2.2rem] sm:text-[2.6rem] font-bold text-ink leading-tight">
                Ready to bring your book to life?
              </h2>
              <p className="mt-3 text-sm sm:text-base text-ink-soft max-w-lg leading-relaxed">
                Connect directly with our Editorial Director under strict confidentiality. We review your goals and match you with the perfect collaborator.
              </p>
              <div className="mt-8 flex flex-col sm:flex-row items-center gap-4">
                <Button href="/contact-us#manuscript-review" variant="primary" size="lg">
                  <span>Inquire About Ghostwriting Services</span>
                  <ArrowRight size={15} />
                </Button>
                <a
                  href="tel:+19362233644"
                  className="text-xs font-semibold text-ink-soft hover:text-[#9E7C35] transition-colors"
                >
                  Or call +1 (936) 223-3644
                </a>
              </div>
            </div>
          </Container>
        </section>
      </main>
      <Footer />
    </>
  );
}
