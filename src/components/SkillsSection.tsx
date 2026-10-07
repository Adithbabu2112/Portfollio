import React from 'react';
import { motion } from 'framer-motion';
import type { Variants } from 'framer-motion';

const bentoCategories = [
  {
    title: 'AUTOMATION & PROCESS ENGINEERING',
    badge: 'CORE PILLAR',
    items: ['Python', 'Selenium', 'AI / OCR Pipelines', 'Power Automate', 'Watchdog', 'OpenPyXL'],
    description: 'Specialized in business process automation, web scraping, OCR extraction, workflow optimization, and building scalable automation bots that eliminate manual effort.',
    stat: '99.9% EFFORT SAVED',
    colSpan: 'lg:col-span-7',
  },
  {
    title: 'BACKEND & FRAMEWORKS',
    badge: 'FULL STACK',
    items: ['FastAPI', 'Django', 'REST APIs', 'Waitress'],
    description: 'Building high-performance async APIs with FastAPI and robust enterprise systems with Django, deploying with production reliability.',
    stat: 'PRODUCTION READY',
    colSpan: 'lg:col-span-5',
  },
  {
    title: 'DATABASE SYSTEMS',
    badge: 'PERSISTENCE',
    items: ['PostgreSQL', 'Microsoft SQL Server', 'MySQL', 'SQLite', 'Supabase'],
    description: 'Designing resilient relational schemas with optimized queries, data processing pipelines, and cloud database integrations.',
    stat: 'SQL & NOSQL',
    colSpan: 'lg:col-span-5',
  },
  {
    title: 'WEB DEVELOPMENT & TOOLS',
    badge: 'FRONTEND + DEVOPS',
    items: ['Next.js', 'TypeScript', 'JavaScript', 'HTML5', 'CSS3', 'Git / GitHub'],
    description: 'Building modern responsive web applications with Next.js & TypeScript, managing version control, and continuous integration workflows.',
    stat: 'END-TO-END',
    colSpan: 'lg:col-span-7',
  },
];

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.14,
      delayChildren: 0.1,
    },
  },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 30, filter: 'blur(6px)' },
  visible: {
    opacity: 1,
    y: 0,
    filter: 'blur(0px)',
    transition: {
      duration: 0.9,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

export const SkillsSection: React.FC = () => {

  return (
    <section
      id="skills"
      className="relative z-20 w-full bg-black text-[#D1FAE5] font-sans selection:bg-[#6EE7B7] selection:text-black pt-16 lg:pt-24 pb-24 px-4 sm:px-12 lg:px-20 overflow-hidden flex flex-col justify-center"
    >
      {/* Ambient Glows */}
      <div className="absolute top-1/3 left-1/4 w-[34rem] h-[34rem] bg-[#10B981]/5 rounded-full blur-[170px] pointer-events-none" />
      <div className="absolute bottom-10 right-1/4 w-[28rem] h-[28rem] bg-[#1E3A2F]/5 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto w-full relative z-10">
        
        {/* Eyebrow Header */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex items-center space-x-3 sm:space-x-4 mb-5 sm:mb-7"
        >
          <span
            className="text-[10px] sm:text-[11px] font-medium tracking-[0.35em] uppercase text-[#10B981]"
            style={{ fontFamily: "'Montserrat', sans-serif" }}
          >
            03 / TECH MATRIX
          </span>
          <div className="w-16 sm:w-20 h-[1px] bg-gradient-to-r from-[#10B981]/80 via-[#1E3A2F]/40 to-transparent" />
        </motion.div>

        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          className="mb-8 sm:mb-10"
        >
          <h2
            className="text-4xl sm:text-6xl md:text-7xl lg:text-[5.5rem] tracking-tight uppercase leading-[0.88] select-none"
            style={{ fontFamily: "'Bebas Neue', sans-serif" }}
          >
            <span className="block text-transparent bg-clip-text bg-gradient-to-b from-[#FFFFFF] via-[#7DA88A] to-[#1E3A2F] drop-shadow-[0_4px_12px_rgba(0,0,0,0.8)]">
              ARCHITECTURAL MASTERY.
            </span>
            <span className="block text-transparent bg-clip-text bg-gradient-to-b from-[#A7F3D0] via-[#34D399] to-[#064E3B] drop-shadow-[0_8px_25px_rgba(16,185,129,0.35)]">
              PRECISION APPLIED.
            </span>
          </h2>
        </motion.div>

        {/* Bento Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          className="grid grid-cols-1 lg:grid-cols-12 gap-5 sm:gap-6"
        >
          {bentoCategories.map((block) => (
            <motion.div
              key={block.title}
              variants={cardVariants}
              whileHover={{ y: -5, transition: { duration: 0.25 } }}
              className={`${block.colSpan} relative p-6 sm:p-9 rounded-sm border border-[#1E3A2F]/35 bg-[#0A1F14]/85 backdrop-blur-xl overflow-hidden transition-all duration-500 hover:border-[#10B981]/80 hover:shadow-[0_16px_45px_rgba(16,185,129,0.14)] cursor-pointer group`}
            >
              {/* Top Subtle Border Highlight */}
              <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#10B981]/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              {/* Corner Minimal Pins */}
              <div className="absolute top-0 left-0 w-3 h-3 border-t border-l border-[#10B981]/40 group-hover:border-[#10B981] transition-colors duration-300" />
              <div className="absolute bottom-0 right-0 w-3 h-3 border-b border-r border-[#10B981]/40 group-hover:border-[#10B981] transition-colors duration-300" />

              {/* Card Meta Header */}
              <div className="flex items-center justify-between mb-4">
                <span className="text-[10px] font-mono tracking-[0.25em] uppercase text-[#10B981] group-hover:text-[#A7F3D0] transition-colors">
                  {block.badge}
                </span>
                <span className="text-[10px] font-mono px-2.5 py-0.5 border border-[#1E3A2F]/40 text-[#7DA88A] bg-[#132A1E] group-hover:border-[#10B981]/50 group-hover:text-white transition-all">
                  {block.stat}
                </span>
              </div>

              {/* Title */}
              <h3
                className="text-3xl sm:text-4xl font-normal tracking-wide text-white mb-3 group-hover:text-[#A7F3D0] transition-colors"
                style={{ fontFamily: "'Bebas Neue', sans-serif" }}
              >
                {block.title}
              </h3>

              {/* Description */}
              <p
                className="text-xs sm:text-sm text-[#5B7C65] font-light leading-relaxed mb-7 max-w-xl group-hover:text-[#7DA88A] transition-colors"
                style={{ fontFamily: "'Montserrat', sans-serif" }}
              >
                {block.description}
              </p>

              {/* Interactive Tag Chips */}
              <div className="flex flex-wrap gap-2 pt-4 border-t border-[#1E3A2F]/20">
                {block.items.map((tech) => (
                  <span
                    key={tech}
                    className="px-3.5 py-1.5 text-[10.5px] font-medium tracking-[0.16em] uppercase rounded-sm border border-[#1E3A2F]/35 bg-[#132A1E] text-[#A7F3D0] group-hover:border-[#10B981]/50 group-hover:bg-[#1E3A2F] group-hover:text-white transition-all duration-300"
                    style={{ fontFamily: "'Montserrat', sans-serif" }}
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
};

export default SkillsSection;