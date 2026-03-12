import React from 'react';
import { FaGraduationCap, FaCalendarAlt, FaMapMarkerAlt, FaAward } from 'react-icons/fa';

const Education = () => {
  const educationData = [
    {
      institution: "Lovely Professional University",
      location: "Punjab, India",
      degree: "Bachelor of Technology - Computer Science and Engineering",
      period: "Aug' 23 - Present",
      score: "CGPA: 7.39",
      icon: FaGraduationCap,
      color: "from-cyan-500 to-blue-600"
    },
    {
      institution: "SitaRam Inter College",
      location: "Amroha, Uttar Pardesh",
      degree: "Intermediate (Class XII)",
      period: "Apr' 20 - Mar' 22",
      score: "Percentage: 76.4%",
      icon: FaAward,
      color: "from-indigo-500 to-purple-600"
    },
    {
      institution: "SitaRam Inter College",
      location: "Amroha, Uttar Pardesh",
      degree: "Matriculation (Class X)",
      period: "Apr' 18 - Mar' 20",
      score: "Percentage: 82%",
      icon: FaAward,
      color: "from-purple-500 to-pink-600"
    }
  ];

  return (
    <section id="education" className="section-container relative py-20">
      <div className="absolute left-1/2 -translate-x-1/2 top-0 w-[500px] h-[500px] bg-cyan-500/10 rounded-full blur-[120px] pointer-events-none mix-blend-screen"></div>
      
      <div className="text-center mb-16 relative">
        <h2 className="section-title">
          <FaGraduationCap className="inline-block mr-3 text-cyan-400 mb-1" />
          Education
        </h2>
        <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-indigo-500 mx-auto rounded-full mt-2"></div>
      </div>

      <div className="max-w-4xl mx-auto space-y-6">
        {educationData.map((edu, index) => (
          <div key={index} className="card group hover:-translate-y-1 transition-all duration-300 relative overflow-hidden">
            <div className={`absolute inset-0 bg-gradient-to-br ${edu.color} opacity-[0.03] group-hover:opacity-[0.06] transition-opacity duration-300`}></div>
            
            <div className="relative z-10 flex flex-col md:flex-row gap-6 md:items-center p-2">
              <div className={`w-14 h-14 rounded-2xl flex-shrink-0 flex items-center justify-center bg-gradient-to-br ${edu.color} shadow-lg shadow-cyan-500/10`}>
                <edu.icon className="text-white text-2xl" />
              </div>

              <div className="flex-grow">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                  <div>
                    <h3 className="text-xl font-bold text-white group-hover:text-cyan-400 transition-colors">
                      {edu.institution}
                    </h3>
                    <div className="flex flex-wrap items-center gap-x-4 gap-y-1 mt-1">
                      <p className="text-cyan-300 font-medium text-sm">
                        {edu.degree}
                      </p>
                      <span className="flex items-center text-slate-500 text-xs">
                        <FaMapMarkerAlt className="mr-1.5 text-indigo-500/50" />
                        {edu.location}
                      </span>
                    </div>
                  </div>
                  <div className="flex flex-col items-start md:items-end">
                    <span className="flex items-center text-slate-400 text-xs font-medium uppercase tracking-wider">
                      <FaCalendarAlt className="mr-2 text-cyan-500/70" />
                      {edu.period}
                    </span>
                    <div className="mt-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 font-bold text-xs">
                      {edu.score}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Education;
