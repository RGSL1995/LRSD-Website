'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import Navbar, { ActionButton } from '@/components/Navbar';
import Footer from '@/components/Footer';
import { TorusWireframe, SphereWireframe, GyroWireframe, SilkWaves } from '@/components/SharedWireframes';
import {
  Eye,
  Layers,
  Repeat,
  ShieldCheck,
  Zap,
  Clock,
  ArrowRight,
  CheckCircle2,
  XCircle,
  Building,
  TrendingUp,
  FileCheck2,
  Sparkles,
  Landmark
} from 'lucide-react';

export default function LRSDEdgePage() {
  const edgePillars = [
    {
      num: "01",
      title: "We weigh what others overlook",
      desc: "Earnings quality, promoter conduct, sector position, order book — the factors that actually predict repayment in this segment. Two decades of anchor investing lets us assess paper that a rating table cannot.",
      icon: <Eye className="w-6 h-6 text-[#E8621A]" />,
      badge: "Equity Intelligence",
    },
    {
      num: "02",
      title: "One lender, the full ticket",
      desc: "₹1 crore to ₹100 crore off our own balance sheet, ₹200 crore for developer credit — the whole requirement from a single counterparty, with one set of covenants.",
      icon: <Layers className="w-6 h-6 text-[#E8621A]" />,
      badge: "Direct Balance Sheet",
    },
    {
      num: "03",
      title: "Structured to your cash cycle",
      desc: "Drawdowns against milestones, receipts escrowed, repayment matched to when money actually arrives. Mezzanine and convertibles where straight debt does not fit.",
      icon: <Repeat className="w-6 h-6 text-[#E8621A]" />,
      badge: "Bespoke Amortization",
    },
    {
      num: "04",
      title: "Present through every cycle",
      desc: "A clean record with no write-offs, and lines held open through market stress — when this segment's lenders typically withdraw.",
      icon: <ShieldCheck className="w-6 h-6 text-[#E8621A]" />,
      badge: "Cycle Tested",
    },
  ];

  const anchoredCompanies = [
    "Poojaa Precision Engg. Ltd",
    "Millworks Technologies Ltd",
    "Tipco Engineering India Ltd",
    "Nanta Tech Ltd.",
    "Pajson Agro India Ltd",
    "Central Mine Planning & Design Institute Ltd",
    "Airfloa Rail Technology Ltd",
    "Flysbs Aviation Ltd",
    "Envirotech Systems Ltd",
    "Oriana Power",
    "KP Green Engineering Ltd",
    "VVIP Infratech Limited"
  ];

  const comparisonData = [
    {
      feature: "Underwriting Basis",
      traditional: "Standardized rating tables & rigid debt formulas ignoring sector nuances & promoter track record",
      lrsd: "Earnings quality, promoter conduct, order books, and 24 years of anchor equity intelligence",
    },
    {
      feature: "Turnaround Velocity",
      traditional: "45–60 days protracted multi-tier committee lags & third-party funding checks",
      lrsd: "Documentation on day one, disbursement on day two. Front-end market familiarity",
    },
    {
      feature: "Ticket & Counterparty",
      traditional: "Fragmented syndicates, complex co-lending covenants, ticket caps",
      lrsd: "₹1 Cr to ₹100 Cr off our own balance sheet (₹200 Cr developer credit) from a single counterparty",
    },
    {
      feature: "Repayment Structure",
      traditional: "Rigid monthly EMIs & passive margin calls penalizing cyclical cash flows",
      lrsd: "Milestone drawdowns, escrow waterfalls, mezzanine & convertibles matched to real receipts",
    },
    {
      feature: "Cycle Consistency",
      traditional: "Credit lines freeze or pull back during broader market turbulence",
      lrsd: "Zero write-offs in 24 years; liquidity and lines held open through market stress",
    },
  ];

  return (
    <div className="min-h-screen bg-white text-[#0F1932] overflow-x-hidden selection:bg-[#E8621A] selection:text-white font-sans">
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-36 pb-20 md:pt-44 md:pb-28 px-6 md:px-8 bg-[#FAF9F6] overflow-hidden">
        <SilkWaves />

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-gray-200 shadow-sm mb-8">
            <span className="w-2 h-2 rounded-full bg-[#E8621A]" />
            <p className="text-xs font-bold tracking-widest text-gray-500 uppercase">
              The LRSD Edge
            </p>
          </div>

          <div className="grid lg:grid-cols-[1.3fr_0.7fr] gap-12 items-start">
            <div>
              <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-[-0.03em] leading-[1.05] text-[#0F1932] mb-8">
                Where others see constraints,{" "}
                <span className="text-[#E8621A]">we see enterprise value.</span>
              </h1>

              <p className="text-lg md:text-xl text-gray-700 leading-relaxed font-normal mb-8 max-w-2xl">
                We combine twenty-four years of proprietary anchor investing, direct balance sheet lending, and bespoke cash cycle structuring to deliver speed without compromise.
              </p>

              <div className="flex flex-wrap gap-4">
                <ActionButton label="Discuss your requirement" href="/#contact" />
                <Link
                  href="/about/lrsd-capital"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border border-gray-300 text-xs md:text-sm font-bold text-gray-700 hover:bg-white transition-colors"
                >
                  <span>About LRSD Capital</span>
                  <ArrowRight className="w-4 h-4 text-[#E8621A]" />
                </Link>
              </div>
            </div>

            {/* Quick Metrics Grid */}
            <div className="grid grid-cols-2 gap-4">
              <div className="p-6 rounded-2xl bg-white border border-gray-200 shadow-sm">
                <p className="text-3xl font-extrabold text-[#E8621A] mb-1">Day 1–2</p>
                <p className="text-xs font-bold text-[#0F1932]">Execution Velocity</p>
                <p className="text-[11px] text-gray-500 mt-1">Doc on Day 1, disbursal on Day 2</p>
              </div>

              <div className="p-6 rounded-2xl bg-white border border-gray-200 shadow-sm">
                <p className="text-3xl font-extrabold text-[#0F1932] mb-1">₹1–100 Cr</p>
                <p className="text-xs font-bold text-[#0F1932]">Full Ticket Size</p>
                <p className="text-[11px] text-gray-500 mt-1">(₹200 Cr for developer credit)</p>
              </div>

              <div className="p-6 rounded-2xl bg-white border border-gray-200 shadow-sm">
                <p className="text-3xl font-extrabold text-[#0F1932] mb-1">Zero</p>
                <p className="text-xs font-bold text-[#0F1932]">Historical Write-Offs</p>
                <p className="text-[11px] text-gray-500 mt-1">Disciplined risk record in 24 yrs</p>
              </div>

              <div className="p-6 rounded-2xl bg-white border border-gray-200 shadow-sm">
                <p className="text-3xl font-extrabold text-[#E8621A] mb-1">100%</p>
                <p className="text-xs font-bold text-[#0F1932]">Own Balance Sheet</p>
                <p className="text-[11px] text-gray-500 mt-1">No external credit lines needed</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4 Pillars of the LRSD Edge */}
      <section className="py-24 md:py-32 px-6 md:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <div className="inline-flex items-center gap-2 mb-4">
              <span className="w-2 h-2 rounded-full bg-[#E8621A]" />
              <p className="text-xs font-bold tracking-widest text-gray-400 uppercase">
                Core Differentiators
              </p>
            </div>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-[#0F1932] tracking-tight mb-4">
              The four pillars behind our credit conviction.
            </h2>
            <p className="text-sm md:text-base text-gray-600">
              Why our underwriting model outperforms conventional rating templates for India&apos;s emerging listed and growth enterprises.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {edgePillars.map((pillar, idx) => (
              <motion.div
                key={idx}
                whileHover={{ y: -6 }}
                className="bg-[#FAF9F6] border border-gray-200/80 p-8 rounded-3xl flex flex-col justify-between min-h-[340px] hover:border-[#E8621A]/50 transition-all hover:shadow-lg"
              >
                <div>
                  <div className="flex justify-between items-center mb-6">
                    <div className="w-12 h-12 rounded-2xl bg-white border border-gray-200 flex items-center justify-center shadow-sm">
                      {pillar.icon}
                    </div>
                    <span className="text-xs font-extrabold text-gray-300">
                      {pillar.num}
                    </span>
                  </div>

                  <span className="inline-block text-[11px] font-bold text-[#E8621A] uppercase tracking-wider mb-2">
                    {pillar.badge}
                  </span>

                  <h3 className="text-lg font-bold text-[#0F1932] mb-3 leading-snug">
                    {pillar.title}
                  </h3>

                  <p className="text-xs text-gray-600 leading-relaxed">
                    {pillar.desc}
                  </p>
                </div>

                <div className="pt-4 border-t border-gray-200/60 flex items-center gap-2 text-[11px] font-semibold text-[#0F1932]">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#E8621A]" />
                  <span>Institutional Standard</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Deep Dive 1: We were investors before we were lenders */}
      <section className="py-24 md:py-32 bg-gradient-to-b from-[#FAF9F6] via-white to-[#FAF9F6] border-y border-gray-200/70 text-[#0F1932] relative overflow-hidden">
        {/* Subtle Ambient Glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[350px] bg-[#E8621A]/[0.03] rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-6 md:px-8 relative z-10">
          {/* Header & Narrative Above */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="max-w-3xl mb-14 space-y-6"
          >
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-gray-200 shadow-2xs">
              <span className="w-2 h-2 rounded-full bg-[#E8621A] animate-pulse" />
              <span className="text-[11px] font-extrabold tracking-widest uppercase text-[#E8621A]">
                Equity DNA & Anchor Pedigree
              </span>
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight leading-tight text-[#0F1932]">
              We were investors before we were lenders.
            </h2>
            
            <p className="text-xl sm:text-2xl font-bold text-[#E8621A] leading-snug">
              &ldquo;We have already underwritten these companies once — with our own equity.&rdquo;
            </p>

            <div className="space-y-4 text-sm sm:text-base text-gray-600 leading-relaxed font-normal">
              <p>
                Since 2002 the Group has been one of India&apos;s most active anchor investors in public issues and a leading provider of direct growth capital to SME and mid-cap issuers. We have read their DRHPs, met their promoters, priced their equity and held it through cycles.
              </p>
              <p>
                A lender starting from a rating table sees a thin float and a short history. We see a company we have been tracking for years. That is not a softer credit standard — it is a better-informed one.
              </p>
            </div>
          </motion.div>

          {/* Portfolio Header Above Tape */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-8 pt-8 border-t border-gray-200"
          >
            <div>
              <div className="inline-flex items-center gap-2 mb-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#E8621A]" />
                <span className="text-[11px] font-extrabold uppercase tracking-widest text-[#E8621A]">
                  Market Track Record
                </span>
                <Sparkles className="w-3.5 h-3.5 text-[#E8621A]" />
              </div>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-[#0F1932] tracking-tight">
                Portfolio Companies Anchored
              </h3>
              <p className="text-xs sm:text-sm text-gray-500 mt-1">
                Representative public market anchor investments & growth capital deployed across cycles
              </p>
            </div>

            {/* Credibility Metric Chips */}
            <div className="flex flex-wrap items-center gap-2.5 shrink-0">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-gray-200 text-xs font-bold text-[#0F1932] shadow-2xs">
                <span className="text-[#E8621A]">₹1,114 Cr+</span>
                <span className="text-gray-400 font-normal">Deployed</span>
              </div>
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#E8621A]/10 border border-[#E8621A]/30 text-xs font-bold text-[#E8621A]">
                <span>24-Year Legacy</span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Minimalist Interactive Full-Width Rolling Tape */}
        <div className="relative w-full overflow-hidden py-4 space-y-4 [mask-image:linear-gradient(to_right,transparent,black_6%,black_94%,transparent)] group/ticker">
          {/* Track 1: Moving Left */}
          <motion.div
            className="flex gap-4 w-max"
            animate={{ x: ["0%", "-50%"] }}
            transition={{ repeat: Infinity, ease: "linear", duration: 30 }}
            whileHover={{ transition: { duration: 0 } }}
          >
            {[...anchoredCompanies, ...anchoredCompanies].map((company, i) => (
              <motion.div
                key={`min-track1-${i}`}
                whileHover={{ y: -3, scale: 1.02 }}
                transition={{ duration: 0.2 }}
                className="flex items-center gap-3 px-5 py-3 rounded-full bg-white border border-gray-200/90 shadow-2xs hover:border-[#E8621A] hover:shadow-md transition-all shrink-0 cursor-default group"
              >
                <div className="w-2 h-2 rounded-full bg-[#E8621A] shadow-[0_0_8px_rgba(232,98,26,0.5)] group-hover:scale-125 transition-transform shrink-0" />
                <span className="text-xs sm:text-sm font-semibold text-[#0F1932] group-hover:text-[#E8621A] transition-colors whitespace-nowrap">
                  {company}
                </span>
              </motion.div>
            ))}
          </motion.div>

          {/* Track 2: Moving Right */}
          <motion.div
            className="flex gap-4 w-max"
            animate={{ x: ["-50%", "0%"] }}
            transition={{ repeat: Infinity, ease: "linear", duration: 34 }}
            whileHover={{ transition: { duration: 0 } }}
          >
            {[
              ...anchoredCompanies.slice(6),
              ...anchoredCompanies.slice(0, 6),
              ...anchoredCompanies.slice(6),
              ...anchoredCompanies.slice(0, 6),
            ].map((company, i) => (
              <motion.div
                key={`min-track2-${i}`}
                whileHover={{ y: -3, scale: 1.02 }}
                transition={{ duration: 0.2 }}
                className="flex items-center gap-3 px-5 py-3 rounded-full bg-white border border-gray-200/90 shadow-2xs hover:border-[#E8621A] hover:shadow-md transition-all shrink-0 cursor-default group"
              >
                <div className="w-2 h-2 rounded-full bg-[#E8621A] shadow-[0_0_8px_rgba(232,98,26,0.5)] group-hover:scale-125 transition-transform shrink-0" />
                <span className="text-xs sm:text-sm font-semibold text-[#0F1932] group-hover:text-[#E8621A] transition-colors whitespace-nowrap">
                  {company}
                </span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Deep Dive 2: Fastest Turnaround — Speed Without Compromise */}
      <section className="py-24 md:py-32 px-6 md:px-8 bg-white border-b border-gray-100 relative overflow-hidden">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="grid lg:grid-cols-12 gap-10 items-start mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="lg:col-span-7 space-y-6"
            >
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FAF9F6] border border-gray-200 shadow-2xs">
                <span className="w-2 h-2 rounded-full bg-[#E8621A] animate-pulse" />
                <span className="text-[11px] font-extrabold tracking-widest text-[#E8621A] uppercase">
                  Velocity & Certainty
                </span>
              </div>

              <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#0F1932] tracking-tight leading-tight">
                Fastest Turnaround:
                <br />
                <span className="text-[#E8621A]">Speed without compromise.</span>
              </h2>

              <p className="text-base sm:text-lg text-gray-700 leading-relaxed font-normal">
                Most of a credit decision is spent learning the company. <strong className="text-[#0F1932] font-extrabold">We already know it.</strong> Since 2002 the Group has anchored these companies&apos; public issues, read their offer documents, met their promoters and held their stock through cycles — so we start where other lenders reach in week two.
              </p>

              <div className="border-l-4 border-[#E8621A] pl-5 py-2 bg-[#FAF9F6] rounded-r-xl">
                <p className="text-sm sm:text-base font-bold text-[#0F1932] italic">
                  &ldquo;The speed comes out of the front end, not out of the file. Same security, same covenants, same guarantees.&rdquo;
                </p>
              </div>
            </motion.div>

            {/* Right Speed Metric Card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="lg:col-span-5 bg-[#0F1932] text-white p-8 sm:p-10 rounded-3xl shadow-2xl relative overflow-hidden flex flex-col justify-between min-h-[320px]"
            >
              <div className="flex justify-between items-start mb-6">
                <div>
                  <span className="text-[10px] font-extrabold uppercase tracking-widest text-[#E8621A] block mb-1">
                    Standard Execution Velocity
                  </span>
                  <p className="text-3xl sm:text-4xl font-extrabold text-white">48 Hours</p>
                </div>
                <div className="w-12 h-12 rounded-2xl bg-[#E8621A]/20 border border-[#E8621A]/40 flex items-center justify-center text-[#E8621A]">
                  <Zap className="w-6 h-6" />
                </div>
              </div>

              <div className="space-y-3 py-4 border-y border-white/10 text-xs">
                <div className="flex items-center justify-between">
                  <span className="text-gray-300">Term Sheet & Sanction</span>
                  <span className="text-[#E8621A] font-bold">Day 1</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-300">Pledge / Escrow & Disbursement</span>
                  <span className="text-[#E8621A] font-bold">Day 2</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-300">Traditional Bank Turnaround</span>
                  <span className="text-gray-400 font-semibold line-through">45–60 Days</span>
                </div>
              </div>

              <div className="pt-4 flex items-center gap-2 text-xs text-gray-300 font-medium">
                <CheckCircle2 className="w-4 h-4 text-[#E8621A] shrink-0" />
                <span>100% proprietary capital • Zero third-party syndicate lag</span>
              </div>
            </motion.div>
          </div>

          {/* Animated 4-Stage Connected Flow Diagram */}
          <div className="mb-20">
            <div className="mb-10 flex flex-col sm:flex-row sm:items-end justify-between gap-4">
              <div>
                <div className="inline-flex items-center gap-2 mb-2">
                  <span className="w-2 h-2 rounded-full bg-[#E8621A] animate-pulse" />
                  <span className="text-xs font-bold uppercase tracking-widest text-[#E8621A]">
                    Step-by-Step Underwriting Journey
                  </span>
                </div>
                <h3 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#0F1932] tracking-tight">
                  How We Move from Inquiry to Capital in 48 Hours
                </h3>
              </div>
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FAF9F6] border border-gray-200 text-xs font-semibold text-gray-600 shadow-2xs">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                <span>Parallel Execution • Single Underwriting Committee</span>
              </div>
            </div>

            {/* Diagram Container */}
            <div className="relative">
              {/* Desktop Connecting Flow Line Behind Nodes */}
              <div className="hidden lg:block absolute top-[24px] left-[6%] right-[6%] h-1 bg-gray-200 z-0 rounded-full overflow-hidden">
                {/* Animated Flow Beam Traveling Along Pipeline */}
                <motion.div
                  className="h-full w-32 bg-gradient-to-r from-transparent via-[#E8621A] to-transparent shadow-[0_0_12px_#E8621A]"
                  animate={{ x: ["-100%", "900%"] }}
                  transition={{ repeat: Infinity, ease: "linear", duration: 3.5 }}
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative z-10">
                {[
                  {
                    step: "01",
                    time: "Hour 0 – 4",
                    title: "Direct Mandate Alignment",
                    desc: "Direct evaluation with the investment committee. We assess promoter background and capital requirements immediately.",
                    icon: <Zap className="w-5 h-5 text-white" />,
                    tag: "Initial Review"
                  },
                  {
                    step: "02",
                    time: "Day 1 (Morning)",
                    title: "Term Sheet & Structure",
                    desc: "Issuance of structured term sheet. 24-year market context eliminates weeks of introductory DRHP research.",
                    icon: <FileCheck2 className="w-5 h-5 text-white" />,
                    tag: "Bespoke Structuring"
                  },
                  {
                    step: "03",
                    time: "Day 1 (Afternoon)",
                    title: "Documentation & Sanction",
                    desc: "Standardized loan agreement, depository pledge (NSDL/CDSL) & escrow setup executed in parallel.",
                    icon: <ShieldCheck className="w-5 h-5 text-white" />,
                    tag: "Rapid Legal"
                  },
                  {
                    step: "04",
                    time: "Day 2",
                    title: "100% Fund Disbursement",
                    desc: "Funds disbursed directly to borrower account off our balance sheet with active risk surveillance.",
                    icon: <TrendingUp className="w-5 h-5 text-white" />,
                    tag: "Direct Capital"
                  },
                ].map((stage, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 25 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.45, delay: idx * 0.12 }}
                    whileHover={{ y: -8 }}
                    className="flex flex-col relative group"
                  >
                    {/* Top Flow Node Circle On Pipeline */}
                    <div className="flex items-center gap-3 mb-5">
                      <div className="relative">
                        <div className="w-12 h-12 rounded-2xl bg-[#0F1932] border-2 border-white shadow-md flex items-center justify-center text-white group-hover:bg-[#E8621A] group-hover:scale-110 group-hover:shadow-[0_0_15px_rgba(232,98,26,0.4)] transition-all duration-300">
                          {stage.icon}
                        </div>
                        <span className="absolute -top-1.5 -right-1.5 w-5 h-5 rounded-full bg-[#E8621A] text-white text-[10px] font-black flex items-center justify-center shadow-xs">
                          {stage.step}
                        </span>
                      </div>

                      <div>
                        <span className="text-[10px] font-extrabold tracking-widest uppercase text-[#E8621A] block">
                          STAGE {stage.step}
                        </span>
                        <span className="text-xs font-bold text-[#0F1932]">
                          {stage.time}
                        </span>
                      </div>
                    </div>

                    {/* Flow Card Body */}
                    <div className="bg-[#FAF9F6] border border-gray-200/90 rounded-3xl p-6 sm:p-7 flex flex-col justify-between flex-1 shadow-sm hover:border-[#E8621A] hover:shadow-xl hover:bg-white transition-all">
                      <div>
                        <h4 className="text-base font-bold text-[#0F1932] group-hover:text-[#E8621A] transition-colors leading-snug mb-3">
                          {stage.title}
                        </h4>

                        <p className="text-xs text-gray-600 leading-relaxed font-normal">
                          {stage.desc}
                        </p>
                      </div>

                      <div className="pt-4 mt-6 border-t border-gray-200/80 flex items-center justify-between text-[11px] font-bold uppercase tracking-wider text-gray-400 group-hover:text-[#E8621A] transition-colors">
                        <span className="px-2.5 py-1 rounded-full bg-white border border-gray-200/80 shadow-2xs group-hover:border-[#E8621A]/40 transition-colors">
                          {stage.tag}
                        </span>
                        <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1.5 transition-transform" />
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>

          {/* 3 Speed Enablers / Why We Can Do This */}
          <div className="bg-[#FAF9F6] border border-gray-200 rounded-3xl p-8 sm:p-12 shadow-sm">
            <div className="text-center max-w-2xl mx-auto mb-10">
              <span className="text-xs font-bold uppercase tracking-widest text-[#E8621A] block mb-2">
                Underwriting Mechanics
              </span>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-[#0F1932] tracking-tight">
                Three Reasons Why LRSD Moves 20x Faster
              </h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white p-6 sm:p-7 rounded-2xl border border-gray-200 shadow-2xs hover:border-[#E8621A]/50 transition-all">
                <div className="w-8 h-8 rounded-xl bg-[#FAF9F6] border border-gray-200 flex items-center justify-center mb-4 text-[#E8621A]">
                  <Eye className="w-4.5 h-4.5" />
                </div>
                <h4 className="font-bold text-sm text-[#0F1932] mb-2">
                  1. Pre-Underwritten Knowledge
                </h4>
                <p className="text-xs text-gray-600 leading-relaxed">
                  24 years of anchor investing means we have already researched the management, company history, and market sector before you even call.
                </p>
              </div>

              <div className="bg-white p-6 sm:p-7 rounded-2xl border border-gray-200 shadow-2xs hover:border-[#E8621A]/50 transition-all">
                <div className="w-8 h-8 rounded-xl bg-[#FAF9F6] border border-gray-200 flex items-center justify-center mb-4 text-[#E8621A]">
                  <Landmark className="w-4.5 h-4.5" />
                </div>
                <h4 className="font-bold text-sm text-[#0F1932] mb-2">
                  2. 100% Own Balance Sheet
                </h4>
                <p className="text-xs text-gray-600 leading-relaxed">
                  We lend our own retained equity. There are no syndicate banks to consult, no LP permissions to seek, and no second-guessing committees.
                </p>
              </div>

              <div className="bg-white p-6 sm:p-7 rounded-2xl border border-gray-200 shadow-2xs hover:border-[#E8621A]/50 transition-all">
                <div className="w-8 h-8 rounded-xl bg-[#FAF9F6] border border-gray-200 flex items-center justify-center mb-4 text-[#E8621A]">
                  <Repeat className="w-4.5 h-4.5" />
                </div>
                <h4 className="font-bold text-sm text-[#0F1932] mb-2">
                  3. Parallel Processing
                </h4>
                <p className="text-xs text-gray-600 leading-relaxed">
                  Legal documentation, depository pledge creation, and background verification are processed in parallel, not sequentially.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Comparison Section */}
      <section className="py-24 md:py-32 px-6 md:px-8 bg-[#FAF9F6]">
        <div className="max-w-7xl mx-auto">
          <div className="mb-14">
            <div className="inline-flex items-center gap-2 mb-4">
              <span className="w-2 h-2 rounded-full bg-[#E8621A]" />
              <p className="text-xs font-bold tracking-widest text-gray-400 uppercase">
                The Distinction
              </p>
            </div>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-[#0F1932] tracking-tight">
              Traditional Lenders vs. LRSD Capital
            </h2>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full bg-white rounded-3xl overflow-hidden shadow-sm border border-gray-200 text-left border-collapse">
              <thead>
                <tr className="bg-[#0F1932] text-white">
                  <th className="p-6 text-xs font-bold uppercase tracking-wider w-1/4">Underwriting Dimension</th>
                  <th className="p-6 text-xs font-bold uppercase tracking-wider text-gray-300 w-3/8">Traditional Lenders & Banks</th>
                  <th className="p-6 text-xs font-bold uppercase tracking-wider text-[#E8621A] w-3/8">LRSD Capital Advantage</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100 text-xs sm:text-sm">
                {comparisonData.map((row, i) => (
                  <tr key={i} className="hover:bg-gray-50/70 transition-colors">
                    <td className="p-6 font-bold text-[#0F1932] bg-[#FAF9F6]/50">
                      {row.feature}
                    </td>
                    <td className="p-6 text-gray-600">
                      <div className="flex items-start gap-2">
                        <XCircle className="w-4 h-4 text-gray-400 shrink-0 mt-0.5" />
                        <span>{row.traditional}</span>
                      </div>
                    </td>
                    <td className="p-6 text-[#0F1932] font-semibold bg-orange-50/20">
                      <div className="flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-[#E8621A] shrink-0 mt-0.5" />
                        <span>{row.lrsd}</span>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
