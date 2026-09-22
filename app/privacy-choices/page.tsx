import UtilityBar from "@/components/layout/UtilityBar";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Container from "@/components/ui/Container";
import Eyebrow from "@/components/ui/Eyebrow";

export default function PrivacyChoicesPage() {
  return (
    <>
      <UtilityBar />
      <Header />
      <main className="bg-paper text-ink py-16 sm:py-24">
        <Container className="max-w-3xl">
          <Eyebrow tone="gold">Author Preference Management</Eyebrow>
          <h1 className="mt-4 font-serif text-3xl sm:text-4xl font-bold text-ink">
            Your Privacy Choices
          </h1>
          <p className="mt-2 text-xs text-ink-muted">
            Collingwood Press &bull; Subsidiary of Hambone Publishers LLC
          </p>

          <div className="mt-8 flex flex-col gap-6 text-sm text-ink-soft leading-relaxed font-sans">
            <p>
              Under applicable consumer privacy statutes (including CCPA / CPRA), authors and visitors may request the opt-out of personal information processing or request the permanent purge of submitted editorial records.
            </p>

            <div className="p-6 rounded-xs border border-[#C5A059]/30 bg-paper-warm flex flex-col gap-3">
              <h3 className="font-serif text-lg font-bold text-ink">
                Do Not Sell or Share My Information
              </h3>
              <p className="text-xs text-ink-muted">
                Collingwood Press does not sell personal author information or creative manuscripts to third parties or advertising data brokers.
              </p>
              <div className="mt-2">
                <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-xs bg-[#C5A059] text-black font-semibold text-xs">
                  ✓ Opt-Out Active by Default
                </span>
              </div>
            </div>

            <p className="text-xs text-ink-muted">
              To submit a formal deletion or access request, email <a href="mailto:info@thecollingwoodpress.com" className="text-[#9E7C35] underline">info@thecollingwoodpress.com</a> or phone our direct line at +1 (936) 223-3644.
            </p>
          </div>
        </Container>
      </main>
      <Footer />
    </>
  );
}
