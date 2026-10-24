import React from 'react';
import { portfolioData } from '../data/portfolioData';
import { Award, GraduationCap, MapPin } from 'lucide-react';

export const About: React.FC = () => {
  const { personal } = portfolioData;

  return (
    <section id="about" className="py-12 sm:py-16 border-t-2 border-zinc-950 dark:border-zinc-800">
      <div className="space-y-8">
        {/* Numbered Section Pill */}
        <div className="inline-flex items-center gap-2">
          <span className="px-3.5 py-1 rounded-full border-2 border-zinc-950 bg-amber-300 text-zinc-950 font-black text-xs font-mono uppercase tracking-wider shadow-[3px_3px_0px_0px_#09090b]">
            01 WHO I AM
          </span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Left: Bio & Highlights */}
          <div className="lg:col-span-7 space-y-6">
            <h2 className="text-3xl sm:text-4xl font-black tracking-tight text-zinc-950 dark:text-white leading-tight">
              Recent CS Graduate.{' '}
              <span className="text-amber-500 dark:text-amber-400 block sm:inline">
                Builder of practical AI.
              </span>
            </h2>

            <div className="space-y-4 text-sm sm:text-base text-zinc-700 dark:text-zinc-300 leading-relaxed font-sans">
              <p>
                Hi, I&apos;m Ameesh, a Computer Science graduate passionate about AI and software engineering. Throughout college and internships, I&apos;ve focused on building real, hands-on projects—from autonomous agents with LangGraph to RAG pipelines and data workflows.
              </p>
              <p>
                I love getting my hands dirty with the full stack: exploring how models behave, optimizing vector retrieval, writing clean APIs, and turning concepts into working software that actually solves problems.
              </p>
            </div>

            {/* Tactile Highlight Badges */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-2">
              {/* Patent Card */}
              <div className="p-4 rounded-2xl border-2 border-zinc-950 bg-sky-200 dark:bg-sky-950/60 text-zinc-950 dark:text-sky-200 shadow-[4px_4px_0px_0px_#09090b] dark:shadow-[4px_4px_0px_0px_#000] space-y-1">
                <div className="flex items-center gap-1.5 text-xs font-mono font-bold uppercase text-sky-800 dark:text-sky-300">
                  <Award className="w-4 h-4" />
                  <span>Indian Patent</span>
                </div>
                <div className="font-bold text-sm leading-snug">
                  Published Inventor
                </div>
                <div className="text-xs text-zinc-700 dark:text-zinc-400">
                  RAG-based news credibility classification & verification
                </div>
              </div>

              {/* Education Card */}
              <div className="p-4 rounded-2xl border-2 border-zinc-950 bg-amber-100 dark:bg-amber-950/40 text-zinc-950 dark:text-amber-200 shadow-[4px_4px_0px_0px_#09090b] dark:shadow-[4px_4px_0px_0px_#000] space-y-1">
                <div className="flex items-center gap-1.5 text-xs font-mono font-bold uppercase text-amber-800 dark:text-amber-300">
                  <GraduationCap className="w-4 h-4" />
                  <span>Nitte University</span>
                </div>
                <div className="font-bold text-sm leading-snug">
                  B.Tech in Computer Science
                </div>
                <div className="text-xs text-zinc-700 dark:text-zinc-400 font-mono">
                  CGPA: 8.19 / 10 · 2022 – 2026
                </div>
              </div>
            </div>
          </div>

          {/* Right: Tactile Photo Frame */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative group max-w-xs w-full">
              {/* Background solid drop shadow frame */}
              <div className="rounded-2xl border-2 border-zinc-950 bg-white dark:bg-zinc-900 p-3 shadow-[6px_6px_0px_0px_#09090b] dark:shadow-[6px_6px_0px_0px_#000] rotate-1 group-hover:rotate-0 transition-transform">
                <div className="overflow-hidden rounded-xl border-2 border-zinc-950 aspect-[4/5] bg-zinc-100 relative">
                  <img
                    src="/avatar.png"
                    alt={personal.name}
                    className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-2 right-2 px-2 py-0.5 rounded-full border border-zinc-950 bg-emerald-400 text-zinc-950 text-[10px] font-mono font-bold uppercase shadow-[1px_1px_0px_0px_#000]">
                    Available
                  </div>
                </div>

                <div className="pt-3 px-1 flex items-center justify-between text-xs font-mono">
                  <span className="font-bold text-zinc-900 dark:text-zinc-100">
                    Ameesh Mithanthaya
                  </span>
                  <span className="text-zinc-500 flex items-center gap-1">
                    <MapPin className="w-3 h-3" />
                    <span>Udupi, IN</span>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
