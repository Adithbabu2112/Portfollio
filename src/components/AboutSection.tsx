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
      className="relative w-screen min-h-screen bg-black text-[#D1FAE5] font-sans selection:bg-[#6EE7B7] selection:text-black py-24 lg:py-32 px-6 sm:px-12 lg:px-20 overflow-hidden flex items-center"
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
                  I DON'T JUST WRITE CODE.
                </span>
                <span className="block text-transparent bg-clip-text bg-gradient-to-b from-[#A7F3D0] via-[#34D399] to-[#064E3B] drop-shadow-[0_8px_25px_rgba(201,158,93,0.3)]">
                  I BUILD WHAT'S NEXT.
                </span>
              </h2>
            </motion.div>

            {/* Concise Bio Paragraph */}
            <motion.p
              variants={fadeUpVariants}
              className="text-xs sm:text-sm md:text-[14.5px] font-light text-[#7DA88A] leading-[1.85] tracking-wide mb-10 max-w-xl"
              style={{ fontFamily: "'Montserrat', sans-serif" }}
            >
              I'm <span className="text-[#A7F3D0] font-medium">Adith Babu</span>, an Automation Analyst and Python Developer specializing in building production-grade automation systems, internal tools, and workflow solutions. With strong skills in Django, Selenium, and SQL Server, I turn complex manual processes into efficient automated pipelines.
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
                  99.9%
                </span>
                <span className="text-[10px] font-medium tracking-[0.22em] uppercase text-[#5B7C65] mt-0.5">
                  Effort Reduction
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
                  Degree (MG University)
                </span>
              </div>

              {/* Stat 3 */}
              <div className="flex flex-col">
                <span 
                  className="text-3xl sm:text-4xl font-light text-[#D1FAE5] tracking-tight"
                  style={{ fontFamily: "'Bebas Neue', sans-serif" }}
                >
                  80%
                </span>
                <span className="text-[10px] font-medium tracking-[0.22em] uppercase text-[#5B7C65] mt-0.5">
                  Efficiency Gains
                </span>
              </div>

              {/* Stat 4 */}
              <div className="flex flex-col">
                <span 
                  className="text-3xl sm:text-4xl font-light text-[#10B981] tracking-tight"
                  style={{ fontFamily: "'Bebas Neue', sans-serif" }}
                >
                  360 → 5
                </span>
                <span className="text-[10px] font-medium tracking-[0.22em] uppercase text-[#5B7C65] mt-0.5">
                  Hours to Minutes
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
                          className="w-full h-full object-cover object-top"
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