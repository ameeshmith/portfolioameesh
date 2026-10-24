import React, { useState } from 'react';
import { portfolioData } from '../data/portfolioData';
import {
  Mail,
  Copy,
  Check,
  Phone,
  ArrowUpRight,
  MessageSquare,
} from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './icons';

export const Contact: React.FC = () => {
  const { personal } = portfolioData;
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personal.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2400);
  };

  return (
    <section id="contact" className="py-10 space-y-6">
      {/* Section Header */}
      <div className="flex items-center gap-3">
        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-bold tracking-wider uppercase bg-amber-300 dark:bg-amber-900 text-amber-950 dark:text-amber-100 border-2 border-zinc-950 dark:border-zinc-700 shadow-[2px_2px_0px_0px_#09090b]">
          <MessageSquare className="w-3.5 h-3.5 text-amber-800 dark:text-amber-300" />
          <span>05 SAY HI</span>
        </span>
        <div className="h-[2px] flex-1 bg-zinc-300 dark:bg-zinc-800" />
      </div>

      {/* Main Contact Tactile Card */}
      <div className="tactile-card rounded-2xl p-6 sm:p-8 space-y-6">
        <div className="space-y-2">
          <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-md text-[11px] font-mono uppercase tracking-wider bg-emerald-100 dark:bg-emerald-950/70 border-2 border-emerald-500/50 text-emerald-800 dark:text-emerald-300 font-bold">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            <span>Open to Gen AI Engineering Roles</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-black tracking-tight text-zinc-950 dark:text-zinc-50 font-sans">
            Let&apos;s build intelligent systems together.
          </h2>
          <p className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-400 font-mono leading-relaxed max-w-xl">
            Whether you&apos;re hiring a Gen AI Engineer, want to discuss agentic workflows, or explore collaboration, my inbox is always open.
          </p>
        </div>

        {/* Email Action Bar */}
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
          <button
            onClick={handleCopyEmail}
            className={`tactile-btn flex-1 flex items-center justify-between gap-4 px-4 py-3 rounded-xl border-2 border-zinc-950 dark:border-zinc-700 text-xs sm:text-sm font-mono cursor-pointer transition-all ${
              copied
                ? 'bg-emerald-100 dark:bg-emerald-950 text-emerald-900 dark:text-emerald-200'
                : 'bg-zinc-100 dark:bg-zinc-800 text-zinc-900 dark:text-zinc-100'
            }`}
          >
            <div className="flex items-center gap-2.5">
              <Mail className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0" />
              <span className="font-bold truncate">{personal.email}</span>
            </div>
            <div className="flex items-center gap-1.5 text-xs text-zinc-600 dark:text-zinc-400 shrink-0">
              {copied ? (
                <>
                  <Check className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
                  <span className="text-emerald-600 dark:text-emerald-400 font-bold">Copied!</span>
                </>
              ) : (
                <>
                  <Copy className="w-4 h-4" />
                  <span>Copy</span>
                </>
              )}
            </div>
          </button>

          <a
            id="send-email-btn"
            href={`https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(personal.email)}&su=${encodeURIComponent('Discussion: Gen AI Engineering Opportunity')}`}
            target="_blank"
            rel="noopener noreferrer"
            className="tactile-btn inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-amber-400 dark:bg-amber-300 text-zinc-950 font-black text-xs font-mono uppercase tracking-wider border-2 border-zinc-950 shadow-[3px_3px_0px_0px_#09090b] cursor-pointer"
            title="Compose email in Gmail"
          >
            <span>Send Email</span>
            <ArrowUpRight className="w-4 h-4" />
          </a>
        </div>

        {/* Contact Links Strip */}
        <div className="pt-4 border-t-2 border-zinc-200 dark:border-zinc-800 grid grid-cols-1 sm:grid-cols-3 gap-3 font-mono text-xs">
          <a
            href={personal.github}
            target="_blank"
            rel="noopener noreferrer"
            className="tactile-btn flex items-center justify-between p-3 rounded-lg bg-zinc-100 dark:bg-zinc-800 border-2 border-zinc-950 dark:border-zinc-700 text-zinc-900 dark:text-zinc-100 hover:text-emerald-600 transition-colors"
          >
            <div className="flex items-center gap-2">
              <GithubIcon className="w-4 h-4" />
              <span className="font-bold">GitHub</span>
            </div>
            <ArrowUpRight className="w-3.5 h-3.5 text-zinc-500" />
          </a>

          <a
            href={personal.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="tactile-btn flex items-center justify-between p-3 rounded-lg bg-zinc-100 dark:bg-zinc-800 border-2 border-zinc-950 dark:border-zinc-700 text-zinc-900 dark:text-zinc-100 hover:text-sky-600 transition-colors"
          >
            <div className="flex items-center gap-2">
              <LinkedinIcon className="w-4 h-4" />
              <span className="font-bold">LinkedIn</span>
            </div>
            <ArrowUpRight className="w-3.5 h-3.5 text-zinc-500" />
          </a>

          <a
            href={`tel:${personal.phone.replace(/\s+/g, '')}`}
            className="tactile-btn flex items-center justify-between p-3 rounded-lg bg-zinc-100 dark:bg-zinc-800 border-2 border-zinc-950 dark:border-zinc-700 text-zinc-900 dark:text-zinc-100 hover:text-emerald-600 transition-colors"
          >
            <div className="flex items-center gap-2">
              <Phone className="w-4 h-4" />
              <span className="font-bold">{personal.phone}</span>
            </div>
            <ArrowUpRight className="w-3.5 h-3.5 text-zinc-500" />
          </a>
        </div>
      </div>
    </section>
  );
};
