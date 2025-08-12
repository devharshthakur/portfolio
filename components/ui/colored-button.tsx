/**
 * @file ColoredButton component for consistent styling across the application
 * @description A reusable button component that handles different link types with custom styling
 */

import { ColoredButtonProps } from "@/components/custom/home/header/types/types";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Link from "next/link";

/**
 * ColoredButton component
 *
 * A versatile button component that handles different link types (internal links, external links, and regular buttons).
 * Styling is now handled through Tailwind CSS classes passed via the className prop.
 *
 * @component
 * @example
 * // Basic usage with custom styling
 * <ColoredButton 
 *   label="Click me" 
 *   className="border-blue-300 hover:border-blue-500 text-blue-600" 
 * />
 *
 * @example
 * // As a link with an icon
 * <ColoredButton
 *   href="/about"
 *   label="About"
 *   icon={InfoIcon}
 *   className="border-purple-300 hover:border-purple-500 text-purple-600"
 * />
 *
 * @example
 * // As an external link
 * <ColoredButton
 *   href="https://example.com"
 *   label="External Link"
 *   isExternal
 *   className="border-orange-300 hover:border-orange-500 text-orange-600"
 * />
 *
 * @param {Object} props - Component props
 * @param {string} [props.href] - URL to navigate to when clicked (makes button a link)
 * @param {IconComponent} [props.icon] - Icon component to display alongside the label
 * @param {string} props.label - Text to display on the button
 * @param {"default" | "outline"} [props.variant="outline"] - Button variant
 * @param {string} [props.className] - Tailwind CSS classes for styling
 * @param {boolean} [props.isExternal=false] - Whether the href is an external URL
 * @returns {JSX.Element} Rendered button or link component
 */
export function ColoredButton({
	href,
	icon: Icon,
	label,
	variant = "outline",
	className,
	isExternal = false,
	...props
}: ColoredButtonProps) {
	// Combine base classes with custom styling
	const buttonClasses = cn(
		"text-sm whitespace-nowrap sm:text-base shadow-sm",
		className,
	);

	// Create the content with icon if present
	const content = (
		<>
			{Icon && <Icon className="h-4 w-4 sm:h-5 sm:w-5" />}
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
