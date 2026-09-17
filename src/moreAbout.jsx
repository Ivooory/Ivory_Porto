import { Link } from 'react-router-dom';

export default function MoreAbout() {
  return (
    <div className="bg-zinc-50 text-slate-900 min-h-screen px-6 sm:px-12 md:px-16 py-16 font-sans">
      <div className="max-w-3xl mx-auto space-y-6">
        
        {/* Tombol Kembali ke Homepage */}
        <Link 
          to="/" 
          className="inline-block text-sm font-semibold bg-zinc-200 hover:bg-zinc-300 px-4 py-2 transition-colors"
        >
          ← Back to Portfolio
        </Link>

        <h1 className="text-3xl sm:text-5xl bg-blue-500 font-extrabold text-white w-fit px-3 py-1">
          More About Me
        </h1>

        <div className="space-y-4 text-base sm:text-lg text-zinc-800 leading-relaxed">
          <p>
            Di halaman ini kamu bisa menceritakan latar belakang yang lebih mendalam,
            hobi, perjalanan akademis, sertifikasi, filosofi koding, atau achievement lainnya.
          </p>
          <p>
            Misalnya detail minat kamu di bidang Artificial Intelligence, Machine Learning, 
            atau proyek-proyek menarik yang pernah kamu kerjakan di kampus.
          </p>
        </div>

      </div>
    </div>
  );
}