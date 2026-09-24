import React from 'react';

export default function AboutMe() {
  return (
    <section id="about" className="px-6 sm:px-12 md:px-16 pt-24 pb-16">
      <div className="max-w-3xl mx-auto flex flex-col items-start justify-start space-y-6 text-left">
        <h2 className="text-3xl bg-blue-500 sm:text-5xl font-extrabold tracking-tight text-white w-fit px-3 py-1">
          About Me
        </h2>
        
        <div className="space-y-4 text-base sm:text-lg text-zinc-800 leading-relaxed font-normal">
          <p>
            Hi, I'm{" "}
            <span className="text-xl sm:text-2xl font-bold text-black">
              Ivory Iverson
            </span>
            , a 21-year-old Informatics student at Parahyangan Catholic University (UNPAR), based in Bandung with a deep interest in{" "}
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
        </div>
      </div>
    </section>
  );
}