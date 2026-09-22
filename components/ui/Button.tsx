import { ReactNode } from "react";
import Link from "next/link";

export type ButtonVariant = "primary" | "outline" | "dark" | "secondary";

interface ButtonProps {
  children: ReactNode;
  href?: string;
  variant?: ButtonVariant;
  className?: string;
  type?: "button" | "submit";
  onClick?: () => void;
  size?: "sm" | "md" | "lg";
}

const variants: Record<ButtonVariant, string> = {
  primary:
    "bg-[#B8964E] text-white border border-[#C5A059] hover:bg-[#9E7C35] hover:border-[#9E7C35] active:bg-[#8A6B29] transition-all duration-200 transform hover:scale-[0.98] shadow-subtle hover:shadow-md",
  outline:
    "bg-transparent text-[#9E7C35] border border-[#C5A059] hover:bg-[#C5A059] hover:text-white transition-all duration-200 transform hover:scale-[0.98] active:bg-[#9E7C35] active:text-white",
  secondary:
    "bg-white text-ink border border-line hover:border-line-strong hover:bg-paper-warm active:bg-paper-muted shadow-subtle",
  dark:
    "bg-ink text-white border border-ink hover:bg-[#2A241C] hover:border-[#2A241C] active:bg-[#151310] shadow-subtle",
};

const sizes = {
  sm: "px-4 py-2 text-xs",
  md: "px-5 py-3 text-[0.88rem]",
  lg: "px-7 py-3.5 text-[0.94rem]",
};

export default function Button({
  children,
  href,
  variant = "primary",
  size = "md",
  className = "",
  type = "button",
  onClick,
}: ButtonProps) {
  const baseClasses = `inline-flex items-center justify-center gap-2 rounded-xs font-sans font-medium tracking-[0.02em] transition-all duration-200 ease-out focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#C5A059] disabled:opacity-60 disabled:cursor-not-allowed ${variants[variant]} ${sizes[size]} ${className}`;

  if (href) {
    return (
      <Link href={href} className={baseClasses}>
        {children}
      </Link>
    );
  }

  return (
    <button type={type} onClick={onClick} className={baseClasses}>
      {children}
    </button>
  );
}
