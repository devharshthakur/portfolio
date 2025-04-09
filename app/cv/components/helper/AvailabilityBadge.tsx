import React from "react";
import { Card, CardContent } from "@/components/ui/card";

/**
 * AvailabilityBadge Component
 *
 * @description A component that displays a styled badge showing the current professional availability status.
 * It's designed to stand out visually with a subtle background and border, and uses a green color scheme
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
export function AvailabilityBadge({
  status = "Available for hire",
}: {
  status?: string;
}): React.ReactElement {
  return (
    <Card className="bg-primary/5 border-2 border-primary/20">
      <CardContent className="p-3 flex items-center gap-2">
        <div className="text-xs text-primary font-medium">
          <div className="flex items-center gap-1">
            <span>Status:</span>
            <span className="bg-green-500/20 text-green-600 dark:text-green-400 px-2 py-0.5 rounded-full text-[10px] uppercase font-bold tracking-wider">
              {status}
            </span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
