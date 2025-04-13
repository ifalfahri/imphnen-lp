"use client";
import React from "react";
import { ContainerScroll } from "./ui/container-scroll-animation";
import Image from "next/image";
import { Badge } from "./ui/badge";
import { AnimatedShinyText } from "./ui/animated-shiny-text";

export function HeroScroll() {
  return (
    <div id="home" className="flex flex-col overflow-hidden relative z-1">
      <ContainerScroll
        titleComponent={
          <>
            <Badge variant="outline" className="-top-4 py-1 px-3 font-medium hover:animate-bounce cursor-default relative gap-1.5 rounded-full bg-gradient-to-r from-emerald-500/30 to-emerald-500/20">
              <span
                className="size-1.5 rounded-full bg-emerald-500"
                aria-hidden="true"
              ></span>
             <AnimatedShinyText>Terverifikasi Malas</AnimatedShinyText>
            </Badge>
            <h1 className="text-xl relative md:text-4xl font-semibold text-black dark:text-white">
              Jadilah Programmer Handal <br />
              <span className="left-3/7 top-2/6 md:top-1/4 rotate-6 absolute bg-primary text-sm md:text-3xl cursor-default hover:rotate-12 transition-transform text-white pb-1 md:pb-2 px-2 md:px-3">yang</span>
              <span className="text-4xl md:text-[6rem] font-bold mt-1 leading-none">
                Enggan Ngoding
              </span>
            </h1>
          </>
        }
      >
        <Image
          src={`/banner.jpeg`}
          alt="hero"
          height={720}
          width={1400}
          className="mx-auto rounded-2xl object-cover max-w-auto h-full object-center"
          draggable={false}
        />
      </ContainerScroll>
    </div>
  );
}
