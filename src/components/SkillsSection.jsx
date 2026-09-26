import { TypingAnimation } from '@/components/ui/typing-animation';
import { TechCarousel } from './Carousels';

const techStack = [
  { name: "Tailwind CSS", icon: '/img/tailwind.png' },
  { name: "Python", icon: '/img/python.png' },
  { name: "Java", icon: '/img/java.png' },
  { name: "Bootstrap", icon: '/img/bootstrap.png' },
];

const aiTools = [
  { name: "Claude AI", icon: '/img/claude.png' },
  { name: "Gemini", icon: '/img/gemini.png' },
  { name: "ChatGPT", icon: '/img/gpt.png' },
];

export default function SkillsSection() {
  return (
    <section id="skills" className="px-6 sm:px-12 md:px-16 py-10 border-t border-zinc-200/60">
      <div className="max-w-3xl mx-auto flex flex-col items-start space-y-8 text-left">
        <div>
          <TypingAnimation
            words={["Skills & Tools"]}
            as="h2"
            loop
            cursorStyle="line"
            className="text-3xl bg-blue-500 sm:text-5xl font-extrabold tracking-tight text-white w-fit px-3 py-1"
          />
          <p className="text-zinc-500 text-sm sm:text-base mt-2">
            Technologies, languages, and AI tools I work with regularly.
          </p>
        </div>

        <div className="w-full space-y-6 pt-2">
          <div className="space-y-3">
            <span className="text-xs uppercase tracking-wider bg-blue-500 text-white font-bold inline-block px-2 py-0.5">
              Technologies & Languages
            </span>
            <TechCarousel items={techStack} speed={18} />
          </div>

          <div className="space-y-3 pt-1">
            <span className="text-xs uppercase tracking-wider text-white bg-blue-500 font-bold inline-block px-2 py-0.5">
              Daily AI Productivity Tools
            </span>
            <TechCarousel items={aiTools} speed={14} />
          </div>
        </div>
      </div>
    </section>
  );
}
