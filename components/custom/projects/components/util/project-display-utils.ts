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
 * Determines the CSS classes to use for alternating row backgrounds
 *
 * @param isEven - Whether the row is an even-indexed row
 * @returns A string of Tailwind CSS classes for the row background
 */
export function getRowBackground(isEven: boolean): string {
  return isEven ? 'bg-white dark:bg-zinc-900/30' : 'bg-gray-50/80 dark:bg-zinc-900/60';
}

/**
 * Determines the border class to apply based on row position
 *
 * @param index - The index of the current row
 * @param totalItems - The total number of items in the list
 * @returns A string containing the appropriate border class
 */
export function getRowBorderClass(index: number, totalItems: number): string {
  if (index === 0) {
    return 'border-t-0'; // First item
  } else if (index === totalItems - 1) {
    return 'border-b-0'; // Last item
  }
  return '';
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
