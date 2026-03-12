import React from 'react';
import { FaGithub, FaLinkedin, FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';

const Footer = ({ personalInfo }) => {
  return (
    <footer id="contact" className="relative border-t border-slate-800 bg-slate-900/80 backdrop-blur-xl overflow-hidden mt-20">
      
      {/* Decorative glow */}
      <div className="absolute top-0 left-1/2 -ml-[400px] w-[800px] h-[400px] bg-cyan-500/5 rounded-full blur-3xl rounded-t-none -z-10 mix-blend-screen pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-8">
          
          <div className="space-y-4">
            <a href="#home" className="inline-block text-2xl font-extrabold tracking-tight text-white mb-2">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-indigo-500">&lt;</span>
              Ankit
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 to-cyan-400">/&gt;</span>
            </a>
            <p className="text-slate-400 leading-relaxed max-w-sm">
              Computer Science student passionate about full-stack development, creating dynamic web applications, and problem-solving.
            </p>
            <div className="flex space-x-4 pt-2">
              <a href={personalInfo.github} target="_blank" rel="noopener noreferrer"
                 className="w-10 h-10 rounded-full bg-slate-800 border border-slate-700 flex items-center justify-center text-slate-400 hover:text-cyan-400 hover:border-cyan-400 hover:scale-110 transition-all duration-300">
                <FaGithub size={18} />
              </a>
              <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer"
                 className="w-10 h-10 rounded-full bg-slate-800 border border-slate-700 flex items-center justify-center text-slate-400 hover:text-blue-400 hover:border-blue-400 hover:scale-110 transition-all duration-300">
                <FaLinkedin size={18} />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-bold text-white mb-6 border-b border-slate-700/50 pb-2 inline-block">Quick Links</h4>
            <ul className="grid grid-cols-2 gap-y-3 gap-x-4">
              {['Home', 'Skills', 'Projects', 'Stats', 'Certifications'].map((item) => (
                <li key={item}>
                  <a href={`#${item.toLowerCase()}`} className="group flex items-center text-slate-400 hover:text-cyan-400 transition-colors">
                    <span className="mr-2 opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-0 transition-all text-cyan-500">&bull;</span>
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-bold text-white mb-6 border-b border-slate-700/50 pb-2 inline-block">Contact Info</h4>
            <ul className="space-y-4 text-slate-400">
              <li>
                <a href={`mailto:${personalInfo.email}`} className="group flex items-center hover:text-white transition-colors">
                  <div className="w-8 h-8 rounded-full bg-slate-800 border border-slate-700 flex items-center justify-center mr-3 group-hover:border-red-400 group-hover:text-red-400 transition-colors">
                    <FaEnvelope size={14} />
                  </div>
                  {personalInfo.email}
                </a>
              </li>
              <li>
                <a href={`tel:${personalInfo.phone}`} className="group flex items-center hover:text-white transition-colors">
                  <div className="w-8 h-8 rounded-full bg-slate-800 border border-slate-700 flex items-center justify-center mr-3 group-hover:border-green-400 group-hover:text-green-400 transition-colors">
                    <FaPhone size={14} />
                  </div>
                  {personalInfo.phone}
                </a>
              </li>
              <li className="flex items-center text-slate-400">
                 <div className="w-8 h-8 rounded-full bg-slate-800 border border-slate-700 flex items-center justify-center mr-3">
                   <FaMapMarkerAlt size={14} className="text-slate-500" />
                 </div>
                 {personalInfo.location}
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-slate-800 mt-16 pt-8 flex flex-col md:flex-row justify-between items-center text-slate-500 text-sm">
          <p>&copy; {new Date().getFullYear()} Ankit Kumar. All rights reserved.</p>
          <p className="mt-2 md:mt-0 flex items-center">
            Built with <span className="text-red-500 mx-1">❤️</span> using React + Vite + Tailwind
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;