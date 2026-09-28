import React from 'react';
import {
  FaBriefcase, FaCalendarAlt, FaMapMarkerAlt, FaAward,
  FaExternalLinkAlt, FaCheckCircle, FaStar, FaUsers, FaCodeBranch,
  FaHandshake, FaLaptopCode, FaGlobe, FaRocket, FaShieldAlt
} from 'react-icons/fa';

const Experience = () => {
  const experiences = [
    {
      company: "FREELANCE DEVELOPER",
      role: "Full-Stack Architect & Lead Engineer",
      period: "July 2025 - Present",
      location: "Remote",
      type: "SaaS / Multi-Vendor Marketplace",
      badgeColor: "bg-brand-50 text-brand-700 border-brand-200",
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
      projects: [
        {
          title: "BizReels — Hyperlocal Video-Commerce & Multi-Vendor Marketplace Platform",
          tagline: "Next-generation short-form video marketplace uniting local merchants, content creators, and consumers with real-time leads, geo-discovery, and in-app checkout.",
          description: "Engineered BizReels (bizreels.in), an enterprise-grade hyperlocal social-commerce ecosystem that transforms traditional local business directory listings into an engaging, video-first shopping feed:",
          live: "https://bizreels.in",
          github: null,
          highlights: [
            "Video-First Shopping & Discovery: Built fluid TikTok-style reels player with product tags, tap-to-buy overlays, dynamic engagement metrics (likes, saves, shares), sound controls, and cloud video transcoding pipelines.",
            "Hyperlocal Search & Conjunction Engine: Developed multi-token smart search with weighted scoring and 2 km to 50 km proximity radius filtering via Google Maps Geocoding and MongoDB Geospatial ($near / $geoWithin) queries.",
            "3-in-1 Unified Role Architecture: Seamless role switching between Customer, Vendor (variant management, inventory, multi-tier pricing, GST invoices), and Creator (escrow-backed videographer hiring) under one account.",
            "Real-Time Lead Generation & Communications: Instant WhatsApp API & click-to-call lead dispatch to verified vendors, paired with live bidirectional Socket.IO messaging (read receipts, unread counter badges).",
            "Monetization & KYC Compliance: Integrated Razorpay recurring subscription tiers (Starter, Growth, Enterprise), wallet credit ledgers, and automated merchant verification workflows (PAN, Aadhaar OTP, GSTIN, and Bank KYC)."
          ]
        }
      ],
      responsibilities: [
        "Architected modular MVC + Service-Repository backend in Node.js & Express with high-throughput MongoDB subdocuments & Redis caching",
        "Engineered sub-second multi-attribute search breaking queries into concurrent tokens evaluated across titles, brands, variants, and custom specs",
        "Designed resilient dual-channel lead delivery: real-time Socket.IO WebSockets with automatic WhatsApp API & SMS fallback",
        "Implemented multi-role JWT authentication with role-scoped middleware (requireAuth, requireRole) and isolated profile sub-schemas",
        "Integrated Razorpay payment gateway for automated recurring subscription plans and digital wallet credits ledger",
        "Built centralized Super Admin Control Center for platform metrics, KYC audits, user role management, commission configuration, and audit logs"
      ],
      achievements: [
        "Sub-Second Search: Solved MongoDB single-regex bottlenecks with multi-token conjunction search and weighted scoring",
        "Resilient Lead Delivery: 100% notification delivery using dual-channel WebSockets push with automatic WhatsApp API fallback",
        "Live Production Platform: Successfully deployed and actively scaling the production platform at bizreels.in"
      ],
      learningImpact: "As Full-Stack Architect & Lead Engineer on BizReels (bizreels.in), designed and delivered an enterprise-grade social-commerce ecosystem from scratch. Tackling complex challenges in geospatial indexing, high-concurrency real-time messaging, and multi-role state persistence validated my ability to architect high-scale, production-ready SaaS marketplace platforms."
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
            className="glass-card-premium rounded-3xl p-6 sm:p-9 border border-white/90 shadow-xl relative overflow-hidden space-y-7 group hover:shadow-2xl hover:shadow-slate-300/40 transition-all duration-300"
          >
            {/* Top Specular Line */}
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-brand-500 to-transparent opacity-75"></div>

            {/* Header */}
            <div className="flex flex-col md:flex-row md:items-start justify-between gap-5 border-b border-slate-200/70 pb-6">
              <div className="flex items-start gap-4">
                <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-gradient-to-tr from-brand-600 via-indigo-600 to-cyan-500 flex items-center justify-center text-white text-2xl shadow-lg shadow-brand-500/25 shrink-0 transition-transform duration-300 group-hover:scale-105">
                  {expIndex === 0 ? <FaRocket /> : <FaBriefcase />}
                </div>
                <div>
                  <div className="flex items-center gap-2.5 flex-wrap">
                    <h3 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">{exp.company}</h3>
                    <span className="px-3 py-0.5 rounded-full text-xs font-bold bg-brand-50 text-brand-700 border border-brand-200/80 shadow-xs font-mono">
                      {exp.type}
                    </span>
                  </div>
                  <p className="text-brand-600 font-bold text-sm sm:text-base mt-1 flex items-center gap-1.5">
                    <FaStar className="text-xs text-amber-500" />
                    <span>{exp.role}</span>
                  </p>
                  <div className="flex items-center gap-4 text-xs font-mono text-slate-500 mt-2 flex-wrap">
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

            {/* Key Projects */}
            <div>
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-700 mb-4 flex items-center gap-2 font-mono">
                <FaLaptopCode className="text-brand-600 text-sm" /> Architecture & Key Projects
              </h4>
              <div className="space-y-4">
                {exp.projects.map((project, idx) => (
                  <div
                    key={idx}
                    className="p-5 sm:p-6 rounded-2xl glass-card border border-white/90 shadow-md space-y-4 hover:shadow-lg transition-all"
                  >
                    <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4">
                      <div className="flex-1">
                        <h5 className="font-extrabold text-slate-900 text-base sm:text-lg">{project.title}</h5>
                        {project.tagline && (
                          <p className="text-xs font-bold text-brand-600 mt-1 font-mono">{project.tagline}</p>
                        )}
                        <p className="text-slate-600 text-sm mt-1.5 leading-relaxed">{project.description}</p>
                      </div>
                      <div className="flex items-center gap-2.5 shrink-0 self-start">
                        {project.live && (
                          <a
                            href={project.live}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="shimmer-hover px-3.5 py-2 rounded-xl bg-brand-600 hover:bg-brand-700 text-white shadow-md shadow-brand-500/25 text-xs flex items-center gap-1.5 font-bold transition-all"
                            title="Visit Website"
                          >
                            <FaGlobe className="text-xs" />
                            <span>Visit Live</span>
                            <FaExternalLinkAlt className="text-[10px]" />
                          </a>
                        )}
                        {project.github && (
                          <a
                            href={project.github}
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

                    <ul className="space-y-2.5 pt-3 border-t border-slate-200/60">
                      {project.highlights.map((highlight, hIdx) => (
                        <li key={hIdx} className="flex items-start text-xs sm:text-sm text-slate-600 gap-2.5">
                          <FaCheckCircle className="text-emerald-500 mt-1 shrink-0 text-xs" />
                          <span className="leading-relaxed">{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>

            {/* Key Responsibilities */}
            <div>
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-700 mb-3.5 flex items-center gap-2 font-mono">
                <FaUsers className="text-brand-600 text-sm" /> Core Responsibilities
              </h4>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {exp.responsibilities.map((resp, idx) => (
                  <li key={idx} className="flex items-start gap-2.5 p-3 rounded-xl bg-white/75 backdrop-blur-md border border-white/90 text-xs sm:text-sm text-slate-700 shadow-xs hover:border-brand-200 transition-colors">
                    <span className="w-1.5 h-1.5 rounded-full bg-brand-500 mt-2 shrink-0"></span>
                    <span className="leading-relaxed">{resp}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Achievements */}
            <div className="p-5 rounded-2xl bg-indigo-50/60 backdrop-blur-md border border-indigo-100/90 space-y-3">
              <h4 className="text-xs font-bold uppercase tracking-wider text-indigo-900 flex items-center gap-2 font-mono">
                <FaAward className="text-amber-500 text-sm" /> Measurable Achievements & Technical Milestones
              </h4>
              <div className="space-y-2">
                {exp.achievements.map((ach, idx) => (
                  <div key={idx} className="flex items-center gap-2.5 text-xs sm:text-sm text-slate-700 bg-white/90 p-3 rounded-xl border border-indigo-100/70 shadow-xs">
                    <FaStar className="text-amber-400 text-xs shrink-0" />
                    <span className="font-medium">{ach}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Learning & Impact */}
            <div className="p-5 rounded-2xl glass-card border border-white/80">
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-700 mb-2 font-mono">
                Engineering Reflection & Impact
              </h4>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
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
