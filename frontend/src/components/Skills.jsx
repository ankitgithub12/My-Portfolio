import React from 'react';
import { FaCode, FaDatabase, FaTools, FaLaptopCode } from 'react-icons/fa';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Languages',
      icon: FaCode,
      skills: ['C++', 'JavaScript', 'C', 'PHP', 'Python'],
      bgGradient: 'from-blue-500/20 to-cyan-500/20',
      iconColor: 'text-cyan-400',
      borderColor: 'group-hover:border-cyan-500/50'
    },
    {
      title: 'Frameworks',
      icon: FaLaptopCode,
      skills: ['ReactJS', 'NodeJS', 'ExpressJS', 'Tailwind CSS', 'HTML5/CSS3'],
      bgGradient: 'from-green-500/20 to-emerald-500/20',
      iconColor: 'text-emerald-400',
      borderColor: 'group-hover:border-emerald-500/50'
    },
    {
      title: 'Tools & DBs',
      icon: FaDatabase,
      skills: ['MongoDB', 'MySQL', 'Git & GitHub', 'MongoDB Atlas', 'Render'],
      bgGradient: 'from-purple-500/20 to-pink-500/20',
      iconColor: 'text-purple-400',
      borderColor: 'group-hover:border-purple-500/50'
    },
    {
      title: 'Soft Skills',
      icon: FaTools,
      skills: ['Analytical Thinking', 'Problem-Solving', 'Adaptability', 'Teamwork'],
      bgGradient: 'from-orange-500/20 to-amber-500/20',
      iconColor: 'text-amber-400',
      borderColor: 'group-hover:border-amber-500/50'
    }
  ];

  return (
    <section id="skills" className="section-container relative">
      <div className="absolute right-0 top-1/3 w-96 h-96 bg-cyan-500/10 rounded-full blur-[120px] pointer-events-none mix-blend-screen"></div>

      <div className="text-center mb-16 relative">
        <h2 className="section-title">Technical Arsenal</h2>
        <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-indigo-500 mx-auto rounded-full mt-[-2rem]"></div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {skillCategories.map((category, index) => (
          <div key={index} className={`card group p-6 xl:p-8 ${category.borderColor}`}>

            <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${category.bgGradient} rounded-bl-full opacity-50 transition-transform duration-500 group-hover:scale-110`}></div>

            <div className="relative z-10">
              <div className="flex flex-col items-center mb-8 text-center">
                <div className={`w-16 h-16 rounded-2xl bg-slate-800/80 border border-slate-700/50 flex items-center justify-center mb-4 backdrop-blur-md shadow-lg transform group-hover:-translate-y-2 transition-all duration-300 ${category.iconColor}`}>
                  <category.icon className="text-3xl" />
                </div>
                <h3 className="text-xl font-bold text-white">{category.title}</h3>
              </div>

              <ul className="space-y-3">
                {category.skills.map((skill, idx) => (
                  <li key={idx} className="flex items-center text-slate-300 group-hover:text-white transition-colors">
                    <span className={`w-1.5 h-1.5 rounded-full mr-3 ${category.iconColor.replace('text', 'bg')}`}></span>
                    <span className="font-medium text-sm">{skill}</span>
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