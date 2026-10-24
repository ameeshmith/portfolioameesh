import React, { useState } from 'react';
import { portfolioData } from '../data/portfolioData';
import {
  Mail,
  Copy,
  Check,
  Phone,
  ArrowUpRight,
  Sparkles,
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
    <section id="contact" className="py-8 sm:py-12 border-t border-zinc-200 dark:border-zinc-800">
      <div className="rounded-2xl bg-zinc-50 dark:bg-zinc-900/50 border border-zinc-200 dark:border-zinc-800 p-6 sm:p-8 space-y-6">
        <div className="space-y-2">
          <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-emerald-600 dark:text-emerald-400 font-semibold">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Open to Opportunities</span>
          </div>
          <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100">
            Let's build reliable AI systems together.
          </h2>
          <p className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed max-w-xl">
            Whether you have an opening for an AI Engineer, need an architecture review for agentic workflows, or want to discuss RAG pipeline optimizations, my inbox is open.
          </p>
        </div>

        {/* Email Action Bar */}
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
          <button
            onClick={handleCopyEmail}
            className={`group flex items-center justify-between gap-4 px-4 py-3 rounded-xl border text-xs sm:text-sm font-mono transition-all duration-200 cursor-pointer ${
              copied
                ? 'bg-emerald-50 dark:bg-emerald-950/70 border-emerald-400 dark:border-emerald-500/60 text-emerald-700 dark:text-emerald-300'
                : 'bg-white dark:bg-zinc-800 border-zinc-200 dark:border-zinc-700 text-zinc-800 dark:text-zinc-200 hover:border-zinc-400'
            }`}
          >
            <div className="flex items-center gap-2.5">
              <Mail className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
              <span className="font-semibold">{personal.email}</span>
            </div>
            <div className="flex items-center gap-1.5 text-xs text-zinc-500 dark:text-zinc-400">
              {copied ? (
                <>
                  <Check className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
                  <span className="text-emerald-600 dark:text-emerald-400 font-medium">Copied!</span>
                </>
              ) : (
                <>
                  <Copy className="w-3.5 h-3.5" />
                  <span>Copy</span>
                </>
              )}
            </div>
          </button>

          <a
            id="send-email-btn"
            href={`https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(personal.email)}&su=${encodeURIComponent('Discussion: AI & Software Engineering Opportunity')}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-zinc-900 dark:bg-zinc-100 hover:opacity-90 text-white dark:text-zinc-900 font-semibold text-xs tracking-wide uppercase transition-all shadow-sm cursor-pointer"
            title="Compose email in Gmail"
          >
            <span>Send Email</span>
            <ArrowUpRight className="w-4 h-4" />
          </a>
        </div>

        {/* Contact Links Strip */}
        <div className="pt-3 border-t border-zinc-200 dark:border-zinc-800/80 grid grid-cols-1 sm:grid-cols-3 gap-3 font-mono text-xs text-zinc-600 dark:text-zinc-400">
          <a
            href={personal.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 p-2.5 rounded-lg bg-white dark:bg-zinc-800/50 border border-zinc-200 dark:border-zinc-700 hover:text-zinc-950 dark:hover:text-white transition-colors"
          >
            <GithubIcon className="w-4 h-4 text-zinc-500" />
            <span>github.com/ameeshmith</span>
          </a>

          <a
            href={personal.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 p-2.5 rounded-lg bg-white dark:bg-zinc-800/50 border border-zinc-200 dark:border-zinc-700 hover:text-zinc-950 dark:hover:text-white transition-colors"
          >
            <LinkedinIcon className="w-4 h-4 text-zinc-500" />
            <span>linkedin.com/in/ameeshmith</span>
          </a>

          <a
            href={`tel:${personal.phone.replace(/\s+/g, '')}`}
            className="flex items-center gap-2 p-2.5 rounded-lg bg-white dark:bg-zinc-800/50 border border-zinc-200 dark:border-zinc-700 hover:text-zinc-950 dark:hover:text-white transition-colors"
          >
            <Phone className="w-4 h-4 text-zinc-500" />
            <span>{personal.phone}</span>
          </a>
        </div>
      </div>
    </section>
  );
};
