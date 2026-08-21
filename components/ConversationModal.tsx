'use client';

import React, { useState, createContext, useContext, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  X,
  CheckCircle2,
  ArrowRight
} from 'lucide-react';

interface ModalContextType {
  isOpen: boolean;
  openModal: (defaultProduct?: string) => void;
  closeModal: () => void;
}

const ModalContext = createContext<ModalContextType>({
  isOpen: false,
  openModal: () => {},
  closeModal: () => {},
});

export const useConversationModal = () => useContext(ModalContext);

export function ModalProvider({ children }: { children: React.ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState('Loan Against Shares (LAS)');

  const openModal = (defaultProduct?: string) => {
    if (defaultProduct) {
      setSelectedProduct(defaultProduct);
    }
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  return (
    <ModalContext.Provider value={{ isOpen, openModal, closeModal }}>
      {children}
      <ConversationModal
        isOpen={isOpen}
        onClose={closeModal}
        initialProduct={selectedProduct}
      />
    </ModalContext.Provider>
  );
}

export function ConversationModal({
  isOpen,
  onClose,
  initialProduct = 'Loan Against Shares (LAS)',
}: {
  isOpen: boolean;
  onClose: () => void;
  initialProduct?: string;
}) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    product: initialProduct,
    ticketSize: '₹10 Cr – ₹25 Cr',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    if (initialProduct) {
      setFormData((prev) => ({ ...prev, product: initialProduct }));
    }
  }, [initialProduct]);

  // Handle ESC key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Rapid dispatch simulation
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 700);
  };

  const handleResetAndClose = () => {
    setIsSubmitted(false);
    setFormData({
      name: '',
      email: '',
      phone: '',
      company: '',
      product: initialProduct,
      ticketSize: '₹10 Cr – ₹25 Cr',
      message: '',
    });
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={onClose}
            className="fixed inset-0 bg-[#0F1932]/60 backdrop-blur-sm"
          />

          {/* Minimalist Modal Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.96, y: 10 }}
            transition={{ type: 'spring', damping: 25, stiffness: 350 }}
            className="relative w-full max-w-xl bg-white rounded-3xl shadow-2xl border border-gray-100 p-7 sm:p-9 z-10 my-auto"
          >
            {/* Header */}
            <div className="flex items-start justify-between mb-6">
              <div>
                <div className="inline-flex items-center gap-2 mb-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#E8621A]" />
                  <span className="text-[11px] font-extrabold uppercase tracking-widest text-[#E8621A]">
                    Direct Credit Desk
                  </span>
                </div>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-[#0F1932] tracking-tight">
                  Start a Conversation
                </h3>
                <p className="text-xs sm:text-sm text-gray-500 mt-1">
                  Connect with our underwriting committee. We respond within 4 hours.
                </p>
              </div>

              <button
                onClick={onClose}
                aria-label="Close"
                className="w-8 h-8 rounded-full bg-[#FAF9F6] hover:bg-gray-200 border border-gray-200 flex items-center justify-center text-gray-500 hover:text-[#0F1932] transition-colors cursor-pointer"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Content */}
            {isSubmitted ? (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="py-8 text-center space-y-5"
              >
                <div className="w-14 h-14 rounded-full bg-emerald-50 border border-emerald-200 flex items-center justify-center text-emerald-600 mx-auto">
                  <CheckCircle2 className="w-7 h-7" />
                </div>

                <div className="space-y-1.5">
                  <h4 className="text-xl font-bold text-[#0F1932]">
                    Inquiry Received
                  </h4>
                  <p className="text-xs sm:text-sm text-gray-600 max-w-sm mx-auto leading-relaxed">
                    Thank you, <strong className="text-[#0F1932]">{formData.name}</strong>. Our investment committee has received your details and will contact you shortly.
                  </p>
                </div>

                <div className="p-3.5 rounded-2xl bg-[#FAF9F6] border border-gray-200/80 text-xs text-left max-w-sm mx-auto space-y-1">
                  <div className="flex justify-between">
                    <span className="text-gray-400">Entity:</span>
                    <span className="font-semibold text-[#0F1932]">{formData.company}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">Facility:</span>
                    <span className="font-semibold text-[#E8621A]">{formData.product}</span>
                  </div>
                </div>

                <div className="pt-2">
                  <button
                    onClick={handleResetAndClose}
                    className="px-6 py-2.5 rounded-xl bg-[#0F1932] hover:bg-black text-white font-bold text-xs shadow-sm transition-all cursor-pointer"
                  >
                    Done
                  </button>
                </div>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                  {/* Name */}
                  <div>
                    <label className="block text-[11px] font-bold text-gray-700 uppercase tracking-wider mb-1">
                      Full Name <span className="text-[#E8621A]">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. Rahul Mehta"
                      className="w-full bg-[#FAF9F6] border border-gray-200 rounded-xl px-3.5 py-2 text-xs sm:text-sm text-[#0F1932] placeholder-gray-400 focus:outline-none focus:border-[#E8621A] focus:bg-white transition-colors"
                    />
                  </div>

                  {/* Company */}
                  <div>
                    <label className="block text-[11px] font-bold text-gray-700 uppercase tracking-wider mb-1">
                      Company / Entity <span className="text-[#E8621A]">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      placeholder="e.g. Mehta Enterprises"
                      className="w-full bg-[#FAF9F6] border border-gray-200 rounded-xl px-3.5 py-2 text-xs sm:text-sm text-[#0F1932] placeholder-gray-400 focus:outline-none focus:border-[#E8621A] focus:bg-white transition-colors"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                  {/* Email */}
                  <div>
                    <label className="block text-[11px] font-bold text-gray-700 uppercase tracking-wider mb-1">
                      Work Email <span className="text-[#E8621A]">*</span>
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="rahul@company.com"
                      className="w-full bg-[#FAF9F6] border border-gray-200 rounded-xl px-3.5 py-2 text-xs sm:text-sm text-[#0F1932] placeholder-gray-400 focus:outline-none focus:border-[#E8621A] focus:bg-white transition-colors"
                    />
                  </div>

                  {/* Phone */}
                  <div>
                    <label className="block text-[11px] font-bold text-gray-700 uppercase tracking-wider mb-1">
                      Phone Number <span className="text-[#E8621A]">*</span>
                    </label>
                    <input
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="+91 98000 00000"
                      className="w-full bg-[#FAF9F6] border border-gray-200 rounded-xl px-3.5 py-2 text-xs sm:text-sm text-[#0F1932] placeholder-gray-400 focus:outline-none focus:border-[#E8621A] focus:bg-white transition-colors"
                    />
                  </div>
                </div>

                {/* Facility */}
                <div>
                  <label className="block text-[11px] font-bold text-gray-700 uppercase tracking-wider mb-1">
                    Credit Facility
                  </label>
                  <select
                    value={formData.product}
                    onChange={(e) => setFormData({ ...formData, product: e.target.value })}
                    className="w-full bg-[#FAF9F6] border border-gray-200 rounded-xl px-3.5 py-2 text-xs sm:text-sm text-[#0F1932] focus:outline-none focus:border-[#E8621A] focus:bg-white transition-colors cursor-pointer"
                  >
                    <option value="Loan Against Shares (LAS)">Loan Against Shares (LAS) — Up to 20% LTV</option>
                    <option value="Supply Chain Financing (SCF)">Supply Chain Financing (SCF) — 90–120 Days</option>
                    <option value="Real Estate & Developer Credit (RESD)">Real Estate & Developer Credit (RESD) — 2.0x–3.0x Cover</option>
                    <option value="Structured Credit & Special Situations">Structured Credit & Special Situations</option>
                    <option value="General Inquiry">General Inquiry</option>
                  </select>
                </div>

                {/* Ticket Size */}
                <div>
                  <label className="block text-[11px] font-bold text-gray-700 uppercase tracking-wider mb-1">
                    Estimated Requirement
                  </label>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                    {[
                      '₹1 Cr – ₹10 Cr',
                      '₹10 Cr – ₹25 Cr',
                      '₹25 Cr – ₹50 Cr',
                      '₹50 Cr – ₹100 Cr+',
                    ].map((size) => (
                      <button
                        key={size}
                        type="button"
                        onClick={() => setFormData({ ...formData, ticketSize: size })}
                        className={`py-1.5 px-2.5 rounded-lg border text-[11px] font-semibold transition-all cursor-pointer ${
                          formData.ticketSize === size
                            ? 'bg-[#0F1932] border-[#0F1932] text-white'
                            : 'bg-[#FAF9F6] border-gray-200 text-gray-600 hover:border-[#E8621A]/40'
                        }`}
                      >
                        {size}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Message */}
                <div>
                  <label className="block text-[11px] font-bold text-gray-700 uppercase tracking-wider mb-1">
                    Brief Note <span className="text-gray-400 font-normal">(Optional)</span>
                  </label>
                  <textarea
                    rows={2}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Provide context regarding required collateral or disbursement timelines..."
                    className="w-full bg-[#FAF9F6] border border-gray-200 rounded-xl px-3.5 py-2 text-xs sm:text-sm text-[#0F1932] placeholder-gray-400 focus:outline-none focus:border-[#E8621A] focus:bg-white transition-colors resize-none"
                  />
                </div>

                {/* Submit */}
                <div className="pt-2">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-3 px-5 rounded-xl bg-[#E8621A] hover:bg-[#F27125] text-white font-bold text-xs sm:text-sm shadow-md flex items-center justify-center gap-2 transition-all cursor-pointer disabled:opacity-70"
                  >
                    {isSubmitting ? (
                      <>
                        <span className="w-3.5 h-3.5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                        <span>Submitting...</span>
                      </>
                    ) : (
                      <>
                        <span>Submit Confidential Inquiry</span>
                        <ArrowRight className="w-4 h-4" />
                      </>
                    )}
                  </button>
                </div>
              </form>
            )}
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
