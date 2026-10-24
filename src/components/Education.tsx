import React from 'react';
import { portfolioData } from '../data/portfolioData';
import { GraduationCap, Calendar } from 'lucide-react';

export const Education: React.FC = () => {
  const { education } = portfolioData;

  return (
    <section id="education" className="py-16 sm:py-20 border-t border-zinc-800/60">
      <div className="space-y-8">
        {/* Section Header */}
        <div className="space-y-2">
          <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-emerald-400">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
            <span>Academic Background</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-zinc-100 font-sans">
            Education
          </h2>
        </div>

        {/* Education Card */}
        <div className="space-y-4">
          {education.map((edu, idx) => (
            <div
              key={idx}
              className="rounded-xl bg-zinc-900/30 border border-zinc-800/80 p-6 space-y-4 hover:border-zinc-700/80 transition-all duration-200"
            >
              <div className="flex flex-wrap items-center justify-between gap-2">
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-zinc-900 border border-zinc-800 text-emerald-400">
                    <GraduationCap className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-zinc-100">{edu.institution}</h3>
                    <p className="text-sm text-emerald-400/90 font-mono">{edu.degree}</p>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <span className="px-2.5 py-1 rounded-md bg-emerald-950/40 border border-emerald-800/50 text-emerald-300 font-mono text-xs font-semibold">
                    {edu.gpa}
                  </span>
                  <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md bg-zinc-900 border border-zinc-800 text-zinc-400 font-mono text-xs">
                    <Calendar className="w-3 h-3 text-zinc-500" />
                    <span>{edu.period}</span>
                  </span>
                </div>
              </div>

              {edu.highlights && (
                <ul className="space-y-1.5 text-xs text-zinc-400 font-sans pt-1">
                  {edu.highlights.map((h, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="text-emerald-400 mt-0.5">•</span>
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
