import type { Project } from "@/components/custom/home/project-section/data/projects.data";

/**
 * Returns the appropriate URL for a project based on its details.
 * The function prioritizes the following in order:
 * 1. If the project has a liveDemoUrl that is not "local" or "#", it will be used
 * 2. Otherwise, it returns the githubUrl
 *
 * @param {Project} project - The project for which to retrieve the URL
 * @returns {string} The URL to navigate to when clicking on the project image
 */
export function getProjectUrl(project: Project): string {
  if (
    project.liveDemoUrl &&
    project.liveDemoUrl !== "local" &&
    project.liveDemoUrl !== "#"
  ) {
    return project.liveDemoUrl;
  }
  return project.githubUrl;
}
