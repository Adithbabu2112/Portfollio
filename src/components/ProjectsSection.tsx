import React from 'react';
import { motion } from 'framer-motion';
import ScrollStack, { ScrollStackItem } from './ScrollStack';

interface Project {
  number: string;
  title: string;
  category: string;
  description: string;
  githubUrl: string;
  tech: string[];
  metrics: { label: string; value: string }[];
}

const projects: Project[] = [
  {
    number: '01',
    title: 'MIS Production Tracking Tool',
    category: 'ENTERPRISE / AUTOMATION PLATFORM',
    description:
      'Enterprise-grade MIS production tracking system that automates employee production reporting across multiple departments. Features intelligent data processing engine to clean, validate, and standardize unstructured POS Excel data using rule-based business logic. Reduced processing time from approximately 360 hours to under 5 minutes.',
    githubUrl: 'https://github.com/adithbabu',
    tech: [
      'Python',
      'Django',
      'Microsoft SQL Server',
      'OpenPyXL',
      'REST APIs',
      'Business Logic Engine',
    ],
    metrics: [
      { label: 'REDUCTION', value: '99.9% Effort' },
      { label: 'ENGINE', value: 'Rule-Based Processing' },
      { label: 'PIPELINE', value: 'Automated Reporting' },
    ],
  },
  {
    number: '02',
    title: 'Intra-Oral Scan Automation',
    category: 'WEB SCRAPING / AUTOMATION SYSTEM',
    description:
      'End-to-end automation system for downloading, organizing, processing, and analyzing intra-oral scan cases from cloud-based platforms. Implements web scraping with Selenium, intelligent folder management, and data extraction from PDF, JSON, and HTML files into Microsoft SQL Server.',
    githubUrl: 'https://github.com/adithbabu',
    tech: [
      'Python',
      'Django',
      'Selenium',
      'Watchdog',
      'Microsoft SQL Server',
      'Waitress',
      'HTML Parsing',
    ],
    metrics: [
      { label: 'EFFICIENCY', value: '80% Faster' },
      { label: 'SCRAPING', value: 'Selenium + Watchdog' },
      { label: 'PROCESSING', value: 'PDF / JSON / HTML' },
    ],
  },
  {
    number: '03',
    title: 'EasyApply — AI Job Assistant',
    category: 'AI AUTOMATION / FULL STACK',
    description:
      'AI-powered job application platform that extracts job posting requirements from screenshots using OCR and LLMs, generates tailored cover letters and cold emails matched to the candidate CV profile, and dispatches them directly via Gmail API in one click.',
    githubUrl: 'https://github.com/adithbabu',
    tech: [
      'Python',
      'FastAPI',
      'Next.js 16',
      'TypeScript',
      'PostgreSQL',
      'Gmail API',
      'OpenAI / OCR',
      'Tailwind CSS',
    ],
    metrics: [
      { label: 'BACKEND', value: 'FastAPI + PostgreSQL' },
      { label: 'FRONTEND', value: 'Next.js 16 + Tailwind' },
      { label: 'INTEGRATIONS', value: 'Gmail API + OpenAI' },
    ],
  },
];

export const ProjectsSection: React.FC = () => {
  return (
    <section
      id="work"
      className="relative w-full bg-black text-[#D1FAE5] font-sans selection:bg-[#6EE7B7] selection:text-black pt-10 lg:pt-12 pb-6 px-6 sm:px-12 lg:px-20"
    >
      {/* Studio Ambient Glows */}
      <div className="absolute top-1/4 left-1/3 w-[36rem] h-[36rem] bg-[#10B981]/5 rounded-full blur-[180px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[30rem] h-[30rem] bg-[#1E3A2F]/5 rounded-full blur-[170px] pointer-events-none" />

      <div className="max-w-7xl mx-auto w-full relative z-10">
        
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
            02 / FEATURED WORK
          </span>
          <div className="w-20 h-[1px] bg-gradient-to-r from-[#10B981]/80 via-[#1E3A2F]/40 to-transparent" />
        </motion.div>

        {/* Section Headline */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col md:flex-row md:items-end justify-between mb-16"
        >
          <h2
            className="text-5xl sm:text-6xl md:text-7xl lg:text-[5.5rem] tracking-tight uppercase leading-[0.85] select-none"
            style={{ fontFamily: "'Bebas Neue', sans-serif" }}
          >
            <span className="block text-transparent bg-clip-text bg-gradient-to-b from-[#FFFFFF] via-[#7DA88A] to-[#1E3A2F] drop-shadow-[0_4px_12px_rgba(0,0,0,0.8)]">
              SELECTED WORKS.
            </span>
            <span className="block text-transparent bg-clip-text bg-gradient-to-b from-[#A7F3D0] via-[#34D399] to-[#064E3B] drop-shadow-[0_8px_25px_rgba(201,158,93,0.35)]">
              ENGINEERED VALUE.
            </span>
          </h2>

          <p
            className="text-xs sm:text-sm font-light text-[#5B7C65] max-w-sm mt-4 md:mt-0 leading-relaxed"
            style={{ fontFamily: "'Montserrat', sans-serif" }}
          >
            Scroll down to unfold the system architecture cards. Each platform was built to solve complex operational challenges.
          </p>
        </motion.div>

        {/* React Bits Stacking Deck */}
        {/* React Bits Stacking Deck */}
<ScrollStack
  itemDistance={20}
  itemScale={0.035}
  itemStackDistance={28}
  stackPosition="15%"
  scaleEndPosition="6%"
  baseScale={0.88}
  useWindowScroll={true}
>
          {projects.map((project) => (
            <ScrollStackItem key={project.title}>
              <div className="relative w-full rounded-2xl border border-[#1E3A2F]/50 bg-[#0A1F14] p-8 sm:p-12 sm:pb-14 shadow-[0_25px_70px_rgba(0,0,0,0.98)] group overflow-hidden transition-colors duration-500 hover:border-[#10B981]">
                
                {/* Top Gold Border Light Flare */}
                <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#10B981]/80 to-transparent" />

                {/* Corner Minimal L-Brackets */}
                <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-[#10B981]/60 group-hover:border-[#10B981] transition-colors" />
                <div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-[#10B981]/60 group-hover:border-[#10B981] transition-colors" />
                <div className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-[#10B981]/60 group-hover:border-[#10B981] transition-colors" />
                <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-[#10B981]/60 group-hover:border-[#10B981] transition-colors" />

                {/* Big Background Watermark Number */}
                <span
                  className="absolute -bottom-6 -right-3 text-8xl sm:text-9xl font-bold text-[#D1FAE5]/5 select-none pointer-events-none leading-none"
                  style={{ fontFamily: "'Bebas Neue', sans-serif" }}
                >
                  {project.number}
                </span>

                {/* Content Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start relative z-10">
                  
                  {/* Left Column (7 Cols) */}
                  <div className="lg:col-span-7 flex flex-col justify-between">
                    <div>
                      <div className="flex items-center space-x-3 mb-4">
                        <span className="text-xs font-mono font-bold text-[#10B981]">
                          {project.number} //
                        </span>
                        <span className="text-[10.5px] font-mono tracking-[0.25em] uppercase text-[#5B7C65]">
                          {project.category}
                        </span>
                      </div>

                      <h3
                        className="text-4xl sm:text-5xl lg:text-6xl font-normal tracking-tight text-white mb-4 group-hover:text-[#A7F3D0] transition-colors uppercase leading-[0.9]"
                        style={{ fontFamily: "'Bebas Neue', sans-serif" }}
                      >
                        {project.title}
                      </h3>

                      <p
                        className="text-xs sm:text-sm md:text-[14px] font-light text-[#7DA88A] leading-[1.85] tracking-wide mb-6 max-w-2xl"
                        style={{ fontFamily: "'Montserrat', sans-serif" }}
                      >
                        {project.description}
                      </p>
                    </div>

                    {/* Tech Stack Pills */}
                    <div className="flex flex-wrap gap-2 pt-5 border-t border-[#1E3A2F]/25">
                      {project.tech.map((t) => (
                        <span
                          key={t}
                          className="px-3 py-1 text-[10px] font-medium tracking-[0.16em] uppercase rounded-sm border border-[#1E3A2F]/40 bg-[#132A1E] text-[#A7F3D0] group-hover:border-[#10B981]/50 transition-all duration-300"
                          style={{ fontFamily: "'Montserrat', sans-serif" }}
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Right Column (5 Cols) */}
                  <div className="lg:col-span-5 flex flex-col justify-center h-full space-y-6 lg:pl-6 lg:border-l lg:border-[#1E3A2F]/25">
                    <div className="space-y-3">
                      <span className="text-[9.5px] font-mono tracking-[0.25em] uppercase text-[#1E3A2F] block mb-2">
                        // ARCHITECTURE METRICS
                      </span>
                      {project.metrics.map((m) => (
                        <div
                          key={m.label}
                          className="p-3.5 rounded-sm border border-[#1E3A2F]/25 bg-[#050D08] flex items-center justify-between"
                        >
                          <span className="text-[10px] font-mono text-[#5B7C65]">
                            {m.label}
                          </span>
                          <span className="text-[11px] font-mono font-medium text-[#A7F3D0]">
                            {m.value}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                </div>
              </div>
            </ScrollStackItem>
          ))}
        </ScrollStack>

      </div>
    </section>
  );
};

export default ProjectsSection;