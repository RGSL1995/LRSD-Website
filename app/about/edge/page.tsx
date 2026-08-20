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
  Sparkles
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
      <section
        className="py-24 md:py-32 px-6 md:px-8 text-white relative overflow-hidden"
        style={{
          background: "radial-gradient(120% 120% at 85% 15%, #4A2211 0%, #2E1308 55%, #180903 100%)",
        }}
      >
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid lg:grid-cols-12 gap-12 items-start mb-16">
            <div className="lg:col-span-6 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/15 backdrop-blur-md">
                <span className="w-2 h-2 rounded-full bg-[#E8621A]" />
                <span className="text-[11px] font-bold tracking-widest uppercase text-white/90">
                  Equity DNA
                </span>
              </div>

              <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight leading-tight text-white">
                We were investors before we were lenders.
              </h2>
              
              <p className="text-xl sm:text-2xl font-semibold text-[#E8621A] leading-snug">
                &ldquo;We have already underwritten these companies once — with our own equity.&rdquo;
              </p>

              <div className="space-y-4 text-sm sm:text-base text-white/80 leading-relaxed font-normal">
                <p>
                  Since 2002 the Group has been one of India&apos;s most active anchor investors in public issues and a leading provider of direct growth capital to SME and mid-cap issuers. We have read their DRHPs, met their promoters, priced their equity and held it through cycles.
                </p>
                <p>
                  A lender starting from a rating table sees a thin float and a short history. We see a company we have been tracking for years. That is not a softer credit standard — it is a better-informed one.
                </p>
              </div>
            </div>

            {/* Anchored Portfolio Highlights */}
            <div className="lg:col-span-6 bg-black/30 backdrop-blur-md border border-white/10 p-8 sm:p-10 rounded-3xl">
              <div className="flex items-center justify-between mb-6">
                <div>
                  <h3 className="text-lg font-bold text-white">
                    Portfolio Companies Anchored
                  </h3>
                  <p className="text-xs text-white/60">
                    Representative public market anchor investments & growth capital
                  </p>
                </div>
                <Sparkles className="w-5 h-5 text-[#E8621A]" />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {anchoredCompanies.map((company, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-3 p-3.5 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-[#E8621A]/40 transition-all"
                  >
                    <Building className="w-4 h-4 text-[#E8621A] shrink-0" />
                    <span className="text-xs font-semibold text-white/90 leading-tight">
                      {company}
                    </span>
                  </div>
                ))}
              </div>

              <div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-between text-xs text-white/70">
                <span>Over ₹1,114 Cr deployed into SME & mid-caps</span>
                <span className="text-[#E8621A] font-bold">Direct Group Pedigree</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Deep Dive 2: Fastest Turnaround — Speed Without Compromise */}
      <section className="py-24 md:py-32 px-6 md:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="bg-[#FAF9F6] border border-gray-200 rounded-3xl p-8 sm:p-12 lg:p-16 shadow-sm">
            <div className="grid lg:grid-cols-12 gap-12 items-center">
              <div className="lg:col-span-7 space-y-6">
                <div className="inline-flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#E8621A]" />
                  <p className="text-xs font-bold tracking-widest text-gray-400 uppercase">
                    Velocity & Certainty
                  </p>
                </div>

                <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#0F1932] tracking-tight leading-tight">
                  Fastest Turnaround: Speed without compromise.
                </h2>

                <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
                  Most of a credit decision is spent learning the company. <strong className="text-[#0F1932] font-extrabold">We already know it.</strong> Since 2002 the Group has anchored these companies&apos; public issues, read their offer documents, met their promoters and held their stock through cycles — so we start where other lenders reach in week two.
                </p>

                <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
                  The rest is structure. We lend our own money, so there is no funding line to check and no committee waiting on another committee. The people who know the company are the people who approve the file. We have completed documentation on day one and disbursed on day two.
                </p>

                {/* Callout Quote */}
                <div className="border-l-4 border-[#E8621A] pl-5 py-2 bg-white rounded-r-xl">
                  <p className="text-sm sm:text-base font-bold text-[#0F1932] italic">
                    &ldquo;The speed comes out of the front end, not out of the file. Same security, same covenants, same guarantees.&rdquo;
                  </p>
                </div>
              </div>

              {/* Visual Workflow comparison */}
              <div className="lg:col-span-5 space-y-4">
                <div className="bg-[#0F1932] text-white p-6 sm:p-8 rounded-2xl shadow-xl">
                  <div className="flex items-center gap-3 mb-4">
                    <Zap className="w-6 h-6 text-[#E8621A]" />
                    <h3 className="font-bold text-base text-white">
                      The LRSD Execution Cycle
                    </h3>
                  </div>
                  
                  <div className="space-y-4 text-xs">
                    <div className="p-3.5 rounded-xl bg-white/10 border border-white/10 flex items-start gap-3">
                      <span className="w-6 h-6 rounded-full bg-[#E8621A] text-white flex items-center justify-center font-bold shrink-0 text-[11px]">
                        1
                      </span>
                      <div>
                        <p className="font-bold text-white">Day 1: Term Sheet & Documentation</p>
                        <p className="text-gray-300 mt-0.5">Pre-analyzed company background eliminates weeks of research.</p>
                      </div>
                    </div>

                    <div className="p-3.5 rounded-xl bg-white/10 border border-white/10 flex items-start gap-3">
                      <span className="w-6 h-6 rounded-full bg-[#E8621A] text-white flex items-center justify-center font-bold shrink-0 text-[11px]">
                        2
                      </span>
                      <div>
                        <p className="font-bold text-white">Day 2: Final Sanction & Disbursement</p>
                        <p className="text-gray-300 mt-0.5">Own balance sheet eliminates third-party bank syndication delays.</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="p-6 rounded-2xl bg-white border border-gray-200">
                  <div className="flex items-center gap-2 mb-2 text-xs font-bold text-gray-400 uppercase tracking-wider">
                    <Clock className="w-4 h-4 text-gray-400" />
                    <span>Traditional Banking Cycle</span>
                  </div>
                  <p className="text-xs text-gray-600 leading-relaxed">
                    45–60 days of repetitive due diligence, branch-level queries, and multi-tier central committee approvals.
                  </p>
                </div>
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
