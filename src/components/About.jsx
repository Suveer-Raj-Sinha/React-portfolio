import profilePic from '../assets/profile-pic.png';
import useScrollReveal from '../hooks/useScrollReveal';

const About = () => {
  const sectionRef = useScrollReveal();

  return (
    <section
      id="about"
      className="flex justify-center items-center flex-col w-full min-h-screen py-30 px-5 text-center"
    >
      <div
        ref={sectionRef}
        className="
          scroll-reveal max-w-[1100px] text-left
          bg-dark-700/55 border border-white/10 rounded-2xl backdrop-blur-[14px] p-12
          max-sm:p-6 max-sm:rounded-xl
        "
      >
        {/* Section Title */}
        <h2 className="font-heading text-[2.8rem] font-semibold text-white text-center mb-12 max-[820px]:text-[2.2rem]">
          About Me
        </h2>

        {/* Two-column layout */}
        <div className="flex items-start gap-10 max-[820px]:flex-col max-[820px]:items-center max-[820px]:text-center">

          {/* Profile Picture */}
          <div className="basis-[30%] min-w-[250px] max-[820px]:max-w-[300px] max-[820px]:mb-8">
            <img
              src={profilePic}
              alt="Suveer Raj Sinha"
              className="w-full h-auto rounded-2xl border-2 border-white/20 shadow-[0_10px_30px_rgba(0,0,0,0.4)]"
            />
          </div>

          {/* Bio & Skills */}
          <div className="basis-[70%] max-[820px]:text-left">
            <h3 className="font-heading text-[1.8rem] text-text-primary mb-5 max-[820px]:text-center">
              Full-Stack Developer &amp; Mobile Enthusiast
            </h3>

            <p className="font-body text-lg leading-[1.7] text-text-secondary mb-10">
              I am a Full-Stack Developer specializing in the MERN stack (MongoDB, Express.js, React.js, Node.js) with hands-on experience in building responsive and scalable web applications. I am skilled in creating modern user interfaces with React and integrating back-end APIs with Node.js and Express. Additionally, I am proficient in using Firebase for authentication and real-time databases and have a strong passion for cross-platform mobile development with Flutter.
            </p>

            {/* Skills Grid */}
            <div className="grid grid-cols-[repeat(auto-fit,minmax(200px,1fr))] gap-8">
              {[
                {
                  title: 'Frontend Development',
                  items: ['React.js', 'JavaScript (ES6+)', 'HTML5 & CSS3', 'Tailwind CSS'],
                },
                {
                  title: 'Backend & Databases',
                  items: ['Node.js', 'MongoDB', 'Firebase & Firestore', 'REST APIs', 'SQLite'],
                },
                {
                  title: 'Mobile & Additional',
                  items: ['Flutter & Dart', 'Kotlin & Java', 'Git & GitHub', 'Version Control'],
                },
              ].map((cat) => (
                <div key={cat.title}>
                  <h4 className="font-heading text-xl text-brand mb-4 pb-2 border-b border-brand/30">
                    {cat.title}
                  </h4>
                  <ul className="list-none p-0">
                    {cat.items.map((item) => (
                      <li
                        key={item}
                        className="font-body text-base text-text-secondary mb-2.5 relative pl-5 before:content-['▹'] before:absolute before:left-0 before:text-brand before:font-bold"
                      >
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
