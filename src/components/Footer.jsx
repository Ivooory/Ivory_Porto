export default function Footer() {
  return (
    <footer id="contact" className="px-6 sm:px-12 md:px-16 py-20 bg-zinc-50 border-t border-zinc-200/60">
      <div className="max-w-3xl mx-auto flex flex-col items-start space-y-6 text-left">

        <span className="text-xs uppercase tracking-widest text-zinc-400 font-semibold">
          Contact
        </span>

        <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-black">
          Let's build something together.
        </h2>

        <p className="text-base sm:text-lg text-zinc-600 font-normal max-w-xl">
          Feel free to reach out!
        </p>

        <a
          href="mailto:ivoryiverson03@gmail.com"
          className="text-xl sm:text-2xl font-bold text-black underline underline-offset-8 hover:text-zinc-600 transition-colors"
        >
          ivoryiverson03@gmail.com
        </a>

        <div className="pt-8 flex flex-col sm:flex-row sm:items-center justify-between w-full border-t border-zinc-200/60 gap-4 text-sm text-zinc-500">
          <div className="flex space-x-6 font-medium">
            <a href="https://github.com" target="_blank" rel="noreferrer" className="hover:text-black transition-colors">
              GitHub
            </a>
            <a href="https://www.linkedin.com/in/ivory-iverson-284815393/" target="_blank" rel="noreferrer" className="hover:text-black transition-colors">
              LinkedIn
            </a>
            <a href="https://www.instagram.com/ivoryiverson_/" target="_blank" rel="noreferrer" className="hover:text-black transition-colors">
              Instagram
            </a>
          </div>

          <span>© {new Date().getFullYear()} Ivory Iverson. All rights reserved.</span>
        </div>

      </div>
    </footer>
  );
}
