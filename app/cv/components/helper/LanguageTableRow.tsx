import React from "react";
import { TableRow, TableCell } from "@/components/ui/table";

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
export function LanguageTableRow({
  language,
  proficiency,
}: {
  language: string;
  proficiency: string;
}): React.ReactElement {
  return (
    <TableRow>
      <TableCell>
        <span className="text-foreground">{language}</span>{" "}
        <span className="text-xs text-muted-foreground">({proficiency})</span>
      </TableCell>
    </TableRow>
  );
}
