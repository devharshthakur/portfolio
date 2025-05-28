/**
 * @file ColoredButton component for consistent styling across the application
 * @description A reusable button component that applies color schemes and handles different link types
 */

import { COLOR_SCHEMES } from '@/components/custom/home/header/lib/constants';
import { ColoredButtonProps, ColorScheme } from '@/components/custom/home/header/types/types';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import Link from 'next/link';

/**
 * ColoredButton component
 *
 * A versatile button component that applies consistent styling based on color schemes
 * and handles different link types (internal links, external links, and regular buttons).
 *
 * @component
 * @example
 * // Basic usage
 * <ColoredButton label="Click me" colorScheme="blue" />
 *
 * @example
 * // As a link with an icon
 * <ColoredButton
 *   href="/about"
 *   label="About"
 *   icon={InfoIcon}
 *   colorScheme="purple"
 * />
 *
 * @example
 * // As an external link
 * <ColoredButton
 *   href="https://example.com"
 *   label="External Link"
 *   isExternal
 *   colorScheme="orange"
 * />
 *
 * @param {Object} props - Component props
 * @param {ColorScheme} [props.colorScheme="slate"] - Color scheme to apply to the button
 * @param {string} [props.href] - URL to navigate to when clicked (makes button a link)
 * @param {IconComponent} [props.icon] - Icon component to display alongside the label
 * @param {string} props.label - Text to display on the button
 * @param {"default" | "outline"} [props.variant="outline"] - Button variant
 * @param {string} [props.className] - Additional CSS classes to apply
 * @param {boolean} [props.isExternal=false] - Whether the href is an external URL
 * @returns {JSX.Element} Rendered button or link component
 */
export function ColoredButton({
  colorScheme = 'slate',
  href,
  icon: Icon,
  label,
  variant = 'outline',
  className,
  isExternal = false,
  ...props
}: ColoredButtonProps) {
  // Get the color scheme styles from constants
  const scheme = COLOR_SCHEMES[colorScheme as ColorScheme];

  // Combine all the classes from the color scheme
  const buttonClasses = cn(
    variant === 'default' && scheme.bg,
    variant === 'outline' && scheme.border,
    scheme.hover,
    scheme.text,
    scheme.shadow,
    'text-sm whitespace-nowrap sm:text-base',
    className,
  );

  // Create the content with icon if present
  const content = (
    <>
      {Icon && <Icon className={cn('h-4 w-4 sm:h-5 sm:w-5', scheme.icon)} />}
      <span className="truncate">{label}</span>
    </>
  );

  // Regular button (no link)
  if (!href) {
    return (
      <Button variant={variant} className={buttonClasses} {...props}>
        {content}
      </Button>
    );
  }

  // External link
  if (isExternal) {
    return (
      <Button variant={variant} asChild className={buttonClasses} {...props}>
        <a href={href} className="flex items-center gap-1.5 sm:gap-2">
          {content}
        </a>
      </Button>
    );
  }

  // Internal Next.js link
  return (
    <Button variant={variant} asChild className={buttonClasses} {...props}>
      <Link href={href} className="flex items-center gap-1.5 sm:gap-2" prefetch={true}>
        {content}
      </Link>
    </Button>
  );
}
