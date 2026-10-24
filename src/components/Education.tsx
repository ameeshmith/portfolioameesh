import React from 'react';
import { portfolioData } from '../data/portfolioData';
import { GraduationCap, Calendar } from 'lucide-react';

export const Education: React.FC = () => {
  const { education } = portfolioData;

  return (
    <section id="education" className="py-8 border-t border-zinc-200 dark:border-zinc-800">
      <div className="space-y-6">
        <h2 className="text-base sm:text-lg font-bold tracking-tight text-zinc-900 dark:text-zinc-100">
          Education
        </h2>

        {/* Education Card */}
        <div className="space-y-4">
          {education.map((edu, idx) => (
            <div
              key={idx}
              className="rounded-xl bg-zinc-50 dark:bg-zinc-900/40 border border-zinc-200 dark:border-zinc-800 p-5 space-y-3"
            >
              <div className="flex flex-wrap items-center justify-between gap-2">
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-zinc-100 dark:bg-zinc-800 text-emerald-600 dark:text-emerald-400">
                    <GraduationCap className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-zinc-900 dark:text-zinc-100">{edu.institution}</h3>
                    <p className="text-xs sm:text-sm text-emerald-600 dark:text-emerald-400 font-mono">{edu.degree}</p>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <span className="px-2.5 py-0.5 rounded-md bg-emerald-100 dark:bg-emerald-950/40 border border-emerald-300 dark:border-emerald-800/50 text-emerald-800 dark:text-emerald-300 font-mono text-xs font-semibold">
                    {edu.gpa}
                  </span>
                  <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-md bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-400 font-mono text-xs">
                    <Calendar className="w-3 h-3" />
                    <span>{edu.period}</span>
                  </span>
                </div>
              </div>

              {edu.highlights && (
                <ul className="space-y-1 text-xs text-zinc-600 dark:text-zinc-400 pt-1">
                  {edu.highlights.map((h, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="text-emerald-500 mt-0.5">•</span>
                      <span>{h}</span>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
