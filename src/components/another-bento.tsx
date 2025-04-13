"use client";
import React from "react";
import { Keyboard } from "@/components/ui/keyboard";
import { BentoCard } from "@/components/ui/bento-card";
import { LogoCluster } from "@/components/ui/logo-cluster";
import { Map } from "@/components/ui/map";

export function AnotherBento() {
  return (
    <div className="mt-10 mb-48 max-w-5xl mx-auto grid grid-cols-1 gap-4 sm:mt-16 lg:grid-cols-6">
      <BentoCard
        eyebrow="My Favorite"
        title="Tombol dan Button"
        description="Tiada hari tanpa copy paste, itupun kalau ingat, kalau tidak ya sudah, scroll fesnuk aja lagi."
        graphic={
          <div className="flex size-full pl-8 pt-8">
            <Keyboard highlighted={["LeftCommand", "ControlKey", "C", "V"]} />
          </div>
        }
        className="lg:col-span-2"
      />
      <BentoCard
        eyebrow="Debat Panas"
        title="Javascript VS PHP"
        description="Begitu banyaknya bahasa di dunia tapi kami masih berdebat tentang ini. Itulah gw sob."
        graphic={<LogoCluster />}
        className="lg:col-span-2"
      />
      <BentoCard
        eyebrow="KEMALASAN"
        title="Kami Tersebar"
        description="Kami giat menyebarkan kemalasan kami dimanapun kami berada, tak ada dapat hentikan kami."
        graphic={<Map />}
        className="lg:col-span-2"
      />
    </div>
  );
}
