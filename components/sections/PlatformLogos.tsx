"use client";

import React from "react";
import Container from "@/components/ui/Container";

interface RetailerLogo {
  id: string;
  name: string;
  subtitle: string;
  icon: React.ReactNode;
}

const retailerLogos: RetailerLogo[] = [
  {
    id: "amazon",
    name: "Amazon",
    subtitle: "Global Retail & Print-on-Demand",
    icon: (
      <svg className="h-6 w-auto fill-current" viewBox="0 0 100 30" xmlns="http://www.w3.org/2000/svg">
        {/* Amazon typographic mark */}
        <text x="2" y="19" fontFamily="system-ui, -apple-system, sans-serif" fontSize="18" fontWeight="700" letterSpacing="-0.5px">amazon</text>
        {/* Smile arrow */}
        <path d="M 5 23 Q 48 31 82 20" stroke="#C5A059" strokeWidth="2.5" fill="none" strokeLinecap="round" />
        <polygon points="80,17 86,20 83,24" fill="#C5A059" />
      </svg>
    ),
  },
  {
    id: "kindle",
    name: "Kindle",
    subtitle: "Direct Publishing & eReaders",
    icon: (
      <svg className="h-6 w-auto fill-current" viewBox="0 0 100 28" xmlns="http://www.w3.org/2000/svg">
        <rect x="2" y="4" width="16" height="20" rx="2" fill="none" stroke="currentColor" strokeWidth="2" />
        <line x1="6" y1="9" x2="14" y2="9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <line x1="6" y1="13" x2="14" y2="13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <line x1="6" y1="17" x2="11" y2="17" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <text x="25" y="19" fontFamily="system-ui, -apple-system, sans-serif" fontSize="16" fontWeight="600" letterSpacing="0.2px">kindle</text>
      </svg>
    ),
  },
  {
    id: "barnes-noble",
    name: "Barnes & Noble",
    subtitle: "Nationwide Bookstores & Online",
    icon: (
      <div className="flex items-center gap-1.5">
        <span className="font-serif text-[17px] font-bold tracking-tight text-ink">
          BARNES &amp; NOBLE
        </span>
      </div>
    ),
  },
  {
    id: "books-a-million",
    name: "Books-A-Million",
    subtitle: "B&N Books-A-Million Retail",
    icon: (
      <div className="flex items-center gap-2">
        <span className="inline-flex items-center justify-center px-1.5 py-0.5 rounded-xs bg-[#C5A059] text-black font-bold text-[11px] tracking-wider">
          BAM!
        </span>
        <span className="font-sans text-[15px] font-bold tracking-tight uppercase text-ink">
          Books-A-Million
        </span>
      </div>
    ),
  },
  {
    id: "apple-books",
    name: "Apple Books",
    subtitle: "iBooks & Digital Ecosystem",
    icon: (
      <div className="flex items-center gap-2">
        <svg className="h-5 w-auto fill-current" viewBox="0 0 170 170" xmlns="http://www.w3.org/2000/svg">
          <path d="M150.37 130.25c-2.45 5.66-5.35 10.87-8.71 15.66-4.58 6.53-8.33 11.05-11.22 13.56-4.48 4.12-9.28 6.23-14.42 6.35-3.69 0-8.14-1.05-13.32-3.18-5.19-2.12-9.97-3.17-14.34-3.17-4.58 0-9.49 1.05-14.75 3.17-5.26 2.13-9.5 3.24-12.74 3.35-4.35.13-9.16-1.9-14.42-6.08-3.69-3.04-7.58-7.7-11.66-13.98-5.74-8.8-10.15-18.79-13.23-29.98-3.08-11.18-4.63-22.13-4.63-32.84 0-14.54 3.73-26.68 11.19-36.43 7.46-9.74 16.92-14.75 28.37-15.01 4.79 0 10.37 1.34 16.74 4.02 6.37 2.68 10.15 4.09 11.35 4.23 1.56-.25 5.56-1.68 11.99-4.3 6.43-2.61 11.83-3.79 16.2-3.52 12.08.68 21.68 4.88 28.8 12.6-10.59 6.44-15.74 15.35-15.47 26.74.28 9.07 3.77 16.76 10.47 23.08 6.7 6.32 14.67 10.02 23.9 11.11-2.22 6.74-4.83 13.06-7.84 18.96zM119.22 33.5c0-7.39 2.66-14.34 7.98-20.85 5.32-6.51 11.88-10.73 19.68-12.65.22 1.45.33 2.76.33 3.93 0 7.39-2.82 14.47-8.46 21.23-5.64 6.77-12.28 10.9-19.92 12.4-.11-1.34-.17-2.69-.17-4.06z" />
        </svg>
        <span className="font-sans text-[15px] font-bold tracking-tight text-ink">
          Apple Books
        </span>
      </div>
    ),
  },
  {
    id: "ingramspark",
    name: "IngramSpark",
    subtitle: "Global Wholesale Distribution",
    icon: (
      <div className="flex items-center gap-2">
        <svg className="h-5 w-auto text-[#C5A059]" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2L14.5 9.5L22 12L14.5 14.5L12 22L9.5 14.5L2 12L9.5 9.5L12 2Z" />
        </svg>
        <span className="font-sans text-[16px] font-bold tracking-tight text-ink">
          Ingram<span className="text-[#C5A059]">Spark</span>
        </span>
      </div>
    ),
  },
];

export default function PlatformLogos() {
  // Duplicate array 3 times to guarantee infinite seamless right-to-left scrolling
  const carouselItems = [...retailerLogos, ...retailerLogos, ...retailerLogos];

  return (
    <section className="border-b border-line bg-paper py-10 sm:py-12 overflow-hidden">
      <Container className="flex flex-col items-center gap-6">
        {/* Section Heading */}
        <div className="flex flex-col items-center text-center max-w-xl">
          <div className="flex items-center gap-3">
            <span className="w-8 h-px bg-[#C5A059]/60" />
            <span className="font-sans text-[0.72rem] tracking-[0.18em] uppercase text-[#9E7C35] font-semibold">
              Global Distribution &amp; Retail Booktrade
            </span>
            <span className="w-8 h-px bg-[#C5A059]/60" />
          </div>
          <h2 className="mt-2 font-serif text-[1.45rem] sm:text-[1.75rem] font-bold text-ink tracking-tight">
            Our authors&rsquo; books sell everywhere readers shop
          </h2>
          <p className="mt-1 text-xs text-ink-muted font-sans max-w-md">
            Direct ingestion into over 40,000 retail storefronts, university catalogs, and global digital bookstores.
          </p>
        </div>

        {/* Infinite Marquee */}
        <div className="relative w-full overflow-hidden mt-3">
          {/* Soft Gradient Masks (kam width taake cards cut na hon) */}
          <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-8 sm:w-16 z-10 bg-gradient-to-r from-paper to-transparent" />
          <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-8 sm:w-16 z-10 bg-gradient-to-l from-paper to-transparent" />

          <div className="flex w-max items-center gap-5 sm:gap-8 animate-marquee py-4 select-none">
            {carouselItems.map((item, idx) => (
              <div
                key={`${item.id}-${idx}`}
                className="flex items-center gap-3 px-4 py-3 rounded-lg border border-line/60 bg-paper-card shadow-sm hover:border-[#C5A059]/50 hover:shadow-md transition-all shrink-0"
              >
                <div className="text-ink-soft group-hover:text-ink transition-colors flex items-center justify-center shrink-0">
                  {item.icon}
                </div>
                <div className="flex flex-col border-l border-line/50 pl-3">
                  <span className="text-[12px] sm:text-[13px] font-bold text-ink leading-tight">
                    {item.name}
                  </span>
                  <span className="text-[9px] uppercase tracking-[0.1em] text-ink-muted mt-0.5">
                    {item.subtitle}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
