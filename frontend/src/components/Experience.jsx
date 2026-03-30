// Experience.jsx
import React from 'react';
import {
  FaBriefcase, FaCalendarAlt, FaMapMarkerAlt, FaCode, FaAward,
  FaExternalLinkAlt, FaCheckCircle, FaStar, FaUsers, FaCodeBranch,
  FaTh
} from 'react-icons/fa';

const Experience = () => {
  const experience = {
    company: "EMOTE TECHNOLOGY",
    role: "Full Stack Developer Intern",
    period: "Feb 2026 - Present",
    duration: "Ongoing",
    location: "Remote",
    type: "Performance-based Internship",
    technologies: ["MongoDB", "Express.js", "React.js", "Node.js", "Redux", "Tailwind CSS", "JWT", "REST APIs"],
    projects: [
      {
        title: "Full Stack Development Project",
        description: "Designing and developing a comprehensive Job Portal Platform and integrated Company Operations Dashboard",
        live: "https://emotetechnology.vercel.app/",
        github: "https://github.com/rahul7697762/EmoteTechnology",
        highlights: [
          "Built responsive frontend with React.js and Tailwind CSS for seamless user experience across job seeker and recruiter modules",
          "Implemented JWT authentication and RBAC for secure candidate and recruiter workflows",
          "Engineered job listing, application tracking, and an intuitive applicant tracking system (ATS)",
          "Developed interactive analytics dashboard using Recharts for visualizing hiring trends and job performance metrics",
          "Integrated real-time notifications for application status updates"
        ]
      }
    ],
    responsibilities: [
      "Designed and implemented RESTful APIs using Node.js and Express.js for seamless data flow",
      "Developed responsive UI components with React.js and state management using Redux",
      "Integrated MongoDB for efficient data storage and retrieval",
      "Collaborated with team members in code reviews and technical discussions",
      "Documented API endpoints and maintained technical documentation",
      "Optimized application performance and implemented best practices"
    ],
    achievements: [
      "Implemented efficient database schemas improving query performance by 30%",
      "Received positive feedback from supervisor for code quality and problem-solving skills",
      "Actively contributing to both projects simultaneously since Feb 2026"
    ]
  };

  return (
    <section id="experience" className="section-container relative">
      {/* Decorative glows */}
      <div className="absolute left-1/4 top-0 w-96 h-96 bg-cyan-500/10 rounded-full blur-[120px] pointer-events-none mix-blend-screen"></div>
      <div className="absolute right-0 bottom-1/4 w-80 h-80 bg-indigo-500/10 rounded-full blur-[120px] pointer-events-none mix-blend-screen"></div>

      {/* Section Title */}
      <div className="text-center mb-16 relative">
        <h2 className="section-title">
          <FaBriefcase className="inline-block mr-3 text-cyan-400 mb-1" />
          Work Experience
        </h2>
        <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-indigo-500 mx-auto rounded-full mt-[-2rem]"></div>
      </div>

      <div className="max-w-5xl mx-auto">
        {/* Main Card */}
        <div className="card group hover:-translate-y-2 transition-all duration-500">
          <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-indigo-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"></div>

          <div className="relative z-10">
            {/* Company Header */}
            <div className="flex flex-col md:flex-row md:items-center md:justify-between pb-6 mb-6 border-b border-slate-700/50">
              <div className="flex items-center space-x-4 mb-4 md:mb-0">
                <div className="w-14 h-14 rounded-xl flex items-center justify-center bg-gradient-to-br from-cyan-500 to-indigo-600 shadow-lg shadow-cyan-500/25">
                  <FaBriefcase className="text-white text-2xl" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-indigo-400">
                    {experience.company}
                  </h3>
                  <p className="text-slate-400 flex items-center mt-1 text-sm">
                    <FaStar className="w-3 h-3 mr-1.5 text-cyan-400" />
                    {experience.role}
                  </p>
                </div>
              </div>
              <div className="flex flex-wrap gap-3">
                <span className="flex items-center bg-slate-900/60 text-slate-300 px-4 py-2 rounded-xl text-sm border border-slate-700/50">
                  <FaCalendarAlt className="mr-2 text-cyan-400" />
                  {experience.period}
                </span>
                <span className="flex items-center bg-slate-900/60 text-slate-300 px-4 py-2 rounded-xl text-sm border border-slate-700/50">
                  <FaMapMarkerAlt className="mr-2 text-indigo-400" />
                  {experience.location}
                </span>
              </div>
            </div>

            {/* Badges */}
            <div className="flex flex-wrap gap-3 mb-8">
              <span className="bg-cyan-500/10 text-cyan-300 border border-cyan-500/30 px-4 py-1.5 rounded-full text-sm font-medium">
                {experience.duration}
              </span>
              <span className="bg-indigo-500/10 text-indigo-300 border border-indigo-500/30 px-4 py-1.5 rounded-full text-sm font-medium">
                {experience.type}
              </span>
            </div>

            {/* Technologies */}
            <div className="mb-8">
              <h4 className="text-lg font-semibold text-white mb-4 flex items-center">
                <FaCode className="mr-2 text-cyan-400" />
                Technologies Used
              </h4>
              <div className="flex flex-wrap gap-2">
                {experience.technologies.map((tech, index) => (
                  <span
                    key={index}
                    className="bg-slate-900/60 text-slate-300 border border-slate-700/50 px-3 py-1 rounded-full text-sm font-medium hover:border-cyan-500/50 hover:text-cyan-300 transition-all duration-200"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Projects */}
            <div className="mb-8">
              <h4 className="text-lg font-semibold text-white mb-6 flex items-center">
                <FaTh className="mr-2 text-indigo-400" />
                Key Projects
              </h4>
              <div className="flex justify-center">
                {experience.projects.map((project, index) => (
                  <div
                    key={index}
                    className="max-w-2xl w-full bg-slate-900/50 border border-slate-700/50 rounded-xl p-6 hover:border-cyan-500/30 hover:shadow-lg hover:shadow-cyan-500/10 transition-all duration-300"
                  >
                    <div className="flex items-start justify-between mb-3">
                      <h5 className="font-semibold text-white text-base">{project.title}</h5>
                      <a href={project.live} target="_blank" rel="noopener noreferrer">
                        <FaExternalLinkAlt className="text-cyan-400 cursor-pointer hover:text-cyan-300 flex-shrink-0 ml-2 mt-1" />
                      </a>
                    </div>
                    <p className="text-slate-400 text-sm mb-4 leading-relaxed">{project.description}</p>
                    <ul className="space-y-2">
                      {project.highlights.map((highlight, idx) => (
                        <li key={idx} className="flex items-start text-sm text-slate-300">
                          <FaCheckCircle className="text-emerald-400 mr-2 flex-shrink-0 mt-0.5" />
                          <span>{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>

            {/* Responsibilities */}
            <div className="mb-8">
              <h4 className="text-lg font-semibold text-white mb-4 flex items-center">
                <FaUsers className="mr-2 text-purple-400" />
                Key Responsibilities
              </h4>
              <ul className="grid md:grid-cols-2 gap-3">
                {experience.responsibilities.map((responsibility, index) => (
                  <li key={index} className="flex items-start text-slate-300">
                    <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span className="text-sm leading-relaxed">{responsibility}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Achievements */}
            <div className="bg-gradient-to-br from-slate-900/60 to-indigo-900/20 border border-indigo-500/20 rounded-xl p-6 mb-6">
              <h4 className="text-lg font-semibold text-white mb-4 flex items-center">
                <FaAward className="mr-2 text-yellow-400" />
                Achievements
              </h4>
              <div className="space-y-3">
                {experience.achievements.map((achievement, index) => (
                  <div key={index} className="flex items-center bg-slate-900/50 border border-slate-700/50 rounded-lg px-4 py-3">
                    <FaStar className="text-yellow-400 mr-3 flex-shrink-0" />
                    <span className="text-sm text-slate-200">{achievement}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* GitHub Links */}
            <div className="flex flex-wrap items-center justify-between bg-slate-900/40 rounded-xl px-6 py-4 border border-slate-700/50">
              <div className="flex items-center space-x-3">
                <FaCodeBranch className="text-slate-400" />
                <span className="text-sm text-slate-400">Projects available on GitHub:</span>
              </div>
              <div className="flex gap-4 mt-2 sm:mt-0">
                <a
                  href="https://github.com/rahul7697762/EmoteTechnology"
                  className="text-cyan-400 hover:text-cyan-300 text-sm font-medium flex items-center transition-colors duration-200"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Source Code <FaExternalLinkAlt className="ml-1 text-xs" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Learning Impact */}
        <div className="card mt-8 group hover:-translate-y-2 transition-all duration-500">
          <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-pink-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"></div>
          <div className="relative z-10">
            <h4 className="text-xl font-semibold text-white mb-4">Learning & Impact</h4>
            <p className="text-slate-400 leading-relaxed text-sm">
              I am currently interning at EMOTE TECHNOLOGY, gaining hands-on experience in full-stack development
              using the MERN stack. Working on the Job Portal and Company Dashboard projects is enhancing my skills
              in building scalable web applications, implementing authentication systems, and creating intuitive
              user interfaces. This experience is strengthening my problem-solving abilities and teaching me best
              practices in code organization and documentation.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
