import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import { useMemo } from "react";

/**
 * Tech Badge Component
 *
 * Renders a styled badge for technology stack items with consistent color coding.
 * The component categorizes technologies and assigns colors deterministically based on
 * the technology name and optional index, ensuring the same technology always gets the
 * same color within a project while maintaining visual diversity.
 *
 * @param {Object} props - Component props
 * @param {string} props.tech - The technology name to display
 * @param {string} [props.className] - Optional additional CSS classes
 * @param {number} [props.index] - Optional index to help with color randomization
 * @returns {JSX.Element} A styled badge component
 */

interface TechBadgeProps {
  tech: string;
  className?: string;
  index?: number;
}

// Pre-defined color classes - less verbose, same visual effect
const colors = [
  "bg-blue-100 text-blue-800 dark:bg-blue-950/40 dark:text-blue-300",
  "bg-green-100 text-green-800 dark:bg-green-950/40 dark:text-green-300",
  "bg-amber-100 text-amber-800 dark:bg-amber-950/40 dark:text-amber-300",
  "bg-indigo-100 text-indigo-800 dark:bg-indigo-950/40 dark:text-indigo-300",
  "bg-violet-100 text-violet-800 dark:bg-violet-950/40 dark:text-violet-300",
  "bg-pink-100 text-pink-800 dark:bg-pink-950/40 dark:text-pink-300",
  "bg-cyan-100 text-cyan-800 dark:bg-cyan-950/40 dark:text-cyan-300",
  "bg-orange-100 text-orange-800 dark:bg-orange-950/40 dark:text-orange-300",
  "bg-purple-100 text-purple-800 dark:bg-purple-950/40 dark:text-purple-300",
  "bg-red-100 text-red-800 dark:bg-red-950/40 dark:text-red-300",
  "bg-teal-100 text-teal-800 dark:bg-teal-950/40 dark:text-teal-300",
  "bg-emerald-100 text-emerald-800 dark:bg-emerald-950/40 dark:text-emerald-300",
];

export function TechBadge({ tech, className, index = 0 }: TechBadgeProps) {
  // Simple hash function for deterministic color selection
  const colorClass = useMemo(() => {
    let hash = 0;
    for (let i = 0; i < tech.length; i++) {
      hash = (hash + tech.charCodeAt(i)) % colors.length;
    }
    return colors[(hash + index) % colors.length];
  }, [tech, index]);

  return (
    <Badge
      variant="outline"
      className={cn(
        "border px-2.5 py-0.5 text-xs font-medium",
        colorClass,
        className,
      )}
    >
      {tech}
    </Badge>
  );
}
