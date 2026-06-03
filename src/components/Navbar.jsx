import { useState, useEffect } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';

const NAV_SECTIONS = ['about', 'journey', 'projects', 'contact'];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 60);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const observers = [];
    NAV_SECTIONS.forEach((id) => {
      const el = document.getElementById(id);
      if (!el) return;
      const obs = new IntersectionObserver(
        ([entry]) => { if (entry.isIntersecting) setActiveSection(id); },
        { rootMargin: '-40% 0px -55% 0px' }
      );
      obs.observe(el);
      observers.push(obs);
    });
    return () => observers.forEach((o) => o.disconnect());
  }, []);

  const closeMobileMenu = () => setIsOpen(false);

  return (
    <nav
      className={`
        fixed top-0 w-full z-100 h-20 flex justify-center items-center text-lg
        backdrop-blur-xl border-b transition-all duration-300
        ${isScrolled
          ? 'bg-dark-700/70 border-white/10'
          : 'bg-dark-700/30 border-white/5'}
      `}
    >
      <div className="flex justify-between items-center w-full max-w-[1300px] px-8">

        {/* Logo */}
        <a
          href="#home"
          onClick={closeMobileMenu}
          className="font-heading text-[1.8rem] font-semibold text-white no-underline"
        >
          Suveer Raj Sinha
        </a>

        {/* Mobile hamburger */}
        <button
          className="hidden max-[960px]:block absolute top-0 right-0 translate-x-[-100%] translate-y-[75%] z-101 text-white text-3xl bg-transparent border-none cursor-pointer"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle navigation menu"
          aria-expanded={isOpen}
        >
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>

        {/* Nav menu */}
        <ul
          className={`
            flex items-center list-none text-center gap-5
            max-[960px]:flex-col max-[960px]:justify-center max-[960px]:w-full max-[960px]:h-screen
            max-[960px]:absolute max-[960px]:top-0 max-[960px]:transition-all max-[960px]:duration-500
            max-[960px]:bg-dark-900 max-[960px]:z-99
            ${isOpen
              ? 'max-[960px]:left-0 max-[960px]:opacity-100'
              : 'max-[960px]:left-[-100%] max-[960px]:opacity-0'}
          `}
        >
          {NAV_SECTIONS.map((section) => (
            <li key={section} className="h-20 flex items-center max-[960px]:h-auto max-[960px]:w-full max-[960px]:py-4">
              <a
                href={`#${section}`}
                onClick={closeMobileMenu}
                className={`
                  relative font-body font-medium no-underline px-4 py-2 transition-all duration-200
                  max-[960px]:text-2xl max-[960px]:p-6 max-[960px]:w-full max-[960px]:table
                  ${activeSection === section
                    ? 'text-white after:content-[""] after:absolute after:bottom-[-4px] after:left-1/2 after:-translate-x-1/2 after:w-5 after:h-[3px] after:bg-brand after:rounded-full max-[960px]:after:hidden'
                    : 'text-text-muted hover:text-white hover:-translate-y-0.5'}
                `}
              >
                {section.charAt(0).toUpperCase() + section.slice(1)}
              </a>
            </li>
          ))}

          {/* Resume button */}
          <li className="max-[960px]:w-full max-[960px]:p-6 max-[960px]:flex max-[960px]:justify-center">
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              onClick={closeMobileMenu}
              className="
                px-6 py-2.5 font-body font-bold text-dark-900 bg-brand rounded-full no-underline
                transition-all duration-300 hover:bg-white hover:-translate-y-0.5
                hover:shadow-[0_8px_15px_rgba(56,189,248,0.3)]
                max-[960px]:w-4/5 max-[960px]:text-center max-[960px]:text-xl max-[960px]:py-4
              "
            >
              Download Resume
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
