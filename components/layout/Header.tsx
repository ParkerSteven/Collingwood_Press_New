import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import Image from "next/image";
import MobileMenu from "../ui/MobileMenu";

// const navItems = [
//   { label: "Ghostwriting", href: "/ghostwriting" },
//   { label: "Editing", href: "/editing" },
//   { label: "Publishing", href: "/publishing" },
//   { label: "Marketing", href: "/marketing" },
//   { label: "Audiobook", href: "/audiobook" },
//   { label: "About Us", href: "/about-us" },
//   { label: "Contact Us", href: "/contact-us" },
// ]

const navItems = [
  { label: "Ghostwriting", href: "#" },
  { label: "Editing", href: "#" },
  { label: "Publishing", href: "#" },
  { label: "Marketing", href: "#" },
  { label: "Audiobook", href: "#" },
  { label: "About Us", href: "#" },
  { label: "Contact Us", href: "#" },
];
export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-line bg-paper/95 backdrop-blur-md transition-all relative">
      <Container className="flex items-center justify-between py-3.5 sm:py-4">
        {/* Logo */}
        <Link href="/" className="group flex items-center gap-3">
          <Image
            src="/Collingwood-Logo.png"
            alt="The Collingwood Press"
            width={240}
            height={50}
            priority
            className="object-contain"
          />
        </Link>

        {/* Desktop Navigation */}
        <nav
          aria-label="Primary"
          className="hidden items-center gap-4 lg:gap-5 xl:gap-5 lg:flex"
        >
          {navItems.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="text-[13px] font-medium text-ink-soft tracking-[0.01em] transition-colors hover:text-[#9E7C35] relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1.5px] after:bg-[#C5A059] hover:after:w-full after:transition-all"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* Desktop Action Button */}
        <div className="hidden items-center gap-4 lg:flex">
          {/* <Button
            href="/contact-us#manuscript-review"
            variant="primary"
            size="sm"
            className="px-4 py-2 text-xs font-semibold"
          >
            <span>Claim Your Free Manuscript</span>
            <ArrowUpRight size={13} />
          </Button> */}
          <Button
            href="#"
            variant="primary"
            size="sm"
            className="px-4 py-2 text-xs font-semibold"
          >
            <span>Claim Your Free Manuscript</span>
            <ArrowUpRight size={13} />
          </Button>
        </div>

        {/* Mobile Menu (Client Component) */}
        <MobileMenu />
      </Container>
    </header>
  );
}