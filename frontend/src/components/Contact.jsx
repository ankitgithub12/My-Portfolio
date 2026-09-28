import React, { useState } from 'react';
import { FaPaperPlane, FaUser, FaEnvelope, FaTag, FaCommentAlt, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';

const Contact = ({ personalInfo }) => {
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
      const dataToSubmit = new FormData(e.target);
      dataToSubmit.append(
        "access_key",
        personalInfo?.web3forms_key || "2513f572-cf56-42fc-a0f1-6780ec683b54"
      );

      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: dataToSubmit
      });

      const data = await response.json();

      if (data.success) {
        setStatus({ submitting: false, success: true, error: null });
        setFormData({ name: '', email: '', subject: '', message: '' });
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

  const cleanPhone = personalInfo?.phone ? personalInfo.phone.replace(/[\s-]+/g, '') : '+916395204834';

  return (
    <section id="contact" className="space-y-8">
      <div className="glass-card rounded-3xl p-5 sm:p-10 md:p-12 border border-slate-200/90 shadow-md text-center relative overflow-hidden bg-gradient-to-b from-white to-indigo-50/30">
        <div className="max-w-2xl mx-auto space-y-4">
          <span className="section-label">Get In Touch</span>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Let's Build Something Exceptional Together
          </h2>
          <p className="text-slate-600 text-xs sm:text-base leading-relaxed px-2">
            Have a project in mind, a freelance opportunity, or just want to connect over algorithms and modern web development? My inbox is always open!
          </p>

          {/* Quick Contact Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4 pt-6 text-left">
            <a
              className="p-4 rounded-2xl bg-white border border-slate-200/80 hover:border-brand-300 shadow-sm transition-all group flex flex-col justify-between"
              href={`mailto:${personalInfo?.email || 'ankit639520@gmail.com'}`}
            >
              <div className="w-10 h-10 rounded-xl bg-rose-50 text-rose-500 flex items-center justify-center text-lg mb-3 group-hover:scale-105 transition-transform border border-rose-100">
                <FaEnvelope />
              </div>
              <div>
                <span className="text-xs text-slate-400 block font-mono">Email</span>
                <span className="text-xs font-bold text-slate-800 break-all group-hover:text-brand-600 transition-colors">
                  {personalInfo?.email || 'ankit639520@gmail.com'}
                </span>
              </div>
            </a>

            <a
              className="p-4 rounded-2xl bg-white border border-slate-200/80 hover:border-brand-300 shadow-sm transition-all group flex flex-col justify-between"
              href={`tel:${cleanPhone}`}
            >
              <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center text-lg mb-3 group-hover:scale-105 transition-transform border border-emerald-100">
                <FaPhone />
              </div>
              <div>
                <span className="text-xs text-slate-400 block font-mono">Call / WhatsApp</span>
                <span className="text-xs font-bold text-slate-800 group-hover:text-brand-600 transition-colors">
                  {personalInfo?.phone || '+91 6395204834'}
                </span>
              </div>
            </a>

            <div className="p-4 rounded-2xl bg-white border border-slate-200/80 shadow-sm flex flex-col justify-between">
              <div className="w-10 h-10 rounded-xl bg-indigo-50 text-brand-600 flex items-center justify-center text-lg mb-3 border border-indigo-100">
                <FaMapMarkerAlt />
              </div>
              <div>
                <span className="text-xs text-slate-400 block font-mono">Location</span>
                <span className="text-xs font-bold text-slate-800">
                  {personalInfo?.location || 'Punjab, India'}
                </span>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="pt-6 sm:pt-8 text-left">
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label htmlFor="name" className="text-xs font-bold text-slate-700 ml-1">
                    Your Name
                  </label>
                  <div className="relative group">
                    <span className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-brand-500 transition-colors">
                      <FaUser className="text-sm" />
                    </span>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Ankit Kumar"
                      className="w-full bg-white border border-slate-200 rounded-xl py-3 pl-11 pr-4 text-slate-800 placeholder-slate-400 focus:outline-none focus:border-brand-400 focus:ring-2 focus:ring-brand-100 transition-all text-sm"
                    />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label htmlFor="email" className="text-xs font-bold text-slate-700 ml-1">
                    Email Address
                  </label>
                  <div className="relative group">
                    <span className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-brand-500 transition-colors">
                      <FaEnvelope className="text-sm" />
                    </span>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="hello@example.com"
                      className="w-full bg-white border border-slate-200 rounded-xl py-3 pl-11 pr-4 text-slate-800 placeholder-slate-400 focus:outline-none focus:border-brand-400 focus:ring-2 focus:ring-brand-100 transition-all text-sm"
                    />
                  </div>
                </div>
              </div>

              <div className="space-y-1.5">
                <label htmlFor="subject" className="text-xs font-bold text-slate-700 ml-1">
                  Subject
                </label>
                <div className="relative group">
                  <span className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-brand-500 transition-colors">
                    <FaTag className="text-sm" />
                  </span>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="Project Inquiry / Job Opportunity"
                    className="w-full bg-white border border-slate-200 rounded-xl py-3 pl-11 pr-4 text-slate-800 placeholder-slate-400 focus:outline-none focus:border-brand-400 focus:ring-2 focus:ring-brand-100 transition-all text-sm"
                  />
                </div>
              </div>

              <div className="space-y-1.5">
                <label htmlFor="message" className="text-xs font-bold text-slate-700 ml-1">
                  Your Message
                </label>
                <div className="relative group">
                  <span className="absolute left-4 top-3.5 text-slate-400 group-focus-within:text-brand-500 transition-colors">
                    <FaCommentAlt className="text-sm" />
                  </span>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows="4"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell me about your project or opportunity..."
                    className="w-full bg-white border border-slate-200 rounded-xl py-3 pl-11 pr-4 text-slate-800 placeholder-slate-400 focus:outline-none focus:border-brand-400 focus:ring-2 focus:ring-brand-100 transition-all resize-none text-sm"
                  ></textarea>
                </div>
              </div>

              <button
                type="submit"
                disabled={status.submitting}
                className="w-full py-3.5 bg-brand-600 hover:bg-brand-700 text-white font-semibold rounded-xl shadow-lg shadow-brand-500/25 transition-all flex items-center justify-center gap-2 active:scale-[0.98] disabled:opacity-70 disabled:cursor-not-allowed text-sm"
              >
                {status.submitting ? (
                  <div className="h-5 w-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                ) : (
                  <>
                    <FaPaperPlane className="text-xs" />
                    <span>Send Message</span>
                  </>
                )}
              </button>

              {status.success && (
                <div className="bg-emerald-50 border border-emerald-200 text-emerald-700 px-4 py-3 rounded-xl text-center text-sm">
                  ✓ Thank you! Your message has been sent successfully.
                </div>
              )}
              {status.error && (
                <div className="bg-rose-50 border border-rose-200 text-rose-600 px-4 py-3 rounded-xl text-center text-sm">
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
