import { NoteDialog } from "@/app/projects/components/dailogs/project-section-home-dailog";
import projects from "./data/projects.data";
import { ProjectCard } from "./components/ProjectCard";
import { Card } from "@/components/ui/card";
import { SectionTitle } from "@/components/ui/section-title";
import { Building2 } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export function Projects() {
  const topProjects = projects.slice(0, 4);

  return (
    <Card className="border-2 border-emerald-300/60 dark:border-emerald-600/60 p-4 shadow-md bg-emerald-50/50 dark:bg-emerald-900/20 backdrop-blur-sm">
      <div className="space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:justify-between">
          <SectionTitle
            icon={
              <Building2
                size={20}
                className="text-emerald-700 dark:text-emerald-400"
              />
            }
            backgroundClassName="bg-transparent"
            borderClassName="border-transparent"
          >
            Projects
          </SectionTitle>
          <div className="flex items-center gap-2 sm:gap-3">
            <NoteDialog />
            <Button
              asChild
              variant="outline"
              size="sm"
              className="text-xs sm:text-sm text-emerald-700 hover:text-emerald-800 border-emerald-300 hover:border-emerald-400 dark:text-emerald-400 dark:hover:text-emerald-300 dark:border-emerald-700 dark:hover:border-emerald-600 hover:bg-emerald-100 dark:hover:bg-emerald-900/30"
            >
              <Link href="/projects">View All Projects</Link>
            </Button>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {topProjects.map((project) => (
            <ProjectCard
              key={project.title}
              title={project.title}
              description={project.description}
              githubUrl={project.githubUrl}
              liveDemoUrl={project.liveDemoUrl || "#"}
              techStack={project.tags}
              stats={{
                stars: 0,
                forks: 0,
                issues: 0,
                lastUpdated: project.date,
              }}
            />
          ))}
        </div>
      </div>
    </Card>
  );
}
