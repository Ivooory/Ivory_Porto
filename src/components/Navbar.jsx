import { useState, useEffect } from 'react';
import { HashLink } from 'react-router-hash-link';

export default function Navbar() {
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
      className={`fixed top-6 left-1/2 -translate-x-1/2 z-50 transition-all duration-300 ease-out ${
        showNavbar
          ? 'opacity-100 translate-y-0 pointer-events-auto'
          : 'opacity-0 -translate-y-4 pointer-events-none'
      }`}
    >
      <div className="flex items-center gap-2 text-sm font-semibold uppercase tracking-wider px-4 py-1.5 bg-zinc-50/70 backdrop-blur-md">
        {navItems.map((item, index) => (
          <div key={item.id} className="flex items-center gap-2">
            <HashLink
              smooth
              to={item.href}
              onClick={() => setActiveTab(item.id)}
              className={`px-3 py-1 transition-all duration-200 ${
                activeTab === item.id
                  ? 'bg-blue-500 text-white font-bold'
                  : 'text-zinc-800 hover:text-black'
              }`}
            >
              {item.label}
            </HashLink>
            {index < navItems.length - 1 && (
              <span className="text-zinc-400 font-normal">|</span>
            )}
          </div>
        ))}
      </div>
    </nav>
  );
}
