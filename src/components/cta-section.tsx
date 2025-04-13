"use client";

import { Button } from "@/components/ui/button";
import { ScratchToReveal } from "@/components/ui/scratch-to-reveal";
import { motion } from "motion/react";
import Link from "next/link";
import { NumberTicker } from "./ui/number-ticker";
import { BoxReveal } from "./ui/box-reveal";

export const CTASection = () => {
  return (
    <section className="pt-40 pb-16">
      <div className="container max-w-5xl mx-auto">
        <div className="flex flex-col lg:flex-row gap-8 md:gap-0 items-stretch justify-between">
          <motion.div
            className="lg:w-[60%] space-y-4 flex flex-col justify-between md:space-y-6 text-center lg:text-left"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <div className="gap-4 flex flex-col items-center lg:items-start">
            <BoxReveal>
            <h2 className="text-3xl md:text-5xl font-bold text-primary">
              Bergabunglah dengan{" "}
              <span className="text-primary-foreground">Komunitas Kami</span>
            </h2>
            </BoxReveal>
            <BoxReveal boxColor="#8a8a8a">
            <p className="text-md md:text-lg w-full text-muted-foreground max-w-xl">
              Jadilah bagian dari komunitas termalas di Indonesia. Dapatkan
              akses fesnuk, berbagi pengetahuan tentang ngoding (dikit), dan terhubung dengan para
              ahli yapping.
            </p>
            </BoxReveal>
            </div>

            <div className="flex flex-row gap-4 md:gap-12 items-center sm:items-start justify-center lg:justify-start">
              <div className="text-center md:text-left">
                <div className="flex justify-center md:justify-start items-end text-4xl font-bold">
                  <NumberTicker value={170} />
                  <p className="text-3xl">K+</p>
                </div>
                <p className="text-sm text-muted-foreground">
                  Anggota Facebook
                </p>
              </div>
              <div className="text-center md:text-left">
                <div className="flex justify-center md:justify-start items-end text-4xl font-bold">
                  <NumberTicker value={10} />
                  <p className="text-3xl">K+</p>
                </div>
                <p className="text-sm text-muted-foreground">Anggota Discord</p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-2 md:gap-4 justify-center lg:justify-start">
              <Button
                size="lg"
                asChild
                className="bg-[#1877F2] hover:bg-[#0e63d3]"
              >
                <Link
                  className="text-white flex items-center justify-center leading-0"
                  href="https://facebook.com/groups/imphnen"
                  target="_blank"
                >
                  <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M9.101 23.691v-7.98H6.627v-3.667h2.474v-1.58c0-4.085 1.848-5.978 5.858-5.978.401 0 .955.042 1.468.103a8.68 8.68 0 0 1 1.141.195v3.325a8.623 8.623 0 0 0-.653-.036 26.805 26.805 0 0 0-.733-.009c-.707 0-1.259.096-1.675.309a1.686 1.686 0 0 0-.679.622c-.258.42-.374.995-.374 1.752v1.297h3.919l-.386 2.103-.287 1.564h-3.246v8.245C19.396 23.238 24 18.179 24 12.044c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.628 3.874 10.35 9.101 11.647Z" />
                  </svg>
                  Grup Facebook
                </Link>
              </Button>
              <Button
                size="lg"
                asChild
                className="bg-[#5865F2] hover:bg-[#4752c4]"
              >
                <Link
                  className="text-white flex items-center justify-center leading-0"
                  href="https://discord.gg/"
                  target="_blank"
                >
                  <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M20.317 4.492c-1.53-.69-3.17-1.2-4.885-1.49a.075.075 0 0 0-.079.036c-.21.385-.39.775-.53 1.17a16.868 16.868 0 0 0-5.058 0 10.776 10.776 0 0 0-.535-1.17.077.077 0 0 0-.079-.036 19.009 19.009 0 0 0-4.885 1.49.07.07 0 0 0-.032.027C.533 9.093-.32 13.555.099 17.953a.08.08 0 0 0 .03.055 19.18 19.18 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028c.462-.63.874-1.295 1.226-1.994.021-.041.001-.09-.041-.106a12.552 12.552 0 0 1-1.804-.864.077.077 0 0 1-.008-.127c.121-.09.242-.185.356-.28a.074.074 0 0 1 .078-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.114.095.235.19.357.28a.077.077 0 0 1-.006.127 11.84 11.84 0 0 1-1.806.864.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.118 19.118 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.06.06 0 0 0-.031-.028zM8.02 15.278c-1.182 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418Z" />
                  </svg>
                  Server Discord
                </Link>
              </Button>
            </div>
          </motion.div>

          <motion.div
            className="flex justify-end"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <ScratchToReveal
              width={350}
              height={350}
              className="rounded-2xl mx-auto overflow-hidden shadow-xl"
              gradientColors={["#4F46E5", "#EC4899", "#F97316"]}
              minScratchPercentage={40}
            >
              <div className="w-full h-full flex items-center justify-between bg-gradient-to-br from-indigo-900 to-purple-900 p-6">
                <div className="text-center mx-auto">
                  <h3 className="text-3xl font-bold text-white mb-4">
                    Selamat!
                  </h3>
                  
                  <span className="text-9xl">💻</span>
                  <div className="mt-6">
                    <p className="text-[0.95rem] text-gray-200">
                    Kamu berhasil menemukan easter egg. Kamu berhak mendapatkan ucapan selamat, hore!
                  </p>
                  </div>
                </div>
              </div>
            </ScratchToReveal>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
