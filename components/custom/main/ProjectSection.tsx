import Link from "next/link";
import projects from "@/data/projects.data";
import { ProjectCard } from "./ProjectCard";
import { Button } from "@/components/ui/button";

export function ProjectSection() {
  // Get only the latest 4 projects
  const latestProjects = projects.slice(0, 4);

  return (
    <section className="grid gap-6">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold">Projects</h2>
        <Button variant="outline" size="sm" asChild>
          <Link href="/projects">View All Projects</Link>
        </Button>
      </div>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        {latestProjects.map((project, index) => (
          <ProjectCard
            key={index}
            title={project.title}
            description={project.description}
            githubUrl={project.githubUrl}
            liveDemoUrl={project.liveDemoUrl}
          />
        ))}
      </div>
    </section>
  );
}
