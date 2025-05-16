import { Badge } from '@/components/ui/badge';
import { cn } from '@/lib/utils';
import { useMemo } from 'react';

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
  'bg-blue-100 text-blue-800 border-blue-200 dark:bg-blue-900/30 dark:text-blue-200 dark:border-blue-700/50',
  'bg-green-100 text-green-800 border-green-200 dark:bg-green-900/30 dark:text-green-200 dark:border-green-700/50',
  'bg-amber-100 text-amber-800 border-amber-200 dark:bg-amber-900/30 dark:text-amber-200 dark:border-amber-700/50',
  'bg-indigo-100 text-indigo-800 border-indigo-200 dark:bg-indigo-900/30 dark:text-indigo-200 dark:border-indigo-700/50',
  'bg-violet-100 text-violet-800 border-violet-200 dark:bg-violet-900/30 dark:text-violet-200 dark:border-violet-700/50',
  'bg-pink-100 text-pink-800 border-pink-200 dark:bg-pink-900/30 dark:text-pink-200 dark:border-pink-700/50',
  'bg-cyan-100 text-cyan-800 border-cyan-200 dark:bg-cyan-900/30 dark:text-cyan-200 dark:border-cyan-700/50',
  'bg-orange-100 text-orange-800 border-orange-200 dark:bg-orange-900/30 dark:text-orange-200 dark:border-orange-700/50',
  'bg-purple-100 text-purple-800 border-purple-200 dark:bg-purple-900/30 dark:text-purple-200 dark:border-purple-700/50',
  'bg-red-100 text-red-800 border-red-200 dark:bg-red-900/30 dark:text-red-200 dark:border-red-700/50',
  'bg-teal-100 text-teal-800 border-teal-200 dark:bg-teal-900/30 dark:text-teal-200 dark:border-teal-700/50',
  'bg-emerald-100 text-emerald-800 border-emerald-200 dark:bg-emerald-900/30 dark:text-emerald-200 dark:border-emerald-700/50',
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
    <Badge variant="outline" className={cn('border px-2.5 py-0.5 text-xs font-medium shadow-sm', colorClass, className)}>
      {tech}
    </Badge>
  );
}
