import { TableCell, TableRow } from '@/components/ui/table';
import React from 'react';

/**
 * LanguageTableRow Component
 *
 * @description A table row component specifically for displaying language proficiency information in the CV.
 * Each row shows a language name followed by the proficiency level in parentheses with different styling
 * to create visual hierarchy.
 *
 * @component
 * @param {Object} props - Component props
 * @param {string} props.language - The name of the language
 * @param {string} props.proficiency - The proficiency level description
 *
 * @example
 * ```tsx
 * <LanguageTableRow
 *   language="English"
 *   proficiency="Professional Working Proficiency"
 * />
 * ```
 *
 * @returns {React.ReactElement} A table row displaying language and proficiency information
 */
export function LanguageTableRow({ language, proficiency }: { language: string; proficiency: string }): React.ReactElement {
  return (
    <TableRow className="hover:bg-amber-50/50 dark:hover:bg-amber-950/10">
      <TableCell>
        <span className="font-medium text-amber-800 dark:text-amber-300">{language}</span>{' '}
        <span className="text-xs text-amber-700/70 dark:text-amber-400/70">({proficiency})</span>
      </TableCell>
    </TableRow>
  );
}
