"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import { ShieldCheck, Clock, PhoneCall, CheckCircle2, Lock, ArrowRight } from "lucide-react";

export default function ManuscriptCTA() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="manuscript-review" className="bg-paper py-20 lg:py-28 border-b border-line">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-70px" }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-3xl border-2 border-line-strong bg-paper-card p-8 sm:p-12 shadow-card rounded-2xl"
        >
          {/* Header Plaque */}
          <div className="text-center max-w-xl mx-auto flex flex-col items-center">
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-xs bg-[#C5A059]/15 text-[#9E7C35] font-sans text-xs font-semibold tracking-wider uppercase border border-[#C5A059]/30">
              <ShieldCheck size={14} />
              <span>Complimentary Editorial Evaluation</span>
            </span>

            <h2 className="mt-4 font-serif text-[2.2rem] sm:text-[2.7rem] font-normal text-ink leading-tight text-balance">
              Your story&rsquo;s next chapter{" "}
              <span className="italic text-[#9E7C35]">starts here</span>
            </h2>

            <p className="mt-3 font-sans text-[0.98rem] leading-relaxed text-ink-soft">
              Submit your manuscript or opening chapters. Within 5–7 business days, a senior trade
              editor reads your work and provides an honest, constructive critique—free of sales
              pressure or automated replies.
            </p>
          </div>

          {submitted ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="mt-10 p-8 rounded-xs bg-paper-warm border border-line text-center flex flex-col items-center gap-3"
            >
              <div className="w-12 h-12 rounded-full bg-forest/10 text-forest flex items-center justify-center">
                <CheckCircle2 size={24} />
              </div>
              <h3 className="font-serif text-xl font-medium text-ink">
                Manuscript Received with Appreciation
              </h3>
              <p className="text-sm font-sans text-ink-soft max-w-md">
                Your submission has been cataloged and assigned to our Senior Acquisitions Editor.
                Expect our comprehensive editorial appraisal and telephone invite within 5 business days.
              </p>
              <button
                onClick={() => setSubmitted(false)}
                className="mt-2 text-xs font-sans text-[#9E7C35] underline hover:text-[#C5A059]"
              >
                Submit another manuscript
              </button>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit} className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="flex flex-col gap-1.5">
                <label className="font-sans text-xs font-medium text-ink">
                  Author Full Name <span className="text-[#C5A059]">*</span>
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g., Katherine Vance"
                  className="rounded-xs border border-line bg-paper px-4 py-3 text-[0.92rem] text-ink placeholder:text-ink-muted/60 focus:bg-white focus:border-[#C5A059] transition-colors"
                />
              </div>

              <div className="flex flex-col gap-1.5">
                <label className="font-sans text-xs font-medium text-ink">
                  Email Address <span className="text-[#C5A059]">*</span>
                </label>
                <input
                  type="email"
                  required
                  placeholder="author@example.com"
                  className="rounded-xs border border-line bg-paper px-4 py-3 text-[0.92rem] text-ink placeholder:text-ink-muted/60 focus:bg-white focus:border-[#C5A059] transition-colors"
                />
              </div>

              <div className="flex flex-col gap-1.5">
                <label className="font-sans text-xs font-medium text-ink">
                  Working Title &amp; Genre
                </label>
                <input
                  type="text"
                  placeholder="e.g., The Silent Moor (Literary Mystery)"
                  className="rounded-xs border border-line bg-paper px-4 py-3 text-[0.92rem] text-ink placeholder:text-ink-muted/60 focus:bg-white focus:border-[#C5A059] transition-colors"
                />
              </div>

              <div className="flex flex-col gap-1.5">
                <label className="font-sans text-xs font-medium text-ink">
                  Approximate Word Count / Status
                </label>
                <input
                  type="text"
                  placeholder="e.g., 75,000 words (Completed 2nd Draft)"
                  className="rounded-xs border border-line bg-paper px-4 py-3 text-[0.92rem] text-ink placeholder:text-ink-muted/60 focus:bg-white focus:border-[#C5A059] transition-colors"
                />
              </div>

              <div className="sm:col-span-2 flex flex-col gap-1.5">
                <label className="font-sans text-xs font-medium text-ink">
                  Manuscript Synopsis &amp; Publishing Goals
                </label>
                <textarea
                  rows={3}
                  placeholder="Briefly describe your story, target readership, and what you hope to achieve with this publication..."
                  className="rounded-xs border border-line bg-paper px-4 py-3 text-[0.92rem] text-ink placeholder:text-ink-muted/60 focus:bg-white focus:border-[#C5A059] transition-colors resize-none"
                />
              </div>

              <div className="sm:col-span-2 mt-2">
                <Button type="submit" variant="primary" size="lg" className="w-full">
                  <span>Submit Manuscript for Senior Editor Appraisal</span>
                  <ArrowRight size={15} />
                </Button>
              </div>
            </form>
          )}

          {/* Three Reassurance Badges */}
          <div className="mt-8 pt-6 border-t border-line grid grid-cols-1 sm:grid-cols-3 gap-4 text-center font-sans text-xs text-ink-muted">
            <div className="flex items-center justify-center gap-2">
              <Clock size={15} className="text-[#C5A059] shrink-0" />
              <span>5–7 Business Day Review</span>
            </div>
            <div className="flex items-center justify-center gap-2">
              <PhoneCall size={15} className="text-[#C5A059] shrink-0" />
              <span>Direct Call with Editor</span>
            </div>
            <div className="flex items-center justify-center gap-2">
              <Lock size={15} className="text-[#C5A059] shrink-0" />
              <span>100% Confidential &amp; Protected</span>
            </div>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
