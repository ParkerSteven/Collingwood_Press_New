export default function Eyebrow({
  children,
  tone = "gold",
  align = "left",
  showBrackets = true,
}: {
  children: string;
  tone?: "gold" | "ink" | "forest" | "terracotta";
  align?: "left" | "center";
  showBrackets?: boolean;
}) {
  const toneClasses: Record<string, string> = {
    gold: "bg-[#B8860B] text-white text-[12px] px-3 py-1.5 rounded-md",
    terracotta: "text-[#9E7C35]",
    ink: "text-ink-soft",
    forest: "text-forest",
  };

  const lineColors: Record<string, string> = {
    gold: "bg-[#C5A059]/60",
    terracotta: "bg-[#C5A059]/60",
    ink: "bg-ink-muted/50",
    forest: "bg-forest/50",
  };

  return (
    <div
      className={`inline-flex items-center gap-2.5 ${align === "center" ? "justify-center mx-auto" : "justify-start"
        }`}
    >
      {/* <span className={`h-px w-6 ${lineColors[tone]}`} /> */}
      <span
        className={`font-sans text-xs font-semibold tracking-[0.14em] uppercase ${toneClasses[tone]}`}
      >
        {children}
      </span>
      {/* <span className={`h-px w-6 ${lineColors[tone]}`} /> */}
    </div>
  );
}
