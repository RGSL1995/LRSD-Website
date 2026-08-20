'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import Navbar, { ActionButton } from '@/components/Navbar';
import Footer from '@/components/Footer';
import { TorusWireframe, SphereWireframe, SilkWaves } from '@/components/SharedWireframes';
import { ShieldCheck, Scale, Award, Users, ArrowRight, CheckCircle2, Landmark, Briefcase, GraduationCap, TrendingUp } from 'lucide-react';

export default function LeadershipPage() {
  const leadershipTeam = [
    {
      name: "Mr. Lalit Dua",
      role: "Founder & Managing Director",
      tagline: "Founder, 30 years of compounding",
      image: "/lalitdua.png",
      bio: "Started with initial equity infusion of ~29.57 lakhs & twenty-four years later that Group is worth approximately ₹3,500 crore — compounded at close to 48% a year, without a single rupee of outside equity, without borrowing, and without ever once advertising for a client. He did not build it by being early to a theme or lucky in a cycle. He built it by refusing, over and over, for twenty-four years, to take a risk he could not fully see — and by staying in the market long after the people who arrived with him had left.",
    },
    {
      name: "Ms. Shreya Dua",
      role: "Director",
      tagline: "Wharton MBA, NYU Stern BS/MS, Ex-BCG",
      image: "/Shreya.png",
      bio: "The youngest MBA in Wharton's history, a double master's in finance and strategic management, a bachelor's and master's from NYU Stern before that, and a career that had already taken her through investment banking at Anand Rathi and strategy work at BCG in New York and Mumbai. She came back to India, to a business her father built from ₹29.57 lakh and twenty-four years of refusing to take a risk he could not see. To build an institution with the same judgement, the same discipline and the same word — but with the governance, the capital structure and the professional depth to carry it into a market a hundred times the size. One generation proved the conviction. The next is building the institution around it.",
    },
    {
      name: "Mr. Amit Arora",
      role: "Chief Executive Officer",
      tagline: "Two decades scaling India’s lending in LAS",
      image: "/amit arora.png",
      bio: "Two decades of hands-on expertise building, scaling, and managing large-scale structured lending and Loan Against Shares (LAS) franchises across Indian capital markets. Bringing deep domain acumen in institutional credit governance, market risk dynamics, and relationship management to lead LRSD Capital's growth mandate.",
    },
    {
      name: "Mr. Manish Chauhan",
      role: "Chief Financial Officer",
      tagline: "With the group since inception",
      image: "/manish.png",
      bio: "Manish Chauhan joined an idea, in 2002, and has not left it since. Chief Financial Officer from the first year to the present one — through the 2008 crisis, the 2018 liquidity squeeze and the pandemic. Manish Chauhan has spent twenty-four years running the finances of a company that funded itself. He is now building the financial architecture of an institution that is ready to be a lender in its own right.",
    },
  ];

  return (
    <div className="min-h-screen bg-white text-[#0F1932] overflow-x-hidden selection:bg-[#E8621A] selection:text-white font-sans">
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-36 pb-16 md:pt-44 md:pb-20 px-6 md:px-8 bg-[#FAF9F6] overflow-hidden">
        <SilkWaves />

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-white border border-[#E8621A]/20 shadow-sm mb-8">
            <Briefcase className="w-3.5 h-3.5 text-[#E8621A]" />
            <p className="text-xs font-bold tracking-widest text-[#0F1932] uppercase">
              Leadership & Governance
            </p>
          </div>

          <div className="max-w-4xl mb-16">
            <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-[-0.03em] leading-[1.05] text-[#0F1932] mb-6">
              Two generations,{" "}
              <span className="text-gray-400 font-normal">one institutional mindset.</span>
            </h1>

            <p className="text-lg md:text-xl text-gray-700 leading-relaxed font-normal max-w-3xl">
              Our leadership brings together three decades of capital markets mastery, corporate finance acumen, and institutional credit governance with a twenty-four-year record of zero write-offs.
            </p>
          </div>

          {/* Detailed Leadership Grid */}
          <div className="grid md:grid-cols-2 gap-8">
            {leadershipTeam.map((leader, idx) => (
              <motion.div
                key={idx}
                whileHover={{ y: -4 }}
                transition={{ duration: 0.25 }}
                className="bg-white rounded-3xl overflow-hidden border border-gray-200 shadow-sm hover:shadow-xl hover:border-[#E8621A]/30 transition-all flex flex-col justify-between"
              >
                <div className="p-8 sm:p-10">
                  <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6 mb-6">
                    <div className="relative w-24 h-24 sm:w-28 sm:h-28 rounded-2xl overflow-hidden bg-[#0F1932] shrink-0 border-2 border-gray-100 shadow-md">
                      <Image
                        src={leader.image}
                        alt={leader.name}
                        fill
                        sizes="112px"
                        className="object-cover object-top"
                      />
                    </div>
                    <div>
                      <span className="inline-block px-3 py-1 rounded-full bg-[#FAF9F6] border border-gray-200 text-[11px] font-semibold text-[#E8621A] mb-2">
                        {leader.tagline}
                      </span>
                      <h3 className="text-2xl font-extrabold text-[#0F1932] tracking-tight">
                        {leader.name}
                      </h3>
                      <p className="text-sm font-semibold text-gray-500 mt-0.5">
                        {leader.role}
                      </p>
                    </div>
                  </div>

                  <p className="text-xs sm:text-sm text-gray-700 leading-relaxed font-normal border-t border-gray-100 pt-6">
                    {leader.bio}
                  </p>
                </div>

                <div className="px-8 sm:px-10 py-4 bg-[#FAF9F6] border-t border-gray-100 flex items-center justify-between text-xs text-gray-500 font-medium">
                  <span>LRSD Capital & Rajasthan Global Group</span>
                  <span className="text-[#E8621A] font-bold">Executive Board</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Founder & Managing Director Quote Spotlight */}
      <section className="py-20 md:py-28 px-6 md:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="bg-[#0F1932] rounded-3xl overflow-hidden shadow-2xl border border-white/10">
            <div className="grid lg:grid-cols-[0.9fr_1.1fr] items-stretch">
              {/* Photo */}
              <div className="relative min-h-[420px] lg:min-h-[560px] bg-gradient-to-r from-[#0F1932] to-[#1A2347]">
                <Image
                  src="/lalitdua.png"
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

                  <div className="border-l-2 border-[#E8621A] pl-5 mb-8 space-y-4">
                    <p className="text-base sm:text-lg text-white font-bold leading-snug">
                      &ldquo;Discipline is not the opposite of ambition. It is what makes ambition repeatable.&rdquo;
                    </p>
                    <p className="text-sm sm:text-base text-gray-200 italic leading-relaxed">
                      &ldquo;We have never written off a loan in twenty-four years. That record is not caution for its own sake — it is what allows us to back a company the market has not noticed yet, and to still be standing there when it has.&rdquo;
                    </p>
                  </div>

                  <div className="space-y-3 text-xs sm:text-sm text-gray-300 leading-relaxed">
                    <p>
                      Started with initial equity infusion of ~29.57 lakhs & twenty-four years later that Group is worth approximately ₹3,500 crore — compounded at close to 48% a year, without a single rupee of outside equity, without borrowing, and without ever once advertising for a client.
                    </p>
                    <p>
                      He did not build it by being early to a theme or lucky in a cycle. He built it by refusing, over and over, for twenty-four years, to take a risk he could not fully see — and by staying in the market long after the people who arrived with him had left.
                    </p>
                  </div>
                </div>

                <div className="pt-8 mt-8 border-t border-white/10 flex flex-wrap items-center justify-between gap-4">
                  <div className="flex items-center gap-3">
                    <span className="text-xs font-bold text-[#E8621A]">Since 2002</span>
                    <span className="text-xs text-gray-400">• Zero Borrowings Legacy</span>
                  </div>
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
                  Conducts comprehensive multi-factor underwriting on earnings quality, promoter integrity, collateral quality, and repayment waterfalls for every facility.
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
                  Provides real-time collateral monitoring, pledge maintenance, covenant tracking, and early warning indicator (EWI) stress testing across credit cycles.
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
                  Ensures full alignment with RBI scale-based regulatory frameworks, Fair Practices Code, and statutory public disclosures as an RBI-registered NBFC.
                </p>
              </div>
              <div className="pt-4 border-t border-gray-100 text-[11px] font-bold text-[#E8621A]">
                RBI Middle Layer Compliance
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
