import React from 'react';
import { TableRow, TableCell } from '@/components/ui/table';

/**
 * SkillsTableRow Component
 *
 * @description A table row component for displaying skills in the CV.
 * Each row displays a skill name with its corresponding description in a consistent format.
 * The skill name is emphasized with medium font weight and foreground color, while the
 * description is displayed in a muted color.
 *
 * @component
 * @param {Object} props - Component props
 * @param {string} props.name - The name of the skill or technology
 * @param {string} props.description - Description or details about the skill
 *
 * @example
 * ```tsx
 * <SkillsTableRow
 *   name="JavaScript"
 *   description="Node.js, React, Next.js"
 * />
 * ```
 *
 * @returns {React.ReactElement} A table row displaying a skill with its description
 */
export function SkillsTableRow({ name, description }: { name: string; description: string }): React.ReactElement {
  return (
    <TableRow>
      <TableCell>
        <span className="font-medium text-foreground">{name}:</span> <span className="text-muted-foreground">{description}</span>
      </TableCell>
    </TableRow>
  );
}
