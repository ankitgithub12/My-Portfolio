import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import CodingStats from './components/CodingStats';
import Certifications from './components/Certifications';
import Footer from './components/Footer';
import CustomCursor from './components/CustomCursor';
import About from './components/About';
import Education from './components/Education';
import Contact from './components/Contact';


function App() {
  const [codingStats, setCodingStats] = useState({
    leetcode: { easy: 0, medium: 0, hard: 0, total: 0 },
    gfg: { stats: { problemsSolved: 0 } }
  });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCodingStats = async () => {
      try {
        setLoading(true);
        const username = 'ankit6ewub';
        const leetcodeUser = 'Ankit639520';
        const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000';

        const response = await axios.get(`${API_URL}/api/stats/${leetcodeUser}/${username}`);
        setCodingStats(response.data);
        setError(null);
      } catch (err) {
        console.error('Error fetching coding stats:', err);
        setError('Failed to fetch coding statistics');
      } finally {
        setLoading(false);
      }
    };

    fetchCodingStats();

    const interval = setInterval(fetchCodingStats, 300000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('reveal-visible');
        }
      });
    }, observerOptions);

    document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const personalInfo = {
    name: 'Ankit Kumar',
    email: 'ankit639520@gmail.com',
    phone: '+91 6395204834',
    linkedin: 'https://www.linkedin.com/in/ankit-kumar-77637a289/',
    github: 'https://github.com/ankitgithub12',
    leetcode: 'https://leetcode.com/u/Ankit639520/',
    gfg: 'https://www.geeksforgeeks.org/profile/ankit6ewub',
    location: 'Punjab, India',
    web3forms_key: 'fe4c7d08-3bfe-4218-8ce4-d179ad10bd39'
  };

  return (
    <div className="min-h-screen relative overflow-x-hidden text-slate-800 bg-slate-50">
      {/* Ambient Light Orbs */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
        <div className="absolute -top-32 left-1/4 w-[500px] h-[500px] bg-indigo-200/40 rounded-full blur-[120px] mix-blend-multiply"></div>
        <div className="absolute top-1/3 -right-24 w-[450px] h-[450px] bg-cyan-100/60 rounded-full blur-[100px] mix-blend-multiply"></div>
        <div className="absolute bottom-1/4 left-10 w-[550px] h-[550px] bg-violet-100/50 rounded-full blur-[130px] mix-blend-multiply"></div>
      </div>

      <div className="relative z-10 bg-grid-pattern min-h-screen flex flex-col">
        <CustomCursor />
        <Navbar personalInfo={personalInfo} />
        <main className="flex-grow max-w-6xl mx-auto px-4 w-full space-y-24 py-10">
          <div className="reveal"><Hero personalInfo={personalInfo} /></div>
          <div className="reveal transition-delay-100"><About /></div>
          <div className="reveal transition-delay-200"><Skills /></div>
          <div className="reveal transition-delay-250"><Education /></div>
          <div className="reveal transition-delay-300"><Experience /></div>
          <div className="reveal transition-delay-400"><Projects /></div>
          <div className="reveal transition-delay-500"><CodingStats stats={codingStats} loading={loading} error={error} /></div>
          <div className="reveal transition-delay-600"><Certifications /></div>
          <div className="reveal transition-delay-700"><Contact personalInfo={personalInfo} /></div>
        </main>
        <Footer personalInfo={personalInfo} />
      </div>
    </div>
  );
}

export default App;