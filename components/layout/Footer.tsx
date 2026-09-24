import Link from "next/link";
import { Mail, Phone, ShieldCheck, Award, BookOpen } from "lucide-react";
import Container from "@/components/ui/Container";
import Image from "next/image";

// const servicesLinks = [
//   { label: "Ghostwriting", href: "/ghostwriting" },
//   { label: "Editing", href: "/editing" },
//   { label: "Publishing", href: "/publishing" },
//   { label: "Marketing", href: "/marketing" },
//   { label: "Book Fairs", href: "/marketing#book-fairs" },
//   { label: "Cover Design", href: "/publishing#cover-design" },
//   { label: "Audiobook Production", href: "/audiobook" },
// ];

const servicesLinks = [
  { label: "Ghostwriting", href: "#" },
  { label: "Editing", href: "#" },
  { label: "Publishing", href: "#" },
  { label: "Marketing", href: "#" },
  { label: "Book Fairs", href: "#" },
  { label: "Cover Design", href: "#" },
  { label: "Audiobook Production", href: "#" },
];

// const companyLinks = [
//   { label: "About Us", href: "/about-us" },
//   { label: "Our Team", href: "/about-us#team" },
//   { label: "Testimonials", href: "/#testimonials" },
//   { label: "Contact", href: "/contact-us" },
//   { label: "Blog", href: "/about-us#blog" },
//   { label: "AI & LLM Resources", href: "/about-us#ai-resources" },
// ];

const companyLinks = [
  { label: "About Us", href: "#" },
  { label: "Our Team", href: "#" },
  { label: "Testimonials", href: "#" },
  { label: "Contact", href: "#" },
  { label: "Blog", href: "#" },
  { label: "AI & LLM Resources", href: "#" },
];

// const authorLibraryLinks = [
//   { label: "Templates", href: "/publishing#templates" },
//   { label: "Collingwood Partners", href: "/about-us#partners" },
//   { label: "Author Checklist", href: "/publishing#checklist" },
// ];

const authorLibraryLinks = [
  { label: "Templates", href: "#" },
  { label: "Collingwood Partners", href: "#" },
  { label: "Author Checklist", href: "#" },
];


export default function Footer() {
  return (
    <footer className="bg-[#0A111F] border-t border-[#1E293B] text-white font-sans selection:bg-[#C5A059] selection:text-white">
      <Container className="pt-16 pb-12 lg:pt-20 lg:pb-14">
        {/* Main Footer Content Grid */}
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-12 lg:gap-8">

          {/* Left Column: Branding, Description & Badges (4 cols) */}
          <div className="flex flex-col gap-5 sm:col-span-2 lg:col-span-4 lg:pr-6">
            <Link href="/" className="flex items-center gap-3 group w-fit">
              {/* <span className="flex h-10 w-10 items-center justify-center rounded-xs border border-[#C5A059]/40 bg-[#C5A059]/10 text-[#C5A059] font-serif text-xl font-bold transition-all group-hover:border-[#C5A059] group-hover:bg-[#C5A059]/20">
                C
              </span>
              <div className="flex flex-col">
                <span className="font-serif text-[1.3rem] font-bold text-white leading-tight tracking-tight group-hover:text-[#E8C98B] transition-colors">
                  The Collingwood Press
                </span>
                <span className="font-sans text-[8.5px] uppercase tracking-[0.18em] text-[#C5A059]/80 font-medium">
                  Independent Publishing House &bull; Est. 2009
                </span>
              </div> */}
              <Image src={'/footerLogo.png'}
                alt="The Collingwood Press"
                width={260}
                height={50}
                priority
                className="object-contain" />
            </Link>

            <p className="text-[0.78rem] leading-relaxed text-slate-300 max-w-sm font-sans">
              A boutique independent press dedicated to shepherding fine manuscripts into print with
              trade-grade editing, bespoke typography, and international distribution.
            </p>

            {/* Accreditation Badges */}
            <div className="mt-4 w-full">
              <div className="flex items-center justify-center gap-6 sm:gap-8">
                {/* IBPA Logo */}
                <Link
                  href="https://www.ibpa-online.org/"
                  target="_blank"
                  rel="nofollow noopener noreferrer"
                  className="flex items-center justify-center opacity-90 transition-opacity hover:opacity-100"
                >
                  <Image
                    src="/ibpa-proud-memberFooter.png"
                    alt="The Collingwood Press IBPA Member"
                    width={140}
                    height={48}
                    className="h-10 sm:h-11 w-auto object-contain"
                  />
                </Link>

                {/* Divider */}
                <span className="h-8 w-px bg-white/50" aria-hidden="true" />

                {/* BBB Logo */}
                <Link
                  href="https://www.bbb.org/us/tx/livingston/profile/book-publishers/collingwood-press-0825-1000231047/#sealclick"
                  target="_blank"
                  rel="nofollow noopener noreferrer"
                  className="flex items-center justify-center"
                >
                  <Image
                    src="/blue-seal.png"
                    alt="The Collingwood Press IBPA Member"
                    width={140}
                    height={48}
                    className="h-10 sm:h-11 w-auto object-contain"
                  />
                </Link>
              </div>
            </div>
          </div>

          {/* Column 1: Services (2 cols) */}
          <div className="flex flex-col gap-3.5 lg:col-span-2">
            <h3 className="font-serif text-[1.05rem] font-bold text-white tracking-tight flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#C5A059]" />
              Services
            </h3>
            <ul className="flex flex-col gap-2 mt-1">
              {servicesLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-[0.86rem] text-slate-300 transition-colors hover:text-[#E8C98B] hover:translate-x-0.5 inline-block"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 2: Company (2 cols) */}
          <div className="flex flex-col gap-3.5 lg:col-span-2">
            <h3 className="font-serif text-[1.05rem] font-bold text-white tracking-tight flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#C5A059]" />
              Company
            </h3>
            <ul className="flex flex-col gap-2 mt-1">
              {companyLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-[0.86rem] text-slate-300 transition-colors hover:text-[#E8C98B] hover:translate-x-0.5 inline-block"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Author Resource Library (2 cols) */}
          <div className="flex flex-col gap-3.5 lg:col-span-2">
            <h3 className="font-serif text-[1.05rem] font-bold text-white tracking-tight flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#C5A059]" />
              Author Library
            </h3>
            <ul className="flex flex-col gap-2 mt-1">
              {authorLibraryLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-[0.86rem] text-slate-300 transition-colors hover:text-[#E8C98B] hover:translate-x-0.5 inline-block"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contact & Social (2 cols) */}
          <div className="flex flex-col gap-3.5 lg:col-span-2">
            <h3 className="font-serif text-[1.05rem] font-bold text-white tracking-tight flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#C5A059]" />
              Contact
            </h3>
            <div className="flex flex-col gap-2.5 mt-1 text-[0.85rem]">
              <Link
                href="mailto:info@thecollingwoodpress.com"
                className="text-slate-300 hover:text-[#E8C98B] transition-colors break-words flex items-center gap-2 group"
              >
                <Mail size={14} className="text-[#C5A059] shrink-0 group-hover:scale-110 transition-transform" />
                <span>info@thecollingwoodpress.com</span>
              </Link>

              <Link
                href="tel:+19362233644"
                className="text-slate-300 hover:text-[#E8C98B] transition-colors flex items-center gap-2 group"
              >
                <Phone size={14} className="text-[#C5A059] shrink-0 group-hover:scale-110 transition-transform" />
                <span className="font-medium">+1 (936) 223-3644</span>
              </Link>
            </div>

            {/* Social Icons */}
            <div className="mt-3">
              <span className="text-[11px] font-medium text-[#C5A059] uppercase tracking-wider block mb-2">
                Follow The Press
              </span>
              <div className="flex items-center gap-2.5">
                {/* Facebook */}
                <Link
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Facebook"
                  className="flex h-8 w-8 items-center justify-center rounded-xs border border-[#C5A059]/30 bg-[#0E1626] text-[#C5A059] hover:bg-[#C5A059] hover:text-black transition-all"
                >
                  <svg className="h-4 w-4 fill-current" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                  </svg>
                </Link>

                {/* X (Twitter) */}
                <Link
                  href="https://x.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="X (formerly Twitter)"
                  className="flex h-8 w-8 items-center justify-center rounded-xs border border-[#C5A059]/30 bg-[#0E1626] text-[#C5A059] hover:bg-[#C5A059] hover:text-black transition-all"
                >
                  <svg className="h-3.5 w-3.5 fill-current" viewBox="0 0 24 24">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                  </svg>
                </Link>

                {/* Instagram */}
                <Link
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                  className="flex h-8 w-8 items-center justify-center rounded-xs border border-[#C5A059]/30 bg-[#0E1626] text-[#C5A059] hover:bg-[#C5A059] hover:text-black transition-all"
                >
                  <svg className="h-4 w-4 fill-current" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                  </svg>
                </Link>

                {/* TikTok */}
                <Link
                  href="https://tiktok.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="TikTok"
                  className="flex h-8 w-8 items-center justify-center rounded-xs border border-[#C5A059]/30 bg-[#0E1626] text-[#C5A059] hover:bg-[#C5A059] hover:text-black transition-all"
                >
                  <svg className="h-3.5 w-3.5 fill-current" viewBox="0 0 24 24">
                    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1v-3.5a6.37 6.37 0 0 0-.79-.05A6.34 6.34 0 0 0 3 15.25 6.34 6.34 0 0 0 9.34 21.6a6.34 6.34 0 0 0 6.34-6.34V8.71a8.2 8.2 0 0 0 4.91 1.6V6.86a4.8 4.8 0 0 1-1-.17z" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Disclaimer Text */}
        <div className="mt-12 pt-6 border-t border-white/10 text-center">
          <p className="text-[0.76rem] text-slate-400 italic">
            The Collingwood Press is not affiliated with any other publisher operating under a similar name.
          </p>
        </div>

        {/* Bottom Bar: Copyright & Policies */}
        <div className="mt-4 pt-4 border-t border-white/5 flex flex-col items-center justify-between gap-3 sm:flex-row text-xs text-slate-400">
          <p className="text-[0.78rem] text-slate-400 text-center sm:text-left">
            &copy; 2026 | The Collingwood Press (Subsidiary of Hambone Publishers LLC) | All rights reserved
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4 text-[0.78rem]">
            <Link href="/privacy-policy" className="hover:text-[#E8C98B] transition-colors">
              Privacy Policy
            </Link>
            <span className="text-white/20">&bull;</span>
            <Link href="/terms-and-conditions" className="hover:text-[#E8C98B] transition-colors">
              Terms &amp; Conditions
            </Link>
            <span className="text-white/20">&bull;</span>
            <Link href="/privacy-choices" className="hover:text-[#E8C98B] transition-colors">
              Your Privacy Choices
            </Link>
          </div>
        </div>
      </Container>
    </footer>
  );
}
