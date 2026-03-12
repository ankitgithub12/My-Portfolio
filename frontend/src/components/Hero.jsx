import React, { useState, useEffect } from 'react';
import { FaGithub, FaLinkedin, FaEnvelope, FaPhone, FaReact, FaNodeJs, FaHtml5, FaCss3Alt, FaJs, FaDatabase, FaCode } from 'react-icons/fa';
import { SiTailwindcss, SiExpress, SiMongodb, SiCplusplus } from 'react-icons/si';

const Hero = ({ personalInfo }) => {
  const titles = [
    "Full Stack Developer",
    "MERN Stack Developer",
    "Problem Solver",
    "B.Tech CSE Student @ LPU"
  ];
  
  const [currentTitleIndex, setCurrentTitleIndex] = useState(0);
  const [currentText, setCurrentText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(150);

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

  const techStack = [
    { icon: FaReact, color: "text-cyan-400", name: "React" },
    { icon: FaNodeJs, color: "text-green-500", name: "Node.js" },
    { icon: SiTailwindcss, color: "text-sky-400", name: "Tailwind" },
    { icon: SiMongodb, color: "text-emerald-500", name: "MongoDB" },
    { icon: SiExpress, color: "text-slate-300", name: "Express" },
    { icon: SiCplusplus, color: "text-blue-500", name: "C++" }
  ];

  return (
    <section id="home" className="relative min-h-[90vh] lg:min-h-screen flex items-center justify-center overflow-hidden py-20">
      {/* Dynamic Background */}
      <div className="absolute top-0 left-0 w-full h-full -z-10 bg-slate-900">
        <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-cyan-500/10 rounded-full mix-blend-screen filter blur-[120px] animate-blob"></div>
        <div className="absolute top-1/3 right-1/4 w-[500px] h-[500px] bg-indigo-500/10 rounded-full mix-blend-screen filter blur-[120px] animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-32 left-1/2 w-[500px] h-[500px] bg-purple-500/10 rounded-full mix-blend-screen filter blur-[120px] animate-blob animation-delay-4000"></div>
      </div>

      <div className="section-container relative z-10 w-full">
        <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-16 lg:gap-20">
          
          <div className="w-full lg:w-3/5 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-cyan-500/20 bg-cyan-500/5 text-cyan-400 mb-8 backdrop-blur-md animate-fade-in-down">
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-cyan-500"></span>
              </span>
              <span className="text-sm font-semibold tracking-wide uppercase">Open for Opportunities</span>
            </div>

            <h1 className="text-5xl md:text-7xl lg:text-8xl font-black mb-6 leading-[1.1] tracking-tight">
              I'm <br className="hidden md:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-indigo-400 to-purple-500 animate-gradient">
                {personalInfo?.name || 'Ankit Kumar'}
              </span>
            </h1>

            <div className="h-12 mb-6">
              <p className="text-2xl md:text-3xl text-slate-100 font-medium">
                {currentText}
                <span className="inline-block w-[3px] h-8 bg-cyan-400 ml-1 translate-y-1 animate-type-cursor"></span>
              </p>
            </div>

            <p className="text-lg text-slate-400 mb-10 max-w-2xl mx-auto lg:mx-0 leading-relaxed font-light">
              Crafting high-performance web applications with modern technologies. 
              Engineering <span className="text-white font-medium italic">scalable solutions</span> for complex problems.
            </p>

            {/* Tech Stack Bubbles */}
            <div className="flex flex-wrap justify-center lg:justify-start gap-4 mb-12">
              {techStack.map((tech, i) => (
                <div key={i} className="group relative flex items-center justify-center w-12 h-12 rounded-xl bg-slate-800/40 border border-slate-700/50 backdrop-blur-sm hover:border-cyan-500/50 hover:bg-cyan-500/10 transition-all duration-300">
                  <tech.icon className={`text-2xl ${tech.color} transition-transform group-hover:scale-110`} />
                  <span className="absolute -top-10 left-1/2 -translate-x-1/2 px-2 py-1 bg-slate-800 text-xs text-white rounded opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap border border-slate-700">
                    {tech.name}
                  </span>
                </div>
              ))}
            </div>

            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-5 mb-12">
              <a href="#projects" className="glow-btn px-8 py-4 rounded-xl font-bold text-white bg-gradient-to-r from-cyan-600 to-indigo-700 shadow-xl shadow-cyan-900/20 hover:shadow-cyan-500/40 hover:-translate-y-1">
                Explore Projects
              </a>
              <a href="/General CV Template (approved) Ankit kumar (1).pdf" target="_blank" rel="noopener noreferrer" className="px-8 py-4 rounded-xl font-bold text-slate-300 border border-slate-700 hover:bg-white/5 hover:text-white hover:border-slate-500 transition-all">
                Download Resume
              </a>
            </div>

            <div className="flex space-x-6 justify-center lg:justify-start">
              {[
                { icon: FaGithub, href: personalInfo?.github },
                { icon: FaLinkedin, href: personalInfo?.linkedin },
                { icon: FaEnvelope, href: `mailto:${personalInfo?.email}` }
              ].map((item, idx) => (
                <a
                  key={idx}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 text-slate-500 hover:text-cyan-400 transition-colors duration-300"
                >
                  <item.icon size={26} />
                </a>
              ))}
            </div>
          </div>

          <div className="w-full lg:w-2/5 flex justify-center">
            <div className="relative">
              {/* Rotating Rings */}
              <div className="absolute inset-[-15px] border-2 border-dashed border-cyan-500/20 rounded-full animate-outer-spin"></div>
              <div className="absolute inset-[-30px] border border-indigo-500/10 rounded-full animate-inner-spin"></div>
              
              {/* Glowing Background */}
              <div className="absolute inset-0 bg-gradient-to-tr from-cyan-500 to-purple-600 rounded-full blur-[60px] opacity-30 animate-pulse"></div>

              <div className="relative w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-full p-2 bg-gradient-to-br from-cyan-400 via-indigo-500 to-purple-600 shadow-[0_0_50px_-12px_rgba(6,182,212,0.5)] animate-float">
                <div className="w-full h-full bg-slate-900 rounded-full overflow-hidden border-4 border-slate-900">
                  <img
                    src="/Ankit image.jpeg"
                    alt="Ankit Kumar"
                    className="w-full h-full object-cover scale-110 hover:scale-100 transition-transform duration-700"
                  />
                </div>
              </div>

              {/* Float Cards */}
              <div className="absolute -top-6 -right-6 glass-card p-4 rounded-2xl animate-float">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-cyan-500/20 flex items-center justify-center">
                    <FaReact className="text-cyan-400 text-xl" />
                  </div>
                  <div>
                    <p className="text-[10px] text-slate-400 uppercase tracking-widest font-bold">Expertise</p>
                    <p className="text-sm text-white font-bold">Full Stack Developer</p>
                  </div>
                </div>
              </div>

              <div className="absolute -bottom-10 -left-10 glass-card p-4 rounded-2xl animate-float animation-delay-2000">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-indigo-500/20 flex items-center justify-center">
                    <FaCode className="text-indigo-400 text-xl" />
                  </div>
                  <div>
                    <p className="text-[10px] text-slate-400 uppercase tracking-widest font-bold">Status</p>
                    <p className="text-sm text-white font-bold">Problem Solving</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;