'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import Navbar, { ActionButton } from '@/components/Navbar';
import Footer from '@/components/Footer';
import { TorusWireframe, SphereWireframe, GyroWireframe, SilkWaves } from '@/components/SharedWireframes';
import { ShieldCheck, Building2, Landmark, CheckCircle2, ArrowRight, Layers, FileCheck } from 'lucide-react';

export default function MortgageBackedLoansPage() {
  const specs = [
    { label: "Facility Quantum", value: "₹5 Crore to ₹200 Crore" },
    { label: "Security Cover", value: "1.5x to 2.0x Prime Commercial / Residential / Industrial Assets" },
    { label: "Tenure Range", value: "12 Months to 36 Months" },
    { label: "Disbursement Mechanism", value: "Tranche-based against construction/sales milestones" },
    { label: "Escrow Structure", value: "Exclusive project sales/receivable cash-flow escrow waterfall" },
    { label: "Moratorium", value: "Flexible principal moratorium during active project execution" },
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
            <p className="text-xs font-bold tracking-widest text-[#E8621A] uppercase">
              Secured Asset Credit
            </p>
          </div>

          <div className="grid lg:grid-cols-[1.3fr_0.7fr] gap-12 items-start">
            <div>
              <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-[-0.03em] leading-[1.05] text-[#0F1932] mb-8">
                Mortgage-Backed Loans{" "}
                <span className="text-[#E8621A]">& Structured Debt.</span>
              </h1>

              <p className="text-lg md:text-xl text-gray-700 leading-relaxed font-normal mb-8 max-w-2xl">
                We underwrite the cash-flow waterfall, not just the collateral value. Last-mile developer and enterprise property financing structured around when the asset actually generates cash.
              </p>

              <div className="flex flex-wrap gap-4">
                <ActionButton label="Structure mortgage credit" href="/#contact" />
                <Link
                  href="/products/structured-credit"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border border-gray-300 text-xs md:text-sm font-bold text-gray-700 hover:bg-white transition-colors"
                >
                  <span>Structured Solutions</span>
                  <ArrowRight className="w-4 h-4 text-[#E8621A]" />
                </Link>
              </div>
            </div>

            {/* Quick Specs Highlight Box */}
            <div className="bg-[#0F1932] text-white p-8 rounded-3xl shadow-xl">
              <div className="flex justify-between items-center mb-6">
                <span className="text-xs font-extrabold uppercase tracking-widest text-[#E8621A]">
                  Mortgage Debt Metrics
                </span>
                <Building2 className="w-6 h-6 text-[#E8621A]" />
              </div>
              <div className="space-y-4">
                <div className="border-b border-white/10 pb-3">
                  <p className="text-[11px] text-gray-400 uppercase">Collateral Cover</p>
                  <p className="text-2xl font-extrabold text-white">1.5x – 2.0x</p>
                </div>
                <div className="border-b border-white/10 pb-3">
                  <p className="text-[11px] text-gray-400 uppercase">Ticket Range</p>
                  <p className="text-2xl font-extrabold text-[#E8621A]">₹5 Cr – ₹200 Cr</p>
                </div>
                <div>
                  <p className="text-[11px] text-gray-400 uppercase">Repayment Framework</p>
                  <p className="text-base font-bold text-white">Escrow-Linked Cash Waterfall</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Underwriting Philosophy */}
      <section className="py-24 md:py-32 px-6 md:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6 space-y-6">
              <div className="inline-flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#E8621A]" />
                <p className="text-xs font-bold tracking-widest text-gray-400 uppercase">
                  Cash Flow Waterfall Approach
                </p>
              </div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#0F1932] tracking-tight leading-tight">
                Aligning debt repayment with actual asset monetization.
              </h2>
              <p className="text-base text-gray-600 leading-relaxed">
                Conventional mortgage lenders enforce rigid, immediate monthly amortization schedules that strain project liquidity during peak construction or leasing phases.
              </p>
              <p className="text-base text-gray-600 leading-relaxed">
                LRSD Capital structures drawdowns released against verifiable construction milestones, routes all sales collections through an escrow waterfall, and matches amortization with sales inflows.
              </p>
            </div>

            <div className="lg:col-span-6">
              <div className="bg-[#FAF9F6] border border-gray-200 rounded-3xl p-8 sm:p-10 space-y-6">
                <h3 className="text-xl font-bold text-[#0F1932]">Facility Parameters</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {specs.map((item, idx) => (
                    <div key={idx} className="bg-white p-4 rounded-xl border border-gray-200">
                      <p className="text-[11px] font-bold text-gray-400 uppercase tracking-wider mb-1">{item.label}</p>
                      <p className="text-xs sm:text-sm font-bold text-[#0F1932]">{item.value}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Eligible Property Types */}
      <section className="py-24 md:py-32 px-6 md:px-8 bg-[#FAF9F6]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0F1932] tracking-tight mb-4">
              Eligible Collateral & Asset Classes
            </h2>
            <p className="text-sm text-gray-600">
              Clear title, unencumbered prime physical collateral backed by independent legal and technical due diligence.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-3xl border border-gray-200 shadow-sm">
              <Building2 className="w-8 h-8 text-[#E8621A] mb-4" />
              <h3 className="text-lg font-bold text-[#0F1932] mb-2">Commercial Properties</h3>
              <p className="text-xs text-gray-600 leading-relaxed">
                Lease rental discounting (LRD), prime commercial office space, and retail asset mortgage debt.
              </p>
            </div>

            <div className="bg-white p-8 rounded-3xl border border-gray-200 shadow-sm">
              <Landmark className="w-8 h-8 text-[#E8621A] mb-4" />
              <h3 className="text-lg font-bold text-[#0F1932] mb-2">Residential Real Estate</h3>
              <p className="text-xs text-gray-600 leading-relaxed">
                Last-mile completion bridge financing for reputed mid-market and luxury urban residential developments.
              </p>
            </div>

            <div className="bg-white p-8 rounded-3xl border border-gray-200 shadow-sm">
              <FileCheck className="w-8 h-8 text-[#E8621A] mb-4" />
              <h3 className="text-lg font-bold text-[#0F1932] mb-2">Industrial & Warehousing</h3>
              <p className="text-xs text-gray-600 leading-relaxed">
                Manufacturing facilities, industrial land parcels, logistics parks, and cold storage assets.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
