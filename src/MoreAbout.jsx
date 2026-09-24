import { HashLink } from 'react-router-hash-link';

export default function MoreAbout() {
  return (
    <div className="bg-zinc-50 min-h-screen text-slate-900 font-sans px-6 py-12 sm:px-12 md:px-16">
      
      {/* PEMBUNGKUS BACKGROUND GRID */}
      <div 
        className="fixed inset-0 pointer-events-none"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(0, 0, 0, 0.05) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(0, 0, 0, 0.05) 1px, transparent 1px)
          `,
          backgroundSize: '40px 40px'
        }}
      />

      <div className="max-w-3xl mx-auto space-y-10 relative z-10">
        
        {/* HEADER SECTION */}
        <div className="space-y-3">
          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white bg-blue-500 w-fit px-3 py-1">
            More About Me
          </h1>
          <p className="text-zinc-600 text-lg font-medium">
            A deeper look into my background, academic journey, interests, and philosophy.
          </p>
        </div>

        {/* KONTEN UTAMA */}
        <div className="space-y-8 text-zinc-800 leading-relaxed text-base sm:text-lg">
          
          {/* AKADEMIK & MASA DUKUNG */}
          <section className="space-y-3 border-l-4 border-blue-500 pl-4 py-1">
            <h2 className="text-xl sm:text-2xl font-bold text-black">
              Academic Journey & Background
            </h2>
            <p>
              I am currently pursuing my Bachelor's Degree in **Informatics / Computer Science** at **Parahyangan Catholic University (UNPAR)** in Bandung. My academic trip has been shaped by a strong curiosity about how software systems work under the hood and how data-driven decisions can solve real-world problems.
            </p>
          </section>

          {/* FOKUS AI & MACHINE LEARNING */}
          <section className="space-y-3 border-l-4 border-blue-500 pl-4 py-1">
            <h2 className="text-xl sm:text-2xl font-bold text-black">
              Passionate about AI & Machine Learning
            </h2>
            <p>
              While I have strong foundations in full-stack web application development, my primary technical passion lies in **Artificial Intelligence and Machine Learning**. I enjoy exploring model architectures, prompt engineering, data processing, and finding innovative ways to integrate intelligent systems into modern web applications.
            </p>
          </section>

          {/* ORGANISASI & LEADERSHIP */}
          <section className="space-y-3 border-l-4 border-blue-500 pl-4 py-1">
            <h2 className="text-xl sm:text-2xl font-bold text-black">
              Leadership & Outdoor Exploration
            </h2>
            <p>
              Beyond coding, active involvement in student organizations like **MAHITALA UNPAR** has significantly built my character. Serving as the Head of Batch 49 taught me resilience, crisis management, strategic planning, and how to lead a cohesive team under demanding situations—lessons that directly influence my software development workflow today.
            </p>
          </section>

          {/* FILOSOFI / CARA KERJA */}
          <section className="space-y-3 border-l-4 border-blue-500 pl-4 py-1">
            <h2 className="text-xl sm:text-2xl font-bold text-black">
              Work Philosophy
            </h2>
            <p>
              I believe in writing clean, maintainable code and building products with high attention to user experience. Levering modern developer tools and AI assistants allows me to iterate fast while keeping focus on architecture quality and business logic.
            </p>
          </section>

        </div>

        {/* BOTTOM NAV / CONTACT FOOTER */}
        <div className="pt-8 border-t border-zinc-200">
          <HashLink
            smooth
            to="/#about"
            className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-wider text-white bg-blue-500 hover:bg-blue-600 px-4 py-2 transition-colors shadow-sm"
          >
            ← Back to About Section
          </HashLink>
        </div>

      </div>
    </div>
  );
}