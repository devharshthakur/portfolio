import React from 'react';
import { Sparkles } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

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
 * @returns {React.ReactElement} A styled card highlighting a skill in learning
 */
export function LearningBadge({ skill }: { skill: string }): React.ReactElement {
  return (
    <div className="relative">
      <div className="absolute -inset-1 bg-indigo-400/20 dark:bg-indigo-600/20 rounded-md blur-sm"></div>
      <Card className="relative bg-white/90 dark:bg-black/40 backdrop-blur-sm border border-l-4 border-l-indigo-500 border-indigo-300 dark:border-indigo-700">
        <CardContent className="p-2">
          <div className="flex items-start gap-2">
            <div className="bg-indigo-100 dark:bg-indigo-900/40 p-1 rounded-full">
              <Sparkles size={14} className="text-indigo-600 dark:text-indigo-400" />
            </div>
            <div>
              <h4 className="text-xs uppercase tracking-wider font-medium text-indigo-700 dark:text-indigo-400 mb-0.5">Currently Learning</h4>
              <p className="text-sm font-medium text-slate-800 dark:text-slate-200">{skill}</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
