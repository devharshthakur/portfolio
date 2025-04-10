"use client";
import * as React from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { useState, useEffect } from "react";
import { COLOR_SCHEMES } from "@/components/custom/header/lib/constants";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

export function ModeToggle() {
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
  const buttonClasses = cn(
    "border-teal-300 dark:border-teal-700",
    colorScheme.hover,
  );

  const IconComponent = mounted && resolvedTheme === "light" ? Sun : Moon;

  return (
    <Button
      variant="outline"
      size="icon"
      onClick={mounted ? toggleTheme : undefined}
      className={buttonClasses}
    >
      <IconComponent
        className={cn("h-[1.2rem] w-[1.2rem] transition-all", colorScheme.icon)}
      />
      <span className="sr-only">Toggle theme</span>
    </Button>
  );
}
