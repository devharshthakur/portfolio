import { type Project } from '@/components/custom/home/project-section/data/projects.data';

export interface ProjectImageProps {
  src: string;
  objectFitClass: 'object-contain p-4' | 'object-cover';
}

/**
 * Retrieves the appropriate image properties for a given project.
 * The function prioritizes the following in order:
 * 1. If the project has an imageUrl, it will be used.
 * 2. If there is no imageUrl but the project is in development, a specific development image will be used.
 * 3. If there is no imageUrl and the project is not in development, but has a local demo, a Git logo will be used.
 * 4. If none of the above conditions are met, a placeholder image will be returned.
 *
 * @param {Project} project - The project for which to retrieve image properties.
 * @param {boolean} mounted - Whether the component is mounted
 * @param {string | undefined} resolvedTheme - The current theme ('dark' or 'light')
 * @returns {ProjectImageProps} The image properties including the source and object fit class.
 */
export function getProjectImageProps(project: Project, mounted: boolean, resolvedTheme: string | undefined): ProjectImageProps {
  const placeholder = '/placeholder.svg';
  const gitLogoLight = '/projects/images/gitLogo_DarkMode.png';
  const gitLogoDark = '/projects/images/gitLogo_LightMode.png';

  const gitLogo = mounted ? (resolvedTheme === 'dark' ? gitLogoDark : gitLogoLight) : gitLogoLight;
  const devImage = '/projects/images/inDevelopment.jpg';

  if (project.isInDevelopment) {
    return { src: devImage, objectFitClass: 'object-cover' };
  }
  if (project.imageUrl) {
    return { src: project.imageUrl, objectFitClass: 'object-cover' };
  }
  if (project.liveDemoUrl === 'local') {
    return { src: gitLogo, objectFitClass: 'object-contain p-4' };
  }
  return { src: placeholder, objectFitClass: 'object-cover' };
}
