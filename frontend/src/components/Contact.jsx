import React, { useState } from 'react';
import { FaPaperPlane, FaUser, FaEnvelope, FaTag, FaCommentAlt, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';

const Contact = ({ personalInfo }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [result, setResult] = useState("");
  const [submitting, setSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const onSubmit = async (event) => {
    event.preventDefault();
    setSubmitting(true);
    setResult("Sending....");

    try {
      const formDataObj = new FormData(event.target);
      formDataObj.append(
        "access_key",
        personalInfo?.web3forms_key || "fe4c7d08-3bfe-4218-8ce4-d179ad10bd39"
      );

      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formDataObj
      });

      const data = await response.json();

      if (data.success) {
        setResult("Form Submitted Successfully");
        event.target.reset();
        setFormData({ name: '', email: '', subject: '', message: '' });
        setTimeout(() => {
          setResult(prev => (prev === "Form Submitted Successfully" ? "" : prev));
        }, 6000);
      } else {
        setResult(data.message || "Error");
      }
    } catch (err) {
      console.error("Web3Forms error:", err);
      setResult("Error submitting form. Please try again.");
    } finally {
      setSubmitting(false);
    }
  };

  const cleanPhone = personalInfo?.phone ? personalInfo.phone.replace(/[\s-]+/g, '') : '+916395204834';

  return (
    <section id="contact" className="space-y-8 relative z-10">
      <div className="glass-card-premium rounded-3xl p-6 sm:p-11 md:p-14 border border-white/90 shadow-2xl text-center relative overflow-hidden">
        {/* Top Specular Glow Line */}
        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-brand-500 to-transparent opacity-80"></div>
        <div className="absolute -left-20 -top-20 w-72 h-72 bg-brand-400/10 rounded-full blur-3xl pointer-events-none"></div>
        <div className="absolute -right-20 -bottom-20 w-72 h-72 bg-indigo-400/10 rounded-full blur-3xl pointer-events-none"></div>

        <div className="max-w-2xl mx-auto space-y-4 relative z-10">
          <span className="section-label">Get In Touch</span>
          <h2 className="text-2xl sm:text-4xl font-black text-slate-900 tracking-tight leading-tight">
            Let's Build Something <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-600 to-indigo-600">Exceptional</span> Together
          </h2>
          <p className="text-slate-600 text-xs sm:text-base leading-relaxed px-2 font-normal">
            Have a project in mind, a freelance opportunity, or just want to connect over algorithms and modern web development? My inbox is always open!
          </p>

          {/* Quick Contact Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5 sm:gap-4 pt-6 text-left">
            <a
              className="glass-card-hover glass-card p-4 sm:p-5 rounded-2xl border border-white/90 shadow-md transition-all group flex flex-col justify-between"
              href={`mailto:${personalInfo?.email || 'ankit639520@gmail.com'}`}
            >
              <div className="w-11 h-11 rounded-2xl bg-rose-50 text-rose-500 flex items-center justify-center text-lg mb-3 group-hover:scale-110 transition-transform border border-rose-100 shadow-sm">
                <FaEnvelope />
              </div>
              <div>
                <span className="text-[11px] text-slate-400 block font-mono font-semibold uppercase">Email</span>
                <span className="text-xs font-bold text-slate-800 break-all group-hover:text-brand-600 transition-colors">
                  {personalInfo?.email || 'ankit639520@gmail.com'}
                </span>
              </div>
            </a>

            <a
              className="glass-card-hover glass-card p-4 sm:p-5 rounded-2xl border border-white/90 shadow-md transition-all group flex flex-col justify-between"
              href={`tel:${cleanPhone}`}
            >
              <div className="w-11 h-11 rounded-2xl bg-emerald-50 text-emerald-600 flex items-center justify-center text-lg mb-3 group-hover:scale-110 transition-transform border border-emerald-100 shadow-sm">
                <FaPhone />
              </div>
              <div>
                <span className="text-[11px] text-slate-400 block font-mono font-semibold uppercase">Call / WhatsApp</span>
                <span className="text-xs font-bold text-slate-800 group-hover:text-brand-600 transition-colors">
                  {personalInfo?.phone || '+91 6395204834'}
                </span>
              </div>
            </a>

            <div className="glass-card-hover glass-card p-4 sm:p-5 rounded-2xl border border-white/90 shadow-md flex flex-col justify-between">
              <div className="w-11 h-11 rounded-2xl bg-indigo-50 text-brand-600 flex items-center justify-center text-lg mb-3 border border-indigo-100 shadow-sm">
                <FaMapMarkerAlt />
              </div>
              <div>
                <span className="text-[11px] text-slate-400 block font-mono font-semibold uppercase">Location</span>
                <span className="text-xs font-bold text-slate-800">
                  {personalInfo?.location || 'Punjab, India'}
                </span>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="pt-6 sm:pt-8 text-left">
            <form onSubmit={onSubmit} className="space-y-4">
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
                      className="w-full bg-white/70 backdrop-blur-md border border-slate-200/90 rounded-2xl py-3.5 pl-11 pr-4 text-slate-800 placeholder-slate-400 focus:bg-white focus:outline-none focus:border-brand-400 focus:ring-4 focus:ring-brand-100/60 shadow-xs transition-all text-sm"
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
                      className="w-full bg-white/70 backdrop-blur-md border border-slate-200/90 rounded-2xl py-3.5 pl-11 pr-4 text-slate-800 placeholder-slate-400 focus:bg-white focus:outline-none focus:border-brand-400 focus:ring-4 focus:ring-brand-100/60 shadow-xs transition-all text-sm"
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
                    className="w-full bg-white/70 backdrop-blur-md border border-slate-200/90 rounded-2xl py-3.5 pl-11 pr-4 text-slate-800 placeholder-slate-400 focus:bg-white focus:outline-none focus:border-brand-400 focus:ring-4 focus:ring-brand-100/60 shadow-xs transition-all text-sm"
                  />
                </div>
              </div>

              <div className="space-y-1.5">
                <label htmlFor="message" className="text-xs font-bold text-slate-700 ml-1">
                  Your Message
                </label>
                <div className="relative group">
                  <span className="absolute left-4 top-4 text-slate-400 group-focus-within:text-brand-500 transition-colors">
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
                    className="w-full bg-white/70 backdrop-blur-md border border-slate-200/90 rounded-2xl py-3.5 pl-11 pr-4 text-slate-800 placeholder-slate-400 focus:bg-white focus:outline-none focus:border-brand-400 focus:ring-4 focus:ring-brand-100/60 shadow-xs transition-all resize-none text-sm"
                  ></textarea>
                </div>
              </div>

              <button
                type="submit"
                disabled={submitting}
                className="shimmer-hover w-full py-4 bg-gradient-to-r from-brand-600 via-indigo-600 to-brand-700 hover:from-brand-500 hover:to-indigo-500 text-white font-extrabold rounded-2xl shadow-xl shadow-brand-500/30 hover:shadow-brand-500/50 hover:-translate-y-0.5 transition-all flex items-center justify-center gap-2.5 active:scale-[0.98] disabled:opacity-70 disabled:cursor-not-allowed text-sm border border-white/20"
              >
                {submitting ? (
                  <>
                    <div className="h-5 w-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                    <span>Sending message....</span>
                  </>
                ) : (
                  <>
                    <FaPaperPlane className="text-xs" />
                    <span>Send Message</span>
                  </>
                )}
              </button>

              {result && (
                <div
                  className={`p-4 rounded-2xl text-center text-sm font-bold transition-all shadow-md ${
                    result === "Form Submitted Successfully"
                      ? "bg-emerald-50/90 border border-emerald-300 text-emerald-800"
                      : result === "Sending...."
                      ? "bg-blue-50/90 border border-blue-300 text-blue-800"
                      : "bg-rose-50/90 border border-rose-300 text-rose-700"
                  }`}
                >
                  {result === "Form Submitted Successfully" && "✓ "}
                  <span>{result}</span>
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
