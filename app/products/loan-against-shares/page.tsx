'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import Navbar, { ActionButton } from '@/components/Navbar';
import Footer from '@/components/Footer';
import { TorusWireframe, SphereWireframe, GyroWireframe, SilkWaves } from '@/components/SharedWireframes';
import { TrendingUp, ShieldCheck, Clock, CheckCircle2, FileText, ArrowRight, Layers } from 'lucide-react';

export default function LoanAgainstSharesPage() {
  const specs = [
    { label: "Facility Ticket Size", value: "₹2 Crore to ₹100 Crore" },
    { label: "Loan-To-Value (LTV)", value: "Up to 20% based on security quality" },
    { label: "Turnaround Time", value: "48 – 72 Hours to sanction & pledge" },
    { label: "Eligible Collateral", value: "BSE / NSE Mainboard & SME Listed Shares" },
    { label: "Tenure", value: "6 Months to 36 Months" },
    { label: "Repayment Structure", value: "Bullet Principal / Tailored EMI / Moratorium" },
  ];

  const steps = [
    {
      num: "01",
      title: "Initial Assessment & Term Sheet",
      desc: "Review promoter shareholding, company fundamentals, and capital requirements within 24 hours.",
    },
    {
      num: "02",
      title: "Pledge Creation & Legal Structuring",
      desc: "Seamless depository pledge (NSDL / CDSL) and straightforward loan facility documentation.",
    },
    {
      num: "03",
      title: "Rapid Fund Disbursement",
      desc: "Capital transferred directly to borrower account with transparent covenant covenants and monitoring.",
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
              Flagship Credit Product
            </p>
          </div>

          <div className="grid lg:grid-cols-[1.3fr_0.7fr] gap-12 items-start">
            <div>
              <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-[-0.03em] leading-[1.05] text-[#0F1932] mb-8">
                Loan Against Shares{" "}
                <span className="text-[#E8621A]">& Securities.</span>
              </h1>

              <p className="text-lg md:text-xl text-gray-700 leading-relaxed font-normal mb-8 max-w-2xl">
                Unlock immediate growth liquidity against listed equity without diluting promoter control or facing mechanical volume-based declines.
              </p>

              <div className="flex flex-wrap gap-4">
                <ActionButton label="Apply for LAS facility" href="/#contact" />
                <Link
                  href="/about/lrsd-capital"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border border-gray-300 text-xs md:text-sm font-bold text-gray-700 hover:bg-white transition-colors"
                >
                  <span>Our Underwriting Thesis</span>
                  <ArrowRight className="w-4 h-4 text-[#E8621A]" />
                </Link>
              </div>
            </div>

            {/* Quick Specs Highlight Box */}
            <div className="bg-[#0F1932] text-white p-8 rounded-3xl shadow-xl">
              <div className="flex justify-between items-center mb-6">
                <span className="text-xs font-extrabold uppercase tracking-widest text-[#E8621A]">
                  LAS Highlights
                </span>
                <TrendingUp className="w-6 h-6 text-[#E8621A]" />
              </div>
              <div className="space-y-4">
                <div className="border-b border-white/10 pb-3">
                  <p className="text-[11px] text-gray-400 uppercase">LTV</p>
                  <p className="text-2xl font-extrabold text-white">Up to 20%</p>
                </div>
                <div className="border-b border-white/10 pb-3">
                  <p className="text-[11px] text-gray-400 uppercase">Turnaround</p>
                  <p className="text-2xl font-extrabold text-[#E8621A]">48 – 72 Hours</p>
                </div>
                <div>
                  <p className="text-[11px] text-gray-400 uppercase">Coverage</p>
                  <p className="text-base font-bold text-white">Mainboard & SME Listed Stocks</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Underwriting Thesis Section */}
      <section className="py-24 md:py-32 px-6 md:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6 space-y-6">
              <div className="inline-flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#E8621A]" />
                <p className="text-xs font-bold tracking-widest text-gray-400 uppercase">
                  How We Underwrite LAS
                </p>
              </div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#0F1932] tracking-tight leading-tight">
                We underwrite the business, not just the trading volume.
              </h2>
              <p className="text-base text-gray-600 leading-relaxed">
                Most traditional NBFCs and banks size an SME facility by how fast they could dump the shares on an exchange. On a stock that trades thinly, that mechanical arithmetic returns zero — and a profitable, high-return company gets declined for reasons unrelated to credit risk.
              </p>
              <p className="text-base text-gray-600 leading-relaxed">
                At LRSD Capital, we evaluate the core enterprise: earnings growth, sector leadership, promoter character, and cash generation. The exchange volume informs how we structure the facility, not whether we approve it.
              </p>
            </div>

            <div className="lg:col-span-6">
              <div className="bg-[#FAF9F6] border border-gray-200 rounded-3xl p-8 sm:p-10 space-y-6">
                <h3 className="text-xl font-bold text-[#0F1932]">Facility Specifications</h3>
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

      {/* 3 Step Execution Flow */}
      <section className="py-24 md:py-32 px-6 md:px-8 bg-[#FAF9F6]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0F1932] tracking-tight mb-4">
              Disbursement Process Flow
            </h2>
            <p className="text-sm text-gray-600">
              Clear, transparent, and frictionless execution designed for fast-moving founders.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {steps.map((step, idx) => (
              <div key={idx} className="bg-white p-8 rounded-3xl border border-gray-200 shadow-sm relative">
                <span className="text-3xl font-black text-[#E8621A] mb-4 block">
                  {step.num}
                </span>
                <h3 className="text-lg font-bold text-[#0F1932] mb-2">{step.title}</h3>
                <p className="text-xs text-gray-600 leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>

          <div className="mt-16 text-center">
            <ActionButton label="Structure your LAS facility today" href="/#contact" className="bg-[#E8621A] hover:bg-[#F27125]" />
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
