import React from 'react';
import { portfolioData } from '../data/portfolioData';
import { Calendar, MapPin, Check } from 'lucide-react';

export const Experience: React.FC = () => {
  const { experience } = portfolioData;

  return (
    <section id="experience" className="py-12 sm:py-16 border-t-2 border-zinc-950 dark:border-zinc-800">
      <div className="space-y-8">
        {/* Numbered Section Pill */}
        <div className="inline-flex items-center gap-2">
          <span className="px-3.5 py-1 rounded-full border-2 border-zinc-950 bg-emerald-300 text-zinc-950 font-black text-xs font-mono uppercase tracking-wider shadow-[3px_3px_0px_0px_#09090b]">
            03 WHERE I WORK
          </span>
        </div>

        {/* Experience Cards */}
        <div className="space-y-6">
          {experience.map((item) => (
            <div
              key={item.id}
              className="rounded-2xl border-2 border-zinc-950 dark:border-zinc-700 bg-white dark:bg-zinc-900 p-6 sm:p-7 shadow-[5px_5px_0px_0px_#09090b] dark:shadow-[5px_5px_0px_0px_#000] space-y-4"
            >
              {/* Header */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b-2 border-zinc-950 dark:border-zinc-800 pb-4">
                <div>
                  <h3 className="text-xl sm:text-2xl font-black text-zinc-950 dark:text-white flex items-center gap-2">
                    <span>{item.company}</span>
                    <span className="text-xs font-mono px-2.5 py-0.5 rounded-full border border-zinc-950 bg-amber-200 text-zinc-950 shadow-[1px_1px_0px_0px_#000]">
                      {item.type}
                    </span>
                  </h3>
                  <p className="text-sm font-bold text-emerald-600 dark:text-emerald-400 font-mono pt-0.5">
                    {item.role}
                  </p>
                </div>

                <div className="flex flex-wrap items-center gap-2 text-xs font-mono">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-xl border border-zinc-950 bg-zinc-100 dark:bg-zinc-800 text-zinc-800 dark:text-zinc-200 shadow-[1px_1px_0px_0px_#000]">
                    <Calendar className="w-3.5 h-3.5" />
                    <span>{item.period}</span>
                  </span>
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-xl border border-zinc-950 bg-zinc-100 dark:bg-zinc-800 text-zinc-800 dark:text-zinc-200 shadow-[1px_1px_0px_0px_#000]">
                    <MapPin className="w-3.5 h-3.5" />
                    <span>{item.location}</span>
                  </span>
                </div>
              </div>

              {/* Bullet Points */}
              <ul className="space-y-2.5 text-xs sm:text-sm text-zinc-700 dark:text-zinc-300 font-sans leading-relaxed">
                {item.highlights.map((bullet, bIdx) => (
                  <li key={bIdx} className="flex items-start gap-2.5">
                    <div className="w-4 h-4 rounded-md border border-zinc-950 bg-emerald-300 flex items-center justify-center shrink-0 mt-0.5 shadow-[1px_1px_0px_0px_#000]">
                      <Check className="w-3 h-3 text-zinc-950 stroke-[3]" />
                    </div>
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>

              {/* Tech Badges */}
              <div className="pt-2 flex flex-wrap items-center gap-1.5">
                {item.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-2.5 py-0.5 rounded-lg text-[11px] font-mono bg-zinc-100 dark:bg-zinc-800 border border-zinc-300 dark:border-zinc-700 text-zinc-800 dark:text-zinc-200"
                  >
                    {skill}
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
