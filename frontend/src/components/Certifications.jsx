import React, { useState } from 'react';
import {
  FaCertificate, FaAward, FaExternalLinkAlt, FaRobot, FaPython,
  FaCode, FaNetworkWired, FaLaptopCode, FaCalendarAlt
} from 'react-icons/fa';
import { SiOracle } from 'react-icons/si';

const Certifications = () => {
  const [viewBy, setViewBy] = useState('year'); // 'year' | 'category'

  const certifications = [
    {
      title: 'Oracle Cloud Infrastructure 2025 Certified AI Foundations Associate',
      issuer: 'Oracle',
      date: 'May 2026',
      fullDate: '07-MAY-2026',
      year: '2026',
      category: 'Professional',
      link: 'https://catalog-education.oracle.com/pls/certview/sharebadge?id=119C0537FD11D8D339F9A3B09F2183840A96FE7B6BC9AE1EA78B7E628D9FE058',
      icon: SiOracle,
      badgeColor: 'bg-red-50 text-red-700 border-red-200',
      iconColor: 'text-red-600 bg-red-50'
    },
    {
      title: 'UiPath Certified Professional Automation Developer Associate',
      issuer: 'UiPath',
      date: 'Jan 2026',
      fullDate: 'Jan 2026',
      year: '2026',
      category: 'Professional',
      link: 'https://credentials.uipath.com/profile/ankitkumar704208/wallet',
      icon: FaRobot,
      badgeColor: 'bg-blue-50 text-blue-700 border-blue-200',
      iconColor: 'text-blue-600 bg-blue-50'
    },
    {
      title: 'Data Analytics with Python',
      issuer: 'NPTEL',
      date: 'Apr 2025',
      fullDate: 'Apr 2025',
      year: '2025',
      category: 'Academic',
      link: 'https://archive.nptel.ac.in/content/noc/NOC25/SEM1/Ecertificates/106/noc25-cs17/Course/NPTEL25CS17S114750033904282900.pdf',
      icon: FaPython,
      badgeColor: 'bg-purple-50 text-purple-700 border-purple-200',
      iconColor: 'text-purple-600 bg-purple-50'
    },
    {
      title: 'Data Structures and Algorithms',
      issuer: 'Iamneo',
      date: 'Dec 2024',
      fullDate: 'Dec 2024',
      year: '2024',
      category: 'Technical',
      link: 'https://lpucolab438.examly.io/certificate/U2FsdGVkX1%2BjF%2BM1pKTKzeg7xTpOsm7N4nPID9U%2BeOY%3D',
      icon: FaCode,
      badgeColor: 'bg-emerald-50 text-emerald-700 border-emerald-200',
      iconColor: 'text-emerald-600 bg-emerald-50'
    },
    {
      title: 'Object Oriented Programming',
      issuer: 'Iamneo',
      date: 'Dec 2024',
      fullDate: 'Dec 2024',
      year: '2024',
      category: 'Technical',
      link: 'https://lpucolab438.examly.io/certificate/U2FsdGVkX18z0Viot%2BWmAFufFT7lErydzo7SSaKn0L4%3D',
      icon: FaCode,
      badgeColor: 'bg-emerald-50 text-emerald-700 border-emerald-200',
      iconColor: 'text-emerald-600 bg-emerald-50'
    },
    {
      title: 'TCP/IP and Advanced Topics',
      issuer: 'Coursera',
      date: 'Nov 2024',
      fullDate: 'Nov 2024',
      year: '2024',
      category: 'Networking',
      link: 'https://www.coursera.org/account/accomplishments/verify/G1TRD20982P6',
      icon: FaNetworkWired,
      badgeColor: 'bg-amber-50 text-amber-700 border-amber-200',
      iconColor: 'text-amber-600 bg-amber-50'
    },
    {
      title: 'Packet Switching Networks and Algorithms',
      issuer: 'Coursera',
      date: 'Nov 2024',
      fullDate: 'Nov 2024',
      year: '2024',
      category: 'Networking',
      link: 'https://www.coursera.org/account/accomplishments/verify/RX8Z72NBBCCA',
      icon: FaNetworkWired,
      badgeColor: 'bg-amber-50 text-amber-700 border-amber-200',
      iconColor: 'text-amber-600 bg-amber-50'
    },
    {
      title: 'Software Development Process and Methodologies',
      issuer: 'Coursera',
      date: 'May 2024',
      fullDate: 'May 2024',
      year: '2024',
      category: 'Development',
      link: 'https://www.coursera.org/account/accomplishments/certificate/EDQGLD9VWNGW',
      icon: FaLaptopCode,
      badgeColor: 'bg-indigo-50 text-indigo-700 border-indigo-200',
      iconColor: 'text-indigo-600 bg-indigo-50'
    }
  ];

  // Group by Year (Descending)
  const groupedByYear = certifications.reduce((acc, cert) => {
    if (!acc[cert.year]) {
      acc[cert.year] = [];
    }
    acc[cert.year].push(cert);
    return acc;
  }, {});

  // Group by Category
  const groupedByCategory = certifications.reduce((acc, cert) => {
    if (!acc[cert.category]) {
      acc[cert.category] = [];
    }
    acc[cert.category].push(cert);
    return acc;
  }, {});

  const yearMeta = {
    '2026': {
      title: '2026',
      subtitle: 'Latest Industry Credentials',
      badge: 'Current Year',
      badgeClass: 'bg-emerald-50 text-emerald-700 border-emerald-200',
      border: 'border-brand-200'
    },
    '2025': {
      title: '2025',
      subtitle: 'Specialized Analytics & Core Training',
      badge: 'Academic Excellence',
      badgeClass: 'bg-purple-50 text-purple-700 border-purple-200',
      border: 'border-slate-200'
    },
    '2024': {
      title: '2024',
      subtitle: 'Foundational Systems & DSA',
      badge: 'Foundations',
      badgeClass: 'bg-indigo-50 text-indigo-700 border-indigo-200',
      border: 'border-slate-200'
    }
  };

  const categoryStyles = {
    'Professional': { border: 'border-blue-200', text: 'text-blue-700', bg: 'bg-blue-50' },
    'Academic': { border: 'border-purple-200', text: 'text-purple-700', bg: 'bg-purple-50' },
    'Technical': { border: 'border-emerald-200', text: 'text-emerald-700', bg: 'bg-emerald-50' },
    'Networking': { border: 'border-amber-200', text: 'text-amber-700', bg: 'bg-amber-50' },
    'Development': { border: 'border-indigo-200', text: 'text-indigo-700', bg: 'bg-indigo-50' },
  };

  return (
    <section id="certifications" className="space-y-8">
      {/* Section Header */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
        <div>
          <span className="section-label">Verified Credentials</span>
          <h2 className="section-title flex items-center gap-2">
            <FaCertificate className="text-brand-600 text-2xl" /> Certifications & Courses
          </h2>
        </div>

        {/* View Switcher: By Year vs By Category */}
        <div className="inline-flex p-1 rounded-xl bg-slate-100 border border-slate-200 self-start sm:self-auto text-xs font-semibold">
          <button
            onClick={() => setViewBy('year')}
            className={`px-3 py-1.5 rounded-lg transition-all flex items-center gap-1.5 ${
              viewBy === 'year'
                ? 'bg-white text-brand-600 shadow-sm font-bold'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            <FaCalendarAlt className="text-xs" />
            <span>By Year</span>
          </button>
          <button
            onClick={() => setViewBy('category')}
            className={`px-3 py-1.5 rounded-lg transition-all flex items-center gap-1.5 ${
              viewBy === 'category'
                ? 'bg-white text-brand-600 shadow-sm font-bold'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            <FaAward className="text-xs" />
            <span>By Category</span>
          </button>
        </div>
      </div>

      {/* View By Year */}
      {viewBy === 'year' ? (
        <div className="space-y-6">
          {Object.entries(groupedByYear)
            .sort(([yearA], [yearB]) => Number(yearB) - Number(yearA))
            .map(([year, certs]) => {
              const meta = yearMeta[year] || {
                title: year,
                subtitle: '',
                badge: year,
                badgeClass: 'bg-slate-100 text-slate-700',
                border: 'border-slate-200'
              };

              return (
                <div
                  key={year}
                  className={`glass-card rounded-3xl p-6 sm:p-7 border ${meta.border} shadow-sm space-y-5`}
                >
                  {/* Year Header Strip */}
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-4 border-b border-slate-200/80 gap-2">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 rounded-2xl bg-brand-50 text-brand-600 flex items-center justify-center font-black text-lg border border-brand-200/60 shadow-sm font-mono">
                        {year}
                      </div>
                      <div>
                        <h3 className="font-bold text-slate-900 text-lg">Year {year}</h3>
                        <p className="text-xs text-slate-500 font-medium">{meta.subtitle}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2 self-start sm:self-auto">
                      <span className={`px-2.5 py-0.5 rounded-full text-xs font-semibold border ${meta.badgeClass}`}>
                        {meta.badge}
                      </span>
                      <span className="text-xs font-mono text-slate-400 bg-slate-100 px-2.5 py-0.5 rounded-full">
                        {certs.length} {certs.length === 1 ? 'credential' : 'credentials'}
                      </span>
                    </div>
                  </div>

                  {/* Certifications Grid for this Year */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {certs.map((cert, idx) => (
                      <div
                        key={idx}
                        className="p-4 sm:p-5 rounded-2xl bg-white border border-slate-200/80 hover:border-brand-300 hover:shadow-md transition-all duration-300 flex flex-col justify-between group"
                      >
                        <div className="space-y-3">
                          <div className="flex items-start justify-between gap-3">
                            <div className="flex items-center gap-2.5">
                              <div className={`w-9 h-9 rounded-xl ${cert.iconColor} flex items-center justify-center text-lg shrink-0 border border-slate-200/60`}>
                                <cert.icon />
                              </div>
                              <div>
                                <span className="font-bold text-xs text-slate-900 block">{cert.issuer}</span>
                                <span className="text-[11px] font-mono text-slate-400">{cert.fullDate || cert.date}</span>
                              </div>
                            </div>
                            <span className={`px-2 py-0.5 rounded text-[10px] font-semibold border shrink-0 ${cert.badgeColor}`}>
                              {cert.category}
                            </span>
                          </div>

                          <h4 className="font-bold text-sm text-slate-800 group-hover:text-brand-600 transition-colors leading-snug">
                            {cert.title}
                          </h4>
                        </div>

                        {cert.link && (
                          <div className="pt-3 mt-3 border-t border-slate-100 flex justify-end">
                            <a
                              href={cert.link}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center gap-1.5 text-xs font-bold text-brand-600 hover:text-brand-700 font-mono"
                            >
                              <span>Verify Credential</span>
                              <FaExternalLinkAlt className="text-[10px]" />
                            </a>
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
        </div>
      ) : (
        /* View By Category */
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {Object.entries(groupedByCategory).map(([category, certs]) => {
            const style = categoryStyles[category] || { border: 'border-slate-200', text: 'text-slate-700', bg: 'bg-slate-50' };
            return (
              <div
                key={category}
                className="glass-card rounded-2xl p-6 border border-slate-200/90 shadow-sm flex flex-col justify-between hover:border-brand-300 transition-all duration-300"
              >
                <div>
                  <div className="flex items-center justify-between mb-5 pb-3 border-b border-slate-200">
                    <div className="flex items-center gap-3">
                      <div className={`w-9 h-9 rounded-xl ${style.bg} ${style.text} flex items-center justify-center font-bold text-sm shadow-sm`}>
                        <FaAward />
                      </div>
                      <h3 className={`font-bold text-base ${style.text}`}>
                        {category}
                      </h3>
                    </div>
                    <span className="text-xs font-mono text-slate-400 bg-slate-100 px-2 py-0.5 rounded-full">
                      {certs.length} {certs.length === 1 ? 'cert' : 'certs'}
                    </span>
                  </div>

                  <ul className="space-y-4">
                    {certs.map((cert, idx) => (
                      <li key={idx} className="group/item">
                        <div className="flex items-start justify-between gap-2">
                          <div className="flex-1">
                            <p className="text-sm font-bold text-slate-800 group-hover/item:text-brand-600 transition-colors leading-snug">
                              {cert.title}
                            </p>
                            <div className="flex items-center gap-2 text-xs font-mono text-slate-500 mt-1.5 flex-wrap">
                              <span className="bg-slate-100 text-slate-700 px-2 py-0.5 rounded font-medium">
                                {cert.issuer}
                              </span>
                              <span>• {cert.date}</span>
                            </div>
                          </div>

                          {cert.link && (
                            <a
                              href={cert.link}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="p-1.5 rounded-lg bg-slate-50 text-slate-400 hover:text-brand-600 hover:bg-brand-50 border border-slate-200 transition-all shrink-0 mt-0.5"
                              title="Verify Certificate"
                            >
                              <FaExternalLinkAlt className="text-xs" />
                            </a>
                          )}
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </section>
  );
};

export default Certifications;