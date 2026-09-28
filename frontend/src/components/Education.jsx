import React from 'react';
import { FaGraduationCap, FaCalendarAlt, FaMapMarkerAlt, FaAward } from 'react-icons/fa';

const Education = () => {
  const educationData = [
    {
      institution: "Lovely Professional University",
      location: "Punjab, India",
      degree: "Bachelor of Technology - Computer Science and Engineering",
      period: "Aug' 23 - Present",
      score: "CGPA: 7.73",
      icon: FaGraduationCap,
      gradient: "from-brand-600 via-indigo-600 to-indigo-500",
      scoreBadge: "bg-brand-50 border-brand-200/90 text-brand-700",
      featured: true
    },
    {
      institution: "SitaRam Inter College",
      location: "Amroha, Uttar Pradesh",
      degree: "Intermediate (Class XII)",
      period: "Apr' 20 - Mar' 22",
      score: "Percentage: 76.40",
      icon: FaAward,
      gradient: "from-indigo-600 via-purple-600 to-purple-500",
      scoreBadge: "bg-indigo-50 border-indigo-200/90 text-indigo-700"
    },
    {
      institution: "SitaRam Inter College",
      location: "Amroha, Uttar Pradesh",
      degree: "Matriculation (Class X)",
      period: "Apr' 18 - Mar' 20",
      score: "Percentage: 82.00",
      icon: FaAward,
      gradient: "from-purple-600 via-pink-600 to-rose-500",
      scoreBadge: "bg-purple-50 border-purple-200/90 text-purple-700"
    }
  ];

  return (
    <section id="education" className="space-y-8 relative z-10">
      <div className="text-center max-w-xl mx-auto space-y-2">
        <span className="section-label">Academic Background</span>
        <h2 className="section-title flex items-center justify-center gap-2">
          <FaGraduationCap className="text-brand-600 text-2xl" /> Education
        </h2>
        <div className="h-1 w-12 bg-gradient-to-r from-brand-500 to-indigo-500 rounded-full mx-auto mt-2"></div>
      </div>

      <div className="max-w-4xl mx-auto space-y-5">
        {educationData.map((edu, index) => (
          <div
            key={index}
            className="glass-card-hover glass-card rounded-3xl p-6 sm:p-7 border border-white/90 shadow-md transition-all duration-300 relative overflow-hidden group"
          >
            {/* Top accent highlight */}
            <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${edu.gradient} opacity-70 group-hover:opacity-100 transition-opacity`}></div>

            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-5">
              <div className="flex items-start gap-4">
                <div className={`w-13 h-13 sm:w-14 sm:h-14 rounded-2xl bg-gradient-to-tr ${edu.gradient} text-white flex items-center justify-center text-xl sm:text-2xl shrink-0 shadow-lg shadow-brand-500/20 group-hover:scale-105 transition-transform`}>
                  <edu.icon />
                </div>
                <div>
                  <h3 className="text-lg sm:text-xl font-extrabold text-slate-900 leading-snug">
                    {edu.institution}
                  </h3>
                  <p className="text-brand-600 font-bold text-sm mt-0.5">
                    {edu.degree}
                  </p>
                  <p className="text-xs font-mono text-slate-500 flex items-center gap-1.5 mt-1.5 bg-white/70 px-2.5 py-1 rounded-md border border-slate-200/60 w-fit">
                    <FaMapMarkerAlt className="text-slate-400" />
                    <span>{edu.location}</span>
                  </p>
                </div>
              </div>

              <div className="flex sm:flex-col items-center sm:items-end justify-between w-full sm:w-auto pt-3 sm:pt-0 border-t sm:border-t-0 border-slate-200/70 gap-2 shrink-0">
                <span className="flex items-center text-xs font-mono font-semibold text-slate-500 bg-white/80 px-2.5 py-1 rounded-md border border-slate-200/70">
                  <FaCalendarAlt className="mr-1.5 text-brand-500 text-xs" />
                  {edu.period}
                </span>
                <span className={`px-3.5 py-1 rounded-full text-xs font-extrabold font-mono border shadow-xs ${edu.scoreBadge}`}>
                  {edu.score}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Education;
