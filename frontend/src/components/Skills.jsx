import React from 'react';
import { FaCode, FaDatabase, FaTools, FaLaptopCode, FaCheck } from 'react-icons/fa';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Languages',
      icon: FaCode,
      skills: ['C++', 'JavaScript', 'C', 'PHP', 'Python'],
      gradient: 'from-indigo-600 to-blue-500',
      badgeColor: 'text-indigo-600 bg-indigo-50 border-indigo-200/80',
      hoverGlow: 'hover:shadow-indigo-500/15'
    },
    {
      title: 'Frameworks & Libs',
      icon: FaLaptopCode,
      skills: ['ReactJS', 'NodeJS', 'ExpressJS', 'Tailwind CSS', 'HTML5/CSS3'],
      gradient: 'from-emerald-600 to-teal-500',
      badgeColor: 'text-emerald-600 bg-emerald-50 border-emerald-200/80',
      hoverGlow: 'hover:shadow-emerald-500/15'
    },
    {
      title: 'Tools & Databases',
      icon: FaDatabase,
      skills: ['MongoDB', 'MySQL', 'Git & GitHub', 'MongoDB Atlas', 'Render'],
      gradient: 'from-purple-600 to-pink-500',
      badgeColor: 'text-purple-600 bg-purple-50 border-purple-200/80',
      hoverGlow: 'hover:shadow-purple-500/15'
    },
    {
      title: 'Core Competencies',
      icon: FaTools,
      skills: ['Analytical Thinking', 'Problem-Solving', 'Adaptability', 'Team Collaboration'],
      gradient: 'from-amber-600 to-orange-500',
      badgeColor: 'text-amber-600 bg-amber-50 border-amber-200/80',
      hoverGlow: 'hover:shadow-amber-500/15'
    }
  ];

  return (
    <section id="skills" className="space-y-8 relative z-10">
      <div className="text-center max-w-xl mx-auto space-y-2">
        <span className="section-label">Skills & Tech Stack</span>
        <h2 className="section-title">Technical Arsenal</h2>
        <div className="h-1 w-12 bg-gradient-to-r from-brand-500 to-indigo-500 rounded-full mx-auto mt-2"></div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {skillCategories.map((category, index) => (
          <div
            key={index}
            className={`glass-card-hover glass-card rounded-3xl p-6 sm:p-7 border border-white/80 shadow-md ${category.hoverGlow} flex flex-col justify-between group relative overflow-hidden`}
          >
            {/* Top gradient highlight */}
            <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${category.gradient} opacity-70 group-hover:opacity-100 transition-opacity`}></div>

            <div>
              <div className="flex items-center gap-3.5 mb-6 pb-4 border-b border-slate-200/70">
                <div className={`w-12 h-12 rounded-2xl bg-gradient-to-tr ${category.gradient} text-white flex items-center justify-center text-lg shadow-md shadow-brand-500/20 group-hover:scale-110 transition-transform`}>
                  <category.icon />
                </div>
                <div>
                  <h3 className="font-extrabold text-slate-900 text-base">{category.title}</h3>
                  <span className="text-[10px] font-mono text-slate-400 font-semibold">
                    {category.skills.length} Technologies
                  </span>
                </div>
              </div>

              <ul className="space-y-2.5 font-medium text-sm text-slate-700">
                {category.skills.map((skill, idx) => (
                  <li
                    key={idx}
                    className="flex items-center justify-between p-2.5 rounded-xl bg-white/60 backdrop-blur-md border border-white/90 hover:bg-white hover:border-brand-300 hover:shadow-sm transition-all duration-200 group/item"
                  >
                    <span className="font-semibold text-xs sm:text-sm text-slate-800 group-hover/item:text-brand-600 transition-colors">
                      {skill}
                    </span>
                    <span className="w-5 h-5 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center text-[10px] shrink-0 border border-emerald-200/80">
                      <FaCheck />
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;