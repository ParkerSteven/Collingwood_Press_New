"use client";

import { motion } from "framer-motion";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import Button from "@/components/ui/Button";
import { formattingServices } from "@/lib/data";
import { BookOpen, Layers, PenTool, CheckCircle2, ArrowRight } from "lucide-react";

const icons = [BookOpen, Layers, PenTool, CheckCircle2];

export default function ServicesGrid() {
  return (
    <section id="services" className="bg-paper py-20 lg:py-28 border-b border-line">
      <Container className="flex flex-col gap-14 sm:gap-16">
        <SectionHeading
          eyebrow="Interior Architecture &amp; Binding"
          title={
            <>
              Your manuscript is finished.{" "}
              <span className="italic text-[#9E7C35]">Now we prepare it for the shelf.</span>
            </>
          }
          description="Whether you have an unformatted Word document or a complex manuscript requiring dual-column indices and footnoting, our master typographers engineer your pages for world-class readability."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {formattingServices.map((service, i) => {
            const Icon = icons[i];
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="group flex flex-col justify-between rounded-2xl border border-line bg-paper-card p-7 shadow-card hover:shadow-cardHover hover:border-line-strong transition-all duration-300"
              >
                <div className="flex flex-col gap-4">
                  <div className="flex items-center justify-between">
                    <span className="flex h-11 w-11 items-center justify-center rounded-xs bg-[#C5A059] text-white border border-[#C5A059]">
                      <Icon size={20} strokeWidth={1.75} />
                    </span>
                    <span className="font-serif text-sm font-medium text-ink-muted">
                      {service.step}
                    </span>
                  </div>

                  <h3 className="font-serif text-[1.18rem] font-medium text-ink leading-snug">
                    {service.title}
                  </h3>

                  <p className="text-[0.92rem] leading-relaxed text-ink-soft font-sans">
                    {service.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-line/70">
                  <span className="inline-flex items-center gap-1.5 font-sans text-xs font-medium text-black">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#C5A059]" />
                    {service.highlight}
                  </span>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Action Row */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
          <Button href="/publishing" variant="outline" size="lg">
            <span>Explore Publishing Formats</span>
          </Button>
          <Button href="/contact-us#manuscript-review" variant="primary" size="lg">
            <span>Submit Manuscript for Formatting</span>
            <ArrowRight size={14} />
          </Button>
        </div>
      </Container>
    </section>
  );
}
