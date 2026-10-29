import React, { useState } from 'react';
import { portfolioData } from '../data/portfolioData';
import type { Project } from '../data/portfolioData';
import {
  Award,
  Layers,
  Sparkles,
  Cpu,
  CheckCircle2,
  X,
} from 'lucide-react';
import { GithubIcon } from './icons';

export const Projects: React.FC = () => {
  const { projects } = portfolioData;
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const getNumberColor = (idx: number) => {
    const colors = ['bg-amber-300', 'bg-emerald-300', 'bg-pink-300', 'bg-sky-300', 'bg-purple-300'];
    return colors[idx % colors.length];
  };

  return (
    <section id="projects" className="py-12 sm:py-16 border-t-2 border-zinc-950 dark:border-zinc-800">
      <div className="space-y-8">
        {/* Numbered Section Pill */}
        <div className="inline-flex items-center gap-2">
          <span className="px-3.5 py-1 rounded-full border-2 border-zinc-950 bg-pink-300 text-zinc-950 font-black text-xs font-mono uppercase tracking-wider shadow-[3px_3px_0px_0px_#09090b]">
            02 THINGS I SHIPPED
          </span>
        </div>

        {/* Tactile Project Cards (matching kanishv.in style) */}
        <div className="space-y-5">
          {projects.map((project, idx) => (
            <div
              key={project.id}
              className="rounded-2xl border-2 border-zinc-950 dark:border-zinc-700 bg-white dark:bg-zinc-900 p-5 sm:p-6 shadow-[5px_5px_0px_0px_#09090b] dark:shadow-[5px_5px_0px_0px_#000] hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-[3px_3px_0px_0px_#09090b] transition-all flex flex-col md:flex-row md:items-center justify-between gap-5 group"
            >
              {/* Left Column: Number circle + Info + Tags */}
              <div className="flex items-start gap-4 sm:gap-5 flex-1">
                {/* Numbered Circle Badge */}
                <div
                  className={`w-11 h-11 sm:w-12 sm:h-12 rounded-full border-2 border-zinc-950 flex items-center justify-center font-black font-mono text-base shrink-0 shadow-[2px_2px_0px_0px_#000] text-zinc-950 ${getNumberColor(
                    idx
                  )}`}
                >
                  0{idx + 1}
                </div>

                {/* Details */}
                <div className="space-y-2 flex-1">
                  <div className="flex flex-wrap items-center gap-2">
                    <h3 className="text-lg sm:text-xl font-black text-zinc-950 dark:text-white font-sans tracking-tight">
                      {project.title}
                    </h3>

                    {project.badge && (
                      <span
                        className={`inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[11px] font-mono font-bold border border-zinc-950 shadow-[1px_1px_0px_0px_#000] ${
                          project.badge.includes('Patent')
                            ? 'bg-amber-300 text-zinc-950'
                            : 'bg-emerald-300 text-zinc-950'
                        }`}
                      >
                        {project.badge.includes('Patent') ? (
                          <Award className="w-3 h-3 text-zinc-950" />
                        ) : (
                          <Sparkles className="w-3 h-3 text-zinc-950" />
                        )}
                        <span>{project.badge}</span>
                      </span>
                    )}
                  </div>

                  <p className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-300 font-sans leading-relaxed">
                    {project.summary}
                  </p>

                  {/* Tags Pill Row */}
                  <div className="flex flex-wrap items-center gap-1.5 pt-1">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2.5 py-0.5 rounded-lg text-[11px] font-mono bg-zinc-100 dark:bg-zinc-800 border border-zinc-300 dark:border-zinc-700 text-zinc-800 dark:text-zinc-200"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Right Column: Actions */}
              <div className="flex items-center gap-2 sm:gap-3 shrink-0 self-start md:self-center pt-2 md:pt-0">
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-xl border-2 border-zinc-950 dark:border-zinc-700 bg-zinc-100 dark:bg-zinc-800 text-zinc-950 dark:text-zinc-100 shadow-[2px_2px_0px_0px_#000] hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-none transition-all"
                  title="View GitHub Repository"
                >
                  <GithubIcon className="w-4 h-4" />
                </a>

                <button
                  id={`deep-dive-${project.id}`}
                  onClick={() => setSelectedProject(project)}
                  className="inline-flex items-center gap-1 px-3 py-1.5 rounded-xl border-2 border-zinc-950 bg-amber-300 text-zinc-950 text-xs font-bold font-mono shadow-[2px_2px_0px_0px_#000] hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-none transition-all cursor-pointer"
                >
                  <Layers className="w-3.5 h-3.5" />
                  <span>deep dive</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Deep Dive Architecture Modal */}
      {selectedProject && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/75 backdrop-blur-md animate-in fade-in duration-200"
          onClick={() => setSelectedProject(null)}
        >
          <div
            className="w-full max-w-2xl rounded-2xl bg-white dark:bg-zinc-900 border-2 border-zinc-950 dark:border-zinc-700 p-6 sm:p-8 space-y-6 shadow-[8px_8px_0px_0px_#000] relative max-h-[90vh] overflow-y-auto text-zinc-900 dark:text-zinc-100"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedProject(null)}
              className="absolute top-5 right-5 p-1.5 rounded-xl border-2 border-zinc-950 bg-zinc-100 dark:bg-zinc-800 text-zinc-950 dark:text-zinc-100 shadow-[2px_2px_0px_0px_#000] hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-none transition-all cursor-pointer"
            >
              <X className="w-4 h-4" />
            </button>

            <div className="space-y-1">
              <span className="px-2.5 py-0.5 rounded-full border border-zinc-950 bg-pink-300 text-zinc-950 text-xs font-mono font-bold uppercase shadow-[1px_1px_0px_0px_#000]">
                Architecture Deep Dive
              </span>
              <h3 className="text-2xl font-black text-zinc-950 dark:text-white pt-2">
                {selectedProject.title}
              </h3>
              <p className="text-xs sm:text-sm font-mono text-zinc-600 dark:text-zinc-400">
                {selectedProject.subtitle}
              </p>
            </div>

            {/* Architecture Overview */}
            <div className="p-4 rounded-xl border-2 border-zinc-950 bg-zinc-50 dark:bg-zinc-950 text-xs font-mono space-y-2 shadow-[2px_2px_0px_0px_#000]">
              <div className="flex items-center gap-2 font-bold text-zinc-900 dark:text-zinc-100 border-b border-zinc-300 dark:border-zinc-800 pb-2">
                <Cpu className="w-4 h-4 text-amber-500" />
                <span>Architecture Specification</span>
              </div>
              <div className="text-zinc-700 dark:text-zinc-300 space-y-2 leading-relaxed">
                {selectedProject.id === 'fora-ai' && (
                  <p>
                    • MCP Integration: Scrapers & extractors decoupled into custom Model Context Protocol tool servers.
                    <br />
                    • State Graph: Cyclical reflection loops with automated critique gates driving attribution accuracy to 98%.
                    <br />
                    • Checkpointing: SQLite state saver supporting background job polling and structured briefs in &lt;45s.
                  </p>
                )}
                {selectedProject.id === 'agent-security-gateway' && (
                  <p>
                    • State Machine: LangGraph state machines pausing high-risk database drops and payments for human review while passing safe reads in &lt;3.5ms.
                    <br />
                    • Inbound Defense: Real-time prompt injection scanner catching and quarantining 100% of malicious override attacks before tool invocation.
                    <br />
                    • Governance: Role-based access control, inflight request editing, and an emergency kill switch cutting incident review time by 40%.
                  </p>
                )}
                {selectedProject.id === 'smart-news-synthesizer' && (
                  <p>
                    • Retrieval Pipeline: FAISS cosine semantic retrieval backed by Sentence Transformers embeddings.
                    <br />
                    • Classifier: Fine-tuned BERT model achieving 0.71 F1-score with 3–4 second latency.
                    <br />
                    • Innovation: Published Indian Patent covering credibility classification and multi-source cross verification.
                  </p>
                )}
                {selectedProject.id === 'pharma-watch' && (
                  <p>
                    • Dataset: Ingestion and standardization of 100,000+ FDA adverse event reports.
                    <br />
                    • Analytics: Automated FAERS ETL schema transformation with 15+ interactive Plotly trend visualizations.
                  </p>
                )}
              </div>
            </div>

            {/* Validated Impact Metrics */}
            <div className="space-y-2">
              <div className="text-xs font-mono uppercase font-bold text-zinc-600 dark:text-zinc-400">
                Validated Impact
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5">
                {selectedProject.metrics.map((m) => (
                  <div
                    key={m.label}
                    className="p-3 rounded-xl border-2 border-zinc-950 bg-amber-100 dark:bg-zinc-800 text-center shadow-[2px_2px_0px_0px_#000]"
                  >
                    <div className="text-base sm:text-lg font-black text-zinc-950 dark:text-white font-mono">
                      {m.value}
                    </div>
                    <div className="text-[10px] text-zinc-700 dark:text-zinc-400 font-mono uppercase font-bold">
                      {m.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Technical Highlights */}
            <div className="space-y-2">
              <div className="text-xs font-mono uppercase font-bold text-zinc-600 dark:text-zinc-400">
                Engineering Highlights
              </div>
              <ul className="space-y-2 text-xs sm:text-sm text-zinc-700 dark:text-zinc-300 font-sans">
                {selectedProject.keyHighlights.map((h, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5" />
                    <span>{h}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Action Bar */}
            <div className="pt-3 border-t-2 border-zinc-950 dark:border-zinc-800 flex flex-wrap items-center gap-3">
              <a
                href={selectedProject.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl border-2 border-zinc-950 bg-zinc-950 text-white dark:bg-white dark:text-zinc-950 font-bold text-xs shadow-[2px_2px_0px_0px_#000] hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-none transition-all"
              >
                <GithubIcon className="w-4 h-4" />
                <span>View Repository</span>
              </a>

              {selectedProject.patentUrl && (
                <a
                  href={selectedProject.patentUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl border-2 border-zinc-950 bg-amber-300 text-zinc-950 font-bold text-xs shadow-[2px_2px_0px_0px_#000] hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-none transition-all"
                >
                  <Award className="w-4 h-4" />
                  <span>Patent Filing</span>
                </a>
              )}
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
