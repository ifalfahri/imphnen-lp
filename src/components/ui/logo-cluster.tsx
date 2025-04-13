"use client";

import { clsx } from "clsx";
import { motion } from "motion/react";

function Mark({ className }: { className?: string }) {
  return (
    <svg className={className} width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clipPath="url(#clip0_519_444)">
<path d="M19.512 45.4386L17 15.0569L47 15.1179L44.3438 45.4386L32.1132 48.9433L19.512 45.4386Z" fill="#E34F26"/>
<path d="M32.1133 46.009V17.9502L44.4675 17.9909L42.2644 43.0949L32.1133 46.009Z" fill="#EF652A"/>
<path d="M41.0702 24.9599L41.42 21.2512H22.4153L23.4653 32.6216H36.5813L36.067 37.4711L31.8665 38.5916L27.6043 37.3691L27.3779 34.4757H23.6095L24.1243 40.3849L31.8663 42.5244L39.6699 40.3849L40.7199 28.8518H26.9453L26.5541 24.9599H41.0702Z" fill="white"/>
</g>
<defs>
<clipPath id="clip0_519_444">
<rect width="30" height="34" fill="white" transform="translate(17 15)"/>
</clipPath>
</defs>
</svg>

  );
}

function Circle({
  size,
  delay,
  opacity,
}: {
  size: number;
  delay: number;
  opacity: string;
}) {
  return (
    <motion.div
      variants={{
        idle: { width: `${size}px`, height: `${size}px` },
        active: {
          width: [`${size}px`, `${size + 10}px`, `${size}px`],
          height: [`${size}px`, `${size + 10}px`, `${size}px`],
          transition: {
            duration: 0.75,
            repeat: Infinity,
            repeatDelay: 1.25,
            ease: "easeInOut",
            delay,
          },
        },
      }}
      style={{ "--opacity": opacity } as React.CSSProperties}
      className={clsx(
        "absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full",
        "bg-[radial-gradient(circle,transparent_25%,color-mix(in_srgb,_theme(colors.blue.500)_var(--opacity),transparent)_100%)]",
        "ring-1 ring-inset ring-blue-500/[8%]",
      )}
    />
  );
}

function Circles() {
  return (
    <div className="absolute inset-0">
      <Circle size={528} opacity="3%" delay={0.45} />
      <Circle size={400} opacity="5%" delay={0.3} />
      <Circle size={272} opacity="5%" delay={0.15} />
      <Circle size={144} opacity="10%" delay={0} />
      <div className="absolute inset-0 bg-gradient-to-t from-white to-35%  dark:from-gray-950" />
    </div>
  );
}

function MainLogo() {
  return (
    <div className="absolute left-44 top-32 flex size-16 items-center justify-center rounded-full bg-white shadow ring-1 ring-black/5 dark:bg-gray-900 dark:ring-white/10">
      <Mark />
    </div>
  );
}

function Logo({
  src,
  left,
  top,
  hover,
}: {
  src: string;
  left: number;
  top: number;
  hover: { x: number; y: number; rotate: number; delay: number };
}) {
  return (
    <motion.img
      variants={{
        idle: { x: 0, y: 0, rotate: 0 },
        active: {
          x: [0, hover.x, 0],
          y: [0, hover.y, 0],
          rotate: [0, hover.rotate, 0],
          transition: {
            duration: 0.75,
            repeat: Infinity,
            repeatDelay: 1.25,
            ease: "easeInOut",
            delay: hover.delay,
          },
        },
      }}
      alt=""
      src={src}
      style={{ left, top } as React.CSSProperties}
      className="absolute object-contain size-16 rounded-full bg-white shadow ring-1 ring-black/5 dark:bg-gray-900  dark:ring-white/10"
    />
  );
}

export function LogoCluster() {
  return (
    <div aria-hidden="true" className="relative h-full overflow-hidden">
      <Circles />
      <div className="absolute left-1/2 h-full w-[26rem] -translate-x-1/2">
        <MainLogo />
        <Logo
          src="/icon-3.svg"
          left={340}
          top={144}
          hover={{ x: 6, y: 1, rotate: 5, delay: 0.38 }}
        />
        <Logo
          src="/icon-4.svg"
          left={285}
          top={20}
          hover={{ x: 4, y: -5, rotate: 6, delay: 0.3 }}
        />
        <Logo
          src="/icon-2.svg"
          left={255}
          top={210}
          hover={{ x: 3, y: 5, rotate: 7, delay: 0.2 }}
        />
        <Logo
          src="icon-5.svg"
          left={144}
          top={40}
          hover={{ x: -2, y: -5, rotate: -6, delay: 0.15 }}
        />
        <Logo
          src="icon-6.svg"
          left={36}
          top={56}
          hover={{ x: -4, y: -5, rotate: -6, delay: 0.35 }}
        />
        <Logo
          src="icon-1.svg"
          left={96}
          top={176}
          hover={{ x: -3, y: 5, rotate: 3, delay: 0.15 }}
        />
      </div>
    </div>
  );
}
