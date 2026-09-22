import UtilityBar from "@/components/layout/UtilityBar";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Container from "@/components/ui/Container";
import Eyebrow from "@/components/ui/Eyebrow";

export default function TermsAndConditionsPage() {
  return (
    <>
      <UtilityBar />
      <Header />
      <main className="bg-paper text-ink py-16 sm:py-24">
        <Container className="max-w-3xl">
          <Eyebrow tone="gold">Publishing Standards &amp; Terms</Eyebrow>
          <h1 className="mt-4 font-serif text-3xl sm:text-4xl font-bold text-ink">
            Terms &amp; Conditions
          </h1>
          <p className="mt-2 text-xs text-ink-muted">
            Last Updated: January 2026 &bull; Collingwood Press (Subsidiary of Hambone Publishers LLC)
          </p>

          <div className="mt-8 flex flex-col gap-6 text-sm text-ink-soft leading-relaxed font-sans">
            <p>
              Welcome to the official website of Collingwood Press, an independent literary imprint operated by Hambone Publishers LLC. By accessing this website or utilizing our publishing services, you agree to comply with and be bound by the following terms and conditions.
            </p>

            <h2 className="font-serif text-xl font-bold text-ink mt-2">
              1. Disclaimer of Affiliation
            </h2>
            <p className="p-4 rounded-xs border border-[#C5A059]/30 bg-paper-warm italic text-ink font-medium">
              Collingwood Press is not affiliated with any other publisher operating under a similar name. All publishing agreements and transactions are executed under Hambone Publishers LLC.
            </p>

            <h2 className="font-serif text-xl font-bold text-ink mt-2">
              2. Intellectual Property &amp; Author Copyright
            </h2>
            <p>
              Every author retains 100% of their copyright, moral rights, and subsidiary rights. Collingwood Press acts strictly as a service provider, production house, and distributor under written contractual authorization.
            </p>

            <h2 className="font-serif text-xl font-bold text-ink mt-2">
              3. Manuscript Submissions
            </h2>
            <p>
              Complimentary editorial reviews carry no purchase obligation. Authors warrant that all submitted works represent original authorship and do not infringe on third-party copyrights or rights of privacy.
            </p>
          </div>
        </Container>
      </main>
      <Footer />
    </>
  );
}
