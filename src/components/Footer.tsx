import React from 'react';
import { ArrowUp } from 'lucide-react';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="py-8 border-t border-zinc-200 dark:border-zinc-800 text-zinc-500 dark:text-zinc-400 text-xs font-mono">
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
        {/* Left Credit */}
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-emerald-500 inline-block" />
          <span>
            © {new Date().getFullYear()} Ameesh Mithanthaya. All rights reserved.
          </span>
        </div>

        {/* Scroll To Top */}
        <button
          onClick={scrollToTop}
          className="inline-flex items-center gap-1.5 p-2 rounded-lg bg-zinc-100 dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 text-zinc-600 dark:text-zinc-400 hover:text-zinc-950 dark:hover:text-white transition-colors cursor-pointer"
          title="Scroll to top"
        >
          <span>Top</span>
          <ArrowUp className="w-3.5 h-3.5" />
        </button>
      </div>
    </footer>
  );
};
