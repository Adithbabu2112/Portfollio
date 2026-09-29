// src/components/ExperienceSection.tsx
import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

interface RouteStop {
  id: string;
  year: string;
  title: string;
  organization: string;
  description: string;
}

const journey: RouteStop[] = [
  {
    id: '01',
    year: 'MAY 2025 - PRESENT',
    title: 'AUTOMATION ANALYST',
    organization: 'DENTCARE DENTAL LAB PVT. LTD.',
    description: 'Designing and deploying production-grade internal applications, automation bots, and workflow solutions using Python, Django, Selenium, Power Automate, and Microsoft SQL Server. Reduced processing time from 360 hours to under 5 minutes.',
  },
  {
    id: '02',
    year: 'AUG 2023 - FEB 2024',
    title: 'PYTHON FULL STACK INTERN',
    organization: 'LUMINAR TECHNOLAB, KOCHI',
    description: 'Completed intensive training in Python full stack development, building web applications using Django, RESTful APIs, and SQL databases with Git-based version control.',
  },
  {
    id: '03',
    year: '2020 - 2023',
    title: 'BACHELOR OF COMPUTER APPLICATIONS',
    organization: 'MAR AUGUSTHINOSE COLLEGE — MG UNIVERSITY',
    description: 'Specialized in Computer Science with focus on web development, database management, and programming fundamentals.',
  },
];

export const ExperienceSection: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start 70%', 'end 90%'],
  });

  const lineHeight = useTransform(scrollYProgress, [0, 1], ['0%', '100%']);

  return (
    <section
      id="experience"
      ref={containerRef}
      className="relative w-full bg-black text-[#D1FAE5] font-sans selection:bg-[#6EE7B7] selection:text-black pt-4 pb-24 px-6 sm:px-12 lg:px-20 overflow-hidden"
    >
      {/* Subtle Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[40rem] h-[40rem] bg-[#10B981]/[0.03] rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-4xl mx-auto w-full relative z-10">
        
        {/* Eyebrow Header */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex items-center space-x-4 mb-7"
        >
          <span
            className="text-[11px] font-medium tracking-[0.35em] uppercase text-[#10B981]"
            style={{ fontFamily: "'Montserrat', sans-serif" }}
          >
            04 / EXPERIENCE
          </span>
          <div className="w-20 h-[1px] bg-gradient-to-r from-[#10B981]/80 via-[#1E3A2F]/40 to-transparent" />
        </motion.div>

        {/* Section Headline */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          className="mb-16"
        >
          <h2
            className="text-5xl sm:text-6xl md:text-7xl lg:text-[5.5rem] tracking-tight uppercase leading-[0.85] select-none"
            style={{ fontFamily: "'Bebas Neue', sans-serif" }}
          >
            <span className="block text-transparent bg-clip-text bg-gradient-to-b from-[#FFFFFF] via-[#7DA88A] to-[#1E3A2F] drop-shadow-[0_4px_12px_rgba(0,0,0,0.8)]">
              EXPERIENCE &amp;
            </span>
            <span className="block text-transparent bg-clip-text bg-gradient-to-b from-[#A7F3D0] via-[#34D399] to-[#064E3B] drop-shadow-[0_8px_25px_rgba(201,158,93,0.35)]">
              MILESTONES.
            </span>
          </h2>
        </motion.div>

        {/* Minimalist Route Map */}
        <div className="relative w-full">
          
          {/* Background Track */}
          <div className="absolute left-[19px] md:left-[140px] top-4 bottom-8 w-[1px] bg-[#1E3A2F]/20" />
          
          {/* Animated Gold Track */}
          <motion.div
            style={{ height: lineHeight }}
            className="absolute left-[19px] md:left-[140px] top-4 w-[2px] bg-gradient-to-b from-[#10B981] via-[#34D399] to-[#1E3A2F]/10 shadow-[0_0_10px_#10B981] origin-top"
          />

          <div className="space-y-12">
            {journey.map((stop, idx) => (
              <motion.div
                key={stop.id}
                initial={{ opacity: 0, x: -15 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.7, delay: idx * 0.08 }}
                className="relative flex flex-col md:flex-row items-start group"
              >
                {/* Desktop Year (Left side of track) */}
                <div className="hidden md:block w-[140px] shrink-0 pr-8 pt-0.5 text-right">
                  <span className="text-[10px] font-mono tracking-[0.2em] text-[#1E3A2F] group-hover:text-[#10B981] transition-colors">
                    {stop.year}
                  </span>
                </div>

                {/* Route Node */}
                <div className="absolute left-[19px] md:left-[140px] top-1.5 -translate-x-1/2 flex items-center justify-center">
                  <div className="absolute w-6 h-6 rounded-full border border-[#10B981]/0 group-hover:border-[#10B981]/40 group-hover:scale-150 transition-all duration-700 ease-out" />
                  <div className="w-2.5 h-2.5 rounded-full bg-[#0A1F14] border border-[#1E3A2F] group-hover:bg-[#10B981] group-hover:border-[#10B981] group-hover:shadow-[0_0_12px_#10B981] transition-colors duration-300" />
                </div>

                {/* Content (Right side of track) */}
                <div className="ml-14 md:ml-12 pl-2">
                  {/* Mobile Year */}
                  <div className="md:hidden mb-1.5">
                    <span className="text-[10px] font-mono tracking-[0.2em] text-[#10B981]">
                      {stop.year}
                    </span>
                  </div>

                  <h3
                    className="text-3xl sm:text-4xl tracking-wide text-white group-hover:text-[#A7F3D0] transition-colors mb-1 leading-none"
                    style={{ fontFamily: "'Bebas Neue', sans-serif" }}
                  >
                    {stop.title}
                  </h3>
                  
                  <span 
                    className="block text-[10px] font-medium tracking-[0.2em] uppercase text-[#1E3A2F] mb-2"
                    style={{ fontFamily: "'Montserrat', sans-serif" }}
                  >
                    {stop.organization}
                  </span>
                  
                  <p 
                    className="text-xs sm:text-[13px] font-light text-[#5B7C65] leading-[1.7] max-w-lg group-hover:text-[#7DA88A] transition-colors"
                    style={{ fontFamily: "'Montserrat', sans-serif" }}
                  >
                    {stop.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;