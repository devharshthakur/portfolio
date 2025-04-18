/**
 * ProficiencyBar Component
 *
 * A simplified progress bar component that shows skill proficiency levels with a single fixed color.
 */
import { useState, useEffect } from "react";

interface ProficiencyBarProps {
  proficiency: number;
  maxLevel?: number;
  className?: string;
  animated?: boolean;
}

export function ProficiencyBar({
  proficiency,
  maxLevel = 5,
  className = "",
  animated = true,
}: ProficiencyBarProps) {
  const [width, setWidth] = useState<number>(0);

  // Animate the progress bar on mount
  useEffect(() => {
    // Ensure proficiency is within valid range
    const validProficiency = Math.max(0, Math.min(proficiency, maxLevel));

    const calculateWidth = () => {
      // Always show at least 5% for zero proficiency
      return validProficiency === 0 ? 5 : (validProficiency / maxLevel) * 100;
    };

    if (animated) {
      const timer = setTimeout(() => {
        setWidth(calculateWidth());
      }, 300);
      return () => clearTimeout(timer);
    } else {
      setWidth(calculateWidth());
    }
  }, [proficiency, maxLevel, animated]);

  // Simple mapping of proficiency level to label
  const getLabel = (): string => {
    if (proficiency === 0) return "Not Started";
    if (proficiency === maxLevel) return "Expert";
    if (proficiency >= maxLevel * 0.8) return "Advanced";
    if (proficiency >= maxLevel * 0.6) return "Intermediate";
    if (proficiency >= maxLevel * 0.4) return "Basic";
    return "Beginner";
  };

  // Define the single fixed color for the progress bar
  const fixedProgressColor = "bg-red-500";
  const fixedDarkProgressColor = "dark:bg-red-400";

  return (
    <div className={`w-full ${className}`}>
      <div className="flex justify-between items-center mb-1.5 text-xs">
        <span className="font-semibold text-gray-700 dark:text-white bg-white dark:bg-gray-700/80 px-3 py-1.5 rounded-md shadow-sm">
          {getLabel()}
        </span>
        <span className="text-gray-600 dark:text-white bg-white dark:bg-gray-700/80 px-3 py-1.5 rounded-md shadow-sm">
          {proficiency}/{maxLevel}
        </span>
      </div>
      <div className="relative w-full h-3 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden shadow-inner">
        <div
          className={`absolute left-0 top-0 h-full ${fixedProgressColor} ${fixedDarkProgressColor} rounded-full shadow-sm transition-all duration-1000 ease-out`}
          style={{ width: `${width}%` }}
        />
      </div>
    </div>
  );
}
