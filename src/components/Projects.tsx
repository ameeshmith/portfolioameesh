import React, { useState } from 'react';
import { portfolioData } from '../data/portfolioData';
import type { Project } from '../data/portfolioData';
import {
  ExternalLink,
  Award,
  Layers,
  Sparkles,
  Cpu,
  CheckCircle2,
  X,
  Bot,
  Activity,
  FileCheck,
} from 'lucide-react';
import { GithubIcon } from './icons';

export const Projects: React.FC = () => {
  const { projects } = portfolioData;
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const getProjectVisual = (projectId: string) => {
    if (projectId === 'fora-ai') {
      return (
        <div className="h-44 sm:h-52 w-full bg-gradient-to-br from-zinc-900 to-zinc-950 p-4 flex flex-col justify-between text-left font-mono border-b border-zinc-200 dark:border-zinc-800 relative overflow-hidden">
          <div className="flex items-center justify-between text-[11px] text-zinc-400 border-b border-zinc-800 pb-2">
            <span className="flex items-center gap-1.5 text-emerald-400">
              <Bot className="w-3.5 h-3.5" />
              <span>cyclical_agent_loop.py</span>
            </span>
            <span className="px-1.5 py-0.5 rounded bg-emerald-950/60 text-emerald-400 border border-emerald-800/40 text-[10px]">
              MCP Active
            </span>
          </div>

          <div className="space-y-1.5 text-[11px] text-zinc-400">
            <div className="text-zinc-500">// Automated critique gate</div>
            <div className="text-zinc-300">
              <span className="text-purple-400">async def</span>{' '}
              <span className="text-blue-400">evaluate_attribution</span>(state):
            </div>
            <div className="pl-3 text-zinc-400">
              score = critique_gate(state.citations)
            </div>
            <div className="pl-3 text-emerald-400">
              return &quot;finalize&quot; if score &gt;= 0.98 else &quot;re_query&quot;
            </div>
          </div>

          <div className="flex items-center justify-between text-[11px] pt-2 border-t border-zinc-800/60 text-zinc-400">
            <span>Accuracy: <strong className="text-emerald-400">98%</strong></span>
            <span>Latency: <strong className="text-emerald-400">&lt;45s</strong></span>
          </div>
        </div>
      );
    }

    if (projectId === 'smart-news-synthesizer') {
      return (
        <div className="h-44 sm:h-52 w-full bg-gradient-to-br from-zinc-900 to-zinc-950 p-4 flex flex-col justify-between text-left font-mono border-b border-zinc-200 dark:border-zinc-800 relative overflow-hidden">
          <div className="flex items-center justify-between text-[11px] text-zinc-400 border-b border-zinc-800 pb-2">
            <span className="flex items-center gap-1.5 text-amber-300">
              <FileCheck className="w-3.5 h-3.5" />
              <span>news_rag_pipeline.py</span>
            </span>
            <span className="px-1.5 py-0.5 rounded bg-amber-950/60 text-amber-300 border border-amber-800/40 text-[10px]">
              Patent Published
            </span>
          </div>

          <div className="space-y-1.5 text-[11px] text-zinc-400">
            <div className="text-zinc-500">// Semantic News Verification</div>
            <div className="text-zinc-300">
              <span className="text-purple-400">class</span>{' '}
              <span className="text-blue-400">CredibilityClassifier</span>(BERT):
            </div>
            <div className="pl-3 text-zinc-400">
              f1_score: <span className="text-emerald-400">0.71</span>
            </div>
            <div className="pl-3 text-amber-300">
              latency: <span className="text-emerald-400">3-4s</span> · FAISS Cosine Index
            </div>
          </div>

          <div className="flex items-center justify-between text-[11px] pt-2 border-t border-zinc-800/60 text-zinc-400">
            <span>Reading Time: <strong className="text-emerald-400">-60%</strong></span>
            <span className="text-amber-400 font-semibold">Indian Patent</span>
          </div>
        </div>
      );
    }

    return (
      <div className="h-44 sm:h-52 w-full bg-gradient-to-br from-zinc-900 to-zinc-950 p-4 flex flex-col justify-between text-left font-mono border-b border-zinc-200 dark:border-zinc-800 relative overflow-hidden">
        <div className="flex items-center justify-between text-[11px] text-zinc-400 border-b border-zinc-800 pb-2">
          <span className="flex items-center gap-1.5 text-cyan-400">
            <Activity className="w-3.5 h-3.5" />
            <span>faers_analytics_etl.py</span>
          </span>
          <span className="px-1.5 py-0.5 rounded bg-cyan-950/60 text-cyan-400 border border-cyan-800/40 text-[10px]">
            100K+ Reports
          </span>
        </div>

        <div className="space-y-1.5 text-[11px] text-zinc-400">
          <div className="text-zinc-500">// Pharmacovigilance Dashboard</div>
          <div className="text-zinc-300">
            <span className="text-purple-400">def</span>{' '}
            <span className="text-blue-400">compute_disproportionality</span>(df):
          </div>
          <div className="pl-3 text-zinc-400">
            metrics = [PRR, ROR, ChiSquare]
          </div>
          <div className="pl-3 text-cyan-400">
            visualizations: 15+ Interactive Plotly views
          </div>
        </div>

        <div className="flex items-center justify-between text-[11px] pt-2 border-t border-zinc-800/60 text-zinc-400">
          <span>Reports: <strong className="text-cyan-400">100,000+</strong></span>
          <span>ETL: <strong className="text-emerald-400">Automated</strong></span>
        </div>
      </div>
    );
  };

  return (
    <section id="projects" className="py-8 border-t border-zinc-200 dark:border-zinc-800">
      <div className="space-y-6">
        <h2 className="text-base sm:text-lg font-bold tracking-tight text-zinc-900 dark:text-zinc-100">
          Recent projects
        </h2>

        {/* 2-Column Responsive Card Grid (matching Image 1 layout) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project) => (
            <article
              key={project.id}
              className="rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900/60 overflow-hidden shadow-sm hover:shadow-md transition-all duration-200 flex flex-col justify-between group"
            >
              {/* Top Visual Mockup Box */}
              <div>
                {/* Browser bar header */}
                <div className="h-8 bg-zinc-100 dark:bg-zinc-850 px-3 flex items-center justify-between border-b border-zinc-200 dark:border-zinc-800">
                  <div className="flex items-center gap-1.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-zinc-300 dark:bg-zinc-700" />
                    <span className="w-2.5 h-2.5 rounded-full bg-zinc-300 dark:bg-zinc-700" />
                    <span className="w-2.5 h-2.5 rounded-full bg-zinc-300 dark:bg-zinc-700" />
                  </div>
                  <span className="text-[10px] font-mono text-zinc-400">
                    {project.title.toLowerCase().replace(/\s+/g, '-')}.sys
                  </span>
                </div>

                {/* Dashboard / Code visual preview */}
                {getProjectVisual(project.id)}

                {/* Card Content */}
                <div className="p-5 space-y-3">
                  <div className="flex items-start justify-between gap-2">
                    <div>
                      <h3 className="text-base sm:text-lg font-bold text-zinc-900 dark:text-zinc-100">
                        {project.title}
                      </h3>
                      <p className="text-xs font-medium text-emerald-600 dark:text-emerald-400 font-mono">
                        {project.subtitle}
                      </p>
                    </div>

                    {project.badge && (
                      <span
                        className={`inline-flex items-center gap-1 px-2 py-0.5 rounded text-[10px] font-mono font-medium shrink-0 ${
                          project.badge.includes('Patent')
                            ? 'bg-amber-100 dark:bg-amber-950/40 text-amber-800 dark:text-amber-300 border border-amber-300 dark:border-amber-800/40'
                            : 'bg-emerald-100 dark:bg-emerald-950/40 text-emerald-800 dark:text-emerald-300 border border-emerald-300 dark:border-emerald-800/40'
                        }`}
                      >
                        {project.badge.includes('Patent') ? (
                          <Award className="w-3 h-3 text-amber-500" />
                        ) : (
                          <Sparkles className="w-3 h-3 text-emerald-500" />
                        )}
                        <span>{project.badge}</span>
                      </span>
                    )}
                  </div>

                  <p className="text-xs text-zinc-600 dark:text-zinc-300 leading-relaxed line-clamp-3">
                    {project.summary}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-1.5 pt-1">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-0.5 rounded text-[10px] font-mono bg-zinc-100 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Card Footer Actions */}
              <div className="px-5 pb-5 pt-2 border-t border-zinc-100 dark:border-zinc-800/60 flex items-center justify-between gap-2">
                <div className="flex items-center gap-2">
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-1.5 rounded-lg bg-zinc-100 dark:bg-zinc-800 hover:bg-zinc-200 dark:hover:bg-zinc-700 text-zinc-700 dark:text-zinc-300 transition-colors"
                    title="View Source on GitHub"
                  >
                    <GithubIcon className="w-4 h-4" />
                  </a>

                  {project.demoUrl && (
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg bg-zinc-100 dark:bg-zinc-800 hover:bg-zinc-200 dark:hover:bg-zinc-700 text-zinc-700 dark:text-zinc-300 text-xs font-medium transition-colors"
                    >
                      <span>Details</span>
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  )}
                </div>

                <button
                  id={`deep-dive-${project.id}`}
                  onClick={() => setSelectedProject(project)}
                  className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg bg-emerald-50 dark:bg-emerald-500/10 hover:bg-emerald-100 dark:hover:bg-emerald-500/20 text-emerald-700 dark:text-emerald-400 border border-emerald-200 dark:border-emerald-500/30 text-xs font-mono transition-colors cursor-pointer"
                >
                  <Layers className="w-3 h-3" />
                  <span>Deep Dive</span>
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>

      {/* Deep Dive Architecture Modal */}
      {selectedProject && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-200"
          onClick={() => setSelectedProject(null)}
        >
          <div
            className="w-full max-w-2xl rounded-2xl bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 p-6 sm:p-8 space-y-6 shadow-2xl relative max-h-[90vh] overflow-y-auto text-zinc-900 dark:text-zinc-100"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedProject(null)}
              className="absolute top-5 right-5 p-1.5 rounded-lg bg-zinc-100 dark:bg-zinc-800 text-zinc-500 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="space-y-1">
              <span className="text-xs font-mono text-emerald-600 dark:text-emerald-400 uppercase tracking-wider">
                System Specification & Architecture
              </span>
              <h3 className="text-2xl font-bold">{selectedProject.title}</h3>
              <p className="text-sm font-mono text-zinc-500 dark:text-zinc-400">{selectedProject.subtitle}</p>
            </div>

            {/* Architecture Overview Snippet */}
            <div className="p-4 rounded-xl bg-zinc-50 dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 space-y-3 font-mono text-xs">
              <div className="flex items-center gap-2 text-zinc-800 dark:text-zinc-200 font-semibold border-b border-zinc-200 dark:border-zinc-800 pb-2">
                <Cpu className="w-4 h-4 text-emerald-500" />
                <span>Architecture Breakdown</span>
              </div>
              <div className="text-zinc-600 dark:text-zinc-400 space-y-2 text-xs">
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
              <div className="text-xs font-mono uppercase text-zinc-500 dark:text-zinc-400">Validated Impact</div>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                {selectedProject.metrics.map((m) => (
                  <div key={m.label} className="p-3 rounded-lg bg-zinc-50 dark:bg-zinc-950/70 border border-zinc-200 dark:border-zinc-800 text-center">
                    <div className="text-lg font-bold text-emerald-600 dark:text-emerald-400 font-mono">{m.value}</div>
                    <div className="text-[11px] text-zinc-500 dark:text-zinc-400 font-mono">{m.label}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Bullet Points */}
            <div className="space-y-2">
              <div className="text-xs font-mono uppercase text-zinc-500 dark:text-zinc-400">Technical Implementation</div>
              <ul className="space-y-2 text-sm text-zinc-700 dark:text-zinc-300">
                {selectedProject.keyHighlights.map((h, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                    <span>{h}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Action Bar */}
            <div className="pt-2 flex flex-wrap items-center gap-3 border-t border-zinc-200 dark:border-zinc-800">
              <a
                href={selectedProject.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 rounded-xl bg-zinc-900 dark:bg-zinc-100 text-white dark:text-zinc-900 text-xs font-semibold hover:opacity-90 transition-opacity"
              >
                <GithubIcon className="w-4 h-4" />
                <span>View GitHub Repository</span>
              </a>

              {selectedProject.patentUrl && (
                <a
                  href={selectedProject.patentUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2 rounded-xl bg-amber-100 dark:bg-amber-500/20 text-amber-800 dark:text-amber-300 border border-amber-300 dark:border-amber-500/40 text-xs font-medium hover:opacity-90 transition-opacity"
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
