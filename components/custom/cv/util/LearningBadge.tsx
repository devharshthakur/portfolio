import { Card, CardContent } from '@/components/ui/card';
import { Sparkles } from 'lucide-react';
import React from 'react';

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
 * @param {React.ReactNode} [props.icon] - Optional custom icon for the badge
 *
 * @returns {React.ReactElement} A styled card highlighting a skill in learning
 */
export function LearningBadge({ skill, icon }: { skill: string; icon?: React.ReactNode }): React.ReactElement {
  return (
    <div className="relative">
      <div className="absolute -inset-1 rounded-md bg-indigo-400/20 blur-sm dark:bg-indigo-600/20"></div>
      <Card className="relative border border-l-2 border-indigo-300 border-l-indigo-500 bg-white/90 backdrop-blur-sm dark:border-indigo-700 dark:bg-black/40">
        <CardContent className="p-2">
          <div className="flex items-start gap-2">
            <div className="rounded-full bg-indigo-100 p-1 dark:bg-indigo-900/40">
              {icon || <Sparkles size={14} className="text-indigo-600 dark:text-indigo-400" />}
            </div>
            <div>
              <h4 className="mb-0.5 text-xs font-medium tracking-wider text-indigo-700 uppercase dark:text-indigo-400">Currently Learning</h4>
              <p className="text-sm font-medium text-slate-800 dark:text-slate-200">{skill}</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
