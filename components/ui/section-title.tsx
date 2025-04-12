import { ReactNode } from "react";
import { cn } from "@/lib/utils";

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
      <h2 className="relative px-4 py-2 text-xl md:text-2xl font-bold font-mono inline-flex items-center gap-2">
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
