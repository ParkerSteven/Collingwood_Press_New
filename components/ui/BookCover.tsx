"use client";

import React from "react";
import Image from "next/image";

export interface BookCoverProps {
  title?: string;
  subtitle?: string;
  author: string;
  genre?: string;
  bg?: string;
  accent?: string;
  artTheme?: "coast" | "geometric" | "foliage" | "astronomy" | "minimal";
  className?: string;
  size?: "sm" | "md" | "lg" | "xl";
  elevation?: boolean;
  frontSrc?: string;
  backSrc?: string;
}

export default function BookCover({
  title,
  subtitle,
  author,
  genre,
  bg = "#1C2434",
  accent = "#D4B07B",
  artTheme = "coast",
  className = "",
  size = "md",
  elevation = true,
  frontSrc,
  backSrc,
}: BookCoverProps) {
  // Size dimensions (aspect ratio ~ 1 : 1.5)
  const sizeClasses = {
    sm: "w-28 h-42 text-[10px]",
    md: "w-44 h-66 text-xs",
    lg: "w-56 h-84 text-sm",
    xl: "w-68 h-102 text-base",
  }[size];

  return (
    <div
      className={`group relative select-none rounded-[3px] transition-all duration-300 ${elevation ? "book-spine-effect hover:shadow-bookHover hover:-translate-y-1.5" : ""
        } ${className}`}
      style={{
        backgroundColor: bg,
        aspectRatio: "1 / 1.52",
      }}
      role="img"
      aria-label={`Book cover for "${title}" by ${author}`}
    >
      {frontSrc ? (
        <>
          {backSrc && (
            <div className="absolute left-0 top-[7%] z-0 h-[86%] w-[62%] overflow-hidden rounded-[3px] shadow-lg transition-transform duration-300 group-hover:-rotate-6 group-hover:-translate-x-2">
              <Image
                src={backSrc}
                alt={`${title} back cover`}
                fill
                sizes="176px"
                className="object-cover"
                draggable={false}
              />
            </div>
          )}
          <div className={`absolute z-10 h-full overflow-hidden rounded-[3px] shadow-xl transition-transform duration-300 ${
            backSrc ? "right-0 top-0 w-[70%]" : "inset-0 w-full"
          }`}>
            <Image
              src={frontSrc}
              alt={`${title} front cover`}
              fill
              sizes="176px"
              className="object-cover"
              draggable={false}
            />
          </div>
        </>
      ) : (
        <>
      {/* Page edge highlight on the right */}
      {/* <div className="absolute right-0 top-0 bottom-0 w-[4px] bg-gradient-to-r from-transparent via-[#EDE7DC]/30 to-[#FAF6ED]/70 pointer-events-none z-20 rounded-r-[2px]" /> */}

      {/* Book dust jacket finish: fine textured cloth weave simulation */}
      {/* <div
        className="absolute inset-0 pointer-events-none opacity-25 mix-blend-overlay z-10"
        style={{
          backgroundImage: `radial-gradient(rgba(255,255,255,0.25) 1px, transparent 0)`,
          backgroundSize: "4px 4px",
        }}
      /> */}

      {/* Elegant embossed gold foil perimeter border */}
      {/* <div
        className="absolute inset-2.5 sm:inset-3 border pointer-events-none z-10 rounded-[1px] transition-opacity duration-300"
        style={{
          borderColor: accent,
          opacity: 0.45,
        }}
      /> */}

      {/* Content layout */}
      <div className="relative h-full w-full flex flex-col justify-between p-4 sm:p-5 z-20 text-center">
        {/* Center Artwork Emblem */}
        <div className="my-auto py-2 flex flex-col items-center justify-center">
          {artTheme === "coast" && (
            <svg viewBox="0 0 100 60" className="w-16 sm:w-20 opacity-80" fill="none">
              <path
                d="M10 42C25 35 40 46 55 38C70 30 85 40 95 36"
                stroke={accent}
                strokeWidth="1.5"
                strokeLinecap="round"
              />
              <path
                d="M5 48C20 42 42 52 60 44C78 36 88 44 95 43"
                stroke={accent}
                strokeWidth="1"
                strokeOpacity="0.6"
              />
              <circle cx="50" cy="20" r="10" stroke={accent} strokeWidth="1.2" strokeDasharray="2 2" />
              <path d="M50 8V12" stroke={accent} strokeWidth="1.2" />
            </svg>
          )}
        </div>
      </div>
        </>
      )}
    </div>
  );
}
