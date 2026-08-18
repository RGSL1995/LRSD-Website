'use client';

import { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronsRight, ChevronRight, ChevronDown, ArrowRight, TrendingUp, Building2, Layers, Award } from 'lucide-react';
import { FaFacebook, FaXTwitter, FaLinkedin, FaInstagram } from 'react-icons/fa6';

/* ─────────────────────────────────────────────
   3D WIREFRAME SVG GRAPHICS
───────────────────────────────────────────── */
const TorusWireframe = ({ className = "w-16 h-16", color = "#D99873" }: { className?: string; color?: string }) => (
  <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    <ellipse cx="50" cy="50" rx="38" ry="24" stroke={color} strokeWidth="1.5" strokeDasharray="3 2" opacity="0.8" />
    <ellipse cx="50" cy="50" rx="28" ry="16" stroke={color} strokeWidth="1.5" opacity="0.6" />
    <ellipse cx="50" cy="50" rx="16" ry="8" stroke={color} strokeWidth="1.5" opacity="0.9" />
    <circle cx="50" cy="50" r="4" fill={color} opacity="0.7" />
    <path d="M12 50 C12 36 28 26 50 26 C72 26 88 36 88 50" stroke={color} strokeWidth="1" opacity="0.5" />
    <path d="M12 50 C12 64 28 74 50 74 C72 74 88 64 88 50" stroke={color} strokeWidth="1" opacity="0.5" />
  </svg>
);

const SphereWireframe = ({ className = "w-16 h-16", color = "#D99873" }: { className?: string; color?: string }) => (
  <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    <circle cx="50" cy="50" r="38" stroke={color} strokeWidth="1.5" opacity="0.8" />
    <ellipse cx="50" cy="50" rx="38" ry="18" stroke={color} strokeWidth="1.2" opacity="0.7" />
    <ellipse cx="50" cy="50" rx="18" ry="38" stroke={color} strokeWidth="1.2" opacity="0.7" />
  </svg>
);

const GyroWireframe = ({ className = "w-16 h-16", color = "#D99873" }: { className?: string; color?: string }) => (
  <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    <circle cx="50" cy="50" r="38" stroke={color} strokeWidth="1.2" opacity="0.4" />
    <ellipse cx="50" cy="50" rx="36" ry="24" transform="rotate(25 50 50)" stroke={color} strokeWidth="1.4" opacity="0.7" />
    <ellipse cx="50" cy="50" rx="36" ry="24" transform="rotate(-25 50 50)" stroke={color} strokeWidth="1.4" opacity="0.7" />
    <circle cx="50" cy="50" r="16" stroke={color} strokeWidth="1.5" opacity="0.9" />
  </svg>
);

/* ─────────────────────────────────────────────
   PHOTOREALISTIC SILK SATIN WAVES
   Matching the exact color, gradient, smooth curve,
   and fluid breathing movement of the Figma screenshot.
───────────────────────────────────────────── */
const SilkWaves = () => {
  return (
    <div className="absolute inset-0 w-full h-full pointer-events-none overflow-hidden select-none z-0">
      <svg
        viewBox="0 0 1800 1000"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="absolute top-0 right-0 w-full h-full min-w-[1400px] object-cover"
        preserveAspectRatio="xMaxYMid slice"
      >
        <defs>
          {/* Main Top Ribbon Gradients */}
          <linearGradient id="silkGlowMain" x1="100%" y1="10%" x2="0%" y2="85%">
            <stop offset="0%" stopColor="#8A3816" stopOpacity="0.85" />
            <stop offset="25%" stopColor="#C45A2C" stopOpacity="0.75" />
            <stop offset="50%" stopColor="#E28659" stopOpacity="0.5" />
            <stop offset="75%" stopColor="#F5B898" stopOpacity="0.25" />
            <stop offset="100%" stopColor="#FDF4ED" stopOpacity="0" />
          </linearGradient>

          <linearGradient id="silkCoreHighlight" x1="100%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#DE6C37" stopOpacity="0.95" />
            <stop offset="40%" stopColor="#F08E5C" stopOpacity="0.85" />
            <stop offset="75%" stopColor="#F8C4A7" stopOpacity="0.4" />
            <stop offset="100%" stopColor="#FFF2EB" stopOpacity="0.05" />
          </linearGradient>

          {/* Lower Ribbon Gradients */}
          <linearGradient id="silkLowerGlow" x1="100%" y1="5%" x2="10%" y2="95%">
            <stop offset="0%" stopColor="#A84C24" stopOpacity="0.8" />
            <stop offset="35%" stopColor="#D97241" stopOpacity="0.65" />
            <stop offset="70%" stopColor="#EFA47B" stopOpacity="0.35" />
            <stop offset="100%" stopColor="#FCEDE4" stopOpacity="0" />
          </linearGradient>

          <linearGradient id="silkAmbientFeather" x1="90%" y1="10%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#E58252" stopOpacity="0.3" />
            <stop offset="45%" stopColor="#F2B495" stopOpacity="0.2" />
            <stop offset="85%" stopColor="#FDF0E9" stopOpacity="0.05" />
            <stop offset="100%" stopColor="#FFFFFF" stopOpacity="0" />
          </linearGradient>

          {/* Precision Gaussian Glow Filters */}
          <filter id="silkIntenseGlow" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="4" result="blur1" />
            <feGaussianBlur stdDeviation="12" result="blur2" />
            <feMerge>
              <feMergeNode in="blur2" />
              <feMergeNode in="blur1" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>

          <filter id="silkFeatherSoft" x="-30%" y="-30%" width="160%" height="160%">
            <feGaussianBlur stdDeviation="22" />
          </filter>

          <filter id="silkFeatherMedium" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="10" />
          </filter>

          <filter id="silkFeatherMicro" x="-10%" y="-10%" width="120%" height="120%">
            <feGaussianBlur stdDeviation="2.5" />
          </filter>
        </defs>

        {/* ── Layer 1: Ambient Broad Silk Diffusion (Softest Glow) ── */}
        <motion.path
          d="M 500,280 C 850,260 1200,80 1800,20 L 1800,220 C 1300,260 900,420 500,420 Z"
          fill="url(#silkAmbientFeather)"
          filter="url(#silkFeatherSoft)"
          animate={{
            d: [
              "M 500,280 C 850,260 1200,80 1800,20 L 1800,220 C 1300,260 900,420 500,420 Z",
              "M 500,300 C 850,290 1200,100 1800,40 L 1800,240 C 1300,280 900,440 500,440 Z",
              "M 500,280 C 850,260 1200,80 1800,20 L 1800,220 C 1300,260 900,420 500,420 Z",
            ],
          }}
          transition={{ duration: 11, repeat: Infinity, ease: "easeInOut" }}
        />

        {/* ── Layer 2: Main Upper Silk Ribbon Body ── */}
        <motion.path
          d="M 650,330 C 950,310 1300,130 1800,50 L 1800,110 C 1350,190 980,360 650,370 Z"
          fill="url(#silkGlowMain)"
          filter="url(#silkFeatherMedium)"
          animate={{
            d: [
              "M 650,330 C 950,310 1300,130 1800,50 L 1800,110 C 1350,190 980,360 650,370 Z",
              "M 650,350 C 950,330 1300,150 1800,70 L 1800,130 C 1350,210 980,380 650,390 Z",
              "M 650,330 C 950,310 1300,130 1800,50 L 1800,110 C 1350,190 980,360 650,370 Z",
            ],
          }}
          transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
        />

        {/* ── Layer 3: Main Upper Silk Sharp Luminous Core Spine ── */}
        <motion.path
          d="M 680,340 C 980,320 1320,140 1800,65 L 1800,85 C 1340,160 990,335 680,355 Z"
          fill="url(#silkCoreHighlight)"
          filter="url(#silkIntenseGlow)"
          animate={{
            d: [
              "M 680,340 C 980,320 1320,140 1800,65 L 1800,85 C 1340,160 990,335 680,355 Z",
              "M 680,360 C 980,340 1320,160 1800,85 L 1800,105 C 1340,180 990,355 680,375 Z",
              "M 680,340 C 980,320 1320,140 1800,65 L 1800,85 C 1340,160 990,335 680,355 Z",
            ],
          }}
          transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
        />

        {/* ── Layer 4: Lower Flowing Silk Wave (Medium Diffusion) ── */}
        <motion.path
          d="M 800,580 C 1150,560 1480,480 1800,420 L 1800,490 C 1450,550 1150,625 800,640 Z"
          fill="url(#silkLowerGlow)"
          filter="url(#silkFeatherMedium)"
          animate={{
            d: [
              "M 800,580 C 1150,560 1480,480 1800,420 L 1800,490 C 1450,550 1150,625 800,640 Z",
              "M 800,560 C 1150,540 1480,460 1800,400 L 1800,470 C 1450,530 1150,605 800,620 Z",
              "M 800,580 C 1150,560 1480,480 1800,420 L 1800,490 C 1450,550 1150,625 800,640 Z",
            ],
          }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 0.8 }}
        />

        {/* ── Layer 5: Lower Silk Luminous Core Spine ── */}
        <motion.path
          d="M 830,590 C 1170,570 1500,490 1800,435 L 1800,455 C 1490,510 1170,585 830,605 Z"
          fill="url(#silkCoreHighlight)"
          filter="url(#silkIntenseGlow)"
          animate={{
            d: [
              "M 830,590 C 1170,570 1500,490 1800,435 L 1800,455 C 1490,510 1170,585 830,605 Z",
              "M 830,570 C 1170,550 1500,470 1800,415 L 1800,435 C 1490,490 1170,565 830,585 Z",
              "M 830,590 C 1170,570 1500,490 1800,435 L 1800,455 C 1490,510 1170,585 830,605 Z",
            ],
          }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 0.8 }}
        />

        {/* ── Layer 6: Extra Soft Background Wave Feather ── */}
        <motion.path
          d="M 900,530 C 1250,510 1550,440 1800,380 L 1800,560 C 1500,620 1200,680 900,700 Z"
          fill="url(#silkAmbientFeather)"
          filter="url(#silkFeatherSoft)"
          animate={{
            d: [
              "M 900,530 C 1250,510 1550,440 1800,380 L 1800,560 C 1500,620 1200,680 900,700 Z",
              "M 900,550 C 1250,530 1550,460 1800,400 L 1800,580 C 1500,640 1200,700 900,720 Z",
              "M 900,530 C 1250,510 1550,440 1800,380 L 1800,560 C 1500,620 1200,680 900,700 Z",
            ],
          }}
          transition={{ duration: 14, repeat: Infinity, ease: "easeInOut", delay: 1.2 }}
        />
      </svg>
    </div>
  );
};

/* ─────────────────────────────────────────────
   EXACT FIGMA ACTION BUTTON COMPONENT
   Dark rounded box with vibrant orange double-chevron badge
───────────────────────────────────────────── */
const ActionButton = ({
  label,
  href = '#',
  className = '',
}: {
  label: string;
  href?: string;
  className?: string;
}) => {
  return (
    <motion.a
      href={href}
      whileHover={{ scale: 1.03, y: -1 }}
      whileTap={{ scale: 0.97 }}
      className={`inline-flex items-center gap-3 bg-[#1C1E22] hover:bg-[#15171A] text-white pl-2.5 pr-6 py-2.5 rounded-xl shadow-lg shadow-black/15 transition-all group ${className}`}
    >
      {/* Orange Squircle with White Double Chevron */}
      <div className="w-8 h-8 rounded-lg bg-[#E8621A] group-hover:bg-[#F27125] flex items-center justify-center text-white shadow-sm transition-colors shrink-0">
        <ChevronsRight className="w-4 h-4 text-white stroke-[2.5]" />
      </div>
      <span className="text-xs md:text-sm font-semibold tracking-normal text-white">
        {label}
      </span>
    </motion.a>
  );
};


/* ─────────────────────────────────────────────
   PRODUCTS DATA FOR SECTION 3
───────────────────────────────────────────── */
const PRODUCTS = [
  {
    num: '01',
    title: 'Loan Against Securities',
    tag: 'FLAGSHIP · LAS',
    badge: '01 / LAS LIQUIDITY',
    desc: 'Liquidity backed by listed equity and debt instruments, with LTVs shaped by thirty years of micro-cap equity knowledge.',
    features: ['Loan-to-Value: Up to 65%', 'Turnaround: 48 Hours', 'Structure: Bullet / EMI'],
  },
  {
    num: '02',
    title: 'Receivables Factoring',
    tag: 'PRODUCT · RF',
    badge: '02 / CASH FLOW FINANCING',
    desc: 'Convert outstanding enterprise receivables into immediate working capital. Fast, transparent, and structured for growing companies.',
    features: ['Recourse & Non-Recourse', 'Disbursement: Day 2', 'Invoice Coverage: Up to 90%'],
  },
  {
    num: '03',
    title: 'Real Estate Structured Debt',
    tag: 'PRODUCT · RESD',
    badge: '03 / SECURED REAL ESTATE',
    desc: 'Structured credit against commercial and high-grade residential assets, underwritten with rigorous collateral and cash flow appraisal.',
    features: ['Security: 1.5x–2.0x Cover', 'Tenure: 12–36 Months', 'Flexible Moratorium'],
  },
  {
    num: '04',
    title: 'Structured Credit',
    tag: 'BESPOKE · SC',
    badge: '04 / BESPOKE STRUCTURE',
    desc: 'Custom credit solutions designed around your capital needs — no off-the-shelf products, only bespoke structures with deep risk calibration.',
    features: ['Turnaround: 7–14 Days', 'Security: 100% Asset-Backed', 'Structure: Tailored Amortization'],
  },
];

/* ─────────────────────────────────────────────
   MAIN PAGE COMPONENT
───────────────────────────────────────────── */
export default function Home() {
  const [activeProduct, setActiveProduct] = useState(3); // Structured Credit default active (04)

  return (
    <div className="min-h-screen bg-white text-[#0F1932] overflow-x-hidden selection:bg-[#E8621A] selection:text-white font-sans">
      
      {/* ══════════════════════════════════════════════════════════
          NAVIGATION HEADER
      ══════════════════════════════════════════════════════════ */}
      <header className="fixed top-0 left-0 w-full z-50 bg-white/70 backdrop-blur-md transition-all">
        <div className="max-w-7xl mx-auto px-6 md:px-8 py-4 flex justify-between items-center">
          
          {/* Logo */}
          <a href="#" className="flex items-center gap-2">
            <img
              src="/LRSD-logo-removebg-preview.png"
              alt="LRSD Capital"
              className="h-10 md:h-12 w-auto object-contain"
            />
          </a>

          {/* Navigation Links with Dropdown Indicators */}
          <nav className="hidden lg:flex items-center gap-7">
            {[
              { label: 'About', hasDropdown: true },
              { label: 'Products', hasDropdown: true },
              { label: 'Grievance', hasDropdown: true },
              { label: 'Reports', hasDropdown: true },
              { label: 'Careers', hasDropdown: true },
              { label: 'Policies', hasDropdown: true },
              { label: 'Contact', hasDropdown: false },
            ].map((item) => (
              <a
                key={item.label}
                href={`#${item.label.toLowerCase()}`}
                className="inline-flex items-center gap-1 text-xs font-semibold text-gray-700 hover:text-[#0F1932] tracking-wide transition-colors group"
              >
                <span>{item.label}</span>
                {item.hasDropdown && (
                  <ChevronDown className="w-3 h-3 text-gray-400 group-hover:text-gray-600 transition-colors" />
                )}
              </a>
            ))}
          </nav>

          {/* Top Right Button */}
          <ActionButton label="Start a conversation" href="#contact" />
        </div>
      </header>

      {/* ══════════════════════════════════════════════════════════
          SECTION 1: HERO
      ══════════════════════════════════════════════════════════ */}
      <section className="relative pt-32 pb-20 md:pt-44 md:pb-28 px-6 md:px-8 min-h-[92vh] flex items-center bg-[#FAF9F6] overflow-hidden">
        {/* Animated Photorealistic Silk Wave Background */}
        <SilkWaves />

        <div className="max-w-7xl mx-auto w-full relative z-10">
          <div className="grid lg:grid-cols-[1.3fr_0.7fr] gap-12 items-center">
            
            {/* Left Headline & Content */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: 'easeOut' }}
            >
              {/* Giant Headline */}
              <h1 className="text-6xl sm:text-7xl md:text-8xl lg:text-[102px] font-extrabold tracking-[-0.04em] leading-[0.92] text-[#0F1932] mb-8">
                <span className="inline-block font-extrabold text-[#0F1932]">Capital,</span>{' '}
                <span className="font-light italic text-[#9CA3AF] tracking-tight">
                  with
                </span>
                <span className="block font-light text-[#9EA5B3] tracking-tight mt-1">
                  conviction.
                </span>
              </h1>

              {/* Subtitle */}
              <p className="text-sm md:text-base text-gray-600 max-w-lg leading-relaxed mb-10 font-normal">
                A lending-focused platform purpose-built for SMEs, MSMEs and mid-sized corporates — carrying forward three decades of disciplined capital from the Rajasthan Global Securities Group.
              </p>

              {/* CTA Button */}
              <ActionButton label="Explore solutions" href="#solutions" />
            </motion.div>

            {/* Right: Lending Stance Note */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="flex justify-start lg:justify-end"
            >
              <div className="border-l border-gray-200/80 pl-6 py-2 max-w-xs">
                <p className="text-[10px] font-bold tracking-[0.2em] text-gray-400 uppercase mb-3">
                  OUR LENDING STANCE
                </p>
                <p className="text-xs sm:text-sm font-semibold text-gray-800 leading-relaxed">
                  Wholesale. Fully secured. Zero retail or unsecured exposure.
                </p>
              </div>
            </motion.div>

          </div>
        </div>
      </section>


      {/* ══════════════════════════════════════════════════════════
          SECTION 2: WHY WE EXIST / VISION (Rich Chocolate-Brown)
      ══════════════════════════════════════════════════════════ */}
      <section 
        className="relative py-24 md:py-32 px-6 md:px-8 overflow-hidden text-white"
        style={{
          background: 'radial-gradient(120% 120% at 85% 15%, #4A2211 0%, #2E1308 55%, #180903 100%)',
        }}
      >
        <div className="max-w-7xl mx-auto relative z-10">
          
          {/* Badge */}
          <div className="inline-flex items-center gap-2.5 px-3 py-1 rounded-full bg-white/10 border border-white/15 backdrop-blur-md mb-10">
            <span className="w-2 h-2 rounded-full bg-[#E8621A]" />
            <span className="text-[11px] font-bold tracking-widest uppercase text-white/90">
              Who We Are
            </span>
          </div>

          {/* Section Header */}
          <div className="grid lg:grid-cols-[1.6fr_1fr] gap-10 items-start mb-16">
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-[-0.03em] leading-[1.08] text-white">
              To be the most<br />
              respected name in<br />
              Indian lending.
            </h2>
            <div className="lg:pt-2">
              <div className="w-8 h-0.5 bg-[#D98A5B] mb-4" />
              <p className="text-base sm:text-lg font-medium text-white/80 leading-relaxed">
                Experience. Integrity.<br />
                Institutional strength.
              </p>
            </div>
          </div>

          {/* 2 White Cards */}
          <div className="grid md:grid-cols-2 gap-6 mb-12">
            
            {/* Card 1 */}
            <motion.div
              whileHover={{ y: -4 }}
              transition={{ duration: 0.3 }}
              className="bg-white rounded-2xl p-8 sm:p-10 text-[#0F1932] shadow-xl flex flex-col justify-between min-h-[220px] relative overflow-hidden"
            >
              <div>
                <p className="text-xs font-extrabold tracking-widest text-[#E8621A] uppercase mb-4">
                  01 / FOCUS
                </p>
                <h3 className="text-xl sm:text-2xl font-bold text-[#0F1932] leading-snug max-w-sm">
                  A specialist credit institution for Indian enterprise.
                </h3>
              </div>
              <div className="flex justify-end mt-6">
                <TorusWireframe className="w-14 h-14" color="#D98A5B" />
              </div>
            </motion.div>

            {/* Card 2 */}
            <motion.div
              whileHover={{ y: -4 }}
              transition={{ duration: 0.3 }}
              className="bg-white rounded-2xl p-8 sm:p-10 text-[#0F1932] shadow-xl flex flex-col justify-between min-h-[220px] relative overflow-hidden"
            >
              <div>
                <p className="text-xs font-extrabold tracking-widest text-[#E8621A] uppercase mb-4">
                  02 / PHILOSOPHY
                </p>
                <h3 className="text-xl sm:text-2xl font-bold text-[#0F1932] leading-snug max-w-sm">
                  Enduring value through disciplined lending.
                </h3>
              </div>
              <div className="flex justify-end mt-6">
                <SphereWireframe className="w-14 h-14" color="#D98A5B" />
              </div>
            </motion.div>

          </div>

          {/* 4 Stat Blocks */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { val: '31.1%', label: "Share of India's GDP" },
              { val: '48.6%', label: "Share of India's exports" },
              { val: '38.9 Cr', label: 'People employed' },
              { val: '₹25 L Cr+', label: 'Formal credit gap' },
            ].map((stat, idx) => (
              <motion.div
                key={idx}
                whileHover={{ scale: 1.02 }}
                className="bg-black/25 backdrop-blur-md border border-white/10 rounded-2xl p-6 sm:p-7 text-center transition-colors hover:border-[#E8621A]/50"
              >
                <div className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mb-2">
                  {stat.val}
                </div>
                <p className="text-xs font-medium text-white/70 tracking-wide">
                  {stat.label}
                </p>
              </motion.div>
            ))}
          </div>

        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════
          SECTION 3: STRUCTURED CREDIT — BUILT TO SCALE
      ══════════════════════════════════════════════════════════ */}
      <section id="solutions" className="py-24 md:py-32 px-6 md:px-8 bg-[#FAF9F6]">
        <div className="max-w-7xl mx-auto">
          
          {/* Badge */}
          <div className="inline-flex items-center gap-2 mb-8">
            <span className="w-2 h-2 rounded-full bg-[#E8621A]" />
            <p className="text-xs font-bold tracking-widest text-gray-400 uppercase">
              02 / Solutions
            </p>
          </div>

          {/* Header */}
          <div className="grid lg:grid-cols-[1.5fr_1fr] gap-8 items-start mb-14">
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-[-0.03em] leading-[1.05] text-[#0F1932]">
              Structured Credit.<br />
              <span className="text-[#E8621A]">Built to Scale</span>
            </h2>
            <div className="lg:pt-2">
              <div className="w-8 h-0.5 bg-[#E8621A] mb-3" />
              <p className="text-sm sm:text-base text-gray-600 font-medium leading-relaxed">
                Four highly-focused products. Zero exposure to retail or unsecured lending.
              </p>
            </div>
          </div>

          {/* Interactive Products Grid */}
          <div className="grid lg:grid-cols-[0.85fr_1.15fr] gap-6 items-stretch">
            
            {/* Left: Product Selection List */}
            <div className="flex flex-col gap-3">
              {PRODUCTS.map((prod, idx) => (
                <motion.button
                  key={idx}
                  onClick={() => setActiveProduct(idx)}
                  whileHover={{ x: 4 }}
                  className={`w-full text-left p-6 rounded-2xl border transition-all duration-300 flex items-center justify-between ${
                    activeProduct === idx
                      ? 'bg-[#0F1932] border-[#0F1932] text-white shadow-lg'
                      : 'bg-white border-gray-200 text-[#0F1932] hover:border-gray-300'
                  }`}
                >
                  <div className="flex items-center gap-5">
                    <span className={`text-xs font-bold tracking-widest ${
                      activeProduct === idx ? 'text-[#E8621A]' : 'text-gray-400'
                    }`}>
                      {prod.num}
                    </span>
                    <span className="font-bold text-base md:text-lg">
                      {prod.title}
                    </span>
                  </div>
                  <ChevronRight className={`w-5 h-5 transition-transform ${
                    activeProduct === idx ? 'text-[#E8621A] translate-x-1' : 'text-gray-300'
                  }`} />
                </motion.button>
              ))}
            </div>

            {/* Right: Active Product Showcase Card */}
            <AnimatePresence mode="wait">
              <motion.div
                key={activeProduct}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
                className="bg-white rounded-2xl p-8 sm:p-12 border border-gray-200 shadow-sm relative overflow-hidden flex flex-col justify-between min-h-[420px]"
              >
                {/* Large Background Watermark Number */}
                <span className="absolute -bottom-8 -right-4 text-[140px] font-black text-gray-100 select-none pointer-events-none opacity-60 leading-none">
                  {PRODUCTS[activeProduct].num}
                </span>

                {/* Top Section */}
                <div className="relative z-10">
                  <div className="flex justify-between items-start mb-6">
                    <span className="text-xs font-extrabold tracking-widest text-[#E8621A] uppercase">
                      {PRODUCTS[activeProduct].badge}
                    </span>
                    <GyroWireframe className="w-12 h-12" color="#E8621A" />
                  </div>

                  <h3 className="text-3xl sm:text-4xl font-extrabold text-[#0F1932] mb-4 tracking-tight">
                    {PRODUCTS[activeProduct].title}
                  </h3>

                  <p className="text-sm sm:text-base text-gray-600 leading-relaxed max-w-lg mb-8">
                    {PRODUCTS[activeProduct].desc}
                  </p>
                </div>

                {/* Bottom Features & Action */}
                <div className="relative z-10 pt-6 border-t border-gray-100">
                  <div className="flex flex-wrap gap-2.5 mb-6">
                    {PRODUCTS[activeProduct].features.map((feat, i) => (
                      <span
                        key={i}
                        className="text-xs font-semibold px-3.5 py-1.5 bg-[#FAF9F6] border border-gray-200 rounded-full text-gray-700"
                      >
                        {feat}
                      </span>
                    ))}
                  </div>

                  <motion.a
                    href="#contact"
                    whileHover={{ x: 3 }}
                    className="inline-flex items-center gap-2 text-xs font-bold text-[#E8621A] tracking-wider uppercase"
                  >
                    <span>Learn more about structure</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </motion.a>
                </div>
              </motion.div>
            </AnimatePresence>

          </div>

        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════
          SECTION 4: FOUNDER'S NOTE & QUOTE
      ══════════════════════════════════════════════════════════ */}
      <section className="py-20 md:py-28 px-6 md:px-8 bg-[#FAF9F6]">
        <div className="max-w-7xl mx-auto">
          
          {/* Badge */}
          <div className="inline-flex items-center gap-2 mb-8">
            <span className="w-2 h-2 rounded-full bg-[#E8621A]" />
            <p className="text-xs font-bold tracking-widest text-gray-400 uppercase">
              03 / Leadership
            </p>
          </div>

          {/* Dark Quote Box Container */}
          <div className="bg-[#0F1932] rounded-3xl overflow-hidden shadow-2xl border border-white/10">
            <div className="grid lg:grid-cols-[0.85fr_1.15fr] items-stretch">
              
              {/* Left Photo */}
              <div className="relative min-h-[380px] lg:min-h-[460px] bg-gradient-to-r from-[#0F1932] to-[#1A2347]">
                <Image
                  src="/lalitsir.jpeg"
                  alt="Mr. Lalit Dua, Founder & Managing Director"
                  fill
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  className="object-cover object-top filter brightness-95 contrast-105"
                />
                {/* Smooth blend overlay */}
                <div className="absolute inset-0 bg-gradient-to-t lg:bg-gradient-to-r from-transparent via-[#0F1932]/30 to-[#0F1932]" />
              </div>

              {/* Right Quote Content */}
              <div className="p-8 sm:p-12 lg:p-16 flex flex-col justify-between text-white relative z-10">
                <div>
                  <h3 className="text-2xl sm:text-3xl lg:text-[38px] font-extrabold text-white leading-tight tracking-tight mb-8">
                    &ldquo;Return of capital<br />
                    matters more to us<br />
                    than return on capital.&rdquo;
                  </h3>

                  <div className="border-l-2 border-[#E8621A] pl-5 mb-8">
                    <p className="text-sm sm:text-base text-gray-300 leading-relaxed max-w-lg">
                      Every facility we underwrite begins with a single question: how does our capital preserve the enterprise while generating compounding value for stakeholders?
                    </p>
                  </div>
                </div>

                <div>
                  <p className="text-base font-bold text-white tracking-wide">
                    Mr. Lalit Dua
                  </p>
                  <p className="text-xs font-semibold text-[#E8621A] tracking-wider uppercase mt-0.5">
                    Managing Director, LRSD Capital
                  </p>
                </div>
              </div>

            </div>
          </div>

        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════
          SECTION 5: MARKET PERSPECTIVE / COMPARISON
      ══════════════════════════════════════════════════════════ */}
      <section className="py-24 md:py-32 px-6 md:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          
          {/* Badge */}
          <div className="inline-flex items-center gap-2 mb-8">
            <span className="w-2 h-2 rounded-full bg-[#E8621A]" />
            <p className="text-xs font-bold tracking-widest text-gray-400 uppercase">
              04 / The Difference
            </p>
          </div>

          {/* Headline */}
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-[-0.03em] leading-[1.08] text-[#0F1932] mb-16 max-w-3xl">
            Where a bank sees a balance sheet,{' '}
            <span className="text-[#E8621A]">we see the market behind it.</span>
          </h2>

          {/* Comparison Two Columns */}
          <div className="grid md:grid-cols-2 gap-8 items-start">
            
            {/* Left Column: Traditional Lenders */}
            <div>
              <p className="text-xs font-bold tracking-widest text-gray-400 uppercase mb-5">
                Traditional Lenders
              </p>
              <div className="space-y-3">
                {[
                  'Rigid collateral requirements and mechanical valuation',
                  '45–60 days protracted decision and disbursement cycle',
                  'Standardized balance sheet formulas ignoring sector nuances',
                  'Passive, transaction-focused covenant monitoring',
                ].map((text, i) => (
                  <div
                    key={i}
                    className="bg-[#FAF9F6] border border-gray-200 rounded-xl p-5 flex items-center gap-4"
                  >
                    <div className="w-6 h-6 rounded-full border border-gray-300 flex items-center justify-center text-gray-400 font-bold text-xs shrink-0">
                      {i + 1}
                    </div>
                    <p className="text-xs sm:text-sm font-medium text-gray-600">
                      {text}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Column: LRSD Capital */}
            <div>
              <p className="text-xs font-bold tracking-widest text-[#E8621A] uppercase mb-5">
                LRSD Capital
              </p>
              <div className="space-y-3">
                {[
                  'Customized asset backing & cash flow modeling',
                  '7–14 day rapid underwriting and disbursement turnaround',
                  'Proprietary industry context & 30-year equity intelligence',
                  'Active value-add partnership & flexible structuring',
                ].map((text, i) => (
                  <div
                    key={i}
                    className="bg-[#0F1932] rounded-xl p-5 flex items-center gap-4 text-white shadow-md hover:bg-[#16203D] transition-colors"
                  >
                    <div className="w-6 h-6 rounded-full bg-[#E8621A] flex items-center justify-center text-white font-bold text-xs shrink-0">
                      {i + 1}
                    </div>
                    <p className="text-xs sm:text-sm font-medium text-gray-100">
                      {text}
                    </p>
                  </div>
                ))}
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════
          SECTION 6: FOUR COMMITMENTS (L R S D)
      ══════════════════════════════════════════════════════════ */}
      <section className="py-24 md:py-32 px-6 md:px-8 bg-[#FAF9F6]">
        <div className="max-w-7xl mx-auto">
          
          {/* Badge */}
          <div className="inline-flex items-center gap-2 mb-8">
            <span className="w-2 h-2 rounded-full bg-[#E8621A]" />
            <p className="text-xs font-bold tracking-widest text-gray-400 uppercase">
              05 / DNA
            </p>
          </div>

          {/* Heading */}
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-[-0.03em] leading-[1.08] text-[#0F1932] mb-14">
            Four letters.<br />
            <span className="text-[#E8621A]">Four commitments.</span>
          </h2>

          {/* 4 Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-8">
            {[
              { letter: 'L', num: '01', title: 'Liquidity with Integrity', desc: 'We back businesses with long-term perspective, not quick transactions.', dark: false },
              { letter: 'R', num: '02', title: 'Rigor in Underwriting', desc: 'Deep domain analysis before credit deployment. We go deeper before we go faster.', dark: false },
              { letter: 'S', num: '03', title: 'Stewardship of Capital', desc: 'Custodians of institutional trust with three decades of group legacy.', dark: false },
              { letter: 'D', num: '04', title: 'Disciplined Execution', desc: 'Conservative on capital risk, flexible on structure for proven borrowers.', dark: true },
            ].map((card, i) => (
              <motion.div
                key={i}
                whileHover={{ y: -6 }}
                transition={{ duration: 0.3 }}
                className={`rounded-2xl p-8 flex flex-col justify-between min-h-[280px] border transition-all ${
                  card.dark
                    ? 'bg-[#0F1932] border-[#0F1932] text-white shadow-xl'
                    : 'bg-white border-gray-200 text-[#0F1932] hover:border-[#E8621A]/40 shadow-sm'
                }`}
              >
                <div>
                  <div className="flex justify-between items-center mb-6">
                    <span className={`text-[11px] font-extrabold tracking-widest px-2.5 py-1 rounded-full ${
                      card.dark ? 'bg-white/10 text-white/80' : 'bg-[#FAF9F6] text-gray-400'
                    }`}>
                      {card.num}
                    </span>
                  </div>

                  <div className={`text-6xl font-black mb-6 leading-none ${
                    card.dark ? 'text-white' : 'text-[#E8621A]'
                  }`}>
                    {card.letter}
                  </div>

                  <h3 className={`font-bold text-base md:text-lg mb-2 ${
                    card.dark ? 'text-white' : 'text-[#0F1932]'
                  }`}>
                    {card.title}
                  </h3>
                </div>

                <p className={`text-xs leading-relaxed mt-4 ${
                  card.dark ? 'text-gray-300' : 'text-gray-500'
                }`}>
                  {card.desc}
                </p>
              </motion.div>
            ))}
          </div>

          {/* Terracotta/Rust Quote Banner */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="rounded-2xl p-8 sm:p-12 text-center text-white shadow-lg relative overflow-hidden"
            style={{
              background: 'linear-gradient(135deg, #7C3018 0%, #632410 100%)',
            }}
          >
            <p className="text-xl sm:text-2xl md:text-3xl font-bold leading-snug tracking-tight max-w-3xl mx-auto">
              &ldquo;Ambitious and growth-oriented, but our ambition is guided by discipline.&rdquo;
            </p>
          </motion.div>

        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════
          SECTION 7: INSTITUTIONAL SCALE ROADMAP (Deep Navy)
      ══════════════════════════════════════════════════════════ */}
      <section 
        className="py-24 md:py-32 px-6 md:px-8 text-white relative overflow-hidden"
        style={{
          background: 'radial-gradient(120% 120% at 50% 10%, #16203D 0%, #0F1932 60%, #080E1E 100%)',
        }}
      >
        <div className="max-w-7xl mx-auto relative z-10">
          
          {/* Badge */}
          <div className="inline-flex items-center gap-2.5 px-3 py-1 rounded-full bg-white/10 border border-white/15 backdrop-blur-md mb-8">
            <span className="w-2 h-2 rounded-full bg-[#E8621A]" />
            <span className="text-[11px] font-bold tracking-widest uppercase text-white/90">
              06 / Roadmap
            </span>
          </div>

          {/* Header */}
          <div className="grid lg:grid-cols-[1.5fr_1fr] gap-8 items-start mb-16">
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-[-0.03em] leading-[1.08] text-white">
              A measured path<br />
              to <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#E8621A] to-[#F2BA96]">institutional scale.</span>
            </h2>
            <div className="lg:pt-2">
              <div className="w-8 h-0.5 bg-[#E8621A] mb-3" />
              <p className="text-sm sm:text-base text-gray-300 font-medium leading-relaxed">
                A disciplined trajectory toward multi-asset credit management and institutional capital stewardship.
              </p>
            </div>
          </div>

          {/* 4 Connected Milestone Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              {
                step: 'PHASE 01',
                title: 'Core Credit + Brand',
                desc: 'Founding platform & core secured wholesale credit lines.',
                icon: <Building2 className="w-5 h-5 text-[#E8621A]" />,
              },
              {
                step: 'PHASE 02',
                title: 'Two+ More Story',
                desc: 'Expanding into structured factoring and bespoke facilities.',
                icon: <TrendingUp className="w-5 h-5 text-[#E8621A]" />,
              },
              {
                step: 'PHASE 03',
                title: 'Co-Lending / Public',
                desc: 'Institutional bank co-lending framework & rating scale.',
                icon: <Layers className="w-5 h-5 text-[#E8621A]" />,
              },
              {
                step: 'PHASE 04',
                title: 'AIF License',
                desc: 'Cat II Alternative Investment Fund for domestic & global capital.',
                icon: <Award className="w-5 h-5 text-[#E8621A]" />,
              },
            ].map((item, idx) => (
              <motion.div
                key={idx}
                whileHover={{ y: -4 }}
                className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-6 sm:p-7 flex flex-col justify-between min-h-[220px] hover:border-[#E8621A]/50 transition-colors"
              >
                <div>
                  <div className="flex justify-between items-center mb-5">
                    <span className="text-[10px] font-extrabold tracking-widest text-[#E8621A] uppercase">
                      {item.step}
                    </span>
                    {item.icon}
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2">
                    {item.title}
                  </h3>
                </div>
                <p className="text-xs text-gray-400 leading-relaxed">
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </div>

        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════
          SECTION 8: PERSPECTIVE BEFORE PRODUCT (Insights)
      ══════════════════════════════════════════════════════════ */}
      <section className="py-24 md:py-32 px-6 md:px-8 bg-[#FAF9F6]">
        <div className="max-w-7xl mx-auto">
          
          {/* Badge */}
          <div className="inline-flex items-center gap-2 mb-8">
            <span className="w-2 h-2 rounded-full bg-[#E8621A]" />
            <p className="text-xs font-bold tracking-widest text-gray-400 uppercase">
              07 / Insights
            </p>
          </div>

          {/* Header */}
          <div className="grid lg:grid-cols-[1.5fr_1fr] gap-8 items-start mb-14">
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-[-0.03em] leading-[1.08] text-[#0F1932]">
              Perspective before<br />
              product.
            </h2>
            <div className="lg:pt-2">
              <div className="w-8 h-0.5 bg-[#E8621A] mb-3" />
              <p className="text-sm sm:text-base text-gray-600 font-medium leading-relaxed">
                Institutional market intelligence and thought leadership from the desk of LRSD Capital.
              </p>
            </div>
          </div>

          {/* 3 Insight Cards */}
          <div className="grid md:grid-cols-3 gap-6">
            
            {/* Card 1 — Dark Navy Featured */}
            <motion.div
              whileHover={{ y: -6 }}
              transition={{ duration: 0.3 }}
              className="rounded-2xl p-8 bg-[#0F1932] text-white shadow-xl flex flex-col justify-between min-h-[320px] border border-[#0F1932]"
            >
              <div>
                <div className="flex justify-between items-center mb-6">
                  <span className="text-[10px] font-extrabold tracking-widest text-[#E8621A] uppercase">
                    RESEARCH · 4 MIN READ
                  </span>
                  <TorusWireframe className="w-8 h-8" color="#E8621A" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3 leading-snug">
                  Understanding the Promoter Before the Balance Sheet.
                </h3>
                <p className="text-xs text-gray-300 leading-relaxed">
                  Why relational integrity and character assessment remain the true first line of defense in credit underwriting.
                </p>
              </div>

              <div className="pt-6 mt-6 border-t border-white/10 flex items-center justify-between">
                <span className="text-xs font-bold text-[#E8621A]">Read Perspective</span>
                <ArrowRight className="w-4 h-4 text-[#E8621A]" />
              </div>
            </motion.div>

            {/* Card 2 — Crisp White */}
            <motion.div
              whileHover={{ y: -6 }}
              transition={{ duration: 0.3 }}
              className="rounded-2xl p-8 bg-white text-[#0F1932] shadow-sm flex flex-col justify-between min-h-[320px] border border-gray-200 hover:border-gray-300"
            >
              <div>
                <div className="flex justify-between items-center mb-6">
                  <span className="text-[10px] font-extrabold tracking-widest text-[#E8621A] uppercase">
                    ANALYSIS · 6 MIN READ
                  </span>
                  <SphereWireframe className="w-8 h-8" color="#D98A5B" />
                </div>
                <h3 className="text-xl font-bold text-[#0F1932] mb-3 leading-snug">
                  Why Structuring Matters More Than Rate in SME Debt.
                </h3>
                <p className="text-xs text-gray-500 leading-relaxed">
                  How cash-flow matched amortizations prevent enterprise distress and maximize enterprise equity retention.
                </p>
              </div>

              <div className="pt-6 mt-6 border-t border-gray-100 flex items-center justify-between">
                <span className="text-xs font-bold text-[#0F1932]">Read Perspective</span>
                <ArrowRight className="w-4 h-4 text-[#0F1932]" />
              </div>
            </motion.div>

            {/* Card 3 — Crisp White */}
            <motion.div
              whileHover={{ y: -6 }}
              transition={{ duration: 0.3 }}
              className="rounded-2xl p-8 bg-white text-[#0F1932] shadow-sm flex flex-col justify-between min-h-[320px] border border-gray-200 hover:border-gray-300"
            >
              <div>
                <div className="flex justify-between items-center mb-6">
                  <span className="text-[10px] font-extrabold tracking-widest text-[#E8621A] uppercase">
                    OUTLOOK · 5 MIN READ
                  </span>
                  <GyroWireframe className="w-8 h-8" color="#D98A5B" />
                </div>
                <h3 className="text-xl font-bold text-[#0F1932] mb-3 leading-snug">
                  The Liquidity Conundrum in Mid-Market Enterprise.
                </h3>
                <p className="text-xs text-gray-500 leading-relaxed">
                  Navigating working capital friction points during rapid operational scaling in Indian manufacturing.
                </p>
              </div>

              <div className="pt-6 mt-6 border-t border-gray-100 flex items-center justify-between">
                <span className="text-xs font-bold text-[#0F1932]">Read Perspective</span>
                <ArrowRight className="w-4 h-4 text-[#0F1932]" />
              </div>
            </motion.div>

          </div>

        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════
          SECTION 9: CTA & FOOTER
      ══════════════════════════════════════════════════════════ */}
      <section id="contact" className="py-20 md:py-24 px-6 md:px-8 bg-white">
        <div className="max-w-7xl mx-auto bg-[#0F1932] rounded-3xl p-12 md:p-20 text-center text-white shadow-2xl relative overflow-hidden">
          <div className="max-w-2xl mx-auto relative z-10">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight mb-6">
              Let&apos;s structure what comes next.
            </h2>
            <p className="text-sm md:text-base text-gray-300 mb-10">
              Speak directly with our investment and underwriting committee for bespoke structured credit solutions.
            </p>
            <ActionButton
              label="Get in touch with our team"
              href="mailto:admin@lrsdindia.com"
              className="bg-[#E8621A] hover:bg-[#F27125]"
            />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#0F1932] text-white border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6 md:px-8 py-16">
          
          <div className="grid grid-cols-1 md:grid-cols-5 gap-10 mb-14">
            
            {/* Column 1: Brand */}
            <div className="md:col-span-1">
              <img
                src="/LRSD-logo-removebg-preview.png"
                alt="LRSD Capital"
                className="h-10 w-auto brightness-0 invert mb-5"
              />
              <p className="text-xs text-gray-400 leading-relaxed mb-6">
                Specialist credit institution for Indian enterprises. Three decades of capital conviction.
              </p>
              <div className="flex gap-2.5">
                {[
                  { icon: <FaLinkedin className="w-3.5 h-3.5" />, label: 'LinkedIn' },
                  { icon: <FaXTwitter className="w-3.5 h-3.5" />, label: 'Twitter' },
                  { icon: <FaFacebook className="w-3.5 h-3.5" />, label: 'Facebook' },
                  { icon: <FaInstagram className="w-3.5 h-3.5" />, label: 'Instagram' },
                ].map(({ icon, label }) => (
                  <a
                    key={label}
                    href="#"
                    aria-label={label}
                    className="w-8 h-8 rounded-full bg-white/10 hover:bg-[#E8621A] flex items-center justify-center text-white transition-colors"
                  >
                    {icon}
                  </a>
                ))}
              </div>
            </div>

            {/* Column 2: Governance */}
            <div>
              <h4 className="text-xs font-bold uppercase tracking-wider text-[#E8621A] mb-4">
                Governance
              </h4>
              <ul className="space-y-2.5 text-xs text-gray-400">
                {['Audit Related Policies', 'CSR Policy', 'IT & Cyber Security', 'Public Disclosures', 'Scale Based Regulation'].map((item) => (
                  <li key={item}>
                    <a href="#" className="hover:text-white transition-colors">{item}</a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 3: Compliance */}
            <div>
              <h4 className="text-xs font-bold uppercase tracking-wider text-[#E8621A] mb-4">
                Compliance
              </h4>
              <ul className="space-y-2.5 text-xs text-gray-400">
                {['KYC & AML Policy', 'Fair Practices Code', 'Customer Support', 'Grievance Redressal', 'Mechanism Flowchart'].map((item) => (
                  <li key={item}>
                    <a href="#" className="hover:text-white transition-colors">{item}</a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 4: Solutions */}
            <div>
              <h4 className="text-xs font-bold uppercase tracking-wider text-[#E8621A] mb-4">
                Solutions
              </h4>
              <ul className="space-y-2.5 text-xs text-gray-400">
                {['Loan Against Securities', 'Receivables Factoring', 'Real Estate Structured Debt', 'Promoter Financing'].map((item) => (
                  <li key={item}>
                    <a href="#" className="hover:text-white transition-colors">{item}</a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 5: Contact */}
            <div>
              <h4 className="text-xs font-bold uppercase tracking-wider text-[#E8621A] mb-4">
                Contact Desk
              </h4>
              <div className="space-y-3 text-xs">
                <div>
                  <p className="text-gray-500 uppercase text-[10px] tracking-wider mb-0.5">Email</p>
                  <a href="mailto:admin@lrsdindia.com" className="text-white hover:text-[#E8621A] font-medium transition-colors">
                    admin@lrsdindia.com
                  </a>
                </div>
                <div>
                  <p className="text-gray-500 uppercase text-[10px] tracking-wider mb-0.5">Direct Line</p>
                  <a href="tel:+919810278244" className="text-white hover:text-[#E8621A] font-medium transition-colors">
                    +91 98102 78244
                  </a>
                </div>
              </div>
            </div>

          </div>

          {/* Bottom Bar */}
          <div className="border-t border-white/10 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-gray-500">
            <div className="flex flex-wrap gap-4">
              <a href="#" className="hover:text-gray-300">Privacy Policy</a>
              <span>·</span>
              <a href="#" className="hover:text-gray-300">Terms of Use</a>
              <span>·</span>
              <a href="#" className="hover:text-gray-300">Statutory Disclosures</a>
            </div>
            <p>© 2026 LRSD Securities Private Limited. All rights reserved.</p>
          </div>

        </div>
      </footer>

    </div>
  );
}
