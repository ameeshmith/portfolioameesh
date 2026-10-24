import React, { useState } from 'react';
import { portfolioData } from '../data/portfolioData';
import { FileText, Mail, Check, Copy } from 'lucide-react';
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
    <section className="pt-2 pb-10 sm:pb-12">
      <div className="space-y-6">
        {/* Profile Row: Avatar on left, info on right (matches reference image) */}
        <div className="flex items-center gap-5 sm:gap-6">
          {/* Avatar Container with pulsating green online dot */}
          <div className="relative shrink-0">
            <img
              src="/avatar.png"
              alt={personal.name}
              className="w-20 h-20 sm:w-24 sm:h-24 rounded-2xl object-cover object-top border border-zinc-200 dark:border-zinc-800 shadow-md"
            />
            <span
              className="absolute -bottom-1 -right-1 w-4 h-4 rounded-full bg-emerald-500 border-2 border-white dark:border-zinc-950 shadow-sm"
              title="Available for AI / Software Engineering roles"
            />
          </div>

          {/* Name, Role & Location */}
          <div className="space-y-1">
            <h1 className="text-2xl sm:text-3xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100 font-sans">
              {personal.name}
            </h1>
            <p className="text-sm sm:text-base font-medium text-zinc-700 dark:text-zinc-300">
              {personal.title}
            </p>
            <p className="text-xs sm:text-sm text-zinc-500 dark:text-zinc-400">
              {personal.location}
            </p>
          </div>
        </div>

        {/* Short Personal Intro Paragraph */}
        <p className="text-sm sm:text-base leading-relaxed text-zinc-600 dark:text-zinc-300">
          {personal.headline}
        </p>

        {/* Action Row: Resume Button + Social Icons */}
        <div className="flex items-center gap-3 pt-1">
          {/* Resume Pill Button */}
          <button
            onClick={onOpenResume}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-zinc-900 dark:bg-zinc-100 text-white dark:text-zinc-900 text-sm font-medium hover:opacity-90 transition-opacity shadow-sm cursor-pointer"
          >
            <FileText className="w-4 h-4" />
            <span>Resume</span>
          </button>

          {/* LinkedIn Icon Button */}
          <a
            href={personal.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2.5 rounded-xl text-zinc-700 dark:text-zinc-300 hover:text-zinc-950 dark:hover:text-white hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors"
            title="LinkedIn Profile"
          >
            <LinkedinIcon className="w-4 h-4" />
          </a>

          {/* GitHub Icon Button */}
          <a
            href={personal.github}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2.5 rounded-xl text-zinc-700 dark:text-zinc-300 hover:text-zinc-950 dark:hover:text-white hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors"
            title="GitHub Profile"
          >
            <GithubIcon className="w-4 h-4" />
          </a>

          {/* Mail (Gmail) Compose Button */}
          <a
            href={`https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(personal.email)}&su=${encodeURIComponent('Discussion: AI & Software Engineering Opportunity')}`}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2.5 rounded-xl text-zinc-700 dark:text-zinc-300 hover:text-zinc-950 dark:hover:text-white hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors"
            title="Compose Email in Gmail"
          >
            <Mail className="w-4 h-4" />
          </a>

          {/* Quick Copy Email with Toast */}
          <button
            onClick={handleCopyEmail}
            className="p-2.5 rounded-xl text-zinc-700 dark:text-zinc-300 hover:text-zinc-950 dark:hover:text-white hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors relative cursor-pointer"
            title="Copy email to clipboard"
          >
            {copied ? <Check className="w-4 h-4 text-emerald-500" /> : <Copy className="w-4 h-4" />}
            {copied && (
              <span className="absolute -top-7 left-1/2 -translate-x-1/2 px-2 py-0.5 rounded text-[10px] bg-zinc-900 text-white font-mono whitespace-nowrap shadow-md animate-in fade-in">
                Copied!
              </span>
            )}
          </button>
        </div>
      </div>
    </section>
  );
};
