import { TypingAnimation } from '@/components/ui/typing-animation';
import { ScrollVelocityContainer, ScrollVelocityRow } from '@/components/ui/scroll-based-velocity';

const experiences = [
  {
    title: 'Full-Stack Developer',
    period: '2026 – Present',
    company: 'Keuskupan Bandung (Diocese of Bandung)',
    bullets: [
      <>Architected and developed a full-stack web application for the Diocese of Bandung using an <span className="font-bold text-black">Agile development process</span>.</>,
      <>Built core features including <span className="font-bold text-black">schedule management</span>, <span className="font-bold text-black">online registration systems</span>, and <span className="font-bold text-black">digital record-keeping</span> to streamline administrative workflows.</>,
      <>Engineered both front-end user interfaces and back-end database structures to deliver a seamless, responsive experience for end-users and administrators.</>,
    ],
    tags: ['Full-Stack Development', 'Agile / Scrum', 'Bootstrap', 'Python', 'XML'],
    images: [
      '/img/keuskupan-1.jpg',
      '/img/keuskupan-2.jpg',
      '/img/keuskupan-3.jpg',
      '/img/keuskupan-4.jpg',
    ],
  },
  {
    title: 'Head of Batch 49 (Ketua Angkatan)',
    period: '2025',
    company: 'MAHITALA UNPAR',
    bullets: [
      <>Led and coordinated members of <span className="font-bold text-black">Batch 49</span>, serving as the primary bridge between batch members, senior organization officials, and university stakeholders.</>,
      <>Managed team communication, conflict resolution, and internal alignment during high-intensity organizational projects and outdoor expeditions.</>,
      <>Organized batch-level initiatives and training programs, fostering solidarity, discipline, and strong risk management practices within the team.</>,
    ],
    tags: ['Leadership', 'Team Management', 'Conflict Resolution', 'Strategic Communication'],
    images: [
      '/img/mahitala-1.jpg',
      '/img/mahitala-2.jpg',
      '/img/mahitala-3.jpg',
    ],
  },
  {
    title: 'Coding Mentor & Volunteer',
    period: '2023',
    company: 'I-CARE 2023 – Himpunan Mahasiswa Informatika UNPAR',
    bullets: [
      <>Served as a dedicated mentor in a social outreach program organized by the Informatics Student Association (HMIF UNPAR).</>,
      <>Provided hands-on guidance to children at a local orphanage, teaching basic programming and computational thinking concepts using <span className="font-bold text-black">Scratch</span>.</>,
      <>Fostered an engaging and inclusive learning environment to encourage problem-solving and digital literacy among youth.</>,
    ],
    tags: ['Mentoring & Teaching', 'Scratch', 'Public Service / Volunteering'],
    images: [
      '/img/icare-1.jpg',
      '/img/icare-2.jpg',
      '/img/icare-3.jpg',
    ],
  },
];

function ExperienceItem({ title, period, company, bullets, tags, images, isFirst }) {
  return (
    <div className={`flex flex-col space-y-4 w-full ${!isFirst ? 'pt-8 border-t border-zinc-200/60' : ''}`}>
      <div className="flex flex-col sm:flex-row sm:items-center justify-between w-full gap-1">
        <h3 className="text-xl sm:text-2xl bg-blue-500 font-bold text-white w-fit px-2 py-0.5">
          {title}
        </h3>
        <span className="text-sm font-semibold text-zinc-500">{period}</span>
      </div>

      <p className="text-base font-bold text-zinc-900">{company}</p>

      <ul className="list-disc list-inside text-base text-zinc-800 leading-relaxed space-y-2">
        {bullets.map((bullet, i) => (
          <li key={i}>{bullet}</li>
        ))}
      </ul>

      <div className="flex flex-wrap gap-2 pt-2">
        {tags.map((tag) => (
          <span key={tag} className="px-3 py-1 text-xs font-semibold bg-zinc-200/80 text-zinc-900">
            {tag}
          </span>
        ))}
      </div>

      {/* SCROLL VELOCITY IMAGE GALLERY */}
      <div className="w-full overflow-hidden">
        <ScrollVelocityContainer className="w-full">
          <ScrollVelocityRow baseVelocity={4} direction={1} className="py-2">
            {images.map((src, idx) => (
              <img
                key={idx}
                src={src}
                alt={`${title} photo ${idx + 1}`}
                width={240}
                height={160}
                loading="lazy"
                decoding="async"
                className="mx-3 inline-block h-36 w-56 object-cover shadow-sm border border-zinc-200"
              />
            ))}
          </ScrollVelocityRow>
        </ScrollVelocityContainer>
      </div>
    </div>
  );
}

export default function ExperiencesSection() {
  return (
    <section id="experiences" className="px-6 sm:px-12 md:px-16 py-16 border-t border-zinc-200/60">
      <div className="max-w-3xl mx-auto flex flex-col items-start space-y-10 text-left">
        <TypingAnimation
          words={["My Experiences"]}
          as="h2"
          loop
          cursorStyle="line"
          className="text-3xl bg-blue-500 sm:text-5xl font-extrabold tracking-tight text-white w-fit text-right px-3 py-1"
        />

        {experiences.map((exp, index) => (
          <ExperienceItem key={exp.title} {...exp} isFirst={index === 0} />
        ))}
      </div>
    </section>
  );
}
