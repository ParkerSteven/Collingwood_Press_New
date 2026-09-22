"use client";

import { motion } from "framer-motion";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import { Feather, Shield, Check, ArrowRight } from "lucide-react";

export default function TrustBand() {
  return (
    <section className="bg-[#0D1527] py-16 sm:py-20 border-b border-[#1E293B] text-white">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6 }}
          className="relative rounded-xs border border-[#C5A059]/30 bg-[#0A111F] p-8 sm:p-12 lg:p-14 shadow-2xl overflow-hidden"
        >
          {/* Subtle background publisher emblem watermark */}
          <div className="absolute right-6 -bottom-8 pointer-events-none opacity-[0.04] text-white select-none">
            <Feather size={260} strokeWidth={1} />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-[1.3fr_0.7fr] gap-10 items-center">
            {/* Left Content */}
            <div className="flex flex-col gap-5">
              <div className="inline-flex items-center gap-2.5">
                <span className="flex h-8 w-8 items-center justify-center rounded-xs bg-[#C5A059]/20 text-[#C5A059]">
                  <Feather size={16} strokeWidth={1.75} />
                </span>
                <span className="font-sans text-[0.74rem] uppercase tracking-[0.16em] font-semibold text-[#C5A059]">
                  The Collingwood Press Publishing Manifesto
                </span>
              </div>

              <h2 className="font-serif text-[2.1rem] sm:text-[2.6rem] font-bold leading-[1.12] text-white text-balance">
                The internet is full of promises.{" "}
                <span className="italic font-normal text-[#E8C98B]">
                  Not all of them are real.
                </span>
              </h2>

              <p className="text-[1.02rem] leading-relaxed text-slate-300 font-sans">
                The publishing industry has become saturated with vanity mills that charge authors
                thousands of dollars for automated template conversions, outsourced proofreading,
                and generic stock covers. Once your invoice clears, the promises evaporate.
              </p>

              <p className="text-[1.02rem] leading-relaxed text-slate-300 font-sans">
                Collingwood Press was founded on a contrary principle: that every manuscript
                deserves a seasoned, human trade editor who reads every paragraph, an interior
                typographer who balances every gutter margin in InDesign, and an honest partnership
                guided by telephone conversations rather than automated tickets.
              </p>

              {/* Bullet Guarantees */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 text-[0.86rem] text-slate-200 font-sans">
                <div className="flex items-center gap-2">
                  <span className="flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-[#C5A059] text-black text-[9px] font-bold">
                    ✓
                  </span>
                  <span>Direct phone access to your project director</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-[#C5A059] text-black text-[9px] font-bold">
                    ✓
                  </span>
                  <span>100% intellectual property ownership</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-[#C5A059] text-black text-[9px] font-bold">
                    ✓
                  </span>
                  <span>No hidden royalties or back-end deductions</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-[#C5A059] text-black text-[9px] font-bold">
                    ✓
                  </span>
                  <span>Physical proof copy approval before distribution</span>
                </div>
              </div>
            </div>

            {/* Right Action & Publisher Seal Card */}
            <div className="flex flex-col items-center justify-center text-center p-8 bg-[#0D1527] rounded-xs border border-[#C5A059]/30">
              <div className="flex h-16 w-16 items-center justify-center rounded-full border border-[#C5A059]/40 bg-[#C5A059]/15 text-[#C5A059] mb-4">
                <Shield size={28} strokeWidth={1.5} />
              </div>
              <span className="font-serif text-[1.2rem] font-bold text-white">
                The Author First Guarantee
              </span>
              <p className="font-sans text-xs text-slate-400 leading-relaxed mt-2 max-w-xs">
                Every title published under the Collingwood Press imprint adheres to strict trade
                standards verified by the Independent Book Publishers Association.
              </p>
              <div className="w-12 h-px bg-white/10 my-5" />
              <Button href="/about-us" variant="primary" size="md" className="w-full sm:w-auto">
                <span>Discover Our Standards</span>
                <ArrowRight size={14} />
              </Button>
            </div>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
