'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { ArrowRight, ChevronDown } from 'lucide-react';
import { FaFacebook, FaXTwitter, FaLinkedin, FaInstagram } from 'react-icons/fa6';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { GradientText } from '@/components/magic/gradient-text';

const AnimatedWaveBackground = () => {
  return (
    <div className="absolute inset-0 overflow-hidden">
      <svg
        className="absolute w-full h-full"
        viewBox="0 0 1440 800"
        preserveAspectRatio="none"
      >
        <defs>
          <linearGradient id="waveGradient" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#F27125" stopOpacity="0.15" />
            <stop offset="100%" stopColor="#F27125" stopOpacity="0" />
          </linearGradient>
        </defs>

        {/* Wave 1 */}
        <motion.path
          d="M 0,200 Q 360,150 720,200 T 1440,200 L 1440,400 Q 720,450 0,400 Z"
          fill="url(#waveGradient)"
          animate={{
            d: [
              'M 0,200 Q 360,150 720,200 T 1440,200 L 1440,400 Q 720,450 0,400 Z',
              'M 0,220 Q 360,170 720,220 T 1440,220 L 1440,420 Q 720,470 0,420 Z',
              'M 0,180 Q 360,130 720,180 T 1440,180 L 1440,380 Q 720,430 0,380 Z',
              'M 0,200 Q 360,150 720,200 T 1440,200 L 1440,400 Q 720,450 0,400 Z',
            ],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />

        {/* Wave 2 */}
        <motion.path
          d="M 0,300 Q 360,250 720,300 T 1440,300 L 1440,500 Q 720,550 0,500 Z"
          fill="url(#waveGradient)"
          animate={{
            d: [
              'M 0,300 Q 360,250 720,300 T 1440,300 L 1440,500 Q 720,550 0,500 Z',
              'M 0,280 Q 360,230 720,280 T 1440,280 L 1440,480 Q 720,530 0,480 Z',
              'M 0,320 Q 360,270 720,320 T 1440,320 L 1440,520 Q 720,570 0,520 Z',
              'M 0,300 Q 360,250 720,300 T 1440,300 L 1440,500 Q 720,550 0,500 Z',
            ],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: 0.5,
          }}
        />

        {/* Wave 3 */}
        <motion.path
          d="M 0,150 Q 360,100 720,150 T 1440,150 L 1440,350 Q 720,400 0,350 Z"
          fill="url(#waveGradient)"
          animate={{
            d: [
              'M 0,150 Q 360,100 720,150 T 1440,150 L 1440,350 Q 720,400 0,350 Z',
              'M 0,170 Q 360,120 720,170 T 1440,170 L 1440,370 Q 720,420 0,370 Z',
              'M 0,130 Q 360,80 720,130 T 1440,130 L 1440,330 Q 720,380 0,330 Z',
              'M 0,150 Q 360,100 720,150 T 1440,150 L 1440,350 Q 720,400 0,350 Z',
            ],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: 1,
          }}
        />
      </svg>
    </div>
  );
};

export default function Home() {
  return (
    <div className="bg-[var(--bg-primary)] text-[var(--text-primary)]">
      {/* Navigation */}
      <header className="fixed top-0 w-full bg-[var(--bg-primary)]/95 backdrop-blur-md border-b border-[var(--border-color)] z-50">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <img
            src="/LRSD-logo-removebg-preview.png"
            alt="LRSD Capital"
            className="h-16 w-auto"
          />

          <nav className="hidden md:flex gap-2">
            <Button variant="ghost" size="sm" className="text-sm text-[var(--text-secondary)] hover:text-[var(--gold)]">
              About <ChevronDown className="w-4 h-4 ml-1" />
            </Button>
            <Button variant="ghost" size="sm" className="text-sm text-[var(--text-secondary)] hover:text-[var(--gold)]">
              Products <ChevronDown className="w-4 h-4 ml-1" />
            </Button>
            <Button variant="ghost" size="sm" className="text-sm text-[var(--text-secondary)] hover:text-[var(--gold)]">
              Grievance <ChevronDown className="w-4 h-4 ml-1" />
            </Button>
            <Button variant="ghost" size="sm" className="text-sm text-[var(--text-secondary)] hover:text-[var(--gold)]">
              Reports <ChevronDown className="w-4 h-4 ml-1" />
            </Button>
            <Button variant="ghost" size="sm" className="text-sm text-[var(--text-secondary)] hover:text-[var(--gold)]">
              Careers <ChevronDown className="w-4 h-4 ml-1" />
            </Button>
            <Button variant="ghost" size="sm" className="text-sm text-[var(--text-secondary)] hover:text-[var(--gold)]">
              Policies <ChevronDown className="w-4 h-4 ml-1" />
            </Button>
          </nav>

          <Button variant="ghost" size="sm" className="text-sm text-[#F27125] hover:text-[#F27125] hover:opacity-80 font-semibold">
            Contact
          </Button>

          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Button className="rounded-full">
              <ArrowRight className="w-4 h-4" />
              Start a conversation
            </Button>
          </motion.div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative pt-32 pb-40 px-6 md:px-8 min-h-screen flex items-center">
        <AnimatedWaveBackground />

        <div className="max-w-7xl mx-auto w-full relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <motion.h1
                className="text-7xl md:text-8xl font-bold mb-8 leading-tight"
                style={{ letterSpacing: "-0.03em" }}
              >
                <motion.span
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.1, duration: 0.8 }}
                  className="text-black block"
                >
                  Capital,
                </motion.span>
                <motion.span
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.2, duration: 0.8 }}
                  className="text-gray-500 block"
                >
                  with
                </motion.span>
                <motion.span
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.3, duration: 0.8 }}
                  className="text-gray-500 block"
                >
                  conviction.
                </motion.span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4, duration: 0.8 }}
                className="text-lg text-gray-600 mb-8 max-w-2xl leading-relaxed font-medium"
              >
                A lending-focused platform purpose-built for SMEs, MSMEs and
                mid-sized corporates — carrying forward three decades of
                disciplined capital from the Rajasthan Global Securities Group.
              </motion.p>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5, duration: 0.8 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button size="lg" className="rounded-full">
                  <ArrowRight className="w-5 h-5" />
                  Explore solutions
                </Button>
              </motion.div>
            </motion.div>

            {/* Right Content - Our Lending Stance */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="flex justify-end"
            >
              <div className="text-right max-w-md bg-white/50 backdrop-blur p-8 rounded-2xl border border-white/50">
                <p className="text-xs font-semibold tracking-widest text-gray-600 mb-4 uppercase">
                  Our Lending Stance
                </p>
                <p className="text-lg text-black font-medium leading-relaxed">
                  Wholesale. Fully secured. Zero retail or unsecured exposure.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Why We Exist Section */}
      <section className="py-24 px-6 md:px-8 bg-[var(--bg-secondary)]">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="inline-block px-4 py-2 bg-[var(--bg-primary)] border border-[var(--border-color)] rounded-full mb-8">
              <p className="text-xs font-semibold tracking-widest text-[var(--text-secondary)]">
                WHY WE EXIST
              </p>
            </div>

            <h2 className="text-6xl md:text-7xl font-bold mb-12 leading-tight text-black">
              To be the most <GradientText className="text-6xl md:text-7xl">respected name</GradientText> in Indian lending.
            </h2>

            {/* Stats Grid */}
            <motion.div
              className="grid md:grid-cols-4 gap-8 mb-16"
              variants={{
                hidden: { opacity: 0 },
                show: {
                  opacity: 1,
                  transition: {
                    staggerChildren: 0.1,
                  },
                },
              }}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
            >
              {[
                { value: "31.1%", label: "Share of India's GDP" },
                { value: "48.6%", label: "Share of India's exports" },
                { value: "38.9 Cr", label: "People employed" },
                { value: "₹25 L Cr", label: "Formal credit gap" },
              ].map((stat, idx) => (
                <motion.div
                  key={idx}
                  variants={{
                    hidden: { opacity: 0, y: 10 },
                    show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
                  }}
                  className="text-center"
                >
                  <div className="text-5xl font-bold text-[#F27125] mb-2 font-mono">
                    {stat.value}
                  </div>
                  <p className="text-sm text-[var(--text-secondary)]">
                    {stat.label}
                  </p>
                </motion.div>
              ))}
            </motion.div>

            {/* Vision & Mission Cards */}
            <motion.div
              className="grid md:grid-cols-2 gap-6"
              variants={{
                hidden: { opacity: 0 },
                show: {
                  opacity: 1,
                  transition: {
                    staggerChildren: 0.1,
                  },
                },
              }}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
            >
              <motion.div
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
                }}
              >
                <Card className="hover:border-[#F27125] transition-colors">
                  <CardHeader>
                    <Badge variant="default">VISION</Badge>
                  </CardHeader>
                  <CardContent>
                    <CardTitle className="text-black">
                      A specialist credit institution for Indian enterprise.
                    </CardTitle>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
                }}
              >
                <Card className="hover:border-[#F27125] transition-colors">
                  <CardHeader>
                    <Badge variant="default">MISSION</Badge>
                  </CardHeader>
                  <CardContent>
                    <CardTitle className="text-black">
                      Enduring value through disciplined lending.
                    </CardTitle>
                  </CardContent>
                </Card>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Structured Credit Section */}
      <section className="py-24 px-6 md:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            {/* Header */}
            <div className="flex justify-between items-start mb-16">
              <div>
                <h2 className="text-6xl md:text-7xl font-bold leading-tight">
                  Structured Credit,
                  <br />
                  <GradientText>Built to Scale</GradientText>
                </h2>
              </div>
              <div className="hidden md:block text-right max-w-sm">
                <p className="text-lg text-black leading-relaxed">
                  Four highly-focused products. Zero exposure to retail or
                  unsecured lending.
                </p>
              </div>
            </div>

            {/* Products Grid */}
            <div className="grid md:grid-cols-2 gap-0 rounded-2xl overflow-hidden border border-[var(--border-color)]">
              {/* Left Side - Products List */}
              <div className="bg-white">
                {[
                  { num: "01", title: "Loan Against Securities", id: "las" },
                  { num: "02", title: "Receivables Factoring", id: "rf" },
                  { num: "03", title: "Mortgage-Backed Loans", id: "mbl" },
                  { num: "04", title: "Structured Credit", id: "sc" },
                ].map((product, idx) => (
                  <motion.button
                    key={idx}
                    whileHover={{ scale: 1.02 }}
                    className={`w-full text-left p-6 border-b border-[var(--border-color)] transition-all duration-300 flex justify-between items-center ${
                      idx === 0
                        ? "bg-black text-white"
                        : "bg-white text-black hover:bg-gray-50"
                    }`}
                  >
                    <div>
                      <p
                        className={`text-xs font-semibold tracking-widest mb-2 ${idx === 0 ? "text-gray-400" : "text-[var(--text-secondary)]"}`}
                      >
                        {product.num}
                      </p>
                      <p className="font-bold text-lg">{product.title}</p>
                    </div>
                    <ArrowRight
                      className={`w-5 h-5 ${idx === 0 ? "text-[#F27125]" : "text-gray-400"}`}
                    />
                  </motion.button>
                ))}
              </div>

              {/* Right Side - Product Details */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="bg-gray-50 p-12 flex flex-col justify-between"
              >
                {/* Badge */}
                <div>
                  <p className="text-xs font-semibold tracking-widest text-[#F27125] mb-6">
                    FLAGSHIP · LAS
                  </p>

                  {/* Product Icon/Illustration */}
                  <div className="mb-8 h-32 flex items-end justify-end">
                    <div className="flex gap-2">
                      <div className="w-6 h-20 bg-gray-300 rounded-sm"></div>
                      <div className="w-6 h-28 bg-gray-300 rounded-sm"></div>
                      <div className="w-6 h-16 bg-gray-300 rounded-sm"></div>
                    </div>
                  </div>

                  {/* Heading */}
                  <h3 className="text-4xl font-bold text-black mb-6">
                    Loan Against Securities
                  </h3>

                  {/* Description */}
                  <p className="text-lg text-gray-600 leading-relaxed">
                    Liquidity backed by listed equity and debt instruments, with
                    LTVs shaped by thirty years of micro-cap equity knowledge.
                  </p>
                </div>

                {/* CTA Button */}
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="mt-8 w-fit"
                >
                  <Button variant="link" className="text-[#F27125] font-bold p-0">
                    Learn more
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Button>
                </motion.div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Founder's Note Section */}
      <section className="py-24 px-6 md:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="bg-[#1a1a1a] rounded-3xl overflow-hidden">
              <div className="grid md:grid-cols-[40%_60%] gap-0 items-stretch">
                {/* Photo - Left Side (40%) */}
                <motion.div
                  initial={{ opacity: 0, x: -40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8 }}
                  viewport={{ once: true }}
                  className="relative h-96 md:h-auto min-h-[500px]"
                >
                  <Image
                    src="/lalitsir.jpeg"
                    alt="Mr. Lalit Dua, Managing Director"
                    fill
                    priority
                    sizes="(max-width: 768px) 100vw, 40vw"
                    className="object-cover"
                  />
                </motion.div>

                {/* Quote Section - Right Side (60%) */}
                <motion.div
                  initial={{ opacity: 0, x: 40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8 }}
                  viewport={{ once: true }}
                  className="p-12 md:p-16 flex flex-col justify-between bg-[#1a1a1a]"
                  style={{ color: "#FFFFFF" }}
                >
                  {/* Quote */}
                  <div>
                    <motion.h3
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.2, duration: 0.6 }}
                      viewport={{ once: true }}
                      className="text-4xl md:text-5xl font-bold mb-8 leading-tight"
                      style={{ color: "#FFFFFF" }}
                    >
                      "Return of capital matters more to us than return on
                      capital."
                    </motion.h3>

                    {/* Supporting Text with Orange Accent */}
                    <motion.div
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      transition={{ delay: 0.3, duration: 0.6 }}
                      viewport={{ once: true }}
                      className="border-l-4 border-[#F27125] pl-6"
                    >
                      <p
                        className="text-base leading-relaxed"
                        style={{ color: "#F0F0F0" }}
                      >
                        We are not reckless lenders — we are conservative in how
                        we underwrite. But once we've identified a strong
                        borrower, we are flexible in what we can structure for
                        them.
                      </p>
                    </motion.div>
                  </div>

                  {/* Author Info */}
                  <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 0.4, duration: 0.6 }}
                    viewport={{ once: true }}
                  >
                    <p
                      className="font-bold text-lg"
                      style={{ color: "#FFFFFF" }}
                    >
                      Mr. Lalit Dua
                    </p>
                    <p className="text-sm" style={{ color: "#B0B0B0" }}>
                      Managing Director, LRSD Capital
                    </p>
                  </motion.div>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Market Perspective Section */}
      <section className="py-24 px-6 md:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-6xl md:text-7xl font-bold mb-16 leading-tight">
              Where a bank sees a balance sheet,
              <br />
              <GradientText>we see the market behind it.</GradientText>
            </h2>

            <div className="grid md:grid-cols-2 gap-8">
              {/* Traditional Lenders */}
              <div>
                <h3 className="text-2xl font-bold mb-6 text-black">
                  Traditional lenders
                </h3>
                <motion.div
                  className="space-y-4"
                  variants={{
                    hidden: { opacity: 0 },
                    show: {
                      opacity: 1,
                      transition: {
                        staggerChildren: 0.1,
                      },
                    },
                  }}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true }}
                >
                  {[
                    "Slow, process-heavy, hard to navigate",
                    "Assess businesses through a credit lens only",
                    "Standard rating tables, mechanical haircuts",
                    "Treats lending as a one-off transaction",
                  ].map((text, i) => (
                    <motion.div
                      key={i}
                      variants={{
                        hidden: { opacity: 0, y: 10 },
                        show: {
                          opacity: 1,
                          y: 0,
                          transition: { duration: 0.6 },
                        },
                      }}
                      className="bg-white border border-[var(--border-color)] rounded-xl p-6 flex gap-4"
                    >
                      <div className="w-10 h-10 rounded-full border-2 border-[var(--border-color)] flex items-center justify-center flex-shrink-0 text-[var(--text-secondary)] font-bold text-sm">
                        {i + 1}
                      </div>
                      <p className="text-[var(--text-secondary)] font-medium pt-2">
                        {text}
                      </p>
                    </motion.div>
                  ))}
                </motion.div>
              </div>

              {/* LRSD Capital */}
              <div>
                <h3 className="text-2xl font-bold mb-6 text-[#F27125]">
                  LRSD Capital
                </h3>
                <motion.div
                  className="space-y-4"
                  variants={{
                    hidden: { opacity: 0 },
                    show: {
                      opacity: 1,
                      transition: {
                        staggerChildren: 0.1,
                      },
                    },
                  }}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true }}
                >
                  {[
                    "Documentation Day 1, disbursement Day 2 — fast without cutting corners",
                    "Three decades of SME equity intelligence layered onto credit discipline",
                    "Corporate and institutional only — no retail, no unsecured lending",
                    "Credit is one part of a long-term growth partnership",
                  ].map((text, i) => (
                    <motion.div
                      key={i}
                      variants={{
                        hidden: { opacity: 0, y: 10 },
                        show: {
                          opacity: 1,
                          y: 0,
                          transition: { duration: 0.6 },
                        },
                      }}
                      className="bg-[#0F1932] text-white border border-[#D4AF37]/20 rounded-xl p-6 flex gap-4 hover:border-[#D4AF37]/50 transition-colors duration-300"
                    >
                      <div className="w-10 h-10 rounded-full border-2 border-[#D4AF37] flex items-center justify-center flex-shrink-0 text-[#D4AF37] font-bold text-sm">
                        {i + 1}
                      </div>
                      <p className="font-medium pt-2 text-sm">{text}</p>
                    </motion.div>
                  ))}
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* LRSD Commitments Section */}
      <section className="py-24 px-6 md:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            {/* Header */}
            <h2 className="text-6xl md:text-7xl font-bold mb-16 leading-tight">
              Four letters.
              <br />
              <GradientText>Four commitments.</GradientText>
            </h2>

            {/* Cards Grid - 4 Columns */}
            <motion.div
              className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8"
              variants={{
                hidden: { opacity: 0 },
                show: {
                  opacity: 1,
                  transition: {
                    staggerChildren: 0.1,
                  },
                },
              }}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
            >
              {[
                {
                  letter: "L",
                  num: "01",
                  title: "Long-Term Thinking",
                  desc: "We back businesses, not transactions.",
                  isDark: false,
                },
                {
                  letter: "R",
                  num: "02",
                  title: "Rigor",
                  desc: "We go deeper before we go faster.",
                  isDark: false,
                },
                {
                  letter: "S",
                  num: "03",
                  title: "Stewardship",
                  desc: "We are custodians of capital.",
                  isDark: false,
                },
                {
                  letter: "D",
                  num: "04",
                  title: "Discipline",
                  desc: "Conservative on capital. Flexible on structure, once we found a strong borrower.",
                  isDark: true,
                },
              ].map((commit, idx) => (
                <motion.div
                  key={idx}
                  variants={{
                    hidden: { opacity: 0, y: 20 },
                    show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
                  }}
                  whileHover={{ y: -4 }}
                >
                  <Card className={`rounded-3xl transition-all duration-300 ${
                    commit.isDark
                      ? "bg-[#1F2B5C] text-white border-[#1F2B5C]"
                      : "hover:border-[#F27125]"
                  }`}>
                    {/* Number Badge */}
                    <div className="px-8 pt-8 pb-0">
                      <Badge variant={commit.isDark ? "secondary" : "default"} className={commit.isDark ? "bg-gray-700 border-gray-600 text-gray-300" : ""}>
                        {commit.num}
                      </Badge>
                    </div>

                    <CardContent className="pt-6">
                      {/* Letter */}
                      <div className="text-7xl font-bold text-[#F27125] mb-4 leading-none">
                        {commit.letter}
                      </div>

                      {/* Content */}
                      <CardTitle className={`text-xl mb-3 ${commit.isDark ? "text-white" : "text-black"}`}>
                        {commit.title}
                      </CardTitle>
                      <p
                        className={`text-sm leading-relaxed ${commit.isDark ? "text-gray-300" : "text-gray-600"}`}
                      >
                        {commit.desc}
                      </p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </motion.div>

            {/* Quote Section */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <Card className="bg-[#bc5317] text-black border-[#bc5317] p-12">
                <CardContent className="text-center">
                  <p className="text-5xl text-black font-bold leading-tight">
                    "Ambitious and growth-oriented, but our ambition is guided by
                    discipline."
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-24 px-6 md:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-6xl md:text-7xl font-bold mb-12 leading-tight">
              A measured path to
              <br />
              institutional <GradientText animate={false}>scale.</GradientText>
            </h2>

            <div className="bg-[#1F2B5C] text-white rounded-2xl p-16 border border-[#D4AF37]/20">
              <div className="grid md:grid-cols-4 gap-8 text-center">
                {[
                  { year: "2023", title: "Our Credit Record" },
                  { year: "2024", title: "Proof Points" },
                  { year: "2025", title: "Our Public" },
                  { year: "2027", title: "Institutional" },
                ].map((milestone, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: idx * 0.1, duration: 0.6 }}
                    viewport={{ once: true }}
                    className="border-r border-[#D4AF37]/30 last:border-r-0 pr-8 last:pr-0"
                  >
                    <p className="text-lg font-semibold text-[#D4AF37] mb-3">
                      {milestone.year}
                    </p>
                    <p className="text-lg font-bold text-white">{milestone.title}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-6 md:px-8 bg-[var(--bg-secondary)]">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="max-w-7xl mx-auto bg-[#0F1932] text-white rounded-2xl p-16 md:p-24 text-center"
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-8">
            Let's structure what comes next.
          </h2>
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Button size="lg" className="bg-[#D4AF37] hover:bg-[#E5C158] text-[#0F1932] font-bold text-lg">
              Get in touch
            </Button>
          </motion.div>
        </motion.div>
      </section>

      {/* Footer */}
      <footer className="relative bg-gradient-to-b from-[#0F1932] to-[#1A2847] text-white overflow-hidden">
        {/* Diagonal top border */}
        <div className="absolute top-0 left-0 right-0 h-20 bg-white transform -skew-y-2 -translate-y-full"></div>

        {/* Decorative background elements */}
        <div className="absolute top-20 right-0 w-96 h-96 bg-[#F27125] opacity-5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-72 h-72 bg-[#F27125] opacity-5 rounded-full blur-3xl"></div>

        <div className="max-w-7xl mx-auto px-6 md:px-8 py-16 relative z-10">
          {/* CTA Section */}
          <div className="mb-16 bg-gradient-to-r from-[#F27125] to-[#E8651E] rounded-2xl p-10 shadow-2xl">
            <h3 className="text-3xl font-bold mb-3 text-white">
              Get Started Today
            </h3>
            <p className="text-white/95 mb-8 text-lg">
              Contact us today to explore how LRSD Securities can help you
              unlock the potential of your assets.
            </p>
            <motion.div
              whileHover={{ scale: 1.08 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button size="lg" className="bg-white hover:bg-gray-100 text-[#F27125] font-bold text-lg">
                Contact Us Now
              </Button>
            </motion.div>
          </div>

          {/* Main Content Grid */}
          <div className="grid grid-cols-1 md:grid-cols-5 gap-10 mb-12">
            {/* Brand & Mission */}
            <div className="md:col-span-1">
              <div className="flex items-center gap-3 mb-6">
                <img
                  src="/LRSD-logo-removebg-preview.png"
                  alt="LRSD Capital"
                  className="h-12 w-auto brightness-0 invert"
                />
                <div>
                  <h3 className="font-bold text-lg text-white">LRSD Capital</h3>
                  <p className="text-white text-xs">
                    Building capital with conviction
                  </p>
                </div>
              </div>
              <p className="text-white text-sm leading-relaxed mb-6">
                Empowering your financial growth with trust and expertise.
              </p>
              {/* Social Icons */}
              <div className="flex gap-3">
                <a
                  href="#"
                  className="w-9 h-9 bg-white/10 hover:bg-[#F27125] rounded-full flex items-center justify-center transition-colors"
                  title="Facebook"
                >
                  <FaFacebook className="w-4 h-4 text-white" />
                </a>
                <a
                  href="#"
                  className="w-9 h-9 bg-white/10 hover:bg-[#F27125] rounded-full flex items-center justify-center transition-colors"
                  title="Twitter"
                >
                  <FaXTwitter className="w-4 h-4 text-white" />
                </a>
                <a
                  href="#"
                  className="w-9 h-9 bg-white/10 hover:bg-[#F27125] rounded-full flex items-center justify-center transition-colors"
                  title="LinkedIn"
                >
                  <FaLinkedin className="w-4 h-4 text-white" />
                </a>
                <a
                  href="#"
                  className="w-9 h-9 bg-white/10 hover:bg-[#F27125] rounded-full flex items-center justify-center transition-colors"
                  title="Instagram"
                >
                  <FaInstagram className="w-4 h-4 text-white" />
                </a>
              </div>
            </div>

            {/* Company Policies */}
            <div>
              <h4 className="font-bold text-base mb-6 uppercase tracking-wider text-[#F27125] border-b-2 border-[#F27125]/30 pb-3">
                Company Policies
              </h4>
              <ul className="space-y-3">
                <li>
                  <a
                    href="#"
                    className="text-white hover:text-[#F27125] transition-colors text-sm font-medium flex items-center gap-2"
                  >
                    <span className="text-[#F27125]">›</span>Audit Related
                    Policies
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-white hover:text-[#F27125] transition-colors text-sm font-medium flex items-center gap-2"
                  >
                    <span className="text-[#F27125]">›</span>Corporate Social
                    Responsibility
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-white hover:text-[#F27125] transition-colors text-sm font-medium flex items-center gap-2"
                  >
                    <span className="text-[#F27125]">›</span>IT Policies
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-white hover:text-[#F27125] transition-colors text-sm font-medium flex items-center gap-2"
                  >
                    <span className="text-[#F27125]">›</span>Public Disclosures
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-white hover:text-[#F27125] transition-colors text-sm font-medium flex items-center gap-2"
                  >
                    <span className="text-[#F27125]">›</span>Scale Based
                    Regulations
                  </a>
                </li>
              </ul>
            </div>

            {/* Compliance & Support */}
            <div>
              <h4 className="font-bold text-base mb-6 uppercase tracking-wider text-[#F27125] border-b-2 border-[#F27125]/30 pb-3">
                Compliance & Support
              </h4>
              <ul className="space-y-3">
                <li>
                  <a
                    href="#"
                    className="text-white hover:text-[#F27125] transition-colors text-sm font-medium flex items-center gap-2"
                  >
                    <span className="text-[#F27125]">›</span>KYC & AML Policy
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-white hover:text-[#F27125] transition-colors text-sm font-medium flex items-center gap-2"
                  >
                    <span className="text-[#F27125]">›</span>Awareness
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-white hover:text-[#F27125] transition-colors text-sm font-medium flex items-center gap-2"
                  >
                    <span className="text-[#F27125]">›</span>Customer Support
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-white hover:text-[#F27125] transition-colors text-sm font-medium flex items-center gap-2"
                  >
                    <span className="text-[#F27125]">›</span>Grievance Redressal
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-white hover:text-[#F27125] transition-colors text-sm font-medium flex items-center gap-2"
                  >
                    <span className="text-[#F27125]">›</span>Mechanism Flowchart
                  </a>
                </li>
              </ul>
            </div>

            {/* Products */}
            <div>
              <h4 className="font-bold text-base mb-6 uppercase tracking-wider text-[#F27125] border-b-2 border-[#F27125]/30 pb-3">
                Our Products
              </h4>
              <ul className="space-y-3">
                <li>
                  <a
                    href="#"
                    className="text-white hover:text-[#F27125] transition-colors text-sm font-medium flex items-center gap-2"
                  >
                    <span className="text-[#F27125]">›</span>Loan Against
                    Securities
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-white hover:text-[#F27125] transition-colors text-sm font-medium flex items-center gap-2"
                  >
                    <span className="text-[#F27125]">›</span>Receivables
                    Factoring
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-white hover:text-[#F27125] transition-colors text-sm font-medium flex items-center gap-2"
                  >
                    <span className="text-[#F27125]">›</span>Mortgage-Backed
                    Loans
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-white hover:text-[#F27125] transition-colors text-sm font-medium flex items-center gap-2"
                  >
                    <span className="text-[#F27125]">›</span>Structured Lending
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-white hover:text-[#F27125] transition-colors text-sm font-medium flex items-center gap-2"
                  >
                    <span className="text-[#F27125]">›</span>Structured Credit
                  </a>
                </li>
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h4 className="font-bold text-base mb-6 uppercase tracking-wider text-[#F27125] border-b-2 border-[#F27125]/30 pb-3">
                Contact Information
              </h4>
              <div className="space-y-5">
                <div>
                  <p className="text-white/60 text-xs font-semibold mb-2 uppercase tracking-wide">
                    Email
                  </p>
                  <a
                    href="mailto:admin@lrsdindia.com"
                    className="text-white hover:text-[#F27125] transition-colors text-sm font-bold"
                  >
                    admin@lrsdindia.com
                  </a>
                </div>
                <div>
                  <p className="text-white/60 text-xs font-semibold mb-2 uppercase tracking-wide">
                    Call
                  </p>
                  <a
                    href="tel:+919810278244"
                    className="text-white hover:text-[#F27125] transition-colors text-sm font-bold"
                  >
                    +919810278244
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Divider */}
          <div className="border-t border-white/10 my-12"></div>

          {/* Bottom Section */}
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            {/* Footer Links */}
            <div className="flex flex-wrap justify-center md:justify-start gap-4 text-sm">
              <a
                href="#"
                className="text-[#F27125] hover:text-white transition-colors font-bold"
              >
                Contact Us
              </a>
              <span className="text-white/40">|</span>
              <a
                href="#"
                className="text-[#F27125] hover:text-white transition-colors font-bold"
              >
                Terms & Conditions
              </a>
              <span className="text-white/40">|</span>
              <a
                href="#"
                className="text-[#F27125] hover:text-white transition-colors font-bold"
              >
                Privacy Policy
              </a>
              <span className="text-white/40">|</span>
              <a
                href="#"
                className="text-[#F27125] hover:text-white transition-colors font-bold"
              >
                Structured Lending
              </a>
              <span className="text-white/40">|</span>
              <a
                href="#"
                className="text-[#F27125] hover:text-white transition-colors font-bold"
              >
                Policies
              </a>
            </div>

            {/* Copyright */}
            <p className="text-white/70 text-xs text-center md:text-right font-medium">
              Copyright © 2026 LRSD Securities Private Limited. All rights
              reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
