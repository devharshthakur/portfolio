import { Badge } from '@/components/ui/badge';
import { CircleCheck } from 'lucide-react';
import React from 'react';

/**
 * AvailabilityBadge Component for Profile Section
 *
 * @description A compact badge component that clearly indicates availability status.
 * Designed to be eye-catching but not overwhelming.
 */
export function AvailabilityBadge({
  status = 'Available for hire',
  neonEffect = true,
}: {
  status?: string;
  neonEffect?: boolean;
}): React.ReactElement {
  return (
    <div className="relative mb-1 inline-flex items-center">
      <Badge
        variant="outline"
        className={`flex items-center gap-1.5 border-green-200 bg-green-50 px-2.5 py-1 font-medium text-green-700 dark:border-green-800 dark:bg-green-900/30 dark:text-green-400 ${neonEffect ? 'shadow-[0_0_10px_rgba(34,197,94,0.5)] transition-shadow duration-500 dark:shadow-[0_0_15px_rgba(34,197,94,0.3)]' : 'shadow-xs'} `}>
        <CircleCheck className={`h-3.5 w-3.5 ${neonEffect ? 'text-green-500 dark:text-green-400' : ''}`} />
        <span>{status}</span>
      </Badge>
    </div>
  );
}
