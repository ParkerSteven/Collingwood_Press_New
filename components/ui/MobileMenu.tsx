"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";

const navItems = [
    { label: "Ghostwriting", href: "/ghostwriting" },
    { label: "Editing", href: "/editing" },
    { label: "Publishing", href: "/publishing" },
    { label: "Marketing", href: "/marketing" },
    { label: "Audiobook", href: "/audiobook" },
    { label: "About Us", href: "/about-us" },
    { label: "Contact Us", href: "/contact-us" },
];

export default function MobileMenu() {
    const [open, setOpen] = useState(false);

    return (
        <>
            {/* Mobile Menu Toggle */}
            <button
                className="p-2 text-ink lg:hidden rounded-xs hover:bg-paper-warm transition-colors"
                onClick={() => setOpen(!open)}
                aria-label={open ? "Close menu" : "Open menu"}
                aria-expanded={open}
            >
                {open ? <X size={22} /> : <Menu size={22} />}
            </button>

            {/* Mobile Drawer */}
            {open && (
                <div className="absolute left-0 right-0 top-full border-t border-line bg-paper-warm/95 backdrop-blur-lg lg:hidden transition-all">
                    <Container className="flex flex-col gap-1 py-4">
                        {navItems.map((item) => (
                            <Link
                                key={item.label}
                                href={item.href}
                                onClick={() => setOpen(false)}
                                className="py-2.5 text-[13.5px] font-medium font-sans text-ink hover:text-[#9E7C35] border-b border-line/40"
                            >
                                {item.label}
                            </Link>
                        ))}
                        <div className="pt-3 flex flex-col gap-2.5">
                            <a
                                href="tel:+19362233644"
                                className="text-center text-xs text-ink-soft py-1 hover:text-[#9E7C35] transition-colors"
                            >
                                Direct Press Line: +1 (936) 223-3644
                            </a>
                            <Button
                                href="/contact-us#manuscript-review"
                                variant="primary"
                                size="sm"
                                className="w-full text-xs font-semibold py-2.5"
                                onClick={() => setOpen(false)}
                            >
                                Claim Your Free Manuscript
                            </Button>
                        </div>
                    </Container>
                </div>
            )}
        </>
    );
}