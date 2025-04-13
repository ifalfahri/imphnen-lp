"use client";
 
import React, { useRef, MouseEventHandler, ReactNode } from "react";
import { cn } from "@/lib/utils";
import confetti from "canvas-confetti";
 
interface ConfettiButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  children: ReactNode;
  angle?: number;
  particleCount?: number;
  startVelocity?: number;
  spread?: number;
  onClick?: MouseEventHandler<HTMLButtonElement>;
}
 
export function ConfettiButton({
  className,
  children,
  angle = 90,
  particleCount = 75,
  startVelocity = 35,
  spread = 70,
  onClick,
  ...props
}: ConfettiButtonProps) {
  const buttonRef = useRef<HTMLButtonElement>(null);
 
  const handleClick: MouseEventHandler<HTMLButtonElement> = (event) => {
    if (buttonRef.current) {
      const rect = buttonRef.current.getBoundingClientRect();
      confetti({
        particleCount,
        startVelocity,
        angle,
        spread,
        origin: {
          x: (rect.left + rect.width / 2) / window.innerWidth,
          y: (rect.top + rect.height / 2) / window.innerHeight,
        },
      });
    }
    if (onClick) {
      onClick(event);
    }
  };
 
  return (
    <button
      ref={buttonRef}
      onClick={handleClick}
      className={cn(
        "bg-neutral-100 hover:bg-neutral-200 text-black dark:bg-neutral-900 dark:hover:bg-neutral-800 dark:text-white h-10 px-4 py-2 inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors duration-300 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 cursor-pointer",
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
}