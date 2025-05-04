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
    <div className="mb-3">
      <div className={`flex items-center gap-2 ${colorClassName}`}>
        <div
          className={`w-7 h-7 rounded-md flex items-center justify-center bg-white dark:bg-background border ${colorClassName.split(" ")[0]} shadow-sm`}
        >
          {icon}
        </div>
        <h2 className="text-lg font-semibold uppercase tracking-wider">
          {title}
        </h2>
      </div>
      <div
        className={`mt-1 h-0.5 w-full bg-gradient-to-r ${
          colorClassName.includes("yellow")
            ? "from-yellow-400 to-transparent"
            : colorClassName.includes("blue")
              ? "from-blue-400 to-transparent"
              : colorClassName.includes("green")
                ? "from-green-400 to-transparent"
                : colorClassName.includes("amber")
                  ? "from-amber-400 to-transparent"
                  : colorClassName.includes("indigo")
                    ? "from-indigo-400 to-transparent"
                    : colorClassName.includes("purple")
                      ? "from-purple-400 to-transparent"
                      : colorClassName.includes("rose")
                        ? "from-rose-400 to-transparent"
                        : "from-primary to-transparent"
        } 
        dark:${
          colorClassName.includes("yellow")
            ? "from-yellow-600"
            : colorClassName.includes("blue")
              ? "from-blue-600"
              : colorClassName.includes("green")
                ? "from-green-600"
                : colorClassName.includes("amber")
                  ? "from-amber-600"
                  : colorClassName.includes("indigo")
                    ? "from-indigo-600"
                    : colorClassName.includes("purple")
                      ? "from-purple-600"
                      : colorClassName.includes("rose")
                        ? "from-rose-600"
                        : "from-primary"
        } dark:to-transparent`}
      />
    </div>
  );
}
