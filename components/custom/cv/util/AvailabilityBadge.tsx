import { Badge } from '@/components/ui/badge';
import { Briefcase } from 'lucide-react';
import React from 'react';

/**
 * AvailabilityBadge Component
 *
 * @description A component that displays a styled badge showing the current professional availability status.
 * Now using Shadcn Badge component with a glowing effect and Briefcase icon.
 *
 * @component
 * @param {Object} props - Component props
 * @param {string} [props.status="Available for hire"] - The current availability status
 *
 * @returns {React.ReactElement} A styled badge displaying availability status
 */
export function AvailabilityBadge({ status = 'Available for hire' }: { status?: string }): React.ReactElement {
  return (
    <div className="group relative inline-block">
      {/* Enhanced glow effect */}
      <div className="absolute -inset-0.5 animate-pulse rounded-full bg-gradient-to-r from-yellow-400 to-amber-500 opacity-75 blur-sm transition-all duration-300 group-hover:opacity-100 dark:from-yellow-500 dark:to-amber-600"></div>

      <Badge
        variant="outline"
        className="relative border-2 border-yellow-400 bg-white/90 px-3 py-1.5 shadow-md backdrop-blur-sm dark:border-yellow-500 dark:bg-black/60">
        <div className="mr-1.5 rounded-full bg-gradient-to-br from-yellow-400 to-amber-500 p-1 dark:from-yellow-500 dark:to-amber-600">
          <Briefcase className="h-3 w-3 text-white" />
        </div>
        <span className="font-medium text-yellow-800 dark:text-yellow-200">{status}</span>
        <span className="relative ml-1.5 flex h-2 w-2">
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-yellow-500 opacity-75"></span>
          <span className="relative inline-flex h-2 w-2 rounded-full bg-yellow-600 dark:bg-yellow-400"></span>
        </span>
      </Badge>
    </div>
  );
}
