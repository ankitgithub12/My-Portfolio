import React from 'react';
import { FaUserGraduate, FaLightbulb, FaRocket, FaHeart } from 'react-icons/fa';

const About = () => {
  const qualities = [
    {
      icon: FaUserGraduate,
      title: 'Continuous Learner',
      text: 'Currently pursuing B.Tech in CSE at Lovely Professional University with a focus on emerging web technologies.'
    },
    {
      icon: FaLightbulb,
      title: 'Problem Solver',
      text: 'Passionate about tackling complex logic and finding elegant solutions to real-world challenges.'
    },
    {
      icon: FaRocket,
      title: 'Performance Focused',
      text: 'Dedicated to building high-speed, scalable applications with clean, maintainable code architecture.'
    }
  ];

  return (
    <section id="about" className="section-container relative">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          {/* Visual Element */}
          <div className="w-full lg:w-1/2 relative">
            <div className="relative z-10 p-1 rounded-[2.5rem] bg-gradient-to-br from-cyan-500/20 to-indigo-500/20 backdrop-blur-3xl border border-white/5">
              <div className="bg-slate-900/40 rounded-[2.2rem] p-8 md:p-12 overflow-hidden">
                <h3 className="text-3xl md:text-4xl font-black text-white mb-8">
                  Engineering <span className="text-cyan-400">Experiences</span>, <br/>
                  Not Just Code.
                </h3>
                <p className="text-slate-400 leading-relaxed mb-8 text-lg">
                  I'm a Full Stack Developer who thrives on turning complex problems into simple, beautiful, and intuitive digital solutions. My journey is fueled by a curiosity for how things work and a drive to build tools that make an impact.
                </p>
                <div className="flex items-center gap-4 p-4 rounded-2xl bg-cyan-500/5 border border-cyan-500/10">
                   <div className="w-12 h-12 rounded-full bg-cyan-500 flex items-center justify-center text-white shadow-lg shadow-cyan-500/20">
                      <FaHeart />
                   </div>
                   <div>
                      <p className="text-white font-bold">Driven by Passion</p>
                      <p className="text-slate-400 text-xs uppercase tracking-widest">Built with Purpose</p>
                   </div>
                </div>
              </div>
            </div>
            {/* Background decorative shape */}
            <div className="absolute -top-10 -left-10 w-32 h-32 bg-indigo-500/10 rounded-full blur-3xl"></div>
            <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-cyan-500/10 rounded-full blur-3xl"></div>
          </div>

          {/* Text Content */}
          <div className="w-full lg:w-1/2">
            <h2 className="text-4xl md:text-5xl font-black text-white mb-12 tracking-tight">
               Discover <br/>
               <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-indigo-400">The Developer</span>
            </h2>
            
            <div className="space-y-8">
              {qualities.map((item, i) => (
                <div key={i} className="flex gap-6 group">
                  <div className="w-14 h-14 shrink-0 rounded-2xl bg-slate-800/50 border border-slate-700/50 flex items-center justify-center text-cyan-400 group-hover:border-cyan-500/50 group-hover:bg-cyan-500/10 transition-all duration-300">
                    <item.icon className="text-2xl" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-white mb-2">{item.title}</h4>
                    <p className="text-slate-400 leading-relaxed">{item.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
