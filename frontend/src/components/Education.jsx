import React from 'react';
import { FaGraduationCap, FaCalendarAlt, FaMapMarkerAlt, FaAward } from 'react-icons/fa';

const Education = () => {
  const educationData = [
    {
      institution: "Lovely Professional University",
      location: "Punjab, India",
      degree: "Bachelor of Technology - Computer Science and Engineering",
      period: "Aug' 23 - Present",
      score: "CGPA: 7.52",
      icon: FaGraduationCap,
      color: "from-brand-600 to-indigo-600",
      iconBg: "bg-brand-50 text-brand-600",
      scoreBadge: "bg-brand-50 border-brand-200 text-brand-700",
      featured: true
    },
    {
      institution: "SitaRam Inter College",
      location: "Amroha, Uttar Pradesh",
      degree: "Intermediate (Class XII)",
      period: "Apr' 20 - Mar' 22",
      score: "Percentage: 76.40",
      icon: FaAward,
      color: "from-indigo-600 to-purple-600",
      iconBg: "bg-indigo-50 text-indigo-600",
      scoreBadge: "bg-indigo-50 border-indigo-200 text-indigo-700"
    },
    {
      institution: "SitaRam Inter College",
      location: "Amroha, Uttar Pradesh",
      degree: "Matriculation (Class X)",
      period: "Apr' 18 - Mar' 20",
      score: "Percentage: 82.00",
      icon: FaAward,
      color: "from-purple-600 to-pink-600",
      iconBg: "bg-purple-50 text-purple-600",
      scoreBadge: "bg-purple-50 border-purple-200 text-purple-700"
    }
  ];

  return (
    <section id="education" className="space-y-8">
      <div className="text-center max-w-xl mx-auto space-y-2">
        <span className="section-label">Academic Background</span>
        <h2 className="section-title flex items-center justify-center gap-2">
          <FaGraduationCap className="text-brand-600 text-2xl" /> Education
        </h2>
        <div className="h-1 w-12 bg-brand-500 rounded-full mx-auto mt-2"></div>
      </div>

      <div className="max-w-4xl mx-auto space-y-5">
        {educationData.map((edu, index) => (
          <div
            key={index}
            className="glass-card rounded-2xl p-6 border border-slate-200/90 shadow-sm hover:border-brand-300 hover:shadow-md transition-all duration-300 relative overflow-hidden"
          >
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div className="flex items-start gap-4">
                <div className={`w-12 h-12 rounded-2xl ${edu.iconBg} flex items-center justify-center text-xl shrink-0 shadow-sm border border-slate-200/60`}>
                  <edu.icon />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-slate-900 leading-snug">
                    {edu.institution}
                  </h3>
                  <p className="text-brand-600 font-semibold text-sm mt-0.5">
                    {edu.degree}
                  </p>
                  <p className="text-xs font-mono text-slate-500 flex items-center gap-1 mt-1.5">
                    <FaMapMarkerAlt className="text-slate-400" />
                    <span>{edu.location}</span>
                  </p>
                </div>
              </div>

              <div className="flex sm:flex-col items-center sm:items-end justify-between w-full sm:w-auto pt-3 sm:pt-0 border-t sm:border-t-0 border-slate-100 gap-2 shrink-0">
                <span className="flex items-center text-xs font-mono text-slate-500">
                  <FaCalendarAlt className="mr-1.5 text-brand-500 text-xs" />
                  {edu.period}
                </span>
                <span className={`px-3 py-1 rounded-full text-xs font-bold font-mono border ${edu.scoreBadge}`}>
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
