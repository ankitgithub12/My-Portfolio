import React, { useState } from 'react';
import axios from 'axios';
import { FaPaperPlane, FaUser, FaEnvelope, FaTag, FaCommentAlt } from 'react-icons/fa';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [status, setStatus] = useState({
    submitting: false,
    success: false,
    error: null
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ submitting: true, success: false, error: null });

    try {
      const formData = new FormData(e.target);
      formData.append("access_key", "fe4c7d08-3bfe-4218-8ce4-d179ad10bd39");

      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });

      const data = await response.json();

      if (data.success) {
        setStatus({ submitting: false, success: true, error: null });
        setFormData({ name: '', email: '', subject: '', message: '' });
        // Reset success message after 5 seconds
        setTimeout(() => setStatus(prev => ({ ...prev, success: false })), 5000);
      } else {
        throw new Error(data.message || 'Submission failed');
      }
    } catch (err) {
      console.error('Contact form error:', err);
      setStatus({
        submitting: false,
        success: false,
        error: err.message || 'Something went wrong. Please try again later.'
      });
    }
  };

  return (
    <section id="contact" className="py-24 relative overflow-hidden bg-slate-900">
      {/* Background Orbs */}
      <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-96 h-96 bg-cyan-500/10 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/2 w-96 h-96 bg-indigo-600/10 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-indigo-500">
              Get In Touch
            </span>
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto text-lg">
            Have a project in mind or just want to say hi? My inbox is always open.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <div className="bg-slate-800/40 backdrop-blur-xl border border-white/10 rounded-3xl p-8 md:p-12 shadow-2xl relative">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-cyan-400 to-indigo-500 rounded-t-3xl"></div>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                {/* Name Input */}
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium text-slate-300 ml-1">Your Name</label>
                  <div className="relative group">
                    <span className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500 group-focus-within:text-cyan-400 transition-colors">
                      <FaUser />
                    </span>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Ankit Kumar"
                      className="w-full bg-slate-900/50 border border-white/10 rounded-xl py-3 pl-12 pr-4 text-white placeholder-slate-600 focus:outline-none focus:border-cyan-500/50 focus:ring-2 focus:ring-cyan-500/10 transition-all"
                    />
                  </div>
                </div>

                {/* Email Input */}
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium text-slate-300 ml-1">Email Address</label>
                  <div className="relative group">
                    <span className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500 group-focus-within:text-cyan-400 transition-colors">
                      <FaEnvelope />
                    </span>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="hello@example.com"
                      className="w-full bg-slate-900/50 border border-white/10 rounded-xl py-3 pl-12 pr-4 text-white placeholder-slate-600 focus:outline-none focus:border-cyan-500/50 focus:ring-2 focus:ring-cyan-500/10 transition-all"
                    />
                  </div>
                </div>
              </div>

              {/* Subject Input */}
              <div className="space-y-2">
                <label htmlFor="subject" className="text-sm font-medium text-slate-300 ml-1">Subject</label>
                <div className="relative group">
                  <span className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500 group-focus-within:text-cyan-400 transition-colors">
                    <FaTag />
                  </span>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="Project Inquiry"
                    className="w-full bg-slate-900/50 border border-white/10 rounded-xl py-3 pl-12 pr-4 text-white placeholder-slate-600 focus:outline-none focus:border-cyan-500/50 focus:ring-2 focus:ring-cyan-500/10 transition-all"
                  />
                </div>
              </div>

              {/* Message Input */}
              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium text-slate-300 ml-1">Your Message</label>
                <div className="relative group">
                  <span className="absolute left-4 top-6 text-slate-500 group-focus-within:text-cyan-400 transition-colors">
                    <FaCommentAlt />
                  </span>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows="5"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell me about your project..."
                    className="w-full bg-slate-900/50 border border-white/10 rounded-xl py-3 pl-12 pr-4 text-white placeholder-slate-600 focus:outline-none focus:border-cyan-500/50 focus:ring-2 focus:ring-cyan-500/10 transition-all resize-none"
                  ></textarea>
                </div>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={status.submitting}
                className={`w-full relative group overflow-hidden rounded-xl bg-gradient-to-r from-cyan-500 to-indigo-600 p-px font-semibold text-white shadow-xl shadow-cyan-500/20 transition-all hover:shadow-cyan-500/40 disabled:opacity-70 disabled:cursor-not-allowed`}
              >
                <div className="relative flex items-center justify-center gap-2 bg-slate-900 rounded-[11px] px-6 py-3 group-hover:bg-transparent transition-colors">
                  {status.submitting ? (
                    <div className="h-5 w-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                  ) : (
                    <>
                      <span>Send Message</span>
                      <FaPaperPlane className="text-sm group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                    </>
                  )}
                </div>
              </button>

              {/* Status Messages */}
              {status.success && (
                <div className="bg-emerald-500/10 border border-emerald-500/50 text-emerald-400 px-4 py-3 rounded-xl text-center text-sm animate-fade-in">
                  Thank you! Your message has been sent successfully.
                </div>
              )}
              {status.error && (
                <div className="bg-rose-500/10 border border-rose-500/50 text-rose-400 px-4 py-3 rounded-xl text-center text-sm animate-fade-in">
                  {status.error}
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
