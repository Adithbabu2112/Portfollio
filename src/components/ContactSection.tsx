// src/components/ContactSection.tsx
import React, { useState } from 'react';
import { motion } from 'framer-motion';

export const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <footer
      id="contact"
      className="relative z-20 w-full bg-black text-[#D1FAE5] font-sans selection:bg-[#6EE7B7] selection:text-black pt-16 pb-16 px-4 sm:px-12 lg:px-20 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto w-full relative z-10">
        
        {/* Split Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column (5 Cols) */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            <div>
              {/* Eyebrow Header */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="flex items-center space-x-4 mb-5"
              >
                <span
                  className="text-[11px] font-medium tracking-[0.35em] uppercase text-[#10B981]"
                  style={{ fontFamily: "'Montserrat', sans-serif" }}
                >
                  06 / CONTACT
                </span>
                <div className="w-16 h-[1px] bg-gradient-to-r from-[#10B981]/80 via-[#1E3A2F]/40 to-transparent" />
              </motion.div>

              {/* Headline */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="mb-8"
              >
                <h2
                  className="text-5xl sm:text-6xl md:text-7xl tracking-tight uppercase leading-[0.85] select-none"
                  style={{ fontFamily: "'Bebas Neue', sans-serif" }}
                >
                  <span className="block text-transparent bg-clip-text bg-gradient-to-b from-[#FFFFFF] via-[#7DA88A] to-[#1E3A2F] drop-shadow-[0_4px_12px_rgba(0,0,0,0.8)]">
                    LET'S WORK
                  </span>
                  <span className="block text-transparent bg-clip-text bg-gradient-to-b from-[#A7F3D0] via-[#34D399] to-[#064E3B] drop-shadow-[0_8px_25px_rgba(16,185,129,0.35)]">
                    TOGETHER.
                  </span>
                </h2>
              </motion.div>

              <p
                className="text-xs sm:text-[13px] font-light text-[#7DA88A] leading-relaxed max-w-md"
                style={{ fontFamily: "'Montserrat', sans-serif" }}
              >
                Have an automation project, full-stack opportunity, or want to discuss how I can help streamline your business processes? Send me a message below.
              </p>

              {/* Direct Channels & Socials */}
              <div className="mt-8 space-y-3.5 pt-6 border-t border-[#1E3A2F]/30 max-w-md">
                {/* Phone */}
                <a
                  href="tel:+918157899544"
                  className="flex items-center space-x-3.5 group text-xs text-[#7DA88A] hover:text-[#ECFDF5] transition-colors"
                >
                  <div className="w-9 h-9 rounded-sm bg-[#0A1F14] border border-[#1E3A2F]/50 group-hover:border-[#10B981] group-hover:bg-[#10B981]/10 flex items-center justify-center text-[#10B981] transition-all">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 512 512">
                      <path d="M164.9 24.6c-7.7-18.6-28-28.5-47.4-23.2l-88 24C12.1 30.2 0 46 0 64C0 311.4 200.6 512 448 512c18 0 33.8-12.1 38.6-29.5l24-88c5.3-19.4-4.6-39.7-23.2-47.4l-96-40c-16.3-6.8-35.2-2.1-46.3 11.6L304.7 368C234.3 334.7 177.3 277.7 144 207.3L193.3 167c13.7-11.2 18.4-30 11.6-46.3l-40-96z"/>
                    </svg>
                  </div>
                  <div>
                    <span className="block text-[9.5px] font-mono tracking-widest uppercase text-[#5B7C65]">PHONE</span>
                    <span className="font-mono text-[13px] text-[#A7F3D0] group-hover:text-[#ECFDF5] transition-colors">+91 8157899544</span>
                  </div>
                </a>

                {/* Email */}
                <a
                  href="mailto:adithbabu1221@gmail.com"
                  className="flex items-center space-x-3.5 group text-xs text-[#7DA88A] hover:text-[#ECFDF5] transition-colors"
                >
                  <div className="w-9 h-9 rounded-sm bg-[#0A1F14] border border-[#1E3A2F]/50 group-hover:border-[#10B981] group-hover:bg-[#10B981]/10 flex items-center justify-center text-[#10B981] transition-all">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 512 512">
                      <path d="M48 64C21.5 64 0 85.5 0 112c0 15.1 7.1 29.3 19.2 38.4L236.8 313.6c11.4 8.5 27 8.5 38.4 0L492.8 150.4c12.1-9.1 19.2-23.3 19.2-38.4c0-26.5-21.5-48-48-48H48zM0 176V384c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V176L294.4 339.2c-22.8 17.1-54 17.1-76.8 0L0 176z"/>
                    </svg>
                  </div>
                  <div>
                    <span className="block text-[9.5px] font-mono tracking-widest uppercase text-[#5B7C65]">EMAIL</span>
                    <span className="font-mono text-[13px] text-[#A7F3D0] group-hover:text-[#ECFDF5] transition-colors">adithbabu1221@gmail.com</span>
                  </div>
                </a>

                {/* Socials Row */}
                <div className="pt-2 flex flex-wrap gap-2.5">
                  {/* LinkedIn */}
                  <a
                    href="https://www.linkedin.com/in/adith-babu-7a3333257"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2 px-3 py-2 rounded-sm border border-[#1E3A2F]/60 bg-[#0A1F14] hover:border-[#10B981] hover:bg-[#10B981]/10 text-[#A7F3D0] hover:text-[#ECFDF5] text-[11px] font-mono tracking-wider transition-all"
                  >
                    <svg className="w-3.5 h-3.5 text-[#10B981]" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9v8.37H9.2V10.9H6.46M7.83 6.25c-.95 0-1.72.78-1.72 1.73s.77 1.73 1.72 1.73 1.73-.78 1.73-1.73-.78-1.73-1.73-1.73Z"/>
                    </svg>
                    <span>LINKEDIN</span>
                  </a>

                  {/* Instagram */}
                  <a
                    href="https://www.instagram.com/a_d_i_t_h.____"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2 px-3 py-2 rounded-sm border border-[#1E3A2F]/60 bg-[#0A1F14] hover:border-[#10B981] hover:bg-[#10B981]/10 text-[#A7F3D0] hover:text-[#ECFDF5] text-[11px] font-mono tracking-wider transition-all"
                  >
                    <svg className="w-3.5 h-3.5 text-[#10B981]" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                    </svg>
                    <span>INSTAGRAM</span>
                  </a>

                  {/* Facebook */}
                  <a
                    href="https://www.facebook.com/share/1DnxPVStat/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2 px-3 py-2 rounded-sm border border-[#1E3A2F]/60 bg-[#0A1F14] hover:border-[#10B981] hover:bg-[#10B981]/10 text-[#A7F3D0] hover:text-[#ECFDF5] text-[11px] font-mono tracking-wider transition-all"
                  >
                    <svg className="w-3.5 h-3.5 text-[#10B981]" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                    </svg>
                    <span>FACEBOOK</span>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Monolith Terminal Form (7 Cols) */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-7 relative w-full rounded-sm border border-[#1E3A2F]/40 bg-[#071210] p-8 sm:p-10 shadow-[0_20px_50px_rgba(0,0,0,0.9)] overflow-hidden"
          >
            {/* Top Emerald Horizon Edge */}
            <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#10B981]/70 to-transparent" />
            
            {/* Precision Corner Crosshairs */}
            <div className="absolute top-0 left-0 w-3 h-3 border-t border-l border-[#10B981]/60" />
            <div className="absolute top-0 right-0 w-3 h-3 border-t border-r border-[#10B981]/60" />
            <div className="absolute bottom-0 left-0 w-3 h-3 border-b border-l border-[#10B981]/60" />
            <div className="absolute bottom-0 right-0 w-3 h-3 border-b border-r border-[#10B981]/60" />

            {sent ? (
              <div className="py-16 text-center space-y-4">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full border-2 border-[#10B981] bg-[#10B981]/10 text-[#10B981] text-lg font-bold">
                  ✓
                </div>
                <h3 className="text-3xl text-white font-normal uppercase" style={{ fontFamily: "'Bebas Neue', sans-serif" }}>
                  MESSAGE SENT
                </h3>
                <p className="text-xs text-[#A7F3D0] font-light" style={{ fontFamily: "'Montserrat', sans-serif" }}>
                  Thank you for reaching out. I'll get back to you soon.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-[11px] font-medium tracking-[0.18em] uppercase text-[#10B981] mb-2 font-mono">
                      YOUR NAME
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="Enter your name"
                      className="w-full bg-[#0A1F14] border border-[#1E3A2F]/60 focus:border-[#10B981] text-sm text-[#ECFDF5] placeholder-[#7DA88A]/60 px-4 py-3.5 outline-none rounded-sm transition-colors"
                      style={{ fontFamily: "'Montserrat', sans-serif" }}
                    />
                  </div>

                  <div>
                    <label className="block text-[11px] font-medium tracking-[0.18em] uppercase text-[#10B981] mb-2 font-mono">
                      YOUR EMAIL
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="Enter your email"
                      className="w-full bg-[#0A1F14] border border-[#1E3A2F]/60 focus:border-[#10B981] text-sm text-[#ECFDF5] placeholder-[#7DA88A]/60 px-4 py-3.5 outline-none rounded-sm transition-colors"
                      style={{ fontFamily: "'Montserrat', sans-serif" }}
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-[11px] font-medium tracking-[0.18em] uppercase text-[#10B981] mb-2 font-mono">
                    YOUR MESSAGE
                  </label>
                  <textarea
                    required
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Write your message here..."
                    className="w-full bg-[#0A1F14] border border-[#1E3A2F]/60 focus:border-[#10B981] text-sm text-[#ECFDF5] placeholder-[#7DA88A]/60 p-4 outline-none rounded-sm transition-colors resize-none"
                    style={{ fontFamily: "'Montserrat', sans-serif" }}
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-4 border border-[#10B981]/50 bg-[#10B981]/15 hover:bg-[#10B981] text-[#D1FAE5] hover:text-black text-xs font-semibold tracking-[0.22em] uppercase transition-all duration-300 shadow-[0_4px_25px_rgba(16,185,129,0.15)]"
                  style={{ fontFamily: "'Montserrat', sans-serif" }}
                >
                  SEND MESSAGE ↗
                </button>

              </form>
            )}
          </motion.div>

        </div>

        {/* System Footer Line */}
        <div className="pt-16 mt-16 border-t border-[#1E3A2F]/15 flex flex-col sm:flex-row items-center justify-between text-center sm:text-left gap-4">
          <span className="text-[10px] font-mono tracking-widest text-[#1E3A2F] uppercase">
            PORTFOLIO // EDITION 2026
          </span>
          <span className="text-[10px] font-mono text-[#1E3A2F]">
            © {new Date().getFullYear()} • ENGINEERED WITH PRECISION
          </span>
        </div>

      </div>
    </footer>
  );
};

export default ContactSection;