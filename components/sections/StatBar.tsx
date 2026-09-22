"use client";

import { motion } from "framer-motion";
import Container from "@/components/ui/Container";
import { stats } from "@/lib/data";

export default function StatBar() {
  return (
    <section className="bg-[#0D1527] border-y border-[#1E293B] py-10 lg:py-12 text-white">
      <Container>
        <div className="grid grid-cols-2 gap-y-8 lg:grid-cols-4 lg:gap-y-0">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="flex flex-col items-center text-center px-4 lg:border-r lg:border-[#C5A059]/20 lg:last:border-r-0"
            >
              <span className="font-serif text-[2.4rem] sm:text-[2.8rem] font-bold leading-none text-[#D4AF37] tracking-tight">
                {stat.value}
              </span>
              <span className="mt-2 font-serif text-[0.98rem] font-semibold text-slate-200 leading-snug">
                {stat.label}
              </span>
              <span className="mt-1 max-w-[12rem] text-[0.78rem] text-slate-400 leading-tight font-sans">
                {stat.subtext}
              </span>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}
