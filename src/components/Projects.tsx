import React, { useState } from 'react';
import { portfolioData } from '../data/portfolioData';
import type { Project } from '../data/portfolioData';
import {
  ExternalLink,
  Award,
  Layers,
  ChevronRight,
  Sparkles,
  Cpu,
  CheckCircle2,
  X,
} from 'lucide-react';
import { GithubIcon } from './icons';

export const Projects: React.FC = () => {
  const { projects } = portfolioData;
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <section id="projects" className="py-16 sm:py-20 border-t border-zinc-800/60">
      <div className="space-y-10">
        {/* Section Header */}
        <div className="space-y-2">
          <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-emerald-400">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
            <span>Proof of Work</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-zinc-100 font-sans">
            Featured Projects
          </h2>
          <p className="text-sm text-zinc-400 max-w-2xl">
            Selected AI systems, autonomous agent architectures, and data engineering projects built for performance, reliability, and real-world utility.
          </p>
        </div>

        {/* Project Cards List */}
        <div className="space-y-8">
          {projects.map((project, idx) => (
            <article
              key={project.id}
              className="group relative rounded-2xl bg-zinc-900/40 border border-zinc-800/80 hover:border-zinc-700 p-6 sm:p-7 transition-all duration-300 hover:shadow-2xl hover:shadow-emerald-950/10 hover:bg-zinc-900/60"
            >
              {/* Top Row: Index, Badge & Links */}
              <div className="flex flex-wrap items-center justify-between gap-3 pb-4 border-b border-zinc-800/50">
                <div className="flex items-center gap-3">
                  <span className="font-mono text-xs text-zinc-500 font-semibold">
                    0{idx + 1}
                  </span>
                  {project.badge && (
                    <span
                      className={`inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-md text-[11px] font-mono font-medium ${
                        project.badge.includes('Patent')
                          ? 'bg-amber-950/40 text-amber-300 border border-amber-800/50'
                          : project.badge.includes('Agentic')
                          ? 'bg-emerald-950/40 text-emerald-300 border border-emerald-800/50'
                          : 'bg-zinc-800 text-zinc-300 border border-zinc-700/60'
                      }`}
                    >
                      {project.badge.includes('Patent') ? (
                        <Award className="w-3 h-3 text-amber-400" />
                      ) : (
                        <Sparkles className="w-3 h-3 text-emerald-400" />
                      )}
                      <span>{project.badge}</span>
                    </span>
                  )}
                </div>

                {/* External Action Links */}
                <div className="flex items-center gap-2">
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-1.5 rounded-md bg-zinc-800/60 hover:bg-zinc-700 text-zinc-400 hover:text-white transition-colors"
                    title="View Source on GitHub"
                  >
                    <GithubIcon className="w-4 h-4" />
                  </a>

                  {project.patentUrl && (
                    <a
                      href={project.patentUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md bg-amber-950/30 hover:bg-amber-900/40 text-amber-300 border border-amber-800/40 text-xs font-mono transition-colors"
                      title="Verify Indian Patent Publication"
                    >
                      <Award className="w-3.5 h-3.5" />
                      <span>Patent Filing</span>
                    </a>
                  )}

                  {project.demoUrl && (
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md bg-zinc-800/80 hover:bg-zinc-700 text-zinc-200 text-xs font-medium border border-zinc-700/60 transition-colors group/btn"
                    >
                      <span>Details</span>
                      <ExternalLink className="w-3 h-3 text-zinc-400 group-hover/btn:text-emerald-400 transition-colors" />
                    </a>
                  )}

                  <button
                    id={`deep-dive-${project.id}`}
                    onClick={() => setSelectedProject(project)}
                    className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md bg-emerald-500/10 hover:bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 text-xs font-mono transition-colors cursor-pointer"
                  >
                    <Layers className="w-3 h-3" />
                    <span>Deep Dive</span>
                  </button>
                </div>
              </div>

              {/* Title & Subtitle */}
              <div className="pt-4 space-y-1">
                <h3 className="text-xl sm:text-2xl font-bold text-zinc-100 font-sans tracking-tight">
                  {project.title}
                </h3>
                <p className="text-sm font-medium text-emerald-400/90 font-mono">
                  {project.subtitle}
                </p>
              </div>

              {/* Metrics Strip */}
              {project.metrics && project.metrics.length > 0 && (
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5 pt-4">
                  {project.metrics.map((metric) => (
                    <div
                      key={metric.label}
                      className="rounded-lg bg-zinc-950/60 border border-zinc-800/70 p-2.5 text-center font-mono"
                    >
                      <div className="text-base sm:text-lg font-bold text-emerald-400">
                        {metric.value}
                      </div>
                      <div className="text-[11px] text-zinc-400 uppercase tracking-wider">
                        {metric.label}
                      </div>
                    </div>
                  ))}
                </div>
              )}

              {/* Key Engineering Highlights */}
              <div className="pt-5 space-y-2.5">
                <div className="text-xs font-mono uppercase tracking-wider text-zinc-400 font-medium">
                  Key Engineering Highlights:
                </div>
                <ul className="space-y-2 text-sm text-zinc-300 leading-relaxed">
                  {project.keyHighlights.map((highlight, hIdx) => (
                    <li key={hIdx} className="flex items-start gap-2.5">
                      <ChevronRight className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Tags Strip */}
              <div className="pt-6 flex flex-wrap items-center gap-1.5">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-2.5 py-1 rounded-md bg-zinc-950/80 border border-zinc-800 text-zinc-300 font-mono text-xs hover:border-zinc-700 transition-colors"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>

      {/* Deep Dive Modal */}
      {selectedProject && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-200"
          onClick={() => setSelectedProject(null)}
        >
          <div
            className="w-full max-w-2xl rounded-2xl bg-zinc-900 border border-zinc-800 p-6 sm:p-8 space-y-6 shadow-2xl relative max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedProject(null)}
              className="absolute top-5 right-5 p-1.5 rounded-lg bg-zinc-800 text-zinc-400 hover:text-white"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="space-y-1">
              <span className="text-xs font-mono text-emerald-400 uppercase tracking-wider">
                System Specification & Architecture
              </span>
              <h3 className="text-2xl font-bold text-white">{selectedProject.title}</h3>
              <p className="text-sm font-mono text-zinc-400">{selectedProject.subtitle}</p>
            </div>

            {/* Architecture Overview Snippet */}
            <div className="p-4 rounded-xl bg-zinc-950 border border-zinc-800 space-y-3 font-mono text-xs">
              <div className="flex items-center gap-2 text-zinc-300 font-semibold border-b border-zinc-800 pb-2">
                <Cpu className="w-4 h-4 text-emerald-400" />
                <span>Architecture Breakdown</span>
              </div>
              <div className="text-zinc-400 space-y-2 text-xs">
                {selectedProject.id === 'fora-ai' && (
                  <p>
                    • MCP Server Integration: Web scraper & content extractor decoupled as separate stdio/HTTP servers.
                    <br />
                    • State Graph: Cyclical loop with evaluator node measuring information completeness before final report generation.
                    <br />
                    • Persistence: SQLite checkpoint saver tracking thread ID and execution history for safe recovery.
                  </p>
                )}
                {selectedProject.id === 'smart-news-synthesizer' && (
                  <p>
                    • Retrieval Pipeline: FAISS cosine index powered by Sentence Transformers embeddings.
                    <br />
                    • Classification: Fine-tuned BERT model classifying news veracity and confidence ratings.
                    <br />
                    • Innovation: Published Indian Patent covering multi-source claim verification and cross-referencing logic.
                  </p>
                )}
                {selectedProject.id === 'pharma-watch' && (
                  <p>
                    • ETL Flow: Ingestion of FDA FAERS quarter archives, schema mapping to normalized SQLite tables.
                    <br />
                    • Visualization: Dynamic Plotly charts mapping reporting anomalies, disproportionality signals (PRR/ROR), and demographic correlations.
                  </p>
                )}
              </div>
            </div>

            {/* Metrics Breakdown */}
            <div className="space-y-2">
              <div className="text-xs font-mono uppercase text-zinc-400">Validated Impact</div>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                {selectedProject.metrics.map((m) => (
                  <div key={m.label} className="p-3 rounded-lg bg-zinc-950/70 border border-zinc-800 text-center">
                    <div className="text-lg font-bold text-emerald-400 font-mono">{m.value}</div>
                    <div className="text-[11px] text-zinc-400 font-mono">{m.label}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Bullet Points */}
            <div className="space-y-2">
              <div className="text-xs font-mono uppercase text-zinc-400">Technical Implementation</div>
              <ul className="space-y-2 text-sm text-zinc-300">
                {selectedProject.keyHighlights.map((h, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <span>{h}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Action Bar */}
            <div className="pt-2 flex flex-wrap items-center gap-3 border-t border-zinc-800">
              <a
                href={selectedProject.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 rounded-lg bg-zinc-100 text-zinc-900 text-xs font-semibold hover:bg-white transition-colors"
              >
                <GithubIcon className="w-4 h-4" />
                <span>View GitHub Repository</span>
              </a>

              {selectedProject.patentUrl && (
                <a
                  href={selectedProject.patentUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2 rounded-lg bg-amber-500/20 text-amber-300 border border-amber-500/40 text-xs font-medium hover:bg-amber-500/30 transition-colors"
                >
                  <Award className="w-4 h-4" />
                  <span>Patent Details</span>
                </a>
              )}
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
