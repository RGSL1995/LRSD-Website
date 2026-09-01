'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import Navbar, { ActionButton } from '@/components/Navbar';
import Footer from '@/components/Footer';
import { SilkWaves } from '@/components/SharedWireframes';
import { MessageSquareQuote, ShieldCheck, ArrowRight, Sparkles, Building2, Zap, CheckCircle2 } from 'lucide-react';

const TESTIMONIALS = [
  {
    id: 'digikore-studios',
    quote:
      "Most large lenders are not really interested in SME borrowers—their focus stays on bigger, established listed names, and companies our size rarely get a genuine shot. LRSD Capital took a different approach and structured our expansion facility around our actual growth plan rather than a standard template. Just as valuable, their support did not stop at disbursement—they remained engaged and responsive through the life of the facility, which gave us real confidence in the relationship.",
    author: "Abhishek More",
    role: "Founder & Group CEO",
    company: "Digikore Studios",
    image: "/abhishek-more.jpg",
    tag: "Client Success Story",
  },
  {
    id: 'gp-eco-solutions',
    quote:
      "We had a narrow window to secure funding and submit our bid for an important government institutional tender in the renewable energy sector. The opportunity required not only timely financial support but also a clear understanding of our business and the specific requirements of the project.\n\nLRSD Capital impressed us with the speed at which their team understood our requirements and aligned with our execution timeline. Their understanding of the green economy, combined with their responsiveness and flexibility, made the entire process smooth and efficient.\n\nWe truly value our association with LRSD Capital and deeply appreciate the trust, commitment, and partnership their team demonstrated throughout the process.",
    author: "Astik Mani Tripathi",
    role: "Promoter & Director",
    company: "GP Eco Solutions India Ltd.",
    image: "/astik-mani-tripathi.jpg",
    tag: "Client Success Story",
  },
  {
    id: 'oriana-power',
    quote:
      "LRSD Capital demonstrated a clear understanding from the very beginning of our capital requirements for inorganic growth. They moved swiftly through the approval process, delivering a decision in a remarkably short timeframe without compromising on diligence. Their team remained consistently responsive and professional throughout, and we particularly appreciated that the process was handled efficiently, without subjecting us to unnecessary rounds of back-and-forth. In a fast-moving business environment, speed and reliability are critical, and LRSD Capital delivered on both counts with confidence.",
    author: "Shubham Karn",
    role: "Sr. Accounts Manager",
    company: "Oriana Power Limited",
    image: "/shubham-karn.jpg",
    tag: "Client Success Story",
  },
];

export default function TestimonialsPage() {
  return (
    <div className="min-h-screen bg-white text-[#0F1932] overflow-x-hidden selection:bg-[#E8621A] selection:text-white font-sans">
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-36 pb-20 md:pt-44 md:pb-28 px-6 md:px-8 bg-[#FAF9F6] overflow-hidden border-b border-gray-100">
        <SilkWaves />

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-gray-200 shadow-sm mb-8">
            <span className="w-2 h-2 rounded-full bg-[#E8621A]" />
            <p className="text-xs font-bold tracking-widest text-[#E8621A] uppercase">
              Client Testimonials &amp; Case Studies
            </p>
          </div>

          <div className="grid lg:grid-cols-[1.3fr_0.7fr] gap-12 items-start">
            <div>
              <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-[-0.03em] leading-[1.05] text-[#0F1932] mb-8">
                Borrower Conviction.{' '}
                <span className="text-[#E8621A]">Enterprise Trust.</span>
              </h1>

              <p className="text-lg md:text-xl text-gray-700 leading-relaxed font-normal mb-8 max-w-2xl">
                Discover how emerging listed enterprises, ambitious promoters, and green energy leaders utilize LRSD Capital&apos;s structured credit to seize timely market opportunities.
              </p>

              <div className="flex flex-wrap gap-4">
                <ActionButton label="Start your application" href="/#contact" />
                <Link
                  href="/products/loan-against-shares"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border border-gray-300 text-xs md:text-sm font-bold text-gray-700 hover:bg-white transition-colors"
                >
                  <span>Explore Credit Solutions</span>
                  <ArrowRight className="w-4 h-4 text-[#E8621A]" />
                </Link>
              </div>
            </div>

            {/* Quick Metrics Card */}
            <div className="bg-[#0F1932] text-white p-8 rounded-3xl shadow-xl relative overflow-hidden">
              <div className="flex justify-between items-center mb-6">
                <span className="text-xs font-extrabold uppercase tracking-widest text-[#E8621A]">
                  Track Record Highlights
                </span>
                <MessageSquareQuote className="w-6 h-6 text-[#E8621A]" />
              </div>
              <div className="space-y-4">
                <div className="border-b border-white/10 pb-3">
                  <p className="text-[11px] text-gray-400 uppercase font-semibold">Turnaround Velocity</p>
                  <p className="text-2xl font-extrabold text-[#E8621A]">Day 1 – Day 2</p>
                </div>
                <div className="border-b border-white/10 pb-3">
                  <p className="text-[11px] text-gray-400 uppercase font-semibold">Underwriting Philosophy</p>
                  <p className="text-2xl font-extrabold text-white">Cash-Flow &amp; Growth Focused</p>
                </div>
                <div>
                  <p className="text-[11px] text-gray-400 uppercase font-semibold">Sectors Empowered</p>
                  <p className="text-sm font-bold text-gray-200 mt-0.5">Renewable Energy, Tech &amp; VFX Studios, Manufacturing, Infrastructure &amp; SME Enterprises</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Grid */}
      <section className="py-20 md:py-28 px-6 md:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 mb-3">
              <span className="w-2 h-2 rounded-full bg-[#E8621A]" />
              <p className="text-xs font-bold tracking-widest text-gray-400 uppercase">
                Voices of Leadership
              </p>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0F1932] tracking-tight">
              Real partnerships. Decisive execution.
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8 lg:gap-10 items-stretch">
            {TESTIMONIALS.map((item, idx) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.15 }}
                whileHover={{ y: -4 }}
                className="bg-[#FAF9F6] border border-gray-200/90 hover:border-[#E8621A]/40 hover:shadow-xl transition-all duration-300 p-8 sm:p-10 rounded-3xl flex flex-col justify-between relative overflow-hidden"
              >
                <div>
                  {/* Category Tag & Icon */}
                  <div className="flex items-center justify-between gap-4 mb-6">
                    <span className="text-[11px] font-bold text-[#E8621A] bg-orange-50 border border-orange-200/60 px-3.5 py-1 rounded-full uppercase tracking-wider">
                      {item.tag}
                    </span>
                    <MessageSquareQuote className="w-8 h-8 text-[#E8621A]/25 shrink-0" />
                  </div>

                  {/* Quote Paragraphs */}
                  <div className="space-y-4 mb-8">
                    {(() => {
                      const paras = item.quote.split('\n\n');
                      return paras.map((para, pIdx) => (
                        <p
                          key={pIdx}
                          className="text-sm sm:text-base text-[#0F1932] leading-relaxed font-normal"
                        >
                          {pIdx === 0 && '“'}{para}{pIdx === paras.length - 1 && '”'}
                        </p>
                      ));
                    })()}
                  </div>
                </div>

                {/* Author Card Footer */}
                <div className="pt-6 border-t border-gray-200/80 flex items-center justify-between gap-4">
                  <div className="flex items-center gap-4">
                    <div className="relative w-14 h-14 rounded-full overflow-hidden border-2 border-[#E8621A] shrink-0 bg-white shadow-md">
                      <Image
                        src={item.image}
                        alt={item.author}
                        fill
                        className="object-cover object-top"
                      />
                    </div>
                    <div>
                      <h3 className="text-base font-extrabold text-[#0F1932]">
                        {item.author}
                      </h3>
                      <p className="text-xs text-gray-500 font-medium mt-0.5">
                        {item.role}
                      </p>
                      <p className="text-xs font-bold text-[#E8621A] mt-0.5">
                        {item.company}
                      </p>
                    </div>
                  </div>

                  <div className="w-10 h-10 rounded-full bg-[#0F1932] flex items-center justify-center text-[#E8621A] shrink-0 shadow-sm">
                    <ShieldCheck className="w-5 h-5" />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Partner with LRSD CTA */}
      <section className="py-20 md:py-24 px-6 md:px-8 bg-[#FAF9F6] border-t border-gray-100">
        <div className="max-w-4xl mx-auto bg-[#0F1932] text-white rounded-3xl p-10 sm:p-14 text-center shadow-2xl relative overflow-hidden">
          <h2 className="text-2xl sm:text-4xl font-extrabold mb-4">
            Accelerate your corporate growth trajectory.
          </h2>
          <p className="text-xs sm:text-sm text-gray-300 max-w-xl mx-auto mb-8 leading-relaxed">
            Partner with a credit institution that understands the velocity of your business. Connect with our underwriting desk to structure growth capital tailored to your enterprise.
          </p>
          <ActionButton label="Start a conversation" href="/#contact" className="bg-[#E8621A] hover:bg-[#F27125]" />
        </div>
      </section>

      <Footer />
    </div>
  );
}
