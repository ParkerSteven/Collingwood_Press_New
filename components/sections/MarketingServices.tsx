"use client";

import { motion } from "framer-motion";
import { Check, Compass, Megaphone, Trophy, ArrowRight } from "lucide-react";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import { marketingServices } from "@/lib/data";

const icons = [Compass, Megaphone, Trophy];

export default function MarketingServices() {
  return (
    <section id="marketing" className="bg-paper-warm py-20 lg:py-28 border-b border-line">
      <Container className="flex flex-col gap-14 sm:gap-16">
        <SectionHeading
          eyebrow="Author Reach &amp; Sales Strategy"
          title={
            <>
              Your book is in print.{" "}
              <span className="italic text-[#9E7C35]">Now we place it in readers&rsquo; hands.</span>
            </>
          }
          description="Publication day is not the finish line—it is day one of your book's public life. Our marketing team crafts customized campaigns tailored to the commercial realities of your genre."
        />

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-7 lg:gap-8">
          {marketingServices.map((service, i) => {
            const Icon = icons[i];
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.55, delay: i * 0.1 }}
                className="group relative flex flex-col rounded-xl border border-line/80 bg-paper-card p-7 sm:p-8 shadow-[0_2px_12px_-4px_rgba(0,0,0,0.06)] hover:shadow-[0_12px_28px_-8px_rgba(0,0,0,0.12)] hover:border-[#9E7C35]/35 hover:-translate-y-1.5 transition-all duration-300 ease-out"
              >
                {/* subtle top accent line on hover */}
                <div className="absolute inset-x-0 top-0 h-[2px] rounded-t-xl bg-gradient-to-r from-transparent via-[#9E7C35]/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                <div className="flex flex-col h-full">
                  {/* Icon + Badge */}
                  <div className="flex items-center justify-between mb-6">
                    <span className="flex h-12 w-12 items-center justify-center rounded-lg bg-paper-warm text-[#9E7C35] border border-line group-hover:bg-[#9E7C35]/10 group-hover:border-[#9E7C35]/30 transition-colors duration-300">
                      <Icon size={22} strokeWidth={1.6} />
                    </span>
                    <span className="font-sans text-[10px] uppercase tracking-[0.16em] text-ink-muted font-medium bg-paper-warm/80 px-2.5 py-1 rounded-md border border-line/70">
                      {service.badge}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="font-serif text-[1.32rem] font-medium text-ink leading-snug group-hover:text-[#9E7C35] transition-colors duration-300">
                    {service.title}
                  </h3>

                  {/* Description */}
                  <p className="mt-3.5 font-sans text-[0.925rem] leading-relaxed text-ink-soft">
                    {service.description}
                  </p>

                  {/* Divider */}
                  <div className="w-full h-px bg-line/80 my-6 group-hover:bg-[#9E7C35]/25 transition-colors duration-300" />

                  {/* Points */}
                  <ul className="flex flex-col gap-3.5 mt-auto">
                    {service.points.map((point) => (
                      <li
                        key={point}
                        className="flex items-start gap-3 text-[0.875rem] font-sans text-ink-soft"
                      >
                        <span className="flex h-[18px] w-[18px] shrink-0 items-center justify-center rounded-full bg-[#C5A059]/15 text-[#9E7C35] text-[11px] mt-0.5 font-semibold group-hover:bg-[#9E7C35]/20 transition-colors duration-300">
                          ✓
                        </span>
                        <span className="leading-snug pt-px">{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
