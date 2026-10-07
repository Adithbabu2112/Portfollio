import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import type { Variants } from 'framer-motion';

interface Certification {
  title: string;
  issuer: string;
  description: string;
  icon: React.ReactNode;
}

const PythonLogo: React.FC<{ className?: string }> = ({ className = 'w-8 h-8' }) => (
  <svg
    viewBox="0 0 128 128"
    className={className}
    aria-label="Python Logo"
    role="img"
  >
    <defs>
      <linearGradient
        id="cert-py-blue"
        x1="70.252"
        y1="1237.476"
        x2="170.659"
        y2="1151.089"
        gradientUnits="userSpaceOnUse"
        gradientTransform="matrix(.563 0 0 -.568 -29.215 707.817)"
      >
        <stop offset="0" stopColor="#5A9FD4" />
        <stop offset="1" stopColor="#306998" />
      </linearGradient>
      <linearGradient
        id="cert-py-yellow"
        x1="209.474"
        y1="1098.811"
        x2="173.62"
        y2="1149.537"
        gradientUnits="userSpaceOnUse"
        gradientTransform="matrix(.563 0 0 -.568 -29.215 707.817)"
      >
        <stop offset="0" stopColor="#FFD43B" />
        <stop offset="1" stopColor="#FFE873" />
      </linearGradient>
      <radialGradient
        id="cert-py-shadow"
        cx="1825.678"
        cy="444.45"
        r="26.743"
        gradientTransform="matrix(0 -.24 -1.055 0 532.979 557.576)"
        gradientUnits="userSpaceOnUse"
      >
        <stop offset="0" stopColor="#B8B8B8" stopOpacity="0.498" />
        <stop offset="1" stopColor="#7F7F7F" stopOpacity="0" />
      </radialGradient>
    </defs>
    <path
      fill="url(#cert-py-blue)"
      d="M63.391 1.988c-4.222.02-8.252.379-11.8 1.007-10.45 1.846-12.346 5.71-12.346 12.837v9.411h24.693v3.137H29.977c-7.176 0-13.46 4.313-15.426 12.521-2.268 9.405-2.368 15.275 0 25.096 1.755 7.311 5.947 12.519 13.124 12.519h8.491V67.234c0-8.151 7.051-15.34 15.426-15.34h24.665c6.866 0 12.346-5.654 12.346-12.548V15.833c0-6.693-5.646-11.72-12.346-12.837-4.244-.706-8.645-1.027-12.866-1.008zM50.037 9.557c2.55 0 4.634 2.117 4.634 4.721 0 2.593-2.083 4.69-4.634 4.69-2.56 0-4.633-2.097-4.633-4.69-.001-2.604 2.073-4.721 4.633-4.721z"
      transform="translate(0 10.26)"
    />
    <path
      fill="url(#cert-py-yellow)"
      d="M91.682 28.38v10.966c0 8.5-7.208 15.655-15.426 15.655H51.591c-6.756 0-12.346 5.783-12.346 12.549v23.515c0 6.691 5.818 10.628 12.346 12.547 7.816 2.297 15.312 2.713 24.665 0 6.216-1.801 12.346-5.423 12.346-12.547v-9.412H63.938v-3.138h37.012c7.176 0 9.852-5.005 12.348-12.519 2.578-7.735 2.467-15.174 0-25.096-1.774-7.145-5.161-12.521-12.348-12.521h-9.268zM77.809 87.927c2.561 0 4.634 2.097 4.634 4.692 0 2.602-2.074 4.719-4.634 4.719-2.55 0-4.633-2.117-4.633-4.719 0-2.595 2.083-4.692 4.633-4.692z"
      transform="translate(0 10.26)"
    />
    <path
      opacity="0.444"
      fill="url(#cert-py-shadow)"
      d="M97.309 119.597c0 3.543-14.816 6.416-33.091 6.416-18.276 0-33.092-2.873-33.092-6.416 0-3.544 14.815-6.417 33.092-6.417 18.275 0 33.091 2.872 33.091 6.417z"
    />
  </svg>
);

const certifications: Certification[] = [
  {
    title: 'Python Web Development Expert',
    issuer: 'National Council for Technology and Training (NACTET)',
    description: 'Certified in Python web development, validating expertise in application architecture, backend development, database integration, and deployment best practices.',
    icon: <PythonLogo className="w-8 h-8 drop-shadow-[0_2px_8px_rgba(55,118,171,0.35)]" />,
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
              <div className="h-9 mb-5 select-none flex items-center text-3xl">{cert.icon}</div>

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
                  <div className="h-9 flex items-center text-3xl">{cert.icon}</div>
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
