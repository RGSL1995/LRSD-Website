'use client';

import React from 'react';
import { motion } from 'framer-motion';

export const TorusWireframe = ({ className = "w-16 h-16", color = "#D99873" }: { className?: string; color?: string }) => (
  <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    <ellipse cx="50" cy="50" rx="38" ry="24" stroke={color} strokeWidth="1.5" strokeDasharray="3 2" opacity="0.8" />
    <ellipse cx="50" cy="50" rx="28" ry="16" stroke={color} strokeWidth="1.5" opacity="0.6" />
    <ellipse cx="50" cy="50" rx="16" ry="8" stroke={color} strokeWidth="1.5" opacity="0.9" />
    <circle cx="50" cy="50" r="4" fill={color} opacity="0.7" />
    <path d="M12 50 C12 36 28 26 50 26 C72 26 88 36 88 50" stroke={color} strokeWidth="1" opacity="0.5" />
    <path d="M12 50 C12 64 28 74 50 74 C72 74 88 64 88 50" stroke={color} strokeWidth="1" opacity="0.5" />
  </svg>
);

export const SphereWireframe = ({ className = "w-16 h-16", color = "#D99873" }: { className?: string; color?: string }) => (
  <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    <circle cx="50" cy="50" r="38" stroke={color} strokeWidth="1.5" opacity="0.8" />
    <ellipse cx="50" cy="50" rx="38" ry="18" stroke={color} strokeWidth="1.2" opacity="0.7" />
    <ellipse cx="50" cy="50" rx="18" ry="38" stroke={color} strokeWidth="1.2" opacity="0.7" />
  </svg>
);

export const GyroWireframe = ({ className = "w-16 h-16", color = "#D99873" }: { className?: string; color?: string }) => (
  <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    <circle cx="50" cy="50" r="38" stroke={color} strokeWidth="1.2" opacity="0.4" />
    <ellipse cx="50" cy="50" rx="36" ry="24" transform="rotate(25 50 50)" stroke={color} strokeWidth="1.4" opacity="0.7" />
    <ellipse cx="50" cy="50" rx="36" ry="24" transform="rotate(-25 50 50)" stroke={color} strokeWidth="1.4" opacity="0.7" />
    <circle cx="50" cy="50" r="16" stroke={color} strokeWidth="1.5" opacity="0.9" />
  </svg>
);

export const SilkWaves = () => {
  return (
    <div className="absolute inset-0 w-full h-full pointer-events-none overflow-hidden select-none z-0">
      <svg
        viewBox="0 0 1800 1000"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="absolute top-0 right-0 w-full h-full min-w-[1400px] object-cover"
        preserveAspectRatio="xMaxYMid slice"
      >
        <defs>
          <linearGradient id="silkGlowMain" x1="100%" y1="10%" x2="0%" y2="85%">
            <stop offset="0%" stopColor="#8A3816" stopOpacity="0.85" />
            <stop offset="25%" stopColor="#C45A2C" stopOpacity="0.75" />
            <stop offset="50%" stopColor="#E28659" stopOpacity="0.5" />
            <stop offset="75%" stopColor="#F5B898" stopOpacity="0.25" />
            <stop offset="100%" stopColor="#FDF4ED" stopOpacity="0" />
          </linearGradient>

          <linearGradient id="silkCoreHighlight" x1="100%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#DE6C37" stopOpacity="0.95" />
            <stop offset="40%" stopColor="#F08E5C" stopOpacity="0.85" />
            <stop offset="75%" stopColor="#F8C4A7" stopOpacity="0.4" />
            <stop offset="100%" stopColor="#FFF2EB" stopOpacity="0.05" />
          </linearGradient>

          <linearGradient id="silkLowerGlow" x1="100%" y1="5%" x2="10%" y2="95%">
            <stop offset="0%" stopColor="#A84C24" stopOpacity="0.8" />
            <stop offset="35%" stopColor="#D97241" stopOpacity="0.65" />
            <stop offset="70%" stopColor="#EFA47B" stopOpacity="0.35" />
            <stop offset="100%" stopColor="#FCEDE4" stopOpacity="0" />
          </linearGradient>

          <linearGradient id="silkAmbientFeather" x1="90%" y1="10%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#E58252" stopOpacity="0.3" />
            <stop offset="45%" stopColor="#F2B495" stopOpacity="0.2" />
            <stop offset="85%" stopColor="#FDF0E9" stopOpacity="0.05" />
            <stop offset="100%" stopColor="#FFFFFF" stopOpacity="0" />
          </linearGradient>

          <filter id="silkIntenseGlow" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="4" result="blur1" />
            <feGaussianBlur stdDeviation="12" result="blur2" />
            <feMerge>
              <feMergeNode in="blur2" />
              <feMergeNode in="blur1" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>

          <filter id="silkFeatherSoft" x="-30%" y="-30%" width="160%" height="160%">
            <feGaussianBlur stdDeviation="22" />
          </filter>

          <filter id="silkFeatherMedium" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="10" />
          </filter>
        </defs>

        <motion.path
          d="M 500,280 C 850,260 1200,80 1800,20 L 1800,220 C 1300,260 900,420 500,420 Z"
          fill="url(#silkAmbientFeather)"
          filter="url(#silkFeatherSoft)"
          animate={{
            d: [
              "M 500,280 C 850,260 1200,80 1800,20 L 1800,220 C 1300,260 900,420 500,420 Z",
              "M 500,300 C 850,290 1200,100 1800,40 L 1800,240 C 1300,280 900,440 500,440 Z",
              "M 500,280 C 850,260 1200,80 1800,20 L 1800,220 C 1300,260 900,420 500,420 Z",
            ],
          }}
          transition={{ duration: 11, repeat: Infinity, ease: "easeInOut" }}
        />

        <motion.path
          d="M 650,330 C 950,310 1300,130 1800,50 L 1800,110 C 1350,190 980,360 650,370 Z"
          fill="url(#silkGlowMain)"
          filter="url(#silkFeatherMedium)"
          animate={{
            d: [
              "M 650,330 C 950,310 1300,130 1800,50 L 1800,110 C 1350,190 980,360 650,370 Z",
              "M 650,350 C 950,330 1300,150 1800,70 L 1800,130 C 1350,210 980,380 650,390 Z",
              "M 650,330 C 950,310 1300,130 1800,50 L 1800,110 C 1350,190 980,360 650,370 Z",
            ],
          }}
          transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
        />

        <motion.path
          d="M 680,340 C 980,320 1320,140 1800,65 L 1800,85 C 1340,160 990,335 680,355 Z"
          fill="url(#silkCoreHighlight)"
          filter="url(#silkIntenseGlow)"
          animate={{
            d: [
              "M 680,340 C 980,320 1320,140 1800,65 L 1800,85 C 1340,160 990,335 680,355 Z",
              "M 680,360 C 980,340 1320,160 1800,85 L 1800,105 C 1340,180 990,355 680,375 Z",
              "M 680,340 C 980,320 1320,140 1800,65 L 1800,85 C 1340,160 990,335 680,355 Z",
            ],
          }}
          transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
        />

        <motion.path
          d="M 800,580 C 1150,560 1480,480 1800,420 L 1800,490 C 1450,550 1150,625 800,640 Z"
          fill="url(#silkLowerGlow)"
          filter="url(#silkFeatherMedium)"
          animate={{
            d: [
              "M 800,580 C 1150,560 1480,480 1800,420 L 1800,490 C 1450,550 1150,625 800,640 Z",
              "M 800,560 C 1150,540 1480,460 1800,400 L 1800,470 C 1450,530 1150,605 800,620 Z",
              "M 800,580 C 1150,560 1480,480 1800,420 L 1800,490 C 1450,550 1150,625 800,640 Z",
            ],
          }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 0.8 }}
        />
      </svg>
    </div>
  );
};
