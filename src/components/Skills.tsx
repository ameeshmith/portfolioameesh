import React from 'react';
import { portfolioData } from '../data/portfolioData';
import { Bot, Code2, Database, Wrench, Cpu } from 'lucide-react';

export const Skills: React.FC = () => {
  const { skills } = portfolioData;

  const getCategoryMeta = (category: string) => {
    if (category.includes('AI') || category.includes('Agents')) {
      return {
        icon: <Bot className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />,
        badgeBg: 'bg-emerald-100 dark:bg-emerald-950/60 text-emerald-800 dark:text-emerald-300 border-emerald-300 dark:border-emerald-700',
        pillColor: 'hover:bg-emerald-200 dark:hover:bg-emerald-900/60',
      };
    }
    if (category.includes('Languages') || category.includes('Frameworks')) {
      return {
        icon: <Code2 className="w-4 h-4 text-sky-600 dark:text-sky-400" />,
        badgeBg: 'bg-sky-100 dark:bg-sky-950/60 text-sky-800 dark:text-sky-300 border-sky-300 dark:border-sky-700',
        pillColor: 'hover:bg-sky-200 dark:hover:bg-sky-900/60',
      };
    }
    if (category.includes('Data')) {
      return {
        icon: <Database className="w-4 h-4 text-purple-600 dark:text-purple-400" />,
        badgeBg: 'bg-purple-100 dark:bg-purple-950/60 text-purple-800 dark:text-purple-300 border-purple-300 dark:border-purple-700',
        pillColor: 'hover:bg-purple-200 dark:hover:bg-purple-900/60',
      };
    }
    return {
      icon: <Wrench className="w-4 h-4 text-amber-600 dark:text-amber-400" />,
      badgeBg: 'bg-amber-100 dark:bg-amber-950/60 text-amber-800 dark:text-amber-300 border-amber-300 dark:border-amber-700',
      pillColor: 'hover:bg-amber-200 dark:hover:bg-amber-900/60',
    };
  };

  return (
    <section id="skills" className="py-10 space-y-6">
      {/* Section Header */}
      <div className="flex items-center gap-3">
        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-bold tracking-wider uppercase bg-sky-200 dark:bg-sky-900 text-sky-950 dark:text-sky-100 border-2 border-zinc-950 dark:border-zinc-700 shadow-[2px_2px_0px_0px_#09090b]">
          <Cpu className="w-3.5 h-3.5 text-sky-700 dark:text-sky-300" />
          <span>04 TECHNICAL ARSENAL</span>
        </span>
        <div className="h-[2px] flex-1 bg-zinc-300 dark:bg-zinc-800" />
      </div>

      <div className="space-y-1">
        <h2 className="text-2xl sm:text-3xl font-black tracking-tight text-zinc-950 dark:text-zinc-50 font-sans">
          Tools I use to build & scale
        </h2>
        <p className="text-xs sm:text-sm font-mono text-zinc-600 dark:text-zinc-400">
          A battle-tested stack honed for autonomous agents, low-latency search systems, and robust data pipelines.
        </p>
      </div>

      {/* Categorized Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-5">
        {skills.map((cat) => {
          const meta = getCategoryMeta(cat.category);
          return (
            <div
              key={cat.category}
              className="tactile-card rounded-xl p-5 space-y-4"
            >
              {/* Category Header */}
              <div className="flex items-center justify-between pb-3 border-b-2 border-zinc-200 dark:border-zinc-800">
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-lg bg-zinc-100 dark:bg-zinc-800 border-2 border-zinc-950 dark:border-zinc-700 flex items-center justify-center shadow-[2px_2px_0px_0px_#09090b]">
                    {meta.icon}
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-zinc-950 dark:text-zinc-100 font-sans">
                      {cat.category}
                    </h3>
                    <p className="text-[11px] font-mono text-zinc-500 dark:text-zinc-400">
                      {cat.description}
                    </p>
                  </div>
                </div>
              </div>

              {/* Skills badges */}
              <div className="flex flex-wrap gap-2">
                {cat.skills.map((s) => (
                  <span
                    key={s.name}
                    className={`inline-flex items-center px-3 py-1 rounded-md text-xs font-mono font-medium bg-zinc-100 dark:bg-zinc-800 border-2 border-zinc-950 dark:border-zinc-700 text-zinc-800 dark:text-zinc-200 shadow-[1.5px_1.5px_0px_0px_#09090b] transition-all hover:-translate-y-0.5 ${meta.pillColor} cursor-default`}
                  >
                    {s.name}
                  </span>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};
