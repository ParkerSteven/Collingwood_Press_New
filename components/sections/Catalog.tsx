"use client";

import { motion } from "framer-motion";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import BookCover from "@/components/ui/BookCover";
import { catalogBooks } from "@/lib/data";

export default function Catalog() {
  return (
    <section id="catalog" className="bg-paper-warm py-20 lg:py-28 border-b border-line">
      <Container className="flex flex-col gap-14 sm:gap-16">
        <SectionHeading
          eyebrow="The Collingwood Press Presents"
          title={
            <>
              Recent acquisitions &amp;{" "}
              <span className="italic text-[#9E7C35]">published works</span>
            </>
          }
          description="We are intentionally selective in our acquisitions. Every volume bearing the Collingwood imprint receives exhaustive editorial attention, bespoke binding, and comprehensive bookstore distribution."
        />

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 sm:gap-10">
          {catalogBooks.map((book, i) => (
            <motion.article
              key={book.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.55, delay: i * 0.1 }}
              className="group flex flex-col justify-between rounded-xs border border-line bg-paper-card p-7 shadow-card hover:shadow-cardHover hover:border-line-strong transition-all duration-300"
            >
              <div>
                {/* 3D Book Jacket Showcase with Subtle Elevation */}
                <div className="mx-auto w-44 sm:w-52 py-4">
                  <BookCover
                    title={book.title}
                    subtitle={book.subtitle}
                    author={book.author}
                    genre={book.genre}
                    bg={book.bg}
                    accent={book.accent}
                    artTheme={book.artTheme}
                    elevation={true}
                  />
                </div>

                {/* Metadata & Title */}
                <div className="mt-5 text-center border-b border-line pb-4">
                  <span className="font-sans text-[10px] uppercase tracking-[0.16em] text-[#A98231] font-medium">
                    {book.genre}
                  </span>
                  <h3 className="font-serif text-[1.32rem] font-medium text-ink leading-tight mt-1">
                    {book.title}
                  </h3>
                  <p className="font-sans text-xs text-ink-muted mt-0.5">
                    By {book.author}
                  </p>
                </div>

                {/* Critical Reception Quote */}
                <div className="py-4">
                  <blockquote className="font-serif italic text-[0.98rem] leading-relaxed text-ink/90 text-center text-balance">
                    {book.blurb}
                  </blockquote>
                  <cite className="block text-center font-sans text-[11px] text-ink-muted mt-2 not-italic">
                    &mdash; {book.citation}
                  </cite>
                </div>
              </div>

              {/* Physical Specifications Colophon */}
              <div className="mt-2 pt-3 border-t border-line text-center bg-paper/60 -mx-7 -mb-7 p-3.5 rounded-b-xs">
                <span className="font-sans text-[11px] text-ink-muted tracking-tight">
                  {book.specs}
                </span>
              </div>
            </motion.article>
          ))}
        </div>
      </Container>
    </section>
  );
}
