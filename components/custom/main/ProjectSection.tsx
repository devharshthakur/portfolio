import Link from "next/link";
import projects from "@/data/projects.data";
import { ProjectCard } from "./ProjectCard";
import { Button } from "@/components/ui/button";
import { ProjectNotesButton } from "@/app/projects/components/note";
import { SectionTitle } from "@/components/ui/section-title";
import { FolderGit2 } from "lucide-react";
import { Card } from "@/components/ui/card";

export function ProjectSection() {
  /* Get only the latest 4 projects **/
  const latestProjects = projects.slice(0, 4);

  return (
    <Card className="grid gap-6 border-2 border-blue-400 dark:border-blue-600 p-4 shadow-sm bg-blue-50/30 dark:bg-blue-950/10">
      <div className="flex items-center justify-between">
        <div className="flex items-center">
          <SectionTitle
            icon={
              <FolderGit2
                size={20}
                className="text-blue-600 dark:text-blue-400"
              />
            }
          >
            Projects
          </SectionTitle>
          <div className="-ml-1">
            <ProjectNotesButton />
          </div>
        </div>
        <Button
          variant="outline"
          size="sm"
          asChild
          className="font-mono text-xs border-2 border-blue-400/50 hover:border-blue-500 dark:border-blue-600/30 dark:hover:border-blue-500/60 shadow-sm"
        >
          <Link href="/projects" prefetch={true}>
            View All Projects
          </Link>
        </Button>
      </div>
      <div className="grid grid-cols-1 gap-6 md:grid-cols-1 lg:grid-cols-2 lg:gap-8">
        {latestProjects.map((project, index) => (
          <ProjectCard
            key={index}
            title={project.title}
            description={project.description}
            githubUrl={project.githubUrl}
            liveDemoUrl={project.liveDemoUrl || "#"}
            techStack={project.tags}
            stats={{
              stars: Math.floor(Math.random() * 50),
              forks: Math.floor(Math.random() * 20),
              issues: Math.floor(Math.random() * 10),
              lastUpdated: "2 days ago",
            }}
          />
        ))}
      </div>
    </Card>
  );
}
