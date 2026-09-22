import { Mail, Phone, ShieldCheck, Award } from "lucide-react";
import Container from "@/components/ui/Container";
import Link from "next/link";

export default function UtilityBar() {
  return (
    <div className="border-b hidden lg:block border-line bg-paper-warm/80 text-ink-soft py-2 px-3 text-[0.8rem] font-sans">
      <Container className="flex flex-col sm:flex-row items-center justify-between gap-2">
        <div className="flex items-center gap-5">
          <Link
            href="mailto:info@thecollingwoodpress.com"
            className="inline-flex items-center gap-1.5 hover:text-[#9E7C35] transition-colors tracking-wide"
          >
            <Mail size={13} className="text-[#9E7C35]" />
            <span>info@thecollingwoodpress.com</span>
          </Link>
          <span className="hidden md:inline-block w-[1px] h-3 bg-line-strong" />
          <Link
            href="tel:+19362233644"
            className="hidden md:inline-flex items-center gap-1.5 hover:text-[#9E7C35] transition-colors"
          >
            <Phone size={13} className="text-[#9E7C35]" />
            <span>Direct Line: +1 (936) 223-3644</span>
          </Link>
        </div>

        <div className="flex items-center gap-4 text-ink-muted text-[0.76rem]">
          <span className="inline-flex items-center gap-1">
            <Award size={13} className="text-[#9E7C35]" />
            <span>Independent Book Publishers Association (IBPA)</span>
          </span>
          <span className="w-[1px] h-3 bg-line-strong" />
          <span className="inline-flex items-center gap-1">
            <ShieldCheck size={13} className="text-[#9E7C35]" />
            <span>BBB A+ Accredited</span>
          </span>
        </div>
      </Container>
    </div>
  );
}
