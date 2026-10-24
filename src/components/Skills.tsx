import React from 'react';
import { portfolioData } from '../data/portfolioData';
import { Bot, Code2, Database, Wrench } from 'lucide-react';

export const Skills: React.FC = () => {
  const { skills } = portfolioData;

  const getCategoryIcon = (category: string) => {
    if (category.includes('AI') || category.includes('Agents')) {
      return <Bot className="w-4 h-4 text-emerald-400" />;
    }
    if (category.includes('Languages') || category.includes('Frameworks')) {
      return <Code2 className="w-4 h-4 text-cyan-400" />;
    }
    if (category.includes('Data')) {
      return <Database className="w-4 h-4 text-indigo-400" />;
    }
    return <Wrench className="w-4 h-4 text-amber-400" />;
  };

  return (
    <section id="stack" className="py-16 sm:py-20 border-t border-zinc-800/60">
      <div className="space-y-10">
        {/* Section Header */}
        <div className="space-y-2">
          <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-emerald-400">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
            <span>Technical Arsenal</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-zinc-100 font-sans">
            Skills & Capabilities
          </h2>
          <p className="text-sm text-zinc-400 max-w-2xl">
            A battle-tested stack honed for designing autonomous agents, low-latency search systems, and robust data workflows.
          </p>
        </div>

        {/* Categorized Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {skills.map((cat) => (
            <div
              key={cat.category}
              className="rounded-xl bg-zinc-900/30 border border-zinc-800/80 p-5 sm:p-6 space-y-4 hover:border-zinc-700/80 transition-all duration-200"
            >
              <div className="flex items-center gap-2.5 pb-2 border-b border-zinc-800/50">
                <div className="p-1.5 rounded-md bg-zinc-900 border border-zinc-800">
                  {getCategoryIcon(cat.category)}
                </div>
                <div>
                  <h3 className="text-base font-semibold text-zinc-100 font-sans">
                    {cat.category}
                  </h3>
                  <p className="text-xs text-zinc-400 font-mono">
                    {cat.description}
                  </p>
                </div>
              </div>

              {/* Skills badges */}
              <div className="flex flex-wrap gap-2 pt-1">
                {cat.skills.map((s) => (
                  <span
                    key={s.name}
                    className="inline-flex items-center px-2.5 py-1 rounded-md text-xs font-mono bg-zinc-950/70 border border-zinc-800 text-zinc-300 hover:text-white hover:border-zinc-600 transition-colors"
                  >
                    {s.name}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
