import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

// 1. IMPORT GAMBAR PENGALAMAN
import keuskupan1 from './img/keuskupan-1.jpg';
import keuskupan2 from './img/keuskupan-2.jpg';
import keuskupan3 from './img/keuskupan-3.jpg';
import keuskupan4 from './img/keuskupan-4.jpg';

import mahitala1 from './img/mahitala-1.jpg';
import mahitala2 from './img/mahitala-2.jpg';
import mahitala3 from './img/mahitala-3.jpg';

import icare1 from './img/icare-1.jpg';
import icare2 from './img/icare-2.jpg'; 
import icare3 from './img/icare-3.jpg';

// 2. IMPORT LOGO TECH & AI TOOLS (Sesuaikan nama file dan ekstensi di src/img/)
import tailwindLogo from './img/tailwind.png';
import pythonLogo from './img/python.png';
import javaLogo from './img/java.png';
import bootstrapLogo from './img/bootstrap.png';

import claudeLogo from './img/claude.png';
import geminiLogo from './img/gemini.png';
import gptLogo from './img/gpt.png';

// KOMPONEN CAROUSEL FOTO PENGALAMAN
function ImageCarousel({ images }) {
  const duplicatedImages = [...images, ...images];

  return (
    <div className="w-full overflow-hidden pt-2 pb-2">
      <motion.div
        className="flex gap-4 w-max"
        animate={{
          x: ["0%", "-50%"],
        }}
        transition={{
          ease: "linear",
          duration: 20,
          repeat: Infinity,
        }}
      >
        {duplicatedImages.map((src, index) => (
          <div
            key={index}
            className="w-48 sm:w-60 h-32 sm:h-36 flex-shrink-0 rounded-xl overflow-hidden border border-zinc-200 bg-zinc-100 shadow-sm"
          >
            <img
              src={src}
              alt={`Experience preview ${index}`}
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </motion.div>
    </div>
  );
}

// KOMPONEN CAROUSEL KHUSUS LOGO TECH & AI (Ringkas dengan Nama)
function TechCarousel({ items, speed = 20 }) {
  // Duplikasi items agar loop seamless
  const duplicatedItems = [...items, ...items, ...items];

  return (
    <div className="w-full overflow-hidden py-2">
      <motion.div
        className="flex gap-4 sm:gap-6 w-max"
        animate={{
          x: ["0%", "-33.33%"],
        }}
        transition={{
          ease: "linear",
          duration: speed,
          repeat: Infinity,
        }}
      >
        {duplicatedItems.map((item, index) => (
          <div
            key={index}
            className="flex items-center space-x-3 px-4 py-3 rounded-xl border border-zinc-200 bg-zinc-50/50 hover:bg-zinc-100 transition-colors shadow-sm flex-shrink-0"
          >
            <img
              src={item.icon}
              alt={item.name}
              className="w-7 h-7 sm:w-8 sm:h-8 object-contain"
            />
            <span className="text-sm sm:text-base font-semibold text-zinc-800">
              {item.name}
            </span>
          </div>
        ))}
      </motion.div>
    </div>
  );
}

export default function App() {
  const containerRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  // ANIMASI HERO SECTION
  const firstBlockOpacity = useTransform(scrollYProgress, [0, 0.3, 0.31, 1], [1, 0, 0, 0]);
  const firstBlockY = useTransform(scrollYProgress, [0, 0.3], [0, -30]);
  const firstBlockPointer = useTransform(scrollYProgress, [0, 0.3, 0.31, 1], ['auto', 'auto', 'none', 'none']);

  const secondBlockOpacity = useTransform(scrollYProgress, [0.3, 0.4, 0.6, 0.7, 0.71, 1], [0, 1, 1, 0, 0, 0]);
  const secondBlockY = useTransform(scrollYProgress, [0.3, 0.4, 0.6, 0.7], [30, 0, 0, -30]);
  const secondBlockPointer = useTransform(scrollYProgress, [0, 0.71, 1], ['auto', 'auto', 'none']);

  const thirdBlockOpacity = useTransform(scrollYProgress, [0.7, 0.85, 1], [0, 1, 1]);
  const thirdBlockY = useTransform(scrollYProgress, [0.7, 0.85], [30, 0]);

  // ARRAY GAMBAR PENGALAMAN
  const keuskupanImages = [keuskupan1, keuskupan2, keuskupan3, keuskupan4];
  const mahitalaImages = [mahitala1, mahitala2, mahitala3];
  const icareImages = [icare1, icare2, icare3];

  // ARRAY LOGO TECH & FRAMEWORK (BARIS 1)
  const techStack = [
    { name: "Tailwind CSS", icon: tailwindLogo },
    { name: "Python", icon: pythonLogo },
    { name: "Java", icon: javaLogo },
    { name: "Bootstrap", icon: bootstrapLogo },
  ];

  // ARRAY LOGO AI TOOLS (BARIS 2)
  const aiTools = [
    { name: "Claude AI", icon: claudeLogo },
    { name: "Gemini", icon: geminiLogo },
    { name: "ChatGPT", icon: gptLogo },
  ];

  return (
    <div className="bg-zinc-50 text-slate-900 min-h-screen relative font-sans">
      
      {/* 1. PEMBUNGKUS BACKGROUND GRID (BERAKHIR SEBELUM FOOTER/CONTACT) */}
      <div 
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(0, 0, 0, 0.08) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(0, 0, 0, 0.08) 1px, transparent 1px)
          `,
          backgroundSize: '40px 40px'
        }}
      >
        
        {/* HERO ANIMATED SECTION */}
        <div ref={containerRef} className="h-[300vh] relative">
          <div className="sticky top-0 h-screen flex flex-col items-center justify-center p-4 sm:p-6 text-center overflow-hidden">
            <div className="grid place-items-center max-w-4xl w-full px-2">
              
              <motion.div 
                style={{ opacity: firstBlockOpacity, y: firstBlockY, pointerEvents: firstBlockPointer }}
                className="col-start-1 row-start-1 flex flex-col items-center space-y-2 sm:space-y-4 w-full"
              >
                <h2 className="text-2xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-black">
                  Hello, World!
                </h2>
                <h1 className="text-3xl sm:text-5xl md:text-6xl font-extrabold tracking-tight leading-tight text-center">
                  <span className="text-2xl sm:text-4xl md:text-5xl text-black">I'm</span><span> </span>
                  <span className="bg-blue-500 text-4xl sm:text-6xl md:text-7xl text-white block sm:inline mt-1 sm:mt-0">Ivory Iverson</span>
                </h1>
              </motion.div>

              <motion.div 
                style={{ opacity: secondBlockOpacity, y: secondBlockY, pointerEvents: secondBlockPointer }}
                className="col-start-1 row-start-1 flex items-center justify-center w-full"
              >
                <h1 className="text-3xl sm:text-5xl md:text-6xl font-extrabold tracking-tight leading-tight text-center">
                  <span className="text-2xl sm:text-4xl md:text-5xl text-black">I'm an</span><span> </span>
                  <span className="bg-blue-500 text-4xl sm:text-6xl md:text-7xl text-white block sm:inline my-1 sm:my-0">Informatics</span><span> </span>
                  <span className="text-2xl sm:text-4xl md:text-5xl text-black">student</span>
                </h1>
              </motion.div>

              <motion.div 
                style={{ opacity: thirdBlockOpacity, y: thirdBlockY }}
                className="col-start-1 row-start-1 flex flex-col items-center justify-center w-full"
              >
                <h1 className="text-3xl bg-blue-500 sm:text-5xl md:text-6xl font-extrabold tracking-tight text-white text-center">
                  Let's explore my work ! 
                </h1>
              </motion.div>

            </div>
          </div>
        </div>

        {/* SECTION 2: ABOUT ME */}
        <section className="px-6 sm:px-12 md:px-16 pt-24 pb-16">
          <div className="max-w-3xl mx-auto flex flex-col items-start justify-start space-y-6 text-left">
            <h2 className="text-3xl bg-blue-500 sm:text-5xl font-extrabold tracking-tight text-white">
              About Me
            </h2>
            
            <div className="space-y-4 text-base sm:text-lg text-zinc-800 leading-relaxed font-normal">
              <p>
                Hi, I'm{" "}
                <span className="text-xl sm:text-2xl font-bold text-black">
                  Ivory Iverson
                </span>
                , a 21-year-old Informatics student at Parahyangan Catholic University (UNPAR), based in Bandung with a deep interest in{" "}
                <span className="text-lg font-bold text-black">
                  Artificial Intelligence and Machine Learning
                </span>
                .
              </p>

              <p>
                Alongside my interest on AI, I have hands-on experience in{" "}
                <span className="text-lg font-bold text-black">
                  Web Development and Information Systems
                </span>
                {" "}building scalable, functional, and user-friendly web applications from the ground up.
              </p>
            </div>
          </div>
        </section>

        {/* SECTION 3: MY EXPERIENCES */}
        <section className="px-6 sm:px-12 md:px-16 py-16 border-t border-zinc-200/60">
          <div className="max-w-3xl mx-auto flex flex-col items-start space-y-10 text-left">
            <h2 className="text-3xl bg-blue-500 sm:text-5xl font-extrabold tracking-tight text-white">
              My Experiences
            </h2>

            {/* ITEM PENGALAMAN 1 */}
            <div className="flex flex-col space-y-4 w-full">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between w-full gap-1">
                <h3 className="text-xl bg-blue-500 sm:text-2xl font-bold text-white">
                  Full-Stack Developer
                </h3>
                <span className="text-sm font-semibold text-zinc-500">
                  2026 – Present
                </span>
              </div>

              <p className="text-base font-bold text-zinc-900">
                Keuskupan Bandung (Diocese of Bandung)
              </p>

              <ul className="list-disc list-inside text-base text-zinc-800 leading-relaxed space-y-2">
                <li>
                  Architected and developed a full-stack web application for the Diocese of Bandung using an <span className="font-bold text-black">Agile development process</span>.
                </li>
                <li>
                  Built core features including <span className="font-bold text-black">schedule management</span>, <span className="font-bold text-black">online registration systems</span>, and <span className="font-bold text-black">digital record-keeping</span> to streamline administrative workflows.
                </li>
                <li>
                  Engineered both front-end user interfaces and back-end database structures to deliver a seamless, responsive experience for end-users and administrators.
                </li>
              </ul>

              <div className="flex flex-wrap gap-2 pt-2">
                <span className="px-3 py-1 text-xs font-semibold bg-zinc-200/80 text-zinc-900 rounded-md">
                  Full-Stack Development
                </span>
                <span className="px-3 py-1 text-xs font-semibold bg-zinc-200/80 text-zinc-900 rounded-md">
                  Agile / Scrum
                </span>
                <span className="px-3 py-1 text-xs font-semibold bg-zinc-200/80 text-zinc-900 rounded-md">
                  Bootstrap
                </span>
                <span className="px-3 py-1 text-xs font-semibold bg-zinc-200/80 text-zinc-900 rounded-md">
                  Python
                </span>
                <span className="px-3 py-1 text-xs font-semibold bg-zinc-200/80 text-zinc-900 rounded-md">
                  XML
                </span>
              </div>

              <ImageCarousel images={keuskupanImages} />
            </div>

            {/* ITEM PENGALAMAN 2 */}
            <div className="flex flex-col space-y-4 w-full pt-8 border-t border-zinc-200/60">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between w-full gap-1">
                <h3 className="text-xl sm:text-2xl bg-blue-500 font-bold text-white">
                  Head of Batch 49 (Ketua Angkatan)
                </h3>
                <span className="text-sm font-semibold text-zinc-500">
                  2025
                </span>
              </div>

              <p className="text-base font-bold text-zinc-900">
                MAHITALA UNPAR
              </p>

              <ul className="list-disc list-inside text-base text-zinc-800 leading-relaxed space-y-2">
                <li>
                  Led and coordinated members of <span className="font-bold text-black">Batch 49</span>, serving as the primary bridge between batch members, senior organization officials, and university stakeholders.
                </li>
                <li>
                  Managed team communication, conflict resolution, and internal alignment during high-intensity organizational projects and outdoor expeditions.
                </li>
                <li>
                  Organized batch-level initiatives and training programs, fostering solidarity, discipline, and strong risk management practices within the team.
                </li>
              </ul>

              <div className="flex flex-wrap gap-2 pt-2">
                <span className="px-3 py-1 text-xs font-semibold bg-zinc-200/80 text-zinc-900 rounded-md">
                  Leadership
                </span>
                <span className="px-3 py-1 text-xs font-semibold bg-zinc-200/80 text-zinc-900 rounded-md">
                  Team Management
                </span>
                <span className="px-3 py-1 text-xs font-semibold bg-zinc-200/80 text-zinc-900 rounded-md">
                  Conflict Resolution
                </span>
                <span className="px-3 py-1 text-xs font-semibold bg-zinc-200/80 text-zinc-900 rounded-md">
                  Strategic Communication
                </span>
              </div>

              <ImageCarousel images={mahitalaImages} />
            </div>

            {/* ITEM PENGALAMAN 3 */}
            <div className="flex flex-col space-y-4 w-full pt-8 border-t border-zinc-200/60">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between w-full gap-1">
                <h3 className="text-xl sm:text-2xl bg-blue-500 font-bold text-white">
                  Coding Mentor & Volunteer
                </h3>
                <span className="text-sm font-semibold text-zinc-500">
                  2023
                </span>
              </div>

              <p className="text-base font-bold text-zinc-900">
                I-CARE 2023 – Himpunan Mahasiswa Informatika UNPAR
              </p>

              <ul className="list-disc list-inside text-base text-zinc-800 leading-relaxed space-y-2">
                <li>
                  Served as a dedicated mentor in a social outreach program organized by the Informatics Student Association (HMIF UNPAR).
                </li>
                <li>
                  Provided hands-on guidance to children at a local orphanage, teaching basic programming and computational thinking concepts using <span className="font-bold text-black">Scratch</span>.
                </li>
                <li>
                  Fostered an engaging and inclusive learning environment to encourage problem-solving and digital literacy among youth.
                </li>
              </ul>

              <div className="flex flex-wrap gap-2 pt-2">
                <span className="px-3 py-1 text-xs font-semibold bg-zinc-200/80 text-zinc-900 rounded-md">
                  Mentoring & Teaching
                </span>
                <span className="px-3 py-1 text-xs font-semibold bg-zinc-200/80 text-zinc-900 rounded-md">
                  Scratch
                </span>
                <span className="px-3 py-1 text-xs font-semibold bg-zinc-200/80 text-zinc-900 rounded-md">
                  Public Service / Volunteering
                </span>
              </div>

              <ImageCarousel images={icareImages} />
            </div>

          </div>
        </section>

        {/* 4. TECH STACK & AI TOOLS SECTION */}
        {/* SESUDAH (SUDAH DIPERBAIKI) */}
        <section className="px-6 sm:px-12 md:px-16 py-16 border-t border-zinc-200/60">
          <div className="max-w-3xl mx-auto flex flex-col items-start space-y-8 text-left">
            <div>
              <h2 className="text-3xl bg-blue-500 sm:text-5xl font-extrabold tracking-tight text-white w-fit">
                Skills & Tools
              </h2>
              <p className="text-zinc-500 text-sm sm:text-base mt-2">
                Technologies, languages, and AI tools I work with regularly.
              </p>
            </div>

            <div className="w-full space-y-6 pt-2">
              <div className="space-y-3">
                <span className="text-xs uppercase tracking-wider bg-blue-500 text-white font-bold">
                  Technologies & Languages
                </span>
                <TechCarousel items={techStack} speed={18} />
              </div>

              <div className="space-y-3 pt-1">
                <span className="text-xs uppercase tracking-wider text-white bg-blue-500 font-bold">
                  Daily AI Productivity Tools
                </span>
                <TechCarousel items={aiTools} speed={14} />
              </div>
            </div>
          </div>
        </section>

      </div> 
      {/* KHUSUS PENUTUP PEMBUNGKUS GRID BACKGROUND */}


      {/* 2. FOOTER / CONTACT SECTION (BERSIH TANPA GRID) */}
      <footer className="px-6 sm:px-12 md:px-16 py-20 bg-zinc-50 border-t border-zinc-200/60">
        <div className="max-w-3xl mx-auto flex flex-col items-start space-y-6 text-left">
          
          <span className="text-xs uppercase tracking-widest text-zinc-400 font-semibold">
            Contact
          </span>

          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-black">
            Let's build something together.
          </h2>

          <p className="text-base sm:text-lg text-zinc-600 font-normal max-w-xl">
            Feel free to reach out!
          </p>

          <a 
            href="mailto:ivoryiverson03@gmail.com" 
            className="text-xl sm:text-2xl font-bold text-black underline underline-offset-8 hover:text-zinc-600 transition-colors"
          >
            ivoryiverson03@gmail.com
          </a>

          <div className="pt-8 flex flex-col sm:flex-row sm:items-center justify-between w-full border-t border-zinc-200/60 gap-4 text-sm text-zinc-500">
            <div className="flex space-x-6 font-medium">
              <a href="https://github.com" target="_blank" rel="noreferrer" className="hover:text-black transition-colors">
                GitHub
              </a>
              <a href="https://www.linkedin.com/in/ivory-iverson-284815393/" target="_blank" rel="noreferrer" className="hover:text-black transition-colors">
                LinkedIn
              </a>
              <a href="https://www.instagram.com/ivoryiverson_/" target="_blank" rel="noreferrer" className="hover:text-black transition-colors">
                Instagram
              </a>
            </div>
            
            <span>© {new Date().getFullYear()} Ivory Iverson. All rights reserved.</span>
          </div>

        </div>
      </footer>

    </div>
  );
}