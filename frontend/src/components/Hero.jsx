import React, { useState, useEffect } from 'react';
import { FaGithub, FaLinkedin, FaEnvelope, FaArrowRight, FaFileDownload, FaReact, FaNodeJs } from 'react-icons/fa';
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
    { icon: FaReact, color: "text-cyan-500", name: "React.js" },
    { icon: FaNodeJs, color: "text-emerald-600", name: "Node.js" },
    { icon: SiTailwindcss, color: "text-sky-500", name: "Tailwind CSS" },
    { icon: SiMongodb, color: "text-emerald-600", name: "MongoDB" },
    { icon: SiExpress, color: "text-slate-700", name: "Express.js" },
    { icon: SiCplusplus, color: "text-indigo-600", name: "C++" }
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
    <section id="home" className="pt-4 sm:pt-10 pb-6 flex flex-col items-center text-center">
      {/* Availability Pill */}
      <div className="inline-flex items-center gap-2 px-3.5 sm:px-4 py-1.5 rounded-full bg-brand-50 border border-brand-200/80 text-brand-700 text-xs font-semibold mb-6 shadow-sm animate-fade-in-down">
        <span className="flex h-2 w-2 relative">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-600"></span>
        </span>
        <span className="uppercase tracking-wider text-[11px] sm:text-xs">Open for Opportunities</span>
      </div>

      {/* Developer Photo with floating badges */}
      <div className="relative mb-6">
        <div className="w-32 h-32 sm:w-40 sm:h-40 rounded-3xl p-1 bg-gradient-to-tr from-brand-500 via-indigo-400 to-cyan-400 shadow-xl shadow-brand-500/20 animate-float">
          <img
            alt="Ankit Kumar - Full Stack Developer Profile Photo"
            className="w-full h-full object-cover rounded-[22px] bg-slate-100"
            src="/Ankit image.jpeg"
            width="160"
            height="160"
            loading="eager"
          />
        </div>
        <div className="absolute -bottom-2 -right-2 sm:-right-3 bg-white rounded-xl px-2 sm:px-2.5 py-1 shadow-md border border-slate-200 flex items-center gap-1.5">
          <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
          <span className="text-[10px] sm:text-[11px] font-bold text-slate-800 font-mono">MERN Stack</span>
        </div>
      </div>

      {/* Primary Semantic H1 for SEO */}
      <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-slate-900 tracking-tight leading-tight max-w-3xl mb-3">
        I'm{' '}
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-600 via-indigo-600 to-cyan-600">
          {personalInfo?.name || 'Ankit Kumar'}
        </span>
      </h1>

      {/* Typing Subtitle */}
      <div className="flex items-center justify-center gap-1.5 sm:gap-2 text-base sm:text-2xl font-bold text-slate-700 mb-5 h-8">
        <span className="text-brand-600 font-mono">&lt;</span>
        <span>{currentText}</span>
        <span className="inline-block w-[2px] sm:w-[3px] h-5 sm:h-6 bg-brand-500 animate-type-cursor"></span>
        <span className="text-brand-600 font-mono">/&gt;</span>
      </div>

      {/* Subtitle with semantic keywords */}
      <p className="text-slate-600 text-sm sm:text-lg max-w-2xl font-normal leading-relaxed mb-8 px-2">
        Full Stack Developer crafting high-performance web applications with React, Node.js, Express, and MongoDB. Engineering{' '}
        <span className="font-semibold text-slate-800 underline decoration-brand-400 decoration-2 underline-offset-4">
          scalable solutions
        </span>{' '}
        for complex real-world challenges.
      </p>

      {/* Tech Stack Icons */}
      <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-8 max-w-md px-2">
        {techStack.map((tech, i) => (
          <div
            key={i}
            className="group relative flex items-center justify-center w-10 h-10 sm:w-11 sm:h-11 rounded-xl bg-white border border-slate-200 shadow-sm hover:border-brand-300 hover:shadow-md transition-all duration-200"
            title={tech.name}
          >
            <tech.icon className={`text-lg sm:text-xl ${tech.color} transition-transform group-hover:scale-110`} />
            <span className="absolute -top-8 left-1/2 -translate-x-1/2 px-2 py-0.5 bg-slate-900 text-[10px] text-white rounded opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap shadow-md">
              {tech.name}
            </span>
          </div>
        ))}
      </div>

      {/* Social Media Links */}
      <div className="flex items-center gap-2.5 sm:gap-3 mb-8 flex-wrap justify-center px-2">
        <a
          aria-label="Ankit Kumar on GitHub"
          className="p-2.5 sm:p-3 bg-white text-slate-700 rounded-xl border border-slate-200 shadow-sm hover:text-brand-600 hover:border-brand-300 hover:scale-105 transition-all"
          href={personalInfo?.github}
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithub className="text-base sm:text-lg" />
        </a>
        <a
          aria-label="Ankit Kumar on LinkedIn"
          className="p-2.5 sm:p-3 bg-white text-[#0A66C2] rounded-xl border border-slate-200 shadow-sm hover:border-[#0A66C2] hover:scale-105 transition-all"
          href={personalInfo?.linkedin}
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedin className="text-base sm:text-lg" />
        </a>
        <a
          aria-label="Ankit Kumar on LeetCode"
          className="p-2.5 sm:p-3 bg-white text-[#FFA116] rounded-xl border border-slate-200 shadow-sm hover:border-[#FFA116] hover:scale-105 transition-all"
          href={personalInfo?.leetcode || 'https://leetcode.com/u/Ankit639520/'}
          target="_blank"
          rel="noopener noreferrer"
        >
          <SiLeetcode className="text-base sm:text-lg" />
        </a>
        <a
          aria-label="Ankit Kumar on GeeksforGeeks"
          className="p-2.5 sm:p-3 bg-white text-[#2F8D46] rounded-xl border border-slate-200 shadow-sm hover:border-[#2F8D46] hover:scale-105 transition-all"
          href={personalInfo?.gfg || 'https://www.geeksforgeeks.org/profile/ankit6ewub'}
          target="_blank"
          rel="noopener noreferrer"
        >
          <SiGeeksforgeeks className="text-base sm:text-lg" />
        </a>
        <a
          aria-label="Email Ankit Kumar"
          className="p-2.5 sm:p-3 bg-white text-rose-500 rounded-xl border border-slate-200 shadow-sm hover:border-rose-400 hover:scale-105 transition-all"
          href={`mailto:${personalInfo?.email || 'ankit639520@gmail.com'}`}
        >
          <FaEnvelope className="text-base sm:text-lg" />
        </a>
      </div>

      {/* Primary Actions */}
      <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 w-full sm:w-auto justify-center px-4">
        <a
          className="px-6 sm:px-7 py-3 sm:py-3.5 bg-brand-600 hover:bg-brand-700 text-white font-semibold rounded-xl shadow-lg shadow-brand-500/25 transition-all flex items-center justify-center gap-2 group active:scale-95 text-xs sm:text-sm"
          href="#projects"
        >
          <span>Explore Projects</span>
          <FaArrowRight className="text-xs group-hover:translate-x-1 transition-transform" />
        </a>
        <a
          className="px-6 sm:px-7 py-3 sm:py-3.5 bg-white hover:bg-slate-50 text-slate-700 border border-slate-200 font-semibold rounded-xl shadow-sm transition-all flex items-center justify-center gap-2 hover:border-slate-300 active:scale-95 text-xs sm:text-sm"
          href="/General CV Template (approved) Ankit kumar (1).pdf"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaFileDownload className="text-slate-500 text-xs sm:text-sm" />
          <span>Download Resume</span>
        </a>
      </div>
    </section>
  );
};

export default Hero;