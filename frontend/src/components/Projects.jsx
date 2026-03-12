import React from 'react';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

const ProjectImage = ({ images, title }) => {
  const [currentImage, setCurrentImage] = React.useState(0);

  React.useEffect(() => {
    if (images.length <= 1) return;
    const timer = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 4000);
    return () => clearInterval(timer);
  }, [images]);

  return (
    <div className="relative mb-6 overflow-hidden rounded-xl aspect-video border border-slate-700/50 group-hover:border-cyan-500/30 transition-colors">
      {images.map((img, idx) => (
        <img
          key={idx}
          src={img}
          alt={`${title} - ${idx + 1}`}
          className={`absolute inset-0 w-full h-full object-cover transform scale-105 group-hover:scale-110 transition-all duration-1000 ${
            idx === currentImage ? 'opacity-100' : 'opacity-0'
          }`}
        />
      ))}
      <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent opacity-60"></div>
      
      {/* Slider Indicators */}
      {images.length > 1 && (
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-1.5 z-20">
          {images.map((_, idx) => (
            <div
              key={idx}
              className={`h-1 rounded-full transition-all duration-300 ${
                idx === currentImage ? 'w-4 bg-cyan-400' : 'w-1.5 bg-white/30'
              }`}
            />
          ))}
        </div>
      )}
    </div>
  );
};

const Projects = () => {
  const [mousePos, setMousePos] = React.useState({ x: 0, y: 0 });
  
  const handleMouseMove = (e, index) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    setMousePos({ x, y });
    card.style.setProperty('--mouse-x', `${x}px`);
    card.style.setProperty('--mouse-y', `${y}px`);
  };

  const projects = [
    {
      title: 'SRIC School Website',
      period: 'Oct 2025 - Dec 2025',
      description: [
        'Formulated and launched the official MERN-based website for SitaRam Inter College with responsive UI/UX, enhancing digital presence and improving administrative efficiency by 45%',
        'Engineered a full-stack MERN application using React reusable components and RESTful APIs to manage online admissions, inquiries, and fees, reducing manual work by 60%',
        'Architected a secure Admin Dashboard with JWT-based authentication and RBAC, minimizing unauthorized access by 90%',
        'Optimized MongoDB schemas with Atlas, delivering 35% improvement in query performance'
      ],
      tech: ['MongoDB', 'Express.js', 'React', 'Node.js', 'Tailwind', 'REST APIs'],
      github: 'https://github.com/ankitgithub12/Sitaram-Inter-College',
      live: 'https://sric-fdq2.onrender.com/',
      gradient: 'from-cyan-500 to-blue-500',
      images: ['/Home1.png', '/Home2.png','/admin1.png']
    },
    {
      title: 'SlotSwap – Peer-to-Peer Scheduling App',
      period: 'Oct 2025',
      description: [
        'Developed a full-stack MERN-based timeslot swapping platform with secure workflows, resulting in 50% improvement in scheduling efficiency',
        'Implemented real-time notifications using Socket.io, driving 40% increase in user engagement',
        'Deployed on Render with MongoDB Atlas and JWT authentication, maintaining 90% uptime reliability',
        'Developed responsive interface using React Hooks and Context API, improving usability by 45%'
      ],
      tech: ['React', 'Node.js', 'Express.js', 'MongoDB', 'Socket.io', 'JWT'],
      github: 'https://github.com/ankitgithub12/SlotSwapper',
      live: 'https://slotswapper-frontend-rtry.onrender.com/',
      gradient: 'from-indigo-500 to-purple-500',
      images: ['/slotswap1.png','/slotswap2.png','/slotswap3.png']
    }
  ];

  return (
    <section id="projects" className="section-container relative">
      <div className="absolute top-1/2 left-0 w-72 h-72 bg-indigo-500/10 rounded-full blur-[100px] pointer-events-none mix-blend-screen"></div>

      <div className="text-center mb-16 relative">
        <h2 className="section-title">Featured Projects</h2>
        <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-indigo-500 mx-auto rounded-full mt-[-2rem]"></div>
      </div>

      <div className="grid grid-cols-1 xl:grid-cols-2 gap-10">
        {projects.map((project, index) => (
          <div 
            key={index} 
            className="card group relative overflow-hidden"
            onMouseMove={(e) => handleMouseMove(e, index)}
          >
            {/* Spotlight Effect */}
            <div 
              className="absolute inset-0 z-0 pointer-events-none transition-opacity duration-300 opacity-0 group-hover:opacity-100"
              style={{
                background: `radial-gradient(600px circle at var(--mouse-x) var(--mouse-y), rgba(6, 182, 212, 0.15), transparent 40%)`
              }}
            ></div>

            <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500 rounded-2xl`}></div>

            <div className="relative z-10 h-full flex flex-col">
              <ProjectImage images={project.images} title={project.title} />

              <div className="flex flex-col sm:flex-row justify-between items-start mb-6 gap-2">
                <h3 className="text-2xl font-bold text-white group-hover:text-cyan-400 transition-colors duration-300">
                  {project.title}
                </h3>
                <span className="px-3 py-1 bg-slate-800 text-cyan-400 rounded-full text-xs font-semibold whitespace-nowrap border border-slate-700">
                  {project.period}
                </span>
              </div>

              <ul className="mb-8 space-y-3 flex-grow">
                {project.description.map((item, idx) => (
                  <li key={idx} className="flex items-start text-slate-400">
                    <span className="text-cyan-500 mr-3 mt-1 text-lg leading-none">&bull;</span>
                    <span className="text-sm leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-auto">
                <div className="flex flex-wrap gap-2 mb-8">
                  {project.tech.map((tech, idx) => (
                    <span key={idx} className="bg-slate-800/80 text-slate-300 border border-slate-700/50 px-3 py-1.5 rounded-lg text-xs font-medium backdrop-blur-sm">
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex space-x-4 pt-4 border-t border-slate-700/50">
                  <a href={project.github} target="_blank" rel="noopener noreferrer"
                    className="flex items-center text-slate-300 hover:text-cyan-400 transition-colors duration-300 font-medium text-sm">
                    <FaGithub className="mr-2 text-lg" /> Source Code
                  </a>
                  <a href={project.live} target="_blank" rel="noopener noreferrer"
                    className="flex items-center text-slate-300 hover:text-indigo-400 transition-colors duration-300 font-medium text-sm">
                    <FaExternalLinkAlt className="mr-2 text-lg" /> Live Demo
                  </a>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;