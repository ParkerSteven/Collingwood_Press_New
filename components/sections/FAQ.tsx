"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus, HelpCircle } from "lucide-react";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import SectionHeading from "@/components/ui/SectionHeading";
import { faqs } from "@/lib/data";

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  };

  return (
    <section id="faq" className="bg-paper-warm py-20 lg:py-28 border-b border-line">
      <Container className="flex flex-col gap-12 sm:gap-14">
        <SectionHeading
          eyebrow="Publishing Guidance &amp; Clarifications"
          title={
            <>
              Questions authors ask{" "}
              <span className="italic text-[#9E7C35]">before entering print</span>
            </>
          }
          description="Publishing should be governed by transparency and mutual respect. Here are candid answers to our authors' most frequent inquiries."
        />

        {/* Two-column FAQ grid - items-start fixes the height stretch bug */}
        <div className="mx-auto w-full max-w-5xl grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6 items-start">
          {faqs.map((faq, i) => {
            const isOpen = openIndex === i;

            return (
              <div
                key={faq.question}
                className="group rounded-xl border border-line bg-paper-card shadow-card overflow-hidden transition-all duration-300 hover:shadow-md hover:border-[#C5A059]/40"
              >
                <button
                  onClick={() => toggle(i)}
                  aria-expanded={isOpen}
                  className="flex w-full items-start justify-between gap-4 p-5 sm:p-6 text-left hover:bg-paper/50 transition-colors"
                >
                  <span className="font-serif text-[0.9rem] sm:text-[1rem] font-medium text-[#090601] leading-snug pr-2">
                    {faq.question}
                  </span>
                  <span
                    className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-lg border transition-all duration-300 ${isOpen
                      ? "border-[#C5A059] bg-[#9E7C35] text-white"
                      : "border-line bg-paper-warm text-[#9E7C35] group-hover:border-[#C5A059]"
                      }`}
                  >
                    {isOpen ? <Minus size={14} /> : <Plus size={14} />}
                  </span>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
                      className="overflow-hidden"
                    >
                      <div className="px-5 pb-5 sm:px-6 sm:pb-6 text-[0.92rem] leading-relaxed text-ink-soft font-sans border-t border-line/50 pt-4 bg-paper/30">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

        {/* Support Callout */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 text-center pt-2">
          <span className="font-sans text-sm text-ink-soft">
            Have a question specific to your manuscript genre or timeline?
          </span>
          <Button href="/contact-us#manuscript-review" variant="outline" size="md">
            <span>Speak Directly with an Acquisitions Editor</span>
          </Button>
        </div>
      </Container>
    </section>
  );
}
