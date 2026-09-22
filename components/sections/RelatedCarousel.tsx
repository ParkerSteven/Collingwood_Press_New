"use client";

import { useRef, useState, useEffect } from "react";
import { motion } from "framer-motion";
import Container from "@/components/ui/Container";
import BookCover from "@/components/ui/BookCover";
import { relatedBooks } from "@/lib/data";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function RelatedCarousel() {
  const scrollerRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const [activeIndex, setActiveIndex] = useState(0);

  const checkScroll = () => {
    if (!scrollerRef.current) return;
    const { scrollLeft, scrollWidth, clientWidth } = scrollerRef.current;
    setCanScrollLeft(scrollLeft > 10);
    setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10);

    // Calculate approximate active card index
    const cardWidth = 210; // width + gap
    const idx = Math.round(scrollLeft / cardWidth);
    setActiveIndex(Math.min(Math.max(0, idx), relatedBooks.length - 1));
  };

  useEffect(() => {
    const scroller = scrollerRef.current;
    if (!scroller) return;
    scroller.addEventListener("scroll", checkScroll, { passive: true });
    checkScroll();
    return () => scroller.removeEventListener("scroll", checkScroll);
  }, []);

  const scroll = (direction: "left" | "right") => {
    if (!scrollerRef.current) return;
    const container = scrollerRef.current;
    const card = container.querySelector<HTMLElement>(".book-carousel-card");
    const step = card ? card.offsetWidth + 24 : 220;
    
    container.scrollBy({
      left: direction === "left" ? -step : step,
      behavior: "smooth",
    });
  };

  const scrollToIndex = (index: number) => {
    if (!scrollerRef.current) return;
    const container = scrollerRef.current;
    const card = container.querySelector<HTMLElement>(".book-carousel-card");
    const step = card ? card.offsetWidth + 24 : 220;
    container.scrollTo({
      left: index * step,
      behavior: "smooth",
    });
  };

  return (
    <section className="bg-[#0D1527] py-16 sm:py-20 lg:py-24 border-b border-[#1E293B] text-white overflow-hidden">
      <Container className="flex flex-col gap-10">
        {/* Header Row with Eyebrow, Title, and Scroll Navigation */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-5 border-b border-white/10 pb-6">
          <div>
            <div className="inline-flex items-center gap-2">
              <span className="w-5 h-px bg-[#C5A059]" />
              <span className="font-sans text-[0.74rem] uppercase tracking-[0.16em] font-semibold text-[#C5A059]">
                Our Recent Books
              </span>
            </div>
            <h2 className="mt-2 font-serif text-[1.85rem] sm:text-[2.35rem] font-bold text-white tracking-tight">
              Recently published,{" "}
              <span className="italic text-[#E5C888] font-medium">recently loved</span>
            </h2>
          </div>

          {/* Left / Right Carousel Navigation Controls */}
          <div className="flex items-center gap-3 self-end sm:self-auto">
            <button
              onClick={() => scroll("left")}
              disabled={!canScrollLeft}
              aria-label="Scroll carousel left"
              className="flex h-10 w-10 items-center justify-center rounded-xs border border-white/20 bg-white/5 text-white shadow-subtle hover:bg-[#C5A059] hover:border-[#C5A059] hover:text-black transition-all disabled:opacity-25 disabled:cursor-not-allowed cursor-pointer"
            >
              <ChevronLeft size={20} />
            </button>
            <button
              onClick={() => scroll("right")}
              disabled={!canScrollRight}
              aria-label="Scroll carousel right"
              className="flex h-10 w-10 items-center justify-center rounded-xs border border-white/20 bg-white/5 text-white shadow-subtle hover:bg-[#C5A059] hover:border-[#C5A059] hover:text-black transition-all disabled:opacity-25 disabled:cursor-not-allowed cursor-pointer"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>

        {/* Centered Book Cards Carousel Track */}
        <div className="relative w-full">
          {/* Subtle gradient side edge masks for cinematic entry */}
          <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-8 sm:w-16 z-10 bg-gradient-to-r from-[#0D1527] to-transparent" />
          <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-8 sm:w-16 z-10 bg-gradient-to-l from-[#0D1527] to-transparent" />

          <div
            ref={scrollerRef}
            className="flex items-start gap-6 sm:gap-7 overflow-x-auto snap-x snap-mandatory scroll-smooth py-6 px-4 sm:px-12 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
          >
            {relatedBooks.map((book, i) => (
              <motion.div
                key={book.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-30px" }}
                transition={{ duration: 0.45, delay: i * 0.05 }}
                className="book-carousel-card w-44 sm:w-48 shrink-0 snap-center group flex flex-col items-center text-center cursor-pointer"
                onClick={() => scrollToIndex(i)}
              >
                {/* Book Cover with 3D shadow and hover lift */}
                <div className="w-full flex justify-center drop-shadow-2xl group-hover:-translate-y-2 transition-transform duration-300">
                  <div className="w-40 sm:w-44">
                    <BookCover
                      title={book.title}
                      author={book.author}
                      genre={book.genre}
                      bg={book.bg}
                      accent={book.accent}
                      artTheme={book.artTheme}
                      elevation={true}
                    />
                  </div>
                </div>

                {/* Centered Book Metadata */}
                <div className="mt-4 flex flex-col items-center text-center w-full px-1">
                  <span className="font-sans text-[9px] uppercase tracking-wider text-[#E8C98B] font-semibold block">
                    {book.genre}
                  </span>
                  <p className="font-serif text-[1.02rem] sm:text-[1.08rem] font-bold text-white group-hover:text-[#E5C888] transition-colors mt-0.5 max-w-full line-clamp-1">
                    {book.title}
                  </p>
                  <p className="font-sans text-xs text-slate-400 mt-0.5 line-clamp-1">
                    {book.author}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Carousel Pagination Dots */}
          <div className="flex items-center justify-center gap-2 mt-4">
            {relatedBooks.map((book, i) => (
              <button
                key={`dot-${book.title}`}
                onClick={() => scrollToIndex(i)}
                aria-label={`Jump to book ${book.title}`}
                className={`h-1.5 rounded-full transition-all ${
                  activeIndex === i
                    ? "w-7 bg-[#C5A059]"
                    : "w-2 bg-white/20 hover:bg-white/40"
                }`}
              />
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
