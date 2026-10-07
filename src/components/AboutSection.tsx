import React from 'react';
import { motion } from 'framer-motion';
import type { Variants } from 'framer-motion';
import aboutImg from '../assets/about.png';

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.18,
      delayChildren: 0.15,
    },
  },
};

const fadeUpVariants: Variants = {
  hidden: { opacity: 0, y: 30, filter: 'blur(10px)' },
  visible: {
    opacity: 1,
    y: 0,
    filter: 'blur(0px)',
    transition: {
      duration: 1.2,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

export const AboutSection: React.FC = () => {

  return (
    <section 
      id="about" 
      className="relative w-full bg-black text-[#D1FAE5] font-sans selection:bg-[#6EE7B7] selection:text-black pt-16 lg:pt-20 pb-8 lg:pb-10 px-4 sm:px-12 lg:px-20 overflow-hidden flex items-center"
    >
      {/* ================= BACKGROUND GLOWS & FLOATING PARTICLES ================= */}
      <motion.div 
        animate={{ scale: [1, 1.2, 1], opacity: [0.08, 0.16, 0.08] }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute top-1/4 left-1/6 w-[32rem] h-[32rem] bg-[#10B981] rounded-full blur-[160px] pointer-events-none"
      />
      <motion.div 
        animate={{ scale: [1.2, 1, 1.2], opacity: [0.05, 0.12, 0.05] }}
        transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute bottom-1/6 right-1/4 w-[28rem] h-[28rem] bg-[#1E3A2F] rounded-full blur-[170px] pointer-events-none"
      />

      <div className="max-w-7xl mx-auto w-full relative z-10">
        
        {/* Eyebrow Header */}
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          className="flex items-center space-x-4 mb-10"
        >
          <span 
            className="text-[11px] font-medium tracking-[0.35em] uppercase text-[#10B981]"
            style={{ fontFamily: "'Montserrat', sans-serif" }}
          >
            01 / ABOUT ME
          </span>
          <div className="w-20 h-[1px] bg-gradient-to-r from-[#10B981]/80 via-[#1E3A2F]/40 to-transparent" />
        </motion.div>

        {/* Main Grid: Content + Portrait */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* ================= LEFT CONTENT (7 COLS) ================= */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="lg:col-span-7 flex flex-col justify-center"
          >
            {/* Cinematic Headline with Glow Flare */}
            <motion.div variants={fadeUpVariants} className="relative mb-6 select-none">
              <h2
                className="text-5xl sm:text-6xl md:text-7xl lg:text-[5.4rem] tracking-tight uppercase leading-[0.88]"
                style={{ fontFamily: "'Bebas Neue', sans-serif" }}
              >
                <span className="block text-transparent bg-clip-text bg-gradient-to-b from-[#FFFFFF] via-[#7DA88A] to-[#1E3A2F] drop-shadow-[0_4px_10px_rgba(0,0,0,0.85)]">
                  TURNING HOURS OF EFFORT
                </span>
                <span className="block text-transparent bg-clip-text bg-gradient-to-b from-[#A7F3D0] via-[#34D399] to-[#064E3B] drop-shadow-[0_8px_25px_rgba(16,185,129,0.3)]">
                  INTO SECONDS OF EXECUTION.
                </span>
              </h2>
            </motion.div>

            {/* Concise Bio Paragraph */}
            <motion.p
              variants={fadeUpVariants}
              className="text-xs sm:text-sm md:text-[14.5px] font-light text-[#7DA88A] leading-[1.85] tracking-wide mb-10 max-w-xl"
              style={{ fontFamily: "'Montserrat', sans-serif" }}
            >
              I'm <span className="text-[#A7F3D0] font-medium">Adith Babu</span>, an Automation Analyst and Python Developer specializing in building production-grade automation systems, internal tools, and modern web applications. With strong skills across Python, FastAPI, Django, and Next.js, I turn complex manual processes into efficient, intelligent automated pipelines.
            </motion.p>

            {/* Concise 4-Item Achievement Metrics Grid */}
            <motion.div 
              variants={fadeUpVariants}
              className="grid grid-cols-2 sm:grid-cols-4 gap-6 pt-6 pb-2 border-t border-[#1E3A2F]/25"
            >
              {/* Stat 1 */}
              <div className="flex flex-col">
                <span 
                  className="text-3xl sm:text-4xl font-light text-[#D1FAE5] tracking-tight"
                  style={{ fontFamily: "'Bebas Neue', sans-serif" }}
                >
                  3+
                </span>
                <span className="text-[10px] font-medium tracking-[0.22em] uppercase text-[#5B7C65] mt-0.5">
                  Years Experience
                </span>
              </div>

              {/* Stat 2 */}
              <div className="flex flex-col">
                <span 
                  className="text-3xl sm:text-4xl font-light text-[#10B981] tracking-tight"
                  style={{ fontFamily: "'Bebas Neue', sans-serif" }}
                >
                  BCA
                </span>
                <span className="text-[10px] font-medium tracking-[0.22em] uppercase text-[#5B7C65] mt-0.5">
                  MG University
                </span>
              </div>

              {/* Stat 3 */}
              <div className="flex flex-col">
                <span 
                  className="text-3xl sm:text-4xl font-light text-[#D1FAE5] tracking-tight"
                  style={{ fontFamily: "'Bebas Neue', sans-serif" }}
                >
                  100%
                </span>
                <span className="text-[10px] font-medium tracking-[0.22em] uppercase text-[#5B7C65] mt-0.5">
                  Data Accuracy
                </span>
              </div>

              {/* Stat 4 */}
              <div className="flex flex-col">
                <span 
                  className="text-3xl sm:text-4xl font-light text-[#10B981] tracking-tight"
                  style={{ fontFamily: "'Bebas Neue', sans-serif" }}
                >
                  24/7
                </span>
                <span className="text-[10px] font-medium tracking-[0.22em] uppercase text-[#5B7C65] mt-0.5">
                  Autonomous Uptime
                </span>
              </div>
            </motion.div>
          </motion.div>

          {/* ================= RIGHT: HANGING ID CARD ================= */}
          <div className="lg:col-span-5 flex items-start justify-center relative pt-10">

            {/* Entire hanging assembly — pivot at top center */}
            <motion.div
              initial={{ opacity: 0, rotate: -8 }}
              whileInView={{ opacity: 1, rotate: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
              animate={{ rotate: [3, -3, 2, -2, 1.5, -1.5, 3] }}
              style={{ transformOrigin: 'top center' }}
              className="relative flex flex-col items-center select-none"
            >
              {/* Swing animation wrapper */}
              <motion.div
                animate={{ rotate: [2, -2, 1.5, -1.5, 1, -1, 2] }}
                transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
                style={{ transformOrigin: 'top center' }}
                className="flex flex-col items-center"
              >

                {/* ── Lanyard Strap ── */}
                <div className="relative flex flex-col items-center z-10">
                  {/* Top mounting point */}
                  <div className="w-3 h-3 rounded-full bg-[#374151] border-2 border-[#10B981] shadow-[0_0_12px_rgba(16,185,129,0.5)]" />

                  {/* Lanyard rope */}
                  <div className="w-[2px] h-20 bg-gradient-to-b from-[#10B981] via-[#1E3A2F] to-[#10B981]/60" />

                  {/* Metal clip */}
                  <div className="relative flex flex-col items-center">
                    <div className="w-10 h-3 bg-gradient-to-b from-[#6EE7B7] to-[#1E3A2F] rounded-t-sm border border-[#10B981]/60" />
                    <div className="w-6 h-1.5 bg-[#1E3A2F] border-x border-b border-[#10B981]/40" />
                  </div>
                </div>

                {/* ── ID Card Body ── */}
                <div className="relative w-72 sm:w-80 rounded-xl border border-[#1E3A2F]/60 bg-gradient-to-b from-[#0A1F14] via-[#071210] to-[#0A1F14] shadow-[0_30px_80px_rgba(0,0,0,0.9)] overflow-hidden group hover:border-[#10B981]/50 transition-colors duration-500">

                  {/* Top emerald bar */}
                  <div className="h-1.5 w-full bg-gradient-to-r from-[#10B981] via-[#34D399] to-[#10B981]" />

                  {/* Card content */}
                  <div className="flex flex-col items-center px-6 pt-6 pb-7">

                    {/* Circular photo */}
                    <div className="relative mb-5">
                      <div className="w-32 h-32 rounded-full overflow-hidden border-[3px] border-[#10B981]/60 shadow-[0_0_25px_rgba(16,185,129,0.25)] group-hover:border-[#10B981] transition-colors duration-500">
                        <img
                          src={aboutImg}
                          alt="Adith Babu"
                          className="w-full h-full object-cover scale-[1.65] origin-[50%_22%] transition-transform duration-500"
                        />
                      </div>
                      <div className="absolute bottom-1 right-1 w-4 h-4 rounded-full bg-[#10B981] border-2 border-[#071210] shadow-[0_0_10px_rgba(16,185,129,0.6)]" />
                    </div>

                    {/* Name */}
                    <h3
                      className="text-2xl sm:text-3xl font-normal tracking-wider text-[#D1FAE5] uppercase mb-1"
                      style={{ fontFamily: "'Bebas Neue', sans-serif" }}
                    >
                      ADITH BABU
                    </h3>

                    {/* Title */}
                    <span
                      className="text-[10px] font-medium tracking-[0.25em] uppercase text-[#10B981] mb-5"
                      style={{ fontFamily: "'Montserrat', sans-serif" }}
                    >
                      AUTOMATION ANALYST
                    </span>

                    {/* Divider */}
                    <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-[#1E3A2F] to-transparent mb-5" />

                    {/* Contact Info */}
                    <div className="w-full space-y-3">
                      <a href="tel:+918157899544" className="flex items-center space-x-3 group/link">
                        <div className="flex-shrink-0 w-8 h-8 rounded-lg bg-[#1E3A2F]/60 border border-[#10B981]/20 flex items-center justify-center group-hover/link:border-[#10B981]/60 transition-colors">
                          <svg className="w-3.5 h-3.5 text-[#10B981]" fill="currentColor" viewBox="0 0 512 512">
                            <path d="M164.9 24.6c-7.7-18.6-28-28.5-47.4-23.2l-88 24C12.1 30.2 0 46 0 64C0 311.4 200.6 512 448 512c18 0 33.8-12.1 38.6-29.5l24-88c5.3-19.4-4.6-39.7-23.2-47.4l-96-40c-16.3-6.8-35.2-2.1-46.3 11.6L304.7 368C234.3 334.7 177.3 277.7 144 207.3L193.3 167c13.7-11.2 18.4-30 11.6-46.3l-40-96z"/>
                          </svg>
                        </div>
                        <span className="text-xs text-[#7DA88A] group-hover/link:text-[#D1FAE5] transition-colors tracking-wide" style={{ fontFamily: "'Montserrat', sans-serif" }}>
                          +91-8157899544
                        </span>
                      </a>

                      <a href="mailto:adithbabu1221@gmail.com" className="flex items-center space-x-3 group/link">
                        <div className="flex-shrink-0 w-8 h-8 rounded-lg bg-[#1E3A2F]/60 border border-[#10B981]/20 flex items-center justify-center group-hover/link:border-[#10B981]/60 transition-colors">
                          <svg className="w-3.5 h-3.5 text-[#10B981]" fill="currentColor" viewBox="0 0 512 512">
                            <path d="M48 64C21.5 64 0 85.5 0 112c0 15.1 7.1 29.3 19.2 38.4L236.8 313.6c11.4 8.5 27 8.5 38.4 0L492.8 150.4c12.1-9.1 19.2-23.3 19.2-38.4c0-26.5-21.5-48-48-48H48zM0 176V384c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V176L294.4 339.2c-22.8 17.1-54 17.1-76.8 0L0 176z"/>
                          </svg>
                        </div>
                        <span className="text-xs text-[#7DA88A] group-hover/link:text-[#D1FAE5] transition-colors tracking-wide" style={{ fontFamily: "'Montserrat', sans-serif" }}>
                          adithbabu1221@gmail.com
                        </span>
                      </a>
                    </div>

                    {/* Social Media Links */}
                    <div className="flex items-center justify-center space-x-3 pt-4">
                      {/* LinkedIn */}
                      <a
                        href="https://www.linkedin.com/in/adith-babu-7a3333257"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-8 h-8 rounded-md bg-[#1E3A2F]/60 border border-[#10B981]/25 flex items-center justify-center text-[#10B981] hover:text-black hover:bg-[#10B981] hover:border-[#10B981] transition-all"
                        aria-label="LinkedIn"
                      >
                        <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9v8.37H9.2V10.9H6.46M7.83 6.25c-.95 0-1.72.78-1.72 1.73s.77 1.73 1.72 1.73 1.73-.78 1.73-1.73-.78-1.73-1.73-1.73Z"/>
                        </svg>
                      </a>
                      {/* Instagram */}
                      <a
                        href="https://www.instagram.com/a_d_i_t_h.____"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-8 h-8 rounded-md bg-[#1E3A2F]/60 border border-[#10B981]/25 flex items-center justify-center text-[#10B981] hover:text-black hover:bg-[#10B981] hover:border-[#10B981] transition-all"
                        aria-label="Instagram"
                      >
                        <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                        </svg>
                      </a>
                      {/* Facebook */}
                      <a
                        href="https://www.facebook.com/share/1DnxPVStat/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-8 h-8 rounded-md bg-[#1E3A2F]/60 border border-[#10B981]/25 flex items-center justify-center text-[#10B981] hover:text-black hover:bg-[#10B981] hover:border-[#10B981] transition-all"
                        aria-label="Facebook"
                      >
                        <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                        </svg>
                      </a>
                    </div>
                  </div>

                  {/* Bottom barcode decoration */}
                  <div className="flex items-center justify-center gap-[2px] px-6 pb-4 opacity-30">
                    {[3,1,2,1,3,2,1,3,1,2,3,1,2,1,3,2,1,2,3,1].map((h, i) => (
                      <div key={i} className="bg-[#10B981]" style={{ width: '2px', height: `${h * 5}px` }} />
                    ))}
                  </div>
                </div>

                {/* Shadow */}
                <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-60 h-6 bg-[#10B981]/5 rounded-full blur-xl pointer-events-none" />
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;