/**
 * @file tech-color-utils.ts
 * @description Utility functions for managing technology badge colors
 * Provides a consistent way to color-code different technology badges across the application
 */

/**
 * Array of color combinations for tech badges with Tailwind classes
 * Each entry contains all necessary classes for a complete badge styling
 */
const COLOR_SCHEMES = [
	"bg-blue-50 text-blue-700 border-blue-200 dark:bg-blue-900/30 dark:text-blue-300 dark:border-blue-800/50 hover:bg-blue-100 dark:hover:bg-blue-800/40",
	"bg-green-50 text-green-700 border-green-200 dark:bg-green-900/30 dark:text-green-300 dark:border-green-800/50 hover:bg-green-100 dark:hover:bg-green-800/40",
	"bg-yellow-50 text-yellow-700 border-yellow-200 dark:bg-yellow-900/30 dark:text-yellow-300 dark:border-yellow-800/50 hover:bg-yellow-100 dark:hover:bg-yellow-800/40",
	"bg-indigo-50 text-indigo-700 border-indigo-200 dark:bg-indigo-900/30 dark:text-indigo-300 dark:border-indigo-800/50 hover:bg-indigo-100 dark:hover:bg-indigo-800/40",
	"bg-pink-50 text-pink-700 border-pink-200 dark:bg-pink-900/30 dark:text-pink-300 dark:border-pink-800/50 hover:bg-pink-100 dark:hover:bg-pink-800/40",
	"bg-purple-50 text-purple-700 border-purple-200 dark:bg-purple-900/30 dark:text-purple-300 dark:border-purple-800/50 hover:bg-purple-100 dark:hover:bg-purple-800/40",
	"bg-orange-50 text-orange-700 border-orange-200 dark:bg-orange-900/30 dark:text-orange-300 dark:border-orange-800/50 hover:bg-orange-100 dark:hover:bg-orange-800/40",
	"bg-red-50 text-red-700 border-red-200 dark:bg-red-900/30 dark:text-red-300 dark:border-red-800/50 hover:bg-red-100 dark:hover:bg-red-800/40",
	"bg-amber-50 text-amber-700 border-amber-200 dark:bg-amber-900/30 dark:text-amber-300 dark:border-amber-800/50 hover:bg-amber-100 dark:hover:bg-amber-800/40",
	"bg-cyan-50 text-cyan-700 border-cyan-200 dark:bg-cyan-900/30 dark:text-cyan-300 dark:border-cyan-800/50 hover:bg-cyan-100 dark:hover:bg-cyan-800/40",
	"bg-emerald-50 text-emerald-700 border-emerald-200 dark:bg-emerald-900/30 dark:text-emerald-300 dark:border-emerald-800/50 hover:bg-emerald-100 dark:hover:bg-emerald-800/40",
	"bg-rose-50 text-rose-700 border-rose-200 dark:bg-rose-900/30 dark:text-rose-300 dark:border-rose-800/50 hover:bg-rose-100 dark:hover:bg-rose-800/40",
	"bg-teal-50 text-teal-700 border-teal-200 dark:bg-teal-900/30 dark:text-teal-300 dark:border-teal-800/50 hover:bg-teal-100 dark:hover:bg-teal-800/40",
	"bg-lime-50 text-lime-700 border-lime-200 dark:bg-lime-900/30 dark:text-lime-300 dark:border-lime-800/50 hover:bg-lime-100 dark:hover:bg-lime-800/40",
	"bg-slate-50 text-slate-700 border-slate-200 dark:bg-slate-900/30 dark:text-slate-300 dark:border-slate-800/50 hover:bg-slate-100 dark:hover:bg-slate-800/40",
	"bg-violet-50 text-violet-700 border-violet-200 dark:bg-violet-900/30 dark:text-violet-300 dark:border-violet-800/50 hover:bg-violet-100 dark:hover:bg-violet-800/40",
];

/**
 * Special tech mappings to ensure certain key technologies always get the same colors
 * for consistent branding across the portfolio
 */
const SPECIAL_TECH_MAPPINGS: Record<string, number> = {
	React: 0,
	"Next.js": 11,
	TypeScript: 3,
	JavaScript: 2,
	"Node.js": 1,
	GraphQL: 4,
	Tailwind: 9,
	MongoDB: 1,
	PostgreSQL: 0,
	AI: 5,
	Blockchain: 7,
};

/**
 * Deterministically generates a color for a technology based on its name
 * Uses a hash function to ensure consistent colors for the same tech
 *
 * @param tech - The technology name to get a color for
 * @returns The index of the color in the COLOR_SCHEMES array
 */
function getColorIndexForTech(tech: string): number {
	// Check if this is a specially mapped technology
	const normalizedTech = tech.trim().toLowerCase();
	for (const [specialTech, colorIndex] of Object.entries(SPECIAL_TECH_MAPPINGS)) {
		if (
			normalizedTech === specialTech.toLowerCase() ||
			normalizedTech.includes(specialTech.toLowerCase())
		) {
			return colorIndex;
		}
	}

	// Otherwise use hash algorithm for consistent color assignment
	let hash = 0;
	for (let i = 0; i < tech.length; i++) {
		hash = ((hash + tech.charCodeAt(i)) * 31) % COLOR_SCHEMES.length;
	}
	return hash;
}

/**
 * Gets the appropriate Tailwind CSS classes for a technology badge
 * Uses a deterministic algorithm to assign colors based on tech name
 *
 * @param tech - The technology name to get colors for
 * @returns A string of Tailwind CSS classes
 */
export function getTechColor(tech: string): string {
	const colorIndex = getColorIndexForTech(tech);
	return COLOR_SCHEMES[colorIndex];
}
