'use client';

import React, { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';

export default function PageTransitionLoader() {
  const pathname = usePathname();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Show loader on route change or initial load for a crisp short duration
    setIsLoading(true);

    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 750);

    return () => clearTimeout(timer);
  }, [pathname]);

  return (
    <AnimatePresence mode="wait">
      {isLoading && (
        <motion.div
          key={`loader-${pathname}`}
          initial={{ opacity: 1 }}
          animate={{ opacity: 1 }}
          exit={{
            opacity: 0,
            transition: { duration: 0.35, ease: [0.22, 1, 0.36, 1] },
          }}
          className="fixed inset-0 z-[99999] bg-[#070A10] flex flex-col items-center justify-center pointer-events-auto select-none overflow-hidden"
        >
          {/* Ambient Warm Glow */}
          <div className="absolute w-[450px] h-[450px] bg-[#E8621A]/15 rounded-full blur-[120px] pointer-events-none" />

          {/* Main Animation Container */}
          <motion.div
            initial={{ scale: 0.9, opacity: 0, y: 8, filter: 'blur(6px)' }}
            animate={{
              scale: [0.9, 1, 1.02],
              opacity: [0, 1, 1],
              y: [8, 0, 0],
              filter: ['blur(6px)', 'blur(0px)', 'blur(0px)'],
            }}
            exit={{
              scale: 1.04,
              opacity: 0,
              y: -6,
              filter: 'blur(4px)',
              transition: { duration: 0.3, ease: 'easeInOut' },
            }}
            transition={{
              duration: 0.65,
              times: [0, 0.4, 1],
              ease: [0.16, 1, 0.3, 1],
            }}
            className="relative flex flex-col items-center justify-center z-10 px-6"
          >
            {/* LRSD Arrow Image */}
            <div className="relative w-56 sm:w-72 md:w-80 aspect-[653/382] flex items-center justify-center">
              <Image
                src="/LRSDarrow.png"
                alt="LRSD Capital"
                fill
                priority
                className="object-contain drop-shadow-[0_0_30px_rgba(232,98,26,0.4)]"
              />
            </div>

            {/* Subtle Brand Tag */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.1, duration: 0.35 }}
              className="mt-4 flex items-center gap-2"
            >
              <div className="w-1.5 h-1.5 rounded-full bg-[#E8621A] animate-pulse" />
              <span className="text-[10px] font-bold tracking-[0.25em] text-white/80 uppercase">
                LRSD Capital
              </span>
            </motion.div>

            {/* Snappy Linear Progress Line */}
            <div className="w-36 sm:w-48 h-[2px] bg-white/10 rounded-full mt-3 overflow-hidden">
              <motion.div
                initial={{ width: '0%' }}
                animate={{ width: '100%' }}
                transition={{ duration: 0.75, ease: 'easeOut' }}
                className="h-full bg-gradient-to-r from-[#E8621A] via-[#FF8A4C] to-[#E8621A]"
              />
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}



