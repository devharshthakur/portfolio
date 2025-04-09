import React from "react";
import { TableRow, TableCell } from "@/components/ui/table";
import Link from "next/link";
import { Link as LinkIcon } from "lucide-react";

/**
 * ProjectTableRow Component
 *
 * @description A reusable table row component for displaying project information in a table format.
 * Used for both projects and NPM packages sections in the CV. It displays a title with a link,
 * followed by a description, all in a styled table row with consistent formatting.
 *
 * @component
 * @param {Object} props - Component props
 * @param {string} props.title - The project or package title
 * @param {string} props.description - Brief description of the project or package
 * @param {string} props.link - URL to the project repository or package
 *
 * @example
 * ```tsx
 * <ProjectTableRow
 *   title="Project Name"
 *   description="A brief description of the project"
 *   link="https://github.com/username/project"
 * />
 * ```
 *
 * @returns {React.ReactElement} A table row displaying project information with a link
 */
export function ProjectTableRow({
  title,
  description,
  link,
}: {
  title: string;
  description: string;
  link: string;
}): React.ReactElement {
  return (
    <TableRow>
      <TableCell>
        <div className="flex items-start gap-2 mb-0.5">
          <LinkIcon size={14} className="text-muted-foreground mt-1" />
          <div>
            <Link
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium text-foreground hover:text-primary hover:underline block"
              prefetch={true}
            >
              {title}
            </Link>
            <p className="text-sm text-muted-foreground">{description}</p>
          </div>
        </div>
      </TableCell>
    </TableRow>
  );
}
