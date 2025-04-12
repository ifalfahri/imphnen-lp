import { InfiniteRibbon } from "@/components/ui/infinite-ribbon";

export default function RibbonSection() {
  return (
    <div className="flex items-center flex-col justify-center gap-10 overflow-hidden h-[350px] w-full">
      <InfiniteRibbon rotation={5} reverse={true} className="absolute bg-primary-foreground" separator="✦">
        Ingin Menjadi Programmer Handal Namun Enggan Mengoding
      </InfiniteRibbon>
      <InfiniteRibbon  rotation={-5} separator="✦">
        Ingin Menjadi Programmer Handal Namun Enggan Mengoding
      </InfiniteRibbon>
    </div>
  );
}
