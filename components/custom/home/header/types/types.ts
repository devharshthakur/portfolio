/**
 * @file Contains TypeScript type definitions and interfaces for UI components
 * @description Centralizes type definitions to ensure type safety across the application
 */

import { buttonVariants } from '@/components/ui/button';
import { type VariantProps } from 'class-variance-authority';
import { LucideIcon } from 'lucide-react';
import * as React from 'react';
import { IconType } from 'react-icons';

/**
 * Represents an icon component from either Lucide React or React Icons
 * @typedef {LucideIcon | IconType} IconComponent
 */
export type IconComponent = LucideIcon | IconType;

/**
 * Interface for navigation items used in header, sidebar, and other navigation components
 * @interface NavItem
 * @property {string} href - URL path or external link for the navigation item
 * @property {string} label - Display text for the navigation item
 * @property {IconComponent} [icon] - Optional icon to display with the navigation item
 * @property {"default" | "outline"} [variant="outline"] - Button variant to use for the navigation item
 * @property {ColorScheme} [colorScheme] - Color scheme to apply to the navigation item
 * @property {boolean} [isExternal=false] - Whether the link points to an external resource
 */
export interface NavItem {
  href: string;
  label: string;
  icon?: IconComponent;
  variant?: 'default' | 'outline';
  colorScheme?: ColorScheme;
  isExternal?: boolean;
}

/**
 * Available color schemes for UI components
 * @typedef {string} ColorScheme
 */
export type ColorScheme = 'slate' | 'orange' | 'blue' | 'indigo' | 'purple' | 'teal' | 'amber';

/**
 * Defines the CSS classes for each aspect of a color scheme
 * @interface ColorSchemeStyles
 * @property {string} [border] - CSS classes for component border in this color scheme
 * @property {string} [bg] - CSS classes for component background in this color scheme
 * @property {string} [hover] - CSS classes for component hover state in this color scheme
 * @property {string} text - CSS classes for component text in this color scheme
 * @property {string} icon - CSS classes for component icon in this color scheme
 * @property {string} shadow - CSS classes for component shadow in this color scheme
 */
export interface ColorSchemeStyles {
  border?: string;
  bg?: string;
  hover?: string;
  text: string;
  icon: string;
  shadow: string;
}

/**
 * Props for the ColoredButton component
 * @interface ColoredButtonProps
 * @extends React.ComponentProps<"button">
 * @extends VariantProps<typeof buttonVariants>
 * @property {ColorScheme} [colorScheme="slate"] - Color scheme to apply to the button
 * @property {string} [href] - Optional URL for the button to link to
 * @property {IconComponent} [icon] - Optional icon to display with the button text
 * @property {string} label - Text to display on the button
 * @property {boolean} [isExternal=false] - Whether the link points to an external resource
 * @property {"default" | "outline"} [variant="outline"] - Button variant
 * @property {string} [className] - Additional CSS classes to apply
 */
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
