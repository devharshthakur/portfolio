import type { ChangelogEntry } from '@/data/changelog.data';
import { CheckCircle2 } from 'lucide-react';

interface ChangelogTimelineProps {
  entries: ChangelogEntry[];
}

export function ChangelogTimeline({ entries }: ChangelogTimelineProps) {
  return (
    <div className="relative mx-auto max-w-4xl space-y-20 border-l-2 border-slate-200 pl-12 dark:border-slate-800">
      {entries.map((entry, index) => (
        <div key={entry.id} className="relative">
          {/* Timeline node */}
          <div className="absolute top-0 -left-[29px]">
            <div
              className={`h-14 w-14 rounded-full ${entry.colorTheme.bg} ${entry.colorTheme.darkBg} border-4 ${entry.colorTheme.border || ''} ${entry.colorTheme.darkBorder || ''} flex items-center justify-center shadow-sm`}>
              <CheckCircle2 className={`h-6 w-6 ${entry.colorTheme.text} ${entry.colorTheme.darkText}`} />
            </div>
          </div>

          {/* Content */}
          <div className="pl-8">
            {/* Category badge */}
            <span
              className={`inline-block rounded-full px-3 py-1 text-xs font-medium ${entry.colorTheme.badgeBg} ${entry.colorTheme.darkBadgeBg} ${entry.colorTheme.badgeText} ${entry.colorTheme.darkBadgeText} mb-3`}>
              {entry.category}
            </span>

            {/* Title */}
            <h3 className="mb-3 text-xl font-bold text-slate-800 md:text-2xl dark:text-slate-100">{entry.title}</h3>

            {/* Description and changes */}
            <div className="prose dark:prose-invert prose-slate mb-8 max-w-none">
              <p>{entry.description}</p>
              <ul className="mt-3 space-y-1.5">
                {entry.changes.map((change, changeIndex) => (
                  <li key={changeIndex}>{change}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
