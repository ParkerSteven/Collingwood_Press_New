"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import BookCover from "@/components/ui/BookCover";
import { testimonials } from "@/lib/data";
import { CheckCircle, ChevronLeft, ChevronRight, Star } from "lucide-react";

export default function Testimonials() {
  const scrollerRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const checkScroll = () => {
    const scroller = scrollerRef.current;
    if (!scroller) return;

    const card = scroller.querySelector<HTMLElement>(".testimonial-carousel-card");
    const step = card ? card.offsetWidth + 24 : scroller.clientWidth;
    const index = Math.round(scroller.scrollLeft / step);

    setActiveIndex(Math.min(Math.max(0, index), testimonials.length - 1));
    setCanScrollLeft(scroller.scrollLeft > 10);
    setCanScrollRight(scroller.scrollLeft < scroller.scrollWidth - scroller.clientWidth - 10);
  };

  useEffect(() => {
    const scroller = scrollerRef.current;
    if (!scroller) return;

    scroller.addEventListener("scroll", checkScroll, { passive: true });
    checkScroll();
    return () => scroller.removeEventListener("scroll", checkScroll);
  }, []);

  const scroll = (direction: "left" | "right") => {
    const scroller = scrollerRef.current;
    if (!scroller) return;

    const card = scroller.querySelector<HTMLElement>(".testimonial-carousel-card");
    const step = card ? card.offsetWidth + 24 : scroller.clientWidth;
    scroller.scrollBy({
      left: direction === "left" ? -step : step,
      behavior: "smooth",
    });
  };

  const scrollToIndex = (index: number) => {
    const scroller = scrollerRef.current;
    if (!scroller) return;

    const card = scroller.querySelector<HTMLElement>(".testimonial-carousel-card");
    const step = card ? card.offsetWidth + 24 : scroller.clientWidth;
    scroller.scrollTo({ left: index * step, behavior: "smooth" });
  };

  return (
    <section className="bg-paper py-20 lg:py-28 border-b border-line">
      <Container className="flex flex-col gap-14 sm:gap-16">
        <SectionHeading
          eyebrow="Author Acclaim &amp; Case Studies"
          title={
            <>
              Because we turn first-draft uncertainty into{" "}
              <span className="italic text-[#9E7C35]">shelf-ready literature</span>
            </>
          }
          description="Every author who enters our press shares the same quiet conviction: their story matters, and it deserves to be published with pride. Here is how our authors describe the partnership."
        />

        <div className="relative">
          <div className="mb-6 flex justify-end gap-3">
            <button
              onClick={() => scroll("left")}
              disabled={!canScrollLeft}
              aria-label="Show previous testimonials"
              className="flex h-10 w-10 items-center justify-center rounded-xs border border-line-strong bg-paper-card text-ink transition-all hover:border-[#C5A059] hover:text-[#9E7C35] disabled:cursor-not-allowed disabled:opacity-30"
            >
              <ChevronLeft size={18} />
            </button>
            <button
              onClick={() => scroll("right")}
              disabled={!canScrollRight}
              aria-label="Show next testimonials"
              className="flex h-10 w-10 items-center justify-center rounded-xs border border-line-strong bg-paper-card text-ink transition-all hover:border-[#C5A059] hover:text-[#9E7C35] disabled:cursor-not-allowed disabled:opacity-30"
            >
              <ChevronRight size={18} />
            </button>
          </div>

          <div
            ref={scrollerRef}
            className="flex items-stretch gap-6 overflow-x-auto scroll-smooth snap-x snap-mandatory px-2 py-4 sm:px-3 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
          >
            {testimonials.map((t, i) => (
              <motion.article
                key={t.name}
                initial={{ opacity: 0, y: 22 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.55, delay: i * 0.08 }}
                className={`testimonial-carousel-card group flex w-[calc(100%-0.5rem)] shrink-0 snap-center flex-col justify-between rounded-xl border border-line bg-paper-card p-6 shadow-card transition-all duration-300 sm:w-[calc(50%-0.75rem)] ${i === activeIndex || i === activeIndex + 1
                  ? "scale-105 border-line-strong shadow-cardHover"
                  : "hover:border-line-strong hover:shadow-cardHover"
                  }`}
              >
                <div>
                  {/* Author Profile Header */}
                  <div className="flex items-center gap-3.5 pb-4 border-b border-line/60">
                    <img
                      src={t.avatar}
                      alt={`Author portrait of ${t.name}`}
                      className="w-12 h-12 rounded-full object-cover border border-line-strong shadow-subtle"
                      loading="lazy"
                    />
                    <div className="flex flex-col">
                      <div className="flex items-center gap-1.5">
                        <h3 className="font-serif text-[1.02rem] font-medium text-ink leading-tight">
                          {t.name}
                        </h3>
                        <CheckCircle size={12} className="text-[#C5A059] shrink-0" />
                      </div>
                      <span className="font-sans text-[0.74rem] text-ink-muted">
                        {t.role}
                      </span>
                      <span className="font-sans text-[0.68rem] tracking-wider uppercase text-[#9E7C35] font-medium mt-0.5">
                        {t.genre}
                      </span>
                    </div>
                  </div>

                  {/* Rating */}
                  <div className="flex items-center gap-1 mt-4">
                    {[...Array(t.rating)].map((_, idx) => (
                      <Star key={idx} size={13} className="fill-[#C5A059] text-[#C5A059]" />
                    ))}
                    <span className="text-[10px] text-ink-muted font-sans ml-1">Verified Author</span>
                  </div>

                  {/* Literary Quote */}
                  <blockquote className="mt-3 font-serif italic text-[0.98rem] sm:text-[1.02rem] leading-relaxed text-ink/90">
                    &ldquo;{t.quote}&rdquo;
                  </blockquote>
                </div>

                {/* Book Cover Showcase Card Footer */}
                <div className="mt-6 pt-5 border-t border-line flex items-center gap-4 bg-paper/60 -mx-6 -mb-6 p-4 rounded-b-xs">
                  <div className="w-14 shrink-0 drop-shadow-md group-hover:scale-105 transition-transform duration-300">
                    <BookCover
                      title={t.jacketArt.title}
                      author={t.jacketArt.author}
                      elevation={false}
                    />
                  </div>
                  <div className="flex flex-col overflow-hidden">
                    <span className="font-serif text-[0.9rem] font-medium text-ink truncate">
                      {t.book}
                    </span>
                    <span className="font-sans text-[0.7rem] text-ink-muted truncate">
                      {t.jacketArt.subtitle || "Collingwood Edition"}
                    </span>
                    <span className="font-sans text-[0.68rem] text-[#9E7C35] font-medium mt-1">
                      Hardcover &amp; Digital
                    </span>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>

          <div className="mt-6 flex items-center justify-center gap-2">
            {testimonials.map((t, i) => (
              <button
                key={`testimonial-dot-${t.name}`}
                onClick={() => scrollToIndex(i)}
                aria-label={`Show testimonial from ${t.name}`}
                className={`h-1.5 rounded-full transition-all ${activeIndex === i ? "w-7 bg-[#C5A059]" : "w-2 bg-line-strong hover:bg-[#C5A059]/60"
                  }`}
              />
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
