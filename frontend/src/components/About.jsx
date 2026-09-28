import React from 'react';
import { FaUserGraduate, FaLightbulb, FaRocket, FaHeart, FaCode, FaCheckCircle } from 'react-icons/fa';

const About = () => {
  const qualities = [
    {
      icon: FaUserGraduate,
      title: 'Continuous Learner',
      subtitle: 'B.Tech CSE @ LPU',
      text: 'Pursuing Computer Science and Engineering at Lovely Professional University, actively mastering modern full-stack architectures and emerging web technologies.',
      gradient: 'from-blue-500 to-indigo-500',
      badgeBg: 'bg-blue-50 text-blue-600 border-blue-200/80',
      glow: 'group-hover:shadow-blue-500/20'
    },
    {
      icon: FaLightbulb,
      title: 'Algorithmic Thinker',
      subtitle: '1000+ Problems Solved',
      text: 'Passionate about tackling complex algorithmic challenges with elegant, optimal solutions across LeetCode, GeeksforGeeks, and competitive programming arenas.',
      gradient: 'from-amber-500 to-orange-500',
      badgeBg: 'bg-amber-50 text-amber-600 border-amber-200/80',
      glow: 'group-hover:shadow-amber-500/20'
    },
    {
      icon: FaRocket,
      title: 'Production Architect',
      subtitle: 'High Scalability & Speed',
      text: 'Dedicated to building high-speed, scalable applications with clean MVC/Service patterns, robust RESTful APIs, WebSockets, and sub-second database optimizations.',
      gradient: 'from-emerald-500 to-teal-500',
      badgeBg: 'bg-emerald-50 text-emerald-600 border-emerald-200/80',
      glow: 'group-hover:shadow-emerald-500/20'
    }
  ];

  return (
    <section id="about" className="space-y-8 relative z-10">
      {/* Philosophy Banner with Glassmorphism & Specular Border */}
      <div className="glass-card-premium rounded-3xl p-8 sm:p-11 border border-white/90 shadow-xl relative overflow-hidden group">
        {/* Ambient Top Glow Line */}
        <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-brand-500 to-transparent opacity-80"></div>
        <div className="absolute -right-20 -bottom-20 w-64 h-64 bg-brand-400/10 rounded-full blur-3xl pointer-events-none"></div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
          <div className="lg:col-span-8 space-y-4">
            <span className="section-label">Engineering Philosophy</span>
            <h2 className="text-2xl sm:text-4xl font-black text-slate-900 tracking-tight leading-snug">
              Engineering <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-600 to-indigo-600">Impactful Experiences</span>, Not Just Code.
            </h2>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              I'm a Full Stack Developer who thrives on turning complex architectural challenges into simple, robust, and intuitive digital ecosystems. My journey is fueled by a deep curiosity for high-performance systems and a relentless commitment to building platforms that scale.
            </p>
          </div>

          <div className="lg:col-span-4 flex justify-start lg:justify-end">
            <div className="glass-card p-5 rounded-2xl border border-white/90 shadow-lg flex items-center gap-4 w-full lg:w-auto hover:shadow-xl transition-all duration-300">
              <div className="w-13 h-13 w-12 h-12 rounded-2xl bg-gradient-to-tr from-brand-600 to-indigo-500 text-white flex items-center justify-center text-xl shrink-0 shadow-lg shadow-brand-500/30 animate-pulse-subtle">
                <FaHeart />
              </div>
              <div>
                <p className="text-slate-900 font-extrabold text-sm sm:text-base">Driven by Passion</p>
                <p className="text-brand-600 text-xs font-mono font-semibold uppercase tracking-wider">Built with Purpose</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Section Header */}
      <div className="text-center max-w-xl mx-auto space-y-2">
        <span className="section-label">Core Strengths</span>
        <h2 className="section-title">Discover The Developer</h2>
        <div className="h-1 w-12 bg-gradient-to-r from-brand-500 to-indigo-500 rounded-full mx-auto mt-2"></div>
      </div>

      {/* Qualities Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {qualities.map((item, i) => (
          <div
            key={i}
            className={`glass-card-hover glass-card rounded-3xl p-7 border border-white/80 shadow-md flex flex-col justify-between group relative overflow-hidden ${item.glow}`}
          >
            {/* Top colored accent line */}
            <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${item.gradient} opacity-80 group-hover:opacity-100 transition-opacity`}></div>

            <div>
              <div className="flex items-center justify-between mb-5">
                <div className={`w-13 h-13 w-12 h-12 rounded-2xl bg-gradient-to-tr ${item.gradient} text-white flex items-center justify-center text-xl shadow-lg transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3`}>
                  <item.icon />
                </div>
                <span className={`text-[10px] font-mono font-bold px-2.5 py-1 rounded-full border ${item.badgeBg}`}>
                  {item.subtitle}
                </span>
              </div>

              <h3 className="text-lg font-extrabold text-slate-900 mb-2 group-hover:text-brand-600 transition-colors">
                {item.title}
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed font-normal">
                {item.text}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default About;
