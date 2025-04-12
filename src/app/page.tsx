import { Bento } from "@/components/bento";
import { GeminiSection } from "@/components/gemini-section";
import RibbonSection from "@/components/ribbon-section";
import { HeroScroll } from "@/components/hero-scroll";

export default function Home() {
  return (
    <div className="px-4 md:px-10 mx-auto max-w-screen">
      <HeroScroll />
      <RibbonSection />
      <Bento />
      <GeminiSection />
    </div>
  );
}
