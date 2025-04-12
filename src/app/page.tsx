import { Bento } from "@/components/bento";
import { GeminiSection } from "@/components/gemini-section";
import RibbonSection from "@/components/ribbon-section";

export default function Home() {
  return (
    <div>
      <RibbonSection />
      <Bento />
      <GeminiSection />
    </div>
  );
}
