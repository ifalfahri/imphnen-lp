"use client";
import { ReactLenis } from "lenis/react";
import { motion, MotionValue, useScroll, useTransform } from "motion/react";
import { JSX, useRef } from "react";
const projects = [
  {
    title: "Si Penunda Abadi",
    description:
      "Motto hidup: 'Kenapa dikerjakan sekarang kalau bisa ditunda sampai deadline?' Sudah punya 17 project yang dimulai tapi tidak ada yang selesai.",
    emoji: "😴",
    color: "#5196fd",
  },
  {
    title: "Raja Drama",
    description:
      "Drama adalah hidupnya. Setiap kali ada bug, dia akan menganggapnya sebagai bencana besar. Suka berkeluh kesah di media sosial.",
    emoji: "🤓",
    color: "#8f89ff",
  },
  {
    title: "Pura-Pura Malas",
    description:
      "Pura-pura malas padahal aslinya jago banget. Mahir dan menguasai seluruh bahasa pemrograman, bahkan termasuk bahasa hewan.",
    emoji: "😏",
    color: "#13006c",
  },
  {
    title: "Doom Scroller",
    description:
      "Tiada hari tanpa scroll. Dia adalah raja scroll, ratu scroll, dan semua yang berhubungan dengan scroll. Ingatlah: 'Scroll fesnuk jauh lebih penting dari ngoding'.",
    emoji: "📱",
    color: "#ed649e",
  },
  {
    title: "Pengumpul Sertifikat",
    description:
      "Punya 200+ sertifikat online, tapi masih panik saat diminta buat Hello World. Motto: 'Kursus gratis adalah kursus terbaik'.",
    emoji: "🏆",
    color: "#ee4545",
  },
];
export default function index(): JSX.Element {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const container = useRef(null);
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end end"],
  });
  return (
    <ReactLenis root>
      <main className="" ref={container}>
        <section className="text-white   w-full">
          {projects.map((project, i) => {
            const targetScale = 1 - (projects.length - i) * 0.05;
            return (
              <Card
                key={`p_${i}`}
                i={i}
                emoji={project?.emoji}
                title={project?.title}
                color={project?.color}
                description={project?.description}
                progress={scrollYProgress}
                range={[i * 0.25, 1]}
                targetScale={targetScale}
              />
            );
          })}
        </section>
      </main>
    </ReactLenis>
  );
}
interface CardProps {
  i: number;
  title: string;
  description: string;
  emoji: string;
  color: string;
  progress: MotionValue<number>;
  range: [number, number];
  targetScale: number;
}
export const Card: React.FC<CardProps> = ({
  i,
  title,
  description,
  emoji,
  color,
  progress,
  range,
  targetScale,
}) => {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "start start"],
  });

  const imageScale = useTransform(scrollYProgress, [0, 1], [2, 1]);
  const scale = useTransform(progress, range, [1, targetScale]);

  // Generate random circles for background
  const circles = Array.from({ length: 8 }, () => ({
    size: Math.floor(Math.random() * 70) + 10,
    top: `${Math.floor(Math.random() * 100)}%`,
    left: `${Math.floor(Math.random() * 100)}%`,
    opacity: Math.random() * 0.2 + 0.03, // 0.05-0.25 opacity
  }));

  return (
    <div
    id="testimonial"
      ref={container}
      className="h-screen flex items-center justify-center sticky top-0"
    >
      <motion.div
        whileHover={{
          transition: { duration: 0.2 },
          rotate: i % 2 === 0 ? -2 : 2,
        }}
        style={{
          backgroundColor: color,
          scale,
          top: `calc(-5vh + ${i * 25}px)`,
        }}
        className={`flex flex-col relative -top-[25%] h-[450px] w-[80%] md:w-[70%] rounded-lg shadow-md p-8 md:p-12 origin-top overflow-hidden`}
      >
        {/* Random decorative circles */}
        {circles.map((circle, index) => (
          <div
            key={`circle-${i}-${index}`}
            className="absolute rounded-full bg-white"
            style={{
              width: `${circle.size}px`,
              height: `${circle.size}px`,
              top: circle.top,
              left: circle.left,
              opacity: circle.opacity,
            }}
          />
        ))}

        <div
          className={`flex h-full flex-col md:flex-row justify-between items-center mt-3 z-10 relative`}
        >
          <div
            className={`w-full md:w-[60%] text-center md:text-left relative gap-4 flex flex-col`}
          >
            <h2 className="text-xl md:text-3xl  font-semibold">{title}</h2>
            <p className="text-md md:text-lg">{description}</p>
          </div>

          <div
            className={`relative w-full md:w-[40%] h-full rounded-lg overflow-hidden flex items-center justify-center`}
          >
            <motion.div
              className="flex items-center justify-center w-full h-full"
              style={{ scale: imageScale }}
            >
              <span className="text-[120px] md:text-[180px]">{emoji}</span>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};
