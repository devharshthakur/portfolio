import React from "react";
import { Sparkles } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

/**
 * LearningBadge Component
 *
 * @description A component that displays a visually distinctive badge highlighting
 * technologies or skills currently being learned. Uses amber/yellow color scheme
 * to draw attention and indicate "in progress" status.
 *
 * @component
 * @param {Object} props - Component props
 * @param {string} props.skill - The skill or technology being learned
 *
 * @example
 * ```tsx
 * <LearningBadge skill="Rust Programming Language" />
 * ```
 *
 * @returns {React.ReactElement} A styled card highlighting a skill in learning
 */
export function LearningBadge({
  skill,
}: {
  skill: string;
}): React.ReactElement {
  return (
    <Card className="border-l-4 border-l-amber-500 bg-amber-500/5">
      <CardContent className="p-3">
        <div className="flex items-start gap-2">
          <Sparkles size={18} className="text-amber-500 mt-0.5" />
          <div>
            <h4 className="text-amber-700 dark:text-amber-400 font-medium text-xs uppercase tracking-wider mb-1">
              Currently Learning:
            </h4>
            <p className="text-sm text-foreground font-medium">{skill}</p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
