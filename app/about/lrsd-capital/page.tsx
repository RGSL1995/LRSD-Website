'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import Navbar, { ActionButton } from '@/components/Navbar';
import Footer from '@/components/Footer';
import { TorusWireframe, SphereWireframe, GyroWireframe, SilkWaves } from '@/components/SharedWireframes';
import { Building2, ShieldCheck, TrendingUp, Award, ArrowRight, CheckCircle2, Landmark, Coins, Scale, Sparkles } from 'lucide-react';

export default function AboutLRSDCapitalPage() {
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
              About LRSD Capital
            </p>
          </div>

          <div className="grid lg:grid-cols-[1.3fr_0.7fr] gap-12 items-start">
            <div>
              <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-[-0.03em] leading-[1.05] text-[#0F1932] mb-8">
                Built for the gap in{" "}
                <span className="text-[#E8621A]">India&apos;s credit architecture.</span>
              </h1>

              <p className="text-lg md:text-xl text-gray-700 leading-relaxed font-normal mb-8 max-w-2xl">
                We are a secured lender to India&apos;s emerging listed and pre-IPO companies, their promoters, and their supply chains — underwritten with what the Rajasthan Global Securities Group has learned about these companies since 2002.
              </p>

              <div className="flex flex-wrap gap-4">
                <ActionButton label="Explore credit solutions" href="/products/loan-against-shares" />
                <Link
                  href="/about/edge"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border border-gray-300 text-xs md:text-sm font-bold text-gray-700 hover:bg-white transition-colors"
                >
                  <span>The LRSD Edge</span>
                  <ArrowRight className="w-4 h-4 text-[#E8621A]" />
                </Link>
              </div>
            </div>

            {/* Quick Summary Card */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="bg-[#0F1932] text-white p-8 sm:p-10 rounded-3xl shadow-xl relative overflow-hidden"
            >
              <div className="flex justify-between items-center mb-6">
                <span className="text-xs font-extrabold uppercase tracking-widest text-[#E8621A]">
                  Institutional Standing
                </span>
                <TorusWireframe className="w-10 h-10" color="#E8621A" />
              </div>
              <p className="text-sm text-gray-200 leading-relaxed mb-8">
                When traditional banks decline for want of a rating and large NBFCs decline for want of ticket size, LRSD Capital delivers structured, secured capital with 24 years of zero borrowed debt.
              </p>
              <div className="pt-6 border-t border-white/10 grid grid-cols-2 gap-4">
                <div>
                  <p className="text-2xl sm:text-3xl font-extrabold text-white">₹3,500 Cr</p>
                  <p className="text-[11px] text-gray-400 mt-0.5">Group Net Worth (Market Value)</p>
                </div>
                <div>
                  <p className="text-2xl sm:text-3xl font-extrabold text-[#E8621A]">24 Years</p>
                  <p className="text-[11px] text-gray-400 mt-0.5">Retained Capital Legacy</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* The Market Gap Section */}
      <section className="py-24 md:py-32 px-6 md:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-12 gap-12 items-start">
            <div className="lg:col-span-4">
              <div className="sticky top-28">
                <div className="inline-flex items-center gap-2 mb-4">
                  <span className="w-2 h-2 rounded-full bg-[#E8621A]" />
                  <p className="text-xs font-bold tracking-widest text-gray-400 uppercase">
                    The Problem We Solve
                  </p>
                </div>
                <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0F1932] tracking-tight leading-tight mb-6">
                  Where traditional credit models fail emerging enterprises.
                </h2>
                <p className="text-sm text-gray-600 leading-relaxed mb-6">
                  Neither decision to decline an SME credit facility has anything to do with whether the business can repay. It is an artifact of rigid formulas and mechanical box-checking.
                </p>
                <div className="p-6 rounded-2xl bg-[#FAF9F6] border border-gray-200">
                  <p className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">
                    Our Direct Mandate
                  </p>
                  <p className="text-xs font-semibold text-[#0F1932] leading-relaxed">
                    100% Secured Lending • ₹1 Cr to ₹100 Cr off our balance sheet • ₹200 Cr Developer Credit • Zero Retail Exposure.
                  </p>
                </div>
              </div>
            </div>

            <div className="lg:col-span-8 space-y-8">
              {/* Highlighted Manifesto Box */}
              <div className="bg-[#FAF9F6] border-l-4 border-[#E8621A] p-8 sm:p-10 rounded-2xl shadow-sm space-y-6">
                <p className="text-base sm:text-lg md:text-xl text-[#0F1932] leading-relaxed font-normal">
                  India now has more than <strong className="font-extrabold text-[#0F1932]">1,200 companies listed on its SME exchanges</strong>, and several hundred more small-caps on the mainboard. Almost none of them carry a credit rating. Most trade thinly. Their promoters&apos; wealth sits entirely in their own stock.
                </p>
                <p className="text-base sm:text-lg md:text-xl text-[#0F1932] leading-relaxed font-normal">
                  When one of these companies needs credit, <span className="text-[#E8621A] font-bold">a bank declines for want of a rating</span> and <span className="text-[#E8621A] font-bold">a large NBFC declines for want of ticket size</span> — and neither decision has anything to do with whether the business can repay.
                </p>
                <div className="pt-4 border-t border-gray-200/80">
                  <p className="text-base sm:text-lg md:text-xl text-[#0F1932] leading-relaxed font-semibold">
                    LRSD Capital was built for that gap. We are a secured lender to India&apos;s emerging listed and pre-IPO companies, their promoters and their supply chains, underwritten with what the Rajasthan Global Securities Group has learned about these companies since 2002.
                  </p>
                </div>
              </div>

              {/* 3 Pillars of Solution */}
              <div className="grid sm:grid-cols-3 gap-6 pt-4">
                <div className="p-6 rounded-2xl bg-white border border-gray-200 shadow-sm">
                  <div className="w-10 h-10 rounded-xl bg-[#FAF9F6] border border-gray-200 flex items-center justify-center mb-4 text-[#E8621A]">
                    <ShieldCheck className="w-5 h-5" />
                  </div>
                  <h3 className="font-bold text-sm text-[#0F1932] mb-2">
                    Collateralized Security
                  </h3>
                  <p className="text-xs text-gray-600 leading-relaxed">
                    First charge on equity shares, commercial receivables, or real estate with active risk surveillance.
                  </p>
                </div>

                <div className="p-6 rounded-2xl bg-white border border-gray-200 shadow-sm">
                  <div className="w-10 h-10 rounded-xl bg-[#FAF9F6] border border-gray-200 flex items-center justify-center mb-4 text-[#E8621A]">
                    <TrendingUp className="w-5 h-5" />
                  </div>
                  <h3 className="font-bold text-sm text-[#0F1932] mb-2">
                    Cash Flow Structuring
                  </h3>
                  <p className="text-xs text-gray-600 leading-relaxed">
                    Disbursements against milestones and repayments mapped precisely to real business receipts.
                  </p>
                </div>

                <div className="p-6 rounded-2xl bg-white border border-gray-200 shadow-sm">
                  <div className="w-10 h-10 rounded-xl bg-[#FAF9F6] border border-gray-200 flex items-center justify-center mb-4 text-[#E8621A]">
                    <Award className="w-5 h-5" />
                  </div>
                  <h3 className="font-bold text-sm text-[#0F1932] mb-2">
                    Zero Write-Off Record
                  </h3>
                  <p className="text-xs text-gray-600 leading-relaxed">
                    Proven discipline across 24 years through every market and macroeconomic credit cycle.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The Ground Behind Us — Rajasthan Global Securities Group */}
      <section
        className="py-24 md:py-32 px-6 md:px-8 text-white relative overflow-hidden"
        style={{
          background: "radial-gradient(120% 120% at 85% 15%, #4A2211 0%, #2E1308 55%, #180903 100%)",
        }}
      >
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/15 backdrop-blur-md mb-8">
            <span className="w-2 h-2 rounded-full bg-[#E8621A]" />
            <span className="text-[11px] font-bold tracking-widest uppercase text-white/90">
              The Ground Behind Us
            </span>
          </div>

          <div className="grid lg:grid-cols-12 gap-12 items-start mb-16">
            <div className="lg:col-span-7 space-y-6">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight leading-tight text-white">
                Rajasthan Global Securities Group
              </h2>
              <div className="w-12 h-1 bg-[#E8621A] rounded-full" />
              
              <p className="text-xl sm:text-2xl font-bold text-[#E8621A] leading-snug">
                Twenty-four years of capital that was never borrowed.
              </p>

              <div className="space-y-4 text-sm sm:text-base text-white/80 leading-relaxed font-normal">
                <p>
                  Rajasthan Global Securities Private Limited was founded in 2002 by <strong className="text-white font-semibold">Mr. Lalit Dua</strong> with equity capital of ₹29.57 lakh. It is today an RBI-registered Middle Layer NBFC and Investment & Credit Company, with a net worth of approximately <strong className="text-white font-semibold">₹3,500 crore at market value</strong>.
                </p>
                <p>
                  That net worth was built entirely from retained earnings. <strong className="text-white font-semibold">No external equity. No borrowings. No public deposits. No marketing.</strong> Every rupee the Group lends is a rupee it earned and chose not to distribute.
                </p>
                <p>
                  Across those twenty-four years the Group became one of India&apos;s most active anchor investors in public issues, and deployed direct growth capital into hundreds of Indian companies — including approximately <strong className="text-white font-semibold">₹1,114 crore into SME and mid-cap issuers</strong>, and approximately <strong className="text-white font-semibold">₹405 crore into the qualified institutional placements of twelve public-sector banks</strong>.
                </p>
                <p className="text-white font-medium pt-2 border-t border-white/10">
                  LRSD Capital is the Group&apos;s lending arm. It carries forward that balance sheet, that credit discipline, and — more valuable than either — that knowledge of the companies it lends to.
                </p>
              </div>
            </div>

            {/* 4 Stat Cards */}
            <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="bg-black/30 backdrop-blur-md border border-white/10 p-6 sm:p-7 rounded-2xl text-center flex flex-col justify-center">
                <p className="text-3xl sm:text-4xl font-extrabold text-[#E8621A] mb-1">₹3,500 Cr</p>
                <p className="text-xs font-bold text-white uppercase tracking-wider">Group Net Worth</p>
                <p className="text-[11px] text-white/60 mt-1">At market value, 100% retained earnings</p>
              </div>

              <div className="bg-black/30 backdrop-blur-md border border-white/10 p-6 sm:p-7 rounded-2xl text-center flex flex-col justify-center">
                <p className="text-3xl sm:text-4xl font-extrabold text-white mb-1">2002</p>
                <p className="text-xs font-bold text-white uppercase tracking-wider">Founded by Lalit Dua</p>
                <p className="text-[11px] text-white/60 mt-1">Started with ₹29.57 lakh equity capital</p>
              </div>

              <div className="bg-black/30 backdrop-blur-md border border-white/10 p-6 sm:p-7 rounded-2xl text-center flex flex-col justify-center">
                <p className="text-3xl sm:text-4xl font-extrabold text-white mb-1">₹1,114 Cr</p>
                <p className="text-xs font-bold text-white uppercase tracking-wider">SME & Mid-Cap Growth</p>
                <p className="text-[11px] text-white/60 mt-1">Directly deployed into Indian issuers</p>
              </div>

              <div className="bg-black/30 backdrop-blur-md border border-white/10 p-6 sm:p-7 rounded-2xl text-center flex flex-col justify-center">
                <p className="text-3xl sm:text-4xl font-extrabold text-[#E8621A] mb-1">₹405 Cr</p>
                <p className="text-xs font-bold text-white uppercase tracking-wider">PSB QIP Deployments</p>
                <p className="text-[11px] text-white/60 mt-1">Across 12 public-sector banks</p>
              </div>

              <div className="sm:col-span-2 bg-black/40 backdrop-blur-md border border-white/10 p-6 rounded-2xl">
                <div className="flex items-center gap-3 mb-2">
                  <Landmark className="w-5 h-5 text-[#E8621A]" />
                  <p className="text-xs font-bold uppercase tracking-wider text-white">RBI Middle Layer NBFC</p>
                </div>
                <p className="text-xs text-white/70 leading-relaxed">
                  Investment & Credit Company (ICC) with strict regulatory oversight, scale-based governance, and Zero Non-Performing Assets.
                </p>
              </div>
            </div>
          </div>

          <div className="p-8 sm:p-12 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-md flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="text-xl font-bold text-white mb-2">
                Explore our underwriting advantages
              </h3>
              <p className="text-xs text-white/70">
                Learn why proprietary market intelligence gives us a decisive edge in turnaround velocity and flexible structures.
              </p>
            </div>
            <Link
              href="/about/edge"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#E8621A] hover:bg-[#F27125] text-white text-xs md:text-sm font-bold shadow-md transition-all shrink-0"
            >
              <span>Explore The LRSD Edge</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
