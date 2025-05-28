/**
 * @file Contains TypeScript type definitions and interfaces for UI components
 * @description Centralizes type definitions to ensure type safety across the application
 */

import { LucideIcon } from 'lucide-react';
import { IconType } from 'react-icons';

export type IconComponent = LucideIcon | IconType;

/**
 * Interface for navigation items used in header, sidebar, and other navigation components
 */
export interface NavItem {
  href: string;
  label: string;
  icon?: IconComponent;
  variant?: 'default' | 'outline';
  colorScheme?: ColorScheme;
  isExternal?: boolean;
}

export type ColorScheme = 'slate' | 'orange' | 'blue' | 'indigo' | 'purple' | 'teal' | 'amber';

export interface ColorSchemeStyles {
  border?: string;
  bg?: string;
  hover?: string;
  text: string;
  icon: string;
  shadow: string;
}

export interface ColoredButtonProps {
  colorScheme?: ColorScheme;
  href?: string;
  icon?: IconComponent;
  label: string;
  isExternal?: boolean;
  variant?: 'default' | 'outline';
  className?: string;
  asChild?: boolean;
}
