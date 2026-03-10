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

  const personalInfo = {
    name: 'Ankit Kumar',
    email: 'ankit639520@gmail.com',
    phone: '+91-6395204834',
    linkedin: 'https://www.linkedin.com/in/ankit-kumar-77637a289/',
    github: 'https://github.com/ankitgithub12',
    location: 'Punjab, India'
  };

  return (
    <div className="min-h-screen relative overflow-hidden text-slate-200">
      <Navbar />
      <Hero personalInfo={personalInfo} />
      <Skills />
      <Experience />
      <Projects />
      <CodingStats stats={codingStats} loading={loading} error={error} />
      <Certifications />
      <Footer personalInfo={personalInfo} />
    </div>
  );
}

export default App;