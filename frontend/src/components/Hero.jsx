import React from 'react';
import { FaGithub, FaLinkedin, FaEnvelope, FaPhone, FaReact } from 'react-icons/fa';

const Hero = ({ personalInfo }) => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background animated blobs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500/20 rounded-full mix-blend-screen filter blur-3xl opacity-70 animate-blob"></div>
      <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-indigo-500/20 rounded-full mix-blend-screen filter blur-3xl opacity-70 animate-blob animation-delay-2000"></div>
      <div className="absolute -bottom-32 left-1/2 w-96 h-96 bg-purple-500/20 rounded-full mix-blend-screen filter blur-3xl opacity-70 animate-blob animation-delay-4000"></div>

      <div className="section-container relative z-10 w-full">
        <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-12 lg:gap-20">
          
          <div className="w-full lg:w-3/5 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-cyan-500/30 bg-cyan-500/10 text-cyan-400 mb-8 backdrop-blur-sm">
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-cyan-500"></span>
              </span>
              <span className="text-sm font-medium tracking-wide">Available for Work</span>
            </div>

            <h1 className="text-5xl md:text-7xl font-extrabold mb-6 leading-tight tracking-tight">
              Hi, I'm <br className="hidden md:block"/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-indigo-400 to-purple-500 animate-gradient">
                {personalInfo?.name || 'Ankit Kumar'}
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-slate-300 mb-6 font-light">
              Full Stack Developer & Problem Solver
            </p>
            
            <p className="text-lg text-slate-400 mb-10 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
              Passionate about building scalable web applications with intuitive experiences. 
              Currently pursuing B.Tech in Computer Science at Lovely Professional University.
            </p>
            
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 mb-10">
              <a href="#projects" className="glass-btn">
                View My Work
              </a>
              <a href="#contact" className="relative inline-flex items-center justify-center px-8 py-4 rounded-xl font-semibold text-slate-300 border border-slate-700 hover:bg-white/5 transition-all duration-300">
                Contact Me
              </a>
            </div>

            <div className="flex space-x-5 justify-center lg:justify-start">
              {[
                { icon: FaGithub, href: personalInfo?.github, delay: '0' },
                { icon: FaLinkedin, href: personalInfo?.linkedin, delay: '100' },
                { icon: FaEnvelope, href: `mailto:${personalInfo?.email}`, delay: '200' },
                { icon: FaPhone, href: `tel:${personalInfo?.phone}`, delay: '300' }
              ].map((item, idx) => (
                <a 
                  key={idx}
                  href={item.href} 
                  target={item.href?.startsWith('http') ? "_blank" : "_self"} 
                  rel="noopener noreferrer" 
                  className="p-4 bg-slate-800/50 backdrop-blur-md rounded-xl text-slate-400 border border-slate-700 hover:text-cyan-400 hover:border-cyan-400 hover:-translate-y-1 hover:shadow-lg hover:shadow-cyan-500/20 transition-all duration-300"
                  style={{ animationDelay: `${item.delay}ms` }}
                >
                  <item.icon size={22} />
                </a>
              ))}
            </div>
          </div>
          
          <div className="w-full lg:w-2/5 flex justify-center mb-10 lg:mb-0">
            <div className="relative animate-float">
              {/* Outer decorative ring */}
              <div className="absolute inset-0 bg-gradient-to-tr from-cyan-400 to-indigo-500 rounded-full blur-2xl opacity-40"></div>
              
              <div className="relative w-72 h-72 md:w-96 md:h-96 rounded-full p-2 bg-gradient-to-br from-cyan-400 via-indigo-500 to-purple-600 overflow-hidden shadow-2xl">
                <div className="w-full h-full bg-slate-900 rounded-full flex items-center justify-center border-4 border-slate-900 relative">
                  <div className="text-8xl md:text-9xl font-black text-transparent bg-clip-text bg-gradient-to-br from-cyan-400 to-indigo-600 drop-shadow-2xl">
                    AK
                  </div>
                </div>
              </div>
              
              {/* Decorative nodes */}
              <div className="absolute top-10 right-10 w-12 h-12 bg-slate-800 rounded-full border border-slate-600 flex items-center justify-center shadow-lg transform hover:scale-110 transition-transform">
                <span className="text-cyan-400 font-bold">{'</>'}</span>
              </div>
              <div className="absolute bottom-16 left-4 w-14 h-14 bg-slate-800 rounded-full border border-slate-600 flex items-center justify-center shadow-lg backdrop-blur-sm transform hover:scale-110 transition-transform">
                 <FaReact className="text-cyan-400 text-2xl" />
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;