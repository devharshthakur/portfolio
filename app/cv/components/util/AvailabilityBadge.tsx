import React from 'react';
import { Badge } from '@/components/ui/badge';
import { Briefcase } from 'lucide-react';

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
    <div className="relative group inline-block">
      {/* Enhanced glow effect */}
      <div className="absolute -inset-0.5 bg-gradient-to-r from-yellow-400 to-amber-500 dark:from-yellow-500 dark:to-amber-600 rounded-full blur-sm opacity-75 group-hover:opacity-100 transition-all duration-300 animate-pulse"></div>

      <Badge
        variant="outline"
        className="relative border-2 border-yellow-400 dark:border-yellow-500 bg-white/90 dark:bg-black/60 backdrop-blur-sm py-1.5 px-3 shadow-md"
      >
        <div className="bg-gradient-to-br from-yellow-400 to-amber-500 dark:from-yellow-500 dark:to-amber-600 p-1 rounded-full mr-1.5">
          <Briefcase className="h-3 w-3 text-white" />
        </div>
        <span className="text-yellow-800 dark:text-yellow-200 font-medium">{status}</span>
        <span className="relative flex h-2 w-2 ml-1.5">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-yellow-500 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-2 w-2 bg-yellow-600 dark:bg-yellow-400"></span>
        </span>
      </Badge>
    </div>
  );
}
