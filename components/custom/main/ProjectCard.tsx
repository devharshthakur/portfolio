"use client";

import Link from "next/link";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Icons } from "@/data/icons/icon.export";

interface ProjectCardProps {
  title: string;
  description: string;
  githubUrl: string;
  liveDemoUrl: string;
  techStack?: string[];
  stats?: {
    stars: number;
    forks: number;
    issues: number;
    lastUpdated?: string;
  };
}

export function ProjectCard({
  title,
  description,
  githubUrl,
  liveDemoUrl,
  techStack = ["TypeScript", "React", "Next.js"],
  stats = { stars: 0, forks: 0, issues: 0, lastUpdated: "2 days ago" },
}: ProjectCardProps) {
  const handleLocalDemo = () => {
    alert(
      "This project needs to be run locally. Please follow the instructions in the GitHub repository.",
    );
  };

  const isDeployed = liveDemoUrl !== "#" && liveDemoUrl !== "local";
  const isLocal = liveDemoUrl === "local";
  const isComingSoon = liveDemoUrl === "#";

  return (
    <Card className="flex h-full max-h-[24rem] w-full flex-col border-2 border-slate-300 dark:border-slate-700/60 bg-card overflow-hidden transition-all hover:border-slate-500 hover:shadow-md dark:hover:border-slate-500">
      <div className="flex items-center justify-between border-b bg-slate-100/50 dark:bg-slate-800/30 px-4 py-2.5">
        <div className="flex-1 truncate font-mono text-base font-extrabold text-slate-700 dark:text-slate-300">
          {title}
        </div>
        <Badge
          variant="outline"
          className="ml-auto font-mono text-xs border-slate-300 dark:border-slate-700/50 text-slate-800 dark:text-slate-300"
        >
          v1.0.0
        </Badge>
      </div>

      <Tabs
        defaultValue="info"
        className="flex-1 flex flex-col min-h-0 border-t border-slate-200/50 dark:border-slate-700/30"
      >
        <TabsList className="grid w-full grid-cols-2 rounded-none bg-slate-50/80 dark:bg-slate-800/40 p-1.5 border-b border-slate-200 dark:border-slate-700/30">
          <TabsTrigger
            value="info"
            className="font-mono text-xs border border-transparent data-[state=active]:border-slate-400/30 data-[state=active]:bg-background dark:data-[state=active]:bg-background/10 data-[state=active]:text-slate-700 dark:data-[state=active]:text-slate-300 data-[state=active]:shadow-sm transition-all duration-300 hover:bg-background/80 hover:text-slate-600/80"
          >
            Info
          </TabsTrigger>
          <TabsTrigger
            value="stats"
            className="font-mono text-xs border border-transparent data-[state=active]:border-slate-400/30 data-[state=active]:bg-background dark:data-[state=active]:bg-background/10 data-[state=active]:text-slate-700 dark:data-[state=active]:text-slate-300 data-[state=active]:shadow-sm transition-all duration-300 hover:bg-background/80 hover:text-slate-600/80"
          >
            Stats
          </TabsTrigger>
        </TabsList>

        <CardContent className="p-0 my-0 flex-1 overflow-y-auto bg-background dark:bg-background/5">
          <TabsContent
            value="info"
            className="mt-0 animate-in border-0 p-4 duration-300 fade-in-50 h-full bg-card dark:bg-transparent"
          >
            <h3 className="mb-2 font-mono text-base font-extrabold text-slate-700 dark:text-slate-300">
              {title}
            </h3>
            <p className="mb-3 font-mono text-sm leading-relaxed text-foreground line-clamp-3">
              {description}
            </p>
            <div className="flex flex-wrap gap-1.5">
              {techStack.slice(0, 5).map((tech) => (
                <Badge
                  key={tech}
                  variant="secondary"
                  className="font-mono text-xs px-2 py-0.5 bg-slate-100/80 dark:bg-slate-800/50 text-slate-700 dark:text-slate-300"
                >
                  {tech}
                </Badge>
              ))}
              {techStack.length > 5 && (
                <Badge
                  variant="outline"
                  className="font-mono text-xs px-2 py-0.5 border-slate-300 dark:border-slate-700/50 text-slate-700 dark:text-slate-300"
                >
                  +{techStack.length - 5} more
                </Badge>
              )}
            </div>
          </TabsContent>

          <TabsContent
            value="stats"
            className="mt-0 animate-in border-0 p-4 duration-300 fade-in-50 h-full bg-card dark:bg-transparent"
          >
            <div className="grid grid-cols-2 gap-3">
              <div className="flex flex-col items-center justify-center rounded-md bg-slate-50/80 dark:bg-slate-800/40 p-3 transition-all hover:bg-slate-100 dark:hover:bg-slate-800/60">
                <div className="flex items-center gap-1.5 text-yellow-500">
                  <Icons.FaStar className="h-4 w-4" />
                  <span className="font-mono text-base font-bold">
                    {stats.stars}
                  </span>
                </div>
                <span className="mt-0.5 font-mono text-xs text-muted-foreground">
                  Stars
                </span>
              </div>

              <div className="flex flex-col items-center justify-center rounded-md bg-slate-50/80 dark:bg-slate-800/40 p-3 transition-all hover:bg-slate-100 dark:hover:bg-slate-800/60">
                <div className="flex items-center gap-1.5 text-blue-500">
                  <Icons.FaCodeBranch className="h-4 w-4" />
                  <span className="font-mono text-base font-bold">
                    {stats.forks}
                  </span>
                </div>
                <span className="mt-0.5 font-mono text-xs text-muted-foreground">
                  Forks
                </span>
              </div>

              <div className="flex flex-col items-center justify-center rounded-md bg-slate-50/80 dark:bg-slate-800/40 p-3 transition-all hover:bg-slate-100 dark:hover:bg-slate-800/60">
                <div className="flex items-center gap-1.5 text-orange-500">
                  <Icons.FaExclamationCircle className="h-4 w-4" />
                  <span className="font-mono text-base font-bold">
                    {stats.issues}
                  </span>
                </div>
                <span className="mt-0.5 font-mono text-xs text-muted-foreground">
                  Issues
                </span>
              </div>

              <div className="flex flex-col items-center justify-center rounded-md bg-slate-50/80 dark:bg-slate-800/40 p-3 transition-all hover:bg-slate-100 dark:hover:bg-slate-800/60">
                <div className="flex items-center gap-1.5 text-purple-500">
                  <Icons.FaHistory className="h-4 w-4" />
                  <span className="font-mono text-xs font-medium">
                    {stats.lastUpdated}
                  </span>
                </div>
                <span className="mt-0.5 font-mono text-xs text-muted-foreground">
                  Updated
                </span>
              </div>
            </div>
          </TabsContent>
        </CardContent>
      </Tabs>

      <CardFooter className="flex flex-col gap-2 border-t bg-slate-50/80 dark:bg-slate-800/30 p-2.5 sm:flex-row sm:gap-2.5 sm:p-3">
        <Button
          variant="outline"
          size="sm"
          className="w-full font-mono text-xs sm:text-xs bg-background/80 dark:bg-background/10 hover:bg-background dark:hover:bg-background/20 border-slate-300 dark:border-slate-700/50 hover:border-slate-500 dark:hover:border-slate-600"
          asChild
        >
          <Link href={githubUrl} prefetch={false}>
            <Icons.FaGithub
              className="mr-1 h-3 w-3 sm:mr-2 sm:h-4 sm:w-4"
              aria-hidden="true"
            />
            <span className="flex-1">$ git clone</span>
          </Link>
        </Button>
        {isComingSoon ? (
          <Button
            variant="secondary"
            size="sm"
            className="w-full font-mono text-xs sm:text-xs bg-slate-100/80 dark:bg-slate-700/50 hover:bg-slate-200 dark:hover:bg-slate-700/70 text-slate-700 dark:text-slate-300"
            disabled
          >
            <Icons.FaTerminal
              className="mr-1 h-3 w-3 sm:mr-2 sm:h-4 sm:w-4"
              aria-hidden="true"
            />
            <span className="flex-1">Coming Soon</span>
          </Button>
        ) : isLocal ? (
          <Button
            variant="default"
            size="sm"
            className="w-full font-mono text-xs sm:text-xs bg-slate-600 hover:bg-slate-700 dark:bg-slate-700 dark:hover:bg-slate-600"
            onClick={handleLocalDemo}
          >
            <Icons.FaTerminal
              className="mr-1 h-3 w-3 sm:mr-2 sm:h-4 sm:w-4"
              aria-hidden="true"
            />
            <span className="flex-1">$ npm run start</span>
          </Button>
        ) : (
          <Button
            variant="default"
            size="sm"
            className="w-full font-mono text-xs sm:text-xs bg-slate-600 hover:bg-slate-700 dark:bg-slate-700 dark:hover:bg-slate-600"
            asChild
          >
            <Link href={liveDemoUrl} prefetch={false}>
              <Icons.FaLink
                className="mr-1 h-3 w-3 sm:mr-2 sm:h-4 sm:w-4"
                aria-hidden="true"
              />
              <span className="flex-1">View Live</span>
            </Link>
          </Button>
        )}
      </CardFooter>
    </Card>
  );
}
