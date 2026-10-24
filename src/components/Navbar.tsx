import React from 'react';
import { Lightbulb, FileText } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

interface NavbarProps {
  onOpenResume?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenResume }) => {
  const { theme, toggleTheme } = useTheme();

  return (
    <header className="sticky top-0 z-40 w-full bg-[#faf7ee]/90 dark:bg-[#121214]/90 backdrop-blur-md border-b-2 border-zinc-950 dark:border-zinc-800 transition-colors">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
        {/* Monogram Logo */}
        <a
          href="#"
          className="flex items-center gap-2 group"
        >
          <div className="w-9 h-9 rounded-xl bg-amber-300 dark:bg-amber-400 border-2 border-zinc-950 text-zinc-950 font-black flex items-center justify-center text-sm shadow-[2px_2px_0px_0px_#09090b] group-hover:translate-x-0.5 group-hover:translate-y-0.5 group-hover:shadow-none transition-all">
            AM
          </div>
          <span className="font-bold text-sm tracking-tight text-zinc-900 dark:text-zinc-100 hidden sm:inline">
            Ameesh Mithanthaya
          </span>
        </a>

        {/* Quick Nav Links */}
        <nav className="flex items-center gap-1 sm:gap-2 text-xs sm:text-sm font-medium">
          <a
            href="#projects"
            className="px-2.5 py-1 rounded-lg text-zinc-700 dark:text-zinc-300 hover:text-zinc-950 dark:hover:text-white hover:bg-zinc-200/60 dark:hover:bg-zinc-800 transition-colors"
          >
            projects
          </a>
          <a
            href="#experience"
            className="px-2.5 py-1 rounded-lg text-zinc-700 dark:text-zinc-300 hover:text-zinc-950 dark:hover:text-white hover:bg-zinc-200/60 dark:hover:bg-zinc-800 transition-colors"
          >
            experience
          </a>
          <a
            href="#skills"
            className="px-2.5 py-1 rounded-lg text-zinc-700 dark:text-zinc-300 hover:text-zinc-950 dark:hover:text-white hover:bg-zinc-200/60 dark:hover:bg-zinc-800 transition-colors"
          >
            skills
          </a>
          <a
            href="#contact"
            className="px-2.5 py-1 rounded-lg text-zinc-700 dark:text-zinc-300 hover:text-zinc-950 dark:hover:text-white hover:bg-zinc-200/60 dark:hover:bg-zinc-800 transition-colors"
          >
            contact
          </a>
        </nav>

        {/* Right Actions: Resume & Theme Toggle */}
        <div className="flex items-center gap-2">
          {onOpenResume && (
            <button
              onClick={onOpenResume}
              className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white dark:bg-zinc-800 text-zinc-900 dark:text-zinc-100 text-xs font-semibold border-2 border-zinc-950 dark:border-zinc-700 shadow-[2px_2px_0px_0px_#09090b] dark:shadow-[2px_2px_0px_0px_#000] hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-none transition-all cursor-pointer"
            >
              <FileText className="w-3.5 h-3.5 text-amber-500" />
              <span>Resume</span>
            </button>
          )}

          <button
            onClick={toggleTheme}
            aria-label="Toggle theme"
            className="p-2 rounded-xl bg-white dark:bg-zinc-800 border-2 border-zinc-950 dark:border-zinc-700 shadow-[2px_2px_0px_0px_#09090b] dark:shadow-[2px_2px_0px_0px_#000] text-zinc-800 dark:text-zinc-200 hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-none transition-all cursor-pointer"
            title={theme === 'dark' ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
          >
            <Lightbulb
              className={`w-4 h-4 ${
                theme === 'dark' ? 'text-amber-400 fill-amber-400/30' : 'text-zinc-800'
              }`}
            />
          </button>
        </div>
      </div>
    </header>
  );
};
