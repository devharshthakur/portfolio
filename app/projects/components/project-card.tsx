/**
 * @file project-card.tsx
 * @description A reusable component for displaying project information in a card format.
 * This component is used in the projects page to showcase individual projects with their details,
 * including title, description, tech stack, and statistics.
 *
 * @component ProjectCard
 * @param {Object} props - The component props
 * @param {Project} props.project - The project data object containing title, description, and other details
 * @param {ProjectStats} props.projectStats - Statistics about the project (stars, forks)
 * @param {number} props.index - The index of the project in the list
 * @param {number} props.totalProjects - Total number of projects
 * @param {boolean} props.mounted - Whether the component is mounted
 * @param {string | undefined} props.resolvedTheme - The current theme (light/dark)
 *
 * @features
 * - Responsive design with different layouts for mobile and desktop
 * - Dynamic image loading with fallback placeholder
 * - Theme-aware styling using raw Tailwind CSS classes
 * - Interactive elements (links, buttons)
 * - Tech stack display with custom badges
 * - Project statistics display
 * - Development status indicator
 */

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Calendar, Star, GitFork, Github, ExternalLink, ArrowUpRight, Building, Code, Terminal, Clock } from 'lucide-react';
import Image from 'next/image';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Project } from '@/components/custom/home/project-section/data/projects.data';
import { getTechColor } from './util/tech-color-utils';
import { formatDate, getRowBackground, getRowBorderClass, shouldShowRunLocallyButton, getLinkButtonText } from './util/project-display-utils';

const DEFAULT_PLACEHOLDER = '/placeholder.svg';

interface ProjectStats {
  stars: number;
  forks: number;
}

interface ProjectCardProps {
  project: Project;
  projectStats?: ProjectStats;
  index: number;
  totalProjects: number;
  mounted: boolean;
  resolvedTheme?: string;
}

export function ProjectCard({ project, projectStats = { stars: 0, forks: 0 }, index, totalProjects, mounted, resolvedTheme }: ProjectCardProps) {
  const projectUrl = project.liveDemoUrl || project.githubUrl;
  const isLocalProject = project.liveDemoUrl === 'local';
  const shouldShowRunLocally = shouldShowRunLocallyButton(isLocalProject, project.title);

  const { tags } = project;
  const limitedTech = tags.slice(0, 6);
  const animationDelay = {
    animationDelay: `${index * 100}ms`,
  };

  // Get border class based on position
  const borderClass = getRowBorderClass(index, totalProjects);

  // Only show at most 6 technologies initially
  const hasTechOverflow = tags.length > 6;

  // Apply different background color for odd/even rows
  const isEven = index % 2 === 0;
  const rowBackground = getRowBackground(isEven);

  return (
    <article className="animate-fadeIn" style={animationDelay}>
      <div className={`${rowBackground} ${borderClass} border-0 hover:bg-emerald-50 dark:hover:bg-emerald-900/20 transition-colors duration-200`}>
        {/* Project Card Layout */}
        <div className="px-6 py-4 md:px-8 md:py-6 bg-linear-to-r from-emerald-50/80 via-white to-transparent dark:bg-linear-to-r dark:from-emerald-900/30 dark:via-emerald-900/10 dark:to-transparent">
          <div className="flex flex-col xl:flex-row gap-6 lg:gap-8">
            {/* Content Column */}
            <div className="flex-1 space-y-4 lg:space-y-6">
              {/* Header with Title and Stats */}
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-3">
                <div>
                  {/* Title */}
                  <h3 className="text-xl font-bold text-slate-800 dark:text-slate-100 group-hover:text-emerald-600 dark:group-hover:text-emerald-400 flex items-center gap-2">
                    {project.title}
                    {project.isInDevelopment && (
                      <span className="ml-2 inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-amber-50 text-amber-700 dark:bg-amber-900/30 dark:text-amber-200">
                        In Development
                      </span>
                    )}
                  </h3>

                  {/* Date and Duration */}
                  <div className="flex flex-wrap items-center gap-2 mt-1.5 text-xs text-slate-500 dark:text-slate-400">
                    <span className="flex items-center">
                      <Calendar className="mr-1 h-3 w-3" />
                      {formatDate(project.date)}
                    </span>
                    <span className="flex items-center">
                      <Clock className="mr-1 h-3 w-3" />
                      {project.duration}
                    </span>
                    {project.version && (
                      <span className="flex items-center">
                        <Code className="mr-1 h-3 w-3" />
                        {project.version}
                      </span>
                    )}
                  </div>
                </div>

                {/* Project Stats Box */}
                {project.githubUrl && (
                  <div className="flex items-center gap-3 py-1 px-3 rounded-lg bg-white/80 shadow-sm dark:bg-zinc-800/60 border border-slate-200 dark:border-zinc-700">
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center text-slate-700 hover:text-slate-900 dark:text-slate-300 dark:hover:text-slate-100 transition-colors"
                    >
                      <Github className="h-4 w-4 mr-1.5" />
                      <span className="text-xs font-medium">GitHub</span>
                    </a>
                    <div className="h-4 w-px bg-slate-200 dark:bg-zinc-600"></div>
                    <div className="flex items-center text-amber-600 dark:text-amber-400 font-medium">
                      <Star className="h-3.5 w-3.5 mr-1" />
                      <span className="text-xs">{projectStats.stars}</span>
                    </div>
                    <div className="flex items-center text-indigo-600 dark:text-indigo-400 font-medium">
                      <GitFork className="h-3.5 w-3.5 mr-1" />
                      <span className="text-xs">{projectStats.forks}</span>
                    </div>
                  </div>
                )}
              </div>

              {/* Short description */}
              <p className="text-sm md:text-base text-slate-600 dark:text-slate-300 line-clamp-2">{project.description}</p>

              {/* Image for small screens */}
              <div className="aspect-video overflow-hidden rounded-lg border-2 border-emerald-200 dark:border-emerald-800/60 bg-card relative group block hover:border-emerald-500 dark:hover:border-emerald-600 transition-colors shadow-md">
                {project.imageUrl ? (
                  <Link href={projectUrl} target="_blank" rel="noopener noreferrer" className="block w-full h-full">
                    <div className="absolute inset-0 bg-slate-900/0 group-hover:bg-slate-900/30 transition-colors z-10 flex items-center justify-center">
                      <span className="text-white opacity-0 group-hover:opacity-100 font-medium bg-slate-900/70 px-3 py-1.5 rounded-full transition-opacity flex items-center">
                        <ExternalLink className="w-3.5 h-3.5 mr-1.5" />
                        {getLinkButtonText(shouldShowRunLocally, !!project.liveDemoUrl)}
                      </span>
                    </div>
                    <Image
                      src={project.imageUrl}
                      alt={project.title}
                      className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-105"
                      width={600}
                      height={338}
                      priority={index < 2}
                    />
                  </Link>
                ) : (
                  <div className="flex items-center justify-center h-full bg-gradient-to-br from-white to-emerald-50 dark:from-emerald-900/20 dark:to-emerald-800/30 text-emerald-600 dark:text-emerald-300 p-4 text-center">
                    <div className="flex flex-col items-center">
                      <div className="w-16 h-16 rounded-full bg-emerald-100 shadow-sm dark:bg-emerald-700/50 flex items-center justify-center mb-2">
                        <Building className="w-8 h-8 text-emerald-600 dark:text-emerald-300" />
                      </div>
                      <span className="text-sm font-medium">{project.title}</span>
                    </div>
                  </div>
                )}
              </div>

              <div className="flex flex-wrap sm:flex-nowrap gap-3">
                {shouldShowRunLocally ? (
                  <Button
                    size="sm"
                    variant="outline"
                    asChild
                    className="border-2 border-emerald-300 dark:border-emerald-700 bg-emerald-50 dark:bg-emerald-900/40 hover:bg-emerald-100 dark:hover:bg-emerald-800/40 text-emerald-700 dark:text-emerald-300 shadow-sm font-medium"
                  >
                    <Link href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                      <Terminal className="mr-1.5 h-4 w-4" />
                      Run Locally
                    </Link>
                  </Button>
                ) : (
                  <Button
                    size="sm"
                    variant="outline"
                    asChild
                    className="border-emerald-300 dark:border-emerald-700 hover:bg-emerald-50 dark:hover:bg-emerald-900/30 shadow-sm font-medium text-emerald-700 dark:text-emerald-300"
                  >
                    <Link href={projectUrl} target="_blank" rel="noopener noreferrer">
                      {project.liveDemoUrl ? 'View Demo' : 'View Project'}
                      <ArrowUpRight className="ml-1.5 h-3.5 w-3.5" />
                    </Link>
                  </Button>
                )}

                {/* Technologies */}
                <div className="flex-1 flex flex-wrap gap-1.5 items-center">
                  {limitedTech.map((tech) => (
                    <Badge key={tech} variant="outline" className={`text-xs border ${getTechColor(tech)}`}>
                      {tech}
                    </Badge>
                  ))}
                  {hasTechOverflow && (
                    <Badge
                      variant="outline"
                      className="bg-gray-50 dark:bg-zinc-800/80 text-gray-700 dark:text-gray-300 border-gray-200 dark:border-zinc-700"
                    >
                      +{tags.length - 6} more
                    </Badge>
                  )}
                </div>
              </div>
            </div>

            {/* Long description (for large screens only) */}
            <div className="hidden xl:block w-96 h-full">
              <div className="relative pl-4 border-l-3 border-emerald-200 dark:border-emerald-800 h-full flex flex-col">
                <h4 className="text-base font-medium text-slate-800 dark:text-slate-100 mb-2 flex items-center">
                  <span className="w-2.5 h-2.5 bg-emerald-500 dark:bg-emerald-400 rounded-full mr-2"></span>
                  About this project
                </h4>
                <ScrollArea className="flex-1 pr-4 min-h-[400px]">
                  <div className="space-y-3 text-sm text-slate-600 dark:text-slate-400">
                    <p className="leading-relaxed">{project.longDescription}</p>

                    {/* Project details */}
                    <div className="mt-4 bg-gradient-to-br from-gray-50 to-white dark:from-zinc-900/80 dark:to-zinc-800/50 p-4 rounded-lg border border-slate-200 dark:border-zinc-700/50 shadow-sm">
                      <h5 className="font-medium text-slate-700 dark:text-slate-200 mb-3 flex items-center">
                        <span className="w-6 h-6 rounded-full bg-emerald-100 dark:bg-emerald-900/50 flex items-center justify-center mr-2">
                          <Calendar className="h-3.5 w-3.5 text-emerald-600 dark:text-emerald-400" />
                        </span>
                        Project Details
                      </h5>

                      <div className="grid grid-cols-1 gap-3">
                        <div className="flex items-center p-2 rounded-md bg-white/80 dark:bg-zinc-800/80 border border-slate-100 dark:border-zinc-700/80 hover:bg-emerald-50/50 dark:hover:bg-emerald-900/10 transition-colors group">
                          <span className="w-8 h-8 rounded-md bg-blue-50 dark:bg-blue-900/20 flex items-center justify-center mr-3 group-hover:bg-blue-100 dark:group-hover:bg-blue-900/30 transition-colors">
                            <Calendar className="h-4 w-4 text-blue-600 dark:text-blue-400" />
                          </span>
                          <div>
                            <p className="text-xs text-slate-500 dark:text-slate-400 font-medium">Release Date</p>
                            <p className="text-sm font-medium text-slate-700 dark:text-slate-200">{formatDate(project.date)}</p>
                          </div>
                        </div>

                        <div className="flex items-center p-2 rounded-md bg-white/80 dark:bg-zinc-800/80 border border-slate-100 dark:border-zinc-700/80 hover:bg-emerald-50/50 dark:hover:bg-emerald-900/10 transition-colors group">
                          <span className="w-8 h-8 rounded-md bg-purple-50 dark:bg-purple-900/20 flex items-center justify-center mr-3 group-hover:bg-purple-100 dark:group-hover:bg-purple-900/30 transition-colors">
                            <Clock className="h-4 w-4 text-purple-600 dark:text-purple-400" />
                          </span>
                          <div>
                            <p className="text-xs text-slate-500 dark:text-slate-400 font-medium">Development Time</p>
                            <p className="text-sm font-medium text-slate-700 dark:text-slate-200">{project.duration}</p>
                          </div>
                        </div>

                        {project.version && (
                          <div className="flex items-center p-2 rounded-md bg-white/80 dark:bg-zinc-800/80 border border-slate-100 dark:border-zinc-700/80 hover:bg-emerald-50/50 dark:hover:bg-emerald-900/10 transition-colors group">
                            <span className="w-8 h-8 rounded-md bg-amber-50 dark:bg-amber-900/20 flex items-center justify-center mr-3 group-hover:bg-amber-100 dark:group-hover:bg-amber-900/30 transition-colors">
                              <Code className="h-4 w-4 text-amber-600 dark:text-amber-400" />
                            </span>
                            <div>
                              <p className="text-xs text-slate-500 dark:text-slate-400 font-medium">Current Version</p>
                              <p className="text-sm font-medium text-slate-700 dark:text-slate-200">{project.version}</p>
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </ScrollArea>
                <div className="h-0.5 border-emerald-200 dark:border-emerald-800/60 w-full mt-4"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}
