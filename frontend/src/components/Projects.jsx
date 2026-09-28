import React from 'react';
import { FaGithub, FaExternalLinkAlt, FaCheckCircle, FaLaptopCode, FaGlobe } from 'react-icons/fa';

const ProjectImage = ({ images, title }) => {
  const [currentImage, setCurrentImage] = React.useState(0);

  React.useEffect(() => {
    if (!images || images.length <= 1) return;
    const timer = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 4000);
    return () => clearInterval(timer);
  }, [images]);

  return (
    <div className="bg-gradient-to-br from-slate-100 to-indigo-50/50 p-4 sm:p-5 border-b border-slate-200">
      <div className="w-full h-56 sm:h-64 rounded-xl bg-white border border-slate-200/90 shadow-sm overflow-hidden flex flex-col">
        {/* Browser Frame UI */}
        <div className="bg-slate-100 px-3 py-2 border-b border-slate-200 flex items-center justify-between shrink-0">
          <div className="flex items-center space-x-1.5">
            <span className="w-2.5 h-2.5 rounded-full bg-rose-400 inline-block"></span>
            <span className="w-2.5 h-2.5 rounded-full bg-amber-400 inline-block"></span>
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 inline-block"></span>
          </div>
          <span className="text-[11px] font-mono text-slate-500 bg-white px-3 py-0.5 rounded border border-slate-200 truncate max-w-[220px]">
            {title}
          </span>
          <span className="text-[11px] text-slate-400 font-mono">https://</span>
        </div>

        {/* Carousel Image or Branded Showcase */}
        <div className="flex-1 relative overflow-hidden bg-slate-900 flex items-center justify-center">
          {images && images.length > 0 ? (
            <>
              {images.map((img, idx) => (
                <img
                  key={idx}
                  src={img}
                  alt={`${title} screenshot ${idx + 1}`}
                  className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ${
                    idx === currentImage ? 'opacity-100' : 'opacity-0 pointer-events-none'
                  }`}
                />
              ))}

              {images.length > 1 && (
                <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5 z-20 bg-slate-900/40 backdrop-blur-sm px-2.5 py-1 rounded-full">
                  {images.map((_, idx) => (
                    <button
                      key={idx}
                      onClick={() => setCurrentImage(idx)}
                      className={`h-1.5 rounded-full transition-all duration-300 ${
                        idx === currentImage ? 'w-4 bg-white' : 'w-1.5 bg-white/50'
                      }`}
                      aria-label={`Go to image ${idx + 1}`}
                    />
                  ))}
                </div>
              )}
            </>
          ) : (
            <div className="p-6 text-center space-y-3 z-10 w-full">
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-tr from-brand-600 via-indigo-600 to-rose-500 flex items-center justify-center text-white text-2xl mx-auto shadow-lg shadow-brand-500/30">
                🚀
              </div>
              <div>
                <span className="text-white font-black text-lg block tracking-tight">BizReels</span>
                <span className="text-slate-300 text-xs font-mono">Hyperlocal Video Commerce & Marketplace</span>
              </div>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/20 border border-emerald-500/40 text-emerald-400 text-[11px] font-semibold">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping"></span>
                <span>Live at bizreels.in</span>
              </span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

const Projects = () => {
  const projects = [
    {
      title: 'BizReels — Video-Commerce & Multi-Vendor Marketplace',
      period: 'July 2025 - Present',
      badge: 'Flagship SaaS Marketplace',
      description: [
        'Engineered an enterprise-grade hyperlocal social-commerce ecosystem transforming traditional local business directory listings into an engaging, video-first shopping feed at bizreels.in',
        'Built fluid TikTok-style product reels feed with tap-to-buy overlays, dynamic engagement metrics (likes, saves, shares), sound controls, and cloud video transcoding optimization',
        'Developed sub-second multi-token smart search with weighted scoring and 2 km to 50 km proximity radius filtering via Google Maps Geocoding & MongoDB Geospatial ($near / $geoWithin) queries',
        'Architected 3-in-1 unified account switching (Customer, Merchant, Creator), automated WhatsApp/SMS lead dispatch, live Socket.IO chat, and Razorpay subscription billing'
      ],
      tech: ['React 18', 'Node.js', 'Express.js', 'MongoDB', 'Redis', 'Socket.IO', 'Razorpay', 'Google Maps'],
      github: null,
      live: 'https://bizreels.in',
      images: [],
      badgeColor: 'bg-rose-50 text-rose-700 border-rose-200'
    },
    {
      title: 'SRIC School Website',
      period: 'Oct 2025 - Dec 2025',
      badge: 'Full Stack MERN',
      description: [
        'Formulated and launched the official MERN-based website for SitaRam Inter College with responsive UI/UX, enhancing digital presence and improving administrative efficiency by 45%',
        'Engineered a full-stack MERN application using React reusable components and RESTful APIs to manage online admissions, inquiries, and fees, reducing manual work by 60%',
        'Architected a secure Admin Dashboard with JWT-based authentication and RBAC, minimizing unauthorized access by 90%',
        'Optimized MongoDB schemas with Atlas, delivering 35% improvement in query performance'
      ],
      tech: ['MongoDB', 'Express.js', 'React', 'Node.js', 'Tailwind', 'REST APIs'],
      github: 'https://github.com/ankitgithub12/Sitaram-Inter-College',
      live: 'https://sric-fdq2.onrender.com/',
      images: ['/Home1.png', '/Home2.png', '/admin1.png'],
      badgeColor: 'bg-indigo-50 text-indigo-700 border-indigo-200'
    },
    {
      title: 'SlotSwap – Peer-to-Peer Scheduling App',
      period: 'Oct 2025',
      badge: 'Real-Time Web App',
      description: [
        'Developed a full-stack MERN-based timeslot swapping platform with secure workflows, resulting in 50% improvement in scheduling efficiency',
        'Implemented real-time notifications using Socket.io, driving 40% increase in user engagement',
        'Deployed on Render with MongoDB Atlas and JWT authentication, maintaining 90% uptime reliability',
        'Developed responsive interface using React Hooks and Context API, improving usability by 45%'
      ],
      tech: ['React', 'Node.js', 'Express.js', 'MongoDB', 'Socket.io', 'JWT'],
      github: 'https://github.com/ankitgithub12/SlotSwapper',
      live: 'https://slotswapper-frontend-rtry.onrender.com/',
      images: ['/slotswap1.png', '/slotswap2.png', '/slotswap3.png'],
      badgeColor: 'bg-cyan-50 text-cyan-700 border-cyan-200'
    }
  ];

  return (
    <section id="projects" className="space-y-8">
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
        <div>
          <span className="section-label">Featured Work</span>
          <h2 className="section-title flex items-center gap-2">
            <FaLaptopCode className="text-brand-600 text-2xl" /> Featured Projects
          </h2>
        </div>
        <p className="text-sm text-slate-500 max-w-sm">
          Production-grade applications built with modern engineering best practices and deployed on cloud infrastructure.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {projects.map((project, index) => (
          <div
            key={index}
            className={`glass-card rounded-3xl overflow-hidden border border-slate-200/90 shadow-sm flex flex-col justify-between hover:border-brand-300 transition-all duration-300 group ${
              index === 0 ? 'lg:col-span-2' : ''
            }`}
          >
            <div>
              <ProjectImage images={project.images} title={project.title} />

              <div className="p-6 sm:p-7 space-y-4">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                  <h3 className="text-xl font-bold text-slate-900 group-hover:text-brand-600 transition-colors">
                    {project.title}
                  </h3>
                  <div className="flex items-center gap-2 flex-wrap">
                    <span className={`text-xs font-semibold px-2.5 py-0.5 rounded-full border ${project.badgeColor}`}>
                      {project.badge}
                    </span>
                    <span className="text-xs font-mono text-slate-400">
                      {project.period}
                    </span>
                  </div>
                </div>

                <ul className="space-y-2.5 pt-2">
                  {project.description.map((item, idx) => (
                    <li key={idx} className="flex items-start text-xs sm:text-sm text-slate-600 gap-2.5">
                      <FaCheckCircle className="text-brand-500 mt-1 shrink-0 text-xs" />
                      <span className="leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>

                {/* Tech Pills */}
                <div className="flex flex-wrap gap-1.5 pt-3 border-t border-slate-100">
                  {project.tech.map((tech, idx) => (
                    <span
                      key={idx}
                      className="px-2.5 py-1 text-xs font-mono bg-slate-100 text-slate-700 rounded-md border border-slate-200/60"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="px-6 sm:px-7 pb-6 pt-2 flex items-center gap-4 border-t border-slate-100/80">
              {project.github ? (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 py-2.5 rounded-xl border border-slate-200 bg-white hover:bg-slate-50 text-slate-700 text-xs font-bold text-center flex items-center justify-center gap-2 shadow-sm transition-all hover:border-slate-300"
                >
                  <FaGithub className="text-sm" />
                  <span>Source Code</span>
                </a>
              ) : (
                <div className="flex-1 py-2.5 rounded-xl border border-slate-100 bg-slate-50 text-slate-400 text-xs font-semibold text-center flex items-center justify-center gap-2">
                  <span>Client / Proprietary</span>
                </div>
              )}
              {project.live && (
                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 py-2.5 rounded-xl bg-brand-600 hover:bg-brand-700 text-white text-xs font-bold text-center flex items-center justify-center gap-2 shadow-md shadow-brand-500/20 transition-all"
                >
                  <FaGlobe className="text-xs" />
                  <span>Visit Live Platform</span>
                  <FaExternalLinkAlt className="text-[10px]" />
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;