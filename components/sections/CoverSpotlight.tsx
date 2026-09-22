"use client";

import { motion } from "framer-motion";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import Button from "@/components/ui/Button";
import BookCover from "@/components/ui/BookCover";
import { Sparkles, Palette, ArrowRight, Award } from "lucide-react";

export default function CoverSpotlight() {
  return (
    <section id="cover-spotlight" className="bg-paper-warm py-20 lg:py-28 border-b border-line">
      <Container className="flex flex-col gap-14 sm:gap-16">
        <SectionHeading
          eyebrow="Cover Design Spotlight"
          title={
            <>
              Every book deserves a cover that{" "}
              <span className="italic text-[#9E7C35]">makes readers stop and stare</span>
            </>
          }
          description="In bookstores and online catalogs, your jacket design has precisely three seconds to convey genre, emotional tone, and literary pedigree. Here is an inside look at a recent bespoke commission."
        />

        {/* Gallery Exhibition Frame */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-70px" }}
          transition={{ duration: 0.65 }}
          className="mx-auto w-full max-w-4xl rounded-xl border-2 border-line-strong bg-paper-card p-6 sm:p-10 shadow-card"
        >
          {/* Gallery Header Plaque */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between pb-6 mb-8 border-b border-line gap-3">
            <div className="flex items-center gap-3">
              <span className="flex h-7 w-7 items-center justify-center rounded-full bg-[#C5A059]/15 text-[#C5A059] text-xs">
                <Award size={14} />
              </span>
              <div>
                <span className="font-serif text-sm font-semibold text-ink">
                  Exhibition Archive: Commission No. 842
                </span>
                <span className="font-sans text-[11px] text-ink-muted block">
                  Genre: Historical Thriller &bull; Hardcover Collector&rsquo;s Edition
                </span>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-xs bg-paper-warm text-[11px] font-sans text-ink-soft border border-line">
                <Palette size={12} className="text-[#C5A059]" />
                <span>Custom Gold Foil Stamped</span>
              </span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-[240px_1fr] gap-8 lg:gap-12 items-center">
            {/* Book Cover Showcase */}
            <div className="mx-auto w-48 sm:w-56 drop-shadow-2xl">
              <BookCover
                title="The Last King"
                subtitle="A Chronicle of Crown &amp; Blood"
                author="John Terrell"
                genre="Historical Thriller"
                bg="#191B24"
                accent="#E8BE78"
                artTheme="geometric"
                elevation={true}
              />
            </div>

            {/* Author Pull Quote & Case Study */}
            <div className="flex flex-col gap-5">
              {/* Author Citation with Portrait */}
              <div className="flex items-center gap-3.5">
                <img
                  src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=160&h=160&q=80"
                  alt="Author John Terrell"
                  className="w-12 h-12 rounded-full object-cover border border-line-strong shadow-subtle"
                />
                <div>
                  <h4 className="font-serif text-[1.12rem] font-medium text-ink">
                    John Terrell
                  </h4>
                  <p className="font-sans text-xs text-ink-muted">
                    Author of <span className="italic font-serif">The Last King</span> &bull; 1st Edition
                  </p>
                </div>
              </div>

              {/* Pull Quote */}
              <blockquote className="font-serif italic text-[1.18rem] sm:text-[1.28rem] leading-snug text-ink text-balance border-l-2 border-[#C5A059] pl-4 my-1">
                &ldquo;Our book covers are a piece of art that you can show your friends. The final
                design exceeded our wildest dreams—the embossed foil lettering and the cinematic mood
                drew readers the moment we unveiled the proofs.&rdquo;
              </blockquote>

              {/* Design Breakdown Pills */}
              <div className="grid grid-cols-2 gap-3 pt-2 text-xs font-sans text-ink-soft">
                <div className="p-2.5 rounded-xs bg-paper-warm border border-line">
                  <span className="text-[10px] uppercase tracking-wider text-ink-muted block">
                    Typography Specimen
                  </span>
                  <span className="font-serif font-medium text-ink mt-0.5 block">
                    Classical Cormorant &amp; Trajan Serif
                  </span>
                </div>
                <div className="p-2.5 rounded-xs bg-paper-warm border border-line">
                  <span className="text-[10px] uppercase tracking-wider text-ink-muted block">
                    Finishing Treatment
                  </span>
                  <span className="font-serif font-medium text-ink mt-0.5 block">
                    Soft-Touch Matte + Gold Foil
                  </span>
                </div>
              </div>

              {/* Solid Button */}
              <div className="pt-2">
                <Button href="/contact-us#manuscript-review" variant="primary" size="md">
                  <span>Commission Your Book Cover Design</span>
                  <ArrowRight size={14} />
                </Button>
              </div>
            </div>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
