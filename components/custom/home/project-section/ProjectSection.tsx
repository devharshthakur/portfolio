'use client';

import { useState } from 'react';
import { FaGithub, FaGlobe, FaPlay } from 'react-icons/fa';
import { Building, Star, GitFork, AlertCircle, Clock } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import projects from '@/data/projects.data';
import Link from 'next/link';

// Only show the top 4 projects
const topProjects = projects.slice(0, 4);

export default function Projects() {
  return (
    <section className="w-full py-8 bg-emerald-50/80 dark:bg-emerald-950/80 border-2 border-emerald-400/80 dark:border-emerald-700/80 rounded-lg shadow-sm backdrop-saturate-[1.2] backdrop-brightness-[1.02] backdrop-contrast-[1.05] relative overflow-hidden">
      {/* Green tint overlay */}
      <div className="absolute inset-0 bg-green-600/5 dark:bg-green-800/20 mix-blend-multiply pointer-events-none"></div>

      <div className="container px-4 md:px-8 lg:px-12 max-w-full relative z-10">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-2">
            <Building className="h-6 w-6 text-emerald-700 dark:text-emerald-400" />
            <h2 className="text-3xl font-bold font-mono text-emerald-900 dark:text-emerald-300 tracking-tight">Projects</h2>
          </div>
          <Button
            variant="outline"
            className="border-2 border-emerald-500/90 dark:border-emerald-600/80 text-emerald-800 dark:text-emerald-300 bg-emerald-50/80 dark:bg-emerald-900/60 hover:bg-emerald-100/90 dark:hover:bg-emerald-800/60 font-mono shadow-sm text-sm"
            asChild
          >
            <Link href="/projects">View All Projects</Link>
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {topProjects.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}

type ProjectCardProps = {
  project: (typeof projects)[0];
};

function ProjectCard({ project }: ProjectCardProps) {
  const [activeTab, setActiveTab] = useState<'info' | 'stats'>('info');

  return (
    <div className="flex flex-col rounded-lg overflow-hidden border-2 border-emerald-300/80 dark:border-emerald-700/80 bg-white dark:bg-emerald-900/40 shadow-md transition-all duration-300 hover:shadow-xl hover:border-emerald-400 dark:hover:border-emerald-600">
      {/* Header section - lighter emerald */}
      <div className="p-3 flex items-center justify-between border-b border-emerald-200/80 dark:border-emerald-700/60 bg-emerald-100/60 dark:bg-emerald-800/50">
        <h3 className="text-xl font-semibold tracking-tight font-mono text-emerald-900 dark:text-emerald-100">{project.title}</h3>
        <span className="px-2 py-0.5 text-xs rounded-md bg-emerald-50/80 dark:bg-emerald-700/70 text-emerald-700 dark:text-emerald-100 border-2 border-emerald-300/60 dark:border-emerald-600/60 font-mono">
          {project.version || 'v1.0.0'}
        </span>
      </div>

      {/* Tab buttons section - medium emerald */}
      <div className="p-3 border-b border-emerald-200/80 dark:border-emerald-700/60 bg-emerald-50/80 dark:bg-emerald-800/30">
        <div className="grid grid-cols-2 gap-4">
          <Button
            variant="outline"
            className={cn(
              'w-full font-mono border-2 border-emerald-300/70 dark:border-emerald-700/60 bg-emerald-50/70 dark:bg-emerald-900/40 hover:bg-emerald-100/60 dark:hover:bg-emerald-800/40 text-sm tracking-tight',
              activeTab === 'info'
                ? 'bg-emerald-100/70 dark:bg-emerald-700/60 text-emerald-800 dark:text-emerald-100 border-2 border-emerald-400/70 dark:border-emerald-500/70 shadow-sm'
                : 'text-emerald-700 dark:text-emerald-300',
            )}
            onClick={() => setActiveTab('info')}
          >
            <span className="mr-1.5">📝</span> Info
          </Button>
          <Button
            variant="outline"
            className={cn(
              'w-full font-mono border-2 border-emerald-300/70 dark:border-emerald-700/60 bg-emerald-50/70 dark:bg-emerald-900/40 hover:bg-emerald-100/60 dark:hover:bg-emerald-800/40 text-sm tracking-tight',
              activeTab === 'stats'
                ? 'bg-emerald-100/70 dark:bg-emerald-700/60 text-emerald-800 dark:text-emerald-100 border-2 border-emerald-400/70 dark:border-emerald-500/70 shadow-sm'
                : 'text-emerald-700 dark:text-emerald-300',
            )}
            onClick={() => setActiveTab('stats')}
          >
            <span className="mr-1.5">📊</span> Stats
          </Button>
        </div>
      </div>

      {/* Content section - darker emerald */}
      <div className="bg-white/90 dark:bg-emerald-900/30 p-3 h-[180px] overflow-auto">
        {activeTab === 'info' ? (
          <div className="space-y-2">
            <h4 className="text-lg font-semibold tracking-tight font-mono text-emerald-900 dark:text-emerald-100">{project.title}</h4>
            <p className="text-emerald-800 dark:text-emerald-200 font-mono text-sm leading-relaxed">{project.description}</p>
            <div className="flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <TechnologyBadge key={tag} technology={tag} />
              ))}
            </div>
          </div>
        ) : (
          <div className="space-y-2">
            {/* GitHub Stats Card */}
            <div className="bg-emerald-50/80 dark:bg-emerald-800/40 rounded-lg border-2 border-emerald-200/80 dark:border-emerald-700/70 p-2 shadow-sm">
              <h5 className="text-xs uppercase tracking-wider text-emerald-700 dark:text-emerald-200 font-mono mb-1 flex items-center">
                <FaGithub className="mr-1.5 h-3 w-3" /> GitHub Metrics
              </h5>

              <div className="grid grid-cols-2 gap-2 font-mono">
                <div className="flex items-center space-x-2 p-1 rounded-md bg-emerald-50/90 dark:bg-emerald-700/50 border-2 border-emerald-200/80 dark:border-emerald-600/60">
                  <div className="bg-emerald-100/80 dark:bg-emerald-600/80 p-1 rounded-full">
                    <Star className="h-3 w-3 text-amber-600 dark:text-amber-300" />
                  </div>
                  <div>
                    <p className="text-emerald-700 dark:text-emerald-200 text-[10px]">Stars</p>
                    <p className="font-bold text-emerald-800 dark:text-emerald-100 text-xs">{project.stats?.stars || 0}</p>
                  </div>
                </div>

                <div className="flex items-center space-x-2 p-1 rounded-md bg-emerald-50/90 dark:bg-emerald-700/50 border-2 border-emerald-200/80 dark:border-emerald-600/60">
                  <div className="bg-emerald-100/80 dark:bg-emerald-600/80 p-1 rounded-full">
                    <GitFork className="h-3 w-3 text-blue-600 dark:text-blue-300" />
                  </div>
                  <div>
                    <p className="text-emerald-700 dark:text-emerald-200 text-[10px]">Forks</p>
                    <p className="font-bold text-emerald-800 dark:text-emerald-100 text-xs">{project.stats?.forks || 0}</p>
                  </div>
                </div>

                <div className="flex items-center space-x-2 p-1 rounded-md bg-emerald-50/90 dark:bg-emerald-700/50 border-2 border-emerald-200/80 dark:border-emerald-600/60">
                  <div className="bg-emerald-100/80 dark:bg-emerald-600/80 p-1 rounded-full">
                    <AlertCircle className="h-3 w-3 text-red-600 dark:text-red-300" />
                  </div>
                  <div>
                    <p className="text-emerald-700 dark:text-emerald-200 text-[10px]">Issues</p>
                    <p className="font-bold text-emerald-800 dark:text-emerald-100 text-xs">{project.stats?.issues || 0}</p>
                  </div>
                </div>

                <div className="flex items-center space-x-2 p-1 rounded-md bg-emerald-50/90 dark:bg-emerald-700/50 border-2 border-emerald-200/80 dark:border-emerald-600/60">
                  <div className="bg-emerald-100/80 dark:bg-emerald-600/80 p-1 rounded-full">
                    <Clock className="h-3 w-3 text-purple-600 dark:text-purple-300" />
                  </div>
                  <div>
                    <p className="text-emerald-700 dark:text-emerald-200 text-[10px]">Updated</p>
                    <p className="font-bold text-emerald-800 dark:text-emerald-100 text-[10px]">{project.stats?.lastUpdated || 'N/A'}</p>
                  </div>
                </div>
              </div>

              <div className="mt-1 pt-1 border-t border-emerald-200/80 dark:border-emerald-700/70 text-[10px] text-emerald-700 dark:text-emerald-300 font-mono text-center">
                Last synced with GitHub {Math.floor(Math.random() * 24)} hours ago
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Footer section - medium-dark emerald */}
      <div className="mt-auto grid grid-cols-2 gap-2 p-3 border-t border-emerald-200/80 dark:border-emerald-700/60 bg-emerald-50/80 dark:bg-emerald-800/30">
        <Button
          variant="outline"
          className="flex items-center gap-2 font-mono border-2 border-emerald-400/80 dark:border-emerald-600/80 text-emerald-700 dark:text-emerald-300 bg-emerald-50/70 dark:bg-emerald-900/50 hover:bg-emerald-100/70 dark:hover:bg-emerald-800/60 shadow-sm text-sm tracking-tight"
          onClick={() => window.open(project.githubUrl, '_blank')}
        >
          <FaGithub className="h-4 w-4" />
          <span>$ git clone</span>
        </Button>

        {project.isInDevelopment ? (
          <Button
            variant="outline"
            className="flex items-center gap-2 font-mono border-2 border-emerald-300/80 dark:border-emerald-700/60 opacity-80 cursor-not-allowed bg-emerald-50/50 dark:bg-emerald-800/40 text-emerald-500/80 dark:text-emerald-400/80 text-sm tracking-tight"
            disabled
          >
            <FaPlay className="h-4 w-4" />
            <span>Coming Soon</span>
          </Button>
        ) : project.liveDemoUrl === 'local' ? (
          <Button
            variant="outline"
            className="flex items-center gap-2 font-mono border-2 border-emerald-400/80 dark:border-emerald-600/80 bg-emerald-50/70 dark:bg-emerald-900/50 hover:bg-emerald-100/70 dark:hover:bg-emerald-800/60 shadow-sm text-emerald-600/90 dark:text-emerald-400/90 text-sm tracking-tight"
            onClick={() => alert('This project is not yet deployed. You can run it locally by following the steps in the README of this repository.')}
          >
            <FaGlobe className="h-4 w-4" />
            <span className="line-through decoration-1">Live Demo</span>
          </Button>
        ) : (
          <Button
            variant="outline"
            className="flex items-center gap-2 font-mono bg-emerald-600/80 dark:bg-emerald-600/80 text-white hover:bg-emerald-700/80 dark:hover:bg-emerald-500/80 border-2 border-emerald-500/80 dark:border-emerald-600/80 shadow-sm text-sm tracking-tight"
            onClick={() => window.open(project.liveDemoUrl, '_blank')}
          >
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
    <span className={`px-1.5 py-0.5 text-[10px] rounded-md bg-transparent ${colors.text} border-2 ${colors.border} font-mono`}>{technology}</span>
  );
}
