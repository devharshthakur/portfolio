/**
 * LiveDemoButton component renders a button that links to a live demo of a project if available.
 * If the project does not have a live demo, it shows a striked-through "See Live" button that,
 * when clicked, opens a dialog with information on how to run the project locally.
 * The dialog includes details about the project's status (e.g., "In Development") and instructions for local setup.
 *
 * @param {Object} props - The component props.
 * @param {Project} props.project - The project object containing details such as live demo URL, development status, and tags.
 */
'use client';
import { ExternalLink, Github, Terminal, Clock, Calendar } from 'lucide-react';
import { BsCpuFill } from 'react-icons/bs';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import type { Project } from '@/data/projects.data';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';

interface LiveDemoButtonProps {
  project: Project;
}

export function LiveDemoButton({ project }: LiveDemoButtonProps) {
  const hasLiveDemo = project.liveDemoUrl && project.liveDemoUrl !== 'local' && project.liveDemoUrl !== '#';

  if (hasLiveDemo) {
    return (
      <Button
        size="sm"
        asChild
        className="bg-green-600 hover:bg-green-700 dark:bg-green-700 dark:hover:bg-green-600 border-2 border-green-500 dark:border-green-600"
      >
        <a href={project.liveDemoUrl} target="_blank" rel="noopener noreferrer" className="flex items-center">
          <ExternalLink className="mr-1 h-4 w-4" />
          See Live
        </a>
      </Button>
    );
  }

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button
          size="sm"
          className="flex items-center bg-purple-100 hover:bg-purple-200 dark:bg-purple-900/40 dark:hover:bg-purple-800/60 border-2 border-purple-500 dark:border-purple-600 text-purple-700 dark:text-purple-400"
        >
          <ExternalLink className="mr-1 h-4 w-4" />
          <span className="line-through decoration-1">See Live</span>
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-2xl p-0 rounded-md border-2 border-purple-300 dark:border-purple-700 shadow-xs">
        <div className="grid grid-cols-[1fr_auto] gap-4 p-4 pb-2 bg-purple-50/50 dark:bg-purple-950/10">
          <div className="flex items-center gap-2">
            <div className="rounded-sm bg-purple-100 dark:bg-purple-900/30 p-1.5 border border-purple-200 dark:border-purple-800/50">
              <BsCpuFill className="h-4 w-4 text-purple-600 dark:text-purple-400" />
            </div>
            <div>
              <DialogTitle className="text-base text-slate-800 dark:text-slate-200">
                {project.isInDevelopment ? 'In Development' : 'Local Project'}
              </DialogTitle>
              <DialogDescription className="text-xs text-slate-600 dark:text-slate-400">
                {project.isInDevelopment ? 'This project is currently under development' : 'This project is not deployed but can be run locally'}
              </DialogDescription>
            </div>
          </div>
          {project.isInDevelopment && (
            <Badge
              variant="outline"
              className="h-fit bg-purple-100/80 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300 border-purple-300 dark:border-purple-700/50"
            >
              In Progress
            </Badge>
          )}
        </div>

        <div className="px-4 py-2 grid grid-cols-[2fr_1fr] gap-4">
          <div className="rounded-sm bg-slate-50 dark:bg-slate-800/40 p-3 border border-slate-200 dark:border-slate-700">
            <div className="flex items-center gap-2 mb-1.5">
              <Terminal className="h-3.5 w-3.5 text-purple-600 dark:text-purple-400" />
              <h3 className="font-medium text-sm text-slate-800 dark:text-slate-200">Run locally instead</h3>
            </div>
            <ol className="ml-5 list-decimal text-xs text-slate-600 dark:text-slate-400 space-y-0.5">
              <li>Clone the repository from GitHub</li>
              <li>Install dependencies using npm or yarn</li>
              <li>Follow setup instructions in the README</li>
              <li>
                Run the development server with{' '}
                <code className="text-purple-700 dark:text-purple-300 bg-purple-100/50 dark:bg-purple-900/30 px-1 rounded">npm run dev</code>
              </li>
            </ol>
          </div>

          <div className="space-y-2">
            <div className="flex flex-wrap items-center gap-1.5">
              {project.tags &&
                project.tags.slice(0, 3).map((tag, index) => (
                  <Badge
                    key={index}
                    variant="secondary"
                    className="text-xs px-1.5 py-0 h-5 bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300"
                  >
                    {tag}
                  </Badge>
                ))}
            </div>

            <div className="flex items-center gap-3 text-xs text-slate-600 dark:text-slate-400">
              <div className="flex items-center gap-1">
                <Calendar className="h-3 w-3 text-slate-500 dark:text-slate-500" />
                <span>{project.date}</span>
              </div>
              <div className="flex items-center gap-1">
                <Clock className="h-3 w-3 text-slate-500 dark:text-slate-500" />
                <span>{project.duration}</span>
              </div>
            </div>
          </div>
        </div>

        <Separator className="border-slate-200 dark:border-slate-700/50" />

        <DialogFooter className="flex justify-between p-3 bg-slate-50/80 dark:bg-slate-800/30">
          <Button
            variant="outline"
            size="sm"
            asChild
            className="h-8 border-purple-300 dark:border-purple-700 hover:bg-purple-50 dark:hover:bg-purple-900/20 hover:border-purple-400 dark:hover:border-purple-600 text-purple-700 dark:text-purple-300"
          >
            <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="flex items-center">
              <Github className="mr-1 h-3.5 w-3.5" />
              View Repository
            </a>
          </Button>
          <DialogTrigger asChild>
            <Button
              size="sm"
              className="h-8 bg-purple-600 hover:bg-purple-700 dark:bg-purple-700 dark:hover:bg-purple-600 border border-purple-500 dark:border-purple-600"
            >
              I Understand
            </Button>
          </DialogTrigger>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
