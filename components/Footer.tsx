'use client';

import React from 'react';
import Link from 'next/link';
import { FaLinkedin, FaXTwitter, FaFacebook, FaInstagram } from 'react-icons/fa6';
import { ArrowRight } from 'lucide-react';
import { useConversationModal } from './ConversationModal';

export default function Footer() {
  const { openModal } = useConversationModal();
  return (
    <footer className="bg-[#0F1932] text-white border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6 md:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-10 mb-14">
          {/* Column 1: Brand */}
          <div className="md:col-span-1">
            <Link href="/" className="inline-block mb-6">
              <img
                src="/LRSD-logo-removebg-preview.png"
                alt="LRSD Capital"
                className="h-20 sm:h-24 md:h-28 w-auto brightness-0 invert object-contain"
              />
            </Link>
            <p className="text-xs text-gray-400 leading-relaxed mb-6">
              Specialist credit institution for Indian enterprises. Three
              decades of capital conviction and market intelligence.
            </p>
            <div className="flex gap-2.5">
              {[
                { icon: <FaLinkedin className="w-3.5 h-3.5" />, label: "LinkedIn" },
                { icon: <FaXTwitter className="w-3.5 h-3.5" />, label: "Twitter" },
                { icon: <FaFacebook className="w-3.5 h-3.5" />, label: "Facebook" },
                { icon: <FaInstagram className="w-3.5 h-3.5" />, label: "Instagram" },
              ].map(({ icon, label }) => (
                <a
                  key={label}
                  href="#"
                  aria-label={label}
                  className="w-8 h-8 rounded-full bg-white/10 hover:bg-[#E8621A] flex items-center justify-center text-white transition-colors"
                >
                  {icon}
                </a>
              ))}
            </div>
          </div>

          {/* Column 2: About Us */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#E8621A] mb-4">
              About Us
            </h4>
            <ul className="space-y-2.5 text-xs text-gray-400">
              <li>
                <Link href="/about/lrsd-capital" className="hover:text-white transition-colors">
                  About LRSD Capital
                </Link>
              </li>
              <li>
                <Link href="/about/edge" className="hover:text-white transition-colors">
                  The LRSD Edge
                </Link>
              </li>
              <li>
                <Link href="/about/leadership" className="hover:text-white transition-colors">
                  Leadership & Board
                </Link>
              </li>
              <li>
                <Link href="/testimonials" className="hover:text-white transition-colors">
                  Client Testimonials
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Solutions */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#E8621A] mb-4">
              Products
            </h4>
            <ul className="space-y-2.5 text-xs text-gray-400">
              <li>
                <Link href="/products/loan-against-shares" className="hover:text-white transition-colors">
                  Loan Against Shares (LAS)
                </Link>
              </li>
              <li>
                <Link href="/products/receivables-discounting" className="hover:text-white transition-colors">
                  Receivables Factoring
                </Link>
              </li>
              <li>
                <Link href="/products/mortgage-backed-loans" className="hover:text-white transition-colors">
                  Mortgage-Backed Loans
                </Link>
              </li>
              <li>
                <Link href="/products/structured-credit" className="hover:text-white transition-colors">
                  Structured Credit
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Governance & Compliance */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#E8621A] mb-4">
              Governance
            </h4>
            <ul className="space-y-2.5 text-xs text-gray-400">
              {[
                "Fair Practices Code",
                "Grievance Redressal",
                "CSR Policy",
                "IT & Cyber Security",
                "Scale Based Regulation",
              ].map((item) => (
                <li key={item}>
                  <a href="#" className="hover:text-white transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 5: Contact Desk */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#E8621A] mb-4">
              Contact Desk
            </h4>
            <div className="space-y-3 text-xs">
              <div>
                <p className="text-gray-500 uppercase text-[10px] tracking-wider mb-0.5">
                  Email
                </p>
                <a
                  href="mailto:admin@lrsdindia.com"
                  className="text-white hover:text-[#E8621A] font-medium transition-colors"
                >
                  admin@lrsdindia.com
                </a>
              </div>
              <div>
                <p className="text-gray-500 uppercase text-[10px] tracking-wider mb-0.5">
                  Direct Line
                </p>
                <a
                  href="tel:+919810278244"
                  className="text-white hover:text-[#E8621A] font-medium transition-colors"
                >
                  +91 98102 78244
                </a>
              </div>
              <div className="pt-1">
                <button
                  type="button"
                  onClick={() => openModal()}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#E8621A] hover:bg-[#F27125] text-white text-[11px] font-bold transition-colors cursor-pointer"
                >
                  <span>Start Conversation</span>
                  <ArrowRight className="w-3 h-3" />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-gray-500">
          <div className="flex flex-wrap gap-4">
            <a href="#" className="hover:text-gray-300">
              Privacy Policy
            </a>
            <span>·</span>
            <a href="#" className="hover:text-gray-300">
              Terms of Use
            </a>
            <span>·</span>
            <a href="#" className="hover:text-gray-300">
              Statutory Disclosures
            </a>
          </div>
          <p>© 2026 LRSD Securities Private Limited. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
