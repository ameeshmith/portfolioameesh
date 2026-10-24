import React from 'react';
import { portfolioData } from '../data/portfolioData';
import {
  X,
  Download,
  Printer,
  Mail,
  MapPin,
} from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './icons';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const { personal, experience, projects, skills, education } = portfolioData;

  const handlePrint = () => {
    window.print();
  };

  return (
    <div
      id="resume-modal"
      className="fixed inset-0 z-[100] flex items-center justify-center p-3 sm:p-6 bg-black/85 backdrop-blur-md animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        className="w-full max-w-3xl max-h-[92vh] rounded-2xl bg-zinc-900 border border-zinc-800 flex flex-col shadow-2xl relative overflow-hidden text-zinc-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Top Bar */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-zinc-800 bg-zinc-950/80">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500" />
            <span className="font-mono text-xs text-zinc-300 font-semibold tracking-wide uppercase">
              Curriculum Vitae · {personal.name}
            </span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handlePrint}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-zinc-800 hover:bg-zinc-700 text-xs font-mono text-zinc-300 hover:text-white transition-colors"
              title="Print Resume"
            >
              <Printer className="w-3.5 h-3.5 text-zinc-400" />
              <span className="hidden sm:inline">Print</span>
            </button>

            <a
              href="/resume.pdf"
              download="Ameesh_Mithanthaya_Resume.pdf"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-emerald-500/10 hover:bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 text-xs font-mono transition-colors"
              title="Download PDF"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Download PDF</span>
            </a>

            <button
              onClick={onClose}
              className="p-1.5 rounded-lg bg-zinc-800 hover:bg-zinc-700 text-zinc-400 hover:text-white transition-colors ml-2"
              aria-label="Close modal"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Scrollable Document Content */}
        <div className="overflow-y-auto p-6 sm:p-10 space-y-8 bg-zinc-950/50 print:bg-white print:text-black">
          {/* Header */}
          <div className="border-b border-zinc-800 pb-6 space-y-3">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
              <div>
                <h1 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
                  {personal.name}
                </h1>
                <p className="text-emerald-400 font-mono text-sm font-medium">
                  {personal.title}
                </p>
              </div>

              <div className="text-xs font-mono text-zinc-400 space-y-1 text-left sm:text-right">
                <div className="flex items-center sm:justify-end gap-1.5">
                  <Mail className="w-3.5 h-3.5 text-zinc-500" />
                  <span>{personal.email}</span>
                </div>
                <div className="flex items-center sm:justify-end gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-zinc-500" />
                  <span>{personal.location}</span>
                </div>
                <div className="flex items-center sm:justify-end gap-2 pt-1 text-emerald-400">
                  <a
                    href={personal.github}
                    target="_blank"
                    rel="noreferrer"
                    className="hover:underline flex items-center gap-1"
                  >
                    <GithubIcon className="w-3 h-3" /> GitHub
                  </a>
                  <span>·</span>
                  <a
                    href={personal.linkedin}
                    target="_blank"
                    rel="noreferrer"
                    className="hover:underline flex items-center gap-1"
                  >
                    <LinkedinIcon className="w-3 h-3" /> LinkedIn
                  </a>
                </div>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed pt-2">
              {personal.headline}
            </p>
          </div>

          {/* Experience Section */}
          <div className="space-y-4">
            <h2 className="text-xs font-mono uppercase tracking-wider text-emerald-400 font-semibold border-b border-zinc-800/80 pb-1">
              Experience
            </h2>
            <div className="space-y-6">
              {experience.map((item) => (
                <div key={item.id} className="space-y-2">
                  <div className="flex flex-wrap items-center justify-between text-xs">
                    <span className="font-bold text-zinc-100 text-sm">
                      {item.role} <span className="text-emerald-400">@ {item.company}</span>
                    </span>
                    <span className="font-mono text-zinc-400">
                      {item.period} · {item.location}
                    </span>
                  </div>
                  <ul className="space-y-1.5 text-xs text-zinc-300">
                    {item.highlights.map((h, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <span className="text-emerald-400 mt-0.5">•</span>
                        <span>{h}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Featured Projects & Patent */}
          <div className="space-y-4">
            <h2 className="text-xs font-mono uppercase tracking-wider text-emerald-400 font-semibold border-b border-zinc-800/80 pb-1">
              Selected Projects & Inventions
            </h2>
            <div className="space-y-5">
              {projects.map((proj) => (
                <div key={proj.id} className="space-y-1.5">
                  <div className="flex flex-wrap items-center justify-between gap-1 text-xs">
                    <div className="flex items-center gap-2">
                      <span className="font-bold text-zinc-100 text-sm">{proj.title}</span>
                      <span className="text-zinc-500 font-mono text-[11px]">
                        ({proj.tags.slice(0, 4).join(', ')})
                      </span>
                    </div>
                    {proj.badge && (
                      <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-zinc-800 text-zinc-300">
                        {proj.badge}
                      </span>
                    )}
                  </div>
                  <ul className="space-y-1 text-xs text-zinc-300">
                    {proj.keyHighlights.map((kh, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <span className="text-emerald-400 mt-0.5">•</span>
                        <span>{kh}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Education */}
          <div className="space-y-3">
            <h2 className="text-xs font-mono uppercase tracking-wider text-emerald-400 font-semibold border-b border-zinc-800/80 pb-1">
              Education
            </h2>
            {education.map((edu, idx) => (
              <div key={idx} className="flex flex-wrap items-center justify-between text-xs">
                <div>
                  <span className="font-bold text-zinc-100 text-sm">{edu.institution}</span>
                  <span className="text-zinc-400 block font-mono">
                    {edu.degree} · <strong className="text-emerald-400">{edu.gpa}</strong>
                  </span>
                </div>
                <span className="font-mono text-zinc-500">{edu.period}</span>
              </div>
            ))}
          </div>

          {/* Technical Skills Summary */}
          <div className="space-y-3 pb-2">
            <h2 className="text-xs font-mono uppercase tracking-wider text-emerald-400 font-semibold border-b border-zinc-800/80 pb-1">
              Technical Arsenal
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
              {skills.map((cat) => (
                <div key={cat.category} className="space-y-1">
                  <span className="font-semibold text-zinc-300">{cat.category}:</span>
                  <div className="text-zinc-400 font-mono text-[11px]">
                    {cat.skills.map((s) => s.name).join(', ')}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
