'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import Navbar, { ActionButton } from '@/components/Navbar';
import Footer from '@/components/Footer';
import { TorusWireframe, SphereWireframe, GyroWireframe, SilkWaves } from '@/components/SharedWireframes';
import { Building2, ShieldCheck, TrendingUp, Award, ArrowRight, CheckCircle2, Landmark } from 'lucide-react';

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
                We are a secured lender to India&apos;s emerging listed companies, their promoters, and their supply chains — underwritten with three decades of equity intelligence.
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
              className="bg-[#0F1932] text-white p-8 rounded-3xl shadow-xl relative overflow-hidden"
            >
              <div className="flex justify-between items-center mb-6">
                <span className="text-xs font-extrabold uppercase tracking-widest text-[#E8621A]">
                  Market Thesis
                </span>
                <TorusWireframe className="w-10 h-10" color="#E8621A" />
              </div>
              <p className="text-sm text-gray-200 leading-relaxed mb-6">
                When traditional banks look only at credit rating stamps and mechanical LTVs, they decline fundamentally sound, high-margin businesses. We underwrite what others cannot evaluate.
              </p>
              <div className="pt-4 border-t border-white/10 grid grid-cols-2 gap-4">
                <div>
                  <p className="text-2xl font-extrabold text-white">1,200+</p>
                  <p className="text-[11px] text-gray-400">SME Listed Firms</p>
                </div>
                <div>
                  <p className="text-2xl font-extrabold text-[#E8621A]">Since 2002</p>
                  <p className="text-[11px] text-gray-400">Group Pedigree</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* The Market Gap Section (Exact Prompt Copy) */}
      <section className="py-24 md:py-32 px-6 md:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-12 gap-12 items-start">
            <div className="lg:col-span-4">
              <div className="sticky top-28">
                <div className="inline-flex items-center gap-2 mb-4">
                  <span className="w-2 h-2 rounded-full bg-[#E8621A]" />
                  <p className="text-xs font-bold tracking-widest text-gray-400 uppercase">
                    The Reality of Indian SME Debt
                  </p>
                </div>
                <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0F1932] tracking-tight leading-tight mb-6">
                  Where banks see an unrated risk, we see a viable enterprise.
                </h2>
                <p className="text-sm text-gray-600 leading-relaxed mb-6">
                  Neither decision to decline an SME credit facility has anything to do with whether the company can repay. It is an artifact of standardized formulas.
                </p>
                <div className="p-6 rounded-2xl bg-[#FAF9F6] border border-gray-200">
                  <p className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">
                    Our Core Mandate
                  </p>
                  <p className="text-xs font-semibold text-[#0F1932] leading-relaxed">
                    100% Secured Lending. Ticket sizes ₹1 Cr – ₹100 Cr. Zero retail exposure.
                  </p>
                </div>
              </div>
            </div>

            <div className="lg:col-span-8 space-y-8">
              {/* Highlighted Manifesto Box */}
              <div className="bg-[#FAF9F6] border-l-4 border-[#E8621A] p-8 sm:p-10 rounded-2xl shadow-sm">
                <p className="text-base sm:text-lg md:text-xl text-[#0F1932] leading-relaxed font-medium mb-6">
                  India now has more than <strong className="font-extrabold text-[#0F1932]">1,200 companies listed on its SME exchanges</strong>, and several hundred more small-caps on the mainboard. Almost none of them carry a credit rating. Most trade thinly. Their promoters&apos; wealth sits entirely in their own stock.
                </p>
                <p className="text-base sm:text-lg md:text-xl text-[#0F1932] leading-relaxed font-medium mb-6">
                  When one of these companies needs credit, <span className="text-[#E8621A] font-semibold">a bank declines for want of a rating</span> and a large NBFC declines for want of ticket size — and neither decision has anything to do with whether the business can repay.
                </p>
                <p className="text-base sm:text-lg md:text-xl text-[#0F1932] leading-relaxed font-bold">
                  LRSD Capital was built for that gap. We are a secured lender to India&apos;s emerging listed companies, their promoters and their supply chains, underwritten with what the Rajasthan Global Securities Group has learned about these companies since 2002.
                </p>
              </div>

              {/* 3 Pillars of Underwriting */}
              <div className="grid sm:grid-cols-3 gap-6 pt-4">
                <div className="p-6 rounded-2xl bg-white border border-gray-200 shadow-sm">
                  <div className="w-10 h-10 rounded-xl bg-[#FAF9F6] border border-gray-200 flex items-center justify-center mb-4 text-[#E8621A]">
                    <ShieldCheck className="w-5 h-5" />
                  </div>
                  <h3 className="font-bold text-sm text-[#0F1932] mb-2">
                    Collateralized Security
                  </h3>
                  <p className="text-xs text-gray-600 leading-relaxed">
                    First charge on equity shares, commercial receivables, or prime real estate with rigorous margin monitoring.
                  </p>
                </div>

                <div className="p-6 rounded-2xl bg-white border border-gray-200 shadow-sm">
                  <div className="w-10 h-10 rounded-xl bg-[#FAF9F6] border border-gray-200 flex items-center justify-center mb-4 text-[#E8621A]">
                    <TrendingUp className="w-5 h-5" />
                  </div>
                  <h3 className="font-bold text-sm text-[#0F1932] mb-2">
                    Cash Flow Waterfall
                  </h3>
                  <p className="text-xs text-gray-600 leading-relaxed">
                    Amortization and escrow structures tailored precisely to when operating revenues and orders realize.
                  </p>
                </div>

                <div className="p-6 rounded-2xl bg-white border border-gray-200 shadow-sm">
                  <div className="w-10 h-10 rounded-xl bg-[#FAF9F6] border border-gray-200 flex items-center justify-center mb-4 text-[#E8621A]">
                    <Award className="w-5 h-5" />
                  </div>
                  <h3 className="font-bold text-sm text-[#0F1932] mb-2">
                    7–14 Day Velocity
                  </h3>
                  <p className="text-xs text-gray-600 leading-relaxed">
                    Underwriting by the investment committee without the 60-day bureaucratic lag of traditional banking.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The Ground Behind Us — Group Legacy */}
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

          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight leading-tight text-white mb-6">
                Rajasthan Global Securities Group
              </h2>
              <p className="text-base text-white/80 leading-relaxed mb-6">
                Founded in 2002, the Rajasthan Global Securities Group has spent over two decades identifying, researching, and backing India&apos;s micro, small, and mid-cap corporate landscape.
              </p>
              <p className="text-sm text-white/70 leading-relaxed mb-6">
                That deep reservoir of proprietary market knowledge — understanding promoter track records, cyclical sector dynamics, and balance sheet integrity — forms the foundational bedrock of every credit facility structured by LRSD Capital.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="bg-black/30 backdrop-blur-md border border-white/10 p-6 rounded-2xl text-center">
                <p className="text-4xl font-extrabold text-[#E8621A] mb-2">2002</p>
                <p className="text-xs font-semibold text-white/90 uppercase tracking-wider">Group Foundation</p>
                <p className="text-[11px] text-white/60 mt-1">20+ years of Indian market history</p>
              </div>

              <div className="bg-black/30 backdrop-blur-md border border-white/10 p-6 rounded-2xl text-center">
                <p className="text-4xl font-extrabold text-white mb-2">100%</p>
                <p className="text-xs font-semibold text-white/90 uppercase tracking-wider">Secured Credit</p>
                <p className="text-[11px] text-white/60 mt-1">Capital preservation first</p>
              </div>

              <div className="bg-black/30 backdrop-blur-md border border-white/10 p-6 rounded-2xl text-center">
                <p className="text-4xl font-extrabold text-white mb-2">₹1 Cr–100 Cr</p>
                <p className="text-xs font-semibold text-white/90 uppercase tracking-wider">Ticket Size</p>
                <p className="text-[11px] text-white/60 mt-1">Focused mid-market mandate</p>
              </div>

              <div className="bg-black/30 backdrop-blur-md border border-white/10 p-6 rounded-2xl text-center">
                <p className="text-4xl font-extrabold text-[#E8621A] mb-2">48h–14d</p>
                <p className="text-xs font-semibold text-white/90 uppercase tracking-wider">Execution</p>
                <p className="text-[11px] text-white/60 mt-1">Agile underwriting cycles</p>
              </div>
            </div>
          </div>

          <div className="p-8 sm:p-12 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-md flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="text-xl font-bold text-white mb-2">
                Need structured credit tailored to your enterprise?
              </h3>
              <p className="text-xs text-white/70">
                Connect directly with our credit committee to review terms and collateral requirements.
              </p>
            </div>
            <ActionButton label="Start a conversation" href="/#contact" className="shrink-0 bg-[#E8621A] hover:bg-[#F27125]" />
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
