import React from 'react';
import { ArrowUp } from 'lucide-react';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="py-10 border-t-2 border-zinc-300 dark:border-zinc-800 text-zinc-600 dark:text-zinc-400 text-xs font-mono">
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
        {/* Left Status & Details */}
        <div className="flex flex-col sm:flex-row items-center gap-3">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 inline-block animate-ping" />
            <span className="font-bold text-zinc-900 dark:text-zinc-200">
              ALL SYSTEMS OPERATIONAL
            </span>
          </div>
          <span className="hidden sm:inline text-zinc-400">•</span>
          <span>© {new Date().getFullYear()} Ameesh Mithanthaya</span>
        </div>

        {/* Tactile Scroll To Top */}
        <button
          onClick={scrollToTop}
          className="tactile-btn inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-zinc-100 dark:bg-zinc-800 border-2 border-zinc-950 dark:border-zinc-700 text-zinc-900 dark:text-zinc-100 font-bold hover:bg-amber-300 hover:text-zinc-950 transition-colors cursor-pointer"
          title="Scroll to top"
        >
          <span>BACK TO TOP</span>
          <ArrowUp className="w-3.5 h-3.5" />
        </button>
      </div>
    </footer>
  );
};
