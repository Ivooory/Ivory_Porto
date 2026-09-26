import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { TypingAnimation } from "@/components/ui/typing-animation";

export default function HeroSection() {
  const containerRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const firstBlockOpacity = useTransform(scrollYProgress, [0, 0.3, 0.31, 1], [1, 0, 0, 0]);
  const firstBlockY = useTransform(scrollYProgress, [0, 0.3], [0, -30]);
  const firstBlockPointer = useTransform(scrollYProgress, [0, 0.3, 0.31, 1], ['auto', 'auto', 'none', 'none']);

  const secondBlockOpacity = useTransform(scrollYProgress, [0.3, 0.4, 0.6, 0.7, 0.71, 1], [0, 1, 1, 0, 0, 0]);
  const secondBlockY = useTransform(scrollYProgress, [0.3, 0.4, 0.6, 0.7], [30, 0, 0, -30]);
  const secondBlockPointer = useTransform(scrollYProgress, [0, 0.71, 1], ['auto', 'auto', 'none']);

  const thirdBlockOpacity = useTransform(scrollYProgress, [0.7, 0.85, 1], [0, 1, 1]);
  const thirdBlockY = useTransform(scrollYProgress, [0.7, 0.85], [30, 0]);

  return (
    <div ref={containerRef} className="h-[300vh] relative">
      <div className="sticky top-0 h-screen flex flex-col items-center justify-center p-4 sm:p-6 text-center overflow-hidden">
        <div className="grid place-items-center max-w-4xl w-full px-2">

          {/* BLOCK 1: Greeting + Nama */}
          <motion.div
            style={{ opacity: firstBlockOpacity, y: firstBlockY, pointerEvents: firstBlockPointer }}
            className="col-start-1 row-start-1 flex flex-col items-center space-y-2 sm:space-y-4 w-full"
          >
            <TypingAnimation
              words={["Hello, World! ", "Halo Semua! ", "Hi There!", "Bonjour!", "Konnichiwa!", "Hola!"]}
              cursorStyle="line"
              loop
              startOnView={false}
              className="text-2xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-black"
            />
            <h1 className="text-3xl sm:text-5xl md:text-6xl font-extrabold tracking-tight leading-tight text-center">
              <span className="text-2xl sm:text-4xl md:text-5xl text-black">I'm </span>
              <TypingAnimation
                words={["Ivory Iverson", "Ivory", "Vory"]}
                as="span"
                startOnView={false}
                delay={600}
                cursorStyle="line"
                loop
                className="bg-blue-500 text-4xl sm:text-6xl md:text-7xl text-white inline-block mt-1 sm:mt-0 px-2"
              />
            </h1>
          </motion.div>

          {/* BLOCK 2: Informatics Student */}
          <motion.div
            style={{ opacity: secondBlockOpacity, y: secondBlockY, pointerEvents: secondBlockPointer }}
            className="col-start-1 row-start-1 flex items-center justify-center w-full"
          >
            <h1 className="text-3xl sm:text-5xl md:text-6xl font-extrabold tracking-tight leading-tight text-center">
              <span className="text-2xl sm:text-4xl md:text-5xl text-black">I'm an </span>
              <TypingAnimation
                words={["Informatics"]}
                as="span"
                startOnView={false}
                delay={200}
                cursorStyle="line"
                loop
                className="bg-blue-500 text-4xl sm:text-6xl md:text-7xl text-white inline-block my-1 sm:my-0 px-2"
              />
              <span className="text-2xl sm:text-4xl md:text-5xl text-black"> Student</span>
            </h1>
          </motion.div>

          {/* BLOCK 3: CTA */}
          <motion.div
            style={{ opacity: thirdBlockOpacity, y: thirdBlockY }}
            className="col-start-1 row-start-1 flex flex-col items-center justify-center w-full"
          >
            <TypingAnimation
              words={["Let's explore my work !"]}
              as="h1"
              startOnView={false}
              delay={300}
              cursorStyle="line"
              loop
              className="text-3xl bg-blue-500 sm:text-5xl md:text-6xl font-extrabold tracking-tight text-white text-center px-3 py-1"
            />
          </motion.div>

        </div>
      </div>
    </div>
  );
}
