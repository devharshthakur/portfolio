import type { Project } from '@/data/projects.data';
import { ExternalLink, Github } from 'lucide-react';
import { JSX } from 'react';

interface ProjectLinkIconProps {
  project: Project;
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

/**
 * Returns the appropriate icon component for a project link based on its details.
 * Shows an ExternalLink icon for projects with a live demo URL that's not "local" or "#".
 * Shows a Github icon for all other projects.
 *
 * @param {ProjectLinkIconProps} props - The component props including project details and styling options
 * @returns {JSX.Element} The appropriate icon component
 */
export function ProjectLinkIcon({ project, size = 'sm', className = '' }: ProjectLinkIconProps): JSX.Element {
  const hasExternalDemo = project.liveDemoUrl && project.liveDemoUrl !== 'local' && project.liveDemoUrl !== '#';

  const sizeClasses = {
    sm: 'h-3 w-3',
    md: 'h-4 w-4',
    lg: 'h-5 w-5',
  };

  const iconClassName = `${sizeClasses[size]} ${
    hasExternalDemo ? 'text-emerald-600 dark:text-emerald-400' : 'text-slate-700 dark:text-slate-300'
  } ${className}`;

  return hasExternalDemo ? <ExternalLink className={iconClassName} /> : <Github className={iconClassName} />;
}

/**
 * Returns a hover indicator component that appears on hover
 *
 * @param {ProjectLinkIconProps} props - The component props
 * @returns {JSX.Element} A styled hover indicator with the appropriate icon
 */
export function ProjectLinkHoverIndicator({ project, size = 'lg', className = '' }: ProjectLinkIconProps): JSX.Element {
  return (
    <div
      className={`translate-y-4 transform rounded-full bg-white/90 p-2 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100 dark:bg-slate-800/90 ${className}`}>
      <ProjectLinkIcon project={project} size={size} />
    </div>
  );
}
