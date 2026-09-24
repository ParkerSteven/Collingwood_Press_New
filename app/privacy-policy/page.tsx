import UtilityBar from "@/components/layout/UtilityBar";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Container from "@/components/ui/Container";
import Eyebrow from "@/components/ui/Eyebrow";

export default function PrivacyPolicyPage() {
  return (
    <>
      <UtilityBar />
      <Header />
      <main className="bg-paper text-ink py-16 sm:py-24">
        <Container className="max-w-3xl">
          <Eyebrow tone="gold">Legal &amp; Author Protection</Eyebrow>
          <h1 className="mt-4 font-serif text-3xl sm:text-4xl font-bold text-ink">
            Privacy Policy
          </h1>
          <p className="mt-2 text-xs text-ink-muted">
            Last Updated: January 2026 &bull; The Collingwood Press (Subsidiary of Hambone Publishers LLC)
          </p>

          <div className="mt-8 flex flex-col gap-6 text-sm text-ink-soft leading-relaxed font-sans">
            <p>
              At The Collingwood Press, we hold author confidentiality and data protection in the highest regard. This Privacy Policy outlines how your personal information, submitted manuscripts, and creative intellectual property are gathered, utilized, and guarded.
            </p>

            <h2 className="font-serif text-xl font-bold text-ink mt-2">
              1. Manuscript Confidentiality &amp; Non-Disclosure
            </h2>
            <p>
              All synopsis submissions, raw manuscript drafts, sample chapters, and correspondence delivered to The Collingwood Press are treated as strictly confidential trade materials. We do not sell, rent, license, or share your proprietary writing with any third-party marketing entities or artificial intelligence model training datasets.
            </p>

            <h2 className="font-serif text-xl font-bold text-ink mt-2">
              2. Information We Collect
            </h2>
            <p>
              When you submit a manuscript evaluation inquiry or contact our publishing directors, we collect your full name, email address, telephone number, and manuscript metadata solely to evaluate your submission and maintain direct editorial communication.
            </p>

            <h2 className="font-serif text-xl font-bold text-ink mt-2">
              3. Author Rights Retention
            </h2>
            <p>
              Submitting creative works for evaluation does not transfer any portion of your copyright, trademarks, or publication rights to The Collingwood Press or Hambone Publishers LLC. All ownership remains exclusively yours.
            </p>

            <h2 className="font-serif text-xl font-bold text-ink mt-2">
              4. Contact Our Privacy Officer
            </h2>
            <p>
              For inquiries regarding data access or deletion requests, please contact our legal desk at <a href="mailto:info@thecollingwoodpress.com" className="text-[#9E7C35] underline">info@thecollingwoodpress.com</a>.
            </p>
          </div>
        </Container>
      </main>
      <Footer />
    </>
  );
}
