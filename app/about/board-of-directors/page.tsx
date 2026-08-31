'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { SilkWaves } from '@/components/SharedWireframes';
import { ArrowUpRight } from 'lucide-react';

interface Director {
  name: string;
  designation: string;
  image: string;
  badge: string;
  bio: string;
}

export default function BoardOfDirectorsPage() {
  const directors: Director[] = [
    {
      name: "Mr. Lalit Dua",
      designation: "Managing Director",
      image: "/lalitduanew.png",
      badge: "Founder & Executive Steward",
      bio: "Founder and Managing Director guiding LRSD Capital's long-term strategic vision, capital allocation philosophy, and disciplined underwriting culture. With 30 years of capital markets mastery and compounding acumen, he leads the institution with an unbroken heritage of risk aversion and zero write-offs."
    },
    {
      name: "Mr. Pranav Jain",
      designation: "Independent Director",
      image: "/Pranav Jain.png",
      badge: "Corporate Governance & Strategy",
      bio: "Director on the Board providing strategic oversight, corporate governance expertise, and enterprise risk review. Brings rigorous institutional thinking and strategic deliberation to ensure sound capital governance and sustainable shareholder value."
    },
    {
      name: "Mr. Nanda Kumar Gomathysukumara",
      designation: "Independent Director",
      image: "/Nanda Kumar.png",
      badge: "Strategic Advisory & Compliance",
      bio: "Director on the Board contributing extensive operational acumen, compliance oversight, and institutional guidance. Plays an active role in board deliberations and fiduciary alignment across credit operations."
    },
    {
      name: "Mr. Rama Chandran Nair",
      designation: "Director",
      image: "/RCNair.png",
      badge: "Administrative Stewardship",
      bio: "Director on the Board offering deep administrative governance, stakeholder management, and regulatory compliance expertise. Anchors customer protection standards and institutional integrity across corporate processes."
    },
    {
      name: "Ms. Shreya Dua",
      designation: "Director",
      image: "/Shreya.png",
      badge: "Institutional Architecture (Ex-BCG)",
      bio: "Director driving institutional scaling, strategic expansion, and next-generation capital architecture. Wharton MBA (youngest in Wharton's history), double master's from NYU Stern, and former strategy consultant at BCG (New York & Mumbai)."
    },
  ];

  return (
    <div className="min-h-screen bg-white text-[#0F1932] overflow-x-hidden selection:bg-[#E8621A] selection:text-white font-sans">
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-36 pb-16 md:pt-44 md:pb-20 px-6 md:px-8 bg-[#FAF9F6] overflow-hidden border-b border-gray-100">
        <SilkWaves />

        <div className="max-w-7xl mx-auto relative z-10">
          {/* Top Badge & Sibling Link */}
          <div className="flex flex-wrap items-center justify-between gap-4 mb-8">
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-white border border-[#E8621A]/30 shadow-sm">
              <span className="w-2 h-2 rounded-full bg-[#E8621A]" />
              <span className="text-xs font-extrabold tracking-widest text-[#0F1932] uppercase">
                Corporate Governance &amp; Fiduciary Board
              </span>
            </div>

            {/* Navigation Switcher */}
            <div className="flex items-center gap-1.5 p-1 bg-white rounded-xl border border-gray-200 shadow-xs">
              <span className="px-3.5 py-1.5 rounded-lg text-xs font-bold bg-[#0F1932] text-white">
                Board of Directors
              </span>
              <Link
                href="/about/leadership"
                className="px-3.5 py-1.5 rounded-lg text-xs font-bold text-gray-600 hover:text-[#0F1932] hover:bg-gray-50 transition-colors"
              >
                Executive Leadership &rarr;
              </Link>
            </div>
          </div>

          <div className="max-w-5xl">
            <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-[74px] font-extrabold tracking-[-0.035em] leading-[1.04] text-[#0F1932] mb-8">
              Board of <span className="text-[#E8621A]">Directors.</span>
            </h1>

            <div className="border-l-2 border-[#E8621A] pl-6 py-1">
              <p className="text-xl sm:text-2xl md:text-[24px] text-gray-800 leading-relaxed md:leading-[1.45] font-medium max-w-4xl">
                Guiding strategic conviction, multi-tier risk discipline, and institutional credit stewardship with an enduring commitment to regulatory transparency and governance excellence.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Directors Grid Section */}
      <section className="py-20 md:py-28 px-6 md:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-extrabold tracking-widest text-[#E8621A] uppercase block mb-2">
              Fiduciary Leadership
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#0F1932] tracking-tight mb-4">
              The Governing Board
            </h2>
            <p className="text-sm sm:text-base text-gray-600">
              A balanced board comprising seasoned industry pioneers, executive founders, and governance practitioners.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {directors.map((director, idx) => (
              <motion.div
                key={director.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.35, delay: idx * 0.08 }}
                whileHover={{ y: -6 }}
                className="bg-[#FAF9F6] rounded-3xl overflow-hidden border border-gray-200/90 hover:border-[#E8621A]/40 hover:shadow-xl transition-all flex flex-col justify-between group"
              >
                <div>
                  {/* Photo Container */}
                  <div className="relative aspect-[4/4.5] w-full bg-[#0F1932] overflow-hidden">
                    <Image
                      src={director.image}
                      alt={director.name}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0F1932] via-transparent to-transparent opacity-80" />
                    
                    {/* Badge Overlay */}
                    <div className="absolute top-4 left-4">
                      <span className="inline-block px-3 py-1 rounded-full bg-white/90 backdrop-blur-md text-[10px] font-extrabold tracking-wider text-[#0F1932] uppercase shadow-xs">
                        {director.designation}
                      </span>
                    </div>

                    <div className="absolute bottom-4 left-4 right-4 text-white">
                      <h3 className="text-xl sm:text-2xl font-extrabold text-white tracking-tight">
                        {director.name}
                      </h3>
                      <p className="text-xs text-orange-300 font-semibold mt-0.5">
                        {director.badge}
                      </p>
                    </div>
                  </div>

                  {/* Body Content */}
                  <div className="p-6 sm:p-7">
                    <p className="text-xs sm:text-sm text-gray-700 leading-relaxed font-normal">
                      {director.bio}
                    </p>
                  </div>
                </div>

                {/* Footer Tag */}
                <div className="px-6 py-3.5 bg-white border-t border-gray-200/90 flex items-center justify-between text-xs font-semibold text-gray-500">
                  <span>LRSD Capital</span>
                  <span className="text-[#E8621A] font-bold">Board of Directors</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Statutory Policies & Governance Downloads */}
      <section className="py-20 px-6 md:px-8 bg-[#FAF9F6] border-t border-gray-200">
        <div className="max-w-7xl mx-auto">
          <div className="bg-[#0F1932] text-white rounded-3xl p-8 sm:p-12 shadow-2xl">
            <div className="grid lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-7">
                <span className="text-xs font-bold uppercase tracking-wider text-[#E8621A] block mb-2">
                  Statutory Policies &amp; Charters
                </span>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-white mb-4">
                  Board-Approved Governance Policies
                </h3>
                <p className="text-xs sm:text-sm text-gray-300 leading-relaxed max-w-xl">
                  Access official board-approved codes, nomination &amp; remuneration policies, fair practices standards, and corporate disclosures.
                </p>
              </div>

              <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 gap-3">
                <a
                  href="/corporate-governance-code.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-between p-3.5 rounded-xl bg-white/10 hover:bg-white/20 text-white text-xs font-bold transition-all border border-white/10"
                >
                  <span className="truncate">Corporate Governance</span>
                  <ArrowUpRight className="w-4 h-4 text-[#E8621A] shrink-0" />
                </a>

                <a
                  href="/compensation-nomination-remuneration-policy.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-between p-3.5 rounded-xl bg-white/10 hover:bg-white/20 text-white text-xs font-bold transition-all border border-white/10"
                >
                  <span className="truncate">Nomination Policy</span>
                  <ArrowUpRight className="w-4 h-4 text-[#E8621A] shrink-0" />
                </a>

                <a
                  href="/fair-practices-code.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-between p-3.5 rounded-xl bg-white/10 hover:bg-white/20 text-white text-xs font-bold transition-all border border-white/10"
                >
                  <span className="truncate">Fair Practices Code</span>
                  <ArrowUpRight className="w-4 h-4 text-[#E8621A] shrink-0" />
                </a>

                <a
                  href="/csr-policy.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-between p-3.5 rounded-xl bg-white/10 hover:bg-white/20 text-white text-xs font-bold transition-all border border-white/10"
                >
                  <span className="truncate">CSR Policy</span>
                  <ArrowUpRight className="w-4 h-4 text-[#E8621A] shrink-0" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
