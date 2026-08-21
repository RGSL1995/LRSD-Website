'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import Navbar, { ActionButton } from '@/components/Navbar';
import Footer from '@/components/Footer';
import { TorusWireframe, SphereWireframe, GyroWireframe, SilkWaves } from '@/components/SharedWireframes';
import { MessageSquareQuote, Star, Building2, TrendingUp, ShieldCheck, ArrowRight, CheckCircle2 } from 'lucide-react';

export default function TestimonialsPage() {
  const testimonials = [
    {
      quote:
        "When our SME company got listed on the NSE Emerge platform, our capital requirements doubled to fulfill major industrial orders. Conventional banks wanted a formal credit rating that no fresh SME carries. LRSD Capital understood our order book and delivered a ₹12 Crore LAS facility in 5 days.",
      author: "Managing Director",
      company: "NSE SME Listed Precision Engineering Firm",
      location: "Pune, Maharashtra",
      facility: "Loan Against Shares · ₹12 Cr",
      tag: "SME Listing",
    },
    {
      quote:
        "Our working capital was severely stretched with 120-day receivable cycles from Tier-1 automobile OEMs. LRSD set up a ₹20 Crore factoring line that disburses funds on Day 2 of invoice submission. It transformed our capacity utilization and ROCE.",
      author: "Founder & CEO",
      company: "Auto Ancillary & Component Manufacturer",
      location: "Gurugram, Haryana",
      facility: "Receivables Factoring · ₹20 Cr",
      tag: "Supply Chain",
    },
    {
      quote:
        "We needed last-mile bridge financing to complete our premium residential tower ahead of RERA deadlines. Other NBFCs had rigid monthly amortization rules. LRSD structured our loan with an escrow cash-flow waterfall that released repayment only when buyer installments arrived.",
      author: "Promoter & Director",
      company: "Urban Real Estate Development Group",
      location: "NCR Delhi",
      facility: "Mortgage-Backed Debt · ₹35 Cr",
      tag: "Real Estate",
    },
    {
      quote:
        "During a strategic promoter buyout, we needed rapid mezzanine debt without diluting our equity stake before our mainboard IPO. LRSD Capital evaluated our 10-year track record and provided custom structured debt within 10 days.",
      author: "Joint Managing Director",
      company: "Specialty Chemicals & Exporter",
      location: "Vadodara, Gujarat",
      facility: "Structured Pre-IPO Debt · ₹25 Cr",
      tag: "Corporate Finance",
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
              Proven Track Record
            </p>
          </div>

          <div className="grid lg:grid-cols-[1.3fr_0.7fr] gap-12 items-start">
            <div>
              <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-[-0.03em] leading-[1.05] text-[#0F1932] mb-8">
                Borrower Conviction.{" "}
                <span className="text-[#E8621A]">Enterprise Trust.</span>
              </h1>

              <p className="text-lg md:text-xl text-gray-700 leading-relaxed font-normal mb-8 max-w-2xl">
                Discover how emerging listed enterprises, promoters, and industrial groups utilize LRSD Capital&apos;s structured credit to accelerate growth.
              </p>

              <div className="flex flex-wrap gap-4">
                <ActionButton label="Start your application" href="/#contact" />
                <Link
                  href="/products/loan-against-shares"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border border-gray-300 text-xs md:text-sm font-bold text-gray-700 hover:bg-white transition-colors"
                >
                  <span>Explore Products</span>
                  <ArrowRight className="w-4 h-4 text-[#E8621A]" />
                </Link>
              </div>
            </div>

            {/* Quick Metrics Card */}
            <div className="bg-[#0F1932] text-white p-8 rounded-3xl shadow-xl">
              <div className="flex justify-between items-center mb-6">
                <span className="text-xs font-extrabold uppercase tracking-widest text-[#E8621A]">
                  Track Record
                </span>
                <MessageSquareQuote className="w-6 h-6 text-[#E8621A]" />
              </div>
              <div className="space-y-4">
                <div className="border-b border-white/10 pb-3">
                  <p className="text-[11px] text-gray-400 uppercase">Avg. Sanction Time</p>
                  <p className="text-2xl font-extrabold text-[#E8621A]">48h – 7 Days</p>
                </div>
                <div className="border-b border-white/10 pb-3">
                  <p className="text-[11px] text-gray-400 uppercase">Collateral Backing</p>
                  <p className="text-2xl font-extrabold text-white">100% Secured</p>
                </div>
                <div>
                  <p className="text-[11px] text-gray-400 uppercase">Borrower Sectors</p>
                  <p className="text-base font-bold text-white">Manufacturing, Real Estate, SME, Infra, Solar</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Grid */}
      <section className="py-24 md:py-32 px-6 md:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            {testimonials.map((t, idx) => (
              <motion.div
                key={idx}
                whileHover={{ y: -6 }}
                transition={{ duration: 0.3 }}
                className="bg-[#FAF9F6] border border-gray-200 p-8 sm:p-10 rounded-3xl flex flex-col justify-between shadow-sm relative overflow-hidden"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <span className="text-[11px] font-bold text-[#E8621A] bg-white border border-gray-200 px-3 py-1 rounded-full uppercase tracking-wider">
                      {t.tag}
                    </span>
                    <span className="text-xs font-semibold text-gray-400">
                      {t.facility}
                    </span>
                  </div>

                  <p className="text-sm sm:text-base text-[#0F1932] leading-relaxed mb-8 font-medium italic">
                    &ldquo;{t.quote}&rdquo;
                  </p>
                </div>

                <div className="pt-6 border-t border-gray-200/80 flex items-center justify-between">
                  <div>
                    <h3 className="text-sm font-bold text-[#0F1932]">{t.author}</h3>
                    <p className="text-xs text-gray-500">{t.company}</p>
                    <p className="text-[11px] text-gray-400 mt-0.5">{t.location}</p>
                  </div>
                  <div className="w-9 h-9 rounded-full bg-[#0F1932] flex items-center justify-center text-[#E8621A] shrink-0">
                    <ShieldCheck className="w-5 h-5" />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Partner with LRSD CTA */}
      <section className="py-20 md:py-24 px-6 md:px-8 bg-[#FAF9F6]">
        <div className="max-w-4xl mx-auto bg-[#0F1932] text-white rounded-3xl p-10 sm:p-14 text-center shadow-2xl">
          <h2 className="text-2xl sm:text-4xl font-extrabold mb-4">
            Accelerate your corporate balance sheet.
          </h2>
          <p className="text-xs sm:text-sm text-gray-300 max-w-xl mx-auto mb-8">
            Connect with our underwriting desk to explore secured loan facilities structured around your real cash flows.
          </p>
          <ActionButton label="Start a conversation" href="/#contact" className="bg-[#E8621A] hover:bg-[#F27125]" />
        </div>
      </section>

      <Footer />
    </div>
  );
}
