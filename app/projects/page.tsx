"use client";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import projects from "@/components/custom/home/project-section/data/projects.data";
import { Building, Building2, Home, Sparkles } from "lucide-react";
import { useTheme } from "next-themes";
import { useState, useEffect } from "react";
import { NoteDialog } from "./components/dailogs/project-section-home-dailog";
import { ModeToggle } from "@/components/mode-toogle";
import { projectTheme } from "./config/theme";
import { ProjectCard } from "./components/project-card";

interface ProjectStats {
  stars: number;
  forks: number;
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
    <main className="relative min-h-screen w-full bg-linear-to-b from-background to-emerald-100/20 dark:to-emerald-950/10 overflow-hidden">
      {/* Controls - Fixed to top on mobile */}
      <nav className="sticky top-0 left-0 right-0 flex justify-between items-center z-50 p-4 bg-background/80 backdrop-blur-xs border-b border-slate-200/50 dark:border-slate-800/50">
        <Button
          asChild
          variant="outline"
          size="icon"
          className={`${projectTheme.colors.primary.light.border} ${projectTheme.colors.primary.dark.border} ${projectTheme.colors.primary.light.bgHoverButton} ${projectTheme.colors.primary.dark.bgHoverButton} ${projectTheme.colors.primary.light.text} ${projectTheme.colors.primary.dark.text}`}
        >
          <Link href="/">
            <Home className="h-[1.2rem] w-[1.2rem] transition-all" />
            <span className="sr-only">Back to home</span>
          </Link>
        </Button>

        <ModeToggle
          className={`${projectTheme.colors.primary.light.border} ${projectTheme.colors.primary.dark.border} ${projectTheme.colors.primary.light.bgHoverButton} ${projectTheme.colors.primary.dark.bgHoverButton}`}
          iconClassName={`${projectTheme.colors.primary.light.text} ${projectTheme.colors.primary.dark.text}`}
        />
      </nav>

      {/* Background decorative elements */}
      <span
        className={`fixed -z-10 top-1/4 left-1/4 w-48 h-48 ${projectTheme.colors.background.light.secondary} ${projectTheme.colors.background.dark.secondary} rounded-full ${projectTheme.opacity.subtle} blur-2xl`}
        aria-hidden="true"
      />
      <span
        className={`fixed -z-10 bottom-1/3 right-1/3 w-64 h-64 ${projectTheme.colors.background.light.tertiary} ${projectTheme.colors.background.dark.tertiary} rounded-full ${projectTheme.opacity.subtle} blur-2xl`}
        aria-hidden="true"
      />

      <div className="container max-w-6xl mx-auto px-4 py-6 md:py-12 relative z-10">
        <header className="mb-8 md:mb-16">
          <section
            className={`relative p-6 md:p-8 rounded-xl md:rounded-2xl ${projectTheme.colors.background.light.gradient} ${projectTheme.colors.background.dark.gradient} ${projectTheme.border.light.subtle} ${projectTheme.border.dark.subtle} backdrop-blur-xs shadow-md overflow-hidden`}
          >
            {/* Decorative elements */}
            <span
              className={`absolute top-0 right-0 h-32 w-32 ${projectTheme.colors.background.light.blur} ${projectTheme.colors.background.dark.blur} rounded-full -mt-8 -mr-8 blur-3xl opacity-70`}
              aria-hidden="true"
            />
            <span
              className={`absolute bottom-0 left-1/4 h-40 w-40 ${projectTheme.colors.primary.light.gradient.from} ${projectTheme.colors.primary.dark.gradient.from} rounded-full opacity-10 blur-3xl -mb-10`}
              aria-hidden="true"
            />

            <div className="flex flex-col md:flex-row md:items-start gap-6">
              <div className="space-y-6 w-full max-w-3xl">
                {/* Title with accent */}
                <div className="relative">
                  <div className="relative z-10">
                    <div className="flex items-center gap-2 mb-2">
                      <span
                        className={`hidden sm:flex items-center justify-center w-8 h-8 rounded-full bg-linear-to-br ${projectTheme.colors.primary.light.gradient.from} ${projectTheme.colors.primary.light.gradient.to} ${projectTheme.colors.primary.dark.gradient.from} ${projectTheme.colors.primary.dark.gradient.to} shadow-md`}
                      >
                        <Building2 className="w-4 h-4 text-white" />
                      </span>
                      <span
                        className={`inline-block py-1 px-3 rounded-full text-sm font-medium bg-slate-100/80 dark:bg-slate-800/80 ${projectTheme.colors.primary.light.text} ${projectTheme.colors.primary.dark.text}`}
                      >
                        Portfolio Showcase
                      </span>
                    </div>

                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-slate-800 dark:text-slate-100 mb-1">
                      <span className="inline-block">My</span>{" "}
                      <span
                        className={`inline-block relative bg-clip-text text-transparent bg-linear-to-r ${projectTheme.colors.primary.light.gradient.from} ${projectTheme.colors.primary.light.gradient.to} ${projectTheme.colors.primary.dark.gradient.from} ${projectTheme.colors.primary.dark.gradient.to}`}
                      >
                        Projects
                        <span
                          className={`absolute -bottom-1 left-0 w-full h-1 bg-linear-to-r ${projectTheme.colors.primary.light.gradient.from} ${projectTheme.colors.primary.light.gradient.to} ${projectTheme.colors.primary.dark.gradient.from} ${projectTheme.colors.primary.dark.gradient.to} rounded-full`}
                          aria-hidden="true"
                        />
                      </span>
                    </h1>

                    <p className="text-sm text-slate-500 dark:text-slate-400 mt-2">
                      Showcasing {projects.length} innovative solutions
                    </p>
                  </div>
                </div>

                {/* Description */}
                <div className="relative mt-8">
                  <blockquote
                    className={`relative p-4 md:p-5 rounded-lg bg-slate-50/50 dark:bg-slate-900/50 border-l-4 ${projectTheme.colors.primary.light.border} ${projectTheme.colors.primary.dark.border}`}
                  >
                    <p className="text-sm md:text-base text-slate-700 dark:text-slate-300 leading-relaxed italic">
                      A comprehensive collection of my work, showcasing various
                      technologies and solutions I've built. Each project
                      reflects my problem-solving approach and technical
                      expertise.
                    </p>
                  </blockquote>
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 items-center mt-4">
                  <Badge
                    className={`${projectTheme.colors.primary.light.bg} text-emerald-800 ${projectTheme.colors.primary.dark.bg} dark:text-emerald-300 ${projectTheme.colors.primary.light.bgHover} ${projectTheme.colors.primary.dark.bgHover}`}
                  >
                    {projects.length} Projects
                  </Badge>
                  <Badge
                    variant="outline"
                    className={`${projectTheme.colors.primary.light.borderLight} ${projectTheme.colors.primary.dark.borderLight}`}
                  >
                    Full Stack
                  </Badge>
                  <Badge
                    variant="outline"
                    className={`${projectTheme.colors.primary.light.borderLight} ${projectTheme.colors.primary.dark.borderLight}`}
                  >
                    Open Source
                  </Badge>
                </div>
              </div>
            </div>
          </section>
        </header>

        <section className="w-full mx-auto mb-6 md:mb-10">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4">
            <h2 className="text-xl font-bold text-slate-800 dark:text-slate-200 flex items-center gap-3">
              <span
                className={`w-1 h-8 ${projectTheme.colors.primary.light.gradient.bg} ${projectTheme.colors.primary.dark.gradient.bg} rounded-full`}
                aria-hidden="true"
              />
              Project List
            </h2>
            <NoteDialog />
          </div>
          <hr
            className={`${projectTheme.colors.effects.light.fade} ${projectTheme.colors.effects.dark.fade}`}
          />
        </section>

        <section className="mx-auto relative">
          {/* Subtle glow effect */}
          <span
            className={`absolute -inset-1 ${projectTheme.colors.effects.light.glow} ${projectTheme.colors.effects.dark.glow} rounded-xl blur-xl opacity-50`}
            aria-hidden="true"
          />

          <article
            className={`rounded-xl overflow-hidden border-2 ${projectTheme.border.light.primary} ${projectTheme.border.dark.primary} shadow-md ${projectTheme.colors.background.light.primary} ${projectTheme.colors.background.dark.primary} backdrop-blur-xs ${projectTheme.shadow.light} ${projectTheme.shadow.dark} relative z-10 backdrop-saturate-[1.2] backdrop-brightness-[1.02] backdrop-contrast-[1.05]`}
          >
            {/* Green tint overlay */}
            <div className="absolute inset-0 bg-green-500/10 dark:bg-green-800/20 mix-blend-multiply pointer-events-none"></div>

            <ul className="divide-y divide-slate-200/50 dark:divide-slate-800/50 relative z-10">
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
          </article>
        </section>
      </div>
    </main>
  );
}
