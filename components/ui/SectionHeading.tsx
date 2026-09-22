import React, { ReactNode } from "react";
import Eyebrow from "./Eyebrow";

export default function SectionHeading({
  eyebrow,
  title,
  description,
  align = "center",
  tone = "gold",
  titleClassName = "",
  className = "",
}: {
  eyebrow?: string;
  title: ReactNode;
  description?: ReactNode;
  align?: "left" | "center";
  tone?: "gold" | "ink" | "forest" | "terracotta";
  titleClassName?: string;
  className?: string;
}) {
  const alignment = align === "center" ? "items-center text-center" : "items-start text-left";

  return (
    <div className={`flex flex-col gap-3.5 max-w-3xl ${align === "center" ? "mx-auto" : ""} ${alignment} ${className}`}>
      {eyebrow && <Eyebrow tone={tone} align={align}>{eyebrow}</Eyebrow>}
      <h2
        className={`font-serif text-[1.8rem] sm:text-[2.2rem] lg:text-[2.5rem] leading-[1.12] text-ink tracking-tight text-balance ${titleClassName}`}
      >
        {title}
      </h2>
      {description && (
        <div className="max-w-2xl text-[1rem] sm:text-[1.04rem] leading-relaxed text-ink-soft mt-1">
          {description}
        </div>
      )}
    </div>
  );
}
