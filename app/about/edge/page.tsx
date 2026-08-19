'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import Navbar, { ActionButton } from '@/components/Navbar';
import Footer from '@/components/Footer';
import { TorusWireframe, SphereWireframe, GyroWireframe, SilkWaves } from '@/components/SharedWireframes';
import { Zap, Clock, ShieldCheck, Cpu, ArrowRight, CheckCircle2, XCircle } from 'lucide-react';

export default function LRSDEdgePage() {
  const comparisonData = [
    {
      feature: "Underwriting Basis",
      traditional: "Standardized balance sheet formulas ignoring sector nuances & promoter track record",
      lrsd: "Proprietary market intelligence & holistic cash flow potential from 20+ years of equity research",
    },
    {
      feature: "Turnaround Velocity",
      traditional: "45–60 days protracted decision and disbursement cycle across multiple committee layers",
      lrsd: "7–14 day rapid underwriting and disbursement turnaround led by agile investment team",
    },
    {
      feature: "Collateral & Valuation",
      traditional: "Rigid mechanical valuation formulas that penalize thinly-traded SME securities",
      lrsd: "Customized asset backing & fundamental business valuation beyond mere exchange volumes",
    },
    {
      feature: "Covenant Structure",
      traditional: "Passive, punitive margin calls and rigid monthly EMIs unrelated to cash cycles",
      lrsd: "Flexible milestone amortizations, customized escrow waterfalls, and borrower alignment",
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
              The LRSD Advantage
            </p>
          </div>

          <div className="grid lg:grid-cols-[1.3fr_0.7fr] gap-12 items-start">
            <div>
              <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-[-0.03em] leading-[1.05] text-[#0F1932] mb-8">
                Where others see constraints,{" "}
                <span className="text-[#E8621A]">we see enterprise value.</span>
              </h1>

              <p className="text-lg md:text-xl text-gray-700 leading-relaxed font-normal mb-8 max-w-2xl">
                The LRSD Edge combines three decades of group equity intelligence with rapid credit decisioning to deliver non-template, bespoke financing for India&apos;s growth engines.
              </p>

              <div className="flex flex-wrap gap-4">
                <ActionButton label="Discuss your requirement" href="/#contact" />
                <Link
                  href="/products/loan-against-shares"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border border-gray-300 text-xs md:text-sm font-bold text-gray-700 hover:bg-white transition-colors"
                >
                  <span>View Products</span>
                  <ArrowRight className="w-4 h-4 text-[#E8621A]" />
                </Link>
              </div>
            </div>

            {/* Quick Stats Highlights */}
            <div className="grid grid-cols-2 gap-4">
              <div className="p-6 rounded-2xl bg-white border border-gray-200 shadow-sm">
                <p className="text-3xl font-extrabold text-[#E8621A] mb-1">7–14</p>
                <p className="text-xs font-bold text-[#0F1932]">Days Turnaround</p>
                <p className="text-[11px] text-gray-500 mt-1">From term sheet to final fund disbursement</p>
              </div>

              <div className="p-6 rounded-2xl bg-white border border-gray-200 shadow-sm">
                <p className="text-3xl font-extrabold text-[#0F1932] mb-1">Up to 65%</p>
                <p className="text-xs font-bold text-[#0F1932]">Loan-To-Value</p>
                <p className="text-[11px] text-gray-500 mt-1">SME & Mainboard listed equity shares</p>
              </div>

              <div className="p-6 rounded-2xl bg-white border border-gray-200 shadow-sm">
                <p className="text-3xl font-extrabold text-[#0F1932] mb-1">₹1–100 Cr</p>
                <p className="text-xs font-bold text-[#0F1932]">Facility Size</p>
                <p className="text-[11px] text-gray-500 mt-1">Tailored for mid-market corporate needs</p>
              </div>

              <div className="p-6 rounded-2xl bg-white border border-gray-200 shadow-sm">
                <p className="text-3xl font-extrabold text-[#E8621A] mb-1">100%</p>
                <p className="text-xs font-bold text-[#0F1932]">Secured Credit</p>
                <p className="text-[11px] text-gray-500 mt-1">Asset-backed underwriting rigor</p>
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
                Core Capabilities
              </p>
            </div>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-[#0F1932] tracking-tight mb-4">
              The four pillars behind our credit conviction.
            </h2>
            <p className="text-sm md:text-base text-gray-600">
              How our underwriting architecture bridges the gap between conventional banking constraints and real corporate potential.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <motion.div
              whileHover={{ y: -6 }}
              className="bg-[#FAF9F6] border border-gray-200 p-8 rounded-3xl flex flex-col justify-between min-h-[300px]"
            >
              <div>
                <div className="w-12 h-12 rounded-2xl bg-white border border-gray-200 flex items-center justify-center text-[#E8621A] mb-6 shadow-sm">
                  <Cpu className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-[#0F1932] mb-3">
                  Proprietary Group Intelligence
                </h3>
                <p className="text-xs text-gray-600 leading-relaxed">
                  Three decades of researching Indian small-cap and SME companies via Rajasthan Global Securities Group allows us to look beyond rigid credit scores.
                </p>
              </div>
              <span className="text-[10px] font-extrabold uppercase tracking-widest text-[#E8621A] mt-6">
                Pillar 01
              </span>
            </motion.div>

            <motion.div
              whileHover={{ y: -6 }}
              className="bg-[#0F1932] text-white border border-[#0F1932] p-8 rounded-3xl flex flex-col justify-between min-h-[300px] shadow-xl"
            >
              <div>
                <div className="w-12 h-12 rounded-2xl bg-white/10 flex items-center justify-center text-[#E8621A] mb-6">
                  <Clock className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-white mb-3">
                  7–14 Day Rapid Velocity
                </h3>
                <p className="text-xs text-gray-300 leading-relaxed">
                  Direct engagement with our investment and underwriting committee eliminates protracted multi-tier approvals, disbursing capital when it matters most.
                </p>
              </div>
              <span className="text-[10px] font-extrabold uppercase tracking-widest text-[#E8621A] mt-6">
                Pillar 02
              </span>
            </motion.div>

            <motion.div
              whileHover={{ y: -6 }}
              className="bg-[#FAF9F6] border border-gray-200 p-8 rounded-3xl flex flex-col justify-between min-h-[300px]"
            >
              <div>
                <div className="w-12 h-12 rounded-2xl bg-white border border-gray-200 flex items-center justify-center text-[#E8621A] mb-6 shadow-sm">
                  <Zap className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-尊重-[#0F1932] mb-3">
                  Cash Flow Waterfall Structuring
                </h3>
                <p className="text-xs text-gray-600 leading-relaxed">
                  We structure repayments around business milestones and cash realizations — including bullet structures, moratoriums, and flexible amortizations.
                </p>
              </div>
              <span className="text-[10px] font-extrabold uppercase tracking-widest text-[#E8621A] mt-6">
                Pillar 03
              </span>
            </motion.div>

            <motion.div
              whileHover={{ y: -6 }}
              className="bg-[#FAF9F6] border border-gray-200 p-8 rounded-3xl flex flex-col justify-between min-h-[300px]"
            >
              <div>
                <div className="w-12 h-12 rounded-2xl bg-white border border-gray-200 flex items-center justify-center text-[#E8621A] mb-6 shadow-sm">
                  <ShieldCheck className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-[#0F1932] mb-3">
                  Value-Add Alignment
                </h3>
                <p className="text-xs text-gray-600 leading-relaxed">
                  We operate as institutional growth partners. Our covenants protect the enterprise rather than forcing fire-sales during temporary market fluctuations.
                </p>
              </div>
              <span className="text-[10px] font-extrabold uppercase tracking-widest text-[#E8621A] mt-6">
                Pillar 04
              </span>
            </motion.div>
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
