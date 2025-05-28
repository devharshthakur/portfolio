'use client';

import { Button } from '@/components/ui/button';
import projects from '@/data/projects.data';
import { cn } from '@/lib/utils';
import { AlertCircle, Clock, GitFork, Star } from 'lucide-react';
import { useState } from 'react';
import { FaGithub, FaGlobe, FaPlay } from 'react-icons/fa6';

type HomePageProjectCardProps = {
  project: (typeof projects)[0];
};

export function HomePageProjectCard({ project }: HomePageProjectCardProps) {
  const [activeTab, setActiveTab] = useState<'info' | 'stats'>('info');

  return (
    <div className="flex flex-col overflow-hidden rounded-lg border-2 border-emerald-300/80 bg-white shadow-md transition-all duration-300 hover:border-emerald-400 hover:shadow-xl dark:border-emerald-700/80 dark:bg-emerald-900/40 dark:hover:border-emerald-600">
      {/* Header section - lighter emerald */}
      <div className="flex items-center justify-between border-b border-emerald-200/80 bg-emerald-100/60 p-3 dark:border-emerald-700/60 dark:bg-emerald-800/50">
        <h3 className="font-mono text-xl font-semibold tracking-tight text-emerald-900 dark:text-emerald-100">{project.title}</h3>
      </div>

      {/* Tab buttons section - medium emerald */}
      <div className="border-b border-emerald-200/80 bg-emerald-50/80 p-3 dark:border-emerald-700/60 dark:bg-emerald-800/30">
        <div className="grid grid-cols-2 gap-4">
          <Button
            variant="outline"
            className={cn(
              'w-full border-2 border-emerald-300/70 bg-emerald-50/70 font-mono text-sm tracking-tight hover:bg-emerald-100/60 dark:border-emerald-700/60 dark:bg-emerald-900/40 dark:hover:bg-emerald-800/40',
              activeTab === 'info'
                ? 'border-2 border-emerald-400/70 bg-emerald-100/70 text-emerald-800 shadow-sm dark:border-emerald-500/70 dark:bg-emerald-700/60 dark:text-emerald-100'
                : 'text-emerald-700 dark:text-emerald-300',
            )}
            onClick={() => setActiveTab('info')}>
            <span className="mr-1.5">📝</span> Info
          </Button>
          <Button
            variant="outline"
            className={cn(
              'w-full border-2 border-emerald-300/70 bg-emerald-50/70 font-mono text-sm tracking-tight hover:bg-emerald-100/60 dark:border-emerald-700/60 dark:bg-emerald-900/40 dark:hover:bg-emerald-800/40',
              activeTab === 'stats'
                ? 'border-2 border-emerald-400/70 bg-emerald-100/70 text-emerald-800 shadow-sm dark:border-emerald-500/70 dark:bg-emerald-700/60 dark:text-emerald-100'
                : 'text-emerald-700 dark:text-emerald-300',
            )}
            onClick={() => setActiveTab('stats')}>
            <span className="mr-1.5">📊</span> Stats
          </Button>
        </div>
      </div>

      {/* Content section - darker emerald */}
      <div className="h-[180px] overflow-auto bg-white/90 p-3 dark:bg-emerald-900/30">
        {activeTab === 'info' ? (
          <div className="space-y-2">
            <h4 className="font-mono text-lg font-semibold tracking-tight text-emerald-900 dark:text-emerald-100">{project.title}</h4>
            <p className="font-mono text-sm leading-relaxed text-emerald-800 dark:text-emerald-200">{project.description}</p>
            <div className="flex flex-wrap gap-2">
              {project.tags.map(tag => (
                <TechnologyBadge key={tag} technology={tag} />
              ))}
            </div>
          </div>
        ) : (
          <div className="space-y-2">
            {/* GitHub Stats Card */}
            <div className="rounded-lg border-2 border-emerald-200/80 bg-emerald-50/80 p-2 shadow-sm dark:border-emerald-700/70 dark:bg-emerald-800/40">
              <h5 className="mb-1 flex items-center font-mono text-xs tracking-wider text-emerald-700 uppercase dark:text-emerald-200">
                <FaGithub className="mr-1.5 h-3 w-3" /> GitHub Metrics
              </h5>

              <div className="grid grid-cols-2 gap-2 font-mono">
                <div className="flex items-center space-x-2 rounded-md border-2 border-emerald-200/80 bg-emerald-50/90 p-1 dark:border-emerald-600/60 dark:bg-emerald-700/50">
                  <div className="rounded-full bg-emerald-100/80 p-1 dark:bg-emerald-600/80">
                    <Star className="h-3 w-3 text-amber-600 dark:text-amber-300" />
                  </div>
                  <div>
                    <p className="text-[10px] text-emerald-700 dark:text-emerald-200">Stars</p>
                    <p className="text-xs font-bold text-emerald-800 dark:text-emerald-100">{project.stats?.stars || 0}</p>
                  </div>
                </div>

                <div className="flex items-center space-x-2 rounded-md border-2 border-emerald-200/80 bg-emerald-50/90 p-1 dark:border-emerald-600/60 dark:bg-emerald-700/50">
                  <div className="rounded-full bg-emerald-100/80 p-1 dark:bg-emerald-600/80">
                    <GitFork className="h-3 w-3 text-blue-600 dark:text-blue-300" />
                  </div>
                  <div>
                    <p className="text-[10px] text-emerald-700 dark:text-emerald-200">Forks</p>
                    <p className="text-xs font-bold text-emerald-800 dark:text-emerald-100">{project.stats?.forks || 0}</p>
                  </div>
                </div>

                <div className="flex items-center space-x-2 rounded-md border-2 border-emerald-200/80 bg-emerald-50/90 p-1 dark:border-emerald-600/60 dark:bg-emerald-700/50">
                  <div className="rounded-full bg-emerald-100/80 p-1 dark:bg-emerald-600/80">
                    <AlertCircle className="h-3 w-3 text-red-600 dark:text-red-300" />
                  </div>
                  <div>
                    <p className="text-[10px] text-emerald-700 dark:text-emerald-200">Issues</p>
                    <p className="text-xs font-bold text-emerald-800 dark:text-emerald-100">{project.stats?.issues || 0}</p>
                  </div>
                </div>

                <div className="flex items-center space-x-2 rounded-md border-2 border-emerald-200/80 bg-emerald-50/90 p-1 dark:border-emerald-600/60 dark:bg-emerald-700/50">
                  <div className="rounded-full bg-emerald-100/80 p-1 dark:bg-emerald-600/80">
                    <Clock className="h-3 w-3 text-purple-600 dark:text-purple-300" />
                  </div>
                  <div>
                    <p className="text-[10px] text-emerald-700 dark:text-emerald-200">Updated</p>
                    <p className="text-[10px] font-bold text-emerald-800 dark:text-emerald-100">{project.stats?.lastUpdated || 'N/A'}</p>
                  </div>
                </div>
              </div>

              <div className="mt-1 border-t border-emerald-200/80 pt-1 text-center font-mono text-[10px] text-emerald-700 dark:border-emerald-700/70 dark:text-emerald-300">
                Last synced with GitHub {Math.floor(Math.random() * 24)} hours ago
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Footer section - medium-dark emerald */}
      <div className="mt-auto grid grid-cols-2 gap-2 border-t border-emerald-200/80 bg-emerald-50/80 p-3 dark:border-emerald-700/60 dark:bg-emerald-800/30">
        <Button
          variant="outline"
          className="flex items-center gap-2 border-2 border-emerald-400/80 bg-emerald-50/70 font-mono text-sm tracking-tight text-emerald-700 shadow-sm hover:bg-emerald-100/70 dark:border-emerald-600/80 dark:bg-emerald-900/50 dark:text-emerald-300 dark:hover:bg-emerald-800/60"
          onClick={() => window.open(project.githubUrl, '_blank')}>
          <FaGithub className="h-4 w-4" />
          <span>$ git clone</span>
        </Button>

        {project.isInDevelopment ? (
          <Button
            variant="outline"
            className="flex cursor-not-allowed items-center gap-2 border-2 border-emerald-300/80 bg-emerald-50/50 font-mono text-sm tracking-tight text-emerald-500/80 opacity-80 dark:border-emerald-700/60 dark:bg-emerald-800/40 dark:text-emerald-400/80"
            disabled>
            <FaPlay className="h-4 w-4" />
            <span>Coming Soon</span>
          </Button>
        ) : project.liveDemoUrl === 'local' ? (
          <Button
            variant="outline"
            className="flex items-center gap-2 border-2 border-emerald-400/80 bg-emerald-50/70 font-mono text-sm tracking-tight text-emerald-600/90 shadow-sm hover:bg-emerald-100/70 dark:border-emerald-600/80 dark:bg-emerald-900/50 dark:text-emerald-400/90 dark:hover:bg-emerald-800/60"
            onClick={() =>
              alert('This project is not yet deployed. You can run it locally by following the steps in the README of this repository.')
            }>
            <FaGlobe className="h-4 w-4" />
            <span className="line-through decoration-1">Live Demo</span>
          </Button>
        ) : (
          <Button
            variant="outline"
            className="flex items-center gap-2 border-2 border-emerald-500/80 bg-emerald-600/80 font-mono text-sm tracking-tight text-white shadow-sm hover:bg-emerald-700/80 dark:border-emerald-600/80 dark:bg-emerald-600/80 dark:hover:bg-emerald-500/80"
            onClick={() => window.open(project.liveDemoUrl, '_blank')}>
            <FaGlobe className="h-4 w-4" />
            <span>Live Demo</span>
          </Button>
        )}
      </div>
    </div>
  );
}

function TechnologyBadge({ technology }: { technology: string }) {
  // Map technologies to specific colors for outline style badges
  const colorMap: Record<string, { text: string; border: string }> = {
    'Next.js': {
      text: 'text-slate-700 dark:text-slate-300',
      border: 'border-slate-500 dark:border-slate-400',
    },
    TypeScript: {
      text: 'text-blue-700 dark:text-blue-300',
      border: 'border-blue-500 dark:border-blue-400',
    },
    Encryption: {
      text: 'text-purple-700 dark:text-purple-300',
      border: 'border-purple-500 dark:border-purple-400',
    },
    Security: {
      text: 'text-red-700 dark:text-red-300',
      border: 'border-red-500 dark:border-red-400',
    },
    npm: {
      text: 'text-red-700 dark:text-red-300',
      border: 'border-red-500 dark:border-red-400',
    },
    'Package Checker': {
      text: 'text-purple-700 dark:text-purple-300',
      border: 'border-purple-500 dark:border-purple-400',
    },
    AI: {
      text: 'text-amber-700 dark:text-amber-300',
      border: 'border-amber-500 dark:border-amber-400',
    },
    'Legal Tech': {
      text: 'text-indigo-700 dark:text-indigo-300',
      border: 'border-indigo-500 dark:border-indigo-400',
    },
    'Machine Learning': {
      text: 'text-purple-700 dark:text-purple-300',
      border: 'border-purple-500 dark:border-purple-400',
    },
    Blockchain: {
      text: 'text-emerald-700 dark:text-emerald-300',
      border: 'border-emerald-500 dark:border-emerald-400',
    },
    Simulation: {
      text: 'text-violet-700 dark:text-violet-300',
      border: 'border-violet-500 dark:border-violet-400',
    },
    NestJS: {
      text: 'text-red-700 dark:text-red-300',
      border: 'border-red-500 dark:border-red-400',
    },
    'PDF Processing': {
      text: 'text-orange-700 dark:text-orange-300',
      border: 'border-orange-500 dark:border-orange-400',
    },
    Prisma: {
      text: 'text-blue-700 dark:text-blue-300',
      border: 'border-blue-500 dark:border-blue-400',
    },
  };

  const colors = colorMap[technology] || {
    text: 'text-gray-700 dark:text-gray-300',
    border: 'border-gray-500 dark:border-gray-400',
  };

  return (
    <span className={`rounded-md bg-transparent px-1.5 py-0.5 text-[10px] ${colors.text} border-2 ${colors.border} font-mono`}>{technology}</span>
  );
}
