import React from 'react';
import { FaCode, FaDatabase, FaTools, FaLaptopCode, FaCheck } from 'react-icons/fa';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Languages',
      icon: FaCode,
      skills: ['C++', 'JavaScript', 'C', 'PHP', 'Python'],
      iconBg: 'bg-indigo-50 text-indigo-600',
      hoverBorder: 'hover:border-indigo-300'
    },
    {
      title: 'Frameworks',
      icon: FaLaptopCode,
      skills: ['ReactJS', 'NodeJS', 'ExpressJS', 'Tailwind CSS', 'HTML5/CSS3'],
      iconBg: 'bg-emerald-50 text-emerald-600',
      hoverBorder: 'hover:border-emerald-300'
    },
    {
      title: 'Tools & DBs',
      icon: FaDatabase,
      skills: ['MongoDB', 'MySQL', 'Git & GitHub', 'MongoDB Atlas', 'Render'],
      iconBg: 'bg-purple-50 text-purple-600',
      hoverBorder: 'hover:border-purple-300'
    },
    {
      title: 'Soft Skills',
      icon: FaTools,
      skills: ['Analytical Thinking', 'Problem-Solving', 'Adaptability', 'Teamwork'],
      iconBg: 'bg-amber-50 text-amber-600',
      hoverBorder: 'hover:border-amber-300'
    }
  ];

  return (
    <section id="skills" className="space-y-8">
      <div className="text-center max-w-xl mx-auto space-y-2">
        <span className="section-label">Skills & Tech Stack</span>
        <h2 className="section-title">Technical Arsenal</h2>
        <div className="h-1 w-12 bg-brand-500 rounded-full mx-auto mt-2"></div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {skillCategories.map((category, index) => (
          <div
            key={index}
            className={`glass-card rounded-2xl p-6 border border-slate-200/90 shadow-sm ${category.hoverBorder} transition-all duration-300 flex flex-col justify-between`}
          >
            <div>
              <div className="flex items-center gap-3 mb-6 pb-4 border-b border-slate-100">
                <div className={`w-11 h-11 rounded-xl ${category.iconBg} flex items-center justify-center text-lg shadow-sm border border-slate-200/50`}>
                  <category.icon />
                </div>
                <h3 className="font-bold text-slate-900 text-base">{category.title}</h3>
              </div>

              <ul className="space-y-2.5 font-medium text-sm text-slate-700">
                {category.skills.map((skill, idx) => (
                  <li
                    key={idx}
                    className="flex items-center justify-between p-2.5 rounded-xl bg-slate-50/80 border border-slate-100 hover:bg-white hover:border-brand-200 transition-colors"
                  >
                    <span className="font-semibold text-xs sm:text-sm">{skill}</span>
                    <FaCheck className="text-emerald-500 text-xs shrink-0 ml-2" />
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