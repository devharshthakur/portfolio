import { CheckCircle2 } from 'lucide-react';
import type { ChangelogEntry } from '@/data/changelog.data';

interface ChangelogTimelineProps {
  entries: ChangelogEntry[];
}

export function ChangelogTimeline({ entries }: ChangelogTimelineProps) {
  return (
    <div className="relative pl-12 border-l-2 border-slate-200 dark:border-slate-800 space-y-20 max-w-4xl mx-auto">
      {entries.map((entry, index) => (
        <div key={entry.id} className="relative">
          {/* Timeline node */}
          <div className="absolute -left-[29px] top-0">
            <div
              className={`h-14 w-14 rounded-full ${entry.colorTheme.bg} ${entry.colorTheme.darkBg} border-4 ${entry.colorTheme.border || ''} ${entry.colorTheme.darkBorder || ''} flex items-center justify-center shadow-sm`}
            >
              <CheckCircle2 className={`h-6 w-6 ${entry.colorTheme.text} ${entry.colorTheme.darkText}`} />
            </div>
          </div>

          {/* Content */}
          <div className="pl-8">
            {/* Category badge */}
            <span
              className={`inline-block px-3 py-1 rounded-full text-xs font-medium ${entry.colorTheme.badgeBg} ${entry.colorTheme.darkBadgeBg} ${entry.colorTheme.badgeText} ${entry.colorTheme.darkBadgeText} mb-3`}
            >
              {entry.category}
            </span>

            {/* Title */}
            <h3 className="text-xl md:text-2xl font-bold text-slate-800 dark:text-slate-100 mb-3">{entry.title}</h3>

            {/* Description and changes */}
            <div className="prose dark:prose-invert prose-slate max-w-none mb-8">
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
