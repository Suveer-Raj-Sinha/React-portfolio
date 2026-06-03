import { useState } from 'react';
import useScrollReveal from '../hooks/useScrollReveal';
import experienceData from '../data/experience';
import educationData from '../data/education';

const Journey = () => {
  const [activeTab, setActiveTab] = useState('experience');
  const sectionRef = useScrollReveal();

  return (
    <section
      id="journey"
      className="flex justify-center items-center flex-col w-full min-h-screen py-30 px-5 text-center"
    >
      <div
        ref={sectionRef}
        className="
          scroll-reveal max-w-[900px] w-full
          bg-dark-700/55 border border-white/10 rounded-2xl backdrop-blur-[14px] p-12
          max-sm:p-6 max-sm:rounded-xl
        "
      >
        {/* Title */}
        <h2 className="font-heading text-[2.8rem] font-semibold text-white text-center mb-12 max-[820px]:text-[2.2rem]">
          My Journey
        </h2>

        {/* Tab Switcher */}
        <div className="flex justify-center mb-12 bg-dark-700/60 p-2 rounded-full max-w-[300px] mx-auto">
          {['experience', 'education'].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`
                px-6 py-2.5 font-body text-base font-medium rounded-full border-none cursor-pointer
                transition-all duration-300
                ${activeTab === tab
                  ? 'text-dark-700 bg-brand shadow-[0_5px_15px_rgba(56,189,248,0.3)]'
                  : 'text-text-secondary bg-transparent'}
              `}
            >
              {tab.charAt(0).toUpperCase() + tab.slice(1)}
            </button>
          ))}
        </div>

        {/* Tab Content (crossfade) */}
        <div className="relative min-h-[200px]">
          {/* Experience Panel */}
          <div className={`tab-panel ${activeTab === 'experience' ? 'tab-panel-active' : ''}`}>
            <Timeline>
              {experienceData.map((item) => (
                <TimelineItem key={item.title} logo={item.logo} alt={`${item.company} logo`}>
                  <h4 className="font-heading text-xl text-text-primary mb-1">{item.title}</h4>
                  <p className="font-body text-sm text-text-muted mb-4">{item.company} | {item.date}</p>
                  <ul className="list-none pl-0">
                    {item.details.map((d, i) => (
                      <li
                        key={i}
                        className="font-body text-text-secondary mb-2.5 leading-relaxed relative pl-5 before:content-['•'] before:absolute before:left-0 before:text-brand before:text-xl before:leading-none"
                      >
                        {d}
                      </li>
                    ))}
                  </ul>
                </TimelineItem>
              ))}
            </Timeline>
          </div>

          {/* Education Panel */}
          <div className={`tab-panel ${activeTab === 'education' ? 'tab-panel-active' : ''}`}>
            <Timeline>
              {educationData.map((item) => (
                <TimelineItem key={item.title} logo={item.logo} alt={`${item.institution} logo`}>
                  <h4 className="font-heading text-xl text-text-primary mb-1">{item.title}</h4>
                  <p className="font-body text-sm text-text-muted">{item.institution} | {item.date}</p>
                </TimelineItem>
              ))}
            </Timeline>
          </div>
        </div>
      </div>
    </section>
  );
};

/* ---- Sub-components ---- */

const Timeline = ({ children }) => (
  <div className="relative w-full pl-12 text-left max-sm:pl-5 before:content-[''] before:absolute before:left-[19px] before:top-2.5 before:bottom-2.5 before:w-0.5 before:bg-white/15 max-sm:before:left-3.5">
    {children}
  </div>
);

const TimelineItem = ({ logo, alt, children }) => (
  <div className="relative mb-10 pl-5 last:mb-0 max-sm:pl-6">
    {/* Icon circle */}
    <div className="absolute -left-[51px] top-0 w-[42px] h-[42px] bg-white border-2 border-white/20 rounded-full z-2 p-1 overflow-hidden flex justify-center items-center max-sm:w-8 max-sm:h-8 max-sm:-left-[26px]">
      <img src={logo} alt={alt} className="w-full h-full object-cover rounded-full" />
    </div>
    {children}
  </div>
);

export default Journey;
