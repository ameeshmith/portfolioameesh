import React from 'react';
import { portfolioData } from '../data/portfolioData';
import { Calendar, MapPin, Check } from 'lucide-react';

export const Experience: React.FC = () => {
  const { experience } = portfolioData;

  return (
    <section id="experience" className="py-16 sm:py-20 border-t border-zinc-800/60">
      <div className="space-y-10">
        {/* Section Header */}
        <div className="space-y-2">
          <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-emerald-400">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
            <span>Career Path</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-zinc-100 font-sans">
            Professional Experience
          </h2>
          <p className="text-sm text-zinc-400 max-w-2xl">
            Hands-on engineering experience designing agentic frameworks, multi-tenant vector retrieval, evaluation suites, and enterprise infrastructure.
          </p>
        </div>

        {/* Minimalist Timeline */}
        <div className="relative pl-6 sm:pl-8 border-l border-zinc-800/80 space-y-12">
          {experience.map((item) => (
            <div key={item.id} className="relative group">
              {/* Timeline Indicator Dot */}
              <div className="absolute -left-[31px] sm:-left-[39px] top-1.5 w-3.5 h-3.5 rounded-full bg-zinc-950 border-2 border-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.5)] group-hover:scale-125 transition-transform" />

              <div className="space-y-4">
                {/* Header: Role, Company & Meta */}
                <div className="space-y-1.5">
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <h3 className="text-lg sm:text-xl font-bold text-zinc-100 flex items-center gap-2">
                      <span>{item.role}</span>
                      <span className="text-emerald-400 font-mono text-sm">@ {item.company}</span>
                    </h3>

                    {/* Period badge */}
                    <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-zinc-900 border border-zinc-800 text-zinc-400 text-xs font-mono">
                      <Calendar className="w-3 h-3 text-zinc-500" />
                      <span>{item.period}</span>
                    </div>
                  </div>

                  {/* Location & Type */}
                  <div className="flex items-center gap-3 text-xs font-mono text-zinc-400">
                    <span className="inline-flex items-center gap-1">
                      <MapPin className="w-3 h-3 text-zinc-500" />
                      <span>{item.location}</span>
                    </span>
                    <span className="text-zinc-600">•</span>
                    <span className="text-zinc-400">{item.type}</span>
                  </div>
                </div>

                {/* Summary if present */}
                {item.summary && (
                  <p className="text-sm text-zinc-300 italic border-l-2 border-zinc-700/60 pl-3">
                    {item.summary}
                  </p>
                )}

                {/* Bullet Points */}
                <ul className="space-y-2.5 pt-1 text-sm text-zinc-300 leading-relaxed">
                  {item.highlights.map((bullet, bIdx) => (
                    <li key={bIdx} className="flex items-start gap-2.5">
                      <div className="w-4 h-4 rounded-full bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center shrink-0 mt-0.5">
                        <Check className="w-2.5 h-2.5 text-emerald-400" />
                      </div>
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>

                {/* Skills/Tags */}
                <div className="flex flex-wrap items-center gap-1.5 pt-2">
                  {item.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-2 py-0.5 rounded text-[11px] font-mono bg-zinc-900 border border-zinc-800/80 text-zinc-300"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
