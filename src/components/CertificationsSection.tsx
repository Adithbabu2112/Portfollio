import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import type { Variants } from 'framer-motion';

interface Certification {
  title: string;
  issuer: string;
  description: string;
  icon: string;
}

const certifications: Certification[] = [
  {
    title: 'Python Web Development Expert',
    issuer: 'National Council for Technology and Training (NACTET)',
    description: 'Certified in Python web development, validating expertise in application architecture, backend development, database integration, and deployment best practices.',
    icon: '🐍',
  },
  {
    title: 'Front-End Development',
    issuer: 'Great Learning',
    description: 'Gained practical knowledge in responsive web development using HTML5, CSS3, JavaScript, and modern UI design principles.',
    icon: '🌐',
  },
  {
    title: 'Leverage AI Tools for Business',
    issuer: 'Microsoft',
    description: 'Proficiency in leveraging AI-powered tools and technologies to enhance productivity, streamline workflows, and drive intelligent automation.',
    icon: '🤖',
  },
];

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.1,
    },
  },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 25, filter: 'blur(6px)' },
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

export const CertificationsSection: React.FC = () => {
  const [activeMobileIndex, setActiveMobileIndex] = useState(0);
  const certScrollRef = React.useRef<HTMLDivElement>(null);

  const handleScroll = () => {
    if (!certScrollRef.current) return;
    const container = certScrollRef.current;
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
    if (!certScrollRef.current) return;
    const child = certScrollRef.current.children[index] as HTMLElement;
    if (child) {
      child.scrollIntoView({ behavior: 'smooth', inline: 'center', block: 'nearest' });
      setActiveMobileIndex(index);
    }
  };

  return (
    <section
      id="certifications"
      className="relative z-20 w-full bg-black text-[#D1FAE5] font-sans selection:bg-[#6EE7B7] selection:text-black pt-4 pb-24 px-4 sm:px-12 lg:px-20 overflow-hidden"
    >
      {/* Subtle Background Glow */}
      <div className="absolute top-1/2 left-1/3 w-[32rem] h-[32rem] bg-[#10B981]/[0.03] rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/3 w-[24rem] h-[24rem] bg-[#1E3A2F]/[0.04] rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-5xl mx-auto w-full relative z-10">

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
            05 / CERTIFICATIONS
          </span>
          <div className="w-20 h-[1px] bg-gradient-to-r from-[#10B981]/80 via-[#1E3A2F]/40 to-transparent" />
        </motion.div>

        {/* Section Headline */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          className="mb-14"
        >
          <h2
            className="text-5xl sm:text-6xl md:text-7xl lg:text-[5.5rem] tracking-tight uppercase leading-[0.85] select-none"
            style={{ fontFamily: "'Bebas Neue', sans-serif" }}
          >
            <span className="block text-transparent bg-clip-text bg-gradient-to-b from-[#FFFFFF] via-[#7DA88A] to-[#1E3A2F] drop-shadow-[0_4px_12px_rgba(0,0,0,0.8)]">
              VERIFIED
            </span>
            <span className="block text-transparent bg-clip-text bg-gradient-to-b from-[#A7F3D0] via-[#34D399] to-[#064E3B] drop-shadow-[0_8px_25px_rgba(16,185,129,0.35)]">
              CREDENTIALS.
            </span>
          </h2>
        </motion.div>

        {/* ============================================================== */}
        {/* DESKTOP VIEW (≥ 768px): 3-COLUMN SIDE-BY-SIDE GRID             */}
        {/* ============================================================== */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          className="hidden md:grid md:grid-cols-3 gap-6"
        >
          {certifications.map((cert) => (
            <motion.div
              key={cert.title}
              variants={cardVariants}
              whileHover={{ y: -6, transition: { duration: 0.25 } }}
              className="relative p-7 sm:p-8 rounded-sm border border-[#1E3A2F]/35 bg-[#0A1F14]/85 backdrop-blur-xl overflow-hidden transition-all duration-500 hover:border-[#10B981]/80 hover:shadow-[0_16px_45px_rgba(16,185,129,0.14)] cursor-default group"
            >
              {/* Top Subtle Border Highlight */}
              <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#10B981]/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              {/* Corner Minimal Pins */}
              <div className="absolute top-0 left-0 w-3 h-3 border-t border-l border-[#10B981]/40 group-hover:border-[#10B981] transition-colors duration-300" />
              <div className="absolute bottom-0 right-0 w-3 h-3 border-b border-r border-[#10B981]/40 group-hover:border-[#10B981] transition-colors duration-300" />

              {/* Icon */}
              <div className="text-3xl mb-5 select-none">{cert.icon}</div>

              {/* Title */}
              <h3
                className="text-2xl sm:text-[1.7rem] font-normal tracking-wide text-white mb-2 group-hover:text-[#A7F3D0] transition-colors uppercase leading-[1]"
                style={{ fontFamily: "'Bebas Neue', sans-serif" }}
              >
                {cert.title}
              </h3>

              {/* Issuer */}
              <span
                className="block text-[10px] font-medium tracking-[0.2em] uppercase text-[#10B981] mb-4"
                style={{ fontFamily: "'Montserrat', sans-serif" }}
              >
                {cert.issuer}
              </span>

              {/* Description */}
              <p
                className="text-xs sm:text-[13px] text-[#5B7C65] font-light leading-relaxed group-hover:text-[#7DA88A] transition-colors"
                style={{ fontFamily: "'Montserrat', sans-serif" }}
              >
                {cert.description}
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* ============================================================== */}
        {/* MOBILE CAROUSEL (< 768px): HORIZONTAL SNAP SCROLL TRACK        */}
        {/* ============================================================== */}
        <div className="block md:hidden w-full">
          <div
            ref={certScrollRef}
            onScroll={handleScroll}
            className="flex overflow-x-auto snap-x snap-mandatory gap-4 pb-2 no-scrollbar w-full"
          >
            {certifications.map((cert, idx) => (
              <div
                key={cert.title}
                className="shrink-0 w-full snap-center relative p-6 sm:p-7 rounded-sm border border-[#1E3A2F]/50 bg-[#0A1F14]/90 backdrop-blur-xl overflow-hidden shadow-[0_20px_60px_rgba(0,0,0,0.9)] select-none"
              >
                {/* Top Subtle Border Highlight */}
                <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#10B981]/60 to-transparent" />

                {/* Corner Minimal Pins */}
                <div className="absolute top-0 left-0 w-3 h-3 border-t border-l border-[#10B981]/50" />
                <div className="absolute top-0 right-0 w-3 h-3 border-t border-r border-[#10B981]/50" />
                <div className="absolute bottom-0 left-0 w-3 h-3 border-b border-l border-[#10B981]/50" />
                <div className="absolute bottom-0 right-0 w-3 h-3 border-b border-r border-[#10B981]/50" />

                {/* Top Row: Icon + Counter Badge */}
                <div className="flex items-center justify-between mb-4">
                  <div className="text-3xl">{cert.icon}</div>
                  <span className="text-[10px] font-mono font-bold tracking-widest text-[#10B981] bg-[#10B981]/10 px-2 py-0.5 rounded-sm border border-[#10B981]/30">
                    {`0${idx + 1} / 0${certifications.length}`}
                  </span>
                </div>

                {/* Title */}
                <h3
                  className="text-2xl font-normal tracking-wide text-white mb-2 uppercase leading-[1.05]"
                  style={{ fontFamily: "'Bebas Neue', sans-serif" }}
                >
                  {cert.title}
                </h3>

                {/* Issuer */}
                <span
                  className="block text-[10px] font-medium tracking-[0.2em] uppercase text-[#10B981] mb-3.5"
                  style={{ fontFamily: "'Montserrat', sans-serif" }}
                >
                  {cert.issuer}
                </span>

                {/* Description */}
                <p
                  className="text-xs text-[#7DA88A] font-light leading-relaxed"
                  style={{ fontFamily: "'Montserrat', sans-serif" }}
                >
                  {cert.description}
                </p>
              </div>
            ))}
          </div>

          {/* Bottom Indicators (Dots only, no prev/next buttons) */}
          <div className="flex items-center justify-center gap-1.5 mt-4">
            {certifications.map((_, idx) => (
              <button
                key={idx}
                onClick={() => scrollToIndex(idx)}
                className={`h-2 rounded-full transition-all ${
                  idx === activeMobileIndex
                    ? 'w-6 bg-[#10B981]'
                    : 'w-2 bg-[#1E3A2F]/60 hover:bg-[#5B7C65]'
                }`}
                aria-label={`Go to credential ${idx + 1}`}
              />
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default CertificationsSection;
