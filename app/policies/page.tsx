'use client';

import React, { useState, useMemo } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  FileText, 
  Download, 
  ExternalLink, 
  Search, 
  ShieldCheck, 
  Scale, 
  Building2, 
  Users, 
  HelpCircle, 
  FileCheck, 
  AlertCircle,
  Phone,
  Mail,
  ArrowUpRight,
  ArrowRight,
  Filter
} from 'lucide-react';
import Navbar, { ActionButton } from '@/components/Navbar';
import Footer from '@/components/Footer';
import { SilkWaves } from '@/components/SharedWireframes';

interface PolicyDocument {
  id: string;
  title: string;
  category: 'governance' | 'customer' | 'disclosure' | 'legal';
  categoryLabel: string;
  description: string;
  filename: string;
  fileSize: string;
  language?: string;
  lastUpdated?: string;
  badge?: string;
}

const DOCUMENTS: PolicyDocument[] = [
  // Corporate Governance
  {
    id: 'corp-gov',
    title: 'Corporate Governance Code',
    category: 'governance',
    categoryLabel: 'Corporate Governance',
    description: 'Defines the structural framework, board oversight standards, accountability norms, and ethical business guidelines governing LRSD.',
    filename: 'corporate-governance-code.pdf',
    fileSize: '402 KB',
    badge: 'Core Governance'
  },
  {
    id: 'nom-remun',
    title: 'Compensation, Nomination & Remuneration Policy',
    category: 'governance',
    categoryLabel: 'Corporate Governance',
    description: 'Guiding criteria for the nomination, appointment, evaluation, and remuneration structure of Directors, Key Managerial Personnel (KMP), and Senior Management.',
    filename: 'compensation-nomination-remuneration-policy.pdf',
    fileSize: '613 KB',
  },
  {
    id: 'rpt-policy',
    title: 'Related Party Transactions Policy',
    category: 'governance',
    categoryLabel: 'Corporate Governance',
    description: 'Framework to ensure proper approval, monitoring, and transparent reporting of all transactions entered into with related parties.',
    filename: 'related-party-transactions-policy.pdf',
    fileSize: '946 KB',
  },
  {
    id: 'csr-policy',
    title: 'Corporate Social Responsibility (CSR) Policy',
    category: 'governance',
    categoryLabel: 'Corporate Governance',
    description: 'Sets out company commitments, focus areas, implementation mechanisms, and community development initiatives under Section 135 of the Companies Act.',
    filename: 'csr-policy.pdf',
    fileSize: '386 KB',
  },

  // Customer Protection & Codes
  {
    id: 'fair-practices-en',
    title: 'Fair Practices Code (English)',
    category: 'customer',
    categoryLabel: 'Customer Conduct & Codes',
    description: 'Standard operating principles, loan appraisal guidelines, non-coercive recovery practices, and transparent customer disclosure standards prescribed by RBI.',
    filename: 'fair-practices-code.pdf',
    fileSize: '364 KB',
    language: 'English',
    badge: 'RBI Mandated'
  },
  {
    id: 'fair-practices-hi',
    title: 'Fair Practices Code (निष्पक्ष व्यवहार संहिता)',
    category: 'customer',
    categoryLabel: 'Customer Conduct & Codes',
    description: 'ऋणदाताओं और ग्राहकों के बीच निष्पक्ष, पारदर्शी और नैतिक ऋण प्रथाओं के लिए भारतीय रिज़र्व बैंक (RBI) द्वारा निर्देशित आचार संहिता।',
    filename: 'fair-practices-code-hindi.pdf',
    fileSize: '239 KB',
    language: 'हिन्दी (Hindi)',
    badge: 'Regional'
  },
  {
    id: 'grievance-redressal',
    title: 'Grievance Redressal Mechanism',
    category: 'customer',
    categoryLabel: 'Customer Conduct & Codes',
    description: 'Comprehensive 5-tier customer grievance escalation matrix, designated officer contacts (GRO & Principal Nodal Officer), and RBI Ombudsman timelines.',
    filename: 'grievance-redressal-mechanism.pdf',
    fileSize: '318 KB',
    badge: 'Escalation Matrix'
  },
  {
    id: 'grievance-flowchart',
    title: 'Grievance Redressal Flowchart',
    category: 'customer',
    categoryLabel: 'Customer Conduct & Codes',
    description: 'Visual step-by-step resolution workflow diagram covering Initial Registration, GRO Escalation, PNO Review, RBI CMS Portal, and Appellate Authority.',
    filename: 'lrsd-flowchart.pdf',
    fileSize: '513 KB',
    badge: 'Flowchart'
  },
  {
    id: 'interest-rate',
    title: 'Interest Rate Model & Policy',
    category: 'customer',
    categoryLabel: 'Customer Conduct & Codes',
    description: 'Internal principles and risk-graduated criteria determining loan interest rates, processing charges, and annualized percentage rates (APR).',
    filename: 'interest-rate-policy.pdf',
    fileSize: '403 KB',
  },
  {
    id: 'consumer-edu',
    title: 'Consumer Education Literature',
    category: 'customer',
    categoryLabel: 'Customer Conduct & Codes',
    description: 'Empowering borrowers with essential information on loan categorization, SMA/NPA tagging, credit bureau reporting, and secure borrowing habits.',
    filename: 'consumer-education-literature.pdf',
    fileSize: '907 KB',
  },

  // Statutory Disclosures
  {
    id: 'public-disclosure-jun',
    title: 'Public Liquidity & Regulatory Disclosure (June 2026)',
    category: 'disclosure',
    categoryLabel: 'Statutory Disclosures',
    description: 'Quarterly regulatory disclosure of Liquidity Risk Management Framework, asset-liability profile, funding concentration, and prudential ratios.',
    filename: 'public-disclosure.pdf',
    fileSize: '82 KB',
    badge: 'Latest Filing'
  },
  {
    id: 'disclosure-policy',
    title: 'Disclosure & Materiality Policy',
    category: 'disclosure',
    categoryLabel: 'Statutory Disclosures',
    description: 'Guidelines for determining materiality of events and timely dissemination of public disclosures to stakeholders and regulatory bodies.',
    filename: 'disclosure-policy.pdf',
    fileSize: '310 KB',
  },

  // Website & Legal Terms
  {
    id: 'privacy-policy',
    title: 'Website Privacy Policy',
    category: 'legal',
    categoryLabel: 'Legal & Terms',
    description: 'Outlines our protocol regarding collection, usage, encryption, storage, and protection of visitor information and sensitive user data.',
    filename: 'privacy-policy.pdf',
    fileSize: '323 KB',
  },
  {
    id: 'terms-of-use',
    title: 'Website Terms of Use',
    category: 'legal',
    categoryLabel: 'Legal & Terms',
    description: 'Terms, conditions, disclaimers, and intellectual property provisions governing access and usage of LRSD digital assets.',
    filename: 'terms-of-use.pdf',
    fileSize: '320 KB',
  },
  {
    id: 'website-disclaimer',
    title: 'Website Statutory Disclaimer',
    category: 'legal',
    categoryLabel: 'Legal & Terms',
    description: 'Legal disclaimer concerning content accuracy, financial advice non-solicitation, and limitation of digital liability.',
    filename: 'disclaimer.pdf',
    fileSize: '140 KB',
  },
];

const CATEGORIES = [
  { key: 'all', label: 'All Documents', count: DOCUMENTS.length },
  { key: 'governance', label: 'Corporate Governance', count: DOCUMENTS.filter(d => d.category === 'governance').length },
  { key: 'customer', label: 'Customer Codes & Conduct', count: DOCUMENTS.filter(d => d.category === 'customer').length },
  { key: 'disclosure', label: 'Statutory Disclosures', count: DOCUMENTS.filter(d => d.category === 'disclosure').length },
  { key: 'legal', label: 'Website & Legal', count: DOCUMENTS.filter(d => d.category === 'legal').length },
];

export default function PoliciesPage() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredDocuments = useMemo(() => {
    return DOCUMENTS.filter((doc) => {
      const matchesCategory = selectedCategory === 'all' || doc.category === selectedCategory;
      const q = searchQuery.toLowerCase().trim();
      const matchesQuery =
        !q ||
        doc.title.toLowerCase().includes(q) ||
        doc.description.toLowerCase().includes(q) ||
        doc.categoryLabel.toLowerCase().includes(q) ||
        (doc.language && doc.language.toLowerCase().includes(q));
      return matchesCategory && matchesQuery;
    });
  }, [selectedCategory, searchQuery]);

  return (
    <div className="min-h-screen bg-white text-[#0F1932] overflow-x-hidden selection:bg-[#E8621A] selection:text-white font-sans">
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-36 pb-16 md:pt-44 md:pb-24 px-6 md:px-8 bg-[#FAF9F6] overflow-hidden border-b border-gray-100">
        <SilkWaves />

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-gray-200 shadow-sm mb-6">
            <span className="w-2 h-2 rounded-full bg-[#E8621A]" />
            <p className="text-xs font-bold tracking-widest text-gray-500 uppercase">
              Regulatory Compliance & Governance
            </p>
          </div>

          <div className="grid lg:grid-cols-[1.3fr_0.7fr] gap-10 items-end">
            <div>
              <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-[-0.03em] leading-[1.05] text-[#0F1932] mb-6">
                Policies, Codes &amp;{' '}
                <span className="text-[#E8621A]">Disclosures.</span>
              </h1>

              <p className="text-base sm:text-lg text-gray-600 leading-relaxed font-normal max-w-2xl">
                LRSD is committed to institutional governance, regulatory fidelity, 
                and uncompromised transparency under the Reserve Bank of India’s NBFC framework.
              </p>
            </div>

            {/* Quick Stat Pill */}
            <div className="bg-[#0F1932] text-white p-6 sm:p-7 rounded-3xl shadow-xl relative overflow-hidden">
              <div className="flex items-center gap-3 mb-3">
                <ShieldCheck className="w-5 h-5 text-[#E8621A]" />
                <span className="text-xs font-bold uppercase tracking-wider text-[#E8621A]">
                  Statutory Fidelity
                </span>
              </div>
              <p className="text-xs text-gray-300 leading-relaxed">
                All policy documents and public liquidity disclosures are reviewed 
                and published under RBI Master Directions and applicable corporate laws.
              </p>
              <div className="mt-4 pt-4 border-t border-white/10 flex items-center justify-between text-xs text-gray-400">
                <span>Active Documents: <strong className="text-white">{DOCUMENTS.length}</strong></span>
                <span className="text-emerald-400 font-medium">✓ Up to Date</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content Section with Search & Filter */}
      <section className="py-16 md:py-20 px-6 md:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          
          {/* Controls Bar (Search + Categories) */}
          <div className="space-y-6 mb-12">
            <div className="flex flex-col md:flex-row gap-4 justify-between items-stretch md:items-center">
              
              {/* Search Bar */}
              <div className="relative flex-1 max-w-md">
                <Search className="w-4 h-4 text-gray-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                <input
                  type="text"
                  placeholder="Search policies, codes, disclosures..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-gray-200 bg-[#FAF9F6] text-xs sm:text-sm text-[#0F1932] placeholder-gray-400 focus:outline-none focus:border-[#E8621A] focus:bg-white transition-all shadow-xs"
                />
                {searchQuery && (
                  <button
                    onClick={() => setSearchQuery('')}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-xs font-bold text-gray-400 hover:text-gray-600"
                  >
                    Clear
                  </button>
                )}
              </div>

              {/* Document counter */}
              <div className="text-xs text-gray-500 font-medium self-end md:self-center">
                Showing <span className="font-bold text-[#0F1932]">{filteredDocuments.length}</span> of {DOCUMENTS.length} documents
              </div>
            </div>

            {/* Category Filter Tabs */}
            <div className="flex flex-wrap gap-2 pt-2 border-b border-gray-100 pb-4">
              {CATEGORIES.map((category) => {
                const isActive = selectedCategory === category.key;
                return (
                  <button
                    key={category.key}
                    onClick={() => setSelectedCategory(category.key)}
                    className={`inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                      isActive
                        ? 'bg-[#0F1932] text-white shadow-md'
                        : 'bg-[#FAF9F6] text-gray-600 hover:bg-gray-100 hover:text-[#0F1932]'
                    }`}
                  >
                    <span>{category.label}</span>
                    <span
                      className={`text-[10px] px-1.5 py-0.5 rounded-full ${
                        isActive
                          ? 'bg-[#E8621A] text-white'
                          : 'bg-gray-200 text-gray-600'
                      }`}
                    >
                      {category.count}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Documents Grid */}
          {filteredDocuments.length === 0 ? (
            <div className="text-center py-16 px-4 bg-[#FAF9F6] rounded-2xl border border-gray-100">
              <AlertCircle className="w-10 h-10 text-gray-400 mx-auto mb-3" />
              <p className="text-base font-bold text-[#0F1932] mb-1">No documents match your query</p>
              <p className="text-xs text-gray-500 max-w-sm mx-auto mb-4">
                We couldn't find any policy or disclosure document matching "{searchQuery}".
              </p>
              <button
                onClick={() => {
                  setSearchQuery('');
                  setSelectedCategory('all');
                }}
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-[#E8621A] text-white text-xs font-bold hover:bg-[#F27125] transition-colors"
              >
                Reset Filters
              </button>
            </div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredDocuments.map((doc, idx) => {
                const encodedPath = `/${encodeURIComponent(doc.filename)}`;
                return (
                  <motion.div
                    key={doc.id}
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: idx * 0.04 }}
                    className="flex flex-col justify-between p-6 rounded-2xl bg-white border border-gray-200/80 hover:border-[#E8621A]/40 hover:shadow-lg transition-all duration-300 group"
                  >
                    <div>
                      {/* Card Header: Category & Badge */}
                      <div className="flex items-center justify-between gap-2 mb-3">
                        <span className="text-[10px] font-bold uppercase tracking-wider text-[#E8621A] bg-orange-50 px-2.5 py-1 rounded-md border border-orange-100">
                          {doc.categoryLabel}
                        </span>
                        {doc.badge && (
                          <span className="text-[10px] font-bold text-gray-600 bg-gray-100 px-2 py-0.5 rounded">
                            {doc.badge}
                          </span>
                        )}
                        {doc.language && (
                          <span className="text-[10px] font-bold text-blue-700 bg-blue-50 px-2 py-0.5 rounded border border-blue-100">
                            {doc.language}
                          </span>
                        )}
                      </div>

                      {/* Title */}
                      <h3 className="text-base font-bold text-[#0F1932] group-hover:text-[#E8621A] transition-colors mb-2 line-clamp-2">
                        {doc.title}
                      </h3>

                      {/* Description */}
                      <p className="text-xs text-gray-600 leading-relaxed mb-6 line-clamp-3">
                        {doc.description}
                      </p>
                    </div>

                    {/* Card Footer: Metadata & Actions */}
                    <div className="pt-4 border-t border-gray-100">
                      <div className="flex items-center justify-between text-[11px] text-gray-400 mb-3.5">
                        <span className="inline-flex items-center gap-1 font-medium">
                          <FileText className="w-3.5 h-3.5 text-red-500" />
                          PDF Document
                        </span>
                        <span className="font-semibold text-gray-500">{doc.fileSize}</span>
                      </div>

                      <div className="grid grid-cols-2 gap-2">
                        <a
                          href={encodedPath}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center justify-center gap-1.5 px-3 py-2 rounded-xl bg-[#0F1932] hover:bg-[#1C1E22] text-white text-xs font-bold transition-all group/btn shadow-xs cursor-pointer"
                        >
                          <span>View PDF</span>
                          <ArrowUpRight className="w-3.5 h-3.5 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
                        </a>

                        <a
                          href={encodedPath}
                          download={doc.filename}
                          className="inline-flex items-center justify-center gap-1.5 px-3 py-2 rounded-xl bg-[#FAF9F6] hover:bg-gray-100 text-gray-700 text-xs font-bold border border-gray-200 transition-colors cursor-pointer"
                        >
                          <Download className="w-3.5 h-3.5 text-gray-500" />
                          <span>Download</span>
                        </a>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          )}
        </div>
      </section>

      {/* Grievance Redressal & Officer Escalation Notice */}
      <section className="py-16 px-6 md:px-8 bg-[#FAF9F6] border-t border-gray-200/80">
        <div className="max-w-7xl mx-auto">
          <div className="bg-[#0F1932] text-white rounded-3xl p-8 md:p-12 shadow-2xl relative overflow-hidden">
            <div className="grid lg:grid-cols-12 gap-8 items-center">
              
              <div className="lg:col-span-8">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-[#E8621A] text-xs font-bold uppercase tracking-wider mb-4">
                  <Scale className="w-3.5 h-3.5" />
                  Grievance Redressal Desk
                </div>

                <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight mb-4">
                  Dedicated Customer Grievance &amp; Compliance Redressal
                </h2>

                <p className="text-sm text-gray-300 leading-relaxed max-w-2xl mb-6">
                  In compliance with Reserve Bank of India directions, customers and stakeholders 
                  can escalate unresolved queries, fair practice concerns, or disputes directly to our 
                  designated Grievance Redressal Officer.
                </p>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="p-4 rounded-xl bg-white/5 border border-white/10">
                    <p className="text-[11px] text-gray-400 uppercase font-bold tracking-wider mb-1">
                      Email Support Desk
                    </p>
                    <a
                      href="mailto:admin@lrsdindia.com"
                      className="text-sm font-bold text-white hover:text-[#E8621A] transition-colors flex items-center gap-1.5"
                    >
                      <Mail className="w-4 h-4 text-[#E8621A]" />
                      admin@lrsdindia.com
                    </a>
                  </div>

                  <div className="p-4 rounded-xl bg-white/5 border border-white/10">
                    <p className="text-[11px] text-gray-400 uppercase font-bold tracking-wider mb-1">
                      Direct Helpline
                    </p>
                    <a
                      href="tel:+919810278244"
                      className="text-sm font-bold text-white hover:text-[#E8621A] transition-colors flex items-center gap-1.5"
                    >
                      <Phone className="w-4 h-4 text-[#E8621A]" />
                      +91 98102 78244
                    </a>
                  </div>
                </div>
              </div>

              {/* Action Box */}
              <div className="lg:col-span-4 flex flex-col gap-3">
                <Link
                  href="/grievance-redressal"
                  className="w-full inline-flex items-center justify-center gap-2 p-3.5 rounded-xl bg-[#E8621A] hover:bg-[#F27125] text-white text-xs sm:text-sm font-bold transition-all shadow-md text-center cursor-pointer"
                >
                  <span>View Grievance &amp; Flowchart Portal</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>

                <a
                  href="/lrsd-flowchart.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 p-3.5 rounded-xl bg-white/10 hover:bg-white/15 text-white text-xs sm:text-sm font-bold transition-all border border-white/10 text-center cursor-pointer"
                >
                  <span>Download Flowchart PDF</span>
                  <ExternalLink className="w-4 h-4" />
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
