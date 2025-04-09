"use client";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import projects, { type Project } from "@/data/projects.data";
import { Calendar, Star, GitFork, Github } from "lucide-react";
import { useTheme } from "next-themes";
import { useState, useEffect } from "react";
import Image from "next/image";
import { LiveDemoButton } from "@/app/projects/components/live-demo-button";
import {
  getProjectImageProps,
  type ProjectImageProps,
} from "@/app/projects/functions/get-image-props";
import { NoteDialog } from "./components/note-dialog";
import { TechBadge } from "./components/tech-badge";
import { ModeToggle } from "@/components/mode-toogle";

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
    <div className="min-h-screen bg-gradient-to-b from-background to-secondary/10 py-12">
      {/* Theme Toggle */}
      <div className="absolute top-4 right-4 z-50">
        <ModeToggle />
      </div>

      <div className="container mx-auto px-4">
        <header className="mb-16">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-8">
            <div className="space-y-5 max-w-2xl">
              <div className="relative">
                <h1 className="text-4xl md:text-5xl font-bold md:pl-2 tracking-tight">
                  My Projects
                  <div className="w-16 h-px bg-primary/30 md:ml-2 mt-2"></div>
                </h1>
              </div>

              <p className="text-base md:text-lg text-muted-foreground leading-relaxed md:pl-2">
                A comprehensive collection of my work, showcasing various
                technologies and solutions I've built. Each project reflects my
                problem-solving approach and technical expertise.
              </p>
            </div>
            <div className="mt-2 md:mt-0">
              <Button
                variant="outline"
                size="sm"
                asChild
                className="text-xs transition-all hover:translate-x-1 hover:shadow-sm"
              >
                <Link href="/" className="flex items-center gap-2">
                  <span>Back to Home</span>
                </Link>
              </Button>
            </div>
          </div>
        </header>

        <div className="w-full max-w-7xl mx-auto mb-10">
          <div className="flex items-center justify-between pb-2">
            <h2 className="text-xl font-bold">Project List</h2>
            <NoteDialog />
          </div>
          <div className="h-px bg-border/60 w-full"></div>
        </div>

        <div className="mx-auto max-w-7xl">
          <div className="rounded-xl overflow-hidden border border-border/60 shadow-sm">
            {projects.map((project, index) => {
              const imageProps = getProjectImageProps(
                project,
                mounted,
                resolvedTheme,
              );
              return (
                <div key={index}>
                  <div className="p-6 bg-card hover:bg-muted/20 transition-colors">
                    <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
                      {/* Project Image - Hidden on mobile, shown on larger screens */}
                      <div className="hidden lg:block lg:col-span-2">
                        <div className="aspect-video overflow-hidden rounded-lg border bg-card">
                          <Image
                            src={imageProps.src}
                            alt={project.title}
                            width={600}
                            height={340}
                            className={`h-full w-full ${imageProps.objectFitClass} transition-transform duration-300 hover:scale-105`}
                          />
                        </div>
                      </div>

                      {/* Project Details */}
                      <div className="lg:col-span-3 space-y-4">
                        <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4">
                          <div>
                            <div className="flex items-center gap-2 flex-wrap">
                              <h2 className="text-2xl font-bold font-mono group-hover:text-primary transition-colors">
                                {project.title}
                              </h2>
                              {project.isInDevelopment && (
                                <Badge
                                  variant="destructive"
                                  className="text-xs"
                                >
                                  In Development
                                </Badge>
                              )}
                            </div>
                            <div className="flex items-center flex-wrap text-sm text-muted-foreground mt-1 gap-4">
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
                          <div className="flex space-x-2">
                            <Button size="sm" variant="outline" asChild>
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
                        <div className="lg:hidden aspect-video overflow-hidden rounded-lg border bg-card">
                          <Image
                            src={imageProps.src}
                            alt={project.title}
                            width={400}
                            height={225}
                            className={`h-full w-full ${imageProps.objectFitClass}`}
                          />
                        </div>

                        <p className="text-base">{project.longDescription}</p>

                        {/* Tech Stack */}
                        <div>
                          <h3 className="text-sm font-semibold mb-2">
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
                  {index < projects.length - 1 && (
                    <div className="h-px bg-border/40 w-full" />
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
