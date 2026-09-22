"use client";

import { motion } from "framer-motion";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import { Phone, MapPin, Mail, Clock, ArrowRight } from "lucide-react";

export default function FinalCTA() {
  return (
    <section className="bg-paper py-20 lg:py-24 border-b border-line">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
          {/* Left Card: Direct Submission Invitation */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.55 }}
            className="flex flex-col justify-between gap-8 rounded-xs border border-[#C5A059]/30 bg-[#0D1527] p-8 sm:p-11 shadow-xl text-white"
          >
            <div>
              <span className="font-sans text-xs uppercase tracking-[0.16em] font-semibold text-[#E5C888]">
                Begin Your Publication Journey
              </span>
              <h2 className="mt-3 font-serif text-[2.2rem] sm:text-[2.5rem] font-bold leading-tight text-white">
                Ready to publish?{" "}
                <span className="italic text-[#E5C888] block font-medium">See your name in print.</span>
              </h2>
              <p className="mt-4 font-sans text-[0.98rem] leading-relaxed text-slate-300">
                Your manuscript represents years of imagination, discipline, and emotional investment.
                Entrust it to a press that honors the craft of traditional publishing.
              </p>
            </div>

            <div>
              <Button href="/contact-us#manuscript-review" variant="primary" size="lg">
                <span>Submit Manuscript for Free Review</span>
                <ArrowRight size={15} />
              </Button>
              <p className="mt-3 font-sans text-xs text-slate-400">
                Zero submission fee &bull; 5–7 day turnaround &bull; 100% rights protected
              </p>
            </div>
          </motion.div>

          {/* Right Card: Press Headquarters & Direct Line */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.55, delay: 0.1 }}
            className="flex flex-col justify-between gap-8 rounded-xs border border-line bg-paper-warm/80 p-8 sm:p-11"
          >
            <div>
              <span className="font-sans text-xs uppercase tracking-[0.16em] font-semibold text-[#9E7C35]">
                Publisher Inquiries &amp; Consultations
              </span>
              <h2 className="mt-3 font-serif text-[2.2rem] sm:text-[2.5rem] font-normal leading-tight text-ink">
                Connect directly with{" "}
                <span className="italic text-[#9E7C35]">our editors</span>
              </h2>
              <p className="mt-4 font-sans text-[0.98rem] leading-relaxed text-ink-soft">
                We invite authors to talk through their project vision before submitting a single page.
                Our doors and phone lines are open.
              </p>
            </div>

            <div className="flex flex-col gap-4 text-sm font-sans text-ink">
              <a
                href="tel:+19362233644"
                className="flex items-center gap-3.5 hover:text-[#9E7C35] transition-colors group"
              >
                <span className="flex h-9 w-9 items-center justify-center rounded-xs bg-paper-card border border-line text-[#C5A059] group-hover:border-[#C5A059]">
                  <Phone size={15} />
                </span>
                <span className="font-medium">+1 (936) 223-3644</span>
              </a>

              <a
                href="mailto:info@thecollingwoodpress.com"
                className="flex items-center gap-3.5 hover:text-[#9E7C35] transition-colors group"
              >
                <span className="flex h-9 w-9 items-center justify-center rounded-xs bg-paper-card border border-line text-[#C5A059] group-hover:border-[#C5A059]">
                  <Mail size={15} />
                </span>
                <span>info@thecollingwoodpress.com</span>
              </a>

              <div className="flex items-center gap-3.5 text-ink-soft">
                <span className="flex h-9 w-9 items-center justify-center rounded-xs bg-paper-card border border-line text-ink-muted">
                  <MapPin size={15} />
                </span>
                <span>Ontario, California, United States</span>
              </div>
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
