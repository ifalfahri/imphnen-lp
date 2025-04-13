"use client";
import { IconChevronDown } from "@tabler/icons-react";
import { AnimatePresence, motion, useInView } from "motion/react";
import React, { useRef, useState } from "react";
import { BoxReveal } from "./ui/box-reveal";

interface FAQItemProps {
  question: string;
  answer: string | React.ReactNode;
}

const FAQItem = ({ question, answer }: FAQItemProps) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      className="border border-neutral-200 dark:border-white/[0.2] rounded-xl overflow-hidden bg-white dark:bg-black mb-4 shadow-input dark:shadow-primary/20 transition-all duration-200 hover:shadow-lg"
    >
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center justify-between w-full p-4 text-left"
        whileHover={{ backgroundColor: "rgba(0, 0, 0, 0.02)" }}
        whileTap={{ backgroundColor: "rgba(0, 0, 0, 0.05)" }}
      >
        <h3 className="text-sm md:text-lg font-medium text-neutral-800 dark:text-neutral-200">
          {question}
        </h3>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3 }}
          className="text-neutral-500"
        >
          <IconChevronDown size={20} />
        </motion.div>
      </motion.button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <div className="p-4 pt-0 text-neutral-600 dark:text-neutral-400 md:text-sm text-xs bg-neutral-50 dark:bg-neutral-900/50">
              {answer}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export function FAQSection() {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, {
    once: true,
    margin: "0px 0px -400px 0px",
  });

  return (
    <div
      className="pb-48 px-4 max-w-5xl mx-auto min-h-screen"
      id="faq"
      ref={containerRef}
    >
        <div className="flex flex-col items-center">
      <BoxReveal>
        <h2 className="mx-auto text-3xl md:text-7xl font-bold text-center mb-2 bg-clip-text text-transparent bg-gradient-to-bl from-primary to-primary-foreground">
          FAQ
        </h2>
      </BoxReveal>
      </div>
      <p className="text-sm md:text-lg text-center text-neutral-600 dark:text-neutral-400 mb-12 mx-auto">
        Beberapa pertanyaan yang akan dijawab kalau kami tidak sedang scroll
        Fesnuk
      </p>

      <div className="space-y-2 md:space-y-4">
        {faqItems.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={
              isInView
                ? {
                    opacity: 1,
                    scale: 1,
                    transition: {
                      duration: 0.5,
                      delay: index * 0.15, // Sequential delay based on item index
                      ease: [0.22, 1, 0.36, 1], // Custom spring-like easing
                    },
                  }
                : {}
            }
          >
            <FAQItem question={item.question} answer={item.answer} />
          </motion.div>
        ))}
      </div>
    </div>
  );
}

const faqItems = [
  {
    question: "Apa sih IMPHNEN itu?",
    answer:
      "IMPHNEN adalah singkatan dari 'Ingin Menjadi Programmer Handal Namun Enggan Ngoding'. Kami adalah komunitas elit para profesional scroll Fesnuk yang punya mimpi jadi tech bro/sis tapi ngodingnya nanti aja kalau mood. Motto kami: 'Kenapa capek-capek ngoding kalau bisa tinggal tanya ChatGPT?'",
  },
  {
    question: "Gimana cara join komunitas pemalas ini?",
    answer:
      "Caranya gampang banget: 1) Buka laptop, 2) Bilang ke diri sendiri 'Hari ini aku mau ngoding 8 jam full!', 3) Malah buka Fesnuk, 4) Scroll sampe lupa waktu, 5) Selamat! Kamu secara otomatis sudah menjadi anggota kami. Untuk sertifikat resmi, silakan screenshot jam di HP kamu yang menunjukkan sudah 5 jam scrolling tanpa ngoding sedetik pun.",
  },
  {
    question: "Apa persyaratan untuk menjadi anggota elit IMPHNEN?",
    answer:
      "Persyaratannya cukup ketat: kamu harus punya minimal 3 IDE/code editor yang terinstal tapi jarang dibuka, setidaknya 5 kursus online yang baru selesai 10% pertama, dan keahlian untuk menjelaskan 'lagi sibuk ngerjain project' padahal sebenernya cuma scroll meme programming doang. Bonus poin kalau punya stiker 'Programmer' di laptop tapi kode terakhir ditulis 3 bulan lalu.",
  },
  {
    question: "Berapa biaya keanggotaan komunitas ini?",
    answer:
      "Gratis! Kami sudah terlalu malas untuk membuat sistem pembayaran. Lagipula, mengumpulkan uang berarti harus mengelolanya, dan itu terlalu banyak effort. Kami lebih suka menghabiskan energi untuk debat framework mana yang terbaik meskipun belum pernah mencoba satupun.",
  },
  {
    question: "Aktivitas apa saja yang dilakukan di komunitas IMPHNEN?",
    answer: (
      <div className="space-y-2">
        <p>
          Komunitas kami memiliki berbagai aktivitas super produktif, antara
          lain:
        </p>
        <ul className="list-disc pl-5 space-y-1">
          <li>
            Mengumpulkan tutorial programming yang tidak akan pernah kita tonton
          </li>
          <li>Debat sengit JS vs PHP</li>
          <li>
            Workshop Cara Menginstal Visual Studio Code dan Tidak Pernah
            Membukanya Lagi
          </li>
          <li>
            Kursus ahli Menjelaskan ke Orangtua Bahwa Scroll Facebook adalah
            Riset Pasar
          </li>
          <li>
            Ajang Ngumpulin Repository GitHub tapi Commit Terakhir 2 Tahun Lalu
          </li>
          <li>
            Kompetisi Siapa yang bisa screenshot code terkeren untuk status WA
            tanpa perlu mengerti kodenya
          </li>
        </ul>
      </div>
    ),
  },
  {
    question: "Bagaimana saya tahu kalau saya cocok dengan komunitas ini?",
    answer:
      "Kamu pasti cocok dengan kami jika: pernah buka tutorial coding sambil nonton Netflix, punya 7+ tab browser tentang 'how to code' yang tidak pernah dibaca sampai habis, dan pernah memesan buku programming tebal yang akhirnya cuma jadi pengganjal meja. Tambahan, jika kamu bisa menjelaskan blockchain dengan sangat percaya diri meski sebenarnya tidak paham, kamu adalah calon ketua komunitas kami.",
  },
  {
    question: "Apa benefit jadi anggota IMPHNEN?",
    answer:
      "Benefit paling utama: validasi bahwa kamu tidak sendirian dalam kemalasanmu! Kamu juga dapat template caption LinkedIn yang bisa membuatmu terlihat sibuk coding padahal cuma rebahan, tips bergabung dengan grup programmer lalu menghilang saat diminta bantuan coding, dan keahlian mengatakan 'harusnya gampang, tinggal...' untuk masalah programming yang kamu sendiri tidak bisa selesaikan. Oh, dan kami punya grup WhatsApp yang isinya 99% meme programming dan 1% pertanyaan 'Ada yang jago React di sini?' yang tidak pernah dijawab.",
  },
];
