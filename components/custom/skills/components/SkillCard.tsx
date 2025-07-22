/**
 * SkillCard Component
 *
 * Renders an individual skill with details including:
 * - Skill name and icon
 * - Proficiency level visualization
 * - Years of experience
 * - Learning status indicators
 * - Skill description
 * - Link to official resource
 *
 * Using shadcn/ui Card components for a consistent design system.
 */

import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import { Skill } from "@/data/skills.data";
import { ArrowUpRight, BookOpen, GraduationCap } from "lucide-react";
import Link from "next/link";

interface SkillCardProps {
	skill: Skill;
	index: number;
}

export function SkillCard({ skill, index }: SkillCardProps) {
	const Icon = skill.icon;

	const animationDelay = {
		animationDelay: `${index * 100}ms`,
	};

	// Helper to get learning status element
	const getLearningStatusElement = () => {
		if (!skill.learningStatus) return null;

		return skill.learningStatus === "learning" ? (
			<span className="flex items-center text-xs font-medium text-amber-600 dark:text-amber-300">
				<BookOpen className="mr-1 h-3 w-3" />
				Currently learning
			</span>
		) : (
			<span className="flex items-center text-xs font-medium text-blue-600 dark:text-blue-300">
				<GraduationCap className="mr-1 h-3 w-3" />
				Basic knowledge
			</span>
		);
	};

	// Helper to determine if icon needs special handling in dark mode
	const isDarkIcon = ["nextjs", "vercel", "github", "express"].includes(skill.id);

	// Determine if this is a programming language skill by checking the categories array
	const isProgrammingLanguage =
		skill.category === "languages" || (skill.relatedCategories?.includes("languages") ?? false);

	// Function to enhance colors for programming language icons in dark mode
	const getEnhancedIconColor = () => {
		if (isDarkIcon) return "dark:text-gray-900";

		if (isProgrammingLanguage) {
			// Extract the color and make it more vibrant
			const colorClass = skill.color.dark.replace("text-", "");
			return `dark:text-${colorClass}`;
		}

		return skill.color.dark;
	};

	return (
		<Card
			className="group border-border relative m-1 overflow-hidden border-4 transition-all duration-300 hover:shadow-lg"
			style={animationDelay}
		>
			<CardHeader className="pt-4 pb-0">
				{/* Header: Icon, Title and Experience */}
				<div className="flex flex-row justify-between">
					<div className="flex items-center space-x-3">
						<div
							className={`rounded-lg p-2.5 ${
								isProgrammingLanguage
									? "bg-white dark:bg-gray-200"
									: isDarkIcon
										? "bg-white dark:bg-gray-300/90"
										: "bg-white dark:bg-gray-300/90"
							} border-2 border-gray-100 shadow-md transition-all duration-300 hover:shadow-lg dark:border-gray-300`}
						>
							<Icon className={`h-6 w-6 ${skill.color.light} ${getEnhancedIconColor()}`} />
						</div>
						<div>
							<CardTitle className="text-xl">{skill.name}</CardTitle>
							{/* Learning Status */}
							{getLearningStatusElement()}
						</div>
					</div>

					{/* Years Experience or Learning Badge */}
					<div className="flex flex-col items-end">
						{skill.learningStatus === "learning" ? (
							<span className="flex items-center gap-1 rounded-md border border-amber-200 bg-white px-2.5 py-1.5 text-sm font-medium text-amber-600 shadow-xs dark:border-amber-700/50 dark:bg-amber-900/20 dark:text-amber-300">
								<BookOpen className="h-4 w-4" />
							</span>
						) : null}
					</div>
				</div>
			</CardHeader>

			<CardContent className="pt-5">
				<CardDescription className="bg-card/50 border-border mb-5 h-auto rounded-md border p-4 text-sm leading-relaxed text-gray-600 shadow-xs dark:bg-gray-700/30 dark:text-gray-300">
					{skill.description}
				</CardDescription>
			</CardContent>

			<CardFooter className="flex justify-end pt-0">
				<Link
					href={skill.officialUrl}
					target="_blank"
					rel="noopener noreferrer"
					className={`flex items-center gap-1 text-sm ${skill.color.light} rounded-md border border-current bg-white px-3.5 py-2 font-medium shadow-xs transition-colors hover:bg-gray-50 dark:bg-gray-700/50 dark:text-white dark:hover:bg-gray-700/80`}
				>
					Visit
					<ArrowUpRight className="h-3.5 w-3.5" />
				</Link>
			</CardFooter>
		</Card>
	);
}
