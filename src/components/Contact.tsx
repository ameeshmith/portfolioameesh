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
    <section id="contact" className="py-16 sm:py-24 border-t border-zinc-800/60 relative">
      <div className="rounded-2xl bg-gradient-to-b from-zinc-900/60 to-zinc-950/80 border border-zinc-800 p-8 sm:p-10 space-y-8 relative overflow-hidden">
        {/* Glow corner accent */}
        <div className="absolute top-0 right-0 w-80 h-80 bg-emerald-500/10 blur-[100px] pointer-events-none rounded-full" />

        <div className="space-y-3 max-w-xl">
          <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-emerald-400">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Open to Opportunities</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-bold tracking-tight text-zinc-100 font-sans">
            Let's build reliable AI systems together.
          </h2>
          <p className="text-sm sm:text-base text-zinc-400 leading-relaxed">
            Whether you have an opening for an AI Engineer, need an architecture review for agentic workflows, or want to discuss RAG pipeline optimizations, my inbox is open.
          </p>
        </div>

        {/* Email Copy Card with Toast */}
        <div className="space-y-4">
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
            <button
              onClick={handleCopyEmail}
              className={`group flex items-center justify-between gap-4 px-5 py-3.5 rounded-xl border text-sm font-mono transition-all duration-200 ${
                copied
                  ? 'bg-emerald-950/70 border-emerald-500/60 text-emerald-300 shadow-[0_0_20px_rgba(16,185,129,0.2)]'
                  : 'bg-zinc-900 hover:bg-zinc-850 border-zinc-700/80 text-zinc-200 hover:border-zinc-500'
              }`}
            >
              <div className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-emerald-400" />
                <span className="font-semibold">{personal.email}</span>
              </div>
              <div className="flex items-center gap-1.5 text-xs text-zinc-400 group-hover:text-zinc-200">
                {copied ? (
                  <>
                    <Check className="w-4 h-4 text-emerald-400" />
                    <span className="text-emerald-400 font-medium">Copied!</span>
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
              className="inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl bg-zinc-100 hover:bg-white text-zinc-950 font-semibold text-xs tracking-wide uppercase transition-colors shadow-sm cursor-pointer"
              title="Compose email in Gmail"
            >
              <span>Send Email</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>

          {/* Toast Alert Notice */}
          {copied && (
            <div className="inline-flex items-center gap-2 text-xs font-mono text-emerald-400 animate-in fade-in slide-in-from-top-1 duration-200">
              <Check className="w-3.5 h-3.5" />
              <span>Email address copied to clipboard. Ready to paste!</span>
            </div>
          )}
        </div>

        {/* Contact Links Strip */}
        <div className="pt-4 border-t border-zinc-800/60 grid grid-cols-1 sm:grid-cols-3 gap-4 font-mono text-xs text-zinc-400">
          <a
            href={personal.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 p-3 rounded-lg bg-zinc-900/50 border border-zinc-800 hover:border-zinc-700 hover:text-white transition-colors"
          >
            <GithubIcon className="w-4 h-4 text-zinc-500" />
            <span>github.com/ameeshmith</span>
          </a>

          <a
            href={personal.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 p-3 rounded-lg bg-zinc-900/50 border border-zinc-800 hover:border-zinc-700 hover:text-white transition-colors"
          >
            <LinkedinIcon className="w-4 h-4 text-zinc-500" />
            <span>linkedin.com/in/ameeshmith</span>
          </a>

          <a
            href={`tel:${personal.phone.replace(/\s+/g, '')}`}
            className="flex items-center gap-2 p-3 rounded-lg bg-zinc-900/50 border border-zinc-800 hover:border-zinc-700 hover:text-white transition-colors"
          >
            <Phone className="w-4 h-4 text-zinc-500" />
            <span>{personal.phone}</span>
          </a>
        </div>
      </div>
    </section>
  );
};
