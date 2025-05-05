/**
 * Color utility functions for project and package cards
 * These color schemes are designed to make the homepage colorful while
 * maintaining visual distinction between different component sections.
 */

interface ColorScheme {
  border: string;
  gradient: string;
  hover: string;
  cardBackground: string;
  headerBackground: string;
  footerBackground: string;
}

// Project card color schemes - more vibrant and with gradients
export const projectColorSchemes: ColorScheme[] = [
  {
    border: 'border-purple-400 dark:border-purple-800',
    gradient: 'bg-linear-to-br from-purple-50 to-purple-100 dark:from-purple-950/20 dark:to-purple-900/10',
    hover: 'hover:border-purple-500 hover:shadow-purple-200/50 dark:hover:border-purple-700 dark:hover:shadow-purple-900/20',
    cardBackground: 'bg-white dark:bg-black/20',
    headerBackground: 'bg-purple-100/50 dark:bg-purple-900/20',
    footerBackground: 'bg-purple-50/80 dark:bg-purple-900/10',
  },
  {
    border: 'border-blue-400 dark:border-blue-800',
    gradient: 'bg-linear-to-br from-blue-50 to-blue-100 dark:from-blue-950/20 dark:to-blue-900/10',
    hover: 'hover:border-blue-500 hover:shadow-blue-200/50 dark:hover:border-blue-700 dark:hover:shadow-blue-900/20',
    cardBackground: 'bg-white dark:bg-black/20',
    headerBackground: 'bg-blue-100/50 dark:bg-blue-900/20',
    footerBackground: 'bg-blue-50/80 dark:bg-blue-900/10',
  },
  {
    border: 'border-emerald-400 dark:border-emerald-800',
    gradient: 'bg-linear-to-br from-emerald-50 to-emerald-100 dark:from-emerald-950/20 dark:to-emerald-900/10',
    hover: 'hover:border-emerald-500 hover:shadow-emerald-200/50 dark:hover:border-emerald-700 dark:hover:shadow-emerald-900/20',
    cardBackground: 'bg-white dark:bg-black/20',
    headerBackground: 'bg-emerald-100/50 dark:bg-emerald-900/20',
    footerBackground: 'bg-emerald-50/80 dark:bg-emerald-900/10',
  },
  {
    border: 'border-amber-400 dark:border-amber-800',
    gradient: 'bg-linear-to-br from-amber-50 to-amber-100 dark:from-amber-950/20 dark:to-amber-900/10',
    hover: 'hover:border-amber-500 hover:shadow-amber-200/50 dark:hover:border-amber-700 dark:hover:shadow-amber-900/20',
    cardBackground: 'bg-white dark:bg-black/20',
    headerBackground: 'bg-amber-100/50 dark:bg-amber-900/20',
    footerBackground: 'bg-amber-50/80 dark:bg-amber-900/10',
  },
];

// Package card color schemes - softer and more corporate
export const packageColorSchemes: ColorScheme[] = [
  {
    border: 'border-indigo-300 dark:border-indigo-900',
    gradient: 'bg-linear-to-br from-indigo-50/80 to-indigo-100/70 dark:from-indigo-950/10 dark:to-indigo-900/5',
    hover: 'hover:border-indigo-400 hover:shadow-indigo-200/30 dark:hover:border-indigo-700 dark:hover:shadow-indigo-900/10',
    cardBackground: 'bg-white dark:bg-black/20',
    headerBackground: 'bg-indigo-50/70 dark:bg-indigo-900/10',
    footerBackground: 'bg-indigo-50/50 dark:bg-indigo-900/5',
  },
  {
    border: 'border-sky-300 dark:border-sky-900',
    gradient: 'bg-linear-to-br from-sky-50/80 to-sky-100/70 dark:from-sky-950/10 dark:to-sky-900/5',
    hover: 'hover:border-sky-400 hover:shadow-sky-200/30 dark:hover:border-sky-700 dark:hover:shadow-sky-900/10',
    cardBackground: 'bg-white dark:bg-black/20',
    headerBackground: 'bg-sky-50/70 dark:bg-sky-900/10',
    footerBackground: 'bg-sky-50/50 dark:bg-sky-900/5',
  },
  {
    border: 'border-teal-300 dark:border-teal-900',
    gradient: 'bg-linear-to-br from-teal-50/80 to-teal-100/70 dark:from-teal-950/10 dark:to-teal-900/5',
    hover: 'hover:border-teal-400 hover:shadow-teal-200/30 dark:hover:border-teal-700 dark:hover:shadow-teal-900/10',
    cardBackground: 'bg-white dark:bg-black/20',
    headerBackground: 'bg-teal-50/70 dark:bg-teal-900/10',
    footerBackground: 'bg-teal-50/50 dark:bg-teal-900/5',
  },
  {
    border: 'border-rose-300 dark:border-rose-900',
    gradient: 'bg-linear-to-br from-rose-50/80 to-rose-100/70 dark:from-rose-950/10 dark:to-rose-900/5',
    hover: 'hover:border-rose-400 hover:shadow-rose-200/30 dark:hover:border-rose-700 dark:hover:shadow-rose-900/10',
    cardBackground: 'bg-white dark:bg-black/20',
    headerBackground: 'bg-rose-50/70 dark:bg-rose-900/10',
    footerBackground: 'bg-rose-50/50 dark:bg-rose-900/5',
  },
];

/**
 * Get a color scheme for a project card based on index
 * @param index The index of the project in the list
 * @returns A color scheme object
 */
export const getProjectColorScheme = (index: number): ColorScheme => {
  return projectColorSchemes[index % projectColorSchemes.length];
};

/**
 * Get a color scheme for a package card based on index
 * @param index The index of the package in the list
 * @returns A color scheme object
 */
export const getPackageColorScheme = (index: number): ColorScheme => {
  return packageColorSchemes[index % packageColorSchemes.length];
};
