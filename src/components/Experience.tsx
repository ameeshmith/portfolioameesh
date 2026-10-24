import React from 'react';
import { portfolioData } from '../data/portfolioData';
import { Calendar, MapPin, Check } from 'lucide-react';

export const Experience: React.FC = () => {
  const { experience } = portfolioData;

  return (
    <section id="experience" className="py-8 border-t border-zinc-200 dark:border-zinc-800">
      <div className="space-y-6">
        <h2 className="text-base sm:text-lg font-bold tracking-tight text-zinc-900 dark:text-zinc-100">
          Work experience
        </h2>

        {/* Minimalist Timeline */}
        <div className="relative pl-6 sm:pl-8 border-l border-zinc-200 dark:border-zinc-800 space-y-10">
          {experience.map((item) => (
            <div key={item.id} className="relative group">
              {/* Timeline Indicator Dot */}
              <div className="absolute -left-[31px] sm:-left-[39px] top-1.5 w-3.5 h-3.5 rounded-full bg-white dark:bg-zinc-950 border-2 border-emerald-500 shadow-sm" />

              <div className="space-y-3">
                {/* Header: Role, Company & Meta */}
                <div className="space-y-1">
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <h3 className="text-base sm:text-lg font-bold text-zinc-900 dark:text-zinc-100 flex items-center gap-2">
                      <span>{item.role}</span>
                      <span className="text-emerald-600 dark:text-emerald-400 font-mono text-sm">@ {item.company}</span>
                    </h3>

                    {/* Period badge */}
                    <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-zinc-100 dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 text-zinc-600 dark:text-zinc-400 text-xs font-mono">
                      <Calendar className="w-3 h-3 text-zinc-400" />
                      <span>{item.period}</span>
                    </div>
                  </div>

                  {/* Location & Type */}
                  <div className="flex items-center gap-2 text-xs font-mono text-zinc-500 dark:text-zinc-400">
                    <span className="inline-flex items-center gap-1">
                      <MapPin className="w-3 h-3" />
                      <span>{item.location}</span>
                    </span>
                    <span>•</span>
                    <span>{item.type}</span>
                  </div>
                </div>

                {/* Bullet Points */}
                <ul className="space-y-2 pt-1 text-xs sm:text-sm text-zinc-600 dark:text-zinc-300 leading-relaxed">
                  {item.highlights.map((bullet, bIdx) => (
                    <li key={bIdx} className="flex items-start gap-2.5">
                      <div className="w-4 h-4 rounded-full bg-emerald-50 dark:bg-emerald-500/10 border border-emerald-200 dark:border-emerald-500/30 flex items-center justify-center shrink-0 mt-0.5">
                        <Check className="w-2.5 h-2.5 text-emerald-600 dark:text-emerald-400" />
                      </div>
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>

                {/* Skills/Tags */}
                <div className="flex flex-wrap items-center gap-1.5 pt-1">
                  {item.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-2 py-0.5 rounded text-[11px] font-mono bg-zinc-100 dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 text-zinc-700 dark:text-zinc-300"
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
