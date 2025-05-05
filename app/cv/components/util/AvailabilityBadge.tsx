import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Sparkles } from 'lucide-react';

/**
 * AvailabilityBadge Component
 *
 * @description A component that displays a styled badge showing the current professional availability status.
 * It's designed to stand out visually with a subtle background and border, and uses a yellow color scheme
 * to indicate availability (could be modified for other statuses).
 *
 * @component
 * @param {Object} props - Component props
 * @param {string} [props.status="Available for hire"] - The current availability status
 *
 * @example
 * ```tsx
 * <AvailabilityBadge status="Available for hire" />
 * ```
 *
 * @returns {React.ReactElement} A styled card displaying availability status
 */
export function AvailabilityBadge({ status = 'Available for hire' }: { status?: string }): React.ReactElement {
  return (
    <div className="relative group">
      <div className="absolute -inset-1 bg-yellow-400/30 dark:bg-yellow-600/30 rounded-md blur-sm opacity-70 group-hover:opacity-100 transition-all duration-300"></div>
      <Card className="relative bg-white/80 dark:bg-black/40 backdrop-blur-sm border-2 border-yellow-400 dark:border-yellow-600 overflow-hidden shadow-md">
        <div className="absolute -right-6 -top-6 w-12 h-12 bg-yellow-400/20 dark:bg-yellow-600/20 rounded-full blur-md"></div>
        <CardContent className="p-2 flex items-center gap-2 relative">
          <Sparkles className="h-4 w-4 text-yellow-600 dark:text-yellow-400" />
          <div className="text-sm text-yellow-800 dark:text-yellow-300 font-medium">
            <div className="flex items-center gap-2">
              <span>{status}</span>
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-yellow-500 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-yellow-600 dark:bg-yellow-400"></span>
              </span>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
