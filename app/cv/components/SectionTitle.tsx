import React from "react";
import { Card, CardHeader, CardTitle } from "@/components/ui/card";

/**
 * SectionTitle Component
 *
 * @description A standardized section header component used throughout the CV to maintain visual consistency.
 * The component wraps each section title in a styled card with a border and custom styling.
 *
 * @component
 * @param {Object} props - Component props
 * @param {React.ReactNode} props.icon - Icon element to display next to the title
 * @param {React.ReactNode} props.title - The title text or element to display
 *
 * @example
 * ```tsx
 * <SectionTitle icon={<User size={16} />} title="Profile" />
 * // Or with a React element as title
 * <SectionTitle icon={<User size={16} />} title={<CustomTitle />} />
 * ```
 *
 * @returns {React.ReactElement} A styled section title in a card with icon
 */
export function SectionTitle({
  icon,
  title,
}: {
  icon: React.ReactNode;
  title: React.ReactNode;
}): React.ReactElement {
  return (
    <Card className="mb-4 border-2 border-primary/30 bg-card">
      <CardHeader className="py-2 px-4">
        <CardTitle className="text-lg font-semibold text-primary uppercase tracking-wider flex items-center gap-2">
          {icon} {title}
        </CardTitle>
      </CardHeader>
    </Card>
  );
}
