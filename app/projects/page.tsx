"use client";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import projects from "@/components/custom/home/project-section/data/projects.data";
import { Calendar, Star, GitFork, Github, Home } from "lucide-react";
import { useTheme } from "next-themes";
import { useState, useEffect } from "react";
import Image from "next/image";
import { LiveDemoButton } from "@/app/projects/components/live-demo-button";
import {
  getProjectImageProps,
  type ProjectImageProps,
} from "@/app/projects/functions/get-image-props";
import { NoteDialog } from "./components/dailogs/project-section-home-dailog";
import { TechBadge } from "./components/tech-badge";
import { ModeToggle } from "@/components/mode-toogle";
import { getProjectUrl } from "@/app/projects/functions/get-project-url";
import { ProjectLinkHoverIndicator } from "@/app/projects/components/util/get-project-link-icon";

interface ProjectStats {
  stars: number;
  forks: number;
}

function formatDate(dateString: string): string {
  return new Date(dateString).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

const DEFAULT_PLACEHOLDER = "/placeholder.svg";

export default function ProjectsPage() {
  const { resolvedTheme } = useTheme();
  const [projectStats, setProjectStats] = useState<ProjectStats[]>([]);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const stats = projects.map(() => ({
      stars: Math.floor(Math.random() * 50),
      forks: Math.floor(Math.random() * 20),
    }));
    setProjectStats(stats);
  }, []);

  return (
    <div className="relative min-h-screen w-full bg-gradient-to-b from-background to-emerald-50/20 dark:to-emerald-950/10 overflow-hidden">
      {/* Theme Toggle */}
      <div className="absolute top-4 right-4 z-50">
        <ModeToggle
          className="border-emerald-300 dark:border-emerald-700 hover:bg-emerald-100 dark:hover:bg-emerald-900/30"
          iconClassName="text-emerald-700 dark:text-emerald-400"
        />
      </div>

      {/* Home Button */}
      <div className="absolute top-4 left-4 z-50">
        <Button
          asChild
          variant="outline"
          size="icon"
          className="border-emerald-300 dark:border-emerald-700 hover:bg-emerald-100 dark:hover:bg-emerald-900/30 text-emerald-700 dark:text-emerald-400"
        >
          <Link href="/">
            <Home className="h-[1.2rem] w-[1.2rem] transition-all" />
            <span className="sr-only">Back to home</span>
          </Link>
        </Button>
      </div>

      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-48 h-48 bg-emerald-100 dark:bg-emerald-900/20 rounded-full opacity-20 blur-2xl"></div>
        <div className="absolute bottom-1/3 right-1/3 w-64 h-64 bg-emerald-200 dark:bg-emerald-800/20 rounded-full opacity-20 blur-2xl"></div>
      </div>

      <div className="container mx-auto px-4 py-12 relative z-10">
        <header className="mb-16">
          <div className="relative p-6 rounded-2xl bg-gradient-to-r from-emerald-50/80 to-transparent dark:from-emerald-950/50 dark:to-transparent border border-emerald-200/40 dark:border-emerald-800/40 backdrop-blur-sm shadow-sm">
            <div className="absolute top-0 right-0 h-24 w-24 bg-emerald-100/30 dark:bg-emerald-800/20 rounded-full -mt-6 -mr-6 blur-2xl"></div>

            <div className="flex items-start">
              <div className="w-1.5 h-12 bg-gradient-to-b from-emerald-400 to-emerald-600 dark:from-emerald-500 dark:to-emerald-700 rounded-full mr-4 mt-2 hidden md:block"></div>

              <div className="space-y-6 max-w-3xl relative">
                <div className="relative inline-block">
                  <span className="absolute -inset-1 w-full h-full bg-emerald-100 dark:bg-emerald-900/30 rounded-lg -skew-y-1 -z-10"></span>
                  <h1 className="text-4xl md:text-5xl font-bold tracking-tight relative z-10 text-slate-800 dark:text-slate-100">
                    My Projects
                  </h1>
                </div>

                <div className="flex gap-2 items-center">
                  <div className="w-8 h-0.5 bg-emerald-400 dark:bg-emerald-500"></div>
                  <span className="text-sm font-medium text-emerald-600 dark:text-emerald-400">
                    Portfolio Showcase
                  </span>
                </div>

                <div className="relative">
                  <p className="text-base md:text-lg text-slate-700 dark:text-slate-300 leading-relaxed pl-0 md:pl-2 border-l-2 border-emerald-200 dark:border-emerald-800 italic">
                    A comprehensive collection of my work, showcasing various
                    technologies and solutions I've built. Each project reflects
                    my problem-solving approach and technical expertise.
                  </p>
                </div>

                <div className="flex gap-2">
                  <Badge className="bg-emerald-100 text-emerald-800 dark:bg-emerald-900/40 dark:text-emerald-300 hover:bg-emerald-200 dark:hover:bg-emerald-800/60">
                    {projects.length} Projects
                  </Badge>
                  <Badge
                    variant="outline"
                    className="border-emerald-200 dark:border-emerald-800"
                  >
                    Full Stack
                  </Badge>
                  <Badge
                    variant="outline"
                    className="border-emerald-200 dark:border-emerald-800"
                  >
                    Open Source
                  </Badge>
                </div>
              </div>
            </div>
          </div>
        </header>

        <div className="w-full max-w-7xl mx-auto mb-10">
          <div className="flex items-center justify-between pb-4">
            <div className="flex items-center gap-3">
              <div className="w-1 h-8 bg-gradient-to-b from-emerald-400 to-emerald-600 dark:from-emerald-500 dark:to-emerald-700 rounded-full"></div>
              <h2 className="text-xl font-bold text-slate-800 dark:text-slate-200">
                Project List
              </h2>
            </div>
            <NoteDialog />
          </div>
          <div className="h-px bg-gradient-to-r from-emerald-300/80 via-emerald-300/40 to-transparent dark:from-emerald-700/80 dark:via-emerald-700/40 dark:to-transparent w-full"></div>
        </div>

        <div className="mx-auto max-w-7xl relative">
          {/* Subtle glow effect */}
          <div className="absolute -inset-1 bg-emerald-300/20 dark:bg-emerald-700/20 rounded-xl blur-xl opacity-50"></div>

          <div className="rounded-xl overflow-hidden border-2 border-emerald-300/80 dark:border-emerald-700/80 shadow-md bg-white/70 dark:bg-slate-900/70 backdrop-blur-sm ring-1 ring-emerald-200/50 dark:ring-emerald-800/50 relative z-10">
            {projects.map((project, index) => {
              const imageProps = getProjectImageProps(
                project,
                mounted,
                resolvedTheme,
              );
              const projectUrl = getProjectUrl(project);
              const imageSrc = imageProps.src || DEFAULT_PLACEHOLDER;
              return (
                <div key={index}>
                  <div className="bg-card transition-all duration-300 relative">
                    {/* Project header with gradient */}
                    <div className="px-6 py-4 md:px-8 md:py-5 border-b-2 border-emerald-200/60 dark:border-emerald-800/60 bg-gradient-to-r from-emerald-50/80 via-emerald-50/40 to-transparent dark:from-emerald-900/30 dark:via-emerald-900/10 dark:to-transparent">
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
                          <span className="flex items-center">
                            <Calendar className="mr-1 h-3 w-3" />
                            {formatDate(project.date)}
                          </span>
                          <span className="flex items-center">
                            <Star className="mr-1 h-3 w-3" />
                            {projectStats[index]?.stars || 0} stars
                          </span>
                          <span className="flex items-center">
                            <GitFork className="mr-1 h-3 w-3" />
                            {projectStats[index]?.forks || 0} forks
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
                            className="aspect-video overflow-hidden rounded-lg border-2 border-emerald-200/60 dark:border-emerald-800/60 bg-card relative group block hover:border-emerald-400 dark:hover:border-emerald-600 transition-colors"
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
                                <Badge
                                  variant="destructive"
                                  className="text-xs"
                                >
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
                                className="border-emerald-300 dark:border-emerald-700 hover:bg-emerald-100 dark:hover:bg-emerald-900/30"
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
                            className="lg:hidden aspect-video overflow-hidden rounded-lg border-2 border-emerald-200/60 dark:border-emerald-800/60 bg-card relative block group hover:border-emerald-400 dark:hover:border-emerald-600 transition-colors"
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
                                <Badge
                                  variant="destructive"
                                  className="text-xs"
                                >
                                  In Development
                                </Badge>
                              </div>
                            )}
                          </Link>

                          <div className="relative pl-3 border-l-2 border-emerald-200 dark:border-emerald-800">
                            <p className="text-base text-slate-600 dark:text-slate-300">
                              {project.longDescription}
                            </p>
                          </div>

                          {/* Tech Stack */}
                          <div className="pt-1">
                            <h3 className="text-sm font-semibold mb-2 text-slate-700 dark:text-slate-300 flex items-center">
                              <div className="w-2 h-2 bg-emerald-500 dark:bg-emerald-400 rounded-full mr-2"></div>
                              Tech Stack
                            </h3>
                            <div className="flex flex-wrap gap-2">
                              {project.tags.map((tag, tagIndex) => (
                                <TechBadge
                                  key={tagIndex}
                                  tech={tag}
                                  index={tagIndex}
                                />
                              ))}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  {index < projects.length - 1 && (
                    <div className="h-0.5 bg-emerald-200/40 dark:bg-emerald-800/40 w-full" />
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
