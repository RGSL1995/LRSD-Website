'use client';

import { useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { ArrowRight, ChevronDown } from 'lucide-react';
import { FaFacebook, FaXTwitter, FaLinkedin, FaInstagram } from 'react-icons/fa6';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

/* ─────────────────────────────────────────────
   HERO RIBBON — animated silk ribbon waves
   matching the Figma design exactly.
   Multiple copper/rose-gold ribbon strands
   undulate independently like flowing silk.
───────────────────────────────────────────── */
const HeroRibbon = () => {
  // Each ribbon has: fill path keyframes (start → mid → end → start)
  // and an independent duration + delay for natural async feel
  const ribbons = [
    // Ribbon 1 — thick foreground strand, deepest copper
    {
      keyframes: [
        'M 1000,80 C 840,100 740,180 680,290 C 610,420 650,530 750,600 C 820,650 920,660 1000,635 L 1000,80 Z',
        'M 1000,80 C 820,130 710,210 640,330 C 560,470 600,570 700,640 C 770,685 920,695 1000,665 L 1000,80 Z',
        'M 1000,80 C 860,90 750,150 690,260 C 620,380 660,490 760,570 C 830,620 920,635 1000,610 L 1000,80 Z',
        'M 1000,80 C 840,100 740,180 680,290 C 610,420 650,530 750,600 C 820,650 920,660 1000,635 L 1000,80 Z',
      ],
      fill: 'url(#rg1)',
      filter: 'url(#softGlow)',
      duration: 8,
      delay: 0,
    },
    // Ribbon 2 — mid strand, warm rose-copper
    {
      keyframes: [
        'M 1000,45 C 880,70 790,140 730,250 C 655,375 690,490 780,560 C 850,615 920,625 1000,600 L 1000,45 Z',
        'M 1000,45 C 860,85 760,160 695,275 C 615,410 650,520 740,590 C 810,650 910,660 1000,630 L 1000,45 Z',
        'M 1000,45 C 895,55 805,125 745,230 C 670,355 705,475 795,545 C 865,600 925,610 1000,585 L 1000,45 Z',
        'M 1000,45 C 880,70 790,140 730,250 C 655,375 690,490 780,560 C 850,615 920,625 1000,600 L 1000,45 Z',
      ],
      fill: 'url(#rg2)',
      filter: 'url(#softBlur)',
      duration: 10,
      delay: 0.6,
    },
    // Ribbon 3 — lighter mid-tone, rose-gold
    {
      keyframes: [
        'M 1000,20 C 910,45 820,110 760,210 C 690,330 720,450 810,525 C 880,580 930,590 1000,570 L 1000,20 Z',
        'M 1000,20 C 890,60 785,130 718,245 C 640,375 675,495 760,565 C 825,620 925,630 1000,600 L 1000,20 Z',
        'M 1000,20 C 920,35 830,95 770,190 C 700,315 735,440 825,510 C 890,565 935,575 1000,555 L 1000,20 Z',
        'M 1000,20 C 910,45 820,110 760,210 C 690,330 720,450 810,525 C 880,580 930,590 1000,570 L 1000,20 Z',
      ],
      fill: 'url(#rg3)',
      filter: 'url(#softBlur)',
      duration: 12,
      delay: 1.2,
    },
    // Ribbon 4 — lighter highlight, peachy tone
    {
      keyframes: [
        'M 1000,0 C 930,25 850,80 795,170 C 725,295 755,410 840,485 C 910,545 945,555 1000,535 L 1000,0 Z',
        'M 1000,0 C 910,40 810,105 740,220 C 665,355 700,475 785,550 C 855,610 940,615 1000,590 L 1000,0 Z',
        'M 1000,0 C 945,15 870,65 815,155 C 745,280 775,395 860,465 C 925,520 950,530 1000,515 L 1000,0 Z',
        'M 1000,0 C 930,25 850,80 795,170 C 725,295 755,410 840,485 C 910,545 945,555 1000,535 L 1000,0 Z',
      ],
      fill: 'url(#rg4)',
      filter: 'url(#mediumBlur)',
      duration: 11,
      delay: 1.8,
    },
    // Ribbon 5 — deep background soft wave
    {
      keyframes: [
        'M 1000,120 C 820,160 700,260 640,390 C 570,530 620,640 720,685 C 800,720 900,705 1000,680 L 1000,120 Z',
        'M 1000,120 C 800,180 670,290 595,425 C 520,565 570,670 675,710 C 760,745 890,725 1000,695 L 1000,120 Z',
        'M 1000,120 C 830,140 715,235 660,355 C 595,490 640,605 745,660 C 820,705 900,690 1000,665 L 1000,120 Z',
        'M 1000,120 C 820,160 700,260 640,390 C 570,530 620,640 720,685 C 800,720 900,705 1000,680 L 1000,120 Z',
      ],
      fill: 'url(#rg5)',
      filter: 'url(#heavyBlur)',
      duration: 13,
      delay: 0.4,
    },
    // Ribbon 6 — extra layer for richness
    {
      keyframes: [
        'M 1000,60 C 900,75 820,125 765,225 C 700,345 730,465 820,540 C 890,595 935,605 1000,585 L 1000,60 Z',
        'M 1000,60 C 880,110 790,170 720,285 C 645,420 685,535 775,605 C 845,655 930,660 1000,635 L 1000,60 Z',
        'M 1000,60 C 920,80 840,140 785,245 C 720,370 755,490 845,560 C 915,610 940,620 1000,600 L 1000,60 Z',
        'M 1000,60 C 900,75 820,125 765,225 C 700,345 730,465 820,540 C 890,595 935,605 1000,585 L 1000,60 Z',
      ],
      fill: 'url(#rg6)',
      filter: 'url(#softBlur)',
      duration: 9,
      delay: 2.1,
    },
  ];

  return (
    <div className="absolute top-0 right-0 w-[65%] h-full pointer-events-none overflow-hidden">
      <svg
        viewBox="0 0 950 720"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="absolute top-0 right-0 w-full h-full"
        preserveAspectRatio="xMaxYMin meet"
      >
        <defs>
          {/* Gradient fills — copper → rose-gold → light salmon palette */}
          <linearGradient id="rg1" x1="100%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%"   stopColor="#A0522D" stopOpacity="0.85" />
            <stop offset="30%"  stopColor="#B8623F" stopOpacity="0.65" />
            <stop offset="100%" stopColor="#D4956A" stopOpacity="0.15" />
          </linearGradient>
          <linearGradient id="rg2" x1="100%" y1="0%" x2="15%" y2="100%">
            <stop offset="0%"   stopColor="#CD6F44" stopOpacity="0.70" />
            <stop offset="45%"  stopColor="#D98759" stopOpacity="0.42" />
            <stop offset="100%" stopColor="#E8B090" stopOpacity="0.10" />
          </linearGradient>
          <linearGradient id="rg3" x1="100%" y1="0%" x2="25%" y2="100%">
            <stop offset="0%"   stopColor="#E08968" stopOpacity="0.55" />
            <stop offset="55%"  stopColor="#E8A882" stopOpacity="0.28" />
            <stop offset="100%" stopColor="#F0C8A8" stopOpacity="0.08" />
          </linearGradient>
          <linearGradient id="rg4" x1="100%" y1="0%" x2="5%" y2="85%">
            <stop offset="0%"   stopColor="#E8A88F" stopOpacity="0.50" />
            <stop offset="100%" stopColor="#F0D0C0" stopOpacity="0.08" />
          </linearGradient>
          <linearGradient id="rg5" x1="100%" y1="10%" x2="20%" y2="100%">
            <stop offset="0%"   stopColor="#9A4C2F" stopOpacity="0.35" />
            <stop offset="100%" stopColor="#C07850" stopOpacity="0.04" />
          </linearGradient>
          <linearGradient id="rg6" x1="100%" y1="0%" x2="35%" y2="100%">
            <stop offset="0%"   stopColor="#D99B7F" stopOpacity="0.48" />
            <stop offset="65%"  stopColor="#E8B898" stopOpacity="0.22" />
            <stop offset="100%" stopColor="#F0D0B8" stopOpacity="0.06" />
          </linearGradient>

          {/* SVG blur filters — create the soft silk glow effect */}
          <filter id="softGlow" x="-10%" y="-10%" width="120%" height="120%">
            <feGaussianBlur stdDeviation="2.5" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
          <filter id="softBlur" x="-10%" y="-10%" width="120%" height="120%">
            <feGaussianBlur stdDeviation="5" />
          </filter>
          <filter id="mediumBlur" x="-15%" y="-15%" width="130%" height="130%">
            <feGaussianBlur stdDeviation="10" />
          </filter>
          <filter id="heavyBlur" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="16" />
          </filter>
        </defs>

        {/* Render each ribbon with independent Framer Motion path animation */}
        {ribbons.map((ribbon, i) => (
          <motion.path
            key={i}
            d={ribbon.keyframes[0]}
            fill={ribbon.fill}
            filter={ribbon.filter === 'none' ? undefined : ribbon.filter}
            animate={{ d: ribbon.keyframes }}
            transition={{
              duration: ribbon.duration,
              delay: ribbon.delay,
              repeat: Infinity,
              ease: 'easeInOut',
              times: [0, 0.33, 0.66, 1],
            }}
          />
        ))}
      </svg>
    </div>
  );
};

/* ─────────────────────────────────────────────
   PRODUCTS data for Structured Credit section
───────────────────────────────────────────── */
const PRODUCTS = [
  {
    num: '01',
    title: 'Loan Against Securities',
    id: 'las',
    badge: 'FLAGSHIP · LAS',
    desc: 'Liquidity backed by listed equity and debt instruments, with LTVs shaped by thirty years of micro-cap equity knowledge.',
  },
  {
    num: '02',
    title: 'Receivables Factoring',
    id: 'rf',
    badge: 'PRODUCT · RF',
    desc: 'Convert outstanding receivables into immediate working capital. Fast, transparent, and structured for growing enterprises.',
  },
  {
    num: '03',
    title: 'Mortgage-Backed Loans',
    id: 'mbl',
    badge: 'PRODUCT · MBL',
    desc: 'Structured loans against commercial and residential real estate, underwritten with rigorous collateral assessment.',
  },
  {
    num: '04',
    title: 'Structured Credit',
    id: 'sc',
    badge: 'PRODUCT · SC',
    desc: 'Custom credit solutions designed around your capital needs — no off-the-shelf products, only bespoke structures.',
  },
];

/* ─────────────────────────────────────────────
   MAIN PAGE
───────────────────────────────────────────── */
export default function Home() {
  const [activeProduct, setActiveProduct] = useState(0);

  return (
    <div className="bg-white text-[var(--text-primary)] overflow-x-hidden">

      {/* ══════════════════════════════════════
          NAVIGATION
      ══════════════════════════════════════ */}
      <header className="fixed top-0 w-full bg-white/95 backdrop-blur-md border-b border-[var(--border-color)] z-50">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <img
            src="/LRSD-logo-removebg-preview.png"
            alt="LRSD Capital"
            className="h-14 w-auto"
          />

          <nav className="hidden md:flex gap-1">
            {['About', 'Products', 'Grievance', 'Reports', 'Careers', 'Policies'].map((item) => (
              <button
                key={item}
                className="flex items-center gap-1 px-3 py-2 text-sm text-[var(--text-secondary)] hover:text-[var(--text-primary)] rounded-lg transition-colors"
              >
                {item}
                <ChevronDown className="w-3.5 h-3.5 opacity-60" />
              </button>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <button className="text-sm text-[#E8621A] hover:opacity-80 font-semibold transition-opacity">
              Contact
            </button>
            <motion.button
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.96 }}
              className="flex items-center gap-2 bg-black text-white text-sm font-medium px-5 py-2.5 rounded-full hover:bg-[#1a1a1a] transition-colors"
            >
              <ArrowRight className="w-4 h-4" />
              Start a conversation
            </motion.button>
          </div>
        </div>
      </header>

      {/* ══════════════════════════════════════
          HERO SECTION
      ══════════════════════════════════════ */}
      <section className="relative pt-28 pb-16 px-6 md:px-8 min-h-screen flex items-center bg-white overflow-hidden">
        <HeroRibbon />

        <div className="max-w-7xl mx-auto w-full relative z-10">
          <div className="grid md:grid-cols-2 gap-10 items-center">

            {/* Left: Main headline */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: 'easeOut' }}
            >
              {/* "Capital," — bold black */}
              <h1 className="font-black leading-none tracking-tight mb-2" style={{ fontSize: 'clamp(4rem, 9vw, 7.5rem)', letterSpacing: '-0.03em' }}>
                <motion.span
                  className="block text-black"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1, duration: 0.7 }}
                >
                  Capital,
                </motion.span>
                <motion.span
                  className="block text-gray-300 font-light italic"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.2, duration: 0.7 }}
                  style={{ fontStyle: 'italic' }}
                >
                  with
                </motion.span>
                <motion.span
                  className="block text-gray-300 font-light italic"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3, duration: 0.7 }}
                  style={{ fontStyle: 'italic' }}
                >
                  conviction.
                </motion.span>
              </h1>

              <motion.p
                className="text-base text-gray-500 mt-8 max-w-lg leading-relaxed"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5, duration: 0.8 }}
              >
                A lending-focused platform purpose-built for SMEs, MSMEs and
                mid-sized corporates — carrying forward three decades of
                disciplined capital from the Rajasthan Global Securities Group.
              </motion.p>

              <motion.div
                className="mt-8"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.65, duration: 0.8 }}
              >
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex items-center gap-2 bg-black text-white font-medium px-7 py-3.5 rounded-full hover:bg-[#1a1a1a] transition-colors"
                >
                  <ArrowRight className="w-4 h-4" />
                  Explore solutions
                </motion.button>
              </motion.div>
            </motion.div>

            {/* Right: Our Lending Stance card */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="flex justify-end"
            >
              <div className="bg-white/70 backdrop-blur-sm border border-gray-200 rounded-2xl p-8 max-w-sm shadow-sm">
                <p className="text-xs font-semibold tracking-widest text-gray-400 mb-4 uppercase">
                  Our Lending Stance
                </p>
                <p className="text-base text-black font-medium leading-relaxed">
                  Wholesale. Fully secured. Zero retail or unsecured exposure.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════
          WHY WE EXIST — dark chocolate brown
      ══════════════════════════════════════ */}
      <section className="py-24 px-6 md:px-8" style={{ backgroundColor: '#2B1A0E' }}>
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            {/* Section pill label */}
            <div className="inline-flex items-center gap-2 border border-white/20 rounded-full px-4 py-1.5 mb-10">
              <span className="w-1.5 h-1.5 rounded-full bg-[#E8621A]" />
              <p className="text-xs font-semibold tracking-widest text-white/60 uppercase">
                Why We Exist
              </p>
            </div>

            {/* Headline */}
            <div className="grid md:grid-cols-[1fr_auto] gap-12 items-start mb-16">
              <h2 className="text-5xl md:text-6xl font-bold leading-tight text-white" style={{ letterSpacing: '-0.02em' }}>
                To be the most{' '}
                <span className="text-[#E8621A]">respected name</span>{' '}
                in Indian lending.
              </h2>
              <div className="hidden md:block max-w-xs pt-2">
                <p className="text-sm text-white/60 leading-relaxed">
                  Experience. Integrity. Impact — in Indian lending.
                </p>
              </div>
            </div>

            {/* Vision / Mission cards */}
            <div className="grid md:grid-cols-2 gap-4 mb-16">
              {[
                {
                  badge: 'VISION',
                  title: 'A specialist credit institution for Indian enterprise.',
                },
                {
                  badge: 'MISSION',
                  title: 'Enduring value through disciplined lending.',
                },
              ].map((card, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1, duration: 0.6 }}
                  viewport={{ once: true }}
                  className="border border-white/15 rounded-2xl p-8 hover:border-[#E8621A]/40 transition-colors"
                >
                  <span className="inline-block text-xs font-bold tracking-widest text-[#E8621A] border border-[#E8621A]/30 rounded-full px-3 py-1 mb-5">
                    {card.badge}
                  </span>
                  <p className="text-xl font-semibold text-white leading-snug">
                    {card.title}
                  </p>
                </motion.div>
              ))}
            </div>

            {/* Stats row */}
            <motion.div
              className="grid grid-cols-2 md:grid-cols-4"
              variants={{
                hidden: { opacity: 0 },
                show: { opacity: 1, transition: { staggerChildren: 0.1 } },
              }}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
            >
              {[
                { value: '31.1%', label: "Share of India's GDP" },
                { value: '48.6%', label: "Share of India's exports" },
                { value: '38.9 Cr', label: 'People employed' },
                { value: '₹25 L Cr', label: 'Formal credit gap' },
              ].map((stat, idx) => (
                <motion.div
                  key={idx}
                  variants={{
                    hidden: { opacity: 0, y: 12 },
                    show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
                  }}
                  className={`py-8 px-4 text-center ${idx < 3 ? 'border-r border-white/10' : ''}`}
                >
                  <div className="text-4xl md:text-5xl font-bold text-white mb-2 font-mono">
                    {stat.value}
                  </div>
                  <p className="text-xs text-white/50 font-medium">{stat.label}</p>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ══════════════════════════════════════
          STRUCTURED CREDIT — white background
      ══════════════════════════════════════ */}
      <section className="py-24 px-6 md:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            {/* Section label */}
            <div className="inline-flex items-center gap-2 mb-10">
              <span className="w-1.5 h-1.5 rounded-full bg-[#E8621A]" />
              <p className="text-xs font-semibold tracking-widest text-gray-400 uppercase">
                Products
              </p>
            </div>

            {/* Header */}
            <div className="flex justify-between items-start mb-14">
              <div>
                <h2 className="text-5xl md:text-6xl font-bold leading-tight" style={{ letterSpacing: '-0.02em' }}>
                  Structured Credit,
                  <br />
                  <span className="text-[#E8621A]">Built to Scale</span>
                </h2>
              </div>
              <div className="hidden md:block text-right max-w-xs">
                <p className="text-base text-gray-600 leading-relaxed">
                  Four highly-focused products. Zero exposure to retail or unsecured lending.
                </p>
              </div>
            </div>

            {/* Products grid */}
            <div className="grid md:grid-cols-2 gap-0 rounded-2xl overflow-hidden border border-gray-200">
              {/* Left: product list */}
              <div className="divide-y divide-gray-100">
                {PRODUCTS.map((product, idx) => (
                  <motion.button
                    key={idx}
                    whileHover={activeProduct !== idx ? { x: 4 } : {}}
                    onClick={() => setActiveProduct(idx)}
                    className={`w-full text-left px-8 py-7 transition-all duration-300 flex justify-between items-center ${
                      activeProduct === idx
                        ? 'bg-black text-white'
                        : 'bg-white text-black hover:bg-gray-50'
                    }`}
                  >
                    <div>
                      <p className={`text-xs font-bold tracking-widest mb-1.5 ${
                        activeProduct === idx ? 'text-gray-400' : 'text-gray-400'
                      }`}>
                        {product.num}
                      </p>
                      <p className={`font-semibold text-lg ${
                        activeProduct === idx ? 'text-white' : 'text-black'
                      }`}>
                        {product.title}
                      </p>
                    </div>
                    <ArrowRight className={`w-5 h-5 flex-shrink-0 ${
                      activeProduct === idx ? 'text-[#E8621A]' : 'text-gray-300'
                    }`} />
                  </motion.button>
                ))}
              </div>

              {/* Right: product detail */}
              <motion.div
                key={activeProduct}
                initial={{ opacity: 0, x: 12 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.35 }}
                className="bg-[#F7F7F7] p-12 flex flex-col justify-between min-h-[420px]"
              >
                <div>
                  <p className="text-xs font-bold tracking-widest text-[#E8621A] mb-8">
                    {PRODUCTS[activeProduct].badge}
                  </p>

                  {/* Decorative bar graphic */}
                  <div className="flex items-end gap-1.5 mb-10 h-20">
                    {[60, 85, 45, 70, 55].map((h, i) => (
                      <motion.div
                        key={i}
                        initial={{ height: 0 }}
                        animate={{ height: `${h}%` }}
                        transition={{ delay: i * 0.06, duration: 0.4, ease: 'easeOut' }}
                        className="w-5 bg-gray-300 rounded-sm"
                      />
                    ))}
                  </div>

                  <h3 className="text-3xl font-bold text-black mb-4">
                    {PRODUCTS[activeProduct].title}
                  </h3>
                  <p className="text-base text-gray-600 leading-relaxed">
                    {PRODUCTS[activeProduct].desc}
                  </p>
                </div>

                <motion.button
                  whileHover={{ scale: 1.04 }}
                  whileTap={{ scale: 0.96 }}
                  className="flex items-center gap-2 text-[#E8621A] font-bold text-sm mt-8 w-fit"
                >
                  Learn more
                  <ArrowRight className="w-4 h-4" />
                </motion.button>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ══════════════════════════════════════
          FOUNDER'S QUOTE — dark card
      ══════════════════════════════════════ */}
      <section className="py-24 px-6 md:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            {/* Section label */}
            <div className="inline-flex items-center gap-2 mb-10">
              <span className="w-1.5 h-1.5 rounded-full bg-[#E8621A]" />
              <p className="text-xs font-semibold tracking-widest text-gray-400 uppercase">
                Founder's Note
              </p>
            </div>

            <div className="bg-[#1a1a1a] rounded-3xl overflow-hidden">
              <div className="grid md:grid-cols-[42%_58%] items-stretch">
                {/* Photo */}
                <motion.div
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8 }}
                  viewport={{ once: true }}
                  className="relative h-80 md:h-auto min-h-[480px]"
                >
                  <Image
                    src="/lalitsir.jpeg"
                    alt="Mr. Lalit Dua, Managing Director"
                    fill
                    priority
                    sizes="(max-width: 768px) 100vw, 42vw"
                    className="object-cover object-top"
                  />
                </motion.div>

                {/* Quote */}
                <motion.div
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8 }}
                  viewport={{ once: true }}
                  className="p-12 md:p-16 flex flex-col justify-between"
                >
                  <div>
                    <motion.h3
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.2, duration: 0.6 }}
                      viewport={{ once: true }}
                      className="text-3xl md:text-4xl font-bold text-white mb-8 leading-tight"
                    >
                      &ldquo;Return of capital matters more to us than return on capital.&rdquo;
                    </motion.h3>

                    <motion.div
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      transition={{ delay: 0.35, duration: 0.6 }}
                      viewport={{ once: true }}
                      className="border-l-4 border-[#E8621A] pl-6"
                    >
                      <p className="text-sm text-gray-300 leading-relaxed">
                        We are not reckless lenders — we are conservative in how we underwrite.
                        But once we&apos;ve identified a strong borrower, we are flexible in what
                        we can structure for them.
                      </p>
                    </motion.div>
                  </div>

                  <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 0.5, duration: 0.6 }}
                    viewport={{ once: true }}
                    className="mt-10"
                  >
                    <p className="font-bold text-white">Mr. Lalit Dua</p>
                    <p className="text-sm text-gray-400">Managing Director, LRSD Capital</p>
                  </motion.div>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ══════════════════════════════════════
          MARKET PERSPECTIVE
      ══════════════════════════════════════ */}
      <section className="py-24 px-6 md:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            {/* Section label */}
            <div className="inline-flex items-center gap-2 mb-10">
              <span className="w-1.5 h-1.5 rounded-full bg-[#E8621A]" />
              <p className="text-xs font-semibold tracking-widest text-gray-400 uppercase">
                Our Edge
              </p>
            </div>

            <h2 className="text-5xl md:text-6xl font-bold mb-16 leading-tight" style={{ letterSpacing: '-0.02em' }}>
              Where a bank sees a balance sheet,{' '}
              <span className="text-[#E8621A]">we see the market behind it.</span>
            </h2>

            <div className="grid md:grid-cols-2 gap-8">
              {/* Traditional lenders column */}
              <div>
                <h3 className="text-xl font-bold mb-6 text-black">Traditional lenders</h3>
                <motion.div
                  className="space-y-3"
                  variants={{ hidden: { opacity: 0 }, show: { opacity: 1, transition: { staggerChildren: 0.08 } } }}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true }}
                >
                  {[
                    'Slow, process-heavy, hard to navigate',
                    'Assess businesses through a credit lens only',
                    'Standard rating tables, mechanical haircuts',
                    'Treats lending as a one-off transaction',
                  ].map((text, i) => (
                    <motion.div
                      key={i}
                      variants={{ hidden: { opacity: 0, y: 8 }, show: { opacity: 1, y: 0, transition: { duration: 0.5 } } }}
                      className="bg-white border border-gray-200 rounded-xl px-6 py-5 flex gap-4 items-start"
                    >
                      <div className="w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center flex-shrink-0 text-gray-400 font-bold text-xs">
                        {i + 1}
                      </div>
                      <p className="text-gray-500 font-medium text-sm pt-1">{text}</p>
                    </motion.div>
                  ))}
                </motion.div>
              </div>

              {/* LRSD Capital column */}
              <div>
                <h3 className="text-xl font-bold mb-6 text-[#E8621A]">LRSD Capital</h3>
                <motion.div
                  className="space-y-3"
                  variants={{ hidden: { opacity: 0 }, show: { opacity: 1, transition: { staggerChildren: 0.08 } } }}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true }}
                >
                  {[
                    'Documentation Day 1, disbursement Day 2 — fast without cutting corners',
                    'Three decades of SME equity intelligence layered onto credit discipline',
                    'Corporate and institutional only — no retail, no unsecured lending',
                    'Credit is one part of a long-term growth partnership',
                  ].map((text, i) => (
                    <motion.div
                      key={i}
                      variants={{ hidden: { opacity: 0, y: 8 }, show: { opacity: 1, y: 0, transition: { duration: 0.5 } } }}
                      className="bg-[#0F1932] rounded-xl px-6 py-5 flex gap-4 items-start hover:bg-[#162040] transition-colors"
                    >
                      <div className="w-8 h-8 rounded-full border border-[#D4AF37] flex items-center justify-center flex-shrink-0 text-[#D4AF37] font-bold text-xs">
                        {i + 1}
                      </div>
                      <p className="text-gray-200 font-medium text-sm pt-1">{text}</p>
                    </motion.div>
                  ))}
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ══════════════════════════════════════
          FOUR COMMITMENTS — L R S D
      ══════════════════════════════════════ */}
      <section className="py-24 px-6 md:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            {/* Section label */}
            <div className="inline-flex items-center gap-2 mb-10">
              <span className="w-1.5 h-1.5 rounded-full bg-[#E8621A]" />
              <p className="text-xs font-semibold tracking-widest text-gray-400 uppercase">
                Our Commitments
              </p>
            </div>

            <h2 className="text-5xl md:text-6xl font-bold mb-14 leading-tight" style={{ letterSpacing: '-0.02em' }}>
              Four letters.
              <br />
              <span className="text-[#E8621A]">Four commitments.</span>
            </h2>

            {/* Cards grid */}
            <motion.div
              className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6"
              variants={{ hidden: { opacity: 0 }, show: { opacity: 1, transition: { staggerChildren: 0.1 } } }}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
            >
              {[
                { letter: 'L', num: '01', title: 'Long-Term Thinking', desc: 'We back businesses, not transactions.', dark: false },
                { letter: 'R', num: '02', title: 'Rigor', desc: 'We go deeper before we go faster.', dark: false },
                { letter: 'S', num: '03', title: 'Stewardship', desc: 'We are custodians of capital.', dark: false },
                { letter: 'D', num: '04', title: 'Discipline', desc: 'Conservative on capital. Flexible on structure, once we found a strong borrower.', dark: true },
              ].map((c, i) => (
                <motion.div
                  key={i}
                  variants={{ hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0, transition: { duration: 0.5 } } }}
                  whileHover={{ y: -5 }}
                  className={`rounded-2xl p-7 border transition-all duration-300 ${
                    c.dark
                      ? 'bg-[#1A2347] border-[#1A2347]'
                      : 'bg-white border-gray-200 hover:border-[#E8621A]/40'
                  }`}
                >
                  <span className={`inline-block text-xs font-bold tracking-widest rounded-full px-2.5 py-1 mb-5 ${
                    c.dark ? 'bg-white/10 text-gray-400' : 'bg-gray-100 text-gray-500'
                  }`}>
                    {c.num}
                  </span>

                  <div className="text-6xl font-black text-[#E8621A] mb-4 leading-none">
                    {c.letter}
                  </div>

                  <p className={`font-bold text-lg mb-2 ${c.dark ? 'text-white' : 'text-black'}`}>
                    {c.title}
                  </p>
                  <p className={`text-sm leading-relaxed ${c.dark ? 'text-gray-400' : 'text-gray-500'}`}>
                    {c.desc}
                  </p>
                </motion.div>
              ))}
            </motion.div>

            {/* Orange quote banner */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-[#E8621A] rounded-2xl p-10 md:p-14 text-center"
            >
              <p className="text-3xl md:text-4xl font-bold text-white leading-tight">
                &ldquo;Ambitious and growth-oriented, but our ambition is guided by discipline.&rdquo;
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ══════════════════════════════════════
          MEASURED PATH — dark navy timeline
      ══════════════════════════════════════ */}
      <section className="py-24 px-6 md:px-8" style={{ backgroundColor: '#F5F4F0' }}>
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            {/* Section label */}
            <div className="inline-flex items-center gap-2 mb-10">
              <span className="w-1.5 h-1.5 rounded-full bg-[#E8621A]" />
              <p className="text-xs font-semibold tracking-widest text-gray-500 uppercase">
                Roadmap
              </p>
            </div>

            <h2 className="text-5xl md:text-6xl font-bold mb-12 leading-tight" style={{ letterSpacing: '-0.02em' }}>
              A measured path to
              <br />
              institutional{' '}
              <span className="text-[#E8621A]">scale.</span>
            </h2>

            <div className="bg-[#1A2347] text-white rounded-2xl p-12 md:p-16 border border-[#D4AF37]/20">
              <div className="grid md:grid-cols-4 gap-0">
                {[
                  { year: '2023', title: 'Co Credit Brand' },
                  { year: '2024', title: 'Two+ More Story' },
                  { year: '2025', title: '3. Public' },
                  { year: '2027', title: 'NFI Success' },
                ].map((m, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: idx * 0.1, duration: 0.6 }}
                    viewport={{ once: true }}
                    className={`py-4 px-6 ${idx < 3 ? 'border-r border-[#D4AF37]/20' : ''}`}
                  >
                    <p className="text-[#D4AF37] font-bold text-lg mb-2">{m.year}</p>
                    <p className="text-white font-semibold text-base">{m.title}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ══════════════════════════════════════
          PERSPECTIVE BEFORE PRODUCT
      ══════════════════════════════════════ */}
      <section className="py-24 px-6 md:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            {/* Section label */}
            <div className="inline-flex items-center gap-2 mb-10">
              <span className="w-1.5 h-1.5 rounded-full bg-[#E8621A]" />
              <p className="text-xs font-semibold tracking-widest text-gray-400 uppercase">
                Philosophy
              </p>
            </div>

            <h2 className="text-5xl md:text-6xl font-bold mb-14 leading-tight" style={{ letterSpacing: '-0.02em' }}>
              Perspective before
              <br />
              product.
            </h2>

            {/* Three philosophy cards */}
            <motion.div
              className="grid md:grid-cols-3 gap-6"
              variants={{ hidden: { opacity: 0 }, show: { opacity: 1, transition: { staggerChildren: 0.12 } } }}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
            >
              {[
                {
                  num: '01',
                  title: 'Understand before you underwrite.',
                  desc: 'We spend time understanding the underlying business, the promoter, and the market — before we think about the product.',
                  bg: '#F7F7F7',
                },
                {
                  num: '02',
                  title: 'Structure follows intent.',
                  desc: 'We design credit structures around the borrower\'s capital cycle, not the other way around.',
                  bg: '#2B1A0E',
                },
                {
                  num: '03',
                  title: 'Long-term relationships over short-term returns.',
                  desc: 'Our best borrowers grow with us over years. We are not optimising for this quarter.',
                  bg: '#0F1932',
                },
              ].map((card, i) => (
                <motion.div
                  key={i}
                  variants={{ hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0, transition: { duration: 0.6 } } }}
                  whileHover={{ y: -5 }}
                  className="rounded-2xl p-8 flex flex-col justify-between min-h-[280px] transition-transform duration-300"
                  style={{ backgroundColor: card.bg }}
                >
                  <div>
                    <span className={`text-xs font-bold tracking-widest rounded-full px-2.5 py-1 mb-6 inline-block ${
                      card.bg === '#F7F7F7' ? 'bg-gray-200 text-gray-500' : 'bg-white/10 text-white/60'
                    }`}>
                      {card.num}
                    </span>
                    <h3 className={`text-xl font-bold mb-3 leading-snug ${
                      card.bg === '#F7F7F7' ? 'text-black' : 'text-white'
                    }`}>
                      {card.title}
                    </h3>
                    <p className={`text-sm leading-relaxed ${
                      card.bg === '#F7F7F7' ? 'text-gray-500' : 'text-white/60'
                    }`}>
                      {card.desc}
                    </p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ══════════════════════════════════════
          CTA SECTION
      ══════════════════════════════════════ */}
      <section className="py-24 px-6 md:px-8 bg-[#F5F4F0]">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="max-w-7xl mx-auto bg-[#0F1932] text-white rounded-2xl p-16 md:p-24 text-center"
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-8" style={{ letterSpacing: '-0.02em' }}>
            Let&apos;s structure what comes next.
          </h2>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-[#D4AF37] hover:bg-[#E5C158] text-[#0F1932] font-bold px-10 py-4 rounded-full text-base transition-colors"
          >
            Get in touch
          </motion.button>
        </motion.div>
      </section>

      {/* ══════════════════════════════════════
          FOOTER
      ══════════════════════════════════════ */}
      <footer className="bg-[#0F1932] text-white">
        <div className="max-w-7xl mx-auto px-6 md:px-8 py-16">
          {/* Top grid */}
          <div className="grid grid-cols-1 md:grid-cols-5 gap-10 mb-12">
            {/* Brand */}
            <div className="md:col-span-1">
              <img
                src="/LRSD-logo-removebg-preview.png"
                alt="LRSD Capital"
                className="h-12 w-auto brightness-0 invert mb-5"
              />
              <p className="text-gray-400 text-sm leading-relaxed mb-6">
                Empowering your financial growth with trust and expertise.
              </p>
              <div className="flex gap-3">
                {[
                  { icon: <FaFacebook className="w-4 h-4" />, label: 'Facebook' },
                  { icon: <FaXTwitter className="w-4 h-4" />, label: 'Twitter' },
                  { icon: <FaLinkedin className="w-4 h-4" />, label: 'LinkedIn' },
                  { icon: <FaInstagram className="w-4 h-4" />, label: 'Instagram' },
                ].map(({ icon, label }) => (
                  <a
                    key={label}
                    href="#"
                    aria-label={label}
                    className="w-9 h-9 bg-white/10 hover:bg-[#E8621A] rounded-full flex items-center justify-center text-white transition-colors"
                  >
                    {icon}
                  </a>
                ))}
              </div>
            </div>

            {/* Company Policies */}
            <div>
              <h4 className="font-bold text-sm mb-5 uppercase tracking-wider text-[#E8621A]">
                Company Policies
              </h4>
              <ul className="space-y-3">
                {['Audit Related Policies', 'Corporate Social Responsibility', 'IT Policies', 'Public Disclosures', 'Scale Based Regulations'].map((item) => (
                  <li key={item}>
                    <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Compliance */}
            <div>
              <h4 className="font-bold text-sm mb-5 uppercase tracking-wider text-[#E8621A]">
                Compliance & Support
              </h4>
              <ul className="space-y-3">
                {['KYC & AML Policy', 'Awareness', 'Customer Support', 'Grievance Redressal', 'Mechanism Flowchart'].map((item) => (
                  <li key={item}>
                    <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Products */}
            <div>
              <h4 className="font-bold text-sm mb-5 uppercase tracking-wider text-[#E8621A]">
                Our Products
              </h4>
              <ul className="space-y-3">
                {['Loan Against Securities', 'Receivables Factoring', 'Mortgage-Backed Loans', 'Structured Credit'].map((item) => (
                  <li key={item}>
                    <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h4 className="font-bold text-sm mb-5 uppercase tracking-wider text-[#E8621A]">
                Contact
              </h4>
              <div className="space-y-4">
                <div>
                  <p className="text-gray-500 text-xs uppercase tracking-wide mb-1">Email</p>
                  <a href="mailto:admin@lrsdindia.com" className="text-white hover:text-[#E8621A] text-sm font-medium transition-colors">
                    admin@lrsdindia.com
                  </a>
                </div>
                <div>
                  <p className="text-gray-500 text-xs uppercase tracking-wide mb-1">Call</p>
                  <a href="tel:+919810278244" className="text-white hover:text-[#E8621A] text-sm font-medium transition-colors">
                    +91 98102 78244
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Divider */}
          <div className="border-t border-white/10 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <div className="flex flex-wrap gap-4 text-sm">
                {['Contact Us', 'Terms & Conditions', 'Privacy Policy', 'Structured Lending', 'Policies'].map((link, i, arr) => (
                  <span key={link} className="flex items-center gap-4">
                    <a href="#" className="text-gray-400 hover:text-white transition-colors">{link}</a>
                    {i < arr.length - 1 && <span className="text-white/20">|</span>}
                  </span>
                ))}
              </div>
              <p className="text-gray-500 text-xs">
                © 2026 LRSD Securities Private Limited. All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
