'use client';
import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import {
  ChevronsRight,
  ChevronDown,
  Building2,
  TrendingUp,
  Award,
  Layers,
  ShieldCheck,
  Zap,
  Users,
  MessageSquareQuote,
  Menu,
  X,
  ArrowRight,
} from 'lucide-react';
import { useConversationModal } from './ConversationModal';
import { useAccessibility } from './AccessibilityProvider';

export const AccessibilityButton = ({ className = '' }: { className?: string }) => {
  const { toggleWidget } = useAccessibility();
  return (
    <button
      type="button"
      onClick={toggleWidget}
      aria-label="Open Accessibility Menu"
      title="Accessibility Menu"
      className={`w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-[#1C1E22] hover:bg-[#0F1932] text-white flex items-center justify-center shadow-md transition-all duration-200 hover:scale-105 active:scale-95 border border-white/10 group cursor-pointer ${className}`}
    >
      <div className="w-6 h-6 rounded-lg bg-[#E8621A] group-hover:bg-[#F27125] flex items-center justify-center text-white shadow-xs transition-colors shrink-0">
        <svg
          className="w-3.5 h-3.5 fill-current"
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          <path d="M12 2c1.1 0 2 .9 2 2s-.9 2-2 2-2-.9-2-2 .9-2 2-2zm9 7h-6v13h-2v-6h-2v6H9V9H3V7h18v2z" />
        </svg>
      </div>
    </button>
  );
};

export const ActionButton = ({
  label,
  href = '/#contact',
  className = '',
  onClick,
}: {
  label: string;
  href?: string;
  className?: string;
  onClick?: () => void;
}) => {
  const { openModal } = useConversationModal();

  const isContactAction = href === '/#contact' || href === '#contact' || href === '' || !href;

  const handleClick = (e: React.MouseEvent) => {
    if (onClick) {
      e.preventDefault();
      onClick();
      return;
    }
    if (isContactAction) {
      e.preventDefault();
      openModal();
    }
  };

  return (
    <motion.div whileHover={{ scale: 1.02, y: -1 }} whileTap={{ scale: 0.98 }}>
      {isContactAction || onClick ? (
        <button
          type="button"
          onClick={handleClick}
          className={`inline-flex items-center gap-3 bg-[#1C1E22] hover:bg-[#15171A] text-white pl-2.5 pr-5 py-2.5 rounded-xl shadow-md transition-all group cursor-pointer ${className}`}
        >
          <div className="w-7 h-7 rounded-lg bg-[#E8621A] group-hover:bg-[#F27125] flex items-center justify-center text-white shadow-sm transition-colors shrink-0">
            <ChevronsRight className="w-3.5 h-3.5 text-white stroke-[2.5]" />
          </div>
          <span className="text-xs md:text-sm font-semibold tracking-normal text-white">
            {label}
          </span>
        </button>
      ) : (
        <Link
          href={href}
          className={`inline-flex items-center gap-3 bg-[#1C1E22] hover:bg-[#15171A] text-white pl-2.5 pr-5 py-2.5 rounded-xl shadow-md transition-all group ${className}`}
        >
          <div className="w-7 h-7 rounded-lg bg-[#E8621A] group-hover:bg-[#F27125] flex items-center justify-center text-white shadow-sm transition-colors shrink-0">
            <ChevronsRight className="w-3.5 h-3.5 text-white stroke-[2.5]" />
          </div>
          <span className="text-xs md:text-sm font-semibold tracking-normal text-white">
            {label}
          </span>
        </Link>
      )}
    </motion.div>
  );
};

export default function Navbar() {
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileExpanded, setMobileExpanded] = useState<string | null>(null);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const dropdownTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on page transition
  useEffect(() => {
    setMobileMenuOpen(false);
    setOpenDropdown(null);
  }, [pathname]);

  const handleMouseEnter = (menuKey: string) => {
    if (dropdownTimeoutRef.current) {
      clearTimeout(dropdownTimeoutRef.current);
    }
    setOpenDropdown(menuKey);
  };

  const handleMouseLeave = () => {
    dropdownTimeoutRef.current = setTimeout(() => {
      setOpenDropdown(null);
    }, 180);
  };

  const aboutItems = [
    {
      title: "About LRSD Capital",
      desc: "Secured credit for India's emerging listed companies backed by Rajasthan Global legacy.",
      href: "/about/lrsd-capital",
      icon: <Building2 className="w-5 h-5 text-[#E8621A]" />,
      // badge: "Group Legacy"
    },
    {
      title: "LRSD Edge",
      desc: "Day 1-2 turnaround velocity, 24-year equity intelligence & cash cycle structuring.",
      href: "/about/edge",
      icon: <Zap className="w-5 h-5 text-[#E8621A]" />,
      // badge: "Advantage"
    },
    {
      title: "Executive Leadership",
      desc: "Executive management, institutional stewardship & growth leadership.",
      href: "/about/leadership",
      icon: <Users className="w-5 h-5 text-[#E8621A]" />,
      // badge: "Governance"
    },
    {
      title: "Board of Directors",
      desc: "Board governance, fiduciary stewardship & statutory oversight.",
      href: "/about/board-of-directors",
      icon: <Award className="w-5 h-5 text-[#E8621A]" />,
      // badge: "Board"
    }
  ];

  const productItems = [
    {
      title: "Loan Against Shares",
      desc: "Promoter liquidity & growth capital underwritten on company fundamentals.",
      href: "/products/loan-against-shares",
      icon: <TrendingUp className="w-5 h-5 text-[#E8621A]" />,
      // badge: "Up to 20% LTV"
    },
    {
      title: "Receivables Discounting / Factoring",
      desc: "Facilitated by group company RGSPL — unlock cash trapped in 60–180 day invoice payment cycles.",
      href: "/products/receivables-discounting",
      icon: <Layers className="w-5 h-5 text-[#E8621A]" />,
      // badge: "Day 2 Liquidity"
    },
    {
      title: "Mortgage-Backed Loans",
      desc: "Milestone-linked developer debt & asset-backed structured loans.",
      href: "/products/mortgage-backed-loans",
      icon: <ShieldCheck className="w-5 h-5 text-[#E8621A]" />,
      // badge: "1.5x–2.0x Cover"
    },
    {
      title: "Structured Credit Solutions",
      desc: "Mezzanine debt, convertible notes, pre-IPO bridges & tailored amortizations.",
      href: "/products/structured-credit",
      icon: <Award className="w-5 h-5 text-[#E8621A]" />,
      // badge: "Bespoke"
    }
  ];

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/90 backdrop-blur-md shadow-sm border-b border-gray-100 py-1 md:py-1.5'
          : 'bg-white/75 backdrop-blur-md py-1.5 md:py-2'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-8 flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 group py-0 -my-1">
          <img
            src="/LRSD-logo-removebg-preview.png"
            alt="LRSD Capital"
            className="h-12 sm:h-14 md:h-[4.25rem] w-auto object-contain transition-transform group-hover:scale-105"
          />
        </Link>

        {/* Desktop Navigation Links with Dropdowns */}
        <nav className="hidden lg:flex items-center gap-8">
          {/* About Us Dropdown */}
          <div
            className="relative"
            onMouseEnter={() => handleMouseEnter('about')}
            onMouseLeave={handleMouseLeave}
          >
            <button
              className={`inline-flex items-center gap-1.5 text-xs font-semibold tracking-wide py-2 transition-colors ${
                pathname.startsWith('/about') || openDropdown === 'about'
                  ? 'text-[#E8621A]'
                  : 'text-gray-700 hover:text-[#0F1932]'
              }`}
            >
              <span>About Us</span>
              <ChevronDown
                className={`w-3.5 h-3.5 transition-transform duration-200 ${
                  openDropdown === 'about' ? 'rotate-180 text-[#E8621A]' : 'text-gray-400'
                }`}
              />
            </button>

            <AnimatePresence>
              {openDropdown === 'about' && (
                <motion.div
                  initial={{ opacity: 0, y: 10, scale: 0.98 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 8, scale: 0.98 }}
                  transition={{ duration: 0.18, ease: 'easeOut' }}
                  className="absolute top-full left-0 w-[380px] bg-white rounded-2xl p-3 shadow-2xl border border-gray-100 mt-2 z-50"
                >
                  <div className="p-2.5 pb-2 mb-1 border-b border-gray-100">
                    <p className="text-[10px] font-extrabold uppercase tracking-widest text-[#E8621A]">
                      About LRSD
                    </p>
                    <p className="text-xs text-gray-500 font-medium mt-0.5">
                      Three decades of market intelligence and capital conviction.
                    </p>
                  </div>

                  <div className="grid grid-cols-1 gap-1">
                    {aboutItems.map((item) => (
                      <Link
                        key={item.href}
                        href={item.href}
                        className={`flex items-center gap-3 p-2.5 rounded-xl transition-all ${
                          pathname === item.href
                            ? 'bg-[#FAF9F6] border border-[#E8621A]/30'
                            : 'hover:bg-[#FAF9F6]'
                        }`}
                      >
                        <div className="p-2 rounded-lg bg-[#FAF9F6] border border-gray-100 shrink-0">
                          {item.icon}
                        </div>
                        <div className="flex-1 min-w-0">
                          <p className="text-xs font-bold text-[#0F1932] truncate">
                            {item.title}
                          </p>
                        </div>
                      </Link>
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Products Dropdown */}
          <div
            className="relative"
            onMouseEnter={() => handleMouseEnter('products')}
            onMouseLeave={handleMouseLeave}
          >
            <button
              className={`inline-flex items-center gap-1.5 text-xs font-semibold tracking-wide py-2 transition-colors ${
                pathname.startsWith('/products') || openDropdown === 'products'
                  ? 'text-[#E8621A]'
                  : 'text-gray-700 hover:text-[#0F1932]'
              }`}
            >
              <span>Products</span>
              <ChevronDown
                className={`w-3.5 h-3.5 transition-transform duration-200 ${
                  openDropdown === 'products' ? 'rotate-180 text-[#E8621A]' : 'text-gray-400'
                }`}
              />
            </button>

            <AnimatePresence>
              {openDropdown === 'products' && (
                <motion.div
                  initial={{ opacity: 0, y: 10, scale: 0.98 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 8, scale: 0.98 }}
                  transition={{ duration: 0.18, ease: 'easeOut' }}
                  className="absolute top-full left-0 w-[360px] bg-white rounded-2xl p-3 shadow-2xl border border-gray-100 mt-2 z-50"
                >
                  <div className="p-2.5 pb-2 mb-1 border-b border-gray-100 flex justify-between items-center">
                    <div>
                      <p className="text-[10px] font-extrabold uppercase tracking-widest text-[#E8621A]">
                        Credit Solutions
                      </p>
                      <p className="text-xs text-gray-500 font-medium mt-0.5">
                        Secured, structured growth capital from ₹1 Cr to ₹100 Cr.
                      </p>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 gap-1">
                    {productItems.map((item) => (
                      <Link
                        key={item.href}
                        href={item.href}
                        className={`flex items-center gap-3 p-2.5 rounded-xl transition-all ${
                          pathname === item.href
                            ? 'bg-[#FAF9F6] border border-[#E8621A]/30'
                            : 'hover:bg-[#FAF9F6]'
                        }`}
                      >
                        <div className="p-2 rounded-lg bg-[#FAF9F6] border border-gray-100 shrink-0">
                          {item.icon}
                        </div>
                        <div className="flex-1 min-w-0">
                          <p className="text-xs font-bold text-[#0F1932] truncate">
                            {item.title}
                          </p>
                        </div>
                      </Link>
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Policies & Disclosures Link */}
          <Link
            href="/policies"
            className={`inline-flex items-center gap-1 text-xs font-semibold tracking-wide transition-colors ${
              pathname === '/policies' || pathname === '/disclosures'
                ? 'text-[#E8621A]'
                : 'text-gray-700 hover:text-[#0F1932]'
            }`}
          >
            <span>Policies & Disclosures</span>
          </Link>

          {/* Testimonials Link */}
          <Link
            href="/testimonials"
            className={`inline-flex items-center gap-1 text-xs font-semibold tracking-wide transition-colors ${
              pathname === '/testimonials'
                ? 'text-[#E8621A]'
                : 'text-gray-700 hover:text-[#0F1932]'
            }`}
          >
            <span>Testimonials</span>
          </Link>
        </nav>

        {/* Top Right Action & Accessibility Buttons */}
        <div className="hidden lg:flex items-center gap-3">
          <AccessibilityButton />
          <ActionButton label="Start a conversation" href="/#contact" />
        </div>

        {/* Mobile Actions & Hamburger Toggle Button */}
        <div className="lg:hidden flex items-center gap-2">
          <AccessibilityButton className="w-8 h-8" />
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-xl text-gray-700 hover:bg-gray-100 transition-colors"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-white border-b border-gray-200 overflow-hidden px-6 py-5 shadow-xl max-h-[85vh] overflow-y-auto"
          >
            <div className="space-y-4">
              {/* About Us Accordion */}
              <div>
                <button
                  onClick={() =>
                    setMobileExpanded(mobileExpanded === 'about' ? null : 'about')
                  }
                  className="w-full flex items-center justify-between py-2 text-sm font-bold text-[#0F1932]"
                >
                  <span className="flex items-center gap-2">About Us</span>
                  <ChevronDown
                    className={`w-4 h-4 text-gray-400 transition-transform ${
                      mobileExpanded === 'about' ? 'rotate-180 text-[#E8621A]' : ''
                    }`}
                  />
                </button>

                {mobileExpanded === 'about' && (
                  <div className="pl-3 mt-2 space-y-2 border-l-2 border-orange-200">
                    {aboutItems.map((item) => (
                      <Link
                        key={item.href}
                        href={item.href}
                        className="block py-1.5 text-xs text-gray-600 hover:text-[#E8621A] font-medium"
                      >
                        <div className="font-bold text-[#0F1932]">{item.title}</div>
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              {/* Products Accordion */}
              <div>
                <button
                  onClick={() =>
                    setMobileExpanded(mobileExpanded === 'products' ? null : 'products')
                  }
                  className="w-full flex items-center justify-between py-2 text-sm font-bold text-[#0F1932]"
                >
                  <span className="flex items-center gap-2">Products</span>
                  <ChevronDown
                    className={`w-4 h-4 text-gray-400 transition-transform ${
                      mobileExpanded === 'products' ? 'rotate-180 text-[#E8621A]' : ''
                    }`}
                  />
                </button>

                {mobileExpanded === 'products' && (
                  <div className="pl-3 mt-2 space-y-2 border-l-2 border-orange-200">
                    {productItems.map((item) => (
                      <Link
                        key={item.href}
                        href={item.href}
                        className="block py-1.5 text-xs text-gray-600 hover:text-[#E8621A] font-medium"
                      >
                        <div className="font-bold text-[#0F1932]">{item.title}</div>
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              {/* Policies & Disclosures */}
              <Link
                href="/policies"
                className="block py-2 text-sm font-bold text-[#0F1932] hover:text-[#E8621A]"
              >
                Policies & Disclosures
              </Link>

              {/* Testimonials */}
              <Link
                href="/testimonials"
                className="block py-2 text-sm font-bold text-[#0F1932] hover:text-[#E8621A]"
              >
                Testimonials
              </Link>

              {/* DNA & Roadmap */}
              {/* <Link
                href="/#dna"
                className="block py-2 text-sm font-bold text-[#0F1932] hover:text-[#E8621A]"
              >
                Our DNA
              </Link> */}
              {/* <Link
                href="/#roadmap"
                className="block py-2 text-sm font-bold text-[#0F1932] hover:text-[#E8621A]"
              >
                Roadmap
              </Link> */}

              {/* CTA button in mobile menu */}
              <div className="pt-4 border-t border-gray-100">
                <ActionButton
                  label="Start a conversation"
                  href="/#contact"
                  className="w-full justify-center"
                />
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
