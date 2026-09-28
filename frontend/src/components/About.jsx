import React from 'react';
import { FaUserGraduate, FaLightbulb, FaRocket, FaHeart } from 'react-icons/fa';

const About = () => {
  const qualities = [
    {
      icon: FaUserGraduate,
      title: 'Continuous Learner',
      text: 'Currently pursuing B.Tech in CSE at Lovely Professional University with a focus on emerging web technologies and modern full-stack development.',
      color: 'bg-blue-50 text-blue-600 border-blue-200'
    },
    {
      icon: FaLightbulb,
      title: 'Problem Solver',
      text: 'Passionate about tackling complex logic and finding elegant solutions to real-world challenges with over 1000+ problems solved across platforms.',
      color: 'bg-amber-50 text-amber-600 border-amber-200'
    },
    {
      icon: FaRocket,
      title: 'Performance Focused',
      text: 'Dedicated to building high-speed, scalable applications with clean, maintainable code architecture, robust APIs, and responsive design.',
      color: 'bg-emerald-50 text-emerald-600 border-emerald-200'
    }
  ];

  return (
    <section id="about" className="space-y-8">
      {/* Philosophy Banner */}
      <div className="glass-card rounded-3xl p-8 sm:p-10 border border-slate-200/90 shadow-md relative overflow-hidden bg-gradient-to-r from-white via-indigo-50/20 to-white">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-8 space-y-4">
            <span className="section-label">Engineering Philosophy</span>
            <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
              Engineering <span className="text-brand-600 underline decoration-cyan-400 decoration-wavy decoration-2">Experiences</span>, Not Just Code.
            </h2>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              I'm a Full Stack Developer who thrives on turning complex problems into simple, beautiful, and intuitive digital solutions. My journey is fueled by a genuine curiosity for how things work and a relentless drive to build tools that make an impact.
            </p>
          </div>
          <div className="lg:col-span-4 flex justify-start lg:justify-end">
            <div className="flex items-center gap-4 p-4 rounded-2xl bg-white border border-slate-200 shadow-sm w-full lg:w-auto">
              <div className="w-12 h-12 rounded-xl bg-brand-50 text-brand-600 flex items-center justify-center text-xl shrink-0">
                <FaHeart />
              </div>
              <div>
                <p className="text-slate-900 font-bold text-sm">Driven by Passion</p>
                <p className="text-slate-400 text-xs font-mono uppercase tracking-wider">Built with Purpose</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Section Header */}
      <div className="text-center max-w-xl mx-auto space-y-2">
        <span className="section-label">Core Strengths</span>
        <h2 className="section-title">Discover The Developer</h2>
        <div className="h-1 w-12 bg-brand-500 rounded-full mx-auto mt-2"></div>
      </div>

      {/* Qualities Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {qualities.map((item, i) => (
          <div
            key={i}
            className="glass-card rounded-2xl p-6 border border-slate-200/90 shadow-sm hover:border-brand-300 hover:shadow-md transition-all duration-300 flex flex-col justify-between"
          >
            <div>
              <div className={`w-12 h-12 rounded-2xl ${item.color} flex items-center justify-center text-xl mb-5 shadow-sm border`}>
                <item.icon />
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">{item.title}</h3>
              <p className="text-sm text-slate-600 leading-relaxed">{item.text}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default About;
