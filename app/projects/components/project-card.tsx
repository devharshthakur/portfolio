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
 * - Theme-aware styling using projectTheme
 * - Interactive elements (links, buttons)
 * - Tech stack display with custom badges
 * - Project statistics display
 * - Development status indicator
 */

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Calendar, Star, GitFork, Github } from "lucide-react";
import Image from "next/image";
import { LiveDemoButton } from "@/app/projects/components/live-demo-button";
import { getProjectImageProps } from "@/app/projects/functions/get-image-props";
import { TechBadge } from "./tech-badge";
import { getProjectUrl } from "@/app/projects/functions/get-project-url";
import { ProjectLinkHoverIndicator } from "@/app/projects/components/util/get-project-link-icon";
import { projectTheme } from "../config/theme";
import projects from "@/components/custom/home/project-section/data/projects.data";

const DEFAULT_PLACEHOLDER = "/placeholder.svg";

interface ProjectStats {
  stars: number;
  forks: number;
}

interface ProjectCardProps {
  project: (typeof projects)[0];
  projectStats?: ProjectStats;
  index: number;
  totalProjects: number;
  mounted: boolean;
  resolvedTheme: string | undefined;
}

function formatDate(dateString: string): string {
  return new Date(dateString).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export function ProjectCard({
  project,
  projectStats,
  index,
  totalProjects,
  mounted,
  resolvedTheme,
}: ProjectCardProps) {
  const imageProps = getProjectImageProps(project, mounted, resolvedTheme);
  const projectUrl = getProjectUrl(project);
  const imageSrc = imageProps.src || DEFAULT_PLACEHOLDER;

  return (
    <div
      className={`border-y-2 ${projectTheme.border.light.secondary} ${projectTheme.border.dark.secondary}`}
    >
      <div className="bg-card transition-all duration-300 relative">
        {/* Project header with gradient */}
        <div
          className={`px-6 py-4 md:px-8 md:py-5 ${projectTheme.colors.background.light.gradient} ${projectTheme.colors.background.dark.gradient}`}
        >
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
            <div className="flex items-center gap-2 flex-wrap">
              <h2 className="text-xl md:text-2xl font-bold font-mono text-slate-800 dark:text-slate-200 transition-colors">
                {project.title}
              </h2>
              {project.isInDevelopment && (
                <Badge variant="destructive" className="text-xs">
                  In Development
                </Badge>
              )}
            </div>
            <div className="flex items-center flex-wrap text-sm text-slate-500 dark:text-slate-400 gap-4">
              <span className="flex items-center bg-purple-50 dark:bg-purple-950/30 px-2 py-1 rounded-md">
                <Calendar className="mr-1 h-3 w-3 text-purple-600 dark:text-purple-400" />
                <span className="text-purple-700 dark:text-purple-300 font-medium">
                  {formatDate(project.date)}
                </span>
              </span>
              <span className="flex items-center bg-emerald-50 dark:bg-emerald-950/30 px-2 py-1 rounded-md">
                <Star className="mr-1 h-3 w-3 text-emerald-600 dark:text-emerald-400" />
                <span className="text-emerald-700 dark:text-emerald-300 font-medium">
                  {projectStats?.stars || 0} stars
                </span>
              </span>
              <span className="flex items-center bg-blue-50 dark:bg-blue-950/30 px-2 py-1 rounded-md">
                <GitFork className="mr-1 h-3 w-3 text-blue-600 dark:text-blue-400" />
                <span className="text-blue-700 dark:text-blue-300 font-medium">
                  {projectStats?.forks || 0} forks
                </span>
              </span>
            </div>
          </div>
        </div>

        {/* Project content */}
        <div className="p-6 md:p-8">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
            <div className="hidden lg:block lg:col-span-2">
              <Link
                href={projectUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={`aspect-video overflow-hidden rounded-lg border-2 ${projectTheme.border.light.secondary} ${projectTheme.border.dark.secondary} bg-card relative group block ${projectTheme.hover.light.border} ${projectTheme.hover.dark.border} transition-colors`}
              >
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity z-10 flex items-center justify-center">
                  <ProjectLinkHoverIndicator project={project} />
                </div>
                <Image
                  src={imageSrc}
                  alt={project.title}
                  width={600}
                  height={340}
                  className={`h-full w-full ${imageProps.objectFitClass} transition-transform duration-300 group-hover:scale-105`}
                />
                {project.isInDevelopment && (
                  <div className="absolute top-3 left-3 z-20">
                    <Badge variant="destructive" className="text-xs">
                      In Development
                    </Badge>
                  </div>
                )}
              </Link>
            </div>

            {/* Project Details */}
            <div className="lg:col-span-3 space-y-5">
              <div className="flex justify-end">
                <div className="flex space-x-2">
                  <Button
                    size="sm"
                    variant="outline"
                    asChild
                    className={`${projectTheme.colors.primary.light.border} ${projectTheme.colors.primary.dark.border} ${projectTheme.colors.primary.light.bgHoverButton} ${projectTheme.colors.primary.dark.bgHoverButton}`}
                  >
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center"
                    >
                      <Github className="mr-1 h-4 w-4" />
                      Code
                    </a>
                  </Button>
                  <LiveDemoButton project={project} />
                </div>
              </div>

              {/* Project image for mobile only */}
              <Link
                href={projectUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={`lg:hidden aspect-video overflow-hidden rounded-lg border-2 ${projectTheme.border.light.secondary} ${projectTheme.border.dark.secondary} bg-card relative block group ${projectTheme.hover.light.border} ${projectTheme.hover.dark.border} transition-colors`}
              >
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity z-10 flex items-center justify-center">
                  <ProjectLinkHoverIndicator project={project} />
                </div>
                <Image
                  src={imageSrc}
                  alt={project.title}
                  width={400}
                  height={225}
                  className={`h-full w-full ${imageProps.objectFitClass} transition-transform duration-300 group-hover:scale-105`}
                />
                {project.isInDevelopment && (
                  <div className="absolute top-3 left-3 z-10">
                    <Badge variant="destructive" className="text-xs">
                      In Development
                    </Badge>
                  </div>
                )}
              </Link>

              <div
                className={`relative pl-3 border-l-2 ${projectTheme.colors.primary.light.borderLight} ${projectTheme.colors.primary.dark.borderLight}`}
              >
                <p className="text-base text-slate-600 dark:text-slate-300">
                  {project.longDescription}
                </p>
              </div>

              {/* Tech Stack */}
              <div className="pt-1">
                <h3 className="text-sm font-semibold mb-2 text-slate-700 dark:text-slate-300 flex items-center">
                  <div
                    className={`w-2 h-2 ${projectTheme.colors.primary.light.accent} ${projectTheme.colors.primary.dark.accent} rounded-full mr-2`}
                  />
                  Tech Stack
                </h3>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIndex) => (
                    <TechBadge key={tagIndex} tech={tag} index={tagIndex} />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {index < totalProjects - 1 && (
        <div
          className={`h-0.5 ${projectTheme.border.light.secondary} ${projectTheme.border.dark.secondary} w-full`}
        />
      )}
    </div>
  );
}
