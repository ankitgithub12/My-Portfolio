import React from 'react';
import { FaCertificate, FaAward, FaExternalLinkAlt } from 'react-icons/fa';

const Certifications = () => {
  const certifications = [
    {
      title: 'UiPath Certified Professional Automation Developer Associate',
      issuer: 'UiPath',
      date: 'Jan 2026',
      category: 'Professional',
      link: 'https://credentials.uipath.com/profile/ankitkumar704208/wallet'
    },
    {
      title: 'Data Analytics with Python',
      issuer: 'NPTEL',
      date: 'Apr 2025',
      category: 'Academic',
      link: 'https://archive.nptel.ac.in/content/noc/NOC25/SEM1/Ecertificates/106/noc25-cs17/Course/NPTEL25CS17S114750033904282900.pdf'

    },
    {
      title: 'Data Structures and Algorithms',
      issuer: 'Iamneo',
      date: 'Dec 2024',
      category: 'Technical',
      link: 'https://lpucolab438.examly.io/certificate/U2FsdGVkX1%2BjF%2BM1pKTKzeg7xTpOsm7N4nPID9U%2BeOY%3D'
    },
    {
      title: 'Object Oriented Programming',
      issuer: 'Iamneo',
      date: 'Dec 2024',
      category: 'Technical',
      link: 'https://lpucolab438.examly.io/certificate/U2FsdGVkX18z0Viot%2BWmAFufFT7lErydzo7SSaKn0L4%3D'
        
    },
    {
      title: 'TCP/IP and Advanced Topics',
      issuer: 'Coursera',
      date: 'Nov 2024',
      category: 'Networking',
      link: 'https://www.coursera.org/account/accomplishments/verify/G1TRD20982P6'
    },
    {
      title: 'Packet Switching Networks and Algorithms',
      issuer: 'Coursera',
      date: 'Nov 2024',
      category: 'Networking',
      link: 'https://www.coursera.org/account/accomplishments/verify/RX8Z72NBBCCA'
    },
    {
      title: 'Software Development Process and Methodologies',
      issuer: 'Coursera',
      date: 'May 2024',
      category: 'Development',
      link: 'https://www.coursera.org/account/accomplishments/certificate/EDQGLD9VWNGW'
    }
  ];

  const groupedCerts = certifications.reduce((acc, cert) => {
    if (!acc[cert.category]) {
      acc[cert.category] = [];
    }
    acc[cert.category].push(cert);
    return acc;
  }, {});

  const categoryColors = {
    'Professional': 'from-blue-500 to-cyan-500',
    'Academic': 'from-purple-500 to-pink-500',
    'Technical': 'from-emerald-500 to-teal-500',
    'Networking': 'from-orange-500 to-amber-500',
    'Development': 'from-indigo-500 to-violet-500',
  };

  return (
    <section id="certifications" className="section-container relative">
      <div className="absolute right-0 bottom-1/4 w-96 h-96 bg-pink-500/10 rounded-full blur-[120px] pointer-events-none mix-blend-screen"></div>

      <div className="text-center mb-16 relative">
        <h2 className="section-title">
          <FaCertificate className="inline-block mr-3 text-cyan-400 mb-1" />
          Certifications
        </h2>
        <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-indigo-500 mx-auto rounded-full mt-[-2rem]"></div>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
        {Object.entries(groupedCerts).map(([category, certs]) => {
          const gradient = categoryColors[category] || 'from-cyan-500 to-blue-500';
          return (
            <div key={category} className="card group hover:-translate-y-3 transition-all duration-500">
              
              <div className="flex items-center mb-6 pb-4 border-b border-slate-700/50">
                <div className={`w-10 h-10 rounded-lg flex items-center justify-center mr-4 bg-gradient-to-br ${gradient} shadow-lg`}>
                  <FaAward className="text-white text-xl" />
                </div>
                <h3 className={`text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r ${gradient}`}>
                  {category}
                </h3>
              </div>
              
              <ul className="space-y-5">
                {certs.map((cert, idx) => (
                  <li key={idx} className="relative pl-6 before:content-[''] before:absolute before:left-0 before:top-2 before:w-2 before:h-2 before:bg-slate-600 before:group-hover:bg-cyan-400 before:rounded-full before:transition-colors">
                    <p className="font-bold text-slate-200 group-hover:text-white transition-colors leading-tight mb-1">
                      {cert.title}
                    </p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center text-sm text-slate-500 font-medium">
                        <span className="bg-slate-800 px-2 py-0.5 rounded text-xs border border-slate-700 mr-2">{cert.issuer}</span>
                        <span>{cert.date}</span>
                      </div>
                      {cert.link && (
                        <a 
                          href={cert.link} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="text-cyan-400 hover:text-cyan-300 transition-colors p-1"
                          title="View Certificate"
                        >
                          <FaExternalLinkAlt size={14} />
                        </a>
                      )}
                    </div>
                  </li>
                ))}
              </ul>
              
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Certifications;