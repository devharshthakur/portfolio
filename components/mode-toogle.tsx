"use client";
import { Button } from "@/components/ui/button";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

interface ModeToggleProps {
	className?: string;
}

export function ModeToggle({ className }: ModeToggleProps) {
	const [mounted, setMounted] = useState<boolean>(false);
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

	const IconComponent = mounted && resolvedTheme === "light" ? Sun : Moon;

	return (
		<Button
			variant="outline"
			size="icon"
			onClick={mounted ? toggleTheme : undefined}
			className={className}
		>
			{mounted ? <IconComponent /> : <div className="h-5 w-5" />}
			<span className="sr-only">Toggle theme</span>
		</Button>
	);
}
