import { getTechTagColors } from "@/components/custom/home/project-section/lib/tech-colors";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

interface TechBadgeProps {
	tech: string;
	className?: string;
}

/**
 * TechBadge component for project cards
 * Applies color coding to tech stack tags based on the technology name
 *
 * @param tech - The technology name to display
 * @param className - Optional additional CSS classes
 */
export function TechBadge({ tech, className }: TechBadgeProps) {
	const colors = getTechTagColors(tech);

	return (
		<Badge
			variant="secondary"
			className={cn(
				"xs:text-xs border px-1.5 py-0.5 font-mono text-[10px] sm:px-2",
				colors.background,
				colors.text,
				colors.border,
				colors.hover,
				className,
			)}
		>
			{tech}
		</Badge>
	);
}
