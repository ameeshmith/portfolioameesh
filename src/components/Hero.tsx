import React, { useState } from 'react';
import { portfolioData } from '../data/portfolioData';
import {
  MapPin,
  Mail,
  Check,
  Copy,
  Terminal,
  ArrowDown,
  Sparkles,
  FileText,
} from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './icons';

interface HeroProps {
  onOpenResume?: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenResume }) => {
  const { personal } = portfolioData;
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personal.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2200);
  };

  return (
    <section id="about" className="pt-28 pb-16 sm:pt-36 sm:pb-20 relative">
      {/* Background ambient glow */}
      <div className="absolute top-12 left-1/2 -translate-x-1/2 w-96 h-96 bg-emerald-500/10 blur-[120px] rounded-full pointer-events-none -z-10" />

      <div className="space-y-6">
        {/* Availability Badge & Location Pill */}
        <div className="flex flex-wrap items-center gap-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-950/40 border border-emerald-800/40 text-emerald-300 text-xs font-medium tracking-tight shadow-sm">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            <span>{personal.statusBadge}</span>
          </div>

          <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-zinc-900/70 border border-zinc-800 text-zinc-400 text-xs font-mono">
            <MapPin className="w-3 h-3 text-zinc-500" />
            <span>{personal.location}</span>
          </div>
        </div>

        {/* Name and Title */}
        <div className="space-y-2">
          <h1 className="text-3xl sm:text-5xl font-bold tracking-tight text-zinc-100 font-sans">
            {personal.name}
          </h1>
          <p className="text-lg sm:text-xl font-medium text-emerald-400/90 font-mono flex items-center gap-2">
            <span>{personal.title}</span>
            <span className="text-zinc-600 hidden sm:inline">|</span>
            <span className="text-zinc-400 text-sm hidden sm:inline font-sans font-normal">
              LLMs · Agentic Workflows · RAG
            </span>
          </p>
        </div>

        {/* Punchy Headline Summary */}
        <p className="text-base sm:text-lg leading-relaxed text-zinc-300 max-w-3xl">
          {personal.headline}
        </p>

        {/* Action Buttons & Social Icons */}
        <div className="flex flex-wrap items-center gap-3 pt-2">
          {/* Email Copy Button with Feedback */}
          <button
            id="hero-email-btn"
            onClick={handleCopyEmail}
            className={`inline-flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-medium border transition-all duration-200 cursor-pointer ${
              copied
                ? 'bg-emerald-950/80 text-emerald-300 border-emerald-600/60 shadow-[0_0_15px_rgba(16,185,129,0.25)]'
                : 'bg-zinc-900 hover:bg-zinc-800 text-zinc-200 border-zinc-700/80 hover:border-zinc-500'
            }`}
            title="Copy email to clipboard"
          >
            {copied ? (
              <>
                <Check className="w-3.5 h-3.5 text-emerald-400" />
                <span>Email Copied!</span>
              </>
            ) : (
              <>
                <Copy className="w-3.5 h-3.5 text-zinc-400" />
                <span>{personal.email}</span>
              </>
            )}
          </button>

          {/* GitHub Link */}
          <a
            id="hero-github-link"
            href={personal.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-3.5 py-2 rounded-lg text-xs font-medium bg-zinc-900 hover:bg-zinc-800 text-zinc-300 hover:text-white border border-zinc-800 hover:border-zinc-700 transition-colors"
          >
            <GithubIcon className="w-3.5 h-3.5 text-zinc-400" />
            <span>GitHub</span>
          </a>

          {/* LinkedIn Link */}
          <a
            id="hero-linkedin-link"
            href={personal.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-3.5 py-2 rounded-lg text-xs font-medium bg-zinc-900 hover:bg-zinc-800 text-zinc-300 hover:text-white border border-zinc-800 hover:border-zinc-700 transition-colors"
          >
            <LinkedinIcon className="w-3.5 h-3.5 text-zinc-400" />
            <span>LinkedIn</span>
          </a>

          {/* Mail Direct Link */}
          <a
            id="hero-mail-link"
            href={`mailto:${personal.email}`}
            className="inline-flex items-center gap-2 px-3.5 py-2 rounded-lg text-xs font-medium bg-zinc-900 hover:bg-zinc-800 text-zinc-300 hover:text-white border border-zinc-800 hover:border-zinc-700 transition-colors"
          >
            <Mail className="w-3.5 h-3.5 text-zinc-400" />
            <span>Direct Message</span>
          </a>

          {/* Quick Resume Link */}
          {onOpenResume && (
            <button
              id="hero-resume-btn"
              onClick={onOpenResume}
              className="inline-flex items-center gap-2 px-3.5 py-2 rounded-lg text-xs font-medium bg-emerald-500/10 hover:bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 transition-colors cursor-pointer"
            >
              <FileText className="w-3.5 h-3.5 text-emerald-400" />
              <span>Resume</span>
            </button>
          )}
        </div>

        {/* Minimal Linear System Telemetry Card */}
        <div className="mt-8 rounded-xl bg-zinc-900/60 border border-zinc-800/80 p-4 font-mono text-xs text-zinc-400 shadow-inner relative overflow-hidden group">
          <div className="flex items-center justify-between pb-3 border-b border-zinc-800/60 mb-3">
            <div className="flex items-center gap-2">
              <Terminal className="w-3.5 h-3.5 text-emerald-400" />
              <span className="text-zinc-200 font-medium">engineering-profile.sys</span>
            </div>
            <div className="flex items-center gap-1.5 text-[11px] text-zinc-500">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
              <span>ready · agentic runtime</span>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            <div className="space-y-1">
              <div className="text-zinc-500 text-[11px] uppercase tracking-wider">Focus Areas</div>
              <div className="text-zinc-200 font-medium text-[11px]">
                Autonomous Agents · RAG · MCP
              </div>
            </div>
            <div className="space-y-1">
              <div className="text-zinc-500 text-[11px] uppercase tracking-wider">Key Stack</div>
              <div className="text-zinc-200 font-medium text-[11px]">
                LangGraph · Python · FastAPI · pgvector
              </div>
            </div>
            <div className="space-y-1">
              <div className="text-zinc-500 text-[11px] uppercase tracking-wider">Milestones</div>
              <div className="text-emerald-400 font-medium text-[11px] flex items-center gap-1">
                <Sparkles className="w-3 h-3 text-emerald-400" />
                <span>Indian Patent Published</span>
              </div>
            </div>
          </div>
        </div>

        {/* Quick jump link to projects */}
        <div className="pt-2">
          <a
            href="#projects"
            className="inline-flex items-center gap-1.5 text-xs font-mono text-zinc-500 hover:text-emerald-400 transition-colors"
          >
            <span>Jump to Featured Engineering Projects</span>
            <ArrowDown className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>
    </section>
  );
};
