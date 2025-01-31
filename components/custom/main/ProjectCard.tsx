"use client";
import Link from "next/link";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardFooter,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Icons } from "@/data/icons/icon.export";

interface ProjectCardProps {
  title: string;
  description: string;
  githubUrl: string;
  liveDemoUrl: string;
}

export function ProjectCard({
  title,
  description,
  githubUrl,
  liveDemoUrl,
}: ProjectCardProps) {
  const handleLocalDemo = () => {
    alert(
      "This project needs to be run locally. Please follow the instructions in the GitHub repository.",
    );
  };

  return (
    <Card className="flex h-full flex-col border-2 transition-all hover:border-primary hover:shadow-md sm:max-w-sm md:max-w-md lg:max-w-lg">
      <CardHeader className="flex-grow space-y-2 bg-muted/50 p-4">
        <CardTitle className="text-base font-semibold sm:text-lg">
          {title}
        </CardTitle>
        <CardDescription className="text-xs sm:text-sm">
          {description}
        </CardDescription>
      </CardHeader>
      <CardFooter className="flex flex-col gap-2 bg-muted/30 p-3 sm:flex-row sm:gap-3 sm:p-4">
        <Button
          variant="outline"
          size="sm"
          className="w-full text-xs sm:text-sm"
          asChild
        >
          <Link href={githubUrl} prefetch={false}>
            <Icons.FaGithub
              className="mr-1 h-3 w-3 sm:mr-2 sm:h-4 sm:w-4"
              aria-hidden="true"
            />
            <span className="flex-1">GitHub</span>
          </Link>
        </Button>
        {liveDemoUrl === "#" ? (
          <Button
            variant="default"
            size="sm"
            className="w-full text-xs sm:text-sm"
            disabled
          >
            <Icons.FaLink
              className="mr-1 h-3 w-3 sm:mr-2 sm:h-4 sm:w-4"
              aria-hidden="true"
            />
            <span className="flex-1">Coming Soon</span>
          </Button>
        ) : liveDemoUrl === "local" ? (
          <Button
            variant="default"
            size="sm"
            className="w-full text-xs sm:text-sm"
            onClick={handleLocalDemo}
          >
            <Icons.FaLink
              className="mr-1 h-3 w-3 sm:mr-2 sm:h-4 sm:w-4"
              aria-hidden="true"
            />
            <span className="flex-1">Run Locally</span>
          </Button>
        ) : (
          <Button
            variant="default"
            size="sm"
            className="w-full text-xs sm:text-sm"
            asChild
          >
            <Link href={liveDemoUrl} prefetch={false}>
              <Icons.FaLink
                className="mr-1 h-3 w-3 sm:mr-2 sm:h-4 sm:w-4"
                aria-hidden="true"
              />
              <span className="flex-1">Live Demo</span>
            </Link>
          </Button>
        )}
      </CardFooter>
    </Card>
  );
}
