import { Badge } from '@/components/ui/badge';
import { cn } from '@/lib/utils';
import { getTechTagColors } from '@/components/custom/home/project-section/lib/tech-colors';

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
        'font-mono text-[10px] xs:text-xs px-1.5 py-0.5 sm:px-2 border',
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
