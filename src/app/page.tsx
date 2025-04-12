import { Bento } from "@/components/bento";
import { FAQSection } from "@/components/faq-section";
import { Footer } from "@/components/footer";
import { GeminiSection } from "@/components/gemini-section";
import { HeroScroll } from "@/components/hero-scroll";
import RibbonSection from "@/components/ribbon-section";

export default function Home() {
  return (
    <div className="px-4 md:px-10 mx-auto max-w-screen">
      <HeroScroll />
      <RibbonSection />
      <Bento />
      <GeminiSection />
      <FAQSection />
      <Footer />
    </div>
  );
}
