import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route, Link, useLocation } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import MoreAbout from './MoreAbout';
import { MorphingText } from './MorphingText';

// KOMPONEN FLOATING NAVBAR
function Navbar() {
  const [showNavbar, setShowNavbar] = useState(false);
  const [activeTab, setActiveTab] = useState('about');

  useEffect(() => {
    const handleScroll = () => {
      const vh = window.innerHeight;
      if (window.scrollY > vh * 2.2) {
        setShowNavbar(true);
      } else {
        setShowNavbar(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { id: 'about', label: 'About', href: '/#about' },
    { id: 'experiences', label: 'Experience', href: '/#experiences' },
    { id: 'skills', label: 'Skill', href: '/#skills' },
  ];

  return (
    <nav
      className={`fixed top-6 left-1/2 -translate-x-1/2 z-50 transition-all duration-300 ease-out ${showNavbar
          ? 'opacity-100 translate-y-0 pointer-events-auto'
          : 'opacity-0 -translate-y-4 pointer-events-none'
        }`}
    >
      <div className="flex items-center gap-2 text-sm font-semibold uppercase tracking-wider px-4 py-1.5 bg-zinc-900/80 backdrop-blur-md shadow-lg border border-zinc-700/50 text-white rounded-full">
        {navItems.map((item, index) => (
          <div key={item.id} className="flex items-center gap-2">
            <HashLink
              smooth
              to={item.href}
              onClick={() => setActiveTab(item.id)}
              className={`px-3 py-1 rounded-full transition-all duration-200 ${activeTab === item.id
                  ? 'bg-blue-600 text-white font-bold shadow-md'
                  : 'text-zinc-300 hover:text-white'
                }`}
            >
              {item.label}
            </HashLink>
            {index < navItems.length - 1 && (
              <span className="text-zinc-600 font-normal">|</span>
            )}
          </div>
        ))}
      </div>
    </nav>
  );
}

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
            className="w-48 sm:w-60 h-32 sm:h-36 flex-shrink-0 border border-zinc-700/60 bg-zinc-900/80 backdrop-blur-sm shadow-lg overflow-hidden rounded-md"
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

// KOMPONEN CAROUSEL KHUSUS LOGO TECH & AI
function TechCarousel({ items, speed = 20 }) {
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
            className="flex items-center space-x-3 px-4 py-3 border border-zinc-700/60 bg-zinc-900/70 backdrop-blur-sm shadow-md rounded-md flex-shrink-0"
          >
            <img
              src={item.icon}
              alt={item.name}
              className="w-7 h-7 sm:w-8 sm:h-8 object-contain filter brightness-110"
            />
            <span className="text-sm sm:text-base font-semibold text-zinc-100">
              {item.name}
            </span>
          </div>
        ))}
      </motion.div>
    </div>
  );
}

// KOMPONEN HOMEPAGE
function Home() {
  const containerRef = useRef(null);
  const location = useLocation();

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
  const keuskupanImages = [
    '/img/keuskupan-1.jpg',
    '/img/keuskupan-2.jpg',
    '/img/keuskupan-3.jpg',
    '/img/keuskupan-4.jpg'
  ];
  const mahitalaImages = [
    '/img/mahitala-1.jpg',
    '/img/mahitala-2.jpg',
    '/img/mahitala-3.jpg'
  ];
  const icareImages = [
    '/img/icare-1.jpg',
    '/img/icare-2.jpg',
    '/img/icare-3.jpg'
  ];

  // ARRAY LOGO TECH & FRAMEWORK
  const techStack = [
    { name: "Tailwind CSS", icon: '/img/tailwind.png' },
    { name: "Python", icon: '/img/python.png' },
    { name: "Java", icon: '/img/java.png' },
    { name: "Bootstrap", icon: '/img/bootstrap.png' },
  ];

  // ARRAY LOGO AI TOOLS
  const aiTools = [
    { name: "Claude AI", icon: '/img/claude.png' },
    { name: "Gemini", icon: '/img/gemini.png' },
    { name: "ChatGPT", icon: '/img/gpt.png' },
  ];

  // SCROLL HANDLING UNTUK HASH DAN BACK NAVIGATION INSTAN
  useEffect(() => {
    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual';
    }

    const isFromMoreAbout = location.state?.fromMoreAbout;

    if (location.hash || isFromMoreAbout) {
      const targetId = location.hash ? location.hash.replace('#', '') : 'about';

      requestAnimationFrame(() => {
        const element = document.getElementById(targetId);
        if (element) {
          element.scrollIntoView({
            behavior: isFromMoreAbout ? 'instant' : 'smooth',
            block: 'start'
          });
        }
      });
    }
  }, [location]);

  return (
    <div className="bg-white text-zinc-100 min-h-screen relative font-sans selection:bg-blue-500 selection:text-white">

      {/* BACKGROUND GRID */}
      <div
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(0, 0, 0, 0.08) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(0, 0, 0, 0.08) 1px, transparent 1px)
          `,
          backgroundSize: '40px 40px'
        }}
        className="min-h-screen py-12 px-6 sm:px-12 md:px-16"
      >

        {/* FLOATING NAVBAR */}
        <Navbar />

        {/* LAYER KONTEN UTAMA */}
        <div className="relative z-10">

          {/* HERO ANIMATED SECTION */}
          <div ref={containerRef} className="h-[300vh] relative">
            <div className="sticky top-0 h-screen flex flex-col items-center justify-center p-4 sm:p-6 text-center overflow-hidden">
              <div className="grid place-items-center max-w-4xl w-full px-2">

                <motion.div
                  style={{ opacity: firstBlockOpacity, y: firstBlockY, pointerEvents: firstBlockPointer }}
                  className="col-start-1 row-start-1 flex flex-col items-center space-y-2 sm:space-y-4 w-full"
                >
                  <h2 className="text-2xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-zinc-900 drop-shadow-sm">
                    Hello, World!
                  </h2>
                  <h1 className="text-3xl sm:text-5xl md:text-6xl font-extrabold tracking-tight leading-tight text-center">
                    <span className="text-2xl sm:text-4xl md:text-5xl text-zinc-800">I'm</span><span> </span>
                    <span className="bg-blue-600 text-4xl sm:text-6xl md:text-7xl text-white block sm:inline mt-1 sm:mt-0 px-3 py-1 rounded shadow-lg">Ivory Iverson</span>
                  </h1>
                </motion.div>

                <motion.div
                  style={{ opacity: secondBlockOpacity, y: secondBlockY, pointerEvents: secondBlockPointer }}
                  className="col-start-1 row-start-1 flex items-center justify-center w-full"
                >
                  <h1 className="text-3xl sm:text-5xl md:text-6xl font-extrabold tracking-tight leading-tight text-center">
                    <span className="text-2xl sm:text-4xl md:text-5xl text-zinc-800">I'm an</span><span> </span>
                    <span className="bg-blue-600 text-4xl sm:text-6xl md:text-7xl text-white block sm:inline my-1 sm:my-0 px-3 py-1 rounded shadow-lg">Informatics</span><span> </span>
                    <span className="text-2xl sm:text-4xl md:text-5xl text-zinc-800">student</span>
                  </h1>
                </motion.div>

                <motion.div
                  style={{ opacity: thirdBlockOpacity, y: thirdBlockY }}
                  className="col-start-1 row-start-1 flex flex-col items-center justify-center w-full"
                >
                  <h1 className="text-3xl bg-blue-600 sm:text-5xl md:text-6xl font-extrabold tracking-tight text-white text-center px-4 py-2 rounded shadow-xl">
                    Let's explore my work !
                  </h1>
                </motion.div>

              </div>
            </div>
          </div>

          {/* SECTION 2: ABOUT ME */}
          <section id="about" className="pt-24 pb-12">
            <div className="max-w-3xl mx-auto flex flex-col items-start justify-start space-y-6 text-left p-8 rounded-xl bg-zinc-900/90 backdrop-blur-md border border-zinc-800 shadow-2xl">
              <h2 className="text-3xl bg-blue-600 sm:text-4xl font-extrabold tracking-tight text-white w-fit px-3 py-1 rounded">
                About Me
              </h2>

              <div className="space-y-4 text-base sm:text-lg text-zinc-300 leading-relaxed font-normal">
                <p>
                  Hi, I'm{" "}
                  <span className="text-xl sm:text-2xl font-bold text-white">
                    Ivory Iverson
                  </span>
                  , also known as
                  <span className="text-xl sm:text-2xl font-bold text-white">
                    {" "}Ivory.{" "}
                  </span>
                  I'm a 21-year-old Informatics student at Parahyangan Catholic University (UNPAR), based in Bandung with a deep interest in{" "}
                  <span className="text-lg font-bold text-blue-400">
                    Artificial Intelligence and Machine Learning
                  </span>
                  .
                </p>

                <p>
                  Alongside my interest on AI, I have hands-on experience in{" "}
                  <span className="text-lg font-bold text-blue-400">
                    Web Development and Information Systems
                  </span>
                  {" "}building scalable, functional, and user-friendly web applications from the ground up.
                </p>

                <div className="pt-2">
                  <Link
                    to="/more-about"
                    className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-wider text-white bg-blue-600 hover:bg-blue-500 px-5 py-2.5 rounded transition-all shadow-md hover:shadow-blue-500/20"
                  >
                    Read More About Me →
                  </Link>
                </div>
              </div>
            </div>
          </section>

          {/* SECTION 3: MY EXPERIENCES */}
          <section id="experiences" className="py-16">
            <div className="max-w-3xl mx-auto flex flex-col items-start space-y-10 text-left p-8 rounded-xl bg-zinc-900/90 backdrop-blur-md border border-zinc-800 shadow-2xl">
              <h2 className="text-3xl bg-blue-600 sm:text-4xl font-extrabold tracking-tight text-white w-fit px-3 py-1 rounded">
                My Experiences
              </h2>

              {/* ITEM PENGALAMAN 1 */}
              <div className="flex flex-col space-y-4 w-full">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between w-full gap-1">
                  <h3 className="text-xl bg-blue-600 sm:text-2xl font-bold text-white w-fit px-2 py-0.5 rounded">
                    Full-Stack Developer
                  </h3>
                  <span className="text-sm font-semibold text-zinc-400">
                    2026 – Present
                  </span>
                </div>

                <p className="text-base font-bold text-zinc-200">
                  Keuskupan Bandung (Diocese of Bandung)
                </p>

                <ul className="list-disc list-inside text-base text-zinc-300 leading-relaxed space-y-2">
                  <li>
                    Architected and developed a full-stack web application for the Diocese of Bandung using an <span className="font-bold text-white">Agile development process</span>.
                  </li>
                  <li>
                    Built core features including <span className="font-bold text-white">schedule management</span>, <span className="font-bold text-white">online registration systems</span>, and <span className="font-bold text-white">digital record-keeping</span> to streamline administrative workflows.
                  </li>
                  <li>
                    Engineered both front-end user interfaces and back-end database structures to deliver a seamless, responsive experience for end-users and administrators.
                  </li>
                </ul>

                <div className="flex flex-wrap gap-2 pt-2">
                  {["Full-Stack Development", "Agile / Scrum", "Bootstrap", "Python", "XML"].map((tag, i) => (
                    <span key={i} className="px-3 py-1 text-xs font-semibold bg-zinc-800/80 text-zinc-200 border border-zinc-700/50 rounded">
                      {tag}
                    </span>
                  ))}
                </div>

                <ImageCarousel images={keuskupanImages} />
              </div>

              {/* ITEM PENGALAMAN 2 */}
              <div className="flex flex-col space-y-4 w-full pt-8 border-t border-zinc-800">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between w-full gap-1">
                  <h3 className="text-xl sm:text-2xl bg-blue-600 font-bold text-white w-fit px-2 py-0.5 rounded">
                    Head of Batch 49 (Ketua Angkatan)
                  </h3>
                  <span className="text-sm font-semibold text-zinc-400">
                    2025
                  </span>
                </div>

                <p className="text-base font-bold text-zinc-200">
                  MAHITALA UNPAR
                </p>

                <ul className="list-disc list-inside text-base text-zinc-300 leading-relaxed space-y-2">
                  <li>
                    Led and coordinated members of <span className="font-bold text-white">Batch 49</span>, serving as the primary bridge between batch members, senior organization officials, and university stakeholders.
                  </li>
                  <li>
                    Managed team communication, conflict resolution, and internal alignment during high-intensity organizational projects and outdoor expeditions.
                  </li>
                  <li>
                    Organized batch-level initiatives and training programs, fostering solidarity, discipline, and strong risk management practices within the team.
                  </li>
                </ul>

                <div className="flex flex-wrap gap-2 pt-2">
                  {["Leadership", "Team Management", "Conflict Resolution", "Strategic Communication"].map((tag, i) => (
                    <span key={i} className="px-3 py-1 text-xs font-semibold bg-zinc-800/80 text-zinc-200 border border-zinc-700/50 rounded">
                      {tag}
                    </span>
                  ))}
                </div>

                <ImageCarousel images={mahitalaImages} />
              </div>

              {/* ITEM PENGALAMAN 3 */}
              <div className="flex flex-col space-y-4 w-full pt-8 border-t border-zinc-800">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between w-full gap-1">
                  <h3 className="text-xl sm:text-2xl bg-blue-600 font-bold text-white w-fit px-2 py-0.5 rounded">
                    Coding Mentor & Volunteer
                  </h3>
                  <span className="text-sm font-semibold text-zinc-400">
                    2023
                  </span>
                </div>

                <p className="text-base font-bold text-zinc-200">
                  I-CARE 2023 – Himpunan Mahasiswa Informatika UNPAR
                </p>

                <ul className="list-disc list-inside text-base text-zinc-300 leading-relaxed space-y-2">
                  <li>
                    Served as a dedicated mentor in a social outreach program organized by the Informatics Student Association (HMIF UNPAR).
                  </li>
                  <li>
                    Provided hands-on guidance to children at a local orphanage, teaching basic programming and computational thinking concepts using <span className="font-bold text-white">Scratch</span>.
                  </li>
                  <li>
                    Fostered an engaging and inclusive learning environment to encourage problem-solving and digital literacy among youth.
                  </li>
                </ul>

                <div className="flex flex-wrap gap-2 pt-2">
                  {["Mentoring & Teaching", "Scratch", "Public Service / Volunteering"].map((tag, i) => (
                    <span key={i} className="px-3 py-1 text-xs font-semibold bg-zinc-800/80 text-zinc-200 border border-zinc-700/50 rounded">
                      {tag}
                    </span>
                  ))}
                </div>

                <ImageCarousel images={icareImages} />
              </div>

            </div>
          </section>

          {/* SECTION 4: TECH STACK & AI TOOLS SECTION */}
          <section id="skills" className="py-10">
            <div className="max-w-3xl mx-auto flex flex-col items-start space-y-8 text-left p-8 rounded-xl bg-zinc-900/90 backdrop-blur-md border border-zinc-800 shadow-2xl">
              <div>
                <h2 className="text-3xl bg-blue-600 sm:text-4xl font-extrabold tracking-tight text-white w-fit px-3 py-1 rounded">
                  Skills & Tools
                </h2>
                <p className="text-zinc-400 text-sm sm:text-base mt-2 font-medium">
                  Technologies, languages, and AI tools I work with regularly.
                </p>
              </div>

              <div className="w-full space-y-6 pt-2">
                <div className="space-y-3">
                  <span className="text-xs uppercase tracking-wider bg-blue-600 text-white font-bold inline-block px-2.5 py-0.5 rounded">
                    Technologies & Languages
                  </span>
                  <TechCarousel items={techStack} speed={18} />
                </div>

                <div className="space-y-3 pt-1">
                  <span className="text-xs uppercase tracking-wider text-white bg-blue-600 font-bold inline-block px-2.5 py-0.5 rounded">
                    Daily AI Productivity Tools
                  </span>
                  <TechCarousel items={aiTools} speed={14} />
                </div>
              </div>
            </div>
          </section>

          {/* MORPHING TEXT SECTION */}
          <div className="py-12">
            <MorphingText
              words={["DEVELOPER", "INFORMATICS", "AI ENTHUSIAST"]}
              color="#2563eb"
              morphDuration={1.2}
              holdDuration={1.5}
              blurAmount={12}
              ease="easeInOut"
            />
          </div>

          {/* FOOTER / CONTACT SECTION */}
          <footer id="contact" className="py-20">
            <div className="max-w-3xl mx-auto flex flex-col items-start space-y-6 text-left p-8 rounded-xl bg-zinc-900/90 backdrop-blur-md border border-zinc-800 shadow-2xl">

              <span className="text-xs uppercase tracking-widest text-zinc-400 font-bold">
                Contact
              </span>

              <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white">
                Let's build something together.
              </h2>

              <p className="text-base sm:text-lg text-zinc-300 font-normal max-w-xl">
                Feel free to reach out!
              </p>

              <a
                href="mailto:ivoryiverson03@gmail.com"
                className="text-xl sm:text-2xl font-bold text-blue-400 underline underline-offset-8 hover:text-blue-300 transition-colors"
              >
                ivoryiverson03@gmail.com
              </a>

              <div className="pt-8 flex flex-col sm:flex-row sm:items-center justify-between w-full border-t border-zinc-800 gap-4 text-sm text-zinc-400">
                <div className="flex space-x-6 font-semibold">
                  <a href="https://github.com" target="_blank" rel="noreferrer" className="hover:text-white transition-colors">
                    GitHub
                  </a>
                  <a href="https://www.linkedin.com/in/ivory-iverson-284815393/" target="_blank" rel="noreferrer" className="hover:text-white transition-colors">
                    LinkedIn
                  </a>
                  <a href="https://www.instagram.com/ivoryiverson_/" target="_blank" rel="noreferrer" className="hover:text-white transition-colors">
                    Instagram
                  </a>
                </div>

                <span>© {new Date().getFullYear()} Ivory Iverson. All rights reserved.</span>
              </div>

            </div>
          </footer>

        </div>

      </div>

    </div>
  );
}

// MAIN ROUTER COMPONENT
export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/more-about" element={<MoreAbout />} />
      </Routes>
    </BrowserRouter>
  );
}