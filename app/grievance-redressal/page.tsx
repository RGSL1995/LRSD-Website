'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Scale,
  ShieldCheck,
  Building2,
  Mail,
  Phone,
  MapPin,
  Clock,
  FileText,
  Download,
  ArrowUpRight,
  ExternalLink,
  ChevronRight,
  ChevronDown,
  CheckCircle2,
  AlertCircle,
  HelpCircle,
  Layers,
  ArrowRight,
  UserCheck
} from 'lucide-react';
import Navbar, { ActionButton } from '@/components/Navbar';
import Footer from '@/components/Footer';
import { SilkWaves } from '@/components/SharedWireframes';

const FLOWCHART_PAGES = [
  { page: 1, title: 'Level 1: Initial Complaint & Registration', file: '/flowchart-page-1.png' },
  { page: 2, title: 'Level 2 & 3: GRO & Principal Nodal Officer', file: '/flowchart-page-2.png' },
  { page: 3, title: 'Level 4: RBI Integrated Ombudsman Scheme', file: '/flowchart-page-3.png' },
  { page: 4, title: 'Level 5: Right to Appeal & ADR Rights', file: '/flowchart-page-4.png' },
];

const ESCALATION_LEVELS = [
  {
    level: 'Level 1',
    title: 'Initial Complaint Submission',
    timeline: 'Resolution within 7 Working Days',
    desc: 'Submit your query, feedback, or complaint through corporate office visit, email, or postal communication.',
    channels: [
      { type: 'Corporate Office', value: 'Unit No. Silver 27/01 and 27/02 Wave One, Block L, Sector 18, Noida, UP - 201301 (Mon–Fri, 10 AM – 6 PM)' },
      { type: 'Email Desk', value: 'admin@lrsdindia.com' },
      { type: 'Postal Communication', value: 'LRSD Securities Private Limited, Corporate Office, Noida - 201301' },
    ],
    status: 'Step 1'
  },
  {
    level: 'Level 2',
    title: 'Escalation to Grievance Redressal Officer (GRO)',
    timeline: 'Resolution within 7 Working Days',
    desc: 'If unresolved within 7 days or if dissatisfied with Level 1 response, escalate directly to the designated GRO.',
    officer: {
      name: 'Mr. Rama Chandran Nair',
      designation: 'Grievance Redressal Officer',
      phone: '+91 98118 45727',
      email: 'admin@lrsdindia.com',
      address: 'Unit No. Silver 27/01 and 27/02 Wave One, Block L, Sector 18, Noida, Uttar Pradesh, 201301'
    },
    status: 'Step 2'
  },
  {
    level: 'Level 3',
    title: 'Escalation to Principal Nodal Officer (PNO)',
    timeline: 'Final Resolution within 30 Days',
    desc: 'If not satisfied with GRO resolution or if matter remains unresolved for 7 days under Level 2, escalate to the Principal Nodal Officer.',
    officer: {
      name: 'Mr. Lalit Dua',
      designation: 'Principal Nodal Officer',
      phone: '+91 98102 12045',
      email: 'pno@lrsdindia.com',
      address: 'Unit No. Silver 27/01 and 27/02 Wave One, Block L, Sector 18, Noida, Uttar Pradesh, 201301'
    },
    status: 'Step 3'
  },
  {
    level: 'Level 4',
    title: 'RBI – Integrated Ombudsman Scheme, 2021',
    timeline: 'Eligible after 30 days of initial lodging or upon rejection',
    desc: 'If the complaint remains unresolved within 30 days or the resolution is unsatisfactory, approach the RBI Ombudsman.',
    channels: [
      { type: '24x7 CMS Portal', value: 'https://cms.rbi.org.in' },
      { type: 'CRPC Email', value: 'crpc@rbi.org.in' },
      { type: 'CRPC Physical Submission', value: 'Centralised Receipt and Processing Centre (CRPC), 4th Floor, Reserve Bank of India, Sector-17, Central Vista, Chandigarh – 160017' }
    ],
    status: 'Step 4'
  },
  {
    level: 'Level 5',
    title: 'Right to Appeal & Alternate Dispute Resolution',
    timeline: 'Appeal within 30 Days of Ombudsman Award/Rejection',
    desc: 'Aggrieved parties may appeal before the Appellate Authority (Executive Director, Consumer Education & Protection Department, RBI) or approach judicial tribunals.',
    channels: [
      { type: 'Appellate Authority', value: 'Executive Director, CEPD, Reserve Bank of India' },
      { type: 'Online Appeal', value: 'CMS Portal: https://cms.rbi.org.in' }
    ],
    status: 'Step 5'
  }
];

export default function GrievanceRedressalPage() {
  const [activeFlowchartPage, setActiveFlowchartPage] = useState(0);
  const [activeTab, setActiveTab] = useState<'levels' | 'flowchart'>('levels');

  return (
    <div className="min-h-screen bg-white text-[#0F1932] overflow-x-hidden selection:bg-[#E8621A] selection:text-white font-sans">
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-36 pb-16 md:pt-44 md:pb-24 px-6 md:px-8 bg-[#FAF9F6] overflow-hidden border-b border-gray-100">
        <SilkWaves />

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-gray-200 shadow-sm mb-6">
            <span className="w-2 h-2 rounded-full bg-[#E8621A]" />
            <p className="text-xs font-bold tracking-widest text-[#E8621A] uppercase">
              Customer Protection &amp; Governance
            </p>
          </div>

          <div className="grid lg:grid-cols-[1.3fr_0.7fr] gap-10 items-end">
            <div>
              <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-[-0.03em] leading-[1.05] text-[#0F1932] mb-6">
                Grievance Redressal{' '}
                <span className="text-[#E8621A]">Mechanism.</span>
              </h1>

              <p className="text-base sm:text-lg text-gray-600 leading-relaxed font-normal max-w-2xl">
                LRSD Securities Private Limited is committed to efficient, impartial, and transparent 
                grievance resolution in full alignment with the Reserve Bank of India (RBI) guidelines.
              </p>
            </div>

            {/* Quick Action Box */}
            <div className="bg-[#0F1932] text-white p-6 sm:p-8 rounded-3xl shadow-xl relative overflow-hidden">
              <div className="flex items-center gap-3 mb-4">
                <Scale className="w-5 h-5 text-[#E8621A]" />
                <span className="text-xs font-bold uppercase tracking-wider text-[#E8621A]">
                  Resolution Commitment
                </span>
              </div>
              <p className="text-xs text-gray-300 leading-relaxed mb-6">
                Every concern matters. We ensure structured logging, transparent investigation, 
                and timely escalation across 5 defined resolution tiers.
              </p>
              <div className="grid grid-cols-2 gap-2 pt-4 border-t border-white/10">
                <a
                  href="/grievance-redressal-mechanism.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-1.5 px-3 py-2 rounded-xl bg-[#E8621A] hover:bg-[#F27125] text-white text-xs font-bold transition-all text-center"
                >
                  <span>Policy PDF</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
                <a
                  href="/lrsd-flowchart.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-1.5 px-3 py-2 rounded-xl bg-white/10 hover:bg-white/20 text-white text-xs font-bold transition-all text-center"
                >
                  <span>Flowchart PDF</span>
                  <Download className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content Tabs (Escalation Steps vs Visual Flowchart) */}
      <section className="py-16 md:py-24 px-6 md:px-8 bg-white">
        <div className="max-w-7xl mx-auto">

          {/* Section Header & Tab Switcher */}
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 mb-12 border-b border-gray-100 pb-6">
            <div>
              <span className="text-xs font-extrabold uppercase tracking-widest text-[#E8621A] block mb-1">
                Resolution Framework
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0F1932]">
                5-Tier Grievance Redressal Architecture
              </h2>
            </div>

            <div className="flex items-center gap-2 p-1.5 rounded-2xl bg-[#FAF9F6] border border-gray-200">
              <button
                onClick={() => setActiveTab('levels')}
                className={`px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                  activeTab === 'levels'
                    ? 'bg-[#0F1932] text-white shadow-sm'
                    : 'text-gray-600 hover:text-[#0F1932]'
                }`}
              >
                Step-by-Step Matrix
              </button>
              <button
                onClick={() => setActiveTab('flowchart')}
                className={`px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                  activeTab === 'flowchart'
                    ? 'bg-[#0F1932] text-white shadow-sm'
                    : 'text-gray-600 hover:text-[#0F1932]'
                }`}
              >
                Official Flowchart View
              </button>
            </div>
          </div>

          {/* TAB 1: Step-by-Step Escalation Matrix */}
          {activeTab === 'levels' && (
            <div className="space-y-8">
              {ESCALATION_LEVELS.map((tier, idx) => (
                <motion.div
                  key={tier.level}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: idx * 0.08 }}
                  className="p-6 sm:p-8 rounded-3xl bg-[#FAF9F6] border border-gray-200/90 hover:border-[#E8621A]/30 hover:shadow-md transition-all"
                >
                  <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-6">
                    <div className="flex-1">
                      <div className="flex flex-wrap items-center gap-3 mb-3">
                        <span className="text-xs font-extrabold text-white bg-[#0F1932] px-3 py-1 rounded-full uppercase tracking-wider">
                          {tier.level}
                        </span>
                        <span className="text-xs font-bold text-[#E8621A] bg-orange-50 px-3 py-1 rounded-full border border-orange-200">
                          {tier.timeline}
                        </span>
                      </div>

                      <h3 className="text-lg sm:text-xl font-bold text-[#0F1932] mb-2">
                        {tier.title}
                      </h3>

                      <p className="text-xs sm:text-sm text-gray-600 leading-relaxed mb-6">
                        {tier.desc}
                      </p>

                      {/* Officer Details if present */}
                      {tier.officer && (
                        <div className="p-5 rounded-2xl bg-white border border-gray-200/80 shadow-2xs">
                          <div className="flex items-center gap-3 mb-3">
                            <div className="w-8 h-8 rounded-full bg-orange-100 flex items-center justify-center text-[#E8621A]">
                              <UserCheck className="w-4 h-4" />
                            </div>
                            <div>
                              <p className="text-sm font-extrabold text-[#0F1932]">
                                {tier.officer.name}
                              </p>
                              <p className="text-xs text-gray-500 font-medium">
                                {tier.officer.designation}
                              </p>
                            </div>
                          </div>

                          <div className="grid sm:grid-cols-2 gap-3 text-xs text-gray-600 pt-2 border-t border-gray-100">
                            <div className="flex items-center gap-2">
                              <Phone className="w-3.5 h-3.5 text-[#E8621A] shrink-0" />
                              <a href={`tel:${tier.officer.phone}`} className="hover:text-[#E8621A] font-bold">
                                {tier.officer.phone}
                              </a>
                            </div>
                            <div className="flex items-center gap-2">
                              <Mail className="w-3.5 h-3.5 text-[#E8621A] shrink-0" />
                              <a href={`mailto:${tier.officer.email}`} className="hover:text-[#E8621A] font-bold">
                                {tier.officer.email}
                              </a>
                            </div>
                            <div className="sm:col-span-2 flex items-start gap-2 text-gray-500">
                              <MapPin className="w-3.5 h-3.5 text-[#E8621A] shrink-0 mt-0.5" />
                              <span>{tier.officer.address}</span>
                            </div>
                          </div>
                        </div>
                      )}

                      {/* Channels if present */}
                      {tier.channels && (
                        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
                          {tier.channels.map((ch, chIdx) => (
                            <div key={chIdx} className="p-4 rounded-xl bg-white border border-gray-200/80">
                              <p className="text-[10px] font-bold uppercase tracking-wider text-[#E8621A] mb-1">
                                {ch.type}
                              </p>
                              {ch.value.startsWith('http') ? (
                                <a
                                  href={ch.value}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="text-xs font-bold text-[#0F1932] hover:text-[#E8621A] inline-flex items-center gap-1 break-all"
                                >
                                  <span>{ch.value}</span>
                                  <ExternalLink className="w-3 h-3 shrink-0" />
                                </a>
                              ) : ch.value.includes('@') ? (
                                <a
                                  href={`mailto:${ch.value}`}
                                  className="text-xs font-bold text-[#0F1932] hover:text-[#E8621A] inline-flex items-center gap-1"
                                >
                                  <span>{ch.value}</span>
                                </a>
                              ) : (
                                <p className="text-xs text-gray-700 font-medium leading-snug">
                                  {ch.value}
                                </p>
                              )}
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          )}

          {/* TAB 2: Official Flowchart View */}
          {activeTab === 'flowchart' && (
            <div className="space-y-8">
              {/* Flowchart Page Navigation Pills */}
              <div className="flex flex-wrap gap-2 justify-center">
                {FLOWCHART_PAGES.map((fp, fpIdx) => (
                  <button
                    key={fp.page}
                    onClick={() => setActiveFlowchartPage(fpIdx)}
                    className={`px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                      activeFlowchartPage === fpIdx
                        ? 'bg-[#E8621A] text-white shadow-md'
                        : 'bg-[#FAF9F6] text-gray-600 hover:bg-gray-100'
                    }`}
                  >
                    <span>{fp.title}</span>
                  </button>
                ))}
              </div>

              {/* Flowchart Image Container */}
              <div className="max-w-4xl mx-auto bg-[#FAF9F6] p-4 sm:p-8 rounded-3xl border border-gray-200 shadow-lg">
                <div className="flex items-center justify-between gap-4 mb-4 pb-4 border-b border-gray-200">
                  <div>
                    <h3 className="text-sm sm:text-base font-extrabold text-[#0F1932]">
                      {FLOWCHART_PAGES[activeFlowchartPage].title}
                    </h3>
                    <p className="text-xs text-gray-500">
                      Page {activeFlowchartPage + 1} of {FLOWCHART_PAGES.length} — Official LRSD Grievance Flowchart
                    </p>
                  </div>

                  <a
                    href="/lrsd-flowchart.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#0F1932] text-white text-xs font-bold hover:bg-[#1C1E22] transition-colors"
                  >
                    <span>Open Full PDF</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </a>
                </div>

                <div className="relative w-full aspect-[2550/3300] bg-white rounded-2xl border border-gray-200 shadow-inner overflow-hidden">
                  <Image
                    src={FLOWCHART_PAGES[activeFlowchartPage].file}
                    alt={FLOWCHART_PAGES[activeFlowchartPage].title}
                    fill
                    className="object-contain"
                    priority
                  />
                </div>

                {/* Page switch controls */}
                <div className="flex items-center justify-between mt-6 pt-4 border-t border-gray-200">
                  <button
                    disabled={activeFlowchartPage === 0}
                    onClick={() => setActiveFlowchartPage(Math.max(0, activeFlowchartPage - 1))}
                    className="px-4 py-2 rounded-xl text-xs font-bold bg-white border border-gray-200 disabled:opacity-40 disabled:cursor-not-allowed hover:bg-gray-50 transition-colors"
                  >
                    &larr; Previous Page
                  </button>
                  <span className="text-xs text-gray-500 font-semibold">
                    {activeFlowchartPage + 1} / {FLOWCHART_PAGES.length}
                  </span>
                  <button
                    disabled={activeFlowchartPage === FLOWCHART_PAGES.length - 1}
                    onClick={() => setActiveFlowchartPage(Math.min(FLOWCHART_PAGES.length - 1, activeFlowchartPage + 1))}
                    className="px-4 py-2 rounded-xl text-xs font-bold bg-white border border-gray-200 disabled:opacity-40 disabled:cursor-not-allowed hover:bg-gray-50 transition-colors"
                  >
                    Next Page &rarr;
                  </button>
                </div>
              </div>
            </div>
          )}

        </div>
      </section>

      {/* Mandatory Complaint Submission Notice & Guidelines */}
      <section className="py-16 px-6 md:px-8 bg-[#FAF9F6] border-t border-gray-200">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-6">
            
            <div className="p-6 rounded-2xl bg-white border border-gray-200 shadow-xs">
              <div className="w-9 h-9 rounded-xl bg-orange-50 border border-orange-100 flex items-center justify-center text-[#E8621A] mb-4">
                <FileText className="w-5 h-5" />
              </div>
              <h4 className="text-sm font-extrabold text-[#0F1932] mb-2">
                Mandatory Details Required
              </h4>
              <p className="text-xs text-gray-600 leading-relaxed">
                When lodging a complaint, please provide your **Loan Application Number** or **Loan Account Number** along with complete factual details. Anonymous complaints are not addressed.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white border border-gray-200 shadow-xs">
              <div className="w-9 h-9 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-center text-blue-600 mb-4">
                <Clock className="w-5 h-5" />
              </div>
              <h4 className="text-sm font-extrabold text-[#0F1932] mb-2">
                Resolution Timelines
              </h4>
              <p className="text-xs text-gray-600 leading-relaxed">
                Initial resolution is targeted within 7 working days. If complex review requires additional time, the customer is formally intimated with an expected resolution date within the 30-day statutory limit.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white border border-gray-200 shadow-xs">
              <div className="w-9 h-9 rounded-xl bg-emerald-50 border border-emerald-100 flex items-center justify-center text-emerald-600 mb-4">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <h4 className="text-sm font-extrabold text-[#0F1932] mb-2">
                RBI Integrated Ombudsman
              </h4>
              <p className="text-xs text-gray-600 leading-relaxed">
                Customers can file a complaint with the RBI Ombudsman under the Reserve Bank - Integrated Ombudsman Scheme, 2021 via **cms.rbi.org.in** after 30 days of initial submission.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* Download Center Section */}
      <section className="py-16 px-6 md:px-8 bg-white border-t border-gray-100">
        <div className="max-w-7xl mx-auto">
          <div className="bg-[#0F1932] text-white rounded-3xl p-8 sm:p-12 shadow-2xl">
            <div className="grid lg:grid-cols-12 gap-8 items-center">
              
              <div className="lg:col-span-7">
                <span className="text-xs font-bold uppercase tracking-wider text-[#E8621A] block mb-2">
                  Official Statutory Documents
                </span>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-white mb-4">
                  Download Grievance Redressal Policies &amp; Flowcharts
                </h3>
                <p className="text-xs sm:text-sm text-gray-300 leading-relaxed max-w-xl">
                  Access the official board-approved Grievance Redressal Mechanism document, 
                  the complete 5-level escalation flowchart, and Fair Practices Code.
                </p>
              </div>

              <div className="lg:col-span-5 flex flex-col sm:flex-row gap-3">
                <a
                  href="/grievance-redressal-mechanism.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 inline-flex items-center justify-center gap-2 p-3.5 rounded-xl bg-[#E8621A] hover:bg-[#F27125] text-white text-xs font-bold transition-all shadow-md text-center"
                >
                  <FileText className="w-4 h-4" />
                  <span>Download Policy</span>
                </a>

                <a
                  href="/lrsd-flowchart.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 inline-flex items-center justify-center gap-2 p-3.5 rounded-xl bg-white/10 hover:bg-white/20 text-white text-xs font-bold transition-all border border-white/10 text-center"
                >
                  <Download className="w-4 h-4" />
                  <span>Download Flowchart</span>
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
