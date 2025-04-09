import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface SectionTitleProps {
  children: ReactNode;
  className?: string;
  icon?: ReactNode;
}

export function SectionTitle({ children, className, icon }: SectionTitleProps) {
  return (
    <div className={cn("flex items-center", className)}>
      <h2 className="relative px-4 py-2 text-xl md:text-2xl font-bold font-mono inline-flex items-center gap-2 before:absolute before:inset-0 before:bg-primary/10 before:rounded-md before:-z-10 before:border-l-4 before:border-primary">
        {icon && <span className="flex items-center">{icon}</span>}
        {children}
      </h2>
    </div>
  );
}
