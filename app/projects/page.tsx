/**
 * @file page.tsx
 * @description Projects page component that displays a list of all projects in the portfolio
 * Features a responsive header with statistics, project filtering, and detailed project cards
 *
 * @component ProjectsPage
 * @returns {JSX.Element} The complete projects page with header, stats, and project list
 */

'use client';
import { NoteDialog } from '@/components/custom/projects/components/dailogs/project-section-home-dailog';
import { ProjectCard } from '@/components/custom/projects/components/project-card';
import HeaderPattern from '@/components/custom/projects/components/svgs/HeaderPattern';
import ProjectGlow from '@/components/custom/projects/components/svgs/ProjectGlow';
import { ModeToggle } from '@/components/mode-toogle';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import projects from '@/data/projects.data';
import { ArrowRight, Building2, GitFork, Home, Loader2, Star } from 'lucide-react';
import { useTheme } from 'next-themes';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { FaGithub } from 'react-icons/fa';

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
    <main className="relative min-h-screen w-full overflow-hidden bg-gray-50 dark:bg-zinc-900">
      {/* Navigation */}
      <nav className="sticky top-0 right-0 left-0 z-50 flex items-center justify-between border-slate-200/50 bg-gray-50/90 p-4 backdrop-blur-sm dark:border-zinc-800/50 dark:bg-zinc-900/90">
        <Button
          asChild
          variant="outline"
          size="icon"
          className="border-emerald-400 text-emerald-700 hover:bg-emerald-200 dark:border-emerald-700 dark:text-emerald-400 dark:hover:bg-emerald-900/30">
          <Link href="/">
            <Home className="h-[1.2rem] w-[1.2rem] transition-all" />
            <span className="sr-only">Back to home</span>
          </Link>
        </Button>

        <ModeToggle
          className="border-emerald-400 hover:bg-emerald-200 dark:border-emerald-700 dark:hover:bg-emerald-900/30"
          iconClassName="text-emerald-700 dark:text-emerald-400"
        />
      </nav>

      <div className="relative z-10 container mx-auto max-w-6xl px-4 py-6 md:py-12">
        {/* Modern Header */}
        <header className="mb-8 md:mb-16">
          <div className="relative overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-md dark:border-zinc-800 dark:bg-zinc-900">
            {/* Background pattern */}
            <div className="absolute inset-0 opacity-5 dark:opacity-10">
              <HeaderPattern />
            </div>

            <div className="relative z-10 flex flex-col p-8 md:p-10">
              {/* Title and description */}
              <div className="flex flex-col gap-6 md:flex-row md:items-start md:justify-between">
                <div className="max-w-2xl">
                  <div className="mb-4 flex items-center gap-2">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-emerald-500 to-teal-600 text-white shadow-sm">
                      <Building2 className="h-5 w-5" />
                    </div>

                    <span className="ml-2 bg-gradient-to-r from-emerald-600 to-teal-500 bg-clip-text text-sm font-medium text-transparent dark:from-emerald-400 dark:to-teal-300">
                      Portfolio Showcase
                    </span>
                  </div>

                  <h1 className="mb-4 text-3xl font-bold md:text-4xl lg:text-5xl">
                    <span className="text-gray-900 dark:text-white">My </span>
                    <span className="bg-gradient-to-r from-emerald-600 via-teal-500 to-cyan-500 bg-clip-text text-transparent dark:from-emerald-400 dark:via-teal-300 dark:to-cyan-400">
                      Projects
                    </span>
                  </h1>

                  <p className="max-w-2xl text-base leading-relaxed text-gray-600 dark:text-gray-300">
                    A collection of my work showcasing various technologies and solutions. Each project reflects my problem-solving approach and
                    technical expertise.
                  </p>
                </div>

                {/* Stats cards */}
                <div className="grid w-full grid-cols-2 gap-3 md:w-auto md:min-w-[280px] md:grid-cols-2">
                  <div className="rounded-xl border border-emerald-100 bg-gradient-to-br from-emerald-50 to-white p-4 shadow-sm dark:border-emerald-800/50 dark:from-emerald-900/30 dark:to-zinc-900">
                    <div className="flex items-start justify-between">
                      <div>
                        <p className="mb-1 text-3xl font-bold text-emerald-600 dark:text-emerald-400">{projects.length}</p>
                        <span className="text-xs font-medium text-gray-500 dark:text-gray-400">Total Projects</span>
                      </div>
                      <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-emerald-100 dark:bg-emerald-800/50">
                        <Building2 className="h-5 w-5 text-emerald-600 dark:text-emerald-300" />
                      </div>
                    </div>
                  </div>

                  <div className="rounded-xl border border-indigo-100 bg-gradient-to-br from-indigo-50 to-white p-4 shadow-sm dark:border-indigo-800/50 dark:from-indigo-900/30 dark:to-zinc-900">
                    <div className="flex items-start justify-between">
                      <div>
                        <p className="mb-1 text-3xl font-bold text-indigo-600 dark:text-indigo-400">{totalStars}</p>
                        <span className="text-xs font-medium text-gray-500 dark:text-gray-400">GitHub Stars</span>
                      </div>
                      <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-100 dark:bg-indigo-800/50">
                        <Star className="h-5 w-5 text-indigo-600 dark:text-indigo-300" />
                      </div>
                    </div>
                  </div>

                  <div className="rounded-xl border border-cyan-100 bg-gradient-to-br from-cyan-50 to-white p-4 shadow-sm dark:border-cyan-800/50 dark:from-cyan-900/30 dark:to-zinc-900">
                    <div className="flex items-start justify-between">
                      <div>
                        <p className="mb-1 text-3xl font-bold text-cyan-600 dark:text-cyan-400">{totalForks}</p>
                        <span className="text-xs font-medium text-gray-500 dark:text-gray-400">GitHub Forks</span>
                      </div>
                      <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-cyan-100 dark:bg-cyan-800/50">
                        <GitFork className="h-5 w-5 text-cyan-600 dark:text-cyan-300" />
                      </div>
                    </div>
                  </div>

                  <div className="rounded-xl border border-amber-100 bg-gradient-to-br from-amber-50 to-white p-4 shadow-sm dark:border-amber-800/50 dark:from-amber-900/30 dark:to-zinc-900">
                    <div className="flex items-start justify-between">
                      <div>
                        <a
                          href="https://github.com/devharshthakur"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="mt-1 flex items-center text-sm font-medium text-amber-600 transition-colors hover:text-amber-700 dark:text-amber-400 dark:hover:text-amber-300">
                          View GitHub
                          <ArrowRight className="mr-2 h-3.5 w-3.5" />
                        </a>
                        <span className="text-xs font-medium text-gray-500 dark:text-gray-400">devharshthakur</span>
                      </div>
                      <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-amber-100 dark:bg-amber-800/50">
                        <FaGithub className="h-5 w-5 text-amber-600 dark:text-amber-300" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Categories */}
              <div className="mt-8 flex flex-wrap items-center gap-2">
                <Badge className="border-0 bg-gradient-to-r from-emerald-500 to-teal-500 px-3 py-1 text-white hover:from-emerald-600 hover:to-teal-600 dark:from-emerald-600 dark:to-teal-700 dark:hover:from-emerald-500 dark:hover:to-teal-600">
                  <span className="flex items-center">
                    <span className="mr-1.5 h-1.5 w-1.5 rounded-full bg-white opacity-80"></span>
                    {projects.length} Projects
                  </span>
                </Badge>
                <Badge className="border-0 bg-gradient-to-r from-indigo-500 to-blue-500 px-3 py-1 text-white hover:from-indigo-600 hover:to-blue-600 dark:from-indigo-600 dark:to-blue-700 dark:hover:from-indigo-500 dark:hover:to-blue-600">
                  Full Stack
                </Badge>
                <Badge className="border-0 bg-gradient-to-r from-purple-500 to-pink-500 px-3 py-1 text-white hover:from-purple-600 hover:to-pink-600 dark:from-purple-600 dark:to-pink-700 dark:hover:from-purple-500 dark:hover:to-pink-600">
                  Open Source
                </Badge>
                <Badge className="border-0 bg-gradient-to-r from-orange-500 to-amber-500 px-3 py-1 text-white hover:from-orange-600 hover:to-amber-600 dark:from-orange-600 dark:to-amber-700 dark:hover:from-orange-500 dark:hover:to-amber-600">
                  Web Development
                </Badge>
              </div>
            </div>
          </div>
        </header>

        <section className="mx-auto mb-6 w-full md:mb-10">
          <div className="flex flex-col justify-between gap-3 pb-4 sm:flex-row sm:items-center">
            <h2 className="flex items-center gap-3 text-xl font-bold text-gray-800 dark:text-gray-200">
              <span className="h-8 w-1 rounded-full bg-gradient-to-b from-emerald-400 to-emerald-600 dark:from-emerald-500 dark:to-emerald-700"></span>
              Project Showcase
            </h2>
            <NoteDialog />
          </div>
          <hr className="h-px border-none bg-gradient-to-r from-emerald-400/60 via-emerald-300/30 to-transparent dark:from-emerald-600/60 dark:via-emerald-600/20 dark:to-transparent" />
        </section>

        <section className="relative mx-auto">
          {/* Subtle glow effect */}
          <ProjectGlow />

          <article className="relative z-10 overflow-hidden rounded-xl border-2 border-gray-300 bg-white shadow-lg dark:border-gray-700 dark:bg-zinc-900">
            {loading ? (
              <div className="flex items-center justify-center py-20">
                <div className="flex flex-col items-center space-y-4">
                  <Loader2 className="h-10 w-10 animate-spin text-emerald-500" />
                  <p className="font-medium text-emerald-700 dark:text-emerald-300">Loading projects...</p>
                </div>
              </div>
            ) : (
              <ul className="relative z-10 divide-y-2 divide-gray-300 dark:divide-zinc-800">
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
