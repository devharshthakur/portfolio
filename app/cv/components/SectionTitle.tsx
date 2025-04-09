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
 * @param {string} [props.colorClassName] - Optional CSS class name for custom border and text colors
 *
 * @example
 * ```tsx
 * <SectionTitle icon={<User size={16} />} title="Profile" />
 * // With custom color
 * <SectionTitle icon={<User size={16} />} title="Profile" colorClassName="border-yellow-400 text-yellow-700 dark:border-yellow-600 dark:text-yellow-400" />
 * ```
 *
 * @returns {React.ReactElement} A styled section title in a card with icon
 */
export function SectionTitle({
  icon,
  title,
  colorClassName = "border-primary/30 text-primary",
}: {
  icon: React.ReactNode;
  title: React.ReactNode;
  colorClassName?: string;
}): React.ReactElement {
  return (
    <Card className={`mb-4 border-2 ${colorClassName} bg-card`}>
      <CardHeader className="py-2 px-4">
        <CardTitle className="text-lg font-semibold uppercase tracking-wider flex items-center gap-2">
          {icon} {title}
        </CardTitle>
      </CardHeader>
    </Card>
  );
}
