import { cn } from "@/lib/utils";
import { ReactNode } from "react";

interface SectionTitleProps {
	children: ReactNode;
	className?: string;
	backgroundClassName?: string;
	borderClassName?: string;
	icon?: ReactNode;
}

export function SectionTitle({
	children,
	className,
	backgroundClassName,
	borderClassName,
	icon,
}: SectionTitleProps) {
	return (
		<div className={cn("flex items-center", className)}>
			<h2 className="relative inline-flex items-center gap-2 px-4 py-2 font-mono text-xl font-bold md:text-2xl">
				<span
					className={cn(
						"absolute inset-0 -z-10 rounded-md border-l-4",
						backgroundClassName || "bg-primary/10",
						borderClassName || "border-primary",
					)}
				></span>
				{icon && <span className="flex items-center">{icon}</span>}
				{children}
			</h2>
		</div>
	);
}
