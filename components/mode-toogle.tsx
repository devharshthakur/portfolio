"use client";
import * as React from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";

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
  if (!mounted) {
    return (
      <Button
        variant="outline"
        size="icon"
        className="border-teal-300 dark:border-teal-700 hover:bg-teal-50 dark:hover:bg-teal-900/30 hover:text-teal-600 dark:hover:text-teal-400"
      >
        <Sun className="h-[1.2rem] w-[1.2rem] transition-all text-teal-500 dark:text-teal-400" />
        <span className="sr-only">Toggle theme</span>
      </Button>
    );
  }

  return (
    <Button
      variant="outline"
      size="icon"
      onClick={toggleTheme}
      className="border-teal-300 dark:border-teal-700 hover:bg-teal-50 dark:hover:bg-teal-900/30 hover:text-teal-600 dark:hover:text-teal-400"
    >
      {resolvedTheme === "light" ? (
        <Sun className="h-[1.2rem] w-[1.2rem] transition-all text-teal-500 dark:text-teal-400" />
      ) : (
        <Moon className="h-[1.2rem] w-[1.2rem] transition-all text-teal-500 dark:text-teal-400" />
      )}
      <span className="sr-only">Toggle theme</span>
    </Button>
  );
}
