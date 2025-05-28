/**
 * @file App-wide constants for UI components
 * @description Contains constants for navigation, color schemes, and other UI configuration
 */

import { FileText, GitPullRequest, History } from 'lucide-react';
import { FaGithub } from 'react-icons/fa';
import { MdContactPage } from 'react-icons/md';
import { ColorScheme, ColorSchemeStyles, NavItem } from '../types/types';

/**
 * Navigation items displayed on the left side of the header
 * @type {NavItem[]}
 */
export const HEADER_LEFT_NAV: NavItem[] = [
  {
    href: 'https://github.com/devharshthakur',
    label: '@devharshthakur',
    icon: FaGithub,
    colorScheme: 'teal',
    isExternal: true,
  },
  {
    href: '/contact',
    label: 'Contact Me',
    icon: MdContactPage,
    colorScheme: 'orange',
  },
];

/**
 * Navigation items displayed on the right side of the header
 * @type {NavItem[]}
 */
export const HEADER_RIGHT_NAV: NavItem[] = [
  {
    href: '/about',
    label: 'About Me',
    variant: 'outline',
    colorScheme: 'blue',
  },
  {
    href: '/blogs',
    label: 'Blogs',
    colorScheme: 'indigo',
  },
  {
    href: '/cv',
    label: 'CV',
    icon: FileText,
    colorScheme: 'purple',
  },
  {
    href: '/contribute',
    label: 'Contribute',
    icon: GitPullRequest,
    colorScheme: 'slate',
  },
];

/**
 * CSS class definitions for each color scheme
 *
 * Each color scheme contains the following properties:
 * - border: CSS classes for component borders
 * - hover: CSS classes for hover states
 * - text: CSS classes for text styling
 * - icon: CSS classes for icon styling
 * - shadow: CSS classes for shadows
 * - bg: CSS classes for background (only for "default" variant)
 *
 * @type {Record<ColorScheme, ColorSchemeStyles>}
 */
export const COLOR_SCHEMES: Record<ColorScheme, ColorSchemeStyles> = {
  /**
   * Slate color scheme - Gray/neutral colors
   */
  slate: {
    border: 'border-slate-300 dark:border-slate-700',
    hover:
      'hover:border-slate-500 dark:hover:border-slate-500 hover:text-slate-900 dark:hover:text-slate-100 hover:bg-slate-100 dark:hover:bg-slate-800',
    text: 'text-slate-700 dark:text-slate-300',
    icon: 'text-slate-600 dark:text-slate-400',
    shadow: 'shadow-xs',
  },
  /**
   * Orange color scheme
   */
  orange: {
    border: 'border-orange-300 dark:border-orange-700',
    hover:
      'hover:border-orange-500 dark:hover:border-orange-500 hover:text-orange-700 dark:hover:text-orange-300 hover:bg-orange-100/50 dark:hover:bg-orange-900/30',
    text: '',
    icon: 'text-orange-600 dark:text-orange-400',
    shadow: '',
  },
  /**
   * Blue color scheme - Uses background for default variant
   */
  blue: {
    bg: 'bg-blue-600 hover:bg-blue-700 dark:bg-blue-700 dark:hover:bg-blue-600',
    border: 'border-blue-300 dark:border-blue-700',
    hover:
      'hover:border-blue-500 dark:hover:border-blue-500 hover:text-blue-700 dark:hover:text-blue-300 hover:bg-blue-100/50 dark:hover:bg-blue-900/30',
    text: 'text-black-300',
    icon: 'text-blue-600 dark:text-blue-400',
    shadow: 'shadow-xs',
  },
  /**
   * Indigo color scheme
   */
  indigo: {
    border: 'border-indigo-300 dark:border-indigo-700',
    hover:
      'hover:border-indigo-500 dark:hover:border-indigo-500 hover:text-indigo-700 dark:hover:text-indigo-300 hover:bg-indigo-100/50 dark:hover:bg-indigo-900/30',
    text: '',
    icon: 'text-indigo-600 dark:text-indigo-400',
    shadow: '',
  },
  /**
   * Purple color scheme
   */
  purple: {
    border: 'border-purple-300 dark:border-purple-700',
    hover:
      'hover:border-purple-500 dark:hover:border-purple-500 hover:text-purple-700 dark:hover:text-purple-300 hover:bg-purple-100/50 dark:hover:bg-purple-900/30',
    text: '',
    icon: 'text-purple-600 dark:text-purple-400',
    shadow: '',
  },
  /**
   * Amber color scheme for changelog
   */
  amber: {
    border: 'border-amber-300 dark:border-amber-700',
    hover:
      'hover:border-amber-500 dark:hover:border-amber-500 hover:text-amber-700 dark:hover:text-amber-300 hover:bg-amber-100/50 dark:hover:bg-amber-900/30',
    text: '',
    icon: 'text-amber-600 dark:text-amber-400',
    shadow: '',
  },
  /**
   * Teal color scheme - Used for theme toggle
   */
  teal: {
    border: 'border-teal-300 dark:border-teal-700',
    hover: 'hover:bg-teal-50 dark:hover:bg-teal-900/30 hover:text-teal-600 dark:hover:text-teal-400',
    text: '',
    icon: 'text-teal-500 dark:text-teal-400',
    shadow: '',
  },
};
