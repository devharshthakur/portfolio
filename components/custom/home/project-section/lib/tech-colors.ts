/**
 * Tech tag color utilities for consistent color coding across the application
 */

// Color classes for tech tags
export const techColors = [
  {
    bgLight: "bg-blue-100",
    bgDark: "dark:bg-blue-900/40",
    textLight: "text-blue-800",
    textDark: "dark:text-blue-200",
    borderLight: "border-blue-200",
    borderDark: "dark:border-blue-700",
    hoverLight: "hover:bg-blue-200",
    hoverDark: "dark:hover:bg-blue-800/50",
  },
  {
    bgLight: "bg-green-100",
    bgDark: "dark:bg-green-900/40",
    textLight: "text-green-800",
    textDark: "dark:text-green-200",
    borderLight: "border-green-200",
    borderDark: "dark:border-green-700",
    hoverLight: "hover:bg-green-200",
    hoverDark: "dark:hover:bg-green-800/50",
  },
  {
    bgLight: "bg-amber-100",
    bgDark: "dark:bg-amber-900/40",
    textLight: "text-amber-800",
    textDark: "dark:text-amber-200",
    borderLight: "border-amber-200",
    borderDark: "dark:border-amber-700",
    hoverLight: "hover:bg-amber-200",
    hoverDark: "dark:hover:bg-amber-800/50",
  },
  {
    bgLight: "bg-indigo-100",
    bgDark: "dark:bg-indigo-900/40",
    textLight: "text-indigo-800",
    textDark: "dark:text-indigo-200",
    borderLight: "border-indigo-200",
    borderDark: "dark:border-indigo-700",
    hoverLight: "hover:bg-indigo-200",
    hoverDark: "dark:hover:bg-indigo-800/50",
  },
  {
    bgLight: "bg-pink-100",
    bgDark: "dark:bg-pink-900/40",
    textLight: "text-pink-800",
    textDark: "dark:text-pink-200",
    borderLight: "border-pink-200",
    borderDark: "dark:border-pink-700",
    hoverLight: "hover:bg-pink-200",
    hoverDark: "dark:hover:bg-pink-800/50",
  },
  {
    bgLight: "bg-purple-100",
    bgDark: "dark:bg-purple-900/40",
    textLight: "text-purple-800",
    textDark: "dark:text-purple-200",
    borderLight: "border-purple-200",
    borderDark: "dark:border-purple-700",
    hoverLight: "hover:bg-purple-200",
    hoverDark: "dark:hover:bg-purple-800/50",
  },
  {
    bgLight: "bg-orange-100",
    bgDark: "dark:bg-orange-900/40",
    textLight: "text-orange-800",
    textDark: "dark:text-orange-200",
    borderLight: "border-orange-200",
    borderDark: "dark:border-orange-700",
    hoverLight: "hover:bg-orange-200",
    hoverDark: "dark:hover:bg-orange-800/50",
  },
  {
    bgLight: "bg-red-100",
    bgDark: "dark:bg-red-900/40",
    textLight: "text-red-800",
    textDark: "dark:text-red-200",
    borderLight: "border-red-200",
    borderDark: "dark:border-red-700",
    hoverLight: "hover:bg-red-200",
    hoverDark: "dark:hover:bg-red-800/50",
  },
  {
    bgLight: "bg-teal-100",
    bgDark: "dark:bg-teal-900/40",
    textLight: "text-teal-800",
    textDark: "dark:text-teal-200",
    borderLight: "border-teal-200",
    borderDark: "dark:border-teal-700",
    hoverLight: "hover:bg-teal-200",
    hoverDark: "dark:hover:bg-teal-800/50",
  },
  {
    bgLight: "bg-cyan-100",
    bgDark: "dark:bg-cyan-900/40",
    textLight: "text-cyan-800",
    textDark: "dark:text-cyan-200",
    borderLight: "border-cyan-200",
    borderDark: "dark:border-cyan-700",
    hoverLight: "hover:bg-cyan-200",
    hoverDark: "dark:hover:bg-cyan-800/50",
  },
  {
    bgLight: "bg-emerald-100",
    bgDark: "dark:bg-emerald-900/40",
    textLight: "text-emerald-800",
    textDark: "dark:text-emerald-200",
    borderLight: "border-emerald-200",
    borderDark: "dark:border-emerald-700",
    hoverLight: "hover:bg-emerald-200",
    hoverDark: "dark:hover:bg-emerald-800/50",
  },
  {
    bgLight: "bg-violet-100",
    bgDark: "dark:bg-violet-900/40",
    textLight: "text-violet-800",
    textDark: "dark:text-violet-200",
    borderLight: "border-violet-200",
    borderDark: "dark:border-violet-700",
    hoverLight: "hover:bg-violet-200",
    hoverDark: "dark:hover:bg-violet-800/50",
  },
];

/**
 * Get color classes for a tech tag based on the tech name
 * Uses a simple hash function to deterministically assign colors
 *
 * @param techName - The name of the technology
 * @returns Object with Tailwind classes for the tech tag styling
 */
export function getTechTagColors(techName: string) {
  // Simple hash function for deterministic color selection
  let hash = 0;
  for (let i = 0; i < techName.length; i++) {
    hash = (hash + techName.charCodeAt(i)) % techColors.length;
  }

  const color = techColors[hash];

  return {
    background: `${color.bgLight} ${color.bgDark}`,
    text: `${color.textLight} ${color.textDark}`,
    textLight: color.textLight,
    textDark: color.textDark,
    border: `${color.borderLight} ${color.borderDark}`,
    hover: `${color.hoverLight} ${color.hoverDark}`,
  };
}
