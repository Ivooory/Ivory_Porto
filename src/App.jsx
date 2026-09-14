import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

export default function App() {
  const containerRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  // 1. BLOK PERTAMA (0% - 25%)
  const firstBlockOpacity = useTransform(scrollYProgress, [0, 0.25, 0.26, 1], [1, 0, 0, 0]);
  const firstBlockY = useTransform(scrollYProgress, [0, 0.25], [0, -30]);
  const firstBlockPointer = useTransform(scrollYProgress, [0, 0.25, 0.26, 1], ['auto', 'auto', 'none', 'none']);

  // 2. BLOK KEDUA (30% - 60%)
  const secondBlockOpacity = useTransform(scrollYProgress, [0.25, 0.35, 0.55, 0.65, 0.66, 1], [0, 1, 1, 0, 0, 0]);
  const secondBlockY = useTransform(scrollYProgress, [0.25, 0.35, 0.55, 0.65], [30, 0, 0, -30]);
  const secondBlockPointer = useTransform(scrollYProgress, [0, 0.65, 0.66, 1], ['auto', 'auto', 'none', 'none']);

  // 3. BLOK KETIGA (65% - 100%)
  const thirdBlockOpacity = useTransform(scrollYProgress, [0.65, 0.8, 1], [0, 1, 1]);
  const thirdBlockY = useTransform(scrollYProgress, [0.65, 0.8], [30, 0]);

  return (
    <div ref={containerRef} className="h-[350vh] bg-white text-slate-900 relative">
      
      {/* Container dikunci di tengah layar */}
      <div className="sticky top-0 h-screen flex flex-col items-center justify-center p-4 sm:p-6 text-center overflow-hidden">
        
        <div className="grid place-items-center max-w-4xl w-full px-2">
          
          {/* TAHAP 1: Hello, World! I'm Ivory Iverson */}
          <motion.div 
            style={{ 
              opacity: firstBlockOpacity, 
              y: firstBlockY,
              pointerEvents: firstBlockPointer
            }}
            className="col-start-1 row-start-1 flex flex-col items-center space-y-2 sm:space-y-4 w-full"
          >
            <h2 className="text-2xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-black">
              Hello, World!
            </h2>
            <h1 className="text-3xl sm:text-5xl md:text-6xl font-extrabold tracking-tight leading-tight text-center">
              <span className="text-2xl sm:text-4xl md:text-5xl text-black">
                I'm 
              </span>
              <span> </span>
              <span className="text-4xl sm:text-6xl md:text-7xl text-black block sm:inline mt-1 sm:mt-0">
                Ivory Iverson
              </span>
            </h1>
          </motion.div>

          {/* TAHAP 2: I'm an Informatics student */}
          <motion.div 
            style={{ 
              opacity: secondBlockOpacity, 
              y: secondBlockY,
              pointerEvents: secondBlockPointer
            }}
            className="col-start-1 row-start-1 flex items-center justify-center w-full"
          >
            <h1 className="text-3xl sm:text-5xl md:text-6xl font-extrabold tracking-tight leading-tight text-center">
              <span className="text-2xl sm:text-4xl md:text-5xl text-black">
                I'm an
              </span>
              <span> </span>
              <span className="text-4xl sm:text-6xl md:text-7xl text-black block sm:inline my-1 sm:my-0">
                Informatics
              </span>
              <span> </span>
              <span className="text-2xl sm:text-4xl md:text-5xl text-black">
                student
              </span>
            </h1>
          </motion.div>

          {/* TAHAP 3: Explore My Work */}
          <motion.div 
            style={{ 
              opacity: thirdBlockOpacity, 
              y: thirdBlockY 
            }}
            className="col-start-1 row-start-1 flex flex-col items-center justify-center w-full"
          >
            <h1 className="text-3xl sm:text-3xl md:text-3xl font-extrabold tracking-tight text-black text-center">
              Let's explore my work!
            </h1>
          </motion.div>

        </div>

      </div>

    </div>
  );
}