import React, { useState, useEffect } from 'react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Education', href: '#education' },
    { name: 'Projects', href: '#projects' },
    { name: 'Experience', href: '#experience' },
    { name: 'Stats', href: '#stats' },
    { name: 'Certifications', href: '#certifications' },
    { name: 'Contact', href: '#contact' },
    { name: 'Resume', href: '/General CV Template (approved) Ankit kumar (1).pdf', external: true },
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${
      isScrolled ? 'nav-blur shadow-2xl shadow-cyan-500/10 py-2' : 'bg-transparent py-4'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0 relative group cursor-pointer">
            <div className="absolute -inset-1 rounded-lg bg-gradient-to-r from-cyan-400 to-indigo-500 opacity-30 blur transition duration-500 group-hover:opacity-70"></div>
            <a href="#home" className="relative text-2xl font-extrabold tracking-tight text-white flex items-center gap-2">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-indigo-500">&lt;</span>
              Ankit
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 to-cyan-400">/&gt;</span>
            </a>
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-1 border border-white/10 rounded-full px-2 py-1 bg-slate-800/50 backdrop-blur-md">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  target={link.external ? "_blank" : "_self"}
                  rel={link.external ? "noopener noreferrer" : ""}
                  className="px-4 py-2 rounded-full text-sm font-medium text-slate-300 hover:text-white hover:bg-white/10 transition-all duration-300 ease-in-out"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>

          {/* Connect Button */}
          <div className="hidden md:block">
             <a href="#contact" className="px-5 py-2 rounded-full text-sm font-semibold text-white bg-gradient-to-r from-cyan-500 to-indigo-600 hover:from-cyan-400 hover:to-indigo-500 shadow-lg shadow-cyan-500/30 transition-all hover:-translate-y-0.5">
               Let's Talk
             </a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-lg text-slate-300 hover:text-white hover:bg-white/10 focus:outline-none transition-colors border border-white/5"
            >
              {isOpen ? <XMarkIcon className="h-6 w-6" /> : <Bars3Icon className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-96 border-b border-white/10' : 'max-h-0'}`}>
        <div className="px-4 pt-2 pb-4 space-y-1 bg-slate-900/95 backdrop-blur-xl">
          {navLinks.map((link) => (
             <a
              key={link.name}
              href={link.href}
              target={link.external ? "_blank" : "_self"}
              rel={link.external ? "noopener noreferrer" : ""}
              className="block px-4 py-3 rounded-lg text-base font-medium text-slate-300 hover:text-white hover:bg-white/10 transition-colors"
              onClick={() => setIsOpen(false)}
            >
              {link.name}
            </a>
          ))}
          <div className="pt-4 pb-2 border-t border-white/10 mt-2">
            <a href="#contact" className="block w-full text-center px-4 py-3 rounded-lg text-base font-semibold text-white bg-gradient-to-r from-cyan-500 to-indigo-600">
               Let's Talk
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;