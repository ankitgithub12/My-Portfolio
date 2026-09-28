import React from 'react';
import {
  FaCertificate, FaAward, FaExternalLinkAlt, FaRobot, FaPython,
  FaCode, FaNetworkWired, FaLaptopCode
} from 'react-icons/fa';
import { SiOracle } from 'react-icons/si';

const Certifications = () => {
  const certifications = [
    {
      title: 'Oracle Cloud Infrastructure 2025 Certified AI Foundations Associate',
      issuer: 'Oracle',
      date: '07-MAY-2026',
      category: 'Professional',
      link: 'https://catalog-education.oracle.com/pls/certview/sharebadge?id=119C0537FD11D8D339F9A3B09F2183840A96FE7B6BC9AE1EA78B7E628D9FE058',
      icon: SiOracle,
      badgeColor: 'bg-red-50 text-red-700 border-red-200'
    },
    {
      title: 'UiPath Certified Professional Automation Developer Associate',
      issuer: 'UiPath',
      date: 'Jan 2026',
      category: 'Professional',
      link: 'https://credentials.uipath.com/profile/ankitkumar704208/wallet',
      icon: FaRobot,
      badgeColor: 'bg-blue-50 text-blue-700 border-blue-200'
    },
    {
      title: 'Data Analytics with Python',
      issuer: 'NPTEL',
      date: 'Apr 2025',
      category: 'Academic',
      link: 'https://archive.nptel.ac.in/content/noc/NOC25/SEM1/Ecertificates/106/noc25-cs17/Course/NPTEL25CS17S114750033904282900.pdf',
      icon: FaPython,
      badgeColor: 'bg-purple-50 text-purple-700 border-purple-200'
    },
    {
      title: 'Data Structures and Algorithms',
      issuer: 'Iamneo',
      date: 'Dec 2024',
      category: 'Technical',
      link: 'https://lpucolab438.examly.io/certificate/U2FsdGVkX1%2BjF%2BM1pKTKzeg7xTpOsm7N4nPID9U%2BeOY%3D',
      icon: FaCode,
      badgeColor: 'bg-emerald-50 text-emerald-700 border-emerald-200'
    },
    {
      title: 'Object Oriented Programming',
      issuer: 'Iamneo',
      date: 'Dec 2024',
      category: 'Technical',
      link: 'https://lpucolab438.examly.io/certificate/U2FsdGVkX18z0Viot%2BWmAFufFT7lErydzo7SSaKn0L4%3D',
      icon: FaCode,
      badgeColor: 'bg-emerald-50 text-emerald-700 border-emerald-200'
    },
    {
      title: 'TCP/IP and Advanced Topics',
      issuer: 'Coursera',
      date: 'Nov 2024',
      category: 'Networking',
      link: 'https://www.coursera.org/account/accomplishments/verify/G1TRD20982P6',
      icon: FaNetworkWired,
      badgeColor: 'bg-amber-50 text-amber-700 border-amber-200'
    },
    {
      title: 'Packet Switching Networks and Algorithms',
      issuer: 'Coursera',
      date: 'Nov 2024',
      category: 'Networking',
      link: 'https://www.coursera.org/account/accomplishments/verify/RX8Z72NBBCCA',
      icon: FaNetworkWired,
      badgeColor: 'bg-amber-50 text-amber-700 border-amber-200'
    },
    {
      title: 'Software Development Process and Methodologies',
      issuer: 'Coursera',
      date: 'May 2024',
      category: 'Development',
      link: 'https://www.coursera.org/account/accomplishments/certificate/EDQGLD9VWNGW',
      icon: FaLaptopCode,
      badgeColor: 'bg-indigo-50 text-indigo-700 border-indigo-200'
    }
  ];

  // Group by Category
  const groupedCerts = certifications.reduce((acc, cert) => {
    if (!acc[cert.category]) {
      acc[cert.category] = [];
    }
    acc[cert.category].push(cert);
    return acc;
  }, {});

  const categoryStyles = {
    'Professional': { border: 'border-blue-200', text: 'text-blue-700', bg: 'bg-blue-50' },
    'Academic': { border: 'border-purple-200', text: 'text-purple-700', bg: 'bg-purple-50' },
    'Technical': { border: 'border-emerald-200', text: 'text-emerald-700', bg: 'bg-emerald-50' },
    'Networking': { border: 'border-amber-200', text: 'text-amber-700', bg: 'bg-amber-50' },
    'Development': { border: 'border-indigo-200', text: 'text-indigo-700', bg: 'bg-indigo-50' },
  };

  return (
    <section id="certifications" className="space-y-8">
      <div className="text-center max-w-xl mx-auto space-y-2">
        <span className="section-label">Verified Credentials</span>
        <h2 className="section-title flex items-center justify-center gap-2">
          <FaCertificate className="text-brand-600 text-2xl" /> Certifications & Courses
        </h2>
        <div className="h-1 w-12 bg-brand-500 rounded-full mx-auto mt-2"></div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {Object.entries(groupedCerts).map(([category, certs]) => {
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
    </section>
  );
};

export default Certifications;