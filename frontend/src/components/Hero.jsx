import React, { useState, useEffect } from 'react';
import { FaGithub, FaLinkedin, FaEnvelope, FaArrowRight, FaFileDownload, FaReact, FaNodeJs, FaBolt, FaRocket } from 'react-icons/fa';
import { SiTailwindcss, SiMongodb, SiExpress, SiCplusplus, SiLeetcode, SiGeeksforgeeks } from 'react-icons/si';

const Hero = ({ personalInfo }) => {
  const titles = [
    "Full Stack Developer",
    "MERN Stack Specialist",
    "Competitive Programmer",
    "Problem Solver",
    "Freelance Developer"
  ];

  const techStack = [
    { icon: FaReact, color: "text-cyan-500", name: "React.js", bg: "hover:shadow-cyan-500/20" },
    { icon: FaNodeJs, color: "text-emerald-500", name: "Node.js", bg: "hover:shadow-emerald-500/20" },
    { icon: SiTailwindcss, color: "text-sky-500", name: "Tailwind CSS", bg: "hover:shadow-sky-500/20" },
    { icon: SiMongodb, color: "text-emerald-600", name: "MongoDB", bg: "hover:shadow-emerald-600/20" },
    { icon: SiExpress, color: "text-slate-800", name: "Express.js", bg: "hover:shadow-slate-500/20" },
    { icon: SiCplusplus, color: "text-indigo-600", name: "C++", bg: "hover:shadow-indigo-500/20" }
  ];

  const [currentTitleIndex, setCurrentTitleIndex] = useState(0);
  const [currentText, setCurrentText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(120);

  useEffect(() => {
    const handleTyping = () => {
      const fullTitle = titles[currentTitleIndex];
      if (!isDeleting) {
        setCurrentText(fullTitle.substring(0, currentText.length + 1));
        setTypingSpeed(100);
        if (currentText === fullTitle) {
          setTimeout(() => setIsDeleting(true), 2000);
        }
      } else {
        setCurrentText(fullTitle.substring(0, currentText.length - 1));
        setTypingSpeed(50);
        if (currentText === "") {
          setIsDeleting(false);
          setCurrentTitleIndex((prev) => (prev + 1) % titles.length);
        }
      }
    };

    const timer = setTimeout(handleTyping, typingSpeed);
    return () => clearTimeout(timer);
  }, [currentText, isDeleting, currentTitleIndex, titles, typingSpeed]);

  return (
    <section id="home" className="pt-4 sm:pt-10 pb-6 flex flex-col items-center text-center relative z-10">
      {/* Availability Glass Pill */}
      <div className="glass-pill shimmer-hover inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full text-brand-700 text-xs font-bold mb-8 shadow-sm animate-fade-in-down">
        <span className="flex h-2.5 w-2.5 relative">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500 shadow-sm shadow-emerald-400"></span>
        </span>
        <span className="uppercase tracking-wider text-[11px] sm:text-xs font-mono font-bold text-slate-700">
          Open for High-Impact Roles & Freelance
        </span>
      </div>

      {/* Developer Photo with Glassmorphism & Floating Accents */}
      <div className="relative mb-8 group">
        {/* Animated Gradient Aura */}
        <div className="absolute -inset-2 rounded-[32px] bg-gradient-to-r from-brand-500 via-purple-500 to-cyan-400 opacity-75 blur-xl group-hover:opacity-100 transition-opacity animate-gradient"></div>

        {/* Main Photo Card */}
        <div className="relative w-36 h-36 sm:w-44 sm:h-44 rounded-3xl p-1.5 bg-gradient-to-tr from-brand-600 via-indigo-500 to-cyan-400 shadow-2xl shadow-brand-500/25 transition-transform duration-500 group-hover:scale-[1.03]">
          <img
            alt="Ankit Kumar - Full Stack Developer Profile Photo"
            className="w-full h-full object-cover rounded-[20px] bg-slate-100 shadow-inner"
            src="/Ankit image.jpeg"
            width="176"
            height="176"
            loading="eager"
          />
        </div>

        {/* Floating Mini Glass Badge: Full-Stack */}
        <div className="absolute -top-3 -left-4 sm:-left-8 glass-pill px-3 py-1.5 rounded-2xl shadow-lg border border-white/90 flex items-center gap-1.5 animate-float pointer-events-none">
          <div className="w-5 h-5 rounded-lg bg-brand-500 text-white flex items-center justify-center text-[10px]">
            <FaBolt />
          </div>
          <span className="text-[11px] font-bold text-slate-800 font-mono">Full-Stack</span>
        </div>

        {/* Floating Mini Glass Badge: MERN Specialist */}
        <div className="absolute -bottom-3 -right-3 sm:-right-6 glass-pill px-3 py-1.5 rounded-2xl shadow-lg border border-white/90 flex items-center gap-2 animate-float-delayed pointer-events-none">
          <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 shadow-sm shadow-emerald-400"></span>
          <span className="text-[11px] font-bold text-slate-800 font-mono">MERN Lead</span>
        </div>
      </div>

      {/* Primary Semantic H1 for SEO with Animated Gradient */}
      <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-slate-900 tracking-tight leading-tight max-w-3xl mb-3">
        I'm{' '}
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-600 via-indigo-600 to-cyan-500 animate-gradient bg-[length:200%_auto]">
          {personalInfo?.name || 'Ankit Kumar'}
        </span>
      </h1>

      {/* Typing Subtitle with Glowing Brackets */}
      <div className="flex items-center justify-center gap-1.5 sm:gap-2 text-base sm:text-2xl font-extrabold text-slate-700 mb-5 h-9">
        <span className="text-brand-600 font-mono drop-shadow-sm">&lt;</span>
        <span className="text-slate-800 tracking-tight">{currentText}</span>
        <span className="inline-block w-[3px] h-5 sm:h-6 bg-brand-500 rounded-full animate-type-cursor shadow-sm shadow-brand-400"></span>
        <span className="text-brand-600 font-mono drop-shadow-sm">/&gt;</span>
      </div>

      {/* Subtitle with semantic keywords */}
      <p className="text-slate-600 text-sm sm:text-lg max-w-2xl font-normal leading-relaxed mb-8 px-2">
        Full Stack Developer crafting high-performance web applications with React, Node.js, Express, and MongoDB. Engineering{' '}
        <span className="font-semibold text-slate-900 underline decoration-brand-400 decoration-2 underline-offset-4">
          scalable architectures
        </span>{' '}
        and real-time systems for complex real-world platforms.
      </p>

      {/* Tech Stack Icons with Frosted Glass & Hover Glow */}
      <div className="flex flex-wrap justify-center gap-2.5 sm:gap-3.5 mb-8 max-w-lg px-2">
        {techStack.map((tech, i) => (
          <div
            key={i}
            className={`group relative flex items-center justify-center w-11 h-11 sm:w-12 sm:h-12 rounded-2xl glass-card hover:scale-110 hover:-translate-y-1.5 hover:border-brand-300 transition-all duration-300 cursor-pointer ${tech.bg}`}
            title={tech.name}
          >
            <tech.icon className={`text-xl sm:text-2xl ${tech.color} transition-transform group-hover:scale-110 drop-shadow-sm`} />
            <span className="absolute -top-9 left-1/2 -translate-x-1/2 px-2.5 py-1 glass-card text-[10px] font-bold text-slate-800 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap shadow-md border border-slate-200">
              {tech.name}
            </span>
          </div>
        ))}
      </div>

      {/* Social Media Links in Frosted Glass Cubes */}
      <div className="flex items-center gap-2.5 sm:gap-3.5 mb-9 flex-wrap justify-center px-2">
        <a
          aria-label="Ankit Kumar on GitHub"
          className="p-3 glass-card rounded-2xl text-slate-700 hover:text-slate-950 hover:border-slate-400 hover:scale-110 hover:-translate-y-1 transition-all duration-300 shadow-sm"
          href={personalInfo?.github}
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithub className="text-lg" />
        </a>
        <a
          aria-label="Ankit Kumar on LinkedIn"
          className="p-3 glass-card rounded-2xl text-[#0A66C2] hover:border-[#0A66C2]/60 hover:scale-110 hover:-translate-y-1 transition-all duration-300 shadow-sm"
          href={personalInfo?.linkedin}
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedin className="text-lg" />
        </a>
        <a
          aria-label="Ankit Kumar on LeetCode"
          className="p-3 glass-card rounded-2xl text-[#FFA116] hover:border-[#FFA116]/60 hover:scale-110 hover:-translate-y-1 transition-all duration-300 shadow-sm"
          href={personalInfo?.leetcode || 'https://leetcode.com/u/Ankit639520/'}
          target="_blank"
          rel="noopener noreferrer"
        >
          <SiLeetcode className="text-lg" />
        </a>
        <a
          aria-label="Ankit Kumar on GeeksforGeeks"
          className="p-3 glass-card rounded-2xl text-[#2F8D46] hover:border-[#2F8D46]/60 hover:scale-110 hover:-translate-y-1 transition-all duration-300 shadow-sm"
          href={personalInfo?.gfg || 'https://www.geeksforgeeks.org/profile/ankit6ewub'}
          target="_blank"
          rel="noopener noreferrer"
        >
          <SiGeeksforgeeks className="text-lg" />
        </a>
        <a
          aria-label="Email Ankit Kumar"
          className="p-3 glass-card rounded-2xl text-rose-500 hover:border-rose-400/60 hover:scale-110 hover:-translate-y-1 transition-all duration-300 shadow-sm"
          href={`mailto:${personalInfo?.email || 'ankit639520@gmail.com'}`}
        >
          <FaEnvelope className="text-lg" />
        </a>
      </div>

      {/* Primary Actions with Specular Hover Shimmer */}
      <div className="flex flex-col sm:flex-row gap-3.5 sm:gap-4 w-full sm:w-auto justify-center px-4">
        <a
          className="shimmer-hover px-7 py-3.5 bg-gradient-to-r from-brand-600 via-indigo-600 to-brand-700 hover:from-brand-500 hover:to-indigo-500 text-white font-bold rounded-2xl shadow-xl shadow-brand-500/30 hover:shadow-brand-500/50 hover:-translate-y-0.5 transition-all flex items-center justify-center gap-2.5 group active:scale-95 text-xs sm:text-sm border border-white/25"
          href="#projects"
        >
          <span>Explore Featured Work</span>
          <FaArrowRight className="text-xs group-hover:translate-x-1 transition-transform" />
        </a>
        <a
          className="shimmer-hover px-7 py-3.5 glass-card-premium hover:bg-white text-slate-800 font-bold rounded-2xl shadow-md hover:shadow-xl hover:-translate-y-0.5 transition-all flex items-center justify-center gap-2.5 active:scale-95 text-xs sm:text-sm border border-white/90"
          href="/Ankit cv.pdf"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaFileDownload className="text-brand-600 text-xs sm:text-sm" />
          <span>Download Resume (CV)</span>
        </a>
      </div>
    </section>
  );
};

export default Hero;