export interface ChangelogEntry {
	id: string;
	title: string;
	category: string;
	description: string;
	changes: string[];
	colorTheme: {
		bg: string;
		darkBg: string;
		border?: string;
		darkBorder?: string;
		text: string;
		darkText: string;
		badgeBg: string;
		darkBadgeBg: string;
		badgeText: string;
		darkBadgeText: string;
	};
}

const changelog: ChangelogEntry[] = [
	{
		id: "data-consolidation",
		title: "Data Source Consolidation",
		category: "Architecture Update",
		description:
			"Implemented a single source of truth architecture for project and package data. All components now reference centralized data files, ensuring consistency and easier maintenance.",
		changes: [
			"Unified project and package data into centralized /data directory",
			"Eliminated duplicate data files across components",
			"Improved consistency across all pages displaying project information",
			"Simplified data updates - changes now only need to be made in one place",
			"Enhanced maintainability and reduced potential for data inconsistencies",
		],
		colorTheme: {
			bg: "bg-teal-100",
			darkBg: "dark:bg-teal-900/30",
			border: "border-white",
			darkBorder: "dark:border-background",
			text: "text-teal-600",
			darkText: "dark:text-teal-400",
			badgeBg: "bg-teal-100",
			darkBadgeBg: "dark:bg-teal-900/30",
			badgeText: "text-teal-800",
			darkBadgeText: "dark:text-teal-300",
		},
	},
	{
		id: "badge-redesign",
		title: "Home Page Badge Redesign",
		category: "UI Refinement",
		description:
			"Updated badges in both projects and packages sections to create a cleaner, more refined appearance with better visual hierarchy.",
		changes: [
			"Transitioned from filled backgrounds to outline style with colored borders",
			"Optimized badge sizing for a more compact, professional look",
			"Increased border thickness for improved visibility",
			"Applied consistent styling across all badge components",
			"Enhanced overall visual hierarchy with less intrusive design",
		],
		colorTheme: {
			bg: "bg-blue-100",
			darkBg: "dark:bg-blue-900/30",
			border: "border-white",
			darkBorder: "dark:border-background",
			text: "text-blue-600",
			darkText: "dark:text-blue-400",
			badgeBg: "bg-blue-100",
			darkBadgeBg: "dark:bg-blue-900/30",
			badgeText: "text-blue-800",
			darkBadgeText: "dark:text-blue-300",
		},
	},
	{
		id: "skills-additions",
		title: "Skills Page Additions",
		category: "Content Update",
		description:
			"Updated the skills page with new technologies and refined learning goals to better reflect current expertise and future directions.",
		changes: [
			"Added Rust programming language to currently learning skills",
			"Reorganized skill priorities to reflect current focus areas",
			"Maintained visual balance with consistent styling",
			"Updated skill categorization for clearer progression tracking",
		],
		colorTheme: {
			bg: "bg-orange-100",
			darkBg: "dark:bg-orange-900/30",
			border: "border-white",
			darkBorder: "dark:border-background",
			text: "text-orange-600",
			darkText: "dark:text-orange-400",
			badgeBg: "bg-orange-100",
			darkBadgeBg: "dark:bg-orange-900/30",
			badgeText: "text-orange-800",
			darkBadgeText: "dark:text-orange-300",
		},
	},
	{
		id: "tailwind-v4",
		title: "Tailwind CSS v4 Upgrade",
		category: "Framework Update",
		description:
			"Updated from Tailwind CSS v3 to v4, embracing the latest features and performance improvements for enhanced development experience.",
		changes: [
			"Improved build performance with faster compilation times",
			"Access to new utility classes and responsive variants",
			"Better dark mode implementation with improved color contrast",
			"Optimized CSS output for smaller bundle sizes",
		],
		colorTheme: {
			bg: "bg-green-100",
			darkBg: "dark:bg-green-900/30",
			border: "border-white",
			darkBorder: "dark:border-background",
			text: "text-green-600",
			darkText: "dark:text-green-400",
			badgeBg: "bg-green-100",
			darkBadgeBg: "dark:bg-green-900/30",
			badgeText: "text-green-800",
			darkBadgeText: "dark:text-green-300",
		},
	},
	{
		id: "projects-refinement",
		title: "Projects Page Refinement",
		category: "UI Enhancement",
		description:
			"Enhanced the projects page with a comprehensive redesign focusing on maximizing screen real estate and improving content presentation.",
		changes: [
			"Expanded layout utilizing full page width for better content display",
			"Improved color contrast for enhanced readability in dark mode",
			"Optimized project card layouts with better image presentation",
			"Refined typography and spacing for cleaner information hierarchy",
			"Enhanced tech stack badges with consistent, modern styling",
		],
		colorTheme: {
			bg: "bg-indigo-100",
			darkBg: "dark:bg-indigo-900/30",
			border: "border-white",
			darkBorder: "dark:border-background",
			text: "text-indigo-600",
			darkText: "dark:text-indigo-400",
			badgeBg: "bg-indigo-100",
			darkBadgeBg: "dark:bg-indigo-900/30",
			badgeText: "text-indigo-800",
			darkBadgeText: "dark:text-indigo-300",
		},
	},
	{
		id: "skills-redesign",
		title: "Skills Page Redesign",
		category: "Complete Redesign",
		description:
			"Complete overhaul transitioning from grid layout to a streamlined row-based design for improved visual flow and content scanning.",
		changes: [
			"Implemented row-based layout for better visual flow",
			"Improved skill categorization and grouping",
			"Enhanced visual consistency across all skill indicators",
			"Better mobile responsiveness with adaptive layouts",
			"Clearer skill proficiency representation",
		],
		colorTheme: {
			bg: "bg-purple-100",
			darkBg: "dark:bg-purple-900/30",
			border: "border-white",
			darkBorder: "dark:border-background",
			text: "text-purple-600",
			darkText: "dark:text-purple-400",
			badgeBg: "bg-purple-100",
			darkBadgeBg: "dark:bg-purple-900/30",
			badgeText: "text-purple-800",
			darkBadgeText: "dark:text-purple-300",
		},
	},
	{
		id: "about-redesign",
		title: "About Me Page Redesign",
		category: "Major Redesign",
		description:
			"Completely reimagined the About Me page with modern grid layout and enhanced visual elements for more engaging personal branding.",
		changes: [
			"Sophisticated grid layout with sticky profile sidebar",
			"Multi-color theme implementation for different sections",
			"Timeline-style journey section with visual flow indicators",
			"Enhanced visual hierarchy with subtle gradients and borders",
			"Improved mobile responsiveness with adaptive content arrangements",
		],
		colorTheme: {
			bg: "bg-rose-100",
			darkBg: "dark:bg-rose-900/30",
			border: "border-white",
			darkBorder: "dark:border-background",
			text: "text-rose-600",
			darkText: "dark:text-rose-400",
			badgeBg: "bg-rose-100",
			darkBadgeBg: "dark:bg-rose-900/30",
			badgeText: "text-rose-800",
			darkBadgeText: "dark:text-rose-300",
		},
	},
	{
		id: "cv-refinements",
		title: "CV Page Refinements",
		category: "UI Refinement",
		description:
			"Refined CV page design focusing on professional presentation with improved typography and better print optimization.",
		changes: [
			"Optimized spacing and layout for better content flow",
			"Enhanced typography for improved readability",
			"Added subtle visual separators for better structure",
			"Improved information grouping for skills and experience",
			"Better print optimization for physical CV copies",
		],
		colorTheme: {
			bg: "bg-amber-100",
			darkBg: "dark:bg-amber-900/30",
			border: "border-white",
			darkBorder: "dark:border-background",
			text: "text-amber-600",
			darkText: "dark:text-amber-400",
			badgeBg: "bg-amber-100",
			darkBadgeBg: "dark:bg-amber-900/30",
			badgeText: "text-amber-800",
			darkBadgeText: "dark:text-amber-300",
		},
	},
	{
		id: "dark-mode-enhancement",
		title: "Dark Mode Enhancement",
		category: "Color System",
		description:
			"Replaced slate colors with zinc for dark mode backgrounds, providing better contrast and more consistent color palette.",
		changes: [
			"Implemented consistent zinc-based color palette for dark mode",
			"Improved contrast ratios for better readability",
			"Harmonized color system across all components",
			"Balanced appearance between light and dark modes",
		],
		colorTheme: {
			bg: "bg-zinc-100",
			darkBg: "dark:bg-zinc-900/30",
			border: "border-white",
			darkBorder: "dark:border-background",
			text: "text-zinc-600",
			darkText: "dark:text-zinc-400",
			badgeBg: "bg-zinc-100",
			darkBadgeBg: "dark:bg-zinc-900/30",
			badgeText: "text-zinc-800",
			darkBadgeText: "dark:text-zinc-300",
		},
	},
	{
		id: "project-details-upgrade",
		title: "Project Details Visual Upgrade",
		category: "Component Enhancement",
		description:
			"Enhanced project details component with gradient backgrounds, color-coded icons, and interactive elements for better user engagement.",
		changes: [
			"Added gradient backgrounds for visual depth",
			"Implemented color-coded icons for category recognition",
			"Created interactive card elements with hover effects",
			"Improved information hierarchy and content structure",
			"Enhanced mobile responsiveness",
		],
		colorTheme: {
			bg: "bg-blue-100",
			darkBg: "dark:bg-blue-900/30",
			border: "border-white",
			darkBorder: "dark:border-background",
			text: "text-blue-600",
			darkText: "dark:text-blue-400",
			badgeBg: "bg-blue-100",
			darkBadgeBg: "dark:bg-blue-900/30",
			badgeText: "text-blue-800",
			darkBadgeText: "dark:text-blue-300",
		},
	},
	{
		id: "scroll-area-fix",
		title: "Scroll Area Optimization",
		category: "Bug Fix",
		description:
			"Fixed scroll area height issues in project cards to properly utilize available space and eliminate unnecessary scrollbars.",
		changes: [
			"Eliminated unnecessary scrollbars in project cards",
			"Optimized space utilization within components",
			"Improved content visibility and accessibility",
			"Enhanced reading experience for project descriptions",
		],
		colorTheme: {
			bg: "bg-green-100",
			darkBg: "dark:bg-green-900/30",
			border: "border-white",
			darkBorder: "dark:border-background",
			text: "text-green-600",
			darkText: "dark:text-green-400",
			badgeBg: "bg-green-100",
			darkBadgeBg: "dark:bg-green-900/30",
			badgeText: "text-green-800",
			darkBadgeText: "dark:text-green-300",
		},
	},
	{
		id: "code-organization",
		title: "Code Organization Improvements",
		category: "Code Structure",
		description:
			"Improved code organization with dedicated components and utility functions for better maintainability and reusability.",
		changes: [
			"Created dedicated SVG component directory for reusable graphics",
			"Implemented utility functions for consistent tech colors",
			"Added comprehensive documentation across all files",
			"Improved folder structure for logical code organization",
			"Enhanced code reusability throughout the application",
		],
		colorTheme: {
			bg: "bg-purple-100",
			darkBg: "dark:bg-purple-900/30",
			border: "border-white",
			darkBorder: "dark:border-background",
			text: "text-purple-600",
			darkText: "dark:text-purple-400",
			badgeBg: "bg-purple-100",
			darkBadgeBg: "dark:bg-purple-900/30",
			badgeText: "text-purple-800",
			darkBadgeText: "dark:text-purple-300",
		},
	},
	{
		id: "tech-color-system",
		title: "Tech Badge Color System",
		category: "Feature Improvement",
		description:
			"Replaced manual color mappings with deterministic algorithm that generates consistent colors based on technology names.",
		changes: [
			"Implemented deterministic color generation for tech badges",
			"Automatic color assignment for new technologies",
			"Ensured visual consistency across all tech indicators",
			"Balanced color distribution for improved aesthetics",
			"Better dark mode compatibility for generated colors",
		],
		colorTheme: {
			bg: "bg-amber-100",
			darkBg: "dark:bg-amber-900/30",
			border: "border-white",
			darkBorder: "dark:border-background",
			text: "text-amber-600",
			darkText: "dark:text-amber-400",
			badgeBg: "bg-amber-100",
			darkBadgeBg: "dark:bg-amber-900/30",
			badgeText: "text-amber-800",
			darkBadgeText: "dark:text-amber-300",
		},
	},
	{
		id: "code-formatting",
		title: "Code Formatting Optimization",
		category: "Developer Experience",
		description:
			"Modified Prettier configuration to reduce vertical spacing and improve code readability with consistent formatting.",
		changes: [
			"Integrated prettier-plugin-organize-imports for automatic import sorting",
			"Configured bracket and spacing options for cleaner code",
			"Created EditorConfig for consistent spacing across editors",
			"Standardized import organization structure",
			"Improved developer experience with unified formatting",
		],
		colorTheme: {
			bg: "bg-indigo-100",
			darkBg: "dark:bg-indigo-900/30",
			border: "border-white",
			darkBorder: "dark:border-background",
			text: "text-indigo-600",
			darkText: "dark:text-indigo-400",
			badgeBg: "bg-indigo-100",
			darkBadgeBg: "dark:bg-indigo-900/30",
			badgeText: "text-indigo-800",
			darkBadgeText: "dark:text-indigo-300",
		},
	},
];

export default changelog;
