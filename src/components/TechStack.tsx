import React from 'react';
import {
  PythonIcon,
  LangGraphIcon,
  McpIcon,
  FastApiIcon,
  PostgresIcon,
  DockerIcon,
  ReactIcon,
} from './icons';

interface TechItem {
  name: string;
  icon: React.ReactNode;
}

export const TechStack: React.FC = () => {
  const stack: TechItem[] = [
    {
      name: 'Python',
      icon: <PythonIcon className="w-8 h-8 text-zinc-900 dark:text-zinc-100" />,
    },
    {
      name: 'LangGraph',
      icon: <LangGraphIcon className="w-8 h-8 text-zinc-900 dark:text-zinc-100" />,
    },
    {
      name: 'MCP',
      icon: <McpIcon className="w-8 h-8 text-zinc-900 dark:text-zinc-100" />,
    },
    {
      name: 'FastAPI',
      icon: <FastApiIcon className="w-8 h-8 text-zinc-900 dark:text-zinc-100" />,
    },
    {
      name: 'PostgreSQL',
      icon: <PostgresIcon className="w-8 h-8 text-zinc-900 dark:text-zinc-100" />,
    },
    {
      name: 'Docker',
      icon: <DockerIcon className="w-8 h-8 text-zinc-900 dark:text-zinc-100" />,
    },
    {
      name: 'React.js',
      icon: <ReactIcon className="w-8 h-8 text-zinc-900 dark:text-zinc-100" />,
    },
    {
      name: 'pgvector / RAG',
      icon: (
        <svg className="w-8 h-8 text-zinc-900 dark:text-zinc-100" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
          <circle cx="12" cy="12" r="3" />
          <path d="M12 2v4m0 12v4M2 12h4m12 0h4" />
          <path d="m4.93 4.93 2.83 2.83m8.48 8.48 2.83 2.83M4.93 19.07l2.83-2.83m8.48-8.48 2.83-2.83" />
        </svg>
      ),
    },
    {
      name: 'SQLite',
      icon: (
        <svg className="w-8 h-8 text-zinc-900 dark:text-zinc-100" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
          <ellipse cx="12" cy="5" rx="9" ry="3" />
          <path d="M3 5v6c0 1.66 4 3 9 3s9-1.34 9-3V5" />
          <path d="M3 11v6c0 1.66 4 3 9 3s9-1.34 9-3v-6" />
        </svg>
      ),
    },
    {
      name: 'Linux & Git',
      icon: (
        <svg className="w-8 h-8 text-zinc-900 dark:text-zinc-100" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
          <path d="m15 18-6-6 6-6" />
          <path d="M4 12h16" />
        </svg>
      ),
    },
  ];

  return (
    <section className="py-8 border-t border-zinc-200 dark:border-zinc-800">
      <div className="space-y-6">
        <h2 className="text-base sm:text-lg font-bold tracking-tight text-zinc-900 dark:text-zinc-100">
          Current tech stack
        </h2>

        {/* 5-column grid matching the reference image layout */}
        <div className="grid grid-cols-2 sm:grid-cols-5 gap-y-7 gap-x-4">
          {stack.map((item) => (
            <div
              key={item.name}
              className="flex flex-col items-center justify-center text-center gap-2.5 group cursor-default"
            >
              <div className="p-2.5 rounded-xl bg-zinc-50 dark:bg-zinc-900 border border-zinc-100 dark:border-zinc-800 group-hover:border-zinc-300 dark:group-hover:border-zinc-700 transition-all duration-200 group-hover:-translate-y-0.5">
                {item.icon}
              </div>
              <span className="text-xs font-medium text-zinc-700 dark:text-zinc-300 group-hover:text-zinc-950 dark:group-hover:text-white transition-colors">
                {item.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
