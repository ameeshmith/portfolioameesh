import React, { useState } from 'react';
import { portfolioData } from '../data/portfolioData';
import { Check, ArrowUpRight } from 'lucide-react';

interface HeroProps {
  onOpenResume?: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenResume }) => {
  const { personal } = portfolioData;
  const [tracked, setTracked] = useState(false);

  return (
    <section className="pt-6 pb-12 sm:pt-10 sm:pb-16">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
        {/* Left: The Tactile Shipping Manifest Card (inspired by kanishv.in) */}
        <div className="lg:col-span-7">
          <div className="rounded-2xl border-2 border-zinc-950 dark:border-zinc-700 bg-[#fdfcfa] dark:bg-zinc-900 shadow-[6px_6px_0px_0px_#09090b] dark:shadow-[6px_6px_0px_0px_#000] overflow-hidden transition-all">
            {/* Top black label bar */}
            <div className="bg-zinc-950 text-white px-4 py-2 font-mono text-xs font-bold tracking-wider uppercase flex items-center justify-between">
              <span>Handle with care</span>
              <span className="text-emerald-400 flex items-center gap-1.5 text-[11px]">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span>Ready for deployment</span>
              </span>
            </div>

            {/* Sub-header row */}
            <div className="grid grid-cols-2 border-b-2 border-zinc-950 dark:border-zinc-800 text-xs font-mono">
              <div className="p-3 border-r-2 border-zinc-950 dark:border-zinc-800 space-y-0.5">
                <div className="text-[10px] text-zinc-500 uppercase tracking-wider">Compatible with</div>
                <div className="font-bold text-zinc-900 dark:text-zinc-100">
                  LLMs, agents, MCP & vector DBs
                </div>
              </div>
              <div className="p-3 space-y-0.5">
                <div className="text-[10px] text-zinc-500 uppercase tracking-wider">Experience</div>
                <div className="font-bold text-zinc-900 dark:text-zinc-100">
                  Production AI Systems
                </div>
              </div>
            </div>

            {/* Contents: Name & Title */}
            <div className="p-4 sm:p-5 border-b-2 border-zinc-950 dark:border-zinc-800 space-y-1">
              <div className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest">
                Contents
              </div>
              <h1 className="text-3xl sm:text-4xl font-black tracking-tight text-zinc-950 dark:text-white uppercase font-sans">
                {personal.name}
              </h1>
              <p className="text-sm sm:text-base font-bold text-zinc-700 dark:text-zinc-300 font-mono">
                {personal.title} · {personal.location}
              </p>
            </div>

            {/* Includes Checklist with Colorful Badges */}
            <div className="p-4 sm:p-5 space-y-3 font-sans text-xs sm:text-sm">
              <div className="text-[10px] font-mono text-zinc-500 uppercase tracking-wider">
                Includes
              </div>

              {/* Trait 1: Curious */}
              <div className="flex items-center gap-3">
                <div className="w-5 h-5 rounded-md border-2 border-zinc-950 dark:border-zinc-700 flex items-center justify-center shrink-0 bg-white dark:bg-zinc-800 shadow-[1px_1px_0px_0px_#000]">
                  <Check className="w-3.5 h-3.5 text-zinc-950 dark:text-white stroke-[3]" />
                </div>
                <span className="px-2.5 py-0.5 rounded-lg border-2 border-zinc-950 bg-pink-300 text-zinc-950 font-black text-xs uppercase tracking-wide shadow-[2px_2px_0px_0px_#000] shrink-0">
                  CURIOUS
                </span>
                <span className="text-zinc-700 dark:text-zinc-300 text-xs sm:text-sm">
                  Asks questions and digs into code until the system makes sense.
                </span>
              </div>

              {/* Trait 2: Agentic */}
              <div className="flex items-center gap-3">
                <div className="w-5 h-5 rounded-md border-2 border-zinc-950 dark:border-zinc-700 flex items-center justify-center shrink-0 bg-white dark:bg-zinc-800 shadow-[1px_1px_0px_0px_#000]">
                  <Check className="w-3.5 h-3.5 text-zinc-950 dark:text-white stroke-[3]" />
                </div>
                <span className="px-2.5 py-0.5 rounded-lg border-2 border-zinc-950 bg-amber-300 text-zinc-950 font-black text-xs uppercase tracking-wide shadow-[2px_2px_0px_0px_#000] shrink-0">
                  AGENTIC
                </span>
                <span className="text-zinc-700 dark:text-zinc-300 text-xs sm:text-sm">
                  Builds hands-on with LangGraph, tool-calling agents, and structured workflows.
                </span>
              </div>

              {/* Trait 3: Fast */}
              <div className="flex items-center gap-3">
                <div className="w-5 h-5 rounded-md border-2 border-zinc-950 dark:border-zinc-700 flex items-center justify-center shrink-0 bg-white dark:bg-zinc-800 shadow-[1px_1px_0px_0px_#000]">
                  <Check className="w-3.5 h-3.5 text-zinc-950 dark:text-white stroke-[3]" />
                </div>
                <span className="px-2.5 py-0.5 rounded-lg border-2 border-zinc-950 bg-sky-300 text-zinc-950 font-black text-xs uppercase tracking-wide shadow-[2px_2px_0px_0px_#000] shrink-0">
                  FAST
                </span>
                <span className="text-zinc-700 dark:text-zinc-300 text-xs sm:text-sm">
                  Quick learner who turns project ideas into working code.
                </span>
              </div>

              {/* Trait 4: Owns It */}
              <div className="flex items-center gap-3">
                <div className="w-5 h-5 rounded-md border-2 border-zinc-950 dark:border-zinc-700 flex items-center justify-center shrink-0 bg-white dark:bg-zinc-800 shadow-[1px_1px_0px_0px_#000]">
                  <Check className="w-3.5 h-3.5 text-zinc-950 dark:text-white stroke-[3]" />
                </div>
                <span className="px-2.5 py-0.5 rounded-lg border-2 border-zinc-950 bg-emerald-300 text-zinc-950 font-black text-xs uppercase tracking-wide shadow-[2px_2px_0px_0px_#000] shrink-0">
                  OWNS IT
                </span>
                <span className="text-zinc-700 dark:text-zinc-300 text-xs sm:text-sm">
                  Takes end-to-end responsibility from frontend UI to backend logic.
                </span>
              </div>
            </div>

            {/* Bottom Barcode Strip */}
            <div className="p-3 sm:p-4 bg-zinc-50 dark:bg-zinc-950 border-t-2 border-zinc-950 dark:border-zinc-800 flex flex-col items-center justify-center gap-1.5 font-mono text-[11px]">
              {/* Barcode graphic lines */}
              <div className="w-full flex items-center justify-center gap-[3px] h-9 px-2 overflow-hidden opacity-90 select-none">
                {[
                  3, 1, 2, 4, 1, 3, 2, 1, 4, 2, 1, 3, 1, 4, 2, 3, 1, 2, 1, 4,
                  2, 3, 1, 2, 4, 1, 3, 2, 1, 4, 2, 1, 3, 2, 4, 1, 2, 3, 1, 4,
                  2, 1, 3, 2, 1, 4, 2, 3, 1, 2, 4, 1, 3, 2, 1, 4, 2, 1, 3, 2
                ].map((w, idx) => (
                  <div
                    key={idx}
                    className="h-full bg-zinc-900 dark:bg-zinc-300"
                    style={{ width: `${w * 1.5}px` }}
                  />
                ))}
              </div>

              <div className="flex items-center gap-2 text-zinc-600 dark:text-zinc-400">
                <span>ameeshmith.github.io</span>
                <button
                  onClick={() => setTracked(true)}
                  className="px-2 py-0.5 rounded-md border border-zinc-950 dark:border-zinc-700 bg-amber-300 text-zinc-950 font-bold text-[10px] uppercase shadow-[1px_1px_0px_0px_#000] cursor-pointer hover:translate-x-0.5 transition-transform"
                >
                  {tracked ? 'verified ✓' : 'tap to track'}
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Right: Pitch, Wins Pills, and Action Buttons */}
        <div className="lg:col-span-5 space-y-6 pt-2">
          {/* Punchy Mission Statement */}
          <p className="text-lg sm:text-2xl font-bold leading-snug text-zinc-900 dark:text-zinc-100 font-sans">
            AI & Software Engineer building autonomous agents, security guardrails, and production RAG pipelines.
          </p>

          {/* Highlight Wins Pills (matching Kanish's 1st / 2nd pill cards) */}
          <div className="space-y-3">
            {/* Win 1: Indian Patent */}
            <div className="p-3.5 rounded-2xl border-2 border-zinc-950 bg-amber-300 dark:bg-amber-400 text-zinc-950 shadow-[4px_4px_0px_0px_#09090b] flex items-center gap-3">
              <span className="text-xl sm:text-2xl font-black shrink-0 px-2.5 py-1 rounded-xl bg-white border-2 border-zinc-950 shadow-[2px_2px_0px_0px_#000]">
                1st
              </span>
              <div className="text-xs sm:text-sm font-bold leading-tight">
                Published Indian Patent
                <div className="text-[11px] font-normal text-zinc-800">
                  RAG-based automated news verification & semantic retrieval
                </div>
              </div>
            </div>

            {/* Win 2: AI Agent Security Gateway */}
            <div className="p-3.5 rounded-2xl border-2 border-zinc-950 bg-emerald-200 dark:bg-emerald-300 text-zinc-950 shadow-[4px_4px_0px_0px_#09090b] flex items-center gap-3">
              <span className="text-base sm:text-lg font-black shrink-0 px-2 py-1 rounded-xl bg-white border-2 border-zinc-950 shadow-[2px_2px_0px_0px_#000] font-mono">
                &lt;3.5ms
              </span>
              <div className="text-xs sm:text-sm font-bold leading-tight">
                AI Agent Security Gateway
                <div className="text-[11px] font-normal text-zinc-800">
                  LangGraph human-in-the-loop guardrail & prompt injection defense
                </div>
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-wrap items-center gap-3 pt-2">
            <a
              href="#projects"
              className="inline-flex items-center justify-center px-5 py-3 rounded-2xl border-2 border-zinc-950 bg-amber-300 text-zinc-950 font-bold text-sm shadow-[4px_4px_0px_0px_#09090b] hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-[2px_2px_0px_0px_#09090b] active:translate-x-1 active:translate-y-1 active:shadow-none transition-all cursor-pointer"
            >
              <span>See my work</span>
            </a>

            <a
              href="#contact"
              className="inline-flex items-center justify-center px-5 py-3 rounded-2xl border-2 border-zinc-950 bg-white text-zinc-950 font-bold text-sm shadow-[4px_4px_0px_0px_#09090b] hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-[2px_2px_0px_0px_#09090b] active:translate-x-1 active:translate-y-1 active:shadow-none transition-all cursor-pointer"
            >
              <span>Let&apos;s talk</span>
            </a>
          </div>

          {/* Quick External Links Row */}
          <div className="flex items-center gap-4 text-xs font-mono font-bold text-zinc-700 dark:text-zinc-300 pt-1">
            <a
              href={personal.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline flex items-center gap-1"
            >
              <span>LinkedIn</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
            <span>•</span>
            <a
              href={personal.github}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline flex items-center gap-1"
            >
              <span>GitHub</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
            {onOpenResume && (
              <>
                <span>•</span>
                <button
                  onClick={onOpenResume}
                  className="hover:underline flex items-center gap-1 cursor-pointer font-bold"
                >
                  <span>Resume</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </button>
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
