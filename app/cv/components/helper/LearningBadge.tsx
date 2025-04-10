import React from "react";
import { Sparkles } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

/**
 * LearningBadge Component
 *
 * @description A component that displays a visually distinctive badge highlighting
 * technologies or skills currently being learned. Uses indigo color scheme
 * to match the Skills section it appears under.
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
    <Card className="border-l-4 border-l-indigo-500 bg-indigo-50/30 dark:bg-indigo-950/10 border border-indigo-200 dark:border-indigo-800/40">
      <CardContent className="p-3">
        <div className="flex items-start gap-2">
          <Sparkles
            size={18}
            className="text-indigo-600 dark:text-indigo-400 mt-0.5"
          />
          <div>
            <h4 className="text-indigo-700 dark:text-indigo-400 font-medium text-xs uppercase tracking-wider mb-1">
              Currently Learning:
            </h4>
            <p className="text-sm text-foreground font-medium">{skill}</p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
