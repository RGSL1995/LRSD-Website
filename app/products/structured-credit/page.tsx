'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import Navbar, { ActionButton } from '@/components/Navbar';
import Footer from '@/components/Footer';
import { TorusWireframe, SphereWireframe, GyroWireframe, SilkWaves } from '@/components/SharedWireframes';
import { Award, Zap, ShieldCheck, TrendingUp, ArrowRight, Layers, Sliders } from 'lucide-react';

export default function StructuredCreditPage() {
  const solutions = [
    {
      title: "Pre-IPO Bridge Financing",
      desc: "Growth capital and balance sheet optimization ahead of DRHP filing or exchange listing milestones.",
      badge: "Pre-IPO Bridge",
    },
    {
      title: "Mezzanine & Subordinated Debt",
      desc: "Hybrid capital combining senior security with structured equity participation or revenue-linked coupons.",
      badge: "Hybrid Debt",
    },
    {
      title: "Promoter & Acquisition Financing",
      desc: "Capital for creeping acquisitions, buyout of minority shareholders, or strategic bolt-on corporate assets.",
      badge: "M&A Finance",
    },
    {
      title: "Special Situation Liquidity",
      desc: "Bespoke liquidity for one-time recapitalizations, dispute settlements, or asset turnaround opportunities.",
      badge: "Special Situations",
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
            <p className="text-xs font-bold tracking-widest text-[#E8621A] uppercase">
              Bespoke Capital Architecture
            </p>
          </div>

          <div className="grid lg:grid-cols-[1.3fr_0.7fr] gap-12 items-start">
            <div>
              <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-[-0.03em] leading-[1.05] text-[#0F1932] mb-8">
                Structured Credit{" "}
                <span className="text-[#E8621A]">Solutions.</span>
              </h1>

              <p className="text-lg md:text-xl text-gray-700 leading-relaxed font-normal mb-8 max-w-2xl">
                Custom-engineered debt instruments, mezzanine capital, and pre-IPO financing for unique corporate transitions where standard credit templates fail.
              </p>

              <div className="flex flex-wrap gap-4">
                <ActionButton label="Discuss structured financing" href="/#contact" />
                <Link
                  href="/about/edge"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border border-gray-300 text-xs md:text-sm font-bold text-gray-700 hover:bg-white transition-colors"
                >
                  <span>Our Underwriting Edge</span>
                  <ArrowRight className="w-4 h-4 text-[#E8621A]" />
                </Link>
              </div>
            </div>

            {/* Quick Specs Highlight Box */}
            <div className="bg-[#0F1932] text-white p-8 rounded-3xl shadow-xl">
              <div className="flex justify-between items-center mb-6">
                <span className="text-xs font-extrabold uppercase tracking-widest text-[#E8621A]">
                  Structured Highlights
                </span>
                <Award className="w-6 h-6 text-[#E8621A]" />
              </div>
              <div className="space-y-4">
                <div className="border-b border-white/10 pb-3">
                  <p className="text-[11px] text-gray-400 uppercase">Execution Window</p>
                  <p className="text-2xl font-extrabold text-white">7 – 14 Days</p>
                </div>
                <div className="border-b border-white/10 pb-3">
                  <p className="text-[11px] text-gray-400 uppercase">Collateral Backing</p>
                  <p className="text-2xl font-extrabold text-[#E8621A]">100% Asset-Backed</p>
                </div>
                <div>
                  <p className="text-[11px] text-gray-400 uppercase">Amortization</p>
                  <p className="text-base font-bold text-white">Tailored to Event Milestones</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4 Structured Solutions Grid */}
      <section className="py-24 md:py-32 px-6 md:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl sm:text-5xl font-extrabold text-[#0F1932] tracking-tight mb-4">
              Tailored Credit Products
            </h2>
            <p className="text-sm sm:text-base text-gray-600">
              When standard bank term loans cannot accommodate growth dynamics, our structured debt frameworks bridge the gap.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {solutions.map((item, idx) => (
              <motion.div
                key={idx}
                whileHover={{ y: -4 }}
                className="bg-[#FAF9F6] border border-gray-200 p-8 sm:p-10 rounded-3xl flex flex-col justify-between"
              >
                <div>
                  <div className="flex justify-between items-center mb-6">
                    <span className="text-[11px] font-bold text-[#E8621A] bg-white border border-gray-200 px-3 py-1 rounded-full uppercase tracking-wider">
                      {item.badge}
                    </span>
                    <Sliders className="w-5 h-5 text-gray-400" />
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold text-[#0F1932] mb-3">
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-gray-600 leading-relaxed mb-6">
                    {item.desc}
                  </p>
                </div>

                <div className="pt-6 border-t border-gray-200/80 flex items-center justify-between">
                  <span className="text-xs font-bold text-[#0F1932]">Custom Amortization</span>
                  <Link
                    href="/#contact"
                    className="text-xs font-bold text-[#E8621A] hover:text-[#F27125] inline-flex items-center gap-1.5"
                  >
                    <span>Enquire</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Box */}
      <section className="py-20 md:py-24 px-6 md:px-8 bg-[#FAF9F6]">
        <div className="max-w-5xl mx-auto bg-[#0F1932] text-white rounded-3xl p-10 sm:p-14 text-center shadow-2xl">
          <h3 className="text-2xl sm:text-3xl font-extrabold mb-4">
            Have a unique financing requirement?
          </h3>
          <p className="text-xs sm:text-sm text-gray-300 max-w-xl mx-auto mb-8">
            Speak directly with our senior underwriting committee for a confidential assessment and bespoke term sheet within 48 hours.
          </p>
          <ActionButton label="Schedule structured consultation" href="/#contact" className="bg-[#E8621A] hover:bg-[#F27125]" />
        </div>
      </section>

      <Footer />
    </div>
  );
}
