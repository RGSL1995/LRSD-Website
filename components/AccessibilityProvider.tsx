'use client';

import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Eye,
  Type,
  Sun,
  Moon,
  Volume2,
  VolumeX,
  RotateCcw,
  X,
  Sparkles,
  MousePointer,
  Minus,
  Plus,
  Check,
  BookOpen,
  Sliders,
  Maximize2,
  AlignLeft,
  ChevronsLeftRight,
} from 'lucide-react';

export type TextSize = 'normal' | 'large' | 'extralarge';
export type ContrastMode = 'default' | 'high-contrast-dark' | 'high-contrast-light' | 'yellow-on-black' | 'grayscale';

interface AccessibilityState {
  textSize: TextSize;
  contrastMode: ContrastMode;
  dyslexicFont: boolean;
  highlightLinks: boolean;
  bigCursor: boolean;
  readingGuide: boolean;
  reducedMotion: boolean;
  letterSpacing: boolean;
  lineHeight: boolean;
  textToSpeechActive: boolean;
}

interface AccessibilityContextType extends AccessibilityState {
  isOpen: boolean;
  openWidget: () => void;
  closeWidget: () => void;
  toggleWidget: () => void;
  setTextSize: (size: TextSize) => void;
  cycleTextSize: () => void;
  setContrastMode: (mode: ContrastMode) => void;
  toggleContrast: () => void;
  toggleDyslexicFont: () => void;
  toggleHighlightLinks: () => void;
  toggleBigCursor: () => void;
  toggleReadingGuide: () => void;
  toggleReducedMotion: () => void;
  toggleLetterSpacing: () => void;
  toggleLineHeight: () => void;
  speakPageText: () => void;
  stopSpeaking: () => void;
  resetAll: () => void;
}

const defaultState: AccessibilityState = {
  textSize: 'normal',
  contrastMode: 'default',
  dyslexicFont: false,
  highlightLinks: false,
  bigCursor: false,
  readingGuide: false,
  reducedMotion: false,
  letterSpacing: false,
  lineHeight: false,
  textToSpeechActive: false,
};

const AccessibilityContext = createContext<AccessibilityContextType | undefined>(undefined);

export const useAccessibility = () => {
  const context = useContext(AccessibilityContext);
  if (!context) {
    throw new Error('useAccessibility must be used within an AccessibilityProvider');
  }
  return context;
};

export const AccessibilityProvider = ({ children }: { children: ReactNode }) => {
  const [state, setState] = useState<AccessibilityState>(defaultState);
  const [isOpen, setIsOpen] = useState(false);
  const [mouseY, setMouseY] = useState<number>(0);
  const [isSpeaking, setIsSpeaking] = useState(false);

  // Load persisted preferences
  useEffect(() => {
    try {
      const saved = localStorage.getItem('lrsd_accessibility_pref');
      if (saved) {
        const parsed = JSON.parse(saved);
        setState((prev) => ({ ...prev, ...parsed, textToSpeechActive: false }));
      }
    } catch {
      // Ignore localStorage errors
    }
  }, []);

  // Sync state to DOM and save to localStorage
  useEffect(() => {
    try {
      const { textToSpeechActive, ...toSave } = state;
      localStorage.setItem('lrsd_accessibility_pref', JSON.stringify(toSave));
    } catch {
      // Ignore localStorage errors
    }

    const root = document.documentElement;

    // 1. Text Size
    root.classList.remove('a11y-text-large', 'a11y-text-extralarge');
    if (state.textSize === 'large') root.classList.add('a11y-text-large');
    if (state.textSize === 'extralarge') root.classList.add('a11y-text-extralarge');

    // 2. Contrast
    root.classList.remove(
      'a11y-high-contrast-dark',
      'a11y-high-contrast-light',
      'a11y-yellow-on-black',
      'a11y-grayscale'
    );
    if (state.contrastMode === 'high-contrast-dark') root.classList.add('a11y-high-contrast-dark');
    if (state.contrastMode === 'high-contrast-light') root.classList.add('a11y-high-contrast-light');
    if (state.contrastMode === 'yellow-on-black') root.classList.add('a11y-yellow-on-black');
    if (state.contrastMode === 'grayscale') root.classList.add('a11y-grayscale');

    // 3. Dyslexic font
    if (state.dyslexicFont) root.classList.add('a11y-dyslexic');
    else root.classList.remove('a11y-dyslexic');

    // 4. Highlight links
    if (state.highlightLinks) root.classList.add('a11y-highlight-links');
    else root.classList.remove('a11y-highlight-links');

    // 5. Big cursor
    if (state.bigCursor) root.classList.add('a11y-big-cursor');
    else root.classList.remove('a11y-big-cursor');

    // 6. Reduced motion
    if (state.reducedMotion) root.classList.add('a11y-reduced-motion');
    else root.classList.remove('a11y-reduced-motion');

    // 7. Letter spacing
    if (state.letterSpacing) root.classList.add('a11y-letter-spacing');
    else root.classList.remove('a11y-letter-spacing');

    // 8. Line height
    if (state.lineHeight) root.classList.add('a11y-line-height');
    else root.classList.remove('a11y-line-height');
  }, [state]);

  // Track mouse position for reading guide
  useEffect(() => {
    if (!state.readingGuide) return;
    const handleMouseMove = (e: MouseEvent) => {
      setMouseY(e.clientY);
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [state.readingGuide]);

  // Clean up speech on unmount
  useEffect(() => {
    return () => {
      if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
        window.speechSynthesis.cancel();
      }
    };
  }, []);

  const openWidget = () => setIsOpen(true);
  const closeWidget = () => setIsOpen(false);
  const toggleWidget = () => setIsOpen((prev) => !prev);

  const setTextSize = (textSize: TextSize) => setState((prev) => ({ ...prev, textSize }));
  const cycleTextSize = () => {
    setState((prev) => {
      if (prev.textSize === 'normal') return { ...prev, textSize: 'large' };
      if (prev.textSize === 'large') return { ...prev, textSize: 'extralarge' };
      return { ...prev, textSize: 'normal' };
    });
  };

  const setContrastMode = (contrastMode: ContrastMode) => setState((prev) => ({ ...prev, contrastMode }));
  const toggleContrast = () => {
    setState((prev) => {
      if (prev.contrastMode === 'default') return { ...prev, contrastMode: 'high-contrast-dark' };
      if (prev.contrastMode === 'high-contrast-dark') return { ...prev, contrastMode: 'yellow-on-black' };
      return { ...prev, contrastMode: 'default' };
    });
  };

  const toggleDyslexicFont = () => setState((prev) => ({ ...prev, dyslexicFont: !prev.dyslexicFont }));
  const toggleHighlightLinks = () => setState((prev) => ({ ...prev, highlightLinks: !prev.highlightLinks }));
  const toggleBigCursor = () => setState((prev) => ({ ...prev, bigCursor: !prev.bigCursor }));
  const toggleReadingGuide = () => setState((prev) => ({ ...prev, readingGuide: !prev.readingGuide }));
  const toggleReducedMotion = () => setState((prev) => ({ ...prev, reducedMotion: !prev.reducedMotion }));
  const toggleLetterSpacing = () => setState((prev) => ({ ...prev, letterSpacing: !prev.letterSpacing }));
  const toggleLineHeight = () => setState((prev) => ({ ...prev, lineHeight: !prev.lineHeight }));

  const speakPageText = () => {
    if (typeof window === 'undefined' || !('speechSynthesis' in window)) {
      alert('Text-to-speech is not supported by your browser.');
      return;
    }

    if (isSpeaking) {
      window.speechSynthesis.cancel();
      setIsSpeaking(false);
      setState((prev) => ({ ...prev, textToSpeechActive: false }));
      return;
    }

    const selectedText = window.getSelection()?.toString().trim();
    const textToRead = selectedText || document.getElementById('main-content')?.innerText || document.body.innerText;

    if (!textToRead) return;

    window.speechSynthesis.cancel();
    const utterance = new SpeechSynthesisUtterance(textToRead.slice(0, 3000));
    utterance.lang = 'en-IN';
    utterance.rate = 0.95;

    utterance.onstart = () => {
      setIsSpeaking(true);
      setState((prev) => ({ ...prev, textToSpeechActive: true }));
    };

    utterance.onend = () => {
      setIsSpeaking(false);
      setState((prev) => ({ ...prev, textToSpeechActive: false }));
    };

    utterance.onerror = () => {
      setIsSpeaking(false);
      setState((prev) => ({ ...prev, textToSpeechActive: false }));
    };

    window.speechSynthesis.speak(utterance);
  };

  const stopSpeaking = () => {
    if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
      window.speechSynthesis.cancel();
      setIsSpeaking(false);
      setState((prev) => ({ ...prev, textToSpeechActive: false }));
    }
  };

  const resetAll = () => {
    stopSpeaking();
    setState(defaultState);
  };

  return (
    <AccessibilityContext.Provider
      value={{
        ...state,
        isOpen,
        openWidget,
        closeWidget,
        toggleWidget,
        setTextSize,
        cycleTextSize,
        setContrastMode,
        toggleContrast,
        toggleDyslexicFont,
        toggleHighlightLinks,
        toggleBigCursor,
        toggleReadingGuide,
        toggleReducedMotion,
        toggleLetterSpacing,
        toggleLineHeight,
        speakPageText,
        stopSpeaking,
        resetAll,
      }}
    >
      {/* Skip to Main Content Link for Keyboard Navigation */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[9999] focus:bg-[#E8621A] focus:text-white focus:px-5 focus:py-3 focus:rounded-xl focus:shadow-2xl focus:font-bold focus:outline-none focus:ring-4 focus:ring-[#0F1932]"
      >
        Skip to main content
      </a>

      {/* Reading Guide Overlay (Ruler) */}
      {state.readingGuide && (
        <div
          className="fixed left-0 w-full h-8 pointer-events-none z-[9990] bg-[#E8621A]/20 border-y-2 border-[#E8621A] transition-all duration-75 shadow-[0_0_20px_rgba(232,98,26,0.3)]"
          style={{ top: `${mouseY - 16}px` }}
        />
      )}

      {children}

      {/* Slide-out Accessibility Menu (Bank Portal Design) */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={closeWidget}
              className="fixed inset-0 z-[9998] bg-black/40 backdrop-blur-xs"
            />

            {/* Side Drawer / Menu Panel */}
            <motion.aside
              initial={{ opacity: 0, x: 50, scale: 0.98 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              exit={{ opacity: 0, x: 50, scale: 0.98 }}
              transition={{ duration: 0.22, ease: 'easeOut' }}
              className="fixed top-4 right-4 sm:top-6 sm:right-6 z-[9999] bg-white text-[#0F1932] rounded-3xl shadow-2xl border border-gray-200 w-full max-w-[380px] sm:max-w-[400px] max-h-[92vh] flex flex-col overflow-hidden"
              role="dialog"
              aria-modal="true"
              aria-labelledby="a11y-title"
            >
              {/* Header */}
              <div className="bg-[#0F1932] text-white px-6 py-4 flex items-center justify-between border-b border-white/10">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-[#E8621A] flex items-center justify-center text-white shadow-xs">
                    <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                      <path d="M12 2c1.1 0 2 .9 2 2s-.9 2-2 2-2-.9-2-2 .9-2 2-2zm9 7h-6v13h-2v-6h-2v6H9V9H3V7h18v2z" />
                    </svg>
                  </div>
                  <div>
                    <h2 id="a11y-title" className="text-base font-extrabold tracking-tight text-white">
                      Accessibility Menu
                    </h2>
                    <span className="text-[10px] font-semibold text-gray-400">
                      Customize view &amp; reading experience
                    </span>
                  </div>
                </div>

                <button
                  onClick={closeWidget}
                  aria-label="Close Accessibility Menu"
                  className="p-1.5 rounded-xl hover:bg-white/10 text-gray-400 hover:text-white transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Scrollable Content Body */}
              <div className="p-6 overflow-y-auto space-y-6 flex-1">
                {/* Section 1: Typography & Text Sizing */}
                <div className="bg-[#FAF9F6] border border-gray-200/80 rounded-2xl p-4 space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold text-[#0F1932] uppercase tracking-wider">
                      Content &amp; Text
                    </span>
                    <button
                      onClick={() => {
                        setTextSize('normal');
                        if (state.letterSpacing) toggleLetterSpacing();
                        if (state.lineHeight) toggleLineHeight();
                      }}
                      className="text-[11px] font-bold text-[#E8621A] hover:text-[#C54E0E] transition-colors"
                    >
                      RESET
                    </button>
                  </div>

                  {/* Quick Text Utility Pills */}
                  <div className="flex items-center gap-2">
                    <button
                      onClick={cycleTextSize}
                      className={`flex-1 py-2 px-2.5 rounded-xl border text-xs font-bold transition-all flex items-center justify-center gap-1.5 ${
                        state.textSize !== 'normal'
                          ? 'bg-[#0F1932] text-white border-[#0F1932] shadow-sm'
                          : 'bg-white text-gray-700 border-gray-200 hover:border-gray-300'
                      }`}
                    >
                      <Type className="w-3.5 h-3.5 text-[#E8621A]" />
                      <span>{state.textSize === 'extralarge' ? 'A++' : state.textSize === 'large' ? 'A+' : 'Text Size'}</span>
                    </button>

                    <button
                      onClick={toggleLineHeight}
                      className={`flex-1 py-2 px-2.5 rounded-xl border text-xs font-bold transition-all flex items-center justify-center gap-1.5 ${
                        state.lineHeight
                          ? 'bg-[#0F1932] text-white border-[#0F1932] shadow-sm'
                          : 'bg-white text-gray-700 border-gray-200 hover:border-gray-300'
                      }`}
                    >
                      <AlignLeft className="w-3.5 h-3.5 text-[#E8621A]" />
                      <span>Line Height</span>
                    </button>

                    <button
                      onClick={toggleLetterSpacing}
                      className={`flex-1 py-2 px-2.5 rounded-xl border text-xs font-bold transition-all flex items-center justify-center gap-1.5 ${
                        state.letterSpacing
                          ? 'bg-[#0F1932] text-white border-[#0F1932] shadow-sm'
                          : 'bg-white text-gray-700 border-gray-200 hover:border-gray-300'
                      }`}
                    >
                      <ChevronsLeftRight className="w-3.5 h-3.5 text-[#E8621A]" />
                      <span>Spacing</span>
                    </button>
                  </div>

                  {/* Stepper / Slider for Text Size */}
                  <div className="pt-2">
                    <div className="flex items-center justify-between text-xs font-bold text-gray-600 mb-1.5">
                      <span className="text-xs">Aa</span>
                      <span className="text-[11px] font-semibold text-gray-400">
                        {state.textSize === 'extralarge' ? '+30%' : state.textSize === 'large' ? '+15%' : 'Default (100%)'}
                      </span>
                      <span className="text-base font-black">Aa</span>
                    </div>

                    <div className="grid grid-cols-3 gap-1.5 bg-white p-1 rounded-xl border border-gray-200">
                      {[
                        { id: 'normal', label: 'Default' },
                        { id: 'large', label: 'Large' },
                        { id: 'extralarge', label: 'X-Large' },
                      ].map((s) => (
                        <button
                          key={s.id}
                          onClick={() => setTextSize(s.id as TextSize)}
                          className={`py-1.5 rounded-lg text-xs font-bold transition-all ${
                            state.textSize === s.id
                              ? 'bg-[#0F1932] text-white shadow-xs'
                              : 'text-gray-600 hover:bg-gray-50'
                          }`}
                        >
                          {s.label}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Section 2: Interactive Feature Grid Cards */}
                <div>
                  <span className="text-xs font-bold text-gray-500 uppercase tracking-wider block mb-3">
                    Assistance Tools
                  </span>

                  <div className="grid grid-cols-2 gap-2.5">
                    {/* 1. Page Read Aloud */}
                    <button
                      onClick={speakPageText}
                      className={`p-3.5 rounded-2xl border text-center transition-all flex flex-col items-center justify-center gap-2 ${
                        isSpeaking
                          ? 'bg-red-50 border-red-300 text-red-700 shadow-sm'
                          : 'bg-[#FAF9F6] border-gray-200 text-[#0F1932] hover:border-[#E8621A]'
                      }`}
                    >
                      <div className={`w-9 h-9 rounded-full flex items-center justify-center ${isSpeaking ? 'bg-red-100 text-red-600' : 'bg-white border border-gray-200 text-[#E8621A]'}`}>
                        {isSpeaking ? <VolumeX className="w-5 h-5 animate-pulse" /> : <Volume2 className="w-5 h-5" />}
                      </div>
                      <div>
                        <div className="text-xs font-bold">{isSpeaking ? 'Stop Audio' : 'Page Read'}</div>
                        <div className="text-[10px] text-gray-500">{isSpeaking ? 'Playing...' : 'Audio voice'}</div>
                      </div>
                    </button>

                    {/* 2. Bigger Cursor */}
                    <button
                      onClick={toggleBigCursor}
                      className={`p-3.5 rounded-2xl border text-center transition-all flex flex-col items-center justify-center gap-2 ${
                        state.bigCursor
                          ? 'bg-[#0F1932] text-white border-[#0F1932] shadow-sm'
                          : 'bg-[#FAF9F6] border-gray-200 text-[#0F1932] hover:border-[#E8621A]'
                      }`}
                    >
                      <div className={`w-9 h-9 rounded-full flex items-center justify-center ${state.bigCursor ? 'bg-white/20 text-white' : 'bg-white border border-gray-200 text-[#E8621A]'}`}>
                        <MousePointer className="w-5 h-5" />
                      </div>
                      <div>
                        <div className="text-xs font-bold">Bigger Cursor</div>
                        <div className={`text-[10px] ${state.bigCursor ? 'text-white/80' : 'text-gray-500'}`}>{state.bigCursor ? 'Enabled' : 'Default'}</div>
                      </div>
                    </button>

                    {/* 3. Contrast Modes */}
                    <button
                      onClick={toggleContrast}
                      className={`p-3.5 rounded-2xl border text-center transition-all flex flex-col items-center justify-center gap-2 ${
                        state.contrastMode !== 'default'
                          ? 'bg-[#0F1932] text-white border-[#0F1932] shadow-sm'
                          : 'bg-[#FAF9F6] border-gray-200 text-[#0F1932] hover:border-[#E8621A]'
                      }`}
                    >
                      <div className={`w-9 h-9 rounded-full flex items-center justify-center ${state.contrastMode !== 'default' ? 'bg-white/20 text-white' : 'bg-white border border-gray-200 text-[#E8621A]'}`}>
                        {state.contrastMode !== 'default' ? <Sun className="w-5 h-5 text-yellow-400" /> : <Moon className="w-5 h-5 text-[#E8621A]" />}
                      </div>
                      <div>
                        <div className="text-xs font-bold">Contrast Mode</div>
                        <div className={`text-[10px] ${state.contrastMode !== 'default' ? 'text-white/80' : 'text-gray-500'}`}>
                          {state.contrastMode === 'high-contrast-dark' ? 'Dark' : state.contrastMode === 'yellow-on-black' ? 'Yellow/Black' : 'Standard'}
                        </div>
                      </div>
                    </button>

                    {/* 4. Dyslexia Font */}
                    <button
                      onClick={toggleDyslexicFont}
                      className={`p-3.5 rounded-2xl border text-center transition-all flex flex-col items-center justify-center gap-2 ${
                        state.dyslexicFont
                          ? 'bg-[#0F1932] text-white border-[#0F1932] shadow-sm'
                          : 'bg-[#FAF9F6] border-gray-200 text-[#0F1932] hover:border-[#E8621A]'
                      }`}
                    >
                      <div className={`w-9 h-9 rounded-full flex items-center justify-center ${state.dyslexicFont ? 'bg-white/20 text-white' : 'bg-white border border-gray-200 text-[#E8621A]'}`}>
                        <Type className="w-5 h-5" />
                      </div>
                      <div>
                        <div className="text-xs font-bold">Dyslexia Font</div>
                        <div className={`text-[10px] ${state.dyslexicFont ? 'text-white/80' : 'text-gray-500'}`}>{state.dyslexicFont ? 'Active' : 'Off'}</div>
                      </div>
                    </button>

                    {/* 5. Highlight Links */}
                    <button
                      onClick={toggleHighlightLinks}
                      className={`p-3.5 rounded-2xl border text-center transition-all flex flex-col items-center justify-center gap-2 ${
                        state.highlightLinks
                          ? 'bg-[#0F1932] text-white border-[#0F1932] shadow-sm'
                          : 'bg-[#FAF9F6] border-gray-200 text-[#0F1932] hover:border-[#E8621A]'
                      }`}
                    >
                      <div className={`w-9 h-9 rounded-full flex items-center justify-center ${state.highlightLinks ? 'bg-white/20 text-white' : 'bg-white border border-gray-200 text-[#E8621A]'}`}>
                        <BookOpen className="w-5 h-5" />
                      </div>
                      <div>
                        <div className="text-xs font-bold">Highlight Links</div>
                        <div className={`text-[10px] ${state.highlightLinks ? 'text-white/80' : 'text-gray-500'}`}>{state.highlightLinks ? 'Highlighted' : 'Off'}</div>
                      </div>
                    </button>

                    {/* 6. Reading Guide (Ruler) */}
                    <button
                      onClick={toggleReadingGuide}
                      className={`p-3.5 rounded-2xl border text-center transition-all flex flex-col items-center justify-center gap-2 ${
                        state.readingGuide
                          ? 'bg-[#0F1932] text-white border-[#0F1932] shadow-sm'
                          : 'bg-[#FAF9F6] border-gray-200 text-[#0F1932] hover:border-[#E8621A]'
                      }`}
                    >
                      <div className={`w-9 h-9 rounded-full flex items-center justify-center ${state.readingGuide ? 'bg-white/20 text-white' : 'bg-white border border-gray-200 text-[#E8621A]'}`}>
                        <Eye className="w-5 h-5" />
                      </div>
                      <div>
                        <div className="text-xs font-bold">Reading Ruler</div>
                        <div className={`text-[10px] ${state.readingGuide ? 'text-white/80' : 'text-gray-500'}`}>{state.readingGuide ? 'Tracking' : 'Off'}</div>
                      </div>
                    </button>
                  </div>
                </div>
              </div>

              {/* Footer */}
              <div className="p-4 bg-gray-50 border-t border-gray-200/80 flex items-center justify-between">
                <button
                  onClick={resetAll}
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-gray-600 hover:text-[#E8621A] transition-colors py-2 px-3 rounded-xl hover:bg-gray-200/60 cursor-pointer"
                >
                  <RotateCcw className="w-3.5 h-3.5" />
                  <span>Reset All</span>
                </button>

                <button
                  onClick={closeWidget}
                  className="bg-[#0F1932] hover:bg-[#1A2347] text-white font-bold text-xs py-2 px-5 rounded-xl shadow-xs transition-colors cursor-pointer"
                >
                  Apply &amp; Close
                </button>
              </div>
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </AccessibilityContext.Provider>
  );
};
