import { useState, useEffect } from 'react';

const TITLES_TO_CYCLE = [
  "Full-Stack Developer",
  "React & TypeScript Engineer",
  "3D Web Developer",
  "FastAPI Backend Developer",
];

const Hero = () => {
  const [text, setText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(150);

  useEffect(() => {
    const handleTyping = () => {
      const i = loopNum % TITLES_TO_CYCLE.length;
      const fullText = TITLES_TO_CYCLE[i];
      const updatedText = isDeleting
        ? fullText.substring(0, text.length - 1)
        : fullText.substring(0, text.length + 1);

      setText(updatedText);
      setTypingSpeed(isDeleting ? 100 : 150);

      if (!isDeleting && updatedText === fullText) {
        setTimeout(() => setIsDeleting(true), 2000);
      } else if (isDeleting && updatedText === '') {
        setIsDeleting(false);
        setLoopNum(loopNum + 1);
      }
    };

    const timeout = setTimeout(handleTyping, typingSpeed);
    return () => clearTimeout(timeout);
  }, [text, isDeleting, loopNum, typingSpeed]);

  return (
    <div className="
      relative z-1 px-10 py-12 max-w-[850px] mx-5 text-center
      bg-dark-700/55 border border-white/10 rounded-2xl
      backdrop-blur-[14px]
    ">
      {/* Name */}
      <h1 className="font-heading text-[3.8rem] font-bold mb-2 text-white drop-shadow-[2px_2px_10px_rgba(0,0,0,0.6)] max-md:text-[2.8rem]">
        Suveer Raj Sinha
      </h1>

      {/* Typing sub-heading */}
      <p className="font-body text-2xl font-normal text-text-primary mb-6 h-10 max-md:text-xl">
        A <span className="text-brand font-semibold">{text}</span>
        <span className="cursor-blink">|</span>
      </p>

      {/* Summary */}
      <p className="font-body text-lg font-light text-text-secondary leading-relaxed max-w-[650px] mx-auto mb-10 max-md:text-base">
        Building real-time web applications, geospatial dashboards, and interactive 3D experiences with React, TypeScript, and FastAPI — with a strong focus on performance and visual design.
      </p>

      {/* CTA Buttons */}
      <div className="flex justify-center gap-5 max-md:flex-col max-md:items-center">
        <a
          href="#projects"
          className="
            px-7 py-3 font-body font-bold text-dark-900 bg-brand border-2 border-brand rounded-full
            no-underline transition-all duration-300
            hover:bg-brand-light hover:border-brand-light hover:-translate-y-[3px]
            hover:shadow-[0_10px_20px_rgba(56,189,248,0.3)]
            max-md:w-4/5
          "
        >
          View My Work
        </a>
        <a
          href="#contact"
          className="
            px-7 py-3 font-body font-bold text-white bg-transparent border-2 border-white rounded-full
            no-underline transition-all duration-300
            hover:bg-white hover:text-dark-800 hover:-translate-y-[3px]
            hover:shadow-[0_10px_20px_rgba(0,0,0,0.3)]
            max-md:w-4/5
          "
        >
          Get In Touch
        </a>
      </div>
    </div>
  );
};

export default Hero;