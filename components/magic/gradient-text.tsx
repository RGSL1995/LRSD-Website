import React from 'react';
import { cn } from '@/lib/utils';

interface GradientTextProps {
  children: React.ReactNode;
  className?: string;
  animate?: boolean;
}

export function GradientText({
  children,
  className,
  animate = true,
}: GradientTextProps) {
  return (
    <span
      className={cn(
        'bg-gradient-to-r from-[#F27125] via-[#E8651E] to-[#F27125] bg-clip-text text-transparent',
        animate && 'animate-pulse',
        className
      )}
    >
      {children}
    </span>
  );
}

interface ShinyTextProps {
  children: React.ReactNode;
  className?: string;
}

export function ShinyText({ children, className }: ShinyTextProps) {
  return (
    <span
      className={cn(
        'relative inline-block bg-gradient-to-r from-white via-[#F27125] to-white bg-[length:200%_100%] bg-clip-text text-transparent animate-shimmer',
        className
      )}
      style={{
        animation: 'shimmer 3s infinite',
      }}
    >
      {children}
      <style>{`
        @keyframes shimmer {
          0% {
            background-position: -200% center;
          }
          100% {
            background-position: 200% center;
          }
        }
      `}</style>
    </span>
  );
}
