import type { Metadata } from "next";
import Hero from "@/components/sections/Hero";
import ServicesOverview from "@/components/sections/ServicesOverview";
import AboutSnippet from "@/components/sections/AboutSnippet";
import CTASection from "@/components/sections/CTASection";
import MarketingPopup from "@/components/ui/MarketingPopup";

export const metadata: Metadata = {
  title: "Chop Tree London | Professional Tree Surgery & Arborist Services",
  description:
    "Professional tree surgery, removal, stump grinding and crown lifting services across London since 2019. Fully insured arborists based in Ealing. Free quotations.",
  alternates: {
    canonical: "https://choptreelondon.com",
  },
};

export default function HomePage() {
  return (
    <>
      <Hero />
      <MarketingPopup />
      <ServicesOverview />
      <AboutSnippet />
      <CTASection />
    </>
  );
}
