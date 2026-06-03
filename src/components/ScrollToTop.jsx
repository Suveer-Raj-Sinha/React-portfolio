import { useState, useEffect } from 'react';
import { FaChevronUp } from 'react-icons/fa';

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggle = () => setIsVisible(window.scrollY > 500);
    window.addEventListener('scroll', toggle, { passive: true });
    return () => window.removeEventListener('scroll', toggle);
  }, []);

  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      aria-label="Scroll to top"
      className={`
        fixed bottom-8 right-8 z-99 w-12 h-12 rounded-full
        bg-brand/90 text-dark-900 text-xl border-none cursor-pointer
        flex items-center justify-center
        shadow-[0_4px_15px_rgba(56,189,248,0.3)]
        transition-all duration-300
        hover:bg-white hover:-translate-y-[3px] hover:shadow-[0_8px_25px_rgba(56,189,248,0.4)]
        ${isVisible
          ? 'opacity-100 visible translate-y-0'
          : 'opacity-0 invisible translate-y-5'}
      `}
    >
      <FaChevronUp />
    </button>
  );
};

export default ScrollToTop;
