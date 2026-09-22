import Container from "@/components/ui/Container";
import HeroAnimated from "../ui/HeroAnimated";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-paper pt-12 pb-16 lg:pt-20 lg:pb-24 border-b border-line/60">
      {/* Background pattern */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.02] mix-blend-multiply bg-[radial-gradient(#181A1F_1px,transparent_1px)] [background-size:24px_24px]" />

      <Container className="grid grid-cols-1 items-center gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">
        <HeroAnimated />
      </Container>
    </section>
  );
}