import { PixelatedImageReveal } from './ui/pixelated-image-reveal';

export default function ProfileSection() {
  return (
    <section className="px-6 sm:px-12 md:px-16 py-16">
      <div className="max-w-3xl mx-auto flex flex-col sm:flex-row items-center sm:items-start gap-10">

        {/* FOTO */}
        <div className="w-56 sm:w-64 flex-shrink-0">
          <PixelatedImageReveal
            alt="Ivory Iverson"
            aspect="square"
            defaultSrc="/img/porto1.jpg"
            activeSrc="/img/ciremai.png"
            gridSize={7}
            pixelColor="#3b82f6"
            stepDuration={0.3}
            className="w-full shadow-md"
          />
          <p className="text-xs text-zinc-400 text-center mt-2 font-medium tracking-wide">
            hover to reveal
          </p>
        </div>

        {/* TEKS SINGKAT */}
        <div className="flex flex-col justify-center space-y-3 text-left">
          <p className="text-zinc-500 text-sm font-semibold uppercase tracking-widest">
            — Who am I?
          </p>
          <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-black leading-snug">
            Ivory Iverson
          </h2>
          <p className="text-base sm:text-lg text-zinc-700 leading-relaxed font-normal">
            A 21-year-old Informatics student based in Bandung, passionate about{" "}
            <span className="font-bold text-black">AI, Machine Learning</span>, and{" "}
            <span className="font-bold text-black">Web Development</span>.
            I build things that matter — from full-stack apps to leadership on the field.
          </p>
        </div>

      </div>
    </section>
  );
}
