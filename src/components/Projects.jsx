import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import useScrollReveal from '../hooks/useScrollReveal';
import projectsData from '../data/projects';

const Projects = () => {
  const sectionRef = useScrollReveal();

  return (
    <section
      id="projects"
      className="flex justify-center items-center flex-col w-full min-h-screen py-30 px-5 text-center"
    >
      <div ref={sectionRef} className="scroll-reveal max-w-[1200px] w-full">
        {/* Title */}
        <h2 className="font-heading text-[2.8rem] font-semibold text-white text-center mb-12 max-[820px]:text-[2.2rem]">
          My Projects
        </h2>

        {/* Grid */}
        <div className="grid grid-cols-[repeat(auto-fit,minmax(320px,1fr))] gap-8">
          {projectsData.map((project) => (
            <div
              key={project.id}
              className="
                flex flex-col overflow-hidden rounded-2xl
                bg-dark-700/55 border border-white/10 backdrop-blur-[14px]
                transition-all duration-300
                hover:-translate-y-2.5 hover:shadow-[0_20px_40px_rgba(0,0,0,0.4)]
              "
            >
              {/* Image */}
              <div className="w-full h-44 bg-dark-900/60 flex items-center justify-center overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  loading="lazy"
                  className={`w-full h-full ${project.imageFit === 'contain' ? 'object-contain' : 'object-cover object-top'}`}
                />
              </div>

              {/* Content */}
              <div className="p-5 flex flex-col grow text-left">
                <h3 className="font-heading text-[1.2rem] leading-snug text-text-primary mb-3">
                  {project.title}
                </h3>
                <p className="font-body text-sm text-text-secondary leading-relaxed grow mb-4 line-clamp-4">
                  {project.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, i) => (
                    <span
                      key={i}
                      className="bg-brand/15 text-brand px-2.5 py-1 rounded-full text-xs font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className={`grid gap-3 ${project.liveUrl ? 'grid-cols-2' : 'grid-cols-1'}`}>
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="
                      inline-flex items-center justify-center gap-2 text-text-primary no-underline
                      font-medium text-sm px-4 py-2.5 rounded-lg border border-white/15
                      transition-all duration-300
                      hover:border-brand/50 hover:text-brand hover:bg-brand/5
                    "
                  >
                    <FaGithub className="text-lg" />
                    <span>Code</span>
                  </a>

                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="
                        inline-flex items-center justify-center gap-2 text-dark-900 no-underline
                        font-medium text-sm px-4 py-2.5 rounded-lg bg-brand
                        transition-all duration-300
                        hover:bg-brand-light
                      "
                    >
                      <FaExternalLinkAlt className="text-sm" />
                      <span>Live Demo</span>
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;