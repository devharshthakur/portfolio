"use client";
import { COLOR_SCHEMES } from "@/components/custom/home/header/lib/constants";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

interface ModeToggleProps {
	className?: string;
	iconClassName?: string;
}

export function ModeToggle({ className, iconClassName }: ModeToggleProps) {
	const [mounted, setMounted] = useState(false);
	const { resolvedTheme, setTheme } = useTheme();

	useEffect(() => {
		setMounted(true);
	}, []);

	const toggleTheme = () => {
		if (resolvedTheme === "light") {
			setTheme("dark");
		} else {
			setTheme("light");
		}
	};

	const colorScheme = COLOR_SCHEMES.teal;
	const buttonClasses = cn("border-teal-300 dark:border-teal-700", colorScheme.hover, className);

	const iconClasses = cn("h-[1.2rem] w-[1.2rem] transition-all", iconClassName || colorScheme.icon);

	const IconComponent = mounted && resolvedTheme === "light" ? Sun : Moon;

	return (
		<Button
			variant="outline"
			size="icon"
			onClick={mounted ? toggleTheme : undefined}
			className={buttonClasses}
		>
			<IconComponent className={iconClasses} />
			<span className="sr-only">Toggle theme</span>
		</Button>
	);
}
