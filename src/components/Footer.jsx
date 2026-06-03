import { FaLinkedin, FaGithub } from 'react-icons/fa';
import socialLinks from '../data/socialLinks';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full py-8 px-5 bg-[rgba(17,24,39,0.8)] backdrop-blur-[10px] border-t border-white/10 text-center relative z-10">
      <div className="max-w-[1200px] mx-auto">

        {/* Social Icons */}
        <div className="mb-5">
          <a
            href={socialLinks.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="text-text-muted text-3xl mx-4 transition-all duration-300 hover:text-brand hover:-translate-y-[3px] inline-block"
          >
            <FaLinkedin />
          </a>
          <a
            href={socialLinks.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="text-text-muted text-3xl mx-4 transition-all duration-300 hover:text-brand hover:-translate-y-[3px] inline-block"
          >
            <FaGithub />
          </a>
        </div>

        <p className="text-text-muted text-sm font-body">
          &copy; {currentYear} Suveer Raj Sinha. Designed &amp; Built by Me.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
