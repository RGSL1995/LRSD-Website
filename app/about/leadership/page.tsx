'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import Navbar, { ActionButton } from '@/components/Navbar';
import Footer from '@/components/Footer';
import { TorusWireframe, SphereWireframe, SilkWaves } from '@/components/SharedWireframes';
import { ShieldCheck, Scale, Award, Users, ArrowRight } from 'lucide-react';

export default function LeadershipPage() {
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
              Leadership & Governance
            </p>
          </div>

          <div className="max-w-3xl">
            <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-[-0.03em] leading-[1.05] text-[#0F1932] mb-8">
              Guided by experience.{" "}
              <span className="text-[#E8621A]">Anchored in discipline.</span>
            </h1>

            <p className="text-lg md:text-xl text-gray-700 leading-relaxed font-normal mb-8">
              Our leadership brings together three decades of capital markets mastery, corporate finance acumen, and institutional credit governance.
            </p>
          </div>
        </div>
      </section>

      {/* Founder & Managing Director Feature */}
      <section className="py-24 md:py-32 px-6 md:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="bg-[#0F1932] rounded-3xl overflow-hidden shadow-2xl border border-white/10">
            <div className="grid lg:grid-cols-[0.9fr_1.1fr] items-stretch">
              {/* Photo */}
              <div className="relative min-h-[420px] lg:min-h-[520px] bg-gradient-to-r from-[#0F1932] to-[#1A2347]">
                <Image
                  src="/lalitsir.jpeg"
                  alt="Mr. Lalit Dua, Founder & Managing Director"
                  fill
                  sizes="(max-width: 1024px) 100vw, 45vw"
                  className="object-cover object-top filter brightness-95 contrast-105"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t lg:bg-gradient-to-r from-transparent via-[#0F1932]/30 to-[#0F1932]" />
              </div>

              {/* Bio Content */}
              <div className="p-8 sm:p-12 lg:p-16 flex flex-col justify-between text-white relative z-10">
                <div>
                  <div className="inline-flex items-center gap-2 mb-6">
                    <span className="w-2 h-2 rounded-full bg-[#E8621A]" />
                    <p className="text-xs font-extrabold uppercase tracking-widest text-[#E8621A]">
                      Founder & Managing Director
                    </p>
                  </div>

                  <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mb-2">
                    Mr. Lalit Dua
                  </h2>
                  <p className="text-sm font-semibold text-gray-400 mb-8">
                    Founder & Managing Director, LRSD Capital & Rajasthan Global Securities Group
                  </p>

                  <div className="border-l-2 border-[#E8621A] pl-5 mb-8">
                    <p className="text-base sm:text-lg text-gray-200 italic leading-relaxed">
                      &ldquo;Return of capital matters more to us than return on capital. Every facility we underwrite begins with a single question: how does our capital preserve the enterprise while generating compounding value for stakeholders?&rdquo;
                    </p>
                  </div>

                  <p className="text-xs sm:text-sm text-gray-300 leading-relaxed">
                    With over 30 years of direct market leadership across Indian equity markets, asset allocation, and private credit structuring, Mr. Dua has spearheaded the group&apos;s emergence as a premier institutional partner for mid-market and SME corporates.
                  </p>
                </div>

                <div className="pt-8 mt-8 border-t border-white/10 flex items-center justify-between">
                  <span className="text-xs font-semibold text-gray-400">
                    Rajasthan Global Securities Group (Est. 2002)
                  </span>
                  <ActionButton label="Get in touch" href="/#contact" className="bg-[#E8621A] hover:bg-[#F27125]" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Governance & Committees Section */}
      <section className="py-24 md:py-32 px-6 md:px-8 bg-[#FAF9F6]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 mb-4">
              <span className="w-2 h-2 rounded-full bg-[#E8621A]" />
              <p className="text-xs font-bold tracking-widest text-gray-400 uppercase">
                Institutional Oversight
              </p>
            </div>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-[#0F1932] tracking-tight mb-4">
              Fiduciary Architecture & Committees
            </h2>
            <p className="text-sm sm:text-base text-gray-600">
              Structured decision-making anchored in strict compliance, independent risk evaluation, and multi-tier credit governance.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-3xl border border-gray-200 shadow-sm flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-2xl bg-[#FAF9F6] border border-gray-200 flex items-center justify-center text-[#E8621A] mb-6">
                  <Scale className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-[#0F1932] mb-3">
                  Credit & Investment Committee
                </h3>
                <p className="text-xs text-gray-600 leading-relaxed mb-4">
                  Conducts comprehensive multi-factor underwriting on company earnings, promoter integrity, collateral quality, and repayment waterfalls for every facility.
                </p>
              </div>
              <div className="pt-4 border-t border-gray-100 text-[11px] font-bold text-[#E8621A]">
                100% Secured Approval Mandate
              </div>
            </div>

            <div className="bg-white p-8 rounded-3xl border border-gray-200 shadow-sm flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-2xl bg-[#FAF9F6] border border-gray-200 flex items-center justify-center text-[#E8621A] mb-6">
                  <ShieldCheck className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-[#0F1932] mb-3">
                  Risk & Asset Management
                </h3>
                <p className="text-xs text-gray-600 leading-relaxed mb-4">
                  Provides real-time collateral monitoring, pledge maintenance, covenant tracking, and early warning indicator (EWI) stress testing.
                </p>
              </div>
              <div className="pt-4 border-t border-gray-100 text-[11px] font-bold text-[#E8621A]">
                Continuous Margin Surveillance
              </div>
            </div>

            <div className="bg-white p-8 rounded-3xl border border-gray-200 shadow-sm flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-2xl bg-[#FAF9F6] border border-gray-200 flex items-center justify-center text-[#E8621A] mb-6">
                  <Award className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-[#0F1932] mb-3">
                  Audit & Statutory Compliance
                </h3>
                <p className="text-xs text-gray-600 leading-relaxed mb-4">
                  Ensures full alignment with RBI scale-based regulatory frameworks, Fair Practices Code, and statutory public disclosures.
                </p>
              </div>
              <div className="pt-4 border-t border-gray-100 text-[11px] font-bold text-[#E8621A]">
                Regulatory Scale Compliance
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
