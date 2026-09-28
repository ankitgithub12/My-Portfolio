import React from 'react';
import {
  FaBriefcase, FaCalendarAlt, FaMapMarkerAlt, FaAward,
  FaExternalLinkAlt, FaCheckCircle, FaStar, FaCodeBranch,
  FaGlobe, FaRocket, FaLaptopCode
} from 'react-icons/fa';

const Experience = () => {
  const experiences = [
    {
      company: "FREELANCE DEVELOPER",
      role: "Founding Full-Stack Developer",
      period: "July 2025 - Present",
      location: "Remote",
      type: "Contract / SaaS Marketplace",
      badgeColor: "bg-brand-50 text-brand-700 border-brand-200/80",
      project: {
        title: "BizReels — Hyperlocal Video-Commerce & Multi-Vendor Marketplace",
        tagline: "Next-generation video-first shopping feed uniting local merchants, creators, and consumers at bizreels.in",
        live: "https://bizreels.in",
        github: null
      },
      technologies: [
        "React 18",
        "Node.js",
        "Express.js",
        "MongoDB",
        "Redis",
        "Socket.IO",
        "Redux Toolkit",
        "Tailwind CSS",
        "Razorpay",
        "Google Maps Platform"
      ],
      points: [
        "Engineered bizreels.in from scratch, building a production-grade hyperlocal social-commerce ecosystem that transforms static directory listings into an interactive video shopping feed.",
        "Built fluid TikTok-style vertical video reels player with tap-to-buy overlays, dynamic engagement metrics (likes, saves, shares), sound controls, and cloud video transcoding optimization.",
        "Implemented sub-second multi-token smart search with weighted scoring and 2 km to 50 km proximity filtering via Google Maps Geocoding & MongoDB Geospatial ($near / $geoWithin) queries.",
        "Designed resilient dual-channel lead delivery: real-time Socket.IO WebSockets with automatic WhatsApp API & click-to-call vendor dispatch.",
        "Architected 3-in-1 unified account switching (Customer, Merchant, Creator), JWT RBAC middleware, and Razorpay recurring subscription billing tiers."
      ],
      milestones: [
        "🚀 Live Production at bizreels.in",
        "⚡ Sub-Second Geospatial Search",
        "💬 Automated WhatsApp Lead Dispatch"
      ]
    },
    {
      company: "EMOTE TECHNOLOGY",
      role: "Full Stack Developer Intern",
      period: "Feb 2026 - June 2026",
      location: "Remote",
      type: "Performance-Based Internship",
      badgeColor: "bg-emerald-50 text-emerald-700 border-emerald-200/80",
      project: {
        title: "Job Portal Platform & Company Operations Dashboard",
        tagline: "End-to-end recruitment management and business analytics suite deployed on Render",
        live: "https://edu.emotetechnology.com/",
        github: "https://github.com/rahul7697762/EmoteTechnology"
      },
      technologies: [
        "React.js",
        "Node.js",
        "Express.js",
        "MongoDB Atlas",
        "Redux Toolkit",
        "Tailwind CSS",
        "JWT",
        "Recharts"
      ],
      points: [
        "Developed responsive frontend modules with React.js and Tailwind CSS for seamless user experience across job seeker and recruiter dashboards.",
        "Engineered an intuitive Applicant Tracking System (ATS), job posting management, and application status workflows.",
        "Architected secure authentication workflows and Role-Based Access Control (RBAC) using JWT, safeguarding sensitive applicant data.",
        "Designed and implemented RESTful APIs using Node.js/Express, optimizing MongoDB Atlas schemas to improve query performance by 30%.",
        "Built interactive analytics visualization with Recharts for hiring metrics and integrated real-time notifications for status updates."
      ],
      milestones: [
        "📈 30% DB Query Optimization",
        "🔒 Full JWT RBAC & ATS Workflow",
        "⚡ Real-Time Notification Pipeline"
      ]
    }
  ];

  return (
    <section id="experience" className="space-y-8 relative z-10">
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
        <div>
          <span className="section-label">Career Pathway</span>
          <h2 className="section-title flex items-center gap-2">
            <FaBriefcase className="text-brand-600 text-2xl" /> Work Experience
          </h2>
        </div>
        <span className="glass-pill px-3.5 py-1 text-brand-700 text-xs font-bold rounded-full border border-brand-200/80 self-start sm:self-auto font-mono shadow-xs">
          2 Key Roles
        </span>
      </div>

      <div className="space-y-8">
        {experiences.map((exp, expIndex) => (
          <div
            key={expIndex}
            className="glass-card-premium rounded-3xl p-6 sm:p-9 border border-white/90 shadow-xl relative overflow-hidden space-y-6 group hover:shadow-2xl hover:shadow-slate-300/40 transition-all duration-300"
          >
            {/* Top Specular Line */}
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-brand-500 to-transparent opacity-75"></div>

            {/* Role Header */}
            <div className="flex flex-col md:flex-row md:items-start justify-between gap-5 border-b border-slate-200/70 pb-6">
              <div className="flex items-start gap-4">
                <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-gradient-to-tr from-brand-600 via-indigo-600 to-cyan-500 flex items-center justify-center text-white text-2xl shadow-lg shadow-brand-500/25 shrink-0 transition-transform duration-300 group-hover:scale-105">
                  {expIndex === 0 ? <FaRocket /> : <FaBriefcase />}
                </div>
                <div>
                  <div className="flex items-center gap-2.5 flex-wrap">
                    <h3 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">{exp.company}</h3>
                    <span className={`px-3 py-0.5 rounded-full text-xs font-bold font-mono border shadow-xs ${exp.badgeColor}`}>
                      {exp.type}
                    </span>
                  </div>
                  <p className="text-brand-600 font-bold text-sm sm:text-base mt-1 flex items-center gap-1.5">
                    <FaStar className="text-xs text-amber-500" />
                    <span>{exp.role}</span>
                  </p>
                  <div className="flex items-center gap-3 text-xs font-mono text-slate-500 mt-2 flex-wrap">
                    <span className="flex items-center gap-1.5 bg-white/70 px-2.5 py-1 rounded-md border border-slate-200/60 shadow-xs">
                      <FaCalendarAlt className="text-brand-500" /> {exp.period}
                    </span>
                    <span className="flex items-center gap-1.5 bg-white/70 px-2.5 py-1 rounded-md border border-slate-200/60 shadow-xs">
                      <FaMapMarkerAlt className="text-indigo-500" /> {exp.location}
                    </span>
                  </div>
                </div>
              </div>

              {/* Tech Stack Pills */}
              <div className="flex flex-wrap gap-1.5 self-start max-w-md">
                {exp.technologies.map((tech, idx) => (
                  <span
                    key={idx}
                    className="px-2.5 py-1 text-xs font-mono font-medium bg-white/80 text-slate-700 rounded-lg border border-slate-200/70 shadow-xs hover:border-brand-300 transition-colors"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Featured Project Details */}
            <div className="p-5 sm:p-6 rounded-2xl glass-card border border-white/90 shadow-md space-y-3.5">
              <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-3">
                <div className="flex-1">
                  <div className="flex items-center gap-2 text-xs font-bold font-mono text-slate-500 uppercase tracking-wider mb-1">
                    <FaLaptopCode className="text-brand-600" /> Core Product & Platform
                  </div>
                  <h4 className="font-extrabold text-slate-900 text-base sm:text-lg">
                    {exp.project.title}
                  </h4>
                  <p className="text-slate-600 text-xs sm:text-sm mt-1 leading-relaxed">
                    {exp.project.tagline}
                  </p>
                </div>
                <div className="flex items-center gap-2.5 shrink-0 self-start pt-1 sm:pt-0">
                  {exp.project.live && (
                    <a
                      href={exp.project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="shimmer-hover px-3.5 py-2 rounded-xl bg-brand-600 hover:bg-brand-700 text-white shadow-md shadow-brand-500/25 text-xs flex items-center gap-1.5 font-bold transition-all"
                      title="Visit Live Platform"
                    >
                      <FaGlobe className="text-xs" />
                      <span>Live Site</span>
                      <FaExternalLinkAlt className="text-[10px]" />
                    </a>
                  )}
                  {exp.project.github && (
                    <a
                      href={exp.project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-3.5 py-2 rounded-xl bg-white border border-slate-200 text-slate-700 hover:text-slate-950 hover:border-slate-300 shadow-sm text-xs flex items-center gap-1.5 font-bold transition-all"
                      title="Source Code"
                    >
                      <FaCodeBranch className="text-xs" />
                      <span>Code</span>
                    </a>
                  )}
                </div>
              </div>
            </div>

            {/* Core Engineering Contributions */}
            <div className="space-y-3">
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-700 flex items-center gap-2 font-mono">
                <FaAward className="text-brand-600 text-sm" /> Key Contributions & Technical Deliverables
              </h4>
              <ul className="space-y-2.5">
                {exp.points.map((point, idx) => (
                  <li key={idx} className="flex items-start text-xs sm:text-sm text-slate-700 gap-2.5 p-3 rounded-xl bg-white/70 backdrop-blur-md border border-white/90 shadow-xs hover:border-brand-200 transition-colors">
                    <FaCheckCircle className="text-emerald-500 mt-1 shrink-0 text-xs" />
                    <span className="leading-relaxed">{point}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Milestones / Impact Strip */}
            <div className="flex flex-wrap gap-2.5 pt-2 border-t border-slate-200/60">
              {exp.milestones.map((milestone, idx) => (
                <span
                  key={idx}
                  className="px-3 py-1.5 rounded-xl bg-indigo-50/70 border border-indigo-100/90 text-indigo-900 text-xs font-bold font-mono shadow-xs"
                >
                  {milestone}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
