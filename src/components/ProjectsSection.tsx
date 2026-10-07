import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import ScrollStack, { ScrollStackItem } from './ScrollStack';

interface Project {
  number: string;
  shortTitle: string;
  title: string;
  category: string;
  description: string;
  tech: string[];
  metrics: { label: string; value: string }[];
}

const projects: Project[] = [
  {
    number: '01',
    shortTitle: 'Scan Portal',
    title: 'Intra-Oral Scan Operations Platform',
    category: 'RPA, WEB SCRAPING & WEB PORTAL',
    description:
      'End-to-end scanning operations platform: RPA bots ingest clinical cases and web scraping compiles dynamic order sheets. The web application executes comprehensive file and folder operations, automated extractions, and directory routing directly into SQL Server.',
    tech: ['Python', 'Django', 'Selenium', 'Web Scraping', 'SQL Server'],
    metrics: [
      { label: 'FRONTEND', value: 'Web Portal for Scan & Folders' },
      { label: 'BACKEND', value: 'Python Django & Microsoft SQL' },
      { label: 'PIPELINE', value: 'Selenium RPA & File Watcher' },
      { label: 'EFFICIENCY', value: '80% Turnaround Speedup' },
      { label: 'INTEGRATIONS', value: 'Web Scraping & 7-Zip CLI' },
    ],
  },
  {
    number: '02',
    shortTitle: 'EasyApply',
    title: 'EasyApply — AI Job Assistant',
    category: 'AI AUTOMATION & FULL STACK',
    description:
      'AI-powered job application platform that extracts job requirements from screenshots using OCR and LLMs, generates tailored cover letters and cold emails matched to the candidate CV profile, and dispatches them directly via Gmail API in a single-click workflow.',
    tech: ['Next.js', 'FastAPI', 'Python', 'PostgreSQL', 'OpenAI API'],
    metrics: [
      { label: 'FRONTEND', value: 'Next.js App Router & Tailwind' },
      { label: 'BACKEND', value: 'FastAPI & PostgreSQL' },
      { label: 'PIPELINE', value: 'Vision OCR & LLM Engine' },
      { label: 'EFFICIENCY', value: '1-Click Direct Application' },
      { label: 'INTEGRATIONS', value: 'OpenAI API & Gmail API' },
    ],
  },
  {
    number: '03',
    shortTitle: 'CAM Telemetry',
    title: 'Multi-Zone CAM Operations Platform',
    category: 'INDUSTRIAL CAM OPERATIONS & TELEMETRY',
    description:
      'Enterprise operations platform eliminating manual spreadsheets across multiple distinct CAM production zones. Centralizes real-time visibility over active work queues, machine operating runtimes versus idle hours, and equipment maintenance cycles with live analytics in SQL Server.',
    tech: ['Python', 'Django', 'SQL Server', 'REST APIs', 'Data Analytics'],
    metrics: [
      { label: 'FRONTEND', value: 'Live Machine Telemetry Console' },
      { label: 'BACKEND', value: 'Python Django & Microsoft SQL' },
      { label: 'PIPELINE', value: 'Multi-Zone Work Queue Stream' },
      { label: 'EFFICIENCY', value: 'Zero Manual Spreadsheets' },
      { label: 'INTEGRATIONS', value: 'CAM Telemetry & Tool Health' },
    ],
  },
  {
    number: '04',
    shortTitle: 'MIS Tool',
    title: 'MIS Production Tracking Tool',
    category: 'ENTERPRISE AUTOMATION PLATFORM',
    description:
      'Enterprise MIS production tracking platform automating employee performance analytics across multiple departments. Features an intelligent data engine to parse, clean, and standardize unstructured POS Excel files with automated rule logic, eliminating manual reporting overhead.',
    tech: ['Python', 'Django', 'SQL Server', 'REST APIs', 'OpenPyXL'],
    metrics: [
      { label: 'FRONTEND', value: 'Interactive Analytics Dashboard' },
      { label: 'BACKEND', value: 'Python Django & Microsoft SQL' },
      { label: 'PIPELINE', value: 'Excel Parsing & Rule Engine' },
      { label: 'EFFICIENCY', value: '99.9% Processing Speedup' },
      { label: 'INTEGRATIONS', value: 'OpenPyXL & Department APIs' },
    ],
  },
];

export const ProjectsSection: React.FC = () => {
  const [activeMobileIndex, setActiveMobileIndex] = useState(0);
  const scrollRef = React.useRef<HTMLDivElement>(null);

  const handleScroll = () => {
    if (!scrollRef.current) return;
    const container = scrollRef.current;
    const containerCenter = container.scrollLeft + container.offsetWidth / 2;
    const children = Array.from(container.children) as HTMLElement[];
    let closestIndex = 0;
    let minDistance = Infinity;

    children.forEach((child, idx) => {
      const childCenter = child.offsetLeft + child.offsetWidth / 2;
      const distance = Math.abs(containerCenter - childCenter);
      if (distance < minDistance) {
        minDistance = distance;
        closestIndex = idx;
      }
    });

    if (closestIndex !== activeMobileIndex) {
      setActiveMobileIndex(closestIndex);
    }
  };

  const scrollToIndex = (index: number) => {
    if (!scrollRef.current) return;
    const child = scrollRef.current.children[index] as HTMLElement;
    if (child) {
      child.scrollIntoView({ behavior: 'smooth', inline: 'center', block: 'nearest' });
      setActiveMobileIndex(index);
    }
  };

  return (
    <section
      id="work"
      className="relative z-10 w-full bg-black text-[#D1FAE5] font-sans selection:bg-[#6EE7B7] selection:text-black pt-10 lg:pt-12 pb-6 px-4 sm:px-12 lg:px-20 overflow-hidden"
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
          className="flex items-center space-x-3 sm:space-x-4 mb-4 sm:mb-5"
        >
          <span
            className="text-[10px] sm:text-[11px] font-medium tracking-[0.35em] uppercase text-[#10B981]"
            style={{ fontFamily: "'Montserrat', sans-serif" }}
          >
            02 / FEATURED WORK
          </span>
          <div className="w-16 sm:w-20 h-[1px] bg-gradient-to-r from-[#10B981]/80 via-[#1E3A2F]/40 to-transparent" />
        </motion.div>

        {/* Section Headline */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col md:flex-row md:items-end justify-between mb-8 sm:mb-16"
        >
          <h2
            className="text-4xl sm:text-6xl md:text-7xl lg:text-[5.5rem] tracking-tight uppercase leading-[0.88] select-none"
            style={{ fontFamily: "'Bebas Neue', sans-serif" }}
          >
            <span className="block text-transparent bg-clip-text bg-gradient-to-b from-[#FFFFFF] via-[#7DA88A] to-[#1E3A2F] drop-shadow-[0_4px_12px_rgba(0,0,0,0.8)]">
              SELECTED WORKS.
            </span>
            <span className="block text-transparent bg-clip-text bg-gradient-to-b from-[#A7F3D0] via-[#34D399] to-[#064E3B] drop-shadow-[0_8px_25px_rgba(16,185,129,0.35)]">
              ENGINEERED VALUE.
            </span>
          </h2>

          <p
            className="text-xs sm:text-sm font-light text-[#5B7C65] max-w-sm mt-3 md:mt-0 leading-relaxed"
            style={{ fontFamily: "'Montserrat', sans-serif" }}
          >
            <span className="hidden lg:inline">Scroll down to unfold the system architecture cards. Each platform was built to solve complex operational challenges.</span>
            <span className="lg:hidden">Scroll left or right to explore each system architecture card.</span>
          </p>
        </motion.div>

        {/* ============================================================== */}
        {/* DESKTOP VIEW (≥ 1024px): ORIGINAL MAJESTIC SCROLLSTACK DECK   */}
        {/* ============================================================== */}
        <div className="hidden lg:block">
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
                  
                  {/* Top Emerald Border Light Flare */}
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

        {/* ============================================================== */}
        {/* MOBILE & TABLET VIEW (< 1024px): HORIZONTAL SNAP SCROLL TRACK  */}
        {/* ============================================================== */}
        <div className="block lg:hidden w-full">
          
          {/* Horizontal Scrollable Track */}
          <div
            ref={scrollRef}
            onScroll={handleScroll}
            className="flex overflow-x-auto snap-x snap-mandatory gap-4 pb-2 no-scrollbar w-full"
          >
            {projects.map((project) => (
              <div
                key={project.number}
                className="shrink-0 w-full snap-center relative rounded-2xl border border-[#1E3A2F]/60 bg-[#0A1F14] p-5 sm:p-7 shadow-[0_25px_70px_rgba(0,0,0,0.98)] overflow-hidden"
              >
                {/* Top Light Flare */}
                <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#10B981]/80 to-transparent" />

                {/* Corner L-Brackets */}
                <div className="absolute top-0 left-0 w-3 h-3 border-t-2 border-l-2 border-[#10B981]/60" />
                <div className="absolute top-0 right-0 w-3 h-3 border-t-2 border-r-2 border-[#10B981]/60" />
                <div className="absolute bottom-0 left-0 w-3 h-3 border-b-2 border-l-2 border-[#10B981]/60" />
                <div className="absolute bottom-0 right-0 w-3 h-3 border-b-2 border-r-2 border-[#10B981]/60" />

                {/* Background Watermark */}
                <span
                  className="absolute -bottom-6 -right-3 text-7xl font-bold text-[#D1FAE5]/5 select-none pointer-events-none leading-none"
                  style={{ fontFamily: "'Bebas Neue', sans-serif" }}
                >
                  {project.number}
                </span>

                {/* Card Content */}
                <div className="relative z-10">
                  <div className="flex items-center space-x-2 mb-2">
                    <span className="text-xs font-mono font-bold text-[#10B981]">
                      {project.number} //
                    </span>
                    <span className="text-[9.5px] font-mono tracking-[0.2em] uppercase text-[#5B7C65]">
                      {project.category}
                    </span>
                  </div>

                  <h3
                    className="text-2xl sm:text-3xl font-normal tracking-tight text-white mb-2.5 uppercase leading-[0.95]"
                    style={{ fontFamily: "'Bebas Neue', sans-serif" }}
                  >
                    {project.title}
                  </h3>

                  <p
                    className="text-xs sm:text-[13px] font-light text-[#7DA88A] leading-relaxed mb-4"
                    style={{ fontFamily: "'Montserrat', sans-serif" }}
                  >
                    {project.description}
                  </p>

                  {/* Tech Pills */}
                  <div className="flex flex-wrap gap-1.5 pt-3 border-t border-[#1E3A2F]/25 mb-5">
                    {project.tech.map((t) => (
                      <span
                        key={t}
                        className="px-2.5 py-0.5 text-[9.5px] font-medium tracking-[0.14em] uppercase rounded-sm border border-[#1E3A2F]/40 bg-[#132A1E] text-[#A7F3D0]"
                        style={{ fontFamily: "'Montserrat', sans-serif" }}
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  {/* Architecture Metrics */}
                  <div className="space-y-1.5 pt-3 border-t border-[#1E3A2F]/25">
                    <span className="text-[9px] font-mono tracking-[0.25em] uppercase text-[#10B981]/70 block mb-1">
                      // ARCHITECTURE METRICS
                    </span>
                    {project.metrics.map((m) => (
                      <div
                        key={m.label}
                        className="px-3 py-2 rounded-sm border border-[#1E3A2F]/30 bg-[#050D08] flex items-center justify-between gap-3 min-h-[36px]"
                      >
                        <span className="text-[9.5px] font-mono font-semibold text-[#5B7C65] tracking-wider shrink-0">
                          {m.label}
                        </span>
                        <span className="text-[10.5px] font-mono font-medium text-[#A7F3D0] text-right">
                          {m.value}
                        </span>
                      </div>
                    ))}
                  </div>

                </div>
              </div>
            ))}
          </div>

          {/* Mobile Bottom Indicator Dots (No Prev/Next buttons) */}
          <div className="flex items-center justify-center gap-1.5 mt-4">
            {projects.map((_, idx) => (
              <button
                key={idx}
                onClick={() => scrollToIndex(idx)}
                className={`h-2 rounded-full transition-all ${
                  idx === activeMobileIndex
                    ? 'w-6 bg-[#10B981]'
                    : 'w-2 bg-[#1E3A2F]/60 hover:bg-[#5B7C65]'
                }`}
                aria-label={`Go to project ${idx + 1}`}
              />
            ))}
          </div>

        </div>

      </div>
    </section>
  );
};

export default ProjectsSection;