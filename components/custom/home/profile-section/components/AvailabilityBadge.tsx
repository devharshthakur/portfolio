import React from 'react';
import { Badge } from '@/components/ui/badge';
import { CircleCheck } from 'lucide-react';

/**
 * AvailabilityBadge Component for Home Page
 *
 * @description A compact badge component that clearly indicates availability status.
 * Designed to be eye-catching but not overwhelming, making it ideal for the home page.
 *
 * @component
 * @param {Object} props - Component props
 * @param {string} [props.status="Available for hire"] - The current availability status
 * @param {boolean} [props.neonEffect=true] - Whether to add a subtle neon glow effect
 *
 * @example
 * ```tsx
 * <AvailabilityBadge status="Available for hire" neonEffect={true} />
 * ```
 *
 * @returns {React.ReactElement} A styled badge displaying availability status
 */
export function AvailabilityBadge({
  status = 'Available for hire',
  neonEffect = true,
}: {
  status?: string;
  neonEffect?: boolean;
}): React.ReactElement {
  return (
    <div className="relative inline-flex items-center mb-1">
      <Badge
        variant="outline"
        className={`
          bg-green-50 text-green-700 dark:bg-green-900/30 dark:text-green-400 
          border-green-200 dark:border-green-800 font-medium 
          flex items-center gap-1.5 px-2.5 py-1 
          ${neonEffect ? 'shadow-[0_0_10px_rgba(34,197,94,0.5)] dark:shadow-[0_0_15px_rgba(34,197,94,0.3)] transition-shadow duration-500' : 'shadow-xs'}
        `}
      >
        <CircleCheck className={`h-3.5 w-3.5 ${neonEffect ? 'text-green-500 dark:text-green-400' : ''}`} />
        <span>{status}</span>
      </Badge>
    </div>
  );
}
