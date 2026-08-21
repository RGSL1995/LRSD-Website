'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronsRight, ChevronRight, ChevronDown, ArrowRight, Briefcase } from 'lucide-react';
import Navbar, { ActionButton } from '@/components/Navbar';
import Footer from '@/components/Footer';
import { TorusWireframe, SphereWireframe, GyroWireframe, SilkWaves } from '@/components/SharedWireframes';

/* ─────────────────────────────────────────────
   PRODUCTS DATA FOR SECTION 3
───────────────────────────────────────────── */
const PRODUCTS = [
  {
    num: '01',
    title: 'Loan Against Securities',
    tag: 'FLAGSHIP · LAS',
    badge: '01 / LAS LIQUIDITY',
    desc: 'Most lenders size an SME facility by how fast they could sell the pledge. On a stock that trades thinly, that arithmetic returns nothing — and a profitable company gets declined for a reason that has nothing to do with its ability to repay. We underwrite the business instead: earnings, sector, promoter, trajectory. The volume tells us how to structure the facility. It does not decide whether we do it.',
    features: ['Loan-to-Value: Up to 20%', 'Turnaround: 48 Hours', 'Structure: Bullet / EMI'],
  },
  {
    num: '02',
    title: 'Receivables Discounting/Factoring',
    tag: 'PRODUCT · RF',
    badge: '02 / Supply Chain Finance (SCF)', 
    desc: 'Unlocking cash trapped in 60–180 day payment cycles — improving ROCE, RONW and cash flow.',
    features: ['Recourse & Non-Recourse', 'Disbursement: Day 2', 'Invoice Coverage: Up to 90%'],
  },
  {
    num: '03',
    title: 'Mortgage-Backed Loans ',
    tag: 'PRODUCT · RESD',
    badge: '03 / SECURED REAL ESTATE',
    desc: 'We underwrite the cash-flow waterfall, not just the collateral value. Last-mile developer credit from ₹5 crore to ₹200 crore — drawdowns released against construction milestones, receipts escrowed, and repayment structured around when the project actually generates cash.',
    features: ['Security: 2.0x-3.0x Cover', 'Tenure: 12–36 Months', 'Flexible Moratorium'],
  },
  {
    num: '04',
    title: 'Structured Credit',
    tag: 'BESPOKE · SC',
    badge: '04 / BESPOKE STRUCTURE',
    desc: 'Mezzanine debt, convertible instruments, pre-IPO bridge capital and event-driven financing.',
    features: ['Turnaround: 2-7 Days', 'Security: 100% Asset-Backed', 'Structure: Tailored Amortization'],
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
      <Navbar />

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
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              {/* Giant Headline */}
              <h1 className="text-6xl sm:text-7xl md:text-8xl lg:text-[102px] font-extrabold tracking-[-0.04em] leading-[0.92] text-[#0F1932] mb-8">
                <span className="inline-block font-extrabold text-[#0F1932]">
                  Capital,
                </span>{" "}
                <span className="font-light italic text-[#9CA3AF] tracking-tight">
                  with
                </span>
                <span className="block font-light text-[#9EA5B3] tracking-tight mt-1">
                  conviction.
                </span>
              </h1>

              {/* Subtitle */}
              <p className="text-sm md:text-base text-gray-600 max-w-lg leading-relaxed mb-10 font-normal">
                A non-banking lender purpose-built for India&#39;s MSMEs and mid-sized
                corporates – carrying forward three decades of disciplined capital from the
                Rajasthan Global Securities Group.
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
                <p className="text-[15px] font-bold tracking-[0.2em] text-gray-400 uppercase mb-3">
                  OUR LENDING STANCE
                </p>
                <p className="text-xs sm:text-sm font-semibold text-gray-800 leading-relaxed">
                  Secured lending only. Facility
                  Size ranging from ₹1 crore to ₹100 crore.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════
          SECTION 2: WHY WE EXIST / VISION (Gradient Brown)
      ══════════════════════════════════════════════════════════ */}
      <section
        className="relative py-24 md:py-32 px-6 md:px-8 text-white overflow-hidden"
        style={{
          background:
            "radial-gradient(120% 120% at 85% 15%, #4A2211 0%, #2E1308 55%, #180903 100%)",
        }}
      >
        <div className="max-w-7xl mx-auto relative z-10">
          {/* Badge */}
          <div className="inline-flex items-center gap-2.5 px-3 py-1 rounded-full bg-white/10 border border-white/15 backdrop-blur-md mb-8">
            <span className="w-2 h-2 rounded-full bg-[#E8621A]" />
            <span className="text-[11px] font-bold tracking-widest uppercase text-white/90">
              Why we exist
            </span>
          </div>

          {/* Section Header */}
          <div className="grid lg:grid-cols-[1.6fr_1fr] gap-10 items-start mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight leading-tight text-white">
              To be India&apos;s most trusted name in secured, structured credit —
              the lender that emerging companies turn to when the answer needs
              judgement, not a template.
            </h2>
            <div className="lg:pt-2">
              <div className="w-8 h-0.5 bg-[#E8621A] mb-4" />
              <p className="text-base sm:text-lg font-medium text-white/80 leading-relaxed">
                Experience. Integrity.
                <br />
                Institutional strength.
              </p>
            </div>
          </div>

          {/* Vision & Mission Cards */}
          <div className="grid md:grid-cols-2 gap-6 lg:gap-8 mb-12 items-stretch">
            {/* Vision Card */}
            <motion.div
              whileHover={{ y: -4 }}
              transition={{ duration: 0.3 }}
              className="group relative rounded-3xl p-8 sm:p-10 flex flex-col justify-between h-full overflow-hidden bg-white text-[#0F1932] shadow-xl border border-gray-100 hover:shadow-2xl transition-all"
            >
              {/* Watermark Illustration */}
              <div className="absolute -right-4 -bottom-4 w-36 h-36 opacity-10 group-hover:opacity-20 transition-opacity pointer-events-none">
                <TorusWireframe className="w-full h-full" color="#E8621A" />
              </div>

              <div className="relative z-10 flex-1 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between gap-4 mb-6">
                    <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FAF9F6] border border-gray-200">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#E8621A]" />
                      <span className="text-[11px] font-extrabold tracking-widest text-[#E8621A] uppercase">
                        01 / Vision
                      </span>
                    </div>
                    <span className="text-[10px] font-bold tracking-wider uppercase text-gray-400">
                      Target State
                    </span>
                  </div>

                  <h3 className="text-lg sm:text-xl md:text-[22px] font-bold text-[#0F1932] leading-snug tracking-tight">
                    To become India&apos;s most trusted name in lending — a{' '}
                    <span className="text-[#E8621A]">
                      full-spectrum credit institution
                    </span>{' '}
                    known for specialised capabilities in MSME and corporate financing.
                  </h3>
                </div>

                {/* Symmetrically aligned bottom divider & subtext */}
                <div className="mt-8 pt-5 border-t border-gray-100">
                  <p className="text-xs sm:text-sm text-gray-500 font-normal leading-relaxed">
                    Backing businesses where ambition is real, but access to timely capital is limited.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Mission Card */}
            <motion.div
              whileHover={{ y: -4 }}
              transition={{ duration: 0.3 }}
              className="group relative rounded-3xl p-8 sm:p-10 flex flex-col justify-between h-full overflow-hidden bg-white text-[#0F1932] shadow-xl border border-gray-100 hover:shadow-2xl transition-all"
            >
              {/* Watermark Illustration */}
              <div className="absolute -right-4 -bottom-4 w-36 h-36 opacity-10 group-hover:opacity-20 transition-opacity pointer-events-none">
                <SphereWireframe className="w-full h-full" color="#E8621A" />
              </div>

              <div className="relative z-10 flex-1 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between gap-4 mb-6">
                    <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FAF9F6] border border-gray-200">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#E8621A]" />
                      <span className="text-[11px] font-extrabold tracking-widest text-[#E8621A] uppercase">
                        02 / Mission
                      </span>
                    </div>
                    <span className="text-[10px] font-bold tracking-wider uppercase text-gray-400">
                      Execution
                    </span>
                  </div>

                  <h3 className="text-lg sm:text-xl md:text-[22px] font-bold text-[#0F1932] leading-snug tracking-tight">
                    To build enduring value through{' '}
                    <span className="text-[#E8621A]">
                      disciplined lending
                    </span>{' '}
                    by providing structured, secured and responsible growth capital to fundamentally strong businesses — bridging the gap between today&apos;s scale and tomorrow&apos;s potential.
                  </h3>
                </div>

                {/* Symmetrically aligned bottom divider & subtext */}
                <div className="mt-8 pt-5 border-t border-gray-100">
                  <p className="text-xs sm:text-sm text-gray-500 font-normal leading-relaxed">
                    Fast. Prudent. Aligned for the long term.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>

          {/* 4 Stat / Highlight Blocks */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              {
                val: "Zero NPA",
                title: "Underwriting Excellence",
                desc: "Proven through every credit cycle",
              },
              {
                val: "Bespoke",
                title: "Client-Centric Solutions",
                desc: "Tailored structures aligned to client needs",
              },
              {
                val: "Experienced",
                title: "Professionals",
                desc: "Proven expertise in lending & risk management",
              },
              {
                val: "~65 Crs.",
                title: "PAT (FY26)",
                desc: "High-quality, compounding financial performance",
              },
            ].map((stat, idx) => (
              <motion.div
                key={idx}
                whileHover={{ scale: 1.02 }}
                className="bg-black/30 backdrop-blur-md border border-white/10 rounded-2xl p-6 text-center transition-colors hover:border-[#E8621A]/50 flex flex-col justify-center items-center"
              >
                <div className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight mb-1">
                  {stat.val}
                </div>
                <div className="text-xs sm:text-sm font-bold text-[#E8621A] mb-1.5">
                  {stat.title}
                </div>
                <p className="text-xs font-medium text-white/70 tracking-wide leading-relaxed">
                  {stat.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════
          SECTION 3: STRUCTURED CREDIT — BUILT TO SCALE
      ══════════════════════════════════════════════════════════ */}
      <section
        id="solutions"
        className="py-24 md:py-32 px-6 md:px-8 bg-[#FAF9F6]"
      >
        <div className="max-w-7xl mx-auto">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 mb-8">
            <span className="w-2 h-2 rounded-full bg-[#E8621A]" />
            <p className="text-xs font-bold tracking-widest text-gray-400 uppercase">
              Focused Solutions
            </p>
          </div>

          {/* Header */}
          <div className="grid lg:grid-cols-[1.5fr_1fr] gap-8 items-start mb-14">
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-[-0.03em] leading-[1.05] text-[#0F1932]">
              Structured Credit, Built to Scale 
              <br />
              <span className="text-[#E8621A]">Built to Scale</span>
            </h2>
            <div className="lg:pt-2">
              <div className="w-8 h-0.5 bg-[#E8621A] mb-3" />
              <p className="text-sm sm:text-base text-gray-600 font-medium leading-relaxed">
                “Four highly-focused products. Zero exposure to retail or unsecured lending.”
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
                      ? "bg-[#0F1932] border-[#0F1932] text-white shadow-lg"
                      : "bg-white border-gray-200 text-[#0F1932] hover:border-gray-300"
                  }`}
                >
                  <div className="flex items-center gap-5">
                    <span
                      className={`text-xs font-bold tracking-widest ${
                        activeProduct === idx
                          ? "text-[#E8621A]"
                          : "text-gray-400"
                      }`}
                    >
                      {prod.num}
                    </span>
                    <span className="font-bold text-base md:text-lg">
                      {prod.title}
                    </span>
                  </div>
                  <ChevronRight
                    className={`w-5 h-5 transition-transform ${
                      activeProduct === idx
                        ? "text-[#E8621A] translate-x-1"
                        : "text-gray-300"
                    }`}
                  />
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
          SECTION 4: LEADERSHIP & ETHOS
      ══════════════════════════════════════════════════════════ */}
      <section id="leadership" className="py-20 md:py-28 px-6 md:px-8 bg-[#FAF9F6]">
        <div className="max-w-7xl mx-auto space-y-24 md:space-y-32">
          {/* Block 1: Managing Director / Founder's Quote Spotlight */}
          <div>
            {/* Badge */}
            <div className="inline-flex items-center gap-2 mb-8">
              <span className="w-2 h-2 rounded-full bg-[#E8621A]" />
              <p className="text-xs font-bold tracking-widest text-gray-400 uppercase">
                03 / Leadership & Philosophy
              </p>
            </div>

            {/* Dark Quote Box Container */}
            <div className="bg-[#0F1932] rounded-3xl overflow-hidden shadow-2xl border border-white/10">
              <div className="grid lg:grid-cols-[0.85fr_1.15fr] items-stretch">
                {/* Left Photo */}
                <div className="relative min-h-[380px] lg:min-h-[460px] bg-gradient-to-r from-[#0F1932] to-[#1A2347]">
                  <Image
                    src="/lalitdua.png"
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
                      &ldquo;Discipline is not the opposite of ambition.
                      <br />
                      <span className="text-[#E8621A]">
                        It is what makes ambition repeatable.
                      </span>
                      &rdquo;
                    </h3>

                    <div className="border-l-2 border-[#E8621A] pl-5 mb-8">
                      <p className="text-sm sm:text-base text-gray-300 leading-relaxed max-w-lg">
                        &ldquo;We have never written off a loan in twenty-four
                         years. That record is not caution for its own sake — it is what allows us to back a
                         company the market has not noticed yet, and to still be standing there when it has.&rdquo;
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

          {/* Block 2: Leadership Team Grid */}
          <div>
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-white border border-[#E8621A]/20 shadow-sm mb-6">
              <Briefcase className="w-3.5 h-3.5 text-[#E8621A]" />
              <p className="text-[11px] font-bold tracking-widest text-[#0F1932] uppercase">
                LEADERSHIP
              </p>
            </div>

            {/* Heading */}
            <h2 className="text-3xl sm:text-5xl md:text-6xl font-extrabold tracking-[-0.03em] leading-[1.1] text-[#0F1932] mb-12">
              Two generations,{" "}
              <span className="text-gray-400 font-normal">one institutional mindset.</span>
            </h2>

            {/* 4 Leadership Cards Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  name: "Mr. Lalit Dua",
                  role: "Managing Director",
                  tagline: "Founder, 30 years of compounding",
                  image: "/lalitdua.png",
                },
                {
                  name: "Ms. Shreya Dua",
                  role: "Director",
                  tagline: "Wharton MBA, NYU Stern BS/MS, Ex-BCG",
                  image: "/Shreya.png",
                },
                {
                  name: "Mr. Amit Arora",
                  role: "Chief Executive Officer",
                  tagline: "Two decades scaling India’s lending in LAS",
                  image: "/amit arora.png",
                },
                {
                  name: "Mr. Manish Chauhan",
                  role: "Chief Financial Officer",
                  tagline: "With the group since inception (2002)",
                  image: "/manish.png",
                },
              ].map((leader, idx) => (
                <motion.div
                  key={idx}
                  whileHover={{ y: -6 }}
                  transition={{ duration: 0.25 }}
                  className="bg-white rounded-2xl overflow-hidden border border-gray-200/80 shadow-sm hover:shadow-xl hover:border-[#E8621A]/30 transition-all flex flex-col justify-between group"
                >
                  <div>
                    <div className="relative aspect-[4/5] w-full bg-[#0F1932] overflow-hidden">
                      <Image
                        src={leader.image}
                        alt={leader.name}
                        fill
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                        className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
                      />
                    </div>
                    <div className="p-5 bg-white flex flex-col justify-center">
                      <h3 className="text-base sm:text-lg font-bold text-[#0F1932] tracking-tight">
                        {leader.name}
                      </h3>
                      <p className="text-xs font-semibold text-[#E8621A] mt-0.5 mb-2">
                        {leader.role}
                      </p>
                      <p className="text-xs text-gray-500 font-medium leading-relaxed">
                        {leader.tagline}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════
          SECTION 5: MARKET PERSPECTIVE / COMPARISON (COMMENTED OUT)
      ══════════════════════════════════════════════════════════ */}
      {/*
      <section className="py-24 md:py-32 px-6 md:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          // Badge
          <div className="inline-flex items-center gap-2 mb-8">
            <span className="w-2 h-2 rounded-full bg-[#E8621A]" />
            <p className="text-xs font-bold tracking-widest text-gray-400 uppercase">
              04 / The Difference
            </p>
          </div>

          // Headline
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-[-0.03em] leading-[1.08] text-[#0F1932] mb-16 max-w-3xl">
            Where a bank sees a balance sheet,{" "}
            <span className="text-[#E8621A]">we see the market behind it.</span>
          </h2>

          // Comparison Two Columns
          <div className="grid md:grid-cols-2 gap-8 items-start">
            // Left Column: Traditional Lenders
            <div>
              <p className="text-xs font-bold tracking-widest text-gray-400 uppercase mb-5">
                Traditional Lenders
              </p>
              <div className="space-y-3">
                {[
                  "Rigid collateral requirements and mechanical valuation",
                  "45–60 days protracted decision and disbursement cycle",
                  "Standardized balance sheet formulas ignoring sector nuances",
                  "Passive, transaction-focused covenant monitoring",
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

            // Right Column: LRSD Capital
            <div>
              <p className="text-xs font-bold tracking-widest text-[#E8621A] uppercase mb-5">
                LRSD Capital
              </p>
              <div className="space-y-3">
                {[
                  "Customized asset backing & cash flow modeling",
                  "7–14 day rapid underwriting and disbursement turnaround",
                  "Proprietary industry context & 30-year equity intelligence",
                  "Active value-add partnership & flexible structuring",
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
      */}

      {/* ══════════════════════════════════════════════════════════
          SECTION 6: FOUR COMMITMENTS (L R S D)
      ══════════════════════════════════════════════════════════ */}
      <section
        id="dna"
        className="py-24 md:py-32 px-6 md:px-8 text-white relative overflow-hidden"
        style={{
          background:
            "radial-gradient(120% 120% at 50% 10%, #16203D 0%, #0F1932 60%, #080E1E 100%)",
        }}
      >
        <div className="max-w-7xl mx-auto relative z-10">
          {/* Heading */}
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-[-0.03em] leading-[1.08] text-white mb-14">
            Four letters.
            <br />
            <span className="text-[#E8621A]">Four commitments.</span>
          </h2>

          {/* 4 Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-8">
            {[
              {
                letter: "L",
                num: "01",
                title: "Long Term Thinking",
                desc: "We back businesses, not transactions.",
              },
              {
                letter: "R",
                num: "02",
                title: "Rigor",
                desc: "We go deeper before we go faster.",
              },
              {
                letter: "S",
                num: "03",
                title: "Stewardship",
                desc: "We are Custodians before we are capital providers.",
              },
              {
                letter: "D",
                num: "04",
                title: "Discipline",
                desc: "Conservative on capital, flexible on structure once we've found a strong borrower.",
              },
            ].map((card, i) => (
              <motion.div
                key={i}
                whileHover={{ y: -6 }}
                transition={{ duration: 0.3 }}
                className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-8 flex flex-col justify-between min-h-[280px] hover:border-[#E8621A]/50 hover:bg-white/[0.08] transition-all shadow-xl"
              >
                <div>
                  <div className="flex justify-between items-center mb-6">
                    <span className="text-[11px] font-extrabold tracking-widest px-2.5 py-1 rounded-full bg-white/10 text-white/90">
                      {card.num}
                    </span>
                  </div>

                  <div className="text-6xl font-black mb-6 leading-none text-[#E8621A]">
                    {card.letter}
                  </div>

                  <h3 className="font-bold text-base md:text-lg mb-2 text-white">
                    {card.title}
                  </h3>
                </div>

                <p className="text-xs leading-relaxed mt-4 text-gray-300 font-normal">
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
              background: "linear-gradient(135deg, #7C3018 0%, #632410 100%)",
            }}
          >
            <p className="text-xl sm:text-2xl md:text-3xl font-bold leading-snug tracking-tight max-w-3xl mx-auto">
              &ldquo;Ambitious and growth-oriented, but our ambition is guided
              by discipline.&rdquo;
            </p>
          </motion.div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════
          SECTION 7: CTA & FOOTER
      ══════════════════════════════════════════════════════════ */}
      <section id="contact" className="py-20 md:py-24 px-6 md:px-8 bg-white">
        <div className="max-w-7xl mx-auto bg-[#0F1932] rounded-3xl p-12 md:p-20 text-center text-white shadow-2xl relative overflow-hidden">
          <div className="max-w-2xl mx-auto relative z-10">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight mb-6">
              Let&apos;s structure what comes next.
            </h2>
            <p className="text-sm md:text-base text-gray-300 mb-10">
              Speak directly with our investment and underwriting committee for
              bespoke structured credit solutions.
            </p>
            <ActionButton
              label="Start a conversation"
              href="/#contact"
              className="bg-[#E8621A] hover:bg-[#F27125]"
            />
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
}
