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
        // Replace with your actual usernames
        const username = 'ankit6ewub'; // Your LeetCode/GFG username
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
    
    // Refresh data every 5 minutes (matches GFG cache TTL)
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
    phone: '+91-6395204834',
    linkedin: 'https://www.linkedin.com/in/ankit-kumar-77637a289/',
    github: 'https://github.com/ankitgithub12',
    location: 'Punjab, India'
  };

  return (
    <div className="min-h-screen relative overflow-x-hidden text-slate-200">
      <CustomCursor />
      <Navbar />
      <div className="reveal"><Hero personalInfo={personalInfo} /></div>
      <div className="reveal transition-delay-100"><About /></div>
      <div className="reveal transition-delay-200"><Skills /></div>
      <div className="reveal transition-delay-250"><Education /></div>
      <div className="reveal transition-delay-300"><Experience /></div>
      <div className="reveal transition-delay-400"><Projects /></div>
      <div className="reveal transition-delay-500"><CodingStats stats={codingStats} loading={loading} error={error} /></div>
      <div className="reveal transition-delay-600"><Certifications /></div>
      <div className="reveal transition-delay-700"><Contact /></div>
      <Footer personalInfo={personalInfo} />
    </div>
  );
}

export default App;