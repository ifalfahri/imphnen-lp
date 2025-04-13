import { Bento } from "@/components/bento";
import { CTASection } from "@/components/cta-section";
import { FAQSection } from "@/components/faq-section";
import { Footer } from "@/components/footer";
import { GeminiSection } from "@/components/gemini-section";
import { HeroScroll } from "@/components/hero-scroll";
import RibbonSection from "@/components/ribbon-section";
import StackingCard from "@/components/ui/stacking-card";
import {AnotherBento} from "@/components/another-bento";

export default function Home() {
  return (
    <div className="px-4 md:px-10 mx-auto max-w-screen">
      <HeroScroll />
      <RibbonSection />
      <Bento />
      <CTASection />
      <GeminiSection />
      <StackingCard />
      <AnotherBento />
      <FAQSection />
      <Footer />
    </div>
  );
}
