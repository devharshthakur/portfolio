"use client";

/**
 * ProjectCard Component
 *
 * This component represents a card that displays information about a project.
 * It includes project details such as title, description, GitHub URL, live demo URL,
 * technology stack, and project statistics (stars, forks, issues, last updated).
 *
 * @component
 * @param {Object} props - The properties for the ProjectCard component.
 * @param {string} props.title - The title of the project.
 * @param {string} props.description - A brief description of the project.
 * @param {string} props.githubUrl - The URL to the project's GitHub repository.
 * @param {string} props.liveDemoUrl - The URL to the live demo of the project.
 * @param {string[]} [props.techStack] - An optional array of technologies used in the project.
 * @param {Object} [props.stats] - An optional object containing project statistics.
 * @param {number} props.stats.stars - The number of stars the project has received.
 * @param {number} props.stats.forks - The number of forks of the project.
 * @param {number} props.stats.issues - The number of issues reported for the project.
 * @param {string} [props.stats.lastUpdated] - An optional string indicating when the project was last updated.
 *
 * @example
 * <ProjectCard
 *   title="My Awesome Project"
 *   description="This project does amazing things."
 *   githubUrl="https://github.com/my-awesome-project"
 *   liveDemoUrl="https://my-awesome-project.com"
 *   techStack={["React", "TypeScript"]}
 *   stats={{ stars: 10, forks: 2, issues: 1, lastUpdated: "1 day ago" }}
 * />
 */

import Link from "next/link";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Icons } from "@/components/custom/home/skills-section/utils/icon.export";
import type { Project } from "../data/projects.data";

export function ProjectCard(props: Project) {
  const {
    title,
    description,
    githubUrl,
    liveDemoUrl = "#",
    tags,
    version = "v1.0.0",
    stats = {
      stars: 0,
      forks: 0,
      issues: 0,
      lastUpdated: "Not available",
    },
  } = props;

  const handleLocalDemo = () => {
    alert(
      "This project needs to be run locally. Please follow the instructions in the GitHub repository.",
    );
  };

  const isDeployed = liveDemoUrl !== "#" && liveDemoUrl !== "local";
  const isLocal = liveDemoUrl === "local";
  const isComingSoon = liveDemoUrl === "#";

  return (
    <Card className="flex flex-col overflow-hidden border border-emerald-800/30 bg-emerald-950/80 rounded-lg">
      {/* Title Section */}
      <div className="flex items-center justify-between px-4 py-2 border-b border-emerald-800/40">
        <h3 className="font-mono text-base font-bold text-emerald-100">
          {title}
        </h3>
        <Badge
          variant="outline"
          className="font-mono text-xs border-emerald-700/50 bg-emerald-900/70 text-emerald-400"
        >
          {version}
        </Badge>
      </div>

      {/* Tabs Section */}
      <Tabs defaultValue="info" className="flex flex-col rounded-md">
        <TabsList className="flex w-full h-7 rounded-md bg-emerald-900/40 border-b border-emerald-800/40 p-0">
          <TabsTrigger
            value="info"
            className="flex-1 font-mono text-xs border-0 rounded-none data-[state=active]:bg-emerald-800/80 data-[state=active]:text-emerald-300 py-0.5"
          >
            Info
          </TabsTrigger>
          <TabsTrigger
            value="stats"
            className="flex-1 font-mono text-xs border-0 rounded-none data-[state=active]:bg-emerald-800/80 data-[state=active]:text-emerald-300 py-0.5"
          >
            Stats
          </TabsTrigger>
        </TabsList>

        <TabsContent
          value="info"
          className="mt-0 border-0 p-3 bg-emerald-900/80 min-h-[120px] data-[state=active]:animate-in data-[state=active]:fade-in-0 data-[state=active]:slide-in-from-left-5"
        >
          <p className="font-mono text-sm text-emerald-200 leading-relaxed mb-2">
            {description}
          </p>
          <div className="flex flex-wrap gap-1.5">
            {tags.map((tech) => (
              <Badge
                key={tech}
                className="px-2 py-0.5 text-[10px] font-medium bg-opacity-20 text-white"
                style={{
                  backgroundColor: getBadgeColor(tech),
                  borderColor: "transparent",
                }}
                variant="outline"
              >
                {tech}
              </Badge>
            ))}
          </div>
        </TabsContent>

        <TabsContent
          value="stats"
          className="mt-0 border-0 p-3 bg-emerald-900/80 min-h-[120px] data-[state=active]:animate-in data-[state=active]:fade-in-0 data-[state=active]:slide-in-from-right-5"
        >
          <div className="grid grid-cols-2 gap-2">
            <div className="flex flex-col items-center justify-center rounded-md bg-emerald-800/60 p-1.5">
              <div className="flex items-center gap-1 text-yellow-500">
                <Icons.FaStar className="h-3 w-3" />
                <span className="font-mono text-xs font-bold">
                  {stats.stars}
                </span>
              </div>
              <span className="mt-0.5 font-mono text-[10px] text-emerald-300">
                Stars
              </span>
            </div>

            <div className="flex flex-col items-center justify-center rounded-md bg-emerald-800/60 p-1.5">
              <div className="flex items-center gap-1 text-blue-500">
                <Icons.FaCodeBranch className="h-3 w-3" />
                <span className="font-mono text-xs font-bold">
                  {stats.forks}
                </span>
              </div>
              <span className="mt-0.5 font-mono text-[10px] text-emerald-300">
                Forks
              </span>
            </div>

            <div className="flex flex-col items-center justify-center rounded-md bg-emerald-800/60 p-1.5">
              <div className="flex items-center gap-1 text-orange-500">
                <Icons.FaExclamationCircle className="h-3 w-3" />
                <span className="font-mono text-xs font-bold">
                  {stats.issues}
                </span>
              </div>
              <span className="mt-0.5 font-mono text-[10px] text-emerald-300">
                Issues
              </span>
            </div>

            <div className="flex flex-col items-center justify-center rounded-md bg-emerald-800/60 p-1.5">
              <div className="flex items-center gap-1 text-purple-500">
                <Icons.FaHistory className="h-3 w-3" />
                <span className="font-mono text-[10px] font-medium">
                  {stats.lastUpdated}
                </span>
              </div>
              <span className="mt-0.5 font-mono text-[10px] text-emerald-300">
                Updated
              </span>
            </div>
          </div>
        </TabsContent>
      </Tabs>

      {/* Button Section */}
      <div className="flex">
        <div className="flex-1">
          <Button
            variant="outline"
            className="h-8 w-full justify-center rounded-md bg-transparent font-mono text-xs text-emerald-400 hover:text-emerald-300 border-0 border-t border-emerald-800/40"
            asChild
          >
            <Link href={githubUrl} target="_blank" rel="noopener noreferrer">
              <Icons.FaGithub className="mr-2 h-4 w-4" aria-hidden="true" />
              <span>$ git clone</span>
            </Link>
          </Button>
        </div>

        <div className="flex-1">
          {isComingSoon ? (
            <div className="flex h-8 w-full items-center justify-center font-mono text-xs text-emerald-500/50 bg-transparent border-t border-emerald-800/40">
              <span>Coming Soon</span>
            </div>
          ) : isLocal ? (
            <Button
              variant="outline"
              className="h-8 w-full justify-center rounded-md bg-transparent font-mono text-xs text-emerald-500 hover:text-emerald-400 border-0 border-t border-emerald-800/40"
              onClick={handleLocalDemo}
            >
              <Icons.FaTerminal className="mr-2 h-4 w-4" aria-hidden="true" />
              <span>$ pnpm run dev</span>
            </Button>
          ) : (
            <Button
              variant="outline"
              className="h-8 w-full justify-center rounded-md bg-emerald-700 font-mono text-xs text-white hover:bg-emerald-600 border-0 border-t border-emerald-800/40"
              asChild
            >
              <Link
                href={liveDemoUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Icons.FaGlobe className="mr-2 h-4 w-4" aria-hidden="true" />
                <span>Live Demo</span>
              </Link>
            </Button>
          )}
        </div>
      </div>
    </Card>
  );
}

// Helper function to get badge colors based on tech
function getBadgeColor(tech: string): string {
  const colorMap: Record<string, string> = {
    "Next.js": "#0070f3",
    TypeScript: "#3178c6",
    React: "#61dafb",
    JavaScript: "#f7df1e",
    Node: "#68a063",
    npm: "#cb3837",
    NestJS: "#e0234e",
    Prisma: "#5a67d8",
    Security: "#e11d48",
    Encryption: "#6366f1",
    "Machine Learning": "#8b5cf6",
    AI: "#a855f7",
    Blockchain: "#059669",
    Simulation: "#0ea5e9",
    "Package Checker": "#f59e0b",
    "Legal Tech": "#6366f1",
    "PDF Processing": "#f43f5e",
    Docker: "#2496ed",
  };

  return colorMap[tech] || "#64748b"; // Default slate color
}
