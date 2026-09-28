import React, { useState, useEffect } from 'react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import { FaFileDownload } from 'react-icons/fa';

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
    { name: 'Experience', href: '#experience' },
    { name: 'Projects', href: '#projects' },
    { name: 'Stats', href: '#stats' },
    { name: 'Certifications', href: '#certifications' },
    { name: 'Contact', href: '#contact' },
    { name: 'Resume', href: '/Ankit cv.pdf', external: true },
  ];

  return (
    <header className="sticky top-2 sm:top-4 z-50 px-2 sm:px-4 max-w-6xl mx-auto w-full">
      <nav
        aria-label="Main Navigation"
        className={`glass-nav rounded-2xl px-3.5 sm:px-5 py-2.5 sm:py-3 flex items-center justify-between transition-all duration-500 ${
          isScrolled
            ? 'shadow-xl shadow-slate-200/60 bg-white/90 border-white/90'
            : 'shadow-md shadow-slate-200/40 bg-white/75 border-white/80'
        }`}
      >
        {/* Logo */}
        <a className="flex items-center gap-2.5 group shrink-0" href="#home" aria-label="Ankit Kumar Home">
          <div className="relative">
            <div className="absolute -inset-1 rounded-xl bg-gradient-to-r from-brand-600 via-indigo-500 to-cyan-400 opacity-60 blur-sm group-hover:opacity-100 transition-opacity"></div>
            <div className="relative w-8 h-8 sm:w-9 sm:h-9 rounded-xl bg-gradient-to-tr from-brand-600 via-indigo-600 to-indigo-500 flex items-center justify-center text-white font-mono font-bold shadow-md shadow-brand-500/25 group-hover:scale-105 transition-transform text-xs sm:text-sm">
              &lt;/&gt;
            </div>
          </div>
          <div className="flex flex-col">
            <span className="font-extrabold text-slate-900 tracking-tight text-sm sm:text-base group-hover:text-brand-600 transition-colors">
              Ankit Kumar
            </span>
            <span className="text-[9px] sm:text-[10px] font-mono font-semibold text-slate-400 tracking-wide uppercase">
              Full Stack Dev
            </span>
          </div>
        </a>

        {/* Desktop Menu Links */}
        <div className="hidden xl:flex items-center space-x-1 2xl:space-x-2 text-xs font-semibold text-slate-600">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              target={link.external ? "_blank" : "_self"}
              rel={link.external ? "noopener noreferrer" : ""}
              className="px-2.5 py-1.5 rounded-lg hover:text-brand-600 hover:bg-white/80 hover:shadow-sm transition-all duration-200 flex items-center gap-1 border border-transparent hover:border-slate-200/60"
            >
              <span>{link.name}</span>
              {link.external && <FaFileDownload className="text-[10px] text-brand-500" />}
            </a>
          ))}
        </div>

        {/* Action Button & Mobile Toggle */}
        <div className="flex items-center gap-2 sm:gap-3">
          <a
            href="#contact"
            className="shimmer-hover px-4 py-2 text-xs font-bold uppercase tracking-wider text-white bg-gradient-to-r from-slate-900 via-brand-800 to-slate-900 hover:from-brand-600 hover:to-indigo-600 rounded-xl transition-all shadow-md hover:shadow-brand-500/25 active:scale-95 shrink-0 border border-white/20"
          >
            Let's Talk
          </a>
          
          {/* Hamburger button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="xl:hidden inline-flex items-center justify-center p-2 rounded-xl text-slate-700 hover:text-brand-600 hover:bg-white/90 focus:outline-none transition-colors border border-slate-200/80 shadow-sm"
            aria-label="Toggle Navigation Menu"
            aria-expanded={isOpen}
          >
            {isOpen ? <XMarkIcon className="h-5 w-5" /> : <Bars3Icon className="h-5 w-5" />}
          </button>
        </div>
      </nav>

      {/* Mobile & Tablet Drawer Menu */}
      <div
        className={`xl:hidden overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ? 'max-h-[600px] mt-2 opacity-100' : 'max-h-0 opacity-0 pointer-events-none'
        }`}
      >
        <div className="glass-card rounded-2xl px-4 pt-2 pb-4 space-y-1 border border-slate-200/90 shadow-xl bg-white/95 backdrop-blur-xl">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              target={link.external ? "_blank" : "_self"}
              rel={link.external ? "noopener noreferrer" : ""}
              className="block px-3.5 py-2.5 rounded-xl text-sm font-semibold text-slate-700 hover:text-brand-600 hover:bg-brand-50 transition-colors flex items-center justify-between"
              onClick={() => setIsOpen(false)}
            >
              <span>{link.name}</span>
              {link.external && <FaFileDownload className="text-xs text-brand-500" />}
            </a>
          ))}
          <div className="pt-3 pb-1 border-t border-slate-100 mt-2">
            <a
              href="#contact"
              className="block w-full text-center px-4 py-2.5 rounded-xl text-sm font-semibold text-white bg-brand-600 hover:bg-brand-700 transition-colors shadow-md shadow-brand-500/20"
              onClick={() => setIsOpen(false)}
            >
              Let's Talk
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;