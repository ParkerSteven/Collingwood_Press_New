"use client";

import { motion } from "framer-motion";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import Button from "@/components/ui/Button";
import { projectManagers } from "@/lib/data";
import { PhoneCall } from "lucide-react";

export default function ProjectManagers() {
  return (
    <section id="directors" className="bg-paper py-20 lg:py-28 border-b border-line">
      <Container className="flex flex-col gap-14 sm:gap-16">
        <SectionHeading
          eyebrow="Publishing Leadership"
          title={
            <>
              Meet the senior publishing directors{" "}
              <span className="italic text-[#9E7C35]">who shepherd your work</span>
            </>
          }
          description="At The Collingwood Press, you are never passed off to customer support tickets or junior offshore contractors. These are the seasoned publishing professionals who read your drafts and answer your calls."
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-8">
          {projectManagers.map((pm, i) => (
            <motion.div
              key={pm.name}
              initial={{ opacity: 0, y: 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.55, delay: i * 0.1 }}
              className="group flex flex-col justify-between rounded-2xl border border-line/80 bg-paper-card 
                     shadow-[0_4px_20px_-4px_rgba(0,0,0,0.08)] 
                     hover:shadow-[0_12px_40px_-8px_rgba(0,0,0,0.14)] 
                     hover:border-[#C5A059]/50 
                     hover:-translate-y-1
                     transition-all duration-300 overflow-hidden"
            >
              <div>
                {/* Executive Portrait */}
                <div className="relative h-64 sm:h-72 w-full overflow-hidden bg-paper-warm">
                  <img
                    src={pm.avatar}
                    alt={`Portrait of ${pm.name}, ${pm.title}`}
                    className="h-full w-full object-cover object-top transition-transform duration-500 group-hover:scale-105 filter grayscale-[15%]"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/20 to-transparent" />
                  <div className="absolute bottom-4 left-5 right-5 text-white">
                    <span className="font-sans text-[10px] uppercase tracking-[0.14em] text-white/85 font-medium block mb-0.5">
                      {pm.experience}
                    </span>
                    <h3 className="font-serif text-[1.35rem] font-medium leading-tight">
                      {pm.name}
                    </h3>
                  </div>
                </div>

                {/* Body Content */}
                <div className="p-6 flex flex-col gap-4">
                  <div>
                    <span className="font-sans text-[0.78rem] font-medium text-[#9E7C35] tracking-wide uppercase">
                      {pm.title}
                    </span>
                    <p className="mt-2.5 font-sans text-[0.92rem] leading-relaxed text-ink-soft">
                      {pm.bio}
                    </p>
                  </div>

                  {/* Philosophy Quote */}
                  <div className="p-3.5 rounded-xl bg-paper-warm/80 border-l-[3px] border-[#C5A059] text-xs font-serif italic text-ink/90 leading-relaxed">
                    {pm.philosophy}
                  </div>

                  {/* Specialties Pills */}
                  <div className="flex flex-wrap gap-1.5 pt-1">
                    {pm.specialties.map((spec) => (
                      <span
                        key={spec}
                        className="px-2.5 py-1 rounded-full bg-paper-warm text-[10px] font-sans text-ink-muted border border-line/70"
                      >
                        {spec}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Action */}
              <div className="p-6 pt-0">
                <Button
                  href="/contact-us#manuscript-review"
                  variant="primary"
                  size="md"
                  className="w-full flex items-center justify-center gap-2 rounded-xl"
                >
                  <PhoneCall size={13} className="text-white" />
                  <span>Consultation with {pm.name.split(" ")[0]}</span>
                </Button>
              </div>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}
