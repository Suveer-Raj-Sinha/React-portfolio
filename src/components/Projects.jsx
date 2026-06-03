import { FaGithub } from 'react-icons/fa';
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
              <div className="w-full aspect-[16/10]">
                <img src={project.image} alt={project.title} className="w-full h-full object-cover" />
              </div>

              {/* Content */}
              <div className="p-6 flex flex-col grow text-left">
                <h3 className="font-heading text-[1.4rem] text-text-primary mb-4">
                  {project.title}
                </h3>
                <p className="font-body text-text-secondary leading-relaxed grow mb-5">
                  {project.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2.5 mb-5">
                  {project.tags.map((tag, i) => (
                    <span
                      key={i}
                      className="bg-brand/15 text-brand px-3 py-1 rounded-full text-xs font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* GitHub Link */}
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2.5 text-text-primary no-underline font-medium transition-colors duration-300 hover:text-brand"
                >
                  <FaGithub className="text-2xl" />
                  <span>View on GitHub</span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
