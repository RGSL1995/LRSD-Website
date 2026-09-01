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
      image: "/lalitduanew.png",
      bio: "Started with initial equity infusion of ~29.57 lakhs & thirty-one years later that Group is worth approximately ₹3,500 crore — compounded at close to 48% a year, without a single rupee of outside equity, without borrowing, and without ever once advertising for a client. He did not build it by being early to a theme or lucky in a cycle. He built it by refusing, over and over, for thirty-one years, to take a risk he could not fully see — and by staying in the market long after the people who arrived with him had left.",
    },
    {
      name: "Ms. Shreya Dua",
      role: "Director",
      tagline: "Wharton MBA, NYU Stern BS/MS, Ex-BCG",
      image: "/Shreya.png",
      bio: "She holds the distinction of being the youngest MBA graduate in Wharton's history, alongside a double master's degree in Finance and Strategic Management. Her academic foundation began at NYU Stern, where she completed both her bachelor's and master's degrees. Her career spans investment banking at Anand Rathi and strategy consulting at BCG across New York and Mumbai. She returned to India to build on a foundation her father established over twenty-four years — growing the business from an initial capital of ₹29.57 lakh through disciplined, conviction-led decision-making. Her focus today is on institutionalising that same judgement and discipline within a modern governance framework and capital structure, positioning the business for a market opportunity many times larger than where it began. One generation established the conviction. The next is building the institution to carry it forward.",
    },
    {
      name: "Mr. Amit Arora",
      role: "Chief Executive Officer",
      tagline: "26+ years in Banking & Wealth Management Lending (Ex-UBS)",
      image: "/amit arora.png",
      bio: "Amit Arora is a seasoned banking and financial services professional with over 26 years of experience across leading global and Indian financial institutions, including UBS, Credit Suisse, The Royal Bank of Scotland, DSP Merrill Lynch, HDFC Bank and IL&FS. Prior to joining LRSD Capital, he spent over 15 years with UBS Finance India Private Limited, where he was Director, Product Head – Lombard and a Board Member. He played a pivotal role in building and scaling the wealth management lending business in India to approximately USD 500 million, contributing significantly to the growth of the franchise while maintaining a zero-NPA track record. He has extensive experience in structured and collateral-backed lending, credit and risk management, product development and building new financial businesses.",
    },
    {
      name: "Mr. Manish Chauhan",
      role: "Chief Financial Officer",
      tagline: "With the group since inception",
      image: "/manishnew1.jpeg",
      bio: "Manish Chauhan joined an idea, in 1995, and has not left it since. Chief Financial Officer from the first year to the present one — through the 2008 crisis, the 2018 liquidity squeeze and the pandemic. Manish Chauhan has spent thirty-one years running the finances of a company that funded itself. He is now building the financial architecture of an institution that is ready to be a lender in its own right.",
    },
    {
      name: "Ms. Raj Nandini Jain",
      role: "Group Company Secretary & Chief Compliance Officer",
      tagline: "12+ years in Regulatory Compliance, Governance & Secretarial (CS, MBA)",
      image: "/Nandini.jpeg",
      bio: "Ms. Raj Nandini Jain is the Group Company Secretary and Chief Compliance Officer of RGSPL, with over 12 years of experience across regulatory compliance, corporate governance, legal and secretarial functions, risk management and financial services, including prior roles at Aryadhan Financial Solutions, Natural Cemeco, Lord Fincap, Hindustan Zinc and ING Vysya Bank. A qualified Company Secretary and an MBA in Finance, she has developed substantial expertise across the banking, manufacturing and NBFC sectors including both Middle Layer and Base Layer NBFCs covering RBI Master Directions and regulatory frameworks, supervisory expectations, compliance-risk assessment, statutory and regulatory reporting, and policy implementation. She leads a dedicated team of compliance professionals and oversees RGSPL's independent compliance function, adopting a forward-looking, technology-driven approach that uses AI and compliance-management tools to track regulatory obligations, strengthen documentation and support timely escalation, while ensuring all compliance decisions remain subject to professional judgment, human oversight, confidentiality and appropriate information-security safeguards. She advises the Board and senior management on regulatory developments and compliance risks and serves as a principal liaison with regulatory authorities.",
    },
  ];

  return (
    <div className="min-h-screen bg-white text-[#0F1932] overflow-x-hidden selection:bg-[#E8621A] selection:text-white font-sans">
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-36 pb-16 md:pt-44 md:pb-20 px-6 md:px-8 bg-[#FAF9F6] overflow-hidden">
        <SilkWaves />

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="flex flex-wrap items-center justify-between gap-4 mb-8">
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-white border border-[#E8621A]/30 shadow-sm">
              <span className="w-2 h-2 rounded-full bg-[#E8621A]" />
              <span className="text-xs font-extrabold tracking-widest text-[#0F1932] uppercase">
                Executive Leadership &amp; Governance
              </span>
            </div>

            {/* Navigation Switcher */}
            <div className="flex items-center gap-1.5 p-1 bg-white rounded-xl border border-gray-200 shadow-xs">
              <span className="px-3.5 py-1.5 rounded-lg text-xs font-bold bg-[#0F1932] text-white">
                Executive Leadership
              </span>
              <Link
                href="/about/board-of-directors"
                className="px-3.5 py-1.5 rounded-lg text-xs font-bold text-gray-600 hover:text-[#0F1932] hover:bg-gray-50 transition-colors"
              >
                Board of Directors &rarr;
              </Link>
            </div>
          </div>

          <div className="max-w-5xl mb-16">
            <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-[76px] font-extrabold tracking-[-0.035em] leading-[1.04] text-[#0F1932] mb-8">
              Two generations,{" "}
              <span className="text-gray-400 font-normal">one institutional mindset.</span>
            </h1>

            <div className="border-l-2 border-[#E8621A] pl-6 py-1">
              <p className="text-xl sm:text-2xl md:text-[26px] text-gray-800 leading-relaxed md:leading-[1.45] font-medium max-w-4xl">
                Our leadership brings together three decades of capital markets mastery, corporate finance acumen, and institutional credit governance with a thirty-one-year record of zero write-offs.
              </p>
            </div>
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
              </motion.div>
            ))}
          </div>

          {/* Link to Board of Directors */}
          <div className="mt-12 bg-white rounded-3xl p-8 border border-gray-200 shadow-sm flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-2xl bg-orange-50 border border-orange-100 flex items-center justify-center text-[#E8621A] shrink-0">
                <Landmark className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-lg font-extrabold text-[#0F1932]">
                  Explore the Governing Board of Directors
                </h3>
                <p className="text-xs text-gray-500 mt-0.5">
                  Meet the 5 board directors stewarding statutory governance, risk committees, and fiduciary compliance.
                </p>
              </div>
            </div>
            <Link
              href="/about/board-of-directors"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-[#0F1932] hover:bg-[#1C1E22] text-white text-xs font-bold transition-all shadow-md shrink-0"
            >
              <span>View Board of Directors</span>
              <ArrowRight className="w-4 h-4 text-[#E8621A]" />
            </Link>
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
