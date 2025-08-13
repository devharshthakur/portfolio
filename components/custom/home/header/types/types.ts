/**
 * @file Contains TypeScript type definitions and interfaces for UI components
 * @description Centralizes type definitions to ensure type safety across the application
 */

import { LucideIcon } from "lucide-react";
import { IconType } from "react-icons";

export type IconComponent = LucideIcon | IconType;

export interface ColoredButtonProps {
	href?: string;
	icon?: IconComponent;
	label: string;
	isExternal?: boolean;
	variant?: "default" | "outline";
	className?: string;
	asChild?: boolean;
}
