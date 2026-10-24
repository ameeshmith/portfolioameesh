import React from 'react';
import { ArrowUp } from 'lucide-react';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="py-12 border-t border-zinc-900 text-zinc-400 text-xs font-mono">
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
        {/* Left Credit */}
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-emerald-500 inline-block" />
          <span>
            © {new Date().getFullYear()} Ameesh Mithanthaya. All rights reserved.
          </span>
        </div>

        {/* Center Tag */}
        <div className="text-zinc-400">
          Built with <span className="text-zinc-200">React</span>, <span className="text-zinc-200">Vite</span> & <span className="text-zinc-200">Tailwind CSS</span>
        </div>

        {/* Scroll To Top */}
        <button
          onClick={scrollToTop}
          className="inline-flex items-center gap-1.5 p-2 rounded-lg bg-zinc-900 border border-zinc-800 text-zinc-400 hover:text-white hover:border-zinc-700 transition-colors"
          title="Scroll to top"
        >
          <span>Top</span>
          <ArrowUp className="w-3.5 h-3.5" />
        </button>
      </div>
    </footer>
  );
};
