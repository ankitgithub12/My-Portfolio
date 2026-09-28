import React from 'react';
import { FaGithub, FaLinkedin, FaEnvelope, FaPhone, FaMapMarkerAlt, FaHeart } from 'react-icons/fa';

const Footer = ({ personalInfo }) => {
  const quickLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Education', href: '#education' },
    { name: 'Experience', href: '#experience' },
    { name: 'Projects', href: '#projects' },
    { name: 'Stats', href: '#stats' },
    { name: 'Certifications', href: '#certifications' },
    { name: 'Contact', href: '#contact' },
  ];

  const cleanPhone = personalInfo?.phone ? personalInfo.phone.replace(/[\s-]+/g, '') : '+916395204834';

  return (
    <footer className="mt-16 sm:mt-24 border-t border-white/80 bg-white/75 backdrop-blur-2xl shadow-[0_-10px_35px_rgba(0,0,0,0.03)] relative z-10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-14">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-10">
          {/* Brand Info */}
          <div className="space-y-3">
            <a href="#home" className="flex items-center gap-2 group" aria-label="Ankit Kumar Home">
              <div className="w-8 h-8 rounded-xl bg-gradient-to-tr from-brand-600 to-indigo-500 flex items-center justify-center text-white font-mono font-bold text-xs shadow-md shadow-brand-500/20">
                &lt;/&gt;
              </div>
              <span className="text-xl font-bold tracking-tight text-slate-900 group-hover:text-brand-600 transition-colors">
                Ankit Kumar
              </span>
            </a>
            <p className="text-slate-600 text-xs sm:text-sm leading-relaxed max-w-sm">
              Computer Science student at LPU passionate about full-stack development, engineering robust web applications, and algorithmic problem-solving.
            </p>
            <div className="flex space-x-3 pt-2">
              <a
                href={personalInfo?.github}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-xl bg-white border border-slate-200 flex items-center justify-center text-slate-600 hover:text-brand-600 hover:border-brand-300 hover:scale-105 transition-all shadow-sm"
                aria-label="Ankit Kumar on GitHub"
              >
                <FaGithub size={16} />
              </a>
              <a
                href={personalInfo?.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-xl bg-white border border-slate-200 flex items-center justify-center text-slate-600 hover:text-[#0A66C2] hover:border-[#0A66C2] hover:scale-105 transition-all shadow-sm"
                aria-label="Ankit Kumar on LinkedIn"
              >
                <FaLinkedin size={16} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xs sm:text-sm font-bold uppercase tracking-wider text-slate-900 mb-3 sm:mb-4 pb-2 border-b border-slate-100 inline-block font-mono">
              Quick Links
            </h4>
            <ul className="grid grid-cols-2 gap-y-2 gap-x-4 text-xs font-semibold text-slate-600">
              {quickLinks.map((item) => (
                <li key={item.name}>
                  <a
                    href={item.href}
                    className="hover:text-brand-600 transition-colors flex items-center gap-1.5 py-0.5"
                  >
                    <span className="text-brand-500">•</span>
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Details */}
          <div>
            <h4 className="text-xs sm:text-sm font-bold uppercase tracking-wider text-slate-900 mb-3 sm:mb-4 pb-2 border-b border-slate-100 inline-block font-mono">
              Contact Info
            </h4>
            <ul className="space-y-3 text-xs text-slate-600">
              <li>
                <a
                  href={`mailto:${personalInfo?.email || 'ankit639520@gmail.com'}`}
                  className="flex items-center hover:text-brand-600 transition-colors gap-2.5"
                >
                  <div className="w-7 h-7 rounded-lg bg-rose-50 text-rose-500 border border-rose-100 flex items-center justify-center shrink-0">
                    <FaEnvelope size={12} />
                  </div>
                  <span className="break-all">{personalInfo?.email || 'ankit639520@gmail.com'}</span>
                </a>
              </li>
              <li>
                <a
                  href={`tel:${cleanPhone}`}
                  className="flex items-center hover:text-brand-600 transition-colors gap-2.5"
                >
                  <div className="w-7 h-7 rounded-lg bg-emerald-50 text-emerald-600 border border-emerald-100 flex items-center justify-center shrink-0">
                    <FaPhone size={12} />
                  </div>
                  <span>{personalInfo?.phone || '+91 6395204834'}</span>
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <div className="w-7 h-7 rounded-lg bg-indigo-50 text-brand-600 border border-indigo-100 flex items-center justify-center shrink-0">
                  <FaMapMarkerAlt size={12} />
                </div>
                <span>{personalInfo?.location || 'Punjab, India'}</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-slate-200 mt-10 pt-6 flex flex-col sm:flex-row justify-between items-center text-slate-500 text-xs gap-3">
          <p>&copy; {new Date().getFullYear()} Ankit Kumar. All rights reserved.</p>
          <p className="flex items-center gap-1">
            Built with <FaHeart className="text-rose-500 text-xs" /> using React + Vite + Tailwind
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;