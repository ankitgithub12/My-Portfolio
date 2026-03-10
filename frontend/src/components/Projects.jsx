import React from 'react';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

const Projects = () => {
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
      gradient: 'from-cyan-500 to-blue-500'
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
      gradient: 'from-indigo-500 to-purple-500'
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
          <div key={index} className="card group relative">
            <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500 rounded-2xl`}></div>

            <div className="relative z-10 h-full flex flex-col">
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