"use client";

import { motion } from "motion/react";
import { Icons } from "@/data/icons/icon.export";

interface SkillItemProps {
  skill: {
    name: string;
    icon: keyof typeof Icons;
  };
}

export function SkillItem({ skill }: SkillItemProps) {
  const IconComponent = Icons[skill.icon];

  // Generate a consistent color based on skill name for border
  const getBorderColor = (skillName: string): string => {
    const nameHash = skillName
      .split("")
      .reduce((acc, char) => acc + char.charCodeAt(0), 0);
    const borderColors = [
      "border-blue-400 dark:border-blue-600",
      "border-green-400 dark:border-green-600",
      "border-yellow-400 dark:border-yellow-600",
      "border-red-400 dark:border-red-600",
      "border-purple-400 dark:border-purple-600",
      "border-pink-400 dark:border-pink-600",
      "border-indigo-400 dark:border-indigo-600",
      "border-teal-400 dark:border-teal-600",
      "border-orange-400 dark:border-orange-600",
      "border-cyan-400 dark:border-cyan-600",
    ];
    return borderColors[nameHash % borderColors.length];
  };

  return (
    <motion.div
      className={`flex flex-col items-center gap-2 rounded-md border-2 p-3 bg-background/50 dark:bg-background/20 shadow-sm ${getBorderColor(skill.name)}`}
      whileHover={{
        scale: 1.05,
        boxShadow: "0 0 12px rgba(0, 0, 0, 0.15)",
      }}
      transition={{ type: "spring", stiffness: 300 }}
    >
      {IconComponent && <IconComponent className="h-8 w-8 text-primary" />}
      <span className="text-sm font-medium">{skill.name}</span>
    </motion.div>
  );
}
