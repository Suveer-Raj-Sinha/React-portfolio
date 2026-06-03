import { FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa';
import useScrollReveal from '../hooks/useScrollReveal';
import socialLinks from '../data/socialLinks';

const contactItems = [
  { icon: FaEnvelope, label: socialLinks.email, href: `mailto:${socialLinks.email}`, ariaLabel: 'Email Me' },
  { icon: FaLinkedin, label: 'LinkedIn', href: socialLinks.linkedin, ariaLabel: 'Connect on LinkedIn', external: true },
  { icon: FaGithub, label: 'GitHub', href: socialLinks.github, ariaLabel: 'Follow on GitHub', external: true },
];

const Contact = () => {
  const sectionRef = useScrollReveal();

  return (
    <section
      id="contact"
      className="flex justify-center items-center flex-col w-full min-h-screen py-30 px-5 text-center"
    >
      <div
        ref={sectionRef}
        className="
          scroll-reveal max-w-[800px] w-full text-center
          bg-dark-700/55 border border-white/10 rounded-2xl backdrop-blur-[14px] p-12
          max-sm:p-6 max-sm:rounded-xl
        "
      >
        {/* Title */}
        <h2 className="font-heading text-[2.8rem] font-semibold text-white text-center mb-12 max-[820px]:text-[2.2rem]">
          Get In Touch
        </h2>

        <p className="font-body text-text-secondary leading-[1.7] max-w-[600px] mx-auto mb-10 text-lg max-sm:text-base">
          I&apos;m currently open to new opportunities and my inbox is always open.
          Whether you have a question or just want to say hi, I&apos;ll try my best
          to get back to you!
        </p>

        {/* Links */}
        <div className="flex flex-col items-center gap-6">
          {contactItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              target={item.external ? '_blank' : undefined}
              rel={item.external ? 'noopener noreferrer' : undefined}
              aria-label={item.ariaLabel}
              className="
                inline-flex items-center gap-4 text-text-primary no-underline
                text-xl font-medium px-5 py-3 rounded-xl
                transition-all duration-300
                hover:bg-white/10 hover:text-white hover:-translate-y-[3px]
                max-sm:text-lg
              "
            >
              <item.icon className="text-3xl text-brand" />
              <span>{item.label}</span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Contact;
