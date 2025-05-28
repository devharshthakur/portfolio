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

import { Icons } from '@/components/custom/home/skills-section/utils/icon.export';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import type { Project } from '@/data/projects.data';
import Link from 'next/link';

export function ProjectCard(props: Project) {
  const {
    title,
    description,
    githubUrl,
    liveDemoUrl = '#',
    tags,
    stats = {
      stars: 0,
      forks: 0,
      issues: 0,
      lastUpdated: 'Not available',
    },
  } = props;

  const handleLocalDemo = () => {
    alert('This project needs to be run locally. Please follow the instructions in the GitHub repository.');
  };

  const isLocal = liveDemoUrl === 'local';
  const isComingSoon = liveDemoUrl === '#';

  return (
    <Card className="flex flex-col overflow-hidden rounded-lg border border-emerald-800/30 bg-emerald-950/80">
      {/* Title Section */}
      <div className="relative flex items-center justify-between border-b border-emerald-800/40 bg-gradient-to-r from-emerald-950 via-emerald-900/80 to-emerald-950 px-4 py-3">
        <div className="flex items-center space-x-2">
          <div className="h-3 w-3 rounded-full bg-gradient-to-br from-teal-400 to-emerald-600 shadow-sm shadow-emerald-400/20"></div>
          <h3 className="bg-gradient-to-r from-emerald-200 via-teal-200 to-emerald-200 bg-clip-text font-mono text-base font-bold tracking-tight text-transparent">
            {title}
          </h3>
        </div>
      </div>

      {/* Tabs Section */}
      <Tabs defaultValue="info" className="flex flex-col rounded-md">
        <TabsList className="flex h-7 w-full rounded-md border-b border-emerald-800/40 bg-emerald-900/40 p-0">
          <TabsTrigger
            value="info"
            className="flex-1 rounded-none border-0 py-0.5 font-mono text-xs data-[state=active]:bg-emerald-800/80 data-[state=active]:text-emerald-300">
            Info
          </TabsTrigger>
          <TabsTrigger
            value="stats"
            className="flex-1 rounded-none border-0 py-0.5 font-mono text-xs data-[state=active]:bg-emerald-800/80 data-[state=active]:text-emerald-300">
            Stats
          </TabsTrigger>
        </TabsList>

        <TabsContent
          value="info"
          className="data-[state=active]:animate-in data-[state=active]:fade-in-0 data-[state=active]:slide-in-from-left-5 mt-0 min-h-[120px] border-0 bg-emerald-900/80 p-3">
          <p className="mx-auto mb-2 max-w-[95%] font-mono text-sm leading-relaxed text-pretty text-emerald-200">{description}</p>
          <div className="flex flex-wrap gap-1.5">
            {tags.map(tech => (
              <Badge
                key={tech}
                className="bg-opacity-20 px-2 py-0.5 text-[10px] font-medium text-white"
                style={{
                  backgroundColor: getBadgeColor(tech),
                  borderColor: 'transparent',
                }}
                variant="outline">
                {tech}
              </Badge>
            ))}
          </div>
        </TabsContent>

        <TabsContent
          value="stats"
          className="data-[state=active]:animate-in data-[state=active]:fade-in-0 data-[state=active]:slide-in-from-right-5 mt-0 min-h-[120px] border-0 bg-emerald-900/80 p-3">
          <div className="grid grid-cols-2 gap-2">
            <div className="flex flex-col items-center justify-center rounded-md border border-yellow-700/30 bg-emerald-800/60 p-1.5 shadow-sm">
              <div className="flex items-center gap-1 text-yellow-400">
                <Icons.FaStar className="h-3 w-3" />
                <span className="font-mono text-xs font-bold">{stats.stars}</span>
              </div>
              <span className="mt-0.5 font-mono text-[10px] text-emerald-300">Stars</span>
            </div>

            <div className="flex flex-col items-center justify-center rounded-md border border-blue-700/30 bg-emerald-800/60 p-1.5 shadow-sm">
              <div className="flex items-center gap-1 text-blue-400">
                <Icons.FaCodeBranch className="h-3 w-3" />
                <span className="font-mono text-xs font-bold">{stats.forks}</span>
              </div>
              <span className="mt-0.5 font-mono text-[10px] text-emerald-300">Forks</span>
            </div>

            <div className="flex flex-col items-center justify-center rounded-md border border-orange-700/30 bg-emerald-800/60 p-1.5 shadow-sm">
              <div className="flex items-center gap-1 text-orange-400">
                <Icons.FaExclamationCircle className="h-3 w-3" />
                <span className="font-mono text-xs font-bold">{stats.issues}</span>
              </div>
              <span className="mt-0.5 font-mono text-[10px] text-emerald-300">Issues</span>
            </div>

            <div className="flex flex-col items-center justify-center rounded-md border border-purple-700/30 bg-emerald-800/60 p-1.5 shadow-sm">
              <div className="flex items-center gap-1 text-purple-400">
                <Icons.FaHistory className="h-3 w-3" />
                <span className="font-mono text-[10px] font-medium">{stats.lastUpdated}</span>
              </div>
              <span className="mt-0.5 font-mono text-[10px] text-emerald-300">Updated</span>
            </div>
          </div>
        </TabsContent>
      </Tabs>

      {/* Button Section */}
      <div className="flex">
        <div className="flex-1">
          <Button
            variant="outline"
            className="h-8 w-full justify-center rounded-md border-0 border-t border-emerald-800/40 bg-transparent font-mono text-xs text-emerald-400 hover:text-emerald-300"
            asChild>
            <Link href={githubUrl} target="_blank" rel="noopener noreferrer">
              <Icons.FaGithub className="mr-2 h-4 w-4" aria-hidden="true" />
              <span>$ git clone</span>
            </Link>
          </Button>
        </div>

        <div className="flex-1">
          {isComingSoon ? (
            <div className="flex h-8 w-full items-center justify-center border-t border-emerald-800/40 bg-transparent font-mono text-xs text-emerald-500/50">
              <span>Coming Soon</span>
            </div>
          ) : isLocal ? (
            <Button
              variant="outline"
              className="h-8 w-full justify-center rounded-md border-0 border-t border-emerald-800/40 bg-transparent font-mono text-xs text-emerald-500 hover:text-emerald-400"
              onClick={handleLocalDemo}>
              <Icons.FaTerminal className="mr-2 h-4 w-4" aria-hidden="true" />
              <span>$ pnpm run dev</span>
            </Button>
          ) : (
            <Button
              variant="outline"
              className="h-8 w-full justify-center rounded-md border-0 border-t border-emerald-800/40 bg-emerald-700 font-mono text-xs text-white hover:bg-emerald-600"
              asChild>
              <Link href={liveDemoUrl} target="_blank" rel="noopener noreferrer">
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

function getBadgeColor(tech: string): string {
  const colorMap: Record<string, string> = {
    'Next.js': '#0070f3',
    TypeScript: '#3178c6',
    React: '#61dafb',
    JavaScript: '#f7df1e',
    Node: '#68a063',
    npm: '#cb3837',
    NestJS: '#e0234e',
    Prisma: '#5a67d8',
    Security: '#e11d48',
    Encryption: '#6366f1',
    'Machine Learning': '#8b5cf6',
    AI: '#a855f7',
    Blockchain: '#059669',
    Simulation: '#0ea5e9',
    'Package Checker': '#f59e0b',
    'Legal Tech': '#6366f1',
    'PDF Processing': '#f43f5e',
    Docker: '#2496ed',
  };

  return colorMap[tech] || '#64748b'; // Default slate color
}
