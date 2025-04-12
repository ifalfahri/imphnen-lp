import { cn } from "@/lib/utils";
import * as React from "react";

interface InfiniteRibbonProps {
  repeat?: number;
  duration?: number;
  reverse?: boolean;
  rotation?: number;
  children: React.ReactNode;
  className?: string;
  separator?: string;
}

export function InfiniteRibbon({
  repeat = 5,
  duration = 10,
  reverse = false,
  rotation = 0,
  children,
  className,
  separator = "✦",
}: InfiniteRibbonProps) {
  const animationClass = reverse
    ? "animate-infinite-ribbon-reverse"
    : "animate-infinite-ribbon";

  return (
    <div
      className={cn(
        "overflow-hidden max-w-full bg-primary text-white py-2 md:py-6 text-xl md:text-4xl font-black shadow-sm uppercase",
        className
      )}
      style={{ transform: `rotate(${rotation}deg)` }}
    >
      <div
        className={cn("whitespace-nowrap flex", animationClass)}
        style={{ animationDuration: `${duration}s` }}
      >
        {Array.from({ length: repeat }, (_, index) => (
          <span key={index} className="select-none inline-block items-center">
            {children} <span className="mx-6">{separator}</span>
          </span>
        ))}
      </div>
    </div>
  );
}
