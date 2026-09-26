import { Link } from 'react-router-dom';
import { TypingAnimation } from '@/components/ui/typing-animation';
import AccordionGallery from './AccordionGallery';

// Ganti url dengan path foto kamu sendiri
const myPhotos = [
  { id: 1, url: '/img/porto1.jpg', title: 'I love flowers' },
  { id: 2, url: '/img/kacamata.jpg', title: 'love going outside' },
  { id: 3, url: '/img/porto2.jpg', title: 'I love black shirt' },
  { id: 4, url: '/img/malay.jpg', title: 'harimau malaya' },
  { id: 5, url: '/img/porto3.jpg', title: 'I love cats' },
];

export default function AboutSection() {
  return (
    <section id="about" className="px-6 sm:px-12 md:px-16 pt-24 pb-4">
      <div className="max-w-3xl mx-auto flex flex-col items-start justify-start space-y-6 text-left">
        <TypingAnimation
          words={["About Me"]}
          as="h2"
          loop
          cursorStyle="line"
          className="text-3xl bg-blue-500 sm:text-5xl font-extrabold tracking-tight text-white w-fit px-3 py-1"
        />

        <div className="space-y-4 text-base sm:text-lg text-zinc-800 leading-relaxed font-normal">
          {/* FOTO GALLERY */}
          <div className="w-full pt">
            <AccordionGallery items={myPhotos} />
          </div>
          <p>
            Hi, I'm{" "}
            <span className="text-xl sm:text-2xl font-bold text-black">
              Ivory Iverson{" "}
            </span>
            ,also known as
            <span className="text-xl sm:text-2xl font-bold text-black">
              {" "}Ivory.{" "}
            </span>
            I'm a 21-year-old Informatics student at Parahyangan Catholic University (UNPAR), based in Bandung with a deep interest in{" "}
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

          <div className="pt-2">
            <Link
              to="/more-about"
              className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-wider text-white bg-blue-500 hover:bg-blue-600 px-4 py-2 transition-colors"
            >
              Read More About Me →
            </Link>
          </div>
        </div>



      </div>
    </section>
  );
}

