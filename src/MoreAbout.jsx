import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

export default function MoreAbout() {
  // Memastikan saat halaman MoreAbout dibuka, scroll otomatis mulai dari atas
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-zinc-50 text-slate-900 min-h-screen relative font-sans">
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
        <div className="max-w-3xl mx-auto space-y-12 text-left">
          
          

          {/* HEADER SECTION */}
          <div className="space-y-4">
            <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-white bg-blue-500 w-fit px-3 py-1">
              More About Me
            </h1>
            <p className="text-zinc-600 text-base sm:text-lg">
              A deeper look into my background, interests, and everything in between.
            </p>
          </div>

          {/* SECTION 1: PERKULIAHAN & JURUSAN */}
          <section className="space-y-4  border-t border-zinc-200">
            <h2 className="text-2xl sm:text-3xl font-bold text-black">
            Life as an {" "}
            <span className="text-4xl sm:text-4xl font-extrabold tracking-tight text-white bg-blue-500 w-fit px-2">
            Informatics
            </span>
            {" "} Student
            </h2>
            <div className="space-y-3 text-base sm:text-lg text-zinc-800 leading-relaxed font-normal">
              <p>
              I am currently a 7th-semester Informatics student at Parahyangan Catholic University (UNPAR). My time here has been a blend of deep technical learning, hands-on problem solving, and active involvement in campus life.
              Beyond academic, I’ve always believed in learning through action and leadership. Throughout my studies, I have actively contributed to several key university committees and social initiatives:              </p>
              <ul className="list-disc list-inside space-y-2 pl-2">
              <li>
                <span className="font-bold text-black">I-CARE 2023:</span> Contributed to social outreach by mentoring local youth in basic programming and computational thinking.
              </li>
              <li>
                <span className="font-bold text-black">Departmental SIAP Committee (2024):</span> Organized and led orientation programs to welcome and guide incoming Informatics freshmen.
              </li>
              <li>
                <span className="font-bold text-black">Faculty SIAP Committee (2024):</span> Coordinated faculty-level student orientation activities for the Faculty of Industrial Technology.
              </li>
            </ul>
            </div>
          </section>

          {/* SECTION 2: RIWAYAT AKADEMIK / EDUCATION HISTORY */}
          <section className="space-y-4 pt-4 border-t border-zinc-200">
            <h2 className="text-2xl sm:text-3xl font-bold text-black">
              <span className="text-4xl sm:text-4xl font-extrabold tracking-tight text-white bg-blue-500 w-fit px-2">
              Academic
              </span> 
              {" "}Journey 
            </h2>
            <div className="space-y-6">
              
              {/* PERGURUAN TINGGI */}
              <div className="space-y-">
                <div className="flex justify-between items-center">
                  <h3 className="text-lg font-bold text-black">Universitas Katolik Parahyangan (UNPAR)</h3>
                  <span className="text-sm font-semibold text-zinc-500">2023 – Present</span>
                </div>
                <p className="text-sm font-semibold text-blue-600">Bachelor of Science in Informatics / Computer Science</p>
                <p className="text-zinc-700 text-sm sm:text-base leading-relaxed pt-">
                  Studying data structures, algorithms, information systems, software engineering, database systems, and artificial intelligence                </p>
              </div>

              {/* SMA / PENDIDIKAN SEBELUMNYA */}
              <div className="space-y- pt-0">
                <div className="flex justify-between items-center">
                  <h3 className="text-lg font-bold text-black">Saint Angela Highschool Bandung</h3>
                  <span className="text-sm font-semibold text-zinc-500">2023</span>
                </div>
                <p className="text-sm font-semibold text-zinc-600">MIPA</p>
                <p className="text-zinc-700 text-sm sm:text-base leading-relaxed pt-1">
                </p>
              </div>

            </div>
          </section>

          {/*}
          <section className="space-y-4 pt-4 border-t border-zinc-200">
            <h2 className="text-2xl sm:text-3xl font-bold text-black">
              ⚡ Beyond Code: Hobbies & Personal Life
            </h2>
            <div className="space-y-3 text-base sm:text-lg text-zinc-800 leading-relaxed font-normal">
              <p>
                Di luar aktivitas mengetik kode dan analisis data, saya memiliki berbagai kegiatan untuk menjaga keseimbangan hidup:
              </p>
              <ul className="list-disc list-inside space-y-2 pt-1 text-zinc-800">
                <li>
                  <span className="font-bold text-black">Kegiatan Luar Ruangan & Organisasi:</span> Aktif dalam kegiatan keorganisasian dan alam terbuka (seperti pengalaman kepemimpinan di MAHITALA UNPAR).
                </li>
                <li>
                  <span className="font-bold text-black">Eksplorasi Teknologi & AI Tools:</span> Suka mencoba produktivitas berbasis AI terbaru dan mengikuti perkembangan model LLM.
                </li>
                <li>
                  <span className="font-bold text-black">[Hobi Lainnya]:</span> [Tambahkan hobi Anda di sini, misalnya: Bermusik, Membaca, Olahraga, Game, atau Otomotif].
                </li>
              </ul>
            </div>
          </section>

          {/* SECTION 4: PRINSIP / PHILOSOPHY */}
          <section className="space-y-4 pt-4 border-t border-zinc-200 pb-8">
            <h2 className="text-2xl sm:text-3xl font-bold text-black">
              💡 Personal Mindset
            </h2>
            <div className="p-4 bg-zinc-100 border-l-4 border-blue-500 text-zinc-800 italic text-base sm:text-lg">
              "Continuous learning is key in technology. Every challenge is just an unsolved problem waiting for the right algorithm."
            </div>
          </section>

          {/* FOOTER NAVIGASI BALIK */}
          <div className="pt-6 border-t border-zinc-200">
            <Link
              to="/#about"
              state={{ fromMoreAbout: true }}
              className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-wider text-white bg-blue-500 hover:bg-blue-600 px-4 py-2 transition-colors shadow-sm"
            >
              ← Back to Main Page
            </Link>
          </div>

        </div>
      </div>
    </div>
  );
}