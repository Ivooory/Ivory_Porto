import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Navbar from '../components/Navbar';
import HeroSection from '../components/HeroSection';
import AboutSection from '../components/AboutSection';
import ExperiencesSection from '../components/ExperiencesSection';
import SkillsSection from '../components/SkillsSection';
import Footer from '../components/Footer';

export default function Home() {
  const location = useLocation();

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
    <div className="bg-zinc-50 text-slate-900 min-h-screen relative font-sans">

      {/* FLOATING NAVBAR */}
      <Navbar />

      {/* PEMBUNGKUS BACKGROUND GRID */}
      <div
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(0, 0, 0, 0.08) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(0, 0, 0, 0.08) 1px, transparent 1px)
          `,
          backgroundSize: '40px 40px'
        }}
      >
        <HeroSection />
        <AboutSection />
        <ExperiencesSection />
        <SkillsSection />
      </div>

      <Footer />
    </div>
  );
}
