import React from 'react';
import {
  FaBriefcase, FaCalendarAlt, FaMapMarkerAlt, FaAward,
  FaExternalLinkAlt, FaCheckCircle, FaStar, FaUsers, FaCodeBranch,
  FaHandshake, FaLaptopCode, FaGlobe
} from 'react-icons/fa';

const Experience = () => {
  const experiences = [
    {
      company: "FREELANCE DEVELOPER",
      role: "Freelance Full Stack Developer",
      period: "July 2025 - Present",
      location: "Remote",
      type: "Self-Employed / Freelance",
      badgeColor: "bg-brand-50 text-brand-700 border-brand-200",
      technologies: ["React.js", "Node.js", "MongoDB", "Express.js", "Tailwind CSS", "REST APIs", "JWT"],
      projects: [
        {
          title: "Bizreels Platform (bizreels.in)",
          description: "Engineering and scaling the Bizreels platform (bizreels.in), building responsive, high-performance web interfaces and robust backend APIs:",
          live: "https://bizreels.in",
          github: null,
          highlights: [
            "Designing and developing core features for bizreels.in, ensuring modern, mobile-first responsive user experience",
            "Architecting scalable RESTful APIs with Node.js and Express.js, implementing secure authentication and state management",
            "Optimizing MongoDB database schemas and queries for fast content delivery and minimal latency",
            "Managing deployment, cloud hosting, domain integration, and ongoing continuous feature rollouts"
          ]
        }
      ],
      responsibilities: [
        "Translating product specifications into production-ready full-stack web applications",
        "Implementing responsive and accessible interfaces with React.js and modern CSS frameworks",
        "Managing end-to-end cloud deployment, SSL, and domain hosting on platforms like Render and Vercel",
        "Providing ongoing technical consultation, code optimizations, and bug resolution"
      ],
      achievements: [
        "Successfully launched and actively maintaining production deployments on bizreels.in",
        "Delivered custom web applications with 100% on-time milestone completion and positive client feedback"
      ],
      learningImpact: "Working independently as a freelance developer on production platforms like bizreels.in has accelerated my full-cycle engineering skills, architectural decision-making, and client communication—delivering reliable web applications under real-world requirements."
    },
    {
      company: "EMOTE TECHNOLOGY",
      role: "Full Stack Developer Intern",
      period: "Feb 2026 - June 2026",
      location: "Remote",
      type: "Performance-based Internship",
      badgeColor: "bg-emerald-50 text-emerald-700 border-emerald-200",
      technologies: ["MongoDB", "Express.js", "React.js", "Node.js", "Redux", "Tailwind CSS", "JWT", "REST APIs"],
      projects: [
        {
          title: "Full Stack Development Project",
          description: "Designing and developing a comprehensive Job Portal Platform and integrated Company Operations Dashboard",
          live: "https://edu.emotetechnology.com/",
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
        "Actively contributed to both Job Portal and Company Dashboard throughout the internship"
      ],
      learningImpact: "Gained comprehensive hands-on experience in full-stack development using the MERN stack at EMOTE TECHNOLOGY. Working on the Job Portal and Company Dashboard projects enhanced my skills in building scalable web applications, implementing authentication systems, and creating intuitive user interfaces."
    }
  ];

  return (
    <section id="experience" className="space-y-8">
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
        <div>
          <span className="section-label">Career Pathway</span>
          <h2 className="section-title flex items-center gap-2">
            <FaBriefcase className="text-brand-600 text-2xl" /> Work Experience
          </h2>
        </div>
        <span className="px-3 py-1 bg-brand-50 text-brand-700 text-xs font-semibold rounded-full border border-brand-200 self-start sm:self-auto font-mono">
          2 Roles
        </span>
      </div>

      <div className="space-y-8">
        {experiences.map((exp, expIndex) => (
          <div
            key={expIndex}
            className="glass-card rounded-3xl p-6 sm:p-8 border border-slate-200/90 shadow-sm relative overflow-hidden space-y-6"
          >
            {/* Header */}
            <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 border-b border-slate-200 pb-6">
              <div className="flex items-start gap-4">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-tr from-brand-600 to-indigo-500 flex items-center justify-center text-white text-2xl shadow-md shadow-brand-500/20 shrink-0">
                  {expIndex === 0 ? <FaHandshake /> : <FaBriefcase />}
                </div>
                <div>
                  <div className="flex items-center gap-3 flex-wrap">
                    <h3 className="text-xl font-bold text-slate-900">{exp.company}</h3>
                    <span className="px-2.5 py-0.5 rounded-full text-xs font-semibold bg-slate-100 text-slate-700 border border-slate-200">
                      {exp.type}
                    </span>
                  </div>
                  <p className="text-brand-600 font-semibold text-sm mt-1 flex items-center gap-1.5">
                    <FaStar className="text-xs text-brand-500" />
                    {exp.role}
                  </p>
                  <div className="flex items-center gap-4 text-xs font-mono text-slate-500 mt-2 flex-wrap">
                    <span className="flex items-center gap-1">
                      <FaCalendarAlt className="text-brand-500" /> {exp.period}
                    </span>
                    <span className="flex items-center gap-1">
                      <FaMapMarkerAlt className="text-indigo-500" /> {exp.location}
                    </span>
                  </div>
                </div>
              </div>

              {/* Tech Stack Pills */}
              <div className="flex flex-wrap gap-1.5 self-start">
                {exp.technologies.map((tech, idx) => (
                  <span
                    key={idx}
                    className="px-2.5 py-1 text-xs font-mono bg-slate-100 text-slate-700 rounded-md border border-slate-200/60"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Key Projects */}
            <div>
              <h4 className="text-sm font-bold uppercase tracking-wider text-slate-800 mb-4 flex items-center gap-2">
                <FaLaptopCode className="text-brand-600" /> Key Projects
              </h4>
              <div className="space-y-4">
                {exp.projects.map((project, idx) => (
                  <div
                    key={idx}
                    className="p-5 rounded-2xl bg-slate-50/70 border border-slate-200/80 space-y-3"
                  >
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <h5 className="font-bold text-slate-900 text-base">{project.title}</h5>
                        <p className="text-slate-600 text-sm mt-1">{project.description}</p>
                      </div>
                      <div className="flex items-center gap-2 shrink-0">
                        {project.live && (
                          <a
                            href={project.live}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-2 rounded-lg bg-white border border-slate-200 text-brand-600 hover:text-brand-700 shadow-sm text-xs flex items-center gap-1.5 font-semibold"
                            title="Visit Website"
                          >
                            <FaGlobe className="text-[11px]" />
                            <span>Visit Site</span>
                            <FaExternalLinkAlt className="text-[9px]" />
                          </a>
                        )}
                        {project.github && (
                          <a
                            href={project.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-2 rounded-lg bg-white border border-slate-200 text-slate-700 hover:text-slate-900 shadow-sm text-xs flex items-center gap-1 font-semibold"
                            title="Source Code"
                          >
                            <FaCodeBranch className="text-[10px]" />
                            <span>Code</span>
                          </a>
                        )}
                      </div>
                    </div>

                    <ul className="space-y-2 pt-2 border-t border-slate-200/60">
                      {project.highlights.map((highlight, hIdx) => (
                        <li key={hIdx} className="flex items-start text-xs sm:text-sm text-slate-600 gap-2">
                          <FaCheckCircle className="text-emerald-500 mt-0.5 shrink-0 text-xs" />
                          <span>{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>

            {/* Key Responsibilities */}
            <div>
              <h4 className="text-sm font-bold uppercase tracking-wider text-slate-800 mb-3 flex items-center gap-2">
                <FaUsers className="text-brand-600" /> Key Responsibilities
              </h4>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {exp.responsibilities.map((resp, idx) => (
                  <li key={idx} className="flex items-start gap-2 p-2.5 rounded-xl bg-white border border-slate-100 text-xs sm:text-sm text-slate-600">
                    <span className="w-1.5 h-1.5 rounded-full bg-brand-500 mt-2 shrink-0"></span>
                    <span>{resp}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Achievements */}
            <div className="p-4 sm:p-5 rounded-2xl bg-indigo-50/50 border border-indigo-100/80 space-y-3">
              <h4 className="text-xs font-bold uppercase tracking-wider text-indigo-900 flex items-center gap-2">
                <FaAward className="text-amber-500" /> Achievements
              </h4>
              <div className="space-y-2">
                {exp.achievements.map((ach, idx) => (
                  <div key={idx} className="flex items-center gap-2 text-xs sm:text-sm text-slate-700 bg-white/80 p-2.5 rounded-xl border border-indigo-100/60">
                    <FaStar className="text-amber-400 text-xs shrink-0" />
                    <span>{ach}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Learning & Impact */}
            <div className="p-4 sm:p-5 rounded-2xl bg-slate-50 border border-slate-200/80">
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
                Learning & Impact
              </h4>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                {exp.learningImpact}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
