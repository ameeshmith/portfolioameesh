import { Lightbulb } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

export const Navbar: React.FC = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <header className="w-full py-6 sm:py-8">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 flex items-center justify-between">
        {/* Bold clean logo: AMEESH */}
        <a
          href="#"
          className="text-lg sm:text-xl font-black tracking-tight text-zinc-900 dark:text-zinc-100 hover:opacity-80 transition-opacity uppercase font-sans"
        >
          AMEESH
        </a>

        {/* Lightbulb Theme Toggle (inspired by reference image) */}
        <button
          onClick={toggleTheme}
          aria-label="Toggle theme"
          className="p-2 rounded-lg text-zinc-600 dark:text-zinc-300 hover:text-zinc-950 dark:hover:text-white hover:bg-zinc-100 dark:hover:bg-zinc-850 transition-colors cursor-pointer"
          title={theme === 'dark' ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
        >
          {theme === 'dark' ? (
            <Lightbulb className="w-5 h-5 text-amber-400 fill-amber-400/20" />
          ) : (
            <Lightbulb className="w-5 h-5" />
          )}
        </button>
      </div>
    </header>
  );
};
