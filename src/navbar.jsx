import { useState, useEffect } from 'react';

export default function Navbar() {
  const [showNavbar, setShowNavbar] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Ambil tinggi viewport (100vh)
      const vh = window.innerHeight;
      
      // Karena Hero section tingginya h-[300vh], Hero akan selesai di-scroll penuh sekitar 200vh-250vh.
      // Kita set navbar muncul saat scroll posisi melewati pertengahan Hero (misal > 1.8 * vh) 
      // atau tepat saat memasuki About Me.
      if (window.scrollY > vh * 1.8) {
        setShowNavbar(true);
      } else {
        setShowNavbar(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-4 left-1/2 -translate-x-1/2 z-50 transition-all duration-500 ease-in-out ${
        showNavbar
          ? 'opacity-100 translate-y-0 pointer-events-auto'
          : 'opacity-0 -translate-y-6 pointer-events-none'
      }`}
    >
      <div className="flex items-center gap-6 px-6 py-3 rounded-full bg-white/70 backdrop-blur-md border border-zinc-200/80 shadow-lg text-sm font-medium text-zinc-800">
        <a 
          href="#about" 
          className="hover:text-black transition-colors"
        >
          About
        </a>
        <a 
          href="#experiences" 
          className="hover:text-black transition-colors"
        >
          Experiences
        </a>
        <a 
          href="#skills" 
          className="hover:text-black transition-colors"
        >
          Skills
        </a>
        <a 
          href="#contact" 
          className="hover:text-black transition-colors"
        >
          Contact
        </a>
      </div>
    </nav>
  );
}