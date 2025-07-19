import { TableCell, TableRow } from "@/components/ui/table";
import { Link as LinkIcon } from "lucide-react";
import Link from "next/link";
import React from "react";

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
 * @param {string} [props.colorScheme="blue"] - Color scheme to use for styling
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
	colorScheme = "blue",
}: {
	title: string;
	description: string;
	link: string;
	colorScheme?: "blue" | "rose";
}): React.ReactElement {
	const hoverBgClass =
		colorScheme === "blue"
			? "hover:bg-blue-50/50 dark:hover:bg-blue-950/10"
			: "hover:bg-rose-50/50 dark:hover:bg-rose-950/10";

	const iconClass =
		colorScheme === "blue"
			? "text-blue-600 dark:text-blue-400"
			: "text-rose-600 dark:text-rose-400";

	const linkHoverClass =
		colorScheme === "blue"
			? "hover:text-blue-700 dark:hover:text-blue-400"
			: "hover:text-rose-700 dark:hover:text-rose-400";

	return (
		<TableRow className={hoverBgClass}>
			<TableCell className="py-1.5">
				<div className="mb-0.5 flex items-start gap-2">
					<LinkIcon size={14} className={`${iconClass} mt-1`} />
					<div>
						<Link
							href={link}
							target="_blank"
							rel="noopener noreferrer"
							className={`font-medium text-slate-800 dark:text-slate-200 ${linkHoverClass} block hover:underline`}
							prefetch={true}
						>
							{title}
						</Link>
						<p className="max-w-full overflow-hidden text-sm break-words text-ellipsis whitespace-normal text-slate-600 dark:text-slate-400">
							{description}
						</p>
					</div>
				</div>
			</TableCell>
		</TableRow>
	);
}
