/**
 * @file project-display-utils.ts
 * @description Utility functions for project display and formatting
 * Provides helper functions to format project data and determine display logic
 */

/**
 * Formats a date string into a human-readable format
 *
 * @param dateString - The ISO date string to format
 * @returns A formatted date string (e.g., "January 15, 2023")
 */
export function formatDate(dateString: string): string {
  return new Date(dateString).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
}

/**
 * Determines whether to show the "Run Locally" button for a project
 *
 * @param isLocalProject - Whether the project is marked as local
 * @param projectTitle - The title of the project
 * @returns A boolean indicating whether to show the Run Locally button
 */
export function shouldShowRunLocallyButton(isLocalProject: boolean, projectTitle: string): boolean {
  return isLocalProject || projectTitle === 'Legal AI PDF';
}

/**
 * Gets the appropriate link text based on project properties
 *
 * @param showRunLocally - Whether to show "Run Locally" button
 * @param hasLiveDemo - Whether the project has a live demo URL
 * @returns The appropriate button text
 */
export function getLinkButtonText(showRunLocally: boolean, hasLiveDemo: boolean): string {
  if (showRunLocally) {
    return 'View Code';
  }
  return hasLiveDemo ? 'View Demo' : 'View Project';
}
