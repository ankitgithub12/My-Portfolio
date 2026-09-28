import React, { useState, useEffect } from 'react';
import {
  FaGithub,
  FaExternalLinkAlt,
  FaCheckCircle,
  FaLaptopCode,
  FaGlobe,
  FaChevronLeft,
  FaChevronRight,
  FaExpand,
  FaTimes
} from 'react-icons/fa';

const ProjectImage = ({ images, title, liveUrl, labels = [] }) => {
  const [currentImage, setCurrentImage] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    if (!images || images.length <= 1 || isPaused || isModalOpen) return;
    const timer = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 4500);
    return () => clearInterval(timer);
  }, [images, isPaused, isModalOpen]);

  // Handle escape key to close lightbox modal
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') setIsModalOpen(false);
      if (isModalOpen && images && images.length > 1) {
        if (e.key === 'ArrowLeft') {
          setCurrentImage((prev) => (prev === 0 ? images.length - 1 : prev - 1));
        } else if (e.key === 'ArrowRight') {
          setCurrentImage((prev) => (prev + 1) % images.length);
        }
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isModalOpen, images]);

  const handlePrev = (e) => {
    e.stopPropagation();
    setCurrentImage((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const handleNext = (e) => {
    e.stopPropagation();
    setCurrentImage((prev) => (prev + 1) % images.length);
  };

  // Extract clean host name for the mock browser address bar
  const displayHost = liveUrl
    ? liveUrl.replace(/^https?:\/\//, '').replace(/\/$/, '')
    : 'localhost:3000';

  return (
    <>
      <div className="bg-gradient-to-br from-slate-100/90 via-slate-50/80 to-indigo-50/50 p-3.5 sm:p-5 border-b border-slate-200/80">
        <div
          className="w-full rounded-2xl bg-white border border-slate-300/80 shadow-lg shadow-slate-200/60 overflow-hidden flex flex-col transition-all duration-300 hover:shadow-xl group/frame"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {/* macOS Browser Chrome Bar with Glassmorphism */}
          <div className="bg-slate-100/95 backdrop-blur-md px-3.5 py-2.5 border-b border-slate-200/90 flex items-center justify-between shrink-0 select-none">
            <div className="flex items-center space-x-1.5">
              <span className="w-3 h-3 rounded-full bg-rose-400 inline-block border border-rose-500/30"></span>
              <span className="w-3 h-3 rounded-full bg-amber-400 inline-block border border-amber-500/30"></span>
              <span className="w-3 h-3 rounded-full bg-emerald-400 inline-block border border-emerald-500/30"></span>
            </div>
            <div className="flex items-center gap-1.5 text-[11px] font-mono text-slate-600 bg-white/90 px-3 py-1 rounded-md border border-slate-200/90 shadow-inner max-w-[60%] sm:max-w-xs truncate">
              <span className="text-emerald-500 font-bold">https://</span>
              <span className="truncate font-semibold">{displayHost}</span>
            </div>
            <div className="flex items-center gap-1.5">
              <button
                type="button"
                onClick={() => setIsModalOpen(true)}
                title="View Full Screenshot"
                aria-label="View Full Screenshot"
                className="p-1.5 text-slate-500 hover:text-brand-600 hover:bg-slate-200/80 rounded-md transition-colors text-xs"
              >
                <FaExpand />
              </button>
            </div>
          </div>

          {/* Screenshot Viewport (Optimized 16:9 ratio with object-top for pristine header & layout visibility) */}
          <div
            className="relative w-full aspect-[16/9] bg-slate-100 overflow-hidden group/viewport cursor-pointer"
            onClick={() => setIsModalOpen(true)}
          >
            {images && images.map((img, idx) => (
              <img
                key={idx}
                src={img}
                alt={`${title} preview ${idx + 1}`}
                className={`absolute inset-0 w-full h-full object-cover object-top transition-all duration-700 ${
                  idx === currentImage
                    ? 'opacity-100 scale-100'
                    : 'opacity-0 scale-[1.02] pointer-events-none'
                }`}
                loading="lazy"
              />
            ))}

            {/* Subtle Gradient Shadow on hover for controls */}
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/20 via-transparent to-transparent opacity-0 group-hover/viewport:opacity-100 transition-opacity pointer-events-none" />

            {/* Left/Right Navigation Arrows */}
            {images && images.length > 1 && (
              <>
                <button
                  type="button"
                  onClick={handlePrev}
                  className="absolute left-2.5 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-white/90 hover:bg-brand-600 text-slate-700 hover:text-white flex items-center justify-center backdrop-blur-md shadow-md border border-slate-200/80 opacity-90 sm:opacity-0 sm:group-hover/viewport:opacity-100 transition-all z-20 hover:scale-110 active:scale-95"
                  aria-label="Previous screenshot"
                >
                  <FaChevronLeft className="text-xs -ml-0.5" />
                </button>
                <button
                  type="button"
                  onClick={handleNext}
                  className="absolute right-2.5 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-white/90 hover:bg-brand-600 text-slate-700 hover:text-white flex items-center justify-center backdrop-blur-md shadow-md border border-slate-200/80 opacity-90 sm:opacity-0 sm:group-hover/viewport:opacity-100 transition-all z-20 hover:scale-110 active:scale-95"
                  aria-label="Next screenshot"
                >
                  <FaChevronRight className="text-xs -mr-0.5" />
                </button>
              </>
            )}

            {/* Slide Label & Counter */}
            <div className="absolute bottom-2.5 left-3 right-3 flex items-center justify-between z-20 pointer-events-none">
              <span className="text-[11px] font-semibold text-slate-800 bg-white/90 backdrop-blur-md px-2.5 py-0.5 rounded-full border border-slate-200/80 shadow-sm truncate max-w-[200px]">
                {labels[currentImage] || `Screen ${currentImage + 1}`}
              </span>

              {images && images.length > 1 && (
                <div className="flex items-center gap-1.5 bg-white/90 backdrop-blur-md px-2.5 py-1 rounded-full border border-slate-200/80 shadow-sm pointer-events-auto">
                  {images.map((_, idx) => (
                    <button
                      key={idx}
                      onClick={(e) => {
                        e.stopPropagation();
                        setCurrentImage(idx);
                      }}
                      className={`h-1.5 rounded-full transition-all duration-300 ${
                        idx === currentImage ? 'w-5 bg-brand-600' : 'w-1.5 bg-slate-300 hover:bg-slate-500'
                      }`}
                      aria-label={`Jump to image ${idx + 1}`}
                    />
                  ))}
                  <span className="text-[10px] text-slate-600 font-mono font-bold ml-1">
                    {currentImage + 1}/{images.length}
                  </span>
                </div>
              )}
            </div>

            {/* Quick Click-to-Expand Badge */}
            <div className="absolute top-2.5 right-2.5 z-20 opacity-0 group-hover/viewport:opacity-100 transition-opacity">
              <span className="inline-flex items-center gap-1.5 text-[10px] font-semibold text-slate-800 bg-white/90 backdrop-blur-md px-2.5 py-1 rounded-full border border-slate-200/80 shadow-md">
                <FaExpand className="text-[9px] text-brand-600" /> Click to enlarge
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* High-Resolution Fullscreen Modal / Lightbox */}
      {isModalOpen && (
        <div
          className="fixed inset-0 z-50 bg-slate-900/40 backdrop-blur-xl flex flex-col items-center justify-center p-3 sm:p-6 animate-fade-in"
          onClick={() => setIsModalOpen(false)}
        >
          {/* Modal Container */}
          <div
            className="w-full max-w-5xl bg-white/95 backdrop-blur-2xl rounded-3xl border border-white/80 shadow-2xl shadow-indigo-950/15 p-4 sm:p-6 flex flex-col gap-4 relative animate-scale-up"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="flex items-center justify-between pb-3 border-b border-slate-200/80 select-none">
              <div>
                <h4 className="text-base sm:text-lg font-bold text-slate-900 flex flex-wrap items-center gap-2">
                  <span>{title}</span>
                  <span className="text-xs font-mono font-semibold text-brand-700 bg-brand-50/90 px-2.5 py-0.5 rounded-full border border-brand-200/80">
                    {labels[currentImage] || `Screenshot ${currentImage + 1}`}
                  </span>
                </h4>
              </div>
              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={() => setIsModalOpen(false)}
                  className="w-9 h-9 rounded-full bg-slate-100 hover:bg-rose-50 text-slate-600 hover:text-rose-600 border border-slate-200/80 flex items-center justify-center transition-all hover:scale-105 active:scale-95 shadow-xs"
                  aria-label="Close Preview"
                >
                  <FaTimes />
                </button>
              </div>
            </div>

            {/* Modal Image Viewport */}
            <div className="relative w-full max-h-[75vh] flex items-center justify-center rounded-2xl overflow-hidden border border-slate-200/80 shadow-inner bg-slate-100/70 p-2 sm:p-3">
              <img
                src={images[currentImage]}
                alt={`${title} Full Preview`}
                className="w-full h-auto max-h-[70vh] object-contain rounded-xl shadow-sm"
              />

              {/* Modal Navigation Arrows */}
              {images.length > 1 && (
                <>
                  <button
                    type="button"
                    onClick={handlePrev}
                    className="absolute left-4 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-white/90 hover:bg-brand-600 text-slate-700 hover:text-white flex items-center justify-center backdrop-blur-md shadow-lg border border-slate-200/80 transition-all hover:scale-110 active:scale-95"
                    aria-label="Previous Screenshot"
                  >
                    <FaChevronLeft />
                  </button>
                  <button
                    type="button"
                    onClick={handleNext}
                    className="absolute right-4 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-white/90 hover:bg-brand-600 text-slate-700 hover:text-white flex items-center justify-center backdrop-blur-md shadow-lg border border-slate-200/80 transition-all hover:scale-110 active:scale-95"
                    aria-label="Next Screenshot"
                  >
                    <FaChevronRight />
                  </button>
                </>
              )}
            </div>

            {/* Modal Bottom Controls */}
            {images.length > 1 && (
              <div className="flex items-center justify-center gap-2 pt-1">
                <div className="flex items-center gap-2 bg-slate-100/90 backdrop-blur-md px-4 py-1.5 rounded-full border border-slate-200/80 shadow-xs">
                  {images.map((_, idx) => (
                    <button
                      key={idx}
                      onClick={() => setCurrentImage(idx)}
                      className={`h-2 rounded-full transition-all duration-300 ${
                        idx === currentImage ? 'w-6 bg-brand-600' : 'w-2 bg-slate-300 hover:bg-slate-400'
                      }`}
                      aria-label={`Jump to image ${idx + 1}`}
                    />
                  ))}
                  <span className="text-xs text-slate-700 font-mono font-bold ml-2">
                    {currentImage + 1} of {images.length}
                  </span>
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
};

const Projects = () => {
  const projects = [
    {
      title: 'B5 Eventory – Event Management Platform',
      period: 'May 2026 - June 2026',
      badge: 'Full Stack MERN & Real-Time',
      description: [
        'Full-Stack Event Platform: Built an end-to-end MERN system with an admin portal and custom planner, boosting scheduling efficiency by 50%.',
        'Real-Time Alert Pipeline: Integrated Socket.IO for instant booking dispatches and admin alerts, driving a 40% rise in user engagement.',
        'Cloud & Media Architecture: Scaled with Cloudinary CDN media uploads, JWT role security, and MongoDB Atlas, maintaining 99% reliability.'
      ],
      tech: ['React', 'Node.js', 'Express.js', 'MongoDB', 'Socket.io', 'JWT', 'Tailwind CSS', 'Framer Motion', 'Cloudinary', 'Hostinger'],
      github: 'https://github.com/ankitgithub12/B5-Event-Management-Website',
      live: 'https://b5eventory.com/',
      images: ['/B5 Home.png', '/B5 Packages.png', '/B5 Admin.png'],
      labels: ['Luxury Event Management Portal', 'Curated Event Services & Packages', 'Executive Admin Control Dashboard'],
      badgeColor: 'bg-purple-50 text-purple-700 border-purple-200'
    },
    {
      title: 'SRIC School Website',
      period: 'Oct 2025 - Dec 2025',
      badge: 'Full Stack MERN',
      description: [
        'School Management Portal: Launched the official MERN web platform with online admissions, fee workflows, and responsive UI, cutting manual work by 60%.',
        'Role-Based Admin Security: Built a secure admin dashboard with JWT authentication and RBAC, reducing unauthorized access attempts by 90%.',
        'Schema & Query Optimization: Architected MongoDB Atlas schemas and RESTful APIs, delivering a 35% boost in database query speed.'
      ],
      tech: ['MongoDB', 'Express.js', 'React', 'Node.js', 'Tailwind', 'REST APIs'],
      github: 'https://github.com/ankitgithub12/Sitaram-Inter-College',
      live: 'https://sric-fdq2.onrender.com/',
      images: ['/Home1.png', '/Home2.png', '/admin1.png'],
      labels: ['School Landing & Hero Portal', 'Academics & Highlights', 'Administrative Control Dashboard'],
      badgeColor: 'bg-indigo-50 text-indigo-700 border-indigo-200'
    }
  ];

  return (
    <section id="projects" className="space-y-8">
      <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4">
        <div className="space-y-2 max-w-2xl">
          <span className="section-label">Featured Work</span>
          <h2 className="section-title flex items-center gap-2.5">
            <FaLaptopCode className="text-brand-600 text-2xl sm:text-3xl" /> Featured Projects
          </h2>
          <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
            Production-grade applications built with modern engineering best practices, robust architectures, and cloud deployments.
          </p>
          <div className="h-1 w-12 bg-gradient-to-r from-brand-500 to-indigo-500 rounded-full mt-2"></div>
        </div>
        <span className="glass-pill px-3.5 py-1 text-brand-700 text-xs font-bold rounded-full border border-brand-200/80 self-start font-mono shadow-xs shrink-0">
          {projects.length} Flagship Apps
        </span>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {projects.map((project, index) => (
          <div
            key={index}
            className="glass-card-premium rounded-3xl overflow-hidden border border-white/90 shadow-xl flex flex-col justify-between hover:shadow-2xl hover:shadow-slate-300/50 hover:-translate-y-1 transition-all duration-300 group relative"
          >
            {/* Top specular glow line */}
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-brand-500 to-transparent opacity-75 z-20 pointer-events-none"></div>

            <div>
              <ProjectImage
                images={project.images}
                title={project.title}
                liveUrl={project.live}
                labels={project.labels}
              />

              <div className="p-6 sm:p-7 space-y-4">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                  <h3 className="text-xl sm:text-2xl font-black text-slate-900 group-hover:text-brand-600 transition-colors tracking-tight">
                    {project.title}
                  </h3>
                  <div className="flex items-center gap-2 flex-wrap">
                    <span className={`text-xs font-bold px-3 py-1 rounded-full border shadow-xs ${project.badgeColor}`}>
                      {project.badge}
                    </span>
                    <span className="text-xs font-mono text-slate-400 bg-white/70 px-2 py-0.5 rounded border border-slate-200/60 shadow-xs">
                      {project.period}
                    </span>
                  </div>
                </div>

                <ul className="space-y-2.5 pt-2">
                  {project.description.map((item, idx) => {
                    const colonIndex = item.indexOf(':');
                    const hasLabel = colonIndex !== -1 && colonIndex < 35;
                    const label = hasLabel ? item.slice(0, colonIndex) : null;
                    const content = hasLabel ? item.slice(colonIndex + 1) : item;

                    return (
                      <li key={idx} className="flex items-start text-xs sm:text-sm text-slate-600 gap-2.5">
                        <FaCheckCircle className="text-brand-500 mt-1 shrink-0 text-xs" />
                        <span className="leading-relaxed">
                          {label ? (
                            <>
                              <strong className="font-bold text-slate-900">{label}:</strong>
                              {content}
                            </>
                          ) : (
                            item
                          )}
                        </span>
                      </li>
                    );
                  })}
                </ul>

                {/* Tech Pills */}
                <div className="flex flex-wrap gap-1.5 pt-3 border-t border-slate-200/70">
                  {project.tech.map((tech, idx) => (
                    <span
                      key={idx}
                      className="px-2.5 py-1 text-xs font-mono font-medium bg-white/80 text-slate-700 rounded-lg border border-slate-200/70 shadow-xs hover:border-brand-300 transition-colors"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="px-6 sm:px-7 pb-6 pt-3.5 flex items-center gap-3 sm:gap-4 border-t border-slate-200/70 bg-white/40 backdrop-blur-sm">
              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 py-2.5 px-3 rounded-xl border border-slate-200 bg-white hover:bg-slate-50 text-slate-800 text-xs font-bold text-center flex items-center justify-center gap-2 shadow-sm transition-all hover:border-slate-300 active:scale-95"
                >
                  <FaGithub className="text-sm" />
                  <span>Source Code</span>
                </a>
              )}
              {project.live && (
                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="shimmer-hover flex-1 py-2.5 px-3 rounded-xl bg-gradient-to-r from-brand-600 to-indigo-600 hover:from-brand-500 hover:to-indigo-500 text-white text-xs font-bold text-center flex items-center justify-center gap-2 shadow-lg shadow-brand-500/25 transition-all active:scale-95 border border-white/20"
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