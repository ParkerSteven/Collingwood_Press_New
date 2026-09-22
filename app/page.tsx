import UtilityBar from "@/components/layout/UtilityBar";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

import Hero from "@/components/sections/Hero";
import StatBar from "@/components/sections/StatBar";
import PlatformLogos from "@/components/sections/PlatformLogos";
import Testimonials from "@/components/sections/Testimonials";
import TrustBand from "@/components/sections/TrustBand";
import ServicesGrid from "@/components/sections/ServicesGrid";
import CoverSpotlight from "@/components/sections/CoverSpotlight";
import ProjectManagers from "@/components/sections/ProjectManagers";
import Catalog from "@/components/sections/Catalog";
import RelatedCarousel from "@/components/sections/RelatedCarousel";
import MarketingServices from "@/components/sections/MarketingServices";
import ManuscriptCTA from "@/components/sections/ManuscriptCTA";
import FAQ from "@/components/sections/FAQ";
import FinalCTA from "@/components/sections/FinalCTA";

export default function Home() {
  return (
    <>
      <UtilityBar />
      <Header />
      <main>
        <Hero />
        <StatBar />
        <PlatformLogos />
        <Testimonials />
        <TrustBand />
        <ServicesGrid />
        <CoverSpotlight />
        <ProjectManagers />
        {/* <Catalog /> */}
        <RelatedCarousel />
        <MarketingServices />
        <ManuscriptCTA />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}
