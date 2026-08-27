'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import Navbar, { ActionButton } from '@/components/Navbar';
import Footer from '@/components/Footer';
import { TorusWireframe, SphereWireframe, SilkWaves } from '@/components/SharedWireframes';
import { Layers, Zap, Clock, ShieldCheck, CheckCircle2, ArrowRight, RefreshCw } from 'lucide-react';

export default function ReceivablesDiscountingPage() {
  const specs = [
    { label: "Facilitating Entity", value: "Rajasthan Global Securities Pvt. Ltd. (RGSPL) — Group Company" },
    { label: "Invoice Coverage", value: "Up to 90% of accepted invoice value" },
    { label: "Disbursement Velocity", value: "Within 24 to 48 hours of invoice verification" },
    { label: "Facility Limit", value: "₹1 Crore to ₹50 Crore" },
    { label: "Credit Period / Tenor", value: "60 Days to 180 Days" },
    { label: "Structure", value: "Recourse" },
    { label: "Anchor Profiles", value: "Listed corporates, PSUs, AAA/AA mid-market buyers" },
  ];

  return (
    <div className="min-h-screen bg-white text-[#0F1932] overflow-x-hidden selection:bg-[#E8621A] selection:text-white font-sans">
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-36 pb-20 md:pt-44 md:pb-28 px-6 md:px-8 bg-[#FAF9F6] overflow-hidden">
        <SilkWaves />

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="flex flex-wrap items-center gap-2 mb-8">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-gray-200 shadow-sm">
              <span className="w-2 h-2 rounded-full bg-[#E8621A]" />
              <p className="text-xs font-bold tracking-widest text-[#E8621A] uppercase">
                Working Capital Acceleration
              </p>
            </div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-orange-50 border border-orange-200 shadow-xs">
              <span className="text-[11px] font-extrabold text-[#0F1932]">
                Offered by Group Company: <span className="text-[#E8621A]">Rajasthan Global Securities Pvt. Ltd. (RGSPL)</span>
              </span>
            </div>
          </div>

          <div className="grid lg:grid-cols-[1.3fr_0.7fr] gap-12 items-start">
            <div>
              <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-[-0.03em] leading-[1.05] text-[#0F1932] mb-8">
                Receivables Discounting{" "}
                <span className="text-[#E8621A]">& Factoring.</span>
              </h1>

              <p className="text-lg md:text-xl text-gray-700 leading-relaxed font-normal mb-8 max-w-2xl">
                Facilitated by our group company, <strong className="text-[#0F1932] font-semibold">Rajasthan Global Securities Pvt. Ltd. (RGSPL)</strong>, our factoring solutions convert 60–180 day locked corporate receivables into immediate working capital — boosting ROCE, RONW, and supply chain liquidity without restrictive bank collateral.
              </p>

              <div className="flex flex-wrap gap-4">
                <ActionButton label="Set up receivables line" href="/#contact" />
                <Link
                  href="/products/structured-credit"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border border-gray-300 text-xs md:text-sm font-bold text-gray-700 hover:bg-white transition-colors"
                >
                  <span>Explore Structured Credit</span>
                  <ArrowRight className="w-4 h-4 text-[#E8621A]" />
                </Link>
              </div>
            </div>

            {/* Quick Specs Highlight Box */}
            <div className="bg-[#0F1932] text-white p-8 rounded-3xl shadow-xl">
              <div className="flex justify-between items-center mb-6">
                <span className="text-xs font-extrabold uppercase tracking-widest text-[#E8621A]">
                  Factoring Features
                </span>
                <Layers className="w-6 h-6 text-[#E8621A]" />
              </div>
              <div className="space-y-4">
                <div className="border-b border-white/10 pb-3">
                  <p className="text-[11px] text-gray-400 uppercase">Coverage</p>
                  <p className="text-2xl font-extrabold text-white">Up to 90%</p>
                </div>
                <div className="border-b border-white/10 pb-3">
                  <p className="text-[11px] text-gray-400 uppercase">Liquidity Speed</p>
                  <p className="text-2xl font-extrabold text-[#E8621A]">Day 3 Disbursement</p>
                </div>
                <div>
                  <p className="text-[11px] text-gray-400 uppercase">Cycle Solved</p>
                  <p className="text-base font-bold text-white">60 – 180 Day Payment Cycles</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Advantages */}
      <section className="py-24 md:py-32 px-6 md:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6 space-y-6">
              <div className="inline-flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#E8621A]" />
                <p className="text-xs font-bold tracking-widest text-gray-400 uppercase">
                  Why Factor with LRSD
                </p>
              </div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#0F1932] tracking-tight leading-tight">
                Unlock trapped operating cash without overburdening the balance sheet.
              </h2>
              <p className="text-base text-gray-600 leading-relaxed">
                Indian manufacturing, infrastructure, and Tier-1 supply chains frequently suffer from extended receivable cycles. Waiting 90 to 180 days for customer payments constrains your capacity to take on new purchase orders and negotiate supplier discounts.
              </p>
              <p className="text-base text-gray-600 leading-relaxed">
                Our factoring facilities provide dependable off-balance-sheet or structured working capital that scales proportionally with your sales volume.
              </p>
            </div>

            <div className="lg:col-span-6">
              <div className="bg-[#FAF9F6] border border-gray-200 rounded-3xl p-8 sm:p-10 space-y-6">
                <h3 className="text-xl font-bold text-[#0F1932]">Product Parameters</h3>
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

      {/* 3 Step Flow */}
      <section className="py-24 md:py-32 px-6 md:px-8 bg-[#FAF9F6]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0F1932] tracking-tight mb-4">
              How Receivables Factoring Operates
            </h2>
            <p className="text-sm text-gray-600">
              Simple 3-stage mechanics from goods delivery to settlement.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-3xl border border-gray-200 shadow-sm">
              <span className="text-3xl font-black text-[#E8621A] mb-4 block">01</span>
              <h3 className="text-lg font-bold text-[#0F1932] mb-2">Invoice Submission</h3>
              <p className="text-xs text-gray-600 leading-relaxed">
                Supply goods/services to your corporate buyer and submit the verified invoice and proof of delivery.
              </p>
            </div>

            <div className="bg-white p-8 rounded-3xl border border-gray-200 shadow-sm">
              <span className="text-3xl font-black text-[#E8621A] mb-4 block">02</span>
              <h3 className="text-lg font-bold text-[#0F1932] mb-2">Working Capital Released</h3>
              <p className="text-xs text-gray-600 leading-relaxed">
                Rajasthan Global Securities Pvt. Ltd. (RGSPL) verifies the invoice with the anchor and disburses up to 90% of the funds to your account immediately.
              </p>
            </div>

            <div className="bg-white p-8 rounded-3xl border border-gray-200 shadow-sm">
              <span className="text-3xl font-black text-[#E8621A] mb-4 block">03</span>
              <h3 className="text-lg font-bold text-[#0F1932] mb-2">Settlement on Maturity</h3>
              <p className="text-xs text-gray-600 leading-relaxed">
                Upon final invoice payment by your buyer into the escrow account, the remaining retention balance is released.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
