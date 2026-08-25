'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import Navbar, { ActionButton } from '@/components/Navbar';
import Footer from '@/components/Footer';
import { TorusWireframe, SphereWireframe, GyroWireframe, SilkWaves } from '@/components/SharedWireframes';
import { MessageSquareQuote, Star, Building2, TrendingUp, ShieldCheck, ArrowRight, CheckCircle2 } from 'lucide-react';

export default function TestimonialsPage() {
  const testimonial = {
    quote:
      "As an unlisted SME navigating formal institutional borrowing for the first time, we faced real complexity. LRSD Capital's team went beyond the transactional—they took time to explain the documentation, address our concerns, and guide us through each phase. That level of hand-holding, combined with competitive terms, gave us confidence in our partnership. For an SME of our size, that support was invaluable. We would absolutely recommend them.",
    author: "Kapil Garg",
    role: "Managing Director",
    company: "Shellz India",
    image: "/kapilgarg.png",
    tag: "Client Success Story",
  };

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
            <motion.div
              whileHover={{ y: -6 }}
              transition={{ duration: 0.3 }}
              className="bg-[#FAF9F6] border border-gray-200 p-8 sm:p-10 rounded-3xl flex flex-col justify-between shadow-sm relative overflow-hidden"
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  <span className="text-[11px] font-bold text-[#E8621A] bg-white border border-gray-200 px-3 py-1 rounded-full uppercase tracking-wider">
                    {testimonial.tag}
                  </span>
                </div>

                <p className="text-sm sm:text-base text-[#0F1932] leading-relaxed mb-8 font-medium italic">
                  &ldquo;{testimonial.quote}&rdquo;
                </p>
              </div>

              <div className="pt-6 border-t border-gray-200/80 flex items-center justify-between gap-4">
                <div className="flex items-center gap-3.5">
                  <div className="relative w-12 h-12 rounded-full overflow-hidden border-2 border-[#E8621A]/30 shrink-0 bg-white shadow-2xs">
                    <Image
                      src={testimonial.image}
                      alt={testimonial.author}
                      fill
                      className="object-cover object-top"
                    />
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-[#0F1932]">
                      {testimonial.author}
                      {testimonial.role && (
                        <span className="text-xs font-normal text-gray-500 block sm:inline sm:ml-1.5">
                          · {testimonial.role}
                        </span>
                      )}
                    </h3>
                    <p className="text-xs font-semibold text-[#E8621A]">{testimonial.company}</p>
                  </div>
                </div>
                <div className="w-9 h-9 rounded-full bg-[#0F1932] flex items-center justify-center text-[#E8621A] shrink-0 shadow-2xs">
                  <ShieldCheck className="w-5 h-5" />
                </div>
              </div>
            </motion.div>
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
