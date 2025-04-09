/**
 * LiveDemoButton component renders a button that links to a live demo of a project if available.
 * If the project does not have a live demo, it opens a dialog with information on how to run the project locally.
 * The dialog includes details about the project's status (e.g., "In Development") and instructions for local setup.
 *
 * @param {Object} props - The component props.
 * @param {Project} props.project - The project object containing details such as live demo URL, development status, and tags.
 */
"use client";

import {
  ExternalLink,
  Github,
  MonitorSmartphone,
  Terminal,
  Clock,
  Calendar,
} from "lucide-react";
import { BsCpuFill } from "react-icons/bs";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import type { Project } from "@/data/projects.data";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import Link from "next/link";

interface LiveDemoButtonProps {
  project: Project;
}

export function LiveDemoButton({ project }: LiveDemoButtonProps) {
  const hasLiveDemo =
    project.liveDemoUrl &&
    project.liveDemoUrl !== "local" &&
    project.liveDemoUrl !== "#";

  if (hasLiveDemo) {
    return (
      <Button size="sm" asChild>
        <a
          href={project.liveDemoUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center"
        >
          <ExternalLink className="mr-1 h-4 w-4" />
          See Live
        </a>
      </Button>
    );
  }

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button size="sm" className="flex items-center">
          <BsCpuFill className="mr-1 h-4 w-4" />
          Run Locally
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-2xl p-0 rounded-md border border-border">
        <div className="grid grid-cols-[1fr_auto] gap-4 p-4 pb-2">
          <div className="flex items-center gap-2">
            <div className="rounded-sm bg-primary/10 p-1.5">
              <BsCpuFill className="h-4 w-4 text-primary" />
            </div>
            <div>
              <DialogTitle className="text-base">
                {project.isInDevelopment ? "In Development" : "Local Project"}
              </DialogTitle>
              <DialogDescription className="text-xs">
                {project.isInDevelopment
                  ? "This project is currently under development"
                  : "This project is not deployed so you have to set it up locally"}
              </DialogDescription>
            </div>
          </div>
          {project.isInDevelopment && (
            <Badge
              variant="outline"
              className="h-fit bg-primary/5 text-primary border-primary/20"
            >
              In Progress
            </Badge>
          )}
        </div>

        <div className="px-4 py-2 grid grid-cols-[2fr_1fr] gap-4">
          <div className="rounded-sm bg-muted p-3">
            <div className="flex items-center gap-2 mb-1.5">
              <Terminal className="h-3.5 w-3.5 text-primary" />
              <h3 className="font-medium text-sm">How to run locally</h3>
            </div>
            <ol className="ml-5 list-decimal text-xs text-muted-foreground space-y-0.5">
              <li>Clone the repository from GitHub</li>
              <li>Install dependencies using npm or yarn</li>
              <li>Follow setup instructions in the README</li>
            </ol>
          </div>

          <div className="space-y-2">
            <div className="flex flex-wrap items-center gap-1.5">
              {project.tags &&
                project.tags.slice(0, 3).map((tag, index) => (
                  <Badge
                    key={index}
                    variant="secondary"
                    className="text-xs px-1.5 py-0 h-5"
                  >
                    {tag}
                  </Badge>
                ))}
            </div>

            <div className="flex items-center gap-3 text-xs text-muted-foreground">
              <div className="flex items-center gap-1">
                <Calendar className="h-3 w-3" />
                <span>{project.date}</span>
              </div>
              <div className="flex items-center gap-1">
                <Clock className="h-3 w-3" />
                <span>{project.duration}</span>
              </div>
            </div>
          </div>
        </div>

        <Separator />

        <DialogFooter className="flex justify-between p-3">
          <Button variant="outline" size="sm" asChild className="h-8">
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center"
            >
              <Github className="mr-1 h-3.5 w-3.5" />
              Repository
            </a>
          </Button>
          <DialogTrigger asChild>
            <Button size="sm" className="h-8">
              Got it
            </Button>
          </DialogTrigger>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
