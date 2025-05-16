/**
 * @file page.tsx
 * @description Projects page component that displays a list of all projects in the portfolio
 * Features a responsive header with statistics, project filtering, and detailed project cards
 *
 * @component ProjectsPage
 * @returns {JSX.Element} The complete projects page with header, stats, and project list
 */

'use client';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import projects from '@/components/custom/home/project-section/data/projects.data';
import { Building2, Home, Loader2, ArrowRight, Code, Github, Star, GitFork } from 'lucide-react';
import { useTheme } from 'next-themes';
import { useState, useEffect } from 'react';
import { NoteDialog } from '@/components/custom/projects/components/dailogs/project-section-home-dailog';
import { ModeToggle } from '@/components/mode-toogle';
import { ProjectCard } from '@/components/custom/projects/components/project-card';
import HeaderPattern from '@/components/custom/projects/components/svgs/HeaderPattern';
import ProjectGlow from '@/components/custom/projects/components/svgs/ProjectGlow';

interface ProjectStats {
  stars: number;
  forks: number;
}

export default function ProjectsPage() {
  const { resolvedTheme } = useTheme();
  const [projectStats, setProjectStats] = useState<ProjectStats[]>([]);
  const [mounted, setMounted] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setMounted(true);
    // Simulate loading project stats
    const loadStats = () => {
      // Generate random stats for demo purposes
      const stats = projects.map(() => ({
        stars: Math.floor(Math.random() * 50),
        forks: Math.floor(Math.random() * 20),
      }));
      setProjectStats(stats);
      setLoading(false);
    };
    // Small delay to ensure DOM is ready
    const timer = setTimeout(loadStats, 300);
    return () => clearTimeout(timer);
  }, []);

  // Calculate total stars and forks for stats display
  const totalStars = projectStats.reduce((acc, stat) => acc + stat.stars, 0);
  const totalForks = projectStats.reduce((acc, stat) => acc + stat.forks, 0);

  return (
    <main className="relative min-h-screen w-full bg-gray-50 dark:bg-zinc-900 overflow-hidden">
      {/* Navigation */}
      <nav className="sticky top-0 left-0 right-0 flex justify-between items-center z-50 p-4 bg-gray-50/90 dark:bg-zinc-900/90 backdrop-blur-sm border-slate-200/50 dark:border-zinc-800/50">
        <Button
          asChild
          variant="outline"
          size="icon"
          className="border-emerald-400 dark:border-emerald-700 hover:bg-emerald-200 dark:hover:bg-emerald-900/30 text-emerald-700 dark:text-emerald-400"
        >
          <Link href="/">
            <Home className="h-[1.2rem] w-[1.2rem] transition-all" />
            <span className="sr-only">Back to home</span>
          </Link>
        </Button>

        <ModeToggle
          className="border-emerald-400 dark:border-emerald-700 hover:bg-emerald-200 dark:hover:bg-emerald-900/30"
          iconClassName="text-emerald-700 dark:text-emerald-400"
        />
      </nav>

      <div className="container max-w-6xl mx-auto px-4 py-6 md:py-12 relative z-10">
        {/* Modern Header */}
        <header className="mb-8 md:mb-16">
          <div className="relative rounded-2xl overflow-hidden bg-white dark:bg-zinc-900 shadow-md border border-gray-100 dark:border-zinc-800">
            {/* Background pattern */}
            <div className="absolute inset-0 opacity-5 dark:opacity-10">
              <HeaderPattern />
            </div>

            <div className="relative z-10 flex flex-col p-8 md:p-10">
              {/* Title and description */}
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6">
                <div className="max-w-2xl">
                  <div className="flex items-center gap-2 mb-4">
                    <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-gradient-to-br from-emerald-500 to-teal-600 text-white shadow-sm">
                      <Code className="w-5 h-5" />
                    </div>

                    <span className="text-sm font-medium bg-clip-text text-transparent bg-gradient-to-r from-emerald-600 to-teal-500 dark:from-emerald-400 dark:to-teal-300 ml-2">
                      Portfolio Showcase
                    </span>
                  </div>

                  <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
                    <span className="text-gray-900 dark:text-white">My </span>
                    <span className="bg-clip-text text-transparent bg-gradient-to-r from-emerald-600 via-teal-500 to-cyan-500 dark:from-emerald-400 dark:via-teal-300 dark:to-cyan-400">
                      Projects
                    </span>
                  </h1>

                  <p className="text-base text-gray-600 dark:text-gray-300 leading-relaxed max-w-2xl">
                    A collection of my work showcasing various technologies and solutions. Each project reflects my problem-solving approach and
                    technical expertise.
                  </p>
                </div>

                {/* Stats cards */}
                <div className="grid grid-cols-2 md:grid-cols-2 gap-3 w-full md:w-auto md:min-w-[280px]">
                  <div className="p-4 rounded-xl bg-gradient-to-br from-emerald-50 to-white dark:from-emerald-900/30 dark:to-zinc-900 border border-emerald-100 dark:border-emerald-800/50 shadow-sm">
                    <div className="flex items-start justify-between">
                      <div>
                        <p className="text-3xl font-bold text-emerald-600 dark:text-emerald-400 mb-1">{projects.length}</p>
                        <span className="text-xs text-gray-500 dark:text-gray-400 font-medium">Total Projects</span>
                      </div>
                      <div className="w-10 h-10 rounded-lg flex items-center justify-center bg-emerald-100 dark:bg-emerald-800/50">
                        <Building2 className="h-5 w-5 text-emerald-600 dark:text-emerald-300" />
                      </div>
                    </div>
                  </div>

                  <div className="p-4 rounded-xl bg-gradient-to-br from-indigo-50 to-white dark:from-indigo-900/30 dark:to-zinc-900 border border-indigo-100 dark:border-indigo-800/50 shadow-sm">
                    <div className="flex items-start justify-between">
                      <div>
                        <p className="text-3xl font-bold text-indigo-600 dark:text-indigo-400 mb-1">{totalStars}</p>
                        <span className="text-xs text-gray-500 dark:text-gray-400 font-medium">GitHub Stars</span>
                      </div>
                      <div className="w-10 h-10 rounded-lg flex items-center justify-center bg-indigo-100 dark:bg-indigo-800/50">
                        <Star className="h-5 w-5 text-indigo-600 dark:text-indigo-300" />
                      </div>
                    </div>
                  </div>

                  <div className="p-4 rounded-xl bg-gradient-to-br from-cyan-50 to-white dark:from-cyan-900/30 dark:to-zinc-900 border border-cyan-100 dark:border-cyan-800/50 shadow-sm">
                    <div className="flex items-start justify-between">
                      <div>
                        <p className="text-3xl font-bold text-cyan-600 dark:text-cyan-400 mb-1">{totalForks}</p>
                        <span className="text-xs text-gray-500 dark:text-gray-400 font-medium">GitHub Forks</span>
                      </div>
                      <div className="w-10 h-10 rounded-lg flex items-center justify-center bg-cyan-100 dark:bg-cyan-800/50">
                        <GitFork className="h-5 w-5 text-cyan-600 dark:text-cyan-300" />
                      </div>
                    </div>
                  </div>

                  <div className="p-4 rounded-xl bg-gradient-to-br from-amber-50 to-white dark:from-amber-900/30 dark:to-zinc-900 border border-amber-100 dark:border-amber-800/50 shadow-sm">
                    <div className="flex items-start justify-between">
                      <div>
                        <a
                          href="https://github.com/devharshthakur"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center text-amber-600 hover:text-amber-700 dark:text-amber-400 dark:hover:text-amber-300 transition-colors text-sm font-medium mt-1"
                        >
                          View GitHub
                          <ArrowRight className="mr-2 h-3.5 w-3.5" />
                        </a>
                        <span className="text-xs text-gray-500 dark:text-gray-400 font-medium">@devharshthakur</span>
                      </div>
                      <div className="w-10 h-10 rounded-lg flex items-center justify-center bg-amber-100 dark:bg-amber-800/50">
                        <Github className="h-5 w-5 text-amber-600 dark:text-amber-300" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Categories */}
              <div className="flex flex-wrap gap-2 items-center mt-8">
                <Badge className="bg-gradient-to-r from-emerald-500 to-teal-500 dark:from-emerald-600 dark:to-teal-700 text-white hover:from-emerald-600 hover:to-teal-600 dark:hover:from-emerald-500 dark:hover:to-teal-600 border-0 px-3 py-1">
                  <span className="flex items-center">
                    <span className="w-1.5 h-1.5 bg-white rounded-full mr-1.5 opacity-80"></span>
                    {projects.length} Projects
                  </span>
                </Badge>
                <Badge className="bg-gradient-to-r from-indigo-500 to-blue-500 dark:from-indigo-600 dark:to-blue-700 text-white hover:from-indigo-600 hover:to-blue-600 dark:hover:from-indigo-500 dark:hover:to-blue-600 border-0 px-3 py-1">
                  Full Stack
                </Badge>
                <Badge className="bg-gradient-to-r from-purple-500 to-pink-500 dark:from-purple-600 dark:to-pink-700 text-white hover:from-purple-600 hover:to-pink-600 dark:hover:from-purple-500 dark:hover:to-pink-600 border-0 px-3 py-1">
                  Open Source
                </Badge>
                <Badge className="bg-gradient-to-r from-orange-500 to-amber-500 dark:from-orange-600 dark:to-amber-700 text-white hover:from-orange-600 hover:to-amber-600 dark:hover:from-orange-500 dark:hover:to-amber-600 border-0 px-3 py-1">
                  Web Development
                </Badge>
              </div>
            </div>
          </div>
        </header>

        <section className="w-full mx-auto mb-6 md:mb-10">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4">
            <h2 className="text-xl font-bold text-gray-800 dark:text-gray-200 flex items-center gap-3">
              <span className="w-1 h-8 bg-gradient-to-b from-emerald-400 to-emerald-600 dark:from-emerald-500 dark:to-emerald-700 rounded-full"></span>
              Project Showcase
            </h2>
            <NoteDialog />
          </div>
          <hr className="bg-gradient-to-r from-emerald-400/60 via-emerald-300/30 to-transparent dark:from-emerald-600/60 dark:via-emerald-600/20 dark:to-transparent h-px border-none" />
        </section>

        <section className="mx-auto relative">
          {/* Subtle glow effect */}
          <ProjectGlow />

          <article className="rounded-xl overflow-hidden border border-gray-200 dark:border-gray-700 shadow-sm bg-white dark:bg-zinc-900 relative z-10">
            {loading ? (
              <div className="py-20 flex items-center justify-center">
                <div className="flex flex-col items-center space-y-4">
                  <Loader2 className="h-10 w-10 text-emerald-500 animate-spin" />
                  <p className="text-emerald-700 dark:text-emerald-300 font-medium">Loading projects...</p>
                </div>
              </div>
            ) : (
              <ul className="divide-y divide-gray-200 dark:divide-zinc-800 relative z-10">
                {projects.map((project, index) => (
                  <li key={index}>
                    <ProjectCard
                      project={project}
                      projectStats={projectStats[index]}
                      index={index}
                      totalProjects={projects.length}
                      mounted={mounted}
                      resolvedTheme={resolvedTheme}
                    />
                  </li>
                ))}
              </ul>
            )}
          </article>
        </section>
      </div>
    </main>
  );
}
